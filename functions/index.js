// Brainsmith alerts: watches games and sends push alerts through Firebase Cloud Messaging.
import { onDocumentUpdated, onDocumentWritten, onDocumentCreated } from 'firebase-functions/v2/firestore';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { getMessaging } from 'firebase-admin/messaging';
import { getAuth } from 'firebase-admin/auth';
import { alertsFor, render } from './alerts.js';
import { moveGame, scrubGame } from './account.js';

initializeApp();
const db = getFirestore();
const SITE = 'https://playbrainsmith.com/';

export const gameAlerts = onDocumentUpdated({ document: 'games/{code}', region: 'us-central1' }, async (event) => {
  const before = event.data?.before.data();
  const after = event.data?.after.data();
  const code = event.params.code;
  const alerts = alertsFor(before, after);
  if (!alerts.length) return;

  // Look up each player's devices once.
  const uids = [...new Set(alerts.flatMap((a) => a.uids))];
  const snaps = await Promise.all(uids.map((u) => db.doc(`pushTokens/${u}`).get()));
  const tokensOf = Object.fromEntries(snaps.map((s, i) => [uids[i], s.exists ? (s.data().tokens || []) : []]));

  for (const alert of alerts) {
    const { title, body } = render(alert);
    const target = alert.code || code;
    for (const uid of alert.uids) {
      const tokens = tokensOf[uid];
      if (!tokens?.length) continue;
      const res = await getMessaging().sendEachForMulticast({
        tokens,
        data: { title, body, url: `${SITE}?g=${target}`, tag: `${target}-${alert.kind}` },
        webpush: { headers: { Urgency: 'high', TTL: String(60 * 60 * 24) } },
      });
      // Forget devices that uninstalled or turned alerts off.
      const dead = res.responses
        .map((r, i) => (!r.success && /registration-token-not-registered|invalid-registration-token|invalid-argument/.test(r.error?.code || '') ? tokens[i] : null))
        .filter(Boolean);
      if (dead.length) await db.doc(`pushTokens/${uid}`).update({ tokens: FieldValue.arrayRemove(...dead) });
    }
  }
});

// ---------- accounts ----------
const gamesOf = (uid) => db.collection('games').where('order', 'array-contains', uid).get();

// Signed in on a phone that had been playing as a guest: bring the guest's games, alerts and
// name into the account, then remove the guest. The guest proves itself with its own sign-in token.
export const accountMerge = onDocumentWritten({ document: 'merges/{uid}', region: 'us-central1' }, async (event) => {
  const after = event.data?.after;
  const req = after?.data();
  if (!req?.anonToken) return;
  const to = event.params.uid;
  let from;
  try {
    const t = await getAuth().verifyIdToken(req.anonToken);
    if (t.firebase?.sign_in_provider !== 'anonymous' || t.uid === to) throw new Error('not a guest');
    from = t.uid;
  } catch (e) {
    await after.ref.set({ done: true, moved: 0, error: 'bad-token', at: FieldValue.serverTimestamp() });
    return;
  }

  let moved = 0;
  const games = await gamesOf(from);
  for (const gdoc of games.docs) {
    const ok = await db.runTransaction(async (tx) => {
      const snap = await tx.get(gdoc.ref);
      const next = moveGame(snap.data(), from, to);
      if (!next) return false;
      // Secret words for each round move too.
      const subs = [];
      for (let r = 1; r <= (next.round || 1); r++) {
        const s = await tx.get(gdoc.ref.collection('rounds').doc(String(r)).collection('subs').doc(from));
        if (s.exists) subs.push(s);
      }
      tx.set(gdoc.ref, next);
      for (const s of subs) {
        tx.set(s.ref.parent.doc(to), s.data());
        tx.delete(s.ref);
      }
      return true;
    });
    if (ok) moved++;
  }

  // Alerts and profile.
  const [tokA, tokB, profA, profB] = await Promise.all([
    db.doc(`pushTokens/${to}`).get(), db.doc(`pushTokens/${from}`).get(),
    db.doc(`users/${to}`).get(), db.doc(`users/${from}`).get(),
  ]);
  const tokens = [...new Set([...(tokA.data()?.tokens || []), ...(tokB.data()?.tokens || [])])];
  if (tokens.length) await db.doc(`pushTokens/${to}`).set({ tokens, at: FieldValue.serverTimestamp() }, { merge: true });
  if (profB.exists) {
    const a = profA.data() || {};
    const b = profB.data();
    await db.doc(`users/${to}`).set({
      name: a.name || b.name || '',
      blocked: [...new Set([...(a.blocked || []), ...(b.blocked || [])])],
    }, { merge: true });
  }
  await Promise.all([db.doc(`pushTokens/${from}`).delete(), db.doc(`users/${from}`).delete()]);
  try { await getAuth().deleteUser(from); } catch { /* already gone */ }

  await after.ref.set({ done: true, moved, at: FieldValue.serverTimestamp() });
});

// "Delete my account": take their name out of every game, drop their alerts and profile, then the account itself.
export const accountDelete = onDocumentCreated({ document: 'deletions/{uid}', region: 'us-central1' }, async (event) => {
  const uid = event.params.uid;
  const games = await gamesOf(uid);
  for (const gdoc of games.docs) {
    await db.runTransaction(async (tx) => {
      const snap = await tx.get(gdoc.ref);
      const update = scrubGame(snap.data(), uid);
      if (update) tx.update(gdoc.ref, update);
    });
  }
  await Promise.all(['pushTokens', 'users', 'merges'].map((c) => db.doc(`${c}/${uid}`).delete()));
  try { await getAuth().deleteUser(uid); } catch { /* already gone */ }
  await event.data.ref.delete();
});

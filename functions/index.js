// Brainsmith alerts: watches games and sends push alerts through Firebase Cloud Messaging.
import { onDocumentUpdated } from 'firebase-functions/v2/firestore';
import { initializeApp } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { getMessaging } from 'firebase-admin/messaging';
import { alertsFor, render } from './alerts.js';

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

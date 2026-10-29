// Sign-in. Everyone starts as a guest (no sign-up needed to play). Signing in keeps the same player
// when possible; when the account already exists (signed in on another phone), we switch to it and
// the server moves this phone's guest games into it.
import {
  GoogleAuthProvider, EmailAuthProvider, linkWithPopup, linkWithRedirect, linkWithCredential,
  signInWithCredential, signInWithEmailAndPassword, sendPasswordResetEmail, getRedirectResult, signOut,
} from 'firebase/auth';
import { doc, setDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';

const standalone = () => navigator.standalone === true || matchMedia('(display-mode: standalone)').matches;
const google = () => { const p = new GoogleAuthProvider(); p.setCustomParameters({ prompt: 'select_account' }); return p; };

// Ask the server to bring the guest's games into the account we just switched to.
async function requestMerge(db, uid, anonToken) {
  if (!anonToken) return;
  await setDoc(doc(db, 'merges', uid), { anonToken, at: serverTimestamp() });
}

// Calls back once the server has moved everything (or right away if there was nothing to move).
export function watchMerge(db, uid, done) {
  let stop = null;
  const timer = setTimeout(() => { stop?.(); done(0); }, 20000);
  stop = onSnapshot(doc(db, 'merges', uid), (snap) => {
    const d = snap.data();
    if (d?.done) { clearTimeout(timer); stop?.(); done(d.moved || 0); }
  }, () => { clearTimeout(timer); done(0); });
  return stop;
}

async function guestToken(auth) {
  const u = auth.currentUser;
  return u?.isAnonymous ? u.getIdToken() : null;
}

// Switch to an existing account, keeping this phone's guest games.
async function switchTo(auth, db, signIn) {
  const token = await guestToken(auth);
  const cred = await signIn();
  await requestMerge(db, cred.user.uid, token);
  return { status: token ? 'switched' : 'signed-in', uid: cred.user.uid };
}

export async function googleSignIn(auth, db) {
  const user = auth.currentUser;
  // Home Screen apps can't open pop-ups, so they go to Google and come back.
  if (standalone()) { await linkWithRedirect(user, google()); return { status: 'redirecting' }; }
  try {
    await linkWithPopup(user, google());
    return { status: 'linked', uid: user.uid };
  } catch (e) {
    if (e.code === 'auth/credential-already-in-use') {
      const cred = GoogleAuthProvider.credentialFromError(e);
      return switchTo(auth, db, () => signInWithCredential(auth, cred));
    }
    if (e.code === 'auth/popup-blocked' || e.code === 'auth/operation-not-supported-in-this-environment') {
      await linkWithRedirect(user, google());
      return { status: 'redirecting' };
    }
    throw e;
  }
}

// Back from Google (Home Screen app). Null when we weren't coming back from anything.
export async function finishRedirect(auth, db) {
  try {
    const res = await getRedirectResult(auth);
    return res ? { status: 'linked', uid: res.user.uid } : null;
  } catch (e) {
    if (e.code === 'auth/credential-already-in-use') {
      const cred = GoogleAuthProvider.credentialFromError(e);
      return switchTo(auth, db, () => signInWithCredential(auth, cred));
    }
    throw e;
  }
}

export async function emailCreate(auth, email, password) {
  await linkWithCredential(auth.currentUser, EmailAuthProvider.credential(email.trim(), password));
  return { status: 'linked', uid: auth.currentUser.uid };
}

export function emailSignIn(auth, db, email, password) {
  return switchTo(auth, db, () => signInWithEmailAndPassword(auth, email.trim(), password));
}

export const resetPassword = (auth, email) => sendPasswordResetEmail(auth, email.trim());

export const signOutNow = (auth) => signOut(auth);

// The server takes the name out of every game, drops alerts and the profile, and deletes the account.
export async function requestDelete(db, uid) {
  await setDoc(doc(db, 'deletions', uid), { at: serverTimestamp() });
}

// What to show for the signed-in account, or null for a guest.
export function accountOf(user) {
  if (!user || user.isAnonymous) return null;
  const google = user.providerData.some((p) => p.providerId === 'google.com');
  return { email: user.email || user.providerData.find((p) => p.email)?.email || '', google };
}

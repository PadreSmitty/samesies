// Turn-based alerts (web push through Firebase Cloud Messaging).
import { getMessaging, getToken, deleteToken } from 'firebase/messaging';
import { doc, setDoc, updateDoc, arrayUnion, arrayRemove, serverTimestamp } from 'firebase/firestore';
import { VAPID_KEY } from './firebase-config.js';

const OFF_KEY = 'samesies.alertsOff';
const isIOS = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const standalone = () => navigator.standalone === true || matchMedia('(display-mode: standalone)').matches;

// 'yes' = can turn on here, 'ios-install' = iPhone needs Add to Home Screen first, 'no' = not possible
export function alertSupport() {
  if (!VAPID_KEY) return 'no';
  if (isIOS() && !standalone()) return 'ios-install';
  if ('Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window) return 'yes';
  return 'no';
}

export const alertPermission = () => ('Notification' in window ? Notification.permission : 'default');
export const alertsOn = () => alertSupport() === 'yes' && alertPermission() === 'granted' && localStorage.getItem(OFF_KEY) !== '1';

async function token(fb) {
  const reg = await navigator.serviceWorker.register('sw.js');
  await navigator.serviceWorker.ready;
  return getToken(getMessaging(fb), { vapidKey: VAPID_KEY, serviceWorkerRegistration: reg });
}

// Ask (must run from a tap). Returns true when alerts are on.
export async function turnOnAlerts(fb, db, uid) {
  if (alertSupport() !== 'yes') return false;
  const perm = await Notification.requestPermission();
  if (perm !== 'granted') return false;
  try { localStorage.removeItem(OFF_KEY); } catch { /* private mode */ }
  const t = await token(fb);
  await setDoc(doc(db, 'pushTokens', uid), { tokens: arrayUnion(t), at: serverTimestamp() }, { merge: true });
  return true;
}

export async function turnOffAlerts(fb, db, uid) {
  try { localStorage.setItem(OFF_KEY, '1'); } catch { /* private mode */ }
  try {
    const t = await token(fb);
    await updateDoc(doc(db, 'pushTokens', uid), { tokens: arrayRemove(t) });
    await deleteToken(getMessaging(fb));
  } catch { /* nothing saved yet */ }
}

// On each visit: keep this device's address fresh (it can change).
export async function refreshAlerts(fb, db, uid) {
  if (!alertsOn()) return;
  try {
    const t = await token(fb);
    await setDoc(doc(db, 'pushTokens', uid), { tokens: arrayUnion(t), at: serverTimestamp() }, { merge: true });
  } catch (e) { console.warn('alerts refresh failed', e); }
}

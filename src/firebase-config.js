// Public web config for the Firebase project (safe to ship; access is controlled by firestore.rules).
export const firebaseConfig = {
  apiKey: 'AIzaSyAEbf9VBdvXdHUSlH0rZgHL7SmvXyAn_nM',
  authDomain: 'playbrainsmith.com',
  projectId: 'thesamesiesgame',
  storageBucket: 'thesamesiesgame.firebasestorage.app',
  messagingSenderId: '120235814862',
  appId: '1:120235814862:web:4f5762bc1a08d2f228059f',
};

// Web Push key from Firebase console > Project settings > Cloud Messaging > Web Push certificates.
// Alerts stay hidden until this is filled in.
export const VAPID_KEY = 'BBUQ64_JVKYcW-xtRMi77IaPskvgJtRW7ueEECgPOerrutMYWC2bY2rXyy1LVgggYOsMH5uNpIFEyfSQj1psYl4';

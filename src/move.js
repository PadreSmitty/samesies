// Moving day: the game is moving from its old addresses to playbrainsmith.com.
// Each web address keeps its own saved name and settings, so the old address hands them over.
// Import this first: it applies handed-over settings before anything else reads them.

export const NEW_HOME = 'https://playbrainsmith.com/';
// Old addresses: GitHub Pages, plus Firebase's own built-in addresses (they show the old name).
export const onOldSite = /(github\.io|\.web\.app|\.firebaseapp\.com)$/.test(location.hostname);

const KEYS = ['name', 'toured', 'muted'];
const key = (k) => 'samesies.' + k;

// New address: pick up what the old address handed over (in the link's #carry=...).
(function readCarry() {
  const m = location.hash.match(/^#carry=(.+)$/);
  if (!m) return;
  try {
    const data = JSON.parse(decodeURIComponent(m[1]));
    for (const k of KEYS) {
      if (data[k] == null) continue;
      if (k === 'name' && localStorage.getItem(key('name'))) continue; // never overwrite a name set here
      localStorage.setItem(key(k), k === 'muted' ? String(data[k]) : JSON.stringify(data[k]));
    }
  } catch { /* bad link or private mode: just start fresh */ }
  history.replaceState(null, '', location.pathname + location.search);
})();

// Old address: only send people over once the new address is really up.
export async function newHomeLive() {
  try {
    const r = await fetch(NEW_HOME + 'live.json', { cache: 'no-store' });
    return r.ok && (await r.json()).live === true;
  } catch { return false; }
}

export function carryUrl(code) {
  const data = {};
  try { for (const k of KEYS) { const v = localStorage.getItem(key(k)); if (v !== null) data[k] = k === 'muted' ? v : JSON.parse(v); } } catch { /* private mode */ }
  const u = new URL(NEW_HOME);
  if (code) u.searchParams.set('g', code);
  u.hash = 'carry=' + encodeURIComponent(JSON.stringify(data));
  return u.href;
}

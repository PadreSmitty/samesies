// Pure game rules, no Firebase. Kept separate so they can be tested on their own.

export const MIN_PLAYERS = 2;
export const MAX_PLAYERS = 5;

const CODE_LETTERS = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // no I or O, they look like 1 and 0

export function makeCode() {
  let code = '';
  for (let i = 0; i < 4; i++) code += CODE_LETTERS[Math.floor(Math.random() * CODE_LETTERS.length)];
  return code;
}

// Simple English plural -> singular, applied per word.
function singular(w) {
  if (w.length <= 3) return w;
  if (w.endsWith('ies') && w.length > 4) return w.slice(0, -3) + 'y';
  if (/(ss|x|z|ch|sh)es$/.test(w)) return w.slice(0, -2);
  if (w.endsWith('s') && !w.endsWith('ss') && !w.endsWith('us') && !w.endsWith('is')) return w.slice(0, -1);
  return w;
}

// "  The Borders! " and "border" both become "border"; "Adam & Eve" stays distinct from "Adam".
export function normalize(word) {
  return String(word)
    .toLowerCase()
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .filter((w, i, all) => !(i === 0 && all.length > 1 && (w === 'the' || w === 'a' || w === 'an')))
    .map(singular)
    .join(' ');
}

export function cleanWord(word) {
  return String(word).trim().replace(/\s+/g, ' ').slice(0, 40);
}

export function isUsed(word, usedNorms) {
  return (usedNorms || []).includes(normalize(word));
}

// subs: [{ norm }]. Everyone has to land on the same word.
export function allMatch(subs) {
  return subs.length >= MIN_PLAYERS && subs.every((s) => s.norm === subs[0].norm);
}

function editDistance(a, b) {
  const prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let diag = prev[0];
    prev[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const up = prev[j];
      prev[j] = Math.min(prev[j] + 1, prev[j - 1] + 1, diag + (a[i - 1] === b[j - 1] ? 0 : 1));
      diag = up;
    }
  }
  return prev[b.length];
}

// Typos ("tennesse") and one answer inside the other ("cliff" / "cliff swaim").
// Short words need an exact match so cat and car never look close.
export function isClose(a, b) {
  const x = normalize(a);
  const y = normalize(b);
  if (x === y) return true;
  const shorter = Math.min(x.length, y.length);
  const d = editDistance(x, y);
  if (shorter >= 5 && d <= 1) return true;
  if (shorter >= 9 && d <= 2) return true;
  const xs = x.split(' ');
  const ys = y.split(' ');
  return xs.every((w) => ys.includes(w)) || ys.every((w) => xs.includes(w));
}

// The spelling most players used, for the win screen.
export function commonWord(words) {
  const counts = {};
  words.forEach((w) => { const k = normalize(w); counts[k] = (counts[k] || 0) + 1; });
  const top = Object.keys(counts).sort((p, q) => counts[q] - counts[p])[0];
  return words.find((w) => normalize(w) === top);
}

// Every answer is close to the most common one: worth suggesting a "Close enough?" vote.
export function nearlyMatch(words) {
  if (words.length < MIN_PLAYERS) return false;
  const top = commonWord(words);
  return words.every((w) => isClose(w, top)) && !words.every((w) => normalize(w) === normalize(top));
}

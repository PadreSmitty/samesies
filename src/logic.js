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

// Packs: a pack only deals the starting words (one different word per player in round 1).
// After that, anything goes. Each pack also brings its own look, sounds and win shouts.
// Names, blurbs and shouts live in strings.js (T.packs); words live in src/packs/.
import { ZOO_WORDS } from './packs/zoo-words.js';
import { SPORTS_WORDS } from './packs/sports-words.js';
import { MONSTERS_WORDS } from './packs/monsters-words.js';
import { NINETIES_WORDS } from './packs/nineties-words.js';

export const PACKS = {
  open: { id: 'open', art: 'logo', free: true },
  daily: { id: 'daily', art: 'bolts', free: true },
  zoo: {
    id: 'zoo', art: 'zoo-art', logo: 'zoo-logo', free: true, words: ZOO_WORDS,
    confetti: ['#F2A33A', '#E0567A', '#58A86B', '#EAF4E9', '#2F7A4C'],
  },
  sports: {
    id: 'sports', art: 'sports-art', logo: 'sports-logo', free: true, words: SPORTS_WORDS,
    confetti: ['#FFB21E', '#E23A4E', '#23A35A', '#F4F1E6', '#FFFFFF'],
  },
  // Plus packs. "draft" packs only show up in Plus preview until Smitty approves them.
  monsters: {
    id: 'monsters', art: 'monsters-art', logo: 'monsters-logo', plus: true, words: MONSTERS_WORDS,
    confetti: ['#86D23A', '#FFC23D', '#7A3CE0', '#FFF6E0', '#A3203A'],
  },
  nineties: {
    id: 'nineties', art: 'nineties-art', logo: 'nineties-logo', plus: true, draft: true, words: NINETIES_WORDS,
    confetti: ['#FF2E93', '#14C8C8', '#FFE14D', '#7B3FF2', '#111111'],
  },
};

// The picker order: free packs, then Plus packs.
export const PICKER = ['open', 'zoo', 'sports', 'daily'];
export const PLUS_PICKER = ['monsters', 'nineties'];

// Packs with their own look (the rest use the regular Brainsmith colors).
export const skinOf = (g) => (g && PACKS[g.pack]?.logo ? g.pack : null);

// Deal n different words. Every deal gets at least one word everyone knows, so there's always
// something to bridge toward.
export function deal(words, n, rand = Math.random) {
  const idx = words.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  const picked = idx.slice(0, n).map((i) => words[i]);
  if (n > 1 && picked.every((w) => w.def)) {
    const known = words.filter((w) => !w.def);
    if (known.length) picked[n - 1] = known[Math.floor(rand() * known.length)];
  }
  return picked.map((w) => (w.def ? { word: w.word, def: w.def } : { word: w.word, def: '' }));
}

// A random win shout, never the same one twice in a row.
export function pickShout(shouts, last, rand = Math.random) {
  if (!shouts?.length) return null;
  const pool = shouts.length > 1 ? shouts.filter((s) => s !== last) : shouts;
  return pool[Math.floor(rand() * pool.length)];
}

// A light family-friendly filter for names and words. It only catches the strong stuff
// (slurs and the worst swears), so "bat", "crazy" and "butt" are all still fair game.
// Words are checked whole, so "Scunthorpe" and "class" are fine.

const WHOLE = [
  'fuck', 'fucker', 'fucking', 'fucked', 'fuk', 'fck', 'motherfucker', 'shit', 'shitty', 'bullshit', 'shithead',
  'cunt', 'twat', 'bitch', 'bitches', 'asshole', 'dickhead', 'cocksucker', 'whore', 'slut',
  'bastard', 'wank', 'wanker', 'jizz', 'dildo', 'porn', 'porno', 'rape', 'rapist',
  'nigger', 'nigga', 'chink', 'spic', 'kike', 'wetback', 'gook', 'raghead', 'towelhead', 'beaner',
  'faggot', 'fag', 'dyke', 'tranny', 'retard', 'retarded',
];
// Caught anywhere inside a word, because nobody hides anything innocent inside these.
const INSIDE = ['fuck', 'shit', 'nigger', 'nigga', 'faggot'];

const WHOLE_SET = new Set(WHOLE);
const LEET = { 0: 'o', 1: 'i', 3: 'e', 4: 'a', 5: 's', 7: 't', '@': 'a', $: 's', '!': 'i' };

function squash(text) {
  return String(text).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[013457@$!]/g, (c) => LEET[c]);
}

export function isRude(text) {
  const s = squash(text);
  const words = s.split(/[^a-z]+/).filter(Boolean);
  const singular = (w) => (w.length > 3 && w.endsWith('s') ? w.slice(0, -1) : w);
  if (words.some((w) => WHOLE_SET.has(w) || WHOLE_SET.has(singular(w)))) return true;
  if (words.some((w) => INSIDE.some((bad) => w.includes(bad)))) return true;
  const joined = words.join('');
  // "f u c k" or "f.u.c.k"
  if (words.length > 2 && words.every((w) => w.length === 1) && WHOLE_SET.has(joined)) return true;
  return false;
}

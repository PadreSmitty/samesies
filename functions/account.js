// Account housekeeping that has to happen on the server: moving a guest's games into an account,
// and wiping someone's data when they delete their account. Pure functions here, Firebase in index.js.

export const MIN_PLAYERS = 2;
export const GONE_NAME = 'Gone player';

const isPlain = (v) => v !== null && typeof v === 'object' && Object.getPrototypeOf(v) === Object.prototype;

// Swap one player id for another everywhere in a game: map keys ("players.<uid>", "reactions.<round>_<uid>"),
// lists (order, removed) and plain values (hostUid, vote.by). Ids are long random strings, so a plain swap is safe.
// Timestamps and other special values are left exactly as they are.
export function swapUid(value, from, to) {
  if (typeof value === 'string') return value.split(from).join(to);
  if (Array.isArray(value)) return value.map((v) => swapUid(v, from, to));
  if (isPlain(value)) {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k.split(from).join(to), swapUid(v, from, to)]));
  }
  return value;
}

// Move a game from a guest id to an account id. Returns null when there's nothing to do
// (the guest isn't in it, or the account is already playing in the same game).
export function moveGame(game, from, to) {
  if (!game?.players?.[from] || game.players[to]) return null;
  return swapUid(game, from, to);
}

// Someone deleted their account: their name goes everywhere, and in a game still going with
// enough people left, they're taken out so the others can keep playing.
// Returns just the fields to update (so timestamps elsewhere in the game are never touched), or null.
export function scrubGame(game, uid, goneName = GONE_NAME) {
  if (!game?.players?.[uid]) return null;
  const rename = (w) => (w?.uid === uid ? { ...w, name: goneName } : w);
  const players = { ...game.players };
  let order = [...(game.order || [])];
  const submitted = { ...(game.submitted || {}) };
  const nudges = { ...(game.nudges || {}) };
  delete nudges[uid];
  const out = {
    history: (game.history || []).map((h) => ({ ...h, words: (h.words || []).map(rename) })),
    nudges,
  };
  const active = game.status === 'lobby' || game.status === 'playing';
  if (active && order.length > MIN_PLAYERS) {
    delete players[uid];
    delete submitted[uid];
    order = order.filter((u) => u !== uid);
    Object.assign(out, { players, order, submitted });
    if (game.hostUid === uid) out.hostUid = order[0];
    if (game.status === 'playing' && order.every((u) => submitted[u])) out.revealed = game.round;
  } else {
    players[uid] = { ...players[uid], name: goneName };
    out.players = players;
  }
  return out;
}

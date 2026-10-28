// Which alerts a game change should send, and what they say.
// Pure functions (no Firebase here) so they're easy to test and easy to reword.

const pick = (list) => list[Math.floor(Math.random() * list.length)];
const q = (w) => `“${w}”`;
const listNames = (names) => names.length <= 2 ? names.join(' and ') : names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
const rounds = (n) => `${n} round${n === 1 ? '' : 's'}`;

// ---------- the words (edit freely) ----------
export const LINES = {
  // Host started the game. Goes to everyone except the host.
  started: [
    ({ host }) => ({ title: 'The forge is lit 🔥', body: `${host} started the game. Pick any word in the known universe.` }),
    ({ host }) => ({ title: 'Game on!', body: `${host} just fired up Brainsmith. Your first word awaits.` }),
    ({ host }) => ({ title: 'Brains, assemble 🧠', body: `${host} started a game. Round one: say literally anything.` }),
  ],
  // Someone joined the lobby. Goes to the host.
  joined: [
    ({ name }) => ({ title: `${name} is in 👋`, body: 'Start when the crew is ready.' }),
    ({ name }) => ({ title: `${name} walked into the forge`, body: 'Tap Start when everyone’s here.' }),
  ],
  // Words were revealed, next round is open. Goes to everyone except the last one in (they saw it happen).
  reveal: [
    ({ words, round }) => ({ title: `${words} 🤔`, body: `Round ${round}: find the word in the middle.` }),
    ({ round }) => ({ title: 'The cards just flipped', body: `Come see what everyone said. Round ${round} needs your brain.` }),
    ({ words }) => ({ title: 'So close. Or not even close.', body: `${words}. Your move.` }),
    ({ round }) => ({ title: 'Anvil’s hot 🔨', body: `The words are out. Round ${round} is waiting on you.` }),
  ],
  // Everyone else is locked in. Goes to the one person still thinking.
  lastOne: [
    () => ({ title: 'Everyone’s waiting on you', body: 'No pressure. (Some pressure.)' }),
    ({ count }) => ({ title: `${count === 1 ? 'A whole brain is' : `${count} brains are`} staring at you 👀`, body: 'They’re all locked in. Your word, please.' }),
    () => ({ title: 'You’re the last brain standing', body: 'The whole crew is locked in. Take your time. (Please hurry.)' }),
    () => ({ title: 'The hammer is raised 🔨', body: 'Just waiting on your word to swing it.' }),
  ],
  // Someone tapped Nudge on you.
  nudge: [
    ({ from }) => ({ title: `${from} poked you 👉`, body: 'Your word, please.' }),
    ({ from }) => ({ title: `${from} is tapping their foot`, body: 'The forge is getting cold. Lock in a word!' }),
    ({ from }) => ({ title: `${from} says hurry up`, body: 'Politely. Mostly.' }),
    ({ from }) => ({ title: 'Psst 👀', body: `${from} is wondering if you fell asleep.` }),
  ],
  // Someone asked "close enough?". Goes to everyone except the asker.
  vote: [
    ({ name }) => ({ title: 'Close enough? 🤝', body: `${name} thinks you basically nailed it. Your vote counts.` }),
    ({ name }) => ({ title: `${name} wants to call it`, body: 'Is it close enough? One “no” keeps the game going.' }),
  ],
  // Everyone said the same word. Goes to everyone.
  won: [
    ({ word, n }) => ({ title: `FORGED! ${q(word)} 🔨`, body: `Same word, same brain. Done in ${rounds(n)}.` }),
    ({ word, n }) => ({ title: 'Mind meld complete 🧠✨', body: `You all said ${q(word)} in ${rounds(n)}. Spooky.` }),
    ({ word }) => ({ title: `${q(word)}! ${q(word)}! ${q(word)}!`, body: 'Everyone said it. Come celebrate.' }),
  ],
  // The crew voted it close enough.
  wonVote: [
    ({ word }) => ({ title: 'Close enough! 🤝', body: `${q(word)} counts. We’ll allow it.` }),
    ({ word }) => ({ title: `${q(word)}: officially close enough`, body: 'The judges have spoken. Game over, everybody wins.' }),
  ],
  // Someone started a rematch. Goes to everyone except them.
  rematch: [
    ({ name }) => ({ title: 'Rematch! ⚔️', body: `${name} wants another round. Same crew, fresh brains.` }),
    ({ name }) => ({ title: `${name} isn’t done with you`, body: 'A rematch is waiting. Tap to jump in.' }),
  ],
};

// ---------- when they fire ----------
// Returns [{ kind, uids, ...facts }] for one change to a game doc.
export function alertsFor(before, after) {
  if (!before || !after) return [];
  const out = [];
  const players = after.players || {};
  const name = (u) => players[u]?.name || before.players?.[u]?.name || 'Someone';
  const order = after.order || [];
  const others = (...skip) => order.filter((u) => !skip.includes(u));

  // Lobby: someone joined (tell the host)
  if (after.status === 'lobby') {
    const newbies = order.filter((u) => !(before.order || []).includes(u) && u !== after.hostUid);
    for (const u of newbies) out.push({ kind: 'joined', uids: [after.hostUid], name: name(u) });
  }

  // Game started
  if (before.status === 'lobby' && after.status === 'playing') {
    out.push({ kind: 'started', uids: others(after.hostUid), host: name(after.hostUid) });
  }

  // A round finished (history grew)
  const hb = before.history?.length || 0, ha = after.history?.length || 0;
  if (ha > hb && before.status === 'playing') {
    const last = after.history[ha - 1];
    if (after.status === 'won') {
      out.push({ kind: 'won', uids: order, word: after.winWord, n: ha });
    } else {
      // Skip whoever locked in last: they watched it happen.
      const lastIn = order.find((u) => !before.submitted?.[u]);
      const words = listNames((last.words || []).map((w) => q(w.word)));
      out.push({ kind: 'reveal', uids: others(lastIn), round: after.round, words });
    }
  } else if (before.status === 'playing' && after.status === 'won' && after.wonBy === 'vote') {
    out.push({ kind: 'wonVote', uids: order, word: after.winWord });
  }

  // Everyone but one is locked in
  if (after.status === 'playing' && before.round === after.round && order.length > 1) {
    const waitingBefore = order.filter((u) => !before.submitted?.[u]);
    const waitingAfter = order.filter((u) => !after.submitted?.[u]);
    if (waitingAfter.length === 1 && waitingBefore.length > 1) {
      out.push({ kind: 'lastOne', uids: waitingAfter, count: order.length - 1 });
    }
  }

  // Nudges
  for (const [u, n] of Object.entries(after.nudges || {})) {
    if (n?.at && n.at !== before.nudges?.[u]?.at && order.includes(u)) {
      out.push({ kind: 'nudge', uids: [u], from: n.from || 'Someone' });
    }
  }

  // Close-enough vote started
  if (after.vote && !after.vote.result && (!before.vote || before.vote.round !== after.vote.round || before.vote.result)) {
    out.push({ kind: 'vote', uids: others(after.vote.by), name: name(after.vote.by) });
  }

  // Rematch
  if (after.next && !before.next) {
    out.push({ kind: 'rematch', uids: others(after.nextBy || null), name: name(after.nextBy), code: after.next });
  }

  return out.filter((a) => a.uids.length);
}

export function render(alert) {
  return pick(LINES[alert.kind])(alert);
}

export { listNames };

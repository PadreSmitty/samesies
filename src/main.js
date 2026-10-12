import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot, runTransaction,
  collection, getDocs, serverTimestamp,
} from 'firebase/firestore';
import { MIN_PLAYERS, MAX_PLAYERS, makeCode, normalize, cleanWord, isUsed, allMatch, nearlyMatch, commonWord } from './logic.js';
import { STARTERS } from './starters.js';
import { unlockAudio, isMuted, setMuted, drumroll, closeSting, fanfare, confetti } from './fx.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAEbf9VBdvXdHUSlH0rZgHL7SmvXyAn_nM',
  authDomain: 'thesamesiesgame.firebaseapp.com',
  projectId: 'thesamesiesgame',
  storageBucket: 'thesamesiesgame.firebasestorage.app',
  messagingSenderId: '120235814862',
  appId: '1:120235814862:web:4f5762bc1a08d2f228059f',
};

const fb = initializeApp(firebaseConfig);
const auth = getAuth(fb);
const db = getFirestore(fb);

const $app = document.getElementById('app');

// ---------- local storage (per device conveniences only) ----------
const store = {
  get(k, d = null) { try { const v = localStorage.getItem('samesies.' + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('samesies.' + k, JSON.stringify(v)); } catch { /* private mode */ } },
};

// ---------- state ----------
const state = {
  uid: null,
  authError: null,
  name: store.get('name', ''),
  tour: store.get('toured', false) ? null : 0,
  code: new URLSearchParams(location.search).get('g')?.toUpperCase() || null,
  game: null,
  gameMissing: false,
  mySub: null, // { round, word }
  showUsed: false,
  busy: false,
  error: '',
  toast: '',
};
let unsubGame = null;
let resolving = false;
let lastVoteSeen = null;
const followed = new Set();
const nudgeCooldown = {};

// ---------- helpers ----------
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const gameRef = (code) => doc(db, 'games', code);
const subRef = (code, round, uid) => doc(db, 'games', code, 'rounds', String(round), 'subs', uid);
const shareLink = (code) => `${location.origin}${location.pathname}?g=${code}`;

function setUrl(code) {
  const url = code ? `${location.pathname}?g=${code}` : location.pathname;
  history.replaceState(null, '', url);
}

function rememberGame(code) {
  const list = store.get('games', []).filter((g) => g.code !== code);
  list.unshift({ code, at: Date.now() });
  store.set('games', list.slice(0, 6));
}

function toast(msg) {
  state.toast = msg;
  render();
  clearTimeout(toast.t);
  toast.t = setTimeout(() => { state.toast = ''; render(); }, 3200);
}

function fail(err) {
  console.error(err);
  state.busy = false;
  state.error = typeof err === 'string' ? err : 'Something went wrong. Check your connection and try again.';
  render();
}

// Two overlapping circles, each rippling outward in fading rings: rounds of guesses meeting in the middle,
// with a spark where the two minds meet.
const logo = (size = 170, a = '#4B4DDB', b = '#FF6A4D') =>
  `<svg width="${size}" height="${Math.round(size * 0.62)}" viewBox="0 -2 200 124" aria-hidden="true">`
  + `<circle cx="76" cy="60" r="58" fill="none" stroke="${a}" stroke-width="3.5" opacity="0.18"/>`
  + `<circle cx="124" cy="60" r="58" fill="none" stroke="${b}" stroke-width="3.5" opacity="0.18"/>`
  + `<circle cx="76" cy="60" r="44" fill="none" stroke="${a}" stroke-width="4.5" opacity="0.42"/>`
  + `<circle cx="124" cy="60" r="44" fill="none" stroke="${b}" stroke-width="4.5" opacity="0.42"/>`
  + `<circle cx="76" cy="60" r="30" fill="${a}" opacity="0.9"/>`
  + `<circle cx="124" cy="60" r="30" fill="${b}" opacity="0.85"/>`
  + `<path d="M100 47 L101.9 58.1 L107 60 L101.9 61.9 L100 73 L98.1 61.9 L93 60 L98.1 58.1Z" fill="#FFFFFF"/></svg>`;
const listIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>`;
const checkIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>`;
const backIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>`;
const backButton = `<button class="icon-btn back" data-act="home" aria-label="Step out to the start screen">${backIcon}</button>`;
const soundIcon = (off) => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/>${off ? '<path d="M17 9l5 6M22 9l-5 6"/>' : '<path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12"/>'}</svg>`;
const closeIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>`;

// ---------- game actions ----------
async function createGame() {
  const name = cleanWord(state.name);
  if (!name) return fail('Type your name first.');
  state.busy = true; state.error = ''; render();
  try {
    let code;
    for (let i = 0; i < 8; i++) {
      code = makeCode();
      const snap = await getDoc(gameRef(code));
      if (!snap.exists()) break;
    }
    await setDoc(gameRef(code), {
      code,
      hostUid: state.uid,
      status: 'lobby',
      createdAt: serverTimestamp(),
      players: { [state.uid]: { name, joinedAt: Date.now() } },
      order: [state.uid],
      round: 1,
      revealed: 0,
      submitted: {},
      history: [],
      used: [],
      winWord: null,
      nudges: {},
    });
    state.busy = false;
    openGame(code);
  } catch (e) { fail(e); }
}

async function joinGame(codeInput, asName) {
  const name = cleanWord(asName || state.name);
  const code = String(codeInput || '').trim().toUpperCase();
  if (!name) return fail('Type your name first.');
  if (!/^[A-Z]{4}$/.test(code)) return fail('Game codes are 4 letters.');
  state.busy = true; state.error = ''; render();
  try {
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(gameRef(code));
      if (!snap.exists()) throw 'No game with that code.';
      const g = snap.data();
      if (g.players[state.uid]) return; // already in
      if (g.status !== 'lobby') throw 'That game already started.';
      if (g.order.length >= MAX_PLAYERS) throw `That game is full (${MAX_PLAYERS} players max).`;
      tx.update(gameRef(code), {
        [`players.${state.uid}`]: { name, joinedAt: Date.now() },
        order: [...g.order, state.uid],
      });
    });
    state.busy = false;
    openGame(code);
  } catch (e) { fail(e); }
}

async function startGame() {
  const g = state.game;
  if (g.order.length < MIN_PLAYERS) return;
  try { await updateDoc(gameRef(g.code), { status: 'playing', round: 1 }); } catch (e) { fail(e); }
}

async function submitWord(raw) {
  const g = state.game;
  const word = cleanWord(raw);
  if (!word) return fail('Type a word first.');
  if (isUsed(word, g.used)) return fail(`"${word}" has already been used. Pick another!`);
  const round = g.round;
  state.busy = true; state.error = ''; render();
  try {
    try {
      await setDoc(subRef(g.code, round, state.uid), { word, norm: normalize(word), at: serverTimestamp() });
    } catch (e) {
      // Already locked in (subs can't be overwritten); fall through and make sure we're marked.
      const mine = await getDoc(subRef(g.code, round, state.uid));
      if (!mine.exists()) throw e;
    }
    state.mySub = { round, word };
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(gameRef(g.code));
      const cur = snap.data();
      if (cur.status !== 'playing' || cur.round !== round) return;
      const submitted = { ...cur.submitted, [state.uid]: true };
      const everyone = cur.order.every((u) => submitted[u]);
      tx.update(gameRef(g.code), { submitted, ...(everyone ? { revealed: round } : {}) });
    });
    state.busy = false;
    render();
  } catch (e) { fail(e); }
}

// Runs on every device once all words are in; the transaction makes sure it only counts once.
async function resolveRound(g) {
  if (resolving) return;
  resolving = true;
  try {
    const round = g.round;
    const subsSnap = await getDocs(collection(db, 'games', g.code, 'rounds', String(round), 'subs'));
    const byUid = {};
    subsSnap.forEach((d) => { byUid[d.id] = d.data(); });
    if (!g.order.every((u) => byUid[u])) return;
    const words = g.order.map((u) => ({ uid: u, name: g.players[u].name, word: byUid[u].word, norm: byUid[u].norm }));
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(gameRef(g.code));
      const cur = snap.data();
      if (cur.status !== 'playing' || cur.round !== round || cur.revealed !== round) return;
      const history = [...cur.history, { round, words: words.map(({ uid, name, word }) => ({ uid, name, word })) }];
      if (allMatch(words)) {
        tx.update(gameRef(g.code), { history, status: 'won', winWord: words[0].word });
      } else {
        const used = [...new Set([...cur.used, ...words.map((w) => w.norm)])];
        tx.update(gameRef(g.code), { history, used, round: round + 1, submitted: {} });
      }
    });
  } catch (e) {
    console.error('resolve failed', e);
  } finally {
    resolving = false;
  }
}

async function nudge(targetUid) {
  const g = state.game;
  if (nudgeCooldown[targetUid] && Date.now() - nudgeCooldown[targetUid] < 60000) {
    return toast('Give them a minute!');
  }
  nudgeCooldown[targetUid] = Date.now();
  try {
    await updateDoc(gameRef(g.code), { [`nudges.${targetUid}`]: { at: Date.now(), from: g.players[state.uid].name } });
    toast(`Nudged ${g.players[targetUid].name} 👋`);
  } catch (e) { fail(e); }
}

// "Close enough?": anyone can ask to count the last reveal as a match. Every player has to agree.
async function startVote() {
  const g = state.game;
  const last = g.history[g.history.length - 1];
  if (!last) return;
  try {
    await runTransaction(db, async (tx) => {
      const cur = (await tx.get(gameRef(g.code))).data();
      const curLast = cur.history[cur.history.length - 1];
      if (cur.status !== 'playing' || !curLast || curLast.round !== last.round || cur.vote?.round === last.round) return;
      tx.update(gameRef(g.code), { vote: { round: last.round, by: state.uid, yes: { [state.uid]: true }, no: {}, result: null } });
    });
  } catch (e) { fail(e); }
}

async function castVote(agree) {
  const g = state.game;
  try {
    await runTransaction(db, async (tx) => {
      const cur = (await tx.get(gameRef(g.code))).data();
      const v = cur.vote;
      const curLast = cur.history[cur.history.length - 1];
      if (cur.status !== 'playing' || !v || v.result || !curLast || v.round !== curLast.round) return;
      const yes = { ...v.yes };
      const no = { ...v.no };
      if (agree) yes[state.uid] = true; else no[state.uid] = true;
      if (!agree) {
        tx.update(gameRef(g.code), { vote: { ...v, yes, no, result: 'no' } });
      } else if (cur.order.every((u) => yes[u])) {
        tx.update(gameRef(g.code), {
          vote: { ...v, yes, no, result: 'yes' },
          status: 'won',
          wonBy: 'vote',
          winWord: commonWord(curLast.words.map((w) => w.word)),
          history: cur.history,
        });
      } else {
        tx.update(gameRef(g.code), { vote: { ...v, yes, no } });
      }
    });
  } catch (e) { fail(e); }
}

async function playAgain() {
  const old = state.game;
  state.busy = true; render();
  try {
    let code;
    for (let i = 0; i < 8; i++) {
      code = makeCode();
      if (!(await getDoc(gameRef(code))).exists()) break;
    }
    // Everyone from the old game comes along; they get pointed at the new code.
    await setDoc(gameRef(code), {
      code, hostUid: state.uid, status: 'lobby', createdAt: serverTimestamp(),
      players: { [state.uid]: { name: old.players[state.uid].name, joinedAt: Date.now() } },
      order: [state.uid], round: 1, revealed: 0, submitted: {}, history: [], used: [], winWord: null, nudges: {},
    });
    followed.add(code);
    await updateDoc(gameRef(old.code), { next: code });
    state.busy = false;
    openGame(code);
  } catch (e) { fail(e); }
}

async function followRematch(old) {
  const code = old.next;
  try {
    const snap = await getDoc(gameRef(code));
    const next = snap.exists() ? snap.data() : null;
    if (!next) return render();
    if (!next.players[state.uid]) {
      if (next.status !== 'lobby' || next.order.length >= MAX_PLAYERS) return render(); // the "Join the next game" button stays
      await runTransaction(db, async (tx) => {
        const cur = (await tx.get(gameRef(code))).data();
        if (cur.players[state.uid] || cur.status !== 'lobby' || cur.order.length >= MAX_PLAYERS) return;
        tx.update(gameRef(code), {
          [`players.${state.uid}`]: { name: old.players[state.uid].name, joinedAt: Date.now() },
          order: [...cur.order, state.uid],
        });
      });
      toast(`${next.players[next.hostUid]?.name || 'Someone'} started a rematch. You're in!`);
    }
    openGame(code);
  } catch { render(); }
}

// The whole game as text with emoji, for pasting into a group chat.
function shareText(g) {
  const lines = g.history.map((h, i) => {
    const counts = {};
    h.words.forEach((w) => { const k = normalize(w.word); counts[k] = (counts[k] || 0) + 1; });
    const last = i === g.history.length - 1;
    const dots = h.words.map((w) => (last ? '🟣' : counts[normalize(w.word)] > 1 ? '🟠' : '⚪')).join('');
    return `${dots} ${h.words.map((w) => w.word).join(' · ')}`;
  });
  const rounds = `${g.history.length} round${g.history.length === 1 ? '' : 's'}`;
  const head = g.wonBy === 'vote' ? `🧠 Brainsmith: close enough on "${g.winWord}" in ${rounds}!` : `🧠 Brainsmith: we forged "${g.winWord}" in ${rounds}!`;
  return `${head}\n\n${lines.join('\n')}\n\nPlay with us:`;
}

async function shareGame() {
  const g = state.game;
  const url = location.origin + location.pathname;
  const text = shareText(g);
  try {
    if (navigator.share) await navigator.share({ title: 'Brainsmith', text, url });
    else { await navigator.clipboard.writeText(`${text} ${url}`); toast('Copied! Paste it in your group text.'); }
  } catch { /* share sheet dismissed */ }
}

async function newCrew() {
  const g = state.game;
  if (!cleanWord(state.name)) state.name = g.players[state.uid]?.name || '';
  leaveGame();
  createGame();
}

// ---------- subscriptions ----------
function openGame(code) {
  if (unsubGame) unsubGame();
  state.code = code;
  state.game = null;
  state.gameMissing = false;
  state.mySub = null;
  state.error = '';
  state.showUsed = false;
  setUrl(code);
  render();
  unsubGame = onSnapshot(gameRef(code), async (snap) => {
    if (!snap.exists()) { state.gameMissing = true; state.game = null; render(); return; }
    const g = snap.data();
    state.game = g;
    if (g.players[state.uid]) rememberGame(code);

    // Nudged?
    const n = g.nudges?.[state.uid];
    if (n && n.at > store.get('nudgeSeen', 0)) {
      store.set('nudgeSeen', n.at);
      if (Date.now() - n.at < 10 * 60000) {
        toast(`${n.from} nudged you! Your word, please 👀`);
        try { navigator.vibrate?.(200); } catch { /* not supported */ }
      }
    }

    // Rematch: when someone starts the next game, everyone from this one is pulled in.
    if (g.status === 'won' && g.next && g.players[state.uid] && !followed.has(g.next)) {
      followed.add(g.next);
      followRematch(g);
      return;
    }

    // Anyone who has played a game doesn't need the first-time walkthrough.
    if (g.players[state.uid] && state.tour !== null) { state.tour = null; store.set('toured', true); }

    // Someone asked "Close enough?"
    if (g.vote && !g.vote.result && g.vote.by !== state.uid) {
      const key = `${code}.${g.vote.round}`;
      if (lastVoteSeen !== key) {
        lastVoteSeen = key;
        toast(`${g.players[g.vote.by]?.name || 'Someone'} asked: close enough?`);
        try { navigator.vibrate?.(200); } catch { /* not supported */ }
      }
    }

    // Do I already have a word in for this round?
    if (g.status === 'playing' && g.submitted?.[state.uid] && state.mySub?.round !== g.round) {
      try {
        const mine = await getDoc(subRef(code, g.round, state.uid));
        if (mine.exists()) state.mySub = { round: g.round, word: mine.data().word };
      } catch { /* shown as locked in without the word */ }
    }

    if (g.status === 'playing' && g.revealed === g.round) resolveRound(g);
    render();
  }, (e) => fail(e));
}

function leaveGame() {
  if (unsubGame) unsubGame();
  unsubGame = null;
  state.code = null; state.game = null; state.gameMissing = false; state.error = '';
  setUrl(null);
  render();
}

// ---------- views ----------
function header(g, title) {
  const usedCount = g.used.length;
  return `
  <header class="bar">
    ${backButton}
    <div class="bar-title">
      <span class="eyebrow">GAME · ${esc(g.code)}</span>
      <h1 class="h-round">${esc(title)}</h1>
    </div>
    <button class="icon-btn quiet" data-act="mute" aria-label="${isMuted() ? 'Turn sound on' : 'Turn sound off'}" aria-pressed="${isMuted()}">${soundIcon(isMuted())}</button>
    ${g.status !== 'lobby' ? `<button class="icon-btn" data-act="used" aria-label="Used words, ${usedCount} so far">${listIcon}</button>` : ''}
  </header>`;
}

function viewLoading(msg = 'Loading…') {
  return `<main class="screen center"><div class="pulse">${logo(120)}</div><p class="muted">${esc(msg)}</p></main>`;
}

function viewHome() {
  const games = store.get('games', []);
  return `
  <main class="screen">
    <div class="hero">
      ${logo(170)}
      <h1 class="wordmark">Brain<b>smith</b></h1>
      <p class="tagline">Two words in. Meet in the middle.</p>
    </div>
    <div class="grow"></div>
    <form class="stack" data-form="create">
      <label for="name" class="label">Your name</label>
      <input id="name" name="name" class="input" autocomplete="nickname" maxlength="40" value="${esc(state.name)}" placeholder="What should we call you?">
      <button class="btn primary" ${state.busy ? 'disabled' : ''}>Start a new game</button>
    </form>
    <div class="or"><span></span>or<span></span></div>
    <form class="row" data-form="join">
      <label for="code" class="sr-only">Game code</label>
      <input id="code" name="code" class="input code" maxlength="4" autocapitalize="characters" autocomplete="off" placeholder="Game code">
      <button class="btn outline" ${state.busy ? 'disabled' : ''}>Join</button>
    </form>
    ${state.error ? `<p class="error" role="alert">${esc(state.error)}</p>` : ''}
    ${games.length ? `
      <div class="recent">
        <span class="eyebrow">YOUR GAMES</span>
        <div class="chips">${games.map((x) => `<button class="chip" data-act="open" data-code="${esc(x.code)}">${esc(x.code)}</button>`).join('')}</div>
      </div>` : ''}
    <p class="fine">2 to 5 players · no sign-up · <button class="linkish inline-link" data-act="tour">How to play</button></p>
  </main>`;
}

function viewJoin(g) {
  // Opened a link to a game I'm not in yet.
  const full = g.order.length >= MAX_PLAYERS;
  const started = g.status !== 'lobby';
  return `
  <main class="screen">
    <header class="bar">${backButton}</header>
    <div class="hero tight">
      ${logo(140)}
      <h1 class="wordmark small">Brain<b>smith</b></h1>
      <p class="tagline">${esc(g.players[g.hostUid]?.name || 'A friend')} invited you to game <strong>${esc(g.code)}</strong></p>
    </div>
    <div class="grow"></div>
    ${started ? `<p class="notice">This game already started. Ask them to start a new one and send you the code.</p>
      <button class="btn outline" data-act="home">Go to start</button>`
    : full ? `<p class="notice">This game is full.</p><button class="btn outline" data-act="home">Go to start</button>`
    : `<form class="stack" data-form="joinlink">
        <label for="name" class="label">Your name</label>
        <input id="name" name="name" class="input" autocomplete="nickname" maxlength="40" value="${esc(state.name)}" placeholder="What should we call you?">
        <button class="btn primary" ${state.busy ? 'disabled' : ''}>Join the game</button>
      </form>`}
    ${state.error ? `<p class="error" role="alert">${esc(state.error)}</p>` : ''}
  </main>`;
}

function viewLobby(g) {
  const isHost = g.hostUid === state.uid;
  const enough = g.order.length >= MIN_PLAYERS;
  return `
  <main class="screen">
    ${header(g, 'Getting ready')}
    <section class="card center-text">
      <span class="muted">Invite with this code</span>
      <div class="big-code">${esc(g.code)}</div>
      <button class="btn soft" data-act="share">Share invite link</button>
    </section>
    <section class="stack">
      <span class="eyebrow">PLAYERS · ${g.order.length} OF ${MAX_PLAYERS}</span>
      ${g.order.map((u) => `
        <div class="player">
          <div class="dot done">${checkIcon}</div>
          <span class="pname">${esc(g.players[u].name)}${u === state.uid ? ' (you)' : ''}</span>
          ${u === g.hostUid ? '<span class="muted small">Host</span>' : ''}
        </div>`).join('')}
    </section>
    <div class="grow"></div>
    ${isHost
      ? `<button class="btn primary" data-act="start" ${enough ? '' : 'disabled'}>${enough ? 'Everyone’s here, start!' : 'Waiting for at least one more'}</button>`
      : `<p class="fine">Waiting for ${esc(g.players[g.hostUid]?.name || 'the host')} to start…</p>`}
  </main>`;
}

function viewRound(g) {
  const prev = g.history[g.history.length - 1];
  const locked = !!g.submitted?.[state.uid];
  const waitingOn = g.order.filter((u) => !g.submitted?.[u]);
  return `
  <main class="screen">
    ${header(g, `Round ${g.round}`)}
    ${prev && g.vote?.round === prev.round && !g.vote.result ? voteCard(g) : ''}
    <section class="card center-text">
      ${prev ? `
        <span class="muted">Connect these</span>
        <div class="word-chips">${prev.words.map((w) => `<span class="word-chip">${esc(w.word)}</span>`).join('')}</div>
        ${g.vote?.round === prev.round ? '' : `<button class="linkish close-link" data-act="vote">Close enough? Ask to count it</button>`}`
      : `
        <span class="muted">Round one</span>
        <p class="prompt">Pick any word in the known universe.</p>
        <span class="muted small">Nouns are easiest. Adjectives make it harder.</span>`}
    </section>
    ${locked ? `
      <section class="locked">
        <span class="muted">You locked in</span>
        <div class="locked-word">${esc(state.mySub?.round === g.round ? state.mySub.word : '✓')}</div>
        <span class="muted small">${waitingOn.length ? `Waiting on ${waitingOn.map((u) => esc(g.players[u].name)).join(', ')}…` : 'Revealing…'}</span>
      </section>`
    : `
      <form class="stack" data-form="word">
        <label for="word" class="label">Your word</label>
        <input id="word" name="word" class="input big" maxlength="40" autocomplete="off" autocorrect="on" spellcheck="true" autocapitalize="sentences" placeholder="Type it here">
        <button class="btn primary" ${state.busy ? 'disabled' : ''}>Lock it in</button>
        ${prev ? '' : '<button type="button" class="btn soft" data-act="starter">Stuck? Give me a word</button>'}
        <span class="fine">Nobody sees your word until everyone’s in.</span>
      </form>`}
    ${state.error ? `<p class="error" role="alert">${esc(state.error)}</p>` : ''}
    <div class="grow"></div>
    <section class="stack tight">
      <span class="eyebrow">PLAYERS</span>
      ${g.order.map((u) => {
        const done = !!g.submitted?.[u];
        const me = u === state.uid;
        return `
        <div class="player">
          ${done ? `<div class="dot done">${checkIcon}</div>` : '<div class="dot"></div>'}
          <span class="pname">${esc(g.players[u].name)}${me ? ' (you)' : ''}</span>
          ${done ? '<span class="muted small">Locked in</span>'
            : me ? '<span class="muted small">Thinking…</span>'
            : `<button class="btn nudge" data-act="nudge" data-uid="${esc(u)}">Nudge</button>`}
        </div>`;
      }).join('')}
    </section>
  </main>`;
}

// Groups of two or more players who typed the same thing, biggest first.
function matchGroups(words) {
  const groups = {};
  words.forEach((w) => { (groups[normalize(w.word)] ||= []).push(w); });
  return Object.values(groups).filter((x) => x.length > 1).sort((a, b) => b.length - a.length);
}

function listNames(names) {
  return names.length <= 2 ? names.join(' and ') : names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
}

function viewReveal(g, entry) {
  const groups = matchGroups(entry.words);
  const matched = new Set(groups.flat().map((w) => w.uid));
  const msg = groups.length
    ? groups.map((grp) => `${listNames(grp.map((w) => esc(w.name)))} ${grp.length === 2 ? 'both' : 'all'} said <em>${esc(grp[0].word)}</em>!`).join('<br>')
    : '';
  const sub = groups.length
    ? 'So close! Keep going.'
    : (entry.words.length === 2 ? 'Not yet! Next round, connect these two.' : 'Not yet! Next round, connect all of these.');
  return `
  <main class="screen reveal-screen">
    ${header(g, `Round ${entry.round} is in!`)}
    <section class="stack reveal">
      ${entry.words.map((w) => `
        <div class="reveal-card${matched.has(w.uid) ? ' matched' : ''}">
          <span class="rname">${esc(w.name)}</span>
          <span class="rword">${esc(w.word)}</span>
        </div>`).join('')}
    </section>
    <div class="after-reveal stack">
    ${msg ? `<div class="so-close"><span class="so-close-names">${msg}</span><span class="muted">${sub}</span></div>`
      : `<div class="row msg">${logo(60)}<span class="muted">${esc(sub)}</span></div>`}
    ${g.vote?.round === entry.round ? voteCard(g)
      : `<button class="btn ${nearlyMatch(entry.words.map((w) => w.word)) ? 'close-hot' : 'soft'}" data-act="vote">${nearlyMatch(entry.words.map((w) => w.word)) ? 'Those look the same. Close enough?' : 'Close enough?'}</button>`}
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${entry.round}">On to round ${entry.round + 1}</button>
  </main>`;
}

function voteCard(g) {
  const v = g.vote;
  const asker = esc(g.players[v.by]?.name || 'Someone');
  if (v.result === 'no') {
    const naysayer = esc(g.players[Object.keys(v.no)[0]]?.name || 'Someone');
    return `<section class="vote done"><span class="muted">${naysayer} said not quite, so play on.</span></section>`;
  }
  const iVoted = v.yes[state.uid] || v.no[state.uid];
  const waiting = g.order.filter((u) => !v.yes[u] && !v.no[u]).map((u) => esc(g.players[u].name));
  return `
  <section class="vote" aria-live="polite">
    <span class="vote-title">Close enough?</span>
    <span class="muted">${v.by === state.uid ? 'You asked' : `${asker} asked`} to count round ${v.round} as a match. Everyone has to agree.</span>
    ${iVoted
      ? `<span class="muted small">${waiting.length ? `Waiting on ${waiting.join(', ')}…` : 'Counting…'}</span>`
      : `<div class="row"><button class="btn primary grow" data-act="yes">Yes, count it</button><button class="btn outline" data-act="no">No</button></div>`}
  </section>`;
}

function viewWon(g) {
  const names = g.order.map((u) => g.players[u].name);
  const nameList = names.length === 2 ? names.join(' and ') : names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
  return `
  <main class="screen win">
    <div class="win-top">
      <div class="pop">${logo(190, '#FFFFFF', '#FF6A4D')}</div>
      <h1 class="win-title">${g.wonBy === 'vote' ? 'Close enough!' : 'Forged!'}</h1>
      <span class="win-sub">${g.wonBy === 'vote' ? 'You all agreed on' : 'Everyone said'}</span>
      <div class="win-word">${esc(g.winWord)}</div>
      <span class="win-sub">${esc(nameList)} · ${g.history.length} round${g.history.length === 1 ? '' : 's'}</span>
    </div>
    <div class="grow"></div>
    <section class="chain">
      <span class="eyebrow light">HOW YOU GOT THERE</span>
      ${g.history.map((h, i) => `<span class="${i === g.history.length - 1 ? 'strong' : ''}">${h.words.map((w) => esc(w.word)).join(' · ')}</span>`).join('')}
    </section>
    <button class="btn coral" data-act="sharegame">Share how we did it</button>
    ${g.next
      ? `<button class="btn white" data-act="open" data-code="${esc(g.next)}">Join the next game</button>`
      : `<button class="btn white" data-act="again" ${state.busy ? 'disabled' : ''}>Play again, same crew</button>`}
    <div class="row">
      <button class="btn ghost-light grow" data-act="newcrew" ${state.busy ? 'disabled' : ''}>New game, new people</button>
      <button class="btn ghost-light grow" data-act="home">Back to start</button>
    </div>
  </main>`;
}

const TOUR = [
  { title: 'Everyone picks a word', body: 'Any word at all. Nobody sees it until everyone’s locked in.' },
  { title: 'They all flip at once', body: 'Then, next round, everyone looks for one word that connects them all.' },
  { title: 'Match to win', body: 'Keep connecting until every single player types the same word. Forged!' },
];

function viewTour() {
  const i = state.tour;
  const step = TOUR[i];
  return `
  <div class="sheet-backdrop tour" data-act="tour-skip">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="tour-title" data-stop>
      <div class="grabber"></div>
      <div class="tour-art">${logo(110)}</div>
      <span class="eyebrow">HOW TO PLAY · ${i + 1} OF ${TOUR.length}</span>
      <h2 id="tour-title" class="h-sheet">${step.title}</h2>
      <p class="muted tour-body">${step.body}</p>
      <div class="dots" aria-hidden="true">${TOUR.map((_, j) => `<span class="${j === i ? 'on' : ''}"></span>`).join('')}</div>
      <button class="btn primary" data-act="tour-next">${i === TOUR.length - 1 ? 'Let’s play' : 'Next'}</button>
      ${i < TOUR.length - 1 ? '<button class="btn ghost" data-act="tour-skip">Skip</button>' : ''}
    </div>
  </div>`;
}

function viewUsedSheet(g) {
  return `
  <div class="sheet-backdrop" data-act="closeused">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="used-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="used-title" class="h-sheet">Used words</h2>
        <button class="icon-btn soft" data-act="closeused" aria-label="Close">${closeIcon}</button>
      </div>
      <p class="muted">These are off the table. If you try one, we’ll quietly ask for another.</p>
      ${g.history.length ? g.history.map((h) => `
        <div class="stack tight">
          <span class="eyebrow">ROUND ${h.round}</span>
          <div class="chips">${h.words.filter((w, i, all) => all.findIndex((x) => normalize(x.word) === normalize(w.word)) === i).map((w) => `<span class="chip static">${esc(w.word)}</span>`).join('')}</div>
        </div>`).join('') : '<p class="muted">Nothing yet. Round one is wide open.</p>'}
    </div>
  </div>`;
}

function currentView() {
  if (state.authError) return `<main class="screen center"><p class="error">${esc(state.authError)}</p></main>`;
  if (!state.uid) return viewLoading();
  if (!state.code) return viewHome();
  if (state.gameMissing) {
    return `<main class="screen center"><header class="bar top-left">${backButton}</header>${logo(120)}<p class="notice">No game with code ${esc(state.code)}.</p><button class="btn outline" data-act="home">Go to start</button></main>`;
  }
  const g = state.game;
  if (!g) return viewLoading('Finding your game…');
  if (!g.players[state.uid]) return viewJoin(g);
  if (g.status === 'lobby') return viewLobby(g);
  if (g.status === 'won') return viewWon(g);
  const last = g.history[g.history.length - 1];
  const seen = store.get(`seen.${g.code}`, 0);
  if (last && last.round > seen) return viewReveal(g, last);
  return viewRound(g);
}

// ---------- render (keeps typed text and focus across live updates) ----------
function render() {
  const active = document.activeElement;
  const keep = {};
  $app.querySelectorAll('input').forEach((i) => { keep[i.id] = i.value; });
  const focusId = active && active.tagName === 'INPUT' ? active.id : null;
  const caret = focusId ? active.selectionStart : null;

  const g = state.game;
  const sheetWasOpen = !!$app.querySelector('.sheet-backdrop:not(.tour)');
  const toastWas = $app.querySelector('.toast')?.textContent;
  $app.innerHTML = currentView()
    + (state.showUsed && g ? viewUsedSheet(g) : '')
    + (state.tour !== null && !state.code ? viewTour() : '')
    + (state.toast ? `<div class="toast" role="status">${esc(state.toast)}</div>` : '');

  // Live updates re-render everything; only play entrance animations the first time something appears.
  const main = $app.querySelector('main');
  const screenKey = main ? main.className + '|' + (main.querySelector('h1')?.textContent || '') : '';
  if (screenKey === render.lastKey) main.classList.add('no-anim');
  else if (main) playScreenFx(main, g);
  render.lastKey = screenKey;
  if (sheetWasOpen) $app.querySelector('.sheet-backdrop')?.classList.add('no-anim');
  if (toastWas && toastWas === state.toast) $app.querySelector('.toast')?.classList.add('no-anim');

  $app.querySelectorAll('input').forEach((i) => {
    if (keep[i.id] !== undefined && i.id !== 'name') i.value = keep[i.id];
    if (i.id === 'name' && keep.name !== undefined) i.value = keep.name;
  });
  if (focusId) {
    const el = document.getElementById(focusId);
    if (el) { el.focus(); try { el.setSelectionRange(caret, caret); } catch { /* ignore */ } }
  }
}

function playScreenFx(main, g) {
  if (main.classList.contains('reveal-screen')) {
    drumroll(1.4);
    if (main.querySelector('.matched')) setTimeout(closeSting, 1700);
  } else if (main.classList.contains('win')) {
    confetti();
    fanfare();
    try { navigator.vibrate?.([80, 60, 160]); } catch { /* not supported */ }
  }
}

// ---------- events ----------
$app.addEventListener('input', (e) => {
  if (e.target.id === 'name') { state.name = e.target.value; store.set('name', state.name); }
  if (e.target.id === 'code') e.target.value = e.target.value.toUpperCase().replace(/[^A-Z]/g, '');
  if (state.error) { state.error = ''; const el = $app.querySelector('.error'); if (el) el.remove(); }
});

$app.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target.dataset.form;
  const data = new FormData(e.target);
  if (form === 'create') createGame();
  if (form === 'join') joinGame(data.get('code'));
  if (form === 'joinlink') joinGame(state.code);
  if (form === 'word') submitWord(data.get('word'));
});

$app.addEventListener('click', async (e) => {
  const el = e.target.closest('[data-act]');
  if (!el) return;
  if (el.dataset.act === 'closeused' && e.target.closest('[data-stop]') && !e.target.closest('button')) return;
  const act = el.dataset.act;
  if (act === 'home') leaveGame();
  if (act === 'open') openGame(el.dataset.code);
  if (act === 'start') startGame();
  if (act === 'nudge') nudge(el.dataset.uid);
  if (act === 'again') playAgain();
  if (act === 'vote') startVote();
  if (act === 'sharegame') shareGame();
  if (act === 'newcrew') newCrew();
  if (act === 'mute') { setMuted(!isMuted()); render(); }
  if (act === 'starter') {
    const used = state.game?.used || [];
    const pool = STARTERS.filter((w) => !isUsed(w, used));
    const input = document.getElementById('word');
    if (input && pool.length) { input.value = pool[Math.floor(Math.random() * pool.length)]; input.focus(); }
  }
  if (act === 'tour') { state.tour = 0; render(); }
  if (act === 'tour-next') {
    if (state.tour < TOUR.length - 1) state.tour += 1;
    else { state.tour = null; store.set('toured', true); }
    render();
  }
  if (act === 'tour-skip' && !(e.target.closest('[data-stop]') && !e.target.closest('button'))) { state.tour = null; store.set('toured', true); render(); }
  if (act === 'yes') castVote(true);
  if (act === 'no') castVote(false);
  if (act === 'used') { state.showUsed = true; render(); }
  if (act === 'closeused') { state.showUsed = false; render(); }
  if (act === 'seen') { store.set(`seen.${state.game.code}`, Number(el.dataset.round)); render(); }
  if (act === 'share') {
    const url = shareLink(state.game.code);
    const text = `Play Brainsmith with me! Code ${state.game.code}`;
    try {
      if (navigator.share) await navigator.share({ title: 'Brainsmith', text, url });
      else { await navigator.clipboard.writeText(url); toast('Invite link copied'); }
    } catch { /* share sheet dismissed */ }
  }
});

document.addEventListener('pointerdown', unlockAudio, { capture: true });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.showUsed) { state.showUsed = false; render(); }
  if (e.key === 'Escape' && state.tour !== null) { state.tour = null; store.set('toured', true); render(); }
});

// ---------- boot ----------
render();
onAuthStateChanged(auth, (user) => {
  if (user) {
    state.uid = user.uid;
    if (state.code && !unsubGame) openGame(state.code);
    else render();
  }
});
signInAnonymously(auth).catch((e) => {
  console.error(e);
  state.authError = 'Could not connect to Brainsmith. Check your connection and refresh.';
  render();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

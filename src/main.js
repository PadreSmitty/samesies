import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot, runTransaction,
  collection, getDocs, serverTimestamp,
} from 'firebase/firestore';
import { MIN_PLAYERS, MAX_PLAYERS, makeCode, normalize, cleanWord, isUsed, allMatch } from './logic.js';

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

const logo = (size = 120, a = '#4B4DDB', b = '#FF6A4D') =>
  `<svg width="${size}" height="${Math.round(size * 0.633)}" viewBox="0 0 120 76" aria-hidden="true"><circle cx="40" cy="38" r="34" fill="${a}" opacity="0.9"/><circle cx="80" cy="38" r="34" fill="${b}" opacity="0.85"/></svg>`;
const listIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>`;
const checkIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>`;
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

async function joinGame(codeInput) {
  const name = cleanWord(state.name);
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
    await updateDoc(gameRef(old.code), { next: code });
    state.busy = false;
    openGame(code);
  } catch (e) { fail(e); }
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
    <div class="bar-title">
      <button class="eyebrow linkish" data-act="home" aria-label="Back to start">GAME · ${esc(g.code)}</button>
      <h1 class="h-round">${esc(title)}</h1>
    </div>
    ${g.status !== 'lobby' ? `<button class="icon-btn" data-act="used" aria-label="Used words, ${usedCount} so far">${listIcon}</button>` : ''}
  </header>`;
}

function viewLoading(msg = 'Loading…') {
  return `<main class="screen center"><div class="pulse">${logo(90)}</div><p class="muted">${esc(msg)}</p></main>`;
}

function viewHome() {
  const games = store.get('games', []);
  return `
  <main class="screen">
    <div class="hero">
      ${logo(120)}
      <h1 class="wordmark">Samesies</h1>
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
    <p class="fine">2 to 5 players · no sign-up</p>
  </main>`;
}

function viewJoin(g) {
  // Opened a link to a game I'm not in yet.
  const full = g.order.length >= MAX_PLAYERS;
  const started = g.status !== 'lobby';
  return `
  <main class="screen">
    <div class="hero">
      ${logo(100)}
      <h1 class="wordmark small">Samesies</h1>
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
    <section class="card center-text">
      ${prev ? `
        <span class="muted">Connect these</span>
        <div class="word-chips">${prev.words.map((w) => `<span class="word-chip">${esc(w.word)}</span>`).join('')}</div>`
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
        <input id="word" name="word" class="input big" maxlength="40" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Type it here">
        <button class="btn primary" ${state.busy ? 'disabled' : ''}>Lock it in</button>
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

function viewReveal(g, entry) {
  const counts = {};
  entry.words.forEach((w) => { const k = normalize(w.word); counts[k] = (counts[k] || 0) + 1; });
  const best = Math.max(...Object.values(counts));
  const msg = best <= 1
    ? (entry.words.length === 2 ? 'Not yet! Next round, connect these two.' : 'Not yet! Next round, connect all of these.')
    : `${best} of ${entry.words.length} matched. So close! Keep going.`;
  return `
  <main class="screen">
    ${header(g, `Round ${entry.round} is in!`)}
    <section class="stack reveal">
      ${entry.words.map((w, i) => `
        <div class="reveal-card" style="animation-delay:${i * 140}ms">
          <span class="rname">${esc(w.name)}</span>
          <span class="rword">${esc(w.word)}</span>
        </div>`).join('')}
    </section>
    <div class="row msg">${logo(40)}<span class="muted">${esc(msg)}</span></div>
    <div class="grow"></div>
    <button class="btn primary" data-act="seen" data-round="${entry.round}">On to round ${entry.round + 1}</button>
  </main>`;
}

function viewWon(g) {
  const names = g.order.map((u) => g.players[u].name);
  const nameList = names.length === 2 ? names.join(' and ') : names.slice(0, -1).join(', ') + ' and ' + names[names.length - 1];
  return `
  <main class="screen win">
    <div class="win-top">
      <div class="pop">${logo(132, '#FFFFFF', '#FF6A4D')}</div>
      <h1 class="win-title">Samesies!</h1>
      <span class="win-sub">Everyone said</span>
      <div class="win-word">${esc(g.winWord)}</div>
      <span class="win-sub">${esc(nameList)} · ${g.history.length} round${g.history.length === 1 ? '' : 's'}</span>
    </div>
    <div class="grow"></div>
    <section class="chain">
      <span class="eyebrow light">HOW YOU GOT THERE</span>
      ${g.history.map((h, i) => `<span class="${i === g.history.length - 1 ? 'strong' : ''}">${h.words.map((w) => esc(w.word)).join(' · ')}</span>`).join('')}
    </section>
    ${g.next
      ? `<button class="btn white" data-act="open" data-code="${esc(g.next)}">Join the next game</button>`
      : `<button class="btn white" data-act="again" ${state.busy ? 'disabled' : ''}>Play again, same crew</button>`}
    <button class="btn ghost-light" data-act="home">Back to start</button>
  </main>`;
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
          <div class="chips">${h.words.map((w) => `<span class="chip static">${esc(w.word)}</span>`).join('')}</div>
        </div>`).join('') : '<p class="muted">Nothing yet. Round one is wide open.</p>'}
    </div>
  </div>`;
}

function currentView() {
  if (state.authError) return `<main class="screen center"><p class="error">${esc(state.authError)}</p></main>`;
  if (!state.uid) return viewLoading();
  if (!state.code) return viewHome();
  if (state.gameMissing) {
    return `<main class="screen center">${logo(90)}<p class="notice">No game with code ${esc(state.code)}.</p><button class="btn outline" data-act="home">Go to start</button></main>`;
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
  $app.innerHTML = currentView()
    + (state.showUsed && g ? viewUsedSheet(g) : '')
    + (state.toast ? `<div class="toast" role="status">${esc(state.toast)}</div>` : '');

  $app.querySelectorAll('input').forEach((i) => {
    if (keep[i.id] !== undefined && i.id !== 'name') i.value = keep[i.id];
    if (i.id === 'name' && keep.name !== undefined) i.value = keep.name;
  });
  if (focusId) {
    const el = document.getElementById(focusId);
    if (el) { el.focus(); try { el.setSelectionRange(caret, caret); } catch { /* ignore */ } }
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
  if (act === 'used') { state.showUsed = true; render(); }
  if (act === 'closeused') { state.showUsed = false; render(); }
  if (act === 'seen') { store.set(`seen.${state.game.code}`, Number(el.dataset.round)); render(); }
  if (act === 'share') {
    const url = shareLink(state.game.code);
    const text = `Play Samesies with me! Code ${state.game.code}`;
    try {
      if (navigator.share) await navigator.share({ title: 'Samesies', text, url });
      else { await navigator.clipboard.writeText(url); toast('Invite link copied'); }
    } catch { /* share sheet dismissed */ }
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.showUsed) { state.showUsed = false; render(); }
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
  state.authError = 'Could not connect to Samesies. Check your connection and refresh.';
  render();
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

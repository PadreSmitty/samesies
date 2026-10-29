import { onOldSite, newHomeLive, carryUrl } from './move.js';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously, connectAuthEmulator } from 'firebase/auth';
import {
  getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot, runTransaction,
  collection, getDocs, serverTimestamp, deleteField, addDoc, query, where, limit, connectFirestoreEmulator,
} from 'firebase/firestore';
import { googleSignIn, finishRedirect, emailCreate, emailSignIn, resetPassword, signOutNow, requestDelete, watchMerge, accountOf } from './account.js';
import { isRude } from './rude.js';
import { MIN_PLAYERS, MAX_PLAYERS, makeCode, normalize, cleanWord, isUsed, allMatch, nearlyMatch, commonWord } from './logic.js';
import { STARTERS } from './starters.js';
import { DAILY_WORDS } from './dailywords.js';
import { firebaseConfig } from './firebase-config.js';
import { alertSupport, alertPermission, alertsOn, turnOnAlerts, turnOffAlerts, refreshAlerts } from './alerts.js';
import { T } from './strings.js';
import { unlockAudio, isMuted, setMuted, drumroll, closeSting, fanfare, confetti } from './fx.js';

const fb = initializeApp(firebaseConfig);
const auth = getAuth(fb);
const db = getFirestore(fb);
// Local testing only: talk to the Firebase emulators instead of the real database.
const emu = /^(127\.0\.0\.1|localhost)$/.test(location.hostname)
  && (new URLSearchParams(location.search).has('emu') || sessionStorage.getItem('emu') === '1');
if (emu) {
  sessionStorage.setItem('emu', '1');
  connectAuthEmulator(auth, 'http://127.0.0.1:9099', { disableWarnings: true });
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
}

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
  showGames: false,
  showSettings: false,
  account: null, // { email, google } when signed in, null for a guest
  showAccount: false,
  accountMode: 'create', // or 'signin'
  accountError: '',
  accountNote: '',
  blocked: new Set(store.get('blocked', [])),
  reportFor: null, // uid of the player whose menu is open
  reportStep: 'menu', // 'menu' | 'report'
  moving: false, // old address, new one is live: finish games here, then go
  summaries: {}, // code -> short description for the Your games list
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
// Each player gets their own color, in the order they joined.
const PLAYER_COLORS = ['#4B4DDB', '#FF6A4D', '#1FB895', '#FFB020', '#E84D9A'];
const colorOf = (g, uid) => PLAYER_COLORS[Math.max(0, g.order.indexOf(uid)) % PLAYER_COLORS.length];
const REACTIONS = ['😂', '🤯', '🔥', '❤️'];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const gameRef = (code) => doc(db, 'games', code);
// Blocked players show up as "Blocked player" with their words hidden, on this screen only.
const nameOf = (g, uid) => (state.blocked.has(uid) && uid !== state.uid ? T.report.hiddenName : g.players[uid]?.name);
const wordOf = (w) => (state.blocked.has(w.uid) && w.uid !== state.uid ? T.report.hiddenWord : w.word);
const whoOf = (w) => (state.blocked.has(w.uid) && w.uid !== state.uid ? T.report.hiddenName : w.name);
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
  state.error = typeof err === 'string' ? err : T.errors.generic;
  render();
}

// Two overlapping circles, each rippling outward in fading rings: rounds of guesses meeting in the middle,
// with a spark where the two minds meet.
const ART = { logo: [409, 640], spark: [358, 360], bolt: [195, 360], hammer: [313, 360], bolts: [383, 360], burst: [343, 360], swing: [342, 360] };
const art = (name, h, cls = '') => { const [w0, h0] = ART[name]; return `<img class="art ${cls}" src="art/${name}.webp" width="${Math.round(w0 * h / h0)}" height="${h}" alt="" aria-hidden="true" decoding="async">`; };
const helpIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><path d="M9.5 9.3a2.6 2.6 0 0 1 5 .9c0 1.7-2.5 2.3-2.5 3.8"/><path d="M12 17.2h.01"/></svg>`;
const listIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>`;
const checkIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>`;
const backIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>`;
const backButton = `<button class="icon-btn back" data-act="home" aria-label="${T.a11y.back}">${backIcon}</button>`;
const soundIcon = (off) => `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z"/>${off ? '<path d="M17 9l5 6M22 9l-5 6"/>' : '<path d="M17 8.5a5 5 0 0 1 0 7M19.5 6a8.5 8.5 0 0 1 0 12"/>'}</svg>`;
const gearIcon = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
const chevron = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>`;
const moreIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>`;
const googleIcon = `<svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"/><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"/><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"/></svg>`;
const moreButton = (g, u) => (u === state.uid ? '' : `<button class="icon-btn soft more" data-act="player-menu" data-uid="${esc(u)}" aria-label="${T.report.more(esc(nameOf(g, u)))}">${moreIcon}</button>`);
const closeIcon = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>`;

// ---------- game actions ----------
// ---------- Daily Words ----------
// Every day has its own five weird words, the same for everyone. Each player in a game is dealt a different one.
function todayKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

// The list is shuffled once with a fixed seed, then each day takes the next five, so words don't repeat for weeks.
const dailyOrder = (() => {
  let seed = 20261012;
  const rand = () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };
  const idx = DAILY_WORDS.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
  return idx;
})();

function dailyWords(key = todayKey()) {
  const day = Math.round(Date.UTC(...key.split('-').map((n, i) => (i === 1 ? n - 1 : +n))) / 86400000);
  return Array.from({ length: MAX_PLAYERS }, (_, i) => DAILY_WORDS[dailyOrder[(day * MAX_PLAYERS + i) % dailyOrder.length]]);
}

async function createGame(opts = {}) {
  const name = cleanWord(state.name);
  if (!name) return fail(T.errors.nameFirst);
  if (isRude(name)) return fail(T.errors.rudeName);
  saveProfile({ name });
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
      ...(opts.daily ? { daily: { date: todayKey(), words: dailyWords() } } : {}),
    });
    state.busy = false;
    openGame(code);
  } catch (e) { fail(e); }
}

async function joinGame(codeInput, asName) {
  const name = cleanWord(asName || state.name);
  const code = String(codeInput || '').trim().toUpperCase();
  if (!name) return fail(T.errors.nameFirst);
  if (isRude(name)) return fail(T.errors.rudeName);
  if (!/^[A-Z]{4}$/.test(code)) return fail(T.errors.codeFormat);
  saveProfile({ name });
  state.busy = true; state.error = ''; render();
  try {
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(gameRef(code));
      if (!snap.exists()) throw T.errors.noGame;
      const g = snap.data();
      if (g.players[state.uid]) return; // already in
      if (g.status !== 'lobby') throw T.errors.started;
      if (g.order.length >= MAX_PLAYERS) throw T.errors.full(MAX_PLAYERS);
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
  try {
    if (g.daily) {
      // Daily Words: round one is dealt, not typed. Everyone sees their weird word, then connects them all.
      const words = g.order.map((u, i) => ({ uid: u, name: g.players[u].name, word: g.daily.words[i].word, def: g.daily.words[i].def }));
      await updateDoc(gameRef(g.code), {
        status: 'playing', round: 2, revealed: 1, submitted: {},
        history: [{ round: 1, dealt: true, words }],
        used: [...new Set(words.map((w) => normalize(w.word)))],
      });
    } else {
      await updateDoc(gameRef(g.code), { status: 'playing', round: 1 });
    }
  } catch (e) { fail(e); }
}

async function submitWord(raw) {
  const g = state.game;
  const word = cleanWord(raw);
  if (!word) return fail(T.errors.wordFirst);
  if (isRude(word)) return fail(T.errors.rudeWord);
  if (isUsed(word, g.used)) return fail(T.errors.used(word));
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
    return toast(T.toasts.waitMinute);
  }
  nudgeCooldown[targetUid] = Date.now();
  try {
    await updateDoc(gameRef(g.code), { [`nudges.${targetUid}`]: { at: Date.now(), from: g.players[state.uid].name } });
    toast(T.toasts.nudged(g.players[targetUid].name));
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
    await updateDoc(gameRef(old.code), { next: code, nextBy: state.uid });
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
      toast(T.toasts.rematch(next.players[next.hostUid]?.name || T.someone));
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
  const head = (g.wonBy === 'vote' ? T.share.headVote : T.share.head)(g.winWord, g.history.length);
  return `${head}\n\n${lines.join('\n')}\n\n${T.share.playWithUs}`;
}

async function shareGame() {
  const g = state.game;
  const url = location.origin + location.pathname;
  const text = shareText(g);
  try {
    if (navigator.share) await navigator.share({ title: T.appName, text, url });
    else { await navigator.clipboard.writeText(`${text} ${url}`); toast(T.toasts.copiedShare); }
  } catch { /* share sheet dismissed */ }
}

async function newCrew() {
  const g = state.game;
  if (!cleanWord(state.name)) state.name = g.players[state.uid]?.name || '';
  leaveGame();
  createGame();
}

// ---------- your games ----------
function describeGame(g) {
  const others = g.order.filter((u) => u !== state.uid).map((u) => nameOf(g, u)).filter(Boolean);
  const G = T.games;
  const with_ = others.length ? G.with(listNames(others)) : G.justYou;
  if (!g.players[state.uid]) return { with_, status: g.removed?.includes(state.uid) ? G.removed : G.notIn, tone: 'muted' };
  if (g.status === 'lobby') return { with_, status: g.hostUid === state.uid ? G.startIt : G.waitingStart, tone: g.hostUid === state.uid ? 'hot' : 'muted' };
  if (g.status === 'won') return { with_, status: (g.wonBy === 'vote' ? G.closeEnough : G.forged)(g.winWord), tone: 'done' };
  if (!g.submitted?.[state.uid]) return { with_, status: G.yourTurn(g.round), tone: 'hot' };
  const waiting = g.order.filter((u) => !g.submitted?.[u]).map((u) => nameOf(g, u));
  return { with_, status: waiting.length ? G.waitingOn(listNames(waiting)) : G.revealing, tone: 'muted' };
}

async function loadSummaries() {
  // Games this player is in, from any phone they've signed in on.
  try {
    const mine = await getDocs(query(collection(db, 'games'), where('order', 'array-contains', state.uid), limit(30)));
    const list = store.get('games', []);
    const known = new Set(list.map((x) => x.code));
    mine.forEach((d) => {
      const g = d.data();
      state.summaries[g.code] = describeGame(g);
      if (!known.has(g.code)) list.push({ code: g.code, at: g.createdAt?.toMillis?.() || 0 });
    });
    list.sort((a, b) => b.at - a.at);
    store.set('games', list.slice(0, 12));
  } catch (e) { console.warn('games list', e); }
  const games = store.get('games', []);
  await Promise.all(games.filter(({ code }) => !state.summaries[code]).map(async ({ code }) => {
    try {
      const snap = await getDoc(gameRef(code));
      state.summaries[code] = snap.exists() ? describeGame(snap.data()) : { with_: T.games.ended, status: T.games.gone, tone: 'muted', gone: true };
    } catch { /* offline: keep what we had */ }
  }));
  render();
}

function forgetGame(code) {
  store.set('games', store.get('games', []).filter((g) => g.code !== code));
  delete state.summaries[code];
  render();
}

// ---------- account ----------
const profileRef = (uid) => doc(db, 'users', uid);

// Name and blocked list live on the account, so they follow you to other phones.
function saveProfile(data) {
  if (!state.uid) return;
  setDoc(profileRef(state.uid), data, { merge: true }).catch((e) => console.warn('profile', e));
}

async function loadProfile() {
  try {
    const p = (await getDoc(profileRef(state.uid))).data();
    if (!p) { if (cleanWord(state.name)) saveProfile({ name: cleanWord(state.name), blocked: [...state.blocked] }); return; }
    if (state.account && p.name) { state.name = p.name; store.set('name', p.name); }
    if (p.blocked?.length) { p.blocked.forEach((u) => state.blocked.add(u)); store.set('blocked', [...state.blocked]); }
    render();
  } catch (e) { console.warn('profile', e); }
}

function accountFail(e) {
  console.error(e);
  const msg = T.account.errors[e?.code];
  state.accountError = msg === undefined ? T.errors.generic : msg;
  state.busy = false;
  render();
}

// After signing in: either this guest became the account (same games), or we switched to an
// account from another phone and the server is bringing this phone's games along.
function afterSignIn(res) {
  state.busy = false;
  if (!res || res.status === 'redirecting') return;
  state.showAccount = false; state.accountError = ''; state.accountNote = '';
  state.account = accountOf(auth.currentUser);
  if (state.name) saveProfile({ name: cleanWord(state.name) });
  if (res.status === 'switched') {
    toast(T.account.moving);
    watchMerge(db, res.uid, (n) => { toast(T.account.moved(n)); loadSummaries(); if (state.code) openGame(state.code); });
  } else {
    toast(res.status === 'linked' ? T.account.welcome : T.account.welcomeBack);
  }
  render();
}

async function signInGoogle() {
  state.busy = true; state.accountError = ''; render();
  try { afterSignIn(await googleSignIn(auth, db)); } catch (e) { accountFail(e); }
}

async function signInEmail(email, password) {
  state.busy = true; state.accountError = ''; state.accountNote = ''; render();
  try {
    afterSignIn(state.accountMode === 'create' ? await emailCreate(auth, email, password) : await emailSignIn(auth, db, email, password));
  } catch (e) { accountFail(e); }
}

async function forgotPassword() {
  const email = document.getElementById('acct-email')?.value.trim();
  if (!email) { state.accountError = T.account.needEmail; render(); return; }
  try {
    await resetPassword(auth, email);
    state.accountError = ''; state.accountNote = T.account.resetSent(email); render();
  } catch (e) { accountFail(e); }
}

// Signing out or deleting leaves you as a fresh guest on this phone.
function clearLocal() {
  ['games', 'blocked', 'alertsAsked'].forEach((k) => { try { localStorage.removeItem('samesies.' + k); } catch { /* private mode */ } });
  state.blocked = new Set(); state.summaries = {};
}

async function signOutTap() {
  if (!confirm(T.account.confirmSignOut)) return;
  try {
    await turnOffAlerts(fb, db, state.uid);
    clearLocal();
    state.showSettings = false; state.uid = null; state.account = null;
    await signOutNow(auth);
    toast(T.account.signedOut);
  } catch (e) { fail(e); }
}

async function deleteAccountTap() {
  if (!confirm(T.del.confirm)) return;
  try {
    await turnOffAlerts(fb, db, state.uid);
    await requestDelete(db, state.uid);
    clearLocal();
    state.name = ''; store.set('name', '');
    state.showSettings = false; state.uid = null; state.account = null;
    await signOutNow(auth);
    toast(T.del.done);
  } catch (e) { fail(e); }
}

// ---------- report and block ----------
async function sendReport(reason, note) {
  const g = state.game;
  const uid = state.reportFor;
  const words = g.history.flatMap((h) => h.words.filter((w) => w.uid === uid).map((w) => w.word));
  try {
    await addDoc(collection(db, 'reports'), {
      by: state.uid, byName: g.players[state.uid]?.name || '',
      game: g.code, reported: uid, reportedName: g.players[uid]?.name || '',
      words, reason, note: String(note || '').slice(0, 500), at: serverTimestamp(), handled: false,
    });
    state.reportFor = null;
    toast(T.report.sent);
  } catch (e) { fail(e); }
}

function toggleBlock(uid) {
  const name = state.game?.players[uid]?.name || T.thisPlayer;
  if (state.blocked.has(uid)) { state.blocked.delete(uid); toast(T.report.unblocked(name)); }
  else { state.blocked.add(uid); toast(T.report.blocked(name)); }
  store.set('blocked', [...state.blocked]);
  saveProfile({ blocked: [...state.blocked] });
  state.reportFor = null;
  render();
}

// ---------- remove a stuck player ----------
async function removePlayer(uid) {
  const g = state.game;
  const name = g.players[uid]?.name || T.thisPlayer;
  if (!confirm(T.confirmRemove(name))) return;
  try {
    await runTransaction(db, async (tx) => {
      const cur = (await tx.get(gameRef(g.code))).data();
      if (!cur.players[uid] || cur.order.length <= MIN_PLAYERS) return;
      const players = { ...cur.players }; delete players[uid];
      const order = cur.order.filter((u) => u !== uid);
      const submitted = { ...cur.submitted }; delete submitted[uid];
      const everyone = cur.status === 'playing' && order.every((u) => submitted[u]);
      tx.update(gameRef(g.code), {
        players, order, submitted,
        removed: [...(cur.removed || []), uid],
        ...(cur.hostUid === uid ? { hostUid: order[0] } : {}),
        ...(everyone ? { revealed: cur.round } : {}),
      });
    });
    toast(T.toasts.removed(name));
  } catch (e) { fail(e); }
}

// ---------- reactions ----------
async function react(round, target, emoji) {
  const g = state.game;
  const key = `${round}_${target}`;
  const mine = g.reactions?.[key]?.[state.uid];
  try {
    await updateDoc(gameRef(g.code), { [`reactions.${key}.${state.uid}`]: mine === emoji ? deleteField() : emoji });
  } catch (e) { fail(e); }
}

function reactionRow(g, round, uid) {
  const r = g.reactions?.[`${round}_${uid}`] || {};
  const counts = {};
  Object.values(r).forEach((e) => { counts[e] = (counts[e] || 0) + 1; });
  return `<div class="reacts">${REACTIONS.map((e) => `<button class="react${r[state.uid] === e ? ' mine' : ''}" data-act="react" data-round="${round}" data-uid="${esc(uid)}" data-emoji="${e}" aria-label="${T.a11y.react(e, counts[e])}">${e}${counts[e] ? `<span>${counts[e]}</span>` : ''}</button>`).join('')}</div>`;
}

function reactionBadges(g, round, uid) {
  const r = g.reactions?.[`${round}_${uid}`] || {};
  const counts = {};
  Object.values(r).forEach((e) => { counts[e] = (counts[e] || 0) + 1; });
  const parts = Object.entries(counts).map(([e, n]) => `${e}${n > 1 ? n : ''}`);
  return parts.length ? `<span class="chip-reacts">${parts.join(' ')}</span>` : '';
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
        toast(T.toasts.nudgedYou(n.from));
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
    if (g.players[state.uid] && !store.get('toured', false)) { state.tour = null; store.set('toured', true); }

    // Someone asked "Close enough?"
    if (g.vote && !g.vote.result && g.vote.by !== state.uid) {
      const key = `${code}.${g.vote.round}`;
      if (lastVoteSeen !== key) {
        lastVoteSeen = key;
        toast(T.toasts.askedClose(g.players[g.vote.by]?.name || T.someone));
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
  loadSummaries();
}

// ---------- views ----------
function header(g, title) {
  const usedCount = g.used.length;
  return `
  <header class="bar">
    ${backButton}
    <div class="bar-title">
      <span class="eyebrow">${T.header.game(esc(g.code))}</span>
      <h1 class="h-round">${esc(title)}</h1>
    </div>
    <button class="icon-btn quiet" data-act="tour" aria-label="${T.a11y.howTo}">${helpIcon}</button>
    <button class="icon-btn quiet" data-act="mute" aria-label="${isMuted() ? T.a11y.soundOn : T.a11y.soundOff}" aria-pressed="${isMuted()}">${soundIcon(isMuted())}</button>
    ${g.status !== 'lobby' ? `<button class="icon-btn" data-act="used" aria-label="${T.a11y.usedWords(usedCount)}">${listIcon}</button>` : ''}
  </header>`;
}

function viewLoading(msg = T.loading) {
  return `<main class="screen center"><div class="pulse">${art('logo', 150)}</div><p class="muted">${esc(msg)}</p></main>`;
}

function viewHome() {
  const games = store.get('games', []);
  return `
  <main class="screen">
    <div class="home-top"><button class="help-pill" data-act="tour">${helpIcon}${T.home.howTo}</button><button class="icon-btn quiet settings-btn" data-act="settings" aria-label="${T.a11y.settings}">${gearIcon}</button></div>
    <div class="hero">
      ${art('logo', 210, 'hero-logo')}
      <h1 class="wordmark">Brain<b>smith</b></h1>
      <p class="tagline">${T.home.tagline}</p>
    </div>
    ${state.moving ? `<p class="notice move-note">${T.move.home}</p>` : ''}
    <div class="grow"></div>
    <form class="stack" data-form="create">
      <label for="name" class="label">${T.home.yourName}</label>
      <input id="name" name="name" class="input" autocomplete="nickname" maxlength="40" value="${esc(state.name)}" placeholder="${T.home.namePlaceholder}">
      <button class="btn primary" ${state.busy ? 'disabled' : ''}>${T.home.start}</button>
    </form>
    <button class="daily-card" data-act="daily" ${state.busy ? 'disabled' : ''}>
      <span class="daily-top"><span class="eyebrow">${T.home.dailyEyebrow}</span><span class="muted small">${esc(new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' }))}</span></span>
      <span class="daily-title">${T.home.dailyTitle}</span>${art('bolts', 64, 'daily-art')}
      <span class="muted small">${T.home.dailySub}</span>
    </button>
    <div class="or"><span></span>${T.home.or}<span></span></div>
    <form class="row" data-form="join">
      <label for="code" class="sr-only">${T.a11y.gameCode}</label>
      <input id="code" name="code" class="input code" maxlength="4" autocapitalize="characters" autocomplete="off" placeholder="${T.home.codePlaceholder}">
      <button class="btn outline" ${state.busy ? 'disabled' : ''}>${T.home.join}</button>
    </form>
    ${state.error ? `<p class="error" role="alert">${esc(state.error)}</p>` : ''}
    ${games.length ? (() => {
      const turns = games.filter((x) => state.summaries[x.code]?.tone === 'hot').length;
      return `<button class="btn soft games-btn" data-act="games">${T.games.button(games.length)}${turns ? `<span class="turn-pill">${T.games.needYou(turns)}</span>` : ''}</button>`;
    })() : ''}
    ${!state.account && games.length ? `<button class="linkish fine save-games" data-act="account">${T.home.saveGames}</button>` : ''}
    <p class="fine">${T.home.fine}</p>
    <p class="fine maker">${T.home.maker}</p>
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
      ${art('logo', 170, 'hero-logo')}
      <h1 class="wordmark small">Brain<b>smith</b></h1>
      <p class="tagline">${T.join.invited(esc(nameOf(g, g.hostUid) || T.aFriend), esc(g.code))}</p>
    </div>
    <div class="grow"></div>
    ${started ? `<p class="notice">${T.join.started}</p>
      <button class="btn outline" data-act="home">${T.goToStart}</button>`
    : full ? `<p class="notice">${T.join.full}</p><button class="btn outline" data-act="home">${T.goToStart}</button>`
    : `<form class="stack" data-form="joinlink">
        <label for="name" class="label">${T.home.yourName}</label>
        <input id="name" name="name" class="input" autocomplete="nickname" maxlength="40" value="${esc(state.name)}" placeholder="${T.home.namePlaceholder}">
        <button class="btn primary" ${state.busy ? 'disabled' : ''}>${T.join.button}</button>
      </form>`}
    ${state.error ? `<p class="error" role="alert">${esc(state.error)}</p>` : ''}
  </main>`;
}

function viewLobby(g) {
  const isHost = g.hostUid === state.uid;
  const enough = g.order.length >= MIN_PLAYERS;
  return `
  <main class="screen">
    ${header(g, T.lobby.title)}
    <section class="card center-text">
      ${g.daily ? `<span class="badge">${T.lobby.dailyBadge}</span>` : ''}
      <span class="muted">${T.lobby.inviteWith}</span>
      <div class="big-code">${esc(g.code)}</div>
      <button class="btn soft" data-act="share">${T.lobby.shareLink}</button>
    </section>
    <section class="stack">
      <span class="eyebrow">${T.lobby.players(g.order.length, MAX_PLAYERS)}</span>
      ${g.order.map((u) => `
        <div class="player">
          <div class="dot done" style="background:${colorOf(g, u)}">${checkIcon}</div>
          <span class="pname">${esc(nameOf(g, u))}${u === state.uid ? T.you : ''}</span>
          ${u === g.hostUid ? `<span class="muted small">${T.host}</span>` : ''}
          ${moreButton(g, u)}
        </div>`).join('')}
    </section>
    <div class="grow"></div>
    ${isHost
      ? `<button class="btn primary" data-act="start" ${enough ? '' : 'disabled'}>${enough ? T.lobby.startNow : T.lobby.needMore}</button>`
      : `<p class="fine">${T.lobby.waitingFor(esc(nameOf(g, g.hostUid) || T.theHost))}</p>`}
  </main>`;
}

function viewRound(g) {
  const prev = g.history[g.history.length - 1];
  const locked = !!g.submitted?.[state.uid];
  const waitingOn = g.order.filter((u) => !g.submitted?.[u]);
  return `
  <main class="screen">
    ${header(g, T.round.title(g.round))}
    ${prev && g.vote?.round === prev.round && !g.vote.result ? voteCard(g) : ''}
    <section class="card center-text">
      ${prev ? `
        <span class="muted">${T.round.connect}</span>
        <div class="word-chips">${prev.words.map((w) => `<span class="word-chip" style="--pc:${colorOf(g, w.uid)}">${esc(wordOf(w))}${reactionBadges(g, prev.round, w.uid)}</span>`).join('')}</div>
        ${prev.dealt ? `<div class="defs">${prev.words.map((w) => `<span><strong>${esc(w.word)}:</strong> ${esc(w.def)}</span>`).join('')}</div>` : ''}
        ${g.vote?.round === prev.round || prev.dealt ? '' : `<button class="linkish close-link" data-act="vote">${T.round.askClose}</button>`}`
      : `
        <span class="muted">${T.round.roundOne}</span>
        <p class="prompt">${T.round.prompt}</p>
        <span class="muted small">${T.round.promptTip}</span>`}
    </section>
    ${locked ? `
      <section class="locked">
        <span class="muted">${T.round.lockedIn}</span>
        <div class="locked-word">${esc(state.mySub?.round === g.round ? state.mySub.word : '✓')}</div>
        <span class="muted small">${waitingOn.length ? T.round.waitingOn(waitingOn.map((u) => esc(nameOf(g, u))).join(', ')) : T.round.revealing}</span>
      </section>
      ${waitingOn.length ? viewAlertAsk() : ''}`
    : `
      <form class="stack" data-form="word">
        <label for="word" class="label">${T.round.yourWord}</label>
        <input id="word" name="word" class="input big" maxlength="40" autocomplete="off" autocorrect="on" spellcheck="true" autocapitalize="sentences" placeholder="${T.round.wordPlaceholder}">
        <button class="btn primary" ${state.busy ? 'disabled' : ''}>${T.round.lock}</button>
        ${prev ? '' : `<button type="button" class="btn soft" data-act="starter">${T.round.starter}</button>`}
        <span class="fine">${T.round.secret}</span>
      </form>`}
    ${state.error ? `<p class="error" role="alert">${esc(state.error)}</p>` : ''}
    <div class="grow"></div>
    <section class="stack tight">
      <span class="eyebrow">${T.round.players}</span>
      ${g.order.map((u) => {
        const done = !!g.submitted?.[u];
        const me = u === state.uid;
        // The host can drop someone who wandered off; if the host is the one missing, anyone can.
        const canRemove = !me && !done && g.order.length > MIN_PLAYERS && (g.hostUid === state.uid || u === g.hostUid);
        return `
        <div class="player">
          ${done ? `<div class="dot done" style="background:${colorOf(g, u)}">${checkIcon}</div>` : `<div class="dot" style="border-color:${colorOf(g, u)}"></div>`}
          <span class="pname">${esc(nameOf(g, u))}${me ? T.you : ''}</span>
          ${done ? `<span class="muted small">${T.round.playerLocked}</span>${moreButton(g, u)}`
            : me ? `<span class="muted small">${T.round.thinking}</span>`
            : `<button class="btn nudge" data-act="nudge" data-uid="${esc(u)}">${T.round.nudge}</button>${canRemove ? `<button class="icon-btn soft remove" data-act="remove" data-uid="${esc(u)}" aria-label="${T.a11y.removePlayer(esc(nameOf(g, u)))}">${closeIcon}</button>` : ''}${moreButton(g, u)}`}
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

const listNames = T.listNames;

function viewReveal(g, entry) {
  const groups = matchGroups(entry.words);
  const matched = new Set(groups.flat().map((w) => w.uid));
  const msg = groups.length
    ? groups.map((grp) => T.reveal.said(listNames(grp.map((w) => esc(whoOf(w)))), grp.length === 2, esc(wordOf(grp[0])))).join('<br>')
    : '';
  if (entry.dealt) return viewDealt(g, entry);
  const sub = groups.length
    ? T.reveal.soClose
    : (entry.words.length === 2 ? T.reveal.notYetTwo : T.reveal.notYetAll);
  return `
  <main class="screen reveal-screen">
    ${header(g, T.reveal.title(entry.round))}
    <section class="stack reveal">
      ${entry.words.map((w) => `
        <div class="reveal-card${matched.has(w.uid) ? ' matched' : ''}" style="--pc:${colorOf(g, w.uid)}">
          <span class="rname">${esc(whoOf(w))}</span>
          <span class="rword">${esc(wordOf(w))}</span>
          ${reactionRow(g, entry.round, w.uid)}
        </div>`).join('')}
    </section>
    <div class="after-reveal stack">
    ${msg ? `<div class="so-close"><span class="so-close-names">${msg}</span><span class="muted">${sub}</span></div>`
      : `<div class="row msg">${art('spark', 44)}<span class="muted">${esc(sub)}</span></div>`}
    ${g.vote?.round === entry.round ? voteCard(g)
      : `<button class="btn ${nearlyMatch(entry.words.map((w) => w.word)) ? 'close-hot' : 'soft'}" data-act="vote">${nearlyMatch(entry.words.map((w) => w.word)) ? T.reveal.closeHot : T.reveal.close}</button>`}
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${entry.round}">${T.reveal.next(entry.round + 1)}</button>
  </main>`;
}

function viewDealt(g, entry) {
  return `
  <main class="screen reveal-screen">
    ${header(g, T.dealt.title)}
    <section class="stack reveal">
      ${entry.words.map((w) => `
        <div class="reveal-card" style="--pc:${colorOf(g, w.uid)}">
          <span class="rname">${T.dealt.got(esc(whoOf(w)))}</span>
          <span class="rword">${esc(w.word)}</span>
          <span class="rdef">${esc(w.def)}</span>
        </div>`).join('')}
    </section>
    <div class="after-reveal stack">
      <div class="row msg">${art('spark', 44)}<span class="muted">${T.dealt.msg}</span></div>
    </div>
    <div class="grow"></div>
    <button class="btn primary after-reveal" data-act="seen" data-round="${entry.round}">${T.dealt.next}</button>
  </main>`;
}

function voteCard(g) {
  const v = g.vote;
  const asker = esc(nameOf(g, v.by) || T.someone);
  if (v.result === 'no') {
    const naysayer = esc(nameOf(g, Object.keys(v.no)[0]) || T.someone);
    return `<section class="vote done"><span class="muted">${T.vote.playOn(naysayer)}</span></section>`;
  }
  const iVoted = v.yes[state.uid] || v.no[state.uid];
  const waiting = g.order.filter((u) => !v.yes[u] && !v.no[u]).map((u) => esc(nameOf(g, u)));
  return `
  <section class="vote" aria-live="polite">
    <span class="vote-title">${T.vote.title}</span>
    <span class="muted">${T.vote.explain(v.by === state.uid ? T.vote.youAsked : T.vote.asked(asker), v.round)}</span>
    ${iVoted
      ? `<span class="muted small">${waiting.length ? T.vote.waitingOn(waiting.join(', ')) : T.vote.counting}</span>`
      : `<div class="row"><button class="btn primary grow" data-act="yes">${T.vote.yes}</button><button class="btn outline" data-act="no">${T.vote.no}</button></div>`}
  </section>`;
}

function viewWon(g) {
  const names = g.order.map((u) => nameOf(g, u));
  const nameList = listNames(names);
  return `
  <main class="screen win">
    <div class="win-top">
      <div class="pop win-art">${art('swing', 150)}</div>
      <h1 class="win-title">${g.wonBy === 'vote' ? T.won.closeEnough : T.won.forged}</h1>
      <span class="win-sub">${g.wonBy === 'vote' ? T.won.agreed : T.won.everyone}</span>
      <div class="win-word">${esc(g.winWord)}</div>
      <span class="win-sub">${esc(nameList)} · ${T.rounds(g.history.length)}</span>
    </div>
    <div class="grow"></div>
    <section class="chain">
      <span class="eyebrow light">${T.won.howYouGot}</span>
      ${g.history.map((h, i) => `<span class="${i === g.history.length - 1 ? 'strong' : ''}">${h.words.map((w) => esc(wordOf(w))).join(' · ')}</span>`).join('')}
    </section>
    ${state.moving ? `<p class="notice move-note">${T.move.won}</p>` : ''}
    <button class="btn coral" data-act="sharegame">${T.won.share}</button>
    ${g.next
      ? `<button class="btn white" data-act="open" data-code="${esc(g.next)}">${T.won.joinNext}</button>`
      : `<button class="btn white" data-act="again" ${state.busy ? 'disabled' : ''}>${T.won.again}</button>`}
    <div class="row">
      <button class="btn ghost-light grow" data-act="newcrew" ${state.busy ? 'disabled' : ''}>${T.won.newCrew}</button>
      <button class="btn ghost-light grow" data-act="home">${T.won.home}</button>
    </div>
  </main>`;
}

// How to Play: swipeable cards. Each card has a little scene drawn in HTML so it follows dark mode.
const mini = (word, name, cls = '') => `<span class="mini ${cls}"><b>${word}</b><i>${name}</i></span>`;
const TT = T.tour;
const [N1, N2, N3] = TT.names;
const TOUR = [
  { title: TT.goalTitle, body: TT.goalBody, art: () => `<div class="tour-art">${art('logo', 190)}</div>` },
  {
    title: TT.secretTitle,
    body: TT.secretBody,
    art: () => `<div class="scene">${mini('?', N1, 'back')}${mini('?', N2, 'back d1')}${mini('?', N3, 'back d2')}</div>`,
  },
  {
    title: TT.flipTitle,
    body: TT.flipBody,
    art: () => `<div class="scene flip">${mini(TT.flipWords[0], N1)}${mini(TT.flipWords[1], N2, 'd1')}${mini(TT.flipWords[2], N3, 'd2')}</div>`,
  },
  {
    title: TT.middleTitle,
    body: TT.middleBody,
    art: () => `<div class="scene bridge"><span class="bridge-row"><span class="pill-word">${TT.flipWords[0]}</span><span class="plus">+</span><span class="pill-word">${TT.flipWords[1]}</span></span><span class="arrow">↓</span><span class="pill-word hot">${TT.middleGuess}</span></div>`,
  },
  {
    title: TT.forgeTitle,
    body: TT.forgeBody,
    art: () => `<div class="scene forged">${art('swing', 80, 'forge-hammer')}${mini(TT.forgeWord, N1, 'win')}${mini(TT.forgeWord, N2, 'win d1')}${mini(TT.forgeWord, N3, 'win d2')}</div>`,
  },
  {
    title: TT.matchTitle,
    body: '',
    art: () => `<ul class="rules">${TT.matchRules.map(([kind, head, rest]) => `
      <li class="${kind}"><span class="mark">${kind === 'ok' ? checkIcon : '✕'}</span><span><b>${head}</b> ${rest}</span></li>`).join('')}
    </ul>`,
  },
  {
    title: TT.toolsTitle,
    body: '',
    art: () => `<ul class="rules tools">${TT.tools.map(([icon, head, rest]) => `
      <li><span class="mark">${icon === 'list' ? listIcon : icon}</span><span><b>${head}</b> ${rest}</span></li>`).join('')}
    </ul>`,
  },
];

function viewTour() {
  const i = state.tour;
  const last = TOUR.length - 1;
  return `
  <div class="sheet-backdrop tour" data-act="tour-skip">
    <div class="sheet howto" role="dialog" aria-modal="true" aria-labelledby="tour-title" data-stop>
      <div class="howto-head">
        <span id="tour-title" class="h-sheet">${TT.title}</span>
        <button class="icon-btn quiet" data-act="tour-skip" aria-label="${T.a11y.closeHowTo}">✕</button>
      </div>
      <div class="howto-track" tabindex="0" aria-roledescription="carousel">
        ${TOUR.map((c, j) => `
        <section class="howto-card${j === i ? ' on' : ''}" aria-roledescription="slide" aria-label="${T.a11y.slide(j + 1, TOUR.length, c.title)}">
          ${c.art()}
          <span class="eyebrow">${TT.count(j + 1, TOUR.length)}</span>
          <h2 class="howto-title">${c.title}</h2>
          ${c.body ? `<p class="muted tour-body">${c.body}</p>` : ''}
        </section>`).join('')}
      </div>
      <div class="dots" aria-hidden="true">${TOUR.map((_, j) => `<span class="${j === i ? 'on' : ''}"></span>`).join('')}</div>
      <div class="row howto-nav">
        <button class="btn ghost" data-act="tour-skip" ${i === last ? 'hidden' : ''}>${TT.skip}</button>
        <button class="btn primary grow" data-act="tour-next">${i === last ? TT.done : TT.next}</button>
      </div>
    </div>
  </div>`;
}

// Keep the dots and button in step with swiping, without re-rendering the whole page.
function wireTour() {
  const track = $app.querySelector('.howto-track');
  if (!track) return;
  track.scrollLeft = state.tour * track.clientWidth;
  const sync = () => {
    const i = Math.round(track.scrollLeft / track.clientWidth);
    if (i === state.tour || i < 0 || i >= TOUR.length) return;
    state.tour = i;
    const last = i === TOUR.length - 1;
    $app.querySelectorAll('.tour .dots span').forEach((d, j) => d.classList.toggle('on', j === i));
    $app.querySelectorAll('.howto-card').forEach((c, j) => c.classList.toggle('on', j === i));
    const next = $app.querySelector('[data-act=tour-next]');
    next.textContent = last ? TT.done : TT.next;
    $app.querySelector('.howto-nav .btn.ghost').hidden = last;
  };
  track.addEventListener('scroll', () => { clearTimeout(wireTour.t); wireTour.t = setTimeout(sync, 60); }, { passive: true });
}

function goTour(i) {
  const track = $app.querySelector('.howto-track');
  if (!track) { state.tour = i; render(); return; }
  track.scrollTo({ left: i * track.clientWidth, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
}

function viewGamesSheet() {
  const games = store.get('games', []);
  return `
  <div class="sheet-backdrop" data-act="closegames">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="games-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="games-title" class="h-sheet">${T.games.title}</h2>
        <button class="icon-btn soft" data-act="closegames" aria-label="${T.a11y.close}">${closeIcon}</button>
      </div>
      ${games.length ? games.map(({ code }) => {
        const d = state.summaries[code];
        return `
        <div class="game-row">
          <button class="game-open" data-act="${d?.gone ? 'forget' : 'open'}" data-code="${esc(code)}">
            <span class="game-with">${esc(d ? d.with_ : T.games.loading)}</span>
            <span class="game-status ${d?.tone || ''}">${esc(d ? d.status : code)}</span>
          </button>
          <button class="icon-btn soft" data-act="forget" data-code="${esc(code)}" aria-label="${T.a11y.forgetGame(esc(code))}">${closeIcon}</button>
        </div>`;
      }).join('') : `<p class="muted">${T.games.none}</p>`}
    </div>
  </div>`;
}

// ---------- alerts ----------
// Asked once, right after you lock in a word (the moment you'd want a ping later).
function viewAlertAsk() {
  const A = T.alerts;
  if (alertSupport() !== 'yes' || alertPermission() !== 'default' || store.get('alertsAsked', false)) return '';
  return `
      <section class="alert-ask">
        <span class="alert-ask-title">${A.askTitle}</span>
        <span class="muted small">${A.askBody}</span>
        <div class="row"><button class="btn primary grow" data-act="alerts-on">${A.yes}</button><button class="btn ghost" data-act="alerts-later">${A.no}</button></div>
      </section>`;
}

function viewAlertRow() {
  const A = T.alerts;
  const sup = alertSupport();
  if (sup === 'no') return '';
  if (sup === 'ios-install') {
    return `<div class="set-row static"><span class="set-text"><span class="set-label">${A.label}</span><span class="set-sub">${A.iosInstall}</span></span></div>`;
  }
  if (alertPermission() === 'denied') {
    return `<div class="set-row static"><span class="set-text"><span class="set-label">${A.label}</span><span class="set-sub">${A.blocked}</span></span></div>`;
  }
  const on = alertsOn();
  return `
        <button class="set-row" data-act="${on ? 'alerts-off' : 'alerts-on'}" role="switch" aria-checked="${on}">
          <span class="set-text"><span class="set-label">${A.label}</span><span class="set-sub">${A.sub}</span></span>
          <span class="switch ${on ? 'on' : ''}" aria-hidden="true"><i></i></span>
        </button>`;
}

async function alertsOnTap() {
  store.set('alertsAsked', true);
  try {
    const ok = await turnOnAlerts(fb, db, state.uid);
    toast(ok ? T.alerts.onToast : T.alerts.notNow);
  } catch (e) { console.error(e); toast(T.alerts.failed); }
  render();
}

function viewSettingsSheet() {
  const games = store.get('games', []);
  const S = T.settings;
  const row = (act, label, sub = '', extra = '') => `
        <button ${extra.includes('class=') ? '' : 'class="set-row"'} data-act="${act}" ${extra}>
          <span class="set-text"><span class="set-label">${label}</span>${sub ? `<span class="set-sub">${sub}</span>` : ''}</span>${chevron}
        </button>`;
  return `
  <div class="sheet-backdrop" data-act="closesettings">
    <div class="sheet settings" role="dialog" aria-modal="true" aria-labelledby="settings-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="settings-title" class="h-sheet">${S.title}</h2>
        <button class="icon-btn soft" data-act="closesettings" aria-label="${T.a11y.close}">${closeIcon}</button>
      </div>

      <div class="set-group">
        ${state.account
          ? `<div class="set-row static"><span class="set-text"><span class="set-label">${esc(S.signedIn(state.account.email))}</span><span class="set-sub">${S.signedInSub}</span></span></div>
        ${row('signout', S.signOut)}`
          : row('account', S.account, S.accountSub, 'class="set-row hot-row"')}
      </div>

      <form class="set-group" data-form="setname">
        <label for="set-name" class="label">${S.yourName}</label>
        <div class="row">
          <input id="set-name" name="setname" class="input grow" autocomplete="nickname" maxlength="40" value="${esc(state.name)}" placeholder="${T.home.namePlaceholder}">
          <button class="btn outline">${S.save}</button>
        </div>
        <span class="set-sub">${S.nameNote}</span>
      </form>

      <div class="set-group">
        <button class="set-row" data-act="mute" role="switch" aria-checked="${!isMuted()}">
          <span class="set-text"><span class="set-label">${S.sound}</span><span class="set-sub">${S.soundSub}</span></span>
          <span class="switch ${isMuted() ? '' : 'on'}" aria-hidden="true"><i></i></span>
        </button>
        ${viewAlertRow()}
        ${row('settings-games', S.pastGames, games.length ? S.pastCount(games.length) : S.noneYet)}
        ${row('settings-tour', S.howTo, S.howToSub)}
      </div>

      <div class="set-group">
        <a class="set-row" href="privacy.html"><span class="set-text"><span class="set-label">${S.privacy}</span></span>${chevron}</a>
        <a class="set-row" href="terms.html"><span class="set-text"><span class="set-label">${S.terms}</span></span>${chevron}</a>
        <div class="set-row disabled" aria-disabled="true"><span class="set-text"><span class="set-label">${S.restore}</span><span class="set-sub">${S.restoreSoon}</span></span></div>
      </div>

      <div class="set-group">
        ${row('delete-account', S.deleteAccount, S.deleteSub, 'class="set-row danger-row"')}
      </div>

      <p class="fine maker">${S.contact}<br>${S.footer}</p>
    </div>
  </div>`;
}

function viewAccountSheet() {
  const A = T.account;
  const creating = state.accountMode === 'create';
  return `
  <div class="sheet-backdrop" data-act="closeaccount">
    <div class="sheet account" role="dialog" aria-modal="true" aria-labelledby="account-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="account-title" class="h-sheet">${A.title}</h2>
        <button class="icon-btn soft" data-act="closeaccount" aria-label="${T.a11y.close}">${closeIcon}</button>
      </div>
      <p class="muted">${A.body}</p>
      <button class="btn google" data-act="google" ${state.busy ? 'disabled' : ''}>${googleIcon}${A.google}</button>
      <div class="or"><span></span>${A.or}<span></span></div>
      <form class="stack tight" data-form="email">
        <label for="acct-email" class="sr-only">${A.email}</label>
        <input id="acct-email" name="email" type="email" class="input" autocomplete="email" autocapitalize="off" placeholder="${A.email}" required>
        <label for="acct-pass" class="sr-only">${A.password}</label>
        <input id="acct-pass" name="password" type="password" class="input" autocomplete="${creating ? 'new-password' : 'current-password'}" minlength="6" placeholder="${creating ? A.passwordNew : A.password}" required>
        <button class="btn primary" ${state.busy ? 'disabled' : ''}>${state.busy ? A.working : creating ? A.create : A.signIn}</button>
      </form>
      ${state.accountError ? `<p class="error" role="alert">${esc(state.accountError)}</p>` : ''}
      ${state.accountNote ? `<p class="notice small-note" role="status">${esc(state.accountNote)}</p>` : ''}
      <div class="row between acct-links">
        <button class="linkish acct-link" data-act="account-mode">${creating ? A.haveOne : A.needOne}</button>
        ${creating ? '' : `<button class="linkish acct-link" data-act="forgot">${A.forgot}</button>`}
      </div>
    </div>
  </div>`;
}

function viewReportSheet(g) {
  const R = T.report;
  const uid = state.reportFor;
  const name = esc(g.players[uid]?.name || T.thisPlayer);
  const blocked = state.blocked.has(uid);
  const body = state.reportStep === 'report'
    ? `<form class="stack tight" data-form="report">
        <span class="label">${R.what}</span>
        ${R.reasons.map((r, i) => `<label class="choice"><input type="radio" name="reason" value="${esc(r)}" ${i === 0 ? 'checked' : ''}><span>${esc(r)}</span></label>`).join('')}
        <label for="report-note" class="sr-only">${R.note}</label>
        <input id="report-note" name="note" class="input" maxlength="500" placeholder="${R.note}">
        ${blocked ? '' : `<label class="choice"><input type="checkbox" name="block"><span>${R.alsoBlock(name)}</span></label>`}
        <button class="btn primary">${R.send}</button>
      </form>`
    : `<div class="set-group">
        <button class="set-row" data-act="report-start"><span class="set-text"><span class="set-label">${R.reportBtn(name)}</span><span class="set-sub">${R.reportSub}</span></span>${chevron}</button>
        <button class="set-row" data-act="block" data-uid="${esc(uid)}"><span class="set-text"><span class="set-label">${blocked ? R.unblockBtn(name) : R.blockBtn(name)}</span><span class="set-sub">${blocked ? R.unblockSub : R.blockSub}</span></span>${chevron}</button>
      </div>`;
  return `
  <div class="sheet-backdrop" data-act="closereport">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="report-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="report-title" class="h-sheet">${state.reportStep === 'report' ? R.title(name) : name}</h2>
        <button class="icon-btn soft" data-act="closereport" aria-label="${T.a11y.close}">${closeIcon}</button>
      </div>
      ${body}
    </div>
  </div>`;
}

function viewUsedSheet(g) {
  return `
  <div class="sheet-backdrop" data-act="closeused">
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="used-title" data-stop>
      <div class="grabber"></div>
      <div class="row between">
        <h2 id="used-title" class="h-sheet">${T.used.title}</h2>
        <button class="icon-btn soft" data-act="closeused" aria-label="${T.a11y.close}">${closeIcon}</button>
      </div>
      <p class="muted">${T.used.explain}</p>
      ${g.history.length ? g.history.map((h) => `
        <div class="stack tight">
          <span class="eyebrow">${T.used.round(h.round)}</span>
          <div class="chips">${h.words.filter((w, i, all) => all.findIndex((x) => normalize(x.word) === normalize(w.word)) === i).map((w) => `<span class="chip static">${esc(wordOf(w))}</span>`).join('')}</div>
        </div>`).join('') : `<p class="muted">${T.used.none}</p>`}
    </div>
  </div>`;
}

function currentView() {
  if (state.authError) return `<main class="screen center"><p class="error">${esc(state.authError)}</p></main>`;
  if (!state.uid) return viewLoading();
  if (!state.code) return viewHome();
  if (state.gameMissing) {
    return `<main class="screen center"><header class="bar top-left">${backButton}</header>${art('logo', 150)}<p class="notice">${T.missing(esc(state.code))}</p><button class="btn outline" data-act="home">${T.goToStart}</button></main>`;
  }
  const g = state.game;
  if (!g) return viewLoading(T.findingGame);
  if (!g.players[state.uid] && g.removed?.includes(state.uid)) {
    return `<main class="screen center"><header class="bar top-left">${backButton}</header>${art('hammer', 120)}<p class="notice">${T.removedFrom(esc(g.code))}</p><button class="btn outline" data-act="home">${T.goToStart}</button></main>`;
  }
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
  const tourWasOpen = !!$app.querySelector('.tour');
  const toastWas = $app.querySelector('.toast')?.textContent;
  $app.innerHTML = currentView()
    + (state.showUsed && g ? viewUsedSheet(g) : '')
    + (state.showGames && !state.code ? viewGamesSheet() : '')
    + (state.showSettings && !state.code && !state.showAccount ? viewSettingsSheet() : '')
    + (state.showAccount && !state.code ? viewAccountSheet() : '')
    + (state.reportFor && g?.players[state.reportFor] ? viewReportSheet(g) : '')
    + (state.tour !== null ? viewTour() : '')
    + (state.toast ? `<div class="toast" role="status">${esc(state.toast)}</div>` : '');

  // Live updates re-render everything; only play entrance animations the first time something appears.
  const main = $app.querySelector('main');
  const screenKey = main ? main.className + '|' + (main.querySelector('h1')?.textContent || '') : '';
  if (screenKey === render.lastKey) main.classList.add('no-anim');
  else if (main) playScreenFx(main, g);
  render.lastKey = screenKey;
  if (sheetWasOpen) $app.querySelector('.sheet-backdrop')?.classList.add('no-anim');
  if (tourWasOpen) $app.querySelector('.tour')?.classList.add('no-anim');
  wireTour();
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
  if (form === 'email') signInEmail(String(data.get('email') || ''), String(data.get('password') || ''));
  if (form === 'report') {
    const uid = state.reportFor;
    sendReport(String(data.get('reason') || ''), data.get('note')).then(() => { if (data.get('block') && !state.blocked.has(uid)) { state.reportFor = uid; toggleBlock(uid); } else render(); });
  }
  if (form === 'setname') {
    const n = cleanWord(data.get('setname') || '');
    if (!n) { toast(T.toasts.nameFirst); return; }
    if (isRude(n)) { toast(T.errors.rudeName); return; }
    state.name = n; store.set('name', n); saveProfile({ name: n });
    const home = document.getElementById('name'); if (home) home.value = n;
    toast(T.toasts.nameSaved); render();
  }
});

$app.addEventListener('click', async (e) => {
  const el = e.target.closest('[data-act]');
  if (!el) return;
  if (el.dataset.act === 'closeused' && e.target.closest('[data-stop]') && !e.target.closest('button')) return;
  const act = el.dataset.act;
  if (act === 'home') { leaveGame(); if (state.moving) checkMove(); }
  if (act === 'open') { state.showGames = false; openGame(el.dataset.code); }
  if (act === 'start') startGame();
  if (act === 'nudge') nudge(el.dataset.uid);
  if (act === 'again') playAgain();
  if (act === 'vote') startVote();
  if (act === 'sharegame') shareGame();
  if (act === 'games') { state.showGames = true; render(); loadSummaries(); }
  if (act === 'settings') { state.showSettings = true; render(); }
  if (act === 'closesettings' && (el.tagName === 'BUTTON' || !e.target.closest('[data-stop]'))) { state.showSettings = false; render(); }
  if (act === 'settings-games') { state.showSettings = false; state.showGames = true; render(); loadSummaries(); }
  if (act === 'settings-tour') { state.showSettings = false; state.tour = 0; render(); }
  if (act === 'closegames' && !(e.target.closest('[data-stop]') && !e.target.closest('button'))) { state.showGames = false; render(); }
  if (act === 'forget') forgetGame(el.dataset.code);
  if (act === 'account') { state.showAccount = true; state.accountError = ''; state.accountNote = ''; render(); }
  if (act === 'closeaccount' && (el.tagName === 'BUTTON' || !e.target.closest('[data-stop]'))) { state.showAccount = false; render(); }
  if (act === 'account-mode') { state.accountMode = state.accountMode === 'create' ? 'signin' : 'create'; state.accountError = ''; state.accountNote = ''; render(); }
  if (act === 'google') signInGoogle();
  if (act === 'forgot') forgotPassword();
  if (act === 'signout') signOutTap();
  if (act === 'delete-account') deleteAccountTap();
  if (act === 'player-menu') { state.reportFor = el.dataset.uid; state.reportStep = 'menu'; render(); }
  if (act === 'closereport' && (el.tagName === 'BUTTON' || !e.target.closest('[data-stop]'))) { state.reportFor = null; render(); }
  if (act === 'report-start') { state.reportStep = 'report'; render(); }
  if (act === 'block') toggleBlock(el.dataset.uid);
  if (act === 'remove') removePlayer(el.dataset.uid);
  if (act === 'react') react(Number(el.dataset.round), el.dataset.uid, el.dataset.emoji);
  if (act === 'daily') createGame({ daily: true });
  if (act === 'newcrew') newCrew();
  if (act === 'mute') { setMuted(!isMuted()); render(); }
  if (act === 'alerts-on') alertsOnTap();
  if (act === 'alerts-later') { store.set('alertsAsked', true); render(); }
  if (act === 'alerts-off') { turnOffAlerts(fb, db, state.uid).then(() => { toast(T.alerts.offToast); render(); }); }
  if (act === 'starter') {
    const used = state.game?.used || [];
    const pool = STARTERS.filter((w) => !isUsed(w, used));
    const input = document.getElementById('word');
    if (input && pool.length) { input.value = pool[Math.floor(Math.random() * pool.length)]; input.focus(); }
  }
  if (act === 'tour') { state.tour = 0; render(); }
  if (act === 'tour-next') {
    if (state.tour < TOUR.length - 1) goTour(state.tour + 1);
    else { state.tour = null; store.set('toured', true); render(); }
  }
  if (act === 'tour-skip' && !(e.target.closest('[data-stop]') && !e.target.closest('button'))) { state.tour = null; store.set('toured', true); render(); }
  if (act === 'yes') castVote(true);
  if (act === 'no') castVote(false);
  if (act === 'used') { state.showUsed = true; render(); }
  if (act === 'closeused') { state.showUsed = false; render(); }
  if (act === 'seen') { store.set(`seen.${state.game.code}`, Number(el.dataset.round)); render(); }
  if (act === 'share') {
    const url = shareLink(state.game.code);
    const text = T.share.invite(state.game.code);
    try {
      if (navigator.share) await navigator.share({ title: T.appName, text, url });
      else { await navigator.clipboard.writeText(url); toast(T.toasts.inviteCopied); }
    } catch { /* share sheet dismissed */ }
  }
});

document.addEventListener('pointerdown', unlockAudio, { capture: true });

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.showUsed) { state.showUsed = false; render(); }
  if (e.key === 'Escape' && state.showGames) { state.showGames = false; render(); }
  if (e.key === 'Escape' && state.showSettings) { state.showSettings = false; render(); }
  if (e.key === 'Escape' && state.showAccount) { state.showAccount = false; render(); }
  if (e.key === 'Escape' && state.reportFor) { state.reportFor = null; render(); }
  if (state.tour !== null && e.key === 'ArrowRight' && state.tour < TOUR.length - 1) goTour(state.tour + 1);
  if (state.tour !== null && e.key === 'ArrowLeft' && state.tour > 0) goTour(state.tour - 1);
  if (e.key === 'Escape' && state.tour !== null) { state.tour = null; store.set('toured', true); render(); }
});

// ---------- moving to playbrainsmith.com ----------
// On the old address: if you are in the middle of a game here, stay and finish it.
// Otherwise go to the new address, taking your name and settings along.
async function checkMove() {
  if (!onOldSite || !state.uid || !(await newHomeLive())) return;
  state.moving = true;
  const unfinished = [];
  for (const { code } of store.get('games', [])) {
    try {
      const g = (await getDoc(gameRef(code))).data();
      if (g?.players?.[state.uid] && g.status !== 'won') unfinished.push(code);
    } catch { /* skip */ }
  }
  const stay = state.code ? unfinished.includes(state.code) : unfinished.length > 0;
  if (stay) { render(); return; }
  location.replace(carryUrl(state.code));
}

// ---------- boot ----------
render();
let guestTried = false;
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Nobody signed in on this phone yet (or just signed out): play as a guest.
    state.uid = null; state.account = null; render();
    signInAnonymously(auth).catch((e) => {
      console.error(e);
      if (!guestTried) { state.authError = T.errors.connect; render(); }
    });
    guestTried = true;
    return;
  }
  const changed = state.uid !== user.uid;
  state.uid = user.uid;
  state.account = accountOf(user);
  if (!changed) { render(); return; }
  if (state.code) openGame(state.code);
  else { render(); loadSummaries(); }
  loadProfile();
  checkMove();
  refreshAlerts(fb, db, user.uid);
});
// Coming back from Google sign-in (Home Screen app).
finishRedirect(auth, db).then(afterSignIn).catch(accountFail);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
}

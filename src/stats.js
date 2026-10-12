// Private stats for the game's creator: totals only, never anyone's words.
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseConfig } from './firebase-config.js';

const fb = initializeApp(firebaseConfig);
const auth = getAuth(fb);
const db = getFirestore(fb);
const $ = (id) => document.getElementById(id);
const DAY = 86400000;

const dayKey = (ms) => { const d = new Date(ms); return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`; };
const startOfDay = (ms) => { const d = new Date(ms); d.setHours(0, 0, 0, 0); return d.getTime(); };
const fmt = (n) => n.toLocaleString();

function tile(label, value, note = '') {
  return `<div class="tile"><span class="tile-label">${label}</span><span class="tile-value">${value}</span>${note ? `<span class="tile-note">${note}</span>` : ''}</div>`;
}

function chart(perDay) {
  // Games started per day, last 14 days. One series, so no legend; the heading names it.
  const W = 340, H = 150, padB = 22, padT = 18;
  const max = Math.max(1, ...perDay.map((d) => d.n));
  const bw = W / perDay.length;
  const bars = perDay.map((d, i) => {
    const h = Math.round((d.n / max) * (H - padB - padT));
    const x = i * bw + 2, y = H - padB - h, w = bw - 4;
    const label = d.date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
    return `<g class="bar" tabindex="0" data-tip="${label}: ${d.n} game${d.n === 1 ? '' : 's'}">
      <rect x="${i * bw}" y="0" width="${bw}" height="${H - padB}" fill="transparent"/>
      ${d.n ? `<path d="M${x},${H - padB} V${y + 4} Q${x},${y} ${x + 4},${y} H${x + w - 4} Q${x + w},${y} ${x + w},${y + 4} V${H - padB}Z" class="mark"/>` : ''}
      ${i % 7 === 0 || i === perDay.length - 1 ? `<text x="${i === 0 ? 0 : i === perDay.length - 1 ? W : i * bw + bw / 2}" y="${H - 6}" text-anchor="${i === 0 ? 'start' : i === perDay.length - 1 ? 'end' : 'middle'}" class="axis">${d.date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}</text>` : ''}
    </g>`;
  }).join('');
  return `<svg viewBox="0 0 ${W} ${H}" width="100%" role="img" aria-label="Games started per day, last 14 days">
    <line x1="0" x2="${W}" y1="${H - padB}" y2="${H - padB}" class="base"/>
    <text x="0" y="11" class="axis">${max} max</text>${bars}</svg>`;
}

async function load() {
  $('status').textContent = 'Counting…';
  let snap;
  try {
    snap = await getDocs(collection(db, 'games'));
  } catch (e) {
    $('status').innerHTML = `This screen is locked to the game creator's phone.<br><span class="key">This phone's key: <b>${auth.currentUser?.uid}</b></span>`;
    return;
  }
  const now = Date.now();
  const today = startOfDay(now);
  // Claude's automated test games use these three names; leave them out of the counts.
  const TEST_NAMES = new Set(['Alice', 'Bob', 'Cara']);
  const isTest = (g) => Object.values(g.players || {}).every((p) => TEST_NAMES.has(p.name));
  const games = snap.docs.map((d) => d.data()).filter((g) => !isTest(g)).map((g) => ({ ...g, at: g.createdAt?.toMillis?.() || Math.min(...Object.values(g.players || {}).map((p) => p.joinedAt || now)) }));
  const playerDays = {}; // uid -> set of days they joined a game
  games.forEach((g) => Object.entries(g.players || {}).forEach(([uid, p]) => {
    (playerDays[uid] ||= new Set()).add(dayKey(p.joinedAt || g.at));
  }));
  const players = Object.keys(playerDays).length;
  const returning = Object.values(playerDays).filter((s) => s.size > 1).length;
  const week = games.filter((g) => g.at >= today - 6 * DAY);
  const weekPlayers = new Set(week.flatMap((g) => Object.keys(g.players || {}))).size;
  const finished = games.filter((g) => g.status === 'won');
  const daily = games.filter((g) => g.daily).length;
  const avgRounds = finished.length ? (finished.reduce((a, g) => a + g.history.length, 0) / finished.length).toFixed(1) : '0';
  const perDay = Array.from({ length: 14 }, (_, i) => {
    const start = today - (13 - i) * DAY;
    return { date: new Date(start), n: games.filter((g) => g.at >= start && g.at < start + DAY).length };
  });

  $('tiles').innerHTML = [
    tile('Players', fmt(players), `${fmt(weekPlayers)} this week`),
    tile('Games started', fmt(games.length), `${fmt(perDay[13].n)} today`),
    tile('Coming back', players ? `${Math.round((returning / players) * 100)}%` : '0%', `${fmt(returning)} played on 2+ days`),
    tile('Games finished', fmt(finished.length), `${avgRounds} rounds on average`),
    tile('Weird Daily Words', fmt(daily), games.length ? `${Math.round((daily / games.length) * 100)}% of games` : ''),
    tile('Biggest game', fmt(Math.max(0, ...games.map((g) => (g.order || []).length))), 'players'),
  ].join('');
  $('chart').innerHTML = chart(perDay);
  $('table').innerHTML = `<tr><th>Day</th><th>Games</th></tr>${perDay.slice().reverse().map((d) => `<tr><td>${d.date.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' })}</td><td>${d.n}</td></tr>`).join('')}`;
  $('key').textContent = `This phone's key: ${auth.currentUser.uid}`;
  $('status').textContent = `Updated ${new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}`;
}

// Hover / tap tooltip on the bars
const tip = $('tip');
document.addEventListener('pointerover', (e) => {
  const g = e.target.closest?.('.bar');
  if (!g) { tip.hidden = true; return; }
  tip.textContent = g.dataset.tip; tip.hidden = false;
  const r = g.getBoundingClientRect();
  tip.style.left = `${Math.min(window.innerWidth - 150, Math.max(8, r.left + r.width / 2 - 70))}px`;
  tip.style.top = `${r.top + window.scrollY - 36}px`;
});
document.addEventListener('focusin', (e) => { const g = e.target.closest?.('.bar'); if (g) { tip.textContent = g.dataset.tip; tip.hidden = false; } });
$('refresh').addEventListener('click', load);

onAuthStateChanged(auth, (u) => { if (u) load(); });
signInAnonymously(auth).catch(() => { $('status').textContent = 'Could not connect. Check your connection and refresh.'; });

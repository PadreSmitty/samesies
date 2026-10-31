// Sounds (made on the fly, no audio files) and confetti.
let ctx = null;
let muted = false;
try { muted = localStorage.getItem('samesies.muted') === '1'; } catch { /* private mode */ }

export const isMuted = () => muted;
export function setMuted(m) {
  muted = m;
  try { localStorage.setItem('samesies.muted', m ? '1' : '0'); } catch { /* private mode */ }
}

// Phones only allow sound after a tap, so wake the audio on the first one.
export function unlockAudio() {
  try {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
  } catch { /* no audio */ }
}

function ready() { return !muted && ctx && ctx.state === 'running'; }

function noiseBuffer() {
  const buf = ctx.createBuffer(1, ctx.sampleRate * 0.08, ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
  return buf;
}

function hit(t, vol) {
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer();
  const f = ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = 900; f.Q.value = 0.8;
  const g = ctx.createGain(); g.gain.value = vol;
  src.connect(f).connect(g).connect(ctx.destination);
  src.start(t);
}

function tone(freq, t, len, vol = 0.18, type = 'triangle') {
  const o = ctx.createOscillator(); o.type = type; o.frequency.value = freq;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  o.connect(g).connect(ctx.destination);
  o.start(t); o.stop(t + len + 0.05);
}

// Snare roll that builds for `secs`, then a bright hit as the words flip.
// In a pack, the flip, "so close" and win each get the pack's own sound instead.
export function drumroll(secs = 1.4, pack = null) {
  if (!ready()) return;
  const now = ctx.currentTime;
  for (let t = 0; t < secs; t += 0.045) hit(now + t, (0.08 + 0.35 * (t / secs)) * (PACK_FX[pack] ? 0.6 : 1));
  if (PACK_FX[pack]) { PACK_FX[pack].flip(now + secs); return; }
  hit(now + secs, 0.7);
  tone(523, now + secs, 0.5, 0.15); tone(784, now + secs, 0.6, 0.12);
}

export function closeSting(pack = null) {
  if (!ready()) return;
  const t = ctx.currentTime;
  if (PACK_FX[pack]) { PACK_FX[pack].close(t); return; }
  tone(440, t, 0.25); tone(554, t + 0.12, 0.35);
}

export function fanfare(pack = null) {
  if (!ready()) return;
  let t = ctx.currentTime;
  if (PACK_FX[pack]) t += PACK_FX[pack].win(t);
  [523, 659, 784, 1047].forEach((f, i) => tone(f, t + i * 0.11, i === 3 ? 0.9 : 0.3, 0.2));
  tone(1319, t + 0.44, 0.9, 0.08, 'sine');
}

// ---------- pack sounds ----------
// Stand-ins made on the fly. The real recordings (animal calls, a ref's whistle, a real crowd)
// replace these before launch; Smitty reviews them at beta.
function noise(secs) {
  const buf = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * secs), ctx.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource(); src.buffer = buf; return src;
}

function sweep(t, from, to, len, vol = 0.12, type = 'sine') {
  const o = ctx.createOscillator(); o.type = type;
  o.frequency.setValueAtTime(from, t); o.frequency.exponentialRampToValueAtTime(to, t + len * 0.6);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  o.connect(g).connect(ctx.destination); o.start(t); o.stop(t + len + 0.05);
}

function filtered(t, secs, type, freq, vol, shape) {
  const src = noise(secs);
  const f = ctx.createBiquadFilter(); f.type = type; f.frequency.value = freq; f.Q.value = 0.7;
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t);
  shape(g.gain, t);
  src.connect(f).connect(g).connect(ctx.destination); src.start(t); src.stop(t + secs);
  return f;
}

const rustle = (t) => filtered(t, 0.5, 'bandpass', 3200, 0, (gain) => {
  for (let i = 0; i < 5; i++) { gain.linearRampToValueAtTime(0.05 + Math.random() * 0.15, t + i * 0.07 + 0.02); gain.linearRampToValueAtTime(0.02, t + i * 0.07 + 0.06); }
  gain.linearRampToValueAtTime(0.0001, t + 0.45);
});
const chirp = (t, base) => sweep(t, base, base * 1.7, 0.14, 0.1);
const hoot = (t) => [0, 0.18, 0.34].forEach((d, i) => sweep(t + d, 420 + i * 90, 620 + i * 120, 0.16, 0.1, 'triangle'));
const crowd = (t, secs, vol) => filtered(t, secs, 'bandpass', 900, 0, (gain) => {
  gain.linearRampToValueAtTime(vol, t + secs * 0.3); gain.linearRampToValueAtTime(vol * 0.8, t + secs * 0.7); gain.linearRampToValueAtTime(0.0001, t + secs);
});

function whistle(t, len) {
  const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 2900;
  const lfo = ctx.createOscillator(); lfo.frequency.value = 38;
  const lg = ctx.createGain(); lg.gain.value = 140;
  lfo.connect(lg).connect(o.frequency);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.09, t + 0.02); g.gain.setValueAtTime(0.09, t + len - 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  o.connect(g).connect(ctx.destination); o.start(t); lfo.start(t); o.stop(t + len + 0.05); lfo.stop(t + len + 0.05);
}

function roar(t) {
  const o = ctx.createOscillator(); o.type = 'sawtooth';
  o.frequency.setValueAtTime(150, t); o.frequency.linearRampToValueAtTime(210, t + 0.35); o.frequency.exponentialRampToValueAtTime(70, t + 1.2);
  const f = ctx.createBiquadFilter(); f.type = 'lowpass';
  f.frequency.setValueAtTime(400, t); f.frequency.linearRampToValueAtTime(1500, t + 0.35); f.frequency.exponentialRampToValueAtTime(250, t + 1.2);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.2, t + 0.15); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.25);
  o.connect(f).connect(g).connect(ctx.destination); o.start(t); o.stop(t + 1.3);
}


function theremin(t, from, to, len) {
  const o = ctx.createOscillator(); o.type = 'sine';
  o.frequency.setValueAtTime(from, t); o.frequency.exponentialRampToValueAtTime(to, t + len);
  const lfo = ctx.createOscillator(); lfo.frequency.value = 6;
  const lg = ctx.createGain(); lg.gain.value = from * 0.04;
  lfo.connect(lg).connect(o.frequency);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.1, t + 0.08); g.gain.setValueAtTime(0.1, t + len - 0.15); g.gain.exponentialRampToValueAtTime(0.0001, t + len);
  o.connect(g).connect(ctx.destination); o.start(t); lfo.start(t); o.stop(t + len + 0.05); lfo.stop(t + len + 0.05);
}
const projector = (t) => { for (let i = 0; i < 10; i++) hit(t + i * 0.045, 0.12); };
const thunder = (t) => filtered(t, 1.2, 'lowpass', 300, 0, (gain) => {
  gain.linearRampToValueAtTime(0.5, t + 0.04); gain.exponentialRampToValueAtTime(0.12, t + 0.4); gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
});
function organ(t, notes, len) {
  notes.forEach((f) => [1, 2].forEach((m) => tone(f * m, t, len, m === 1 ? 0.07 : 0.035, 'sawtooth')));
}


// A school bell: a fast, bright hammer on a metal gong.
function bell(t, len) {
  for (let x = 0; x < len; x += 0.035) { tone(1320, t + x, 0.05, 0.05, 'square'); tone(1760, t + x + 0.012, 0.04, 0.03, 'square'); }
}
const pagerBeep = (t) => { tone(2100, t, 0.07, 0.08, 'square'); tone(2100, t + 0.12, 0.07, 0.08, 'square'); };
const orchHit = (t) => { [262, 330, 392, 523].forEach((f) => tone(f, t, 0.35, 0.06, 'sawtooth')); hit(t, 0.4); };
const scratch = (t) => sweep(t, 900, 140, 0.25, 0.1, 'sawtooth');

const PACK_FX = {
  zoo: {
    flip(t) {
      rustle(t);
      const r = Math.random();
      if (r < 0.4) { chirp(t + 0.4, 2400); chirp(t + 0.56, 2900); } else if (r < 0.7) hoot(t + 0.4); else sweep(t + 0.4, 130, 90, 0.3, 0.12, 'sawtooth');
    },
    close(t) { chirp(t, 2200); chirp(t + 0.13, 2800); },
    win(t) { roar(t); return 1.1; },
  },
  nineties: {
    flip(t) { pagerBeep(t); orchHit(t + 0.3); },
    close(t) { scratch(t); },
    win(t) { bell(t, 1.1); return 1.2; },
  },
  monsters: {
    flip(t) { projector(t); theremin(t + 0.3, 420, 900, 0.6); },
    close(t) { theremin(t, 700, 330, 0.7); },
    win(t) { thunder(t); organ(t + 0.3, [147, 175, 220], 0.25); organ(t + 0.6, [139, 165, 208], 0.25); organ(t + 0.9, [131, 156, 196], 0.8); return 1.8; },
  },
  sports: {
    flip(t) { whistle(t, 0.3); crowd(t + 0.3, 1, 0.18); },
    close(t) { crowd(t, 0.9, 0.16).frequency.linearRampToValueAtTime(500, t + 0.9); },
    win(t) { tone(220, t, 0.8, 0.12, 'square'); crowd(t + 0.3, 1.6, 0.3); return 0.9; },
  },
};

export function confetti(colors = ['#FF6A4D', '#FFFFFF', '#FFB020', '#8A8CFF', '#1FB895']) {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
  const box = document.createElement('div');
  box.className = 'confetti';
  box.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < 90; i++) {
    const p = document.createElement('i');
    p.style.left = Math.random() * 100 + '%';
    p.style.background = colors[i % colors.length];
    p.style.animationDelay = Math.random() * 0.6 + 's';
    p.style.animationDuration = 2.2 + Math.random() * 1.6 + 's';
    p.style.setProperty('--drift', (Math.random() * 160 - 80) + 'px');
    p.style.setProperty('--spin', (Math.random() * 1080 - 540) + 'deg');
    if (i % 3 === 0) p.style.borderRadius = '50%';
    box.appendChild(p);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 4800);
}

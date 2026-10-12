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
export function drumroll(secs = 1.4) {
  if (!ready()) return;
  const now = ctx.currentTime;
  for (let t = 0; t < secs; t += 0.045) hit(now + t, 0.08 + 0.35 * (t / secs));
  hit(now + secs, 0.7);
  tone(523, now + secs, 0.5, 0.15); tone(784, now + secs, 0.6, 0.12);
}

export function closeSting() {
  if (!ready()) return;
  const t = ctx.currentTime;
  tone(440, t, 0.25); tone(554, t + 0.12, 0.35);
}

export function fanfare() {
  if (!ready()) return;
  const t = ctx.currentTime;
  [523, 659, 784, 1047].forEach((f, i) => tone(f, t + i * 0.11, i === 3 ? 0.9 : 0.3, 0.2));
  tone(1319, t + 0.44, 0.9, 0.08, 'sine');
}

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

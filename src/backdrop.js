// The moving scenery behind a pack game: falling leaves in The Odd Zoo, a night game in Huddle Up.
// One fixed layer behind the page. Stands still for people who turn off motion.
let layer = null;
let raf = 0;

const still = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

export function setPackBackdrop(id) {
  cancelAnimationFrame(raf);
  layer?.remove();
  layer = null;
  if (!id || !SCENES[id]) return;
  layer = document.createElement('div');
  layer.className = `pack-bg pack-bg-${id}`;
  layer.setAttribute('aria-hidden', 'true');
  const cv = document.createElement('canvas');
  layer.appendChild(cv);
  document.body.prepend(layer);
  const c = cv.getContext('2d');
  const scene = SCENES[id]();
  const size = () => {
    const d = Math.min(2, window.devicePixelRatio || 1);
    cv.width = innerWidth * d; cv.height = innerHeight * d;
    scene.reset(cv, d);
  };
  size();
  window.removeEventListener('resize', setPackBackdrop.onResize);
  setPackBackdrop.onResize = () => { if (layer) { size(); if (still()) scene.draw(c, cv, false); } };
  window.addEventListener('resize', setPackBackdrop.onResize);
  const loop = () => { scene.draw(c, cv, true); raf = requestAnimationFrame(loop); };
  if (still()) scene.draw(c, cv, false); else loop();
}

const SCENES = {
  // Big leaves drifting down through the canopy.
  zoo() {
    const COLS = ['rgba(88,168,107,.55)', 'rgba(47,122,76,.65)', 'rgba(31,90,55,.7)', 'rgba(120,190,120,.45)'];
    let leaves = [];
    let d = 1;
    const mk = (cv, y) => ({
      x: Math.random() * cv.width, y, len: (22 + Math.random() * 30) * d, r: Math.random() * 6,
      spin: (Math.random() - 0.5) * 0.03, v: (0.3 + Math.random() * 0.5) * d, ph: Math.random() * 6,
      c: COLS[Math.floor(Math.random() * COLS.length)],
    });
    const leaf = (c, l) => {
      const L = l.len;
      c.save(); c.translate(l.x, l.y); c.rotate(l.r); c.fillStyle = l.c;
      c.beginPath(); c.moveTo(-L / 2, 0); c.quadraticCurveTo(0, -L * 0.4, L / 2, 0); c.quadraticCurveTo(0, L * 0.4, -L / 2, 0); c.fill();
      c.strokeStyle = 'rgba(255,255,255,.18)'; c.lineWidth = Math.max(1, L * 0.03);
      c.beginPath(); c.moveTo(-L / 2 - L * 0.12, 0); c.lineTo(L / 2, 0); c.stroke(); c.restore();
    };
    return {
      reset(cv, dpr) { d = dpr; leaves = Array.from({ length: 26 }, () => mk(cv, Math.random() * cv.height)); },
      draw(c, cv, move) {
        c.clearRect(0, 0, cv.width, cv.height);
        leaves.forEach((l) => {
          leaf(c, l);
          if (!move) return;
          l.y += l.v; l.ph += 0.02; l.x += Math.sin(l.ph) * 0.6 * d; l.r += l.spin + Math.cos(l.ph) * 0.004;
          if (l.y > cv.height + l.len) Object.assign(l, mk(cv, -l.len));
        });
      },
    };
  },

  // Light towers, camera flashes in the crowd, and a chalk play drawn on the grass.
  sports() {
    let flashes = [];
    let d = 1;
    let t = 0;
    let play = [];
    return {
      reset(cv, dpr) {
        d = dpr; flashes = [];
        const W = cv.width; const H = cv.height;
        play = [
          ['x', 0.18, 0.62], ['x', 0.3, 0.7], ['o', 0.66, 0.6], ['o', 0.8, 0.72], ['x', 0.24, 0.84], ['o', 0.72, 0.88],
        ].map(([k, x, y]) => [k, x * W, y * H]);
      },
      draw(c, cv, move) {
        const W = cv.width; const H = cv.height; const sky = H * 0.22;
        c.clearRect(0, 0, W, H);
        // light towers with soft beams
        // (out at the edges and below the header, so they never sit behind a button)
        [[0.035, -1], [0.965, 1]].forEach(([fx, dir]) => {
          const x = W * fx; const y = sky * 0.8;
          const sweep = move ? Math.sin(t / 90 + fx * 4) * 0.12 : 0;
          c.save(); c.translate(x, y); c.rotate(dir * (0.5 + sweep));
          const g = c.createLinearGradient(0, 0, 0, H * 0.7);
          g.addColorStop(0, 'rgba(255,248,210,.22)'); g.addColorStop(1, 'rgba(255,248,210,0)');
          c.fillStyle = g; c.beginPath(); c.moveTo(-8 * d, 0); c.lineTo(8 * d, 0); c.lineTo(W * 0.22, H * 0.7); c.lineTo(-W * 0.22, H * 0.7); c.fill();
          c.restore();
          c.fillStyle = 'rgba(255,250,225,.95)';
          for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) { c.beginPath(); c.arc(x + (i - 1) * 9 * d, y + j * 9 * d, 3.2 * d, 0, 7); c.fill(); }
        });
        // camera flashes in the stands
        if (move && Math.random() < 0.2) flashes.push({ x: Math.random() * W, y: sky * (0.62 + Math.random() * 0.34), life: 1 });
        flashes.forEach((f) => {
          c.fillStyle = `rgba(255,255,255,${f.life})`;
          c.beginPath(); c.arc(f.x, f.y, (2.5 * f.life + 1) * d, 0, 7); c.fill();
          f.life -= 0.06;
        });
        flashes = flashes.filter((f) => f.life > 0);
        // chalk X's and O's
        c.strokeStyle = 'rgba(244,241,230,.22)'; c.lineWidth = 3 * d; c.lineCap = 'round';
        const s = 13 * d;
        play.forEach(([k, x, y]) => {
          c.beginPath();
          if (k === 'x') { c.moveTo(x - s, y - s); c.lineTo(x + s, y + s); c.moveTo(x + s, y - s); c.lineTo(x - s, y + s); } else c.arc(x, y, s, 0, 7);
          c.stroke();
        });
        c.setLineDash([10 * d, 10 * d]);
        c.beginPath(); c.moveTo(play[0][1] + s * 1.6, play[0][2]); c.quadraticCurveTo(W * 0.48, H * 0.5, play[2][1] - s * 1.8, play[2][2]); c.stroke();
        c.setLineDash([]);
        t += 1;
      },
    };
  },
  // An old movie palace: marquee bulbs chasing along the top, film scratches, a bat now and then,
  // and fog drifting over the dark seats at the bottom.
  monsters() {
    let d = 1;
    let t = 0;
    let bat = null;
    let fog = [];
    const batPath = (c, x, y, s, flap) => {
      c.save(); c.translate(x, y); c.scale(s, s * (0.6 + 0.4 * Math.abs(Math.sin(flap))));
      c.beginPath();
      c.moveTo(0, 0); c.quadraticCurveTo(-6, -8, -18, -6); c.quadraticCurveTo(-14, -2, -16, 3);
      c.quadraticCurveTo(-10, 0, -8, 4); c.quadraticCurveTo(-4, 1, 0, 5);
      c.quadraticCurveTo(4, 1, 8, 4); c.quadraticCurveTo(10, 0, 16, 3); c.quadraticCurveTo(14, -2, 18, -6);
      c.quadraticCurveTo(6, -8, 0, 0); c.fill(); c.restore();
    };
    return {
      reset(cv, dpr) {
        d = dpr;
        fog = Array.from({ length: 7 }, (_, i) => ({ x: (i / 7) * cv.width, r: (60 + Math.random() * 60) * d, v: (0.15 + Math.random() * 0.2) * d }));
      },
      draw(c, cv, move) {
        const W = cv.width; const H = cv.height;
        c.clearRect(0, 0, W, H);
        // marquee bulbs
        const gap = 22 * d; const n = Math.ceil(W / gap);
        for (let i = 0; i <= n; i++) {
          const on = (i + Math.floor(t / 8)) % 3 === 0;
          c.fillStyle = on ? 'rgba(255,194,61,0.95)' : 'rgba(255,194,61,0.35)';
          c.beginPath(); c.arc(i * gap + 6 * d, 5 * d, 3 * d, 0, 7); c.fill();
        }
        // film scratches and flicker
        if (move && Math.random() < 0.08) {
          c.strokeStyle = 'rgba(26,19,32,0.12)'; c.lineWidth = 1 * d;
          const x = Math.random() * W; c.beginPath(); c.moveTo(x, 0); c.lineTo(x + (Math.random() - 0.5) * 20 * d, H); c.stroke();
        }
        if (move && Math.random() < 0.04) { c.fillStyle = 'rgba(255,255,255,0.12)'; c.fillRect(0, 0, W, H); }
        // a bat swoops across now and then
        if (move && !bat && Math.random() < 0.004) bat = { x: -40 * d, y: H * (0.15 + Math.random() * 0.4), v: (2 + Math.random()) * d, f: 0 };
        if (bat) {
          c.fillStyle = 'rgba(26,19,32,0.75)';
          batPath(c, bat.x, bat.y + Math.sin(bat.f / 2) * 10 * d, 1.6 * d, bat.f / 3);
          bat.x += bat.v; bat.f += 1; if (bat.x > W + 40 * d) bat = null;
        }
        // seats and fog
        const seats = H * 0.94;
        c.fillStyle = 'rgba(26,19,32,0.85)';
        for (let x = 0; x < W; x += 30 * d) { c.beginPath(); c.arc(x + 15 * d, seats + 12 * d, 14 * d, Math.PI, 0); c.lineTo(x + 29 * d, H); c.lineTo(x + 1 * d, H); c.fill(); }
        fog.forEach((f) => {
          const g = c.createRadialGradient(f.x, seats, 0, f.x, seats, f.r);
          g.addColorStop(0, 'rgba(240,244,245,0.55)'); g.addColorStop(1, 'rgba(240,244,245,0)');
          c.fillStyle = g; c.fillRect(f.x - f.r, seats - f.r, f.r * 2, f.r * 2);
          if (move) { f.x += f.v; if (f.x - f.r > W) f.x = -f.r; }
        });
        t += 1;
      },
    };
  },
  // The 90s: neon Memphis shapes (triangles, squiggles, rings, zigzags, confetti) drifting around.
  nineties() {
    const COLS = ['#FF2E93', '#14C8C8', '#FFE14D', '#7B3FF2'];
    const KINDS = ['tri', 'squiggle', 'ring', 'zig', 'dot', 'dot', 'tri', 'squiggle'];
    let shapes = [];
    let d = 1;
    const mk = (cv) => ({
      k: KINDS[Math.floor(Math.random() * KINDS.length)], c: COLS[Math.floor(Math.random() * COLS.length)],
      x: Math.random() * cv.width, y: Math.random() * cv.height, s: (14 + Math.random() * 18) * d,
      r: Math.random() * 6, vr: (Math.random() - 0.5) * 0.01, vx: (Math.random() - 0.5) * 0.25 * d, vy: (0.1 + Math.random() * 0.25) * d,
    });
    const draw1 = (c, o) => {
      c.save(); c.translate(o.x, o.y); c.rotate(o.r); c.globalAlpha = 0.55;
      c.strokeStyle = o.c; c.fillStyle = o.c; c.lineWidth = 4 * d; c.lineCap = 'round'; c.lineJoin = 'round';
      const s = o.s;
      c.beginPath();
      if (o.k === 'tri') { c.moveTo(0, -s); c.lineTo(s * 0.9, s * 0.6); c.lineTo(-s * 0.9, s * 0.6); c.closePath(); c.fill(); }
      if (o.k === 'ring') { c.arc(0, 0, s * 0.7, 0, 7); c.stroke(); }
      if (o.k === 'dot') { c.arc(0, 0, s * 0.22, 0, 7); c.fill(); }
      if (o.k === 'squiggle') { c.moveTo(-s, 0); for (let i = -s; i <= s; i += s / 2) c.quadraticCurveTo(i + s / 4, (i / (s / 2)) % 2 ? -s / 2 : s / 2, i + s / 2, 0); c.stroke(); }
      if (o.k === 'zig') { c.moveTo(-s, s / 3); for (let i = 0; i < 4; i++) c.lineTo(-s + (i + 1) * s / 2, i % 2 ? s / 3 : -s / 3); c.stroke(); }
      c.restore();
    };
    return {
      reset(cv, dpr) { d = dpr; shapes = Array.from({ length: 22 }, () => mk(cv)); },
      draw(c, cv, move) {
        c.clearRect(0, 0, cv.width, cv.height);
        shapes.forEach((o) => {
          draw1(c, o);
          if (!move) return;
          o.x += o.vx; o.y += o.vy; o.r += o.vr;
          if (o.y > cv.height + 40 * d) Object.assign(o, mk(cv), { y: -40 * d });
          if (o.x < -40 * d) o.x = cv.width + 30 * d; if (o.x > cv.width + 40 * d) o.x = -30 * d;
        });
      },
    };
  },
};

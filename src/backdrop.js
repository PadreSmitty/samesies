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
};

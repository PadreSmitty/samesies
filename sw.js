// Minimal service worker: lets Brainsmith be added to the home screen and opened like an app.
// Network first so a new version always shows up; the cached copy is only a fallback.
const CACHE = 'brainsmith-v5';
const SHELL = ['./', 'index.html', 'style.css', 'dist/app.js', 'manifest.webmanifest', 'icons/favicon.png', 'art/logo.webp'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true })),
  );
});

// Alerts: show the push, and open the right game when it's tapped.
self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch { /* not JSON */ }
  const m = d.data || d;
  if (!m.title) return;
  e.waitUntil(self.registration.showNotification(m.title, {
    body: m.body || '',
    icon: 'icons/icon-192.png',
    badge: 'icons/favicon.png',
    tag: m.tag || undefined,
    renotify: !!m.tag,
    data: { url: m.url || './' },
  }));
});

self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = e.notification.data?.url || './';
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const w of wins) {
      if (new URL(w.url).origin === self.location.origin) { await w.focus(); return w.navigate(url); }
    }
    return self.clients.openWindow(url);
  })());
});

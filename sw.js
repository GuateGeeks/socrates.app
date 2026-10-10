const CACHE = 'socrates-shell-v4';
const SHELL = ["./assets/AwsExperience-RbLDFiNH.js","./assets/beta-survey-submit-Bh1yEZyq.js","./assets/cloud-sync-Cph3uxpQ.js","./assets/firebase-ft4xej_f.js","./assets/index-HSoege4q.js","./assets/style-B-vXw5eh.css","./assets/three.module-Dljb2UHm.js","./icon.svg","./icons/icon-192.png","./icons/icon-512.png","./icons/maskable-192.png","./icons/maskable-512.png","./index.html","./manifest.webmanifest"];
self.addEventListener('install', (event) => event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL))));
self.addEventListener('activate', (event) => event.waitUntil(
  caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith('socrates-') && key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim()),
));
self.addEventListener('message', (event) => { if (event.data === 'SKIP_WAITING') self.skipWaiting(); });
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin || /googleapis|firebaseio/.test(url.hostname)) return;
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).then((response) => {
      const copy = response.clone(); void caches.open(CACHE).then((cache) => cache.put('./index.html', copy));
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(request).then((cached) => cached ?? fetch(request).then((response) => {
    if (response.ok) { const copy = response.clone(); void caches.open(CACHE).then((cache) => cache.put(request, copy)); }
    return response;
  })));
});

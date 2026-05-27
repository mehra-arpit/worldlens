const CACHE_NAME = 'worldlens-v4-hard-icon-reset';
const APP_SHELL=['./','./index.html','./manifest.webmanifest','./icons/worldlens-globe-lens-192.png','./icons/worldlens-globe-lens-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const isShell = url.pathname.endsWith('/') || url.pathname.endsWith('/index.html') || url.pathname.endsWith('/manifest.webmanifest') || url.pathname.includes('/icons/') || url.pathname.endsWith('/favicon.ico') || url.pathname.endsWith('/apple-touch-icon.png');
  if (isShell) {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});return r;})));});

const CACHE_NAME = 'cache';
const urlsToCache = [
  'index.html',
  'app.js',
  'html/mirante.html',
  'html/praca.html',
  'html/serraSanta.html',
  'image/mirante.jpg',
  'image/praca.jpg',
  'image/serraSanta.jpg',
  'image/icones/icone-48x48.png',
  'image/icones/icone-72x72.png',
  'image/icones/icone-96x96.png',
  'image/icones/icone-144x144.png',
  'image/icones/icone-192x192.png',
  'image/icones/icone-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

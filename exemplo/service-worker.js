let cacheName = 'conhecendo-service-workers';
let filesToCache = [
    '/',
    'index.html',
    'style.css'
];

self.addEventListener('install', function(e) {
    console.log('[Service Worker] Installer');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[Service Worker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[Service Worker] Activate');
});

self.addEventListener('fetch', function(e) {
    console.log('[Service Worker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            console.log('[Service Worker] Get cache for ', e.request.url);
            return response || fetch(e.request);
        })
    );
});
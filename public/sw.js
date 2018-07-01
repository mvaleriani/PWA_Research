self.addEventListener('install', e => {
    console.log('[SW] Installing Service Worker ...', e);  
});

self.addEventListener('activate', e => {
    console.log('[SW] Activating Service Worker ...', e);
    self.clients.claim();
});

self.addEventListener('fetch', e => {
    console.log('[SW] Fetching something ...', e);
    e.respondWith(fetch(e.request));
});


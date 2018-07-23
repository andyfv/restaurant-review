// cache-polyfill.js is used for backward compatibility
importScripts('/js/cache-polyfill.js');

let cacheID = "restaurant-002";

// Handle the site assets
self.addEventListener('install', function (e) {
    e.waitUntil(caches.open(cacheID).then(function (cache) {
        return cache.addAll([
                '/',
                '/index.html',
                '/restaurant.html',
                '/css/styles.css',
                '/data/restaurants.json',
                '/js',
                '/js/cache-polyfill.js',
                '/js/dbhelper.js',
                '/js/main.js',
                '/js/restaurant_info.js',
                '/js/main.js',
                '/js/register.js',
            ])
            .catch(error => {
                console.log('Caches open failed: ' + error);
            });
    }));
});

// Handle requests and cache the requested assets which were not found in the cache
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request).then(function (response) {
                return caches.open(cacheID).then(function (cache) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});

// Handle/Delete old caches
self.addEventListener('activate', function (event) {
    let cacheWhiteList = ['restaurant-001'];
    event.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (cacheWhiteList.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
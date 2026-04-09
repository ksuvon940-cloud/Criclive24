const CACHE_NAME = "criclive24-cache-v1";

const urlsToCache = [
  "/Criclive24/",
  "/Criclive24/index.html",
  "/Criclive24/logo.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Cache opened");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

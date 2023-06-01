// install event
self.addEventListener("install", (event) => {
  console.log("[Service Worker] installed");

  event.waitUntil(
    caches.open("moodwall").then(function (cache) {
      return cache.addAll(["./", "./index.html", "./fonts/", "./icons/"]);
    })
  );
});

// activate event
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] actived", event);
});

// fetch event
self.addEventListener("fetch", (event) => {
  console.log("[Service Worker] fetched resource " + event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      console.log("[Service Worker] Fetching resource: " + event.request.url);
      return (
        response ||
        fetch(event.request).then(function (response) {
          return caches.open("danbi").then(function (cache) {
            console.log(
              "[Service Worker] Caching new resource: " + event.request.url
            );
            cache.put(event.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});

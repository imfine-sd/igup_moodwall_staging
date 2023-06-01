// install event
self.addEventListener("install", (event) => {
  // console.log("[Service Worker] installed");
});

// activate event
self.addEventListener("activate", (event) => {
  // console.log("[Service Worker] actived", event);
});

// fetch event
self.addEventListener("fetch", (event) => {
  // console.log("[Service Worker] fetched resource " + e.request.url);
});

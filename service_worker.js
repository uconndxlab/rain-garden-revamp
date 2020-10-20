self.addEventListener('install', e => {
  console.log('Service Worker has been installed');
});

self.addEventListener('activate', e => {
  console.log('Service Worker has been activated');
});

const preCacheName = "pre-cache-hbp", preCacheFiles = [ "/", "pages/offline.html", "css/general.css", "css/index.css", "pages/basics.html", "pages/choose_plants.html", "pages/design.html", "pages/install.html", "pages/video_tutorials.html", "js/jquery3.5.1.min.js", "js/index.js" ];

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(response => {
    if (!response) {
      //fall back to the network fetch
      return fetch(event.request);
    }
    return response;
  }))
});

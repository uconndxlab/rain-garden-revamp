self.addEventListener('install', e => {
  console.log('Service Worker has been installed');
});

self.addEventListener('activate', e => {
  console.log('Service Worker has been activated');
});

self.addEventListener('fetch', e => {
  //I will write a more robust service worker to finish off the project, closer to the deadline for added functionality such as offline file caching
});

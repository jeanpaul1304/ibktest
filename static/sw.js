importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js')

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif|html)/,
  workbox.strategies.staleWhileRevalidate()
)

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-resources'
  })
)

workbox.routing.registerRoute(
  /.*(?:googleapis|gstatic)\.com.*$/,
  workbox.strategies.staleWhileRevalidate(),
)

workbox.routing.registerRoute(new RegExp('/'), function (event) {
  fetch(event.url)
    .then((response) => {
      return response
    })
    .catch(function (error) {
      console.log('servimos offline', error)
      return caches.match('offline')
    })
})

// Offline Install
self.addEventListener('install', function(event) {
  // var offlineRequest = new Request('../index.html')
  event.waitUntil(
    caches.open('offline').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/login'
      ])
    })
  )
})

self.addEventListener('fetch', function(event) {
  var request = event.request
  if (request.method === 'GET') {
    event.respondWith(
      caches.match(request).then(function (response) {
        return response || fetch(request)
      })
    )
  }
})

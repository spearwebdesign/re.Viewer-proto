if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message)
    })
}

const VERSION = 'v1.0'

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request
    //get
    if (request.method !== 'GET') {
        return
    }
    //buscar en cache
    event.respondWith(cachedResponse(request))

    //actualizar el cache para evitar que el usuario obtenga una copia vieja
    event.waitUntil(updateCache(request))
})

async function precache() {
    const cache = await caches.open(VERSION)
    return cache.addAll([
        '/',
        '/index.html',
        '/assets/static/images/',
        '/assets/styles/home.css',
        '/controllers/HomeController.js',
        '/js/requestManager.js',
        '/models/Movie.js',
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}

async function updateCache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request, response)
}
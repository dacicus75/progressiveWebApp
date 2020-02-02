const staticDevCoffee = "dev-blog-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/example-blog01.jpg",
  "/images/example-blog02.jpg",
  "/images/example-blog03.jpg",
  "/images/example-blog04.jpg",
  "/images/example-blog05.jpg",
  "/images/example-blog06.jpg",
  "/images/example-blog07.jpg",
  "/images/example-blog02.jpg",
  "/images/example-blog02.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevBlogs).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request);
      })
    );
  });
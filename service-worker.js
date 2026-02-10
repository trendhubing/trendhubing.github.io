const CACHE_NAME="trend-hubing-v1";
const urlsToCache=["/","/index.html","/home.html","/home/styles/style.css","/home/javascripts/javascript.js","/home/styles/homestyle.css","/home/javascripts/homejavascript.js",
"/home/fashion.html","/home/color.html","/home/jewelry.html",
"/home/food.html","/home/spicyfood.html","/home/dessert.html",
"/home/car.html","/home/sportcar.html","/home/electriccar.html",
"/home/travel.html","/home/adventure.html","/home/ride.html",
"/home/game.html","/home/multigame.html","/home/pcgame.html",
"/home/bts.html","/home/btsbiography.html","/home/btssong.html",
"/home/kpop.html","/home/bp.html",
"/home/movie.html","/home/cartoonmovie.html","/home/comedymovie.html",
"/home/anime.html","/home/animatedcartoon.html","/home/comedyanime.html",
"/home/sport.html","/home/indoor.html","/home/outdoor.html",];
self.addEventListener("install",event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>{
return cache.addAll(urlsToCache);}));});
self.addEventListener("fetch",event=>{event.respondWith(caches.match(event.request).then(response=>{
return response || fetch(event.request);
}));});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request).then(response => {
        // Only cache successful responses
        if (!response || response.status !== 200) return response;

        return caches.open("trend-hubing-v1").then(cache => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );

});

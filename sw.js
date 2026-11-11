"use strict";
// JIMERICA service worker (Nov 11, 2026 trial; see FANSITE.md). It exists so the site can be installed as an app and so an offline visit shows a clear
// "you're offline" page. It deliberately caches ONLY the install shell below (icons + offline.html). It never caches or intercepts
// data.js, history.js, feed.js, official.js, achievements.js, search-index.js, spotify-tracks.js, any other script/CSS, images or any page: those always come from the
// network, so stats are never stale. Page navigations are network-first; the offline page is used only when the network fails.
// BUMP `CACHE` whenever SHELL changes (sw.js is not touched by stamp_assets.py).
const CACHE='jimerica-shell-v1';
const SHELL=['./offline.html','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png','./favicon.svg'];
const SHELL_PATHS=SHELL.map(p=>new URL(p,self.location).pathname);
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url); if(url.origin!==self.location.origin) return;     // fonts, Spotify covers, GoatCounter etc. are never touched
  if(req.mode==='navigate'){ e.respondWith(fetch(req).catch(()=>caches.match('./offline.html'))); return; }
  if(SHELL_PATHS.includes(url.pathname)){ e.respondWith(caches.match(req,{ignoreSearch:true}).then(r=>r||fetch(req))); return; }
  // everything else (data.js, history.js, stats, scripts, css, images): not intercepted -> straight to the network
});

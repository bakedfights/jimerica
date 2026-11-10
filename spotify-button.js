"use strict";
// Feature: "Stream on Spotify" button on song.html. Self-contained: needs spotify-tracks.js (SPOTIFY_TRACKS), data.js (SONGS) and slug() from app.js.
// Remove: delete this file, spotify-tracks.js, their <script> tags in song.html, and the "spotify-btn" CSS block.
(function spotifyButton(){
  const row=document.querySelector('#song-detail .share-row'); if(!row||typeof SPOTIFY_TRACKS==='undefined') return;
  const id=new URLSearchParams(location.search).get('id');
  const s=SONGS.find(r=>slug(r[0])===id); if(!s) return;
  const tid=SPOTIFY_TRACKS[s[0]]; if(!tid||!/^[A-Za-z0-9]{22}$/.test(tid)) return;
  const a=document.createElement('a');
  a.className='cta spotify-btn'; a.href='https://open.spotify.com/track/'+tid; a.target='_blank'; a.rel='noopener';
  a.title='Open this track on Spotify'; a.textContent='Stream on Spotify ↗';
  row.prepend(a);
})();

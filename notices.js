// Temporary Overview notices for the "What changed today" box.
// Not touched by the daily data.js / history.js refresh.
// To take a notice down early, delete it from TODAY_NOTICES or set until to yesterday.
// start and until are inclusive dates in America/Los_Angeles.
const TODAY_NOTICES = [
  {
    id: 'into-the-sun-komca-2026',
    start: '2026-11-24',
    until: '2026-12-01',
    href: './achievements.html#cat-credits',
    link: 'Song credits',
    text: {
      en: 'Jimin is registered with KOMCA as lyricist and composer of BTS\'s "Into the Sun" (25 song credits)',
      ko: '지민이 방탄소년단의 "Into the Sun" 작사·작곡가로 KOMCA에 등록되었습니다 (등록 저작물 25곡)',
      es: 'Jimin figura en KOMCA como letrista y compositor de "Into the Sun" de BTS (25 canciones registradas)'
    }
  }
];
function pacificTodayISO(){
  return new Intl.DateTimeFormat('en-CA',{timeZone:'America/Los_Angeles',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
}
function activeTodayNotices(){
  if(typeof TODAY_NOTICES==='undefined'||!TODAY_NOTICES.length) return [];
  const today=pacificTodayISO();
  return TODAY_NOTICES.filter(n=>n.start<=today&&today<=n.until);
}
window.TODAY_NOTICES=TODAY_NOTICES;
window.activeTodayNotices=activeTodayNotices;
window.pacificTodayISO=pacificTodayISO;

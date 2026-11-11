"use strict";
// Feature: Milestone history on the Achievements page (#milestone-history). Self-contained (Nov 11, 2026); see FANSITE.md for removal.
// Every hundred-million / billion mark (100M, 200M ... 1B, 1.5B, 2B ...) that can be DATED, newest first, with the time from release:
//  1) marks seen crossing in the site's own daily snapshots (history.js, rebuilt daily; picked up automatically, no estimates), and
//  2) a short list of crossings that Spotify or news reports dated (MS_RECORDS below, each with its source link, verified Nov 11, 2026).
// Marks passed before the snapshots began (Nov 2, 2026) that no report dates are NOT listed one by one; a clearly labelled table counts them per song.
// "Time from release" = the day count printed in the report when it gives one (labelled "as reported"), otherwise days counted from the release date (Discography/Calendar,
// see releaseOf) or the stated start date to the crossing date. Reports may count the release day too and read one day higher.
const MS_RECORDS=[
  // song/artist, mark, date as the source gives it, optional dateNote (when the date is an announcement date), optional days (the day count exactly as the report prints it; reports may count the release day),
  // start date + what the start is (release or Spotify solo debut), asOf (the report says "as of this date"; the crossing may be earlier), source
  {song:'Like Crazy',mark:1e9,date:'2024-04-05',dateNote:'Spotify announcement',days:377,from:'2023-03-24',fromKind:'release',src:'https://www.soompi.com/article/1653366wpp/btss-jimin-sets-spotify-record-for-fastest-korean-language-song-to-surpass-1-billion-streams',srcName:'Soompi'},
  {song:'Who',mark:1e9,date:'2024-11-13',days:118,from:'2024-07-19',fromKind:'release',src:'https://www.kstartrend.com/2024/11/16/btss-jimins-who-hits-1-billion-streams-on-spotify-sets-record-for-fastest-male-solo-song-to-reach-the-milestone',srcName:'KStarTrend'},
  {song:'Who',mark:2e9,date:'2025-09-18',from:'2024-07-19',fromKind:'release',src:'https://www.kedglobal.com/k-pop/newsView/ked202509220003',srcName:'KED Global'},
  {song:'Who',mark:2.5e9,date:'2026-08-01',from:'2024-07-19',fromKind:'release',asOf:true,src:'https://www.starnewskorea.com/en/music/2026/08/02/2026080207465823102',srcName:'StarNews'},
  {artist:'All his solo songs on Spotify, combined',mark:1e9,date:'2023-05-22',days:393,from:'2022-04-24',fromKind:'debut',src:'https://www.guinnessworldrecords.com/world-records/746518-fastest-solo-k-pop-artist-to-reach-1-billion-streams-on-spotify-male',srcName:'Guinness World Records'},
  {artist:'22 solo-only tracks, combined',mark:7e9,date:'2026-08-02',from:'2022-04-24',fromKind:'debut',asOf:true,src:'https://www.starnewskorea.com/en/music/2026/08/02/2026080207465823102',srcName:'StarNews'}
];
(function milestoneHistory(){
  const box=document.getElementById('milestone-history'); if(!box||typeof SONGS==='undefined'||typeof HIST_SONGS==='undefined') return;
  const el=(t,c,x)=>{const e=document.createElement(t); if(c) e.className=c; if(x!=null) e.textContent=x; return e;};
  const norm=t=>songNorm(t), STEP=1e8;
  const markLabel=m=>m>=1e9?(+(m/1e9).toFixed(2))+'B':(m/1e6)+'M';
  const dayDiff=(a,b)=>Math.round((new Date(b+'T12:00:00')-new Date(a+'T12:00:00'))/864e5);
  // Release date of a song: earliest Discography/Calendar date for it (a single before its album wins). Songs whose Discography date is only a compilation/album date, and the two
  // early SoundCloud songs, have no clean release date here: they get an explicit entry, or none (then no "time from release" is shown).
  const OVERRIDE={ [norm('VIBE (feat. Jimin of BTS)')]:'2023-01-13', [norm('Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)')]:'2023-05-18',
                   [norm('With you')]:'2022-04-24', [norm('Set Me Free Pt.2')]:'2023-03-17', [norm('Promise')]:null, [norm('Christmas Love')]:null };
  function releaseOf(title){
    const n=norm(title); if(n in OVERRIDE) return OVERRIDE[n];
    let best=null;
    for(const r of DISC){ if(r.note&&/date/i.test(r.note)) continue;
      if(norm(r.t)===n||(r.tracks||[]).some(t=>norm(t)===n)){ if(!best||r.d<best) best=r.d; } }
    return best;
  }
  // Crossings visible in the daily snapshots: [{title,mark,date}] (date = first snapshot at or above the mark).
  function histCrossings(hs,hd){
    hs=hs||HIST_SONGS; hd=hd||HIST_DATES; const out=[];
    for(const t of Object.keys(hs)){ const v=hs[t];
      for(let i=1;i<v.length;i++){ const a=v[i-1],b=v[i]; if(a==null||b==null||b<=a) continue;
        for(let m=(Math.floor(a/STEP)+1)*STEP;m<=b;m+=STEP) out.push({title:t,mark:m,date:hd[i]}); } }
    return out;
  }
  function rowsAll(){
    const rows=[];
    for(const r of MS_RECORDS) rows.push({title:r.song||null,artist:r.artist||null,mark:r.mark,date:r.date,dateNote:r.dateNote||null,days:r.days,from:r.from,fromKind:r.fromKind,asOf:!!r.asOf,src:r.src,srcName:r.srcName});
    for(const c of histCrossings()){
      if(rows.some(r=>r.title&&norm(r.title)===norm(c.title)&&r.mark===c.mark)) continue;     // a dated record already covers this mark
      const rel=releaseOf(c.title); rows.push({title:c.title,mark:c.mark,date:c.date,from:rel,fromKind:'release',asOf:false,src:null,srcName:null});
    }
    return rows.sort((a,b)=>b.date.localeCompare(a.date)||b.mark-a.mark);
  }
  // Marks a song has passed but nothing dates: every STEP up to its total, minus marks in the dated rows.
  function undatedMarks(rows){
    return SONGS.map(s=>{ const top=Math.floor(s[1]/STEP)*STEP; if(top<STEP) return null;
      const n=top/STEP, dated=rows.filter(r=>r.title&&norm(r.title)===norm(s[0])&&r.mark%STEP===0&&r.mark<=top).length;
      return n-dated>0?{title:s[0],total:s[1],top,count:n-dated}:null; }).filter(Boolean).sort((a,b)=>b.total-a.total);
  }
  const sd=iso=>new Date(iso+'T12:00:00').toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'});
  function render(){
    const rows=rowsAll(), body=document.getElementById('mh-rows'); body.replaceChildren();
    rows.forEach(r=>{
      const tr=el('tr'); const td=(label,...kids)=>{const c=el('td'); c.setAttribute('data-label',label); if(kids.length>1){const b=el('div','mh-cell'); b.append(...kids); c.append(b);} else c.append(...kids); tr.append(c); return c;};
      if(r.title){ const a=el('a','no-tr',r.title); a.href=(typeof songPageUrl==='function'&&songPageUrl(r.title))||('./song.html?id='+slug(r.title)); td('Song',a); } else td('Song',el('span',null,r.artist));
      td('Mark',el('strong','mh-mark no-tr',markLabel(r.mark)));
      td('Date',...[el('span',null,(r.asOf?'as of ':'')+sd(r.date))].concat(r.dateNote?[el('small',null,r.dateNote)]:[]));
      if(r.from){ const rep=r.days!=null, d=rep?r.days:dayDiff(r.from,r.date); const what=r.fromKind==='debut'?'since his Spotify solo debut':'since release';
        const c=td('Time from release',el('span',null,(r.asOf?'up to ':'')+format(d)+' days'),el('small',null,rep?what+' (as reported)':what)); c.classList.add('mh-took'); }
      else td('Time from release',el('span','neutral','–'),el('small',null,'release date not tracked'));
      if(r.src){ const a=el('a',null,r.srcName+' ↗'); a.href=r.src; a.target='_blank'; a.rel='noopener'; td('Source',a); }
      else td('Source',el('span',null,'Daily snapshots'));
      body.append(tr);
    });
    document.getElementById('mh-empty').hidden=rows.length>0;
    const ub=document.getElementById('mh-undated'); ub.replaceChildren();
    undatedMarks(rows).forEach(u=>{ const tr=el('tr'); const td=(label,x,cls)=>{const c=el('td',cls||null,x); c.setAttribute('data-label',label); tr.append(c);};
      const a=el('a','no-tr',u.title); a.href=(typeof songPageUrl==='function'&&songPageUrl(u.title))||'#'; const c0=el('td'); c0.setAttribute('data-label','Song'); c0.append(a); tr.append(c0);
      td('Streams now',format(u.total)); td('Highest mark passed',markLabel(u.top),'no-tr'); td('Marks without a verified date',String(u.count),'no-tr'); ub.append(tr); });
    const dated=rows.filter(r=>r.title).length; box.hidden=false;
    return rows;
  }
  window.mhRows=rowsAll; window.mhHistCrossings=histCrossings; window.mhReleaseOf=releaseOf; window.mhUndated=()=>undatedMarks(rowsAll()); window.MS_RECORDS=MS_RECORDS;
  render();
})();

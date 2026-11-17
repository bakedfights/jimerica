"use strict";
// Discography + calendar. Facts: release dates/covers from Spotify album pages.
const SP='https://open.spotify.com/album/', IMG='https://i.scdn.co/image/';
const DISC=[
 {k:'album',t:'MUSE',type:'Album',d:'2024-07-19',id:'15XcLhiVMlSOipUddTNDnr',img:'ab67616d0000b273f02c451189a709b9a952aaec',label:'Big Hit Music',prod:'Pdogg, Ghstloop, Jimin, Evan, Tommy Brown, Mr. Franks, Arcades, Jon Bellion, Pete Nappi, Tenroc, Ayo the Producer, Kofo',tracks:['Rebirth (Intro)','Interlude : Showtime','Smeraldo Garden Marching Band (feat. Loco)','Slow Dance (feat. Sofia Carson)','Be Mine','WHO','Closer Than This']},
 {k:'album',t:'FACE',type:'Album',d:'2023-03-24',id:'4xc3Lc9yASZgEJGH7acWMB',img:'ab67616d0000b2732b46078245d0120690eb560d',label:'Big Hit Music',prod:'Pdogg, Ghstloop, Evan',tracks:['Face-off','Interlude : Dive','Like Crazy','Alone','Set Me Free Pt.2','Like Crazy (English Version)']},
 {k:'album',t:'MUSE (WANDER ver.)',type:'Album version',d:'2024-07-23',id:'4wfwJUghbK2z2iaz65U7VS',img:'ab67616d0000b27382601539d4a27061ad90eacb',note:'10 tracks'},
 {k:'album',t:'MUSE (WONDER ver.)',type:'Album version',d:'2024-07-23',id:'5AQc0yFXRcdUdko4sZ1fW9',img:'ab67616d0000b273f150d9f2e5e8148e5032fd7d',note:'10 tracks'},
 {k:'single',t:'Be Mine (English Version)',type:'Single',d:'2024-08-02',id:'7EGoWlfxvnwpTamkoOhWcb',img:'ab67616d0000b27319655636129722b4bd720dbc'},
 {k:'single',t:'WHO (Remixes)',type:'Single',d:'2024-07-23',id:'7KIwUrSiA0gc9WlI7AYIfZ',img:'ab67616d0000b2737f35adfbec3bb2bc8256802b',note:'7 tracks'},
 {k:'single',t:'Smeraldo Garden Marching Band (feat. Loco)',type:'Pre-release single',d:'2024-06-28',id:'2PcM535knJOZb6MUth8axj',img:'ab67616d0000b27338881a83135ef5b4ace418ba',label:'Big Hit Music',prod:'Mr. Franks, Pdogg, Ghstloop, Tommy Brown'},
 {k:'single',t:'Closer Than This',type:'Single',d:'2023-12-22',id:'3auDI7RSdoJr99qMNXimP4',img:'ab67616d0000b273e3dbc03f538633dbb40adf37'},
 {k:'feat',t:'Angel Pt. 1 — FAST X (Original Motion Picture Soundtrack)',type:'Soundtrack · Kodak Black, NLE Choppa feat. Jimin, JVKE & Muni Long',d:'2023-05-19',id:'04qe48XDdDs4hdurvRDsCF',img:'ab67616d0000b2731aa0427818a335a27fba086e'},
 {k:'feat',t:'VIBE — Down to Earth',type:'TAEYANG feat. Jimin of BTS',d:'2023-04-25',id:'6uMu4poce5OdMd1HYglZux',img:'ab67616d0000b27346313223adf2b6d726388328',note:'Album date on Spotify; the VIBE single was released January 13, 2023.'},
 {k:'feat',t:'With you — Our Blues (Original Television Soundtrack)',type:'OST · Jimin & HA SUNG WOON',d:'2022-05-24',id:'2CMhOK08vzM7xTl3nEnghs',img:'ab67616d0000b273dcf2ea6a2e3a7aaf53041534',note:'Compilation date on Spotify.'}];

// Official Spotify cover for a song title, using the same DISC image ids as the Discography page.
function songCover(title){
  if(typeof DISC==='undefined'||!title) return null;
  const norm=typeof songNorm==='function'?songNorm:t=>t.toLowerCase().replace(/[–—]/g,'-').replace(/\(feat\.[^)]*\)/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  const n=norm(title);
  const exactTitle=DISC.find(r=>norm(r.t)===n);
  if(exactTitle) return {src:IMG+exactTitle.img, alt:title+' cover art', album:exactTitle.t};
  for(const r of DISC){ if((r.tracks||[]).some(t=>t===title||norm(t)===n)) return {src:IMG+r.img, alt:title+' cover art', album:r.t}; }
  if(/^who\b/.test(n)&&/remix|instrumental/.test(n)){const r=DISC.find(x=>x.t==='WHO (Remixes)'); if(r) return {src:IMG+r.img, alt:title+' cover art', album:r.t};}
  if(/^like crazy\b/.test(n)){const r=DISC.find(x=>x.t==='FACE'); if(r) return {src:IMG+r.img, alt:title+' cover art', album:r.t};}
  if(/^vibe\b/.test(n)){const r=DISC.find(x=>/VIBE/.test(x.t)); if(r) return {src:IMG+r.img, alt:title+' cover art', album:r.t};}
  if(/^angel pt\.? 1\b/.test(n)){const r=DISC.find(x=>/Angel Pt\. 1/.test(x.t)); if(r) return {src:IMG+r.img, alt:title+' cover art', album:r.t};}
  if(/^with you\b/.test(n)){const r=DISC.find(x=>/With you/.test(x.t)); if(r) return {src:IMG+r.img, alt:title+' cover art', album:r.t};}
  return null;
}
// Spotify serves each cover at 64px (ab67616d00004851), 300px (ab67616d00001e02) and 640px (ab67616d0000b273); ask for the smallest that is sharp enough.
function coverSized(src,px){ return src.replace('ab67616d0000b273','ab67616d0000'+(px<=64?'4851':px<=300?'1e02':'b273')); }
function coverImg(title, className, size){
  const c=songCover(title); if(!c) return null;
  const im=document.createElement('img');
  const n=size||40;
  im.src=coverSized(c.src,n<=40?64:300); im.alt=c.alt; im.loading='lazy'; im.decoding='async';
  if(className) im.className=className;
  im.width=n; im.height=n;
  if(n>40){ im.srcset=coverSized(c.src,300)+' 300w, '+c.src+' 640w'; im.sizes=n+'px'; }
  return im;
}

const fmtD=iso=>new Date(iso+'T12:00:00').toLocaleDateString(document.documentElement.lang==='ko'?'ko-KR':'en-US',{year:'numeric',month:'long',day:'numeric'});
function mk(t,c,txt){const e=document.createElement(t);if(c)e.className=c;if(txt!=null)e.textContent=txt;return e;}
// Combined streams for an album/EP: sum of each listed track that is in SONGS. All listed tracks must match so the total is not silently short. Share is of TOTALS.streams (every song on the site).
function albumTrackTotal(r){
  if(!r||!r.tracks||!r.tracks.length||typeof SONGS==='undefined') return null;
  const rows=r.tracks.map(t=>SONGS.find(s=>s[0]===t));
  if(rows.some(s=>!s)) return null;
  const total=rows.reduce((a,s)=>a+s[1],0);
  const all=(typeof TOTALS!=='undefined'&&TOTALS.streams)||0;
  if(!all||!total) return null;
  return {total, n:rows.length, pct:Math.max(0,Math.min(100,total/all*100))};
}
function discPage(){
  if(!document.getElementById('disc-albums')) return;
  for(const k of ['album','single','feat']){
    const g=document.getElementById(k==='album'?'disc-albums':k==='single'?'disc-singles':'disc-feat');
    for(const r of DISC.filter(x=>x.k===k)){
      const c=mk('article','disc-card'); c.id='disc-'+r.t.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); const im=mk('img'); im.src=coverSized(IMG+r.img,300); im.srcset=coverSized(IMG+r.img,300)+' 300w, '+IMG+r.img+' 640w'; im.sizes='(max-width:640px) 92vw, 300px'; im.alt=r.t+' cover art'; im.width=300; im.height=300; im.loading='lazy'; im.decoding='async';
      const b=mk('div','body'); b.append(mk('h3',null,r.t),mk('div','meta',r.type+' · '+fmtD(r.d)));
      if(r.note) b.append(mk('div','meta',r.note));
      const tot=albumTrackTotal(r);
      if(tot){const box=mk('div','disc-total');
        const lab=mk('span','disc-total-label','Tracks combined');
        box.append(mk('strong','gold',(typeof format==='function'?format:n=>n.toLocaleString('en-US'))(tot.total)),lab);
        const bar=mk('div','g-bar'); bar.setAttribute('role','progressbar'); bar.setAttribute('aria-valuemin','0'); bar.setAttribute('aria-valuemax','100'); bar.setAttribute('aria-valuenow',String(Math.round(tot.pct))); bar.setAttribute('aria-label',tot.pct.toFixed(1)+'% of all Jimin streams');
        const fill=mk('span','g-bar-fill'); fill.style.width=tot.pct.toFixed(1)+'%'; bar.append(fill); box.append(bar);
        box.append(mk('span','disc-total-cap',tot.pct.toFixed(1)+'% of all Jimin streams'));
        b.append(box);}
      if(r.tracks){const wrap=mk('div','disc-tracks'); wrap.append(mk('h4','disc-tracks-head','Tracks'));
        const ol=mk('ol'); const fmtN=typeof format==='function'?format:n=>n.toLocaleString('en-US');
        r.tracks.forEach(t=>{const li=mk('li'); const s=typeof SONGS!=='undefined'&&SONGS.find(x=>x[0]===t);
          if(s){const a=mk('a','no-tr',t); a.href='./song/'+t.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'.html'; li.append(a, mk('span','disc-track-streams',fmtN(s[1])));}
          else li.textContent=t; // no stream figure unless the song is in SONGS
          ol.append(li);});
        wrap.append(ol); b.append(wrap);}
      const a=mk('a','sp ui-t','Listen on Spotify ↗'); a.href=SP+r.id; a.target='_blank'; a.rel='noopener'; b.append(a);
      c.append(im,b); g.append(c);
    }
  }
}
// Calendar events: [MM-DD, year, kind, label, source]
const CAL=[
 ['10-13',1995,'Birthday',"Jimin's birthday",'https://en.wikipedia.org/wiki/Jimin'],
 ['12-30',2018,'Release','"Promise"','https://btsblog.ibighit.com/m/383'],
 ['12-24',2020,'Release','"Christmas Love"','https://btsblog.ibighit.com/m/407'],
 ['03-17',2023,'Release','"Set Me Free Pt.2" pre-release single','https://en.wikipedia.org/wiki/Face_(Jimin_album)'],
 ['03-24',2023,'Release','FACE (first solo album) and "Like Crazy"',SP+'4xc3Lc9yASZgEJGH7acWMB'],
 ['04-08',2023,'Achievement','"Like Crazy" No. 1 on the Billboard Hot 100','https://www.billboard.com/music/chart-beat/jimin-like-crazy-debuts-number-one-first-bts-solo-hot-100-1235297097/'],
 ['12-12',2023,'Service','Jimin enlisted for military service','https://en.yna.co.kr/view/AEN20231211008652315'],
 ['12-22',2023,'Release','"Closer Than This"',SP+'3auDI7RSdoJr99qMNXimP4'],
 ['06-28',2024,'Release','"Smeraldo Garden Marching Band (feat. Loco)"',SP+'2PcM535knJOZb6MUth8axj'],
 ['07-19',2024,'Release','MUSE and "WHO"',SP+'15XcLhiVMlSOipUddTNDnr'],
 ['07-23',2024,'Release','MUSE (WANDER / WONDER ver.) and WHO (Remixes)',SP+'7KIwUrSiA0gc9WlI7AYIfZ'],
 ['08-02',2024,'Release','"Be Mine (English Version)"',SP+'7EGoWlfxvnwpTamkoOhWcb'],
 ['01-13',2023,'Release','"VIBE" (TAEYANG feat. Jimin)','https://en.wikipedia.org/wiki/Vibe_(Taeyang_song)'],
 ['05-18',2023,'Release','"Angel Pt. 1" (FAST X soundtrack)','https://en.wikipedia.org/wiki/Angel_Pt._1'],
 ['06-11',2025,'Service','Jimin discharged from military service','https://en.yna.co.kr/view/AEN20250611000951315']];
function calEvents(){
  const ev=CAL.slice();
  if(typeof ACH_BRAND!=='undefined') ACH_BRAND.forEach(r=>{if(r[1]===1&&/^\d{4}-\d{2}-\d{2}$/.test(r[4]||''))ev.push([r[4].slice(5),+r[4].slice(0,4),'Achievement',`#1 boy group member brand reputation (${r[0]})`,r[3]]);});
  return ev;
}
function calPage(){
  const box=document.getElementById('cal-months'); if(!box) return;
  const ev=calEvents();
  const todayIso=new Date().toLocaleDateString('en-CA',{timeZone:'America/Los_Angeles'});
  const today=new Date(todayIso+'T12:00:00'); const ty=today.getFullYear();
  const loc=document.documentElement.lang==='ko'?'ko-KR':document.documentElement.lang==='es'?'es-ES':'en-US';
  const next=e=>{let d=new Date(ty+'-'+e[0]+'T12:00:00');if(d<today)d=new Date((ty+1)+'-'+e[0]+'T12:00:00');return d;};
  const up=ev.map(e=>[e,next(e)]).sort((a,b)=>a[1]-b[1]).slice(0,3);
  const nb=document.getElementById('cal-next');
  nb.replaceChildren();
  up.forEach(([e,d])=>{const days=Math.round((d-today)/864e5);const m=mk('div','metric');m.append(mk('strong',null,days===0?'Today':days+' days'),mk('span',null,e[3]),mk('small',null,fmtD(d.toISOString().slice(0,10))+' · '+(d.getFullYear()-e[1])+(e[2]==='Birthday'?'':' yr anniversary')));nb.append(m);});
  box.replaceChildren();
  const dows=[0,1,2,3,4,5,6].map(i=>new Date(2026,7,2+i).toLocaleDateString('en-US',{weekday:'short'})); // Sun–Sat in English for i18n maps
  for(let mo=1;mo<=12;mo++){
    const items=ev.filter(e=>+e[0].slice(0,2)===mo).sort((a,b)=>a[0].localeCompare(b[0]));
    const byDay={}; items.forEach(e=>{const d=e[0].slice(3);(byDay[d]=byDay[d]||[]).push(e);});
    const month=mk('section','cal-grid-month');
    if(mo===today.getMonth()+1||(up[0]&&mo===up[0][1].getMonth()+1)) month.classList.add('is-focus');
    const monthName=new Date(2000,mo-1,1).toLocaleDateString('en-US',{month:'long'});
    month.append(mk('h3',null,monthName+' · '+items.length));
    const grid=mk('div','cal-grid');
    dows.forEach(d=>grid.append(mk('span','cal-dow',d)));
    const first=new Date(ty+'-'+String(mo).padStart(2,'0')+'-01T12:00:00');
    const start=first.getDay(); // 0 Sun
    const dim=new Date(ty,mo,0).getDate();
    for(let i=0;i<start;i++) grid.append(mk('span','cal-cell is-pad',''));
    for(let day=1;day<=dim;day++){
      const key=String(day).padStart(2,'0');
      const evs=byDay[key];
      const cell=mk(evs?'button':'span','cal-cell'+(evs?' has-event':'')+(ty===today.getFullYear()&&mo===today.getMonth()+1&&day===today.getDate()?' is-today':''), String(day));
      if(evs){
        cell.type='button';
        cell.id='cal-'+String(mo).padStart(2,'0')+'-'+key;
        cell.setAttribute('aria-label', evs.map(e=>monthName+' '+day+': '+e[3]).join('. '));
        cell.title=evs.map(e=>e[3]).join(', ');
        cell.addEventListener('click',()=>{const list=month.querySelector('.cal-events'); if(list) list.scrollIntoView({block:'nearest'});});
      }
      grid.append(cell);
    }
    month.append(grid);
    if(items.length){
      const ul=mk('ul','cal-events');
      items.forEach(e=>{
        const li=mk('li'); const tx=mk('div');
        tx.append(mk('div','cal-kind',e[2]+' · '+e[1]),mk('div',null,e[3]));
        const a=mk('a',null,'source'); a.href=e[4]; a.target='_blank'; a.rel='noopener'; tx.append(a);
        li.append(mk('div','cal-day',e[0].slice(3)),tx); ul.append(li);
      });
      month.append(ul);
    }
    box.append(month);
  }
}
discPage(); calPage();
const _calSel=document.getElementById('lang-select');
if(_calSel&&document.getElementById('cal-months')) _calSel.addEventListener('change',()=>setTimeout(calPage,0));


function ytRecords(){
  const box=document.getElementById('yt-records-body'); if(!box) return;
  const lang=document.documentElement.lang==='ko'||document.documentElement.lang==='es'?document.documentElement.lang:'en';
  const T={
    en:{h:'YouTube records',cap:'Source: YouTube. Figures are from official uploads on HYBE LABELS, BANGTANTV and Jimin - Topic, as of the latest reading.',
        mv:'Most-viewed official MV',aud:'Most-viewed official audio',liked:'Most-liked video',gain:'Fastest gainer today',avg:'Highest average views per day',
        views:'views',likes:'likes',perDay:'views/day',noGain:'Daily gains start Nov 18'},
    ko:{h:'유튜브 기록',cap:'출처: YouTube. HYBE LABELS, BANGTANTV, Jimin - Topic의 공식 업로드를 최근 기록 기준으로 집계했습니다.',
        mv:'최다 조회 공식 뮤직비디오',aud:'최다 조회 공식 오디오',liked:'최다 좋아요 영상',gain:'오늘 가장 빠른 증가',avg:'공개 이후 일평균 조회 1위',
        views:'조회수',likes:'좋아요',perDay:'일평균 조회수',noGain:'일일 증가는 11월 18일부터 표시됩니다'},
    es:{h:'Récords de YouTube',cap:'Fuente: YouTube. Cifras de las subidas oficiales en HYBE LABELS, BANGTANTV y Jimin - Topic, según la última lectura.',
        mv:'Videoclip oficial más visto',aud:'Audio oficial más visto',liked:'Video con más me gusta',gain:'Mayor aumento de hoy',avg:'Mayor media de vistas por día',
        views:'vistas',likes:'me gusta',perDay:'vistas/día',noGain:'Los aumentos diarios empiezan el 18 de noviembre'}
  }[lang];
  const h=document.getElementById('yt-records-h'); if(h) h.textContent=T.h;
  const cap=document.getElementById('yt-records-cap'); if(cap) cap.textContent=T.cap;
  box.textContent='';
  if(typeof YT_VIDEOS==='undefined') return;
  const ok=YT_VIDEOS.filter(v=>v.views!=null);
  const n=v=>Number(v).toLocaleString('en-US');
  const card=(label,title,sub)=>{
    const d=document.createElement('div'); d.className='metric';
    const st=document.createElement('strong'); st.className='no-tr'; st.textContent=title||'–';
    const sp=document.createElement('span'); sp.textContent=label;
    d.append(st,sp);
    if(sub){const sm=document.createElement('small'); sm.textContent=sub; d.append(sm);}
    return d;
  };
  const mv=ok.filter(v=>v.kind==='mv').slice().sort((a,b)=>b.views-a.views)[0];
  const aud=ok.filter(v=>v.kind==='audio').slice().sort((a,b)=>b.views-a.views)[0];
  const liked=ok.filter(v=>v.likes!=null).slice().sort((a,b)=>b.likes-a.likes)[0];
  if(mv) box.append(card(T.mv,mv.title,n(mv.views)+' '+T.views));
  if(aud) box.append(card(T.aud,aud.title,n(aud.views)+' '+T.views));
  if(liked) box.append(card(T.liked,liked.title,n(liked.likes)+' '+T.likes));
  const gainer=ok.filter(v=>v.gain!=null).slice().sort((a,b)=>b.gain-a.gain)[0];
  if(gainer) box.append(card(T.gain,gainer.title,(gainer.gain>=0?'+':'−')+n(Math.abs(gainer.gain))+' '+T.views));
  else box.append(card(T.gain,'–',T.noGain));
  const avgOf=v=>{
    if(!v.published||!v.views) return null;
    const days=Math.max(1,Math.round((Date.parse(YT_UPDATED+'T12:00:00Z')-Date.parse(v.published+'T12:00:00Z'))/86400000));
    return v.views/days;
  };
  const avg=ok.map(v=>({v,a:avgOf(v)})).filter(x=>x.a!=null).sort((a,b)=>b.a-a.a)[0];
  if(avg) box.append(card(T.avg,avg.v.title,n(Math.round(avg.a))+' '+T.perDay));
  const wrap=document.getElementById('yt-records');
  if(wrap&&!wrap.dataset.wired){ wrap.dataset.wired='1'; new MutationObserver(ytRecords).observe(document.documentElement,{attributes:true,attributeFilter:['lang']}); }
}
function achPage(){
  if(!document.getElementById('cat-charts')) return;
  const sm=document.getElementById('sm-rows');
  if(sm&&typeof SONGS!=='undefined'){
    const tiers=[[2e9,'2 billion+'],[1e9,'1 billion+'],[5e8,'500 million+'],[1e8,'100 million+']];
    tiers.forEach(([t,l],i)=>{const hi=i?tiers[i-1][0]:Infinity;const s=SONGS.filter(r=>r[1]>=t&&r[1]<hi).map(r=>r[0]);if(!s.length)return;
      const tr=document.createElement('tr');tr.append(mk('td','gold',l+' streams'),mk('td',null,s.join(', ')));sm.append(tr);});
    document.getElementById('sm-cap').textContent=`Spotify all-time streams per song as of ${fmtD(UPDATED)} (updates daily). Source: Spotify.`;
  }
  document.querySelectorAll('.ach-cat').forEach(d=>{const n=d.querySelectorAll('tbody tr').length+d.querySelectorAll('#brand-metrics .metric').length;d.querySelector('.ach-count').textContent=n?'· '+n:'';});
  ytRecords();
}
window.addEventListener('load',achPage);

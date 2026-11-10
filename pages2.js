"use strict";
// Discography + calendar. Facts: release dates/covers from Spotify album pages; credits from published album credits (Wikipedia-cited).
const SP='https://open.spotify.com/album/', IMG='https://i.scdn.co/image/';
const DISC=[
 {k:'album',t:'MUSE',type:'Album',d:'2024-07-19',id:'15XcLhiVMlSOipUddTNDnr',img:'ab67616d0000b273f02c451189a709b9a952aaec',label:'Big Hit Music',prod:'Pdogg, Ghstloop, Jimin, Evan, Tommy Brown, Mr. Franks, Arcades, Jon Bellion, Pete Nappi, Tenroc, Ayo the Producer, Kofo',tracks:['Rebirth (Intro)','Interlude : Showtime','Smeraldo Garden Marching Band (feat. Loco)','Slow Dance (feat. Sofia Carson)','Be Mine','Who','Closer Than This']},
 {k:'album',t:'FACE',type:'Album',d:'2023-03-24',id:'4xc3Lc9yASZgEJGH7acWMB',img:'ab67616d0000b2732b46078245d0120690eb560d',label:'Big Hit Music',prod:'Pdogg, Ghstloop, Evan',tracks:['Face-off','Interlude : Dive','Like Crazy','Alone','Set Me Free Pt.2','Like Crazy (English Version)']},
 {k:'album',t:'MUSE (WANDER ver.)',type:'Album version',d:'2024-07-23',id:'4wfwJUghbK2z2iaz65U7VS',img:'ab67616d0000b27382601539d4a27061ad90eacb',note:'10 tracks'},
 {k:'album',t:'MUSE (WONDER ver.)',type:'Album version',d:'2024-07-23',id:'5AQc0yFXRcdUdko4sZ1fW9',img:'ab67616d0000b273f150d9f2e5e8148e5032fd7d',note:'10 tracks'},
 {k:'single',t:'Be Mine (English Version)',type:'Single',d:'2024-08-02',id:'7EGoWlfxvnwpTamkoOhWcb',img:'ab67616d0000b27319655636129722b4bd720dbc'},
 {k:'single',t:'Who (Remixes)',type:'Single',d:'2024-07-23',id:'7KIwUrSiA0gc9WlI7AYIfZ',img:'ab67616d0000b2737f35adfbec3bb2bc8256802b',note:'7 tracks'},
 {k:'single',t:'Smeraldo Garden Marching Band (feat. Loco)',type:'Pre-release single',d:'2024-06-28',id:'2PcM535knJOZb6MUth8axj',img:'ab67616d0000b27338881a83135ef5b4ace418ba',label:'Big Hit Music',prod:'Mr. Franks, Pdogg, Ghstloop, Tommy Brown'},
 {k:'single',t:'Closer Than This',type:'Single',d:'2023-12-22',id:'3auDI7RSdoJr99qMNXimP4',img:'ab67616d0000b273e3dbc03f538633dbb40adf37'},
 {k:'feat',t:'Angel Pt. 1 — FAST X (Original Motion Picture Soundtrack)',type:'Soundtrack · Kodak Black, NLE Choppa feat. Jimin, JVKE & Muni Long',d:'2023-05-19',id:'04qe48XDdDs4hdurvRDsCF',img:'ab67616d0000b2731aa0427818a335a27fba086e'},
 {k:'feat',t:'VIBE — Down to Earth',type:'TAEYANG feat. Jimin of BTS',d:'2023-04-25',id:'6uMu4poce5OdMd1HYglZux',img:'ab67616d0000b27346313223adf2b6d726388328',note:'Album date on Spotify; the VIBE single was released January 13, 2023.'},
 {k:'feat',t:'With you — Our Blues (Original Television Soundtrack)',type:'OST · Jimin & HA SUNG WOON',d:'2022-05-24',id:'2CMhOK08vzM7xTl3nEnghs',img:'ab67616d0000b273dcf2ea6a2e3a7aaf53041534',note:'Compilation date on Spotify.'}];
const fmtD=iso=>new Date(iso+'T12:00:00').toLocaleDateString(document.documentElement.lang==='ko'?'ko-KR':'en-US',{year:'numeric',month:'long',day:'numeric'});
function mk(t,c,txt){const e=document.createElement(t);if(c)e.className=c;if(txt!=null)e.textContent=txt;return e;}
function discPage(){
  if(!document.getElementById('disc-albums')) return;
  for(const k of ['album','single','feat']){
    const g=document.getElementById(k==='album'?'disc-albums':k==='single'?'disc-singles':'disc-feat');
    for(const r of DISC.filter(x=>x.k===k)){
      const c=mk('article','disc-card'); const im=mk('img'); im.src=IMG+r.img; im.alt=r.t+' cover art'; im.loading='lazy';
      const b=mk('div','body'); b.append(mk('h3',null,r.t),mk('div','meta',r.type+' · '+fmtD(r.d)));
      if(r.note) b.append(mk('div','meta',r.note));
      if(r.prod||r.tracks){const dt=mk('details');dt.append(mk('summary','ui-t',r.tracks?'Tracks':'Credits'));
        if(r.tracks){const ol=mk('ol');r.tracks.forEach(t=>{const li=mk('li');const s=typeof SONGS!=='undefined'&&SONGS.find(x=>x[0]===t);if(s){const a=mk('a','no-tr',t);a.href='./song/'+t.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')+'.html';li.append(a);}else li.textContent=t;ol.append(li);});dt.append(ol);}
        if(r.prod) dt.append(mk('p',null,'Label: '+r.label+' · Producers: '+r.prod));b.append(dt);}
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
 ['07-19',2024,'Release','MUSE and "Who"',SP+'15XcLhiVMlSOipUddTNDnr'],
 ['07-23',2024,'Release','MUSE (WANDER / WONDER ver.) and Who (Remixes)',SP+'7KIwUrSiA0gc9WlI7AYIfZ'],
 ['08-02',2024,'Release','"Be Mine (English Version)"',SP+'7EGoWlfxvnwpTamkoOhWcb'],
 ['01-13',2023,'Release','"VIBE" (TAEYANG feat. Jimin)','https://en.wikipedia.org/wiki/Vibe_(Taeyang_song)'],
 ['05-18',2023,'Release','"Angel Pt. 1" (FAST X soundtrack)','https://en.wikipedia.org/wiki/Angel_Pt._1'],
 ['06-11',2025,'Service','Jimin discharged from military service','https://en.yna.co.kr/view/AEN20250611000951315']];
function calPage(){
  const box=document.getElementById('cal-months'); if(!box) return;
  const ev=CAL.slice();
  if(typeof ACH_BRAND!=='undefined') ACH_BRAND.forEach(r=>{if(r[1]===1&&/^\d{4}-\d{2}-\d{2}$/.test(r[4]||''))ev.push([r[4].slice(5),+r[4].slice(0,4),'Achievement',`#1 boy group member brand reputation (${r[0]})`,r[3]]);});
  const todayIso=new Date().toLocaleDateString('en-CA',{timeZone:'America/Los_Angeles'});
  const today=new Date(todayIso+'T12:00:00'); const ty=today.getFullYear();
  const next=e=>{let d=new Date(ty+'-'+e[0]+'T12:00:00');if(d<today)d=new Date((ty+1)+'-'+e[0]+'T12:00:00');return d;};
  const up=ev.map(e=>[e,next(e)]).sort((a,b)=>a[1]-b[1]).slice(0,3);
  const nb=document.getElementById('cal-next');
  up.forEach(([e,d])=>{const days=Math.round((d-today)/864e5);const m=mk('div','metric');m.append(mk('strong',null,days===0?'Today':days+' days'),mk('span',null,e[3]),mk('small',null,fmtD(d.toISOString().slice(0,10))+' · '+(d.getFullYear()-e[1])+(e[2]==='Birthday'?'':' yr anniversary')));nb.append(m);});
  for(let mo=1;mo<=12;mo++){const items=ev.filter(e=>+e[0].slice(0,2)===mo).sort((a,b)=>a[0].localeCompare(b[0]));if(!items.length)continue;
    const dt=mk('details','cal-month');if(mo===today.getMonth()+1||mo===up[0][1].getMonth()+1)dt.open=true;
    dt.append(mk('summary',null,new Date(2000,mo-1,1).toLocaleDateString(document.documentElement.lang==='ko'?'ko-KR':'en-US',{month:'long'})+' · '+items.length));
    const ul=mk('ul');items.forEach(e=>{const li=mk('li');const tx=mk('div');tx.append(mk('div','cal-kind',e[2]+' · '+e[1]),mk('div',null,e[3]));const a=mk('a',null,'source');a.href=e[4];a.target='_blank';a.rel='noopener';tx.append(a);li.append(mk('div','cal-day',e[0].slice(3)),tx);ul.append(li);});
    dt.append(ul);box.append(dt);}
}
discPage(); calPage();
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
}
window.addEventListener('load',achPage);

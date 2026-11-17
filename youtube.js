"use strict";
// YouTube page (Nov 17, 2026). Data: youtube-data.js, written by /workspace/jimin/youtube_snapshot.py from YouTube's public
// watch-page counts (no API key). All text is built here in EN/KO/ES (containers are .no-tr so i18n.js leaves them alone)
// and re-rendered when the language changes. Screenshot-ready sections: #yt-hero, #yt-mv, #yt-top (each carries its own
// @JIMERICA / date / Source: YouTube line). Add ?shot=1 to hide controls for clean element screenshots.
(function(){
if(typeof YT_VIDEOS==='undefined') return;
const doc=document.documentElement, Q=new URLSearchParams(location.search);
if(Q.get('shot')==='1') doc.classList.add('shot');
const L=()=>doc.lang==='ko'||doc.lang==='es'?doc.lang:'en';
const S={
 en:{views:'views',likes:'likes',combined:'Combined YouTube views',across:n=>`across ${n} official Jimin videos`,gainSince:d=>`since ${d}`,
     noGain:d=>`Daily gains start ${d}`,noGainShort:d=>`Gain from ${d}`,totalLikes:'Combined likes',videos:'Videos tracked',topVid:'Most viewed',
     mvTitle:'Official music videos',mvSub:'Ranked by total views on YouTube.',topTitle:'Every tracked video',topSub:'Official music videos, performances and visualizers from HYBE LABELS and BANGTANTV.',
     sortBy:'Sort videos',sViews:'Views',sGain:'Daily gain',sLikes:'Likes',sNew:'Newest',sAZ:'A–Z',filt:'Filter videos',fAll:'All',fMv:'Music videos',fPerf:'Performances',fVis:'Visualizers & more',
     read:(d,t)=>`Views read from YouTube on ${d} at ${t} PT.`,gainNote:(a,b)=>`Daily gain = views now minus the reading on ${a}.`,
     firstNote:(d)=>`Tracking started ${d}. Daily gains appear from the second daily reading; until then no gain is shown.`,
     stale:d=>`Could not be read today; showing the last reading from ${d}.`,
     wm:(d,t)=>`Views as of ${d}, ${t} PT · Source: YouTube`,watch:'Watch on YouTube',on:'on',published:'Released',shown:n=>`${n} videos`,noViews:'Not available',
     k:{mv:'Official MV',track:'Track video',live:'Live clip',dance:'Dance practice',perf:'TV performance',visualizer:'Visualizer',song:'Song video'}},
 ko:{views:'조회수',likes:'좋아요',combined:'유튜브 누적 조회수',across:n=>`지민 공식 영상 ${n}개 합계`,gainSince:d=>`${d} 대비`,
     noGain:d=>`일일 증가는 ${d}부터 표시됩니다`,noGainShort:d=>`${d}부터 증가 표시`,totalLikes:'좋아요 합계',videos:'추적 영상',topVid:'최다 조회',
     mvTitle:'공식 뮤직비디오',mvSub:'유튜브 누적 조회수 순위입니다.',topTitle:'추적 중인 모든 영상',topSub:'HYBE LABELS와 BANGTANTV의 공식 뮤직비디오, 무대, 비주얼라이저.',
     sortBy:'영상 정렬',sViews:'조회수',sGain:'일일 증가',sLikes:'좋아요',sNew:'최신순',sAZ:'가나다',filt:'영상 필터',fAll:'전체',fMv:'뮤직비디오',fPerf:'무대·퍼포먼스',fVis:'비주얼라이저 등',
     read:(d,t)=>`${d} ${t}(PT)에 유튜브에서 읽은 조회수입니다.`,gainNote:(a,b)=>`일일 증가 = 현재 조회수 − ${a} 기록.`,
     firstNote:(d)=>`${d}부터 추적을 시작했습니다. 일일 증가는 두 번째 기록부터 표시되며, 그전에는 표시하지 않습니다.`,
     stale:d=>`오늘은 읽지 못해 ${d} 기록을 표시합니다.`,
     wm:(d,t)=>`${d} ${t}(PT) 기준 조회수 · 출처: YouTube`,watch:'유튜브에서 보기',on:'',published:'공개',shown:n=>`영상 ${n}개`,noViews:'정보 없음',
     k:{mv:'공식 뮤직비디오',track:'트랙 비디오',live:'라이브 클립',dance:'안무 연습',perf:'TV 무대',visualizer:'비주얼라이저',song:'노래 영상'}},
 es:{views:'vistas',likes:'me gusta',combined:'Vistas combinadas en YouTube',across:n=>`en ${n} videos oficiales de Jimin`,gainSince:d=>`desde el ${d}`,
     noGain:d=>`Los aumentos diarios empiezan el ${d}`,noGainShort:d=>`Aumento desde el ${d}`,totalLikes:'Me gusta combinados',videos:'Videos seguidos',topVid:'Más visto',
     mvTitle:'Videoclips oficiales',mvSub:'Ordenados por vistas totales en YouTube.',topTitle:'Todos los videos seguidos',topSub:'Videoclips oficiales, actuaciones y visualizers de HYBE LABELS y BANGTANTV.',
     sortBy:'Ordenar videos',sViews:'Vistas',sGain:'Aumento diario',sLikes:'Me gusta',sNew:'Más recientes',sAZ:'A–Z',filt:'Filtrar videos',fAll:'Todos',fMv:'Videoclips',fPerf:'Actuaciones',fVis:'Visualizers y más',
     read:(d,t)=>`Vistas leídas en YouTube el ${d} a las ${t} PT.`,gainNote:(a,b)=>`Aumento diario = vistas actuales menos la lectura del ${a}.`,
     firstNote:(d)=>`El seguimiento empezó el ${d}. Los aumentos diarios aparecen desde la segunda lectura diaria; hasta entonces no se muestra ninguno.`,
     stale:d=>`No se pudo leer hoy; se muestra la última lectura del ${d}.`,
     wm:(d,t)=>`Vistas al ${d}, ${t} PT · Fuente: YouTube`,watch:'Ver en YouTube',on:'en',published:'Publicado',shown:n=>`${n} videos`,noViews:'No disponible',
     k:{mv:'Videoclip oficial',track:'Video de la canción',live:'Clip en vivo',dance:'Práctica de baile',perf:'Actuación en TV',visualizer:'Visualizer',song:'Video musical'}}
};
const TITLE_KO={'Letter (Dear. ARMY) #2023BTSFESTA':'편지 (Dear. ARMY) #2023BTSFESTA'};
const TITLE_ES={'Letter (Dear. ARMY) #2023BTSFESTA':'Carta (Dear. ARMY) #2023BTSFESTA'};
const MON_EN=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], MON_ES=['ene','feb','mar','abr','may','jun','jul','ago','sept','oct','nov','dic'];
const MONL_EN=['January','February','March','April','May','June','July','August','September','October','November','December'], MONL_ES=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
function fd(iso,long){ if(!iso) return ''; const [y,m,d]=iso.slice(0,10).split('-').map(Number); const l=L();
  if(l==='ko') return long===false?`${m}월 ${d}일`:`${y}년 ${m}월 ${d}일`;
  if(l==='es') return long===false?`${d} de ${MONL_ES[m-1]}`:`${d} de ${MONL_ES[m-1]} de ${y}`;
  return long===false?`${MONL_EN[m-1]} ${d}`:`${MONL_EN[m-1]} ${d}, ${y}`; }
function fdShort(iso){ const [y,m,d]=iso.slice(0,10).split('-').map(Number); const l=L();
  return l==='ko'?`${y}. ${m}. ${d}.`:l==='es'?`${d} ${MON_ES[m-1]} ${y}`:`${MON_EN[m-1]} ${d}, ${y}`; }
function fdShort2(iso,short){ if(!short) return fd(iso,false); const [y,m,d]=iso.split('-').map(Number); const l=L(); return l==='ko'?`${m}월 ${d}일`:l==='es'?`${d} ${MON_ES[m-1]}`:`${MON_EN[m-1]} ${d}`; }
function ft(iso){ const [h,mi]=iso.slice(11,16).split(':').map(Number); const l=L();
  if(l==='en') return `${(h%12)||12}:${String(mi).padStart(2,'0')} ${h<12?'AM':'PM'}`;
  if(l==='ko') return `${h<12?'오전':'오후'} ${(h%12)||12}:${String(mi).padStart(2,'0')}`;
  return `${h}:${String(mi).padStart(2,'0')}`; }
function nextDay(iso){ const d=new Date(iso+'T12:00:00Z'); d.setUTCDate(d.getUTCDate()+1); return d.toISOString().slice(0,10); }
const n=v=>v==null?'–':Number(v).toLocaleString('en-US');
const compact=v=>{ if(v==null) return '–'; const l=L();
  if(l==='ko'){ if(v>=1e8) return (v/1e8).toFixed(2).replace(/\.?0+$/,'')+'억'; if(v>=1e4) return Math.round(v/1e4).toLocaleString('en-US')+'만'; return n(v); }
  if(v>=1e9) return (v/1e9).toFixed(2).replace(/\.?0+$/,'')+'B'; if(v>=1e6) return (v/1e6).toFixed(1).replace(/\.0$/,'')+'M'; if(v>=1e3) return Math.round(v/1e3)+'K'; return n(v); };
const mk=(tag,cls,text)=>{const e=document.createElement(tag); if(cls) e.className=cls; if(text!=null) e.textContent=text; return e;};
const title=v=>{const l=L(); return (l==='ko'&&TITLE_KO[v.title])||(l==='es'&&TITLE_ES[v.title])||v.title;};
const thumb=id=>`https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const rows=YT_VIDEOS.slice();
const hasGain=rows.some(v=>v.gain!=null), gainFrom=(rows.find(v=>v.gain_from)||{}).gain_from;
let sort=Q.get('sort')||'views', filt=Q.get('type')||'all';
const GROUP={mv:'mv',track:'mv',live:'perf',dance:'perf',perf:'perf',visualizer:'vis',song:'vis'};

function chip(v,t,short){
  const c=mk('span','yt-chip');
  if(v.gain!=null){ c.classList.add(v.gain>0?'up':'flat'); c.append(mk('b',null,(v.gain>=0?'+':'−')+n(Math.abs(v.gain))), mk('span',null,' '+t.gainSince(fd(v.gain_from,false)))); }
  else { c.classList.add('pending'); c.textContent=v.read_date&&v.read_date!==YT_UPDATED?t.stale(fd(v.read_date,false)):(short?t.noGainShort:t.noGain)(fdShort2(nextDay(YT_FIRST),short)); }
  return c;
}
function card(v,rank,t,big){
  const a=mk('a','yt-card'+(big?' big':'')); a.href='https://www.youtube.com/watch?v='+v.id; a.target='_blank'; a.rel='noopener';
  a.setAttribute('aria-label',`${title(v)} · ${t.k[v.kind]} · ${n(v.views)} ${t.views} · ${t.watch}`);
  const th=mk('div','yt-thumb'); const img=mk('img'); img.src=thumb(v.id); img.alt=''; img.loading='eager'; img.width=480; img.height=360; img.crossOrigin='anonymous'; th.append(img);
  th.append(mk('span','yt-rank',String(rank)), mk('span','yt-kind',t.k[v.kind]));
  const body=mk('div','yt-body');
  body.append(mk('strong','yt-title',title(v)));
  body.append(mk('span','yt-meta',`${v.channel} · ${fdShort(v.published||'')}`));
  const st=mk('div','yt-stats'); const vw=mk('span','yt-views'); vw.append(mk('b',null,n(v.views)),mk('small',null,' '+t.views)); st.append(vw);
  if(v.likes!=null) st.append(mk('span','yt-likes',`♥ ${compact(v.likes)} ${t.likes}`));
  body.append(st, chip(v,t,true));
  a.append(th,body); return a;
}
function wm(t){ const w=mk('p','yt-wm'); w.append(mk('strong',null,'@JIMERICA'), mk('span',null,t.wm(fd(YT_UPDATED),ft(YT_TAKEN)))); return w; }
function hero(t){
  const box=document.getElementById('yt-hero-body'); if(!box) return; box.textContent='';
  const ok=rows.filter(v=>v.views!=null), total=ok.reduce((s,v)=>s+v.views,0), likes=ok.reduce((s,v)=>s+(v.likes||0),0);
  const allGain=ok.length&&ok.every(v=>v.gain!=null), g=allGain?ok.reduce((s,v)=>s+v.gain,0):null;
  const top=ok.slice().sort((a,b)=>b.views-a.views)[0];
  const main=mk('div','yt-hero-main');
  main.append(mk('span','yt-eyebrow',t.combined)); const big=mk('strong','yt-big',n(total)); main.append(big);
  main.append(mk('span','yt-across',t.across(ok.length)));
  const gc=mk('span','yt-chip lg'); if(g!=null){gc.classList.add(g>0?'up':'flat'); gc.append(mk('b',null,(g>=0?'+':'−')+n(Math.abs(g))),mk('span',null,' '+t.gainSince(fd(gainFrom,false))));} else {gc.classList.add('pending'); gc.textContent=t.noGain(fd(nextDay(YT_FIRST),false));}
  main.append(gc);
  const side=mk('div','yt-hero-side');
  const stat=(k,v,s)=>{const d=mk('div','yt-stat'); d.append(mk('span',null,k),mk('strong',null,v)); if(s) d.append(mk('small',null,s)); return d;};
  side.append(stat(t.totalLikes,n(likes)), stat(t.videos,String(ok.length),'HYBE LABELS · BANGTANTV'));
  if(top) side.append(stat(t.topVid,title(top),`${t.k[top.kind]} · ${n(top.views)} ${t.views}`));
  box.append(main,side,wm(t));
}
function mvs(t){
  const g=document.getElementById('yt-mv-grid'); if(!g) return; g.textContent='';
  rows.filter(v=>GROUP[v.kind]==='mv'&&v.views!=null).sort((a,b)=>b.views-a.views).forEach((v,i)=>g.append(card(v,i+1,t,true)));
  const s=document.getElementById('yt-mv-sub'); if(s) s.textContent=t.mvSub;
  const w=document.getElementById('yt-mv-wm'); if(w){w.replaceWith(Object.assign(wm(t),{id:'yt-mv-wm'}));}
}
function list(t){
  const g=document.getElementById('yt-grid'); if(!g) return; g.textContent='';
  let r=rows.filter(v=>filt==='all'||GROUP[v.kind]===filt);
  const by={views:(a,b)=>(b.views??-1)-(a.views??-1),gain:(a,b)=>(b.gain??-Infinity)-(a.gain??-Infinity)||(b.views??-1)-(a.views??-1),likes:(a,b)=>(b.likes??-1)-(a.likes??-1),
    newest:(a,b)=>String(b.published).localeCompare(String(a.published)),az:(a,b)=>title(a).localeCompare(title(b))};
  r.sort(by[sort]||by.views); r.forEach((v,i)=>g.append(card(v,i+1,t)));
  const c=document.getElementById('yt-count'); if(c) c.textContent=t.shown(r.length);
  document.querySelectorAll('[data-yt-sort]').forEach(b=>{b.textContent=t[b.dataset.label]; b.setAttribute('aria-pressed',String(b.dataset.ytSort===sort));});
  document.querySelectorAll('[data-yt-type]').forEach(b=>{b.textContent=t[b.dataset.label]; b.setAttribute('aria-pressed',String(b.dataset.ytType===filt));});
  const sg=document.getElementById('yt-sort-group'); if(sg) sg.setAttribute('aria-label',t.sortBy);
  const fg=document.getElementById('yt-type-group'); if(fg) fg.setAttribute('aria-label',t.filt);
  const s=document.getElementById('yt-top-sub'); if(s) s.textContent=t.topSub;
  const w=document.getElementById('yt-top-wm'); if(w){w.replaceWith(Object.assign(wm(t),{id:'yt-top-wm'}));}
}
function notes(t){
  const p=document.getElementById('yt-notes'); if(!p) return; p.textContent='';
  p.append(mk('span',null,t.read(fd(YT_UPDATED),ft(YT_TAKEN))+' '), mk('span',null,(hasGain?t.gainNote(fd(gainFrom)):t.firstNote(fd(YT_FIRST)))));
}
function heads(t){
  const set=(id,k)=>{const e=document.getElementById(id); if(e) e.textContent=t[k];};
  set('yt-mv-h','mvTitle'); set('yt-top-h','topTitle');
}
function render(){ const t=S[L()]; heads(t); hero(t); mvs(t); list(t); notes(t); }
document.querySelectorAll('[data-yt-sort]').forEach(b=>b.addEventListener('click',()=>{sort=b.dataset.ytSort; list(S[L()]);}));
document.querySelectorAll('[data-yt-type]').forEach(b=>b.addEventListener('click',()=>{filt=b.dataset.ytType; list(S[L()]);}));
{const h=document.querySelector('.site-header'); if(h&&!document.querySelector('.upd-badge')){const b=mk('div','upd-badge'); const [y,m,d]=YT_UPDATED.split('-').map(Number); b.textContent='Data updated '+MONL_EN[m-1]+' '+d+', '+y; h.append(b);}} // YouTube reading date, not the Spotify date
render();
new MutationObserver(render).observe(doc,{attributes:true,attributeFilter:['lang']});
window.JIMYT={render,shots:['yt-hero','yt-mv','yt-top']};
})();

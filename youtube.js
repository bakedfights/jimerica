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
 en:{views:'views',likes:'likes',combined:'Combined YouTube views',across:n=>`across ${n} official videos and audio uploads`,gainSince:d=>`since ${d}`,
     noGain:d=>`Daily gains start ${d}`,noGainShort:d=>`Gain from ${d}`,totalLikes:'Combined likes',videos:'Videos tracked',split:(m,l,a)=>[`${m} MVs`,l?`${l} lyric video${l>1?'s':''}`:'',`${a} official audio`].filter(Boolean).join(' · '),songs:(n,t)=>`${n} of ${t} songs`,songsL:'Songs covered',topVid:'Most viewed',
     mvTitle:'Official music videos',mvSub:'Official MVs and lyric video, ranked by total views on YouTube.',topTitle:'Every official MV and audio',topSub:'One official audio per song (Jimin - Topic or the label upload) plus every official MV and lyric video, from official channels only: HYBE LABELS, BANGTANTV, Jimin - Topic, THEBLACKLABEL, YAMYAM ENTERTAINMENT and JVKE.',
     sortBy:'Sort videos',sViews:'Views',sGain:'Daily gain',sLikes:'Likes',sNew:'Newest',sAvg:'Avg. per day',sAZ:'A–Z',filt:'Filter videos',fAll:'All',fMv:'MV',fAud:'Audio',
     read:(d,t)=>`Views read from YouTube on ${d} at ${t} PT.`,gainNote:(a,b)=>`Daily gain = views now minus the reading on ${a}.`,
     firstNote:(d)=>`Tracking started ${d}. Daily gains appear from the second daily reading; until then no gain is shown.`,
     stale:d=>`Could not be read today; showing the last reading from ${d}.`,
     wm:(d,t)=>`Views as of ${d}, ${t} PT · Source: YouTube`,watch:'Watch on YouTube',on:'on',published:'Released',shown:n=>`${n} videos`,noViews:'Not available',
     topGain:'Top gainer today',nextMs:'Next',toGo:n=>`${n} to go`,est:d=>`est. ${d}`,
     trendSoon:'Trend appears after 7 days',
     missing:'Angel Pt. 1 and Angel Pt. 1 - Sped Up are not listed: they have no official upload on the channels this page tracks.',
     k:{mv:'Official MV',lyric:'Official lyric video',audio:'Official audio'}},
 ko:{views:'조회수',likes:'좋아요',combined:'유튜브 누적 조회수',across:n=>`공식 영상·오디오 ${n}개 합계`,gainSince:d=>`${d} 대비`,
     noGain:d=>`일일 증가는 ${d}부터 표시됩니다`,noGainShort:d=>`${d}부터 증가 표시`,totalLikes:'좋아요 합계',videos:'추적 영상',split:(m,l,a)=>[`뮤비 ${m}`,l?`가사 영상 ${l}`:'',`오디오 ${a}`].filter(Boolean).join(' · '),songs:(n,t)=>`${t}곡 중 ${n}곡`,songsL:'포함된 곡',topVid:'최다 조회',
     mvTitle:'공식 뮤직비디오',mvSub:'공식 뮤직비디오와 가사 영상의 유튜브 누적 조회수 순위입니다.',topTitle:'모든 공식 뮤직비디오와 오디오',topSub:'곡마다 공식 오디오 1개(Jimin - Topic 또는 레이블 업로드)와 모든 공식 뮤직비디오·가사 영상. 공식 채널만 집계: HYBE LABELS, BANGTANTV, Jimin - Topic, THEBLACKLABEL, YAMYAM ENTERTAINMENT, JVKE.',
     sortBy:'영상 정렬',sViews:'조회수',sGain:'일일 증가',sLikes:'좋아요',sNew:'최신순',sAvg:'일평균',sAZ:'가나다',filt:'영상 필터',fAll:'전체',fMv:'뮤직비디오',fAud:'오디오',
     read:(d,t)=>`${d} ${t}(PT)에 유튜브에서 읽은 조회수입니다.`,gainNote:(a,b)=>`일일 증가 = 현재 조회수 − ${a} 기록.`,
     firstNote:(d)=>`${d}부터 추적을 시작했습니다. 일일 증가는 두 번째 기록부터 표시되며, 그전에는 표시하지 않습니다.`,
     stale:d=>`오늘은 읽지 못해 ${d} 기록을 표시합니다.`,
     wm:(d,t)=>`${d} ${t}(PT) 기준 조회수 · 출처: YouTube`,watch:'유튜브에서 보기',on:'',published:'공개',shown:n=>`영상 ${n}개`,noViews:'정보 없음',
     topGain:'오늘 최다 증가',nextMs:'다음',toGo:n=>`${n} 남음`,est:d=>`예상 ${d}`,
     trendSoon:'추이는 7일 후 표시됩니다',
     missing:'Angel Pt. 1과 Angel Pt. 1 - Sped Up은 이 페이지가 집계하는 공식 채널에 공식 영상이 없어 목록에 없습니다.',
     k:{mv:'공식 뮤직비디오',lyric:'공식 가사 영상',audio:'공식 오디오'}},
 es:{views:'vistas',likes:'me gusta',combined:'Vistas combinadas en YouTube',across:n=>`en ${n} videos y audios oficiales`,gainSince:d=>`desde el ${d}`,
     noGain:d=>`Los aumentos diarios empiezan el ${d}`,noGainShort:d=>`Aumento desde el ${d}`,totalLikes:'Me gusta combinados',videos:'Videos seguidos',split:(m,l,a)=>[`${m} videoclips`,l?`${l} video${l>1?'s':''} con letra`:'',`${a} audios oficiales`].filter(Boolean).join(' · '),songs:(n,t)=>`${n} de ${t} canciones`,songsL:'Canciones incluidas',topVid:'Más visto',
     mvTitle:'Videoclips oficiales',mvSub:'Videoclips y video con letra oficiales, ordenados por vistas totales en YouTube.',topTitle:'Todos los videoclips y audios oficiales',topSub:'Un audio oficial por canción (Jimin - Topic o la subida del sello) y cada videoclip y video con letra oficial, solo de canales oficiales: HYBE LABELS, BANGTANTV, Jimin - Topic, THEBLACKLABEL, YAMYAM ENTERTAINMENT y JVKE.',
     sortBy:'Ordenar videos',sViews:'Vistas',sGain:'Aumento diario',sLikes:'Me gusta',sNew:'Más recientes',sAvg:'Media diaria',sAZ:'A–Z',filt:'Filtrar videos',fAll:'Todos',fMv:'Videoclips',fAud:'Audio',
     read:(d,t)=>`Vistas leídas en YouTube el ${d} a las ${t} PT.`,gainNote:(a,b)=>`Aumento diario = vistas actuales menos la lectura del ${a}.`,
     firstNote:(d)=>`El seguimiento empezó el ${d}. Los aumentos diarios aparecen desde la segunda lectura diaria; hasta entonces no se muestra ninguno.`,
     stale:d=>`No se pudo leer hoy; se muestra la última lectura del ${d}.`,
     wm:(d,t)=>`Vistas al ${d}, ${t} PT · Fuente: YouTube`,watch:'Ver en YouTube',on:'en',published:'Publicado',shown:n=>`${n} videos`,noViews:'No disponible',
     topGain:'Mayor aumento de hoy',nextMs:'Siguiente',toGo:n=>`faltan ${n}`,est:d=>`previsto: ${d}`,
     trendSoon:'La tendencia aparece a los 7 días',
     missing:'Angel Pt. 1 y Angel Pt. 1 - Sped Up no aparecen porque no tienen una subida oficial en los canales que esta página cuenta.',
     k:{mv:'Videoclip oficial',lyric:'Video con letra oficial',audio:'Audio oficial'}}
};
const TITLE_KO={'Promise':'Promise (약속)'};
const TITLE_ES={};
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
const topGainId=(()=>{ let best=null; for(const v of rows) if(v.gain!=null&&(best==null||v.gain>best.gain)) best=v; return (best&&best.gain>0)?best.id:null; })();
let sort=Q.get('sort')||'views', filt=Q.get('type')||'all';
const GROUP={mv:'mv',lyric:'mv',audio:'audio'}, SONG_TOTAL=(typeof SONGS!=='undefined'?SONGS.length:34);
const HIST=typeof YT_HISTORY==='undefined'?{}:YT_HISTORY;
const histOf=v=>(HIST[v.id]||[]).filter(p=>p&&p[1]!=null);

// Milestone steps: 10K, 50K, 100K, 250K, 500K, 1M, 2M, 5M, then every 10M up to 100M, then every 50M.
function nextMs(views){
  if(views==null) return null;
  const steps=[1e4,5e4,1e5,2.5e5,5e5,1e6,2e6,5e6];
  for(const s of steps) if(views<s) return s;
  if(views<1e8) return (Math.floor(views/1e7)+1)*1e7;
  return (Math.floor(views/5e7)+1)*5e7;
}
function avgGain(v){
  const h=histOf(v); if(h.length<4) return null;
  const last=h.slice(-4);
  const days=(Date.parse(last[3][0]+'T12:00:00Z')-Date.parse(last[0][0]+'T12:00:00Z'))/86400000;
  if(!(days>=3)) return null;
  return (last[3][1]-last[0][1])/days;
}
function avgPerDay(v){
  if(v.views==null||!v.published) return null;
  const days=Math.max(1, Math.round((Date.parse(YT_UPDATED+'T12:00:00Z')-Date.parse(v.published+'T12:00:00Z'))/86400000));
  return v.views/days;
}

function chip(v,t,short){
  const c=mk('span','yt-chip');
  if(v.gain!=null){ c.classList.add(v.gain>0?'up':'flat'); c.append(mk('b',null,(v.gain>=0?'+':'−')+n(Math.abs(v.gain))), mk('span',null,' '+t.gainSince(fd(v.gain_from,false)))); }
  else { c.classList.add('pending'); c.textContent=v.read_date&&v.read_date!==YT_UPDATED?t.stale(fd(v.read_date,false)):(short?t.noGainShort:t.noGain)(fdShort2(nextDay(YT_FIRST),short)); }
  return c;
}
function milestone(v,t){
  const m=nextMs(v.views); if(m==null) return null;
  const line=mk('p','yt-ms');
  const gap=m-v.views;
  line.append(mk('span',null,`${t.nextMs}: ${compact(m)}`));
  line.append(mk('span',null,' · '+t.toGo(compact(gap))));
  const r=avgGain(v);
  if(r!=null&&r>0){
    const days=Math.ceil(gap/r);
    const d=new Date(YT_UPDATED+'T12:00:00Z'); d.setUTCDate(d.getUTCDate()+days);
    line.append(mk('span',null,' · '+t.est(fd(d.toISOString().slice(0,10),false))));
  }
  return line;
}
function spark(v,t){
  const h=histOf(v).slice(-7);
  const wrap=mk('div','yt-spark');
  if(h.length<2){ wrap.classList.add('pending'); wrap.textContent=t.trendSoon; return wrap; }
  const w=96,ht=24,pad=2;
  const vals=h.map(p=>p[1]), lo=Math.min(...vals), hi=Math.max(...vals), span=hi-lo||1;
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
  svg.setAttribute('viewBox','0 0 '+w+' '+ht); svg.setAttribute('width',String(w)); svg.setAttribute('height',String(ht));
  svg.setAttribute('aria-hidden','true'); svg.classList.add('yt-spark-svg');
  const poly=document.createElementNS('http://www.w3.org/2000/svg','polyline');
  poly.setAttribute('class','yt-spark-line');
  poly.setAttribute('points',vals.map((val,i)=>{
    const x=pad+i*(w-2*pad)/Math.max(vals.length-1,1);
    const y=pad+(ht-2*pad)*(1-(val-lo)/span);
    return x.toFixed(1)+','+y.toFixed(1);
  }).join(' '));
  svg.appendChild(poly);
  wrap.append(svg);
  return wrap;
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
  body.append(st);
  const row=mk('div','yt-gainrow'); row.append(chip(v,t,true));
  if(v.id===topGainId) row.append(mk('span','yt-badge',t.topGain));
  body.append(row);
  const ms=milestone(v,t); if(ms) body.append(ms);
  body.append(spark(v,t));
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
  const nm=ok.filter(v=>v.kind==='mv').length, nl=ok.filter(v=>v.kind==='lyric').length, na=ok.filter(v=>v.kind==='audio').length, ns=new Set(ok.map(v=>v.song)).size;
  side.append(stat(t.videos,String(ok.length),t.split(nm,nl,na)), stat(t.songsL,t.songs(ns,SONG_TOTAL)), stat(t.totalLikes,n(likes)));
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
    newest:(a,b)=>String(b.published).localeCompare(String(a.published)),avg:(a,b)=>(avgPerDay(b)??-1)-(avgPerDay(a)??-1),az:(a,b)=>title(a).localeCompare(title(b))};
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
  p.append(mk('span',null,t.read(fd(YT_UPDATED),ft(YT_TAKEN))+' '), mk('span',null,(hasGain?t.gainNote(fd(gainFrom)):t.firstNote(fd(YT_FIRST)))+' '), mk('span',null,t.missing));
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

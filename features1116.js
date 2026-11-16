"use strict";
// Features added Nov 16, 2026 (see FANSITE.md "Nov 16, 2026 features"; each can be removed on its own):
//  1. Share as image  - small "Save image" button above each major Overview section and on song pages. Renders the section to a
//     branded light-theme PNG entirely in the browser (DOM -> SVG foreignObject -> canvas; no library, no third-party service).
//     Buttons live OUTSIDE the section elements, so the daily screenshot crops (#top-daily, #milestones, #leaderboard ...) never contain them;
//     they are also hidden when the URL has ?shot=1 or <html class="shot">.
//  2. Count-up on headline numbers (IntersectionObserver, ends on the exact value; off for reduced motion / automation) + gold sparkle on the
//     Next milestone card and milestone rows of a song that crossed a round-number milestone on the latest data day (crossedMilestones() in extra.js).
//  3. Album colour themes on song.html (accent colours taken from each cover; contrast-checked for light and dark).
//  4. Fan goal card on the Overview (#fan-goal) for the soonest milestone (msRows() in extra.js).
// Remove: delete this file, its <script> line in index.html and song.html, the "feature:1116" blocks in style.css and the "Nov 16, 2026" strings at the end of i18n.js.
(function(){
const Q=new URLSearchParams(location.search), doc=document.documentElement;
if(Q.get('shot')==='1') doc.classList.add('shot');
const RM=!!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
const AUTO=!!navigator.webdriver&&!Q.get('anim'); // automated browsers (the daily screenshot routines) always see final numbers, no animation
const lang=()=>{const l=doc.lang;return l==='ko'||l==='es'?l:'en';};
const tx=s=>{try{return lang()==='ko'&&typeof translateStr==='function'?translateStr(s):lang()==='es'&&typeof translateEs==='function'?translateEs(s):s;}catch{return s;}};
const mk=(tag,cls,text)=>{const e=document.createElement(tag);if(cls)e.className=cls;if(text!=null)e.textContent=text;return e;};
const $1=id=>document.getElementById(id);
const ready=fn=>document.readyState==='complete'?setTimeout(fn,0):window.addEventListener('load',()=>setTimeout(fn,0));

/* ---------- 4. Fan goal card ---------- */
function fanGoal(){
  const anchor=$1('glance-wrap'); if(!anchor||$1('fan-goal')||typeof msRows!=='function') return;
  const r=msRows()[0]; if(!r) return;
  const [s,m,d,a]=r, cur=s[1], togo=m-cur, step=m<=1e8?1e7:m<=1e9?5e7:1e8, pct=Math.max(0,Math.min(100,(cur-(m-step))/step*100));
  const needed=Math.ceil(togo/d), when=longDate(addDays(UPDATED,d));
  const sec=mk('section'); sec.id='fan-goal'; sec.className='fan-goal';
  sec.append(mk('h2',null,'Fan goal'));
  const card=mk('div','fg-card'), head=mk('div','fg-head');
  const im=typeof coverImg==='function'?coverImg(s[0],'cover-sm fg-cover',48):null; if(im){im.loading='eager';head.append(im);}
  head.append(mk('p','fg-title',`Help ${s[0]} reach ${short(m)} by ${when} (estimate)`));
  card.append(head);
  const stats=mk('div','fg-stats');
  [[format(cur),'Current streams'],[format(togo),'Streams to go'],[format(needed),'Needed per day'],[format(a.rate),'7-day average']].forEach(([v,l],i)=>{const x=mk('div','fg-stat');x.append(mk('strong',null,v),mk('span',null,l));if(i===1)x.querySelector('strong').className='gold';stats.append(x);});
  card.append(stats);
  const bar=mk('div','g-bar'); bar.setAttribute('role','progressbar'); bar.setAttribute('aria-valuemin','0'); bar.setAttribute('aria-valuemax','100'); bar.setAttribute('aria-valuenow',String(Math.round(pct)));
  const fill=mk('span','g-bar-fill'); fill.style.width=pct.toFixed(1)+'%'; bar.append(fill); card.append(bar);
  card.append(mk('p','g-sub g-bar-cap',`${pct.toFixed(1)}% of the way from ${short(m-step)} to ${short(m)}`));
  const faster=Math.ceil(togo/(a.rate*1.1));
  if(faster<d) card.append(mk('p','fg-boost',`If daily streams rise 10% (about +${format(Math.round(a.rate*.1))} per day), it could land around ${longDate(addDays(UPDATED,faster))} (estimate)`));
  card.append(mk('p','caption fg-note',`Estimates use the average of the last ${a.n} day${a.n===1?'':'s'} of streams (up to 7), assuming that pace continues. Not a prediction or an official figure.`));
  sec.append(card); anchor.after(sec);
}

/* ---------- 3. Album colour themes (song.html) ---------- */
// Accent colours come from each cover (dominant colour, then lightness adjusted so graphics have >= 3.2:1 contrast and accent text >= 4.5:1 on light and dark panels).
// l/lt = light mode graphic/text, d/dt = dark mode graphic/text. Keyed by the Spotify image id used in DISC (pages2.js).
const T={muse:{l:'#488f89',lt:'#3a736d',d:'#4f9d96',dt:'#73b9b2'},face:{l:'#7c848f',lt:'#646b74',d:'#8a919a',dt:'#a8aeb4'},wander:{l:'#aa7c10',lt:'#89640d',d:'#d49b14',dt:'#e4a716'},wonder:{l:'#dc5938',lt:'#b93f20',d:'#e16f52',dt:'#e99782'},whoremix:{l:'#8d816d',lt:'#726858',d:'#9a8f7c',dt:'#b5ad9f'},closer:{l:'#9a73c0',lt:'#8354b2',d:'#a583c7',dt:'#bca3d6'},vibe:{l:'#608992',lt:'#4e6f76',d:'#6e97a0',dt:'#95b3b9'},angel:{l:'#7a7f8a',lt:'#656a73',d:'#8d919b',dt:'#a9adb4'},withyou:{l:'#5f8f4e',lt:'#4c733f',d:'#699e56',dt:'#8db97e'}};
const ALBUM_KEY={'f02c451189a709b9a952aaec':'muse','b46078245d0120690eb560d':'face','82601539d4a27061ad90eacb':'wander','f150d9f2e5e8148e5032fd7d':'wonder','19655636129722b4bd720dbc':'muse','7f35adfbec3bb2bc8256802b':'whoremix','38881a83135ef5b4ace418ba':'muse','e3dbc03f538633dbb40adf37':'closer','1aa0427818a335a27fba086e':'angel','46313223adf2b6d726388328':'vibe','dcf2ea6a2e3a7aaf53041534':'withyou'};
function albumTheme(){
  const h=$1('song-hero'), t=$1('song-title'); if(!h||!t||typeof songCover!=='function') return;
  const c=songCover(t.textContent.trim()); if(!c) return;
  const id=c.src.split('/').pop(), key=Object.keys(ALBUM_KEY).find(k=>id.endsWith(k)), th=key&&T[ALBUM_KEY[key]]; if(!th) return;
  const st=doc.style; st.setProperty('--album-l',th.l); st.setProperty('--album-lt',th.lt); st.setProperty('--album-d',th.d); st.setProperty('--album-dt',th.dt);
  doc.setAttribute('data-album',ALBUM_KEY[key]);
  const sub=$1('song-sub'); if(sub&&!h.querySelector('.album-chip')){const chip=mk('span','album-chip no-tr',c.album.split(' — ')[0]);chip.title=c.album;sub.before(chip);}
}

/* ---------- 2. Count-up + sparkle ---------- */
function countUp(){
  if(RM||AUTO||doc.classList.contains('shot')||!('IntersectionObserver' in window)) return;
  const els=[...document.querySelectorAll('#glance .g-item>strong,#milestone>strong,#totals-metrics .metric>strong,#who-metrics .metric>strong,#song-metrics .metric>strong,#fan-goal .fg-stat>strong')];
  const io=new IntersectionObserver(es=>es.forEach(en=>{
    if(!en.isIntersecting) return; const e=en.target; io.unobserve(e); run(e);
  }),{threshold:.4});
  function run(e){
    const final=e.textContent, mm=final.match(/^([^\d]*)(\d[\d,]*)(\.\d+)?([ A-Za-z%]{0,9})$/); if(!mm||/#/.test(mm[1])) return;
    const dec=mm[3]?mm[3].length-1:0, target=parseFloat(mm[2].replace(/,/g,'')+(mm[3]||'')); if(!(target>0)||e.dataset.cu) return;
    e.dataset.cu=final; const node=e.firstChild, t0=performance.now(), DUR=900;
    const fmt=v=>mm[1]+v.toLocaleString('en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec})+mm[4];
    (function frame(now){
      const p=Math.min(1,(now-t0)/DUR), v=target*(1-Math.pow(1-p,3));
      if(p<1&&node){node.nodeValue=fmt(v);requestAnimationFrame(frame);} else if(node) node.nodeValue=final;
    })(t0);
  }
  els.forEach(e=>io.observe(e));
}
function sparkle(){
  if(AUTO||doc.classList.contains('shot')||typeof crossedMilestones!=='function') return;
  let crossed=[]; try{crossed=crossedMilestones();}catch{}
  if(!crossed.length) return;
  const by=new Map(crossed.map(c=>[c.song,c]));
  const decorate=(host,c,withStar)=>{
    host.classList.add('sparkle'); host.title=`Passed ${short(c.mark)} on ${longDate(UPDATED)}`;
    if(withStar) for(let i=0;i<3;i++) host.append(mk('span','sp-star sp-'+i,'✦'));
  };
  const g=document.querySelectorAll('#glance .g-item')[1], r=typeof msRows==='function'&&msRows()[0];
  if(g&&r&&by.has(r[0][0])) decorate(g,by.get(r[0][0]),true);
  document.querySelectorAll('#ms-rows tr').forEach(tr=>{const n=tr.cells[0]&&tr.cells[0].textContent.trim();if(by.has(n)) decorate(tr,by.get(n),false);});
  window.__sparkled=true;
}
window.JIM1116={sparkle:el=>{el.classList.add('sparkle');for(let i=0;i<3;i++)el.append(mk('span','sp-star sp-'+i,'✦'));}}; // preview helper only

/* ---------- 1. Share as image ---------- */
const BG='#f7f5ef', GOLD='#8a5f00', MUTED='#555a65', TEXT='#1f2024', LINE='#d6d1c2';
const SKIPP=/^(animation|transition|cursor|pointer-events|user-select|touch-action|will-change|scroll|overscroll|caret|view-|anchor|position-anchor|offset|interactivity|container|content-visibility|contain|inline-size|block-size|min-inline-size|min-block-size|max-inline-size|max-block-size|perspective-origin|-webkit-(?!text-fill|text-stroke|background-clip|line-clamp|box-orient|mask)|-moz-)/;
let frameP=null, baseCache=new Map(), fontP=null;
function sandbox(){
  if(frameP) return frameP;
  frameP=new Promise(res=>{const f=document.createElement('iframe');f.setAttribute('aria-hidden','true');f.tabIndex=-1;f.title='';f.style.cssText='position:fixed;left:-9999px;top:0;width:900px;height:600px;border:0;visibility:hidden;pointer-events:none';f.onload=()=>res(f);f.srcdoc='<!doctype html><html><body></body></html>';document.body.append(f);});
  return frameP;
}
function baseOf(el,f){
  const key=el.namespaceURI+'|'+el.localName; if(baseCache.has(key)) return baseCache.get(key);
  const d=f.contentDocument, SV='http://www.w3.org/2000/svg'; let n;
  if(el.namespaceURI===SV){n=d.createElementNS(SV,el.localName);if(el.localName==='svg')d.body.append(n);else{const s=d.createElementNS(SV,'svg');d.body.append(s);s.append(n);}}
  else{n=d.createElement(el.localName);d.body.append(n);}
  const cs=f.contentWindow.getComputedStyle(n), m=new Map(); for(let i=0;i<cs.length;i++) m.set(cs[i],cs.getPropertyValue(cs[i]));
  baseCache.set(key,m); return m;
}
function emit(cs,base){let s='';for(let i=0;i<cs.length;i++){const p=cs[i];if(SKIPP.test(p))continue;if(p==='transform-origin'&&cs.getPropertyValue('transform')==='none')continue;const v=cs.getPropertyValue(p);if(v!==base.get(p))s+=p+':'+v+';';}return s;}
async function toDataURL(url){try{const r=await fetch(url,{mode:'cors',credentials:'omit'});if(!r.ok)return null;const b=await r.blob();return await new Promise(res=>{const fr=new FileReader();fr.onload=()=>res(fr.result);fr.onerror=()=>res(null);fr.readAsDataURL(b);});}catch{return null;}}
function fontCss(){
  if(fontP) return fontP;
  fontP=(async()=>{
    try{
      const link=document.querySelector('link[href^="https://fonts.googleapis.com/css2"]'); if(!link) return '';
      const css=await (await fetch(link.href,{credentials:'omit'})).text(); let out='';
      for(const blk of css.split('@font-face').slice(1)){
        if(!/font-family:\s*'?Inter/.test(blk)) continue;
        const prev=css.slice(0,css.indexOf(blk)); const tag=(prev.match(/\/\*\s*([\w-]+)\s*\*\/\s*$/)||[])[1];
        if(tag&&!/^(latin|latin-ext)$/.test(tag)) continue;
        const u=(blk.match(/url\(([^)]+)\)/)||[])[1]; if(!u) continue;
        const data=await toDataURL(u.replace(/['"]/g,'')); if(!data) continue;
        out+='@font-face'+blk.replace(/url\([^)]+\)/,`url(${data})`).replace(/\}[\s\S]*$/,'}');
      }
      return out;
    }catch{return '';}
  })();
  return fontP;
}
async function renderPNG(els,dateIso){
  const f=await sandbox(), fonts=await fontCss(); baseCache=new Map();
  const first=els[0].getBoundingClientRect(), W=Math.round(Math.max(340,Math.min(1400,first.width))), PAD=22;
  const root=mk('div'), stash=[];
  // Freeze every computed style (light theme, no transitions) into inline styles on a detached clone.
  const lock=document.createElement('style'); lock.textContent='*,*::before,*::after{transition:none!important;animation:none!important}'; document.head.append(lock);
  const prevTheme=doc.getAttribute('data-theme'); doc.setAttribute('data-theme','light');
  try{
    for(const el of els){
      const clone=el.cloneNode(true), o=[el,...el.querySelectorAll('*')], c=[clone,...clone.querySelectorAll('*')];
      o.forEach((x,i)=>{
        const y=c[i]; if(!y||!y.style) return;
        const cs=getComputedStyle(x), b=baseOf(x,f); const keep=x.getAttribute('style')||'';
        y.setAttribute('style',emit(cs,b)+keep);
        for(const ps of ['::before','::after']){
          const pc=getComputedStyle(x,ps), ct=pc.content; if(!ct||ct==='none'||ct==='normal') continue;
          const sp=document.createElementNS('http://www.w3.org/1999/xhtml','span'); sp.setAttribute('style',emit(pc,baseOf({namespaceURI:'http://www.w3.org/1999/xhtml',localName:'span'},f)));
          const mt=ct.match(/^"([\s\S]*)"$/); if(mt) sp.textContent=mt[1].replace(/\\([0-9a-f]{1,6})\s?/gi,(_,h)=>String.fromCodePoint(parseInt(h,16)));
          ps==='::before'?y.insertBefore(sp,y.firstChild):y.append(sp);
        }
        if(x.tagName==='IMG') stash.push([x,y]);
        if(x.dataset&&x.dataset.cu) y.textContent=x.dataset.cu; // count-up elements: always export the exact final value
      });
      clone.querySelectorAll('.share-bar,.share-row,[data-noshot],script,style,.chart-tip,.sp-star,title,.to-top,a.cta').forEach(n=>n.remove());
      clone.querySelectorAll('[hidden]').forEach(n=>n.remove());
      clone.querySelectorAll('.wm-panel').forEach(n=>n.remove());
      clone.querySelectorAll('.who-map').forEach(n=>{if(!n.querySelector('svg'))n.remove();}); // map not loaded yet: leave it out rather than export an empty box
      clone.querySelectorAll('tbody').forEach(tb=>[...tb.children].slice(10).forEach(r=>r.remove())); // long tables: the first 10 rows (already sorted soonest / best first) keep the image a sensible size
      clone.querySelectorAll('.table-wrap').forEach(n=>{n.style.overflow='visible';n.style.height='auto';n.style.maxHeight='none';});
      clone.querySelectorAll('thead th').forEach(n=>{n.style.position='static';});
      [clone,...clone.querySelectorAll('.table-wrap,table,tbody')].forEach(n=>{n.style.height='auto';n.style.maxHeight='none';n.style.minHeight='0';}); // trimmed rows / removed controls: let these containers size to their content
      clone.removeAttribute('id'); clone.style.margin='0 0 6px'; clone.style.borderBottomWidth='0'; clone.style.borderTopWidth='0'; root.append(clone);
    }
  } finally { if(prevTheme==null) doc.removeAttribute('data-theme'); else doc.setAttribute('data-theme',prevTheme); lock.remove(); }
  await Promise.all(stash.map(async([x,y])=>{
    const u=await toDataURL(x.currentSrc||x.src);
    y.removeAttribute('srcset');y.removeAttribute('sizes');y.removeAttribute('loading');
    if(u) y.setAttribute('src',u); else y.setAttribute('src','data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
    y.setAttribute('width',x.width||x.naturalWidth);y.setAttribute('height',x.height||x.naturalHeight);
  }));
  // Branded footer: @JIMERICA + data date + source (language of the page).
  const foot=mk('div'); foot.setAttribute('style',`margin-top:14px;padding-top:14px;border-top:1px solid ${LINE};text-align:center;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;`);
  const b1=mk('div',null,'@JIMERICA'); b1.setAttribute('style',`color:${GOLD};font-weight:800;font-size:18px;letter-spacing:.04em;line-height:1.3`);
  const b2=mk('div',null,tx(`Data as of ${longDate(dateIso)} · Source: Spotify`)); b2.setAttribute('style',`color:${MUTED};font-size:13px;margin-top:4px;line-height:1.4`);
  foot.append(b1,b2); root.append(foot);
  root.setAttribute('style',`box-sizing:border-box;width:${W+PAD*2}px;padding:${PAD}px;background:${BG};color:${TEXT};font-family:Inter,"Noto Sans KR",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;line-height:1.6;`);
  // Measure with the same fonts/styles, off screen.
  const probe=root.cloneNode(true); probe.style.cssText+='position:fixed;left:-99999px;top:0;visibility:hidden;'; document.body.append(probe);
  try{ await document.fonts.ready; }catch{}
  const H=Math.ceil(probe.getBoundingClientRect().height); probe.remove();
  const TW=W+PAD*2;
  root.setAttribute('xmlns','http://www.w3.org/1999/xhtml');
  const xml=new XMLSerializer().serializeToString(root);
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${TW}" height="${H}" viewBox="0 0 ${TW} ${H}"><foreignObject x="0" y="0" width="100%" height="100%">${fonts?`<style xmlns="http://www.w3.org/1999/xhtml">${fonts}</style>`:''}${xml}</foreignObject></svg>`;
  const img=new Image(); img.decoding='async';
  await new Promise((res,rej)=>{img.onload=res;img.onerror=()=>rej(new Error('image render failed'));img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);});
  const scale=Math.max(2,Math.min(3.2,1300/TW)), cv=document.createElement('canvas'); cv.width=Math.round(TW*scale); cv.height=Math.round(H*scale);
  const g=cv.getContext('2d'); g.fillStyle=BG; g.fillRect(0,0,cv.width,cv.height); g.drawImage(img,0,0,cv.width,cv.height);
  const blob=await new Promise((res,rej)=>cv.toBlob(b=>b?res(b):rej(new Error('toBlob failed')),'image/png'));
  return {blob,width:cv.width,height:cv.height};
}
const canShareFiles=()=>{try{return !!(navigator.canShare&&navigator.canShare({files:[new File([new Blob(['x'])],'a.png',{type:'image/png'})]}));}catch{return false;}};
async function deliver(blob,name,title){
  const file=new File([blob],name,{type:'image/png'});
  if(canShareFiles()){
    try{await navigator.share({files:[file],title,text:'via @JIMERICA'});return 'shared';}catch(e){if(e&&e.name==='AbortError')return 'cancelled';}
  }
  const url=URL.createObjectURL(blob), a=document.createElement('a'); a.href=url; a.download=name; a.rel='noopener'; document.body.append(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),30000);
  return 'saved';
}
window.JIM1116.renderPNG=renderPNG;
function wire(btn,getEls,key,dateIso,titleFn){
  const label=btn.querySelector('.share-label'); const idle=canShareFiles()?'Share image':'Save image';
  label.textContent=idle;
  btn.addEventListener('click',async()=>{
    if(btn.dataset.busy) return; btn.dataset.busy='1'; btn.setAttribute('aria-busy','true'); label.textContent='Preparing…';
    try{
      const {blob}=await renderPNG(getEls(),typeof dateIso==='function'?dateIso():dateIso);
      const r=await deliver(blob,`jimerica-${key}-${UPDATED}.png`,titleFn?titleFn():document.title);
      label.textContent=r==='cancelled'?idle:'Image ready ✓';
    }catch(e){ console.warn('share image failed',e); label.textContent='Could not create the image'; }
    btn.removeAttribute('aria-busy'); delete btn.dataset.busy; setTimeout(()=>{label.textContent=idle;},2200);
  });
}
const ICON='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path d="M8 2v7.2M4.8 6.4 8 9.6l3.2-3.2M3 12.5h10" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
function btn(extraCls){const b=mk('button','share-btn'+(extraCls?' '+extraCls:'')); b.type='button'; b.innerHTML=ICON; b.append(mk('span','share-label','Save image')); b.setAttribute('aria-label','Save an image of this section'); b.title='Save a branded image of this section'; return b;}
function shareBars(){
  const defs=[['glance-wrap','glance',()=>UPDATED],['top-daily','top10-daily-gains',()=>UPDATED],['milestones','next-milestones',()=>UPDATED],['leaderboard','weekly-leaderboard',()=>UPDATED],['world','who-charts',()=>WHO_DATE],['fan-goal','fan-goal',()=>UPDATED]];
  for(const [id,key,date] of defs){
    const sec=$1(id); if(!sec||sec.previousElementSibling&&sec.previousElementSibling.classList.contains('share-bar')) continue;
    const bar=mk('div','share-bar'); bar.setAttribute('data-noshot',''); bar.dataset.for=id; const b=btn(); bar.append(b);
    sec.before(bar); bar.hidden=sec.hidden;
    new MutationObserver(()=>{bar.hidden=sec.hidden;}).observe(sec,{attributes:true,attributeFilter:['hidden']});
    wire(b,()=>[sec],key,date);
  }
  // song pages: button sits in the existing share row; the image holds the hero (cover, title) and the metrics + chart.
  const row=document.querySelector('#song-detail .share-row'), hero=$1('song-hero');
  if(row&&hero){const b=btn('cta'); b.setAttribute('data-noshot',''); (row.querySelector('#share-x')||row.firstChild).after(b); wire(b,()=>[hero,$1('song-detail')],'song-'+(new URLSearchParams(location.search).get('id')||'song'),()=>UPDATED,()=>$1('song-title').textContent);}
}

try{fanGoal();}catch(e){console.warn('fan goal',e);}
try{albumTheme();}catch(e){console.warn('album theme',e);}
try{shareBars();}catch(e){console.warn('share bars',e);}
ready(()=>{try{countUp();sparkle();}catch(e){console.warn('count-up',e);}});
})();

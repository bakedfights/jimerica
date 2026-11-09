"use strict";
// Extra features: search, song detail, trends charts, milestones, share. Reads data.js (+ history.js where present).
const slug = t => t.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const addDays = (iso, n) => { const d = new Date(iso+'T12:00:00'); d.setDate(d.getDate()+n); return d.toISOString().slice(0,10); };
const short = n => n>=1e9 ? (n/1e9).toFixed(2)+'B' : n>=1e6 ? (n/1e6).toFixed(n>=1e8?0:1)+'M' : n>=1e3 ? Math.round(n/1e3)+'K' : String(n);
const el = id => document.getElementById(id);
// Average daily streams over the last up-to-7 snapshot days (history.js); falls back to the latest daily gain.
function avg7(s){ const v=(typeof HIST_SONGS!=='undefined'&&HIST_SONGS[s[0]])||[]; const d=histDaily(v).filter(x=>x!=null&&x>=0).slice(-7); return d.length?{rate:Math.round(d.reduce((a,b)=>a+b,0)/d.length),n:d.length}:{rate:s[2],n:s[2]>0?1:0}; }
function interactive(svg,wrap,labels,values){ // hover/tap tooltip on line points
  const tip=document.createElement('div');tip.className='chart-tip';tip.hidden=true;wrap.append(tip);
  svg.querySelectorAll('circle.dotc').forEach((c,i)=>{const idx=values.map((v,j)=>v==null?null:j).filter(j=>j!=null)[i];
    const show=()=>{svg.querySelectorAll('.hov').forEach(x=>x.classList.remove('hov'));c.classList.add('hov');const r=svg.getBoundingClientRect(),w=wrap.getBoundingClientRect(),k=r.width/640;
      tip.textContent=labels[idx]+': '+format(values[idx]);tip.style.left=(r.left-w.left+(+c.getAttribute('cx'))*k)+'px';tip.style.top=(r.top-w.top+(+c.getAttribute('cy'))*k)+'px';tip.hidden=false;};
    c.setAttribute('r',6);c.setAttribute('tabindex','0');c.addEventListener('mouseenter',show);c.addEventListener('focus',show);c.addEventListener('click',show);});
  svg.addEventListener('mouseleave',()=>tip.hidden=true);
}
function nextMilestone(n){ const step = n<1e8?1e7 : n<1e9?5e7 : 1e8; return Math.floor(n/step)*step+step; }
// Simple accessible SVG chart. series: [{label, values}] ; kind 'line' or 'bar'
function svgChart(labels, values, {kind='bar', title='', fmt=format}={}) {
  const W=640,H=220,P={l:56,r:12,t:12,b:28}; const vs=values.filter(v=>v!=null);
  const ns='http://www.w3.org/2000/svg'; const svg=document.createElementNS(ns,'svg');
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`); svg.setAttribute('role','img'); svg.setAttribute('class','chart');
  const t=document.createElementNS(ns,'title'); t.textContent=title+': '+labels.map((l,i)=>`${l} ${values[i]==null?'n/a':fmt(values[i])}`).join(', '); svg.append(t);
  if(!vs.length) return svg;
  let lo=kind==='bar'?0:Math.min(...vs), hi=Math.max(...vs); if(hi===lo){hi+=1;lo=Math.max(0,lo-1);} if(kind!=='bar'){const pad=(hi-lo)*.15;lo-=pad;hi+=pad;}
  const x=i=>kind==='bar'||labels.length===1?P.l+(i+.5)*(W-P.l-P.r)/labels.length:P.l+16+i*(W-P.l-P.r-32)/(labels.length-1), y=v=>P.t+(H-P.t-P.b)*(1-(v-lo)/(hi-lo));
  const add=(tag,attrs,text)=>{const e=document.createElementNS(ns,tag);for(const k in attrs)e.setAttribute(k,attrs[k]);if(text!=null)e.textContent=text;svg.append(e);return e;};
  for(let g=0;g<=3;g++){const v=lo+(hi-lo)*g/3;add('line',{x1:P.l,x2:W-P.r,y1:y(v),y2:y(v),class:'grid'});add('text',{x:P.l-8,y:y(v)+4,'text-anchor':'end',class:'axis'},v>=1e9&&hi-lo<1e8?(v/1e9).toFixed(3)+'B':short(Math.round(v)));}
  labels.forEach((l,i)=>add('text',{x:x(i),y:H-8,'text-anchor':'middle',class:'axis'},l.slice(5).replace('-','/')));
  if(kind==='bar'){const bw=Math.min(48,(W-P.l-P.r)/labels.length*.6);values.forEach((v,i)=>{if(v==null)return;const r=add('rect',{x:x(i)-bw/2,y:y(v),width:bw,height:y(0)-y(v),rx:4,class:'barc'});const tt=document.createElementNS(ns,'title');tt.textContent=`${labels[i]}: ${fmt(v)}`;r.append(tt);});}
  else{const pts=values.map((v,i)=>v==null?null:[x(i),y(v)]).filter(Boolean);add('polyline',{points:pts.map(p=>p.join(',')).join(' '),class:'linec'});pts.forEach(p=>add('circle',{cx:p[0],cy:p[1],r:4,class:'dotc'}));}
  return svg;
}
// daily gains derived from consecutive snapshot totals
function histDaily(vals){ return vals.slice(1).map((v,i)=>v!=null&&vals[i]!=null?v-vals[i]:null); }
function share(){
  document.querySelectorAll('[data-share]').forEach(b=>{
    b.addEventListener('click',async()=>{
      const url=location.href, text=b.dataset.share||document.title;
      if(b.dataset.kind==='x'){window.open('https://x.com/intent/post?text='+encodeURIComponent(text)+'&url='+encodeURIComponent(url),'_blank','noopener');return;}
      try{await navigator.clipboard.writeText(url);b.textContent='Link copied ✓';}catch{b.textContent='Copy failed';}
      setTimeout(()=>b.textContent='Copy link',2000);
    });
  });
}
function songsPage(){
  const q=el('song-search'); if(!q) return;
  const apply=()=>{const v=q.value.trim().toLowerCase();let n=0;document.querySelectorAll('#song-rows tr').forEach(tr=>{const show=!v||tr.cells[0].textContent.toLowerCase().includes(v);tr.hidden=!show;if(show)n++;});el('search-count').textContent=v?`${n} match${n===1?'':'es'}`:'';};
  q.addEventListener('input',apply);
  const link=()=>{document.querySelectorAll('#song-rows tr').forEach(tr=>{const td=tr.cells[0];if(td.querySelector('a'))return;const t=td.firstChild.textContent;const a=node('a',t);a.href='./song.html?id='+slug(t);td.firstChild.replaceWith(a);});document.querySelectorAll('#song-rows tr').forEach(tr=>['Song','Streams','Daily','Change'].forEach((l,i)=>tr.cells[i]&&(tr.cells[i].dataset.label=l)));apply();};
  new MutationObserver(link).observe(el('song-rows'),{childList:true}); link();
}
function songPage(){
  if(!el('song-detail')) return;
  const id=new URLSearchParams(location.search).get('id'); const s=SONGS.find(r=>slug(r[0])===id);
  if(!s){el('song-detail').replaceChildren(node('p','Song not found. ','caption'));const a=node('a','Browse all songs →');a.href='./songs.html';el('song-detail').append(a);return;}
  document.title=s[0]+' · JIMERICA'; el('song-title').textContent=s[0];
  const rank=SONGS.slice().sort((a,b)=>b[1]-a[1]).indexOf(s)+1, share=s[1]/TOTALS.streams*100;
  el('song-sub').textContent=`${s[3]?'Featured':'Solo'} song · #${rank} of ${SONGS.length} by total streams · data as of ${longDate(UPDATED)}`;
  const nm=nextMilestone(s[1]), a7=avg7(s), days=a7.rate>0?Math.ceil((nm-s[1])/a7.rate):null;
  renderMetrics('song-metrics',[[format(s[1]),'Total streams'],[s[2]==null?'–':'+'+format(s[2]),'Daily gain',(()=>{const c=dailyChange(s[0]);return c?`${c.delta>0?'▲ +':c.delta<0?'▼ ':''}${format(c.delta)} vs day before`:'';})()],[share.toFixed(1)+'%','Share of all Jimin streams'],[short(nm),'Next milestone',days?`≈ ${longDate(addDays(UPDATED,days))} (estimate)`:'No daily data']]);
  {const c=dailyChange(s[0]);const sm=document.querySelectorAll('#song-metrics .metric')[1]?.querySelector('small');if(sm&&c)sm.className=c.delta>0?'chg-up':c.delta<0?'chg-down':'chg-zero';}
  const vals=(typeof HIST_SONGS!=='undefined'&&HIST_SONGS[s[0]])||[]; const d=histDaily(vals);
  if(d.some(v=>v!=null)){const sv=svgChart(HIST_DATES.slice(1),d,{kind:'line',title:'Daily streams'});el('song-chart').replaceChildren(sv);interactive(sv,el('song-chart'),HIST_DATES.slice(1),d);el('song-chart-cap').textContent=`Daily streams ${HIST_DATES[1]} to ${HIST_DATES.at(-1)}. Hover or tap a point for the exact figure.`;}
  else el('song-chart-cap').textContent='Not enough history yet for a chart.';
  el('share-x').dataset.share=`"${s[0]}" by Jimin has ${format(s[1])} streams on Spotify${s[2]?` (+${format(s[2])} on ${longDate(UPDATED)})`:''}. Next: ${short(nm)}${days?` in ~${format(days)} days`:''}. via @JIMERICA`;
}
function trendsPage(){
  if(!el('trend-total')) return;
  const titles=Object.keys(HIST_SONGS); const sum=HIST_DATES.map((_,i)=>titles.reduce((n,t)=>n+(HIST_SONGS[t][i]??0),0));
  const daily=histDaily(sum);
  el('trend-total').replaceChildren(svgChart(HIST_DATES.slice(1),daily,{title:'All songs daily streams'}));
  el('trend-cum').replaceChildren(svgChart(HIST_DATES,sum,{kind:'line',title:'All-time total streams',fmt:format}));
  el('trend-cap').textContent=`${HIST_DATES.length} daily snapshots, ${HIST_DATES[0]} to ${HIST_DATES.at(-1)}. Daily = change in total play counts since the previous snapshot. History grows by one point each day.`;
  const top=SONGS.slice().sort((a,b)=>b[1]-a[1]).slice(0,6);
  el('trend-songs').replaceChildren(...top.map(s=>{const c=node('div',null,'metric chart-card');const h=node('a',s[0]);h.href='./song.html?id='+slug(s[0]);c.append(h);c.append(svgChart(HIST_DATES.slice(1),histDaily(HIST_SONGS[s[0]]||[]),{title:s[0]+' daily streams'}));return c;}));
  if(typeof WHO_HIST!=='undefined'){const tot=WHO_HIST_DATES.map((_,i)=>Object.values(WHO_HIST).reduce((n,v)=>n+(v[i]??0),0));const cnt=WHO_HIST_DATES.map((_,i)=>Object.values(WHO_HIST).filter(v=>v[i]!=null).length);
    el('trend-who').replaceChildren(svgChart(WHO_HIST_DATES,tot,{title:'Who daily streams across charting countries'}));
    el('trend-who-cap').textContent=`"Who" daily streams summed over the country charts it appears on (${cnt.map((c,i)=>WHO_HIST_DATES[i].slice(5)+': '+c+' countries').join(', ')}).`;}
}
function milestonesPage(){
  if(!el('ms-rows')) return;
  const rows=SONGS.map(s=>[s,avg7(s)]).filter(([s,a])=>a.rate>0).map(([s,a])=>{const m=nextMilestone(s[1]);const d=Math.ceil((m-s[1])/a.rate);return [s,m,d,a];}).sort((a,b)=>a[2]-b[2]);
  el('ms-cap').textContent=`Projected from each song's average daily streams over the last ${Math.max(...rows.map(r=>r[3].n),1)} days (up to 7) as of ${longDate(UPDATED)}, assuming that pace continues. These are estimates, not predictions or official figures. Songs without a daily figure are left out.`;
  el('ms-rows').replaceChildren(...rows.map(([s,m,d])=>{const tr=node('tr');const a=node('a',s[0]);a.href='./song.html?id='+slug(s[0]);const td=node('td');td.append(a);
    const pct=Math.min(100,(s[1]-(m-(m<=1e8?1e7:m<=1e9?5e7:1e8)))/(m<=1e8?1e7:m<=1e9?5e7:1e8)*100);
    const prog=node('td',null,'prog');const bar=node('div',null,'pbar');const f=node('span');f.style.width=pct+'%';bar.append(f);prog.append(bar);
    tr.append(td,node('td',format(s[1]),'gold'),node('td',short(m),'gold'),node('td',format(m-s[1])),node('td',format(d)),node('td','≈ '+longDate(addDays(UPDATED,d))),prog);
    ['Song','Current streams','Milestone','Streams to go','Days','Est. date','Progress'].forEach((l,i)=>tr.cells[i].dataset.label=l);return tr;}));
  const soon=rows[0]; if(soon) renderMetrics('ms-metrics',[[short(soon[1]),'Next milestone to fall',soon[0][0]],['≈ '+longDate(addDays(UPDATED,soon[2])),'Estimated date'],[String(rows.filter(r=>r[2]<=30).length),'Estimated within 30 days']]);
}
function whoLabels(){ document.querySelectorAll('#who-rows tr').forEach(tr=>['Country','Rank','Move','Peak','Daily streams','Change'].forEach((l,i)=>tr.cells[i]&&(tr.cells[i].dataset.label=l))); }
songsPage(); songPage(); trendsPage(); milestonesPage(); whoLabels(); share();
function feedPage(){
  const g=el('feed-grid'); if(!g||typeof FEED==='undefined') return;
  const filter=new URLSearchParams(location.search).get('p');
  const items=FEED.filter(f=>!filter||f.platform===filter);
  document.querySelectorAll('[data-feed-filter]').forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.feedFilter||null)===filter)));
  el('feed-cap').textContent=`${items.length} post${items.length===1?'':'s'} · newest ${items[0]?longDate(items[0].date):'–'}. Posts load from Instagram/TikTok; if an embed is blocked, use the link.`;
  g.innerHTML='';
  const PAGE=9; let shown=0; const more=document.createElement('button'); more.type='button'; more.className='cta show-more'; more.textContent='Show more';
  const renderNext=()=>{ const batch=items.slice(shown,shown+PAGE); shown+=batch.length; renderItems(batch); more.hidden=shown>=items.length; if(window.instgrm)window.instgrm.Embeds.process(); };
  more.addEventListener('click',renderNext); g.after(more);
  function renderItems(list){
  for(const f of list){
    const card=node('div',null,'feed-card'); const meta=node('div',null,'feed-meta');
    meta.append(node('span',f.platform==='instagram'?'Instagram · @j.m':f.platform==='x'?'X · @JIMERICA':'TikTok · @jimin','feed-tag '+f.platform),node('span',longDate(f.date)));
    if(f.platform==='x'){const a=document.createElement('a');a.href=f.url;a.target='_blank';a.rel='noopener';a.className='x-post';
      if(f.text)a.append(node('p',f.text,'x-text no-tr'));if(f.image){const im=document.createElement('img');im.src=f.image;im.alt='Image from @JIMERICA post';im.loading='lazy';a.append(im);}
      a.append(node('span','View on X ↗','x-open'));card.append(meta,a);g.append(card);continue;}
    const bq=document.createElement('blockquote');
    if(f.platform==='instagram'){bq.className='instagram-media';bq.dataset.instgrmPermalink=f.url;bq.dataset.instgrmVersion='14';}
    else{bq.className='tiktok-embed';bq.setAttribute('cite',f.url);bq.dataset.videoId=f.url.split('/').pop();const s=document.createElement('section');bq.append(s);}
    const a=node('a','Open post ↗');a.href=f.url;a.target='_blank';a.rel='noopener';bq.append(a);
    card.append(meta,bq); g.append(card);
  }
  }
  renderNext();
  const load=(src)=>{const s=document.createElement('script');s.async=true;s.src=src;document.body.append(s);};
  if(items.some(f=>f.platform==='instagram')) load('https://www.instagram.com/embed.js');
  if(items.some(f=>f.platform==='tiktok')||el('tt-profile')) load('https://www.tiktok.com/embed.js');
}
feedPage();

"use strict";
// Official updates are kept separate from personal SNS.
// Depends on site helpers: el/node/longDate from app.js+extra.js, and OFFICIAL from official.js.
function officialPage(){
  const g = typeof el === "function" ? el("official-grid") : document.getElementById("official-grid");
  if (!g || typeof OFFICIAL === "undefined") return;
  const params = new URLSearchParams(location.search);
  const p = params.get("p"); // platform
  const c = params.get("c"); // category
  const items = OFFICIAL.filter(f => (!p || f.platform === p) && (!c || f.category === c))
    .slice().sort((a,b) => b.date.localeCompare(a.date) || (a.created_at_utc && b.created_at_utc ? b.created_at_utc.localeCompare(a.created_at_utc) : 0));
  document.querySelectorAll("[data-official-filter]").forEach(b => {
    const key = b.dataset.officialFilter || "";
    const on = (!key && !p && !c) || key === p || key === c;
    b.setAttribute("aria-pressed", String(on));
  });
  const cap = document.getElementById("official-cap");
  g.replaceChildren();
  if (!items.length) g.append(node("p", "No verified posts in this category yet.", "caption"));
  const CAT = {brand:"Brand partner", label:"Label", bts:"BTS official", press:"Press"};
  const PAGE = 9; let shown = 0;
  const more = document.createElement("button"); more.type="button"; more.className="cta show-more"; more.textContent="Show more";
  const pick = (f, base) => f[base] || "";
  const renderNext = () => {
    const batch = items.slice(shown, shown+PAGE); shown += batch.length;
    for (const f of batch) {
      const card = node("div", null, "feed-card");
      const meta = node("div", null, "feed-meta");
      const plat = f.platform === "instagram" ? "Instagram" : "X";
      meta.append(
        node("span", `${plat} · @${f.account}`, "feed-tag "+(f.platform==="x"?"x":f.platform)),
        node("span", longDate(f.date))
      );
      const a = document.createElement("a");
      a.href = f.url; a.target = "_blank"; a.rel = "noopener"; a.className = "x-post";
      const cat = node("span", CAT[f.category] || f.category, "feed-tag");
      cat.style.display = "inline-block"; cat.style.marginBottom = "6px";
      a.append(cat);
      const title = pick(f, "title");
      if (title) a.append(node("strong", title));
      const sum = pick(f, "summary");
      if (sum) a.append(node("p", sum, "x-text"));
      if (f.image) {
        const im = document.createElement("img");
        im.src = f.image; im.alt = title || ("Image from @"+f.account); im.loading = "lazy";
        a.append(im);
      }
      a.append(node("span", "Open source ↗", "x-open"));
      card.append(meta, a); g.append(card);
    }
    more.hidden = shown >= items.length;
  };
  more.addEventListener("click", renderNext);
  if (!g.nextElementSibling || !g.nextElementSibling.classList.contains("show-more")) g.after(more);
  renderNext();
}

officialPage();

"use strict";
// 2026 Wrapped-style recap page (wrapped.html). Nov 17, 2026 (branch features-1117); see FANSITE.md "Nov 17, 2026 (b)".
// Nov 17, 2026 (c): counts from Jan 1, 2026 via wrapped-base.js when present (see the baseline block below).
// Everything is computed in the browser from the same data as the Overview, so the page updates itself every daily refresh:
//  - data.js (UPDATED, TOTALS, SONGS), history.js (HIST_DATES/HIST_SONGS daily all-time totals; the site's snapshots start Nov 2, 2026,
//    so stream GAINS exist only from Nov 3, 2026 onward; the page says so and never claims full-year numbers),
//  - listeners.js (Jimin's monthly listeners from his Spotify profile), milestone-history.js MS_RECORDS (2026 crossings dated by reports).
// Uses node/format/longDate/songPageUrl (app.js), addDays/short/nextMilestone/dailyTotalOn/shortDate/coverImg (extra.js, pages2.js).
(function wrapped(){
  const root=document.getElementById('wrapped'); if(!root||typeof HIST_DATES==='undefined'||typeof SONGS==='undefined') return;
  const YEAR=UPDATED.slice(0,4);
  const d0=HIST_DATES.find(d=>d.startsWith(YEAR)); if(!d0) return;
  const i0=HIST_DATES.indexOf(d0), i1=HIST_DATES.indexOf(UPDATED); if(i1<=i0) return;
  // Daily all-song gains on each date with a consecutive previous snapshot (same as the Overview card).
  const days=[]; for(let i=i0+1;i<=i1;i++){ const d=HIST_DATES[i]; const v=dailyTotalOn(d); if(v!=null) days.push([d,v]); }
  if(!days.length) return;
  const first=days[0][0], last=days[days.length-1][0], dailySum=days.reduce((a,x)=>a+x[1],0);
  // 2026 baseline (Nov 17, 2026, isaac t340u): wrapped-base.js WRAPPED_BASE = each song's all-time Spotify count as of Jan 1, 2026.
  // When present, the year total, daily average, Top songs and Milestones count from Jan 1; Best day(s) still use only the daily
  // totals JIMERICA saved (from Nov 3), labelled with that real range. Without it the page falls back to the Nov 3 window.
  const B=(typeof WRAPPED_BASE!=='undefined'&&WRAPPED_BASE&&String(WRAPPED_BASE.date).startsWith(YEAR)&&WRAPPED_BASE.songs)?WRAPPED_BASE:null;
  const ia=B?-1:HIST_DATES.indexOf(addDays(first,-1)), gains=[];
  for(const s of SONGS){ const v=HIST_SONGS[s[0]]; if(!v||v[i1]==null) continue;
    const b=B?B.songs[s[0]]:v[ia]; if(b==null) continue; gains.push([s[0],v[i1]-b,v[i1],b]); }
  gains.sort((a,b)=>b[1]-a[1]);
  const start=B?B.date:first, total=B?gains.reduce((a,g)=>a+g[1],0):dailySum;
  const span=B?Math.round((new Date(UPDATED+'T12:00:00')-new Date(start+'T12:00:00'))/864e5):Math.round((new Date(last+'T12:00:00')-new Date(first+'T12:00:00'))/864e5)+1;
  // Milestones crossed in the window (same step rule as the rest of the site: 10M to 100M, 50M to 1B, then 100M).
  // Dated by the daily snapshots when the crossing falls inside them, else by a 2026 news report (MS_RECORDS), else shown as a range.
  const crossed=[];
  for(const g of gains){ const v=HIST_SONGS[g[0]]; let n=g[3];
    while(true){ const m=nextMilestone(n); if(m>g[2]) break; n=m;
      let date=null,asOf=false,between=null;
      for(let i=Math.max(ia+1,1);i<=i1;i++){ if(v[i]!=null&&v[i-1]!=null&&v[i-1]<m&&v[i]>=m){date=HIST_DATES[i];break;} }
      if(!date&&B){ const r=typeof MS_RECORDS!=='undefined'&&MS_RECORDS.find(r=>r.song===g[0]&&r.mark===m&&r.date.startsWith(YEAR));
        if(r){date=r.date;asOf=!!r.asOf;} else between=[B.date,HIST_DATES[0]]; }
      crossed.push({song:g[0],mark:m,date,asOf,between}); } }
  crossed.sort((a,b)=>(b.date||b.between[1]).localeCompare(a.date||a.between[1])||b.mark-a.mark);
  const best=[...days].sort((a,b)=>b[1]-a[1]).slice(0,3);
  const dayRange=`${shortDate(first)} – ${shortDate(last)}, ${last.slice(0,4)}`;
  const range=`${shortDate(start)} – ${shortDate(UPDATED)}, ${UPDATED.slice(0,4)}`;
  const mk=(t,c,x)=>node(t,x,c);
  const card=(label,value,sub,cls)=>{const c=mk('div','wr-card'+(cls?' '+cls:''));c.append(mk('span','wr-label',label),mk('strong','wr-big',value));if(sub)c.append(mk('span','wr-sub',sub));return c;};
  const songLink=t=>{const a=mk('a','no-tr',t);a.href=songPageUrl(t)||('./song.html?id='+slug(t));return a;};
  const out=[];
  // Hero
  const hero=mk('section','wr-hero'); hero.id='wr-hero';
  hero.append(mk('p','wr-kicker',`${YEAR} Wrapped`),mk('h2','wr-title',`Jimin's ${YEAR} on Spotify`),
    mk('p','wr-range',`Streams gained ${range}`),mk('p','wr-hero-num',format(total)),
    mk('p','wr-hero-cap',`streams across his songs on Spotify in ${span} days`));
  out.push(hero);
  // Honest range note
  out.push(mk('p','caption wr-note',B?`Counts start from each song's Spotify stream count on ${longDate(B.date)}, from an archived snapshot. JIMERICA's own daily totals begin ${longDate(first)}, so Best day and Best days cover ${dayRange}. The page updates every morning.`
    :`JIMERICA started saving daily Spotify totals on ${longDate(d0)}, so stream gains on this page start ${longDate(first)}. Earlier ${YEAR} days are not counted here. The page updates every morning.`));
  // Cards
  const grid=mk('section','wr-grid'); grid.id='wr-cards';
  grid.append(card('All-time streams',format(TOTALS.streams),`As of ${longDate(UPDATED)}`,'gold'));
  grid.append(card('Daily average',format(Math.round(total/(B?span:days.length))),B?`${shortDate(start)} – ${shortDate(UPDATED)}`:`${shortDate(first)} – ${shortDate(last)}`));
  if(best[0]) grid.append(card('Best day',format(best[0][1]),longDate(best[0][0])));
  if(typeof LISTENERS!=='undefined'&&LISTENERS.length){const L=LISTENERS[LISTENERS.length-1]; const P=LISTENERS.length>1&&LISTENERS[LISTENERS.length-2][0]===addDays(L[0],-1)?LISTENERS[LISTENERS.length-2]:null, dl=P?L[1]-P[1]:null;
    grid.append(card('Monthly listeners',format(L[1]),dl==null?`As of ${longDate(L[0])}`:`${dl>0?'+'+format(dl):dl<0?'−'+format(-dl):'No change'} since ${shortDate(P[0])}`));}
  const billion=SONGS.filter(s=>s[1]>=1e9).length; grid.append(card('Songs over 1B',String(billion),`As of ${longDate(UPDATED)}`));
  if(crossed.length) grid.append(card('Milestones crossed',String(crossed.length),range));
  else{const nx=msRows()[0]; if(nx){const c=card('Next milestone',short(nx[1]),null);const s=mk('span','wr-sub');s.append(songLink(nx[0][0]),` · est. ${longDate(addDays(UPDATED,nx[2]))}`);c.append(s);grid.append(c);}}
  out.push(grid);
  // Top songs
  const top=mk('section','wr-top'); top.id='wr-top'; top.append(mk('h2',null,'Top songs'),mk('p','caption',`Most streams gained, ${range}`));
  const ol=mk('ol','wr-list');
  gains.slice(0,5).forEach((g,i)=>{const li=mk('li','wr-row');const im=typeof coverImg==='function'?coverImg(g[0],'cover-sm',44):null;
    const name=mk('span','wr-name');name.append(songLink(g[0]),mk('small',null,`${format(g[2])} total`));
    li.append(mk('span','wr-rank',String(i+1)));if(im)li.append(im);li.append(name,mk('strong','wr-val','+'+format(g[1])));ol.append(li);});
  top.append(ol); out.push(top);
  // Best days
  const bd=mk('section','wr-days'); bd.id='wr-days'; bd.append(mk('h2',null,'Best days'),mk('p','caption',`Biggest all-song days, ${dayRange}`));
  const ul=mk('ol','wr-list'); best.forEach((b,i)=>{const li=mk('li','wr-row');li.append(mk('span','wr-rank',String(i+1)),mk('span','wr-name',longDate(b[0])),mk('strong','wr-val','+'+format(b[1])));ul.append(li);});
  bd.append(ul);
  if(typeof svgChart==='function'){const w=mk('div','chart-wrap');w.append(svgChart(days.map(x=>x[0]),days.map(x=>x[1]),{kind:'bar',title:'Daily streams, all songs'}));bd.append(w);}
  out.push(bd);
  // Milestones
  const ms=mk('section','wr-ms'); ms.id='wr-ms'; ms.append(mk('h2',null,'Milestones'));
  const msl=mk('ul','wr-mlist');
  if(crossed.length) crossed.forEach(c=>{const li=mk('li');li.append(songLink(c.song),' ',mk('strong',null,'passed '+short(c.mark)),' ',mk('span','wr-date',c.date?(c.asOf?'as of ':'')+longDate(c.date):`between ${longDate(c.between[0])} and ${longDate(c.between[1])}`));msl.append(li);});
  else msl.append(mk('li','wr-none',`No round-number milestones were crossed ${range}.`));
  ms.append(mk('h3',null,`Crossed ${range}`),msl);
  if(typeof MS_RECORDS!=='undefined'){const rec=MS_RECORDS.filter(r=>r.date.startsWith(YEAR)&&(B?!r.song:r.date<first));
    if(rec.length){const rl=mk('ul','wr-mlist');rec.forEach(r=>{const li=mk('li');li.append(r.song?songLink(r.song):mk('span',null,r.artist),r.song?' ':': ',mk('strong',null,'passed '+short(r.mark)),' ',mk('span','wr-date',(r.asOf?'as of ':'')+longDate(r.date)));rl.append(li);});
      ms.append(mk('h3',null,B?`Also in ${YEAR}, as reported`:`Earlier in ${YEAR}, as reported`),rl);const p=mk('p','caption');p.append('Dated by news reports. Sources: ');const a=mk('a',null,'Achievements page');a.href='./achievements.html#milestone-history';p.append(a);ms.append(p);}}
  const nx=msRows()[0]; if(nx){const p=mk('p','wr-next');p.append('Next up: ',songLink(nx[0][0]),` ${short(nx[1])}, est. ${longDate(addDays(UPDATED,nx[2]))}`);ms.append(p);}
  out.push(ms);
  out.push(mk('p','caption wr-src',`Data as of ${longDate(UPDATED)} · Source: Spotify`));
  root.replaceChildren(...out);
})();

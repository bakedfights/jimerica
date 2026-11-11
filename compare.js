"use strict";
// Feature: "Compare two songs" section on Songs (#compare). Self-contained trial (Nov 11, 2026); see FANSITE.md for removal.
// Reads SONGS (data.js) and HIST_DATES/HIST_SONGS (history.js, rebuilt daily by build_history.py), so the daily refresh updates it with no extra step.
// Helpers used from the other site scripts: format/slug (app.js), histDaily/avg7/short (extra.js), coverImg (pages2.js).
(function compareSongs(){
  const sec=document.getElementById('compare'); if(!sec||typeof SONGS==='undefined'||typeof HIST_SONGS==='undefined') return;
  const selA=document.getElementById('cmp-a'), selB=document.getElementById('cmp-b'), tiles=document.getElementById('cmp-tiles');
  const chartBox=document.getElementById('cmp-chart'), note=document.getElementById('cmp-note'), tbody=document.getElementById('cmp-rows'), legend=document.getElementById('cmp-legend');
  const WINDOW=30;                       // most recent daily points drawn on the chart
  const titles=SONGS.map(s=>s[0]);
  const MODES={daily:'Daily streams',index:'Daily trend, first day = 100',growth:'Total streams growth'};
  let mode='daily', A=null, B=null;
  const ns='http://www.w3.org/2000/svg';
  const el=(t,c,x)=>{const e=document.createElement(t); if(c) e.className=c; if(x!=null) e.textContent=x; return e;};
  const hist=t=>HIST_SONGS[t]||[];
  // ---- pure helpers (exported for tests) ----
  function cmpSeries(title,m){
    const dates=HIST_DATES.slice(1), tot=hist(title), daily=histDaily(tot);
    let lo=Math.max(0,daily.length-WINDOW); const d=daily.slice(lo), l=dates.slice(lo);
    if(m==='daily') return {labels:l,values:d};
    if(m==='index'){ const base=d.find(v=>v!=null&&v>0); return {labels:l,values:base?d.map(v=>v==null?null:Math.round(v/base*1000)/10):d.map(()=>null)}; }
    const t=tot.slice(1+lo), base=tot[lo];   // totals aligned with the same dates; base = the total the day before the first drawn day
    return {labels:l,values:base?t.map(v=>v==null?null:Math.round((v/base-1)*1e6)/1e4):t.map(()=>null)};
  }
  function cmpStats(title){
    const s=SONGS.find(x=>x[0]===title); if(!s) return null; const a=avg7(s);
    return {title, total:s[1], daily:s[2], avg7:a.rate, avgDays:a.n};
  }
  // ---- chart: two lines on one axis; the line breaks at missing days ----
  function chart(sa,sb,fmtv){
    const W=640,H=240,P={l:58,r:14,t:14,b:30}, labels=sa.labels, n=labels.length;
    const svg=document.createElementNS(ns,'svg'); svg.setAttribute('viewBox','0 0 '+W+' '+H); svg.setAttribute('role','img'); svg.setAttribute('class','chart cmp-svg');
    const all=[...sa.values,...sb.values].filter(v=>v!=null);
    const ttl=document.createElementNS(ns,'title'); ttl.textContent=MODES[mode]+': '+A+' vs '+B+'. '+labels.map((l,i)=>l+' '+(sa.values[i]==null?'n/a':fmtv(sa.values[i]))+' / '+(sb.values[i]==null?'n/a':fmtv(sb.values[i]))).join('; ');
    svg.append(ttl);
    if(!all.length||n<1) return svg;
    let lo=Math.min(...all,mode==='daily'?0:Infinity), hi=Math.max(...all); if(hi===lo){hi+=1;lo-=1;} const pad=(hi-lo)*.08; hi+=pad; if(mode!=='daily'||lo<0) lo-=pad;
    const x=i=>n===1?(P.l+W-P.r)/2:P.l+14+i*(W-P.l-P.r-28)/(n-1), y=v=>P.t+(H-P.t-P.b)*(1-(v-lo)/(hi-lo));
    const add=(tag,at,tx,parent)=>{const e=document.createElementNS(ns,tag); for(const k in at) e.setAttribute(k,at[k]); if(tx!=null) e.textContent=tx; (parent||svg).append(e); return e;};
    const axisFmt=v=>mode==='daily'?short(Math.round(v)):mode==='index'?String(Math.round(v)):(Math.abs(v)<10?v.toFixed(2):v.toFixed(1))+'%';
    for(let g=0;g<=3;g++){const v=lo+(hi-lo)*g/3; add('line',{x1:P.l,x2:W-P.r,y1:y(v),y2:y(v),class:'grid'}); add('text',{x:P.l-8,y:y(v)+4,'text-anchor':'end',class:'axis'},axisFmt(v));}
    const step=Math.max(1,Math.ceil(n/7));
    labels.forEach((l,i)=>{ if(i%step===0||i===n-1) add('text',{x:x(i),y:H-9,'text-anchor':'middle',class:'axis'},l.slice(5).replace('-','/')); });
    [[sa,'cmp-line-a',A],[sb,'cmp-line-b',B]].forEach(([s,cls,name])=>{
      let seg=[]; const flush=()=>{ if(seg.length>1) add('polyline',{points:seg.map(p=>p.join(',')).join(' '),class:'cmp-line '+cls}); seg=[]; };
      s.values.forEach((v,i)=>{ if(v==null){flush();return;} seg.push([x(i).toFixed(1),y(v).toFixed(1)]); });
      flush();
      s.values.forEach((v,i)=>{ if(v==null) return; const c=add('circle',{cx:x(i).toFixed(1),cy:y(v).toFixed(1),r:3.6,class:'cmp-dot '+cls}); const t=document.createElementNS(ns,'title'); t.textContent=name+', '+labels[i]+': '+fmtv(v); c.append(t); });
    });
    return svg;
  }
  // ---- rendering ----
  function tile(title,cls){
    const st=cmpStats(title), box=el('div','metric cmp-tile '+cls);
    const head=el('div','cmp-tile-head');
    const cov=typeof coverImg==='function'?coverImg(title,'cmp-cover',40):null; if(cov) head.append(cov);
    const a=el('a','cmp-name no-tr',title); a.href=(typeof songPageUrl==='function'&&songPageUrl(title))||('./song.html?id='+slug(title)); head.append(a);
    const tot=el('strong',null,format(st.total)); const l1=el('span',null,'Total streams');
    const d=el('div','cmp-row'); d.append(el('span',null,'Latest daily gain'),el('b',null,st.daily==null?'–':'+'+format(st.daily)));
    const w=el('div','cmp-row'); w.append(el('span',null,'7-day average per day'),el('b',null,st.avg7==null?'–':format(st.avg7)));
    box.append(head,tot,l1,d,w); return box;
  }
  function gapTile(){
    const a=cmpStats(A), b=cmpStats(B), box=el('div','metric cmp-gap');
    if(A===B){ box.append(el('span',null,'Pick two different songs to compare.')); return box; }
    const hi=a.total>=b.total?a:b, lo=hi===a?b:a, diff=hi.total-lo.total;
    box.append(el('span',null,'Total streams gap'));
    const s=el('strong',null,format(diff)); box.append(s);
    const sm=el('small'); sm.append(el('span',null,'Ahead:'),document.createTextNode(' '),el('span','no-tr',hi.title)); box.append(sm);
    return box;
  }
  function render(){
    const sa=cmpSeries(A,mode), sb=cmpSeries(B,mode);
    tiles.replaceChildren(tile(A,'cmp-a'),gapTile(),tile(B,'cmp-b'));
    const fv=mode==='daily'?format:mode==='index'?(v=>String(v)):(v=>(v>=0?'+':'')+v.toFixed(2)+'%');
    chartBox.replaceChildren(chart(sa,sb,fv));
    legend.replaceChildren(); [[A,'cmp-a'],[B,'cmp-b']].forEach(([t,c])=>{const i=el('span','cmp-key '+c); i.append(el('i'),el('b','no-tr',t)); legend.append(i);});
    const none=[A,B].filter((t,i)=>![sa,sb][i].values.some(v=>v!=null));
    const bits=[];
    if(mode==='daily') bits.push('Both songs use the same scale, so a much bigger song can flatten the smaller one. Use the first-day view to compare shapes.');
    else if(mode==='index') bits.push('Each song is scaled so its first day with streams = 100. This compares trends, not size.');
    else bits.push('Percent change in total streams since the day before the first day shown.');
    note.replaceChildren(el('span',null,bits[0]));
    if(none.length){ note.append(document.createTextNode(' ')); note.append(el('span',null,'No daily data yet for one of these songs.')); }
    if(A==='Who'||B==='Who'){ note.append(document.createTextNode(' ')); note.append(el('span',null,'Some "Who" remix and instrumental versions show very large daily gains while "Who" itself shows none. This is probably because Spotify links these versions to one track, so the original\'s daily plays are counted under them. The numbers are shown exactly as Spotify\'s play counts show them.')); }
    // data table, newest day first (last 30 days)
    const dates=HIST_DATES.slice(1), da=histDaily(hist(A)), db=histDaily(hist(B)), lo=Math.max(0,dates.length-WINDOW), rows=[];
    for(let i=dates.length-1;i>=lo;i--){
      const tr=el('tr'); const cell=v=>el('td',null,v==null?'–':format(v));
      tr.append(el('td',null,dates[i]),cell(da[i]),cell(db[i]),cell(hist(A)[i+1]),cell(hist(B)[i+1])); rows.push(tr);
    }
    tbody.replaceChildren(...rows);
    for(const [id,v] of [['cmp-th-a',A],['cmp-th-b',B],['cmp-tt-a',A],['cmp-tt-b',B]]){const e=document.getElementById(id); e.textContent=v; e.className='no-tr';}
    sec.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===mode)));
    try{ history.replaceState(null,'','#compare='+encodeURIComponent(slug(A))+'~'+encodeURIComponent(slug(B))+(mode==='daily'?'':'~'+mode)); }catch{}
  }
  // ---- setup ----
  const bySlug=s=>titles.find(t=>slug(t)===s);
  const sorted=SONGS.slice().sort((a,b)=>b[1]-a[1]).map(s=>s[0]);
  A=sorted[0]; B=sorted[1];
  const m=/^#compare=([a-z0-9-]+)~([a-z0-9-]+)(?:~(\w+))?$/.exec(location.hash||'');
  if(m){ const a=bySlug(m[1]), b=bySlug(m[2]); if(a&&b){A=a;B=b;} if(m[3]&&MODES[m[3]]) mode=m[3]; }
  titles.slice().sort((a,b)=>a.localeCompare(b)).forEach(t=>{ for(const s of [selA,selB]){ const o=document.createElement('option'); o.value=t; o.textContent=t; s.append(o);} });
  selA.value=A; selB.value=B;
  selA.addEventListener('change',()=>{A=selA.value;render();});
  selB.addEventListener('change',()=>{B=selB.value;render();});
  document.getElementById('cmp-swap').addEventListener('click',()=>{[A,B]=[B,A];selA.value=A;selB.value=B;render();});
  sec.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;render();}));
  window.cmpSeries=cmpSeries; window.cmpStats=cmpStats;
  window.cmpSet=(a,b,md)=>{A=a;B=b;if(md)mode=md;selA.value=A;selB.value=B;render();};
  render();
})();

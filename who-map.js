"use strict";
// Feature: world map of the Who country charts, inside the Overview "Who around the world" section (#who-map). Self-contained (Nov 11, 2026); see FANSITE.md for removal.
// Data: WHO / WHO_DATE from data.js (Spotify daily country charts, refreshed by the daily routine). Shape data: world-map.js (Natural Earth, public domain),
// loaded only when the section nears the screen, so it never slows the first paint. Countries on the chart are shaded by rank bucket and numbered; hover, focus or tap
// shows rank, movement, peak, daily streams and change. A chip row (also tappable) covers countries too small to hit on a phone, and the "Global" chart, which has no map shape.
(function whoMap(){
  const box=document.getElementById('who-map'); if(!box||typeof WHO==='undefined'||!WHO.length) return;
  const SRC=document.currentScript&&document.currentScript.src; const ver=SRC&&(SRC.split('?')[1]||'');
  const el=(t,c,x)=>{const e=document.createElement(t); if(c) e.className=c; if(x!=null) e.textContent=x; return e;};
  const ns='http://www.w3.org/2000/svg', sv=(t,a)=>{const e=document.createElementNS(ns,t); for(const k in a) e.setAttribute(k,a[k]); return e;};
  const bucket=r=>r<=10?1:r<=50?2:r<=100?3:4;
  const byCode=Object.fromEntries(WHO.map(w=>[w[0],w]));
  const rows=WHO.slice().sort((a,b)=>a[1]-b[1]);
  const nameOf=c=>(typeof COUNTRY_NAMES!=='undefined'&&COUNTRY_NAMES[c])||c;
  let sel=null, svg=null;
  // ---- shell (immediate): placeholder with the map's aspect ratio, legend, chips, detail panel ----
  const stage=el('div','wm-stage'); stage.setAttribute('role','group'); stage.setAttribute('aria-label','World map of the countries where Who charts');
  const legend=el('div','wm-legend'); legend.append(el('span','wm-legend-title','Rank on Spotify\'s daily country charts'));
  [[1,'#1–10'],[2,'#11–50'],[3,'#51–100'],[4,'#101+']].forEach(([b,t])=>{const k=el('span','wm-key'); k.append(el('i','wm-sw wm-r'+b),el('b','no-tr',t)); legend.append(k);});
  const off=el('span','wm-key'); off.append(el('i','wm-sw wm-r0'),el('b',null,'Not on the chart')); legend.append(off);
  const chips=el('div','wm-chips'); chips.setAttribute('role','group'); chips.setAttribute('aria-label','Countries where Who charts');
  const panel=el('div','wm-panel'); panel.setAttribute('aria-live','polite');
  box.append(stage,legend,chips,panel);
  function show(code,from){
    sel=code; const w=byCode[code];
    chips.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.code===code)));
    if(svg) svg.querySelectorAll('.is-sel').forEach(n=>n.classList.remove('is-sel'));
    if(svg&&code) svg.querySelectorAll('[data-code="'+code+'"]').forEach(n=>n.classList.add('is-sel'));
    panel.replaceChildren();
    if(!w){ panel.append(el('span','wm-hint','Hover, tap or focus a shaded country for its rank.')); return; }
    const [mv,cls]=movement(w[2]);
    const head=el('div','wm-head'); head.append(el('strong','wm-name',nameOf(code)),el('span','wm-rank no-tr','#'+w[1]));
    const g=el('div','wm-grid');
    const cell=(label,val,c)=>{const d=el('div'); d.append(el('span',null,label),el('b',c||null,val)); return d;};
    g.append(cell('Rank','#'+w[1]),cell('Move',mv,cls),cell('Peak',w[3]==null?'–':'#'+w[3]),cell('Daily streams',format(w[4])),
      cell('Change',w[5]==null?'–':(w[5]>0?'+':'')+format(w[5]),w[5]==null?'neutral':w[5]>=0?'positive':'negative'));
    panel.append(head,g);
  }
  rows.forEach(w=>{ const b=el('button','wm-chip'); b.type='button'; b.dataset.code=w[0]; b.setAttribute('aria-pressed','false');
    b.append(el('span',null,nameOf(w[0])),el('b','no-tr','#'+w[1])); b.addEventListener('click',()=>show(w[0])); chips.append(b); });
  show(null);
  box.hidden=false;
  // ---- map (deferred): draw once world-map.js has loaded ----
  function draw(){
    if(typeof WORLD_MAP==='undefined') return;
    const M=WORLD_MAP; svg=sv('svg',{viewBox:'0 0 '+M.w+' '+M.h,class:'wm-svg',focusable:'false'});
    const base=sv('g',{class:'wm-base'}), hit=sv('g',{class:'wm-hit'}), tags=sv('g',{class:'wm-tags'});
    for(const code in M.c){ if(!M.c[code]||byCode[code]) continue; base.append(sv('path',{d:M.c[code],class:'wm-c wm-r0'})); }
    rows.forEach(w=>{
      const code=w[0]; if(!M.c[code]&&!M.p[code]) return;
      const b=bucket(w[1]);
      const p=sv('path',{d:M.c[code]||'',class:'wm-c wm-r'+b,'data-code':code,tabindex:'0',role:'button','aria-label':nameOf(code).replace(/^\S+ /,'')+', #'+w[1]});
      const t=sv('title',{}); t.textContent=nameOf(code).replace(/^\S+ /,'')+' · #'+w[1]; p.append(t);
      const on=()=>show(code); p.addEventListener('mouseenter',on); p.addEventListener('focus',on); p.addEventListener('click',on);
      hit.append(p);
      const c=M.p[code]; if(!c) return;
      const small=(M.a[code]||0)<40;                       // tiny countries get a ring so they stay visible
      const g=sv('g',{class:'wm-tag'+(small?' wm-ring':''),'data-code':code,transform:'translate('+c[0]+' '+c[1]+')'});
      g.append(sv('circle',{r:small?8:7.5})); const tx=sv('text',{'text-anchor':'middle',y:3.4}); tx.textContent=String(w[1]); g.append(tx);
      g.addEventListener('mouseenter',on); g.addEventListener('click',on); tags.append(g);
    });
    svg.append(base,hit,tags); stage.replaceChildren(svg); stage.classList.add('is-ready');
    if(sel) show(sel);
  }
  function load(){
    if(typeof WORLD_MAP!=='undefined') return draw();
    const s=document.createElement('script'); s.src='./world-map.js'+(ver?'?'+ver:''); s.async=true; s.onload=draw; document.head.append(s);
  }
  if('IntersectionObserver' in window){ const io=new IntersectionObserver(es=>{ if(es.some(e=>e.isIntersecting)){ io.disconnect(); load(); } },{rootMargin:'400px'}); io.observe(box); }
  else load();
  window.whoMapLoad=load;
})();

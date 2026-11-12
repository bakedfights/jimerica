"use strict";
// Feature: optional light theme (Nov 11, 2026). LIGHT is the default (changed Nov 11, 2026, t248u); dark grey/gold is one tap away. The choice is kept in localStorage ('jimerica-theme' = 'light' | 'dark'); a saved choice always wins.
// A tiny inline script in each page's <head> applies the saved (or default light) theme before first paint (no flash); this file only wires the labelled Light/Dark switch (t259u/t260u).
// Remove: delete this file, the head snippet and #theme-toggle switch on every page, and the "feature:light-theme" CSS block (see FANSITE.md).
(function theme(){
  const root=document.documentElement, group=document.getElementById('theme-toggle'); if(!group) return;
  const btns=[...group.querySelectorAll('[data-theme-value]')];
  const meta=document.querySelector('meta[name=theme-color]');
  const cur=()=>root.getAttribute('data-theme')==='dark'?'dark':'light';
  function apply(t){
    const theme=t==='dark'?'dark':'light';
    root.setAttribute('data-theme',theme);
    if(meta) meta.setAttribute('content',theme==='dark'?'#2b2d31':'#f7f5ef');
    btns.forEach(b=>{
      const on=b.getAttribute('data-theme-value')===theme;
      b.setAttribute('aria-checked',String(on));
      b.tabIndex=on?0:-1;
    });
  }
  function set(t,el){
    apply(t);
    try{localStorage.setItem('jimerica-theme',t==='dark'?'dark':'light');}catch{}
    if(el) el.focus();
  }
  apply(cur());
  group.addEventListener('click',e=>{
    const b=e.target.closest('[data-theme-value]'); if(!b||!group.contains(b)) return;
    set(b.getAttribute('data-theme-value'));
  });
  group.addEventListener('keydown',e=>{
    if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key)) return;
    e.preventDefault();
    const i=Math.max(0,btns.findIndex(b=>b.getAttribute('aria-checked')==='true'));
    let n=i;
    if(e.key==='Home') n=0;
    else if(e.key==='End') n=btns.length-1;
    else if(e.key==='ArrowRight'||e.key==='ArrowDown') n=(i+1)%btns.length;
    else n=(i-1+btns.length)%btns.length;
    set(btns[n].getAttribute('data-theme-value'),btns[n]);
  });
  window.addEventListener('storage',e=>{ if(e.key==='jimerica-theme') apply(e.newValue==='dark'?'dark':'light'); });   // keep other open tabs in step
})();

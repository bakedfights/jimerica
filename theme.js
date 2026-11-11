"use strict";
// Feature: optional light theme (Nov 11, 2026). LIGHT is the default (changed Nov 11, 2026, t248u); dark grey/gold is one tap away. The choice is kept in localStorage ('jimerica-theme' = 'light' | 'dark'); a saved choice always wins.
// A tiny inline script in each page's <head> applies the saved (or default light) theme before first paint (no flash); this file only wires the toggle button.
// Remove: delete this file, the head snippet and #theme-toggle button on every page, and the "feature:light-theme" CSS block (see FANSITE.md).
(function theme(){
  const root=document.documentElement, btn=document.getElementById('theme-toggle'); if(!btn) return;
  const meta=document.querySelector('meta[name=theme-color]');
  const cur=()=>root.getAttribute('data-theme')==='dark'?'dark':'light';
  function apply(t){
    root.setAttribute('data-theme',t==='dark'?'dark':'light');
    if(meta) meta.setAttribute('content',t==='dark'?'#2b2d31':'#f7f5ef');
    btn.setAttribute('aria-pressed',String(t==='light'));
  }
  apply(cur());
  btn.addEventListener('click',()=>{ const n=cur()==='light'?'dark':'light'; apply(n); try{localStorage.setItem('jimerica-theme',n);}catch{} });
  window.addEventListener('storage',e=>{ if(e.key==='jimerica-theme') apply(e.newValue==='dark'?'dark':'light'); });   // keep other open tabs in step
})();

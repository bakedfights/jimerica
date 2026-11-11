"use strict";
// Feature: optional light theme (Nov 11, 2026). Dark grey/gold is the default. The choice is kept in localStorage ('jimerica-theme' = 'light' | 'dark').
// A tiny inline script in each page's <head> applies a saved light choice before first paint (no flash); this file only wires the toggle button.
// Remove: delete this file, the head snippet and #theme-toggle button on every page, and the "feature:light-theme" CSS block (see FANSITE.md).
(function theme(){
  const root=document.documentElement, btn=document.getElementById('theme-toggle'); if(!btn) return;
  const meta=document.querySelector('meta[name=theme-color]');
  const cur=()=>root.getAttribute('data-theme')==='light'?'light':'dark';
  function apply(t){
    if(t==='light') root.setAttribute('data-theme','light'); else root.removeAttribute('data-theme');
    if(meta) meta.setAttribute('content',t==='light'?'#f7f5ef':'#2b2d31');
    btn.setAttribute('aria-pressed',String(t==='light'));
  }
  apply(cur());
  btn.addEventListener('click',()=>{ const n=cur()==='light'?'dark':'light'; apply(n); try{localStorage.setItem('jimerica-theme',n);}catch{} });
  window.addEventListener('storage',e=>{ if(e.key==='jimerica-theme') apply(e.newValue==='light'?'light':'dark'); });   // keep other open tabs in step
})();

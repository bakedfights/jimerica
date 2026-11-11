"use strict";
// Install-as-app (PWA) helper (Nov 11, 2026 trial; see FANSITE.md). Registers sw.js and adds a small "Install app" button to the footer where the browser
// supports installing (Chrome/Edge/Android), or a one-line tip on iPhone/iPad Safari. Hidden once the site runs as an installed app.
(function installApp(){
  const standalone=()=>(window.matchMedia&&matchMedia('(display-mode: standalone)').matches)||navigator.standalone===true;
  if('serviceWorker' in navigator&&(location.protocol==='https:'||location.hostname==='localhost')){
    window.addEventListener('load',()=>{ navigator.serviceWorker.register('./sw.js',{scope:'./'}).catch(()=>{}); });
  }
  const footer=document.querySelector('footer'); if(!footer||standalone()) return;
  const wrap=document.createElement('div'); wrap.className='install-app'; wrap.hidden=true; footer.append(wrap);
  let deferred=null;
  window.addEventListener('beforeinstallprompt',e=>{
    e.preventDefault(); deferred=e;
    const b=document.createElement('button'); b.type='button'; b.className='install-btn'; b.textContent='Install app';
    b.addEventListener('click',()=>{ if(!deferred) return; deferred.prompt(); deferred.userChoice.finally(()=>{deferred=null; wrap.hidden=true;}); });
    wrap.replaceChildren(b); wrap.hidden=false;
  });
  window.addEventListener('appinstalled',()=>{ wrap.hidden=true; });
  const ua=navigator.userAgent||'';
  const ios=/iPhone|iPad|iPod/.test(ua)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
  const safari=/Safari/.test(ua)&&!/CriOS|FxiOS|EdgiOS|OPiOS/.test(ua);
  if(ios&&safari){ const s=document.createElement('small'); s.className='install-hint'; s.textContent='Install: tap Share, then Add to Home Screen.'; wrap.replaceChildren(s); wrap.hidden=false; }
  window.__installApp={standalone};
})();

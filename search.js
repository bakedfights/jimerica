"use strict";
// Site-wide search: songs, discography, calendar events, achievement rows. Index from search-index.js.
(function(){
  const box=document.getElementById('site-search');
  const list=document.getElementById('site-search-results');
  if(!box||!list||typeof SEARCH_INDEX==='undefined') return;
  const base=(document.querySelector('.logo')?.getAttribute('href')==='/')?'/':'./';
  const href=h=>h.startsWith('http')?h:(base+h.replace(/^\.\//,''));
  let active=-1, open=false, items=[];
  const kindLabel=k=>{
    const map={Song:'Song',Album:'Album',Single:'Single','Featured release':'Featured release',Calendar:'Calendar',Achievement:'Achievement'};
    return map[k]||k;
  };
  const hay=it=>{
    const parts=[it.t,it.kind,it.ko||'',it.es||''];
    try{ if(typeof KO==='object'&&KO[it.t]) parts.push(KO[it.t]); if(typeof ES==='object'&&ES[it.t]) parts.push(ES[it.t]); }catch{}
    return parts.join(' ').toLowerCase();
  };
  const close=()=>{open=false;list.hidden=true;box.setAttribute('aria-expanded','false');box.removeAttribute('aria-activedescendant');active=-1;};
  const paint=()=>{
    list.querySelectorAll('[role=option]').forEach((el,i)=>el.classList.toggle('is-active',i===active));
    const cur=list.querySelector('.is-active');
    if(cur){box.setAttribute('aria-activedescendant',cur.id);cur.scrollIntoView({block:'nearest'});}
    else box.removeAttribute('aria-activedescendant');
  };
  const show=q=>{
    const needle=q.trim().toLowerCase();
    items=needle?SEARCH_INDEX.filter(it=>hay(it).includes(needle)).slice(0,12):[];
    list.replaceChildren();
    if(!needle){close();return;}
    if(!items.length){const li=document.createElement('li');li.className='search-empty';li.textContent='No matches';list.append(li);}
    else items.forEach((it,i)=>{
      const li=document.createElement('li');
      const a=document.createElement('a');
      a.href=href(it.href); a.id='site-search-opt-'+i; a.setAttribute('role','option');
      a.append(document.createTextNode(it.t));
      const sm=document.createElement('small'); sm.textContent=kindLabel(it.kind); a.append(sm);
      a.addEventListener('mousedown',e=>e.preventDefault());
      a.addEventListener('click',()=>close());
      li.append(a); list.append(li);
    });
    open=true; list.hidden=false; box.setAttribute('aria-expanded','true'); active=items.length?0:-1; paint();
  };
  box.addEventListener('input',()=>show(box.value));
  box.addEventListener('focus',()=>{if(box.value.trim()) show(box.value);});
  box.addEventListener('keydown',e=>{
    if(e.key==='Escape'){close();box.blur();return;}
    if(!open||!items.length) return;
    if(e.key==='ArrowDown'){e.preventDefault();active=Math.min(items.length-1,active+1);paint();}
    else if(e.key==='ArrowUp'){e.preventDefault();active=Math.max(0,active-1);paint();}
    else if(e.key==='Enter'&&active>=0){e.preventDefault();const a=list.querySelector('.is-active'); if(a){close(); location.href=a.href;}}
    else if(e.key==='Home'){e.preventDefault();active=0;paint();}
    else if(e.key==='End'){e.preventDefault();active=items.length-1;paint();}
  });
  document.addEventListener('click',e=>{if(!e.target.closest('.site-search')) close();});
  document.addEventListener('keydown',e=>{
    if(e.key==='/'&&!e.metaKey&&!e.ctrlKey&&!e.altKey){
      const t=e.target; if(t&&(t.tagName==='INPUT'||t.tagName==='TEXTAREA'||t.tagName==='SELECT'||t.isContentEditable)) return;
      e.preventDefault(); box.focus();
    }
  });
})();
  function openHash(){
    const id=location.hash.replace(/^#/, ''); if(!id) return;
    const t=document.getElementById(id);
    if(!t) return;
    const d=t.closest('details'); if(d) d.open=true;
  }
  window.addEventListener('load',openHash);
  window.addEventListener('hashchange',openHash);

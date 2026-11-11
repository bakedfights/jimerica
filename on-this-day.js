"use strict";
// Feature: "On this day" card on the Overview (#otd). Self-contained trial (Nov 11, 2026); see FANSITE.md for removal.
// Only real, already-published site data: calEvents() from pages2.js (the Calendar page's events: releases, birthday, service dates,
// plus the #1 brand-reputation dates from achievements.js). Shows events whose month/day equal today's Pacific (PT) date and whose
// year is earlier than this year. Hidden when there are none. Nothing is generated or guessed.
(function onThisDay(){
  const box=document.getElementById('otd'); if(!box||typeof calEvents!=='function') return;
  const ptToday=()=>new Date().toLocaleDateString('en-CA',{timeZone:'America/Los_Angeles'});
  const MON3=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  // iso = 'YYYY-MM-DD' (a PT date). Returns [{year,kind,label,src,ago}] oldest first.
  function otdCompute(iso){
    const md=iso.slice(5), y=+iso.slice(0,4);
    return calEvents().filter(e=>e[0]===md&&e[1]<y).sort((a,b)=>a[1]-b[1]||String(a[3]).localeCompare(String(b[3])))
      .map(e=>({year:e[1],kind:e[2],label:e[3],src:e[4],ago:y-e[1]}));
  }
  function otdRun(iso){
    const items=otdCompute(iso);
    if(!items.length){ box.hidden=true; box.replaceChildren(); return items; }
    const head=document.createElement('div'); head.className='otd-head';
    const title=document.createElement('strong'); title.className='otd-title'; title.textContent='On this day';
    const date=document.createElement('span'); date.className='otd-date'; date.textContent=MON3[+iso.slice(5,7)-1]+' '+(+iso.slice(8,10));
    head.append(title,date);
    const ul=document.createElement('ul'); ul.className='otd-list';
    items.forEach(it=>{
      const li=document.createElement('li');
      const yr=document.createElement('span'); yr.className='otd-year no-tr'; yr.textContent=String(it.year);
      const body=document.createElement('span'); body.className='otd-body';
      const kind=document.createElement('small'); kind.className='otd-kind'; kind.textContent=it.kind;
      const label=document.createElement('span'); label.className='otd-label'; label.textContent=it.label;
      body.append(kind,label);
      if(it.kind!=='Birthday'){ const ago=document.createElement('small'); ago.className='otd-ago'; ago.textContent=it.ago===1?'1 year ago':it.ago+' years ago'; body.append(ago); }
      if(it.src){ const a=document.createElement('a'); a.className='otd-src'; a.href=it.src; a.target='_blank'; a.rel='noopener'; a.textContent='Source ↗'; body.append(a); }
      li.append(yr,body); ul.append(li);
    });
    const more=document.createElement('a'); more.className='otd-more'; more.href='./calendar.html'; more.textContent='See the full calendar →';
    box.replaceChildren(head,ul,more); box.hidden=false; return items;
  }
  window.otdCompute=otdCompute; window.otdRun=otdRun;
  otdRun(ptToday());
})();

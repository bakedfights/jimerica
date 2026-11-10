"use strict";
// Feature: milestone alert banner on the Overview (#ms-alert). Self-contained.
// Uses the same estimate as the Next milestones table (msRows() in extra.js: 7-day average daily streams, next round-number milestone).
// Shows only songs estimated to pass their next milestone within ALERT_DAYS days of the data date; hidden when none qualify.
// Remove: delete this file, its <script> tag and the <aside id="ms-alert"> in index.html, and the "ms-alert" CSS block.
(function milestoneAlert(){
  const box=document.getElementById('ms-alert'); if(!box||typeof msRows!=='function') return;
  const ALERT_DAYS=7, MAX_SHOWN=3;
  const sd=iso=>new Date(iso+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'});
  const due=msRows().filter(r=>r[2]<=ALERT_DAYS);       // [song, milestone, days, avg]
  if(!due.length){ box.hidden=true; box.replaceChildren(); return; }
  const head=document.createElement('div'); head.className='ms-alert-head';
  const tag=document.createElement('strong'); tag.className='ms-alert-title'; tag.textContent='Milestone alert';
  const est=document.createElement('span'); est.className='ms-alert-est'; est.textContent='Estimate';
  head.append(tag,est);
  const ul=document.createElement('ul'); ul.className='ms-alert-list';
  due.slice(0,MAX_SHOWN).forEach(([s,m,d])=>{
    const li=document.createElement('li');
    const a=document.createElement('a'); a.className='no-tr'; a.textContent=s[0]; a.href=songPageUrl(s[0])||('./song.html?id='+slug(s[0]));
    const mid=document.createElement('span'); mid.textContent=' is about to pass ';
    const b=document.createElement('strong'); b.textContent=short(m);
    const dt=document.createElement('span'); dt.className='ms-alert-date'; dt.textContent=' (est. '+sd(addDays(UPDATED,d))+')';
    li.append(a,mid,b,dt); ul.append(li);
  });
  const more=document.createElement('a'); more.className='ms-alert-more'; more.href='#milestones';
  more.textContent=due.length>MAX_SHOWN?'See all upcoming milestones →':'See upcoming milestones →';
  const note=document.createElement('p'); note.className='ms-alert-note'; note.textContent='Estimate: assumes each song keeps its recent 7-day average pace.';
  box.replaceChildren(head,ul,note,more); box.hidden=false;
})();

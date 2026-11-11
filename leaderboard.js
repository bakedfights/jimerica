"use strict";
// Feature: Weekly leaderboard on the Overview (#leaderboard). Self-contained (Nov 11, 2026); see FANSITE.md for removal.
// Ranks songs by streams gained in the last 7 days (Pacific dates, ending on UPDATED, from the daily snapshots in history.js).
// Complements the Weekly recap card: the recap gives week totals and a chart, this ranks every song.
// Up/down arrows compare each song's rank with the 7 days before; they appear only when 14 consecutive days of snapshots exist (otherwise hidden, never guessed).
function lbCompute(hist,dates,updated,limit){
  const days=(n)=>{const d=new Date(updated+'T12:00:00');d.setDate(d.getDate()+n);return d.toISOString().slice(0,10);};
  const idx=d=>dates.indexOf(d);
  const have=(a,b)=>{for(let n=a;n<=b;n++) if(idx(days(n))<0) return false; return true;};
  if(!have(-7,0)) return null;
  const titles=Object.keys(hist), tot=(t,off)=>hist[t][idx(days(off))];
  const gain=(t,a,b)=>{const x=tot(t,a),y=tot(t,b);return x==null||y==null?null:y-x;};
  const rank=(rows)=>rows.slice().sort((a,b)=>b.g-a.g||a.t.localeCompare(b.t));
  const cur=rank(titles.map(t=>({t,g:gain(t,-7,0)})).filter(r=>r.g!=null&&r.g>0));
  const hasPrev=have(-14,0);
  let prevRank=null;
  if(hasPrev){ prevRank=new Map(); rank(titles.map(t=>({t,g:gain(t,-14,-7)})).filter(r=>r.g!=null&&r.g>0)).forEach((r,i)=>prevRank.set(r.t,{rank:i+1,g:r.g})); }
  const rows=cur.slice(0,limit||10).map((r,i)=>{const p=prevRank&&prevRank.get(r.t);
    return {title:r.t,rank:i+1,gain:r.g,avg:Math.round(r.g/7),prev:p?p.g:null,move:prevRank?(p?p.rank-(i+1):null):undefined};});
  return {rows,hasPrev:hasPrev,start:days(-6),end:updated,firstCompare:(()=>{const d=new Date(dates[0]+'T12:00:00');d.setDate(d.getDate()+14);return d.toISOString().slice(0,10);})(),songs:cur.length};
}
(function leaderboard(){
  const box=document.getElementById('leaderboard'); if(!box||typeof HIST_SONGS==='undefined'||typeof UPDATED==='undefined') return;
  const body=document.getElementById('lb-rows'), cap=document.getElementById('lb-cap'), note=document.getElementById('lb-note'); if(!body||!cap) return;
  const r=lbCompute(HIST_SONGS,HIST_DATES,UPDATED,10);
  if(!r){ box.hidden=true; return; }
  const sd=iso=>new Date(iso+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'});
  const ld=iso=>new Date(iso+'T12:00:00').toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'});
  const el=(t,c,x)=>{const e=document.createElement(t); if(c) e.className=c; if(x!=null) e.textContent=x; return e;};
  cap.textContent=(r.start.slice(0,4)===r.end.slice(0,4)?sd(r.start):ld(r.start))+' – '+ld(r.end);
  document.getElementById('lb-move-h').hidden=!r.hasPrev; document.getElementById('lb-prev-h').hidden=!r.hasPrev;
  body.replaceChildren();
  r.rows.forEach(x=>{
    const tr=el('tr'); const td=(label,...k)=>{const c=el('td'); c.setAttribute('data-label',label); c.append(...k); tr.append(c); return c;};
    const a=el('a','no-tr',x.title); a.href=songPageUrl(x.title)||('./song.html?id='+slug(x.title));
    td('Song',el('span','lb-rank no-tr',String(x.rank)),a);
    td('Streams, last 7 days',el('strong',null,format(x.gain)));
    td('Daily average',el('span',null,format(x.avg)));
    if(r.hasPrev){
      td('Previous 7 days',el('span',null,x.prev!=null?format(x.prev):'–'));
      let cls='chg-zero',txt='–',lab='No change';
      if(x.move===null){cls='chg-up';txt='New';}                 // not in the previous week's ranking
      else if(x.move>0){cls='chg-up';txt='▲ '+x.move;}
      else if(x.move<0){cls='chg-down';txt='▼ '+(-x.move);}
      else {txt='=';}
      const m=el('span',cls+(x.move===null?'':' no-tr'),txt); if(x.move!==null) m.setAttribute('aria-label',(x.move>0?'Up ':x.move<0?'Down ':'No change ')+Math.abs(x.move));
      td('Rank vs previous 7 days',m);
    }
    body.append(tr);
  });
  note.replaceChildren();
  if(!r.hasPrev){ note.append(el('span',null,'Rank arrows need 14 days of history. Available from '+sd(r.firstCompare)+'.')); }
  else note.append(el('span',null,'Arrows compare each rank with the previous 7 days.'));
  const s=el('span',null,' Source: Spotify. Pacific dates, same daily snapshots as the Weekly recap.'); note.append(s);
  box.hidden=false;
  window.lbCompute=lbCompute;
})();

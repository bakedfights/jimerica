"use strict";
// Feature: Weekly recap card on the Overview (#recap). Self-contained.
// Covers the last 7 complete days ending on UPDATED, from history.js snapshots (daily gain for day D = total(D) - total(D-1)).
// Real data only: any figure that needs snapshots we do not have yet (the previous 7 days, hence week-over-week and "biggest climber") is not shown.
// Remove: delete this file, its <script> tag and <section id="recap"> (and its jump link) in index.html, and the "recap" CSS block.
function recapCompute(hist,dates,updated){
  const days=(n,from)=>{const d=new Date((from||updated)+'T12:00:00');d.setDate(d.getDate()+n);return d.toISOString().slice(0,10);};
  const idx=d=>dates.indexOf(d);
  const have=(a,b)=>{for(let n=0;n<=b-a;n++) if(idx(days(a+n))<0) return false; return true;};   // snapshots updated+a .. updated+b all present
  if(!have(-7,0)) return null;                           // a full week of consecutive daily snapshots is not available
  const titles=Object.keys(hist), tot=(t,off)=>hist[t][idx(days(off))];
  const gain=(t,a,b)=>{const x=tot(t,a),y=tot(t,b);return x==null||y==null?null:y-x;};   // total(updated+b) - total(updated+a)
  const week={start:days(-6),end:updated,daily:[],labels:[]};
  for(let i=1;i<=7;i++){let s=0;titles.forEach(t=>{const g=gain(t,-8+i,-7+i);if(g!=null)s+=g;});week.daily.push(s);week.labels.push(days(-7+i));}
  const per=titles.map(t=>[t,gain(t,-7,0)]).filter(x=>x[1]!=null);
  week.total=per.reduce((n,x)=>n+x[1],0);
  const top=per.slice().sort((a,b)=>b[1]-a[1])[0]; week.top=top?{title:top[0],gain:top[1]}:null;
  const step=m=>m<1e8?1e7:m<1e9?5e7:1e8, next=n=>{const s=step(n);return Math.floor(n/s)*s+s;};
  week.crossed=[];
  titles.forEach(t=>{const a=tot(t,-7),b=tot(t,0);if(a==null||b==null)return;const ms=[];for(let m=next(a);m<=b;m=next(m))ms.push(m);if(ms.length)week.crossed.push({title:t,milestones:ms});});
  let prev=null,climber=null;
  if(have(-14,0)){                                       // previous 7 days need snapshots updated-14 .. updated-7
    const pp=titles.map(t=>[t,gain(t,-14,-7)]).filter(x=>x[1]!=null), pm=new Map(pp);
    prev={total:pp.reduce((n,x)=>n+x[1],0),start:days(-13),end:days(-7)};
    const best=per.filter(x=>pm.has(x[0])).map(x=>[x[0],x[1]-pm.get(x[0])]).sort((a,b)=>b[1]-a[1])[0];
    if(best&&best[1]>0) climber={title:best[0],gain:best[1]};
  }
  return {week,prev,climber,firstCompare:days(14,dates[0])};   // first data date with 14 days of history
}
(function weeklyRecap(){
  const box=document.getElementById('recap'); if(!box||typeof HIST_SONGS==='undefined'||typeof UPDATED==='undefined') return;
  const body=document.getElementById('recap-body'), cap=document.getElementById('recap-cap'); if(!body||!cap) return;
  const r=recapCompute(HIST_SONGS,HIST_DATES,UPDATED);
  if(!r){ box.hidden=true; return; }
  const sd=iso=>new Date(iso+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'});
  const ld=iso=>new Date(iso+'T12:00:00').toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'});
  const {week,prev,climber}=r;
  const sameYear=week.start.slice(0,4)===week.end.slice(0,4);
  const range=(sameYear?sd(week.start):ld(week.start))+' – '+ld(week.end);
  cap.textContent=range; box.hidden=false;
  const tile=(label,value,sub,cls)=>{const m=document.createElement('div');m.className='metric recap-tile';
    const st=document.createElement('strong');st.textContent=value;if(cls)st.className=cls;
    const sp=document.createElement('span');sp.textContent=label;m.append(st,sp);
    if(sub){const sm=document.createElement('small');if(sub.cls)sm.className=sub.cls;if(sub.nodes)sm.append(...sub.nodes);else sm.textContent=sub.text;m.append(sm);}
    return m;};
  const link=t=>{const a=document.createElement('a');a.className='no-tr';a.textContent=t;a.href=songPageUrl(t)||('./song.html?id='+slug(t));return a;};
  const tiles=[];
  tiles.push(tile('Streams in the last 7 days',format(week.total),{text:'All songs combined'},'recap-total'));
  if(prev){
    const d=week.total-prev.total, pct=prev.total>0?d/prev.total*100:null;
    tiles.push(tile('vs previous 7 days',(d>0?'▲ +':d<0?'▼ −':'')+format(Math.abs(d)),{text:(pct!=null?(pct>0?'+':pct<0?'−':'')+Math.abs(pct).toFixed(1)+'% · ':'')+'previous: '+format(prev.total),cls:d>0?'chg-up':d<0?'chg-down':'chg-zero'},d>0?'chg-up':d<0?'chg-down':'chg-zero'));
    tiles.push(tile('Biggest climber',climber?climber.title:'–',climber?{text:'+'+format(climber.gain)+' vs previous 7 days',cls:'chg-up'}:{text:'No song gained on the previous 7 days'},'recap-song no-tr'));
    if(climber){const s=tiles[tiles.length-1].querySelector('strong');const a=link(climber.title);s.replaceChildren(a);}
  }else{
    // Not enough history for the previous 7 days yet: say so, show only what the data supports.
    const first=r.firstCompare;
    tiles.push(tile('vs previous 7 days','–',{text:'Needs 14 days of history. Available from '+sd(first)+'.'}));
    const t=week.top;
    const m=tile('Most streamed this week',t?t.title:'–',t?{text:'+'+format(t.gain)+' streams'}:null,'recap-song');
    if(t){const s=m.querySelector('strong');s.replaceChildren(link(t.title));}
    tiles.push(m);
  }
  const mt=document.createElement('div');mt.className='metric recap-tile recap-ms';
  const mh=document.createElement('span');mh.textContent='Milestones crossed';
  if(week.crossed.length){
    const ul=document.createElement('ul');ul.className='recap-list';
    week.crossed.forEach(c=>{const li=document.createElement('li');const mm=c.milestones.map(short).join(', ');
      const st=document.createElement('span');st.textContent=': reached '+mm;li.append(link(c.title),st);ul.append(li);});
    mt.append(mh,ul);
  }else{const st=document.createElement('strong');st.textContent='None this week';const sm=document.createElement('small');sm.textContent='No song passed a new round-number milestone.';mt.append(st,mh,sm);}
  tiles.push(mt);
  const grid=document.createElement('div');grid.className='metrics recap-grid';grid.append(...tiles);
  const chartWrap=document.createElement('div');chartWrap.className='chart-wrap recap-chart';
  const h3=document.createElement('h3');h3.className='recap-chart-title';h3.textContent='Daily streams, all songs';
  chartWrap.append(h3);
  if(typeof svgChart==='function') chartWrap.append(svgChart(week.labels,week.daily,{kind:'bar',title:'All songs daily streams'}));
  const src=document.createElement('p');src.className='caption recap-src';src.textContent='Source: Spotify. Daily gains use Pacific dates and the same daily snapshots as the rest of the site.';
  body.replaceChildren(grid,chartWrap,src);
})();

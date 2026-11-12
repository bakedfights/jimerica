"use strict";
// Feature: Monthly recap card on the Overview (#mrecap), after the Weekly leaderboard. Self-contained, same look as the Weekly recap (reuses its "recap" CSS).
// Shows the latest COMPLETE Pacific calendar month, only once it has ended (first appears Dec 1, 2026 for November), computed from history.js snapshots
// (daily gain for day D = total(D) - total(D-1), per song, same rule as every other card). Before a month ends the section stays hidden.
// Real data only / honest coverage: snapshots began on Nov 2, 2026, so November covers Nov 3 - Nov 30 (28 of 30 days) and is labelled "partial".
// The previous-month comparison appears only when BOTH months are fully covered (first possible: January 2027 vs December 2026, shown on Feb 1, 2027).
// Remove: delete this file, its <script> tag and <section id="mrecap"> in index.html, the "mrecap" CSS block, the build_history.py "monthly recap" status print, and the Monthly recap entries in i18n.js.
function mrDays(iso,n){const d=new Date(iso+'T12:00:00');d.setDate(d.getDate()+n);return d.toISOString().slice(0,10);}
function mrMonthEnd(ym){const [y,m]=ym.split('-').map(Number);return new Date(Date.UTC(y,m,0)).toISOString().slice(0,10);}   // last calendar day of YYYY-MM
function mrPrevMonth(ym){const [y,m]=ym.split('-').map(Number);const d=new Date(Date.UTC(y,m-2,1));return d.toISOString().slice(0,7);}
// Daily totals for each day of calendar month `ym` that has snapshots for both that day and the day before.
function mrMonth(hist,dates,ym){
  const last=mrMonthEnd(ym), n=+last.slice(8), titles=Object.keys(hist), idx=new Map(dates.map((d,i)=>[d,i]));
  const days=[],daily=[],per={};
  for(let k=1;k<=n;k++){
    const d=ym+'-'+String(k).padStart(2,'0'), i=idx.get(d), j=idx.get(mrDays(d,-1));
    if(i==null||j==null) continue;
    let s=0,any=false;
    titles.forEach(t=>{const a=hist[t][j],b=hist[t][i];if(a==null||b==null)return;s+=b-a;any=true;per[t]=(per[t]||0)+(b-a);});
    if(any){days.push(d);daily.push(s);}
  }
  return {ym,last,length:n,days,daily,per,total:daily.reduce((a,b)=>a+b,0),full:days.length===n};
}
// latest complete month relative to the data date: the month containing `updated` once `updated` is its last day, otherwise the month before.
function mrLatestComplete(updated){const ym=updated.slice(0,7);return updated>=mrMonthEnd(ym)?ym:mrPrevMonth(ym);}
function monthlyCompute(hist,dates,updated,opts){
  const o=opts||{}, ym=o.month||mrLatestComplete(updated);
  if(!o.month&&mrMonthEnd(ym)>updated) return null;
  const m=mrMonth(hist,dates,ym);
  if(m.days.length<(o.minDays||7)) return null;               // too little coverage to say anything useful
  const top=Object.entries(m.per).sort((a,b)=>b[1]-a[1])[0];
  const step=x=>x<1e8?1e7:x<1e9?5e7:1e8, next=x=>{const s=step(x);return Math.floor(x/s)*s+s;};
  const idx=new Map(dates.map((d,i)=>[d,i])), i0=idx.get(mrDays(m.days[0],-1)), i1=idx.get(m.days[m.days.length-1]);
  const crossed=[];
  Object.keys(hist).forEach(t=>{const a=hist[t][i0],b=hist[t][i1];if(a==null||b==null)return;const ms=[];for(let x=next(a);x<=b;x=next(x))ms.push(x);if(ms.length)crossed.push({title:t,milestones:ms});});
  let prev=null;
  if(m.full){const p=mrMonth(hist,dates,mrPrevMonth(ym));if(p.full)prev={ym:p.ym,total:p.total};}
  // first month-end on which a comparison becomes possible: the first full month F needs a snapshot on the day before F starts; F and F+1 both full -> shown on the 1st after F+1
  const d0=dates[0], firstFull=mrMonthEnd(d0.slice(0,7))===d0?mrDays(d0,1).slice(0,7):mrDays(mrMonthEnd(d0.slice(0,7)),1).slice(0,7);
  const second=mrDays(mrMonthEnd(firstFull),1).slice(0,7), firstCompare=mrDays(mrMonthEnd(second),1);
  return {ym,days:m.days,daily:m.daily,total:m.total,full:m.full,length:m.length,first:m.days[0],lastDay:m.days[m.days.length-1],
    top:top?{title:top[0],gain:top[1]}:null,crossed,prev,firstCompare,avg:Math.round(m.total/m.days.length)};
}
function monthlyRecapRender(r,box,opts){
  const body=box.querySelector('#mrecap-body'),cap=box.querySelector('#mrecap-cap'); if(!body||!cap) return;
  const o=opts||{};
  const ld=iso=>new Date(iso+'T12:00:00').toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric'});
  const sd=iso=>new Date(iso+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'});
  const monthName=new Date(r.ym+'-15T12:00:00').toLocaleDateString('en-US',{month:'long',year:'numeric'});
  cap.textContent=r.full?monthName:monthName+' · partial: '+sd(r.first)+' – '+ld(r.lastDay)+' ('+r.days.length+' of '+r.length+' days)';
  const tile=(label,value,sub,cls)=>{const m=document.createElement('div');m.className='metric recap-tile';
    const st=document.createElement('strong');st.textContent=value;if(cls)st.className=cls;
    const sp=document.createElement('span');sp.textContent=label;m.append(st,sp);
    if(sub){const sm=document.createElement('small');if(sub.cls)sm.className=sub.cls;sm.textContent=sub.text;m.append(sm);}
    return m;};
  const link=t=>{const a=document.createElement('a');a.className='no-tr';a.textContent=t;a.href=(typeof songPageUrl==='function'&&songPageUrl(t))||('./song.html?id='+slug(t));return a;};
  const tiles=[tile('Streams in the month',format(r.total),{text:'All songs combined'},'recap-total')];
  if(r.prev){
    const d=r.total-r.prev.total, pct=r.prev.total>0?d/r.prev.total*100:null, c=d>0?'chg-up':d<0?'chg-down':'chg-zero';
    tiles.push(tile('vs previous month',(d>0?'▲ +':d<0?'▼ −':'')+format(Math.abs(d)),{text:(pct!=null?(pct>0?'+':pct<0?'−':'')+Math.abs(pct).toFixed(1)+'% · ':'')+'previous: '+format(r.prev.total),cls:c},c));
  }else{
    tiles.push(tile('vs previous month','–',{text:'Needs two full months of data. Available from '+ld(r.firstCompare)+'.'}));
  }
  const t=r.top, tm=tile('Top song of the month',t?t.title:'–',t?{text:'+'+format(t.gain)+' streams'}:null,'recap-song');
  if(t) tm.querySelector('strong').replaceChildren(link(t.title));
  tiles.push(tm);
  tiles.push(tile('Daily average',format(r.avg),{text:'per day over '+r.days.length+' days'}));
  const mt=document.createElement('div');mt.className='metric recap-tile recap-ms';
  const mh=document.createElement('span');mh.textContent='Milestones crossed';
  if(r.crossed.length){
    const ul=document.createElement('ul');ul.className='recap-list';
    r.crossed.forEach(c=>{const li=document.createElement('li');const st=document.createElement('span');st.textContent=': reached '+c.milestones.map(short).join(', ');li.append(link(c.title),st);ul.append(li);});
    mt.append(mh,ul);
  }else{const st=document.createElement('strong');st.textContent='None that month';const sm=document.createElement('small');sm.textContent='No song passed a new round-number milestone.';mt.append(st,mh,sm);}
  tiles.push(mt);
  const grid=document.createElement('div');grid.className='metrics recap-grid';grid.append(...tiles);
  const chartWrap=document.createElement('div');chartWrap.className='chart-wrap recap-chart';
  const h3=document.createElement('h3');h3.className='recap-chart-title';h3.textContent='Daily streams, all songs';chartWrap.append(h3);
  if(typeof svgChart==='function'){
    const svg=svgChart(r.days,r.daily,{kind:'bar',title:'All songs daily streams'});
    // ~30 bars: keep every 3rd date label so the axis stays readable
    const labels=[...svg.querySelectorAll('text.axis[text-anchor=middle]')];labels.forEach((l,i)=>{if(i%3!==0)l.remove();});
    chartWrap.append(svg);
  }
  const src=document.createElement('p');src.className='caption recap-src';
  src.textContent='Source: Spotify. Daily gains use Pacific dates and the same daily snapshots as the rest of the site.';
  const kids=[grid,chartWrap];
  if(!r.full){const note=document.createElement('p');note.className='caption recap-src recap-partial';note.textContent='Partial month: the snapshots cover only '+r.days.length+' of '+r.length+' days, so totals and the chart include only those days.';kids.push(note);}
  kids.push(src);
  if(o.sample){const s=document.createElement('p');s.className='mrecap-sample';s.textContent=o.sample;kids.unshift(s);}
  body.replaceChildren(...kids); box.hidden=false;
  // jump link (only while the section is visible)
  const nav=document.querySelector('.jump-links');
  if(nav&&!nav.querySelector('a[href="#mrecap"]')){const a=document.createElement('a');a.href='#mrecap';a.textContent='Monthly recap';const w=nav.querySelector('a[href="#recap"]');(w?w.after(a):nav.append(a));}
}
(function monthlyRecap(){
  const box=document.getElementById('mrecap'); if(!box||typeof HIST_SONGS==='undefined'||typeof UPDATED==='undefined') return;
  const r=monthlyCompute(HIST_SONGS,HIST_DATES,UPDATED);
  if(!r){ box.hidden=true; return; }
  monthlyRecapRender(r,box);
})();

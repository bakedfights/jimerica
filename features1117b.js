"use strict";
// Nov 17, 2026 (b) features on the Overview (branch features-1117); see FANSITE.md "Nov 17, 2026 (b)".
// K-pop soloists table (#soloists): monthly listeners exactly as shown on each artist's official Spotify profile (soloists.js, generated daily by
// /workspace/jimin/soloists.py from read_soloists.cjs). Neutral, sorted by listeners. "Change vs day before" only against the previous calendar day's reading.
(function soloists(){
  const sec=document.getElementById('soloists'), body=document.getElementById('solo-rows');
  if(!sec||!body||typeof SOLO_DATES==='undefined'||!SOLO_DATES.length) return;
  const n=SOLO_DATES.length-1, d=SOLO_DATES[n], prevOk=n>0&&SOLO_DATES[n-1]===addDays(d,-1);
  const rows=SOLO_ARTISTS.map(([id,name,group,note])=>{const h=SOLO_HIST[id]||[];return {id,name,group,note,v:h[n],p:prevOk?h[n-1]:null};}).filter(r=>typeof r.v==='number').sort((a,b)=>b.v-a.v);
  if(!rows.length) return;
  rows.forEach((r,i)=>{
    const tr=node('tr',null,r.name==='Jimin'?'solo-jimin':'');
    const a=node('a',r.name,'no-tr'); a.href='https://open.spotify.com/artist/'+r.id; a.target='_blank'; a.rel='noopener noreferrer';
    const nm=node('td'); nm.setAttribute('data-label','Artist'); nm.append(a,' ',node('small',r.note?`${r.group} · ${r.note}`:r.group,'no-tr solo-group'));
    const v=node('td',format(r.v),'num'); v.setAttribute('data-label','Monthly listeners');
    let ch; if(typeof r.p==='number'){const x=r.v-r.p; ch=node('td',x>0?'▲ +'+format(x):x<0?'▼ −'+format(-x):'0','num '+(x>0?'chg-up':x<0?'chg-down':''));} else ch=node('td','—','num muted');
    ch.setAttribute('data-label','Change vs day before');
    const rk=node('td',String(i+1),'num'); rk.setAttribute('data-label','#');
    tr.append(rk,nm,v); if(prevOk) tr.append(ch); body.append(tr);
  });
  const chh=document.getElementById('solo-chg-h'); if(chh&&!prevOk) chh.remove();   // no previous-day reading yet: no empty change column
  document.getElementById('solo-cap').textContent=`Data as of ${longDate(d)} · Source: Spotify`;
  document.getElementById('solo-note').textContent=prevOk?'Monthly listeners are the people who played each artist on Spotify in the last 28 days, as shown on their Spotify profiles. Read once a day. SUGA releases solo music under two Spotify profiles, Agust D and SUGA, so both are listed.'
    :'Monthly listeners are the people who played each artist on Spotify in the last 28 days, as shown on their Spotify profiles. Read once a day; day-to-day changes appear from the second reading. SUGA releases solo music under two Spotify profiles, Agust D and SUGA, so both are listed.';
  sec.hidden=false;
})();

"use strict";
// Feature: "Era timeline" on Discography (#timeline). Self-contained trial (Nov 11, 2026); see FANSITE.md for removal.
// Solo releases from the debut single to the latest release. Release dates are the ones on the Discography/Calendar pages (Spotify album pages;
// "Promise" uses the Pacific date, see the Calendar note). Stream numbers are computed live from data.js (SONGS) and chart peaks from achievements.js
// (Spotify Charts), so the daily refresh updates them with no extra step. Highlight sentences are copied word for word from the Achievements page.
// Covers: Spotify's own cover images (same ids as DISC); Promise and Christmas Love covers were checked via Spotify's oEmbed for each track.
(function eraTimeline(){
  const list=document.getElementById('tl-list'); if(!list||typeof SONGS==='undefined'||typeof DISC==='undefined') return;
  const HL={
    like:'“Like Crazy” debuted at No. 1 on the Billboard Hot 100, the first solo No. 1 for a BTS member and the first for a South Korean soloist',
    face:'FACE debuted at No. 2 on the Billboard 200 with 164,000 units, the highest-charting album by a Korean soloist at the time',
    who:'“Who” debuted at No. 1 on the Billboard Global 200 and Global Excl. US and held both spots for two weeks',
    muse:'MUSE spent 34 weeks on the Billboard 200, the longest-charting K-pop solo album'
  };
  // big = full era card; otherwise a compact single. album = DISC title (cover, tracks, Spotify link); img for releases not on the Discography page.
  const ERAS=[
    {big:1,t:'Promise',type:'Single',date:'2018-12-30',img:'ab67616d0000b27321d21c44fa7a2495c37ce088',tracks:['Promise']},
    {big:1,t:'Christmas Love',type:'Single',date:'2020-12-24',img:'ab67616d0000b2736102fbfee73db153a32d02ab',tracks:['Christmas Love']},
    {big:1,t:'FACE',type:'Album',date:'2023-03-24',album:'FACE',hl:['like','face']},
    {t:'Closer Than This',type:'Single',date:'2023-12-22',album:'Closer Than This',tracks:['Closer Than This']},
    {t:'Smeraldo Garden Marching Band (feat. Loco)',type:'Pre-release single',date:'2024-06-28',album:'Smeraldo Garden Marching Band (feat. Loco)',tracks:['Smeraldo Garden Marching Band (feat. Loco)']},
    {big:1,t:'MUSE',type:'Album',date:'2024-07-19',album:'MUSE',hl:['who','muse']},
    {t:'Be Mine (English Version)',type:'Single',date:'2024-08-02',album:'Be Mine (English Version)'}
  ];
  const norm=t=>songNorm(t);
  const row=t=>SONGS.find(s=>norm(s[0])===norm(t));
  const peakRow=(arr,t)=>(typeof arr!=='undefined'&&arr.find(r=>norm(r[0])===norm(t)))||null;
  const el=(tag,cls,txt)=>{const e=document.createElement(tag); if(cls) e.className=cls; if(txt!=null) e.textContent=txt; return e;};
  const metric=(strong,label,small,smallEl)=>{const m=el('div','metric'); m.append(el('strong',null,strong),el('span',null,label)); if(smallEl) m.append(smallEl); else if(small) m.append(el('small',null,small)); return m;};
  // Era numbers from live data: [{title,total}] rows for the era's tracks that are in SONGS.
  function eraStats(e){
    const d=e.album&&DISC.find(r=>r.t===e.album);
    const names=e.tracks||(d&&d.tracks)||[];
    const rows=names.map(row).filter(Boolean);
    const total=rows.reduce((a,r)=>a+r[1],0);
    const lead=rows.slice().sort((a,b)=>b[1]-a[1])[0]||null;
    let peaks=null;
    if(lead){ const us=peakRow(typeof ACH_US==='undefined'?undefined:ACH_US,lead[0]), kr=peakRow(typeof ACH_KR==='undefined'?undefined:ACH_KR,lead[0]);
      const p=[]; if(us) p.push('US #'+us[3]); if(kr) p.push('KR #'+kr[3]); if(p.length) peaks=p.join(' · '); }
    return {names,rows,total,lead,peaks,disc:d||null};
  }
  function render(){
    const frag=document.createDocumentFragment();
    ERAS.slice().sort((a,b)=>a.date.localeCompare(b.date)).forEach(e=>{
      const st=eraStats(e), id=e.img||(st.disc&&st.disc.img);
      const li=el('li','tl-item '+(e.big?'tl-era':'tl-single')); li.append(el('span','tl-dot'));
      const card=el('article','tl-card');
      if(id){ const im=el('img','tl-cover'); const sz=e.big?112:72; im.src=coverSized(IMG+id,300); im.alt=e.t+' cover art'; im.width=sz; im.height=sz; im.loading='lazy'; im.decoding='async'; card.append(im); }
      const body=el('div','tl-body');
      const yr=el('span','tl-year no-tr',e.date.slice(0,4));
      const h=el('h3','tl-title no-tr',e.t);
      const meta=el('div','tl-meta'); meta.append(el('span',null,e.type),el('span',null,' · '),el('span',null,longDate(e.date)));
      body.append(yr,h,meta);
      const stats=el('div','tl-stats');
      if(st.lead){
        if(e.big){
          const lk=el('a','no-tr',st.lead[0]); lk.href=songPageUrl(st.lead[0])||('./song.html?id='+slug(st.lead[0]));
          const sm=el('small'); sm.append(lk);
          stats.append(metric(format(st.lead[1]),'Most streamed track',null,sm));
          if(st.rows.length>1) stats.append(metric(format(st.total),'Tracks combined',st.rows.length+' tracks'));
          if(st.peaks) stats.append(metric(st.peaks,'Spotify daily chart peak','Spotify Charts, as of '+longDate(ACH_CHART_ASOF)));
        } else stats.append(metric(format(st.lead[1]),'Total streams'));
      }
      if(stats.children.length) body.append(stats);
      if(e.hl){ const ul=el('ul','tl-hl'); e.hl.forEach(k=>ul.append(el('li',null,HL[k]))); body.append(ul); }
      const links=el('div','tl-links');
      if(st.disc){ const a=el('a','sp ui-t','Listen on Spotify ↗'); a.href=SP+st.disc.id; a.target='_blank'; a.rel='noopener'; links.append(a); }
      if(e.hl){ const a=el('a',null,'All achievements →'); a.href='./achievements.html#cat-charts'; links.append(a); }
      if(links.children.length) body.append(links);
      card.append(body); li.append(card); frag.append(li);
    });
    list.replaceChildren(frag);
  }
  window.eraStats=eraStats; window.TL_ERAS=ERAS; window.TL_HL=HL;
  render();
})();

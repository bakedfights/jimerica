// Jimin's KOMCA-registered songwriting credits. Refresh manually when the
// official works list changes (not part of the daily data.js update).
// Source: https://www.komca.or.kr/srch2/srch_01_popup_mem_right.jsp?S_MB_CD=10005241
// Roles are from that KOMCA member page (작사 = lyricist, 작곡 = composer).
// Years are from JIMERICA's Spotify/calendar data or the official release.
// Order: newest first (KOMCA registration date as of SONG_CREDITS_ASOF).
const SONG_CREDITS_ASOF = "2026-11-24";
const SONG_CREDITS_SOURCE = "https://www.komca.or.kr/srch2/srch_01_popup_mem_right.jsp?S_MB_CD=10005241";
const SONG_CREDITS = [
  {title:"Into the Sun", artist:"BTS", year:2026, roles:["lyricist","composer"], isNew:true},
  {title:"they don't know 'bout us", artist:"BTS", year:2026, roles:["lyricist","composer"]},
  {title:"Be Mine (English Version)", artist:"Jimin", year:2024, roles:["lyricist","composer"]},
  {title:"Rebirth (Intro)", artist:"Jimin", year:2024, roles:["lyricist","composer"]},
  {title:"Slow Dance (feat. Sofia Carson)", artist:"Jimin", year:2024, roles:["lyricist","composer"]},
  {title:"Be Mine", artist:"Jimin", year:2024, roles:["lyricist","composer"]},
  {title:"Interlude : Showtime", artist:"Jimin", year:2024, roles:["composer"]},
  {title:"Smeraldo Garden Marching Band", artist:"Jimin", year:2024, roles:["lyricist","composer"]},
  {title:"Closer Than This", artist:"Jimin", year:2023, roles:["lyricist","composer"]},
  {title:"Set Me Free Pt.2", artist:"Jimin", year:2023, roles:["lyricist","composer"]},
  {title:"Letter (편지)", artist:"Jimin", year:2023, roles:["lyricist","composer"]},
  {title:"Alone", artist:"Jimin", year:2023, roles:["lyricist","composer"]},
  {title:"Like Crazy", artist:"Jimin", year:2023, roles:["lyricist","composer"]},
  {title:"Face-off", artist:"Jimin", year:2023, roles:["lyricist","composer"]},
  {title:"VIBE (feat. Jimin of BTS)", artist:"TAEYANG", year:2023, roles:["composer"]},
  {title:"Boyz with Fun (Demo Ver.)", artist:"BTS", year:2022, roles:["lyricist","composer"]},
  {title:"Christmas Love", artist:"Jimin", year:2020, roles:["lyricist","composer"]},
  {title:"Skit", artist:"BTS", year:2020, roles:["lyricist","composer"]},
  {title:"Dis-ease (병)", artist:"BTS", year:2020, roles:["lyricist","composer"]},
  {title:"In The SOOP", artist:"BTS", year:2020, roles:["lyricist","composer"]},
  {title:"Friends (친구)", artist:"BTS", year:2020, roles:["lyricist","composer"]},
  {title:"Promise (약속)", artist:"Jimin", year:2018, roles:["lyricist","composer"]},
  {title:"Lie", artist:"BTS", year:2016, roles:["lyricist","composer"]},
  {title:"Boyz with Fun (흥탄소년단)", artist:"BTS", year:2015, roles:["lyricist","composer"]},
  {title:"Outro: Circle Room Cypher", artist:"BTS", year:2013, roles:["lyricist"]}
];

function creditRoleLabel(roles){
  const L=roles.indexOf('lyricist')>=0, C=roles.indexOf('composer')>=0;
  if(L&&C) return 'Lyricist & composer';
  if(C) return 'Composer';
  return 'Lyricist';
}

function renderSongCredits(){
  const root=document.getElementById('credits-body');
  if(!root||typeof SONG_CREDITS==='undefined') return;
  root.replaceChildren();
  const asof=(typeof longDate==='function'?longDate(SONG_CREDITS_ASOF):new Date(SONG_CREDITS_ASOF+'T12:00:00').toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'}));
  const cap=document.getElementById('credits-cap');
  if(cap) cap.textContent='Works registered to Jimin with the Korea Music Copyright Association (KOMCA), newest first. As of '+asof+'.';
  const src=document.getElementById('credits-source-link');
  if(src){ src.href=SONG_CREDITS_SOURCE; src.target='_blank'; src.rel='noopener'; }
  const byYear=[];
  for(const w of SONG_CREDITS){
    const last=byYear[byYear.length-1];
    if(!last||last.year!==w.year) byYear.push({year:w.year, rows:[w]});
    else last.rows.push(w);
  }
  const th=(lab)=>{const t=document.createElement('th'); t.scope='col'; t.textContent=lab; return t;};
  const td=(lab, text, extra)=>{
    const c=document.createElement('td');
    c.setAttribute('data-label', lab);
    if(typeof text==='string'){
      const s=document.createElement('span');
      s.className='no-tr';
      s.textContent=text;
      c.append(s);
    }
    if(extra) c.append(extra);
    return c;
  };
  for(const g of byYear){
    const sub=document.createElement('div');
    sub.className='sub';
    const h=document.createElement('h3');
    h.className='ui no-tr';
    h.textContent=String(g.year);
    const wrap=document.createElement('div');
    wrap.className='table-wrap cards-sm';
    wrap.tabIndex=0;
    wrap.setAttribute('role','region');
    wrap.setAttribute('aria-label','Song credits');
    const table=document.createElement('table');
    const thead=document.createElement('thead');
    const hr=document.createElement('tr');
    hr.append(th('Song'), th('Artist'), th('Role'));
    thead.append(hr);
    const tb=document.createElement('tbody');
    for(const w of g.rows){
      const tr=document.createElement('tr');
      if(w.isNew) tr.className='credits-new';
      let badge=null;
      if(w.isNew){
        badge=document.createElement('span');
        badge.className='badge-new';
        badge.textContent='New';
      }
      const role=document.createElement('td');
      role.setAttribute('data-label','Role');
      role.textContent=creditRoleLabel(w.roles);
      tr.append(td('Song', w.title, badge), td('Artist', w.artist), role);
      tb.append(tr);
    }
    table.append(thead, tb);
    wrap.append(table);
    sub.append(h, wrap);
    root.append(sub);
  }
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', renderSongCredits);
else renderSongCredits();

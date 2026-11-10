"use strict";
const COUNTRY_NAMES = {"Global":"🌍 Global","US":"🇺🇸 United States","TH":"🇹🇭 Thailand","JP":"🇯🇵 Japan","CL":"🇨🇱 Chile","BR":"🇧🇷 Brazil","KR":"🇰🇷 South Korea","PH":"🇵🇭 Philippines","VN":"🇻🇳 Vietnam","SG":"🇸🇬 Singapore","TW":"🇹🇼 Taiwan","MX":"🇲🇽 Mexico","PE":"🇵🇪 Peru","VE":"🇻🇪 Venezuela","PY":"🇵🇾 Paraguay","BY":"🇧🇾 Belarus","PA":"🇵🇦 Panama","CR":"🇨🇷 Costa Rica","KZ":"🇰🇿 Kazakhstan","CZ":"🇨🇿 Czechia","ID":"🇮🇩 Indonesia","MY":"🇲🇾 Malaysia","HK":"🇭🇰 Hong Kong","IN":"🇮🇳 India","GB":"🇬🇧 United Kingdom","CA":"🇨🇦 Canada","AR":"🇦🇷 Argentina","ES":"🇪🇸 Spain","BO":"🇧🇴 Bolivia","UY":"🇺🇾 Uruguay","SV":"🇸🇻 El Salvador","GT":"🇬🇹 Guatemala","HN":"🇭🇳 Honduras","DO":"🇩🇴 Dominican Republic","NI":"🇳🇮 Nicaragua","EC":"🇪🇨 Ecuador","CO":"🇨🇴 Colombia","UA":"🇺🇦 Ukraine","BG":"🇧🇬 Bulgaria","LV":"🇱🇻 Latvia","SA":"🇸🇦 Saudi Arabia","AE":"🇦🇪 UAE","MA":"🇲🇦 Morocco","IE":"🇮🇪 Ireland","HU":"🇭🇺 Hungary","AU":"🇦🇺 Australia","NZ":"🇳🇿 New Zealand","DE":"🇩🇪 Germany","FR":"🇫🇷 France","IT":"🇮🇹 Italy","PL":"🇵🇱 Poland","TR":"🇹🇷 Türkiye","EG":"🇪🇬 Egypt","PK":"🇵🇰 Pakistan","NG":"🇳🇬 Nigeria","ZA":"🇿🇦 South Africa"};
const format = n => n.toLocaleString('en-US');
const billions = n => (n / 1e9).toFixed(2) + 'B';
// Parse at noon as a calendar date: no UTC-midnight shift to the previous PT day.
const longDate = iso => new Date(iso + 'T12:00:00').toLocaleDateString('en-US', {year:'numeric',month:'long',day:'numeric'});
const slug = t => t.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const songNorm = t => t.toLowerCase().replace(/[–—]/g,'-').replace(/\(feat\.[^)]*\)/g,'').replace(/[^a-z0-9]+/g,' ').trim();
function songPageUrl(title){
  if(typeof SONGS==='undefined') return null;
  const n=songNorm(title);
  const s=SONGS.find(x=>songNorm(x[0])===n) || SONGS.find(x=>songNorm(x[0]).startsWith(n+' ')||n.startsWith(songNorm(x[0])+' '));
  return s ? './song/'+slug(s[0])+'.html' : null;
}
function node(tag, text, className) {
  const el = document.createElement(tag);
  if (text !== undefined && text !== null) el.textContent = text;
  if (className) el.className = className;
  return el;
}
function renderMetrics(id, entries) {
  const container = document.getElementById(id);
  container.replaceChildren(...entries.map(([value,label,detail]) => {
    const metric = node('div', null, 'metric');
    metric.append(node('strong', value), node('span',label));
    if (detail) metric.append(node('small', detail));
    return metric;
  }));
}
let songSort = 'streams';
// Day-over-day change in daily streams, from history.js snapshots ending on UPDATED. null if not enough data.
function dailyChange(title) {
  if (typeof HIST_SONGS === 'undefined') return null;
  const i = HIST_DATES.indexOf(UPDATED), v = HIST_SONGS[title];
  if (i < 2 || !v || [v[i], v[i-1], v[i-2]].some(x => x == null)) return null;
  const today = v[i]-v[i-1], prev = v[i-1]-v[i-2];
  return {delta: today-prev, pct: prev > 0 ? (today-prev)/prev*100 : null};
}
function changeNode(tag, title, withPct = true) {
  const c = dailyChange(title);
  if (!c) return node(tag, '–', 'chg-zero');
  const cls = c.delta > 0 ? 'chg-up' : c.delta < 0 ? 'chg-down' : 'chg-zero';
  const arrow = c.delta > 0 ? '▲ ' : c.delta < 0 ? '▼ ' : '';
  const txt = arrow + (c.delta > 0 ? '+' : '') + format(c.delta) + (withPct && c.pct != null && c.delta ? ` (${c.pct > 0 ? '+' : ''}${c.pct.toFixed(1)}%)` : '');
  const e = node(tag, txt, cls); e.title = 'Change vs the day before'; return e;
}
function renderSongs() {
  const onlyFeatures = document.getElementById('features-only').checked;
  const rows = SONGS.filter(s => !onlyFeatures || s[3]).slice();
  if (songSort === 'daily') rows.sort((a,b) => (b[2] ?? -1) - (a[2] ?? -1));
  else if (songSort === 'change') rows.sort((a,b) => (dailyChange(b[0])?.delta ?? -Infinity) - (dailyChange(a[0])?.delta ?? -Infinity));
  else if (songSort === 'title') rows.sort((a,b) => a[0].localeCompare(b[0]));
  else rows.sort((a,b) => b[1] - a[1]);
  const maxDaily = Math.max(0, ...SONGS.map(s => s[2] ?? 0));
  document.getElementById('song-rows').replaceChildren(...rows.map(s => {
    const row = node('tr');
    const title = node('td', null, 'song-title-cell');
    const im = typeof coverImg==='function' ? coverImg(s[0],'cover-sm',40) : null;
    if (im) title.append(im);
    const name = node('div', null, 'song-title-text');
    name.append(document.createTextNode(s[0]));
    if (s[3]) name.append(node('span', '(feature)', 'feature-label'));
    title.append(name);
    const daily = node('td', s[2] === null ? '–' : format(s[2]));
    if (s[2] !== null && maxDaily > 0) daily.style.setProperty('--w', Math.max(2, s[2] / maxDaily * 100) + '%');
    daily.className = 'daily-cell';
    row.append(title, node('td', format(s[1])), daily, changeNode('td', s[0]));
    return row;
  }));
  document.getElementById('song-count').textContent = `${rows.length} ${onlyFeatures ? 'featured ' : ''}songs · daily gains for ${UPDATED}`;
}
function movement(m) {
  if (m === 'same') return ['= same', 'neutral'];
  if (m === 're') return ['RE re-entry','reentry'];
  if (m === 'new') return ['NEW','reentry'];
  return m.startsWith('up ') ? ['▲ '+m.slice(3),'positive'] : ['▼ '+m.slice(5),'negative'];
}
const $ = id => document.getElementById(id);
function init() {
  if ($('summary')) 
  document.getElementById('summary').textContent = `Every Jimin song on Spotify, solo and features, with total streams and daily gains.`;
  if ($('milestone')) {
  const statement = $('milestone');
  statement.append(document.createTextNode('Jimin has surpassed '),node('strong',(TOTALS.streams/1e9).toFixed(2)+' Billion'),document.createTextNode(' streams across his solo and featured songs on Spotify.'));
  // Solo/feature stream split is hidden: TOTALS.feat matches the 3 feature-flagged songs, but TOTALS.solo comes from a source summary that does not equal total minus features or the sum of the other rows.
  // Total and data date live here (hero + the page's "Data updated" badge), not also in the glance strip.
  renderMetrics('totals-metrics', [[format(TOTALS.daily),'Streams yesterday'],[String(TOTALS.tracks),'Tracks counted']]);
  }
  if ($('daily-bars')) {
  $('daily-caption').textContent = `Streams gained on ${longDate(UPDATED)}.`;
  if ($('movers')) { const ch = SONGS.map(s=>[s[0],dailyChange(s[0])]).filter(x=>x[1]); if (ch.length) { ch.sort((a,b)=>b[1].delta-a[1].delta); const up=ch[0], dn=ch[ch.length-1], m=$('movers'); m.replaceChildren();
    const part=(lbl,x,cls)=>{const s=node('span',null,'mover');const a=node('a',x[0]);a.href=songPageUrl(x[0])||('./song.html?id='+slug(x[0]));s.append(node('span',lbl),document.createTextNode(' '),a,document.createTextNode(' '),node('strong',(x[1].delta>0?'▲ +':'▼ ')+format(x[1].delta),cls));return s;};
    if (up[1].delta>0) m.append(part('Biggest rise vs day before',up,'chg-up'));
    if (dn[1].delta<0) m.append(part('Biggest drop vs day before',dn,'chg-down'));
    m.hidden = !m.childNodes.length; } }
  const d = SONGS.filter(s=>s[2]!==null).sort((a,b)=>b[2]-a[2]).slice(0,10);
  $('daily-bars').replaceChildren(...d.map(s=>{const bar=node('div',null,'bar');const l=node('div',null,'bar-label');const r=node('span',null,'bar-right');r.append(node('strong','+'+format(s[2])),changeNode('small',s[0]));const name=node('span',null,'bar-name');const im=typeof coverImg==='function'?coverImg(s[0],'cover-sm',32):null;if(im)name.append(im);name.append(document.createTextNode(s[0]));l.append(name,r);const t=node('div',null,'bar-track');const f=node('div',null,'bar-fill');f.style.width=(s[2]/d[0][2]*100)+'%';t.append(f);bar.append(l,t);return bar;}));
  }
  if ($('top-bars')) {
  const top = SONGS.slice().sort((a,b)=>b[1]-a[1]).slice(0,10);
  document.getElementById('top-bars').replaceChildren(...top.map(s=>{
    const bar=node('div',null,'bar');
    const label=node('div',null,'bar-label');
    const r=node('span',null,'bar-right');r.append(node('strong',billions(s[1])),changeNode('small',s[0],false));const name=node('span',null,'bar-name');const im=typeof coverImg==='function'?coverImg(s[0],'cover-sm',32):null;if(im)name.append(im);name.append(document.createTextNode(s[0]));label.append(name,r);
    const track=node('div',null,'bar-track');
    track.setAttribute('aria-hidden','true');
    const fill=node('div',null,'bar-fill');
    fill.style.width=(s[1]/top[0][1]*100)+'%';
    track.append(fill); bar.append(label,track); return bar;
  }));
  }
  if ($('song-rows')) {
  document.querySelectorAll('[data-sort]').forEach(button=>button.addEventListener('click',()=>{
    songSort=button.dataset.sort;
    document.querySelectorAll('[data-sort]').forEach(b=>b.setAttribute('aria-pressed', String(b===button)));
    renderSongs();
  }));
  document.querySelectorAll('th[data-col]').forEach(th=>{th.tabIndex=0;const go=()=>document.querySelector(`[data-sort="${th.dataset.col}"]`).click();th.addEventListener('click',go);th.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go();}});});
  document.getElementById('features-only').addEventListener('change', renderSongs);
  renderSongs();
  }
  if ($('who-rows')) {
  document.getElementById('who-caption').textContent=`"Who" on Spotify's daily country charts for ${WHO_DATE}. Source: Spotify charts. Each chart keeps its own verified date.`;
  renderMetrics('who-metrics', [[String(WHO.length),'Countries charting'],[String(WHO.filter(w=>w[1]<=10).length),'Top 10 spots'],[format(WHO.reduce((n,w)=>n+w[4],0)),'Daily streams on these charts']]);
  document.getElementById('who-rows').replaceChildren(...WHO.map(w=>{
    const row=node('tr');
    const [move, cls]=movement(w[2]);
    row.append(node('td',COUNTRY_NAMES[w[0]] ?? w[0]), node('td','#'+w[1]), node('td',move,cls),node('td',w[3]===null?'–':'#'+w[3]), node('td',format(w[4])),node('td',w[5]===null?'–':(w[5]>0?'+':'')+format(w[5]),w[5]===null?'neutral':w[5]>=0?'positive':'negative'));
    return row;
  }));
  }
  if ($('source-description')) document.getElementById('source-description').textContent=`Last updated: ${UPDATED}. The figures are Spotify's public play counts. Daily streams are the change in each track's play count between one daily snapshot and the next. Selected song totals may be refreshed from Spotify's live play counter; these are separate from the dated daily gains. Country charts are dated ${WHO_DATE}.`;
}
function renderChart(k, rows, src) {
  const cap = $(k+'-cap'); cap.textContent = `Jimin's solo songs on Spotify's ${k==='us'?'USA':'South Korea'} Daily chart, all-time, as of ${longDate(ACH_CHART_ASOF)}. Source: `;
  const l = node('a','Spotify Charts'); l.href = src; cap.append(l);
  const best = rows.slice().sort((a,b)=>a[3]-b[3]||b[4]-a[4])[0], longest = rows.slice().sort((a,b)=>b[1]-a[1])[0];
  renderMetrics(k+'-metrics', [['#'+best[3], 'Peak', best[0]], [format(rows.reduce((n,r)=>n+(r[3]===1?r[4]:0),0)), 'Total days at #1'], [format(longest[1]), 'Days charted (longest)', longest[0]], [String(rows.length), 'Solo songs charted']]);
  $(k+'-rows').replaceChildren(...rows.map(r=>{const tr=node('tr');const name=node('td');const href=songPageUrl(r[0]);if(href){const a=node('a',r[0]);a.href=href;name.append(a);}else name.textContent=r[0];tr.append(name,node('td',r[5]?format(r[5]):'–'),node('td','#'+r[3],r[3]===1?'gold':null),node('td',r[4]?format(r[4]):'–'),node('td',r[2]?format(r[2]):'–'),node('td',format(r[1])));['Song','Total chart streams','Peak','Days at peak','Top 10 days','Days charted'].forEach((l,i)=>tr.cells[i].dataset.label=l);return tr;}));
}
if (typeof ACH_US !== 'undefined' && $('us-rows')) {
  renderChart('us', ACH_US, ACH_US_SRC); renderChart('kr', ACH_KR, ACH_KR_SRC);
  $('brand-metrics').replaceChildren(...ACH_BRAND.map(b=>{const m=node('div',null,'metric');m.append(node('strong','#'+b[1]),node('span',b[0]));const sm=node('small','Index '+format(b[2])+' · ');const a=node('a','source');a.href=b[3];sm.append(a);m.append(sm);return m;}));
  $('brand-note').append(document.createTextNode(ACH_BRAND_NOTE[0]+' '));const a=node('a','Source');a.href=ACH_BRAND_NOTE[1];$('brand-note').append(a);
}
init();

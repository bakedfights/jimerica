"use strict";
// Korean/English UI toggle (UI labels only; song titles and data stay as-is). Persisted in localStorage.
const KO={"Stats":"통계","Music":"음악","Fans":"팬","Overview":"개요","Songs":"곡","Trends":"추이","Milestones":"마일스톤","Who":"Who","Discography":"디스코그래피","Calendar":"캘린더","Feed":"피드","Streaming guide":"스트리밍 가이드","About":"소개","Menu":"메뉴",
"Upcoming milestones":"다가오는 마일스톤","Next milestones":"다음 마일스톤","Song":"곡","Milestone":"마일스톤","Streams to go":"남은 스트리밍","Days":"일수","Est. date":"예상 날짜","Progress":"진행률",
"Daily streams":"일일 스트리밍","Total streams":"총 스트리밍","Daily gain":"일일 증가","Change":"변동","Copy link":"링크 복사","Share on X":"X에 공유","← All songs":"← 전체 곡",
"Albums":"앨범","Singles":"싱글","Featured releases":"피처링","Coming up":"다가오는 날","All dates":"전체 날짜","Streaming guide":"스트리밍 가이드","How to stream":"스트리밍 방법","Official Spotify links":"공식 Spotify 링크","Quick tips":"팁",
"Sources":"출처","Solo Achievements":"솔로 기록","Country":"국가","Rank":"순위","Peak":"최고","Next milestone":"다음 마일스톤","Credits":"크레딧","Tracks":"수록곡","Listen on Spotify ↗":"Spotify에서 듣기 ↗","Spotify USA Daily chart":"Spotify 미국 일간 차트","Spotify South Korea Daily chart":"Spotify 한국 일간 차트",
"Birthday":"생일","Release":"발매","Achievement":"기록","days":"일","today":"오늘"};
const KO_BLOCK={g1:"<strong>Spotify 계정에 로그인한 상태로 들으세요.</strong> 무료와 프리미엄 모두 집계됩니다.",g2:"<strong>곡을 끝까지 들으세요.</strong> 약 30초 이후 재생으로 집계됩니다.",g3:"<strong>볼륨을 켜고 앱을 활성 상태로 두세요.</strong> 음소거 재생은 집계되지 않을 수 있습니다.",g4:"<strong>다른 곡과 섞어 들으세요.</strong> 한 곡만 반복하기보다 다른 아티스트 곡과 플레이리스트를 만드세요.",g5:"<strong>저장하고 팔로우하세요.</strong> 곡에 좋아요, 앨범 저장, 아티스트 팔로우.",g6:"<strong>링크를 공유하세요.</strong> 새로운 리스너가 가장 큰 힘이 됩니다.",gtip:"Spotify 이용약관을 지켜주세요: 봇, 가짜 계정, 유료 스트리밍은 걸러지며 아티스트에게 해가 됩니다."};
function applyLang(lang){
  document.documentElement.lang=lang;
  document.querySelectorAll('.navgrp summary,.navmenu a,.menu-btn,h1,h2,h3.ui,th,.share-row .cta,button.cta,.ui-t').forEach(e=>{
    if(e.children.length&&!e.matches('th')) return;
    if(e.dataset.en==null) e.dataset.en=e.textContent.trim();
    e.textContent=lang==='ko'&&KO[e.dataset.en]?KO[e.dataset.en]:e.dataset.en;});
  document.querySelectorAll('[data-i18n]').forEach(e=>{if(e.dataset.enHtml==null)e.dataset.enHtml=e.innerHTML;e.innerHTML=lang==='ko'&&KO_BLOCK[e.dataset.i18n]?KO_BLOCK[e.dataset.i18n]:e.dataset.enHtml;});
  const sel=document.getElementById('lang-select'); if(sel) sel.value=lang;
  const lb=document.getElementById('lang-label'); if(lb) lb.textContent=lang==='ko'?'언어 선택 · Choose English or Korean':'Choose English or Korean';
}
window.addEventListener('load',()=>{
  let lang='en'; try{lang=localStorage.getItem('jimerica-lang')||'en';}catch{}
  applyLang(lang);
  const sel=document.getElementById('lang-select'); if(sel) sel.addEventListener('change',()=>{lang=sel.value==='ko'?'ko':'en';try{localStorage.setItem('jimerica-lang',lang);}catch{}applyLang(lang);});
  // close other nav dropdowns when one opens; close on outside click
  document.querySelectorAll('.navgrp').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.navgrp').forEach(o=>o!==d&&(o.open=false));}));
  document.addEventListener('click',e=>{if(!e.target.closest('.navgrp')&&window.innerWidth>600)document.querySelectorAll('.navgrp').forEach(o=>o.open=false);});
});

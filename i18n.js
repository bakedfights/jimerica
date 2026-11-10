"use strict";
// Korean/English UI translation. Translates every UI text node and title/aria-label/placeholder/alt/data-label attribute
// (including JS-generated text) using exact phrases + patterns. Song titles and numbers stay as-is.
// Choice persisted in localStorage 'jimerica-lang'.
const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
const MON3=MONTHS.map(m=>m.slice(0,3));
const KO={
"Current streams":"현재 스트리밍",
// nav & chrome
"Stats":"통계","Music":"음악","Fans":"팬","Overview":"개요","Songs":"곡","Trends":"추이","Milestones":"마일스톤","Achievements":"업적","Who":"Who","Discography":"디스코그래피","Calendar":"캘린더","Feed":"피드","Social Media":"SNS","X · @JIMERICA":"X · @JIMERICA","View on X ↗":"X에서 보기 ↗","Image from @JIMERICA post":"@JIMERICA 게시물 이미지","Streaming guide":"스트리밍 가이드","About":"소개","Menu":"메뉴",
"Skip to content":"본문으로 건너뛰기","Source: Spotify":"출처: Spotify","Independent fan archive · Not affiliated with Spotify or Jimin.":"독립 팬 아카이브 · Spotify 및 지민과 무관합니다.","Pages":"페이지",
// overview
"Archive of Jimin's Achievements":"지민 업적 아카이브","Jimin by the numbers":"숫자로 보는 지민","Jimin has surpassed":"지민의 누적 스트리밍","Total streams":"총 스트리밍","Streams yesterday":"어제 스트리밍","Solo streams":"솔로 스트리밍","Tracks counted":"집계 곡 수","Top 10 daily gains":"일일 증가 TOP 10","See every song →":"전체 곡 보기 →","Who around the world →":"세계 속 Who →","Top 10 songs by total streams":"총 스트리밍 TOP 10",
"Please enable JavaScript to see the updated Spotify statistics and song sorting controls. Achievement details and sources remain available below.":"최신 Spotify 통계와 정렬 기능을 보려면 JavaScript를 켜 주세요.",
// songs
"Every solo and featured song, sortable by total or daily streams.":"솔로곡과 피처링곡 전체를 총 스트리밍 또는 일일 스트리밍으로 정렬해 보세요.","Every song":"전체 곡","Daily = streams gained on the latest tracked day; – means no daily figure is available.":"일일 = 최근 집계일에 늘어난 스트리밍 수, – 는 일일 수치가 없다는 뜻입니다.","Daily gain":"일일 증가","Change":"변동","Features only":"피처링만","Song":"곡","Streams":"스트리밍","Daily":"일일","(feature)":"(피처링)","A–Z":"가나다순","Change vs the day before":"전날 대비 변동","Sort songs":"곡 정렬","Search songs":"곡 검색","Search songs…":"곡 검색…","Every song statistics":"전체 곡 통계",
"Some \"Who\" remix and instrumental versions show very large daily gains while \"Who\" itself shows none. This is probably because Spotify links these versions to one track, so the original's daily plays are counted under them. The numbers are shown exactly as Spotify's play counts show them.":"일부 \"Who\" 리믹스·인스트루멘탈 버전은 일일 증가가 매우 크고 \"Who\" 원곡은 0으로 보입니다. Spotify가 이 버전들을 하나의 트랙으로 연결해 원곡 재생이 해당 버전에 집계되기 때문으로 보입니다. 수치는 Spotify 재생수 그대로 표시합니다.",
// trends
"Daily streams over time, built from daily Spotify snapshots.":"매일 저장한 Spotify 수치로 만든 일일 스트리밍 추이입니다.","Daily streams, all songs":"전체 곡 일일 스트리밍","All-time total streams":"누적 총 스트리밍","Top songs, daily streams":"주요 곡 일일 스트리밍","Who on country charts":"국가별 차트 속 Who",
// milestones
"Upcoming milestones":"다가오는 마일스톤","Next round-number stream milestone for each song, with estimated dates.":"곡별 다음 스트리밍 마일스톤과 예상 달성일입니다.","Next milestones":"다음 마일스톤","Next milestone to fall":"가장 먼저 달성할 마일스톤","Estimated date":"예상 날짜","Estimated within 30 days":"30일 내 달성 예상","Milestone":"마일스톤","Streams to go":"남은 스트리밍","Days":"일수","Est. date":"예상 날짜","Progress":"진행률","Upcoming milestones table":"다가오는 마일스톤 표",
// song page
"Share of all Jimin streams":"지민 전체 스트리밍 중 비중","Next milestone":"다음 마일스톤","Copy link":"링크 복사","Share on X":"X에 공유","← All songs":"← 전체 곡","Link copied ✓":"링크 복사됨 ✓","Copy failed":"복사 실패","Daily streams":"일일 스트리밍","Not enough history yet for a chart.":"차트를 그리기엔 아직 기록이 부족합니다.","Browse all songs →":"전체 곡 보기 →","Song not found.":"곡을 찾을 수 없습니다.","No daily data":"일일 데이터 없음",
// who
"Who around the world":"세계 속 Who","\"Who\" on Spotify's daily country charts.":"Spotify 국가별 일간 차트 속 \"Who\".","Countries charting":"차트인 국가","Top 10 spots":"TOP 10 진입","Daily streams on these charts":"이 차트들의 일일 스트리밍","Country":"국가","Rank":"순위","Move":"변동","Peak":"최고","= same":"= 유지","Who country charts":"Who 국가별 차트",
"Belarus":"벨라루스","Venezuela":"베네수엘라","South Korea":"대한민국","Singapore":"싱가포르","Costa Rica":"코스타리카","Kazakhstan":"카자흐스탄","Japan":"일본","Taiwan":"대만","Philippines":"필리핀","Indonesia":"인도네시아","Vietnam":"베트남","Thailand":"태국","Malaysia":"말레이시아","Hong Kong":"홍콩","Peru":"페루","Mexico":"멕시코","Ukraine":"우크라이나","Russia":"러시아","Brazil":"브라질","United States":"미국","Chile":"칠레","Argentina":"아르헨티나","Ecuador":"에콰도르","Bolivia":"볼리비아","Paraguay":"파라과이","Guatemala":"과테말라","Honduras":"온두라스","Nicaragua":"니카라과","Panama":"파나마","El Salvador":"엘살바도르","Dominican Republic":"도미니카 공화국","Uruguay":"우루과이","Colombia":"콜롬비아","India":"인도","Egypt":"이집트","Morocco":"모로코","Saudi Arabia":"사우디아라비아","United Arab Emirates":"아랍에미리트",
// achievements
"Every solo record, award and milestone, with sources.":"솔로 기록, 수상, 마일스톤 전체와 출처입니다.","Highlights":"하이라이트","All achievements":"전체 업적","Tap a category to expand it. Every item links its source.":"카테고리를 눌러 펼쳐 보세요. 모든 항목에 출처가 연결되어 있습니다.","Chart records & certifications":"차트 기록 및 인증","Spotify daily charts (US & South Korea)":"Spotify 일간 차트 (미국·한국)","Streaming milestones":"스트리밍 마일스톤","Music show wins":"음악방송 1위","Awards":"수상","Brand reputation #1s":"브랜드평판 1위","Sources":"출처","Achievement":"업적","Source":"출처","Spotify USA Daily chart":"Spotify 미국 일간 차트","Spotify South Korea Daily chart":"Spotify 한국 일간 차트","Spotify Charts":"Spotify 차트","Total days at #1":"1위 총 일수","Days charted (longest)":"최장 차트인 일수","Solo songs charted":"차트인 솔로곡","Days at peak":"최고 순위 일수","Top 10 days":"TOP 10 일수","Days charted":"차트인 일수","Date":"날짜","Show":"프로그램","Era":"활동","Award":"시상식","Year":"연도","Category":"부문","Result":"결과","Won":"수상","Nominated":"후보","source":"출처",
"Like Crazy, Billboard Hot 100":"Like Crazy, 빌보드 핫100","First South Korean soloist to top it":"한국 솔로 가수 최초 1위","FACE and MUSE, Billboard 200":"FACE·MUSE, 빌보드 200","Who on the Hot 100":"Who 핫100 차트인","Guinness World Records titles":"기네스 세계기록","33 weeks":"33주",
"“Like Crazy” debuted at No. 1 on the Billboard Hot 100, the first solo No. 1 for a BTS member and the first for a South Korean soloist":"“Like Crazy” 빌보드 핫100 1위 데뷔 — BTS 멤버 솔로 최초이자 한국 솔로 가수 최초",
"FACE debuted at No. 2 on the Billboard 200 with 164,000 units, the highest-charting album by a Korean soloist at the time":"FACE 빌보드 200 2위 데뷔(16만 4천 유닛), 당시 한국 솔로 가수 최고 순위",
"“Like Crazy” sold 254,000 downloads and CD singles in its first week, the biggest single-week sales total of 2023 at that point":"“Like Crazy” 첫 주 다운로드·CD 싱글 25만 4천 장 판매, 당시 2023년 주간 최고 판매량",
"Sold over 1.45 million copies in its first week, the first solo artist in Hanteo history to pass that mark; No. 1 on the Circle Album Chart":"초동 145만 장 이상 판매, 한터 역사상 솔로 가수 최초; 써클 앨범 차트 1위",
"No. 1 on Oricon's Albums and Digital Albums charts":"오리콘 앨범·디지털 앨범 차트 1위",
"Certifications: KMCA Million; RIAJ Platinum; “Like Crazy” RIAA Platinum and Music Canada Platinum":"인증: KMCA 밀리언, RIAJ 플래티넘; “Like Crazy” RIAA 플래티넘, 뮤직 캐나다 플래티넘",
"Guinness World Record: fastest male K-pop soloist to reach 1 billion Spotify streams (393 days, May 22, 2023)":"기네스 세계기록: Spotify 10억 스트리밍 최단 기간 달성 K-팝 남성 솔로 (393일, 2023년 5월 22일)",
"Debuted at No. 2 on the Billboard 200 with 96,000 units, his second No. 2 debut":"빌보드 200 2위 데뷔(9만 6천 유닛), 두 번째 2위 데뷔",
"Sold 771,129 copies in its first week, debuting at No. 2 on the Circle Album Chart; No. 3 on Oricon":"초동 771,129장, 써클 앨범 차트 2위 데뷔; 오리콘 3위",
"“Who” debuted at No. 1 on the Billboard Global 200 and Global Excl. US and held both spots for two weeks":"“Who” 빌보드 글로벌 200·글로벌(미국 제외) 1위 데뷔, 2주 연속 1위",
"“Who” peaked at No. 12 on the Hot 100 and charted for 33 weeks, then the longest run by a K-pop act":"“Who” 핫100 최고 12위, 33주 차트인 — 당시 K-팝 최장 기록",
"“Who” reached No. 1 on Spotify's Global Daily chart and No. 4 in the UK":"“Who” Spotify 글로벌 일간 차트 1위, 영국 차트 4위",
"“Who” passed 2.5 billion Spotify streams, the first solo song by a Korean artist with no collaborators to reach that":"“Who” Spotify 25억 스트리밍 돌파 — 피처링 없는 한국 솔로곡 최초",
"MUSE spent 34 weeks on the Billboard 200, the longest-charting K-pop solo album":"MUSE 빌보드 200 34주 차트인 — K-팝 솔로 앨범 최장 기록",
"Certifications: MUSE KMCA 2× Platinum and RIAJ Gold; “Who” BPI Gold, Music Canada Platinum and RIAJ Platinum (streaming)":"인증: MUSE KMCA 2× 플래티넘, RIAJ 골드; “Who” BPI 골드, 뮤직 캐나다 플래티넘, RIAJ 플래티넘(스트리밍)",
"Best Male Artist":"남자 가수상","Fans' Choice of the Year (Daesang), the first solo act to win it":"올해의 팬스 초이스(대상) — 솔로 최초 수상","Fans' Choice – Male":"팬스 초이스 – 남자","Best K-Pop (Who)":"베스트 K-팝 (Who)","K-Pop Song of the Year (Who)":"올해의 K-팝 노래 (Who)","Main Award (Bonsang)":"본상","K-Wave Special Award":"한류 특별상","Best Dance Performance – Male Solo (Like Crazy); Album of the Year and Song of the Year longlists":"베스트 댄스 퍼포먼스 남자 솔로 (Like Crazy); 올해의 앨범·노래 후보","6 nominations, including Top Selling Song":"후보 6회 (톱 셀링 송 포함)","3 nominations, including Album of the Year (FACE)":"후보 3회 (올해의 앨범 FACE 포함)","2 nominations (Digital Song Division)":"후보 2회 (디지털 음원 부문)","Artist of the Year nominee":"올해의 가수 후보","Grand Award (Daesang)":"대상","1 nomination":"후보 1회","Best K-Pop":"베스트 K-팝",
"That makes 10 wins: 8 on M Countdown and 2 on Music Bank, according to the win trackers kpopwins.info and kpop.kiwi. Wikipedia's M Countdown winners list confirms the 2023 wins. A fan archive at btsarchive.com also lists an Inkigayo win for Like Crazy on April 9, 2023, which the trackers don't count. The sources list no solo wins on Show Champion, Show! Music Core or The Show.":"총 10회 1위: 엠카운트다운 8회, 뮤직뱅크 2회 (kpopwins.info, kpop.kiwi 기준). 위키백과 엠카운트다운 1위 목록에서 2023년 1위를 확인할 수 있습니다. 팬 아카이브 btsarchive.com은 2023년 4월 9일 인기가요 Like Crazy 1위도 기록하지만 위 집계에는 포함되지 않습니다. 쇼챔피언, 쇼! 음악중심, 더쇼 솔로 1위는 없습니다.",
"Counts are from Wikipedia's list of Jimin's awards and nominations, which lists 25 wins in all, including smaller and fan-voted awards. Each row there cites Billboard, NME, People or the award show itself.":"집계는 위키백과 지민 수상 및 후보 목록 기준이며, 소규모·팬 투표 시상을 포함해 총 25회 수상입니다. 각 항목은 Billboard, NME, People 또는 시상식 공식 자료를 인용합니다.",
"Brand reputation (한국기업평판연구소)":"브랜드평판 (한국기업평판연구소)","Korean Business Research Institute, monthly boy group individual member brand reputation ranking.":"한국기업평판연구소 월간 보이그룹 개인 브랜드평판 순위.",
"61 total #1s, a record, as reported after the August 2026 ranking (StarNews/TopStarNews). The September and October reports did not restate the cumulative count.":"2026년 8월 순위 발표 후 보도 기준 통산 61회 1위로 최다 기록 (스타뉴스/톱스타뉴스). 9월·10월 보도에는 누적 횟수가 다시 언급되지 않았습니다.",
"US daily chart":"미국 일간 차트","KR daily chart":"한국 일간 차트","Achievement, Source table":"업적·출처 표","Date, Show, Song, Era table":"날짜·프로그램·곡·활동 표","Award, Year, Category, Result table":"시상식·연도·부문·결과 표","Streaming milestones table":"스트리밍 마일스톤 표",
// discography
"Jimin's solo albums, singles and featured releases on Spotify.":"Spotify에 있는 지민의 솔로 앨범, 싱글, 피처링 작품.","Albums":"앨범","Singles":"싱글","Featured releases":"피처링","Tracks":"수록곡","Credits":"크레딧","Listen on Spotify ↗":"Spotify에서 듣기 ↗","10 tracks":"10곡","7 tracks":"7곡","Compilation date on Spotify.":"Spotify 컴필레이션 발매일 기준.","Release dates and cover art from Spotify album pages; production credits from the albums' published credits.":"발매일과 커버는 Spotify 앨범 페이지, 프로듀싱 크레딧은 앨범 공식 크레딧 기준입니다.",
// calendar
"Birthday, release anniversaries and achievement dates.":"생일, 발매 기념일, 업적 날짜.","Coming up":"다가오는 날","All dates":"전체 날짜","Today":"오늘","Jimin's birthday":"지민 생일","source":"출처",
"FACE (first solo album) and \"Like Crazy\"":"FACE(첫 솔로 앨범)와 \"Like Crazy\"","MUSE and \"Who\"":"MUSE와 \"Who\"","MUSE (WANDER / WONDER ver.) and Who (Remixes)":"MUSE (WANDER / WONDER ver.)와 Who (Remixes)","\"Angel Pt. 1\" (FAST X soundtrack)":"\"Angel Pt. 1\" (FAST X OST)","\"Set Me Free Pt.2\" pre-release single":"\"Set Me Free Pt.2\" 선공개 싱글",
// feed
"Jimin's latest Instagram and TikTok posts.":"지민의 최신 인스타그램·틱톡 게시물.","All":"전체","Open post ↗":"게시물 열기 ↗","TikTok profile":"틱톡 프로필","Live TikTok profile embed (updates automatically on TikTok's side).":"실시간 틱톡 프로필 (틱톡에서 자동 업데이트).","Filter posts":"게시물 필터",
// guide
"New to streaming Jimin on Spotify? Start here.":"Spotify에서 지민 스트리밍이 처음이라면 여기서 시작하세요.","How to stream":"스트리밍 방법","Official Spotify links":"공식 Spotify 링크","Quick tips":"팁","Jimin on Spotify ↗":"Spotify의 지민 ↗",
// about
"Jimin's biography, and where to listen to and buy his music.":"지민의 약력과 음악을 듣고 구매할 수 있는 곳.","Biography":"약력","Amazon Music":"아마존 뮤직","Amazon":"아마존","MUSE album":"MUSE 앨범","FACE album":"FACE 앨범","FACE (official HYBE store)":"FACE (HYBE 공식 스토어)","FACE digital album":"FACE 디지털 앨범","Biggest rise vs day before":"전날 대비 최대 상승","Biggest drop vs day before":"전날 대비 최대 하락","Jump to category":"카테고리로 이동","Listen":"듣기","Buy":"구매","About this site":"사이트 소개","Official artist and album pages.":"공식 아티스트·앨범 페이지.","Official stores and retailers linked from the label's MUSE release page.":"레이블의 MUSE 공식 발매 페이지에 연결된 공식 스토어와 판매처.","Artist page":"아티스트 페이지","MUSE album":"MUSE 앨범","BANGTANTV (official BTS channel)":"BANGTANTV (BTS 공식 채널)","Artist page (멜론)":"아티스트 페이지","All platforms":"모든 플랫폼","Official MUSE smart link":"MUSE 공식 통합 링크","MUSE (official HYBE store)":"MUSE (HYBE 공식 스토어)","BTS Official Shop (US)":"BTS 공식 숍 (미국)","Jimin albums":"지민 앨범","iTunes / Apple":"iTunes / 애플","MUSE digital album":"MUSE 디지털 앨범","MUSE CD":"MUSE CD","MUSE (BLOOMING ver.) exclusive CD":"MUSE (BLOOMING ver.) 단독 CD","Find MUSE at indie record stores":"독립 음반점에서 MUSE 찾기","Sources:":"출처:","Wikipedia: Jimin":"위키백과: 지민","(citing The Guardian, Rolling Stone, Billboard and others) ·":"(The Guardian, Rolling Stone, Billboard 등 인용) ·","Melon artist profile":"멜론 아티스트 정보","JIMERICA is an independent fan archive of Jimin's Spotify streams and achievements, updated daily. See the":"JIMERICA는 지민의 Spotify 스트리밍과 업적을 매일 기록하는 독립 팬 아카이브입니다.","page for his records and awards.":"페이지에서 기록과 수상 내역을 볼 수 있습니다.",
// 404
"Page not found":"페이지를 찾을 수 없습니다","That page doesn’t exist (or moved).":"없는 페이지이거나 이동된 페이지입니다.","Go to Overview":"개요로 가기","Browse songs":"곡 둘러보기","Show more":"더 보기","Back to top":"맨 위로","M Countdown":"엠카운트다운","Music Bank":"뮤직뱅크","Seoul Music Awards":"서울가요대상","Melon Music Awards":"멜론뮤직어워드","Golden Disc Awards":"골든디스크어워즈","Circle Chart Music Awards":"써클차트 뮤직어워즈","Melon":"멜론","Instagram":"인스타그램","TikTok":"틱톡","Instagram @j.m ↗":"인스타그램 @j.m ↗","TikTok @jimin ↗":"틱톡 @jimin ↗","Instagram · @j.m":"인스타그램 · @j.m","TikTok · @jimin":"틱톡 · @jimin"
};
const KO_BLOCK={g1:"<strong>Spotify 계정에 로그인한 상태로 들으세요.</strong> 무료와 프리미엄 모두 집계되며, 프리미엄은 원하는 곡을 자유롭게 고를 수 있습니다.",g2:"<strong>곡을 끝까지 들으세요.</strong> 약 30초가 지나면 재생으로 집계되지만, 끝까지 듣는 것이 가장 자연스러운 응원입니다.",g3:"<strong>볼륨을 켜고 앱을 활성 상태로 두세요.</strong> 음소거 재생은 집계되지 않을 수 있습니다.",g4:"<strong>다른 곡과 섞어 들으세요.</strong> 한 곡만 반복하기보다 다른 아티스트 곡과 섞은 플레이리스트를 만드세요.",g5:"<strong>저장하고 팔로우하세요.</strong> 곡에 좋아요를 누르고, 앨범을 저장하고, 아티스트 프로필을 팔로우하세요.",g6:"<strong>링크를 공유하세요.</strong> 친구에게 Spotify 링크를 보내세요. 새로운 리스너가 가장 큰 힘이 됩니다.",gtip:"Spotify 이용약관을 지켜 주세요. 봇, 가짜 계정, 유료 스트리밍은 걸러지며 아티스트에게 해가 될 수 있습니다. 곡과 마일스톤 페이지에서 다음 마일스톤이 가까운 곡을 확인하세요.",
bio1:"박지민(지민)은 1995년 10월 13일 부산에서 태어난 대한민국의 가수, 작사·작곡가, 댄서입니다. 부산예술고등학교에서 현대무용을 전공했고, 2012년 오디션에 합격해 빅히트 엔터테인먼트에 들어간 뒤 2014년 한국예술고등학교를 졸업했습니다.",
bio2:"2013년 BTS 멤버로 데뷔했습니다. BTS 이름으로 솔로곡 \"Lie\"(2016), \"Serendipity\"(2017), \"Filter\"(2020)를 발표했고, 첫 공식 솔로곡 \"Promise\"는 2018년 12월 30일에 공개되었습니다.",
bio3:"첫 솔로 앨범 FACE는 2023년 3월 24일 발매되었고, 수록곡 \"Like Crazy\"는 한국 솔로 가수 최초로 빌보드 핫100 1위에 올랐습니다. 두 번째 앨범 MUSE는 2024년 7월 19일 타이틀곡 \"Who\"와 함께 발매되었습니다.",
bio4:"2023년 12월 12일 현역으로 입대해 육군 제5보병사단 포병부대에서 복무했고, 2025년 6월 11일 전역했습니다.",
site1:"JIMERICA는 지민의 Spotify 스트리밍과 업적을 매일 기록하는 독립 팬 아카이브입니다. 기록과 수상 내역은 <a href=\"./achievements.html\">업적</a> 페이지에서 볼 수 있습니다."};
const koDate=(m,d,y)=>`${y}년 ${m}월 ${d}일`;
const tr=s=>KO[s]!=null?KO[s]:s;
const RULES=[
 [/\b(January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2}), (\d{4})/g,(_,m,d,y)=>koDate(MONTHS.indexOf(m)+1,d,y)],
 [/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}), (\d{4})/g,(_,m,d,y)=>koDate(MON3.indexOf(m)+1,d,y)],
 [/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2})\b/g,(_,m,d)=>`${MON3.indexOf(m)+1}월 ${d}일`],
 [/\b(January|February|March|April|May|June|July|August|September|October|November|December) (\d{4})\b/g,(_,m,y)=>`${y}년 ${MONTHS.indexOf(m)+1}월`],
 [/^(January|February|March|April|May|June|July|August|September|October|November|December) · (\d+)$/,(_,m,n)=>`${MONTHS.indexOf(m)+1}월 · ${n}`],
];
const PAT=[ // applied after date conversion; full-string patterns
 [/^Every Jimin song on Spotify, solo and features, with total streams and daily gains\. Data as of (.+), Spotify play counts\.$/,m=>`지민의 Spotify 솔로·피처링 전곡의 총 스트리밍과 일일 증가. ${m[1]} 기준 Spotify 재생수.`],
 [/^streams across his solo and featured songs on Spotify as of (.+)$/,m=>`스트리밍 (Spotify 솔로·피처링곡, ${m[1]} 기준)`],
 [/^Streams gained on (.+)\.$/,m=>`${m[1]} 늘어난 스트리밍.`],
 [/^([\d.]+) Billion$/,m=>`${m[1]}B`],
 [/^(\d+) songs · daily gains for (.+)$/,m=>`${m[1]}곡 · ${m[2]} 일일 증가`],
 [/^(\d+) daily snapshots, (\S+) to (\S+)\. Daily = change in total play counts since the previous snapshot\. History grows by one point each day\.$/,m=>`일일 기록 ${m[1]}개, ${m[2]} ~ ${m[3]}. 일일 = 직전 기록 대비 총 재생수 변화. 매일 한 점씩 늘어납니다.`],
 [/^"Who" daily streams summed over the country charts it appears on \((.+)\)\.$/,m=>`"Who"가 오른 국가별 차트의 일일 스트리밍 합계 (${m[1].replace(/ countries/g,'개국')}).`],
 [/^Projected from each song's average daily streams over the last (\d+) days \(up to 7\) as of (.+), assuming that pace continues\. These are estimates, not predictions or official figures\. Songs without a daily figure are left out\.$/,m=>`${m[2]} 기준 최근 ${m[1]}일(최대 7일) 평균 일일 스트리밍이 유지된다고 가정한 예상치입니다. 공식 수치가 아니며, 일일 수치가 없는 곡은 제외했습니다.`],
 [/^≈ (.+) \(estimate\)$/,m=>`≈ ${m[1]} (예상)`],
 [/^(Solo|Featured) song · #(\d+) of (\d+) by total streams · data as of (.+)$/,m=>`${m[1]==='Solo'?'솔로곡':'피처링곡'} · 총 스트리밍 ${m[3]}곡 중 ${m[2]}위 · ${m[4]} 기준`],
 [/^([▲▼] )?([+\-−]?[\d,]+) vs day before$/,m=>`${m[1]||''}${m[2]} (전날 대비)`],
 [/^Daily streams (\S+) to (\S+)\. Hover or tap a point for the exact figure\.$/,m=>`일일 스트리밍 ${m[1]} ~ ${m[2]}. 점에 마우스를 올리거나 탭하면 정확한 수치가 보입니다.`],
 [/^(.+) daily streams: (.+)$/,m=>`${m[1]==='All songs'?'전체 곡':m[1]} 일일 스트리밍: ${m[2]}`],
 [/^Daily streams: (.+)$/,m=>`일일 스트리밍: ${m[1]}`],
 [/^All-time total streams: (.+)$/,m=>`누적 총 스트리밍: ${m[1]}`],
 [/^Who daily streams across charting countries: (.+)$/,m=>`차트인 국가 Who 일일 스트리밍: ${m[1]}`],
 [/^"Who" on Spotify's daily country charts for (\S+)\. Source: Spotify charts\. Each chart keeps its own verified date\.$/,m=>`${m[1]} Spotify 국가별 일간 차트 속 "Who". 출처: Spotify 차트. 각 차트는 확인된 자체 날짜를 따릅니다.`],
 [/^Jimin's solo songs on Spotify's (USA|South Korea) Daily chart, all-time, as of (.+)\. Source:$/,m=>`Spotify ${m[1]==='USA'?'미국':'한국'} 일간 차트 속 지민 솔로곡 누적 기록 (${m[2]} 기준). 출처:`],
 [/^Spotify all-time streams per song as of (.+) \(updates daily\)\. Source: Spotify\.$/,m=>`${m[1]} 기준 곡별 Spotify 누적 스트리밍 (매일 업데이트). 출처: Spotify.`],
 [/^(\d+) (billion|million)\+ streams$/,m=>`${m[2]==='billion'?m[1]*10+'억':m[1]*100+'만'}+ 스트리밍`],
 [/^Index ([\d,]+) ·$/,m=>`지수 ${m[1]} ·`],
 [/^(.+) cover art$/,m=>`${m[1]} 커버`],
 [/^Label: (.+) · Producers: (.+)$/,m=>`레이블: ${m[1]==='Big Hit Music'?'빅히트 뮤직':m[1]} · 프로듀서: ${m[2]}`],
 [/^(Album|Album version|Single|Pre-release single) · (.+)$/,m=>`${{'Album':'앨범','Album version':'앨범 버전','Single':'싱글','Pre-release single':'선공개 싱글'}[m[1]]} · ${m[2]}`],
 [/^Soundtrack · (.+) · (.+)$/,m=>`OST · ${m[1]} · ${m[2]}`],
 [/^Album date on Spotify; the VIBE single was released (.+)\.$/,m=>`Spotify 앨범 발매일 기준이며, VIBE 싱글은 ${m[1]} 발매되었습니다.`],
 [/^(\d+) days$/,m=>`${m[1]}일 남음`],
 [/^(.+) · (\d+) yr anniversary$/,m=>`${m[1]} · ${m[2]}주년`],
 [/^(Birthday|Release|Achievement|Service) · (\d{4})$/,m=>`${{Birthday:'생일',Release:'발매',Achievement:'업적',Service:'복무'}[m[1]]} · ${m[2]}`],
 [/^(.+) cover art$/,m=>`${m[1]} 커버 아트`],
 [/^(\d+)% toward (.+)$/,m=>`${m[2]}까지 ${m[1]}%`],
 [/^(\d+) post(s?) · newest (.+)\. Each card links to the original Instagram or TikTok post\.$/,m=>`${m[1]}개의 게시물 · 최신 ${m[3]}. 각 카드는 원본 인스타그램 또는 틱톡 게시물로 연결됩니다.`],
 [/^#1 boy group member brand reputation \((.+)\)$/,m=>`보이그룹 개인 브랜드평판 1위 (${m[1]})`],
 [/^"(.+)" \(TAEYANG feat\. Jimin\)$/,m=>`"${m[1]}" (태양 feat. 지민)`],
 [/^(\d+) posts? · newest (.+)\. Posts load from Instagram\/TikTok; if an embed is blocked, use the link\.$/,m=>`게시물 ${m[1]}개 · 최신 ${m[2]}. 인스타그램/틱톡에서 불러옵니다. 임베드가 막히면 링크를 이용하세요.`],
 [/^(.+) · Jimin & HA SUNG WOON · (.+)$/,m=>`${m[1]} · 지민 & 하성운 · ${m[2]}`],
 [/^(\d+) match(es)?$/,m=>`${m[1]}개 일치`],
 [/^Data updated (.+)$/,m=>`데이터 업데이트 ${m[1]}`],
 [/^Total streams: (.+)$/,m=>`총 스트리밍: ${m[1]}`],
 [/^Today's goal \((.+)\): (.+)\+ streams to beat (.+)$/,m=>`오늘 목표 (${m[1]}): ${m[2]}+ 스트리밍으로 ${m[3]} 넘어서기`],
 [/^(.+) was bigger$/,m=>`${m[1]}이 더 높음`],
];
function translateStr(s){
  const lead=s.match(/^\s*/)[0], trail=s.match(/\s*$/)[0], core=s.trim(); if(!core) return s;
  if(KO[core]!=null) return lead+KO[core]+trail;
  let t=core; for(const [re,f] of RULES) t=t.replace(re,f);
  if(KO[t]!=null) return lead+KO[t]+trail;
  for(const [re,f] of PAT){const m=t.match(re); if(m) return lead+f(m)+trail;}
  // country names after flag emoji
  const fm=t.match(/^(\S+) (.+)$/); if(fm&&KO[fm[2]]&&/\p{Extended_Pictographic}|\p{Regional_Indicator}/u.test(fm[1])) return lead+fm[1]+' '+KO[fm[2]]+trail;
  return lead+t+trail;
}
const ES={
"Current streams":"Reproducciones actuales",
  "Stats": "Estadísticas",
  "Music": "Música",
  "Fans": "Fans",
  "Overview": "Resumen",
  "Songs": "Canciones",
  "Trends": "Tendencias",
  "Milestones": "Hitos",
  "Achievements": "Logros",
  "Who": "Who",
  "Discography": "Discografía",
  "Calendar": "Calendario",
  "Feed": "Publicaciones",
  "Social Media": "Redes sociales",
  "X · @JIMERICA": "X · @JIMERICA",
  "View on X ↗": "Ver en X ↗",
  "Image from @JIMERICA post": "Imagen de una publicación de @JIMERICA",
  "Streaming guide": "Guía de streaming",
  "About": "Acerca de",
  "Menu": "Menú",
  "Skip to content": "Saltar al contenido",
  "Source: Spotify": "Fuente: Spotify",
  "Independent fan archive · Not affiliated with Spotify or Jimin.": "Archivo independiente de fans · Sin afiliación con Spotify ni Jimin.",
  "Pages": "Páginas",
  "Archive of Jimin's Achievements": "Archivo de logros de Jimin",
  "Jimin by the numbers": "Jimin en cifras",
  "Jimin has surpassed": "Jimin ha superado",
  "Total streams": "Reproducciones totales",
  "Streams yesterday": "Reproducciones de ayer",
  "Solo streams": "Reproducciones como solista",
  "Tracks counted": "Canciones contabilizadas",
  "Top 10 daily gains": "Las 10 mayores subidas diarias",
  "See every song →": "Ver todas las canciones →",
  "Who around the world →": "Who por el mundo →",
  "Top 10 songs by total streams": "Las 10 canciones con más reproducciones totales",
  "Please enable JavaScript to see the updated Spotify statistics and song sorting controls. Achievement details and sources remain available below.": "Activa JavaScript para ver las estadísticas actualizadas de Spotify y los controles para ordenar canciones. Los detalles de los logros y sus fuentes siguen disponibles abajo.",
  "Every solo and featured song, sortable by total or daily streams.": "Todas las canciones en solitario y colaboraciones, ordenables por reproducciones totales o diarias.",
  "Every song": "Todas las canciones",
  "Daily = streams gained on the latest tracked day; – means no daily figure is available.": "Diarias = reproducciones añadidas en el último día registrado; – indica que no hay una cifra diaria disponible.",
  "Daily gain": "Aumento diario",
  "Change": "Variación",
  "Features only": "Solo colaboraciones",
  "Song": "Canción",
  "Streams": "Reproducciones",
  "Daily": "Diarias",
  "(feature)": "(colaboración)",
  "A–Z": "A–Z",
  "Change vs the day before": "Variación respecto al día anterior",
  "Sort songs": "Ordenar canciones",
  "Search songs": "Buscar canciones",
  "Search songs…": "Buscar canciones…",
  "Every song statistics": "Estadísticas de todas las canciones",
  "Some \"Who\" remix and instrumental versions show very large daily gains while \"Who\" itself shows none. This is probably because Spotify links these versions to one track, so the original's daily plays are counted under them. The numbers are shown exactly as Spotify's play counts show them.": "Algunas versiones remezcladas e instrumentales de \"Who\" muestran aumentos diarios muy grandes, mientras que \"Who\" no muestra ninguno. Probablemente se deba a que Spotify vincula estas versiones a una misma pista, por lo que las reproducciones diarias de la original se contabilizan en ellas. Las cifras se muestran exactamente como aparecen en los contadores de Spotify.",
  "Daily streams over time, built from daily Spotify snapshots.": "Evolución de las reproducciones diarias a partir de registros diarios de Spotify.",
  "Daily streams, all songs": "Reproducciones diarias de todas las canciones",
  "All-time total streams": "Reproducciones totales acumuladas",
  "Top songs, daily streams": "Reproducciones diarias de las canciones principales",
  "Who on country charts": "Who en las listas por país",
  "Upcoming milestones": "Próximos hitos",
  "Next round-number stream milestone for each song, with estimated dates.": "Próximo hito de reproducciones en cifras redondas de cada canción, con fechas estimadas.",
  "Next milestones": "Siguientes hitos",
  "Next milestone to fall": "El hito más cercano",
  "Estimated date": "Fecha estimada",
  "Estimated within 30 days": "Estimados en los próximos 30 días",
  "Milestone": "Hito",
  "Streams to go": "Reproducciones restantes",
  "Days": "Días",
  "Est. date": "Fecha est.",
  "Progress": "Progreso",
  "Upcoming milestones table": "Tabla de próximos hitos",
  "Share of all Jimin streams": "Porcentaje de todas las reproducciones de Jimin",
  "Next milestone": "Próximo hito",
  "Copy link": "Copiar enlace",
  "Share on X": "Compartir en X",
  "← All songs": "← Todas las canciones",
  "Link copied ✓": "Enlace copiado ✓",
  "Copy failed": "No se pudo copiar",
  "Daily streams": "Reproducciones diarias",
  "Not enough history yet for a chart.": "Aún no hay suficientes datos históricos para un gráfico.",
  "Browse all songs →": "Explorar todas las canciones →",
  "Song not found.": "Canción no encontrada.",
  "No daily data": "Sin datos diarios",
  "Who around the world": "Who por el mundo",
  "\"Who\" on Spotify's daily country charts.": "\"Who\" en las listas diarias de Spotify por país.",
  "Countries charting": "Países en cuyas listas aparece",
  "Top 10 spots": "Puestos entre los 10 primeros",
  "Daily streams on these charts": "Reproducciones diarias en estas listas",
  "Country": "País",
  "Rank": "Posición",
  "Move": "Movimiento",
  "Peak": "Mejor posición",
  "= same": "= sin cambios",
  "Who country charts": "Listas de Who por país",
  "Belarus": "Bielorrusia",
  "Venezuela": "Venezuela",
  "South Korea": "Corea del Sur",
  "Singapore": "Singapur",
  "Costa Rica": "Costa Rica",
  "Kazakhstan": "Kazajistán",
  "Japan": "Japón",
  "Taiwan": "Taiwán",
  "Philippines": "Filipinas",
  "Indonesia": "Indonesia",
  "Vietnam": "Vietnam",
  "Thailand": "Tailandia",
  "Malaysia": "Malasia",
  "Hong Kong": "Hong Kong",
  "Peru": "Perú",
  "Mexico": "México",
  "Ukraine": "Ucrania",
  "Russia": "Rusia",
  "Brazil": "Brasil",
  "United States": "Estados Unidos",
  "Chile": "Chile",
  "Argentina": "Argentina",
  "Ecuador": "Ecuador",
  "Bolivia": "Bolivia",
  "Paraguay": "Paraguay",
  "Guatemala": "Guatemala",
  "Honduras": "Honduras",
  "Nicaragua": "Nicaragua",
  "Panama": "Panamá",
  "El Salvador": "El Salvador",
  "Dominican Republic": "República Dominicana",
  "Uruguay": "Uruguay",
  "Colombia": "Colombia",
  "India": "India",
  "Egypt": "Egipto",
  "Morocco": "Marruecos",
  "Saudi Arabia": "Arabia Saudita",
  "United Arab Emirates": "Emiratos Árabes Unidos",
  "Every solo record, award and milestone, with sources.": "Todos los récords, premios e hitos como solista, con fuentes.",
  "Highlights": "Destacados",
  "All achievements": "Todos los logros",
  "Tap a category to expand it. Every item links its source.": "Pulsa una categoría para desplegarla. Cada elemento incluye un enlace a su fuente.",
  "Chart records & certifications": "Récords en listas y certificaciones",
  "Spotify daily charts (US & South Korea)": "Listas diarias de Spotify (EE. UU. y Corea del Sur)",
  "Streaming milestones": "Hitos de reproducciones",
  "Music show wins": "Victorias en programas musicales",
  "Awards": "Premios",
  "Brand reputation #1s": "Primeros puestos en reputación de marca",
  "Sources": "Fuentes",
  "Achievement": "Logro",
  "Source": "Fuente",
  "Spotify USA Daily chart": "Lista diaria de Spotify en Estados Unidos",
  "Spotify South Korea Daily chart": "Lista diaria de Spotify en Corea del Sur",
  "Spotify Charts": "Spotify Charts",
  "Total days at #1": "Total de días en el n.º 1",
  "Days charted (longest)": "Mayor permanencia en lista (días)",
  "Solo songs charted": "Canciones en solitario que entraron en lista",
  "Days at peak": "Días en la mejor posición",
  "Top 10 days": "Días entre los 10 primeros",
  "Days charted": "Días en lista",
  "Date": "Fecha",
  "Show": "Programa",
  "Era": "Etapa",
  "Award": "Premio",
  "Year": "Año",
  "Category": "Categoría",
  "Result": "Resultado",
  "Won": "Ganador",
  "Nominated": "Nominado",
  "source": "fuente",
  "Like Crazy, Billboard Hot 100": "Like Crazy, Billboard Hot 100",
  "First South Korean soloist to top it": "Primer solista surcoreano en encabezarla",
  "FACE and MUSE, Billboard 200": "FACE y MUSE, Billboard 200",
  "Who on the Hot 100": "Who en el Hot 100",
  "Guinness World Records titles": "Títulos de Guinness World Records",
  "33 weeks": "33 semanas",
  "“Like Crazy” debuted at No. 1 on the Billboard Hot 100, the first solo No. 1 for a BTS member and the first for a South Korean soloist": "“Like Crazy” debutó en el n.º 1 del Billboard Hot 100: el primer n.º 1 en solitario de un miembro de BTS y de un solista surcoreano",
  "FACE debuted at No. 2 on the Billboard 200 with 164,000 units, the highest-charting album by a Korean soloist at the time": "FACE debutó en el n.º 2 del Billboard 200 con 164.000 unidades, la mejor posición de un álbum de un solista coreano hasta ese momento",
  "“Like Crazy” sold 254,000 downloads and CD singles in its first week, the biggest single-week sales total of 2023 at that point": "“Like Crazy” vendió 254.000 descargas y sencillos en CD en su primera semana, el mayor total de ventas semanales de 2023 hasta ese momento",
  "Sold over 1.45 million copies in its first week, the first solo artist in Hanteo history to pass that mark; No. 1 on the Circle Album Chart": "Vendió más de 1,45 millones de copias en su primera semana, siendo el primer solista en superar esa cifra en la historia de Hanteo; n.º 1 en Circle Album Chart",
  "No. 1 on Oricon's Albums and Digital Albums charts": "N.º 1 en las listas de álbumes y álbumes digitales de Oricon",
  "Certifications: KMCA Million; RIAJ Platinum; “Like Crazy” RIAA Platinum and Music Canada Platinum": "Certificaciones: KMCA Millón; RIAJ Platino; “Like Crazy”, Platino de RIAA y de Music Canada",
  "Guinness World Record: fastest male K-pop soloist to reach 1 billion Spotify streams (393 days, May 22, 2023)": "Récord Guinness: solista masculino de K-pop que más rápido alcanzó 1.000 millones de reproducciones en Spotify (393 días, 22 de mayo de 2023)",
  "Debuted at No. 2 on the Billboard 200 with 96,000 units, his second No. 2 debut": "Debutó en el n.º 2 del Billboard 200 con 96.000 unidades, su segundo debut en esa posición",
  "Sold 771,129 copies in its first week, debuting at No. 2 on the Circle Album Chart; No. 3 on Oricon": "Vendió 771.129 copias en su primera semana, debutando en el n.º 2 de Circle Album Chart; n.º 3 en Oricon",
  "“Who” debuted at No. 1 on the Billboard Global 200 and Global Excl. US and held both spots for two weeks": "“Who” debutó en el n.º 1 de Billboard Global 200 y Global Excl. US y mantuvo ambas posiciones durante dos semanas",
  "“Who” peaked at No. 12 on the Hot 100 and charted for 33 weeks, then the longest run by a K-pop act": "“Who” alcanzó el n.º 12 del Hot 100 y permaneció 33 semanas en lista, la mayor permanencia de un artista de K-pop hasta entonces",
  "“Who” reached No. 1 on Spotify's Global Daily chart and No. 4 in the UK": "“Who” alcanzó el n.º 1 de la lista diaria global de Spotify y el n.º 4 en el Reino Unido",
  "“Who” passed 2.5 billion Spotify streams, the first solo song by a Korean artist with no collaborators to reach that": "“Who” superó los 2.500 millones de reproducciones en Spotify, la primera canción en solitario de un artista coreano sin colaboradores en alcanzar esa cifra",
  "MUSE spent 34 weeks on the Billboard 200, the longest-charting K-pop solo album": "MUSE permaneció 34 semanas en el Billboard 200, la mayor permanencia de un álbum solista de K-pop",
  "Certifications: MUSE KMCA 2× Platinum and RIAJ Gold; “Who” BPI Gold, Music Canada Platinum and RIAJ Platinum (streaming)": "Certificaciones: MUSE, Doble Platino de KMCA y Oro de RIAJ; “Who”, Oro de BPI, Platino de Music Canada y Platino de RIAJ (streaming)",
  "Best Male Artist": "Mejor artista masculino",
  "Fans' Choice of the Year (Daesang), the first solo act to win it": "Elección de los fans del año (Daesang), primer solista en ganarlo",
  "Fans' Choice – Male": "Elección de los fans – Masculino",
  "Best K-Pop (Who)": "Mejor K-pop (Who)",
  "K-Pop Song of the Year (Who)": "Canción de K-pop del año (Who)",
  "Main Award (Bonsang)": "Premio principal (Bonsang)",
  "K-Wave Special Award": "Premio especial K-Wave",
  "Best Dance Performance – Male Solo (Like Crazy); Album of the Year and Song of the Year longlists": "Mejor interpretación de baile – Solista masculino (Like Crazy); preselecciones de álbum del año y canción del año",
  "6 nominations, including Top Selling Song": "6 nominaciones, incluida canción más vendida",
  "3 nominations, including Album of the Year (FACE)": "3 nominaciones, incluida álbum del año (FACE)",
  "2 nominations (Digital Song Division)": "2 nominaciones (categoría de canción digital)",
  "Artist of the Year nominee": "Nominado a artista del año",
  "Grand Award (Daesang)": "Gran premio (Daesang)",
  "1 nomination": "1 nominación",
  "Best K-Pop": "Mejor K-pop",
  "That makes 10 wins: 8 on M Countdown and 2 on Music Bank, according to the win trackers kpopwins.info and kpop.kiwi. Wikipedia's M Countdown winners list confirms the 2023 wins. A fan archive at btsarchive.com also lists an Inkigayo win for Like Crazy on April 9, 2023, which the trackers don't count. The sources list no solo wins on Show Champion, Show! Music Core or The Show.": "Son 10 victorias: 8 en M Countdown y 2 en Music Bank, según los registros de kpopwins.info y kpop.kiwi. La lista de ganadores de M Countdown de Wikipedia confirma las victorias de 2023. El archivo de fans btsarchive.com también registra una victoria de Like Crazy en Inkigayo el 9 de abril de 2023, que esos registros no contabilizan. Las fuentes no recogen victorias en solitario en Show Champion, Show! Music Core ni The Show.",
  "Counts are from Wikipedia's list of Jimin's awards and nominations, which lists 25 wins in all, including smaller and fan-voted awards. Each row there cites Billboard, NME, People or the award show itself.": "Las cifras proceden de la lista de premios y nominaciones de Jimin de Wikipedia, que recoge 25 victorias en total, incluidos premios menores y por votación de fans. Cada fila cita a Billboard, NME, People o la propia ceremonia.",
  "Brand reputation (한국기업평판연구소)": "Reputación de marca (한국기업평판연구소)",
  "Korean Business Research Institute, monthly boy group individual member brand reputation ranking.": "Clasificación mensual de reputación de marca de miembros individuales de grupos masculinos del Korean Business Research Institute.",
  "61 total #1s, a record, as reported after the August 2026 ranking (StarNews/TopStarNews). The September and October reports did not restate the cumulative count.": "Un total récord de 61 primeros puestos, según lo publicado tras la clasificación de agosto de 2026 (StarNews/TopStarNews). Los informes de septiembre y octubre no reiteraron la cifra acumulada.",
  "US daily chart": "Lista diaria de EE. UU.",
  "KR daily chart": "Lista diaria de Corea del Sur",
  "Achievement, Source table": "Tabla de logros y fuentes",
  "Date, Show, Song, Era table": "Tabla de fecha, programa, canción y etapa",
  "Award, Year, Category, Result table": "Tabla de premio, año, categoría y resultado",
  "Streaming milestones table": "Tabla de hitos de reproducciones",
  "Jimin's solo albums, singles and featured releases on Spotify.": "Álbumes y sencillos en solitario de Jimin y lanzamientos en los que colabora, en Spotify.",
  "Albums": "Álbumes",
  "Singles": "Sencillos",
  "Featured releases": "Lanzamientos con colaboraciones",
  "Tracks": "Canciones",
  "Credits": "Créditos",
  "Listen on Spotify ↗": "Escuchar en Spotify ↗",
  "10 tracks": "10 canciones",
  "7 tracks": "7 canciones",
  "Compilation date on Spotify.": "Fecha de la recopilación en Spotify.",
  "Release dates and cover art from Spotify album pages; production credits from the albums' published credits.": "Fechas de lanzamiento y portadas tomadas de las páginas de los álbumes en Spotify; créditos de producción tomados de los créditos publicados de los álbumes.",
  "Birthday, release anniversaries and achievement dates.": "Cumpleaños, aniversarios de lanzamientos y fechas de logros.",
  "Coming up": "Próximamente",
  "All dates": "Todas las fechas",
  "Today": "Hoy",
  "Jimin's birthday": "Cumpleaños de Jimin",
  "FACE (first solo album) and \"Like Crazy\"": "FACE (primer álbum solista) y \"Like Crazy\"",
  "MUSE and \"Who\"": "MUSE y \"Who\"",
  "MUSE (WANDER / WONDER ver.) and Who (Remixes)": "MUSE (WANDER / WONDER ver.) y Who (Remixes)",
  "\"Angel Pt. 1\" (FAST X soundtrack)": "\"Angel Pt. 1\" (banda sonora de FAST X)",
  "\"Set Me Free Pt.2\" pre-release single": "\"Set Me Free Pt.2\", sencillo de adelanto",
  "Jimin's latest Instagram and TikTok posts.": "Últimas publicaciones de Jimin en Instagram y TikTok.",
  "All": "Todo",
  "Open post ↗": "Abrir publicación ↗",
  "TikTok profile": "Perfil de TikTok",
  "Live TikTok profile embed (updates automatically on TikTok's side).": "Perfil de TikTok integrado en directo (se actualiza automáticamente desde TikTok).",
  "Filter posts": "Filtrar publicaciones",
  "New to streaming Jimin on Spotify? Start here.": "¿Es tu primera vez escuchando a Jimin en Spotify? Empieza aquí.",
  "How to stream": "Cómo escuchar",
  "Official Spotify links": "Enlaces oficiales de Spotify",
  "Quick tips": "Consejos rápidos",
  "Jimin on Spotify ↗": "Jimin en Spotify ↗",
  "Jimin's biography, and where to listen to and buy his music.": "Biografía de Jimin y dónde escuchar y comprar su música.",
  "Biography": "Biografía",
  "Amazon Music": "Amazon Music",
  "Amazon": "Amazon",
  "MUSE album": "Álbum MUSE",
  "FACE album": "Álbum FACE",
  "FACE (official HYBE store)": "FACE (tienda oficial de HYBE)",
  "FACE digital album": "Álbum digital FACE",
  "Biggest rise vs day before": "Mayor subida respecto al día anterior",
  "Biggest drop vs day before": "Mayor bajada respecto al día anterior",
  "Jump to category": "Ir a una categoría",
  "Listen": "Escuchar",
  "Buy": "Comprar",
  "About this site": "Acerca de este sitio",
  "Official artist and album pages.": "Páginas oficiales del artista y de los álbumes.",
  "Official stores and retailers linked from the label's MUSE release page.": "Tiendas oficiales y comercios enlazados desde la página de lanzamiento de MUSE del sello.",
  "Artist page": "Página del artista",
  "BANGTANTV (official BTS channel)": "BANGTANTV (canal oficial de BTS)",
  "Artist page (멜론)": "Página del artista (Melon)",
  "All platforms": "Todas las plataformas",
  "Official MUSE smart link": "Enlace oficial de MUSE a todas las plataformas",
  "MUSE (official HYBE store)": "MUSE (tienda oficial de HYBE)",
  "BTS Official Shop (US)": "BTS Official Shop (EE. UU.)",
  "Jimin albums": "Álbumes de Jimin",
  "iTunes / Apple": "iTunes / Apple",
  "MUSE digital album": "Álbum digital MUSE",
  "MUSE CD": "CD de MUSE",
  "MUSE (BLOOMING ver.) exclusive CD": "CD exclusivo de MUSE (BLOOMING ver.)",
  "Find MUSE at indie record stores": "Encuentra MUSE en tiendas de discos independientes",
  "Sources:": "Fuentes:",
  "Wikipedia: Jimin": "Wikipedia: Jimin",
  "(citing The Guardian, Rolling Stone, Billboard and others) ·": "(con citas de The Guardian, Rolling Stone, Billboard y otros) ·",
  "Melon artist profile": "Perfil del artista en Melon",
  "JIMERICA is an independent fan archive of Jimin's Spotify streams and achievements, updated daily. See the": "JIMERICA es un archivo independiente de fans sobre las reproducciones de Jimin en Spotify y sus logros, actualizado a diario. Consulta la página de",
  "page for his records and awards.": "para conocer sus récords y premios.",
  "Page not found": "Página no encontrada",
  "That page doesn’t exist (or moved).": "Esa página no existe (o ha cambiado de ubicación).",
  "Go to Overview": "Ir al resumen",
  "Browse songs": "Explorar canciones",
  "Show more": "Mostrar más",
  "Back to top": "Volver arriba",
  "M Countdown": "M Countdown",
  "Music Bank": "Music Bank",
  "Seoul Music Awards": "Seoul Music Awards",
  "Melon Music Awards": "Melon Music Awards",
  "Golden Disc Awards": "Golden Disc Awards",
  "Circle Chart Music Awards": "Circle Chart Music Awards",
  "Melon": "Melon",
  "Instagram": "Instagram",
  "TikTok": "TikTok",
  "Instagram @j.m ↗": "Instagram @j.m ↗",
  "TikTok @jimin ↗": "TikTok @jimin ↗",
  "Instagram · @j.m": "Instagram · @j.m",
  "TikTok · @jimin": "TikTok · @jimin",
  "Choose English or Korean": "Elige inglés o coreano",
  "Language": "Idioma",
  "Choose English, Korean, or Spanish": "Elige inglés, coreano o español",
  "English": "Inglés",
  "Korean": "Coreano",
  "Spanish": "Español",
  "Scroll tabs left": "Desplazar pestañas a la izquierda",
  "Scroll tabs right": "Desplazar pestañas a la derecha",
  "Guide": "Guía",
  "Every Jimin song on Spotify, solo and features, with total streams and daily gains.": "Todas las canciones de Jimin en Spotify, en solitario y colaboraciones, con reproducciones totales y aumentos diarios.",
  "No. 1": "N.º 1",
  "No. 2 ×2": "N.º 2 ×2",
  "Wikipedia (discography) ↗": "Wikipedia (discografía) ↗",
  "RE re-entry": "RE reingreso",
  "NEW": "NUEVA",
  "n/a": "no disponible",
  "All songs": "Todas las canciones",
  "All songs daily streams": "Reproducciones diarias de todas las canciones",
  "Who daily streams across charting countries": "Reproducciones diarias de Who en los países en cuyas listas aparece",
  "January": "enero",
  "February": "febrero",
  "March": "marzo",
  "April": "abril",
  "May": "mayo",
  "June": "junio",
  "July": "julio",
  "August": "agosto",
  "September": "septiembre",
  "October": "octubre",
  "November": "noviembre",
  "December": "diciembre",
  "Jan": "ene",
  "Feb": "feb",
  "Mar": "mar",
  "Apr": "abr",
  "Jun": "jun",
  "Jul": "jul",
  "Aug": "ago",
  "Sep": "sept",
  "Oct": "oct",
  "Nov": "nov",
  "Dec": "dic",
  "Global": "Global",
  "Czechia": "Chequia",
  "United Kingdom": "Reino Unido",
  "Canada": "Canadá",
  "Spain": "España",
  "Bulgaria": "Bulgaria",
  "Latvia": "Letonia",
  "UAE": "Emiratos Árabes Unidos",
  "Ireland": "Irlanda",
  "Hungary": "Hungría",
  "Australia": "Australia",
  "New Zealand": "Nueva Zelanda",
  "Germany": "Alemania",
  "France": "Francia",
  "Italy": "Italia",
  "Poland": "Polonia",
  "Türkiye": "Turquía",
  "Pakistan": "Pakistán",
  "Nigeria": "Nigeria",
  "South Africa": "Sudáfrica",
  "Solo": "En solitario",
  "Featured": "Colaboración",
  "Album": "Álbum",
  "Album version": "Versión del álbum",
  "Single": "Sencillo",
  "Pre-release single": "Sencillo de adelanto",
  "Soundtrack": "Banda sonora",
  "Birthday": "Cumpleaños",
  "Release": "Lanzamiento",
  "Label": "Sello",
  "Producers": "Productores",
  "estimate": "estimación",
  "countries": "países",
  "Every Jimin song on Spotify, solo and features, with total streams and daily gains. Data as of {date}, Spotify play counts.": "Todas las canciones de Jimin en Spotify, en solitario y colaboraciones, con reproducciones totales y aumentos diarios. Datos al {date}, según los contadores de Spotify.",
  "streams across his solo and featured songs on Spotify as of {date}": "reproducciones de sus canciones en solitario y colaboraciones en Spotify al {date}",
  "Streams gained on {date}.": "Reproducciones añadidas el {date}.",
  "{n} Billion": "{n} mil millones",
  "{n} songs · daily gains for {date}": "{n} canciones · aumentos diarios del {date}",
  "{n} featured songs · daily gains for {date}": "{n} colaboraciones · aumentos diarios del {date}",
  "{n} daily snapshots, {start} to {end}. Daily = change in total play counts since the previous snapshot. History grows by one point each day.": "{n} registros diarios, del {start} al {end}. Diarias = variación del total de reproducciones respecto al registro anterior. El historial añade un punto cada día.",
  "\"Who\" daily streams summed over the country charts it appears on ({countries}).": "Suma de las reproducciones diarias de \"Who\" en las listas de los países donde aparece ({countries}).",
  "Projected from each song's average daily streams over the last {n} days (up to 7) as of {date}, assuming that pace continues. These are estimates, not predictions or official figures. Songs without a daily figure are left out.": "Estimación basada en el promedio de reproducciones diarias de cada canción durante los últimos {n} días (hasta 7), al {date}, suponiendo que se mantenga ese ritmo. Son estimaciones, no predicciones ni cifras oficiales. Se excluyen las canciones sin una cifra diaria.",
  "≈ {date} (estimate)": "≈ {date} (estimación)",
  "Solo song · #{rank} of {total} by total streams · data as of {date}": "Canción en solitario · n.º {rank} de {total} por reproducciones totales · datos al {date}",
  "Featured song · #{rank} of {total} by total streams · data as of {date}": "Colaboración · n.º {rank} de {total} por reproducciones totales · datos al {date}",
  "{change} vs day before": "{change} respecto al día anterior",
  "Daily streams {start} to {end}. Hover or tap a point for the exact figure.": "Reproducciones diarias del {start} al {end}. Pasa el cursor sobre un punto o tócalo para ver la cifra exacta.",
  "{song} daily streams: {values}": "Reproducciones diarias de {song}: {values}",
  "Daily streams: {values}": "Reproducciones diarias: {values}",
  "All-time total streams: {values}": "Reproducciones totales acumuladas: {values}",
  "Who daily streams across charting countries: {values}": "Reproducciones diarias de Who en los países en cuyas listas aparece: {values}",
  "\"Who\" on Spotify's daily country charts for {date}. Source: Spotify charts. Each chart keeps its own verified date.": "\"Who\" en las listas diarias de Spotify por país del {date}. Fuente: listas de Spotify. Cada lista conserva su propia fecha verificada.",
  "Jimin's solo songs on Spotify's USA Daily chart, all-time, as of {date}. Source:": "Historial de las canciones en solitario de Jimin en la lista diaria de Spotify en Estados Unidos, al {date}. Fuente:",
  "Jimin's solo songs on Spotify's South Korea Daily chart, all-time, as of {date}. Source:": "Historial de las canciones en solitario de Jimin en la lista diaria de Spotify en Corea del Sur, al {date}. Fuente:",
  "Spotify all-time streams per song as of {date} (updates daily). Source: Spotify.": "Reproducciones acumuladas por canción en Spotify al {date} (actualización diaria). Fuente: Spotify.",
  "{n} billion+ streams": "Más de {n} mil millones de reproducciones",
  "{n} million+ streams": "Más de {n} millones de reproducciones",
  "Index {n} ·": "Índice {n} ·",
  "{title} cover art": "Portada de {title}",
  "Label: {label} · Producers: {producers}": "Sello: {label} · Productores: {producers}",
  "Album · {date}": "Álbum · {date}",
  "Album version · {date}": "Versión del álbum · {date}",
  "Single · {date}": "Sencillo · {date}",
  "Pre-release single · {date}": "Sencillo de adelanto · {date}",
  "Soundtrack · {artists} · {date}": "Banda sonora · {artists} · {date}",
  "OST · Jimin & HA SUNG WOON · {date}": "Banda sonora · Jimin & HA SUNG WOON · {date}",
  "TAEYANG feat. Jimin of BTS · {date}": "TAEYANG con Jimin de BTS · {date}",
  "Album date on Spotify; the VIBE single was released {date}.": "Fecha del álbum en Spotify; el sencillo VIBE se lanzó el {date}.",
  "{n} days": "{n} días",
  "{date} · {n} yr anniversary": "{date} · {n}.º aniversario",
  "Birthday · {year}": "Cumpleaños · {year}",
  "Release · {year}": "Lanzamiento · {year}",
  "Achievement · {year}": "Logro · {year}",
  "#1 boy group member brand reputation ({month})": "N.º 1 en reputación de marca de miembros de grupos masculinos ({month})",
  "\"{song}\" (TAEYANG feat. Jimin)": "\"{song}\" (TAEYANG con Jimin)",
  "{n} post · newest {date}. Posts load from Instagram/TikTok; if an embed is blocked, use the link.": "{n} publicación · más reciente: {date}. Las publicaciones se cargan desde Instagram/TikTok; si se bloquea una publicación integrada, usa el enlace.",
  "{n} posts · newest {date}. Posts load from Instagram/TikTok; if an embed is blocked, use the link.": "{n} publicaciones · más reciente: {date}. Las publicaciones se cargan desde Instagram/TikTok; si se bloquea una publicación integrada, usa el enlace.",
  "{n} match": "{n} coincidencia",
  "{n} matches": "{n} coincidencias",
  "Data updated {date}": "Datos actualizados el {date}",
  "Total streams: {n}": "Reproducciones totales: {n}",
  "Last updated: {date}. The figures are Spotify's public play counts. Daily streams are the change in each track's play count between one daily snapshot and the next. Selected song totals may be refreshed from Spotify's live play counter; these are separate from the dated daily gains. Country charts are dated {chartDate}.": "Última actualización: {date}. Las cifras son los contadores públicos de reproducciones de Spotify. Las reproducciones diarias son la variación del contador de cada canción entre un registro diario y el siguiente. Los totales de algunas canciones pueden actualizarse a partir del contador en directo de Spotify; son independientes de los aumentos diarios fechados. Las listas por país corresponden al {chartDate}.",
  "\"{song}\" by Jimin has {streams} streams on Spotify{daily}. Next: {milestone}{eta}. via @JIMERICA": "\"{song}\" de Jimin tiene {streams} reproducciones en Spotify{daily}. Próximo hito: {milestone}{eta}. vía @JIMERICA",
  " (+{n} on {date})": " (+{n} el {date})",
  " in ~{n} days": " en unos {n} días",
  "{month} {day}, {year}": "{day} de {month} de {year}",
  "{month} {year}": "{month} de {year}",
  "{month} · {n}": "{month} · {n}",
  "Archive of Jimin's Achievements | JIMERICA": "Archivo de logros de Jimin | JIMERICA",
  "1 billion+ streams": "1.000 millones o más reproducciones",
  "1 match": "1 coincidencia"
};
const ES_BLOCK={
  "g1": "<strong>Usa una cuenta de Spotify y mantén la sesión iniciada.</strong> Las reproducciones de las cuentas gratuitas y Premium cuentan; Premium te permite elegir canciones libremente.",
  "g2": "<strong>Escucha la canción completa.</strong> Una reproducción cuenta después de unos 30 segundos, pero escucharla hasta el final es la forma natural de apoyarlo.",
  "g3": "<strong>Sube el volumen y mantén la aplicación activa.</strong> Las reproducciones silenciadas o sin sonido podrían no contar.",
  "g4": "<strong>Intercala otras canciones.</strong> Crea listas que combinen canciones de Jimin con las de otros artistas en lugar de repetir una sola canción sin parar.",
  "g5": "<strong>Guarda su música y síguelo.</strong> Dale a me gusta a sus canciones, guarda los álbumes y sigue su perfil de artista.",
  "g6": "<strong>Comparte enlaces.</strong> Envía enlaces de Spotify a tus amigos; los nuevos oyentes son quienes más marcan la diferencia.",
  "gtip": "Respeta las condiciones de uso de Spotify: nada de bots, cuentas falsas ni reproducciones pagadas. Estas se filtran y pueden perjudicar al artista. Consulta las páginas de Canciones e Hitos para ver qué canciones están cerca de su próximo hito.",
  "bio1": "Park Ji-min (박지민), conocido como Jimin, es un cantante, compositor y bailarín surcoreano, nacido el 13 de octubre de 1995 en Busan. Estudió danza contemporánea en Busan High School of Arts, se incorporó a Big Hit Entertainment tras superar las audiciones en 2012 y se graduó en Korean Arts High School en 2014.",
  "bio2": "Debutó como miembro de BTS en 2013. Bajo el nombre de BTS lanzó las canciones en solitario \"Lie\" (2016), \"Serendipity\" (2017) y \"Filter\" (2020), y su primera canción acreditada en solitario, \"Promise\", salió el 30 de diciembre de 2018.",
  "bio3": "Su primer álbum solista, FACE, se lanzó el 24 de marzo de 2023; su sencillo \"Like Crazy\" se convirtió en el primer n.º 1 del Billboard Hot 100 de un artista surcoreano en solitario. Su segundo álbum, MUSE, llegó el 19 de julio de 2024, con \"Who\" como sencillo principal.",
  "bio4": "Jimin se alistó para cumplir el servicio militar obligatorio el 12 de diciembre de 2023. Sirvió como soldado en servicio activo en una unidad de artillería de la 5.ª División de Infantería del Ejército y fue dado de baja el 11 de junio de 2025.",
  "site1": "JIMERICA es un archivo independiente de fans sobre las reproducciones de Jimin en Spotify y sus logros, actualizado a diario. Consulta la página de <a href=\"./achievements.html\">Logros</a> para conocer sus récords y premios."
};

const ES_MONTHS=['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const esDate=(m,d,y)=>`${+d} de ${ES_MONTHS[m]} de ${y}`;
const ES_PAT=[
[/^Every Jimin song on Spotify, solo and features, with total streams and daily gains\. Data as of (.+), Spotify play counts\.$/,m=>`Todas las canciones de Jimin en Spotify, como solista y en colaboraciones, con reproducciones totales y diarias. Datos del ${m[1]}, según los contadores de Spotify.`],
[/^streams across his solo and featured songs on Spotify as of (.+)$/,m=>`de reproducciones de sus canciones como solista y colaboraciones en Spotify hasta el ${m[1]}`],
[/^Streams gained on (.+)\.$/,m=>`Reproducciones obtenidas el ${m[1]}.`],
[/^([\d.]+) Billion$/,m=>`${m[1].replace('.',',')} mil millones`],
[/^(\d+) (featured )?songs · daily gains for (.+)$/,m=>`${m[1]} canciones${m[2]?' en colaboración':''} · reproducciones diarias del ${m[3]}`],
[/^(\d+) daily snapshots, (\S+) to (\S+)\. Daily = change in total play counts since the previous snapshot\. History grows by one point each day\.$/,m=>`${m[1]} registros diarios, del ${m[2]} al ${m[3]}. Diario = variación del contador total desde el registro anterior. Cada día se añade un punto al historial.`],
[/^"Who" daily streams summed over the country charts it appears on \((.+)\)\.$/,m=>`Suma de las reproducciones diarias de "Who" en las listas nacionales donde aparece (${m[1].replace(/ countries/g,' países')}).`],
[/^Projected from each song's average daily streams over the last (\d+) days \(up to 7\) as of (.+), assuming that pace continues\. These are estimates, not predictions or official figures\. Songs without a daily figure are left out\.$/,m=>`Estimación basada en el promedio de reproducciones diarias de cada canción en los últimos ${m[1]} días (hasta 7), al ${m[2]}, suponiendo que ese ritmo continúe. Son estimaciones, no predicciones ni cifras oficiales. Se excluyen las canciones sin datos diarios.`],
[/^≈ (.+) \(estimate\)$/,m=>`≈ ${m[1]} (estimación)`],
[/^(Solo|Featured) song · #(\d+) of (\d+) by total streams · data as of (.+)$/,m=>`Canción ${m[1]==='Solo'?'solista':'en colaboración'} · n.º ${m[2]} de ${m[3]} por reproducciones totales · datos del ${m[4]}`],
[/^([▲▼] )?([+\-−]?[\d,]+) vs day before$/,m=>`${m[1]||''}${m[2]} respecto al día anterior`],
[/^Daily streams (\S+) to (\S+)\. Hover or tap a point for the exact figure\.$/,m=>`Reproducciones diarias del ${m[1]} al ${m[2]}. Pasa el cursor o toca un punto para ver la cifra exacta.`],
[/^(.+) daily streams: (.+)$/,m=>`Reproducciones diarias de ${m[1]==='All songs'?'todas las canciones':m[1]}: ${m[2]}`],
[/^Daily streams: (.+)$/,m=>`Reproducciones diarias: ${m[1]}`],
[/^All-time total streams: (.+)$/,m=>`Reproducciones totales acumuladas: ${m[1]}`],
[/^Who daily streams across charting countries: (.+)$/,m=>`Reproducciones diarias de Who en los países donde figura en listas: ${m[1]}`],
[/^"Who" on Spotify's daily country charts for (\S+)\. Source: Spotify charts\. Each chart keeps its own verified date\.$/,m=>`"Who" en las listas diarias de Spotify por país del ${m[1]}. Fuente: listas de Spotify. Cada lista conserva su propia fecha verificada.`],
[/^Jimin's solo songs on Spotify's (USA|South Korea) Daily chart, all-time, as of (.+)\. Source:$/,m=>`Historial de las canciones solistas de Jimin en la lista diaria de Spotify de ${m[1]==='USA'?'Estados Unidos':'Corea del Sur'}, al ${m[2]}. Fuente:`],
[/^Spotify all-time streams per song as of (.+) \(updates daily\)\. Source: Spotify\.$/,m=>`Reproducciones acumuladas por canción en Spotify al ${m[1]} (actualización diaria). Fuente: Spotify.`],
[/^(\d+) (billion|million)\+ streams$/,m=>`${m[1]} ${m[2]==='billion'?'mil millones':'millones'} o más reproducciones`],
[/^Index ([\d,]+)( ·)?$/,m=>`Índice ${m[1]}${m[2]||''}`],
[/^(.+) cover art$/,m=>`Portada de ${m[1]}`],
[/^Label: (.+) · Producers: (.+)$/,m=>`Sello: ${m[1]} · Productores: ${m[2]}`],
[/^(Album|Album version|Single|Pre-release single) · (.+)$/,m=>`${{'Album':'Álbum','Album version':'Versión del álbum','Single':'Sencillo','Pre-release single':'Sencillo de adelanto'}[m[1]]} · ${m[2]}`],
[/^Soundtrack · (.+) · (.+)$/,m=>`Banda sonora · ${m[1]} · ${m[2]}`],
[/^Album date on Spotify; the VIBE single was released (.+)\.$/,m=>`Fecha del álbum en Spotify; el sencillo VIBE se publicó el ${m[1]}.`],
[/^(\d+) days$/,m=>`${m[1]} días`],
[/^(.+) · (\d+) yr anniversary$/,m=>`${m[1]} · ${m[2]}.º aniversario`],
[/^(Birthday|Release|Achievement|Service) · (\d{4})$/,m=>`${{Birthday:'Cumpleaños',Release:'Lanzamiento',Achievement:'Logro',Service:'Servicio'}[m[1]]} · ${m[2]}`],
 [/^(.+) cover art$/,m=>`Portada de ${m[1]}`],
 [/^(\d+)% toward (.+)$/,m=>`${m[1]} % hacia ${m[2]}`],
 [/^(\d+) post(s?) · newest (.+)\. Each card links to the original Instagram or TikTok post\.$/,m=>`${m[1]} publicación${m[1]==='1'?'':'es'} · la más reciente: ${m[3]}. Cada tarjeta enlaza a la publicación original de Instagram o TikTok.`],
[/^#1 boy group member brand reputation \((.+)\)$/,m=>`N.º 1 en reputación de marca individual de integrantes de grupos masculinos (${m[1]})`],
[/^"(.+)" \(TAEYANG feat\. Jimin\)$/,m=>`"${m[1]}" (TAEYANG con Jimin)`],
[/^(\d+) posts? · newest (.+)\. Posts load from Instagram\/TikTok; if an embed is blocked, use the link\.$/,m=>`${m[1]} publicaciones · la más reciente: ${m[2]}. Las publicaciones se cargan desde Instagram/TikTok; si el contenido incrustado está bloqueado, usa el enlace.`],
[/^(\d+) match(es)?$/,m=>`${m[1]} ${m[1]==='1'?'coincidencia':'coincidencias'}`],
[/^Data updated (.+)$/,m=>`Datos actualizados el ${m[1]}`],
[/^Total streams: (.+)$/,m=>`Reproducciones totales: ${m[1]}`],
[/^Today's goal \((.+)\): (.+)\+ streams to beat (.+)$/,m=>`Objetivo de hoy (${m[1]}): ${m[2]}+ reproducciones para superar el ${m[3]}`],
[/^(.+) was bigger$/,m=>`${m[1]} fue mayor`],
[/^(.+) daily streams$/,m=>`Reproducciones diarias de ${m[1]}`],
[/^(.+) · (\d+)$/,m=>`${ES[m[1]]||m[1]} · ${m[2]}`]
];
// Official updates UI and original-post summaries.
Object.assign(KO,{"Official updates": "공식 소식", "Announcements from official and partner accounts about Jimin.": "지민 관련 공식·파트너 계정의 소식.", "Filter official posts": "공식 게시물 필터", "All": "전체", "X": "X", "Instagram": "인스타그램", "Brand partner": "브랜드 파트너", "Label": "소속사", "BTS official": "BTS 공식", "Press": "언론", "Open source ↗": "원문 열기 ↗", "Source: official accounts": "출처: 공식 계정", "Only Jimin-related posts from verified official or partner accounts. Not a full brand feed.": "검증된 공식·파트너 계정의 지민 관련 게시물만 모읍니다. 브랜드 전체 피드는 아닙니다.", "Show more": "더 보기", "X dates use Pacific time (PT); Instagram dates are as published.": "X 날짜는 태평양 시간(PT) 기준이며, Instagram 날짜는 게시물에 표시된 날짜입니다.", "No verified posts in this category yet.": "이 분류에는 아직 확인된 게시물이 없습니다.", "Please enable JavaScript to see the official updates.": "공식 소식을 보려면 JavaScript를 켜 주세요.", "La’dor shares a new moment": "라도르의 새로운 순간", "La’dor shares a new update, wishing the moment could last forever.": "라도르가 이 순간이 영원했으면 좋겠다는 메시지와 함께 새 소식을 전했습니다.", "Happy Jimin Day": "해피 지민 데이", "1013 Congratulations! Happy Jimin Day 🎂 #지민 #Jimin #HAPPYJIMINDAY": "1013 Congratulations!\nHappy Jimin Day 🎂\n#지민 #Jimin #HAPPYJIMINDAY", "LADOR Jimin mini photobook at Olive Young": "아도르 지민 미니 포토북, 올리브영 판매", "The LADOR Jimin mini photobook is now available at Olive Young (limited quantity).": "아도르 지민 미니 포토북은 지금 올리브영에서 만나볼 수 있어요. 한정 수량으로 소진 시 조기 종료될 수 있습니다.", "LADOR hair perfume campaign with Jimin": "아도르 헤어퍼퓸 캠페인 (지민)", "Wrap Me With The Hair Perfume — a soft lingering scent for your hair. #LADOR #지민 #BTS_Jimin": "오로라처럼 은은하게 퍼지고, 별빛처럼 부드럽게 머무는 향. 나를 감싸는 은은한 향기 WRAP ME WITH THE HAIR PERFUME #LADOR #지민 #BTS_Jimin #헤어퍼퓸", "Billboard: Jimin posts on TikTok": "빌보드: 지민 틱톡 게시", "ARMY, Stay Calm: Jimin of BTS Has Finally Posted on TikTok (links Billboard coverage of his personal TikTok debut).": "ARMY, Stay Calm: Jimin of BTS Has Finally Posted on TikTok — 지민 개인 틱톡 첫 게시 관련 빌보드 기사.", "BIGHIT: 'Who' RIAJ Platinum": "빅히트: 'Who' 日레코드협회 플래티넘", "[Article] BTS Jimin's 'Who' certified Platinum by the Recording Industry Association of Japan.": "[기사] #방탄소년단 #지민 'Who' 日레코드협회 플래티넘 인증", "BIGHIT: 'Who' surpasses 2.5B Spotify streams": "빅히트: 'Who' 스포티파이 25억 돌파", "[Article] BTS Jimin's 'Who' surpasses 2.5 billion streams on Spotify.": "[기사] #방탄소년단 #지민 'Who', 스포티파이 25억 돌파", "NORMAL stage cam — Jimin focus (Busan)": "NORMAL 스테이지 캠 — 지민 포커스 (부산)", "'NORMAL (Korean Ver.)' Stage CAM (#Jimin focus) @ BTS WORLD TOUR 'ARIRANG' IN BUSAN.": "'NORMAL (Korean Ver.)' Stage CAM (#Jimin focus) @ BTS WORLD TOUR 'ARIRANG' IN BUSAN", "LADOR: Monday cure with Jimin": "아도르: 지민과 함께하는 월요병 극복", "Happy photos delivered — today's Monday cure is with Jimin.": "모르겠고 일단 행복해지는 사진 전달드리러 왔습니다. 아돌즤기만 행복해지기엔 쬐끔 미안 하니까요! 오늘의 월요병 극복은 지민 님 과 함께해요."});
Object.assign(ES,{"Official updates": "Novedades oficiales", "Announcements from official and partner accounts about Jimin.": "Anuncios de cuentas oficiales y asociadas sobre Jimin.", "Filter official posts": "Filtrar novedades oficiales", "All": "Todas", "X": "X", "Instagram": "Instagram", "Brand partner": "Marca asociada", "Label": "Sello", "BTS official": "BTS oficial", "Press": "Prensa", "Open source ↗": "Abrir fuente ↗", "Source: official accounts": "Fuente: cuentas oficiales", "Only Jimin-related posts from verified official or partner accounts. Not a full brand feed.": "Solo publicaciones relacionadas con Jimin de cuentas oficiales o asociadas verificadas. No es el feed completo de la marca.", "Show more": "Mostrar más", "X dates use Pacific time (PT); Instagram dates are as published.": "Las fechas de X usan la hora del Pacífico (PT); las de Instagram son las publicadas.", "No verified posts in this category yet.": "Todavía no hay publicaciones verificadas en esta categoría.", "Please enable JavaScript to see the official updates.": "Activa JavaScript para ver las novedades oficiales.", "La’dor shares a new moment": "La’dor comparte un nuevo momento", "La’dor shares a new update, wishing the moment could last forever.": "La’dor comparte una novedad y expresa su deseo de que el momento dure para siempre.", "Happy Jimin Day": "Feliz Día de Jimin", "1013 Congratulations! Happy Jimin Day 🎂 #지민 #Jimin #HAPPYJIMINDAY": "1013 ¡Felicidades! Happy Jimin Day 🎂 #지민 #Jimin #HAPPYJIMINDAY", "LADOR Jimin mini photobook at Olive Young": "Minifotolibro de Jimin de LADOR en Olive Young", "The LADOR Jimin mini photobook is now available at Olive Young (limited quantity).": "El minifotolibro de Jimin de LADOR ya está disponible en Olive Young (cantidad limitada).", "LADOR hair perfume campaign with Jimin": "Campaña de perfume capilar LADOR con Jimin", "Wrap Me With The Hair Perfume — a soft lingering scent for your hair. #LADOR #지민 #BTS_Jimin": "Un aroma suave que envuelve el cabello. WRAP ME WITH THE HAIR PERFUME #LADOR #지민 #BTS_Jimin", "Billboard: Jimin posts on TikTok": "Billboard: Jimin publica en TikTok", "ARMY, Stay Calm: Jimin of BTS Has Finally Posted on TikTok (links Billboard coverage of his personal TikTok debut).": "ARMY, Stay Calm: Jimin of BTS Has Finally Posted on TikTok — cobertura de Billboard sobre su debut personal en TikTok.", "BIGHIT: 'Who' RIAJ Platinum": "BIGHIT: 'Who' Platino RIAJ", "[Article] BTS Jimin's 'Who' certified Platinum by the Recording Industry Association of Japan.": "[Artículo] 'Who' de Jimin (BTS) certificado Platino por la Asociación de la Industria Discográfica de Japón.", "BIGHIT: 'Who' surpasses 2.5B Spotify streams": "BIGHIT: 'Who' supera 2.500 M de streams en Spotify", "[Article] BTS Jimin's 'Who' surpasses 2.5 billion streams on Spotify.": "[Artículo] 'Who' de Jimin (BTS) supera los 2.500 millones de reproducciones en Spotify.", "NORMAL stage cam — Jimin focus (Busan)": "Stage cam de NORMAL — foco en Jimin (Busan)", "'NORMAL (Korean Ver.)' Stage CAM (#Jimin focus) @ BTS WORLD TOUR 'ARIRANG' IN BUSAN.": "'NORMAL (Korean Ver.)' Stage CAM (#Jimin focus) @ BTS WORLD TOUR 'ARIRANG' IN BUSAN", "LADOR: Monday cure with Jimin": "LADOR: antídoto del lunes con Jimin", "Happy photos delivered — today's Monday cure is with Jimin.": "Fotos que alegran el día: el antídoto del lunes es con Jimin."});
Object.assign(KO,{"LADOR Angel Muguet campaign with ambassador Jimin": "아도르 엔젤뮤게 캠페인 (엠버서더 지민)", "A pure trail of muguet — NEW Angel Muguet campaign with LADOR ambassador Jimin.": "천사가 내려온 듯 투명하게 울려 퍼지는 은방울 꽃의 맑고 청초한 향의 여운. 아도르 엠버서더 지민과 함께한 NEW 엔젤뮤게 캠페인.", "LADOR HK — Hair Waits Care (Angel Muguet / Jimin campaign)": "아도르 홍콩 — Hair Waits Care (지민 캠페인)", "Hair Waits Care — fragrance sinks deeper after a long wait (regional official post for the June 2026 Jimin × LADOR treatment campaign).": "Hair Waits Care — 오래 기다린 시간 끝에 향은 더 깊게, 결은 더 부드럽게 (2026년 6월 지민×아도르 캠페인 지역 공식 게시).", "Dior names Jimin global ambassador": "디올, 지민 글로벌 앰버서더 발표", "The House is thrilled to announce @J.M from #BTS as new Dior global ambassador.": "디올이 #BTS의 @J.M을 새 글로벌 앰버서더로 발표.", "Tiffany: House ambassador Jimin at The Landmark": "티파니: 하우스 앰버서더 지민, The Landmark 방문", "House ambassador #Jimin of BTS visits The Landmark in New York City.": "하우스 앰버서더 #Jimin of BTS가 뉴욕 The Landmark를 방문."});
Object.assign(ES,{"LADOR Angel Muguet campaign with ambassador Jimin": "Campaña Angel Muguet de LADOR con el embajador Jimin", "A pure trail of muguet — NEW Angel Muguet campaign with LADOR ambassador Jimin.": "Un rastro puro de muguet: nueva campaña Angel Muguet con el embajador de LADOR, Jimin.", "LADOR HK — Hair Waits Care (Angel Muguet / Jimin campaign)": "LADOR HK — Hair Waits Care (campaña de Jimin)", "Hair Waits Care — fragrance sinks deeper after a long wait (regional official post for the June 2026 Jimin × LADOR treatment campaign).": "Hair Waits Care — el aroma se profundiza tras una larga espera (publicación oficial regional de la campaña Jimin × LADOR de junio 2026).", "Dior names Jimin global ambassador": "Dior nombra a Jimin embajador global", "The House is thrilled to announce @J.M from #BTS as new Dior global ambassador.": "La Maison anuncia a @J.M de #BTS como nuevo embajador global de Dior.", "Tiffany: House ambassador Jimin at The Landmark": "Tiffany: el embajador de la casa Jimin en The Landmark", "House ambassador #Jimin of BTS visits The Landmark in New York City.": "El embajador de la casa #Jimin de BTS visita The Landmark en Nueva York."});
// Overview jump links and Songs trend column.
Object.assign(KO,{"Numbers":"숫자","Daily gains":"일일 증가","Top songs":"인기곡","Trend":"추이","View trend →":"추이 보기 →","On this page":"이 페이지"});
Object.assign(ES,{"Numbers":"Cifras","Daily gains":"Subidas diarias","Top songs":"Más escuchadas","Trend":"Tendencia","View trend →":"Ver tendencia →","On this page":"En esta página"});
Object.assign(KO,{"Next Milestone":"다음 마일스톤","Today at a glance": "오늘 한눈에 보기", "Data as of": "데이터 기준일", "New this week": "이번 주 새 소식", "Next": "다음", "The newest posts from Jimin and official accounts in the last 7 days.": "최근 7일간 지민과 공식 계정의 최신 게시물입니다.", "Nothing new this week, so here are the latest posts.": "이번 주 새 게시물이 없어 가장 최근 게시물을 보여드립니다.", "Jimin on Instagram": "지민 인스타그램", "Jimin on TikTok": "지민 틱톡", "New Instagram post": "새 인스타그램 게시물", "New TikTok video": "새 틱톡 영상", "Open ↗": "열기 ↗", "All official updates →": "모든 공식 소식 →", "All Jimin posts →": "지민 게시물 전체 →"});
Object.assign(ES,{"Next Milestone":"Próximo hito","Today at a glance": "Hoy de un vistazo", "Data as of": "Datos al", "New this week": "Novedades de la semana", "Next": "Próximo", "The newest posts from Jimin and official accounts in the last 7 days.": "Las publicaciones más recientes de Jimin y cuentas oficiales en los últimos 7 días.", "Nothing new this week, so here are the latest posts.": "No hay novedades esta semana, así que aquí están las publicaciones más recientes.", "Jimin on Instagram": "Jimin en Instagram", "Jimin on TikTok": "Jimin en TikTok", "New Instagram post": "Nueva publicación de Instagram", "New TikTok video": "Nuevo video de TikTok", "Open ↗": "Abrir ↗", "All official updates →": "Todas las novedades oficiales →", "All Jimin posts →": "Todas las publicaciones de Jimin →"});
Object.assign(KO,{"Updates": "소식", "Jimin's posts": "지민 게시물", "Official": "공식", "Jimin's own posts and official announcements about him, in one place.": "지민의 게시물과 공식 발표를 한곳에서 확인하세요.", "Source: Jimin's accounts and official accounts": "출처: 지민 계정 및 공식 계정", "See all updates →": "모든 소식 보기 →", "Show updates": "소식 보기"});
Object.assign(ES,{"Updates": "Novedades", "Jimin's posts": "Publicaciones de Jimin", "Official": "Oficial", "Jimin's own posts and official announcements about him, in one place.": "Las publicaciones de Jimin y los anuncios oficiales sobre él, en un solo lugar.", "Source: Jimin's accounts and official accounts": "Fuente: cuentas de Jimin y cuentas oficiales", "See all updates →": "Ver todas las novedades →", "Show updates": "Mostrar novedades"});
Object.assign(KO,{"Total chart streams":"차트 누적 스트리밍"});
Object.assign(ES,{"Total chart streams":"Reproducciones totales en la lista"});

Object.assign(KO,{"Service":"복무","Jimin enlisted for military service":"지민 입대","Jimin discharged from military service":"지민 전역","\"Like Crazy\" No. 1 on the Billboard Hot 100":"\"Like Crazy\" 빌보드 핫100 1위","Dates use Pacific time (PT). \"Promise\" was posted December 31, 2018, 00:01 KST, which is December 30 in PT.":"날짜는 태평양 시간(PT) 기준입니다. \"Promise\"는 2018년 12월 31일 00:01(한국 시간)에 공개되었으며, PT로는 12월 30일입니다.","\"Christmas Love\"":"\"Christmas Love\"","\"Promise\"":"\"Promise\""});
Object.assign(ES,{"Service":"Servicio","Jimin enlisted for military service":"Jimin se alistó en el servicio militar","Jimin discharged from military service":"Jimin recibió la baja del servicio militar","\"Like Crazy\" No. 1 on the Billboard Hot 100":"\"Like Crazy\" n.º 1 en el Billboard Hot 100","Dates use Pacific time (PT). \"Promise\" was posted December 31, 2018, 00:01 KST, which is December 30 in PT.":"Las fechas usan la hora del Pacífico (PT). \"Promise\" se publicó el 31 de diciembre de 2018 a las 00:01 KST, que es el 30 de diciembre en PT.","\"Christmas Love\"":"\"Christmas Love\"","\"Promise\"":"\"Promise\""});

Object.assign(KO,{"Same as the day before":"전날과 같음","Both days were equal":"이틀 모두 같음"});
Object.assign(ES,{"Same as the day before":"Igual que el día anterior","Both days were equal":"Los dos días fueron iguales"});
Object.assign(KO,{"Search the site":"사이트 검색","Search songs, albums, dates…":"노래, 앨범, 날짜 검색…","No matches":"검색 결과 없음","Album":"앨범","Single":"싱글","Featured release":"피처링","7-day trend":"최근 7일 추이","Open post ↗":"게시물 열기 ↗","Open TikTok profile ↗":"틱톡 프로필 열기 ↗","New Instagram post":"새 인스타그램 게시물","New TikTok video":"새 틱톡 영상","Each card links to the original Instagram or TikTok post.":"각 카드는 원본 인스타그램 또는 틱톡 게시물로 연결됩니다.","The official TikTok account, linked here rather than embedded, so this page stays in the site's dark style.":"공식 틱톡 계정 링크입니다. 페이지 스타일을 유지하기 위해 임베드 대신 링크만 둡니다.","Sun":"일","Mon":"월","Tue":"화","Wed":"수","Thu":"목","Fri":"금","Sat":"토"});
Object.assign(ES,{"Search the site":"Buscar en el sitio","Search songs, albums, dates…":"Buscar canciones, álbumes, fechas…","No matches":"Sin resultados","Album":"Álbum","Single":"Sencillo","Featured release":"Colaboración","7-day trend":"Tendencia de 7 días","Open post ↗":"Abrir publicación ↗","Open TikTok profile ↗":"Abrir perfil de TikTok ↗","New Instagram post":"Nueva publicación de Instagram","New TikTok video":"Nuevo vídeo de TikTok","Each card links to the original Instagram or TikTok post.":"Cada tarjeta enlaza a la publicación original de Instagram o TikTok.","The official TikTok account, linked here rather than embedded, so this page stays in the site's dark style.":"La cuenta oficial de TikTok, enlazada aquí en lugar de incrustada, para mantener el estilo oscuro del sitio.","Sun":"dom","Mon":"lun","Tue":"mar","Wed":"mié","Thu":"jue","Fri":"vie","Sat":"sáb"});

// Nov 10, 2026 features: Stream on Spotify button, milestone alert banner, weekly recap (remove with their features; see FANSITE.md).
Object.assign(KO,{"Stream on Spotify ↗":"Spotify에서 듣기 ↗","Open this track on Spotify":"Spotify에서 이 곡 열기","Milestone alert":"마일스톤 알림","Estimate":"예상","is about to pass":"곧 돌파:","See all upcoming milestones →":"다가오는 마일스톤 모두 보기 →","See upcoming milestones →":"다가오는 마일스톤 보기 →","Estimate: assumes each song keeps its recent 7-day average pace.":"예상치입니다. 각 곡이 최근 7일 평균 속도를 유지한다고 가정합니다.",
"Weekly recap":"주간 요약","Streams in the last 7 days":"최근 7일 스트리밍","All songs combined":"전체 곡 합계","vs previous 7 days":"이전 7일 대비","Biggest climber":"가장 크게 오른 곡","No song gained on the previous 7 days":"이전 7일보다 늘어난 곡이 없습니다","Most streamed this week":"이번 주 최다 스트리밍","Milestones crossed":"달성한 마일스톤","None this week":"이번 주 없음","No song passed a new round-number milestone.":"새로 넘어선 마일스톤이 있는 곡이 없습니다.","Daily streams, all songs":"일일 스트리밍 (전체 곡)","Source: Spotify. Daily gains use Pacific dates and the same daily snapshots as the rest of the site.":"출처: Spotify. 일일 증가는 태평양 시간(PT) 날짜와 사이트 전체와 동일한 일일 기록을 사용합니다."});
Object.assign(ES,{"Stream on Spotify ↗":"Escuchar en Spotify ↗","Open this track on Spotify":"Abrir esta canción en Spotify","Milestone alert":"Alerta de hito","Estimate":"Estimación","is about to pass":"está a punto de superar","See all upcoming milestones →":"Ver todos los próximos hitos →","See upcoming milestones →":"Ver próximos hitos →","Estimate: assumes each song keeps its recent 7-day average pace.":"Estimación: supone que cada canción mantiene su ritmo medio reciente de 7 días.",
"Weekly recap":"Resumen semanal","Streams in the last 7 days":"Reproducciones en los últimos 7 días","All songs combined":"Todas las canciones juntas","vs previous 7 days":"frente a los 7 días anteriores","Biggest climber":"Mayor subida","No song gained on the previous 7 days":"Ninguna canción subió respecto a los 7 días anteriores","Most streamed this week":"Más escuchada de la semana","Milestones crossed":"Hitos alcanzados","None this week":"Ninguno esta semana","No song passed a new round-number milestone.":"Ninguna canción superó un nuevo hito redondo.","Daily streams, all songs":"Reproducciones diarias, todas las canciones","Source: Spotify. Daily gains use Pacific dates and the same daily snapshots as the rest of the site.":"Fuente: Spotify. Las subidas diarias usan fechas del Pacífico y las mismas instantáneas diarias que el resto del sitio."});
PAT.push(
 [/^\(est\. (.+)\)$/,m=>`(예상 ${m[1]})`],
 [/^\+([\d,]+) streams$/,m=>`+${m[1]} 스트리밍`],
 [/^\+([\d,]+) vs previous 7 days$/,m=>`이전 7일 대비 +${m[1]}`],
 [/^(?:([+−]?[\d.]+%) · )?previous: ([\d,]+)$/,m=>`${m[1]?m[1]+' · ':''}이전 ${m[2]}`],
 [/^: reached (.+)$/,m=>`: ${m[1]} 달성`],
 [/^Needs 14 days of history\. Available from (.+)\.$/,m=>`14일치 기록이 필요합니다. ${m[1]}부터 확인할 수 있습니다.`]);
ES_PAT.push(
 [/^\(est\. (.+)\)$/,m=>`(est. ${m[1]})`],
 [/^\+([\d,]+) streams$/,m=>`+${m[1]} reproducciones`],
 [/^\+([\d,]+) vs previous 7 days$/,m=>`+${m[1]} frente a los 7 días anteriores`],
 [/^(?:([+−]?[\d.]+%) · )?previous: ([\d,]+)$/,m=>`${m[1]?m[1]+' · ':''}anterior: ${m[2]}`],
 [/^: reached (.+)$/,m=>`: alcanzó ${m[1]}`],
 [/^Needs 14 days of history\. Available from (.+)\.$/,m=>`Requiere 14 días de historial. Disponible desde el ${m[1]}.`]);

const ES_TEMPLATES=Object.entries(ES).filter(([k])=>k.includes('{')&&!/^\{month\}/.test(k)).map(([k,v])=>{
 const names=[];let pattern='',pos=0;const re=/\{(\w+)\}/g;let m;const esc=x=>x.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 while((m=re.exec(k))){pattern+=esc(k.slice(pos,m.index))+'(.+?)';names.push(m[1]);pos=m.index+m[0].length;}pattern+=esc(k.slice(pos));return [new RegExp('^'+pattern+'$'),v,names];
});
function translateEs(s){
 const lead=s.match(/^\s*/)[0],trail=s.match(/\s*$/)[0],core=s.trim();if(!core)return s;
 if(ES[core]!=null)return lead+ES[core]+trail;
 let t=core.replace(/\b(January|February|March|April|May|June|July|August|September|October|November|December) (\d{1,2}), (\d{4})/g,(_,m,d,y)=>esDate(MONTHS.indexOf(m),d,y))
 .replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2}), (\d{4})/g,(_,m,d,y)=>esDate(MON3.indexOf(m),d,y))
 .replace(/\b(January|February|March|April|May|June|July|August|September|October|November|December) (\d{4})\b/g,(_,m,y)=>`${ES_MONTHS[MONTHS.indexOf(m)]} de ${y}`)
 .replace(/\b(January|February|March|April|May|June|July|August|September|October|November|December) ·/g,(_,m)=>ES_MONTHS[MONTHS.indexOf(m)]+' ·')
 .replace(/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{1,2})\b/g,(_,m,d)=>`${+d} ${ES_MONTHS[MON3.indexOf(m)].slice(0,3)}`);
 for(const [re,f] of ES_PAT){const m=t.match(re);if(m)return lead+f(m)+trail;}
 for(const [re,value,names] of ES_TEMPLATES){const m=t.match(re);if(m){const vals=Object.fromEntries(names.map((n,i)=>[n,m[i+1]]));return lead+value.replace(/\{(\w+)\}/g,(_,n)=>vals[n]??'')+trail;}}
 const fm=t.match(/^(\S+) (.+)$/);if(fm&&ES[fm[2]]&&/\p{Extended_Pictographic}|\p{Regional_Indicator}/u.test(fm[1]))return lead+fm[1]+' '+ES[fm[2]]+trail;
 return lead+t+trail;
}
const ORIG=new WeakMap(), ATTRS=['title','aria-label','placeholder','alt','data-label','data-share'];
const SKIP='script,style,iframe,option,.no-tr';
let LANG='en', busy=false;
function trNode(root){
  if(LANG==='en') return; busy=true;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); let n; const list=[];
  while(n=w.nextNode()) list.push(n);
  if(root.nodeType===3) list.push(root);
  for(const t of list){ const p=t.parentElement; if(!p||p.closest(SKIP)||p.closest('[data-i18n]')) continue;
    const o=ORIG.has(t)?ORIG.get(t):t.nodeValue; const k=(LANG==='es'?translateEs:translateStr)(o); if(k!==t.nodeValue){ORIG.set(t,o);t.nodeValue=k;} }
  const els=root.querySelectorAll?[root,...root.querySelectorAll('*')]:[];
  for(const e of els){ if(!e.getAttribute) continue; for(const a of ATTRS){const v=e.getAttribute(a); if(v==null) continue; const key='data-en-'+a; const o=e.getAttribute(key)??v; const k=(LANG==='es'?translateEs:translateStr)(o); if(k!==v){e.setAttribute(key,o);e.setAttribute(a,k);}}}
  busy=false;
}
function restore(){
  busy=true; const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT); let n;
  while(n=w.nextNode()) if(ORIG.has(n)){n.nodeValue=ORIG.get(n);ORIG.delete(n);}
  for(const a of ATTRS) document.querySelectorAll('[data-en-'+a+']').forEach(e=>{e.setAttribute(a,e.getAttribute('data-en-'+a));e.removeAttribute('data-en-'+a);});
  document.title=document.title; busy=false;
}
let titleEn=null;
function applyLang(lang){
  restore(); LANG=['ko','es'].includes(lang)?lang:'en'; document.documentElement.lang=LANG;
  if(titleEn==null) titleEn=document.title;
  document.querySelectorAll('[data-i18n]').forEach(e=>{if(e.dataset.enHtml==null)e.dataset.enHtml=e.innerHTML;const blocks=LANG==='ko'?KO_BLOCK:LANG==='es'?ES_BLOCK:{};e.innerHTML=blocks[e.dataset.i18n]||e.dataset.enHtml;});
  if(LANG!=='en'){ trNode(document.body); document.title=titleEn.split(' · ').map(LANG==='es'?translateEs:translateStr).join(' · '); }
  else { restore(); document.title=titleEn; }
  const sel=document.getElementById('lang-select'); if(sel) sel.value=LANG;
  const lb=document.getElementById('lang-label'); if(lb) lb.textContent=LANG==='ko'?'언어':LANG==='es'?'Idioma':'Language';
}
window.applyLang=applyLang; window.translateStr=translateStr; window.translateEs=translateEs;
window.addEventListener('load',()=>{
  let lang='en'; try{lang=localStorage.getItem('jimerica-lang')||'en';}catch{}
  applyLang(lang);
  new MutationObserver(ms=>{ if(busy||LANG==='en') return; for(const m of ms){ if(m.type==='characterData'){ if(!ORIG.has(m.target)||(LANG==='es'?translateEs:translateStr)(ORIG.get(m.target))!==m.target.nodeValue){ORIG.delete(m.target);trNode(m.target.parentElement||m.target);} } else if(m.type==='attributes'){ trNode(m.target); } else m.addedNodes.forEach(x=>trNode(x.nodeType===1?x:x.parentElement||x)); } })
    .observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['data-label']});
  const sel=document.getElementById('lang-select'); if(sel) sel.addEventListener('change',()=>{const l=['ko','es'].includes(sel.value)?sel.value:'en';try{localStorage.setItem('jimerica-lang',l);}catch{}applyLang(l);});
  document.querySelectorAll('.navgrp').forEach(d=>d.addEventListener('toggle',()=>{if(d.open)document.querySelectorAll('.navgrp').forEach(o=>o!==d&&(o.open=false));}));
  document.addEventListener('click',e=>{if(!e.target.closest('.navgrp')&&window.innerWidth>600)document.querySelectorAll('.navgrp').forEach(o=>o.open=false);});
});
// Flat tabs: on narrow screens tabs scroll sideways; show fade + arrow hints where more tabs exist.
window.addEventListener('load',()=>{
  const wrap=document.querySelector('.tabs-wrap'), row=document.getElementById('pagelinks'); if(!wrap||!row) return;
  const L=wrap.querySelector('.tab-arrow.left'), R=wrap.querySelector('.tab-arrow.right');
  const upd=()=>{const max=row.scrollWidth-row.clientWidth; const l=row.scrollLeft>4, r=row.scrollLeft<max-4 && max>4;
    wrap.classList.toggle('more-left',l); wrap.classList.toggle('more-right',r); L.hidden=!l; R.hidden=!r;};
  const cur=row.querySelector('[aria-current=page]');
  if(cur&&row.scrollWidth>row.clientWidth){ row.scrollLeft=Math.max(0,cur.offsetLeft-row.clientWidth/2+cur.offsetWidth/2); }
  L.addEventListener('click',()=>row.scrollBy({left:-row.clientWidth*.7,behavior:'smooth'}));
  R.addEventListener('click',()=>row.scrollBy({left:row.clientWidth*.7,behavior:'smooth'}));
  row.addEventListener('scroll',upd,{passive:true}); window.addEventListener('resize',upd); upd(); setTimeout(upd,300);
});
// Shared polish: last-updated badge, back-to-top button.
window.addEventListener('load',()=>{
  const h=document.querySelector('.site-header');
  const refreshed=(typeof REFRESHED==='undefined'?UPDATED:REFRESHED);
  if(h&&!document.getElementById('official-grid')&&typeof refreshed!=='undefined'&&!document.querySelector('.upd-badge')){const b=document.createElement('div');b.className='upd-badge';
    b.textContent='Data updated '+new Date(refreshed+'T12:00:00').toLocaleDateString('en-US',{year:'numeric',month:'long',day:'numeric'});h.append(b);}
  const t=document.createElement('button');t.type='button';t.className='to-top';t.setAttribute('aria-label','Back to top');t.textContent='↑';
  t.addEventListener('click',()=>window.scrollTo({top:0}));document.body.append(t);
  const f=()=>t.classList.toggle('show',window.scrollY>600);window.addEventListener('scroll',f,{passive:true});f();
});

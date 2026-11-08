"use strict";
// Korean/English UI translation. Translates every UI text node and title/aria-label/placeholder/alt attribute
// (including JS-generated text) using exact phrases + patterns. Song titles and numbers stay as-is.
// Choice persisted in localStorage 'jimerica-lang'.
const MONTHS=['January','February','March','April','May','June','July','August','September','October','November','December'];
const MON3=MONTHS.map(m=>m.slice(0,3));
const KO={
// nav & chrome
"Stats":"통계","Music":"음악","Fans":"팬","Overview":"개요","Songs":"곡","Trends":"추이","Milestones":"마일스톤","Achievements":"업적","Who":"Who","Discography":"디스코그래피","Calendar":"캘린더","Feed":"피드","Social Media":"SNS","X · @JIMERICA":"X · @JIMERICA","View on X ↗":"X에서 보기 ↗","Image from @JIMERICA post":"@JIMERICA 게시물 이미지","Streaming guide":"스트리밍 가이드","About":"소개","Menu":"메뉴",
"Skip to content":"본문으로 건너뛰기","Source: Spotify":"출처: Spotify","Independent fan archive · Not affiliated with Spotify or Jimin.":"독립 팬 아카이브 · Spotify 및 지민과 무관합니다.","Pages":"페이지",
// overview
"Archive of Jimin's Achievements":"지민 업적 아카이브","Jimin by the numbers":"숫자로 보는 지민","Jimin has surpassed":"지민의 누적 스트리밍","Total streams":"총 스트리밍","Streams yesterday":"어제 스트리밍","Solo streams":"솔로 스트리밍","Tracks counted":"집계 곡 수","Top 5 daily gains":"일일 증가 TOP 5","See every song →":"전체 곡 보기 →","Who around the world →":"세계 속 Who →","Top 10 songs by total streams":"총 스트리밍 TOP 10",
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
"Jimin's biography, and where to listen to and buy his music.":"지민의 약력과 음악을 듣고 구매할 수 있는 곳.","Biography":"약력","Listen":"듣기","Buy":"구매","About this site":"사이트 소개","Official artist and album pages.":"공식 아티스트·앨범 페이지.","Official stores and retailers linked from the label's MUSE release page.":"레이블의 MUSE 공식 발매 페이지에 연결된 공식 스토어와 판매처.","Artist page":"아티스트 페이지","MUSE album":"MUSE 앨범","BANGTANTV (official BTS channel)":"BANGTANTV (BTS 공식 채널)","Artist page (멜론)":"아티스트 페이지","All platforms":"모든 플랫폼","Official MUSE smart link":"MUSE 공식 통합 링크","MUSE (official HYBE store)":"MUSE (HYBE 공식 스토어)","BTS Official Shop (US)":"BTS 공식 숍 (미국)","Jimin albums":"지민 앨범","iTunes / Apple":"iTunes / 애플","MUSE digital album":"MUSE 디지털 앨범","MUSE CD":"MUSE CD","MUSE (BLOOMING ver.) exclusive CD":"MUSE (BLOOMING ver.) 단독 CD","Find MUSE at indie record stores":"독립 음반점에서 MUSE 찾기","Sources:":"출처:","Wikipedia: Jimin":"위키백과: 지민","(citing The Guardian, Rolling Stone, Billboard and others) ·":"(The Guardian, Rolling Stone, Billboard 등 인용) ·","Melon artist profile":"멜론 아티스트 정보","JIMERICA is an independent fan archive of Jimin's Spotify streams and achievements, updated daily. See the":"JIMERICA는 지민의 Spotify 스트리밍과 업적을 매일 기록하는 독립 팬 아카이브입니다.","page for his records and awards.":"페이지에서 기록과 수상 내역을 볼 수 있습니다.",
// 404
"Page not found":"페이지를 찾을 수 없습니다","That page doesn’t exist (or moved).":"없는 페이지이거나 이동된 페이지입니다.","Go to Overview":"개요로 가기","Browse songs":"곡 둘러보기","M Countdown":"엠카운트다운","Music Bank":"뮤직뱅크","Seoul Music Awards":"서울가요대상","Melon Music Awards":"멜론뮤직어워드","Golden Disc Awards":"골든디스크어워즈","Circle Chart Music Awards":"써클차트 뮤직어워즈","Melon":"멜론","Instagram":"인스타그램","TikTok":"틱톡","Instagram @j.m ↗":"인스타그램 @j.m ↗","TikTok @jimin ↗":"틱톡 @jimin ↗","Instagram · @j.m":"인스타그램 · @j.m","TikTok · @jimin":"틱톡 · @jimin"
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
 [/^(Birthday|Release|Achievement) · (\d{4})$/,m=>`${{Birthday:'생일',Release:'발매',Achievement:'업적'}[m[1]]} · ${m[2]}`],
 [/^#1 boy group member brand reputation \((.+)\)$/,m=>`보이그룹 개인 브랜드평판 1위 (${m[1]})`],
 [/^"(.+)" \(TAEYANG feat\. Jimin\)$/,m=>`"${m[1]}" (태양 feat. 지민)`],
 [/^(\d+) posts? · newest (.+)\. Posts load from Instagram\/TikTok; if an embed is blocked, use the link\.$/,m=>`게시물 ${m[1]}개 · 최신 ${m[2]}. 인스타그램/틱톡에서 불러옵니다. 임베드가 막히면 링크를 이용하세요.`],
 [/^(.+) · Jimin & HA SUNG WOON · (.+)$/,m=>`${m[1]} · 지민 & 하성운 · ${m[2]}`],
 [/^(\d+) match(es)?$/,m=>`${m[1]}개 일치`],
 [/^Total streams: (.+)$/,m=>`총 스트리밍: ${m[1]}`],
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
const ORIG=new WeakMap(), ATTRS=['title','aria-label','placeholder','alt'];
const SKIP='script,style,iframe,.no-tr';
let LANG='en', busy=false;
function trNode(root){
  if(LANG!=='ko') return; busy=true;
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT); let n; const list=[];
  while(n=w.nextNode()) list.push(n);
  if(root.nodeType===3) list.push(root);
  for(const t of list){ const p=t.parentElement; if(!p||p.closest(SKIP)||p.closest('[data-i18n]')) continue;
    const o=ORIG.has(t)?ORIG.get(t):t.nodeValue; const k=translateStr(o); if(k!==t.nodeValue){ORIG.set(t,o);t.nodeValue=k;} }
  const els=root.querySelectorAll?[root,...root.querySelectorAll('*')]:[];
  for(const e of els){ if(!e.getAttribute) continue; for(const a of ATTRS){const v=e.getAttribute(a); if(v==null) continue; const key='data-en-'+a; const o=e.getAttribute(key)??v; const k=translateStr(o); if(k!==v){e.setAttribute(key,o);e.setAttribute(a,k);}}}
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
  LANG=lang==='ko'?'ko':'en'; document.documentElement.lang=LANG;
  if(titleEn==null) titleEn=document.title;
  document.querySelectorAll('[data-i18n]').forEach(e=>{if(e.dataset.enHtml==null)e.dataset.enHtml=e.innerHTML;e.innerHTML=LANG==='ko'&&KO_BLOCK[e.dataset.i18n]?KO_BLOCK[e.dataset.i18n]:e.dataset.enHtml;});
  if(LANG==='ko'){ trNode(document.body); document.title=titleEn.split(' · ').map(translateStr).join(' · '); }
  else { restore(); document.title=titleEn; }
  const sel=document.getElementById('lang-select'); if(sel) sel.value=LANG;
  const lb=document.getElementById('lang-label'); if(lb) lb.textContent=LANG==='ko'?'언어 선택 · Choose English or Korean':'Choose English or Korean';
}
window.applyLang=applyLang; window.translateStr=translateStr;
window.addEventListener('load',()=>{
  let lang='en'; try{lang=localStorage.getItem('jimerica-lang')||'en';}catch{}
  applyLang(lang);
  new MutationObserver(ms=>{ if(busy||LANG!=='ko') return; for(const m of ms){ if(m.type==='characterData'){ if(!ORIG.has(m.target)||translateStr(ORIG.get(m.target))!==m.target.nodeValue){ORIG.delete(m.target);trNode(m.target.parentElement||m.target);} } else m.addedNodes.forEach(x=>trNode(x.nodeType===1?x:x.parentElement||x)); } })
    .observe(document.body,{childList:true,subtree:true,characterData:true});
  const sel=document.getElementById('lang-select'); if(sel) sel.addEventListener('change',()=>{const l=sel.value==='ko'?'ko':'en';try{localStorage.setItem('jimerica-lang',l);}catch{}applyLang(l);});
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

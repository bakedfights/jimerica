// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-24";
const REFRESHED = "2026-11-25";
const TOTALS = {
  "streams": 8781521720,
  "daily": 2265906,
  "tracks": 34,
  "solo": 7232442373,
  "feat": 672362839
};
const SONGS = [
  [
    "WHO",
    2596030029,
    819333,
    false
  ],
  [
    "Like Crazy",
    1494594030,
    200568,
    false
  ],
  [
    "Set Me Free Pt.2",
    497288438,
    141872,
    false
  ],
  [
    "Be Mine",
    423497328,
    200130,
    false
  ],
  [
    "Like Crazy (English Version)",
    408932442,
    58163,
    false
  ],
  [
    "Closer Than This",
    344509418,
    88114,
    false
  ],
  [
    "With you",
    332173169,
    48115,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    285167662,
    71351,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283597380,
    51493,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    251249867,
    33421,
    true
  ],
  [
    "Face-off",
    174459946,
    51912,
    false
  ],
  [
    "Alone",
    160856039,
    41119,
    false
  ],
  [
    "Promise",
    158637875,
    84400,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157834339,
    74845,
    false
  ],
  [
    "Rebirth (Intro)",
    149452289,
    66828,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137515592,
    32738,
    true
  ],
  [
    "Interlude : Showtime",
    130875460,
    42161,
    false
  ],
  [
    "Interlude : Dive",
    129012717,
    18127,
    false
  ],
  [
    "WHO - Rock Remix",
    82673952,
    24874,
    false
  ],
  [
    "WHO - Acoustic Remix",
    78951374,
    26222,
    false
  ],
  [
    "WHO - Shibuyakei Remix",
    63976915,
    9124,
    false
  ],
  [
    "WHO - Instrumental",
    62759224,
    8014,
    false
  ],
  [
    "WHO - Funky Remix",
    61468383,
    8473,
    false
  ],
  [
    "WHO - Beautiful Mind Remix",
    61215184,
    8875,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55887035,
    5749,
    false
  ],
  [
    "Christmas Love",
    51424058,
    27258,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38375088,
    6556,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36513778,
    5656,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26938406,
    4515,
    false
  ],
  [
    "With you - Instrumental",
    22064514,
    1280,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8370402,
    1999,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5820796,
    1462,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Sped Up",
    5083304,
    0,
    false
  ],
  [
    "Angel Pt. 2 - Sped Up",
    4315287,
    1159,
    false
  ]
];
const WHO_DATE = "2026-11-23";
const WHO = [["BY", 3, "down 1", 1, 6574, -3858], ["VE", 4, "down 1", 1, 23330, 602], ["KR", 6, "same", 1, 68205, 1188], ["SG", 10, "down 1", 1, 23692, 2846], ["PY", 15, "down 12", 1, 13080, -9150], ["CL", 17, "up 5", 1, 72702, 10132], ["CR", 31, "down 3", 1, 12881, -977], ["UY", 75, "new", 10, 5190, null], ["JP", 102, "same", 1, 80215, 2962], ["TH", 130, "re", 1, 44717, null], ["CZ", 150, "re", 1, 11616, null]];

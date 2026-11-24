// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-23";
const REFRESHED = "2026-11-24";
const TOTALS = {
  "streams": 8779255814,
  "daily": 1953909,
  "tracks": 34,
  "solo": 7230686719,
  "feat": 672245187
};
const SONGS = [
  [
    "WHO",
    2595210696,
    699129,
    false
  ],
  [
    "Like Crazy",
    1494393462,
    172462,
    false
  ],
  [
    "Set Me Free Pt.2",
    497146566,
    122271,
    false
  ],
  [
    "Be Mine",
    423297198,
    177347,
    false
  ],
  [
    "Like Crazy (English Version)",
    408874279,
    48528,
    false
  ],
  [
    "Closer Than This",
    344421304,
    71359,
    false
  ],
  [
    "With you",
    332125054,
    40199,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    285096311,
    66020,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283545887,
    40887,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    251216446,
    28354,
    true
  ],
  [
    "Face-off",
    174408034,
    42868,
    false
  ],
  [
    "Alone",
    160814920,
    36749,
    false
  ],
  [
    "Promise",
    158553475,
    73923,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157759494,
    68869,
    false
  ],
  [
    "Rebirth (Intro)",
    149385461,
    56749,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137482854,
    29997,
    true
  ],
  [
    "Interlude : Showtime",
    130833299,
    43915,
    false
  ],
  [
    "Interlude : Dive",
    128994590,
    15078,
    false
  ],
  [
    "WHO - Rock Remix",
    82649078,
    20251,
    false
  ],
  [
    "WHO - Acoustic Remix",
    78925152,
    19980,
    false
  ],
  [
    "WHO - Shibuyakei Remix",
    63967791,
    8208,
    false
  ],
  [
    "WHO - Instrumental",
    62751210,
    7723,
    false
  ],
  [
    "WHO - Funky Remix",
    61459910,
    8382,
    false
  ],
  [
    "WHO - Beautiful Mind Remix",
    61206309,
    8568,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55881286,
    5565,
    false
  ],
  [
    "Christmas Love",
    51396800,
    20691,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38368532,
    4914,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36508122,
    4835,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26933891,
    4101,
    false
  ],
  [
    "With you - Instrumental",
    22063234,
    1106,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8368403,
    2623,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5819334,
    1254,
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
    4314128,
    1004,
    false
  ]
];
const WHO_DATE = "2026-11-22";
const WHO = [
  [
    "BY",
    2,
    "up 1",
    1,
    10432,
    2499
  ],
  [
    "VE",
    3,
    "up 4",
    1,
    22728,
    4391
  ],
  [
    "PY",
    3,
    "up 38",
    1,
    22230,
    11507
  ],
  [
    "KR",
    6,
    "same",
    1,
    67017,
    662
  ],
  [
    "SG",
    9,
    "up 9",
    1,
    20846,
    3146
  ],
  [
    "CL",
    22,
    "up 7",
    1,
    62570,
    412
  ],
  [
    "CR",
    28,
    "up 16",
    1,
    13858,
    -217
  ],
  [
    "JP",
    102,
    "up 3",
    1,
    77253,
    1214
  ],
  [
    "KZ",
    150,
    "down 55",
    1,
    5173,
    -1476
  ]
];

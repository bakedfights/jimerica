// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-14";
const REFRESHED = "2026-11-15";
const TOTALS = {
  "streams": 8759631960,
  "daily": 2404081,
  "tracks": 34,
  "solo": 7213682708,
  "feat": 671242861
};
const SONGS = [
  [
    "Who",
    2588105456,
    855078,
    false
  ],
  [
    "Like Crazy",
    1492676058,
    197413,
    false
  ],
  [
    "Set Me Free Pt.2",
    495931721,
    153725,
    false
  ],
  [
    "Be Mine",
    421403137,
    234548,
    false
  ],
  [
    "Like Crazy (English Version)",
    408349760,
    64406,
    false
  ],
  [
    "Closer Than This",
    343699058,
    79514,
    false
  ],
  [
    "With you",
    331723590,
    47032,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284469013,
    75459,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283123371,
    52631,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    250927090,
    33532,
    true
  ],
  [
    "Face-off",
    173973718,
    50381,
    false
  ],
  [
    "Alone",
    160454546,
    41952,
    false
  ],
  [
    "Promise",
    157905527,
    81071,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157090638,
    86056,
    false
  ],
  [
    "Rebirth (Intro)",
    148810131,
    62357,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137192400,
    33243,
    true
  ],
  [
    "Interlude : Showtime",
    130450826,
    43996,
    false
  ],
  [
    "Interlude : Dive",
    128840477,
    17654,
    false
  ],
  [
    "Who - Rock Remix",
    82398123,
    50691,
    false
  ],
  [
    "Who - Acoustic Remix",
    78736845,
    27035,
    false
  ],
  [
    "Who - Shibuyakei Remix",
    63890308,
    17428,
    false
  ],
  [
    "Who - Instrumental",
    62681249,
    15963,
    false
  ],
  [
    "Who - Funky Remix",
    61385383,
    16663,
    false
  ],
  [
    "Who - Beautiful Mind Remix",
    61129543,
    16383,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55831134,
    5948,
    false
  ],
  [
    "Christmas Love",
    51197723,
    19508,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38312212,
    7152,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36458194,
    5983,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26892713,
    4582,
    false
  ],
  [
    "With you - Instrumental",
    22051864,
    1357,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8347600,
    2517,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5806136,
    1532,
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
    4303112,
    1291,
    false
  ]
];
const WHO_DATE = "2026-11-13";
const WHO = [
  [
    "BY",
    2,
    "same",
    1,
    11536,
    382
  ],
  [
    "VE",
    3,
    "same",
    1,
    22999,
    -113
  ],
  [
    "KR",
    7,
    "same",
    1,
    66601,
    -4210
  ],
  [
    "SG",
    14,
    "up 5",
    1,
    20244,
    900
  ],
  [
    "CL",
    35,
    "new",
    1,
    62629,
    null
  ],
  [
    "CR",
    46,
    "down 31",
    1,
    12139,
    -2720
  ],
  [
    "JP",
    81,
    "up 1",
    1,
    74826,
    -5057
  ],
  [
    "KZ",
    123,
    "down 37",
    1,
    5715,
    -1017
  ],
  [
    "PY",
    157,
    "up 36",
    1,
    5612,
    592
  ],
  [
    "TW",
    180,
    "down 33",
    1,
    14375,
    -597
  ],
  [
    "CZ",
    187,
    "up 7",
    1,
    11858,
    1156
  ]
];

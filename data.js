// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-08";
const REFRESHED = "2026-11-09";
const TOTALS = {
  "streams": 8745894214,
  "daily": 2221868,
  "tracks": 34,
  "solo": 7201899887,
  "feat": 670532440
};
const SONGS = [
  [
    "Who",
    2583332496,
    794615,
    false
  ],
  [
    "Like Crazy",
    1491502991,
    185163,
    false
  ],
  [
    "Set Me Free Pt.2",
    495072163,
    126238,
    false
  ],
  [
    "Be Mine",
    420080738,
    216151,
    false
  ],
  [
    "Like Crazy (English Version)",
    407989090,
    55430,
    false
  ],
  [
    "Closer Than This",
    343211673,
    80489,
    false
  ],
  [
    "With you",
    331455646,
    39995,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284037247,
    73163,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    282806790,
    54373,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    250731690,
    31281,
    true
  ],
  [
    "Face-off",
    173691488,
    41736,
    false
  ],
  [
    "Alone",
    160198750,
    38964,
    false
  ],
  [
    "Promise",
    157459248,
    70205,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    156629195,
    74301,
    false
  ],
  [
    "Rebirth (Intro)",
    148405925,
    69298,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    136993960,
    31291,
    true
  ],
  [
    "Interlude : Showtime",
    130178102,
    47674,
    false
  ],
  [
    "Interlude : Dive",
    128735143,
    17395,
    false
  ],
  [
    "Who - Rock Remix",
    82133585,
    37292,
    false
  ],
  [
    "Who - Acoustic Remix",
    78559385,
    28485,
    false
  ],
  [
    "Who - Shibuyakei Remix",
    63787658,
    17667,
    false
  ],
  [
    "Who - Instrumental",
    62585492,
    17018,
    false
  ],
  [
    "Who - Funky Remix",
    61288370,
    17226,
    false
  ],
  [
    "Who - Beautiful Mind Remix",
    61031700,
    17217,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55796468,
    5717,
    false
  ],
  [
    "Christmas Love",
    51095953,
    12403,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38271404,
    5854,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36424486,
    5008,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26864047,
    4481,
    false
  ],
  [
    "With you - Instrumental",
    22043771,
    1204,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8331520,
    2284,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5797469,
    1334,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Sped Up",
    5074370,
    0,
    false
  ],
  [
    "Angel Pt. 2 - Sped Up",
    4296201,
    916,
    false
  ]
];
const WHO_DATE = "2026-11-07";
const WHO = [
  [
    "BY",
    2,
    "same",
    1,
    12134,
    1322
  ],
  [
    "SG",
    5,
    "up 8",
    1,
    26001,
    2566
  ],
  [
    "VE",
    5,
    "down 1",
    1,
    22195,
    -403
  ],
  [
    "KR",
    6,
    "down 1",
    1,
    72142,
    -1308
  ],
  [
    "CR",
    29,
    "down 10",
    1,
    14264,
    -467
  ],
  [
    "KZ",
    44,
    "down 2",
    1,
    8910,
    -54
  ],
  [
    "JP",
    80,
    "down 9",
    1,
    79385,
    -303
  ],
  [
    "TW",
    172,
    "down 9",
    1,
    14032,
    -636
  ]
];

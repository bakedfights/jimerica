// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-09";
const REFRESHED = "2026-11-10";
const TOTALS = {
  "streams": 8748067465,
  "daily": 2173251,
  "tracks": 34,
  "solo": 7203777122,
  "feat": 670640967
};
const SONGS = [
  [
    "Who",
    2584131193,
    798697,
    false
  ],
  [
    "Like Crazy",
    1491679687,
    176696,
    false
  ],
  [
    "Set Me Free Pt.2",
    495200617,
    128454,
    false
  ],
  [
    "Be Mine",
    420301590,
    220852,
    false
  ],
  [
    "Like Crazy (English Version)",
    408039751,
    50661,
    false
  ],
  [
    "Closer Than This",
    343292015,
    80342,
    false
  ],
  [
    "With you",
    331493189,
    37543,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284104349,
    67102,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    282857043,
    50253,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    250760305,
    28615,
    true
  ],
  [
    "Face-off",
    173728852,
    37364,
    false
  ],
  [
    "Alone",
    160235279,
    36529,
    false
  ],
  [
    "Promise",
    157526243,
    66995,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    156701035,
    71840,
    false
  ],
  [
    "Rebirth (Intro)",
    148476405,
    70480,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137023619,
    29659,
    true
  ],
  [
    "Interlude : Showtime",
    130225929,
    47827,
    false
  ],
  [
    "Interlude : Dive",
    128751632,
    16489,
    false
  ],
  [
    "Who - Rock Remix",
    82167786,
    34201,
    false
  ],
  [
    "Who - Acoustic Remix",
    78584465,
    25080,
    false
  ],
  [
    "Who - Shibuyakei Remix",
    63802112,
    14454,
    false
  ],
  [
    "Who - Instrumental",
    62599262,
    13770,
    false
  ],
  [
    "Who - Funky Remix",
    61301920,
    13550,
    false
  ],
  [
    "Who - Beautiful Mind Remix",
    61045765,
    14065,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55801964,
    5496,
    false
  ],
  [
    "Christmas Love",
    51111387,
    15434,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38276880,
    5476,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36429804,
    5318,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26868548,
    4501,
    false
  ],
  [
    "With you - Instrumental",
    22045094,
    1323,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8333454,
    1934,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5798748,
    1279,
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
    4297173,
    972,
    false
  ]
];
const WHO_DATE = "2026-11-08";
const WHO = [
  [
    "BY",
    1,
    "up 1",
    1,
    15447,
    3313
  ],
  [
    "VE",
    5,
    "same",
    1,
    18940,
    -3255
  ],
  [
    "KR",
    6,
    "same",
    1,
    73708,
    1566
  ],
  [
    "SG",
    6,
    "down 1",
    1,
    22883,
    -3118
  ],
  [
    "CR",
    17,
    "up 12",
    1,
    14328,
    64
  ],
  [
    "KZ",
    46,
    "down 2",
    1,
    8573,
    -337
  ],
  [
    "JP",
    80,
    "same",
    1,
    82456,
    3071
  ],
  [
    "TW",
    92,
    "up 80",
    1,
    17532,
    3500
  ],
  [
    "BG",
    196,
    "new",
    1,
    2156,
    null
  ]
];

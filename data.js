// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-20";
const REFRESHED = "2026-11-21";
const TOTALS = {
  "streams": 8773022567,
  "daily": 2260256,
  "tracks": 34,
  "solo": 7225151540,
  "feat": 671927523
};
const SONGS = [
  [
    "WHO",
    2592902293,
    782452,
    false
  ],
  [
    "Like Crazy",
    1493856550,
    199481,
    false
  ],
  [
    "Set Me Free Pt.2",
    496769268,
    140192,
    false
  ],
  [
    "Be Mine",
    422721565,
    215764,
    false
  ],
  [
    "Like Crazy (English Version)",
    408718449,
    63683,
    false
  ],
  [
    "Closer Than This",
    344190320,
    86953,
    false
  ],
  [
    "With you",
    331997945,
    47915,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284895890,
    79921,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283414124,
    49053,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    251123435,
    34782,
    true
  ],
  [
    "Face-off",
    174267210,
    54653,
    false
  ],
  [
    "Alone",
    160701989,
    44082,
    false
  ],
  [
    "Promise",
    158331327,
    76043,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157553114,
    81704,
    false
  ],
  [
    "Rebirth (Intro)",
    149200890,
    66996,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137389964,
    35116,
    true
  ],
  [
    "Interlude : Showtime",
    130708224,
    44281,
    false
  ],
  [
    "Interlude : Dive",
    128946982,
    18493,
    false
  ],
  [
    "WHO - Rock Remix",
    82585562,
    23695,
    false
  ],
  [
    "WHO - Acoustic Remix",
    78860093,
    23279,
    false
  ],
  [
    "WHO - Shibuyakei Remix",
    63943137,
    8824,
    false
  ],
  [
    "WHO - Instrumental",
    62728009,
    8367,
    false
  ],
  [
    "WHO - Funky Remix",
    61435376,
    8768,
    false
  ],
  [
    "WHO - Beautiful Mind Remix",
    61180706,
    9127,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55865131,
    6365,
    false
  ],
  [
    "Christmas Love",
    51335172,
    25533,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38353361,
    6321,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36493361,
    6250,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26921696,
    5221,
    false
  ],
  [
    "With you - Instrumental",
    22059805,
    1400,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8361740,
    2230,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5815467,
    1852,
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
    4311108,
    1460,
    false
  ]
];
const WHO_DATE = "2026-11-19";
const WHO = [
  [
    "BY",
    3,
    "same",
    1,
    9863,
    2006
  ],
  [
    "KR",
    7,
    "up 1",
    1,
    59536,
    4156
  ],
  [
    "PY",
    53,
    "down 3",
    1,
    8003,
    -47
  ],
  [
    "JP",
    78,
    "up 4",
    1,
    80330,
    2047
  ],
  [
    "CZ",
    188,
    "re",
    1,
    10850,
    null
  ]
];

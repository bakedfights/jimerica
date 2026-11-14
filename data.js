// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-13";
const REFRESHED = "2026-11-14";
const TOTALS = {
  "streams": 8757227879,
  "daily": 2336555,
  "tracks": 34,
  "solo": 7211824774,
  "feat": 671123455
};
const SONGS = [
  [
    "Who",
    2587250378,
    783747,
    false
  ],
  [
    "Like Crazy",
    1492478645,
    208944,
    false
  ],
  [
    "Set Me Free Pt.2",
    495777996,
    153941,
    false
  ],
  [
    "Be Mine",
    421168589,
    228288,
    false
  ],
  [
    "Like Crazy (English Version)",
    408285354,
    65219,
    false
  ],
  [
    "Closer Than This",
    343619544,
    80798,
    false
  ],
  [
    "With you",
    331676558,
    46552,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284393554,
    68874,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283070740,
    52052,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    250893558,
    34422,
    true
  ],
  [
    "Face-off",
    173923337,
    52141,
    false
  ],
  [
    "Alone",
    160412594,
    45975,
    false
  ],
  [
    "Promise",
    157824456,
    79187,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157004582,
    76332,
    false
  ],
  [
    "Rebirth (Intro)",
    148747774,
    66678,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137159157,
    34177,
    true
  ],
  [
    "Interlude : Showtime",
    130406830,
    43515,
    false
  ],
  [
    "Interlude : Dive",
    128822823,
    17894,
    false
  ],
  [
    "Who - Rock Remix",
    82347432,
    51729,
    false
  ],
  [
    "Who - Acoustic Remix",
    78709810,
    28034,
    false
  ],
  [
    "Who - Shibuyakei Remix",
    63872880,
    16584,
    false
  ],
  [
    "Who - Instrumental",
    62665286,
    14938,
    false
  ],
  [
    "Who - Funky Remix",
    61368720,
    15355,
    false
  ],
  [
    "Who - Beautiful Mind Remix",
    61113160,
    15510,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55825186,
    5816,
    false
  ],
  [
    "Christmas Love",
    51178215,
    23234,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38305060,
    8079,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36452211,
    5663,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26888131,
    4902,
    false
  ],
  [
    "With you - Instrumental",
    22050507,
    1363,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8345083,
    3645,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5804604,
    1580,
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
    4301821,
    1387,
    false
  ]
];
const WHO_DATE = "2026-11-12";
const WHO = [
  [
    "BY",
    2,
    "same",
    1,
    11154,
    175
  ],
  [
    "VE",
    3,
    "up 2",
    1,
    23112,
    4166
  ],
  [
    "KR",
    7,
    "same",
    1,
    70811,
    -486
  ],
  [
    "CR",
    15,
    "up 10",
    1,
    14859,
    793
  ],
  [
    "SG",
    19,
    "down 9",
    1,
    19344,
    -3681
  ],
  [
    "JP",
    82,
    "down 5",
    1,
    79883,
    -59
  ],
  [
    "KZ",
    86,
    "up 27",
    1,
    6732,
    862
  ],
  [
    "TW",
    147,
    "re",
    1,
    14972,
    null
  ],
  [
    "PY",
    193,
    "re",
    1,
    5020,
    null
  ],
  [
    "CZ",
    194,
    "re",
    1,
    10702,
    null
  ]
];

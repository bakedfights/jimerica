// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-11";
const REFRESHED = "2026-11-12";
const TOTALS = {
  "streams": 8752505514,
  "daily": 2218053,
  "tracks": 34,
  "solo": 7207557901,
  "feat": 670880696
};
const SONGS = [
  [
    "Who",
    2585640368,
    773585,
    false
  ],
  [
    "Like Crazy",
    1492070776,
    192058,
    false
  ],
  [
    "Set Me Free Pt.2",
    495472540,
    134790,
    false
  ],
  [
    "Be Mine",
    420711132,
    203339,
    false
  ],
  [
    "Like Crazy (English Version)",
    408154638,
    57088,
    false
  ],
  [
    "Closer Than This",
    343453151,
    79582,
    false
  ],
  [
    "With you",
    331583264,
    44487,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284248264,
    74371,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    282965434,
    51902,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    250824946,
    32889,
    true
  ],
  [
    "Face-off",
    173820493,
    45997,
    false
  ],
  [
    "Alone",
    160320372,
    42885,
    false
  ],
  [
    "Promise",
    157671130,
    69337,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    156851297,
    73637,
    false
  ],
  [
    "Rebirth (Intro)",
    148611247,
    65964,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137090316,
    33577,
    true
  ],
  [
    "Interlude : Showtime",
    130315297,
    43800,
    false
  ],
  [
    "Interlude : Dive",
    128786068,
    16799,
    false
  ],
  [
    "Who - Rock Remix",
    82247135,
    38771,
    false
  ],
  [
    "Who - Acoustic Remix",
    78649486,
    35350,
    false
  ],
  [
    "Who - Shibuyakei Remix",
    63838194,
    17217,
    false
  ],
  [
    "Who - Instrumental",
    62633277,
    15696,
    false
  ],
  [
    "Who - Funky Remix",
    61336654,
    16530,
    false
  ],
  [
    "Who - Beautiful Mind Remix",
    61080460,
    16034,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55813465,
    5661,
    false
  ],
  [
    "Christmas Love",
    51137235,
    14113,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38289010,
    6056,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36441039,
    5771,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26878199,
    4775,
    false
  ],
  [
    "With you - Instrumental",
    22047803,
    1283,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8338670,
    2200,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5801606,
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
    4299244,
    1047,
    false
  ]
];
const WHO_DATE = "2026-11-09";
const WHO = [
  [
    "BY",
    2,
    "down 1",
    1,
    10698,
    -4749
  ],
  [
    "KR",
    6,
    "same",
    1,
    71515,
    -2193
  ],
  [
    "VE",
    6,
    "down 1",
    1,
    14777,
    -4163
  ],
  [
    "SG",
    9,
    "down 3",
    1,
    21868,
    -1015
  ],
  [
    "CR",
    27,
    "down 10",
    1,
    12544,
    -1784
  ],
  [
    "KZ",
    65,
    "down 19",
    1,
    7442,
    -1131
  ],
  [
    "JP",
    77,
    "up 3",
    1,
    77995,
    -4461
  ],
  [
    "CZ",
    135,
    "re",
    1,
    12082,
    null
  ]
];

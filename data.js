// Daily Spotify data. Dates describe each source dataset, never the retrieval time.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-06";
const TOTALS = {
  "streams": 8741378498,
  "daily": 2419781,
  "tracks": 34,
  "solo": 7198037149,
  "feat": 670286377
};
const SONGS = [
  [
    "Who",
    2581767462,
    835499,
    false
  ],
  [
    "Like Crazy",
    1491108359,
    204584,
    false
  ],
  [
    "Set Me Free Pt.2",
    494811106,
    151054,
    false
  ],
  [
    "Be Mine",
    419639950,
    227926,
    false
  ],
  [
    "Like Crazy (English Version)",
    407871498,
    60864,
    false
  ],
  [
    "Closer Than This",
    343049698,
    90454,
    false
  ],
  [
    "With you",
    331369205,
    47030,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    283890279,
    76746,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    282691066,
    63851,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    250666422,
    35280,
    true
  ],
  [
    "Face-off",
    173603019,
    48540,
    false
  ],
  [
    "Alone",
    160116161,
    44870,
    false
  ],
  [
    "Promise",
    157309449,
    77428,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    156479137,
    77885,
    false
  ],
  [
    "Rebirth (Intro)",
    148271029,
    72182,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    136928889,
    36022,
    true
  ],
  [
    "Interlude : Showtime",
    130083496,
    51212,
    false
  ],
  [
    "Interlude : Dive",
    128699322,
    19803,
    false
  ],
  [
    "Who - Rock Remix",
    82056024,
    41782,
    false
  ],
  [
    "Who - Acoustic Remix",
    78498499,
    33704,
    false
  ],
  [
    "Who - Shibuyakei Remix",
    63751863,
    18594,
    false
  ],
  [
    "Who - Instrumental",
    62551709,
    18197,
    false
  ],
  [
    "Who - Funky Remix",
    61253714,
    18328,
    false
  ],
  [
    "Who - Beautiful Mind Remix",
    60997736,
    18590,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55784654,
    6763,
    false
  ],
  [
    "Christmas Love",
    51070319,
    15488,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38258983,
    6972,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36413390,
    6290,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26854363,
    5695,
    false
  ],
  [
    "With you - Instrumental",
    22041256,
    1552,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8327095,
    3357,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5794701,
    1887,
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
    4294275,
    1352,
    false
  ]
];
const WHO_DATE = "2026-11-06";
const WHO = [
  [
    "BY",
    2,
    "same",
    1,
    10812,
    -60
  ],
  [
    "VE",
    4,
    "same",
    1,
    22598,
    705
  ],
  [
    "KR",
    5,
    "up 1",
    1,
    73450,
    5900
  ],
  [
    "SG",
    13,
    "up 1",
    1,
    23435,
    2277
  ],
  [
    "CR",
    19,
    "up 19",
    1,
    14731,
    2052
  ],
  [
    "KZ",
    42,
    "down 2",
    1,
    8964,
    6
  ],
  [
    "JP",
    71,
    "same",
    1,
    79688,
    -1700
  ],
  [
    "TW",
    163,
    "down 93",
    1,
    14668,
    -4487
  ]
];

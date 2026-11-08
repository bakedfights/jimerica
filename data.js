// Daily Spotify data. Dates describe each source dataset, never the retrieval time.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-07";
const TOTALS = {
  "streams": 8743672346,
  "daily": 2293848,
  "tracks": 34,
  "solo": 7199993878,
  "feat": 670415495
};
const SONGS = [
  [
    "Who",
    2582537881,
    770419,
    false
  ],
  [
    "Like Crazy",
    1491317828,
    209469,
    false
  ],
  [
    "Set Me Free Pt.2",
    494945925,
    134819,
    false
  ],
  [
    "Be Mine",
    419864587,
    224637,
    false
  ],
  [
    "Like Crazy (English Version)",
    407933660,
    62162,
    false
  ],
  [
    "Closer Than This",
    343131184,
    81486,
    false
  ],
  [
    "With you",
    331415651,
    46446,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    283964084,
    73805,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    282752417,
    61351,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    250700409,
    33987,
    true
  ],
  [
    "Face-off",
    173649752,
    46733,
    false
  ],
  [
    "Alone",
    160159786,
    43625,
    false
  ],
  [
    "Promise",
    157389043,
    79594,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    156554894,
    75757,
    false
  ],
  [
    "Rebirth (Intro)",
    148336627,
    65598,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    136962669,
    33780,
    true
  ],
  [
    "Interlude : Showtime",
    130130428,
    46932,
    false
  ],
  [
    "Interlude : Dive",
    128717748,
    18426,
    false
  ],
  [
    "Who - Rock Remix",
    82096293,
    40269,
    false
  ],
  [
    "Who - Acoustic Remix",
    78530900,
    32401,
    false
  ],
  [
    "Who - Shibuyakei Remix",
    63769991,
    18128,
    false
  ],
  [
    "Who - Instrumental",
    62568474,
    16765,
    false
  ],
  [
    "Who - Funky Remix",
    61271144,
    17430,
    false
  ],
  [
    "Who - Beautiful Mind Remix",
    61014483,
    16747,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55790751,
    6097,
    false
  ],
  [
    "Christmas Love",
    51083550,
    13231,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38265550,
    6567,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36419478,
    6088,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26859566,
    5203,
    false
  ],
  [
    "With you - Instrumental",
    22042567,
    1311,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8329236,
    2141,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5796135,
    1434,
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
    4295285,
    1010,
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

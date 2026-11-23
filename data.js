// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-22";
const REFRESHED = "2026-11-23";
const TOTALS = {
  "streams": 8777301905,
  "daily": 2069914,
  "tracks": 34,
  "solo": 7228832048,
  "feat": 672145949
};
const SONGS = [
  [
    "WHO",
    2594511567,
    801875,
    false
  ],
  [
    "Like Crazy",
    1494221000,
    175783,
    false
  ],
  [
    "Set Me Free Pt.2",
    497024295,
    119654,
    false
  ],
  [
    "Be Mine",
    423119851,
    191402,
    false
  ],
  [
    "Like Crazy (English Version)",
    408825751,
    49563,
    false
  ],
  [
    "Closer Than This",
    344349945,
    75076,
    false
  ],
  [
    "With you",
    332084855,
    40712,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    285030291,
    63516,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283505000,
    42235,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    251188092,
    30597,
    true
  ],
  [
    "Face-off",
    174365166,
    45568,
    false
  ],
  [
    "Alone",
    160778171,
    34698,
    false
  ],
  [
    "Promise",
    158479552,
    71577,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157690625,
    63760,
    false
  ],
  [
    "Rebirth (Intro)",
    149328712,
    61756,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137452857,
    30602,
    true
  ],
  [
    "Interlude : Showtime",
    130789384,
    38366,
    false
  ],
  [
    "Interlude : Dive",
    128979512,
    14697,
    false
  ],
  [
    "WHO - Rock Remix",
    82628827,
    20916,
    false
  ],
  [
    "WHO - Acoustic Remix",
    78905172,
    22547,
    false
  ],
  [
    "WHO - Shibuyakei Remix",
    63959583,
    8306,
    false
  ],
  [
    "WHO - Instrumental",
    62743487,
    7976,
    false
  ],
  [
    "WHO - Funky Remix",
    61451528,
    8268,
    false
  ],
  [
    "WHO - Beautiful Mind Remix",
    61197741,
    8320,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55875721,
    5120,
    false
  ],
  [
    "Christmas Love",
    51376109,
    18595,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38363618,
    4793,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36503287,
    4651,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26929790,
    3786,
    false
  ],
  [
    "With you - Instrumental",
    22062128,
    1100,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8365780,
    1879,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5818080,
    1221,
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
    4313124,
    999,
    false
  ]
];
const WHO_DATE = "2026-11-21";
const WHO = [
  [
    "BY",
    3,
    "down 1",
    1,
    7933,
    -3960
  ],
  [
    "KR",
    6,
    "up 2",
    1,
    66355,
    1344
  ],
  [
    "VE",
    7,
    "down 4",
    1,
    18337,
    -4645
  ],
  [
    "SG",
    18,
    "down 8",
    1,
    17700,
    -6011
  ],
  [
    "CL",
    29,
    "same",
    1,
    62158,
    -3072
  ],
  [
    "PY",
    41,
    "down 27",
    1,
    10723,
    -3818
  ],
  [
    "CR",
    44,
    "up 2",
    1,
    14075,
    1405
  ],
  [
    "KZ",
    95,
    "down 36",
    1,
    6649,
    -1177
  ],
  [
    "JP",
    105,
    "down 15",
    1,
    76039,
    2200
  ]
];

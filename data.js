// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-16";
const REFRESHED = "2026-11-17";
const TOTALS = {
  "streams": 8763883922,
  "daily": 2068137,
  "tracks": 34,
  "solo": 7217356686,
  "feat": 671450762
};
const SONGS = [
  [
    "Who",
    2589673858,
    769802,
    false
  ],
  [
    "Like Crazy",
    1493042259,
    179189,
    false
  ],
  [
    "Set Me Free Pt.2",
    496200758,
    130813,
    false
  ],
  [
    "Be Mine",
    421842431,
    211840,
    false
  ],
  [
    "Like Crazy (English Version)",
    408463940,
    54192,
    false
  ],
  [
    "Closer Than This",
    343852618,
    75837,
    false
  ],
  [
    "With you",
    331803323,
    37568,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284595345,
    62008,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283212763,
    40099,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    250985889,
    28219,
    true
  ],
  [
    "Face-off",
    174060130,
    40834,
    false
  ],
  [
    "Alone",
    160527854,
    34918,
    false
  ],
  [
    "Promise",
    158035817,
    59956,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157231952,
    68741,
    false
  ],
  [
    "Rebirth (Intro)",
    148935115,
    62624,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137252110,
    29094,
    true
  ],
  [
    "Interlude : Showtime",
    130531517,
    41514,
    false
  ],
  [
    "Interlude : Dive",
    128873421,
    15662,
    false
  ],
  [
    "Who - Rock Remix",
    82462999,
    30203,
    false
  ],
  [
    "Who - Acoustic Remix",
    78771453,
    17010,
    false
  ],
  [
    "Who - Shibuyakei Remix",
    63907123,
    8316,
    false
  ],
  [
    "Who - Instrumental",
    62695792,
    7481,
    false
  ],
  [
    "Who - Funky Remix",
    61400553,
    7587,
    false
  ],
  [
    "Who - Beautiful Mind Remix",
    61145131,
    7833,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55841467,
    5014,
    false
  ],
  [
    "Christmas Love",
    51238983,
    20687,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38325269,
    6349,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36468559,
    4739,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26901106,
    4038,
    false
  ],
  [
    "With you - Instrumental",
    22054353,
    1226,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8352347,
    2215,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5808897,
    1350,
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
    4305486,
    1179,
    false
  ]
];
const WHO_DATE = "2026-11-15";
const WHO = [
  [
    "BY",
    2,
    "same",
    1,
    13326,
    883
  ],
  [
    "VE",
    4,
    "same",
    1,
    21558,
    -861
  ],
  [
    "KR",
    7,
    "same",
    1,
    69073,
    1194
  ],
  [
    "SG",
    10,
    "same",
    1,
    19237,
    -2214
  ],
  [
    "CL",
    20,
    "up 14",
    1,
    60789,
    487
  ],
  [
    "CR",
    30,
    "up 19",
    1,
    13593,
    692
  ],
  [
    "PY",
    34,
    "re",
    1,
    10112,
    null
  ],
  [
    "KZ",
    61,
    "up 82",
    1,
    7342,
    1918
  ],
  [
    "JP",
    103,
    "down 13",
    1,
    78391,
    -307
  ],
  [
    "CZ",
    150,
    "up 22",
    1,
    10310,
    -155
  ],
  [
    "TW",
    174,
    "re",
    1,
    13979,
    null
  ]
];

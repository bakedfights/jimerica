// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-10";
const REFRESHED = "2026-11-11";
const TOTALS = {
  "streams": 8750287461,
  "daily": 2219996,
  "tracks": 34,
  "solo": 7205875757,
  "feat": 670762328
};
const SONGS = [
  [
    "Who",
    2584866783,
    735590,
    false
  ],
  [
    "Like Crazy",
    1491878718,
    199031,
    false
  ],
  [
    "Set Me Free Pt.2",
    495337750,
    137133,
    false
  ],
  [
    "Be Mine",
    420507793,
    206203,
    false
  ],
  [
    "Like Crazy (English Version)",
    408097550,
    57799,
    false
  ],
  [
    "Closer Than This",
    343373569,
    81554,
    false
  ],
  [
    "With you",
    331538777,
    45588,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284173893,
    69544,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    282913532,
    56489,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    250792057,
    31752,
    true
  ],
  [
    "Face-off",
    173774496,
    45644,
    false
  ],
  [
    "Alone",
    160277487,
    42208,
    false
  ],
  [
    "Promise",
    157601793,
    75550,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    156777660,
    76625,
    false
  ],
  [
    "Rebirth (Intro)",
    148545283,
    68878,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137056739,
    33120,
    true
  ],
  [
    "Interlude : Showtime",
    130271497,
    45568,
    false
  ],
  [
    "Interlude : Dive",
    128769269,
    17637,
    false
  ],
  [
    "Who - Rock Remix",
    82208364,
    40578,
    false
  ],
  [
    "Who - Acoustic Remix",
    78614136,
    29671,
    false
  ],
  [
    "Who - Shibuyakei Remix",
    63820977,
    18865,
    false
  ],
  [
    "Who - Instrumental",
    62617581,
    18319,
    false
  ],
  [
    "Who - Funky Remix",
    61320124,
    18204,
    false
  ],
  [
    "Who - Beautiful Mind Remix",
    61064426,
    18661,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55807804,
    5840,
    false
  ],
  [
    "Christmas Love",
    51123122,
    11735,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38282954,
    6074,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36435268,
    5464,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26873424,
    4876,
    false
  ],
  [
    "With you - Instrumental",
    22046520,
    1426,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8336470,
    3016,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5800144,
    1396,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Sped Up",
    5083304,
    8934,
    false
  ],
  [
    "Angel Pt. 2 - Sped Up",
    4298197,
    1024,
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

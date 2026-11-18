// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-17";
const REFRESHED = "2026-11-18";
const TOTALS = {
  "streams": 8766114925,
  "daily": 2231003,
  "tracks": 34,
  "solo": 7219267597,
  "feat": 671565940
};
const SONGS = [
  [
    "WHO",
    2590465445,
    791587,
    false
  ],
  [
    "Like Crazy",
    1493236448,
    194189,
    false
  ],
  [
    "Set Me Free Pt.2",
    496342418,
    141660,
    false
  ],
  [
    "Be Mine",
    422061033,
    218602,
    false
  ],
  [
    "Like Crazy (English Version)",
    408526217,
    62277,
    false
  ],
  [
    "Closer Than This",
    343934809,
    82191,
    false
  ],
  [
    "With you",
    331849553,
    46230,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284663676,
    68331,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283262330,
    49567,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    251018441,
    32552,
    true
  ],
  [
    "Face-off",
    174107512,
    47382,
    false
  ],
  [
    "Alone",
    160567423,
    39569,
    false
  ],
  [
    "Promise",
    158106209,
    70392,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157309569,
    77617,
    false
  ],
  [
    "Rebirth (Intro)",
    149002848,
    67733,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137285169,
    33059,
    true
  ],
  [
    "Interlude : Showtime",
    130575362,
    43845,
    false
  ],
  [
    "Interlude : Dive",
    128890458,
    17037,
    false
  ],
  [
    "WHO - Rock Remix",
    82499148,
    36149,
    false
  ],
  [
    "WHO - Acoustic Remix",
    78792360,
    20907,
    false
  ],
  [
    "WHO - Shibuyakei Remix",
    63916764,
    9641,
    false
  ],
  [
    "WHO - Instrumental",
    62704482,
    8690,
    false
  ],
  [
    "WHO - Funky Remix",
    61409713,
    9160,
    false
  ],
  [
    "WHO - Beautiful Mind Remix",
    61154381,
    9250,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55847362,
    5895,
    false
  ],
  [
    "Christmas Love",
    51261889,
    22906,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38332555,
    7286,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36474284,
    5725,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26905839,
    4733,
    false
  ],
  [
    "With you - Instrumental",
    22055678,
    1325,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8354884,
    2537,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5810505,
    1608,
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
    4306857,
    1371,
    false
  ]
];
const WHO_DATE = "2026-11-16";
const WHO = [
  [
    "BY",
    3,
    "down 1",
    1,
    8429,
    -4897
  ],
  [
    "VE",
    6,
    "down 2",
    1,
    16933,
    -4625
  ],
  [
    "KR",
    7,
    "same",
    1,
    69195,
    122
  ],
  [
    "SG",
    10,
    "same",
    1,
    23276,
    4039
  ],
  [
    "CR",
    14,
    "up 16",
    1,
    14269,
    676
  ],
  [
    "CL",
    26,
    "down 6",
    1,
    62073,
    1284
  ],
  [
    "KZ",
    44,
    "up 17",
    1,
    8432,
    1090
  ],
  [
    "JP",
    80,
    "up 23",
    1,
    79123,
    732
  ],
  [
    "PY",
    107,
    "down 73",
    1,
    5682,
    -4430
  ],
  [
    "CZ",
    167,
    "down 17",
    1,
    11229,
    919
  ]
];

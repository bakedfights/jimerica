// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-12";
const REFRESHED = "2026-11-13";
const TOTALS = {
  "streams": 8754891324,
  "daily": 2385810,
  "tracks": 34,
  "solo": 7209608870,
  "feat": 671002804
};
const SONGS = [
  [
    "Who",
    2586466631,
    826263,
    false
  ],
  [
    "Like Crazy",
    1492269701,
    198925,
    false
  ],
  [
    "Set Me Free Pt.2",
    495624055,
    151515,
    false
  ],
  [
    "Be Mine",
    420940301,
    229169,
    false
  ],
  [
    "Like Crazy (English Version)",
    408220135,
    65497,
    false
  ],
  [
    "Closer Than This",
    343538746,
    85595,
    false
  ],
  [
    "With you",
    331630006,
    46742,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284324680,
    76416,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283018688,
    53254,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    250859136,
    34190,
    true
  ],
  [
    "Face-off",
    173871196,
    50703,
    false
  ],
  [
    "Alone",
    160366619,
    46247,
    false
  ],
  [
    "Promise",
    157745269,
    74139,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    156928250,
    76953,
    false
  ],
  [
    "Rebirth (Intro)",
    148681096,
    69849,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137124980,
    34664,
    true
  ],
  [
    "Interlude : Showtime",
    130363315,
    48018,
    false
  ],
  [
    "Interlude : Dive",
    128804929,
    18861,
    false
  ],
  [
    "Who - Rock Remix",
    82295703,
    48568,
    false
  ],
  [
    "Who - Acoustic Remix",
    78681776,
    32290,
    false
  ],
  [
    "Who - Shibuyakei Remix",
    63856296,
    18102,
    false
  ],
  [
    "Who - Instrumental",
    62650348,
    17071,
    false
  ],
  [
    "Who - Funky Remix",
    61353365,
    16711,
    false
  ],
  [
    "Who - Beautiful Mind Remix",
    61097650,
    17190,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55819370,
    5905,
    false
  ],
  [
    "Christmas Love",
    51154981,
    17746,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38296981,
    7971,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36446548,
    5509,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26883229,
    5030,
    false
  ],
  [
    "With you - Instrumental",
    22049144,
    1341,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8341438,
    2768,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5803024,
    1418,
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
    4300434,
    1190,
    false
  ]
];
const WHO_DATE = "2026-11-11";
const WHO = [
  [
    "BY",
    2,
    "same",
    1,
    10979,
    -732
  ],
  [
    "VE",
    5,
    "re",
    1,
    18946,
    null
  ],
  [
    "KR",
    7,
    "down 1",
    1,
    71297,
    1218
  ],
  [
    "SG",
    10,
    "up 13",
    1,
    23025,
    4967
  ],
  [
    "CR",
    25,
    "up 22",
    1,
    14066,
    2717
  ],
  [
    "JP",
    77,
    "same",
    1,
    79942,
    1151
  ],
  [
    "KZ",
    113,
    "down 2",
    1,
    5870,
    16
  ]
];

// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-18";
const REFRESHED = "2026-11-19";
const TOTALS = {
  "streams": 8768403607,
  "daily": 2288682,
  "tracks": 34,
  "solo": 7221226857,
  "feat": 671686509
};
const SONGS = [
  [
    "WHO",
    2591272051,
    806606,
    false
  ],
  [
    "Like Crazy",
    1493442511,
    206063,
    false
  ],
  [
    "Set Me Free Pt.2",
    496488922,
    146504,
    false
  ],
  [
    "Be Mine",
    422291505,
    230472,
    false
  ],
  [
    "Like Crazy (English Version)",
    408590905,
    64688,
    false
  ],
  [
    "Closer Than This",
    344015819,
    81010,
    false
  ],
  [
    "With you",
    331898539,
    48986,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284733723,
    70047,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283314072,
    51742,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    251052881,
    34440,
    true
  ],
  [
    "Face-off",
    174156741,
    49229,
    false
  ],
  [
    "Alone",
    160612407,
    44984,
    false
  ],
  [
    "Promise",
    158179386,
    73177,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157386839,
    77270,
    false
  ],
  [
    "Rebirth (Intro)",
    149067478,
    64630,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137319556,
    34387,
    true
  ],
  [
    "Interlude : Showtime",
    130616950,
    41588,
    false
  ],
  [
    "Interlude : Dive",
    128908812,
    18354,
    false
  ],
  [
    "WHO - Rock Remix",
    82536218,
    37070,
    false
  ],
  [
    "WHO - Acoustic Remix",
    78813358,
    20998,
    false
  ],
  [
    "WHO - Shibuyakei Remix",
    63925624,
    8860,
    false
  ],
  [
    "WHO - Instrumental",
    62711598,
    7116,
    false
  ],
  [
    "WHO - Funky Remix",
    61417839,
    8126,
    false
  ],
  [
    "WHO - Beautiful Mind Remix",
    61162550,
    8169,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55853033,
    5671,
    false
  ],
  [
    "Christmas Love",
    51285416,
    23527,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38339696,
    7141,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36480447,
    6163,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26910624,
    4785,
    false
  ],
  [
    "With you - Instrumental",
    22057047,
    1369,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8357306,
    2422,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5812080,
    1575,
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
    4308370,
    1513,
    false
  ]
];
const WHO_DATE = "2026-11-17";
const WHO = [
  [
    "BY",
    3,
    "same",
    1,
    8127,
    -302
  ],
  [
    "KR",
    7,
    "same",
    1,
    62942,
    -6253
  ],
  [
    "SG",
    15,
    "down 5",
    1,
    21182,
    -2094
  ],
  [
    "CL",
    17,
    "up 9",
    1,
    67981,
    5908
  ],
  [
    "PY",
    30,
    "up 77",
    1,
    9209,
    3527
  ],
  [
    "CR",
    33,
    "down 19",
    1,
    12621,
    -1648
  ],
  [
    "KZ",
    43,
    "up 1",
    1,
    8744,
    312
  ],
  [
    "JP",
    75,
    "up 5",
    1,
    80596,
    1473
  ],
  [
    "CZ",
    170,
    "down 3",
    1,
    9962,
    -1267
  ],
  [
    "TW",
    181,
    "re",
    1,
    13741,
    null
  ]
];

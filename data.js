// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-15";
const REFRESHED = "2026-11-16";
const TOTALS = {
  "streams": 8761815785,
  "daily": 2183825,
  "tracks": 34,
  "solo": 7215565262,
  "feat": 671353350
};
const SONGS = [
  [
    "Who",
    2588904056,
    798600,
    false
  ],
  [
    "Like Crazy",
    1492863070,
    187012,
    false
  ],
  [
    "Set Me Free Pt.2",
    496069945,
    138224,
    false
  ],
  [
    "Be Mine",
    421630591,
    227454,
    false
  ],
  [
    "Like Crazy (English Version)",
    408409748,
    59988,
    false
  ],
  [
    "Closer Than This",
    343776781,
    77723,
    false
  ],
  [
    "With you",
    331765755,
    42165,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284533337,
    64324,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283172664,
    49293,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    250957670,
    30580,
    true
  ],
  [
    "Face-off",
    174019296,
    45578,
    false
  ],
  [
    "Alone",
    160492936,
    38390,
    false
  ],
  [
    "Promise",
    157975861,
    70334,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157163211,
    72573,
    false
  ],
  [
    "Rebirth (Intro)",
    148872491,
    62360,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137223016,
    30616,
    true
  ],
  [
    "Interlude : Showtime",
    130490003,
    39177,
    false
  ],
  [
    "Interlude : Dive",
    128857759,
    17282,
    false
  ],
  [
    "Who - Rock Remix",
    82432796,
    34673,
    false
  ],
  [
    "Who - Acoustic Remix",
    78754443,
    17598,
    false
  ],
  [
    "Who - Shibuyakei Remix",
    63898807,
    8499,
    false
  ],
  [
    "Who - Instrumental",
    62688311,
    7062,
    false
  ],
  [
    "Who - Funky Remix",
    61392966,
    7583,
    false
  ],
  [
    "Who - Beautiful Mind Remix",
    61137298,
    7755,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55836453,
    5319,
    false
  ],
  [
    "Christmas Love",
    51218296,
    20573,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38318920,
    6708,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36463820,
    5626,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26897068,
    4355,
    false
  ],
  [
    "With you - Instrumental",
    22053127,
    1263,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8350132,
    2532,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5807547,
    1411,
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
    4304307,
    1195,
    false
  ]
];
const WHO_DATE = "2026-11-14";
const WHO = [
  [
    "BY",
    2,
    "same",
    1,
    12443,
    907
  ],
  [
    "VE",
    4,
    "down 1",
    1,
    22419,
    -580
  ],
  [
    "KR",
    7,
    "same",
    1,
    67879,
    1278
  ],
  [
    "SG",
    10,
    "up 4",
    1,
    21451,
    1207
  ],
  [
    "CL",
    34,
    "up 1",
    1,
    60302,
    -2327
  ],
  [
    "CR",
    49,
    "down 3",
    1,
    12901,
    762
  ],
  [
    "JP",
    90,
    "down 9",
    1,
    78698,
    3872
  ],
  [
    "KZ",
    143,
    "down 20",
    1,
    5424,
    -291
  ],
  [
    "CZ",
    172,
    "up 15",
    1,
    10465,
    -1393
  ]
];

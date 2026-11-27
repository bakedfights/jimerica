// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// LIVE_AS_OF is the Pacific date and time the displayed song totals were read from Spotify's live play counts.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-26";
const LIVE_AS_OF = "2026-11-27 13:53 PT";
const REFRESHED = "2026-11-27";
const TOTALS = {
  "streams": 8788503863,
  "daily": 2361176,
  "tracks": 34,
  "solo": 8115770108,
  "feat": 672733755
};
const SONGS = [
  [
    "WHO",
    2598502745,
    836814,
    false
  ],
  [
    "Like Crazy",
    1495186784,
    199941,
    false
  ],
  [
    "Set Me Free Pt.2",
    497732018,
    148009,
    false
  ],
  [
    "Be Mine",
    424140482,
    212787,
    false
  ],
  [
    "Like Crazy (English Version)",
    409122977,
    64894,
    false
  ],
  [
    "Closer Than This",
    344765960,
    84733,
    false
  ],
  [
    "With you",
    332320587,
    49231,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    285397752,
    74636,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283754590,
    53269,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    251352213,
    34220,
    true
  ],
  [
    "Face-off",
    174605598,
    47499,
    false
  ],
  [
    "Alone",
    160998755,
    49938,
    false
  ],
  [
    "Promise",
    158876706,
    77731,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    158079183,
    84318,
    false
  ],
  [
    "Rebirth (Intro)",
    149654337,
    68097,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137626952,
    37863,
    true
  ],
  [
    "Interlude : Showtime",
    131016153,
    47985,
    false
  ],
  [
    "Interlude : Dive",
    129074700,
    21687,
    false
  ],
  [
    "WHO - Rock Remix",
    82764086,
    34449,
    false
  ],
  [
    "WHO - Acoustic Remix",
    79024305,
    24017,
    false
  ],
  [
    "WHO - Shibuyakei Remix",
    64005511,
    10705,
    false
  ],
  [
    "WHO - Instrumental",
    62786760,
    10349,
    false
  ],
  [
    "WHO - Funky Remix",
    61496081,
    10000,
    false
  ],
  [
    "WHO - Beautiful Mind Remix",
    61244605,
    10828,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55906361,
    7166,
    false
  ],
  [
    "Christmas Love",
    51503101,
    26200,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38394825,
    6888,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36531334,
    5805,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26953302,
    4864,
    false
  ],
  [
    "With you - Instrumental",
    22068340,
    1187,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8378674,
    2740,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5825082,
    1521,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Sped Up",
    5093913,
    9540,
    false
  ],
  [
    "Angel Pt. 2 - Sped Up",
    4319091,
    1265,
    false
  ]
];
const WHO_DATE = "2026-11-25";
const WHO = [["BY", 3, "down 1", 1, 7513, -2490], ["VE", 4, "up 3", 1, 19172, 3246], ["KR", 7, "same", 1, 63696, 2633], ["SG", 15, "same", 1, 21002, -682], ["CL", 30, "down 12", 1, 58233, -13193], ["PY", 49, "down 33", 1, 7648, -4013], ["CR", 68, "down 37", 1, 10335, -2894], ["JP", 77, "down 4", 1, 82153, 1172], ["TW", 95, "up 53", 1, 17681, 2571], ["TH", 132, "down 33", 1, 43357, -6762]];

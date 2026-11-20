// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-19";
const REFRESHED = "2026-11-20";
const TOTALS = {
  "streams": 8770762311,
  "daily": 2358704,
  "tracks": 34,
  "solo": 7223233082,
  "feat": 671808572
};
const SONGS = [
  [
    "WHO",
    2592119841,
    847790,
    false
  ],
  [
    "Like Crazy",
    1493657069,
    214558,
    false
  ],
  [
    "Set Me Free Pt.2",
    496629076,
    140154,
    false
  ],
  [
    "Be Mine",
    422505801,
    214296,
    false
  ],
  [
    "Like Crazy (English Version)",
    408654766,
    63861,
    false
  ],
  [
    "Closer Than This",
    344103367,
    87548,
    false
  ],
  [
    "With you",
    331950030,
    51491,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    284815969,
    82246,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283365071,
    50999,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    251088653,
    35772,
    true
  ],
  [
    "Face-off",
    174212557,
    55816,
    false
  ],
  [
    "Alone",
    160657907,
    45500,
    false
  ],
  [
    "Promise",
    158255284,
    75898,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157471410,
    84571,
    false
  ],
  [
    "Rebirth (Intro)",
    149133894,
    66416,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137354848,
    35292,
    true
  ],
  [
    "Interlude : Showtime",
    130663943,
    46993,
    false
  ],
  [
    "Interlude : Dive",
    128928489,
    19677,
    false
  ],
  [
    "WHO - Rock Remix",
    82561867,
    25649,
    false
  ],
  [
    "WHO - Acoustic Remix",
    78836814,
    23456,
    false
  ],
  [
    "WHO - Shibuyakei Remix",
    63934313,
    8689,
    false
  ],
  [
    "WHO - Instrumental",
    62719642,
    8044,
    false
  ],
  [
    "WHO - Funky Remix",
    61426608,
    8769,
    false
  ],
  [
    "WHO - Beautiful Mind Remix",
    61171579,
    9029,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55858766,
    5733,
    false
  ],
  [
    "Christmas Love",
    51309639,
    24223,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38347040,
    7344,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36487111,
    6664,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26916475,
    5851,
    false
  ],
  [
    "With you - Instrumental",
    22058405,
    1358,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8359510,
    2204,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5813615,
    1535,
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
    4309648,
    1278,
    false
  ]
];
const WHO_DATE = "2026-11-18";
const WHO = [
  [
    "BY",
    3,
    "same",
    1,
    7857,
    -270
  ],
  [
    "VE",
    5,
    "re",
    1,
    19025,
    null
  ],
  [
    "KR",
    8,
    "down 1",
    1,
    55380,
    -7562
  ],
  [
    "CL",
    20,
    "down 3",
    1,
    66355,
    -1626
  ],
  [
    "CR",
    20,
    "up 13",
    1,
    14662,
    2041
  ],
  [
    "SG",
    22,
    "down 7",
    1,
    17569,
    -3613
  ],
  [
    "KZ",
    36,
    "up 7",
    1,
    9084,
    340
  ],
  [
    "PY",
    50,
    "down 20",
    1,
    8050,
    -1159
  ],
  [
    "JP",
    82,
    "down 7",
    1,
    78283,
    -2313
  ]
];

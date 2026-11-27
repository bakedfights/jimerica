// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-26";
const REFRESHED = "2026-11-27";
const TOTALS = {
  "streams": 8786227483,
  "daily": 2361176,
  "tracks": 34,
  "solo": 7236458875,
  "feat": 672608427
};
const SONGS = [
  [
    "WHO",
    2597741935,
    836814,
    false
  ],
  [
    "Like Crazy",
    1494990031,
    199941,
    false
  ],
  [
    "Set Me Free Pt.2",
    497579366,
    148009,
    false
  ],
  [
    "Be Mine",
    423922448,
    212787,
    false
  ],
  [
    "Like Crazy (English Version)",
    409057283,
    64894,
    false
  ],
  [
    "Closer Than This",
    344679611,
    84733,
    false
  ],
  [
    "With you",
    332271261,
    49231,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    285317730,
    74636,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283702111,
    53269,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    251318652,
    34220,
    true
  ],
  [
    "Face-off",
    174558309,
    47499,
    false
  ],
  [
    "Alone",
    160948634,
    49938,
    false
  ],
  [
    "Promise",
    158799660,
    77731,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157994170,
    84318,
    false
  ],
  [
    "Rebirth (Intro)",
    149589418,
    68097,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137587664,
    37863,
    true
  ],
  [
    "Interlude : Showtime",
    130967342,
    47985,
    false
  ],
  [
    "Interlude : Dive",
    129052866,
    21687,
    false
  ],
  [
    "WHO - Rock Remix",
    82735232,
    34449,
    false
  ],
  [
    "WHO - Acoustic Remix",
    79001965,
    24017,
    false
  ],
  [
    "WHO - Shibuyakei Remix",
    63996816,
    10705,
    false
  ],
  [
    "WHO - Instrumental",
    62778365,
    10349,
    false
  ],
  [
    "WHO - Funky Remix",
    61487360,
    10000,
    false
  ],
  [
    "WHO - Beautiful Mind Remix",
    61235526,
    10828,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55900480,
    7166,
    false
  ],
  [
    "Christmas Love",
    51475787,
    26200,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38387755,
    6888,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36525199,
    5805,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26947967,
    4864,
    false
  ],
  [
    "With you - Instrumental",
    22066931,
    1187,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8375352,
    2740,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5823654,
    1521,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Sped Up",
    5092844,
    9540,
    false
  ],
  [
    "Angel Pt. 2 - Sped Up",
    4317759,
    1265,
    false
  ]
];
const WHO_DATE = "2026-11-25";
const WHO = [["BY", 2, "up 1", 1, 10003, 3429], ["KR", 7, "down 1", 1, 61063, -7142], ["VE", 7, "down 3", 1, 15926, -7404], ["SG", 15, "down 5", 1, 21684, -2008], ["PY", 16, "down 1", 1, 11661, -1419], ["CL", 18, "down 1", 1, 71426, -1276], ["CR", 31, "same", 1, 13229, 348], ["JP", 73, "up 29", 1, 80981, 766], ["TH", 99, "up 31", 1, 50119, 5402], ["TW", 148, "re", 1, 15110, null]];

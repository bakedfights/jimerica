// Daily Spotify data. UPDATED and WHO_DATE are source dataset dates, never the retrieval time.
// REFRESHED is the Pacific (America/Los_Angeles) calendar date the daily routine last published this file.
// SONGS: [title, total streams, daily gain or null, is feature]
// WHO: [country code, rank, movement, peak or null, daily streams, daily change or null]
const UPDATED = "2026-11-25";
const REFRESHED = "2026-11-26";
const TOTALS = {
  "streams": 8783866307,
  "daily": 2344587,
  "tracks": 34,
  "solo": 7234454655,
  "feat": 672483075
};
const SONGS = [
  [
    "WHO",
    2596905121,
    875092,
    false
  ],
  [
    "Like Crazy",
    1494790090,
    196060,
    false
  ],
  [
    "Set Me Free Pt.2",
    497431357,
    142919,
    false
  ],
  [
    "Be Mine",
    423709661,
    212333,
    false
  ],
  [
    "Like Crazy (English Version)",
    408992389,
    59947,
    false
  ],
  [
    "Closer Than This",
    344594878,
    85460,
    false
  ],
  [
    "With you",
    332222030,
    48861,
    false
  ],
  [
    "Smeraldo Garden Marching Band (feat. Loco)",
    285243094,
    75432,
    false
  ],
  [
    "VIBE (feat. Jimin of BTS)",
    283648842,
    51462,
    true
  ],
  [
    "Angel Pt. 1 (feat. Kodak Black, NLE Choppa, Jimin of BTS, JVKE & Muni Long)",
    251284432,
    34565,
    true
  ],
  [
    "Face-off",
    174510810,
    50864,
    false
  ],
  [
    "Alone",
    160898696,
    42657,
    false
  ],
  [
    "Promise",
    158721929,
    84054,
    false
  ],
  [
    "Slow Dance (feat. Sofia Carson)",
    157909852,
    75513,
    false
  ],
  [
    "Rebirth (Intro)",
    149521321,
    69032,
    false
  ],
  [
    "Angel Pt. 2 (feat. Jimin of BTS & JVKE feat. Charlie Puth & Muni Long)",
    137549801,
    34209,
    true
  ],
  [
    "Interlude : Showtime",
    130919357,
    43897,
    false
  ],
  [
    "Interlude : Dive",
    129031179,
    18462,
    false
  ],
  [
    "WHO - Rock Remix",
    82700783,
    26831,
    false
  ],
  [
    "WHO - Acoustic Remix",
    78977948,
    26574,
    false
  ],
  [
    "WHO - Shibuyakei Remix",
    63986111,
    9196,
    false
  ],
  [
    "WHO - Instrumental",
    62768016,
    8792,
    false
  ],
  [
    "WHO - Funky Remix",
    61477360,
    8977,
    false
  ],
  [
    "WHO - Beautiful Mind Remix",
    61224698,
    9514,
    false
  ],
  [
    "Angel Pt. 1 (feat. Jimin of BTS, JVKE & Muni Long) - Trailer Version",
    55893314,
    6279,
    false
  ],
  [
    "Christmas Love",
    51449587,
    25529,
    false
  ],
  [
    "Like Crazy (Deep House Remix)",
    38380867,
    5779,
    false
  ],
  [
    "Like Crazy (UK Garage Remix)",
    36519394,
    5616,
    false
  ],
  [
    "Like Crazy (Instrumental)",
    26943103,
    4697,
    false
  ],
  [
    "With you - Instrumental",
    22065744,
    1230,
    false
  ],
  [
    "Angel Pt. 2 - Acoustic Version",
    8372612,
    2210,
    false
  ],
  [
    "Angel (feat. Muni Long, JVKE, NLE Choppa) (Anniversary Edition)",
    5822133,
    1337,
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
    4316494,
    1207,
    false
  ]
];
const WHO_DATE = "2026-11-24";
const WHO = [["BY", 2, "up 1", 1, 10003, 3429], ["KR", 7, "down 1", 1, 61063, -7142], ["VE", 7, "down 3", 1, 15926, -7404], ["SG", 15, "down 5", 1, 21684, -2008], ["PY", 16, "down 1", 1, 11661, -1419], ["CL", 18, "down 1", 1, 71426, -1276], ["CR", 31, "same", 1, 13229, 348], ["JP", 73, "up 29", 1, 80981, 766], ["TH", 99, "up 31", 1, 50119, 5402], ["TW", 148, "re", 1, 15110, null]];

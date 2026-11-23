// First-week entries on Spotify Daily country charts at release.
// Window: debut day through the sixth day after it. Only songs with a verified window are included.
// peaks / globalPeak: best (lowest) Daily position in the recorded window. Omit a peak if it was not recorded.
// Credit Spotify Charts only. Do not invent countries or positions.
const DEBUT_CHARTS = {
  "Like Crazy": {
    debut: "2023-03-25",
    through: "2023-03-31",
    global: true,
    countries: ["AE", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CZ", "DE", "DK", "DO", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IL", "IN", "IT", "JP", "KR", "KZ", "LT", "LV", "MA", "MX", "MY", "NG", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PK", "PL", "PT", "PY", "RO", "SA", "SG", "SK", "SV", "TH", "TR", "TW", "UA", "US", "UY", "VE", "VN", "ZA"],
    peaks: {AE:5, AR:65, AT:62, AU:97, BE:149, BG:7, BO:3, BR:51, BY:3, CA:24, CH:60, CL:25, CO:22, CR:36, CZ:105, DE:68, DK:148, DO:47, EC:10, EE:10, EG:10, ES:149, FI:65, FR:111, GB:87, GR:135, GT:20, HK:14, HN:7, HU:102, ID:61, IL:188, IN:33, IT:198, JP:51, KR:1, KZ:14, LT:7, LV:11, MA:5, MX:53, MY:5, NG:66, NI:5, NL:161, NO:194, NZ:93, PA:10, PE:3, PH:25, PK:1, PL:55, PT:50, PY:5, RO:1, SA:1, SG:6, SK:51, SV:6, TH:1, TR:81, TW:7, UA:10, US:5, UY:59, VE:4, VN:1, ZA:47},
    globalPeak: 1
  },
  "Like Crazy (English Version)": {
    debut: "2023-03-24",
    through: "2023-03-30",
    global: true,
    countries: ["AE", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CZ", "DE", "DK", "DO", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IT", "JP", "KR", "KZ", "LT", "LU", "LV", "MA", "MX", "MY", "NG", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PK", "PL", "PT", "PY", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "UA", "US", "UY", "VE", "VN", "ZA"],
    peaks: {AE:4, AR:57, AT:52, AU:110, BE:75, BG:4, BO:5, BR:45, BY:2, CA:15, CH:53, CL:34, CO:23, CR:30, CZ:79, DE:63, DK:118, DO:43, EC:11, EE:6, EG:6, ES:173, FI:56, FR:83, GB:50, GR:108, GT:18, HK:16, HN:6, HU:67, ID:51, IE:129, IL:151, IN:19, IT:151, JP:51, KR:1, KZ:10, LT:7, LU:41, LV:5, MA:4, MX:41, MY:4, NG:65, NI:4, NL:110, NO:135, NZ:165, PA:13, PE:3, PH:15, PK:1, PL:38, PT:41, PY:5, RO:2, SA:1, SE:183, SG:6, SK:40, SV:5, TH:1, TR:51, TW:8, UA:5, US:6, UY:59, VE:5, VN:1, ZA:34},
    globalPeak: 2,
    note: "The archived daily tables have no positions for March 25–26, 2023, so no additional countries are recorded for those two days."
  },
  "Face-off": {
    debut: "2023-03-24",
    through: "2023-03-30",
    global: true,
    countries: ["AE", "AR", "BG", "BO", "BR", "BY", "CA", "CL", "CO", "CR", "DO", "EC", "EE", "EG", "GT", "HK", "HN", "ID", "IN", "JP", "KR", "KZ", "LT", "LV", "MA", "MX", "MY", "NG", "NI", "PA", "PE", "PH", "PK", "PT", "PY", "RO", "SA", "SG", "SV", "TH", "TR", "TW", "UA", "US", "VE", "VN", "ZA"],
    peaks: {AE:29, AR:189, BG:85, BO:56, BR:120, BY:33, CA:136, CL:169, CO:113, CR:149, DO:176, EC:71, EE:83, EG:46, GT:100, HK:64, HN:51, ID:199, IN:144, JP:160, KR:5, KZ:62, LT:79, LV:114, MA:49, MX:147, MY:47, NG:171, NI:45, PA:92, PE:37, PH:99, PK:4, PT:171, PY:53, RO:41, SA:4, SG:47, SV:54, TH:29, TR:195, TW:87, UA:55, US:110, VE:47, VN:5, ZA:141},
    globalPeak: 35
  },
  "Alone": {
    debut: "2023-03-24",
    through: "2023-03-30",
    global: true,
    countries: ["AE", "BG", "BO", "BR", "BY", "CA", "CL", "CO", "CR", "DO", "EC", "EE", "EG", "GT", "HK", "HN", "JP", "KR", "KZ", "LT", "LV", "MA", "MX", "MY", "NI", "PA", "PE", "PH", "PK", "PY", "RO", "SA", "SG", "SV", "TH", "TW", "UA", "US", "VE", "VN"],
    peaks: {AE:33, BG:129, BO:58, BR:138, BY:47, CA:196, CL:185, CO:130, CR:176, DO:196, EC:76, EE:143, EG:65, GT:114, HK:69, HN:59, JP:191, KR:5, KZ:89, LT:108, LV:159, MA:57, MX:170, MY:50, NI:52, PA:110, PE:42, PH:122, PK:6, PY:54, RO:57, SA:7, SG:52, SV:56, TH:32, TW:100, UA:97, US:151, VE:58, VN:5},
    globalPeak: 44
  },
  "Interlude : Dive": {
    debut: "2023-03-24",
    through: "2023-03-30",
    global: true,
    countries: ["AE", "BG", "BO", "BR", "BY", "CL", "CO", "EC", "EG", "GT", "HK", "HN", "KR", "KZ", "LT", "MA", "MY", "NI", "PA", "PE", "PH", "PK", "PY", "RO", "SA", "SG", "SV", "TH", "TW", "UA", "VE", "VN"],
    peaks: {AE:44, BG:169, BO:65, BR:161, BY:78, CL:192, CO:161, EC:84, EG:75, GT:123, HK:97, HN:58, KR:8, KZ:121, LT:158, MA:72, MY:59, NI:59, PA:122, PE:53, PH:140, PK:7, PY:55, RO:82, SA:10, SG:70, SV:61, TH:41, TW:138, UA:153, VE:55, VN:7},
    globalPeak: 62
  },
  "With you": {
    debut: "2022-04-24",
    through: "2022-04-30",
    global: true,
    countries: ["AE", "AR", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "DE", "DO", "EC", "EG", "GT", "HK", "HN", "ID", "IN", "JP", "KR", "LT", "MA", "MX", "MY", "NI", "PA", "PE", "PH", "PT", "PY", "RO", "SA", "SG", "SV", "TH", "TR", "TW", "US", "UY", "VN", "ZA"],
    peaks: {AE:5, AR:75, BG:67, BO:13, BR:29, CA:63, CH:163, CL:70, CO:25, CR:60, DE:195, DO:53, EC:21, EG:10, GT:20, HK:34, HN:13, ID:10, IN:8, JP:58, KR:2, LT:60, MA:1, MX:44, MY:4, NI:14, PA:8, PE:7, PH:10, PT:86, PY:21, RO:13, SA:3, SG:9, SV:16, TH:1, TR:133, TW:14, US:92, UY:114, VN:1, ZA:38},
    globalPeak: 5
  },
  "With you - Instrumental": {
    debut: "2022-04-24",
    through: "2022-04-30",
    global: false,
    countries: ["AE", "BO", "BR", "EG", "ID", "KR", "MA", "MY", "PE", "PH", "PY", "SA", "SG", "TH", "VN"],
    peaks: {AE:70, BO:170, BR:174, EG:71, ID:154, KR:14, MA:29, MY:144, PE:131, PH:110, PY:189, SA:10, SG:183, TH:55, VN:14}
  },
  "WHO": {
    debut: "2024-07-19",
    through: "2024-07-25",
    global: true,
    countries: ["AE", "AR", "AT", "BG", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CZ", "DE", "DO", "EC", "EE", "EG", "ES", "FI", "GB", "GT", "HK", "HN", "HU", "ID", "IN", "IT", "JP", "KR", "KZ", "LT", "LV", "MA", "MX", "MY", "NI", "NL", "NO", "PA", "PE", "PH", "PK", "PL", "PT", "PY", "RO", "SA", "SG", "SV", "TH", "TR", "TW", "UA", "US", "UY", "VE", "VN", "ZA"],
    peaks: {AE:2, AR:30, AT:81, BG:1, BO:1, BR:5, BY:2, CA:46, CH:82, CL:2, CO:14, CR:2, CZ:5, DE:96, DO:13, EC:15, EE:85, EG:32, ES:121, FI:106, GB:35, GT:5, HK:1, HN:1, HU:75, ID:105, IN:41, IT:114, JP:2, KR:1, KZ:1, LT:50, LV:1, MA:1, MX:19, MY:4, NI:1, NL:134, NO:169, PA:3, PE:1, PH:12, PK:5, PL:38, PT:96, PY:1, RO:6, SA:1, SG:1, SV:1, TH:1, TR:60, TW:1, UA:21, US:2, UY:51, VE:1, VN:1, ZA:98},
    globalPeak: 1,
    note: "The archived daily tables have no complete country lists for July 20–22, 2024, so no additional countries are recorded for those three days."
  },
  "Be Mine": {
    debut: "2024-07-19",
    through: "2024-07-25",
    global: true,
    countries: ["AE", "BG", "BO", "BR", "BY", "CL", "CO", "CR", "DO", "EC", "EG", "GT", "HK", "HN", "KR", "KZ", "LV", "MA", "MY", "NI", "PA", "PE", "PK", "PY", "RO", "SA", "SG", "SV", "TH", "TW", "UA", "VE", "VN"],
    peaks: {AE:43, BG:10, BO:42, BR:81, BY:27, CL:53, CO:183, CR:51, DO:118, EC:133, EG:124, GT:144, HK:61, HN:52, KR:6, KZ:11, LV:143, MA:36, MY:95, NI:35, PA:92, PE:49, PK:75, PY:58, RO:65, SA:8, SG:66, SV:54, TH:69, TW:96, UA:128, VE:34, VN:6},
    globalPeak: 46,
    note: "The archived daily tables have no complete country lists for July 20–22, 2024, so no additional countries are recorded for those three days."
  },
  "Rebirth (Intro)": {
    debut: "2024-07-19",
    through: "2024-07-25",
    global: true,
    countries: ["AE", "BG", "BO", "BR", "BY", "DO", "EC", "EG", "HK", "HN", "KR", "KZ", "MA", "MY", "NI", "PA", "PE", "PK", "PY", "RO", "SA", "SG", "SV", "TH", "TW", "VE", "VN"],
    peaks: {AE:46, BG:11, BO:52, BR:99, BY:46, DO:135, EC:170, EG:188, HK:58, HN:63, KR:9, KZ:20, MA:46, MY:100, NI:52, PA:165, PE:61, PK:114, PY:67, RO:104, SA:11, SG:58, SV:103, TH:33, TW:130, VE:39, VN:10},
    globalPeak: 59,
    note: "Only the debut day, July 19, 2024, has a complete country list. Complete lists for July 20–25, 2024, were not archived, so no additional countries are recorded for those days."
  },
  "Smeraldo Garden Marching Band (feat. Loco)": {
    debut: "2024-06-28",
    through: "2024-07-04",
    global: true,
    countries: ["AE", "AR", "BG", "BO", "BR", "BY", "CL", "CO", "CR", "CZ", "DO", "EC", "EG", "GT", "HK", "HN", "IN", "JP", "KR", "KZ", "LV", "MA", "MX", "MY", "NI", "PA", "PE", "PH", "PK", "PY", "RO", "SA", "SG", "SV", "TH", "TR", "TW", "UA", "US", "UY", "VE", "VN"],
    peaks: {AE:13, AR:106, BG:9, BO:22, BR:43, BY:23, CL:33, CO:58, CR:42, CZ:93, DO:83, EC:52, EG:51, GT:49, HK:15, HN:1, IN:140, JP:53, KR:2, KZ:1, LV:45, MA:8, MX:116, MY:41, NI:1, PA:31, PE:11, PH:82, PK:21, PY:10, RO:36, SA:1, SG:4, SV:9, TH:2, TR:147, TW:24, UA:102, US:41, UY:159, VE:7, VN:1},
    globalPeak: 4,
    note: "Only the debut day, June 28, 2024, has a complete country list. Complete lists for June 29–July 4, 2024, were not archived, so no additional countries are recorded for those days."
  }
};

// First-week entries on Spotify Daily country charts at release.
// Window: debut day through the sixth day after it. Only songs with a complete, verified window are included.
// Credit Spotify Charts only. Do not invent countries.
const DEBUT_CHARTS = {
  "Like Crazy": {
    debut: "2023-03-25",
    through: "2023-03-31",
    global: true,
    countries: ["AE", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CZ", "DE", "DK", "DO", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IL", "IN", "IT", "JP", "KR", "KZ", "LT", "LV", "MA", "MX", "MY", "NG", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PK", "PL", "PT", "PY", "RO", "SA", "SG", "SK", "SV", "TH", "TR", "TW", "UA", "US", "UY", "VE", "VN", "ZA"]
  },
  "Like Crazy (English Version)": {
    debut: "2023-03-24",
    through: "2023-03-30",
    global: true,
    countries: ["AE", "AR", "AT", "AU", "BE", "BG", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CZ", "DE", "DK", "DO", "EC", "EE", "EG", "ES", "FI", "FR", "GB", "GR", "GT", "HK", "HN", "HU", "ID", "IE", "IL", "IN", "IT", "JP", "KR", "KZ", "LT", "LU", "LV", "MA", "MX", "MY", "NG", "NI", "NL", "NO", "NZ", "PA", "PE", "PH", "PK", "PL", "PT", "PY", "RO", "SA", "SE", "SG", "SK", "SV", "TH", "TR", "TW", "UA", "US", "UY", "VE", "VN", "ZA"],
    note: "The archived daily tables have no positions for March 25–26, 2023, so no additional countries are recorded for those two days."
  },
  "Face-off": {
    debut: "2023-03-24",
    through: "2023-03-30",
    global: true,
    countries: ["AE", "AR", "BG", "BO", "BR", "BY", "CA", "CL", "CO", "CR", "DO", "EC", "EE", "EG", "GT", "HK", "HN", "ID", "IN", "JP", "KR", "KZ", "LT", "LV", "MA", "MX", "MY", "NG", "NI", "PA", "PE", "PH", "PK", "PT", "PY", "RO", "SA", "SG", "SV", "TH", "TR", "TW", "UA", "US", "VE", "VN", "ZA"]
  },
  "Alone": {
    debut: "2023-03-24",
    through: "2023-03-30",
    global: true,
    countries: ["AE", "BG", "BO", "BR", "BY", "CA", "CL", "CO", "CR", "DO", "EC", "EE", "EG", "GT", "HK", "HN", "JP", "KR", "KZ", "LT", "LV", "MA", "MX", "MY", "NI", "PA", "PE", "PH", "PK", "PY", "RO", "SA", "SG", "SV", "TH", "TW", "UA", "US", "VE", "VN"]
  },
  "Interlude : Dive": {
    debut: "2023-03-24",
    through: "2023-03-30",
    global: true,
    countries: ["AE", "BG", "BO", "BR", "BY", "CL", "CO", "EC", "EG", "GT", "HK", "HN", "KR", "KZ", "LT", "MA", "MY", "NI", "PA", "PE", "PH", "PK", "PY", "RO", "SA", "SG", "SV", "TH", "TW", "UA", "VE", "VN"]
  },
  "With you": {
    debut: "2022-04-24",
    through: "2022-04-30",
    global: true,
    countries: ["AE", "AR", "BG", "BO", "BR", "CA", "CH", "CL", "CO", "CR", "DE", "DO", "EC", "EG", "GT", "HK", "HN", "ID", "IN", "JP", "KR", "LT", "MA", "MX", "MY", "NI", "PA", "PE", "PH", "PT", "PY", "RO", "SA", "SG", "SV", "TH", "TR", "TW", "US", "UY", "VN", "ZA"]
  },
  "With you - Instrumental": {
    debut: "2022-04-24",
    through: "2022-04-30",
    global: false,
    countries: ["AE", "BO", "BR", "EG", "ID", "KR", "MA", "MY", "PE", "PH", "PY", "SA", "SG", "TH", "VN"]
  },
  "WHO": {
    debut: "2024-07-19",
    through: "2024-07-25",
    global: true,
    countries: ["AE", "AR", "AT", "BG", "BO", "BR", "BY", "CA", "CH", "CL", "CO", "CR", "CZ", "DE", "DO", "EC", "EE", "EG", "ES", "FI", "GB", "GT", "HK", "HN", "HU", "ID", "IN", "IT", "JP", "KR", "KZ", "LT", "LV", "MA", "MX", "MY", "NI", "NL", "NO", "PA", "PE", "PH", "PK", "PL", "PT", "PY", "RO", "SA", "SG", "SV", "TH", "TR", "TW", "UA", "US", "UY", "VE", "VN", "ZA"],
    note: "The archived daily tables have no complete country lists for July 20–22, 2024, so no additional countries are recorded for those three days."
  },
  "Be Mine": {
    debut: "2024-07-19",
    through: "2024-07-25",
    global: true,
    countries: ["AE", "BG", "BO", "BR", "BY", "CL", "CO", "CR", "DO", "EC", "EG", "GT", "HK", "HN", "KR", "KZ", "LV", "MA", "MY", "NI", "PA", "PE", "PK", "PY", "RO", "SA", "SG", "SV", "TH", "TW", "UA", "VE", "VN"],
    note: "The archived daily tables have no complete country lists for July 20–22, 2024, so no additional countries are recorded for those three days."
  },
  "Rebirth (Intro)": {
    debut: "2024-07-19",
    through: "2024-07-25",
    global: true,
    countries: ["AE", "BG", "BO", "BR", "BY", "DO", "EC", "EG", "HK", "HN", "KR", "KZ", "MA", "MY", "NI", "PA", "PE", "PK", "PY", "RO", "SA", "SG", "SV", "TH", "TW", "VE", "VN"],
    note: "Only the debut day, July 19, 2024, has a complete country list. Complete lists for July 20–25, 2024, were not archived, so no additional countries are recorded for those days."
  },
  "Smeraldo Garden Marching Band (feat. Loco)": {
    debut: "2024-06-28",
    through: "2024-07-04",
    global: true,
    countries: ["AE", "AR", "BG", "BO", "BR", "BY", "CL", "CO", "CR", "CZ", "DO", "EC", "EG", "GT", "HK", "HN", "IN", "JP", "KR", "KZ", "LV", "MA", "MX", "MY", "NI", "PA", "PE", "PH", "PK", "PY", "RO", "SA", "SG", "SV", "TH", "TR", "TW", "UA", "US", "UY", "VE", "VN"],
    note: "Only the debut day, June 28, 2024, has a complete country list. Complete lists for June 29–July 4, 2024, were not archived, so no additional countries are recorded for those days."
  }
};

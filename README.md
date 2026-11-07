# JIMERICA

Static fansite: **Archive of Jimin's Achievements**.

Live site: https://bakedfights.github.io/jimerica/

Plain HTML, CSS and JavaScript; no build step, dependencies or API keys. GitHub Pages serves `main` from the repository root. All daily statistics are in `data.js`; `app.js` renders and filters the song/country tables. Achievement text and citations are in `index.html`.

For a local preview: `python3 -m http.server 8080` from this directory.

## Daily data

- `UPDATED`: ISO `YYYY-MM-DD` daily Spotify dataset date.
- `TOTALS`: `{ streams, daily, tracks, solo, feat }` as numbers.
- `SONGS`: `[title, totalStreams, dailyGainOrNull, isFeature]`.
- `WHO_DATE`: independent verified country-chart date.
- `WHO`: `[countryCode, rank, movement, peakOrNull, dailyStreams, dailyChangeOrNull]`.

Movement values are `same`, `up N`, `down N`, `re`, or `new`. Missing data is `null`, not zero. Never change a source date just to make it look current. Source values are preserved from the fan archive during migration; live-counter totals and dated daily gains are distinct observations.

Update only `data.js` for the daily refresh. Keep the previous canvas Page updated too until the owner switches jimerica.wiki. No custom domain has been configured by this migration.

@JIMERICA · Source: Spotify

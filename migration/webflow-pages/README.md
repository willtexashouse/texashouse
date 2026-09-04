# Live Webflow site — captured pages

Captured **2026-08-19** from `https://www.texashouse.org` (Webflow site
`678ecae5cbbb0fa4ca745f8b`, last published 2026-04-29).

This exists so the rebuild can be **seamless** — every page, section, and piece
of copy from the live site is on disk and greppable, rather than something we
have to keep re-reading over the network.

## Layout

```
raw/                     50 pages, 1.1 MB
├── index.html           home
├── media.html           the newsroom (page title is "Media", H1 is "newsroom")
├── partnership.html     partner / sponsor page
├── past-events.html     past-events index, grouped by activation
├── schedule.html        SXSW schedule (rows are CMS-driven)
├── privacy-policy.html · thank-you.html · 404.html
├── old-home.html        the previous homepage (March 10–11, 2025)
├── activations/         5  — sxsw-2026, sxsw-2025, sxsw-london-2025,
│                             race-weekend-2025, new-activation
├── newsroom/            4  — article detail pages
└── past-events/         32 — individual session detail pages
```

`CONTENT-MAP.md` — every page with title, meta description, and heading outline.
Read this first; go to `raw/` only when you need exact copy or markup.
`content-map.json` — the same data, machine-readable.
`extract.py` — regenerates both. Re-run after any refetch.

## Coverage vs the CMS export

| Collection | In CMS | Pages captured | Note |
| ---------- | -----: | -------------: | ---- |
| Past Events | 34 | 32 | 2 are unpublished drafts — both `cuvee-coffee-bar-open-for-networking*` return 404 live |
| Activations | 5 | 5 | includes the placeholder `new-activation` |
| Newsrooms | 4 | 4 | complete |
| Sponsors | 52 | — | no detail pages; sponsors render inside other pages |
| ROS Segments | 58 | — | schedule rows; render inside `schedule.html` |

## Routes that do NOT exist on the live site

`/about` · `/events` · `/newsroom` — all 404. The rebuild **adds** About and
Events as real pages, and moves the newsroom from `/media` to `/newsroom`.
Set up redirects for `/media` at launch.

## Findings worth carrying into the rebuild

- **The brand doc is accurate.** The homepage confirms it directly: the H1 is
  `Recognizing Texcellence .`, the team roster is the same five names, and the
  partner tiers are exactly Presenting → Partners → Activation → Food & Beverage.
- **`Recognizing Texcellence .` has a space before the period** in the live
  markup. The brand doc says "always with period" — confirm whether the space is
  intentional before reproducing it.
- **The upcoming/past tension is already live.** The homepage `<title>` still
  promotes "Texas House @ SXSW 2026 | March 12 / 13 / 14, 2026" and the page has
  an "Upcoming Events" section, while `past-events.html` *already* lists SXSW
  2026 as a past-event group. This is the retirement problem, visible in
  production.
- **Date discrepancy.** The homepage title says March 12 / 13 / 14 (three days).
  The Design System schedule lists Friday March 13 and Saturday March 14 (two).
  Resolve before building the Events pages.
- **The schedule page is CMS-driven** — its session rows come from ROS Segments
  (58 items) and don't appear as headings. Read `raw/schedule.html` directly, or
  use `../webflow-export/csv/ros-segments.csv`.

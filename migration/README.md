# Migration — Webflow → Sanity

Staging area for content pulled from the existing Webflow site, to be
transformed and imported into Sanity. Full analysis and mapping live in
[`../docs/webflow-migration.md`](../docs/webflow-migration.md).

## Layout

```
webflow-export/
├── csv/                  # CSV exports from Webflow (one per collection)
│   ├── activations.csv
│   ├── newsrooms.csv
│   ├── past-events.csv
│   ├── ros-segments.csv
│   └── sponsors.csv
├── json/                 # Data pulled via the Webflow Data API
│   └── tags.json
└── assets-manifest.txt   # 294 unique CDN asset URLs referenced by the content
```

## Status

- ✅ 5 collections exported as CSV (Activations, Newsrooms, Past Events, ROS Segments, Sponsors)
- ✅ Tags (26) pulled via API → `json/tags.json`; Sponsors (52) via CSV + API
- ✅ Asset URL manifest built (294 URLs)
- 🟢 Asset strategy: leave on CDN, pull into Sanity at import time
- ⛏️ Pending: Tags CSV parity (optional), Sanity import script

> Note: nothing here is wired into the site yet. Import happens once a Sanity
> project exists (see `../docs/setup.md`).

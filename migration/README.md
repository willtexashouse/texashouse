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
│   └── ros-segments.csv
├── json/                 # Data pulled via the Webflow Data API
│   └── tags.json
└── assets-manifest.txt   # 249 unique CDN asset URLs referenced by the content
```

## Status

- ✅ 4 collections exported as CSV (Activations, Newsrooms, Past Events, ROS Segments)
- ✅ Tags (26) + Sponsors (52) pulled via API; Tags persisted to `json/tags.json`
- ✅ Asset URL manifest built (249 URLs)
- ⛏️ Pending: asset backup, Tags/Sponsors CSV parity, Sanity import script

> Note: nothing here is wired into the site yet. Import happens once a Sanity
> project exists (see `../docs/setup.md`).

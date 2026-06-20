# Webflow → Sanity Migration

> Status: **Live schema captured 2026-06-20** directly from the existing Webflow
> site via the Data API (no scraping needed — the API is accessible despite the
> lapsed plan that blocked code export). This is the source-of-truth inventory we
> reconcile the Sanity model (`content-model.md`) against, and the basis for the
> content import.

Site: **Texas House** · `texashouse.org` · Webflow site ID
`678ecae5cbbb0fa4ca745f8b` · last published 2026-04-29.

## Extraction method

The Webflow **Data API** (CMS + assets) is reachable through the connected
Webflow integration. We pull:
- **CMS collections + items** as structured JSON (clean, maps to Sanity).
- **CMS-referenced images** via the asset URLs embedded in each item's field data.

> Note: the Designer **code export** (HTML/CSS/JS) is what the plan downgrade
> blocked — that's a separate feature from the Data API and we don't need it.
> Non-CMS **static/brand assets** (logos, hero graphics, backgrounds placed
> directly in the design) do not live in the CMS; see "Open items" for how to
> pull those.

## Live CMS collections

| Collection | ID | Maps to (Sanity) |
| --- | --- | --- |
| Tags | `67c525be82aba6829db96295` | `topic` |
| ROS Segments (slug `event`) | `67c529bc4ed2ba50ce44f36b` | event schedule item / session |
| Sponsors | `67c52ae19a93e78ca6e21b26` | `sponsor` |
| Newsrooms | `682d3e242252eb8af61e3747` | `article` |
| Activations | `68a3bd2e4a3d70f338113ffd` | `activation` (umbrella event/showcase) |
| Past Events | `68a3c1e7887b54e306817956` | `event` (past) |

### Tags (`name`, `slug`)
Simple taxonomy. → Sanity `topic`.

### Sponsors
Fields: `logo` (image), `link`, `activation` (multi-ref → Activations),
`food-beverage` (switch), `tier-1` "Tier 1 Presenting Sponsors" (switch),
`tier-2` (switch), `tier-3` "Tier 3 Activation" (switch), `name`, `slug`.

> **Tiers live on the sponsor as switches**, and a sponsor links to the
> Activation(s) it sponsored — not grouped per-event the way `content-model.md`
> first assumed. See reconciliation below.

### Activations (umbrella showcases — e.g. SXSW 25, F1)
Fields: `rich-text-description`, `recap-video` (VideoLink), `gallery`
(multi-image), `cover-image`, `gallery-2-title`, `gallery-2` (multi-image),
`name`, `slug`. Richer than the planning-sheet `activation` (which was just
title/icon/blurb for "What we showcase"). These are event-recap showcases with
galleries.

### Past Events (individual events under an Activation)
Fields: `date`, `end-time`, `location`, `description` (rich), `short-description`,
`image`, `rsvp-link`, `tags` (multi-ref → Tags), `event-day` (Mon–Sun),
`event-space-location` (Main Room / Rooftop / CMYK), `sponsor-partner` /
`sponsor-2` / `sponsor-3` (refs → Sponsors), `city` (Austin / London),
`activation` (ref → Activations), `name`, `slug`.

### ROS Segments — "Run of Show" (slug `event`)
Same shape as Past Events: `date`, `end-time`, `location`, `description`,
`short-description`, `image`, `rsvp-link`, `tags`, `event-day`,
`event-space-location` (Main Room / Rooftop / CMYK), `sponsor-partner` /
`sponsor-2` / `sponsor-3`, `city`, `activation` (ref), `name`, `slug`.
→ These are the **schedule/panel sessions** within an event.

### Newsrooms
Fields: `post-body` (rich), `main-image`, `summary`, `type` (Blog / Media),
`name`, `slug`.

> No `topics`/tags reference, no `featured` flag, no explicit `publishedAt`
> (Webflow tracks `createdOn`/`lastPublished` at the system level).

## The real event hierarchy

```
Activation (e.g., "SXSW 2025")        ← umbrella: galleries, recap video, cover
   └─ Past Event (an event in a city) ← date, location, city, sponsors
        └─ ROS Segment (a panel)      ← time, room, day, sponsors  (run of show)
```

Sponsors attach at the Past Event / ROS Segment level (up to 3 refs each) and
carry their own global tier flags.

## Reconciliation with `content-model.md`

Adjustments to fold into the Sanity schema once we confirm against item data:

1. **Sponsor tiers** → move tier onto the `sponsor` document as fields
   (`presenting` / `tier2` / `tier3` / `foodBeverage`) rather than grouping
   sponsors per-event. Keep an optional per-event override if needed. The
   "Experience Partners" tier from the planning sheet ≈ "Tier 3 Activation" —
   confirm naming with Will.
2. **Event model** → introduce the 3-level hierarchy:
   `activation` (umbrella) → `event` (Past Event) → `scheduleItem`/`session`
   (ROS Segment). Our current `event` already has an inline `schedule`; decide
   whether sessions stay inline or become their own referenced documents
   (Webflow has them as a separate collection — likely worth keeping as
   references given they carry sponsors + rooms).
3. **Newsroom topics** → the planning-sheet topic filter (Venture, Tech, AI,
   FDI, Policy, Community, Music, Film, Culture) is **net-new** — live articles
   only have Blog/Media `type`. Plan: add a `topics` reference + tag existing
   articles during/after import. Keep `type` (Blog/Media) too.
4. **Featured article** → add a `featured` flag (not present in Webflow); choose
   featured during import.
5. **Rooms / city / event-day** → carry over as fields on the event/session
   (`Main Room` / `Rooftop` / `CMYK`; `Austin` / `London`).

## Open items

- **Static / brand assets** (logos, cowboy-hat hero, backgrounds) are not in the
  CMS. Options: (a) pull via the Webflow **Designer** asset API in a live
  Designer session, or (b) download from the published site. Many will be
  re-created in the Claude Design pass, so prioritize logos + key brand marks.
- Confirm the event hierarchy interpretation against the actual item data.
- Decide sessions-as-references vs inline before writing the import.

## Content inventory (extracted 2026-06-20)

Raw export staged under `migration/webflow-export/`.

| Collection | Items | Source | Notes |
| --- | --- | --- | --- |
| Tags | 26 | API → `json/tags.json` | 2 duplicate pairs to merge (see below) |
| Sponsors | 52 | `csv/sponsors.csv` + API | tiers as switches; some drafts have no logo |
| Activations | 5 | `csv/activations.csv` | Race Weekend 2025, SXSW 2025, SXSW 2026, SXSW London 2025, SXSW London 2026 |
| Newsrooms | 4 | `csv/newsrooms.csv` | type Blog/Media; no topics/featured/author fields |
| Past Events | ~34 | `csv/past-events.csv` | full panel sessions w/ recaps + galleries |
| ROS Segments | ~58 | `csv/ros-segments.csv` | same schema as Past Events (run-of-show) |

**294 unique CDN asset URLs** captured in
`migration/webflow-export/assets-manifest.txt` (CMS images + sponsor logos).

### Tag taxonomy → Newsroom topics

The 26 live Tags are richer than the planning-sheet topic list and are currently
applied to **events**, not articles. For the Newsroom topic filter we'll curate
a subset and tag articles during import. Duplicates to merge first:
- `innovation` + `innovation-2` → one "Innovation"
- `cuisine` + `cusisine` (typo) → one "Cuisine"

Planning-sheet topics (Venture, Tech, AI, FDI, Policy, Community, Music, Film,
Culture) map onto existing tags except **Tech**, **FDI**, and **Community**,
which are net-new.

### Sponsor tiers (live switches → planning-sheet tiers)

Sponsors carry boolean tier flags. Proposed mapping (confirm with Will):

| Live switch | Count* | Planning-sheet tier |
| --- | --- | --- |
| `tier-1` "Presenting" | few (e.g. Texas State University) | Partners (Presenting) |
| `tier-2` | many (Rice, SeedAI, gener8tor, Akin Gump, NYSE Texas…) | Partners |
| `tier-3` "Activation" | several (swsh, Fin & Fur, Allen's Boots, Push Start Sims…) | Experience Partners |
| `food-beverage` | several (Tito's, Red Bull, Coca-Cola, Zephyr Gin, Cuvee…) | Food & Beverage Partners |

\*Approximate from the 52-item pull. Sponsors also reference the Activation(s)
they sponsored, so per-event sponsor lists can be derived.

## Event hierarchy — open question

`ROS Segments` (~58) and `Past Events` (~34) share an identical schema and both
look like individual panel/sessions tied to an Activation. Need to confirm which
is canonical (likely ROS = full run-of-show; Past Events = curated subset shown
on the site) before deciding the Sanity event/session model.

## Open items

- **Asset strategy — decided:** leave the 294 assets on the Webflow CDN for now
  and pull them straight into Sanity at import time (Sanity ingests from URL).
  Risk accepted: if the site is unpublished before import, CDN URLs may break —
  so run the import (or a backup) before letting the Webflow site lapse fully.
- Clean **Tags CSV** still wanted for export parity (Tags captured via API JSON;
  all other collections now have CSVs).
- Confirm sponsor-tier mapping, newsroom-topic curation, and the ROS/Past Events
  question above.

## Next steps

1. ✅ Stage CSV exports (incl. Sponsors) + asset manifest + tags JSON under `migration/`.
2. Update `content-model.md` per the reconciliation once decisions are made.
3. Write the Sanity import (NDJSON via `sanity dataset import`) once a project
   exists — transform Webflow items → Sanity docs, pulling each asset from its
   CDN URL and rewriting refs. **Do this before the Webflow site is fully
   unpublished** so the CDN URLs still resolve.

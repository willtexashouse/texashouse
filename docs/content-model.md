# CMS Content Model (Sanity)

> Status: **Superseded in part by the implemented schema.** Captured 2026-06-20.
> This was the initial proposal; after reviewing the real Webflow export and
> confirming decisions with Will, the **live source of truth is the code** in
> `sanity/schemaTypes/`. Key changes from this draft: events are the umbrella
> past events (ex-Webflow "Activations"); panels are a separate `session` type
> referencing the event; sponsor tiers are boolean flags on the sponsor
> (`presenting` / `partner` / `experience` / `foodBeverage`); articles gained
> `type`, `topics`, `featured`, `publishedAt`. See `webflow-migration.md` →
> "Confirmed model".

The planning sheet calls for **multiple CMS types**. They fall into four groups:

1. **Events** (upcoming + past + the active-event schedule & sponsors)
2. **Newsroom** (articles + topic taxonomy)
3. **People & partners** (team / board / advisors, sponsors, brands)
4. **Editorial/page content & settings** (hero copy, FAQs, partnership types,
   activations, galleries, site settings)

---

## 1. Events

### `event` (document)

Drives Upcoming Events, Past Events, and the active-event Schedule section.

| Field            | Type                          | Notes |
| ---------------- | ----------------------------- | ----- |
| `title`          | string                        | e.g. "SXSW 25", "F1", "SXSW London" |
| `slug`           | slug                          | |
| `status`         | string (enum)                 | `upcoming` \| `active` \| `past` — controls where it renders. `active` surfaces the Schedule section. |
| `startDate`      | datetime                      | powers the calendar + sort |
| `endDate`        | datetime                      | |
| `location`       | string                        | |
| `lumaUrl`        | url                           | link-out to the Luma event |
| `heroImage`      | image                         | brand-styled card / hero |
| `panelGraphic`   | image (landscape)             | landscape graphic of the panel being hosted |
| `summary`        | text                          | short description for cards |
| `body`           | portable text                 | optional long description |
| `schedule`       | array of `scheduleItem`       | panels / sessions (see below) |
| `sponsorTiers`   | array of `sponsorTier`        | grouped sponsor lists (see below) |
| `gallery`        | array of image                | optional event gallery |
| `featured`       | boolean                       | optional highlight |

> **Luma:** start with link-out — editors style the card in Sanity and set
> `lumaUrl`. Optional later: a serverless job syncs basic event data from Luma.

### `scheduleItem` (object, inline in `event.schedule`)

The Schedule section (Panels / Details / Sponsors), only shown for `active`
events.

| Field         | Type            | Notes |
| ------------- | --------------- | ----- |
| `time`        | datetime / string | session time |
| `title`       | string          | panel / session name |
| `description` | text            | |
| `panelImage`  | image (landscape) | landscape graphic for the panel |
| `panelists`   | array of reference → `person` | speakers |

### `sponsorTier` (object, inline in `event.sponsorTiers`)

Full list of event sponsors, grouped by tier.

| Field      | Type                              | Notes |
| ---------- | --------------------------------- | ----- |
| `tier`     | string (enum)                     | `partner` \| `food_beverage` \| `experience` (Partners / Food & Beverage Partners / Experience Partners) |
| `sponsors` | array of reference → `sponsor`    | logos + links |

---

## 2. Newsroom

### `article` (document)

| Field         | Type                          | Notes |
| ------------- | ----------------------------- | ----- |
| `title`       | string                        | |
| `slug`        | slug                          | |
| `featured`    | boolean                       | powers the featured article (homepage + newsroom top) |
| `topics`      | array of reference → `topic`  | for the working topic filter |
| `excerpt`     | text                          | card summary |
| `heroImage`   | image                         | |
| `author`      | reference → `person`          | optional |
| `publishedAt` | datetime                      | sort + archive grouping |
| `body`        | portable text                 | article content |

GROQ patterns we'll need:
- Featured: `*[_type=="article" && featured==true] | order(publishedAt desc)[0]`
- Recent three: `*[_type=="article"] | order(publishedAt desc)[0...3]`
- Filter by topic: `*[_type=="article" && $topic in topics[]->slug.current]`

### `topic` (document — taxonomy)

| Field   | Type   | Notes |
| ------- | ------ | ----- |
| `title` | string | Venture, Tech, AI, FDI, Policy, Community, Music, Film, Culture |
| `slug`  | slug   | used in filter URLs (`/newsroom?topic=ai`) |

> Topics are reference documents (not a hardcoded list) so the filter stays in
> sync as topics are added/renamed.

---

## 3. People & partners

### `person` (document)

Single type for Team, Board of Directors, and Strategic Advisors — distinguished
by `group`. Also reused as article authors and panelists.

| Field      | Type            | Notes |
| ---------- | --------------- | ----- |
| `name`     | string          | |
| `role`     | string          | title |
| `group`    | string (enum)   | `team` \| `board` \| `advisor` |
| `headshot` | image           | |
| `bio`      | portable text   | |
| `order`    | number          | manual ordering within a group |
| `socials`  | array of object | optional (label + url) |

### `sponsor` (document)

Used in event sponsor tiers **and** the "Brands we've worked with" wall on the
Partnerships page.

| Field            | Type    | Notes |
| ---------------- | ------- | ----- |
| `name`           | string  | |
| `logo`           | image   | (prefer SVG/transparent) |
| `url`            | url     | |
| `workedWith`     | boolean | show on the Partnerships "brands we've worked with" wall |

---

## 4. Editorial / page content & settings

### `siteSettings` (singleton)

| Field         | Type                  | Notes |
| ------------- | --------------------- | ----- |
| `logo`        | image                 | |
| `nav`         | array of nav links    | Home, About, Partnerships, Newsroom |
| `socials`     | array of object       | platform + url |
| `mission`     | text                  | footer mission statement |
| `footerLinks` | array of object       | Privacy, Terms, etc. |
| `contactEmail`| string                | where the form routes (or set in env) |

### `homePage` (singleton)

Editable hero + about copy so marketing can tweak without a deploy.

| Field            | Type           | Notes |
| ---------------- | -------------- | ----- |
| `heroHeadline`   | array of string | the three mission lines |
| `heroCta`        | object          | label + link (default: BECOME A PARTNER → /partnerships) |
| `marqueeItems`   | array of string | brand marquee |
| `postcards`      | array of `postcard` | Postcard Showcase component |
| `activations`    | array of reference → `activation` | Music, Film, Research, Tech, Policy, Economic Opportunity |
| `processBlurbs`  | array of object | Superconnectors, Curated Connections, etc. |

### `aboutPage` (singleton)

Story of Texas House, why we do it (portable text + images). Team/BOD/SA pull
from `person` by `group`.

### `partnershipsPage` (singleton)

| Field            | Type                               | Notes |
| ---------------- | ---------------------------------- | ----- |
| `headerCopy`     | portable text                      | |
| `gallery`        | array of image                     | gallery beneath the header |
| `areasOfFocus`   | array of object / ref → activation | |
| `whatWeDo`       | portable text                      | |
| `whatToExpect`   | portable text                      | |
| `partnershipTypes` | array of reference → `partnershipType` | Sponsorship, In-Kind, Preferred Partner |
| `faqs`           | array of reference → `faq`         | partnership FAQ |

### `activation` (document)

The "What we showcase" categories.

| Field   | Type          | Notes |
| ------- | ------------- | ----- |
| `title` | string        | Music, Film, Research, Tech, Policy, Areas of Economic Opportunity |
| `icon`  | image         | optional |
| `blurb` | text          | optional |
| `order` | number        | |

### `partnershipType` (document)

| Field         | Type          | Notes |
| ------------- | ------------- | ----- |
| `title`       | string        | Sponsorship / In-Kind / Preferred Partner |
| `description` | portable text | |
| `order`       | number        | |

### `faq` (document)

| Field      | Type          | Notes |
| ---------- | ------------- | ----- |
| `question` | string        | |
| `answer`   | portable text | |
| `category` | string (enum) | `partnerships` (extensible) |
| `order`    | number        | |

### `postcard` (object, inline)

| Field     | Type   | Notes |
| --------- | ------ | ----- |
| `image`   | image  | |
| `caption` | string | |

---

## Type summary

| Sanity type        | Kind      | Powers |
| ------------------ | --------- | ------ |
| `event`            | document  | Upcoming Events, Past Events, Schedule |
| `scheduleItem`     | object    | event panels/sessions |
| `sponsorTier`      | object    | event sponsor groupings |
| `article`          | document  | Newsroom |
| `topic`            | document  | Newsroom topic filter |
| `person`           | document  | Team / Board / Advisors / authors / panelists |
| `sponsor`          | document  | event sponsors + brands wall |
| `activation`       | document  | "What we showcase" |
| `partnershipType`  | document  | partnership types |
| `faq`              | document  | Partnerships FAQ |
| `postcard`         | object    | Postcard Showcase |
| `siteSettings`     | singleton | global nav/footer/socials |
| `homePage`         | singleton | homepage editorial copy |
| `aboutPage`        | singleton | About editorial copy |
| `partnershipsPage` | singleton | Partnerships editorial copy |

## Reconciliation with the existing site export

When the CMS export arrives:
1. Map each existing collection/field to a type above.
2. Note gaps (fields we have that the export lacks, and vice versa).
3. Write an import script (GROQ/NDJSON via `sanity dataset import`) to load
   content into the new schema.

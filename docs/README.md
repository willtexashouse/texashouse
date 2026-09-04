# Planning & Documentation

Planning materials driving the Texas House website rebuild.

## Contents

- **`planning-sheet.md`** — the master planning sheet (source of truth).
- **`architecture.md`** — stack decision: **Astro + Sanity + Vercel** and why.
- **`build-plan.md`** — design-first workflow (Claude Design → import → Astro +
  Sanity → Vercel) and the phased build sequence.
- **`content-model.md`** — Sanity schema for every CMS type (events, schedule,
  sponsors, newsroom, people, partnerships, settings).
- **`information-architecture.md`** — pages → sections → components → CMS source.
- **`wireframe-brief.md`** — **approved sitemap + section structure (9 pages).**
  Supersedes the IA where they differ. Includes the brand block that must be
  added before pasting into any design tool.
- **`component-inventory.md`** — the three donor libraries (CRM, portfolio,
  shoplift.media): what each contains, what shape it's in, and which Texas House
  section each piece maps to.
- **`positioning.md`** — positioning & elevator pitch working doc (amended
  2026-08-20 against the built site). Feeds the hero/tagline/tier decisions;
  flags the three-way tier-taxonomy collision.
- **`board-brief.md`** — Will's board-of-directors brief (confidential). Answers
  positioning Decision One: for-profit Texas C-corp.
- **`brand-specimen.md`** — the locked brand foundation: every token, rule, and
- `../brand/VISUAL_LANGUAGE.md` — imagery standard (1987 magazine world, five prompt blocks, asset briefs); prompt blocks in `../brand/prompts/`, renders in `../public/brand/`
  rationale. Live version renders at `/brand`.
- **`events-model.md`** — how events retire into past events (date-derived
  status). Includes the build-time caveat and the daily-rebuild requirement.
- **`setup.md`** — get the foundation running locally + create the Sanity project.

## How we work

1. The planning sheet captures goals, audiences, scope, content, and structure.
2. Architecture + content model + IA translate it into a buildable plan.
3. Concept work derived from the plan lives in `../concept/`.
4. Decisions get recorded here so they aren't lost.

## Decisions so far

| Decision        | Choice                       | Where |
| --------------- | ---------------------------- | ----- |
| Framework       | Astro (React islands)        | architecture.md |
| Language        | TypeScript                   | architecture.md |
| CMS             | Sanity                       | architecture.md / content-model.md |
| Hosting         | Vercel                       | architecture.md |
| Styling         | Tailwind CSS                 | architecture.md |
| Design workflow | Claude Design → import       | build-plan.md |
| Design sourcing | Assemble from existing builds | component-inventory.md |
| **Brand authority** | **Texas House CRM — governs everything, no exceptions** | component-inventory.md |
| Creative components | Will's portfolio (large pull, re-skinned) | component-inventory.md |
| shoplift.media scope | Research page + home preview ONLY | component-inventory.md |
| Sitemap | 9 pages (adds Events, Event detail, Privacy, Terms) | wireframe-brief.md |
| Primary conversion | Become a Partner; CTA band on every page | wireframe-brief.md |
| Brand foundation | CRM tokens + Design System scales | src/styles/global.css |
| Display face | TAY Dreamboat everywhere (two-track rule retired) | component-inventory.md |
| Ground | **Dark everywhere, no exceptions** — no light theme | component-inventory.md |
| Event status | Derived from dates, never stored | events-model.md |
| Nav behaviour | Two-stage: static header + fixed bar that slides in | brand-specimen.md |
| Page gutter | One `--page-gutter` token drives every container | — |
| Shell components | `src/components/ds/` — zero-JS where possible | — |
| Portable Text | `@portabletext/react` rendered server-side (no new install) | — |
| Motion treatments | Scanlines · telemetry bar · RGB photo · button roll · footer | brand-specimen.md §5 |
| Texture direction | **Scanlines.** Paper-grain PNG retired | brand-specimen.md §5.1 |
| Buttons | Design new — legacy Webflow button spec retired | brand-specimen.md §5.4 |

## Build state (2026-08-20)

All nine sitemap pages are built and verified (19 static pages incl. detail
routes). Deferred by design: the hero object (reserved slot on Home), postcard
showcase, "what we showcase" image grid, cowboy-on-bull imagery, newsroom
search/trending/newsletter, events calendar view. Draft copy needing Will's
sign-off is marked `draft copy — confirm with Will` in partnerships.astro.

## Pending input

- ~~Light or dark ground~~ — **RESOLVED: dark everywhere, no exceptions.**
- **Button radius** — 6px shipped; compare 0/2/6/12/20px at `/proto`.
- **Footer assets** — Texas House twin-globe image + horizon drape. The drape
  now has a live decision page at `/drape` (2026-09-04): three bluebonnet
  renders from `public/brand/preview/` in the slot, through the ported
  WebGL dither wave (`DitherDrape.astro`) in three blends. Pick a render and
  a blend; the animation itself is still open.
- **SXSW 2026 dates** — homepage says March 12/13/14, Design System schedule says
  Fri 13 + Sat 14. Blocks `endDate` backfill.
- CMS export from the existing site (to reconcile against `content-model.md`).
- Examples of the event schedule / sponsor tiers.
- Contact-form destination (email / CRM).
- `speaker` and `author` — new schema types, or `person` filtered by `group`?
- Newsletter signup destination.
- Newsroom search approach.
- ~~Event retirement~~ — **DONE.** Date-derived status; see `events-model.md`.
  Remaining: backfill `endDate` on the 5 existing events, and schedule the
  daily rebuild.
- ~~Webflow site import~~ — **DONE.** 50 live pages captured to
  `migration/webflow-pages/` with a heading-level content map.
- The eight open items in `wireframe-brief.md` (press placement, membership,
  fundraise doc, board headcount, advisor copy, trending logic, FAQ Q5/Q6, SXSW 26).

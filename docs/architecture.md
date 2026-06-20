# Architecture & Stack Decision

> Status: **Recommended / pending final sign-off.** Captured 2026-06-20.

## TL;DR

| Layer        | Choice                                  |
| ------------ | --------------------------------------- |
| Framework    | **Astro** (with React islands)          |
| Language     | **TypeScript**                          |
| Styling      | **Tailwind CSS** + design tokens        |
| CMS          | **Sanity** (Content Lake + Studio)      |
| Hosting      | **Vercel**                              |
| Forms        | Vercel-hosted API route → email/CRM     |
| 3D / motion  | React Three Fiber **or** Spline/Rive embed (spinning hat-on-globe) |

## Why Astro

The site is content- and brand-led: a marketing homepage, an About page, a
Partnerships page with a form, and a Newsroom. There's relatively little
"app-like" state. That profile is exactly Astro's sweet spot.

- **Ships near-zero JS by default.** Astro renders to static HTML and only
  hydrates the interactive pieces ("islands"). For a brand site this means
  excellent Core Web Vitals out of the box, which matters for a public-facing,
  SEO-relevant site (Newsroom especially).
- **Islands where we need interactivity.** The pieces that need JS — the
  spinning cowboy-hat globe, the Newsroom topic filter, the brand marquee,
  the contact form — become React (or Svelte/vanilla) islands. Everything else
  stays static.
- **First-class Sanity integration.** `@sanity/astro` + `@sanity/client` and
  `@portabletext/to-html` make pulling structured content and rendering rich
  text straightforward. The Sanity Studio can even be mounted at `/studio`.
- **Great Vercel story.** `@astrojs/vercel` adapter supports static output plus
  on-demand/ISR rendering and serverless API routes (for the contact form and
  optional Luma sync) on the same deploy.
- **Content collections + CMS.** Astro content collections give us typed
  schemas for anything we keep in-repo, while Sanity handles editor-managed
  content. We can mix both.

### Why not Next.js?

Next.js is the obvious alternative and would work fine, but it's a heavier
React-everywhere model for what is mostly static content. We'd ship more JS for
less benefit. We'd reach for Next.js if the roadmap grew toward authenticated
dashboards, a member portal, or heavy client-side app behavior. If that becomes
likely, revisit this decision — Astro → Next is a meaningful migration, so flag
it early. For the scope in the planning sheet, Astro wins on performance and
simplicity.

## Why Sanity

The planning sheet implies **several distinct content types** with different
shapes and editorial workflows (events synced to Luma, an event schedule that
appears only during an active event, sponsor tiers, a filterable newsroom,
team/board/advisor rosters, FAQs). That's a structured-content problem, which is
where Sanity excels:

- **Schema-as-code** — content types are defined in TypeScript and versioned in
  this repo, so the model is reviewable and stays in sync with the front end.
- **Portable Text** for the Newsroom — clean, render-anywhere rich text.
- **GROQ** queries — precise fetching (e.g. "featured article + 3 most recent",
  "active event with sponsors grouped by tier").
- **References & taxonomy** — sponsors, topics, and partnership types model
  naturally as references, which keeps the filter and sponsor tiers consistent.
- **Hosted, collaborative Studio** — editors get a real UI; we host the Studio
  at `/studio` on the same Vercel deploy.

See `content-model.md` for the proposed schema covering every CMS type.

## Repo shape (proposed, once scaffolded)

```
/
├── src/
│   ├── components/      # UI components (.astro + React islands)
│   ├── layouts/
│   ├── pages/           # home, about, partnerships, newsroom, newsroom/[slug]
│   ├── lib/sanity/      # client, GROQ queries, image URL builder
│   └── styles/
├── studio/              # Sanity Studio (schemas live here)
│   └── schemaTypes/
├── public/
├── astro.config.mjs
└── docs/                # this folder
```

## Open decisions

1. **Hat-on-globe execution** — React Three Fiber (full control, more build) vs
   a Spline/Rive embed (faster to ship, designer-editable). Recommend
   prototyping a Spline embed first; drop to R3F only if we need finer control.
2. **Contact form destination** — where partnership inquiries land (email inbox,
   HubSpot, Airtable, etc.). Affects the form's API route.
3. **Luma integration depth** — link-out only (style event cards in Sanity, link
   to Luma) vs pulling event data from Luma's API. Recommend starting link-out;
   add sync later if upkeep becomes a burden.
4. **Single repo vs. split Studio** — keep Sanity Studio in this repo under
   `/studio` (recommended) vs a separate deployment.

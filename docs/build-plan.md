# Build Plan & Workflow

> Status: **Active plan.** Captured 2026-06-20. Design-first workflow targeting
> Astro + Sanity on Vercel.

## Workflow overview

We are designing the site visually first, then bringing it into code:

```
Claude Design (brand)  →  import into repo  →  port to Astro  →  wire to Sanity  →  deploy to Vercel
   (visual design)        (React+Tailwind)     (islands/static)   (live content)      (preview + prod)
```

The design is the source of truth for look & feel; Sanity is the source of
truth for content; Astro is the assembly layer that joins them.

## How a Claude Design import maps into Astro

Claude Design exports **React components styled with Tailwind**. That's
directly usable in Astro — we don't rebuild the visuals:

- **React components run natively in Astro** via `@astrojs/react`. Imported
  components can be dropped into `.astro` pages as-is.
- **Tailwind classes carry over** 1:1, so the branded styling survives the
  import. We bring the design's Tailwind theme (colors, fonts, spacing) into
  our `tailwind.config` as design tokens.
- **Static by default, hydrated where needed.** Most sections render as static
  HTML (no JS shipped). Only the interactive pieces get a `client:*` directive
  to become islands: hat-on-globe hero, brand marquee, newsroom topic filter,
  contact form, FAQ accordion.
- **Content gets lifted out of the markup.** Where the design has hardcoded copy
  or images, we replace those with values fetched from Sanity (GROQ), so editors
  can manage them. The design defines the slot; Sanity fills it.

> Net effect: the Claude Design import gives us the front-end shell with brand
> styling; our job is to (a) split it into static vs. island components and
> (b) swap hardcoded content for Sanity data.

## Phases

### Phase 0 — Planning ✅
Planning sheet captured; architecture, content model, and IA defined (`docs/`).

### Phase 1 — Design in Claude Design (in progress, user-led)
Design the four pages (Home, About, Partnerships, Newsroom) on-brand. Aim to
cover every section in `information-architecture.md` so the import is complete.
Useful to design the repeating units too (event card, article card, sponsor
tier row, team grid item) since those become components.

### Phase 2 — Import the design
Bring the Claude Design export into the repo. Land it in a holding area
(e.g. `concept/design-import/`) before integrating, so we can review before it
touches `src/`.

### Phase 3 — Astro + Sanity foundation
Can run **in parallel** with Phases 1–2 since it's design-independent:
- Scaffold Astro (TypeScript) + `@astrojs/react` + `@astrojs/tailwind` +
  `@astrojs/vercel`.
- Scaffold Sanity Studio at `/studio` with the schema types from
  `content-model.md`.
- Wire the Sanity client + GROQ query helpers + image URL builder.

### Phase 4 — Port & integrate
- Move imported components from the holding area into `src/components`.
- Mark interactive components as islands (`client:load` / `client:visible`).
- Replace hardcoded content with Sanity-driven props.
- Assemble the four pages + `/newsroom/[slug]`.

### Phase 5 — Content migration
- Reconcile the existing-site CMS export against `content-model.md`.
- Import content into Sanity (`sanity dataset import` from NDJSON).

### Phase 6 — Integrations
- Contact form → API route → destination (email/CRM — TBD).
- Events: Luma link-out (style cards in Sanity, link to Luma); optional sync later.
- Newsroom topic filter wired to the `topic` taxonomy.

### Phase 7 — Deploy
- Connect repo to Vercel; production branch auto-deploys, PRs get previews.
- Configure env vars (Sanity project ID/dataset/token, form destination).
- QA, then point the domain.

## Parallelizable now

While the Claude Design work happens, we can stand up the **design-independent**
foundation (Phase 3) so the import has a fully-wired Astro + Sanity project to
land in: Studio + schemas, Sanity client, Vercel config, Tailwind token
scaffold. This is the recommended immediate next step.

## Environment / secrets we'll need (later)

- `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_READ_TOKEN`
- Contact-form destination credentials (once chosen)
- (Optional) Luma API key, if we move past link-out

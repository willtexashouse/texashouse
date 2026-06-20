# Texas House — Website

The home of the Texas House website rebuild. This repository holds the source
for the new site, which is hosted on [Vercel](https://vercel.com).

## Status

🚧 **Foundation scaffolded.** Planning is captured (`docs/`) and the
**Astro + Sanity** foundation is in place and building. Branded UI will be
designed in Claude Design and imported on top of this foundation.

**Stack:** Astro 5 + React islands · TypeScript · Tailwind v4 · Sanity CMS ·
deployed on Vercel. Rationale in [`docs/architecture.md`](docs/architecture.md).

## Quick start

```bash
npm install
npm run dev        # site + Sanity Studio at http://localhost:4321/studio
```

The site builds and runs **before** a Sanity project exists (it falls back to
empty content). To connect real content, follow [`docs/setup.md`](docs/setup.md)
to create the Sanity account/project and fill in `.env` (see `.env.example`).

## Repository layout

| Path                   | Purpose                                                       |
| ---------------------- | ------------------------------------------------------------- |
| `src/pages/`           | Routes: home, about, partnerships, newsroom, `/studio`.       |
| `src/components/`      | UI components (`.astro` + React islands) — populated on import.|
| `src/lib/sanity/`      | Sanity client, GROQ queries, image URL builder.               |
| `src/styles/`          | Tailwind entry + placeholder brand tokens.                    |
| `sanity/schemaTypes/`  | CMS content model (events, newsroom, people, partnerships…).  |
| `sanity/structure.ts`  | Sanity Studio desk layout.                                     |
| `docs/`                | Planning sheet, architecture, content model, IA, setup.       |
| `concept/`             | Concept work / design-import holding area.                    |

## Documentation

| Doc | What |
| --- | ---- |
| [`docs/planning-sheet.md`](docs/planning-sheet.md) | Source planning sheet |
| [`docs/architecture.md`](docs/architecture.md) | Stack decision & rationale |
| [`docs/build-plan.md`](docs/build-plan.md) | Design-first workflow & phases |
| [`docs/content-model.md`](docs/content-model.md) | Sanity content model |
| [`docs/information-architecture.md`](docs/information-architecture.md) | Page → component → CMS map |
| [`docs/setup.md`](docs/setup.md) | Local setup + Sanity account creation |

## Hosting

Deployed on Vercel: pushes to the production branch deploy automatically, and
pull requests get their own preview deployments.

## Working in this repo

Development happens on feature branches. The current active working branch is
`claude/texas-house-rebuild-jt7avf`.

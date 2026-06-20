# Texas House — Website

The home of the Texas House website rebuild. This repository holds the source
for the new site, which is hosted on [Vercel](https://vercel.com).

## Status

🚧 **Concept / planning phase.** Planning sheet captured and translated into an
architecture, CMS content model, and information architecture (see `docs/`).

**Stack decision:** Astro + React islands · TypeScript · Tailwind CSS · Sanity
CMS · deployed on Vercel. Rationale in [`docs/architecture.md`](docs/architecture.md).

## Repository layout

| Path        | Purpose                                                              |
| ----------- | ------------------------------------------------------------------- |
| `docs/`     | Planning sheets, requirements, content inventory, and decisions.    |
| `concept/`  | Concept work — early drafts, wireframes, prototypes, and mockups.   |
| `src/`      | (Coming) Application source for the production site.                |

## Hosting

The site is deployed on Vercel. Every push to the production branch deploys
automatically; pull requests get their own preview deployments.

## Working in this repo

Development happens on feature branches and is merged in via pull request. The
current active working branch is `claude/texas-house-rebuild-jt7avf`.

## Getting started

The production application has not been scaffolded yet — the stack will be
chosen once the planning sheet and concept work are reviewed. Until then, this
repo collects the planning and concept materials that will drive the build.

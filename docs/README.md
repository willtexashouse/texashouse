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

## Pending input

- CMS export from the existing site (to reconcile against `content-model.md`).
- Examples of the event schedule / sponsor tiers.
- Contact-form destination (email / CRM).

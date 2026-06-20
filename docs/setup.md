# Setup Guide

How to get the Texas House foundation running locally and create the Sanity
project. The repo is scaffolded with **placeholders** — nothing here requires a
Sanity account until step 3, and the site builds without one.

## Prerequisites

- **Node.js 20+** (LTS). Check with `node -v`.
- A package manager (`npm` comes with Node).

## 1. Install dependencies

```bash
npm install
```

## 2. Run it (works before Sanity exists)

```bash
npm run dev
```

Open http://localhost:4321 — you'll see placeholder pages. The Studio route
(`/studio`) won't fully connect until step 3, but the front-end builds and runs.

## 3. Create the Sanity project

You don't have a Sanity account yet — here's the one-time setup.

1. Go to **https://www.sanity.io/manage** and sign up (Google/GitHub/email).
2. Click **Create new project**. Name it `Texas House`.
3. When prompted for a dataset, create one called **`production`** and make it
   **public** (simplest for a marketing site; we can lock it down later).
4. Copy the **Project ID** (looks like `abc12xyz`) from the project's settings.
5. Under **API → CORS origins**, add:
   - `http://localhost:4321` (local dev)
   - your eventual Vercel URL(s) once deployed

> Alternative (CLI): with the repo cloned, `npx sanity@latest login` then
> `npx sanity@latest init --env` can create the project and write the env file
> for you. The manual steps above are fine too.

## 4. Configure environment variables

Copy the example and fill in your Project ID:

```bash
cp .env.example .env
```

Then edit `.env`:

```
PUBLIC_SANITY_PROJECT_ID="your-real-project-id"
PUBLIC_SANITY_DATASET="production"
PUBLIC_SANITY_API_VERSION="2024-01-01"
SANITY_API_READ_TOKEN=""   # leave blank for a public dataset
```

Restart `npm run dev`. The Studio at **http://localhost:4321/studio** now
connects, and you can start creating content (Site Settings, Home Page, Events,
Articles, People, etc.). The schema is already defined — see
`docs/content-model.md`.

## 5. Deploy to Vercel

1. Push this branch and import the repo at https://vercel.com/new.
2. Framework preset: **Astro** (auto-detected).
3. Add the same env vars in **Project → Settings → Environment Variables**.
4. Deploy. Production branch auto-deploys; PRs get preview URLs.
5. Add the Vercel domain(s) to Sanity's CORS origins (step 3.5).

## Useful scripts

| Command            | What it does                              |
| ------------------ | ----------------------------------------- |
| `npm run dev`      | Astro dev server (site + `/studio`)       |
| `npm run build`    | Production build                          |
| `npm run preview`  | Preview the production build              |
| `npm run typecheck`| Astro/TS type checking                    |

## Where things live

| Path                       | What                                   |
| -------------------------- | -------------------------------------- |
| `sanity.config.ts`         | Studio config (schema + plugins)       |
| `sanity/schemaTypes/`      | Content schemas (the CMS model)        |
| `sanity/structure.ts`      | Studio desk layout / singletons        |
| `src/lib/sanity/`          | Client, image builder, GROQ queries    |
| `src/pages/`               | Routes: home, about, partnerships, newsroom, studio |
| `src/styles/global.css`    | Tailwind + placeholder brand tokens    |

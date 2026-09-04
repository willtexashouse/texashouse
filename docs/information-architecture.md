# Information Architecture

> Status: **Partially superseded, 2026-08-19.** Captured 2026-06-20, covering four
> pages. `wireframe-brief.md` (approved) expands the site to nine pages and adds
> sections to every page here. **Where the two differ, the wireframe brief wins.**
> The CMS-source column below is still accurate and carries forward.

## Pages & routes

| Page          | Route            | Source |
| ------------- | ---------------- | ------ |
| Home          | `/`              | `homePage` + events + articles |
| About         | `/about`         | `aboutPage` + `person` |
| Partnerships  | `/partnerships`  | `partnershipsPage` (Become a Partner) |
| Newsroom      | `/newsroom`      | `article` + `topic` |
| Article       | `/newsroom/[slug]` | `article` |
| Studio        | `/studio`        | Sanity Studio |

All "BECOME A PARTNER" CTAs → `/partnerships`.

---

## Home (`/`)

| Section          | Components                                              | CMS |
| ---------------- | ------------------------------------------------------ | --- |
| Hero             | Hat-on-globe (island), 3 mission lines, BECOME A PARTNER CTA | `homePage.heroHeadline`, `heroCta` |
| About            | Brand Marquee (island), Postcard Showcase, cowboy-on-bull inset bg, "What we do + process" | `homePage.marqueeItems`, `postcards`, `activations`, `processBlurbs` |
| Upcoming Events  | CMS Calendar, active-event Schedule (panels/details/sponsors) | `event` where `status in [upcoming, active]` |
| Past Events      | Event cards (SXSW 25, SXSW London, F1, SXSW 26)        | `event` where `status==past` |
| Recent Articles  | Featured post + three most recent                      | `article` (featured + recent 3) |
| Footer           | Logo, nav, socials, mission, Privacy, Terms            | `siteSettings` |

---

## Partnerships / Become a Partner (`/partnerships`)

| Section               | Components                                  | CMS |
| --------------------- | ------------------------------------------- | --- |
| Header                | Contact form (island), "Brands we've worked with" wall, gallery beneath | form → API route; `sponsor` where `workedWith==true`; `partnershipsPage.gallery` |
| Working with TX House | Areas of focus, What we do, What to expect, Types of partnerships (Sponsorship / In-Kind / Preferred Partner) | `partnershipsPage`, `partnershipType` |
| FAQ                   | Accordion                                   | `faq` where `category==partnerships` |

---

## About (`/about`)

| Section | Components                          | CMS |
| ------- | ----------------------------------- | --- |
| Header  | Story of Texas House, why we do it  | `aboutPage` |
| Team    | Roster grid                         | `person` where `group==team` |
| Board   | Roster grid                         | `person` where `group==board` |
| Advisors| Roster grid                         | `person` where `group==advisor` |

---

## Newsroom (`/newsroom`)

| Section       | Components                       | CMS |
| ------------- | -------------------------------- | --- |
| Featured      | Featured article hero            | `article` where `featured==true` |
| Topic filter  | Filter bar (island) — Venture, Tech, AI, FDI, Policy, Community, Music, Film, Culture | `topic` |
| Archive       | Paginated article grid           | `article` ordered by `publishedAt` |
| Article page  | Portable Text body, topics, author | `article[slug]` |

---

## Shared / global

| Component   | CMS |
| ----------- | --- |
| Header nav  | `siteSettings.nav` |
| Footer      | `siteSettings` |
| Contact form| `partnershipsPage` + API route |

---

## Interactive islands (need JS/hydration)

1. **Hat-on-globe** hero — Spline/Rive embed or React Three Fiber.
2. **Brand marquee** — infinite scroll.
3. **Newsroom topic filter** — client-side filtering of the archive.
4. **Contact form** — validation + submit to API route.
5. **FAQ accordion** — expand/collapse.
6. **Event calendar** — if interactive month view (otherwise static list).

Everything else renders as static Astro.

# Sitemap — for Claude Design

> Design blueprint for the Texas House rebuild. Derived from the planning sheet
> and grounded in the content now live in Sanity (5 events, 56 sessions, 47
> sponsors, 24 topics, 4 articles). Use this to drive the page designs in Claude
> Design; each section notes the content it will pull from the CMS so the design
> leaves room for real data.

## How to use this
Design the **4 core pages** below (plus the shared header/footer and the two
detail templates). Each page is a top-to-bottom stack of sections. Where a
section says **[CMS]**, it's populated from Sanity — design it as a repeatable
template (one card, one row), not hardcoded one-offs.

---

## Global (every page)

**Header** (sticky)
- Logo
- Nav: Home · About · Partnerships · Newsroom
- Primary CTA button: **BECOME A PARTNER** → /partnerships
- (optional) social icons

**Footer**
- Logo
- Nav links
- Social links
- Mission statement
- Privacy · Terms

---

## 1. Home — `/`

1. **Hero** — full-bleed. The three mission lines:
   - *We're building the network of ascending leaders in Texas*
   - *Telling the story of contemporary Texas*
   - *Connecting Texas to the world and the world to Texas*
   - Signature visual: **anchored cowboy hat / cowboy hat on a spinning globe**
   - CTA: **BECOME A PARTNER**
2. **Brand marquee** — horizontal scrolling band (brand words and/or partner logos).
3. **About / What we do**
   - Intro to Texas House; **cowboy-on-the-bull** background inset
   - **Postcard showcase** component (image cards w/ captions)
   - *Activations — what we showcase:* Music · Film · Research · Tech · Policy ·
     Areas of Economic Opportunity
   - *Superconnectors* · *Curated Connections* (process blurbs)
4. **Upcoming Events** **[CMS]** — calendar of events hosted on Luma, brand-styled,
   linking out to Luma. When an event is imminent, show its **schedule**
   (panels / details / sponsors). *Design two states: "list of upcoming" and an
   "active event schedule."*
5. **Past Events** **[CMS]** — card grid. Real entries:
   **SXSW 2025 · SXSW London 2025 · Race Weekend (F1) 2025 · SXSW 2026 ·
   SXSW London 2026.** Each card → Event detail. (Cards have cover image + date.)
6. **Recent Articles** **[CMS]** — one **featured** article (large) + the **3 most
   recent** (cards).
7. **Footer**

## 2. About — `/about`

1. **Header** — The story of Texas House; why we do it.
2. **Team** **[CMS]** — roster grid (headshot, name, role).
3. **Board of Directors** **[CMS]** — roster grid.
4. **Strategic Advisors** **[CMS]** — roster grid.

> Note: team/board/advisor people aren't in the CMS yet — this is new content
> we'll add. Design the roster card; we'll populate it.

## 3. Partnerships ("Become a Partner") — `/partnerships`

*All "Become a Partner" CTAs across the site link here.*

1. **Header**
   - Headline + **contact form** (name, email, org, message)
   - **Brands we've worked with** — logo wall **[CMS]** (sponsors flagged
     "worked with"; ~47 logos available)
   - **Gallery** beneath (image grid) **[CMS]**
2. **Working with Texas House**
   - Areas of focus · What we do · What to expect
   - **Types of partnerships:** Sponsorship · In-Kind · Preferred Partner
3. **FAQ** — accordion (How do sponsorships work? · How much to sponsor? · What
   are curated connections? · How do in-kind sponsorships work? · …)

## 4. Newsroom — `/newsroom`

1. **Featured article** **[CMS]** — hero treatment (currently: *"Texas House Goes
   Global: A Landmark Day at SXSW London"*).
2. **Topic filter** **[CMS]** — interactive chips. Curated from real topics, e.g.:
   Innovation · AI · Policy · Defense · Energy · Economic Development ·
   Entrepreneurship · Venture Capital · Film · Music · Culture.
3. **Archive** **[CMS]** — article card grid (image, title, summary, topic, date),
   paginated.

---

## Detail templates (design these once)

**Event detail** — `/events/[slug]` **[CMS]** — we have rich data, so worth a template:
- Cover image + title + date + city
- Recap video embed; description
- **Schedule / sessions** list: each panel = time · room (Main Room / Rooftop /
  CMYK) · title · description · sponsors
- **Sponsors**, grouped by tier: **Presenting · Partner · Experience · Food &
  Beverage**
- **Gallery** (event photos)

**Article detail** — `/newsroom/[slug]` **[CMS]**
- Title · hero image · author · date · topic tags
- Body (rich text with inline images)

---

## Reusable components (the design system)

- **Event card** (cover + title + date)
- **Article card** (image + title + summary + topic + date)
- **Session / panel row** (time · room · title · sponsors)
- **Sponsor logo wall** (grouped by tier)
- **Team / person card** (headshot + name + role)
- **Topic filter chip**
- **FAQ accordion item**
- **Postcard** (image + caption)
- **Marquee** band

---

## Brand direction (notes for the design)

- **Contemporary Texas**, confident and modern — not kitschy. Editorial.
- Recurring motifs: **cowboy hat**, **globe** (Texas ↔ world), **postcards**,
  **cowboy-on-the-bull** imagery.
- We'll lift the real **brand tokens** (colors, type) out of the Claude Design
  export and drop them into the build, so design freely.

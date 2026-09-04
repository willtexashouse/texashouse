# Texas House: Positioning and Elevator Pitch
### Working document for team session

> **Revision note (2026-08-20).** Amended from the original Cloud Chat draft to
> reflect the website rebuild (`~/texashouse`), which is now built: all nine
> pages, brand system, partnerships page with tier cards and FAQ, newsroom,
> events. Amendments are marked **[REBUILD]**. The original's diagnosis stands —
> the rebuild makes it *cheaper to fix* and adds one collision the draft didn't
> know about (see §3.5). The deeper argument is unchanged: every line we run is
> about Texas, none is about the buyer.

The goal of this session is not to write a tagline. It is to agree on what we
sell, who buys it, and what they get. The tagline falls out of that in about ten
minutes once the rest is settled.

---

## 1. The diagnosis

We are running multiple descriptions of Texas House in market at the same time.
**[REBUILD]** The original counted six on the legacy Webflow site. The rebuild
consolidated some — but four distinct message families still ship today, and
now we know exactly where each one lives, down to the file:

| The line | Where it lives on the rebuild | File |
|---|---|---|
| Three mission lines ("The network of ascending leaders / The story of contemporary Texas / Texas to the world, the world to Texas") | Homepage hero | `src/pages/index.astro` |
| **Recognizing Texcellence.** | Home About-snippet headline + About page "Why" headline | `index.astro` · `about.astro` |
| **Bringing Texas to the world, and the world to Texas.** | Footer place block, default meta description, homepage `<title>` | `SiteFooter.astro` · `BaseLayout.astro` |
| **Texan voices leading global conversations.** | Newsroom lede, About meta | `newsroom/index.astro` · `about.astro` |
| connect, celebrate, entertain | CTA band on every page | `CtaBand.astro` |

The legacy site still runs its own set on texashouse.org until cutover.

**[REBUILD] Why this matters now:** on Webflow, fixing this was an expedition.
On the rebuild, every line above is one edit in one file. **The moment this
session decides, the site converges in under an hour.** That is the leverage of
deciding now — before cutover, so the new site launches with one voice.

Texas House does not have a pitch problem. It has a source of truth problem.
There is no single sentence to memorize, so every meeting improvises a new one.

**The deeper issue:** every one of those lines is about Texas. Not one is about
the buyer. A sponsor hears all of them and still has no idea what they are
purchasing. That is why the meeting always turns into "so how do you make money,
and what are we paying for."

That question is not skepticism. It is the buyer trying to do our job for us.

---

## 1.5 [REBUILD] One line, one job — dividing the three mission lines

These were never three taglines competing for the hero. They are three
different jobs, each mapping to a buyer (§7) and a position (§4). The
interchangeability stops the moment each line has a home.

| The line | The job | Position | Where it lives |
|---|---|---|---|
| **Texas to the world, and the world to Texas** | What we *are* — the front door. The widest claim; a stranger gets it in one read. | B · The Bridge | Hero · footer · meta title |
| **The network of ascending leaders in Texas** | What partners *get* — access to the people about to run Texas. The partnership value proposition and the close in every pitch. | C · The Network | Partnerships page · CTA band · last line of the deck |
| **The story of contemporary Texas** | What we *publish* — the proof the room is real. | the editorial mission | About · Newsroom · Events |

### The hero, proposed

- **Eyebrow:** Texas House · Austin · London · Washington
- **Headline:** Where Texas meets the world.
- **Subhead (the positioning statement, written from the buyer's side):** The
  Texas platform at SXSW, Race Weekend, and SXSW London — the room where Texas
  business, capital, and culture meet the world, built for the partners who
  need to be in it.
- **CTAs:** Become a Partner · See the activations

Why this shape: the headline is a place and a direction — a house, a door,
both ways. The subhead names the buyer and the mechanism, which the mission
lines never did. The three-line stack retires from the hero (`index.astro`):
the network line moves to Partnerships as the value prop; the story line to
About and the Newsroom as the proof.

Headline alternatives: **The front door to Texas.** (Position B flat; strongest
for place-marketers; one-directional) · **Texas, when the world is watching.**
(names the mechanism up top).

### The CTA band

Keep "connect, celebrate, entertain" as brand voice on About and in culture
copy. **Retire it from the conversion band** — that band's one job is the ask,
and §6 already says buyers buy line items. Proposed: *Partner with Texas House
— Named placement. Programming voice. The introductions you came for.* →
Become a Partner. (`CtaBand.astro` takes `heading`/`sub` props; one edit.)

## 2. What they are actually asking

Three questions, and each one is really asking something else.

**"What kind of business is this?"**
Real question: Are you a company, a nonprofit, or a party? Am I buying
marketing, making a donation, or joining something? I need to know which budget
line this comes out of.

**"How do you make money?"**
Real question: Are you going to be here next year? If I attach my brand to you,
is this a real operation or three people and a venue deposit?

**"What are we paying for?"**
Real question: Give me line items. I have to justify this to someone.
"Exposure" and "access" are not line items.

**We currently answer all three with vision copy.** Vision is what makes them
take the meeting. It is not what makes them sign.

---

## 3. Decision one, before anything else

**What is the entity?**

> **[BOARD BRIEF — answered.]** `board-brief.md` settles this: Texas House
> operates through Horizon Discovery Group, LLC, converting to a Texas
> corporation taxed as a C-corp, with equity issued to the founding team and
> board. **A private, for-profit company.** The session ratifies rather than
> debates, and positioning follows: sponsors are buying marketing, so we talk
> audience, reach, and outcomes. The fundraise doc is raising capital, not
> donations.

This has to be settled first because it determines every other answer in this
document. We have a running fundraise doc, which reads nonprofit. We also sell
tiered sponsorships, which reads media company.

**[REBUILD]** One correction to the original: "we have a Board of Directors"
overstates it. The site's Board section is a deliberate empty state —
"announcements coming" — because zero board members exist in the CMS. So the
entity question is even more open than the draft assumed: the board is not yet
evidence either way, and whichever entity we choose shapes **who we recruit to
it**. (The Strategic Advisors section is in the same state.)

- [ ] For-profit. Then sponsors are buying marketing and we talk about audience, reach, and outcomes.
- [ ] Nonprofit. Then partners are funding a mission and we talk about impact, and sponsorship becomes underwriting.
- [ ] Both, with a clear wall between them.

Until this is decided, "how do you make money" has no clean answer, and everyone
on the team will keep giving a slightly different one.

---

## 3.5 [REBUILD] The tier collision nobody has named

Building the partnerships page surfaced this: **we are running three different
tier taxonomies at once**, and a buyer will eventually see all three.

| Source | Tiers |
|---|---|
| Live site partner walls (and the 2026 partner data) | Presenting → Partners → Activation → Food & Beverage |
| The rebuild's partnerships page (from the approved wireframe brief) | Sponsorship · In-Kind · Preferred Partner (+ Membership on the inquiry form) |
| This document's §6 table | Presenting · Partner · Activation · In-Kind |

These are not three names for one ladder — they slice differently ("Preferred
Partner" is a relationship tier; "Food & Beverage" is a category; "Presenting"
is a rank). The §6 deliverables table cannot be filled until ONE taxonomy wins.
**Add to today's agenda: pick the tier names.** Whatever wins, the rebuild's
tier cards, inquiry-form dropdown, and future partner walls all update to match
in one pass — and the CMS already has a `partnershipType` schema waiting to
drive them.

---

## 4. Three positions. Pick one to lead with.

These are not three taglines. They are three different bets about what business
we are in. They can coexist, but only one can lead.

### Position A: The Platform
*Texas House is shared infrastructure. Buy in instead of building your own.*

> Every year the world shows up at SXSW, at F1, at London. Everyone wants a
> Texas presence there. Almost nobody can justify building one from scratch. We
> are the presence. We produce the venue, the programming, and the room, and
> partners buy in at a fraction of what going alone costs.

Easiest to explain. Easiest to price. Sells against a known alternative, which
is the cost of doing it yourself.
Risk: makes us sound like an events vendor. Caps what we can charge.

### Position B: The Bridge
*Texas House is the front door to the eighth largest economy in the world.*

> Texas is having its biggest run since oil, and there is still no front door.
> If you are a country, a region, or a company trying to plug into that, there
> is no obvious room to walk into. We built it. Texas House is where global
> capital meets Texas builders, and the institutions that need to be in that
> flow fund the platform.

Highest ceiling on price. Matches who is actually paying us.
Risk: requires proof. We have to show the deals, the delegations, the outcomes.

### Position C: The Network
*The asset is the people. The events are just how we convene them.*

> We are building the network of ascending leaders in Texas. Not the people who
> already made it. The people about to. We convene them at the moments that
> matter, and partners fund the platform to get early access to that group.

Most emotionally compelling. Best long-term moat.
Risk: hardest to price and most likely to get "so it's a networking group?" It
also cannot be verified by a buyer, which makes it a weak lead and a strong
closer.

### The read on the table

**Lead with B. Deliver with A. Close with C.**

Look at the logo wall. Texas State University presenting. NYSE Texas, Rice, the
British Consulate, McKinney Innovation Exchange, Round Rock Chamber, the
Coalition for North American Trade, Akin, Defense Innovation Unit, NATO DIANA.
That is not a consumer brand roster. That is institutions and place-marketers
buying relevance and access.

Tito's, Red Bull, and Coca-Cola are almost certainly in-kind. The cash is
coming from organizations whose job is to attract capital, talent, and
attention to a place or an institution. That is a trade and soft-power buyer,
and they are used to writing large checks for exactly this. Position B speaks
their language. Position A is how we explain the mechanics once they are
interested. Position C is what we say when they ask why it will still matter in
three years.

**[REBUILD] Note for the session:** the rebuilt homepage currently *leads with
C* — the hero is the three mission lines, network first. If the room picks B,
the hero copy should change with it. That is one edit; the section below has
the candidate.

---

## 5. The pitch, at four lengths

Assuming we land on B. Rewrite if we pick differently.

### The tagline
> **Where Texas meets the world.**

Four words, bidirectional, implies a place. It covers "Texas to the world and
the world to Texas" without the mouthful.

**[REBUILD]** Two current facts the decision should know:
- "Recognizing Texcellence" is **already out of the hero** on the rebuild — the
  retire-from-hero recommendation is effectively done. It survives as the
  About-snippet and About-page headline, which is exactly the "campaign line
  only" fallback the original proposed. Today's decision is whether it keeps
  those two slots. (Open micro-question either way: the live site sets it with
  a space before the period — "Texcellence ." — and no one has ruled whether
  that is intentional.)
- The footer, `<title>`, and meta currently run "Bringing Texas to the world,
  and the world to Texas." If "Where Texas meets the world" wins, those three
  are the swap points — all in two files.

### The 10-second answer
> Texas House is the platform for Texas's global moment. We build the room
> where Texas business, capital, and culture meet the world, at the moments the
> world is already watching.

### The 30-second answer, with the money question pre-answered
> Texas is having its biggest run since oil, and there is still no front door
> to it. If you are a country, a company, or a university trying to plug into
> Texas, there is no obvious room to walk into. We build that room. Three or
> four times a year, at the moments the world already shows up, Texas House is
> the Texas platform. We are entirely partner-funded. Partners underwrite the
> programming and the venue, and in exchange they get named placement, a voice
> in the programming, and direct introductions to the people they came to meet.

### The two-minute version for a partner meeting
> **The moment.** Texas is the eighth largest economy in the world. Since 2020
> it has absorbed more corporate relocation, more energy and defense capital,
> and more cultural weight than any other state. Everyone knows this is
> happening. Almost nobody outside Texas knows how to get in.
>
> **The gap.** There is no front door. A British trade delegation, a university
> trying to commercialize research, a fund looking at Texas deal flow. They all
> end up cold-emailing the same five people.
>
> **What we built.** Texas House is that front door. We take the moments when
> the world is already assembled, SXSW, race weekend, SXSW London, and we build
> the Texas platform inside them. Curated programming during the day, culture
> at night, and deliberate introductions throughout.
>
> **How it works.** We are partner-funded. There are [N — see §3.5] ways in.
> Partners get named placement, programming voice, curated introductions, guest
> list access, and content from the activation they can use all year.
>
> **The proof.** [INSERT: attendance, caliber of room, deals or delegations
> that came out of 2025, named partner outcomes.] **[REBUILD]** — what the site
> can already say with a straight face, from real CMS data: **five activations
> in two years, in two cities (Austin and London), 56 programmed sessions, 47
> partners.** These render live on the About page's stat band today. Attendance
> and outcome numbers are still the gap.
>
> **What we are building.** Every activation adds to the network. The people we
> convene now are the people running Texas in ten years. Partners who are in
> early are in the room permanently.

---

## 6. The money answer, scripted

Marisa should be able to say this without thinking. Fill the brackets in the
meeting.

**"How do you make money?"**
> We are one hundred percent partner-funded. No ticket revenue, no membership
> dues, no cut of any deal that happens in the room. Partners fund the
> activations, and that is the whole model.

**"What are we paying for?"**
This is where we are currently losing deals. The answer has to be a list, not a
feeling. Fill this in today — **after §3.5 settles the column names**:

| Deliverable | Tier 1 | Tier 2 | Tier 3 | In-Kind |
|---|---|---|---|---|
| Named placement and logo tier | | | | |
| Programming slot or panel seat | | | | |
| Curated introductions (specify a number) | | | | |
| Guest list allocation | | | | |
| Content and photography rights | | | | |
| Year-round newsroom and social presence | | | | |
| Access to the full partner network | | | | |
| Price | $ | $ | $ | trade value |

**A sponsor buys line items.** The instant we can hand someone this table, the
"what are we paying for" question stops being asked. This table is more
valuable than any sentence in this document.

**[REBUILD]** Two site facts that feed this table:
- The partnerships page already renders three tier cards with draft inclusion
  lists (marked `draft copy — confirm with Will` in the source). This table,
  once filled, replaces those drafts nearly one-to-one — and can be CMS-driven
  via the existing `partnershipType` schema so pricing edits never need a
  deploy.
- "Year-round newsroom and social presence" is no longer aspirational: the
  newsroom is built and publishing (four pieces live). It is a deliverable we
  can screenshot.

---

## 7. Who is actually buying

Three distinct buyers. We have been pitching all three the same way, which is
why it lands with none of them.

| Buyer | Examples from our own roster | What they actually want | Lead with |
|---|---|---|---|
| **Place marketers** | British Consulate, McKinney EDC, Round Rock Chamber, Coalition for North American Trade | Deal flow, delegation visibility, FDI pipeline | The bridge. You get in front of capital and companies looking at Texas. |
| **Institutions** | Texas State, Rice, NYSE Texas, Akin, SeedAI, DIU | To be seen as central to the Texas story | The platform. Be at the center of the moment instead of adjacent to it. |
| **Brands** | Tito's, Red Bull, Coca-Cola, Allen's Boots | High-value audience, sampling, cultural association | The room. Here is exactly who is in it. |

Note the tension worth naming out loud: brands are largely coming in via
in-kind while institutions pay cash. If a cash partner ever finds out what an
in-kind partner paid, we need a clean answer. Recommend: in-kind partners
receive activation-level benefits only, never presenting or programming
placement, and we say so plainly. **[REBUILD]** the marquee's new per-sponsor
"Show in marquee" toggle is the first enforcement surface for this — placement
is now a switch we control per partner, not an accident of the import.

---

## 8. Objection handling

| They say | They mean | Response |
|---|---|---|
| "So it's a party?" | I can't expense a party. | Days are programming. Nights are culture. Both are the point, and the programming is what makes the nights worth attending. [Cite the 2025 panel lineup — the full two-day 2026 schedule with format tags is already in the CMS: 56 sessions.] |
| "What's the ROI?" | I have to justify this. | Depends what you're optimizing for. If it's deal flow we measure introductions made. If it's visibility we measure the room and the content. Tell me which one you're accountable for and I'll show you the version that matches. |
| "Why not do our own activation?" | I have a budget and a team. | You can. It runs roughly [$X] and you'll build an audience from zero. We've already built it, and you'd be in the room with [named partners] rather than competing with them for the same guests. |
| "Who's actually there?" | Is this the real room or the overflow room? | [Attendance and composition. This needs a real number.] |
| "How is this different from the Chamber or Y Texas?" | I already fund three of these. | They serve members. We build a platform at moments of global attention. Most of our partners do both, and they do them for different reasons. |
| "What happens the rest of the year?" | Am I buying three days or a relationship? | The newsroom, the network, and year-round programming. [Specify: how many non-flagship events. The newsroom is live and citable today.] |

---

## 9. What we decide today

- [ ] Entity type. For-profit, nonprofit, or both. (Shapes who we recruit to the still-empty board.)
- [ ] Which position leads. A, B, or C. (The rebuilt hero currently leads with C — it changes the day this is decided.)
- [ ] **Tier taxonomy — §3.5.** One set of names across sales, site, and partner walls.
- [ ] Tagline. Recommend "Where Texas meets the world."
- [ ] Retire "Recognizing Texcellence" fully, or keep it as the About/campaign line it already is on the rebuild. (And rule on the space-before-period.)
- [ ] Fill the deliverables table in §6, with prices.
- [ ] Agree the attendance and caliber numbers we are allowed to say out loud. (The CMS-verifiable set — 5 activations, 2 cities, 56 sessions, 47 partners — is already public on the rebuild.)
- [ ] Name the in-kind versus cash benefit split.

## 10. What ships after — updated against the built site

| # | Original item | Current reality | Effort now |
|---|---|---|---|
| 1 | One-pager for Marisa (pitch + deliverables front, logo wall + proof back) | Still to make. The logo wall exists as data (45 logos in the CMS) | A design task, not a content hunt |
| 2 | Objection card for live calls | Still to make — §8 is the content | Small |
| 3 | ~~Hero copy update feeds the rebuild wireframes~~ | **The rebuild is built.** Hero copy is one edit in `index.astro` | Minutes |
| 4 | Partnership page rewritten around the tiers table | **Page exists with draft tiers awaiting exactly this decision** | Replace drafts; optionally wire to `partnershipType` CMS |
| 5 | Persona versions of the two-minute pitch (×3 buyers) | Still to write from §7 | Small |
| — | *(new)* Converge the site's five copy surfaces on the chosen line | §1 table names every file | Under an hour, then cutover ships one voice |

---

*Numbers in brackets are the gaps. Every one of them is something a partner
will ask about in the first meeting. The CMS closed a few (activations, cities,
sessions, partners); attendance, outcomes, and prices remain — and filling
those in is most of the work.*

## 11. Lines of business (Part III of the team document, 2026-09-02)

The team artifact "Becoming a Company" now carries a Part III with three
sections. Nothing in it is decided; it is reference material plus two concepts.

- **§18 Membership benefits, by reference.** Boardroom's members club
  (boardroom.tv/members-club) as the benefit template: thought leadership
  sessions, VIP experiences, an annual members-only conference, tailored
  introductions, premier gifting. Three of the five we already deliver inside
  the activations. Tiers as published: Network $1,800/yr, Club $3,600/yr,
  Corporate contact-for-pricing.
- **§19 The flagship house.** Park House (Dallas 2018, Houston 2023; London
  club model; roughly $3,500/yr dues plus a $7,500 initiation; $25,000
  founding memberships with dues waived) and Soho House Austin (2021, Music
  Lane; 46 rooms, rooftop pool, screening room; Local from $937.50/quarter,
  Every House $4,300/yr). The Texas House difference is the calendar.
- **§20 Two lanes, one ladder.** Lane one, corporate: a business-development
  accelerator for the place-marketers and institutions, "business the Texas
  way." Lane two, individual: a room for founders, investors and energy
  operators. Ladder: activation partner → corporate member → club member →
  founding member of the house (a capital-raise device). Raises the entity
  question (§10 of the artifact) and a pricing rule for buyers who sit on two
  rungs.

## 12. Implemented on the site (2026-09-02)

The recommended branch of the positioning session is now live in the working
build, so the team can look at it rather than imagine it. Reversible in one
pass if the room picks differently.

- **Hero** (`src/pages/index.astro`): eyebrow "Texas House · Austin · London ·
  Washington"; headline "Where Texas meets the world."; subhead names the buyer
  and the mechanism; buttons Become a Partner / See the activations. The
  three-line mission stack is retired from the hero.
- **Title and meta** (`index.astro`, `BaseLayout.astro`): "Texas House — Where
  Texas meets the world." Footer keeps "Bringing Texas to the world, and the
  world to Texas." as the place line.
- **CTA band** (`CtaBand.astro`): subline is now the line-item benefit, "Named
  placement. Programming voice. The introductions you came for." The triplet
  "connect, celebrate, entertain" stays on About as culture copy.
- **Partnerships** (`partnerships.astro`): value proposition leads with the
  network line. Triplet removed from the page. Tier cards untouched, still
  awaiting the §13 deliverables table and prices.
- **About and Newsroom**: "Texan voices leading global conversations." retired;
  the story line ("The story of contemporary Texas") now anchors the About
  "Why" close, the About lede fallback, and the Newsroom lede and meta.
  "Recognizing Texcellence." kept as the About headline pending the decision.
- Still carrying retired lines on purpose: `src/pages/brand.astro` (the brand
  specimen lists the old lines as history) and `src/pages/proto.astro`.

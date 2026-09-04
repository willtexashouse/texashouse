# Texas House — Brand Specimen

> **Locked 2026-08-19.** The written companion to the live specimen at `/brand`
> (`src/pages/brand.astro`), which renders everything below in the real licensed
> faces. View it with `npm run dev` → http://localhost:4321/brand
>
> Implementation: `src/styles/global.css`.
> Provenance: the **Texas House CRM** is the brand authority; reconciled against
> the **Texas House Design System** (Claude Design). Where they disagreed, the
> CRM won — see `component-inventory.md` → THE RULE.

> **Gun Metal is the ground. Ivory is the figure. Clay is the punctuation mark.**

---

## 1. Colour

### Official palette — four colours

| Name | Hex | Token | Use |
| ---- | --- | ----- | --- |
| **Gun Metal** | `#181210` | `--txh-gunmetal` | Primary background — almost all surfaces |
| **Ivory** | `#faf6f0` | `--txh-ivory` | Primary text & foreground |
| **Clay** | `#793f34` | `--txh-clay` | Buttons, accents, rules, inverted background |
| **Black** | `#000000` | `--txh-black` | Seldom used — absolute voids only |

No gradients. Flat fields only.

### Derived surfaces — system use only

| Name | Hex | Token | Use |
| ---- | --- | ----- | --- |
| Raised | `#1d1612` | `--txh-bg-raised` | Cards, elevated surfaces |
| Deep | `#0e0b09` | `--txh-bg-deep` | Modals, deep wells |
| Input | `#221a16` | `--txh-bg-input` | Form fills |
| Ivory dim | `#e7decd` | `--txh-ivory-dim` | Secondary text on dark |
| Clay bright | `#9a4d3e` | `--txh-clay-bright` | Hover |
| Clay deep | `#5b2d24` | `--txh-clay-deep` | Pressed |

> The Design System lists Raised as `#221a16`. That value is the CRM's **input
> fill**, not its raised surface. The CRM's `#1d1612` is used here because it was
> contrast-measured against the text tokens that land on it.

### Earth secondaries

`--txh-rust` `#b85a3a` · `--txh-dune` `#c7a87a` · `--txh-sage` `#6b7a5a` ·
`--txh-bluebonnet` `#3d4a76` · `--txh-bone` `#ece4d2`

Tags and editorial accents only. **One per surface maximum, never as backgrounds.**

### Text-safe accent readings

The raw values above are for fills, dots and borders, where 3:1 is the bar. When
an accent carries **type**, use these instead — measured on Gun Metal:

| Reading | Token | Hex | Ratio | Note |
| ------- | ----- | --- | ----- | ---- |
| Accent | `--txh-accent-text` | `#d96b56` | 5.46:1 | clay lifted — raw clay-bright was 3.09:1 |
| Dune | `--txh-gold` | `#c7a87a` | 8.22:1 | as-is |
| Sage | `--txh-good-text` | `#93a67f` | 7.06:1 | lifted — raw was 4.02:1 |
| Rust | `--txh-warn-text` | `#d4805d` | 6.22:1 | lifted — raw was 4.03:1 |
| Bluebonnet | `--txh-blue-text` | `#8fa1cf` | 7.21:1 | lifted — raw was 2.15:1 |

### Foreground tiers

| Token | Use | Ratio |
| ----- | --- | ----- |
| `--txh-fg-1` | Primary text | — |
| `--txh-fg-2` | Secondary text | — |
| `--txh-fg-3` | Tertiary / meta | 5.79:1 |
| `--txh-fg-4` | Muted — timestamps, counts, placeholders | 5.01:1 |
| `--txh-decor` | Ornament, disabled marks, strike-through. **Never text.** | 2.77:1 |

### Rules & hairlines

`--txh-rule` 10% ivory · `--txh-rule-strong` 22% · `--txh-rule-bold` 90% ·
`--txh-border-input` 40% (3.61:1 — form borders need 3:1, and here the border is
the only cue a field exists).

---

## 2. Type

**One display face, print and web.** The Design System's two-track rule
(Changa One for digital) described the legacy Webflow site and is **retired**.

| Role | Family | Token |
| ---- | ------ | ----- |
| Display | **TAY Dreamboat** | `--font-display` |
| Secondary display | **Laslo** | `--font-alt` |
| Eyebrow caps | **BN Bergen St** | `--font-eyebrow` |
| Body | **Lato** | `--font-body-web` |
| Mono | SF Mono / ui-monospace | `--font-mono` |

Files live in `public/fonts/` — the CRM was the only place on the machine
holding them.

### Tracking

| Token | Value | Where |
| ----- | ----- | ----- |
| `--ls-dreamboat` | `-0.12em` | Hero scale. Letters nearly touch — never zero, never positive |
| `--ls-dreamboat-sm` | `-0.05em` | Below ~36px, where hero tracking merges the letterforms |
| `--ls-eyebrow` | `0.12em` | Reduced from 0.18em: more tracking breaks caps into loose letters instead of words, the cue a dyslexic reader leans on |
| `--ls-initials` | `0.04em` | Person marks. Mirror as `text-indent` — tracking emits a trailing advance after the last letter |

### Helper classes

`.txh-display` · `.txh-display-sm` · `.txh-eyebrow` · `.txh-mono` · `.txh-chip` ·
`.txh-rule-dashed`

Use these rather than setting `font-family` by hand — they carry the tracking rules.

### Scale

`--fs-mega` clamp(72–192px) · `--fs-display` clamp(48–104px) · `--fs-h1` 56 ·
`--fs-h2` 40 · `--fs-h3` 28 · `--fs-h4` 22 · `--fs-body-lg` 20 · `--fs-body` 17 ·
`--fs-small` 14 · `--fs-micro` 12

Line height: `--lh-tight` 0.92 · `--lh-display` 1.02 · `--lh-heading` 1.12 ·
`--lh-body` 1.55

### Casing

| Use-case | Casing | Example |
| -------- | ------ | ------- |
| Display headlines | ALL CAPS | `GET ON THE LIST` |
| Section / programme names | ALL CAPS | `GLOBAL INNOVATION RODEO` |
| Partner tier labels | ALL CAPS | `PRESENTING PARTNERS` |
| Page titles (web) | lowercase | `partner with us` |
| Event titles in schedule | Title Case | `The Rise of Y'all Street` |
| Bracketed format tags | ALL CAPS | `[MUSIC SHOWCASE]` |
| Sub-CTA triplets | all lowercase | `no registration, no entry, no fun` |
| Times | ALL CAPS | `10:30 AM – 12:30 PM` |

---

## 3. Space, shape, motion

**Spacing** — 4px base: `--space-1` 4 · `-2` 8 · `-3` 12 · `-4` 16 · `-5` 24 ·
`-6` 32 · `-7` 48 · `-8` 64 · `-9` 96 · `-10` 128

**Radii** — mostly zero. Rectangles are sharp, like cut paper.
`--radius-0` 0 · `-1` 2px · `-2` 6px · `-3` 12px · `--radius-pill` 999px.
Pill buttons and the rocker-patch curve are the only sanctioned exceptions.

**Shadows** — matte print system. **No shadows on layout elements.** Use only for
objects literally sitting on something: `--shadow-sm` · `--shadow-md` ·
`--shadow-print`.

**Motion** — `--dur-fast` 140ms · `--dur-base` 240ms · `--dur-slow` 420ms ·
`--ease-out` `cubic-bezier(0.2,0.7,0.2,1)` · `--ease-in` · `--ease-emph`.

---

## 4. Components in the foundation

- **Bracket tag** (`.txh-chip`) — the CRM chip idiom, `[MUSIC SHOWCASE]`.
- **Buttons** — primary clay pill · ghost ivory outline · underline link.
- **Rules** — 2px signature clay · dashed clay separator · 1px hairline.

---

---

## 5. Motion & treatment system — carried from the portfolio

Four treatments are being brought over from Will's portfolio (`~/clients/
will-herrmann-portfolio/src/ds/`) and re-skinned to Texas House. All four are
**dependency-free** — pure React + CSS + SVG filters. All four ship
`prefers-reduced-motion` handling already. Each becomes an Astro island
(`client:visible`, or `client:load` for anything above the fold).

### 5.1 Scanlines + film grain — `TextureOverlay`

A fixed, site-wide layer at `z-index: 50`, `pointer-events: none`. Two stacked
passes:

| Pass | How it's made | Settings |
| ---- | ------------- | -------- |
| Film grain | Inline SVG `feTurbulence` (fractalNoise, baseFrequency 0.9, 2 octaves) desaturated by `feColorMatrix`, encoded as a data-URI and tiled | 180px tile · opacity `0.045` · `mix-blend-mode: overlay` · 8s 6-step drift so it shimmers like live film |
| CRT scanlines | `repeating-linear-gradient` — 2px transparent, 1px `rgba(0,0,0,0.16)` | opacity `0.5` |

Reduced motion freezes the grain to a static frame. Both passes drop away at
≤680px so nothing competes with mobile reading.

**Texas House notes**
- The grain is already monochrome (`saturate 0`), so it rides Gun Metal without
  recolouring it. No change needed.
- Scanlines are **subtractive black**, not a brand colour — correct as-is. They
  darken rather than tint, which is what keeps them off the palette.
- ✅ **RESOLVED (Will, 2026-08-19): scanlines, not paper texture.** The Design
  System's `assets/textures/paper-grain.png` and its `.txh-grain` helper are
  **retired** — we are not shipping the paper-texture direction. The
  `feTurbulence` grain here stays as the substrate under the scanlines (it is
  self-contained, no asset to ship, and it animates); the scanlines are the
  treatment we are actually going for.
- The footer (§5.5) carries its **own** stretched grain for the horizon band.
  That is a separate, local effect — not a duplicate of this layer, and not
  something to consolidate away.

### 5.2 Telemetry bar — `TelemetryBar`

A fixed hairline status strip pinned to the bottom of the viewport — a row of
live mono readouts framing the page like the status line of a powered-on
instrument. One rAF-throttled scroll/resize listener drives scroll% and
active-section detection; a 1s interval drives the clock. Hidden ≤680px.

Current readouts: **identity · visitor↔Austin coordinates · active section
(the single accent beat) · live scroll % · Austin wall clock.**

**Texas House notes**
- **It is already Austin-native.** The component hard-codes `AUSTIN = [30.2672,
  -97.7431]` and computes the visitor's distance to it. Built for the portfolio,
  but it is a Texas House idea — carry it over unchanged.
- Recolour: the one accent beat → `--txh-accent-text` (never raw clay; at text
  size raw clay-bright is 3.09:1). Mono → `--font-mono`. Hairline →
  `--txh-rule`.
- Identity readout → `TEXAS HOUSE`.
- **Opportunity:** the brand doc documents countdown timers for upcoming events.
  The telemetry bar is the natural home for a `T-MINUS` readout to the next
  event — it would use `UPCOMING_EVENTS_QUERY` (see `events-model.md`) and give
  the strip a reason to exist beyond decoration.

### 5.3 RGB channel registration for photography — `ChannelRegisterImage`

The photo treatment. Scroll-linked: the image's own R/G/B channels are isolated
with `feColorMatrix` and additively recombined with `mix-blend-mode: screen`, so
**at zero offset the layers reproduce the original photo exactly** — no tint, no
recolour, no luminance shift.

- Split is maximum at the viewport edges, zero at centre — paired with a
  96%→100% scale-in, so the photo snaps into focus as it centres.
- R shifts `-x / -0.35y`, B shifts `+x / +0.35y`, G holds still. Default
  `maxSplit` 26px.
- Registration is reached 15% before true centre so it resolves early, then
  **latches permanently** — it never re-splits on subsequent scrolls.

**Texas House notes**
- **On-brand by construction.** The brand rule is "treat photography warm,
  highlights toward Ivory, shadows toward Gun Metal; cold blue casts are
  off-brand." Because the effect resolves to the untouched original, it adds no
  cast at all. It is a motion treatment, not a colour treatment.
- Use on event photography — galleries, past-event tiles, the About narrative
  image. Already proven on the car photo in the portfolio.
- Needs `client:visible`; it listens to scroll.

### 5.4 Buttons — from `SpectrumButton`

**Carry the interaction over. Buttons should be fun, not bland.** What makes the
portfolio button work, in order of importance:

| Feature | Mechanic | Keep? |
| ------- | -------- | ----- |
| **Label roll** | Two stacked copies of the label in an overflow-hidden column; hover translates `-50%` over `.5s cubic-bezier(.76,0,.24,1)`. The word exits the top as a fresh copy rises from the bottom | ✅ the signature move |
| **Diagonal arrow roll** | Arrow exits top-right (`115%,-115%`) while a second arrow enters from bottom-left — inside its own inset box | ✅ pairs with the label roll |
| **Standing outline ring** | A wrapper with 9px padding and a 1px accent border at 14px radius, framing a 10px-radius pill — a visible frame around the button, not on it | ✅ reads as engineered |
| **CRT glitch on hover** | Two pseudo-elements, `mix-blend-mode: multiply` at `z-index 0` beneath the label: fine drifting scanlines plus periodic tear bursts driven by `clip-path` insets | ✅ and it rhymes with §5.1 — the same scanline language at component scale |
| **Reduced-motion** | Every transform and animation disabled; second arrow removed from the DOM | ✅ non-negotiable |
| Underline variant | `Button variant="link"` — hairline bottom border that brightens on hover | ❌ **excluded per Will, 2026-08-19** |

**Texas House notes**
- Recolour: cream pill → Ivory · ember ring → Clay · ink arrow box → Gun Metal ·
  mono label → `--font-mono` or `--font-eyebrow` with `--ls-eyebrow`.
- The pill radius is a sanctioned exception to "mostly zero" (§3).
- Styles self-inject once via a `<style data-sb>` tag — fine in Astro, but if we
  port more than one component this way, consolidate into `global.css` rather
  than shipping several injectors.

### ✅ Shipped (Will's calls, 2026-08-19)

| Decision | Result |
| -------- | ------ |
| Corners | **Softened, not sharp.** Default `--radius-2` (6px). `shape="sharp"` and `shape="pill"` remain available |
| Brackets | **Off by default.** `bracket` prop still there |
| Arrow box | **Off by default.** `arrow` prop still there — without it the button takes symmetric padding |
| Fill | Clay primary, ghost secondary |

The **label roll and the CRT glitch stayed** — they are what make it fun, and
they cost nothing (pure CSS, zero JS). Radius comparison at `/proto`.

### Direction: design new buttons

**The legacy site's buttons are out.** The brand doc's `.white-bubble-btn.brown`
spec — Clay bubble fill, Ivory text, "fill grows from centre" hover — describes
the old Webflow site and is **not** being carried over, the same way its
two-track font rule was retired.

**We are designing new buttons.** They should be *fun*. Bland is the failure
mode to avoid.

The portfolio button is the **vocabulary**, not the template. Its five mechanics
above are the parts bin; the Texas House button is a new object assembled from
them plus whatever else earns its place. Things to consider when designing:

- The **roll** is the strongest idea in the parts bin — it makes the button feel
  mechanical and deliberate rather than a hover-colour-change. Start there.
- The **CRT glitch** is now doubly justified: §5.1 makes scanlines the site's
  signature texture, so a button that glitches into scanlines on hover is
  speaking the site's own language rather than borrowing a trick.
- The **standing ring** reads as engineered — it frames the button rather than
  decorating it, which suits "institutional gravitas that doesn't drop its
  accent at the door."
- Fill is **open**. Both Clay-on-Gun-Metal and Ivory-on-Gun-Metal are on-palette
  and read very differently. Worth prototyping both rather than picking on paper.
- The pill radius is a sanctioned exception to "mostly zero" (§3) — but a **sharp
  rectangle** button would be more on-brand with "rectangles are sharp, like cut
  paper." Also worth prototyping.

Brackets are another unexplored angle: `[ BECOME A PARTNER ]` would tie the
primary CTA to the bracket-tag idiom (§4) that already runs through the system.

### 5.5 Footer — `SiteFooter`

**We are building our own, but the portfolio footer is the format to learn from.**
(Will, 2026-08-19.)

Good news: it is already a **fully propped component** — every element is a
parameter, so porting is configuration rather than a rewrite.

| Region | What it does | Prop |
| ------ | ------------ | ---- |
| Nav stack | Oversized links separated by full-width hairlines — reads as a table of contents, not a link list | `navLinks` |
| Place block | Two short declarative lines, upper right | `place` |
| Twin globes | Two dithered globes, Americas + Europe/Africa — the "here and everywhere" idea, stated visually | `globe` |
| Socials | Small rounded-square icon buttons under the place block | `socials` |
| Local mark + clock | A **Texas state icon** beside a live Austin clock with weekday/date | `localMark` · `cityName` · `timeZone` |
| Centre column | "Back to top ↑" over a status line | `booking` |
| Copyright | Faint, right-aligned | `year` · `owner` |
| Horizon band | A glowing halftone drape with the wordmark laid over it, carrying its **own** stretched `feTurbulence` grain (baseFrequency `0.012 0.08`, 3 octaves, alpha boosted) | `shaderImage` · `wordmark` |
| Telemetry strip | Pinned beneath everything — see §5.2 | — |

**Texas House adaptation**

- **The place block is the headline idea.** "Based in Austin, Texas. / Working
  Worldwide." becomes **"Bringing Texas to the world, / and the world to Texas."**
  — which is already the organisation's own line, verbatim, from the Design
  System README. It says the mission in the space the portfolio uses for a
  location.
- **The twin globes were made for this.** On the portfolio they illustrate reach;
  here they *are* the mission. Keep the device; needs a Texas House-toned asset.
- **The Texas mark and the Austin clock carry over unchanged** — `localMark` is
  already a Texas icon and `timeZone` is already `America/Chicago`. Like the
  telemetry bar (§5.2), this was always a Texas idea.
- `navLinks` → About · Events · Newsroom, with **Become a Partner** as the
  primary (every page routes to it — see `wireframe-brief.md`).
- `booking` ("Booking projects for Q3 '2026") → the Texas House equivalent is a
  **next-event line**, fed by `UPCOMING_EVENTS_QUERY`. Pairs with the T-MINUS
  telemetry readout in §5.2.
- `wordmark` → the Cursive wordmark (already in `public/logos/`), which the brand
  doc designates as the **footer** logo. The rocker patch is print/deck only.
- `socials` → `@gone2TXHouse` (X) · `/company/texashouse/` (LinkedIn) ·
  `@gone2texashouse` (Instagram).
- Recolour throughout: `--text-faint` → `--txh-fg-4`, hairlines → `--txh-rule`,
  the accent beat → `--txh-accent-text`.

**The horizon band stays** (Will, 2026-08-19). It does not have to be the
portfolio's `halftone-drape.png` — we will design our own — but **keep the slot
in the layout and build against it.** A placeholder drape is fine in the
meantime; the band is part of the footer's composition, not a decoration to be
added later. The brand rule "highlights toward Ivory, shadows toward Gun Metal"
already describes the treatment we want.

---

## 6. Not in the system

- **No light theme.** Gun Metal is the ground, everywhere, no exceptions.
- **No gradients.** Flat fields only.
- **No shadows on layout elements.**
- **No Changa One.** The two-track font rule is retired.
- **No emoji**, no exclamation marks in headlines, no hashtags in body copy.
- **No `--txh-decor` on text.** Ornament only.
- No generic AI phrasing: *leverage, unlock, supercharge, next-gen*.

---

## 7. Verified

Measured in-browser at `/brand`, 2026-08-19:

```
TAY Dreamboat  loaded   display tracking  -9.33px @ 77.76px  = -0.12em ✓
BN Bergen St   loaded   eyebrow tracking   1.44px @ 12px     =  0.12em ✓
Laslo          loaded   display-sm        -2.00px @ 40px     = -0.05em ✓
16 specimen sections rendered · 0 console errors · build clean (10 pages)
```

---

## 8. Still open

1. **Button design** — direction is set (§5.4: new, fun, portfolio mechanics as
   the parts bin). Still to prototype: fill (Clay vs Ivory), shape (pill vs sharp
   rectangle), and whether the bracket idiom carries the primary CTA.
2. **Footer assets** — a Texas House twin-globe image, and our own horizon drape.
   The drape **slot stays in the layout either way**; placeholder until designed.
3. **Hero treatment** — deliberately deferred; the site gets built around it.
   `DitheringShader` (raw WebGL, no dependency) vs `LiquidWordmark` (needs
   three.js). See `component-inventory.md` → dependency audit.
4. **`Recognizing Texcellence .`** — the live site has a space before the period.
   The brand doc says "always with period" but is silent on the space. Confirm
   before reproducing.
5. **Parked, easy to add** — the seven partner logos, the paper-grain texture and
   its `.txh-grain` helper, and `Heading.jpg` as the photography-tone reference.
6. **Feed back to the Design System** — its `--ls-eyebrow` is still 0.18em and its
   raised surface is still `#221a16`. Both are superseded here.

- **Ghost ring (2026-09-02).** Ghost buttons now show the same ivory standing
  ring as solid buttons, with the inner stroke dimmed to 35%. Paired buttons
  (hero, About, CTA band) share one outline and one height. Previously the
  ghost ring was transparent, which made the secondary button look smaller.

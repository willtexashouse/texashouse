# Component Inventory — donor libraries & the brand rule

> Status: **Reference.** Captured 2026-08-19, scope narrowed same day.
> Read this before touching `src/`.
>
> This is the **Texas House website** (`texashouse.org`) — the public site.
> Not the CRM, not the portfolio, not shoplift. Those are only sources we
> borrow from.

---

## THE RULE

**The Texas House CRM is the brand guideline. Everything on this website
conforms to it. No exceptions.**

`~/dev/texas-house-crm/web/src/app/(app)/crm-system.css` is the authority for
color, type, spacing, motion, and the visual signatures (bracket tags, dashed
clay rules, eyebrow caps). That system was dialed in over many sessions and it
*is* the Texas House brand.

Components borrowed from the portfolio or shoplift come in as **structure and
behavior only**. Their own color, type, and spacing are stripped at the door and
replaced with CRM tokens. A donor component that still shows ember orange, acid
green, Archivo, or Anton is **not finished being ported**.

When a donor's look and the CRM's brand disagree, the CRM wins — every time,
without discussion.

### Decisions locked 2026-08-19

Reviewed against the **Texas House Design System** (Claude Design project
`019e2c95-86bb-7c0a-aa54-d40471c25445`), which is the canonical brand-guidelines
document. Where it and the CRM disagreed:

| Question | Decision | Note |
| -------- | -------- | ---- |
| Display face on web | **TAY Dreamboat everywhere** | The Design System's "two tracks, never cross" rule (Changa One for web) describes the LEGACY Webflow site. Retired for the rebuild. |
| Ground | **Dark everywhere, no exceptions** | "Gun Metal is the ground. Ivory is the figure. Clay is the punctuation mark." No light theme ships. |
| Eyebrow tracking | **0.12em** (CRM) | The Design System's 0.18em is the value the CRM corrected for dyslexic readers. **The Design System doc should be updated.** |
| Display tracking | **CRM two-tier** | -0.12em hero / -0.05em under ~36px. The Design System's flat -0.1em has no small-size exception. |
| Raised surface | **#1d1612** (CRM) | The Design System's #221a16 is actually the CRM's input fill. |
| `--rule-strong` | **CRM 0.22** | The Design System used the same name for a 90% ivory bold rule. That is now `--txh-rule-bold`. |

**Adopted FROM the Design System** (things the CRM had no answer for): the type
scale, line-height tiers, 4px spacing scale, radii scale with the "sharp like cut
paper" rule, matte shadow tokens with "no shadows on layout elements", and the
`--ease-in` / `--ease-emph` / `--dur-slow` additions. All now live in
`src/styles/global.css`.

**Parked, available on request:** the voice/casing/copy rules, the partner logo
set, the paper-grain texture, and `Heading.jpg` as the photography-tone reference.

---

## Donors and their roles

| Donor | Location | Role | Scope |
| ----- | -------- | ---- | ----- |
| **Texas House CRM** | `~/dev/texas-house-crm/web` | **Brand authority.** Tokens, fonts, logos, visual signatures | Governs everything |
| **Will's portfolio** | `~/clients/will-herrmann-portfolio` | **Creative + component donor** | Large pull — see §2 |
| **shoplift.media** | `~/Desktop/shoplift-vercel` | **Two patterns only** | Research page + its home-page preview |

### Why the CRM also works as the CSS architecture

`crm-system.css` (2,713 lines) and shoplift's deployed `index.html` are built the
same way: a `:root` token block, then flat semantic classes. Same architecture,
different brand painted on. So porting is a **re-tokenize, not a rewrite** — and
the portfolio's React components, while structured differently, are
self-contained enough to import into Astro directly and restyle.

---

## 1. Texas House CRM — the brand authority

The only place in code where the real Texas House brand exists, and the only
place on this machine holding the licensed font files.

### Tokens — copy this block verbatim

```
--txh-gunmetal      #181210     --txh-clay          #793f34
--txh-gunmetal-deep #0e0b09     --txh-clay-deep     #5b2d24
--txh-ivory         #faf6f0     --txh-clay-bright   #9a4d3e
--txh-ivory-dim     #e7decd     --txh-rust          #b85a3a
                                --txh-dune          #c7a87a
--txh-sage          #6b7a5a     --txh-sage-deep     #606e51  (a11y-corrected)
--txh-bluebonnet    #3d4a76

--font-display   "TAY Dreamboat"   (display, all caps, tight)
--font-eyebrow   "BN Bergen St"    (engineered eyebrow caps)
--font-body-web  "Lato"
--font-mono      ui-monospace / SF Mono

--ls-dreamboat    -0.12em   (hero scale only)
--ls-dreamboat-sm -0.05em   (below ~36px — tighter merges the letterforms)
--ls-eyebrow       0.12em   (deliberately reduced from 0.18em for dyslexic readers)
--ls-initials      0.04em   (person marks — set text-indent to match)

--dur-fast 140ms  --dur-base 240ms  --ease-out cubic-bezier(0.2,0.7,0.2,1)
--z-nav 50  --z-fab 60  --z-overlay 90  --z-modal 200
```

**Do not paraphrase or retype these.** The comments in the source file record
accessibility decisions that were earned the hard way:

- `--txh-sage-deep` exists because brand sage carries ivory at only 4.28:1 and
  gunmetal at 3.40:1 — neither ink reads on it. The corrected value lands ivory
  at 5.07:1 without moving the hue.
- `--ls-eyebrow` was pulled back from 0.18em because that much tracking breaks
  caps into loose letters instead of words — the cue a dyslexic reader leans on.
- `--ls-initials` must be mirrored as `text-indent`, because tracking emits a
  trailing advance after the last letter and centered initials otherwise sit
  half a space left of center.

Losing these means re-deriving them. Copy the block with its comments intact.

### Font files — `web/public/fonts/` → `~/texashouse/public/fonts/`

```
TAYDreamboat.otf   TAYDreamboat-Thin.otf   Laslo-Regular.ttf   BNBergenSt.otf
```

Nowhere else on the machine. Lato and Open Sans load from Google Fonts.

### Logos — `web/public/logos/`

`txh-monogram.png` · `texas-flag.png` · `Texas House Cursive logo.png` ·
`texas-house-rocker.png`

### Visual signatures to carry to the website

| Signature | Source | Use |
| --------- | ------ | --- |
| Bracket tags — `[LEAD]`, `[OUTBOUND]` | `crm-chip` (33 rules) | Newsroom topics, partnership types |
| Dashed clay rules | `crm-system.css` | Section separators, framing |
| Eyebrow caps | `--font-eyebrow` + `--ls-eyebrow` | Section labels, kickers |
| Initials person marks | `person-mark.tsx` + `palette.ts` | Team / Board / Advisors rosters |
| Button system | `crm-btn` (15 rules) | Reference for every CTA |

### Not to be carried over

Sidebar, command palette, agent pane, contacts list, board, drawer — that is
**application** furniture. Wrong for a public marketing site. Take the brand
system, leave the app chrome.

---

## 2. Portfolio — the creative pull

`src/ds/` — 26 self-contained components, 4,641 lines.
`src/sections/` — 11 page sections, 1,770 lines.

**This is the big pull.** These components carry the personality; the CRM
supplies the brand they wear.

### Animated text
| Component | Lines | What it does |
| --------- | ----: | ------------ |
| `DecodeText` | 121 | Decrypt/decode reveal, fires once on scroll-in (IntersectionObserver) |
| `ScrollRevealText` | 103 | Scroll-linked text reveal |
| `GrainHeading` | 82 | Display heading with grain texture over the type |

→ Retype in TAY Dreamboat. `GrainHeading` at hero scale needs `--ls-dreamboat`.

### "System coming online"
| Component | Lines | What it does |
| --------- | ----: | ------------ |
| `BootSequence` | 251 | One-time-per-session cold-boot terminal overlay |
| `TelemetryBar` | 280 | Fixed bottom hairline status strip, live mono readouts |
| `LaunchReadout` | 176 | Telemetry flash on back-to-top |
| `AcquireFrame` | 263 | Full-viewport viewfinder HUD — four corner brackets |

→ Recolor to gunmetal/ivory with clay accents. These pair naturally with the
CRM's bracket-tag idiom — same engineered voice.

### Navigation shell
| Component | Lines | What it does |
| --------- | ----: | ------------ |
| `NavBar` | 85 | Top nav |
| `MobileMenu` | 67 | Shared drawer; state lives in App so multiple triggers open one overlay |
| `StickyNav` | 126 | Scroll-activated sticky nav (in `sections/`) |
| `SiteFooter` | 316 | Full footer — most complete of any donor |

### Texture, backgrounds, WebGL
| Component | Lines | What it does |
| --------- | ----: | ------------ |
| `DitheringShader` | 426 | WebGL2 animated dither shape, fills its container |
| `LiquidWordmark` | 418 | Interactive WebGL wordmark — drag-through-water velocity field |
| `GrainField` | 110 | Colored light pools bleeding from the edges |
| `GridField` | 43 | Pure-CSS low-opacity background grid |
| `TextureOverlay` | 88 | Site-wide fixed analog-texture layer (z-50, pointer-events none) |
| `ChannelRegisterImage` | 115 | Scroll-linked RGB channel separation on a photo (SVG feColorMatrix) |

→ `GrainField`'s light pools must be re-tinted from ember to clay/rust/dune.
`LiquidWordmark` is the strongest candidate for the hat-on-globe hero slot.

### Data display
| Component | Lines | What it does |
| --------- | ----: | ------------ |
| `ImpactCounters` | 246 | Count-up stats band, animates 0 → value on first scroll-in |
| `DeploymentMap` | 346 | Abstract tactical network map, single inline SVG (no map library) |
| `WorkFeature` | 357 | Featured work unit |
| `MediaAppearances` | 80 | Compact press list, rows link out |
| `ServiceList` | 98 | Service rows |
| `IndexRow` | 162 | Numbered index row |

### Confirmed for port (Will, 2026-08-19)

Four treatments are locked in. Full mechanics and Texas House re-skin notes are
in `brand-specimen.md` §5 — read that before porting any of them.

| Component | Role on the Texas House site |
| --------- | ---------------------------- |
| `TextureOverlay` | Site-wide scanlines + film grain |
| `TelemetryBar` | Bottom status strip — already Austin-native |
| `ChannelRegisterImage` | **The** photo treatment, on all event photography |
| `SpectrumButton` | Button **vocabulary** — the parts bin for a new Texas House button |
| `SiteFooter` | Footer format — fully propped, so porting is configuration |

Excluded: the `Button variant="link"` underline style, and the legacy Webflow
button spec from the brand doc (Clay bubble + grow-from-centre hover).

### Small polish
`SpectrumButton` (136 — the pill CTA with standing accent outline; ember → clay) ·
`Button` (153) · `Badge` (42) · `Hairline` (21) · `MonoLabel` (56)

### Dependency audit — what porting these actually costs

Run 2026-08-19 across all 37 files in `src/ds` + `src/sections`. There are only
**three** non-React imports in the entire library:

| Component | Needs | Note |
| --------- | ----- | ---- |
| `LiquidWordmark` | `three` 0.160.0 | The only three.js consumer |
| `ScrollRevealText` | `gsap` 3.13.0 + ScrollTrigger | The only gsap consumer |
| **Everything else (24 of 26)** | **nothing** | Pure React + CSS |

`DitheringShader` — the 426-line WebGL2 piece — uses **raw WebGL, no library**.
It is a dependency-free hero option.

**React 19 compatibility: clear.** The portfolio is on React 18.3.1 and this repo
is on React 19, but a scan found no `ReactDOM.render`, `defaultProps`,
`componentWill*`, or `findDOMNode`. It's all hooks.

**Astro hydration:** 18 of 26 touch `window`/`document`, so they must be islands
with a `client:*` directive, not static renders. `client:visible` for anything
below the fold; `client:load` for the nav and hero.

**Installs are gated.** Per the global package-install protocol, `three` and
`gsap` each need a named version, a socket.dev check, and explicit approval
before install. Two ways to avoid that entirely:
- Use `DitheringShader` (no dependency) for the hero instead of `LiquidWordmark`.
- `ScrollRevealText`'s scroll reveal is plausibly rebuildable on
  IntersectionObserver, which `DecodeText` and `ImpactCounters` already use.

Decide the hero first — it is the only thing that genuinely argues for three.js.

### Sections
`Hero` (240) · `TestimonialSection` (335) · `FieldShowcase` (213) ·
`FAQSection` (165) · `FounderSection` (156) · `AboutSection` (125) ·
`HelpSection` (116) · `BrandQuilt` (108) · `MediaSection` (108) ·
`FeaturedWork` (78)

---

## 3. shoplift.media — two patterns, nothing else

**Scope is deliberately narrow.** Only the research/dispatch presentation is
being taken. Everything else on that site stays there.

Source: `~/Desktop/shoplift-vercel/` — the deployed static build. Class-and-token
based, so it re-skins cleanly.

> ⚠️ Ignore `~/Desktop/shoplift-media` (the React source). It is an older
> generation with inline styles, a different palette, and a different type stack.
> Not needed for either pattern below.

### 3a. Research page → Texas House **Newsroom** (`/newsroom`)

`shoplift-vercel/research/index.html`, 1,050 lines.

| Pattern | Classes | Newsroom use |
| ------- | ------- | ------------ |
| Topics grid | `topics-grid` · `topic` · `t-name` `t-idx` `t-desc` `t-foot` | Topic filter (Venture, Tech, AI, FDI, Policy, Community, Music, Film, Culture) |
| Year dividers | `year-divider` · `year` | Archive grouping by date |
| Article rows | `row` · `research-item` | Paginated archive grid |
| Section header | `section-head` · `section-head-num` · `section-title` · `section-link` | Page + section headers |
| Framing ticks | `frame-tick` (`tl` / `br`) | Corner ticks — pairs with `AcquireFrame` |

### 3b. Home-page research preview → Home **Recent Articles**

The `#research` block in `shoplift-vercel/index.html`. Three parts:

1. **Section head** — `§07 DISPATCHES` eyebrow + oversized display title +
   `ALL ARTICLES` link out.
2. **Featured item** — `research-feature` with corner `frame-tick`s, a
   `feat-thumb` (meta / arrow glyph / read-time) and `feat-text`
   (`feat-meta` → `feat-kicker` → `feat-title` → `feat-excerpt` → `feat-read`).
3. **Grid of three** — `research-grid` of `research-item` cards, each with
   `ri-meta` (number · date) → `ri-tag` → `ri-title` → `ri-excerpt` → `ri-read`.

This is already the exact shape the IA calls for: *"Featured post + three most
recent."* It maps one-to-one.

### Rebrand notes for both

- `--acid` / `--green` `rgb(2,170,109)` → `--txh-clay`
- `--bone` `#F2EFE9` → `--txh-ivory`, `#000` ground → `--txh-gunmetal`
- Anton / Saira Condensed → TAY Dreamboat; Space Mono → `--font-mono`
- `ri-tag` becomes a `crm-chip` bracket tag
- The `R / 01` dispatch numbering idiom translates directly to Texas House
  article numbering, and suits the CRM's mono-index voice
- Film-grain overlay (`grain-film.jpg`, opacity 0.04, `mix-blend-mode: overlay`)
  is compatible with the portfolio's `TextureOverlay` — pick one, not both

---

## Mapping — Texas House sections → donors

Follows `wireframe-brief.md` (approved 2026-08-19, nine pages).
**All entries inherit THE RULE above.**

### Global
| Need | Donor | Piece |
| ---- | ----- | ----- |
| Sticky navbar + condensed state | Portfolio | `NavBar` + `StickyNav` |
| Mobile menu | Portfolio | `MobileMenu` |
| Footer (logo, mission, 3 nav cols, socials, legal) | Portfolio | `SiteFooter` |
| CTA band (every page) | Portfolio structure, CRM skin | `SpectrumButton` on a clay-ruled band |
| Buttons / CTAs | Portfolio structure, CRM skin | `SpectrumButton` + `Button` → `crm-btn` tokens |
| Tags / chips / category labels | **CRM** | `crm-chip` bracket tags |
| Texture layer | Portfolio | `TextureOverlay` · `GrainField` · `GridField` |
| Section headers | shoplift | `section-head` + `section-head-num` |
| Framing | Portfolio + shoplift | `AcquireFrame` · `frame-tick` |

### Home (`/`)
| Brief section | Donor | Piece |
| ------------- | ----- | ----- |
| 1. Hero — hat on rotating globe | Portfolio | `LiquidWordmark` / `DitheringShader` for the media slot |
| 1. Three mission lines | Portfolio | `DecodeText` / `ScrollRevealText` |
| 2. Brand marquee | Portfolio | `BrandQuilt` |
| 3. About intro (two column) | Portfolio | `AboutSection` |
| 4. Postcard showcase (rotated, overlapped) | Portfolio | `WorkFeature` restyled; `postcard` schema exists |
| 5. What we do (3 col) | Portfolio | `ServiceList` |
| 6. What we showcase (6-item grid) | Portfolio | `FieldShowcase` |
| 7. Upcoming events (3 cards) | Portfolio | `IndexRow` |
| 8. Past events (4 tiles) | Portfolio | `WorkFeature` |
| **9. Recent articles (featured + 3)** | **shoplift** | **the `#research` preview block — §3b** |
| 10. CTA band | Portfolio + CRM | `SpectrumButton` |
| Page character | Portfolio | `BootSequence` · `TelemetryBar` · `LaunchReadout` |

### Become a Partner (`/partnerships`)
| Brief section | Donor | Piece |
| ------------- | ----- | ----- |
| 1. Header + contact form | Portfolio | form styling on CRM tokens |
| 2. Brands we've worked with | Portfolio | `BrandQuilt` |
| 3. Gallery | Portfolio | `FieldShowcase` |
| 4. Areas of focus (6-item) | Portfolio | `FieldShowcase` — same grid as Home §6 |
| 5. What we do | Portfolio | `ServiceList` |
| 6. What to expect (4-step timeline) | Portfolio | `IndexRow` numbered |
| 7. Partnership tiers (3 cards) | Portfolio + CRM | `WorkFeature` + `crm-chip` |
| 8. Press row + contact | Portfolio | `MediaAppearances` |
| 9. Membership | Portfolio | `HelpSection` |
| 10. FAQ accordion | Portfolio | `FAQSection` |

### About (`/about`)
| Brief section | Donor | Piece |
| ------------- | ----- | ----- |
| 1. Story header | Portfolio | `AboutSection` |
| 2. Why we do it (2 col + inset) | Portfolio | `FounderSection` |
| 3. **By the numbers (4 metrics)** | Portfolio | **`ImpactCounters`** — exact fit |
| 4/5/6. Team · Board · Advisors grids | **CRM** | `person-mark.tsx` + `palette.ts` |

### Newsroom (`/newsroom`)
| Brief section | Donor | Piece |
| ------------- | ----- | ----- |
| 1. Header + search | shoplift | `section-head` + `section-title` |
| 2. Trending (3 cards) | shoplift | `research-item` |
| 3. Featured article | shoplift | `research-feature` + `feat-thumb` |
| 4. Topic filter pills | shoplift + CRM | `topics-grid` styled as `crm-chip` |
| 5. Archive grid (paginated) | shoplift | `research-grid` + `year-divider` |
| 6. Newsletter signup | Portfolio | form styling on CRM tokens |

### Events index (`/events`) — new page
| Brief section | Donor | Piece |
| ------------- | ----- | ----- |
| 1. Header + list/calendar toggle | Portfolio | `MonoLabel` toggle on CRM tokens |
| 2. Calendar month grid | — | **Build new.** No donor has one |
| 3. Upcoming list (date block + CTA) | Portfolio | `IndexRow` |
| 4. Past events archive by year | Portfolio + shoplift | `WorkFeature` grid + `year-divider` |

### Event detail (`/events/[slug]`) — new page
| Brief section | Donor | Piece |
| ------------- | ----- | ----- |
| 1. Event hero | Portfolio | `Hero` + `GrainHeading` |
| 2. Overview (2 col + key details) | Portfolio | `AboutSection` + `MonoLabel` detail rows |
| 3. Schedule, day tabs + session rows | Portfolio | `IndexRow`; tabs built new |
| 4. Panels and speakers grid | **CRM** | `person-mark.tsx` |
| 5. Tiered sponsors | Portfolio | `BrandQuilt` grouped by tier |
| 6. Gallery | Portfolio | `FieldShowcase` |
| 7. Related events | Portfolio | `WorkFeature` |

### Article detail (`/newsroom/[slug]`)
| Brief section | Donor | Piece |
| ------------- | ----- | ----- |
| 1. Header — tag, headline, standfirst, byline | shoplift | article page typography + `crm-chip` tag |
| 2. Body, pull quotes, inline images | shoplift | `dropcap` + editorial type on CRM tokens |
| 3. Author card + share row | **CRM** | `person-mark.tsx` |
| 4. Related articles (3) | shoplift | `research-item` |

### Privacy / Terms — new pages
Plain editorial type on CRM tokens. No donor component needed.

### Needs building from scratch
1. **Calendar month grid** (Events index) — no donor has one.
2. **Schedule day tabs** (Event detail) — row content comes from `IndexRow`.
3. **Newsroom search** — approach undecided.
4. **Cowboy-hat-on-globe hero media.** `LiquidWordmark` / `DitheringShader`
   supply the WebGL layer, but the hat-and-globe object itself is new.

---

## Gotchas

1. **A ported component keeping its donor's colors is unfinished.** Ember orange,
   acid green, Archivo, Anton, Saira, Space Mono — all are tells. Grep for them
   before calling a port done.

2. **iCloud is evicting the Desktop folders.** `git status` in `shoplift-vercel`
   timed out at 2 minutes; component reads timed out twice before a forced
   `brctl download`. Same "Optimize Mac Storage" problem that cost a session on
   the CRM. Move the shoplift folders to `~/clients` before extraction work.

3. **The home directory is itself a git repo containing credentials.** Copy out
   of donors read-only. Never run git or a deploy from `~`.

4. **`shoplift.media` the domain is parked**, not serving its Vercel build —
   GoDaddy nameservers, AWS parking IPs, a 114-byte stub redirecting to
   `/lander`. Project `shoplift-vercel` (team `wills-customs`) holds the domain
   and has a READY production deploy, but DNS was never pointed at it. Unrelated
   to this rebuild; noted so it isn't rediscovered.

---

## Related

- `information-architecture.md` — pages → sections → CMS, the checklist this follows
- `build-plan.md` — phase plan; this inventory serves Phase 2 (import)
- `architecture.md` — Astro + Sanity rationale
- `~/clients/will-herrmann-portfolio/guidelines/` — portfolio design-system cards

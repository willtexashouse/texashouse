# Render log

One entry per approved file in `public/brand/`: filename, tier, register, the Block 4 story used, tool, sref, date.

## public/brand/landscape-land-bluebonnets-21x9-v1.png
- Date: 2026-09-04 · Made in Higgsfield, taken in by hand · Aspect: 21:9
- Tier: landscape · Register: land
- Source: /tmp/claude-0/-home-user-texashouse/139d78b4-300c-50b6-a3e7-723a483f2eaa/scratchpad/bb/concept-paper.png
- Prompt: Rolling Texas Hill Country, dense bluebonnets in the foreground running in loose rows toward a dirt two-track, live oaks on the ridge, small town and water tower in far distance under haze. Towering cumulus clouds catching pink and amber. Land register: amber light, cobalt flowers, sage oaks, cream clouds, muted purple shadow. [Higgsfield MCP, nano_banana_pro 2k, test render 1 of 8]

## public/brand/landscape-land-bluebonnets-dusk-21x9-v1.png
- Date: 2026-09-04 · Made in Higgsfield, taken in by hand · Aspect: 21:9
- Tier: landscape · Register: land
- Source: /tmp/claude-0/-home-user-texashouse/139d78b4-300c-50b6-a3e7-723a483f2eaa/scratchpad/bb/concept-dusk.png
- Prompt: Footer base concept. Rolling Texas Hill Country just after sundown on a flat gun metal #181210 ground: dense bluebonnets in loose rows, a ridge of live oak silhouettes behind, distant hills fading into the dark. Bluebonnet blue #3d4a76 to cobalt silhouettes with cream tips, last amber rim light from the left. [Higgsfield MCP, nano_banana_pro 2k; reference for the four footer parallax plates]

## public/brand/bluebonnets/{far,mid,near,front}.png — footer parallax plates
- Date: 2026-09-04 · Made in Higgsfield (nano_banana_pro 2k, 21:9), cut by hand · Aspect: bottom 55% of 21:9, 1600×373 PNG-8 with alpha
- Tier: landscape · Register: land (dusk) · Reference: landscape-land-bluebonnets-dusk-21x9-v1.png attached to every plate
- Prompts (block 4 only; blocks 1, 2, 5 as in the reference): far = "only the far ridge: rolling hills, live oak silhouettes in dark sage and charcoal, thin dusty blue haze, faint amber rim light from the left, bottom 35%" · mid = "only a band of small distant bluebonnets in loose rows, #3d4a76 with cream tips, bottom 30%" · near = "only medium bluebonnet clusters, #4b5a8f with cream tips and amber rim, bottom 40%, open gaps" · front = "only about eleven large stalks of varied height and lean, uneven spacing, #5a6ba3 with cream tips, blooms in the bottom third". Every plate: everything else flat #181210.
- Processing: knocked out with the scratch flood-fill tool (edge-connected #181210 to alpha, components under 300 px dropped), cropped to the bottom 55%, resized with sharp. The ground is the page's gun metal, so any residual dark is invisible on the site.
- Placement: SiteFooter horizon band (360px), BluebonnetField.astro, scroll-driven parallax and wind sway (VISUAL_LANGUAGE.md §5.4 option 1). Three plates ship: far, mid, front. near.png is cut and kept but not mounted; with it in, the stack was a wall of flowers and the ridge disappeared. The far plate was cut at a tighter ground tolerance (9) so the charcoal oak bodies survived the knockout.

## public/brand/emblem-brand-hero-globe-1x1-v1.png
- Date: 2026-09-04 · Made in Higgsfield, taken in by hand · Aspect: 1:1
- Tier: emblem · Register: brand
- Source: /tmp/claude-0/-home-user-texashouse/139d78b4-300c-50b6-a3e7-723a483f2eaa/scratchpad/globe6/t1.png
- Prompt: APPROVED 2026-09-04 (Will): the hero globe and the style direction for every symbol and element from here on. Clay #793f34 felt Stetson, ivory #faf6f0 single-weight outline, bluebonnet-blue ocean, ivory continents, Texas filled clay at true scale meeting the Gulf directly, halftone and paper grain, on gun metal #181210.
- Chain: Texas Rangers 1972 hat-on-baseball mark supplied by Will as the hat-shape reference → Higgsfield (nano_banana_pro 2k, 1:1) redraw with lettering removed and the baseball replaced by the globe → single-ink pick (r2) → brand-palette pass with the globe on gun metal (b1: clay hat, bluebonnet ocean) → Gulf correction so the clay meets the water with no ivory sliver → Texas rescaled to true proportion (t1). Every step used the previous approved render as the attached reference.
- Trademark note: the hat is still a near-trace of the Rangers' 1972 mark. Before this ships on anything public, the vector redraw should move the crown, crease, and brim line enough to be our own hat. Tracked in VISUAL_LANGUAGE.md §5.1.
- Style lock: this render is the reference attached to every future symbol or element render. See VISUAL_LANGUAGE.md §3, Block 3 "Emblem tier", and brand/prompts/brand-lock.txt.

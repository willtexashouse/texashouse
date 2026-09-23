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

## public/brand/emblem-brand-footer-globes-16x9-v1.png
- Date: 2026-09-04 · Made in Higgsfield, taken in by hand · Aspect: 16:9
- Tier: emblem · Register: brand
- Source: /tmp/claude-0/-home-user-texashouse/139d78b4-300c-50b6-a3e7-723a483f2eaa/scratchpad/twin/g2.png
- Prompt: APPROVED 2026-09-04 (Will): footer globe pair. Two globes side by side drawn exactly like the approved hero globe (attached as the reference) with no hat and no clay accent: bluebonnet-blue ocean, flat ivory continents, single ivory outline, halftone and grain, on gun metal. Left: the Americas, North America forward. Right: Europe, Africa, western Asia. Served on the site as public/brand/footer-globes.webp/png, cut to alpha from this render.

## public/brand/footer-globes-spin/000–035.webp — footer globe spin (scroll-scrubbed)
- Date: 2026-09-04 · Made in Higgsfield: image-to-video, FLUX 3 Video, 5 s, 1080p, 2:1, no audio · 36 frames at 720×333, WebP with alpha, ~1.5 MB total
- Start frame: the approved footer pair (emblem-brand-footer-globes-16x9-v1.png). End frame: the same render with the two globes' positions swapped, built by cutting the render in half and exchanging the halves, uploaded as the end image.
- Prompt: "Two flat illustrated globes side by side each rotate exactly one half turn about their own vertical axis, both turning the same direction, west to east, at one steady speed, so the left globe ends showing Europe and Africa and the right globe ends showing the Americas. Static camera, no zoom, no pan, no drift; the globes stay the same size in the same positions. The drawing stays exactly a flat print: one even ivory outline, flat ivory continents, flat bluebonnet-blue ocean, halftone dots and paper grain, on a flat dark charcoal ground. No lighting change, no shading, no shadows, no motion blur, no added objects, no text."
- Also tried: MiniMax H3 Max, same inputs. It turned the globes but panned the pair sideways through the shot; rejected.
- Processing: frames sampled evenly from the clip, ground keyed to alpha by colour distance, then each globe located per frame, scaled to one fixed diameter, and pinned to a fixed centre, because the FLUX clip let the pair drift outward. Frame 000 is also the static poster (footer-globes.webp/png).
- Placement: GlobeSpin.astro in the footer. Scroll position drives the frame index; reduced motion shows the poster. The hero globe gets the same treatment next.

## Globe walk reel — Phase 1 character sheet (four stills, awaiting Will's pick)
- Date: 2026-09-20 · Made in Higgsfield via Composio (account "Strategy + Will"), nano_banana_pro 2k · Turnarounds 16:9 (2752×1536), whistle poses 4:5 (1856×2304)
- Tier: emblem · Register: brand · Reference: the approved hero globe (job 23ae7281-a66e-4734-b8cb-4bc90db2b47a) attached to all four
- Jobs: 1 no eyes, turnaround 2f1ab5be-fc49-4f12-a9fb-b30223decc60 · 2 no eyes, whistle ae30b31f-57b2-42c1-a30b-c8be6b7a19e7 · 3 eyes, turnaround 86550945-8c62-47ba-bfd5-cfca3d5f3b82 · 4 eyes, whistle 990599cf-efab-476c-8786-5e6c2c698939
- Prompt: Brand Lock opening (brand/prompts/brand-lock.txt, "no cartoon" swapped for "no modern cartoon gloss"), then: the reference globe with its hat as a 1928-style rubber-hose walker; hat mirrored so the brim dips forward to the right; globe is head and body, no neck; thin hose legs in the ocean blue ending in clay cowboy boots with a stacked heel and ivory outline; hose arms in the same blue with white four-fingered gloves. Turnaround: front, three-quarter right, profile right, standing. Whistle: profile right, mid-stride, back arm swinging, front glove raised by the Gulf, three flat ivory notes ahead. Eyes variant: two small ivory pie-cut eyes on the Pacific west of North America, no mouth.
- Read: palette, outline, boots, limbs, gloves all held on every sheet. Sheet 3 added a mouth and put the front-view eyes over the western US; sheet 4 put the eyes and a pucker east of Texas, over the Atlantic side, not the Pacific. Sheets 1 and 2 are exactly to spec.
- Files: not yet in public/brand; scratchpad reel/p1/. The pick gets filed with intake once Will chooses.

## public/brand/emblem-brand-globe-walker-4x5-v1.png
- Date: 2026-09-20 · Made in Higgsfield, taken in by hand · Aspect: 4:5
- Tier: emblem · Register: brand
- Source: /tmp/claude-0/-home-user-texashouse/139d78b4-300c-50b6-a3e7-723a483f2eaa/scratchpad/reel/p1/4-eyes-whistle.png
- Prompt: APPROVED 2026-09-20 (Will): the globe walker character for the reel. Hero globe as a 1928-style rubber-hose walker: hat brim leading right, two ivory pie-cut eyes and a puckered whistle on the east side of the face beside the Atlantic, blue hose limbs, white four-fingered gloves, clay cowboy boots, three flat ivory notes ahead. Higgsfield via Composio (Strategy + Will), nano_banana_pro 2k, job 990599cf-efab-476c-8786-5e6c2c698939, reference = approved hero globe.

## public/brand/emblem-brand-globe-walker-4x5-v1.png
- Date: 2026-09-20 · Made in Higgsfield via Composio ("Strategy + Will"), nano_banana_pro 2k · Aspect: 4:5
- Tier: emblem · Register: brand · Job 990599cf-efab-476c-8786-5e6c2c698939 · Reference: approved hero globe
- APPROVED 2026-09-20 (Will): "He is perfect." The globe walker character for the reel and any future character use. Eyes are in: two ivory pie-cut eyes and a puckered whistle on the east side of the face beside the Atlantic, Texas uncovered. Hat brim leads right, blue hose limbs, white four-fingered gloves, clay boots, three flat ivory notes.
- This render is the reference attached to every later character sheet, keyframe and clip.

## brand/reels/globe-walker/ — model sheets (five stills, one batch)
- Date: 2026-09-20 · Higgsfield via Composio ("Strategy + Will"), nano_banana_pro 2k · Reference: the approved walker (job 990599cf) on all five
- Shared opening: "Draw exactly the reference character and nothing else: the same character with the same proportions every time" + the walker's feature list + Brand Lock palette and no-text/no-labels/no-arrows.
- sheet-turnaround-5view-16x9-v1.png · job 4fe6ea06-4f5b-4e10-99c6-7258858250f9 · front, ¾ front right, profile right, ¾ back right, back, one baseline. Clean; face and map turn with the body.
- sheet-rotation-21x9-v1.png · job b2443bb2-e4d8-4697-a021-6beaaa229084 · asked for eight 45° steps, got six; map rotation reads (Americas → Europe/Africa → Asia → Australia → back to front) but the last figure carries the face on the wrong side.
- sheet-walk-cycle-21x9-v1.png · job 9d38a5c1-17ba-4b81-b658-bcd3db6259c9 · contact, down, passing, up, contact, down in profile on one baseline. The "up" pose came out a full size larger, not a slight stretch; usable as a pose guide, not as a frame.
- sheet-actions-16x9-v1.png · job d94d9503-8445-423c-a3de-c3ae1d774507 · hat tip with notes, wave, hands on hips, jump with the hat floating. Clean.
- keyframe-k2-center-9x16-v1.png · job cb28dd74-0f09-4864-bd03-73a1270f28e3 · the walker in the approved pose, centered, ivory horizon line at the boots. This is Phase 2's K2 as rendered, and the template for K1 and K3.

## brand/reels/globe-walker/sheet-expressions-*.png — positive expressions (three stills, one batch)
- Date: 2026-09-20 · Higgsfield via Composio ("Strategy + Will"), nano_banana_pro 2k, 16:9 · Reference: the approved walker (job 990599cf) · Brief from Will: more expressions, positive only
- faces-a · job 65cbac0b-0d63-436c-8fc8-6ad7d61dfc08 · warm smile, big laugh, wink, delighted O, eyes-closed content, proud smirk. Clean; all six on-model, Texas uncovered.
- faces-b · job b15a3243-2683-4154-a63d-81a5b7da699c · tongue-out grin, sparkle-eyed excitement, easy howdy smile, sly half-lidded grin, singing with notes, soft chuckle. Clean; the sparkle eyes and blush dots on the second face are the one addition outside the token vocabulary.
- fullbody · job d0ffb8a4-5460-4a8d-90fc-d574a363be56 · belly laugh, thumbs-up wink, hands clasped, arms open in welcome. Clean.
- All faces sit east of Texas on the Atlantic side, as on the approved render. Mouths are one ink line, eyes ivory pie-cuts, tongue in clay.

## brand/reels/globe-walker/sheet-expressions-fullbody-{2,3}-16x9-v1.png — expressions, second pass
- Date: 2026-09-20 · Higgsfield via Composio ("Strategy + Will"), nano_banana_pro 2k, 16:9
- Why: Will rejected the two head-only grids (faces-a, faces-b, now removed): with the globe cropped to a head the model redrew the continents and moved Texas on every panel. The full-body sheet held the map, so the twelve expressions were rerun as full-body figures with two references, the approved walker (job 990599cf) and the working full-body sheet (job d0ffb8a4), and the prompt stating the globe is a fixed object with Texas in the same place and size on every figure.
- fullbody-2 · job e040e272-8a24-4d15-9ddc-b779d58b3260 · warm smile, big laugh with glove on belly, wink pointing, delighted O with gloves up. On model.
- fullbody-3 · job 84151c42-d89a-4fb4-8392-e54f75485be1 · eyes-closed content, proud smirk hands on hips, tongue-out wave, cheer. On model. (First attempt, job 864181a5, redrew the globe with an oversized Texas and a shrunken hat; discarded.)
- (discarded) job 39bbd54d-b101-47ea-a0de-b81ff7751656 · hat tip, sly grin arms folded, singing with notes, soft chuckle. Map held, but Will rejected it 2026-09-20: the legs came out longer than his. Not filed.
- Lesson for the plan: never render the character as a cropped head, and check limb length against the approved walker on every sheet. Keep the full figure at the working sheet's scale, attach the working sheet as a second reference, and say the map is fixed.

## brand/reels/globe-walker/globe-walk-v1.mp4 — the walk reel, first cut (15 s, 1080×1920, 24 fps, silent)
- Date: 2026-09-21 · Keyframes built locally; clips made in Higgsfield via Composio ("Strategy + Will"), FLUX 3 Video 1080p 9:16, audio off; cut with ffmpeg.
- Keyframes: Higgsfield would not move the character to the frame edges (two tries, jobs b10f8c20 and 4788aefc, both returned the centered frame), so K1/K2/K3 were built from the approved 9:16 frame: walker knocked out to alpha (keyframes/build-keyframes.js), scaled to 42% of frame height, placed 24 px inside the left edge, centered, and 24 px inside the right edge on gun metal with the ivory horizon line at y=1545. Files in keyframes/, imported to Higgsfield from their raw GitHub URLs.
- Clips (cut/): clipA K1→K2 5 s job cc11dec0-6727-47a8-a377-618916c3780a · clipB K2→K3 5 s job 337c8efe-073b-403a-a759-40ed9a68b183 · clipC K1→K3 10 s variant job 8aa12107-a1d0-483e-881a-9db8f34129f5. Prompt: the Phase 3 walk prompt from globe-walk-plan.md. All three hold the character; A grows a fourth note mid-clip.
- Cut (cut/cut.sh): 0–1 s K1 still with the cursive wordmark top-left · 1–6 clipA · 6–11 clipB (the join is invisible because both share K2) · 11–13 slide-off, the cut walker overlaid on the ground and pushed off right with a bob · 13–15 end card: monogram, "Where Texas meets the world.", "Austin · October 2026", texashouse.org. Wordmark stays through 13 s. Cards rendered with sharp from the brand fonts (cut/cards.js, cut/fonts.conf).
- Open: no audio yet (whistle + footstep clicks per the plan); the horizon line sits in the Reels bottom UI band, may need to rise; "Austin · October 2026" and the URL are placeholders for the real show name, date and ticket link.

## brand/reels/globe-walker/loop/ — the walk loop (stationary, 5 s, 1080×1920 MP4 + 540px GIF)
- Date: 2026-09-21 · Brief from Will: keep it simple, he walks in place at center, whistling, notes animated; no ground, no logo, no end card.
- Start and end frame: keyframes/loop-center-1080x1920.png, the cut walker at 52% frame height on plain gun metal, imported to Higgsfield as media 80070c34-a9d9-4ac1-aac2-17b6f242cbab and used as both start_image and end_image so the clip loops.
- Clips: FLUX 3 Video, 5 s, 1080p, 9:16, audio off. A (steady treadmill walk) job c32ef441-8590-470f-ae16-3d80e1fa47c7, first submission 4f528c07 failed server-side. B (peppier, squash and stretch, a note per step) job 995fc1ed-329d-41ac-a1a0-e63401553e07. The "IN THE DARK" preset was recommended once and declined.
- Both clips drew a thin ivory floor line under the boots despite "no floor line", with a dark compression halo either side of it. First removal pass left the halo and Will saw the line. Final pass (loop/deline.js): flood-fill the character from its coloured pixels through every non-ground pixel, with no sideways steps inside the line's rows, so the fill reaches the boot soles from above but cannot run along the line; every non-ground pixel in rows 1440–1456 the fill did not reach is line or halo and is replaced by clean ground copied from just below the band. Verified at full size and at GIF size: no line, boot outlines intact. Then re-encoded: MP4 24 fps CRF 18; GIF 12 fps, 540 px, 64 colours, Bayer dither.
- v1 = clip A, v2 = clip B. Raw clips kept as raw-loopA/B.mp4.

## brand/reels/globe-walker/loop/globe-walk-loop-v3.{mp4,gif} — loop B with blinks and a working whistle
- Date: 2026-09-21 · Will's notes on v2: boot outlines breaking, and the face needs to move (clear whistle, one or two blinks).
- Clip C: FLUX 3 Video, same start/end frame (media 80070c34), job 0c5cc8b8-9123-44af-af09-26e362e1edce. Prompt = loop B's plus: "the puckered mouth pulses as he whistles, the small O opening a little and closing a little on every note, and he blinks twice, both eyes closing fully for a few frames"; "the cowboy boots stay fully drawn with their complete ivory outline on every frame"; "no floor, no ground line, no horizon, no shadow under the boots, nothing at all beneath him".
- Result: two full blinks, the pucker holds and pulses, boots complete on every raw frame. The floor line came back anyway (rows 1446–1449); removed with loop/deline.js (flood-fill version), checked at full size and GIF size: no line, soles intact. The broken boots in v2 were my earlier line-removal passes, not the render.
- Credits: the "Strategy + Will" Higgsfield account ran out of credits (Plus monthly) right after this job; a Kling 3.0 Turbo fallback could not be submitted. Nothing was run on the pollen.media account.

## Account move, 2026-09-21
- "Strategy + Will" (Composio account higgsfield_mcp_weaver-vila) is out of credits. Work continues on "pollen.media" (higgsfield_mcp_necker-exult). Renders and job ids do not cross workspaces; the source files live in the repo and are imported by raw GitHub URL.
- Imported on pollen.media: loop start frame keyframes/loop-center-1080x1920.png → media 951c0fe9-7800-447e-b409-1aff138c67d1; approved walker public/brand/emblem-brand-globe-walker-4x5-v1.png → media 94cc5191-67f2-4e9d-98b5-512c445c493b.

## brand/reels/globe-walker/loop/globe-walk-loop-v4.{mp4,gif} — steady tempo, boots whole (Kling)
- Date: 2026-09-21 · Will's notes on v3: boots still breaking, pace not consistent. Cause: forcing start frame = end frame in 5 s makes the model speed up and slow down to land, and mid-stride FLUX merges the two boots.
- Fix: 10 s clips with a free ending on pollen.media (start frame media 951c0fe9), prompt centred on a metronome-steady stride and two separate boots that never merge. FLUX 3 Video (job c04eada1-016f-493f-8872-2262a5cb3d2c) pushed the camera in and grew the character; rejected. Kling 3.0 Turbo 1080p (job de19b77b-9296-42a4-b0c6-d432cc4e0138) held size, position and tempo, boots whole, blinks and pucker present.
- Kling took "like a treadmill" literally and drew one under him. Removed with loop/detread.js (the flood-fill line remover with the treadmill's dim neutral colour marked as never-character), verified under the boots.
- Loop cut with loop/findloop.js: stride period is 40 frames; the two-stride segment with the most seamless join is frames 111–191 (81 frames, 3.4 s), which includes a blink. MP4 24 fps; GIF 12 fps, 540 px.
- Lesson: never say "treadmill" to a video model; say "walks on the spot".

## brand/reels/globe-walker/loop/globe-walk-loop-v5.{mp4,gif} — line gone, blue-lid blink, whistling mouth, continuous notes
- Date: 2026-09-21 · Will's notes on v4: a dark line still at bottom right (the treadmill's edge remnant), notes flicker, more fluidity, eyelids must be the ocean blue not white, lips must move like whistling.
- Source: Kling 3.0 Turbo 1080p, 10 s, on pollen.media, start frame media 951c0fe9, job 741bd770-82c9-42cd-9bcd-6ca8690b8f45 (a second take, job 16c5ae8e, closed the eyes at second two and never reopened them; the first pair, jobs d875f0ff and 6958caaa, did the same). Prompt asked for eased continuous motion, a mouth that moves between a tight O and a rounder O, notes born one at a time that glide and fade, and eyes open except timed blinks with bluebonnet lids. Kling delivered the walk, mouth and notes but every take closes the eyes once and leaves them shut.
- Loop: frames 57–137 of the source (81 frames, 3.4 s), inside the open-eyed stretch, chosen by loop/findloop3.js. Floor line removed with loop/deline.js, then rows 1443–1452 cleared of anything brighter than ground (line remnants under the soles).
- Blink: painted in post with loop/blink2.js at loop frames 28–34. Each eye is a dark ink oval with an ivory crescent; the script finds the crescent, grows the oval from it, and fills the oval from the top down with the ocean blue sampled between the eyes (0.35, 0.7, 1, 1, 1, 0.7, 0.35 of the height), with a 3 px ink lid line. Verified at 3× and at GIF size.
- Known: mid-stride the boots pass each other with a little softness in Kling's render; outlines stay complete. GIF is 24 fps, 540 px.

## Root cause of the floor line (2026-09-21) and the restart
- Every walk take since v2 carried a floor line, on every model, however the prompt forbade it. Cause found on Will's restart: the start frame fed to the models, keyframes/loop-center-1080x1920.png, was cut from the K2 keyframe render, which had the ivory horizon line, and the cut kept a 569 px stub of that line under the boots. The models were faithfully continuing what they were given. My line-removal passes were treating a symptom I had introduced.
- Restart: keyframes/start-clean-1080x1920.png is cut from the approved still public/brand/emblem-brand-globe-walker-4x5-v1.png (which has no line), placed at 52% frame height on plain gun metal. Verified: no ivory run below the globe longer than a boot sole. Imported on pollen.media as media 89d0a001-2c9b-4498-8927-97467ed07096.
- Model test on the old (stubbed) frame, same prompt, 8 s: Kling (job 8a897639) kept the stub for frames 8–43 and closed the eyes for good after one second; FLUX (job f897947b) pushed in and grew him; MiniMax H3 (job c72d7686) kept his size and place, eyes open, boots whole, notes ≤ 3, and dropped the stub after frame 1. MiniMax is the lead model for the character from here.
- Rule: never feed a video model a frame that contains anything you do not want animated. Build start frames from the approved still only.

## brand/reels/globe-walker/loop/globe-walk-loop-v6.{mp4,gif} — the clean restart (3 s loop, 1080×1920, 24 fps)
- Date: 2026-09-21 · Will's restart: begin from the approved still, no line, no more than three notes, lips purse, eyes blink, arms swing.
- Start frame: keyframes/start-clean-1080x1920.png, cut from the approved still, no line (media 89d0a001 on pollen.media).
- Takes from it, 8 s, same prompt ("floating in a solid dark void… no floor, no ground, no surface, no line, no shadow, no horizon… never more than three notes visible at once… blinks twice with eyelids the same blue as the ocean, eyes wide open otherwise"): Kling 3.0 Turbo (job 02acf637-2d01-4a28-abae-b67346365429) drew no line on any frame but let the eyes droop half-closed after a second; MiniMax H3 2K (job 94275512-be18-4814-b835-3c4bec10fb90) drew no line on any of 192 frames (loop/linecheck.js), kept him the same size and place, eyes open with two real blinks with blue lids, lips pursing, arms swinging, boots whole, at most three notes.
- Loop: MiniMax frames 48–119 (72 frames, stride period 36 frames, seam score 2.6, the best of any take), scaled from 1440×2560 to 1080×1920. No other processing: no line removal, no painted blink, nothing touched. Both blinks fall inside the loop.
- Lead model for the character: MiniMax H3.

## brand/reels/globe-walker/f1/ — race car storyboard (five stills)
- Date: 2026-09-21 · Higgsfield via Composio (pollen.media), nano_banana_pro 2k · References: the approved walker (media 94cc5191) on every frame; the car design sheet (job 60d4d18f) on every frame with the car
- car-design-sheet-16x9-v1.png · job 60d4d18f-c43f-4f5c-b385-259cf6f34daa · 1920s-cartoon open-wheel single-seater under the Brand Lock, no livery, no logos: left = ivory body with clay nose and wings (the pick, used in every board), right = clay body with ivory nose and wings. Halo hoop, fat gun metal tires, ivory hubs.
- board-1-beside · job 33b09e3c-bad3-4e6c-abd0-45d306786430 · he stands behind the parked car, glove on the halo, delighted, two notes. (First try, job d950ba58, shrank the car to a toy; discarded.)
- board-2-hop · job 968c9a02-486f-40de-8cf9-0676d6de9578 · mid-hop above the cockpit, hat floating, arms wide, grin, three motion arcs. Note: Texas is missing from the globe on this frame; fix before it is used as a video start frame. (First try, job f2ce0f90, went grey ground and a roadster; discarded.)
- board-3-seated · job d16f1129-0f81-45ee-8ba0-5942e84377b9 · in the cockpit, gloves on the wheel, whistling. (First try, job 096a07a9, went grey ground and a roadster; discarded.)
- board-4-driveoff · job 61e26726-afbf-4eb9-a585-2086cf7e5fbd · speeding right, front wheels lifting, one glove holding the hat, speed lines and a puff. (First try, job 3ff9fa9d, turned the globe away from Texas and drew a roadster; discarded.)
- Lesson: without the car sheet as a second reference the model draws a 1950s roadster and drifts the ground to grey. Attach the sheet on every car frame and say "the LEFT car exactly".

## brand/campaigns/cota-anime/driver/driver-portrait-3x2-v{1..4}.png — the Driver, first portrait (COTA anime campaign)
- Date: 2026-09-23 · Campaign style, not the house style (see brand/campaigns/cota-anime/README.md and HANDOFF.md). Higgsfield via Composio on pollen.media (Strategy + Will refused: out of credits), nano_banana_pro 2k, 3:2, prompt 7A from the handoff verbatim, four runs of the same prompt.
- Style reference: ref-01 (the film's sunset driver still), uploaded by presigned PUT from the git-ignored inbox, media 1d2bce8d-146b-47f6-8d72-534340ec395c; role image_references. The still itself is not in the repo and never ships.
- Jobs: v1 a87bf680-6dbf-4737-b046-77f079939204 · v2 8a6df5c8-47f2-468a-8546-1b79e7cd918a · v3 bd8bf6e6-6fa5-4a78-a6da-33f9db9f2e4c · v4 0e8671b1-2e0c-4329-a9fe-bfdb49601cb4
- Read: all four hold the spec (blonde waves, aviators up in the hair, Lone Star pendant, fingerless gloves, oxblood jacket over white, dashboard POV, Hill Country, warm hard-edged shadows) and none carries the film driver's signature combination. Line and hatching are right; the camera layer (bloom, aberration, vignette) is present but light. v2 has the sharpest hatching and the most drawn hands; v3 the liveliest face with teeth drawn individually; v1 and v4 lean toward a stock pretty face, the risk the handoff flagged for the word "beautiful".
- Sponsor logos: none generated, per the brief.

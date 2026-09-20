# Globe walk reel — production plan

15-second Instagram Reel, 9:16. The Texas House globe, hat on, walks in from
the left whistling, crosses the frame, and walks out right. Drawn the way the
1928 rubber-hose shorts were drawn, which is public domain: pie-cut eyes,
rubber-hose limbs, white four-fingered gloves, bounce on every step, a
whistle as the only sound. No named characters, no studio names in any
prompt. Our globe is the character.

Working through Higgsfield via Composio, account "Strategy + Will".

## Base asset
`public/brand/emblem-brand-hero-globe-1x1-v1.png`, the approved hero globe.
Everything below attaches it as the reference so the character stays ours.

## Phase 1 — Character sheet (stills, ~4 credits)
Turn the emblem into a character before anything moves. One batch:
1. **Hat mirrored.** The hat currently tilts down to the right. Flip it so the
   brim leads to the right, the direction of travel; a walker's hat tips
   forward into the walk.
2. **Body added.** Rubber-hose legs and arms out of the sphere at the equator.
   Legs: thin black hose, oversized ivory shoes. Arms: thin black hose, white
   four-fingered gloves. No neck, no face on the globe: Texas stays the face.
3. **Turnaround.** The same character front, three-quarter right, profile
   right. Profile is the walk view.
4. **Whistle pose.** Profile right, one arm swinging, one glove raised, small
   ivory music notes as flat shapes ahead of the "mouth" line at the Gulf.

Palette stays locked: clay hat, ivory outline, bluebonnet ocean, ivory
continents, clay Texas, gun metal ground. Grain and halftone on.

Pick one sheet. That pick is the reference for Phase 2.

## Phase 2 — Keyframes (stills, 3 credits)
Three 9:16 frames, same character, same camera, gun metal ground with the
footer horizon line drawn once in ivory at the bottom third:
- **K1** Character just inside the left edge, mid-stride, facing right.
- **K2** Character dead center, opposite foot forward, notes ahead of it.
- **K3** Character just inside the right edge, mid-stride, same as K1's pose.

Matching K1 and K3 poses is what lets the walk loop cleanly.

## Phase 3 — Motion (video, 2 to 3 credits)
- **Model:** FLUX 3 Video, which held composition on the footer spin, with
  start and end frames locked. Fallback: Kling 3.0 for stronger walk cycles.
- **Clip A** K1 to K2, 5s. **Clip B** K2 to K3, 5s. Same prompt on both.
- **Prompt core:** "flat 1928-style rubber-hose walk cycle, bounce on every
  step, arms swinging opposite the legs, hat bobbing, the sphere does not
  rotate, static camera, no zoom, flat print look, one ivory outline, no
  shading, no lighting change."
- Render 9:16 at 1080p, no audio.

## Phase 4 — Cut (ffmpeg, no credits)
| Time | Content |
|---|---|
| 0.0–1.0 | Gun metal, horizon line, cursive wordmark fades in top-left |
| 1.0–6.0 | Clip A |
| 6.0–11.0 | Clip B |
| 11.0–13.0 | Walk-out: last 40 frames of B held, character slides off right |
| 13.0–15.0 | Wordmark + "Where Texas meets the world." + handle |

Whistle: a 12-second whistled tune, generated separately or licensed, ducked
under a footstep click on each bounce. Captions off; the piece is silent-safe.

## Prompts to write before we spend
1. Character sheet prompt (Phase 1) — needs the hat flip stated first.
2. Keyframe prompt (Phase 2) — one prompt, three position lines.
3. Walk prompt (Phase 3) — above, plus start/end frame roles.

## Open decisions
- Does Texas stay clay, or does the "face" get pie-cut eyes on the sphere?
  Recommendation: no eyes. Texas is the face; it is what makes it ours.
- Hat: flip only, or also add the brim bounce in the walk? Both in Phase 3.
- Whistle source: generate, or a licensed public-domain tune.

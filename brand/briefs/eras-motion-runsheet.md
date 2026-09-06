# Eras motion runsheet — Same Land, homepage cut

Self-contained generation document. Take this file plus the six eras frames
into any chat and generate; nothing else is required. Written 2026-09-06 from
the eras frames themselves (reviewed in session) and the Texas House visual
language. The eras set is law: these six frames, no new scenes, no new
frames, ever.

**Context in one line:** Texas House is the bridge between Texas and the
world; this sequence is the texashouse.org homepage hero — six illustrated
eras frames brought to life, ending on the House.

## How to generate

- **Tool:** Seedance 2.5 (Higgsfield). **Image-to-video, every time — never
  text-to-video.**
- **Per clip:** attach the era's frame as the **start image** AND as the
  style reference. No end image. The clip must return to (or near) its
  opening composition — transitions on the site are crossfades on matched
  horizons, and the About page scrubs these same clips with scroll.
- **Settings as tool parameters, never in the prompt:** `aspect_ratio`
  21:9, `resolution` 1080p, `bitrate_mode` high (no extra cost; protects the
  halftone from compression smear), `generate_audio` true, `duration` per
  clip below. Cost check (`get_cost`) before each run: 9 credits per second
  at 1080p as of 2026-09-06, so 63 for a 7s clip and 72 for the 8s House.
- **Camera locked off on every clip.** No drift, no push, no pan. The site
  crossfades on matched horizons and every clip must return to its opening
  composition; a moving camera cannot do either. Direction words in the
  prompts are screen-relative (screen-right means toward the right edge of
  the frame).
- **One clip at a time.** Judge clip 1 (Range) against the checklist before
  running the rest; carry any fix into the other five.
- **Negatives grow only from defects actually seen.** The block in each
  prompt is the standing brand negative; add to it only what a generation
  actually got wrong.
- **Expect some grain swim.** A fixed grain field is the hardest ask a video
  model gets; the generator and the codec both resynthesize grain per frame.
  If a clip passes every other check but the grain boils, the fallback is a
  light soften plus one static halftone overlay in post, decided with Will
  per clip.

## The frames (on disk 2026-09-06)

Midjourney originals, 1680×720 PNG, in `~/Downloads` and copied to
`brand/inbox/` under the eras names. Not yet the repaired `-fix` versions
the About handoff names; if those arrive, they replace these.

| Clip | Eras asset | Midjourney file id |
|---|---|---|
| 1 | `eras-01-open-range` | `2f317c96…_3` |
| 2 | `eras-02-gusher` | `d7c96934…_1` |
| 3 | `eras-03-raising` | `c6dc2356…_2` |
| 4 | `eras-07-boom` | `29f9839c…_0` |
| 5 | `eras-11-launch` | `685ac837…_1` |
| 6 | `eras-15-house` | `b376f951…_3` (the porch with the guitarist; `b0d8008e…_3` is the other variant, not used) |

## The medium lock (verbatim in every prompt — never reworded)

> The attached frame's own medium in motion: a scanned late-80s magazine
> illustration, gouache and airbrush, flat graphic shapes with clean
> silhouettes, heavy analog paper grain and coarse visible halftone over
> every area, sun-faded color, minor ink imperfections. The print itself is
> alive — the grain field stays fixed like a printed page while the scene
> moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a
> 3D render, NOT a different illustration style than the attached frame.

Followed in every prompt by the cadence line, also verbatim:

> Technical: real-time 24fps, smooth continuous motion, every frame drawn in
> the same hand as the last. No frame interpolation, no frame blending, no
> ghosting, no double-imaging, no warping.

## Review checklist — every clip, before approving

- Grain and halftone stable like a printed page (no swimming, boiling, or
  re-rendering per frame)
- Horizon has not moved; camera has not moved; nothing has entered the
  sky's upper half
- No drift toward photorealism or 3D smoothness anywhere in the clip
- Palette identical to the frame start to finish
- Final second sits on (or near) the opening composition
- All lateral motion runs left to right (exception: the Launch steam bank,
  painted streaming left — leave it)
- No text, no logos anywhere

---

## Clip 1 · Range · `eras-01-open-range` · 7s

```
1 continuous shot. Total 7 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: real-time 24fps, smooth continuous motion, every frame drawn in the same hand as the last. No frame interpolation, no frame blending, no ghosting, no double-imaging, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The horizon stays at its height for the entire duration, the sky's upper half stays open with nothing entering it, and the red mesa, the single live oak, the great cream cumulus bank and all four riders keep their places in the frame. The camera is locked off on a tripod for the entire duration; it never pans, never tilts, never pushes, never reframes.

FIRST FRAME: exactly the composition of the attached still, already alive — the riders mid-gallop, dust already streaming.

ACTION TIMING:
0.0–7.0s: the four riders hold full gallop moving screen-right toward the low sun, legs and dust cycling, hat brims pressed back in the wind of their own speed; torn-up dust streams behind each horse as flat shapes; the dark grass foreground lays over in one steady wind moving screen-right; the cumulus bank crawls almost imperceptibly; by the final second the riders sit back near their painted positions so the clip returns to the composition it opened on. Sound: massed hoofbeats on dry hardpan, wind over open grass, leather creak.

PHYSICS: real weight scaled to the illustration — dust obeys one wind direction with lag, hems and manes trail the motion, contact reads in the gallop cycle. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, quiet, continuous — hoofbeats, wind, leather. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no voices.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. Camera locked off. Horizon height constant. All motion screen-left to screen-right. Final second returns to the opening composition. No flicker, no boiling lines, no grain swimming, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands.
```

## Clip 2 · Gusher · `eras-02-gusher` · 7s

```
1 continuous shot. Total 7 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: real-time 24fps, smooth continuous motion, every frame drawn in the same hand as the last. No frame interpolation, no frame blending, no ghosting, no double-imaging, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The wooden derrick stays exactly where it stands, the horizon stays at its height, the rose-to-cream dawn sky stays open, the crew, tents and wagons keep their places. The camera is locked off on a tripod for the entire duration; it never pans, never tilts, never pushes, never reframes.

FIRST FRAME: exactly the composition of the attached still, already alive — the oil column already blowing.

ACTION TIMING:
0.0–7.0s: the black oil column pulses upward through the crown block and streams screen-right as one bold flat shape, its ragged edge alive; a fine dark rain of oil drifts down and screen-right over the derrick's far side; the silhouetted crewman keeps both arms raised while the others shift their weight in small movements; the foreground mud and timber stay still. By the final second the column and spray sit back near their painted shape. Sound: the deep roar of the gusher, oil spattering on mud, wind across the prairie.

PHYSICS: the column rises with real pressure and the spray falls with real gravity, drifting on one wind direction; cloth flutters with lag. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — the gusher roar carrying every silence, oil spatter, wind. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no voices.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. Camera locked off. Horizon height constant. The column leans screen-right, never left. Final second returns to the opening composition. No flicker, no boiling lines, no grain swimming, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands.
```

## Clip 3 · Raising · `eras-03-raising` · 7s

```
1 continuous shot. Total 7 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: real-time 24fps, smooth continuous motion, every frame drawn in the same hand as the last. No frame interpolation, no frame blending, no ghosting, no double-imaging, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The horizon, the water tower, the white town buildings, the slab, the truck, the woman and child all keep their places; the glowing timber wall section stays the dominant shape at the right, standing at its painted angle. The camera is locked off on a tripod for the entire duration; it never pans, never tilts, never pushes, never reframes.

FIRST FRAME: exactly the composition of the attached still, already alive — the three framers already braced against the standing wall.

ACTION TIMING:
0.0–7.0s: the three framers brace the standing timber wall section from its right side, backs and arms working against its weight; it rocks a single degree under their push and settles back to its painted angle; the woman's dress and the child's hair move in a light breeze; the dry grass on the rise stirs; long shadows hold. Sound: timber creak under load, boots on earth, a light wind, one distant hammer strike.

PHYSICS: the wall carries real weight — it barely moves, the men lean into it, and it settles rather than snaps; cloth and grass trail the breeze with lag. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, quiet, continuous — timber, boots, wind, the far hammer. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no voices.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. Camera locked off. Horizon height constant. The wall stays standing at its painted angle. Final second returns to the opening composition. No flicker, no boiling lines, no grain swimming, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands.
```

## Clip 4 · Boom · `eras-07-boom` · 7s

```
1 continuous shot. Total 7 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: real-time 24fps, smooth continuous motion, every frame drawn in the same hand as the last. No frame interpolation, no frame blending, no ghosting, no double-imaging, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The man in the Stetson stays at the window seen from behind at the right of frame; the skyline, the unfinished steel tower and the desk keep their places; the blueprints on the desk stay unreadable rolls; the cobalt sky stays open. The camera is locked off on a tripod for the entire duration; it never pans, never tilts, never pushes, never moves past the glass.

FIRST FRAME: exactly the composition of the attached still, already alive — the cranes already in slow work.

ACTION TIMING:
0.0–7.0s: the two cranes over the unfinished tower slew slowly screen-right through a few degrees, their hook lines swaying with lag; the small clouds drift screen-right across the cobalt sky; the man at the window holds his stance, weight shifting once; the desk and its blueprints stay still. By the final second the cranes rest near their painted angles. Sound: the quiet of a high office — faint air handling, the city and crane work muffled far below through the glass.

PHYSICS: the cranes move with real mass, slow and continuous; the hook lines hang true and steady with lag. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, very quiet, continuous — room tone, muffled city, distant steel. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no voices.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. Camera locked off. Horizon height constant. Cranes slew screen-right, clouds drift screen-right, nothing moves left. Final second returns to the opening composition. No flicker, no boiling lines, no grain swimming, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands.
```

## Clip 5 · Launch · `eras-11-launch` · 7s

```
1 continuous shot. Total 7 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: real-time 24fps, smooth continuous motion, every frame drawn in the same hand as the last. No frame interpolation, no frame blending, no ghosting, no double-imaging, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no markings on the vehicle. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The stainless vehicle and its tower stay centered where they stand, the flat horizon stays at its height, the deep cobalt sky stays open above, the watching families keep their places on the flats. The camera is locked off on a tripod for the entire duration; it never pans, never tilts, never pushes, never reframes.

FIRST FRAME: exactly the composition of the attached still, already alive — the engine already lit, the steam bank already rolling.

ACTION TIMING:
0.0–7.0s: the amber engine flame flickers and breathes at the base of the vehicle; the great cream steam bank churns and billows low across the flats in its painted direction; the vehicle holds on the pad, trembling almost imperceptibly with thrust; the spectators are nearly still — a raised arm holds, hair and shirts move in the breeze; reflections tremble in the shallow water. By the final second the cloud sits back near its painted shape. Sound: a deep continuous ignition rumble rolling across the flats, wind, water lapping.

PHYSICS: the steam bank billows with real volume and drifts on one wind direction; the flame's light flickers on the steam and the wet sand; the vehicle's mass reads as immovable weight. Nothing floats away, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — the rumble carrying everything, wind, water. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no voices, no crowd chatter.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. Camera locked off. Horizon height constant. The steam bank keeps its painted leftward stream; every other motion is vertical or still. Final second returns to the opening composition. No flicker beyond the flame, no boiling lines, no grain swimming, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands.
```

## Clip 6 · House · `eras-15-house` · 8s — the destination

The slowest clip. The About page holds this frame four viewport heights and
the homepage lands and loops on it; the loop seam must be invisible.

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: real-time 24fps, smooth continuous motion, every frame drawn in the same hand as the last. No frame interpolation, no frame blending, no ghosting, no double-imaging, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. Every person on the porch, the dog, the steps, the setting sun, the distant skyline and the contrail keep their places; the sky stays open above. The camera is locked off on a tripod for the entire duration; it never pans, never tilts, never pushes, never reframes.

FIRST FRAME: exactly the composition of the attached still, already alive — the breeze already in the grass.

ACTION TIMING:
0.0–8.0s: the quietest scene of the six — the bluebonnets and dry grass sway in a light breeze; the guitarist's hand moves in a slow strum; the dog's ear flicks once; the standing figures shift their weight in small, easy movements; the thin contrail high in the sky holds; the low sun holds its glow on the porch wall. Every figure ends the clip within a breath of its painted pose so the clip loops without a seam. Sound: a faint acoustic guitar from the porch itself, cicadas, a light breeze in the grass.

PHYSICS: breeze-driven motion only, with natural lag in grass, hair and cloth; every weight settled and at rest. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, soft, continuous — the porch guitar quiet and unpolished as the only melodic sound, cicadas, breeze. No score, no added music beyond the guitar physically in frame, no swell, no drone, no rising tone, no added foley, no voices, no singing.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. Camera locked off. Horizon height constant. The clip opens and closes on the same composition so it loops seamlessly. No flicker, no boiling lines, no grain swimming, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands.
```

---

## After generation

1. Bring approved clips (or their URLs) back to the Claude Code session in
   the site repo.
2. Intake: `npm run hf -- intake <url|file> --tier scene --register <land|institution> --subject eras-NN-… --ar 21:9`
   → filed in `public/brand/` as `scene-<register>-eras-NN-…-21x9-v#.mp4`,
   logged in `brand/renders.md`. The About handoff expects
   `public/brand/eras/` instead; settle that before the first intake.
3. Each clip is exported two ways: an mp4/webm master for the homepage loop,
   and a WebP frame sequence (`seq-eras-NNNN.webp`, 24fps, numbered
   continuously across the twelve About frames) for the About scroll scrub.
4. The other six About frames (Chip, Choir, Charreada, Dance Hall, Swang,
   Mind) can use these same prompt skeletons if clips are wanted; stills
   with the slow-push treatment are the fallback per the About handoff.

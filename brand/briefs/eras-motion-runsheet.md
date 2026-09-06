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
- **Per clip:** attach the era's frame as the **start image only**
  (`start_image`). Take 1 also passed it as a style reference and the model
  restaged the figures; the start image alone is the strict-first-frame test
  on take 2. No end image.
- **Settings as tool parameters, never in the prompt:** `aspect_ratio`
  21:9, `resolution` 1080p, `bitrate_mode` high (no extra cost; protects the
  halftone from compression smear), `generate_audio` true, `duration` 8.
  Cost check (`get_cost`) before each run: 9 credits per second at 1080p as
  of 2026-09-06, so 72 per clip, 432 for a clean set of six.
- **One camera move per clip, then a hold.** Every clip carries one slow
  motorized move (a push, or one lateral truck) that eases to a complete
  stop for the final 1.5 seconds. The move supplies parallax and continuous
  motion, which the model renders well; the hold is the handle the site
  dissolves on. Never a tilt, never a pan, never handheld: the horizon must
  not move, because the transitions match on it.
- **Filmed, not drawn.** Take 1 came back animated on twos with no motion
  blur. Every prompt now carries the film-cadence line after the medium
  lock, and figure motion is written as physics (a horse's four-beat gallop,
  weight landing) rather than as a picture that moves.
- **Direction words are screen-relative.** Screen-right means toward the
  right edge of the frame.
- **One clip at a time.** Judge Range against the checklist before running
  the rest; carry any fix into the other five.
- **Negatives grow only from defects actually seen.** Block 5 is the
  standing brand negative; the scar line after it lists what a take
  actually got wrong.
- **Expect some grain swim.** Measured 4.8 mean luma difference between
  consecutive frames in static sky on take 1 (a fixed field would read near
  1). If a clip passes every other check but the grain boils, the fallback
  is a light soften plus one static halftone overlay in post, decided once
  for all six.

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

> The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Followed in every prompt by the film-cadence line, also verbatim:

> Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

## Transitions — how era becomes era

Done in the browser on section change, not generated. The clips give the
editor two things: a strict opening frame that is the still, and a settled
1.5-second hold at the end.

- **Default cut:** a 0.6-second dissolve under a halftone dither that wipes
  screen-left to screen-right — the page turning. Not a soft video fade.
  Horizons align because no clip tilts or pans.
- **The three eruptions get shape matches:** Range ends pushing into the
  riders' dust and Gusher opens on the oil column; Launch's steam bank
  dissolves into the House sky on a longer, slower dissolve. Raising and
  Boom, the held breath, take the default cut.
- **Nothing ever moves right to left**, the wipe included.
- **Playback:** two video elements per section, the next one preloaded so
  the cut lands on a frame that is already there. Range through Launch loop
  on their own clip (the dissolve hides the loop seam under the section
  change). House plays once and holds on its final frame, which is the
  poster the About page and the homepage both rest on.

## Review checklist — every clip, before approving

- Frame one is the still: same framing, same figure positions
- Motion is filmed, not stepped: consecutive-frame difference does not
  alternate small/large; horses and dust carry motion blur
- Grain and halftone stable enough (measure; note the number)
- Horizon has not moved; one camera move only, ending in a real hold;
  nothing has entered the sky's upper half
- No drift toward photorealism or 3D smoothness anywhere in the clip
- Palette identical to the frame start to finish
- All lateral motion runs screen-left to screen-right (exception: the
  Launch steam bank, painted streaming left — leave it)
- No text, no logos anywhere

---

## Clip 1 · Range · `eras-01-open-range` · 8s

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The horizon stays at its height for the entire duration, the sky's upper half stays open with nothing entering it, and the red mesa, the single live oak, the great cream cumulus bank and all four riders keep their places on the land. The riders stay small figures; the landscape dominates the frame even at the end of the camera move.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same rider positions, same dust — already alive, the riders mid-gallop.

CAMERA: one slow motorized dolly push toward the riders along their line of travel, ending about 15% closer, easing to a complete stop for the final 1.5 seconds. Level throughout: no tilt, no pan, no handheld, no shake, no zoom breathing. The near grass and bushes slide past faster than the mesa and the cloud bank; the horizon does not move.

ACTION TIMING:
0.0–6.5s: the four riders hold a full four-beat gallop moving screen-right toward the low sun — every horse's body rises and drops with each stride, hooves strike the hardpan and throw dust, the riders' bodies absorb each landing in the saddle, hat brims pressed back in the wind of their own speed; dust streams behind each horse as flat shapes, lagging the motion; the dark grass foreground lays over in one steady wind moving screen-right; the cumulus bank holds its shape. Sound: massed hoofbeats on dry hardpan, wind over open grass, leather creak.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the riders keep the same full gallop across the held frame, dust still streaming, grass still moving. No freeze-frame. Sound continues unchanged.

PHYSICS: real weight scaled to the illustration — each horse about 500 kilograms, hooves striking and the ground giving up dust on every strike, bodies rising and falling through the gallop, riders' weight sinking into the saddle on every landing, dust obeying one wind direction with lag, manes and hems trailing the motion. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, quiet, continuous — hoofbeats, wind, leather. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no voices.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a hold. All motion screen-left to screen-right. Horizon height constant. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on takes 1 and 2, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops.
```

## Clip 2 · Gusher · `eras-02-gusher` · 8s

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The wooden derrick stays exactly where it stands, the horizon stays at its height, the rose-to-cream dawn sky stays open, the crew, tents and wagons keep their places.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same derrick, same column shape — already alive, the oil already blowing.

CAMERA: one slow motorized dolly push toward the derrick, ending about 12% closer, easing to a complete stop for the final 1.5 seconds. Level throughout: no tilt, no pan, no handheld, no shake, no zoom breathing. The foreground mud and timber slide past faster than the derrick and the tents; the horizon does not move.

ACTION TIMING:
0.0–6.5s: the black oil column pulses upward through the crown block under real pressure and streams screen-right as one bold flat shape, its ragged edge alive; a fine dark rain of oil falls with gravity and drifts screen-right over the derrick's far side; the silhouetted crewman keeps both arms raised while the others shift their weight in small movements; the foreground mud and timber stay still. Sound: the deep roar of the gusher, oil spattering on mud, wind across the prairie.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the column keeps pulsing and streaming, the oil rain keeps falling, the crew keeps shifting. No freeze-frame. Sound continues unchanged.

PHYSICS: the column rises with real pressure and the spray falls with real gravity, drifting on one wind direction; cloth flutters with lag. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — the gusher roar carrying every silence, oil spatter, wind. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no voices.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a hold. The column leans screen-right, never left. Horizon height constant. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on takes 1 and 2, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops.
```

## Clip 3 · Raising · `eras-03-raising` · 8s

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The horizon, the water tower, the white town buildings, the slab, the truck, the woman and child all keep their places; the glowing timber wall section stays the dominant shape at the right, standing at its painted angle.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same wall angle, same figures — already alive, the three framers already braced against the standing wall.

CAMERA: one slow motorized lateral truck moving screen-right, travelling about 6% of the frame width, easing to a complete stop for the final 1.5 seconds. Level throughout: no tilt, no pan, no handheld, no shake, no zoom. The slab and near ground slide past faster than the town and the water tower; the horizon does not move.

ACTION TIMING:
0.0–6.5s: the three framers brace the standing timber wall section from its right side, backs and arms working against its weight; it rocks a single degree under their push and settles back to its painted angle; the woman's dress and the child's hair move in a light breeze; the dry grass on the rise stirs; long shadows hold. Sound: timber creak under load, boots on earth, a light wind.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the framers keep working against the wall, the breeze keeps moving dress, hair and grass. No freeze-frame. Sound continues unchanged.

PHYSICS: the wall carries real weight — it barely moves, the men lean into it, and it settles rather than snaps; cloth and grass trail the breeze with lag. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, quiet, continuous — timber, boots, wind. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no voices.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a hold. The wall stays standing at its painted angle. Horizon height constant. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on takes 1 and 2, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops.
```

## Clip 4 · Boom · `eras-07-boom` · 8s

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The man in the Stetson stays at the window seen from behind at the right of frame; the skyline, the unfinished steel tower and the desk keep their places; the blueprints on the desk stay unreadable rolls; the cobalt sky stays open.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same man, same skyline — already alive, the cranes already in slow work.

CAMERA: one slow motorized dolly push past the man's shoulder toward the glass and the skyline, ending about 10% closer, easing to a complete stop for the final 1.5 seconds. Level throughout: no tilt, no pan, no handheld, no shake, no zoom breathing; the camera never passes through the glass. The desk and the man slide past faster than the towers; the horizon does not move.

ACTION TIMING:
0.0–6.5s: the two cranes over the unfinished tower slew slowly screen-right through a few degrees, their hook lines swaying with lag; the small clouds drift screen-right across the cobalt sky; the man at the window holds his stance, weight shifting once; the desk and its blueprints stay still. Sound: the quiet of a high office — faint air handling, the city and crane work muffled far below through the glass.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the cranes keep their slow slew, the clouds keep drifting, the man breathes. No freeze-frame. Sound continues unchanged.

PHYSICS: the cranes move with real mass, slow and continuous; the hook lines hang true and steady with lag. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, very quiet, continuous — room tone, muffled city, distant steel. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no voices.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a hold. Cranes slew screen-right, clouds drift screen-right, nothing moves left. Horizon height constant. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on takes 1 and 2, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops.
```

## Clip 5 · Launch · `eras-11-launch` · 8s

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The stainless vehicle and its tower stay centered where they stand, the flat horizon stays at its height, the deep cobalt sky stays open above, the watching families keep their places on the flats. The vehicle stays on the pad for the whole clip.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same vehicle, same steam bank, same spectators — already alive, the engine already lit.

CAMERA: one slow motorized dolly push toward the vehicle, ending about 10% closer, easing to a complete stop for the final 1.5 seconds. Level throughout: no tilt, no pan, no handheld, no shake, no zoom breathing. The spectators in the foreground slide past faster than the vehicle and the far shore; the horizon does not move.

ACTION TIMING:
0.0–6.5s: the amber engine flame flickers and breathes at the base of the vehicle; the great cream steam bank churns and billows low across the flats in its painted direction; the vehicle holds on the pad, trembling almost imperceptibly with thrust; the spectators are nearly still — a raised arm holds, hair and shirts move in the breeze; reflections tremble in the shallow water. Sound: a deep continuous ignition rumble rolling across the flats, wind, water lapping.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the flame keeps breathing, the steam bank keeps billowing, the water keeps trembling. No freeze-frame. Sound continues unchanged.

PHYSICS: the steam bank billows with real volume and drifts on one wind direction; the flame's light flickers on the steam and the wet sand; the vehicle's mass reads as immovable weight. Nothing floats away, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — the rumble carrying everything, wind, water. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no voices, no crowd chatter.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a hold. The steam bank keeps its painted leftward stream; every other motion is vertical or still. No flicker beyond the flame. Horizon height constant. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on takes 1 and 2, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops.
```

## Clip 6 · House · `eras-15-house` · 8s — the destination

The slowest clip. The About page holds this frame four viewport heights and
the homepage rests on it; the clip plays once and holds on its last frame.

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. Every person on the porch, the dog, the steps, the setting sun, the distant skyline and the contrail keep their places; the sky stays open above.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same figures, same light — already alive, the breeze already in the grass.

CAMERA: the slowest move of the six — one motorized dolly push toward the porch, ending about 6% closer, easing to a complete stop for the final 1.5 seconds and resting there. Level throughout: no tilt, no pan, no handheld, no shake, no zoom breathing. The bluebonnets in the foreground slide past faster than the porch and the far skyline; the horizon does not move.

ACTION TIMING:
0.0–6.5s: the quietest scene of the six — the bluebonnets and dry grass sway in a light breeze; the guitarist's hand moves in a slow strum; the dog's ear flicks once; the standing figures shift their weight in small, easy movements; the thin contrail high in the sky holds; the low sun holds its glow on the porch wall. Sound: a faint acoustic guitar from the porch itself, cicadas, a light breeze in the grass.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the breeze and the strum continue, every figure alive and within a breath of its painted pose. No freeze-frame. Sound continues unchanged.

PHYSICS: breeze-driven motion only, with natural lag in grass, hair and cloth; every weight settled and at rest. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, soft, continuous — the porch guitar quiet and unpolished as the only melodic sound, cicadas, breeze. No score, no added music beyond the guitar physically in frame, no swell, no drone, no rising tone, no added foley, no voices, no singing.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a hold. The camera comes to rest and the final frame is the poster the page holds on. Horizon height constant. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on takes 1 and 2, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops.
```

---

## Take log

### Range · take 1 · 2026-09-06 · job `f00235b6-38fa-4245-82c3-0820a0cd1ce0` · 63 credits

Settings: seedance_2_5, omni_reference, start_image + image_references both
the eras-01 still, 21:9, 1080p, 7s, audio on, bitrate high. Output
2206×946, 24fps, 7.04s, AAC audio.

Checklist result:

- Medium holds. Flat silhouettes, gouache clouds, palette identical, no
  photoreal or 3D drift anywhere. The strongest result of the take.
- Camera locked. Horizon, mesa, live oak and cloud bank in place; sky's
  upper half open throughout. Four riders throughout, no duplicates.
- Motion all screen-left to screen-right. Dust streams behind the horses.
- **First frame is not the still.** Seedance treated the start image as a
  reference and restaged the riders: they open left of centre, larger, and
  cross the whole frame, ending at the right edge. The clip passes through
  the painted composition around 3.5 to 5s and does not return to it. Not
  loopable as-is; the site poster cannot be the still for this clip.
- **Grain re-renders per frame.** Mean luma difference between consecutive
  frames in a static sky crop is 4.8 on 0 to 255 (a fixed grain field under
  the codec would read near 1). The halftone look is right in any single
  frame; in motion it shimmers. This is the expected failure named above.
- Cloud bank moves more than "almost imperceptibly" but stays in shape.

Carry into the next take, whichever way Will decides:

1. Strict first frame: try `start_image` alone, without the duplicate
   `image_references` slot, and open the composition block with "open on the
   attached still exactly, pixel for pixel, at frame one".
2. If the riders are allowed to cross (the brief's original "riders cross
   the frame"), say so and drop the return-to-composition clause; the
   homepage then crossfades on the horizon instead of looping the clip.
3. Grain: accept the shimmer, or soften in post and lay one static halftone
   overlay. Decide once, apply to all six.

### Range · take 2 · 2026-09-06 · job `7a3222b7-ed7a-44ae-a9ce-44a8298d3d8a` · 72 credits

Settings: seedance_2_5, omni_reference, start_image only, 21:9, 1080p, 8s,
audio on, bitrate high. Prompt: the v2 Range prompt above, before the
freeze-frame fix.

- **Cadence fixed.** Odd/even consecutive-frame ratio 1.05 (take 1 was
  about 2.5). Motion blur on the horses and dust. Reads as film.
- **Grain swim down** to 3.0 (take 1: 4.8).
- **Composition holds** where it matters: horizon, mesa, oak, cloud bank
  and riders at their painted positions; the sky's upper half stays open.
- **The camera move came back as a tracking shot**, not a push: the camera
  travels with the riders, the far ground barely moves, the foreground
  bushes pass screen-left. That is the classic western follow shot and the
  most filmic result so far; the foreground counter-motion is inherent to
  it and reads as the riders travelling. Accepted.
- **First frame is not the still** (full-frame difference 14.4): the sky
  and far ground match, the foreground was regenerated to give the camera
  something to pass. The clip's own first frame is its poster.
- **The hold froze the scene.** Motion in the last 1.5s drops to about 1.0
  in every band, riders included: the model read "the camera holds" as a
  freeze-frame. Fixed in every prompt: the hold beat now says the camera
  comes to rest and only the camera, and the scar line bans freeze-frame
  endings.

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

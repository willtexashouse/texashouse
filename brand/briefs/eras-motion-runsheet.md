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
- **v3 direction (Will, 2026-09-06, on the Ultra account):** bigger,
  clearer motion. Range runs like a Western; the Gusher visibly erupts and
  the crew cheer; Raising has a hard wind and the men pushing the wall up;
  Launch lifts off under a slow tilt with huge plumes; House talks and
  laughs while the camera pans off to the city. Boom stands as generated.
  Launch runs 10s (90 credits). The horizon rule now bends for Launch and
  House by design; the dissolve handles it.
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

THIS IS A WESTERN — CRITICAL: the riders and horses move exactly as real horses and riders do in a filmed Western at full gallop. Every horse runs a true four-beat gallop — neck stretching forward and pulling back with each stride, body rising and dropping, hind legs driving, forelegs reaching, hooves striking the hardpan and throwing dust, tail and mane streaming. Every rider rises in the stirrups and absorbs each landing, leaning forward, reins in one hand, hat brim pressed back by the wind. Real animal anatomy, real weight, real momentum in every stride, each horse on its own rhythm. Never puppet-like, never stiff, never cutouts sliding along the ground, never a looping cycle, never cartoon motion.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The horizon stays at its height, the sky's upper half stays open with nothing entering it, the red mesa, the single live oak and the great cream cumulus bank keep their places. Four riders, no more, no fewer; the landscape dominates the frame.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same rider positions, same dust — already alive, the riders mid-gallop.

CAMERA: a camera car tracking alongside the riders at their own speed, level, moving screen-right, so the riders hold their place in frame while the land streams past — the near grass and bushes whip by fast, the mesa and cloud bank drift slowly. In the final 1.5 seconds the camera eases to a stop and the riders run on ahead screen-right. No tilt, no pan, no handheld, no shake, no zoom.

ACTION TIMING:
0.0–6.5s: the four riders hold full gallop moving screen-right toward the low sun, the gallop mechanics above in every stride; dust torn up behind each horse streams and hangs, lagging the motion; the dark grass foreground lays over in one steady wind moving screen-right; the cumulus bank holds its shape. Sound: massed hoofbeats drumming on dry hardpan, horses breathing hard, wind over open grass, leather creak.
6.5–8.0s: the camera eases to rest, and only the camera — the scene never pauses: the riders keep the same full gallop and pull ahead screen-right, dust drifting across the held frame. No freeze-frame. Sound continues unchanged.

PHYSICS: real weight scaled to the illustration — each horse about 500 kilograms, hooves striking and the ground giving up dust on every strike, bodies rising and falling through the gallop, riders' weight sinking into the saddle on every landing, dust obeying one wind direction with lag, manes, tails and hems trailing the motion. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — hoofbeats, horse breath, wind, leather. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no voices.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a rest. All motion screen-left to screen-right. Horizon height constant. Motion filmed like a Western, never stepped, never puppet-like. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
```

## Clip 2 · Gusher · `eras-02-gusher` · 8s

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE GUSHER — CRITICAL: the oil is the event. A thick black column of crude erupts through the top of the derrick under enormous pressure, shoots far above the crown block and blooms into a huge dark plume that leans screen-right and rains black oil down over the derrick, the crew and the ground. It is unmistakable, violent and continuous — the biggest moving thing in frame, black against the rose dawn sky. The crew are drenched and ecstatic: they cheer, wave both arms, throw hats, one runs toward the derrick, one drops to his knees, oil raining on them all. Shot like the strike scene of a great oil-boom film: silhouettes against the dawn, black rain against the light.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The wooden derrick stays where it stands at its painted size, the horizon stays at its height about three quarters of the way down the frame, the dawn sky stays open, the tents and wagons keep their places, the foreground mud and timber stay in the bottom of the frame. The camera never tilts and never pushes in.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same derrick, the column already blowing and about to surge.

CAMERA: one slow motorized lateral truck moving screen-right, travelling about 5% of the frame width, easing to a complete stop for the final 1.5 seconds. Level throughout: no tilt, no pan, no push, no zoom, no handheld, no shake. The foreground mud and timber slide past faster than the derrick and the tents; the horizon does not move.

ACTION TIMING:
0.0–2.0s: the column surges — the black oil climbs higher and thicker above the crown block, its ragged edge tearing in the wind, and the first heavy rain of oil falls screen-right across the derrick; the crewman with raised arms starts to shout and the others turn toward it. Sound: the roar rising, the first spatter.
2.0–6.5s: full gusher — the plume at full height streaming screen-right, oil raining down in sheets; the crew cheer and run and wave, hats in the air, one on his knees, all silhouetted; the mud shines with oil. Sound: deep continuous roar, oil hammering the mud and the derrick timbers, distant whoops and cheers from the crew, wind.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the gusher keeps roaring, the oil keeps raining, the crew keep cheering. No freeze-frame. Sound continues unchanged.

PHYSICS: the column rises with real pressure and the spray falls with real gravity, drifting on one wind direction and lagging the gusts; oil lands and splashes; cloth flutters with lag; the men move with real weight, running and stumbling on mud. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — the roar carrying everything, oil spatter, the crew's distant whoops and cheers, wind. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no readable words.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a rest. The column leans screen-right, never left. Horizon height constant, foreground in frame throughout. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
```

## Clip 3 · Raising · `eras-03-raising` · 8s

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE WIND AND THE WORK — CRITICAL: a strong steady wind blows screen-left to screen-right across the whole scene. The dry grass on the rise lays over in waves, dust streams off the graded lot, the woman's dress and the child's hair snap and flutter, the men's shirts press against their backs. The three framers are working hard and visibly: they push the timber wall section up the last few degrees to plumb, backs bent, legs driving, arms straight and locked, then hold it upright against the wind while one steps back and sets a brace. The woman turns to watch and pulls the child close. Every body in frame is moving and readable; nobody is a statue.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The horizon, the water tower, the white town buildings, the slab, the truck, the woman and child all keep their places; the glowing timber wall section stays the dominant shape at the right and ends standing plumb. The camera never tilts and never pushes in; the slab stays in the bottom of the frame.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same wall angle, same figures — already alive, the wind already in the grass, the framers already pushing.

CAMERA: one slow motorized lateral truck moving screen-right, travelling about 5% of the frame width, easing to a complete stop for the final 1.5 seconds. Level throughout: no tilt, no pan, no push, no zoom, no handheld, no shake. The slab and near ground slide past faster than the town and the water tower; the horizon does not move.

ACTION TIMING:
0.0–4.0s: the three framers drive the wall up the last few degrees, bodies straining, boots digging in, and it comes to plumb with a visible settle; the wind tears across the lot — grass laying over, dust streaming screen-right, dress and hair and shirts whipping; the woman turns and gathers the child. Sound: wind loud across open ground, timber groaning under load, boots scraping earth, a shouted count from the framers.
4.0–6.5s: the wall stands; two men hold it braced against the wind while the third steps back and sets a diagonal brace; the wind keeps everything alive. Sound: wind, timber creak, boots, one hammer strike on the brace.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the men keep bracing and moving, the wind keeps blowing. No freeze-frame. Sound continues unchanged.

PHYSICS: the wall carries real weight — it rises slowly under three men's effort and settles rather than snaps, and it leans into the wind while braced; cloth, hair and grass trail the wind with lag; dust streams and thins. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — wind, timber, boots, the framers' shouted count, one hammer strike. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no readable words.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a rest. The wind blows screen-left to screen-right throughout; the wall ends standing plumb. Horizon height constant. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
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

## Clip 5 · Launch · `eras-11-launch` · 10s

```
1 continuous shot. Total 10 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE LIFT-OFF — CRITICAL: the vehicle launches. Over the first two seconds the amber flame at its base swells into a blinding column of fire and enormous cream steam and dust plumes blast out from both sides of the pad, rolling low across the flats and climbing — plumes so big they dwarf the tower and fill the lower frame. Then the stainless vehicle lifts slowly off the pad on the column of fire and climbs, gathering speed, clearing the tower, trailing its plume, the fire under it brilliant. The spectators react: they stand, point, raise their arms, hold phones up, cheer.

THE CAMERA CLIMBS SLOWLY — CRITICAL: the camera tilts up smoothly to follow the vehicle, and deliberately slower than the vehicle, so the rocket rises through the frame toward the top while the plumes stay in the lower frame. The tilt never rushes, never jumps, never lags then catches up; it is one continuous slow tilt from a level start. No pan, no push, no zoom, no handheld, no shake. The vehicle stays inside the frame for the whole clip.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same vehicle on the pad, same steam bank, same spectators — already alive, the engine already lit.

ACTION TIMING:
0.0–2.0s: ignition builds — the flame swells to a column, the steam bank erupts outward on both sides and rolls low across the flats, heat and light on the wet sand; the spectators stir. Sound: the rumble building to a roar.
2.0–7.0s: lift-off — the vehicle rises off the pad slowly at first then faster, clears the tower, climbs on its fire with the plume boiling beneath it; the camera tilts up slowly with it; the spectators stand, point and cheer, arms up. Sound: full launch roar, crackle, the shockwave rolling across the flats, cheers.
7.0–10.0s: the vehicle keeps climbing toward the top of frame trailing fire and plume, the great steam clouds still rolling across the flats below; the camera keeps its slow tilt and eases to rest with the rocket high in frame and the plumes filling the lower half. No freeze-frame. Sound continues.

PHYSICS: the vehicle's mass reads as immense — it lifts slowly and accelerates truly; the steam and dust plumes billow with real volume and drift on one wind direction; the flame's light flickers on the plume and the wet sand; the spectators move with real weight, standing and turning. Nothing floats away, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — the roar carrying everything, crackle, wind, water, the crowd's cheers. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no readable words.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, a slow tilt up, ending in a rest. The vehicle lifts and climbs; the plumes are huge. Motion filmed, never stepped. No flicker beyond the flame, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
```

## Clip 6 · House · `eras-15-house` · 8s — the destination

The destination. Per Will (2026-09-06): the family talks and laughs, and
the camera pans off toward the city. The About page holds the still, not
this clip's last frame.

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

EVERYONE IS LIVE — CRITICAL: the family is in the middle of a real conversation. They talk, listen, gesture and laugh: the standing woman says something and laughs, the seated old man chuckles and shakes his head, the two young men turn to each other and grin, the guitarist plays and smiles, the girl on the steps looks up at them and laughs, the dog's tail wags. Every face is alive with expression, mouths moving with real speech, heads turning to whoever is speaking, hands gesturing. Nobody is frozen, nobody is a statue.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The porch, the steps, the figures, the dog, the bluebonnets, the setting sun and the distant city skyline are as painted; the sky stays open above. Late golden light throughout.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same figures, same light — already alive, the conversation already going, the breeze already in the grass.

CAMERA: one slow, even pan screen-right, away from the porch and out toward the sunset and the distant city skyline, so the porch slides out of the left edge in the final seconds and the clip ends resting on the low sun, the dark trees and the small skyline on the horizon. Level throughout: no tilt, no push, no zoom, no handheld, no shake. The pan eases to a complete stop for the final 1.5 seconds.

ACTION TIMING:
0.0–5.0s: the conversation — talking, laughing, gestures, the guitar strummed, the dog's tail wagging, the bluebonnets and dry grass swaying in a light breeze; the pan begins slowly screen-right. Sound: warm overlapping conversation and laughter from the porch, low and indistinct, the guitar, cicadas, breeze.
5.0–6.5s: the pan carries on screen-right, the porch and the family slipping out of the left edge still talking and laughing, the sunset and the skyline coming to centre. Sound: the voices and guitar fading a little with distance, cicadas, breeze.
6.5–8.0s: the camera comes to rest on the sun, the trees and the skyline; the grass keeps moving in the breeze, the light holds. No freeze-frame. Sound continues.

PHYSICS: settled bodies with natural weight shifts, gestures with real arm mass, breeze-driven motion in grass, hair and cloth with natural lag. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, soft, continuous — the porch conversation and laughter low and indistinct with no readable words, the porch guitar quiet and unpolished as the only melodic sound, cicadas, breeze. No score, no added music beyond the guitar physically in frame, no swell, no drone, no rising tone, no added foley, no singing.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, a slow pan screen-right, ending in a rest on the skyline. Everyone alive throughout. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
```

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

### Gusher, Raising, Boom, Launch, House · take 1 · 2026-09-06 · 72 credits each

Jobs: Gusher `57b8d263`, Raising `60cb5a9a`, Boom `cca99279`, Launch
`68b2e5ab`, House `7be4632d`. Settings as Range take 2 plus the freeze-frame
fix. Stepping index (mean frame-to-frame change in motion over mean motion;
0.1 to 0.3 reads as film, 0.44 was take 1's on-twos):

| Clip | Stepping | Grain swim | Hold (s7, s8) | Verdict |
|---|---|---|---|---|
| Range t2 | 0.09 | 3.0 | froze | accepted, tracking shot |
| Gusher | 0.17 | 5.3 | 5.8, 3.2 alive | **retake**: push became push plus tilt, horizon slid from 75% to the bottom edge, derrick grew ~40% |
| Raising | 0.05 | 9.9 (camera-inflated) | 1.3, 1.1 froze | hold; big move, froze early, wall angle and figures fine |
| Boom | 0.26 | 4.2 | 5.8, 3.7 alive | accepted: push past the shoulder, horizon held, clouds right |
| Launch | 0.06 | 4.7 | 6.1, 3.1 alive | **retake**: same failure as Gusher, horizon slid from 60% to ~90%, spectators pushed out of frame |
| House | 0.29 | 6.4 | 4.8, 2.6 alive | accepted with a note: first second shows on-twos alternation, settles after; slowest scene so least visible |

Lesson: "dolly push toward X" makes the model zoom onto X and recentre it,
which drags the horizon. A lateral truck keeps the horizon (Range, Boom's
past-the-shoulder push kept it because the man anchored the frame). Gusher
and Launch move to a lateral truck with a pinned-horizon CRITICAL block.

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

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

**Locked 2026-09-06 (Will): v3, job `7e099b20`. The site uses 3 to 4 seconds
of it; pick the window in the edit.**


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

THE OIL COMES UP THROUGH THE DERRICK — CRITICAL: the crude comes up the well bore inside the wooden derrick and blows out of its top, through the crown block, the way a real strike happens: the column rises out of the top of the tower, never out of the ground beside it, never from the base, never as an explosion in the dirt. The derrick stands intact with the column standing on it.

THE GUSHER — CRITICAL: the oil goes straight up. A thick black column of crude blasts vertically out of the top of the derrick under enormous pressure, climbing straight into the sky two or three times the derrick's height, and at its top it bursts apart and sprays in every direction — black oil falling everywhere around the derrick in a wide circle, not to one side. This is how a real gusher behaves: a vertical fountain, then rain all around. It is unmistakable, violent and continuous, the biggest moving thing in frame, black against the rose dawn sky. The painted lean of the plume is only the first instant; within the first second the column stands straight up.

THE CREW REACT NOW — CRITICAL: the crew are already ecstatic at frame one and stay that way: arms up, cheering, running toward the derrick, hats thrown, one dropping to his knees, all drenched in the falling oil. No slow reaction, no standing still and turning — they are mid-celebration from the first frame.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same derrick — already alive, the column already blowing and the crew already cheering.

CAMERA: one slow, even zoom out (dolly back), widening the view by about 20% across the clip so more sky and more of the flats come into frame around the eruption, easing to a complete stop for the final 1.5 seconds. The derrick stays where it stands and shrinks slightly as the view widens; the horizon stays at the same height on screen, about three quarters of the way down; the foreground mud and timber stay in the bottom of the frame. Level throughout: no tilt, no pan, no handheld, no shake.

ACTION TIMING:
0.0–1.0s: the column rising out of the crown block straightens and surges straight up, doubling in height, and the crown of it bursts into spray. Sound: the roar rising, the first spatter.
1.0–6.5s: full gusher — a vertical black fountain far above the derrick, oil raining down all around it in sheets, on the derrick, the mud, the tents and the men; the crew cheer, run, wave, one on his knees, hats in the air, all silhouetted; the mud shines. The camera widens slowly. Sound: deep continuous roar, oil hammering timber and mud, the crew's distant whoops and cheers, wind.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the fountain keeps roaring, the oil keeps raining, the crew keep cheering. No freeze-frame. Sound continues unchanged.

PHYSICS: the column rises under real pressure and falls with real gravity in every direction; oil lands and splashes; cloth flutters with lag; the men move with real weight, running and stumbling on mud. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — the roar carrying everything, oil spatter, the crew's distant whoops and cheers, wind. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no readable words.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, a slow zoom out, ending in a rest. The column stands vertical; the oil falls all around. Horizon height constant, foreground in frame throughout. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
```

## Clip 3 · Raising · `eras-03-raising` · 8s

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE WALL IS RAISED BY ROPE — CRITICAL: the timber wall section is being raised the way a real framing crew raises a wall. Two ropes are tied to its top plate. The three framers at the right stand back from the wall holding those ropes, leaning back hard against the load, boots dug into the dirt, and haul hand over hand; the wall pivots up on its bottom plate from a low angle to standing plumb. The ropes are taut and straight, the men's bodies are angled back against the weight, and the wall rises slowly and steadily, settling into vertical with a visible stop. Nobody has their hands flat on the wall; nobody leans over its edge. The physics of a heavy wall on a hinge, pulled by rope, are exact.

THE WOMAN AND THE CHILD WATCH THE HOUSE — CRITICAL: the woman and the girl on the slab are turned toward the house frame, facing it, backs three-quarter to the camera, watching the wall come up. They stay turned toward it for the whole clip; the woman's hand rests on the child's shoulder, her dress and the child's hair blowing in the wind.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The horizon, the water tower, the white town buildings, the slab, the truck all keep their places; the wall section stays the dominant shape at the right. A strong steady wind blows screen-left to screen-right: grass lays over, dust streams off the lot, cloth and hair whip. The camera never tilts and never pushes in; the slab stays in the bottom of the frame.

FIRST FRAME: open on the attached still's framing and light at frame one — already alive, the ropes already taut and the wall already on its way up, the woman and child already turned toward it.

CAMERA: one slow motorized lateral truck moving screen-right, travelling about 5% of the frame width, easing to a complete stop for the final 1.5 seconds. Level throughout: no tilt, no pan, no push, no zoom, no handheld, no shake. The slab and near ground slide past faster than the town and the water tower; the horizon does not move.

ACTION TIMING:
0.0–5.0s: the framers haul on the ropes hand over hand, leaning back, and the wall rises steadily on its bottom plate from low to plumb, the honey timber catching the low sun as it comes up; the wind tears across the lot — grass laying over, dust streaming screen-right, dress, hair and shirts whipping; the woman and child watch it rise. Sound: wind loud across open ground, rope creaking under load, timber groaning, boots scraping earth, a shouted count from the framers.
5.0–6.5s: the wall settles plumb with a visible stop; two men hold the ropes taut to steady it while the third walks in and sets a diagonal brace. Sound: wind, rope, one hammer strike on the brace.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the men keep the ropes taut and move, the wind keeps blowing, the woman and child keep watching. No freeze-frame. Sound continues unchanged.

PHYSICS: the wall carries real weight — it rises slowly under three men's rope effort, pivoting on its base, and settles rather than snaps; the ropes stay taut and straight, the men lean back against the load; cloth, hair and grass trail the wind with lag; dust streams and thins. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — wind, rope, timber, boots, the framers' shouted count, one hammer strike. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no readable words.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a rest. The wall rises by rope to plumb; the woman and child face the house throughout; the wind blows screen-left to screen-right. Horizon height constant. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

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

THE LIFT-OFF — CRITICAL: the vehicle launches. Over the first two seconds the amber flame at its base swells into a blinding column of fire and enormous cream steam and dust plumes blast out from both sides of the pad, rolling low across the flats — plumes so big they dwarf the tower. Then the stainless vehicle lifts off the pad on the column of fire and climbs, slowly at first then gathering speed, clearing the tower and rising high into the sky, trailing fire and plume. The spectators stand, point, raise their arms, hold phones up, cheer.

THE SPECTATORS ARE WHOLE PEOPLE — CRITICAL: every spectator is one complete human body. Those seated rise cleanly to their feet and leave their chairs behind; folding chairs, coolers and blankets stay on the ground exactly where they are. Nothing sticks to anyone, no chair travels with a body, no two people merge, every arm, hand and head stays attached and correct. The man at the lower right stands up and his chair stays on the sand.

THE CAMERA FOLLOWS FROM A FIXED TRIPOD — CRITICAL: the camera does not travel. It stands still on its tripod and tilts up to follow the rocket, keeping the rocket near the centre of the frame as it climbs, the way a spectator's camera follows a launch. As the tilt rises, the spectators and the flats drop out of the bottom of the frame and the plume trails down toward the pad below; by the end the frame is mostly sky with the rocket high in it on its column of fire. The tilt is smooth and continuous, matched to the rocket's climb, never rushing ahead, never lagging behind. No pan, no push, no zoom, no handheld, no shake.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same vehicle on the pad, same steam bank, same spectators — already alive, the engine already lit.

ACTION TIMING:
0.0–2.0s: ignition builds — the flame swells to a column, the steam bank erupts outward on both sides and rolls across the flats, light on the wet sand; the spectators stir and stand. The camera holds level. Sound: the rumble building to a roar.
2.0–6.0s: lift-off — the vehicle rises off the pad, clears the tower, climbs on its fire with the plume boiling beneath it; the camera begins to tilt up with it, holding it near centre; the spectators point and cheer, arms up, then slide out of the bottom of frame as the tilt rises. Sound: full launch roar, crackle, the shockwave rolling across the flats, cheers.
6.0–10.0s: the rocket climbs high, accelerating, its fire column and plume trailing down out of the bottom of frame; the camera keeps tilting to hold it near centre and eases to rest in the final second with the rocket high against open sky. No freeze-frame. Sound continues, the roar thinning with distance.

PHYSICS: the vehicle's mass reads as immense — it lifts slowly and accelerates truly; the steam and dust plumes billow with real volume and drift on one wind direction; the flame's light flickers on the plume and the wet sand; the spectators move with real weight. Nothing floats away, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — the roar carrying everything, crackle, wind, water, the crowd's cheers. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no readable words.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, a tilt up from a fixed tripod following the rocket, ending in a rest. The vehicle lifts and climbs high; the plumes are huge. Motion filmed, never stepped. No flicker beyond the flame, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
```

## Clip 6 · House · `eras-15-house` · 12s — the destination

The destination. Per Will (2026-09-06): the family talks and laughs, then a
very slow pan off toward the city. The About page holds the still, not
this clip's last frame.

```
1 continuous shot. Total 12 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

EVERYONE IS LIVE — CRITICAL: the family is in the middle of a real conversation. They talk, listen, gesture and laugh: the standing woman says something and laughs, the seated old man chuckles and shakes his head, the two young men turn to each other and grin, the guitarist plays and smiles, the girl on the steps looks up at them and laughs, the dog's tail wags. Every face is alive with expression, mouths moving with real speech, heads turning to whoever is speaking, hands gesturing. Nobody is frozen, nobody is a statue.

THE PAN IS VERY SLOW — CRITICAL: the camera holds on the porch for the first six seconds, then pans screen-right so slowly that the porch takes five full seconds to leave the left edge of the frame, and rests on the low sun, the dark trees and the small city skyline only in the final second. Slow, even, unhurried; never fast, never a whip, never a jump. Level throughout: no tilt, no push, no zoom, no handheld, no shake.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The porch, the steps, the figures, the dog, the bluebonnets, the setting sun and the distant city skyline are as painted; the sky stays open above. Late golden light throughout.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — same framing, same figures, same light — already alive, the conversation already going, the breeze already in the grass.

ACTION TIMING:
0.0–6.0s: the camera holds. The conversation — talking, laughing, gestures, the guitar strummed, the dog's tail wagging, the bluebonnets and dry grass swaying in a light breeze. Sound: warm overlapping conversation and laughter from the porch, low and indistinct, the guitar, cicadas, breeze.
6.0–11.0s: the very slow pan screen-right begins and continues evenly; the porch and the family slide gradually toward the left edge and out of frame, still talking and laughing, the sunset and the skyline coming to centre. Sound: the voices and guitar fading a little with distance, cicadas, breeze.
11.0–12.0s: the camera comes to rest on the sun, the trees and the skyline; the grass keeps moving in the breeze, the light holds. No freeze-frame. Sound continues.

PHYSICS: settled bodies with natural weight shifts, gestures with real arm mass, breeze-driven motion in grass, hair and cloth with natural lag. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, soft, continuous — the porch conversation and laughter low and indistinct with no readable words, the porch guitar quiet and unpolished as the only melodic sound, cicadas, breeze. No score, no added music beyond the guitar physically in frame, no swell, no drone, no rising tone, no added foley, no singing.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, a very slow pan screen-right after a six-second hold, ending in a rest on the skyline. Everyone alive throughout. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
```

## Repaired stills (Will, 2026-09-06)

Five frames go back through Higgsfield as image edits before they are
animated again, each with the original attached as the reference and the
instruction "recreate exactly, change only these things": Raising (ropes
from the top plate to the framers, woman and child turned toward the
house), Dance Hall (every couple one man and one woman, the strange object
between the right-hand pair removed), Charreada (charros in traje de
charro, crowd in ordinary clothes, no space-age outfits), Swang (chrome
thirty-spoke swangas on every wheel, the kids on the truck as believable
humans), Mind (the two men pinned behind the bench replaced by one engineer
standing on the floor). Model nano_banana_pro, 21:9, 2k. Will reviews the
stills before any of these five is animated again.

## About page clips (added 2026-09-06)

Six frames from the About handoff. Same skeleton, one camera move each, the
About page scrubs them with scroll. Choir uses the `eras-05-choir-b` variant
(piano at the right, as shown in the session).

## Clip 7 · Chip · `eras-04-chip` · 8s (About page)

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The lab bench, the man at the microscope, the green terminal, the blinds at the left throwing striped light across the bench, the big window with the water tower, the brick building and the cumulus outside, the second figure at the right — all keep their places. The camera never tilts and never pushes in.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — already alive, the man already at the eyepiece.

CAMERA: one slow motorized lateral truck moving screen-right, continuous for the whole 8 seconds, travelling about 6% of the frame width, never stopping. Level throughout: no tilt, no pan, no push, no zoom, no handheld, no shake. The bench and the blinds slide past a little faster than the window and the far buildings.

ACTION TIMING:
0.0–8.0s: the man works continuously — he adjusts the microscope focus with one hand, leans in to the eyepiece, sits back, writes a note, reaches for the mug and drinks, turns to the green terminal and types a line, leans back in; the striped light from the blinds lies across his shirt and the bench; the terminal's green display scrolls; the second figure at the right stands, picks up a folder and walks screen-right out of frame; outside, the cumulus clouds drift slowly screen-right and a bird crosses the far field; the camera trucks the whole time. No hold, no rest, no freeze-frame anywhere. Sound: the quiet of a lab — a ventilation hum, the microscope's stage click, pen on paper, keys, the terminal's faint whine, footsteps, a distant door.

PHYSICS: settled bodies with natural weight shifts, hands with real mass on the instrument, cloth with lag. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, quiet, continuous — hum, clicks, pen, the terminal, a distant door. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no voices.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One continuous camera move, no rest. Clouds drift screen-right. Motion filmed, never stepped. No flicker beyond the terminal, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
```

## Clip 8 · Choir · `eras-05-choir` · 8s (About page)

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

ONE RHYTHM — CRITICAL: one shared beat, about 100 beats per minute, runs through the whole room for the whole clip. Every clap in the building lands on that beat together; every sway of the choir crosses centre on that beat together; the director's arms mark it. The choir moves as one body, the congregation with it. Human variation is in the size of the motion, never in its timing — nobody is early, nobody is late, nobody is out of step. Warm, real, human bodies in a shared groove: never puppet-like, never cutout, never random, never stiff.

EVERYONE IS LIVE — CRITICAL: the whole church is singing. The robed choir on the platform sways together side to side and claps on the beat, mouths open in full song, faces lifted; the director at the right of the platform conducts with both arms; the pianist plays. The congregation in the foreground is on its feet — hands raised and swaying, heads nodding, hats moving, most clapping on the beat. Nobody is frozen, from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The platform, the cross, the great slanting beam of light from the upper left, the stained-glass panel at the right, the piano and the congregation all keep their places. The camera never tilts.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — already alive, the song already in full voice.

CAMERA: one slow motorized dolly push toward the platform, continuous for the whole 8 seconds, ending about 8% closer, never stopping. Level throughout: no tilt, no pan, no handheld, no shake, no zoom breathing. The foreground congregation slides past a little faster than the choir.

ACTION TIMING:
0.0–8.0s: the choir sways and claps on the shared beat, the director's arms marking it, the pianist's hands moving; fine dust turns slowly in the beam of light; the congregation sways and claps on the same beat, a woman in a white hat lifting both arms, a man in a pale suit clapping; the camera pushes in slowly the whole time. No hold, no rest, no freeze-frame anywhere. Sound: a massed gospel choir in full voice, the words indistinct, the piano under it, the whole room clapping on one beat, the room's reverb.

PHYSICS: bodies swaying with real weight and lag, arms with mass, robes swinging, dust drifting in the beam. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — the choir and piano physically in frame are the only music, the words indistinct with no readable lyrics, clapping, room reverb. No added score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One continuous camera move, no rest. One beat for the whole room. The beam of light holds its angle. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
```

## Clip 9 · Charreada · `eras-06-charreada` · 8s (About page)

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE RIDE — CRITICAL: the five escaramuza riders move as real riders on real horses. The horses trot screen-right in a tight line at a collected, high-stepping pace, hooves lifting and striking the arena dirt, heads nodding with the stride; the women sit sidesaddle, upright and still in the torso, their wide skirts — red, blue, orange, red, green — swinging and billowing with each stride and the horses' motion. Real animal anatomy, real weight, each horse on its own rhythm. Never puppet-like, never stiff, never sliding.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The white mission church at the left, the arena wall, the crowd along it, the tower on the far skyline, the trees and the small clouds at the right all keep their places; the riders travel screen-right across the arena. The camera never tilts.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — already alive, the horses mid-stride.

CAMERA: a camera car tracking alongside the riders at their own pace, level, moving screen-right, so the riders hold their place in frame while the arena and the far crowd slide past slowly. In the final 1.5 seconds the camera eases to a stop and the riders trot on ahead screen-right. No tilt, no pan, no handheld, no shake, no zoom.

ACTION TIMING:
0.0–6.5s: the five riders trot screen-right in line, skirts swinging, hooves kicking up small puffs of dust; the two charros on horseback at the left walk their horses; the crowd along the wall moves — waving, clapping, hats; the small clouds drift screen-right. Sound: hooves on packed dirt in a steady trot, tack jingling, the crowd applauding and calling out at a distance, a light wind.
6.5–8.0s: the camera eases to rest, and only the camera — the scene never pauses: the riders trot on screen-right, the crowd keeps moving. No freeze-frame. Sound continues unchanged.

PHYSICS: real weight scaled to the illustration — hooves striking and dust lifting, skirts trailing the motion with lag, the riders' bodies absorbing the trot. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — hooves, tack, the crowd at a distance, wind. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no readable words.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a rest. All motion screen-left to screen-right. Motion filmed, never stepped, never puppet-like. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
```

## Clip 10 · Dance Hall · `eras-08-dance-hall` · 8s (About page)

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

EVERYONE IS LIVE — CRITICAL: the whole floor is dancing. Every couple on the open-air floor is two-stepping and turning in time with the band — the men leading, the women's skirts flaring on the turns, boots sliding and stepping on the boards, long shadows swinging with them across the floor. The band on the stage plays: the fiddler bowing, the accordion player squeezing, the guitarist strumming. The people along the rail sway, talk and watch. Every body moves at its own timing inside the shared beat; nobody is frozen.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The pavilion roof, the string of lights, the stage and band, the rail, the hills and the sunset sky beyond all keep their places; the couples travel around the floor. The camera never tilts.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — already alive, the dance already in progress.

CAMERA: one slow motorized lateral truck moving screen-right, travelling about 5% of the frame width, easing to a complete stop for the final 1.5 seconds. Level throughout: no tilt, no pan, no push, no zoom, no handheld, no shake. The near couples slide past faster than the stage and the hills.

ACTION TIMING:
0.0–6.5s: the couples two-step and turn, moving counter-clockwise around the floor, skirts flaring, boots on the boards, shadows swinging; the band plays; the string lights sway a little in the evening breeze; the people at the rail sway and talk. Sound: a Texas dance-hall band in frame — fiddle, accordion, guitar — playing a two-step, the words indistinct, boots on wooden boards, talk and laughter along the rail, the evening breeze.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the dance and the band continue. No freeze-frame. Sound continues unchanged.

PHYSICS: dancers with real weight — steps that land, turns that carry momentum, skirts trailing with lag, shadows locked to the bodies. Nothing floats, nothing slides without stepping, nothing teleports.

AUDIO: fully diegetic, continuous — the band physically in frame is the only music, its words indistinct with no readable lyrics, boots, talk, laughter, breeze. No added score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a rest. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
```

## Clip 11 · Swang · `eras-09-swang` · 8s (About page)

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE ROLL — CRITICAL: the candy-painted cars roll slowly, the way a slab line rolls — walking pace, low to the ground, engines idling, the red car in front easing forward and swaying side to side on its suspension, its open trunk lid bouncing gently, the driver's arm out the window waving; the green, blue, purple and gold cars behind it creeping forward in line, wire wheels turning slowly, chrome catching the light. The kids standing on the truck bed at the right wave and cheer. Real car weight, real slow roll, real suspension sway.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The overpass, the downtown towers, the trees, the cumulus, the crowd at the left and the kids on the truck at the right keep their places; the cars roll slowly forward and screen-right along the street. The camera never tilts.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — already alive, the cars already creeping forward.

CAMERA: one slow motorized lateral truck moving screen-right, travelling about 5% of the frame width, easing to a complete stop for the final 1.5 seconds. Level throughout: no tilt, no pan, no push, no zoom, no handheld, no shake. The near cars slide past faster than the towers.

ACTION TIMING:
0.0–6.5s: the line of cars rolls slowly forward and screen-right, the red car swaying and dipping on its suspension, arms out of windows, the trunk lid nodding, wheels turning slowly; the kids on the truck wave and bounce; the crowd at the left waves; the clouds drift screen-right. Sound: low engines idling and rolling, tires on warm asphalt, deep muffled bass from the car stereos with no readable words, the kids cheering, a Houston afternoon breeze.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the cars keep rolling, the kids keep waving. No freeze-frame. Sound continues unchanged.

PHYSICS: two-ton cars with real mass — slow acceleration, suspension sway with lag, wheels that turn with the roll, shadows locked under the cars. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, continuous — engines, tires, the car stereos' muffled bass as the only music with no readable lyrics, kids cheering, breeze. No added score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a rest. The cars roll screen-right. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
```

## Clip 12 · Mind · `eras-12-mind` · 8s (About page)

```
1 continuous shot. Total 8 seconds, no cuts, no transitions. Real-time throughout, no slow motion, no speed ramp, no speed change.

Late-1980s corporate editorial magazine illustration. Flat graphic shapes, simplified environmental forms, clean silhouettes, minimal internal detail, soft airbrushed gradients, bold negative space. High contrast, restrained saturation. Heavy analog paper grain, matte print texture, subtle halftone dot pattern, slight color fading, minor ink imperfections. Looks like a scanned late-80s magazine illustration printed on porous matte stock.

The attached frame's own medium in motion: a scanned late-80s magazine illustration, gouache and airbrush, flat graphic shapes with clean silhouettes, heavy analog paper grain and coarse visible halftone over every area, sun-faded color, minor ink imperfections. The print itself is alive — the grain field stays fixed like a printed page while the scene moves beneath it. NOT photoreal, NOT a photograph, NOT live action, NOT a 3D render, NOT a different illustration style than the attached frame.

Technical: filmed motion, not drawn motion — the scene moves like live-action footage of real people, animals and weather seen through this print. Real-time 24fps live-action cadence, true 180-degree shutter, genuine motion blur on everything that moves, every frame a distinct moment blending smoothly into the next. Never animated on twos, no held frames, no duplicated frames, no hand-drawn or cel-animation cadence, no frame interpolation, no ghosting, no warping.

NO ON-SCREEN TEXT — CRITICAL: no on-screen text of any kind anywhere in frame at any point. No captions, no subtitles, no titles, no watermarks, no logos, no UI overlays. The frame is clean of all overlay graphics from first frame to last.

THE COMPOSITION HOLDS — CRITICAL: this clip is the attached frame in motion. The white lab, the two cream humanoid robots, the shelving unit, the crate, the kneeling engineer with the laptop, the two engineers at the terminals, the older man in the cowboy hat leaning against the bench at the right with his arms crossed, the glowing lamp at the left — all keep their places. The camera never tilts.

FIRST FRAME: open on the attached still exactly, pixel for pixel, at frame one — already alive, the room already at work.

CAMERA: one slow motorized dolly push toward the centre of the lab, ending about 8% closer, easing to a complete stop for the final 1.5 seconds. Level throughout: no tilt, no pan, no handheld, no shake, no zoom breathing.

ACTION TIMING:
0.0–6.5s: the standing robot at the left turns its head slowly toward the shelving, lifts one arm and takes a single careful step, servos moving with mechanical precision; the robot at the centre stands at its rig and flexes its fingers, its visor glowing; the kneeling engineer types and looks up at the robot; the two engineers at the terminals lean in and point at a screen; the man in the hat watches, shifts his weight, uncrosses and recrosses his arms; the lamp glows steadily. Sound: a quiet lab — servo whine and clicks from the robots, keyboard keys, a ventilation hum, a chair creak, two low voices in conversation with no readable words.
6.5–8.0s: the camera comes to rest, and only the camera — the scene never pauses: the robot completes its step and settles, the engineers keep working, the man keeps watching. No freeze-frame. Sound continues unchanged.

PHYSICS: the robots move with real mechanical mass — deliberate, balanced steps, joints that settle; the humans with natural weight shifts and cloth lag. Nothing floats, nothing slides, nothing teleports.

AUDIO: fully diegetic, quiet, continuous — servos, keys, hum, chair, low indistinct voices. No music, no score, no swell, no drone, no rising tone, no added foley beyond what is physically in frame, no readable words.

LOCKS: the attached frame's palette, medium, halftone and paper grain hold in every frame of motion. One camera move, ending in a rest. Motion filmed, never stepped. No flicker, no boiling lines, no morphing.

Negative prompts: no photorealism, no shallow depth of field, no close-up, no CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art sheen, no duplicated figures, no distorted hands. Seen on earlier takes, now banned: no cel animation, no animation on twos, no stepped or stuttering motion, no held frames, no freeze-frame ending, no scene that stops when the camera stops, no puppet-like or cutout figures, no rigid limbs, no figures sliding without stepping.
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

### v3 · all five · 2026-09-06 · Ultra account · 378 credits

Jobs: Range `7e099b20`, Gusher `e161d48b`, Raising `4612f643`, Launch
`d9e89212` (10s), House `5d92111d`. Boom stands from the Plus account
(`cca99279`). Frames re-uploaded to Ultra as start images only.

| Clip | Stepping | Hold (s7, s8) | What came back |
|---|---|---|---|
| Range | 0.06 | 3.3, 3.4 alive | Opens close on the riders, big and galloping like film, and pulls back to the painted wide by the end. Reverse of the brief's start, but the Western read is there. Four riders, horizon held. |
| Gusher | 0.20 | 8.4, 7.4 alive | A huge black arc of oil leaning screen-right and raining down; crew waving arms. Horizon and foreground held. |
| Raising | 0.27 | 2.3, 1.8 near-still | The wall starts low and is pushed up to plumb over four seconds — the raising, finally. Wind reads. Scene goes still once the wall stands; trim to 6.5s in the edit or retake with the wind carrying the end. |
| Launch | 0.11 | climbing to the end | Lift-off with huge plumes, the rocket rising through the frame under a slow tilt, spectators kept in the bottom of frame. |
| House | 0.03 | 12.2, 2.7 alive | Pan screen-right off the porch, ending on the sun and skyline. Conversation to be judged by eye. |

Delivered to Will for review 2026-09-06. Frames not in the homepage cut
(Chip, Choir a/b, Charreada, Dance Hall, Swang, Wafer, Mind, the second
House) are in `brand/inbox/` and `~/Downloads`; they belong to the About
and program pages per the handoff and have no clips yet.

### v4 retakes and About first takes · 2026-09-06 · Ultra · 774 credits

| Clip | Job | Stepping | Ending | What came back |
|---|---|---|---|---|
| Gusher v4 | `058f0384` | 0.06 | alive | A vertical black fountain raining down in a full dome around the derrick, crew arms up from frame one, horizon held. Will's note answered. |
| Raising v4 | `567e03fc` | 0.11 | goes still | The wall rises low to plumb again, but **no ropes** and the woman and child still face the camera. The start still overrides the prompt on both. Needs a repaired still (ropes tied to the top plate, woman and child turned to the house) before another take. |
| Launch v4 | `7f7625ec` | 0.12 | alive | Lift-off, camera tilts from a fixed position, spectators drop out, ends on the rocket high against sky. The rocket rides near the top of frame rather than centre. |
| House v4 | `3d225d18` | 0.04 | alive | Holds about three seconds, then a slow pan over eight seconds to the sun and skyline. Slower than v3; the hold is shorter than asked. |
| Chip | `81341c3a` | **0.64** | freezes | On twos. Small motion, the man works at the scope. |
| Choir | `734a6974` | **0.64** | freezes | On twos. Congregation and choir move a little. |
| Charreada | `6b6f816a` | 0.07 | freezes last 1.5s | Riders trot screen-right in line, skirts swing, crowd moves. Good. |
| Dance Hall | `d6a489f2` | 0.09 | freezes last 3s | Couples turn, band plays. The rest beat froze the whole floor. |
| Swang | `99e5dd21` | **0.70** | freezes | On twos, but the red car rolls forward and right, arms out, kids wave. |
| Mind | `403aa7f4` | 0.22 | alive | The left robot steps forward, engineers work, the man in the hat shifts. Quiet but filmed. |

Two patterns: quiet scenes come back on twos (Chip, Choir, Swang), and
the "camera comes to rest" beat freezes the whole scene in the About clips.
Fixes to carry: drop the rest beat from the About clips (they are
scroll-scrubbed, no hold needed) and run one continuous move; for on-twos
results, test a motion-interpolation pass in post before spending on
retakes.

### v5 redos and repaired stills · 2026-09-06 · Ultra

Stills (nano_banana_pro, 21:9, 3168×1344, each with the original as
reference): Raising `38d00294` (ropes from the top plate to three men
hauling, wall mid-raise, woman and child turned to the house — answered),
Dance Hall `ab6706d0` (couples mostly man and woman, the object between
the right pair gone; one pair near the stage still reads as two women),
Charreada `cc715257` (charros in traje de charro, crowd ordinary —
answered), Swang `c6a6c160` (swangas on every wheel, kids natural —
answered), Mind `ca84a591` (one engineer with a clipboard on the floor,
man in the hat leaning — answered). All sent to Will for review; none
animated yet.

Videos: Gusher v5 `38a34467` (stepping 0.03), Launch v5 `87b4de66` (0.09),
Choir v2 `c04d4191` (0.14, no freeze, continuous push), Chip v2 `74593a78`
(0.14, no freeze, continuous truck). The on-twos cadence on Choir and Chip
was cured by removing the rest beat and giving every figure continuous
action.

### Swang still, second pass · 2026-09-06

First pass read as cartoonish to Will (blades good). Second pass reused the
original as the only reference and put the finish first in the prompt:
the original's semi-photographic softness, heavy grain and halftone, with
cartoon, cel-shading, vector and clean digital painting banned. Three
variants, jobs `47b82afe` (A), `f70d6ca2` (B), `6dff2385` (C). All three
keep the original's grain and the swangas; A and C put two big kids in the
foreground of the truck bed, C keeps the whole group. Will picks.

### Swang still, third pass · 2026-09-06

Will chose variant A but the kids stood on a barbecue grill. Third pass
used A (`47b82afe`) as the only reference and swapped the grill for a
pickup bed: `613f0c56` (silver pickup, kids in the bed, the second half of
the group behind) and `7690b71b` (a cream 1960s pickup filling the right
foreground, kids in its bed). Will picks.

### Swang still, fourth pass · 2026-09-06

The pickup-bed takes read as wrong in proportion. Will asked for variant A
with the kids simply removed. Jobs `1bd41816` and `dce16e31`, A as the only
reference, the right edge continued as tree line and ground, the crowd at
the left kept. Will picks.

### Swang still, fifth pass · 2026-09-06

The no-kids takes carried a flat horizontal cut across the tree tops at
the right, inherited from the Midjourney original's pasted strip. Fifth
pass used the first no-kids take (`1bd41816`) as the only reference and
asked for rounded live-oak canopies against continuous sky. Jobs
`4b3feaf4` and `e686c277`. Will picks.

### 2026-09-06 evening · shorter clips, repaired-still animations, more stills

Will's calls: Swang still second take (`e686c277`) chosen, then revised
again for blades on both sides and open rear wheel wells (`d20f7bfc`,
`842c03aa`, Will to pick). Chip is done. Mind, Charreada and Dance Hall
stills approved. Raising still redone with the wall leaning forward
(`e2de33ad`, `e290bf5c`); both came back with the men pushing by hand
again, ropes dropped, Will to judge. Clips now run 6 seconds (54 credits).

Videos this round, all 6s, no rest beat: Charreada v2 `080a8cab` (0.15,
good), Mind v2 `3eea0ac1` (0.17, good), Dance Hall v2 `285a52d4` (stepping
1.62, under investigation), Swang v2 `f9d0e442` (0.22, from the one-sided
still, to be redone from the chosen still), Gusher v6 `9b89687f`
(**failed**: thin drip of oil, camera zoomed in, stick-figure crew; the
"out of the top of the frame" beat broke it). Gusher v7 `4841eb7c`
submitted on the v5 structure plus the human-crew block and a 30% zoom
out, with "no zoom in" and "no thin dribble" in the scar line.

Gusher v7 `4841eb7c` (6s, stepping 0.07): oil out of the crown block,
camera pulls back, but the column arcs to one side instead of standing
vertical and the crew stay tiny silhouettes with arms up. The crew problem
is the still's scale: at this distance the men are a few dozen pixels and
no prompt makes them read as celebrating humans. Best oil so far remains
v5 `38a34467` (the vertical dome). Recommendation to Will: a repaired
Gusher still with the crew brought forward and larger, then one more
take. Dance Hall v2 measured on twos (frame diffs alternating 15 / 1.5);
v3 `e2aa427f` resubmitted with the same prompt.

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

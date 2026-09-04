# Texas House Visual Language

Working standard, v1. September 2026. This file lives in the site repo as
`brand/VISUAL_LANGUAGE.md` so Claude Code reads it before generating or
placing any imagery. The fixed prompt blocks are also kept as plain text in
`brand/prompts/` so they are copied verbatim, never retyped. Renders land in
`public/brand/` under the naming convention in section 7.

## 1. The universe

Texas, illustrated by a 1987 magazine that could see the future.

Every image is a page from that magazine. The world is wide, calm, and warm.
The subject is always small inside a big Texas. Late afternoon light. Printed
on matte paper. The future is present but never loud: a robot in a Stetson, a
bobcat in orbit, a trader in a glass tower. Texas details are small and
specific, never costume.

Two layers. The world is permanent. The story rotates.

- World: render style, texture, light, composition, color logic, frame rules.
  Never changes.
- Story: theme, setting, wardrobe, props, cast. Changes per campaign. Racing,
  Yall Street, Innovation Day, DC Welcome are all issues of the same magazine.

Rule: any new character or scene for any theme is rendered in the world. No
exceptions.

## 2. Color language

We describe color in words, not codes. The palette is one family that shifts
by setting. Sample hex values from approved renders later for code only.

The family: cobalt, dusty peach, warm amber, terracotta, dusty rose, muted
purple shadow, charcoal, cream, warm off-white paper.

Core rule: one warm against one cool. Every image has a warm subject or light
source set against a cool field, or a cool subject against a warm field. The
mariachi worked because maroon sat against metallic blue. The bluebonnets work
because cobalt flowers sit under amber light. Never all warm. Never all cool.

Three settings, three shifts of the same family:

**Land** (Hill Country, Big Bend, prairie, coast). Warm dominant. Amber golden
hour light, terracotta and dusty rose earth, sage and olive greens for oaks and
grass, cobalt and periwinkle for bluebonnets and sky, cream clouds, muted
purple in shadow. This is the Ghibli register.

**Institution** (offices, trading floors, towers, halls, Capitol). Balanced.
Cobalt sky through glass, dusty peach and amber lamplight on interiors,
charcoal furniture and steel, cream paper and documents, muted purple shadow.
Warm accent lives in wood, brass, light, and skin. Cool lives in glass and sky.

**Orbit** (spacecraft, stations, deep space, the future). Cool dominant. Indigo
and near black space, cobalt atmospheric glow, charcoal and silver interiors,
cream highlights. Warm accent is mandatory and single: maroon, amber,
terracotta on one figure, one object, or one light. Without it the image goes
dead.

Texture colors, always: warm off-white paper base, slight fade as if sun aged,
ink slightly imperfect.

## 3. Prompt architecture

Every prompt is five blocks assembled in this order. Blocks 1, 2, and 5 are
fixed and copied verbatim (see `brand/prompts/`). Block 3 is picked by tier.
Block 4 is written fresh.

### Block 1. Style (fixed)

Late-1980s corporate editorial magazine illustration. Flat graphic shapes,
simplified environmental forms, clean silhouettes, minimal internal detail,
soft airbrushed gradients, bold negative space. High contrast, restrained
saturation.

### Block 2. Texture (fixed)

Heavy analog paper grain, matte print texture, subtle halftone dot pattern,
slight color fading, minor ink imperfections. Looks like a scanned late-80s
magazine illustration printed on porous matte stock.

### Block 3. Composition (pick one)

**Landscape tier, no figure:** Wide panoramic composition. Strong foreground,
midground, and background separation. Layered depth from near grasses or rock
to distant haze. Enormous sky occupying the upper half as negative space for
type. Warm late-afternoon Texas light, long soft shadows.

**Scene tier, one figure or animal:** Extreme wide shot, long shot
composition. Camera pulled far back. Subject appears small in frame,
environment dominates. Centered or slightly off-center. Strong foreground,
midground, and background separation. Balanced horizontal negative space
suitable for banner layout. Warm late-afternoon light, long soft shadows. Deep
focus, everything clearly visible.

**Crowd tier, many figures:** Wide composition, elevated vantage. Figures
simplified and abstracted into confident silhouettes, subtle motion suggested,
no individual identity. Bold graphic shapes punctuate the scene. Architecture
towers above. Strong negative space in the upper frame.

### Block 4. Story (variable)

Write it fresh each time. Order: subject, then wardrobe or form, then posture
and action, then setting, then Texas detail, then the color note.

- Subject: who or what, scaled correctly. Say human-scale, true proportions.
- Wardrobe or form: for people, tailored and period correct with one subtle
  Western element. For machines, simplified late-80s geometry, smooth panels,
  visible joints. For animals, accurate anatomy, not anthropomorphized.
- Posture: relaxed, confident, contemplative. Nobody is in crisis.
- Setting: name the place. Dallas skyline. Chisos Mountains. Space station
  cabin. Capitol rotunda.
- Texas detail: one or two. Stetson. Bolo tie. Boots. Bluebonnets. Live oak.
  Roadrunner. Bobcat. Never more than two.
- Color note: name the setting register (Land, Institution, Orbit) and the
  single warm accent.

Keep block 4 under 120 words. Longer story blocks fight the style blocks.

### Block 5. Negative (fixed)

Negative prompts: no photorealism, no shallow depth of field, no close-up, no
CGI gloss, no HDR, no cinematic lens flare, no neon, no cyberpunk, no readable
text, no logos, no modern UI overlays, no hyper-detailed chrome, no AI art
sheen, no duplicated figures, no distorted hands.

### Tool parameters

Midjourney: `--ar 21:9` for hero and banner, `--ar 16:9` standard, `--ar 4:5`
vertical cards. Use `--style raw`. Stylize moderate, 100 to 250. Lock a
`--sref` from the four best approved editorial pieces and reuse it on every
prompt. Do not use personalization unless it was part of the original set.

Higgsfield: reference image first, always. Attach the approved Midjourney
original. Shorten the prompt to blocks 1, 4, and 5. Higgsfield follows the
reference for style and the text for changes. Use it for batch variants,
format adaptation, and image to video.

## 4. Example assembled prompts

**Landscape, Land register**

[Block 1] [Block 2] [Landscape composition] Rolling Texas Hill Country, dense
bluebonnets in the foreground running in loose rows toward a dirt two-track,
live oaks on the ridge, small town and water tower in far distance under haze.
Towering cumulus clouds catching pink and amber. Land register: amber light,
cobalt flowers, sage oaks, cream clouds, muted purple shadow. [Block 5]
`--ar 21:9 --style raw --sref [code]`

**Scene, Orbit register**

[Block 1] [Block 2] [Scene composition] A human-scale humanoid robot with
simplified late-80s panel geometry sits at a small metal table inside an
industrial space station cabin, pouring coffee from a steel pot into a tin cup.
It wears a classic felt Stetson. Riveted panels, handrails, cable runs. A
panoramic window fills the back wall with the curve of Earth and the Gulf
coast of Texas visible below. Orbit register: indigo space, cobalt atmosphere,
charcoal interior, single warm accent in the amber cup and hat. [Block 5]
`--ar 16:9 --style raw --sref [code]`

**Crowd, Institution register**

[Block 1] [Block 2] [Crowd composition] The floor of a Texas stock exchange at
the closing bell. Traders in tailored suits with Stetsons, bolo ties, and boots
move as abstracted silhouettes across a marble floor. Curved desks, layered
ticker boards glowing as blocks of color. High coffered ceiling. Institution
register: cobalt board light, amber pendant lamps, charcoal suits, cream
marble. [Block 5] `--ar 21:9 --style raw --sref [code]`

## 5. Asset briefs for the site

Priority order: hero globe, scroll video, footer globes, footer bluebonnets,
then program page originals.

### 5.1 Hero globe

What it is: the brand object. A globe wearing a Stetson. Emblem energy, not
scene energy. It should feel like a crest that could sit on a jacket or a
letterhead, and also spin on the homepage.

Description language, use identically everywhere the globe appears:

A globe rendered as a simplified graphic sphere with flat continents as clean
shapes, no country borders, North America facing forward with Texas centered.
A classic felt Stetson sits on top, tilted slightly forward, brim casting a
soft shadow across the northern hemisphere. Thick even ink outline. Two-tone
plus paper: cobalt ocean, cream land, amber hat. Vintage crest proportions,
symmetrical, bold silhouette that reads at any size. Late-80s editorial
finish: flat airbrushed gradients, halftone, paper grain.

Production:

1. Midjourney concept sheet. Four angles, same prompt, pick one. This is the
   reference for everything below.
2. Vectorize the pick or redraw it clean. This becomes the flat mark for
   favicon, social, footer.
3. Build the 3D version in React Three Fiber: low-poly sphere, painted flat
   continent texture from the approved concept, Stetson mesh from Blender as
   Draco GLB, under 500KB total. Toon shading, two or three bands, warm key
   from upper left. Post-process: halftone dot screen, paper grain, slight
   fade, brief RGB chromatic aberration on load that settles.
4. Motion: eased spin-up on load, two seconds, into slow idle rotation. Drag
   to rotate. Subtle tilt on scroll. Static fallback for reduced motion and no
   WebGL.
5. Sample the final palette values from the approved concept for the token
   file.

### 5.2 Footer globes

Two globes side by side, one showing the Americas, one showing Europe and
Africa or Asia. Same object as the hero, no new generation. Render the 3D
model flat at two rotations, or use the vectorized mark at two rotations.
Single color plus paper is fine here. They must be recognizably the hero globe
at small size. If they need their own prompt for any reason, use the hero
globe description above word for word and add: "small icon scale, single ink
color on paper, two globes side by side at different rotations."

### 5.3 Scroll video: cowboys to orbit

The story: Texas moving through its eras as you scroll. Cowboys, ranchers,
oilmen, Yall Street, outer space.

The trick that makes it one piece: the color register carries the story. The
video begins fully Land and ends fully Orbit. Amber and terracotta at the
start drain toward indigo and cobalt at the end. The horizon line stays at the
same height in every chapter. The light stays late afternoon until the last
chapter, where the sun becomes Earth glow. The viewer feels time pass without
a cut announcing it.

Five chapters, one Midjourney keyframe each, Scene tier, all `--ar 21:9`:

1. Cowboys. Open range at golden hour, a single rider small in frame,
   longhorns as distant silhouettes, Land register at its warmest.
2. Ranchers. Windmill, barbed wire fence line, a pickup and a rancher at a
   gate, mesquite, first hint of a town on the horizon. Still Land, slightly
   less saturated.
3. Oilmen. A derrick field at dusk, one figure in a hard hat and boots, the
   sky shifting toward dusty peach and muted purple, a refinery glow. Land
   moving toward Institution.
4. Yall Street. Dallas skyline in glass, a trader with a Stetson seen from
   behind through a high window, cobalt sky, amber interior light.
   Institution register.
5. Orbit. The same horizon line is now the curve of Earth from a station
   window, Texas visible below, one figure in a Stetson at the glass. Orbit
   register, single warm accent.

Production:

1. Generate all five keyframes in Midjourney with the same sref, same block 3,
   same aspect. Iterate until the horizon lines and light match when laid
   side by side.
2. In Higgsfield, image to video each keyframe. Three to five seconds. Slow
   push in or slow lateral drift. Minimal subject motion: grass, dust, flags,
   a slow turn of the head. No camera moves that break the horizon.
3. Bridge chapters in Higgsfield with first and last frame transitions where
   supported, or in the edit with a slow dissolve on matched horizons.
4. Export as an image sequence, not a single mp4. 24fps, 150 to 250 frames
   total. Scroll scrubbing an mp4 stutters. A WebP or AVIF frame sequence
   driven by scroll position is smooth and works on mobile.
5. In code, map scroll progress to frame index. Preload the sequence in
   chunks. Provide a static poster for reduced motion.

### 5.4 Footer bluebonnets

The existing Hill Country landscape re-rendered in the editorial style,
Landscape tier, `--ar 21:9`, sky in the upper half for the footer content to
sit on. Use the Landscape example prompt in section 4.

Motion: two options, use both if time allows.

1. Parallax layers in code. Generate the same scene three times in Higgsfield
   from the approved original: sky only, midground hills and oaks, foreground
   bluebonnets on transparent or keyed background. Scroll drives the layers at
   different speeds. Cheap, sharp, matches the page exactly.
2. A subtle Higgsfield sway loop of the foreground flowers, six to eight
   seconds, triggered when the footer enters the viewport. Layer it over the
   parallax foreground.

Option 1 alone is enough for launch.

## 6. Frame rules

- Hero and full-bleed sections: no frame. Paper grain and halftone are the
  frame.
- Cards, program tiles, and inline editorial images: thin aged paper edge,
  slightly irregular, warm off-white.
- Video and cinematic pieces: letterbox bars, deep charcoal not pure black.
- Social and print: aged paper edge.

## 7. Production pipeline

1. Concept in Midjourney. Assemble the five blocks, run four to eight
   variants, pick one. Nothing goes to Higgsfield without an approved
   Midjourney original.
2. Reproduce and animate in Higgsfield. Reference image attached, shortened
   prompt. Batch variants, format adaptations, image to video, layer
   separation.
3. Build in code. Interactive brand objects (globe, scroll sequence, parallax)
   live in React Three Fiber and Next.js. Shared with the OS repo.
4. Sample color. Once the first six to eight renders are approved, pull hex
   values from them for the token file. Code follows imagery, not the reverse.

Claude Code and Higgsfield, settled 4 September 2026. We generate together
through the **Higgsfield MCP connector in Claude Code**, which exposes
`models_explore`, `generate_image`, `generate_image_batch`, `upscale_image`,
`generate_video`, `jobs_wait`, `media_upload`, `media_import_url`,
`show_generations`, `show_medias`, `show_reference_elements`, and workspace
selection. Nothing is auto-uploaded to the website. The loop:

1. Claude Code assembles the five blocks (fixed blocks from
   `brand/prompts/`, block 4 written per asset) and calls `generate_image`
   with the approved reference attached; batches for variants; `upscale_image`
   for finals; `generate_video` for the sequence and loops.
2. We refine together in the conversation until the render is right.
3. Claude Code pulls the approved output and files it with
   `npm run hf -- intake <url> --tier … --register … --subject … --ar …`,
   which renames to the convention, saves to `public/brand/`, and logs the
   prompt in `brand/renders.md`.
4. Claude Code places it on the site: optimization, responsive sizes, the
   parallax layers, the scroll sequence, the globe.

Note: the connector's tool set is registered per session. A session where the
connector reconnected can show only its website-builder tools; start a fresh
session or reconnect the connector before generating. `scripts/higgsfield.mjs`
also carries direct API commands (`estimate`, `generate`, `video`, `upload`,
key in `.env`) as a fallback for batch runs.

Naming: `tier-register-subject-aspect-v#.ext`. Example:
`scene-orbit-robot-coffee-21x9-v2.png`. Sequences: `seq-eras-0001.webp`
through `seq-eras-0240.webp`.

## 8. Test renders before any site asset

Prove the system holds across tiers and registers before production.

1. Landscape, Land: Hill Country bluebonnets (footer candidate)
2. Landscape, Land: Big Bend canyon with roadrunner
3. Scene, Institution: trader at the Dallas window
4. Scene, Orbit: robot pouring coffee on the station
5. Scene, Land: cowboy rider on open range (scroll chapter 1)
6. Crowd, Institution: exchange floor at the bell
7. Emblem: hero globe concept sheet
8. Scene, Orbit: figure at the glass with Texas below (scroll chapter 5)

Lay all eight side by side. If they read as one publication, the language is
locked. If any one breaks, fix the block, not the image.

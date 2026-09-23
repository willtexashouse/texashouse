# Texas House COTA Anime Campaign: Project Handoff

Owner: Will Herrmann, Texas House. Status: Style locked in principle. First
character (the Driver) not yet generated successfully. This file supersedes
COTA_ANIME_STYLE.md (v1 and v2). Parts of v2 were wrong. See "Corrections."

## 1. What We Are Making
A one-off Texas House campaign for F1 week at Circuit of the Americas. Rodeo
meets Formula 1. Social posts, event screens, merch, short-form video.

The visual world is modeled on the anime film *Sturgill Simpson Presents:
Sound & Fury* (Netflix, 2019). Animation by Kamikaze Douga. Character design
by Takashi Okazaki. Directed by Jumpei Mizusaki.

This is a campaign style, not the Texas House house style. The house style
stays 1987 corporate editorial illustration. Nothing from this campaign goes
into the OS or texashouse.org.

## 2. Immediate Task
Generate the first character: the Driver. One portrait first. Then a
turnaround so the face holds from every angle. Use ref-01 as a style
reference in Higgsfield.

## 3. The Style (v3, based on real frames)
The one-line rule: a hand-drawn character, filmed like a movie. The drawing
stays flat and inked. The camera does the drama.

The drawing: fine, fairly even ink line, not thick brush strokes. Detail from
scratchy hatching (knuckles, fingers, hair strands, fabric folds, armor wear).
Hands long and bony, drawn with more detail than the face. Faces: long oval,
pointed chin, thin arched brows as single lines, nose barely indicated, full
lips with a hard lip line, teeth drawn individually. Anatomy long, lean,
sinewy, pushed past realistic.

The shading: hard-edged two-tone cel shadows, no soft gradients on
characters. Shadows take the scene's color (maroon, brown, olive). True black
only in the deepest areas.

The color: each scene sits under one strong color grade. ref-01: amber, burnt
orange, sepia; skin peach-gold. ref-02: near-black olive green with electric
cyan and acid yellow-green rim light, orange-red glowing eyes.

The camera layer (satsuei): strong backlight and rim light; bloom and glow
around bright edges; the sun a soft blown-out orb; chromatic aberration on
outlines; heavy vignette; shallow depth of field; soft film or VHS texture.

Composition: close, dramatic framing; dashboard POV in ref-01; foreground
objects cut across the frame; hands pushed toward camera; wide-lens
distortion.

Motion (for video later): limited animation, held poses then snappy moves;
feels animated on twos or threes; impact frames, smears, speed lines.

## 4. Vocabulary
Use: hand-drawn 2D anime, Japanese anime film still, 1990s OVA anime
aesthetic, fine ink linework, scratchy hatching, hard-edged cel shadows,
shadows tinted [color], color grade, backlight, rim light, bloom, halation,
chromatic aberration, vignette, shallow depth of field, soft film grain.

Avoid: 3D render, CGI, cel-shaded 3D, glossy, photoreal, plastic skin,
realistic skin, Unreal, Octane, hyper-detailed, 8K, big sparkly anime eyes,
chibi, pin-up. Watch: "beautiful" alone pulls toward a stock AI face; pair it
with specific drawn features.

## 5. Corrections to Earlier Versions
v2 said near-monochrome black and paper white (wrong: each scene has a strong
color grade); banned cinematic lighting, bokeh and depth of field (wrong:
core to the look); said thick brush line and ukiyo-e flat planes (wrong: fine
line plus hatching).

## 6. The Driver (Character Spec)
Adult woman, late twenties. Texas House Racing Team driver. Full, voluminous
blonde hair in loose waves. Soft oval face, delicate pointed chin, thin
arched brows, long dark lashes, pale gray-blue eyes, full lips. Feminine,
beautiful, confident; warm and easy, not aggressive. Signature details:
aviator sunglasses pushed up in her hair, small silver Lone Star pendant,
fingerless leather driving gloves. Wardrobe: oxblood racing suit or jacket,
black collar, white accents (see ref-03 for the real suit). Sponsor logos are
added in post, never generated.

The reveal beat: helmet comes off, hair falls, it is a woman. We can use the
beat; we cannot use the film's design. Helmet idea: modern full-face racing
helmet in our colors with a kabuto-style crest shaped as a Lone Star.

## 7. Prompts
A. Higgsfield first portrait (with ref-01 as reference image). Model
`nano_banana_pro`, role `image_references`, 3:2, 2K.

> Use the reference image for art style only: fine ink linework with scratchy
> hatching, hard-edged cel shading, hand-drawn 2D Japanese anime look, soft
> bloom and glow on bright edges, subtle chromatic aberration on outlines,
> light vignette, soft film grain. Do not copy the character's face, hair,
> accessories, or forehead markings.
>
> New scene: a beautiful woman in her late twenties sits relaxed behind the
> wheel of a classic car on a bright, clear, beautiful day. Full, voluminous
> blonde hair in loose waves, catching the breeze through the open window.
> Soft oval face, delicate pointed chin, thin arched brows, long dark lashes,
> pale gray-blue eyes, full lips, warm easy smile. Aviator sunglasses pushed
> up into her hair. Fingerless leather driving gloves. Oxblood racing jacket
> open at the collar over a white top, small silver Lone Star pendant. One
> elbow resting on the open window. Calm, happy, unhurried. No one else in
> the car.
>
> Light and color: warm golden late-morning sunlight, clear blue sky with
> soft white clouds through the windshield, Texas Hill Country road outside.
> Shadows stay hard-edged but warm and light, tinted soft rose and amber
> instead of black. Brighter and airier than the reference, same drawn
> texture.
>
> Camera: dashboard POV, steering wheel in the foreground, slight wide-lens
> feel, background softly out of focus.

B. Midjourney turnaround set. Run the front view first, lock the face, use
it as a character reference for the rest; keep ref-01 and ref-02 on `--sref`.

Shared character text: `adult woman race car driver, full voluminous blonde
hair in loose waves, soft oval face, delicate pointed chin, thin elegant
arched brows, long dark lashes, almond eyes with pale gray-blue irises, full
soft lips, slender graceful neck, aviator sunglasses pushed up in her hair,
small silver Lone Star pendant on a thin chain, oxblood racing suit unzipped
to the collarbone`

Shared style tail: `fine ink linework with light hatching, hard-edged cel
shadows tinted warm rose and amber, golden daylight color grade, warm rim
light, soft bloom and halation, subtle chromatic aberration, soft film grain,
1990s OVA anime aesthetic --niji 6 --style raw --no 3D render, CGI, glossy,
photoreal, plastic skin, big sparkly eyes, chibi, pin-up`

Angle openers (before the character text, `--ar` at the end):
1. Front: `hand-drawn 2D anime close-up portrait, front view, looking straight at camera, faint knowing smile,` `--ar 4:5`
2. Three-quarter: `hand-drawn 2D anime close-up portrait, three-quarter view, head turned slightly left, eyes cutting back toward camera,` `--ar 4:5`
3. Profile: `hand-drawn 2D anime close-up portrait, clean side profile facing right, chin slightly raised, hair lifting in the wind, sun behind her outlining the profile,` `--ar 4:5`
4. Low angle: `hand-drawn 2D anime close-up, low angle looking up at her face, she looks down at camera with half-lidded eyes, bright sky behind her,` `--ar 4:5`
5. Turnaround sheet: `character turnaround sheet, same woman in four views side by side: front, three-quarter, side profile, three-quarter back, plain warm backdrop,` `--ar 16:9`

If the face goes generic, cut words; remove "small refined nose" and "high
cheekbones" type phrases first.

## 8. Higgsfield Technical Notes
Composio MCP, toolkit `higgsfield_mcp`. Accounts: Strategy + Will (default)
and pollen.media. Local files must be uploaded first to get a media_id
(`media_upload` → PUT bytes → `media_confirm`); pass the media_id in
`medias[].value`, never a URL. `nano_banana_pro` is best for reference-guided
style; `gpt_image_2_5` needs `quality` high or above; `soul_2` is realistic
portraits, wrong for this style. Batch with `generate_image_batch`, poll with
`jobs_wait` (15 s max), then `show_generation_by_ids`. Always check results
visually before reporting back.

## 9. What Failed So Far (Do Not Repeat)
1. Text-only generation on `gpt_image_2` at default low quality with
   "cel-shaded 3D anime, cinematic, beautiful" language: glossy AI slop.
2. Describing the style from reviews instead of real frames.
3. Passing a chat attachment to Higgsfield; the connector cannot read chat
   files.

## 10. Guardrails
Film stills are style references for internal work only; they never ship.
Do not recreate the film's characters, the ampersand helmet crest, the
swords, the car, or recognizable shots. Our Driver must not share the film
driver's signature combination: forehead dots, slicked-back hair, aviators
worn on the face, taped fingers. No artist names in prompts. No official F1
marks, team liveries, or real driver likenesses unless licensed. Sponsor
logos composited in post only.

## 11. Next Steps
1. Upload ref-01 to Higgsfield. Run prompt 7A on Nano Banana Pro, 2K, 2–4 variants.
2. Will picks one face.
3. Build the turnaround from that face (7B).
4. Lock the Driver as a reusable character.
5. Then: the helmet reveal shot, the car, COTA at golden hour, the Rider.

Files (git-ignored, `brand/inbox/cota-anime/refs/`): ref-01-driver-sunset.png
(primary style reference), ref-02-armor-neon.png (armor language, neon rim
light), ref-03-racing-suit-livery.png (the real Texas House racing suit and
sponsor layout).

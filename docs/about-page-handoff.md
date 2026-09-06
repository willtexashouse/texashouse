# Texas House About Page
## Claude Code implementation handoff

September 2026. Read `brand/VISUAL_LANGUAGE.md` and `brand/ERAS_HANDOFF.md` first. This document depends on both.

> Filed 2026-09-06 from Will's paste in the Claude Code session. As of filing,
> `brand/ERAS_HANDOFF.md` is not yet in the repo and the eras stills are not
> yet in `public/brand/eras/` — both still need to land. Nothing else changed
> from the paste.

The About page is a scroll-driven sequence of twelve illustrated frames with one line of copy each, landing on the House frame where the About proper is read. The frames come from the eras production. This document says how the page is structured, what it says, and how it behaves. It does not restate the visual language.

---

## 1. Page structure

Seventeen viewport heights on desktop. Each numbered screen is one viewport height unless noted.

| Screen | Content | Asset |
|---|---|---|
| 1 | Title | none, or Range frame beginning to reveal |
| 2 | Frame 01 Range + line | `eras-01-open-range` |
| 3 | Frame 02 Gusher + line | `eras-02-gusher` |
| 4 | Frame 03 Raising + line | `eras-03-raising` |
| 5 | Frame 04 Chip + line | `eras-04-chip` |
| 6 | Frame 05 Choir + line | `eras-05-choir` |
| 7 | Frame 06 Charreada + line | `eras-06-charreada` |
| 8 | Frame 07 Boom + line | `eras-07-boom` |
| 9 | Frame 08 Dance Hall + line | `eras-08-dance-hall` |
| 10 | Frame 09 Swang + line | `eras-09-swang` |
| 11 | Frame 11 Launch + line | `eras-11-launch` |
| 12 | Frame 12 Mind + line | `eras-12-mind` |
| 13 | Frame 15 House + line | `eras-15-house` |
| 14 | House holds. Paragraph one | `eras-15-house` |
| 15 | House holds. Paragraph two | `eras-15-house` |
| 16 | House holds. Paragraph three and CTA | `eras-15-house` |
| 17 | Who: founder, board, programs, links | no frame, or House sky as background |

Frames 10 (Wafer), 13 (Bell), and 14 (Neighbor) are not on this page. They are reserved for program pages.

The House frame is on screen for four viewport heights. It is the destination. The camera may drift very slowly across it or hold still. It does not cut away.

---

## 2. Copy

Final copy. Do not paraphrase. Punctuation and line breaks as written.

### Screen 1. Title

Texas is not finished.

### Frame lines

01 Range
Nobody sent for us. We came anyway.

02 Gusher
The ground held more than anyone was told. So did the people.

03 Raising
A town is a decision made by hand.

04 Chip
The future gets built in ordinary rooms by people who show up early.

05 Choir
Here, belief is said out loud.

06 Charreada
The culture was here before the border was.

07 Boom
Ambition is a skyline that is never quite done.

08 Dance Hall
Every kind of music ends up on the same stage.

09 Swang
We take our time. We make sure you hear us.

11 Launch
The edge of the state is now the edge of the sky.

12 Mind
The next Texan is being taught how to think.

15 House
Someone has to keep the porch light on. That is us.

### Screen 14. Paragraph one

We are living through the most significant period in Texas since the day the ground gave up oil. The state that once shipped its resources out is now where the future gets built. Rockets leave from our coast. Chips are made in our fields. Machines are learning to think in our cities. Texans are leading at the frontier of technology, enterprise, and culture at the same time, and that has not happened anywhere else.

### Screen 15. Paragraph two

We think we know why. It is not the tax code or the land, though both help. It is a way of living. A taste for adventure, the nerve to try something, and the discipline to finish it. That combination has drawn the bold to this place for two centuries, and it is drawing them now. The reward has never changed. You get to call yourself a Texan.

### Screen 16. Paragraph three

Texas House exists so the world does not have to read about this in a history book. We gather the people building the next Texas, put them in a room with the people who need to meet them, and tell the story while it is still being written. Austin in March. Washington in January. Dallas when the bell rings. Wherever Texans are deciding what comes next, we set the table.

If you are building something here, this is your house.

CTA below the last line. Single button. Label to be confirmed. Default: "See what we're building."

### Screen 17. Who

Founder, board, programs. Pull from existing site content. Links to team and programs pages.

---

## 3. Typography and placement

Type is the existing Texas House type. Nothing changes.

Frame lines sit in the sky. Every frame was composed with the upper third held as negative space for this purpose. Default position: left-aligned, upper left, inset from the frame edge. If a frame's sky is busier on the left (the Choir, the Chip), move the line to the upper right for that frame only. Never over a figure.

Frame lines are large. One line of type, two at most on narrow screens. They are read at a glance while scrolling, not studied.

Paragraphs on screens 14 to 16 sit over the House frame's sky, upper left, in a measure of 55 to 65 characters. Cream text on the cobalt sky. If contrast fails on the cloud areas, use a very soft scrim behind the text block that fades in with the text, never a hard panel.

The title on screen 1 is the largest type on the site.

---

## 4. Scroll behavior

The sequence is pinned. The frames change as the user scrolls through the pinned section. The page does not scroll past the frames; the frames scroll through the page.

Frame transitions: crossfade on matched horizons. Every frame's horizon is one third from the bottom, so a straight crossfade reads as the world changing under a fixed line. Duration equivalent to roughly 15 percent of a viewport height of scroll. The Swang breaks the horizon rule; give it a slightly longer crossfade in and out.

Copy transitions: the frame line fades in once the frame is roughly 30 percent revealed and fades out as the next transition begins. Copy never crossfades with the next line. There is a gap where the frame is alone.

Motion clips: where a frame has a clip per the eras handoff, scrub the frame sequence with scroll progress within that frame's screen. Where a frame is a still, apply a slow push, scale 1.00 to about 1.04 across the screen. Never both.

Frame sequences come from the eras production as `seq-eras-NNNN.webp`, numbered continuously. Map each frame's range of sequence indices to its screen. Preload the next frame's range while the current one plays.

Scroll should feel weighted. Use smoothed scroll progress, not raw. No scroll snapping. The user must be able to stop anywhere.

The House screens 13 to 16: one frame, held for four viewport heights. If the House has a clip, spread its frames across all four screens so the drift is very slow. Paragraphs fade in and out in sequence over the held frame.

---

## 5. Texture and finish

The frames carry their own paper grain and halftone. Do not add a second grain layer over them.

The page background outside the frames, if any is visible, is warm off-white paper, not white and not black.

Chromatic aberration, the brand motion signature, may be used once: a brief separation on the title as it appears on screen 1, settling within about a second. Not on the frames. Not on the copy.

---

## 6. Performance and fallbacks

Lazy-load everything below screen 1. Screen 1 must paint fast.

Cap device pixel ratio at 1.5 for the frame sequences.

Reduced motion: no pinned scroll, no sequences. Render the page as a normal vertical document. Each frame becomes a static image with its line beneath it. The House frame with the three paragraphs beneath. This is also the mobile fallback if scroll performance is poor on low-end devices; test before deciding.

No WebGL is required for this page. The globe on the homepage is a separate component.

Every frame needs a poster still for the fallback and for first paint before the sequence loads: `eras-NN-title-v#-fix.png` per the eras naming.

---

## 7. Assets required from the eras production

From `brand/ERAS_HANDOFF.md`:

- Repaired stills for frames 01, 02, 03, 04, 05, 06, 07, 08, 09, 11, 12, 15
- Frame sequences for whichever of those have clips
- Nothing from frames 10, 13, 14 for this page

Put stills in `public/brand/eras/` and sequences in `public/brand/eras/seq/`.

---

## 8. Open items

- CTA label on screen 16.
- The three calendar beats in paragraph three (Austin in March, Washington in January, Dallas when the bell rings). Confirm these are the right three or replace.
- Screen 17 content: pull from current site or write new.
- Whether the homepage carries a short four to five frame version of this sequence or a single House frame hero. Decide before building the homepage, not here.

---
name: texas-house-brief
description: Build a branded Texas House working document — board briefs, positioning sessions, partner memos, strategy docs — as a dark editorial HTML page with the real brand fonts embedded, a section-by-section feedback drawer, and a revisions layer that credits reviewers. Use whenever Will asks for a Texas House document, brief, memo, one-pager, review doc, or "a document like the Phase Two one", and whenever applying a round of feedback to one that already exists.
---

# Texas House working documents

These documents are how Texas House thinks in front of other people: the board
brief, the positioning session, partner and investor memos. They are read on a
laptop, on a phone, and in a meeting. They are dark, typographic, and plain
spoken, and they carry their own review machinery so a reader can leave notes
without leaving the page.

## The one rule that matters

**Start from `assets/template.html`. Never rebuild the shell.** The template
carries the licensed brand faces as embedded data URIs, the full token set, every
component, the feedback drawer, the revisions panel, and the mobile behaviour.
Rebuilding it from a description produces something that looks close and is
wrong: substitute fonts, drifted colour, a broken drawer. Copy the file, replace
the content between `<header class="masthead">` and the closing `</div>` of
`.wrap`, and leave the rest alone.

```bash
cp ~/.claude/skills/texas-house-brief/assets/template.html /path/to/new-doc.html
```

The template is an HTML **fragment**, not a full page: it starts at `<title>` and
has no doctype, `<html>`, `<head>` or `<body>`. That is what the Artifact
publisher expects. To open it locally or send it as a file, wrap it:

```python
out = ('<!doctype html>\n<html lang="en"><head><meta charset="utf-8">'
       '<meta name="viewport" content="width=device-width,initial-scale=1">'
       '</head><body>\n' + fragment + '\n</body></html>\n')
```

The viewport meta is not optional. Without it a phone renders the page at 980px
and every table looks cut off.

## Voice

Write the way Will talks: warm, direct, Texan-plainspoken, decisive. "We" for the
mission. No hype, no consultant register, no exclamation marks, no emoji.

- One idea per sentence. State the thing, then the consequence.
- Say the number, the name, and the date. Never "significant" when you mean 47.
- Write the honest state, including what is not decided. A working document that
  hides its open questions is worthless in the room it was built for.
- Bold the words a skimmer needs. Never bold a whole sentence.
- Quote a reviewer in their own words rather than paraphrasing them.

## Structure

1. **Masthead.** Cursive logo, eyebrow line (`Texas House · working brief ·
   MONTH YEAR · confidential`), display `<h1>` on two lines, a `.standfirst`
   paragraph that names the parts in bold, a `.dates` mono line, the `.index`
   jump nav, and the `.guide` panel explaining how to leave feedback.
2. **Parts**, if the document has more than one job: `<hr class="rule-dashed">`
   then `.parthead` with `.parthead__h`.
3. **Sections**, numbered `§01` upward, each `<section id="sNN">` opening with
   `.sechead` and carrying an `add feedback` link.
4. **Revision notes** at the foot of any section a reviewer's round changed.

## Components

Use what exists. Do not invent a new card.

| Class | For |
| --- | --- |
| `.sechead` + `.num` | Section head: `§NN` and the title. Always with the `add feedback` link. |
| `.scroll` wrapping `<table>` | Every table. The wrapper is what makes it survive a phone. |
| `.positions` + `.pos` | Parallel items as cards. `--pos` sets the top rule colour. |
| `.tag`, `.who`, `.risk.commit` | Inside a card: category label, name, and the commitment line. |
| `.callout` + `.eyebrow` | The question a section raises. Once or twice per document. |
| `.pitch`, `.read`, `.big` | Scripted language, an extended read, a verdict line. |
| `.chip` / `.chiprow` | Status badges. `.rebuild` green, `.status.talk` for open. |
| `.muted`, `.label`, `.txh-mono` | Dimmed aside, small caps label, mono detail. |
| `.xref` | A link to another section: `<a class="xref" href="#s13">§13</a>`. |
| `.revnote` | A reviewer's round. See below. |
| `figure.pos__fig` | A photograph inside a card, directly under its `<h3>`. Embed as a base64 JPEG (about 1200px wide, quality 70), never an external URL: artifacts block outside images. Mono `figcaption` names the place and credits the photographer. |
| `.legend` + `.map` + `.tile` | A doing-now / could-do map. Solid `.tile` = doing now (sage top rule); add `.tile--could` for dashed "could do"; add `.tile--money` for revenue (blue top rule). Badge each tile with `.chip.rebuild` (doing now), `.chip.could` or `.chip.money`. Sub-lists inside a tile go in `.tile__sub` under `.label` headings, never as inline tags. |

**The badge rule.** A badge sits on its own line **above** the paragraph it
labels, never inline in the sentence, with space under it. Inside a table cell
use `.chiprow.chiprow--cell`.

## Tokens

Colour, type and rules all come from `:root`. Never hardcode a hex.

```
--gunmetal #181210   --raised #1d1612    --deep #0e0b09
--ivory #faf6f0      --ivory-dim #e7decd --fg3 / --fg4 (dimmed ivory)
--clay #793f34       --clay-text #d96b56 (text-safe)
--dune #c7a87a       --sage #93a67f      --blue #8fa1cf   --warn #d4805d
--rule / --rule-mid / --rule-strong / --edge / --decor
--display "TAY Dreamboat"   --eyebrow "BN Bergen St"
--body "Lato"               --mono system stack
```

Dark everywhere, no light mode. Eyebrows are 0.12em uppercase mono. Display
headlines set tight, around −0.12em. No gradients, no drop shadows, no rounded
cards.

## The review layer

Two halves, both already in the template.

**The feedback drawer** (bottom right, beside Revisions). A reader picks who
they are once, picks a section and a kind, writes notes, and presses Copy batch
to paste them into an email. Notes live in their browser between visits, listed
under "Your notes" with Edit and Remove on each. Do not rebuild this, and do not
promise it stores anything on a server: it does not.

Update the reviewer list when the audience changes. It is a row of buttons with
`data-name` plus a `PRESET` array in the drawer script. Both must match.

**The revisions panel** (the Revisions button, immediately left of Feedback)
indexes each round: who, the date, how many notes, a bullet per section.

**When you apply someone's feedback**, add their round to the panel and end each
changed section with a `.revnote`:

```html
<div class="revnote">
  <div class="revnote__head">Alex's feedback · added 7 September 2026</div>
  <div class="revnote__item">
    <p class="revnote__quote">“Their note, in their own words.”</p>
    <p class="revnote__did"><b>Done:</b> what changed, or why it did not.</p>
  </div>
</div>
```

Quote them, do not paraphrase. Record the answers that were **no** as plainly as
the ones that were yes. Never put name-and-date badges inline in the body copy;
that was tried and rejected.

## Mobile

Tested at 375px. Keep it that way.

- Every table inside `.scroll`. A swipe hint appears under any table that
  overflows and disappears once the reader reaches the end.
- Card grids use `repeat(auto-fit, minmax(280px, 1fr))` so they fall to one
  column on their own.
- Below 620px the tables drop to 13px with tighter cells and the button bar
  shrinks. Do not add fixed pixel widths that defeat this.
- Check `document.documentElement.scrollWidth > innerWidth` at 375. It must be
  false. Horizontal scrolling belongs inside `.scroll` and nowhere else.

## Publishing

Publish with the Artifact tool, passing the fragment's file path. Republishing
the same path keeps the same URL.

**The share pin.** An artifact shared by link stays pinned to the version that
was current when it was shared. Publishing does not move the pin, and no tool
can. After every publish, tell Will in plain words that he has to update the
shared version in the Share menu or the team keeps seeing the old document.

Also save a wrapped standalone copy into the project's `docs/exports/` with the
date in the filename, and commit it.

## Before you publish, check

- Fonts are the real ones: TAY Dreamboat on display, BN Bergen St on eyebrows.
- No horizontal overflow at 375px; every table swipes with its hint.
- Badges sit above their paragraphs, never inline.
- Every reviewer round appears in the panel and at the foot of the sections it
  changed, quoting them.
- Section ids, the jump index and every `.xref` still line up.
- The drawer opens, a note saves, Copy batch produces grouped markdown.
- No invented facts. Cite a source or mark it as a concept.

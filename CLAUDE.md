# Texas House website — project instructions

Public site for texashouse.org. Astro 5 + React islands + Tailwind v4 + Sanity
(project `naolvj96`, dataset `production`), deployed to Vercel later. Owner:
Will Herrmann, Founder & President (will@texashouse.org). Will pairs on tech
but is not deeply technical: recommend plainly, no comparison tables unless
asked.

## Read first
- `docs/component-inventory.md` — THE RULE: the Texas House CRM design system
  governs the brand. Locked decisions live there.
- `docs/brand-specimen.md` — tokens, type, buttons, footer, imagery notes.
- `docs/positioning.md` — the positioning decisions applied to the site copy.
- `brand/VISUAL_LANGUAGE.md` — the imagery standard. Read it before generating
  or placing any image.
- `docs/README.md` — decisions and pending list.

## Brand rules that are not negotiable
Dark everywhere, no exceptions. TAY Dreamboat for display, BN Bergen St for
body, Laslo/Lato per the specimen. Eyebrows 0.12em. No gradients, shadows,
emoji, or exclamation headlines. Scanlines, not paper grain, as page texture.
Buttons: 6px rounding, ivory standing ring on every button (ghost included),
scanline effect always on, hover only rolls the label. Badges sit on their own
line above the paragraph, never inline. Team roster: Will Herrmann (Founder &
President), Marisa Vickers (VP of Partnerships), Alex Kuehler (VP of
Communications), Jimmy Heritage (Executive Producer).

## Imagery: how we generate, together
We generate through the **Higgsfield MCP connector** in Claude Code, not by
hand-off. Its tools: `models_explore`, `generate_image`, `generate_image_batch`,
`upscale_image`, `generate_video`, `jobs_wait`, `media_upload`,
`media_import_url`, `show_generations`, `show_medias`,
`show_reference_elements`, `list_workspaces`, `select_workspace`. If a session
shows only the connector's website-builder tools (`create_website`,
`deploy_website`, …), the connector reconnected in a reduced state: say so and
ask for a fresh session or a reconnect. Do not conclude the connector cannot
generate.

The loop:
1. Assemble the five prompt blocks: blocks 1, 2, 5 verbatim from
   `brand/prompts/`, block 3 by tier, block 4 written fresh under 120 words.
   Attach the approved reference image when one exists.
2. Call `generate_image` (batch for variants). Refine with Will in the
   conversation. `upscale_image` for finals. `generate_video` for the scroll
   sequence and loops.
3. File the approved output:
   `npm run hf -- intake <url|file> --tier <landscape|scene|crowd> --register
   <land|institution|orbit> --subject <slug> --ar 21:9`
   → renamed to the convention, saved in `public/brand/`, logged in
   `brand/renders.md`. Nothing auto-uploads anywhere.
4. Place it on the site (optimize, responsive sizes, parallax, sequence, globe).
Priority assets: hero globe, scroll video, footer globes, footer bluebonnets.
Start with the eight test renders in `brand/VISUAL_LANGUAGE.md` §8.
`scripts/higgsfield.mjs` also has direct-API commands as a fallback (key in
`.env`, never committed).

## Working the site
- Dev server: `npm run dev` on http://localhost:4321 (Browser pane config
  `texashouse`; use `texashouse-attach` when the server already runs).
- Dev-only feedback loop: Feedback button (comments + screenshots) and Edit
  copy button (in-place text edits) on every page; queue at `/feedback`;
  approved batches become briefs in `feedback/briefs/`; mark items resolved
  with the curl in the brief after verifying.
- Orchestration Will prefers: plan in Fable, build with Opus subagents on
  disjoint files, review and verify in Fable.
- Verify in the Browser pane before claiming a visual change works.

## Repo rules
- This folder is its own git repo: `github.com/willtexashouse/texashouse`,
  branch `claude/texas-house-rebuild-jt7avf`. Commit here, push after each
  change so GitHub stays current. Merge to `main` only when Will says it's
  time for Vercel.
- Never run git or deploys from the home directory; it is a separate repo with
  secrets.
- `feedback/`, `brand/inbox/`, `.env`, `.sanity/` are ignored on purpose.
- Package installs are gated by the global tripwire; propose, verify, wait.

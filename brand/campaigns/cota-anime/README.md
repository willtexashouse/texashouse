# COTA anime campaign — working notes

Will's handoff (2026-09-23) governs this folder; the full brief is in
`HANDOFF.md`. Summary of the rules that matter day to day:

- Campaign style only. Modeled on the look of *Sound & Fury* (2019): fine ink
  line, scratchy hatching, hard-edged tinted cel shadows, one strong color
  grade per scene, bloom, chromatic aberration, vignette, shallow depth of
  field, film grain. Nothing from here goes into the OS or texashouse.org.
- Film stills are internal style references only. They live in
  `brand/inbox/cota-anime/refs/` (git-ignored) and are uploaded to Higgsfield
  by presigned upload, never pushed to a public URL.
- No film characters, crest, swords, car, or shots. The Driver never combines
  forehead dots, slicked hair, aviators on the face, taped fingers.
- No artist names in prompts. No official F1 marks or liveries. Sponsor logos
  are composited in post, never generated.
- Higgsfield via Composio. Account "Strategy + Will" by default; "pollen.media"
  when the first is out of credits. Model for reference-guided style:
  `nano_banana_pro`, role `image_references`, 2k.

Outputs (ours) are filed here and logged in `brand/renders.md`.

## Higgsfield media ids (2026-09-23)
Uploaded by presigned PUT from the git-ignored inbox, confirmed.
- Strategy + Will (out of credits on the Plus monthly plan as of 2026-09-23):
  ref-01 `91607daa-cd27-49c1-8427-9d459513efc0`, ref-02 `a3968fe0-054b-4531-8c0c-e86d1d1e23f4`
- pollen.media (in use): ref-01 `1d2bce8d-146b-47f6-8d72-534340ec395c`,
  ref-02 `bba82f42-e7e0-48ce-957f-f8b25c6aecc9`
Media ids are per workspace; a reference must be uploaded again to use it on
the other account.

// The feedback lifecycle, in a plain module — ported from the Texas House CRM
// (texas-house-crm/web/src/app/(app)/feedback/triage.ts) so both properties
// speak ONE vocabulary. The KINDS, the filters, and the brief language are the
// CRM's; only the storage (disk, not Supabase) and the ship step differ.
//
// Two facts are tracked separately and must stay that way:
//   triage   — the decision. pending → approved | declined.
//   resolved — the outcome. The fix has landed.
// An approved item is not fixed, and a handed-off item is not fixed either.

export type TriageState = 'pending' | 'approved' | 'declined';
export type FilterKey = 'pending' | 'approved' | 'sent' | 'declined' | 'resolved' | 'all';
export type FeedbackKind = 'bug' | 'improvement' | 'ui' | 'feature' | 'copy';

export interface KindDef {
  key: FeedbackKind;
  label: string;
  /** Text-safe ink for the kind chip + card edge (website tokens). */
  ink: string;
  section: string;
  prompt: string;
  ask: string;
}

// Ordered the way they are read: what is broken, what looks wrong, what could
// be better, what is not there at all. 'bug' stays first — it is the widget's
// default and the fallback in kindOf.
export const KINDS: KindDef[] = [
  {
    key: 'bug',
    label: 'Bug',
    ink: 'var(--txh-warn-text)',
    section: 'Bugs',
    prompt:
      "What were you doing? What happened? What did you expect?\n\nPaste screenshots anywhere in this box — ⌘V — up to five. Close it, take more, come back: they'll still be here.",
    ask: 'What happened, and where to paste a screenshot',
  },
  {
    key: 'ui',
    label: 'UI / UX',
    ink: 'var(--txh-blue-text)',
    section: 'UI / UX',
    prompt:
      'What looks or feels wrong — spacing, size, contrast, wording, where a control sits? A screenshot says it faster than a paragraph: paste up to five with ⌘V.',
    ask: 'What looks or feels wrong, and where to paste a screenshot',
  },
  {
    key: 'improvement',
    label: 'Improvement',
    ink: 'var(--txh-gold)',
    section: 'Improvements',
    prompt: 'What would make this better? Paste up to five screenshots with ⌘V.',
    ask: 'What would make this better, and where to paste a screenshot',
  },
  {
    key: 'feature',
    label: 'New feature',
    ink: 'var(--txh-good-text)',
    section: 'New features',
    prompt:
      "What should exist that doesn't? What would you do with it, and what are you doing instead today? Paste up to five screenshots with ⌘V — a sketch or the tool you're using instead both count.",
    ask: "What should exist that doesn't, and where to paste a screenshot",
  },
  {
    // Not typed into the widget — written by "Edit copy" mode, which records the
    // before/after of a block of text edited in place on the page.
    key: 'copy',
    label: 'Copy edit',
    ink: 'var(--txh-accent-text)',
    section: 'Copy edits',
    prompt: 'Edited on the page. Before and after are recorded automatically.',
    ask: 'What changed, recorded from the page',
  },
];

/** Unknown kinds fall back to the first definition rather than throwing on a
    page whose whole job is to show you the queue. */
export function kindOf(kind: string | null | undefined): KindDef {
  return KINDS.find((k) => k.key === kind) ?? KINDS[0];
}

export interface TriageFacts {
  triage: string | null;
  resolved: boolean | null;
  sent_at: string | null;
}

export function triageOf(f: TriageFacts): TriageState {
  return f.triage === 'approved' || f.triage === 'declined' ? f.triage : 'pending';
}

export interface FilterDef {
  key: FilterKey;
  label: string;
  test: (f: TriageFacts) => boolean;
  empty: string;
}

export const FILTERS: FilterDef[] = [
  {
    key: 'pending',
    label: 'Needs review',
    test: (f) => triageOf(f) === 'pending',
    empty: 'Nothing waiting on a decision. New reports land here.',
  },
  {
    // Approved and NOT yet handed off — a queue you can empty. Once a batch
    // goes out the items move to Sent, which holds them until resolved.
    key: 'approved',
    label: 'Approved',
    test: (f) => triageOf(f) === 'approved' && !f.resolved && !f.sent_at,
    empty: 'Nothing waiting to be handed off. Approved items move to Sent once a batch goes out.',
  },
  {
    key: 'sent',
    label: 'Sent',
    test: (f) => !!f.sent_at && !f.resolved,
    empty: 'No batches handed off yet.',
  },
  { key: 'declined', label: 'Declined', test: (f) => triageOf(f) === 'declined', empty: 'Nothing declined.' },
  { key: 'resolved', label: 'Resolved', test: (f) => !!f.resolved, empty: 'Nothing marked resolved yet.' },
  {
    key: 'all',
    label: 'All',
    test: () => true,
    empty: 'No feedback at all. Use the Feedback button at the bottom-right of any page.',
  },
];

export function tally(rows: TriageFacts[]): Record<FilterKey, number> {
  const out = {} as Record<FilterKey, number>;
  for (const f of FILTERS) out[f.key] = 0;
  for (const row of rows) for (const f of FILTERS) if (f.test(row)) out[f.key] += 1;
  return out;
}

// ── The brief ────────────────────────────────────────────────
// What the engineer actually needs: what broke, on which page, and the exact
// ids + screenshot paths so the work can be verified and marked resolved.
// Screenshots are not inlined — they are files on disk; the paths let Claude
// open them directly.

export interface FeedbackItem {
  id: string;
  kind: string;
  title: string | null;
  body: string;
  page: string | null;
  viewport?: string | null;
  created_at: string;
  shots: string[];
  /** Present on 'copy' items: the literal before/after of one edited element. */
  edit?: { selector: string; before: string; after: string; tag: string };
}

// How Will wants the batch worked, stated in the brief itself rather than
// remembered and re-typed every time — the CRM's HOW_TO_RUN, retargeted at the
// website. The review step is the point of the whole arrangement: the model
// that wrote a fix is the worst judge of whether it works.
const HOW_TO_RUN = `
## How to run this

Orchestrate in Claude Fable 5.

1. **Fable plans the work** — read every item below first and group them by the
   files they touch, so agents never collide on the same file.
2. **Opus 5 agents write the fixes**, one per group, working in parallel on
   disjoint files.
3. **Back to Fable for critical review** before anything is accepted. Review
   adversarially: try to break each fix, and reject any that cannot be shown to
   work. A fix nobody can demonstrate is not a fix.
4. **Implement the accepted changes with Opus 5**, then verify each one against
   the report that asked for it — in the running dev server at
   http://localhost:4321, with a clean \`npm run build\` — every page, zero errors —
   before calling anything done.

Do not skip step 3, and do not let the agent that wrote a fix be the one that
signs it off. Do not mark an item resolved until step 4's verification has
happened.
`;

export function buildBrief(items: FeedbackItem[]): string {
  const grouped = new Map<FeedbackKind, FeedbackItem[]>(KINDS.map((k) => [k.key, []]));
  for (const i of items) grouped.get(kindOf(i.kind).key)!.push(i);

  // A copy edit says itself better than any prose the widget could collect:
  // the exact text that is there now, and the exact text that should replace it.
  // Indented four spaces so Markdown renders both blocks verbatim as code.
  const indent = (s: string) =>
    s
      .split('\n')
      .map((l) => `    ${l}`)
      .join('\n');
  const bodyOf = (i: FeedbackItem) =>
    i.edit
      ? [
          `Element: ${i.edit.tag} · ${i.edit.selector}`,
          '',
          'Before:',
          indent(i.edit.before),
          '',
          'After:',
          indent(i.edit.after),
        ].join('\n')
      : i.body.trim();

  const section = (label: string, list: FeedbackItem[]) =>
    list.length === 0
      ? ''
      : `\n## ${label}\n\n` +
        list
          .map((i, n) => {
            const lines = [
              `### ${n + 1}. ${i.title?.trim() || '(no title)'}`,
              '',
              bodyOf(i),
              '',
              `- Page: ${i.page || 'not recorded'}${i.viewport ? ` · viewport ${i.viewport}` : ''}`,
              `- Reported: ${new Date(i.created_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}`,
              i.shots.length
                ? `- Screenshots: ${i.shots.map((s) => `feedback/${s}`).join(' · ')}`
                : `- Screenshots: none`,
              `- id: ${i.id}`,
            ];
            return lines.join('\n');
          })
          .join('\n\n');

  return (
    `# Texas House website — ${items.length} item${items.length === 1 ? '' : 's'} to fix\n\n` +
    `Reported through the in-page feedback widget on the rebuild (~/texashouse).\n` +
    `Approved on /feedback and handed over by hand — nothing here sends this anywhere.\n` +
    `Please work through these, and tell me which you could not reproduce.\n` +
    `\n` +
    `Copy edits are literal: find the Before text in the page's source file and\n` +
    `replace it with the After text, word for word, then mark the item resolved.\n` +
    `\n` +
    `When a fix lands it gets marked resolved on /feedback — the ids below are how.\n` +
    `\n` +
    `## Where the records live\n\n` +
    `Every item below is a JSON file in ~/texashouse/feedback/ whose name contains\n` +
    `its id; the screenshot paths listed per item are files in the same folder —\n` +
    `open them and look before fixing anything. After a fix is VERIFIED (dev\n` +
    `server at http://localhost:4321), mark the item resolved so the /feedback\n` +
    `board reflects reality:\n` +
    `\n` +
    `    curl -sS -X POST http://localhost:4321/__feedback/update \\\n` +
    `      -H 'content-type: application/json' -d '{"id":"<id>","resolved":true}'\n` +
    HOW_TO_RUN +
    KINDS.map((k) => section(k.section, grouped.get(k.key)!)).join('') +
    `\n`
  );
}

# Events — the date/status model

> Status: **Implemented 2026-08-19.** Schema, queries, and Studio preview are in
> place and verified against the live dataset.

## The problem this solves

The live Webflow site currently contradicts itself: the homepage `<title>` still
promotes *"Texas House @ SXSW 2026 | March 12 / 13 / 14, 2026"* and carries an
"Upcoming Events" section, while `past-events.html` already lists SXSW 2026 under
past events. Nobody did anything wrong — the site has no concept of an event
ageing out, so retiring one is a manual chore that gets missed.

The Sanity schema had the same gap from the other side: `event` had a single
`date` and a comment reading *"Everything is past."* The wireframe brief needs
Upcoming Events, an events calendar, and RSVP CTAs, so "everything is past" no
longer holds.

## The model

**Status is derived from dates. It is never stored.**

| Field | Type | Meaning |
| ----- | ---- | ------- |
| `date` | datetime, required | Start of the run |
| `endDate` | datetime, optional | End of the run. Blank = single-day, so the start doubles as the end |
| `statusOverride` | string, optional | Escape hatch. Blank in almost every case |

Derivation, in order:

1. `statusOverride` set → that wins.
2. `endDate` (or `date`) is in the past → **past**
3. `date` is in the future → **upcoming**
4. Otherwise → **active** ("happening now")

`statusOverride` offers `upcoming` / `active` / `past` / `cancelled` /
`postponed` — for the things dates genuinely cannot express. Forcing a status
because the dates are wrong is the wrong fix; correct the dates.

Why derived rather than a status field an editor toggles: an event that finished
last night **is** past, whether or not anyone remembers to log in. That is
precisely the failure now visible in production.

## Queries

In `src/lib/sanity/queries.ts`:

| Query | Returns |
| ----- | ------- |
| `EVENTS_QUERY` | All events, newest first, each with derived `status` |
| `PAST_EVENTS_QUERY` | Finished events, newest first |
| `UPCOMING_EVENTS_QUERY` | Future events, soonest first, cancelled excluded |
| `ACTIVE_EVENTS_QUERY` | Currently running — normally 0 or 1 |
| `HOME_EVENTS_QUERY` | `{ active, upcoming[0...3] }` for the homepage |
| `EVENT_BY_SLUG_QUERY` | One event + its sessions, with `status` |

The shared `EVENT_STATUS` projection keeps the rule in one place.

## ⚠️ Build-time evaluation — the one real caveat

`astro.config.mjs` sets `output: 'static'`, so GROQ's `now()` resolves **when the
site builds**, not when a visitor loads it. An event therefore retires on the
next deploy, not at midnight.

**Required:** a scheduled daily rebuild (Vercel cron → deploy hook). Without it,
a finished event lingers on the homepage until something else triggers a build.

Day-level accuracy is fine for multi-day events. If a "happening now" badge ever
needs to be exact to the hour, compute that one badge client-side rather than
making the whole site dynamic.

## Verified against the live dataset

Run 2026-08-19 against `naolvj96/production`:

```
past:     5   SXSW London 2026 · SXSW 2026 · Race Weekend 2025 ·
              SXSW London 2025 · SXSW 2025
upcoming: 0
active:   0
sessions: 56 already imported
```

All five correctly derive to `past` with no `endDate` set and no override —
including SXSW 2026, which the live site still promotes. The model retires it
automatically.

## Follow-ups

1. **Backfill `endDate`** on the five existing events. They currently hold only a
   start, so a multi-day run reads as a single day. SXSW 2026 in particular needs
   the date question resolved first — the live homepage says March 12/13/14
   (three days), the Design System schedule lists only Friday 13 and Saturday 14.
2. **Schedule the daily rebuild** before any upcoming event is published.
3. **Sessions inherit status from their parent event.** If the schedule ever needs
   a live "on now" row highlight, that is client-side.

// @ts-check
/*
  Webflow → Sanity transform.

  Reads the Webflow exports in migration/webflow-export/ and emits a single
  NDJSON file (migration/import/dist/texashouse.ndjson) ready for:

    npx sanity dataset import migration/import/dist/texashouse.ndjson production --replace

  Images are referenced by their Webflow CDN URL via the `_sanityAsset` shorthand,
  so `sanity dataset import` downloads + uploads them automatically.

  No network needed to run THIS script — it only reads local files.
*/
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { parse } from 'csv-parse/sync';
import { Schema } from '@sanity/schema';
import { htmlToBlocks } from '@sanity/block-tools';
import { JSDOM } from 'jsdom';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..', '..');
const CSV = join(ROOT, 'migration', 'webflow-export', 'csv');
const JSONDIR = join(ROOT, 'migration', 'webflow-export', 'json');
const OUT_DIR = join(__dirname, 'dist');

const docs = [];
const warnings = [];
const key = () => randomUUID().replace(/-/g, '').slice(0, 12);

// ---------- helpers ----------

function readCsv(name) {
  const p = join(CSV, name);
  if (!existsSync(p)) {
    warnings.push(`Missing CSV: ${name}`);
    return [];
  }
  return parse(readFileSync(p, 'utf8'), {
    columns: true,
    skip_empty_lines: true,
    relax_quotes: true,
    relax_column_count: true,
    bom: true,
  });
}

/** Find a column value by a case-insensitive substring of the header. */
function col(row, ...needles) {
  const keys = Object.keys(row);
  for (const n of needles) {
    const k = keys.find((h) => h.toLowerCase().trim() === n.toLowerCase());
    if (k && row[k] != null && row[k] !== '') return row[k];
  }
  for (const n of needles) {
    const k = keys.find((h) => h.toLowerCase().includes(n.toLowerCase()));
    if (k && row[k] != null && row[k] !== '') return row[k];
  }
  return '';
}

const isTrue = (v) => String(v).trim().toLowerCase() === 'true';
const splitList = (v) =>
  String(v || '')
    .split(/[;,]/)
    .map((s) => s.trim())
    .filter(Boolean);
const isoOrUndef = (v) => {
  if (!v) return undefined;
  const d = new Date(v);
  return isNaN(d.getTime()) ? undefined : d.toISOString();
};
const imageRef = (url) => (url ? { _type: 'image', _sanityAsset: `image@${url.trim()}` } : undefined);
const imageArray = (urls) =>
  splitList(urls).map((u) => ({ _type: 'image', _key: key(), _sanityAsset: `image@${u}` }));

// ---------- Portable Text (HTML → blocks) ----------

const blockSchema = Schema.compile({
  name: 'default',
  types: [
    {
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
});
const blockContentType = blockSchema.get('body');

const ptRules = [
  {
    deserialize(node, _next, block) {
      const tag = node.tagName && node.tagName.toLowerCase();
      if (tag === 'figure') {
        const img = node.querySelector && node.querySelector('img');
        if (img && img.getAttribute('src')) {
          return block({ _type: 'image', _sanityAsset: `image@${img.getAttribute('src')}` });
        }
      }
      if (tag === 'img' && node.getAttribute('src')) {
        return block({ _type: 'image', _sanityAsset: `image@${node.getAttribute('src')}` });
      }
      return undefined;
    },
  },
];

function htmlToPt(html) {
  if (!html || !String(html).trim()) return undefined;
  try {
    const blocks = htmlToBlocks(String(html), blockContentType, {
      parseHtml: (h) => new JSDOM(h).window.document,
      rules: ptRules,
    });
    return blocks && blocks.length ? blocks : undefined;
  } catch (e) {
    warnings.push(`HTML→PT failed: ${(e && e.message) || e}`);
    return undefined;
  }
}

// ---------- references / id helpers ----------

const topicId = (slug) => `topic-${canonicalTopic(slug)}`;
const eventId = (slug) => `event-${slug}`;
const sponsorId = (slug) => `sponsor-${slug}`;

// Merge the two known duplicate tags.
const TOPIC_ALIASES = { 'innovation-2': 'innovation', cusisine: 'cuisine' };
const canonicalTopic = (slug) => TOPIC_ALIASES[slug] || slug;

const topicSlugs = new Set();
const ref = (id) => ({ _type: 'reference', _ref: id, _key: key() });

// Event date overrides (Webflow Activations have no event-date field).
const EVENT_DATES = {
  'sxsw-2025': '2025-03-10',
  'sxsw-london-2025': '2025-06-04',
  'race-weekend-2025': '2025-10-19',
  'sxsw-2026': '2026-03-13',
  'new-activation': '2026-06-04', // "SXSW London 2026"
};

// ---------- 1. Topics (from tags.json, deduped) ----------

function buildTopics() {
  const p = join(JSONDIR, 'tags.json');
  if (!existsSync(p)) {
    warnings.push('Missing json/tags.json');
    return;
  }
  const { items } = JSON.parse(readFileSync(p, 'utf8'));
  let order = 0;
  for (const t of items) {
    const slug = canonicalTopic(t.slug);
    if (topicSlugs.has(slug)) continue;
    if (t._dedupe) continue; // skip the flagged duplicate rows
    topicSlugs.add(slug);
    docs.push({
      _id: topicId(slug),
      _type: 'topic',
      title: t.name,
      slug: { _type: 'slug', current: slug },
      order: order++,
    });
  }
}

// ---------- 2. Sponsors ----------

function buildSponsors() {
  for (const row of readCsv('sponsors.csv')) {
    if (isTrue(col(row, 'Draft'))) continue;
    const slug = col(row, 'Slug');
    if (!slug) continue;
    docs.push({
      _id: sponsorId(slug),
      _type: 'sponsor',
      name: col(row, 'Name'),
      slug: { _type: 'slug', current: slug },
      logo: imageRef(col(row, 'Logo')),
      link: col(row, 'Link') || undefined,
      presenting: isTrue(col(row, 'Tier 1')),
      partner: isTrue(col(row, 'Tier 2')),
      experience: isTrue(col(row, 'Tier 3')),
      foodBeverage: isTrue(col(row, 'Food & Beverage')),
    });
  }
}

// ---------- 3. Events (Webflow "Activations") ----------

function buildEvents() {
  for (const row of readCsv('activations.csv')) {
    if (isTrue(col(row, 'Draft'))) continue;
    const slug = col(row, 'Slug');
    if (!slug) continue;
    const date = EVENT_DATES[slug] || isoOrUndef(col(row, 'Published On')) || undefined;
    docs.push({
      _id: eventId(slug),
      _type: 'event',
      title: col(row, 'Name'),
      slug: { _type: 'slug', current: slug },
      date: date ? new Date(date).toISOString() : undefined,
      coverImage: imageRef(col(row, 'Cover Image')),
      recapVideo: col(row, 'Recap Video') || undefined,
      description: htmlToPt(col(row, 'Rich text description')),
      gallery: imageArray(col(row, 'Gallery')),
      gallery2Title: col(row, 'Gallery 2 Title') || undefined,
      gallery2: imageArray(col(row, 'Gallery 2')),
    });
  }
}

// ---------- 4. Sessions (Past Events + ROS Segments, deduped by slug) ----------

const ROOMS = { 'main room': 'main_room', rooftop: 'rooftop', cmyk: 'cmyk' };
const CITIES = { austin: 'austin', london: 'london' };

function buildSessions() {
  const seen = new Set();
  const rows = [...readCsv('ros-segments.csv'), ...readCsv('past-events.csv')];
  for (const row of rows) {
    if (isTrue(col(row, 'Draft'))) continue;
    const slug = col(row, 'Slug');
    if (!slug || seen.has(slug)) continue;
    seen.add(slug);

    const activationSlug = col(row, 'Activation');
    const topics = splitList(col(row, 'Tags'))
      .map(canonicalTopic)
      .filter((s) => topicSlugs.has(s))
      .map((s) => ref(topicId(s)));
    const sponsors = [col(row, 'Sponsor/ Partner'), col(row, 'Sponsor 2'), col(row, 'Sponsor 3')]
      .filter(Boolean)
      .map((s) => ref(sponsorId(s)));

    docs.push({
      _id: `session-${slug}`,
      _type: 'session',
      title: col(row, 'Name'),
      slug: { _type: 'slug', current: slug },
      event: activationSlug ? ref(eventId(activationSlug)) : undefined,
      date: isoOrUndef(col(row, 'Date')),
      endTime: isoOrUndef(col(row, 'End Time')),
      location: col(row, 'Location') || undefined,
      room: ROOMS[String(col(row, 'Event Space Location')).toLowerCase()] || undefined,
      eventDay: col(row, 'Event Day') || undefined,
      city: CITIES[String(col(row, 'CITY')).toLowerCase()] || undefined,
      shortDescription: col(row, 'Short Description') || undefined,
      description: htmlToPt(col(row, 'Description')),
      image: imageRef(col(row, 'Image')),
      rsvpLink: col(row, 'RSVP Link') || undefined,
      topics: topics.length ? topics : undefined,
      sponsors: sponsors.length ? sponsors : undefined,
    });
  }
}

// ---------- 5. Articles (Newsrooms) ----------

// Curated best-guess topics per article (only 4 articles).
const ARTICLE_TOPICS = {
  'texas-house-shines-light-on-lone-star-state-innovators': ['economic-development', 'culture'],
  'come-and-make-it': ['economic-development', 'entrepreneurship'],
  'sxsw-london-press-release': ['economic-development', 'culture'],
  'texas-house-goes-global-a-landmark-day-at-sxsw-london': ['economic-development', 'innovation', 'defense'],
};
const FEATURED_ARTICLE = 'texas-house-goes-global-a-landmark-day-at-sxsw-london';

function buildArticles() {
  for (const row of readCsv('newsrooms.csv')) {
    if (isTrue(col(row, 'Draft'))) continue;
    const slug = col(row, 'Slug');
    if (!slug) continue;
    const topics = (ARTICLE_TOPICS[slug] || [])
      .map(canonicalTopic)
      .filter((s) => topicSlugs.has(s))
      .map((s) => ref(topicId(s)));
    docs.push({
      _id: `article-${slug}`,
      _type: 'article',
      title: col(row, 'Name'),
      slug: { _type: 'slug', current: slug },
      type: String(col(row, 'Type')).toLowerCase() === 'media' ? 'media' : 'blog',
      featured: slug === FEATURED_ARTICLE,
      summary: col(row, 'Summary') || undefined,
      mainImage: imageRef(col(row, 'Main Image')),
      publishedAt: isoOrUndef(col(row, 'Published On')) || new Date().toISOString(),
      body: htmlToPt(col(row, 'Post Body')),
      topics: topics.length ? topics : undefined,
    });
  }
}

// ---------- run ----------

buildTopics();
buildSponsors();
buildEvents();
buildSessions();
buildArticles();

// Strip undefined fields for clean NDJSON.
const clean = (o) =>
  JSON.parse(JSON.stringify(o, (_k, v) => (v === undefined ? undefined : v)));

mkdirSync(OUT_DIR, { recursive: true });
const ndjson = docs.map((d) => JSON.stringify(clean(d))).join('\n') + '\n';
writeFileSync(join(OUT_DIR, 'texashouse.ndjson'), ndjson);

const counts = docs.reduce((m, d) => ((m[d._type] = (m[d._type] || 0) + 1), m), {});
console.log('Wrote', docs.length, 'documents to migration/import/dist/texashouse.ndjson');
console.log('By type:', counts);
if (warnings.length) {
  console.log('\nWarnings:');
  for (const w of [...new Set(warnings)]) console.log(' -', w);
}

// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const {
  PUBLIC_SANITY_PROJECT_ID = 'naolvj96',
  PUBLIC_SANITY_DATASET = 'production',
  PUBLIC_SANITY_API_VERSION = '2024-01-01',
} = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

/*
  Dev-only feedback system — the full CRM feedback lifecycle, backed by disk
  instead of Supabase. Reports land in ./feedback/ as JSON + JPEG; triage
  happens on /feedback; approved batches become briefs in ./feedback/briefs/
  that Claude reads straight off the filesystem.

  `apply: 'serve'` — exists ONLY on the dev server; production builds are
  untouched. Delete this plugin + src/components/dev/ + src/pages/feedback.astro
  when the review loop ends.

  Endpoints:
    GET  /__feedback              → { count }   (pending count, for the badge)
    GET  /__feedback/list         → { items }   (all reports, newest first)
    GET  /__feedback/shot/<file>  → image bytes
    POST /__feedback              → create  { kind,title,body,page,viewport,shots[] }
    POST /__feedback/update       → merge   { id, triage?, sent_at?, resolved? }
    POST /__feedback/brief        → hand off{ ids[], brief } — writes briefs/<ts>.md,
                                    stamps sent_at + batch on every id
*/
const feedbackInbox = () => ({
  name: 'txh-feedback-inbox',
  apply: 'serve',
  configureServer(server) {
    const dir = path.join(path.dirname(fileURLToPath(import.meta.url)), 'feedback');
    const briefs = path.join(dir, 'briefs');
    const readAll = () =>
      fs.readdirSync(dir)
        .filter((f) => f.endsWith('.json'))
        .map((f) => { try { return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); } catch { return null; } })
        .filter(Boolean)
        .sort((a, b) => (a.created_at < b.created_at ? 1 : -1));
    const fileFor = (id) => fs.readdirSync(dir).find((f) => f.endsWith('.json') && f.includes(id));
    const json = (res, obj, code = 200) => {
      res.statusCode = code;
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify(obj));
    };
    const body = (req) => new Promise((resolve, reject) => {
      let b = '';
      req.on('data', (c) => { b += c; if (b.length > 40e6) { reject(new Error('too large')); req.destroy(); } });
      req.on('end', () => { try { resolve(JSON.parse(b)); } catch (e) { reject(e); } });
    });

    server.middlewares.use('/__feedback', async (req, res) => {
      fs.mkdirSync(briefs, { recursive: true });
      const url = (req.url || '/').split('?')[0];
      try {
        if (req.method === 'GET' && url.startsWith('/shot/')) {
          const name = path.basename(decodeURIComponent(url.slice(6)));
          const f = path.join(dir, name);
          if (!fs.existsSync(f)) { res.statusCode = 404; res.end(); return; }
          res.setHeader('content-type', 'image/jpeg');
          res.end(fs.readFileSync(f));
          return;
        }
        if (req.method === 'GET' && url === '/list') { json(res, { items: readAll() }); return; }
        if (req.method === 'GET') {
          json(res, { count: readAll().filter((i) => (i.triage ?? 'pending') === 'pending').length });
          return;
        }
        if (req.method !== 'POST') { res.statusCode = 405; res.end(); return; }

        if (url === '/update') {
          const { id, ...patch } = await body(req);
          const f = fileFor(id);
          if (!f) { json(res, { ok: false, error: 'not found' }, 404); return; }
          const cur = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
          const allowed = ['triage', 'sent_at', 'resolved', 'batch'];
          for (const k of allowed) if (k in patch) cur[k] = patch[k];
          fs.writeFileSync(path.join(dir, f), JSON.stringify(cur, null, 2));
          json(res, { ok: true, item: cur });
          return;
        }
        if (url === '/brief') {
          const { ids = [], brief = '' } = await body(req);
          const stamp = new Date().toISOString().replace(/[:.]/g, '-');
          const briefFile = `${stamp}--batch.md`;
          fs.writeFileSync(path.join(briefs, briefFile), brief);
          const sent_at = new Date().toISOString();
          for (const id of ids) {
            const f = fileFor(id);
            if (!f) continue;
            const cur = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
            cur.sent_at = sent_at; cur.batch = briefFile;
            fs.writeFileSync(path.join(dir, f), JSON.stringify(cur, null, 2));
          }
          json(res, { ok: true, briefFile: `feedback/briefs/${briefFile}` });
          return;
        }

        // create
        const { kind = 'bug', title = '', note = '', body: reportBody = '', page = '/', viewport = '', shots = [], shot = null, edit = null } = await body(req);
        const allShots = (shots.length ? shots : shot ? [shot] : []).slice(0, 5);
        const stamp = new Date().toISOString().replace(/[:.]/g, '-');
        const id = Math.random().toString(16).slice(2, 10);
        const slug = (page.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'home').slice(0, 40);
        const base = `${stamp}--${slug}--${id}`;
        const shotFiles = [];
        allShots.forEach((s, i) => {
          if (typeof s === 'string' && s.startsWith('data:image/')) {
            const name = `${base}-${i + 1}.jpg`;
            fs.writeFileSync(path.join(dir, name), Buffer.from(s.split(',')[1], 'base64'));
            shotFiles.push(name);
          }
        });
        // "Edit copy" mode: the literal before/after of one edited element.
        // Only kept when both texts are actually strings — the brief renders
        // them verbatim, so a half-formed edit is worse than none.
        const editFacts =
          edit && typeof edit === 'object' && typeof edit.before === 'string' && typeof edit.after === 'string'
            ? {
                edit: {
                  selector: String(edit.selector ?? '').slice(0, 300),
                  before: edit.before.slice(0, 5000),
                  after: edit.after.slice(0, 5000),
                  tag: String(edit.tag ?? '').slice(0, 20),
                },
              }
            : {};
        const item = {
          id, kind, title, body: reportBody || note, page, viewport,
          created_at: new Date().toISOString(),
          shots: shotFiles, triage: 'pending', sent_at: null, resolved: false, batch: null,
          ...editFacts,
        };
        fs.writeFileSync(path.join(dir, `${base}.json`), JSON.stringify(item, null, 2));
        json(res, { ok: true, count: readAll().filter((i) => (i.triage ?? 'pending') === 'pending').length });
      } catch (e) {
        json(res, { ok: false, error: String(e) }, 400);
      }
    });
  },
});

// https://astro.build/config
export default defineConfig({
  site: 'https://texashouse.org',
  output: 'static',
  adapter: vercel(),
  integrations: [
    // Embeds the Sanity Studio at /studio using sanity.config.ts.
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      apiVersion: PUBLIC_SANITY_API_VERSION,
      useCdn: false,
      studioBasePath: '/studio',
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss(), feedbackInbox()],
  },
});

#!/usr/bin/env node
/*
  Higgsfield pipeline for the Texas House visual language.

  Assembles the five prompt blocks from brand/prompts/, submits to the
  Higgsfield API, polls to a terminal state, downloads the result into
  public/brand/ under the naming convention, and appends a line to
  brand/renders.md so every file can be regenerated.

  Credentials: HF_API_KEY_ID and HF_API_KEY_SECRET, read from the
  environment or from .env in the repo root (never committed). Create them
  at https://cloud.higgsfield.ai.

  Usage:
    node scripts/higgsfield.mjs estimate  --tier scene --register orbit --story "..." [--model nano-banana] [--ar 21:9]
    node scripts/higgsfield.mjs generate  --tier scene --register orbit --subject robot-coffee --story "..." [--model nano-banana|soul|soul-reference|flux|reve] [--ar 21:9] [--ref <url|file>] [--n 1] [--seed 7]
    node scripts/higgsfield.mjs video     --subject eras-01 --image <url|file> --prompt "..." [--model veo|kling] [--duration 6] [--last <url|file>]
    node scripts/higgsfield.mjs upload    <file>            # prints a public URL usable as a reference
    node scripts/higgsfield.mjs status    <request_id>
    node scripts/higgsfield.mjs intake    <file|url> [...]  --tier scene --register orbit --subject robot-coffee [--ar 21:9] [--prompt "..."]
                                            # the normal path: finals made and refined in Higgsfield, pulled in here,
                                            # named, filed in public/brand/, logged. Also empties brand/inbox/ when
                                            # called with no files.

  The story block (--story) should be under 120 words; blocks 1, 2, 3 and 5
  are added verbatim around it. Use --raw to send --story as the whole prompt.
*/
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const API = 'https://api.higgsfield.ai';
const PROMPTS = path.join(ROOT, 'brand', 'prompts');
const OUT = path.join(ROOT, 'public', 'brand');
const LOG = path.join(ROOT, 'brand', 'renders.md');

// ---- credentials ----------------------------------------------------------
function loadEnv() {
  const f = path.join(ROOT, '.env');
  if (!fs.existsSync(f)) return;
  for (const line of fs.readFileSync(f, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"\n]*)"?\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}
loadEnv();
const KEY = process.env.HF_API_KEY_ID, SECRET = process.env.HF_API_KEY_SECRET;
function needAuth() {
  if (!KEY || !SECRET) {
    console.error('Missing HF_API_KEY_ID / HF_API_KEY_SECRET. Create a key at https://cloud.higgsfield.ai and put both in .env (gitignored).');
    process.exit(2);
  }
  return { Authorization: `Key ${KEY}:${SECRET}` };
}

// ---- args -----------------------------------------------------------------
const [, , cmd, ...rest] = process.argv;
const args = {}; const positional = [];
for (let i = 0; i < rest.length; i++) {
  if (rest[i].startsWith('--')) { const k = rest[i].slice(2); const v = rest[i + 1] && !rest[i + 1].startsWith('--') ? rest[++i] : 'true'; args[k] = v; }
  else positional.push(rest[i]);
}

// ---- prompt assembly ------------------------------------------------------
const block = (name) => fs.readFileSync(path.join(PROMPTS, `${name}.txt`), 'utf8').trim();
function assemble({ tier, story, raw, shortForm }) {
  if (raw === 'true') return story;
  if (!['landscape', 'scene', 'crowd', 'emblem'].includes(tier)) throw new Error('--tier must be landscape, scene, crowd, or emblem');
  const parts = shortForm
    ? [block('block-1-style'), story]
    : [block('block-1-style'), block('block-2-texture'), block(`block-3-${tier}`), story];
  return parts.join(' ');
}
const negative = () => block('block-5-negative').replace(/^Negative prompts:\s*/i, '');

// ---- models ---------------------------------------------------------------
// Image models. `ref` = whether the model takes a reference image and how.
const IMAGE = {
  'nano-banana':    { path: '/nano-banana', ar: ['auto','1:1','4:3','3:4','3:2','2:3','5:4','4:5','16:9','9:16','21:9'], body: (p, a, o) => ({ prompt: p, aspect_ratio: a, num_images: o.n, output_format: 'png', ...(o.ref ? { input_images: [o.ref] } : {}) }) },
  'soul':           { path: '/higgsfield-ai/soul/standard', ar: ['1:1','4:3','3:4','3:2','2:3','5:4','4:5','16:9','9:16','21:9'], body: (p, a, o) => ({ prompt: p, aspect_ratio: a, num_images: o.n, resolution: o.res || '2K' }) },
  'soul-reference': { path: '/higgsfield-ai/soul/reference', ar: ['9:16','16:9','4:3','3:4','1:1','2:3','3:2'], needsRef: true, body: (p, a, o) => ({ prompt: p, aspect_ratio: a, image_reference_url: o.ref, style_strength: Number(o.strength || 1), enhance_prompt: false, resolution: '1080p', ...(o.seed ? { seed: Number(o.seed) } : {}) }) },
  'flux':           { path: '/flux-pro/kontext/max/text-to-image', ar: ['16:9','4:3','1:1','3:4','9:16','2:3','1:2','2:1','4:5','3:2'], body: (p, a, o) => ({ prompt: p, aspect_ratio: a, ...(o.seed ? { seed: Number(o.seed) } : {}) }) },
  'reve':           { path: '/reve/text-to-image', ar: null, body: (p, a, o) => ({ prompt: p, num_images: o.n }) },
  'reve-remix':     { path: '/reve/remix', ar: ['1:1','4:3','3:4','3:2','2:3','5:4','4:5','16:9','9:16'], needsRef: true, body: (p, a, o) => ({ prompt: p, aspect_ratio: a, image_urls: [o.ref], num_images: o.n }) },
};
// Video models (image-to-video). veo does first/last frame as well.
const VIDEO = {
  'veo':   { path: '/veo3.1/image-to-video', fl: '/veo3.1/first-last-frame-to-video', body: (o) => ({ prompt: o.prompt, image_url: o.image, duration: String(o.duration || 6), resolution: '1080', aspect_ratio: '16:9', generate_audio: false }), flBody: (o) => ({ prompt: o.prompt, first_frame_url: o.image, last_frame_url: o.last, duration: String(o.duration || 6), resolution: '1080', aspect_ratio: '16:9', generate_audio: false }) },
  'kling': { path: '/kling-video/v2.5-turbo/pro/image-to-video', body: (o) => ({ prompt: o.prompt, image_url: o.image, duration: Number(o.duration || 5), negative_prompt: negative() }) },
};

// ---- http -----------------------------------------------------------------
async function post(p, body, headers) {
  const r = await fetch(API + p, { method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(body) });
  const text = await r.text(); let json; try { json = JSON.parse(text); } catch { json = { raw: text }; }
  if (!r.ok) throw new Error(`${r.status} ${p}: ${text.slice(0, 400)}`);
  return json;
}
async function poll(statusUrl, headers) {
  let wait = 3000;
  for (;;) {
    const r = await fetch(statusUrl, { headers }); const j = await r.json();
    if (['completed', 'failed', 'nsfw', 'canceled'].includes(j.status)) return j;
    process.stderr.write(`  ${j.status}…\n`);
    await new Promise((res) => setTimeout(res, wait)); wait = Math.min(wait * 1.5, 15000);
  }
}
async function upload(file, headers) {
  const ext = path.extname(file).slice(1).toLowerCase();
  const ct = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif', mp4: 'video/mp4' }[ext];
  if (!ct) throw new Error(`unsupported file type .${ext}`);
  const u = await post('/files/generate-upload-url', { content_type: ct }, headers);
  const put = await fetch(u.upload_url, { method: 'PUT', headers: u.upload_headers, body: fs.readFileSync(file) });
  if (!put.ok) throw new Error(`upload failed ${put.status}`);
  return u.public_url;
}
const resolveRef = async (v, headers) => (!v || /^https?:\/\//.test(v)) ? v : upload(path.resolve(v), headers);

async function download(url, dest) {
  const r = await fetch(url); if (!r.ok) throw new Error(`download ${r.status}`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
}
function nextVersion(base, ext) {
  let v = 1; while (fs.existsSync(path.join(OUT, `${base}-v${v}.${ext}`))) v++; return v;
}
function log(line) { fs.appendFileSync(LOG, line + '\n'); }

// ---- commands -------------------------------------------------------------
async function main() {
  if (!cmd || cmd === 'help' || args.help) { console.log(fs.readFileSync(fileURLToPath(import.meta.url), 'utf8').split('*/')[0].replace(/^\/\*\s*/, '')); return; }
  const headers = cmd === 'intake' ? null : needAuth();

  if (cmd === 'intake') {
    if (!args.tier || !args.register || !args.subject) throw new Error('--tier, --register and --subject are required to name the files');
    const INBOX = path.join(ROOT, 'brand', 'inbox');
    let sources = positional.slice();
    if (sources.length === 0 && fs.existsSync(INBOX)) sources = fs.readdirSync(INBOX).filter((f) => /\.(png|jpe?g|webp|mp4)$/i.test(f)).map((f) => path.join(INBOX, f));
    if (sources.length === 0) throw new Error('nothing to take in: pass files or URLs, or drop finals into brand/inbox/');
    const ar = args.ar || '21:9';
    const base = `${args.tier}-${args.register}-${args.subject}-${ar.replace(':', 'x')}`;
    const filed = [];
    for (const src of sources) {
      const isUrl = /^https?:\/\//.test(src);
      const ext = ((isUrl ? src.split('?')[0] : src).match(/\.(png|jpe?g|webp|mp4)$/i) || [, 'png'])[1].toLowerCase().replace('jpeg', 'jpg');
      const dest = path.join(OUT, `${base}-v${nextVersion(base, ext)}.${ext}`);
      if (isUrl) await download(src, dest); else { fs.mkdirSync(OUT, { recursive: true }); fs.copyFileSync(path.resolve(src), dest); }
      filed.push({ rel: path.relative(ROOT, dest), src });
      if (!isUrl && path.resolve(src).startsWith(INBOX)) fs.unlinkSync(path.resolve(src));
    }
    const date = new Date().toISOString().slice(0, 10);
    for (const f of filed) log(`\n## ${f.rel}\n- Date: ${date} · Made in Higgsfield, taken in by hand · Aspect: ${ar}\n- Tier: ${args.tier} · Register: ${args.register}\n- Source: ${f.src}${args.prompt ? `\n- Prompt: ${args.prompt}` : ''}`);
    console.log(filed.map((f) => f.rel).join('\n'));
    return;
  }
  if (cmd === 'status') { console.log(JSON.stringify(await (await fetch(`${API}/requests/${positional[0]}/status`, { headers })).json(), null, 2)); return; }
  if (cmd === 'upload') { console.log(await upload(path.resolve(positional[0]), headers)); return; }

  if (cmd === 'estimate' || cmd === 'generate') {
    const model = IMAGE[args.model || 'nano-banana']; if (!model) throw new Error(`unknown model; use ${Object.keys(IMAGE).join(', ')}`);
    const ar = args.ar || '21:9';
    if (model.ar && !model.ar.includes(ar)) throw new Error(`${args.model || 'nano-banana'} does not support --ar ${ar}; use ${model.ar.join(', ')}`);
    if (!args.story) throw new Error('--story is required (Block 4, under 120 words)');
    const ref = await resolveRef(args.ref, headers);
    if (model.needsRef && !ref) throw new Error('this model needs --ref <url|file>');
    const prompt = assemble({ tier: args.tier, story: args.story, raw: args.raw, shortForm: Boolean(ref) }) + ' ' + block('block-5-negative');
    const body = model.body(prompt, ar, { n: Number(args.n || 1), ref, seed: args.seed, res: args.res, strength: args.strength });
    if (cmd === 'estimate') { console.log(JSON.stringify(await post('/estimate' + model.path, body, headers), null, 2)); return; }
    if (!args.subject || !args.register) throw new Error('--subject and --register are required to name the file');
    console.error(`submitting to ${model.path} (${ar})`);
    const sub = await post(model.path, body, headers);
    console.error(`request ${sub.request_id}`);
    const done = await poll(sub.status_url, headers);
    if (done.status !== 'completed') { console.error(JSON.stringify(done, null, 2)); process.exit(1); }
    const base = `${args.tier}-${args.register}-${args.subject}-${ar.replace(':', 'x')}`;
    const files = [];
    for (const img of done.images || []) {
      const ext = (img.url.split('?')[0].match(/\.(png|jpe?g|webp)$/i) || [, 'png'])[1].toLowerCase().replace('jpeg', 'jpg');
      const dest = path.join(OUT, `${base}-v${nextVersion(base, ext)}.${ext}`);
      await download(img.url, dest); files.push(path.relative(ROOT, dest));
    }
    const date = new Date().toISOString().slice(0, 10);
    log(`\n## ${files.join(', ')}\n- Date: ${date} · Model: ${args.model || 'nano-banana'} · Aspect: ${ar}${args.seed ? ` · Seed: ${args.seed}` : ''}${ref ? `\n- Reference: ${ref}` : ''}\n- Tier: ${args.tier} · Register: ${args.register}\n- Story: ${args.story}\n- Request: ${sub.request_id}`);
    console.log(files.join('\n'));
    return;
  }

  if (cmd === 'video') {
    const model = VIDEO[args.model || 'veo']; if (!model) throw new Error(`unknown model; use ${Object.keys(VIDEO).join(', ')}`);
    if (!args.image || !args.prompt || !args.subject) throw new Error('--image, --prompt and --subject are required');
    const image = await resolveRef(args.image, headers); const last = await resolveRef(args.last, headers);
    const usingFL = last && model.fl;
    const p = usingFL ? model.fl : model.path;
    const body = usingFL ? model.flBody({ ...args, image, last }) : model.body({ ...args, image });
    console.error(`submitting to ${p}`);
    const sub = await post(p, body, headers); console.error(`request ${sub.request_id}`);
    const done = await poll(sub.status_url, headers);
    if (done.status !== 'completed') { console.error(JSON.stringify(done, null, 2)); process.exit(1); }
    const url = done.video?.url || done.videos?.[0]?.url || (done.images || [])[0]?.url;
    if (!url) { console.error(JSON.stringify(done, null, 2)); throw new Error('no video url in result'); }
    const base = `video-${args.subject}`; const dest = path.join(OUT, `${base}-v${nextVersion(base, 'mp4')}.mp4`);
    await download(url, dest);
    log(`\n## ${path.relative(ROOT, dest)}\n- Date: ${new Date().toISOString().slice(0, 10)} · Model: ${args.model || 'veo'} · Duration: ${args.duration || 'default'}\n- Image: ${image}${last ? `\n- Last frame: ${last}` : ''}\n- Prompt: ${args.prompt}\n- Request: ${sub.request_id}`);
    console.log(path.relative(ROOT, dest));
    return;
  }
  throw new Error(`unknown command ${cmd}`);
}
main().catch((e) => { console.error(e.message); process.exit(1); });

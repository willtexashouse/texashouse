const sharp = require('sharp');
const [S, P2, REPO] = process.argv.slice(2);
const IV = '#faf6f0', GM = { r: 24, g: 18, b: 16, alpha: 1 };
(async () => {
  const cursive = REPO + '/public/logos/texas-house-cursive-cropped.png';
  const mono = REPO + '/public/logos/txh-monogram.png';
  for (const f of [cursive, mono]) { const m = await sharp(f).metadata(); console.log(f.split('/').pop(), m.width, m.height, m.hasAlpha); }
  // wordmark overlay: cursive logo at 420px wide, top-left inside the Reels safe area
  const wm = await sharp(cursive).resize({ width: 420 }).png().toBuffer();
  const wmm = await sharp(wm).metadata();
  await sharp({ create: { width: 1080, height: 1920, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: wm, left: 72, top: 280 }]).png().toFile(S + '/wordmark-overlay.png');
  // opening frame: K1 with the wordmark
  await sharp(P2 + '/k1.png').composite([{ input: wm, left: 72, top: 280 }]).png().toFile(S + '/open.png');
  // end card
  const monoB = await sharp(mono).resize({ width: 300 }).png().toBuffer();
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='1080' height='1920'>
    <text x='540' y='1010' text-anchor='middle' font-family='TAY Dreamboat' font-size='66' fill='${IV}'>WHERE TEXAS</text>
    <text x='540' y='1096' text-anchor='middle' font-family='TAY Dreamboat' font-size='66' fill='${IV}'>MEETS THE WORLD.</text>
    <text x='540' y='1220' text-anchor='middle' font-family='BN Bergen St' font-size='34' fill='${IV}' letter-spacing='4'>AUSTIN  ·  OCTOBER 2026</text>
    <text x='540' y='1300' text-anchor='middle' font-family='Laslo' font-size='38' fill='${IV}'>texashouse.org</text>
  </svg>`;
  await sharp({ create: { width: 1080, height: 1920, channels: 4, background: GM } })
    .composite([{ input: monoB, left: 390, top: 620 }, { input: Buffer.from(svg), left: 0, top: 0 }]).png().toFile(S + '/end.png');
  // plain ground + line for the slide-off, and the walker at K3 position
  const line = { input: { create: { width: 1080 - 112, height: 4, channels: 4, background: { r: 250, g: 246, b: 240, alpha: 1 } } }, left: 56, top: 1545 };
  await sharp({ create: { width: 1080, height: 1920, channels: 4, background: GM } }).composite([line]).png().toFile(S + '/ground.png');
  await sharp(P2 + '/walker-cut.png').resize({ height: 806 }).png().toFile(S + '/walker-806.png');
  console.log('cards ok', wmm.width, wmm.height);
})();

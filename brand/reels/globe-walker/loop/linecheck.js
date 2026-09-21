// Report, for a frame directory, which frames contain a horizontal line: a row below y=1200
// with one continuous run of non-ground pixels longer than 55% of the width, excluding the
// character's own columns (a run that wide can only be a drawn floor). Prints per-frame rows.
const sharp = require('sharp'); const fs = require('fs');
const dir = process.argv[2];
const files = fs.readdirSync(dir).filter(f => /^f\d+\.png$/.test(f)).sort();
(async () => {
  let withLine = 0; const report = [];
  for (const f of files) {
    const { data, info } = await sharp(dir + '/' + f).raw().toBuffer({ resolveWithObject: true });
    const W = info.width, H = info.height, C = info.channels;
    const rows = [];
    for (let y = 1100; y < H; y++) { let run = 0, best = 0; for (let x = 0; x < W; x++) { const i = (y*W+x)*C; const off = data[i] > 45 || data[i+1] > 40 || data[i+2] > 40; if (off) { run++; if (run > best) best = run; } else run = 0; } if (best > 0.55 * W) rows.push(y); }
    if (rows.length) { withLine++; report.push(`${f}: rows ${rows[0]}-${rows[rows.length-1]}`); }
  }
  console.log(`${withLine}/${files.length} frames have a line`); console.log(report.slice(0, 5).join('\n'));
})();

// Key the flat gun metal ground to alpha on every loop frame.
// Ground is any pixel within tol of the ground colour sampled at the frame corner, reached by
// flood fill from the frame edges, so dark pixels inside the character (ink, hat shadow) stay.
// A one-pixel feather softens the cut edge.
const sharp = require('sharp'); const fs = require('fs');
const [inDir, outDir] = process.argv.slice(2); const tol = 30;
const files = fs.readdirSync(inDir).filter(f => /^l\d+\.png$/.test(f)).sort();
(async () => {
  for (const f of files) {
    const { data, info } = await sharp(inDir + '/' + f).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const W = info.width, H = info.height;
    const g = [data[(10*W+10)*4], data[(10*W+10)*4+1], data[(10*W+10)*4+2]];
    const isG = (i) => Math.abs(data[i*4]-g[0]) <= tol && Math.abs(data[i*4+1]-g[1]) <= tol && Math.abs(data[i*4+2]-g[2]) <= tol;
    const seen = new Uint8Array(W*H); const st = [];
    for (let x = 0; x < W; x++) { st.push(x, (H-1)*W+x); } for (let y = 0; y < H; y++) { st.push(y*W, y*W+W-1); }
    while (st.length) { const i = st.pop(); if (seen[i] || !isG(i)) continue; seen[i] = 1; const x = i%W, y = (i-x)/W; if (x>0) st.push(i-1); if (x<W-1) st.push(i+1); if (y>0) st.push(i-W); if (y<H-1) st.push(i+W); }
    // alpha: 0 for ground; feather pixels adjacent to ground to 50%
    for (let i = 0; i < W*H; i++) if (seen[i]) data[i*4+3] = 0;
    for (let y = 1; y < H-1; y++) for (let x = 1; x < W-1; x++) { const i = y*W+x; if (seen[i]) continue; if (seen[i-1] || seen[i+1] || seen[i-W] || seen[i+W]) data[i*4+3] = 160; }
    await sharp(data, { raw: { width: W, height: H, channels: 4 } }).png().toFile(outDir + '/' + f);
  }
  console.log('keyed', files.length, 'frames, ground', files.length ? 'sampled per frame' : '');
})();

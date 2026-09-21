// Paint out a thin horizontal floor line, halo and all, without touching the boots.
// The character is found by flood fill: seeds are coloured pixels (clay boots, blue legs,
// |r-b| > 25); the fill spreads through every non-ground pixel (ivory outline, grey
// anti-aliasing, ink) but is not allowed to step sideways inside the line's rows, so it can
// come down into a boot sole from above yet cannot run along the line. Anything in the band
// that is not ground and was not reached is line or halo, and is replaced by the ground
// texture from the clean ground just below the band. The dark halo is never traversable.
const sharp = require('sharp'); const fs = require('fs');
const [dir, y0s, y1s] = process.argv.slice(2); const y0 = +y0s, y1 = +y1s;
const TOP = 1200, BOT = y1 + 20;
const files = fs.readdirSync(dir).filter(f => /^f\d+\.png$/.test(f)).sort();
(async () => {
  for (const f of files) {
    const { data, info } = await sharp(dir + '/' + f).raw().toBuffer({ resolveWithObject: true });
    const W = info.width, H = info.height, C = info.channels; const src = Buffer.from(data);
    const samp = []; for (let y = 1300; y < 1340; y += 2) for (let x = 0; x < 100; x += 2) { const i = (y*W+x)*C; samp.push([src[i], src[i+1], src[i+2]]); }
    const med = (k) => samp.map(s => s[k]).sort((a, b) => a - b)[samp.length >> 1];
    const g = [med(0), med(1), med(2)];
    const isGround = (i) => Math.abs(src[i]-g[0]) <= 6 && Math.abs(src[i+1]-g[1]) <= 6 && Math.abs(src[i+2]-g[2]) <= 6;
    const isDark = (i) => src[i] < g[0] - 6 && src[i+1] < g[1] - 6;
    const trav = (i) => !isGround(i) && !isDark(i);
    const seen = new Uint8Array(W * H); const stack = [];
    for (let y = TOP; y <= BOT; y++) for (let x = 0; x < W; x++) { const p = y*W+x, i = p*C; if (Math.abs(src[i]-src[i+2]) > 25) { seen[p] = 1; stack.push(p); } }
    while (stack.length) {
      const p = stack.pop(); const x = p % W, y = (p - x) / W;
      const inBand = y >= y0 && y <= y1;
      const nb = [p - W, p + W]; if (!inBand) { if (x > 0) nb.push(p - 1); if (x < W - 1) nb.push(p + 1); }
      for (const q of nb) { const qy = (q - (q % W)) / W; if (qy < TOP || qy > BOT || seen[q]) continue; if (trav(q*C)) { seen[q] = 1; stack.push(q); } }
    }
    for (let y = y0; y <= y1; y++) for (let x = 0; x < W; x++) {
      const p = y*W+x, i = p*C; if (isGround(i) || seen[p]) continue;
      const s = ((y1 + 12 + (y - y0))*W+x)*C; data[i]=src[s]; data[i+1]=src[s+1]; data[i+2]=src[s+2];
    }
    await sharp(data, { raw: { width: W, height: H, channels: C } }).png().toFile(dir + '/o' + f);
  }
  console.log('processed', files.length);
})();

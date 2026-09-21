// Find the best seamless loop inside a frame sequence: the pair (a, b) with b - a in
// [minLen, maxLen] frames whose frames are most alike, so cutting a..b-1 and repeating it
// has no visible seam. Frames are compared downscaled; the score is mean absolute difference.
const sharp = require('sharp'); const fs = require('fs');
const [dir, minLenS, maxLenS] = process.argv.slice(2); const minLen = +minLenS, maxLen = +maxLenS;
const files = fs.readdirSync(dir).filter(f => /^f\d+\.png$/.test(f)).sort();
(async () => {
  const small = [];
  for (const f of files) small.push(await sharp(dir + '/' + f).resize(135, 240).greyscale().raw().toBuffer());
  const n = small.length; const diff = (a, b) => { let s = 0; const A = small[a], Bf = small[b]; for (let i = 0; i < A.length; i++) s += Math.abs(A[i] - Bf[i]); return s / A.length; };
  const cands = [];
  for (let a = 0; a < n; a++) for (let len = minLen; len <= maxLen && a + len < n; len++) {
    // seam quality: the frame after the loop end should look like the loop start (b ≈ a) and b+1 ≈ a+1
    const b = a + len; const s = diff(a, b) + diff(a + 1 < n ? a + 1 : a, b + 1 < n ? b + 1 : b);
    cands.push({ a, b, len, s });
  }
  cands.sort((x, y) => x.s - y.s);
  console.log('frames', n); console.log(cands.slice(0, 12).map(c => `a=${c.a} b=${c.b} len=${c.len} score=${c.s.toFixed(2)}`).join('\n'));
})();

// Paint out a thin horizontal floor line: in the given rows, any ivory-ish pixel with
// ground above and below it (6 px away) becomes ground. Boot outlines keep their neighbours.
const sharp = require('sharp'); const fs = require('fs');
const [dir, y0s, y1s] = process.argv.slice(2); const y0 = +y0s, y1 = +y1s;
const files = fs.readdirSync(dir).filter(f => /^f\d+\.png$/.test(f)).sort();
(async () => {
  for (const f of files) {
    const { data, info } = await sharp(dir + '/' + f).raw().toBuffer({ resolveWithObject: true });
    const W = info.width, C = info.channels;
    const bg = (i) => data[i] < 60 && data[i+1] < 50 && data[i+2] < 50;
    const iv = (i) => data[i] > 150 && data[i+1] > 140 && data[i+2] > 130;
    for (let y = y0; y <= y1; y++) for (let x = 0; x < W; x++) {
      const i = (y*W+x)*C; if (!iv(i)) continue;
      const up = ((y-6)*W+x)*C, dn = ((y+6)*W+x)*C;
      if (bg(up) && bg(dn)) { data[i]=24; data[i+1]=18; data[i+2]=16; }
    }
    await sharp(data, { raw: { width: W, height: info.height, channels: C } }).png().toFile(dir + '/o' + f);
  }
  console.log('processed', files.length);
})();

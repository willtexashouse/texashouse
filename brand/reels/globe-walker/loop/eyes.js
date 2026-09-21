// Report open eyes per frame: compact ivory ovals inside the eye box (bbox 18-80 px each way,
// fill ratio > 0.55, area 300-2500). Prints frame: count and bboxes.
const sharp = require('sharp');
const [dir, prefix, fromS, toS] = process.argv.slice(2);
const BOX = { x0: 570, y0: 800, x1: 780, y1: 910 };
(async () => {
  for (let n = +fromS; n <= +toS; n++) {
    const f = `${dir}/${prefix}${String(n).padStart(3, '0')}.png`;
    const { data, info } = await sharp(f).raw().toBuffer({ resolveWithObject: true });
    const W = info.width, C = info.channels;
    const iv = (x, y) => { const i = (y*W+x)*C; return data[i] > 200 && data[i+1] > 195 && data[i+2] > 185; };
    const seen = new Set(); const eyes = [];
    for (let y = BOX.y0; y < BOX.y1; y++) for (let x = BOX.x0; x < BOX.x1; x++) {
      const key = y*W+x; if (seen.has(key) || !iv(x, y)) continue;
      const stack = [key]; let cnt = 0, xmin = 1e9, xmax = -1, ymin = 1e9, ymax = -1; seen.add(key);
      while (stack.length) { const p = stack.pop(); const px = p % W, py = (p - px) / W; cnt++; if (px<xmin)xmin=px; if(px>xmax)xmax=px; if(py<ymin)ymin=py; if(py>ymax)ymax=py;
        for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) { const qx = px+dx, qy = py+dy; if (qx < BOX.x0 || qx >= BOX.x1 || qy < BOX.y0 || qy >= BOX.y1) continue; const q = qy*W+qx; if (!seen.has(q) && iv(qx, qy)) { seen.add(q); stack.push(q); } } }
      const w = xmax-xmin+1, h = ymax-ymin+1; const fill = cnt/(w*h);
      if (cnt > 300 && cnt < 2500 && w >= 18 && w <= 80 && h >= 25 && h <= 90 && fill > 0.55) eyes.push(`${xmin},${ymin} ${w}x${h} a${cnt}`);
    }
    console.log(n, eyes.length, eyes.join(' | '));
  }
})();

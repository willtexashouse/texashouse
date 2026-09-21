// Paint a rubber-hose blink: bluebonnet lids slide down over the two eye ovals.
// Eyes are found per frame as compact ivory ovals (24x45-ish) in the eye box; if one is not
// found (glove or continent touching it) its box is carried from the previous frame, shifted
// with the other eye. The lid is an ellipse fill (ocean blue sampled left of the eye) from the
// top of the eye down to a fraction of its height, with a 3 px ink line at the lid edge.
const sharp = require('sharp');
const [dir, startS] = process.argv.slice(2); const start = +startS;
const seq = [0.35, 0.7, 1, 1, 1, 0.7, 0.35];
const BOX = { x0: 570, y0: 800, x1: 780, y1: 910 };
let prev = null;
(async () => {
  for (let k = 0; k < seq.length; k++) {
    const n = start + k; const f = `${dir}/l${String(n).padStart(3, '0')}.png`;
    const { data, info } = await sharp(f).raw().toBuffer({ resolveWithObject: true });
    const W = info.width, C = info.channels;
    const iv = (x, y) => { const i = (y*W+x)*C; return data[i] > 200 && data[i+1] > 195 && data[i+2] > 185; };
    const seen = new Set(); const found = [];
    for (let y = BOX.y0; y < BOX.y1; y++) for (let x = BOX.x0; x < BOX.x1; x++) {
      const key = y*W+x; if (seen.has(key) || !iv(x, y)) continue;
      const stack = [key]; let cnt = 0, xmin = 1e9, xmax = -1, ymin = 1e9, ymax = -1; seen.add(key);
      while (stack.length) { const p = stack.pop(); const px = p % W, py = (p - px) / W; cnt++; if (px<xmin)xmin=px; if(px>xmax)xmax=px; if(py<ymin)ymin=py; if(py>ymax)ymax=py;
        for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) { const qx = px+dx, qy = py+dy; if (qx < BOX.x0 || qx >= BOX.x1 || qy < BOX.y0 || qy >= BOX.y1) continue; const q = qy*W+qx; if (!seen.has(q) && iv(qx, qy)) { seen.add(q); stack.push(q); } } }
      const w = xmax-xmin+1, h = ymax-ymin+1;
      if (cnt > 300 && cnt < 2500 && w >= 18 && w <= 40 && h >= 38 && h <= 90 && cnt/(w*h) > 0.5 && xmin > 615 && xmin < 730) found.push({ xmin, xmax, ymin, ymax });
    }
    found.sort((a, b) => a.xmin - b.xmin);
    let eyes;
    if (found.length === 2) eyes = found;
    else if (prev && found.length === 1) { const isLeft = found[0].xmin < 670; const o = isLeft ? prev[1] : prev[0]; const r = isLeft ? prev[0] : prev[1]; const dy = found[0].ymin - r.ymin, dx = found[0].xmin - r.xmin; const other = { xmin: o.xmin+dx, xmax: o.xmax+dx, ymin: o.ymin+dy, ymax: o.ymax+dy }; eyes = isLeft ? [found[0], other] : [other, found[0]]; }
    else if (prev) eyes = prev; else { console.log('frame', n, 'no eyes, skipped'); continue; }
    prev = eyes;
    // Each eye is a dark ink oval with the ivory crescent inside on its left. Grow the dark
    // oval from the crescent's right neighbour, bounded to a box around the crescent.
    const ink = (x, y) => { const i = (y*W+x)*C; return data[i] < 70 && data[i+1] < 60 && data[i+2] < 70; };
    const mid = Math.round((eyes[0].xmax + eyes[1].xmin) / 2), midy = Math.round((eyes[0].ymin + eyes[0].ymax) / 2);
    const bi = (midy*W + mid)*C; const blue = [data[bi], data[bi+1], data[bi+2]];
    for (const e of eyes) {
      const bx0 = e.xmin - 12, bx1 = e.xmin + 75, by0 = e.ymin - 25, by1 = e.ymax + 30;
      let sx = e.xmax + 2, sy = Math.round((e.ymin + e.ymax) / 2); while (sx < bx1 && !ink(sx, sy)) sx++;
      const seenI = new Set(); const st = [sy*W+sx]; let xmin = 1e9, xmax = -1, ymin = 1e9, ymax = -1;
      while (st.length) { const p = st.pop(); if (seenI.has(p)) continue; seenI.add(p); const px = p % W, py = (p - px) / W; if (px<xmin)xmin=px; if(px>xmax)xmax=px; if(py<ymin)ymin=py; if(py>ymax)ymax=py;
        for (const [dx, dy] of [[1,0],[-1,0],[0,1],[0,-1]]) { const qx = px+dx, qy = py+dy; if (qx < bx0 || qx > bx1 || qy < by0 || qy > by1) continue; if (ink(qx, qy)) st.push(qy*W+qx); } }
      const cx = (xmin + xmax) / 2, cy = (ymin + ymax) / 2, rx = (xmax - xmin) / 2 + 1, ry = (ymax - ymin) / 2 + 1;
      const top = Math.round(cy - ry), lidY = Math.round(top + 2*ry*seq[k]);
      for (let y = top; y < lidY; y++) { const t = (y - cy) / ry; if (Math.abs(t) > 1) continue; const half = rx * Math.sqrt(1 - t*t); for (let x = Math.round(cx - half); x <= Math.round(cx + half); x++) { const i = (y*W+x)*C; data[i] = blue[0]; data[i+1] = blue[1]; data[i+2] = blue[2]; } }
      const t = Math.min(0.82, Math.abs((lidY - cy) / ry)); const half = rx * Math.sqrt(1 - t*t); const lineY = Math.min(lidY, Math.round(cy + ry * 0.82));
      for (let y = lineY - 2; y <= lineY + 1; y++) for (let x = Math.round(cx - half); x <= Math.round(cx + half); x++) { const i = (y*W+x)*C; data[i] = 24; data[i+1] = 18; data[i+2] = 16; }
      console.log('  oval', xmin, ymin, xmax - xmin + 1, 'x', ymax - ymin + 1, 'lid', lidY);
    }
    await sharp(data, { raw: { width: W, height: info.height, channels: C } }).png().toFile(f);
    console.log('frame', n, 'eyes', eyes.map(e => `${e.xmin},${e.ymin}`).join(' '), found.length === 2 ? '' : '(carried)');
  }
})();

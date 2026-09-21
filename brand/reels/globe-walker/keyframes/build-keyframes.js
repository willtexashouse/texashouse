const sharp = require('sharp');
const S = process.argv[2];
(async () => {
  const { data, info } = await sharp(S + '/k2-center.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height;
  const bg = [24, 18, 16], tol = 30;
  const isBg = (i) => Math.abs(data[i*4]-bg[0])<=tol && Math.abs(data[i*4+1]-bg[1])<=tol && Math.abs(data[i*4+2]-bg[2])<=tol;
  // flood fill from the frame edges
  const seen = new Uint8Array(W*H); const stack = [];
  for (let x=0;x<W;x++){stack.push(x, (H-1)*W+x);} for(let y=0;y<H;y++){stack.push(y*W, y*W+W-1);}
  while (stack.length) { const i = stack.pop(); if (seen[i] || !isBg(i)) continue; seen[i]=1;
    const x=i%W, y=(i-x)/W; if(x>0)stack.push(i-1); if(x<W-1)stack.push(i+1); if(y>0)stack.push(i-W); if(y<H-1)stack.push(i+W); }
  for (let i=0;i<W*H;i++) if (seen[i]) data[i*4+3]=0;
  // horizon line rows: non-bg span wider than 60% of the frame
  // a line row has one continuous ivory run longer than half the frame
  const isIvory = (i) => data[i*4]>200 && data[i*4+1]>190 && data[i*4+2]>180;
  const lineRows=[];
  for (let y=0;y<H;y++){ let run=0, best=0; for(let x=0;x<W;x++){ if(isIvory(y*W+x)){run++; if(run>best)best=run;} else run=0; } if(best>0.5*W) lineRows.push(y); }
  const y0=lineRows[0], y1=lineRows[lineRows.length-1];
  console.log('line rows', y0, y1, 'of', H);
  // columns that belong to the character: any non-bg pixel in the 60px above the line
  const charCol = new Uint8Array(W);
  for (let x=0;x<W;x++){ for(let y=Math.max(0,y0-80);y<y0;y++){ if(!seen[y*W+x]){charCol[x]=1;break;} } }
  for (let y=y0;y<=y1;y++) for(let x=0;x<W;x++) if(!charCol[x]) data[(y*W+x)*4+3]=0;
  // bbox
  let minx=W,maxx=0,miny=H,maxy=0;
  for(let y=0;y<H;y++)for(let x=0;x<W;x++){ if(data[(y*W+x)*4+3]){ if(x<minx)minx=x; if(x>maxx)maxx=x; if(y<miny)miny=y; if(y>maxy)maxy=y; } }
  console.log('bbox', minx, miny, maxx, maxy, 'size', maxx-minx+1, maxy-miny+1);
  const cut = await sharp(data, { raw: { width: W, height: H, channels: 4 } }).extract({ left: minx, top: miny, width: maxx-minx+1, height: maxy-miny+1 }).png().toBuffer();
  await sharp(cut).toFile(S + '/walker-cut.png');
  // compose 1080x1920 frames
  const FW=1080, FH=1920, lineY=1545, lineT=4, charH=Math.round(FH*0.42);
  const ch = await sharp(cut).resize({ height: charH }).png().toBuffer();
  const cm = await sharp(ch).metadata(); const cw = cm.width;
  console.log('character', cw, charH);
  const line = { input: { create: { width: FW-2*56, height: lineT, channels: 4, background: { r: 250, g: 246, b: 240, alpha: 1 } } }, left: 56, top: lineY };
  const margin = 24;
  const xs = { k1: margin, k2: Math.round((FW-cw)/2), k3: FW-cw-margin };
  for (const [k, x] of Object.entries(xs)) {
    await sharp({ create: { width: FW, height: FH, channels: 4, background: { r: 24, g: 18, b: 16, alpha: 1 } } })
      .composite([line, { input: ch, left: x, top: lineY + lineT - charH + 2 }]).png().toFile(`${S}/${k}.png`);
  }
  console.log('frames written', xs);
})();

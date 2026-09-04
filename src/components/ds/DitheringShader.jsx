import React, { useEffect, useRef } from 'react'

// Dithering shader (WebGL2) — adapted from a Tailwind/TS component to plain JSX,
// made responsive (fills its container). Renders an animated "shape" (wave, etc.)
// resolved through a dither pattern. type="random" gives organic, paper-grain
// dithering; the Bayer types ("2x2/4x4/8x8") give the ordered dot/plus pattern.
// No external dependencies. Freezes for prefers-reduced-motion.

const declarePI = `
#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846
`

const proceduralHash11 = `
  float hash11(float p) {
    p = fract(p * 0.3183099) + 0.1;
    p *= p + 19.19;
    return fract(p * p);
  }
`

const proceduralHash21 = `
  float hash21(vec2 p) {
    p = fract(p * vec2(0.3183099, 0.3678794)) + 0.1;
    p += dot(p, p + 19.19);
    return fract(p.x * p.y);
  }
`

const simplexNoise = `
vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`

const vertexShaderSource = `#version 300 es
precision mediump float;
layout(location = 0) in vec4 a_position;
void main() {
  gl_Position = a_position;
}
`

const fragmentShaderSource = `#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec4 u_colorBack;
uniform vec4 u_colorFront;
uniform float u_shape;
uniform float u_type;
uniform float u_pxSize;
uniform float u_glitch;
uniform float u_scale;   // framebuffer px per CSS px (= superSample) — keeps glitch lines CSS-sized at any resolution
uniform float u_overlay; // 1.0 = crisp glitch overlay: transparent except during bursts, no own background

out vec4 fragColor;

${simplexNoise}
${declarePI}
${proceduralHash11}
${proceduralHash21}

float getSimplexNoise(vec2 uv, float t) {
  float noise = .5 * snoise(uv - vec2(0., .3 * t));
  noise += .5 * snoise(2. * uv + vec2(0., .32 * t));
  return noise;
}

const int bayer2x2[4] = int[4](0, 2, 3, 1);
const int bayer4x4[16] = int[16](
  0,  8,  2, 10,
 12,  4, 14,  6,
  3, 11,  1,  9,
 15,  7, 13,  5
);

const int bayer8x8[64] = int[64](
   0, 32,  8, 40,  2, 34, 10, 42,
  48, 16, 56, 24, 50, 18, 58, 26,
  12, 44,  4, 36, 14, 46,  6, 38,
  60, 28, 52, 20, 62, 30, 54, 22,
   3, 35, 11, 43,  1, 33,  9, 41,
  51, 19, 59, 27, 49, 17, 57, 25,
  15, 47,  7, 39, 13, 45,  5, 37,
  63, 31, 55, 23, 61, 29, 53, 21
);

float getBayerValue(vec2 uv, int size) {
  ivec2 pos = ivec2(mod(uv, float(size)));
  int index = pos.y * size + pos.x;
  if (size == 2) {
    return float(bayer2x2[index]) / 4.0;
  } else if (size == 4) {
    return float(bayer4x4[index]) / 16.0;
  } else if (size == 8) {
    return float(bayer8x8[index]) / 64.0;
  }
  return 0.0;
}

// the raw 0..1 shape field for the active u_shape, sampled at shape_uv. Pulled
// out of main() so the glitch can sample it three times (RGB channel split).
float shapeFor(vec2 shape_uv, float t) {
  float shape = 0.;
  if (u_shape < 1.5) {
    shape_uv *= .001;
    shape = 0.5 + 0.5 * getSimplexNoise(shape_uv, t);
    shape = smoothstep(0.3, 0.9, shape);
  } else if (u_shape < 2.5) {
    shape_uv *= .003;
    for (float i = 1.0; i < 6.0; i++) {
      shape_uv.x += 0.6 / i * cos(i * 2.5 * shape_uv.y + t);
      shape_uv.y += 0.6 / i * cos(i * 1.5 * shape_uv.x + t);
    }
    shape = .15 / abs(sin(t - shape_uv.y - shape_uv.x));
    shape = smoothstep(0.02, 1., shape);
  } else if (u_shape < 3.5) {
    shape_uv *= .05;
    float stripeIdx = floor(2. * shape_uv.x / TWO_PI);
    float rand = hash11(stripeIdx * 10.);
    rand = sign(rand - .5) * pow(.1 + abs(rand), .4);
    shape = sin(shape_uv.x) * cos(shape_uv.y - 5. * rand * t);
    shape = pow(abs(shape), 6.);
  } else if (u_shape < 4.5) {
    shape_uv *= 4.;
    float wave = cos(.5 * shape_uv.x - 2. * t) * sin(1.5 * shape_uv.x + t) * (.75 + .25 * cos(3. * t));
    shape = 1. - smoothstep(-1., 1., shape_uv.y + wave);
  } else if (u_shape < 5.5) {
    float dist = length(shape_uv);
    float waves = sin(pow(dist, 1.7) * 7. - 3. * t) * .5 + .5;
    shape = waves;
  } else if (u_shape < 6.5) {
    float l = length(shape_uv);
    float angle = 6. * atan(shape_uv.y, shape_uv.x) + 4. * t;
    float twist = 1.2;
    float offset = pow(l, -twist) + angle / TWO_PI;
    float mid = smoothstep(0., 1., pow(l, twist));
    shape = mix(0., fract(offset), mid);
  } else {
    shape_uv *= 2.;
    float d = 1. - pow(length(shape_uv), 2.);
    vec3 pos = vec3(shape_uv, sqrt(d));
    vec3 lightPos = normalize(vec3(cos(1.5 * t), .8, sin(1.25 * t)));
    shape = .5 + .5 * dot(lightPos, pos);
    shape *= step(0., d);
  }
  return clamp(shape, 0.0, 1.0);
}

void main() {
  float t = .5 * u_time;
  vec2 uv = gl_FragCoord.xy / u_resolution.xy;
  uv -= .5;

  float pxSize = u_pxSize;
  vec2 pxSizeUv = gl_FragCoord.xy;
  pxSizeUv -= .5 * u_resolution;
  pxSizeUv /= pxSize;
  vec2 pixelizedUv = floor(pxSizeUv) * pxSize / u_resolution.xy;

  vec2 ditheringNoise_uv = uv * u_resolution;

  // ── GLITCH ────────────────────────────────────────────────────────────────
  // Strong, intermittent broken-signal bursts: horizontal slab tears, a chromatic
  // RGB channel split, and a brightness strobe. Bursts hit ~half of the ~1.2s
  // windows and last a fraction of a second. u_glitch gates it off (reduced motion).
  float gt = u_time;
  float winOn = step(0.5, hash11(floor(gt / 0.7)));
  float lt = fract(gt / 0.7);
  float env = winOn * smoothstep(0.0, 0.03, lt) * (1.0 - smoothstep(0.10, 0.45, lt));
  float strobe = step(0.4, hash11(floor(gt * 32.0)));
  // Intermittent broken-signal bursts (~half of the ~0.7s windows fire). Monochrome
  // cream/ember to match the rest of the system — no rainbow channel split.
  float g = clamp(env * (0.6 + 0.6 * strobe), 0.0, 1.0) * u_glitch;

  // 1 CSS px scanline tear, VERTICAL. u_scale = framebuffer px per CSS px, so
  // dividing by u_scale = 1 CSS px columns regardless of supersample — per-column jitter.
  float bandRand = hash11(floor(gl_FragCoord.x / u_scale) + floor(gt * 30.0) * 7.0);
  vec2 base_uv = pixelizedUv + vec2(0.0, (bandRand - 0.5) * 2.0 * g * 0.035);

  // RGB chromatic split — sample the wave at three x-offsets, one per channel.
  // split scales with g, so it is 0 at rest (clean cream wave) and only fringes
  // red / cyan during a burst. Solid black stays black: every channel is 0 there,
  // so there is nothing to pull apart — the colour only rides the wave + its edge.
  // split VERTICALLY — the wave's contour is horizontal, so a vertical channel
  // offset is what actually fringes it. Red bleeds up past the glow's top edge
  // (warm, on-brand); blue recedes into the body.
  float split = g * 0.06;
  float sR = shapeFor(base_uv - vec2(0.0, split), t);
  float sG = shapeFor(base_uv, t);
  float sB = shapeFor(base_uv + vec2(0.0, split), t);

  // crisp 1 CSS px dark VERTICAL scanlines every 3 CSS px + strobe (u_scale-aware)
  float lineMask = step(fract(gl_FragCoord.x / (3.0 * u_scale)), 0.34); // 1 on the 1px column, 0 in the 2px gap
  float drop = mix(1.0, 0.40, g * 0.7 * lineMask);
  float grain = hash21(ditheringNoise_uv) - 0.5;
  float flick = 1.0 + g * (hash11(floor(gt * 44.0)) - 0.4) * 1.4;
  float resR = clamp((sR * 0.80 + grain * 0.12) * flick * drop, 0.0, 1.0);
  float resG = clamp((sG * 0.80 + grain * 0.12) * flick * drop, 0.0, 1.0);
  float resB = clamp((sB * 0.80 + grain * 0.12) * flick * drop, 0.0, 1.0);

  vec3 fgColor = u_colorFront.rgb;
  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  float bgOpacity = u_colorBack.a;

  // tint each channel by the cream foreground — at the wave's edge the channels
  // diverge into a red / cyan fringe; the solid interior stays cream.
  vec3 color = fgColor * vec3(resR, resG, resB);
  float opacity = u_colorFront.a * clamp(max(resR, max(resG, resB)), 0.0, 1.0);

  // base layer composites its own black background; the crisp overlay stays
  // transparent in the gaps so the supersampled wave underneath shows through.
  color += bgColor * (1.0 - opacity) * (1.0 - u_overlay);
  opacity += bgOpacity * (1.0 - opacity) * (1.0 - u_overlay);

  // overlay is visible only during a burst — scale colour AND alpha together
  // (premultiplied) so it fades in/out with no bright halo.
  float gate = mix(1.0, clamp(g * 4.0, 0.0, 1.0), u_overlay);
  color *= gate;
  opacity *= gate;

  fragColor = vec4(color, opacity);
}
`

const DitheringShapes = { simplex: 1, warp: 2, dots: 3, wave: 4, ripple: 5, swirl: 6, sphere: 7 }
const DitheringTypes = { random: 1, '2x2': 2, '4x4': 3, '8x8': 4 }

function hexToRgba(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return [0, 0, 0, 1]
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255,
    1,
  ]
}

function createShader(gl, type, source) {
  const shader = gl.createShader(type)
  if (!shader) return null
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Dithering shader compile error: ' + gl.getShaderInfoLog(shader))
    gl.deleteShader(shader)
    return null
  }
  return shader
}

function createProgram(gl, vs, fs) {
  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vs)
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fs)
  if (!vertexShader || !fragmentShader) return null
  const program = gl.createProgram()
  if (!program) return null
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Dithering program link error: ' + gl.getProgramInfoLog(program))
    gl.deleteProgram(program)
    return null
  }
  return program
}

export function DitheringShader({
  colorBack = '#000000',
  colorFront = '#ffffff',
  shape = 'wave',
  type = 'random',
  pxSize = 3,
  speed = 0.6,
  superSample = 4,
  glitch = true,
  overlay = false,
  style = {},
}) {
  const mountRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    const canvas = canvasRef.current
    if (!mount || !canvas) return undefined

    const reduce =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const gl = canvas.getContext('webgl2')
    if (!gl) {
      console.error('WebGL2 not supported')
      return undefined
    }

    const program = createProgram(gl, vertexShaderSource, fragmentShaderSource)
    if (!program) return undefined

    const u = {
      time: gl.getUniformLocation(program, 'u_time'),
      res: gl.getUniformLocation(program, 'u_resolution'),
      cb: gl.getUniformLocation(program, 'u_colorBack'),
      cf: gl.getUniformLocation(program, 'u_colorFront'),
      shape: gl.getUniformLocation(program, 'u_shape'),
      type: gl.getUniformLocation(program, 'u_type'),
      px: gl.getUniformLocation(program, 'u_pxSize'),
      glitch: gl.getUniformLocation(program, 'u_glitch'),
      scale: gl.getUniformLocation(program, 'u_scale'),
      overlay: gl.getUniformLocation(program, 'u_overlay'),
    }

    const posLoc = gl.getAttribLocation(program, 'a_position')
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    )
    gl.enableVertexAttribArray(posLoc)
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

    // render above display resolution and let CSS scale it down — supersampling
    // anti-aliases the binary dither so it reads smooth instead of low-res
    const renderScale = Math.max(1, superSample)
    let W = 1
    let H = 1
    const resize = () => {
      W = Math.max(1, Math.floor(mount.clientWidth * renderScale))
      H = Math.max(1, Math.floor(mount.clientHeight * renderScale))
      canvas.width = W
      canvas.height = H
      gl.viewport(0, 0, W, H)
    }
    resize()
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(resize) : null
    if (ro) ro.observe(mount)

    const cbRGBA = hexToRgba(colorBack)
    const cfRGBA = hexToRgba(colorFront)
    const start = Date.now()
    const frameMs = 1000 / 40 // throttle: slow wave doesn't need 60fps, keeps the supersampled render cheap
    let lastDraw = 0
    let raf = 0
    let visible = true

    const draw = () => {
      const now = Date.now()
      if (now - lastDraw >= frameMs) {
        lastDraw = now
        gl.clear(gl.COLOR_BUFFER_BIT)
        gl.useProgram(program)
        gl.uniform1f(u.time, (now - start) * 0.001 * speed)
        gl.uniform2f(u.res, W, H)
        gl.uniform4fv(u.cb, cbRGBA)
        gl.uniform4fv(u.cf, cfRGBA)
        gl.uniform1f(u.shape, DitheringShapes[shape] || 4)
        gl.uniform1f(u.type, DitheringTypes[type] || 4)
        gl.uniform1f(u.px, pxSize)
        gl.uniform1f(u.glitch, (reduce || !glitch) ? 0.0 : 1.0)
        gl.uniform1f(u.scale, renderScale)
        gl.uniform1f(u.overlay, overlay ? 1.0 : 0.0)
        gl.drawArrays(gl.TRIANGLES, 0, 6)
      }
      raf = speed !== 0 && !reduce && visible ? requestAnimationFrame(draw) : 0
    }
    draw()

    // only render while the footer is on screen — supersampling is GPU-heavy
    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            (e) => {
              visible = e[0].isIntersecting
              if (visible && speed !== 0 && !reduce && !raf) raf = requestAnimationFrame(draw)
            },
            { threshold: 0 },
          )
        : null
    if (io) io.observe(mount)

    return () => {
      visible = false
      if (raf) cancelAnimationFrame(raf)
      if (io) io.disconnect()
      if (ro) ro.disconnect()
      gl.deleteProgram(program)
      gl.deleteBuffer(buf)
    }
  }, [colorBack, colorFront, shape, type, pxSize, speed, superSample, glitch, overlay])

  return (
    <div ref={mountRef} aria-hidden style={{ position: 'absolute', inset: 0, ...style }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  )
}

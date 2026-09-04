import React from 'react';
import { DitheringShader } from './DitheringShader.jsx';

/*
  Horizon band artwork — the portfolio footer's animated dither, ported as-is.
  Two layers, exactly as the portfolio composes them:
    1. base: a smooth supersampled wave, glitch off
    2. overlay: a crisp display-resolution glitch, transparent except during bursts

  Colours follow the brand rule "highlights toward Ivory, shadows toward Gun
  Metal": the wave is Ivory Dim (the portfolio used its cream), the ground is
  Gun Metal so the band sits flush with the page instead of reading as a black
  strip. Mounted as a client:visible island; the CSS drape under it stays as
  the pre-hydration / no-WebGL fallback.
*/
export default function HorizonShader({ front = '#e7decd', back = '#181210' }) {
  return (
    <>
      <DitheringShader colorFront={front} colorBack={back} shape="wave" type="random" pxSize={0.5} speed={0.6} glitch={false} />
      <DitheringShader colorFront={front} colorBack={back} shape="wave" type="random" pxSize={0.5} speed={0.6} glitch overlay superSample={1} />
    </>
  );
}

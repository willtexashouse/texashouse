#!/usr/bin/env bash
# Globe walk reel, v1 cut. Inputs live beside this script:
#   open.png (K1 + wordmark), clipA.mp4 (K1→K2), clipB.mp4 (K2→K3),
#   ground.png + walker-806.png (slide-off), end.png, wordmark-overlay.png.
set -euo pipefail
FF=${FFMPEG:-ffmpeg}
cd "$(dirname "$0")"
$FF -v error -y \
 -loop 1 -framerate 24 -t 1 -i open.png \
 -i clipA.mp4 -i clipB.mp4 \
 -loop 1 -framerate 24 -t 2 -i ground.png -loop 1 -framerate 24 -t 2 -i walker-806.png \
 -loop 1 -framerate 24 -t 2 -i end.png \
 -loop 1 -framerate 24 -t 13 -i wordmark-overlay.png \
 -filter_complex "
 [0:v]format=yuv420p,setsar=1[open];
 [1:v]crop=1080:1920:4:0,setsar=1,format=yuv420p[a];
 [2:v]crop=1080:1920:4:0,setsar=1,format=yuv420p[b];
 [3:v][4:v]overlay=x='380+(t/2)*760':y='743+10*abs(sin(t*9))':eval=frame,format=yuv420p,setsar=1[slide];
 [5:v]format=yuv420p,setsar=1,fade=t=in:st=0:d=0.5[endc];
 [open][a][b][slide]concat=n=4:v=1:a=0[walk];
 [walk][6:v]overlay=0:0:eof_action=pass:format=auto[walkwm];
 [walkwm][endc]concat=n=2:v=1:a=0,fps=24[out]" \
 -map "[out]" -c:v libx264 -preset medium -crf 18 -pix_fmt yuv420p -movflags +faststart "${1:-globe-walk-v1.mp4}"

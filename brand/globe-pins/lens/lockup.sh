#!/bin/bash
# lockup2.sh <globe-alpha.png> <ring_cx> <ring_cy> <ring_r> <lens-alpha.png> <out.png> [ring_colour]
# 4:5 canvas 2048x2560 gun metal. Globe d=960 centred (1408,820) top right. Lens d=1160 centred (648,1740) bottom left.
set -e
G=$1; RCX=$2; RCY=$3; RR=$4; L=$5; OUT=$6; AC=${7:-#793f34}
GM='#181210'; W=11
SC=$(echo "960/1010" | bc -l)
GX=$(echo "1408 - $SC*550" | bc -l); GY=$(echo "820 - $SC*550" | bc -l)
CX=$(echo "$GX + $SC*$RCX" | bc -l); CY=$(echo "$GY + $SC*$RCY" | bc -l); R=$(echo "$SC*$RR" | bc -l)
LCX=648; LCY=1740; LR=580
DX=$(echo "$LCX - $CX" | bc -l); DY=$(echo "$LCY - $CY" | bc -l); LEN=$(echo "sqrt($DX*$DX+$DY*$DY)" | bc -l)
UX=$(echo "$DX/$LEN" | bc -l); UY=$(echo "$DY/$LEN" | bc -l)
SX=$(echo "$CX + ($R+5)*$UX" | bc -l); SY=$(echo "$CY + ($R+5)*$UY" | bc -l)
EX=$(echo "$LCX - ($LR+6)*$UX" | bc -l); EY=$(echo "$LCY - ($LR+6)*$UY" | bc -l)
convert -size 2048x2560 xc:"$GM" \
  \( "$G" -resize 1045x1045 \) -geometry +${GX%.*}+${GY%.*} -composite \
  -fill none -stroke "$AC" -strokewidth $W -draw "circle $CX,$CY $(echo "$CX+$R" | bc -l),$CY" \
  -draw "line $SX,$SY $EX,$EY" \
  \( "$L" -resize 1160x1160 \) -geometry +68+1160 -composite \
  "$OUT"

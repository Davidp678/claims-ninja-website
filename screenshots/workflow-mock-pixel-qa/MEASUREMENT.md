# Workflow mock visual QA — dual-bound measurement

Canvas: **1024×467** | Capture: `http://localhost:3017`

## Measurement method

| Bound type | Actual | Reference |
|---|---|---|
| **Geometric** | `data-qa` DOM `getBoundingClientRect` | Curated mask geometry (`reference-masks.json`) |
| **Painted ink** | Sequential unique-color isolation (full SVG descendant recolor + restore) | Pixels **inside** the curated mask matching `inkMode` |

These two bound types are never mixed in a single delta cell. Mask audit overlays (magenta = ink hits) live under `masks/`.

## Isolation assertions

| Result | **PASS** |
| Failures | **0** |

## Control

| Check | Result |
|---|---|
| actual vs actual mismatched | **0** |
| amplified hot pixels | **0** |
| overall mismatch | **4.79%** (22904 px) |

## Locked outer geometry (unchanged)

| Stage | x | y | w | h |
|---|---:|---:|---:|---:|
| 01 | 85 | 170 | 157 | 229 |
| 02 | 282 | 170 | 220 | 229 |
| 03 | 536 | 170 | 210 | 229 |
| 04 | 779 | 170 | 142 | 229 |

## Heading title isolation note

| Detector | Reference | Actual |
|---|---|---|
| Loose (L≥160, can include glow) | 285,74 463×42 | 285,74 463×28 |
| Dense glyph (L≥180) | 285,74 463×29 | 286,74 462×28 |

## Geometric bounds (mask geometry vs DOM)

| Element | Ref geometric | Actual DOM | Delta |
|---|---|---|---|
| `connector-1-line` | 246,238 30×3 | 246,238 30×3 | 0,0 0×0 |
| `connector-1-node` | 256,233 13×13 | 256,233 13×13 | 0,0 0×0 |
| `connector-1-node-border` | 256,233 13×13 | - | -256,-233 -13×-13 |
| `connector-1-node-interior` | 258,235 9×9 | - | -258,-235 -9×-9 |
| `connector-1-dot` | 260,237 5×5 | 260,237 5×5 | 0,0 0×0 |
| `connector-1-glow` | 253,230 19×19 | 255,232 14×14 | +2,+2 -5×-5 |
| `connector-2-line` | 508,238 24×3 | 508,238 24×3 | 0,0 0×0 |
| `connector-2-node` | 513,233 13×13 | 513,233 13×13 | 0,0 0×0 |
| `connector-2-node-border` | 513,233 13×13 | - | -513,-233 -13×-13 |
| `connector-2-node-interior` | 515,235 9×9 | - | -515,-235 -9×-9 |
| `connector-2-dot` | 517,237 5×5 | 517,237 5×5 | 0,0 0×0 |
| `connector-2-glow` | 510,230 19×19 | 512,232 14×14 | +2,+2 -5×-5 |
| `connector-3-line` | 750,238 24×3 | 750,238 24×3 | 0,0 0×0 |
| `connector-3-node` | 757,233 13×13 | 757,233 13×13 | 0,0 0×0 |
| `connector-3-node-border` | 757,233 13×13 | - | -757,-233 -13×-13 |
| `connector-3-node-interior` | 759,235 9×9 | - | -759,-235 -9×-9 |
| `connector-3-dot` | 761,237 5×5 | 761,237 5×5 | 0,0 0×0 |
| `connector-3-glow` | 754,230 19×19 | 757,232 14×14 | +3,+2 -5×-5 |
| `stage-03-check-0` | 589,208 16×16 | 589,208 16×16 | 0,0 0×0 |
| `stage-03-check-1` | 589,228 16×16 | 589,228 16×16 | 0,0 0×0 |
| `stage-03-check-2` | 589,248 16×16 | 589,248 16×16 | 0,0 0×0 |
| `stage-02-active-dot` | 327,208 9×9 | 326,209 9×9 | -1,+1 0×0 |
| `stage-01-pill-icon` | 104,364 14×14 | 105,366 13×13 | +1,+2 -1×-1 |
| `stage-02-pill-icon` | 300,364 14×14 | 302,366 13×13 | +2,+2 -1×-1 |
| `stage-03-pill-icon` | 552,364 14×14 | 556,366 13×13 | +4,+2 -1×-1 |
| `stage-04-pill-icon` | 796,364 14×14 | 798,366 13×13 | +2,+2 -1×-1 |
| `heading-eyebrow` | 420,47 185×12 | 1,49 1023×9 | -419,+2 +838×-3 |
| `heading-title` | 280,72 470×34 | 4,70 1024×30 | -276,-2 +554×-4 |
| `heading-support` | 288,113 460×16 | 291,113 450×15 | +3,0 -10×-1 |
| `stage-01-number` | 98,186 24×20 | 101,187 15×15 | +3,+1 -9×-5 |
| `stage-02-number` | 295,186 28×20 | 298,187 18×15 | +3,+1 -10×-5 |
| `stage-03-number` | 548,186 28×20 | 552,187 18×15 | +4,+1 -10×-5 |
| `stage-04-number` | 790,186 28×20 | 795,187 18×15 | +5,+1 -10×-5 |
| `stage-01-symbol` | 108,218 36×40 | 106,221 36×36 | -2,+3 0×-4 |
| `stage-02-symbol` | 300,216 36×36 | 302,220 34×34 | +2,+4 -2×-2 |
| `stage-03-symbol` | 554,216 36×36 | 558,221 33×33 | +4,+5 -3×-3 |
| `stage-04-symbol` | 800,218 34×34 | 799,219 36×36 | -1,+1 +2×+2 |
| `stage-01-title` | 98,282 120×18 | 100,283 125×12 | +2,+1 +5×-6 |
| `stage-02-title` | 296,282 140×18 | 297,283 184×12 | +1,+1 +44×-6 |
| `stage-03-title` | 548,282 140×18 | 551,283 174×12 | +3,+1 +34×-6 |
| `stage-04-title` | 790,282 128×18 | 794,283 116×12 | +4,+1 -12×-6 |
| `stage-01-body-line-0` | 98,303 120×13 | 101,303 126×14 | +3,0 +6×+1 |
| `stage-01-body-line-1` | 98,316 120×13 | 101,318 126×14 | +3,+2 +6×+1 |
| `stage-01-body-line-2` | 98,329 80×13 | 101,333 126×14 | +3,+4 +46×+1 |
| `stage-02-body-line-0` | 296,303 140×13 | 298,303 179×14 | +2,0 +39×+1 |
| `stage-02-body-line-1` | 296,316 140×13 | 298,318 179×14 | +2,+2 +39×+1 |
| `stage-02-body-line-2` | 296,329 140×13 | 298,333 179×14 | +2,+4 +39×+1 |
| `stage-03-body-line-0` | 548,303 140×13 | 552,303 169×14 | +4,0 +29×+1 |
| `stage-03-body-line-1` | 548,316 140×13 | 552,318 169×14 | +4,+2 +29×+1 |
| `stage-03-body-line-2` | 548,329 120×13 | 552,333 169×14 | +4,+4 +49×+1 |
| `stage-04-body-line-0` | 790,303 128×13 | 795,303 111×14 | +5,0 -17×+1 |
| `stage-04-body-line-1` | 790,316 128×13 | 795,318 111×14 | +5,+2 -17×+1 |
| `stage-04-body-line-2` | 790,329 128×13 | 795,333 111×14 | +5,+4 -17×+1 |
| `stage-01-pill` | 96,362 94×22 | 97,362 90×22 | +1,0 -4×0 |
| `stage-02-pill` | 294,362 120×22 | 294,362 115×22 | 0,0 -5×0 |
| `stage-03-pill` | 546,362 132×22 | 548,362 125×22 | +2,0 -7×0 |
| `stage-04-pill` | 788,362 94×22 | 790,362 93×22 | +2,0 -1×0 |
| `stage-01-pill-label` | 118,366 70×12 | 123,368 55×9 | +5,+2 -15×-3 |
| `stage-02-pill-label` | 316,366 95×12 | 319,367 80×9 | +3,+1 -15×-3 |
| `stage-03-pill-label` | 568,366 105×12 | 573,367 90×9 | +5,+1 -15×-3 |
| `stage-04-pill-label` | 812,366 70×12 | 816,367 56×9 | +4,+1 -14×-3 |
| `stage-01-icon-frame` | 97,210 55×55 | 99,214 50×50 | +2,+4 -5×-5 |
| `stage-02-icon-frame` | 294,210 52×52 | 295,213 48×48 | +1,+3 -4×-4 |
| `stage-03-icon-frame` | 546,210 52×52 | 550,213 48×48 | +4,+3 -4×-4 |
| `stage-04-icon-frame` | 790,210 50×50 | 792,212 50×50 | +2,+2 0×0 |
| `stage-02-rear-panel` | 318,200 170×72 | 318,200 170×72 | 0,0 0×0 |
| `stage-03-rear-panel` | 572,200 160×78 | 572,200 160×72 | 0,0 0×-6 |

## Painted-ink bounds (mask ink vs paint-isolation)

Primitives marked `geometry-only` intentionally omit painted-ink deltas (JPEG ink is unreliable for those marks).

| Element | Ref ink | Actual ink | Delta | Methods |
|---|---|---|---|---|
| `connector-1-line` | 246,238 30×3 | 246,238 30×2 | 0,0 0×-1 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-1-node` | 257,238 11×3 | 256,233 12×12 | -1,-5 +1×+9 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-1-node-border` | 257,238 11×3 | 260,237 8×8 | +3,-1 -3×+5 | ref=mask-ink:connector; act=mask-ink:connector |
| `connector-1-node-interior` | 259,236 7×7 | 259,236 7×7 | 0,0 0×0 | ref=mask-ink:dark; act=mask-ink:dark |
| `connector-1-dot` | 261,238 3×3 | 260,237 4×4 | -1,-1 +1×+1 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-1-glow` | 254,237 17×5 | 255,232 14×14 | +1,-5 -3×+9 | ref=mask-ink:glow; act=paint-layer-isolation |
| `connector-2-line` | 508,238 24×3 | 508,238 24×2 | 0,0 0×-1 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-2-node` | 514,236 11×9 | 513,233 12×12 | -1,-3 +1×+3 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-2-node-border` | 514,236 11×9 | 517,237 8×8 | +3,+1 -3×-1 | ref=mask-ink:connector; act=mask-ink:connector |
| `connector-2-node-interior` | 522,238 1×1 | 516,236 7×7 | -6,-2 +6×+6 | ref=mask-ink:dark; act=mask-ink:dark |
| `connector-2-dot` | 518,238 3×3 | 517,237 4×4 | -1,-1 +1×+1 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-2-glow` | 511,230 17×19 | 512,232 14×14 | +1,+2 -3×-5 | ref=mask-ink:glow; act=paint-layer-isolation |
| `connector-3-line` | 751,238 23×3 | 750,238 24×2 | -1,0 +1×-1 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-3-node` | 758,238 11×3 | 758,233 12×12 | 0,-5 +1×+9 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-3-node-border` | 758,238 11×3 | 758,237 8×8 | 0,-1 -3×+5 | ref=mask-ink:connector; act=mask-ink:connector |
| `connector-3-node-interior` | 760,236 7×7 | 760,236 7×7 | 0,0 0×0 | ref=mask-ink:dark; act=mask-ink:dark |
| `connector-3-dot` | 762,238 3×3 | 762,237 4×4 | 0,-1 +1×+1 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-3-glow` | 755,238 17×4 | 757,232 14×14 | +2,-6 -3×+10 | ref=mask-ink:glow; act=paint-layer-isolation |
| `stage-03-check-0` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-check-1` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-check-2` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-active-dot` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-pill-icon` | 105,364 13×14 | 107,367 9×11 | +2,+3 -4×-3 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-02-pill-icon` | 300,364 14×14 | 304,367 9×11 | +4,+3 -5×-3 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-03-pill-icon` | 554,364 12×14 | 557,369 11×6 | +3,+5 -1×-8 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-04-pill-icon` | 797,364 13×14 | 798,369 12×7 | +1,+5 -1×-7 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `heading-eyebrow` | 424,49 176×7 | 424,49 176×7 | 0,0 0×0 | ref=mask-ink:red; act=paint-diff-isolation |
| `heading-title` | 285,74 463×29 | 285,74 462×28 | 0,0 -1×-1 | ref=mask-ink:white180; act=paint-diff-isolation |
| `heading-support` | 292,115 450×12 | 294,115 444×12 | +2,0 -6×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-number` | 101,189 13×11 | 101,188 14×12 | 0,-1 +1×+1 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-02-number` | 298,189 17×11 | 298,188 18×12 | 0,-1 +1×+1 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-03-number` | 551,188 17×12 | 552,188 18×12 | +1,0 +1×0 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-04-number` | 793,189 18×11 | 795,188 18×12 | +2,-1 0×+1 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-01-symbol` | 111,223 33×33 | 109,221 29×36 | -2,-2 -4×+3 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-02-symbol` | 304,224 32×28 | 304,223 30×28 | 0,-1 -2×0 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-03-symbol` | 560,223 30×29 | 561,223 27×25 | +1,0 -3×-4 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-04-symbol` | 800,223 33×29 | 802,221 30×32 | +2,-2 -3×+3 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-01-title` | 101,285 99×9 | 100,284 95×10 | -1,-1 -4×+1 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-02-title` | 299,285 119×11 | 298,284 115×12 | -1,-1 -4×+1 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-03-title` | 551,285 120×11 | 551,284 115×12 | 0,-1 -5×+1 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-04-title` | 793,285 118×10 | 794,284 123×12 | +1,-1 +5×+2 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-01-body-line-0` | 101,305 112×10 | 101,306 112×9 | 0,+1 0×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-body-line-1` | 101,320 107×9 | 101,321 106×9 | 0,+1 -1×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-body-line-2` | 101,335 50×7 | 101,336 52×7 | 0,+1 +2×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-body-line-0` | 298,305 106×9 | 298,306 106×9 | 0,+1 0×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-body-line-1` | 298,320 85×7 | 298,321 84×7 | 0,+1 -1×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-body-line-2` | 298,335 121×7 | 298,336 120×10 | 0,+1 -1×+3 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-body-line-0` | 551,305 123×10 | 552,306 121×9 | +1,+1 -2×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-body-line-1` | 551,320 124×9 | 552,321 120×10 | +1,+1 -4×+1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-body-line-2` | 551,335 86×7 | 552,336 84×9 | +1,+1 -2×+2 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-body-line-0` | 793,305 100×9 | 795,306 101×8 | +2,+1 +1×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-body-line-1` | 794,320 95×9 | 795,321 101×10 | +1,+1 +6×+1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-body-line-2` | 793,335 121×7 | 795,336 118×10 | +2,+1 -3×+3 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-pill` | 97,362 92×22 | 97,362 90×22 | 0,0 -2×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-02-pill` | 295,362 119×22 | 294,362 115×22 | -1,0 -4×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-03-pill` | 547,362 130×22 | 548,362 125×22 | +1,0 -5×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-04-pill` | 789,362 93×22 | 790,362 88×22 | +1,0 -5×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-01-pill-label` | 124,368 57×7 | 123,368 55×7 | -1,0 -2×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-pill-label` | 321,367 83×8 | 319,367 80×7 | -2,0 -3×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-pill-label` | 574,367 95×10 | 573,368 90×8 | -1,+1 -5×-2 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-pill-label` | 817,367 58×9 | 816,367 56×9 | -1,0 -2×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-icon-frame` | 97,213 55×51 | 99,214 50×50 | +2,+1 -5×-1 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-02-icon-frame` | 296,213 50×49 | 295,210 49×52 | -1,-3 -1×+3 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-03-icon-frame` | 547,212 51×50 | 550,210 48×52 | +3,-2 -3×+2 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-04-icon-frame` | 792,214 48×46 | 792,212 48×48 | 0,-2 0×+2 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-02-rear-panel` | 318,200 170×72 | 318,200 170×72 | 0,0 0×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-03-rear-panel` | 572,200 160×72 | 572,200 160×72 | 0,0 0×0 | ref=mask-ink:edge; act=mask-ink:edge |

## Actual DOM layout boxes

| Selector | x,y w×h |
|---|---|
| `connector-1-dot` | 260,237 5×5 |
| `connector-1-glow` | 255,232 14×14 |
| `connector-1-line` | 246,238 30×3 |
| `connector-1-node` | 256,233 13×13 |
| `connector-2-dot` | 517,237 5×5 |
| `connector-2-glow` | 512,232 14×14 |
| `connector-2-line` | 508,238 24×3 |
| `connector-2-node` | 513,233 13×13 |
| `connector-3-dot` | 761,237 5×5 |
| `connector-3-glow` | 757,232 14×14 |
| `connector-3-line` | 750,238 24×3 |
| `connector-3-node` | 757,233 13×13 |
| `heading-eyebrow` | 1,49 1023×9 |
| `heading-support` | 291,113 450×15 |
| `heading-title` | 4,70 1024×30 |
| `stage-01-body` | 101,304 126×42 |
| `stage-01-body-line-0` | 101,303 126×14 |
| `stage-01-body-line-1` | 101,318 126×14 |
| `stage-01-body-line-2` | 101,333 126×14 |
| `stage-01-card` | 85,170 157×229 |
| `stage-01-glow` | 96,203 48×48 |
| `stage-01-icon-frame` | 99,214 50×50 |
| `stage-01-number` | 101,187 15×15 |
| `stage-01-pill` | 97,362 90×22 |
| `stage-01-pill-icon` | 105,366 13×13 |
| `stage-01-pill-label` | 123,368 55×9 |
| `stage-01-rear-panel` | - |
| `stage-01-symbol` | 106,221 36×36 |
| `stage-01-title` | 100,283 125×12 |
| `stage-01-visual` | 97,199 136×82 |
| `stage-02-active-dot` | 326,209 9×9 |
| `stage-02-body` | 298,304 179×42 |
| `stage-02-body-line-0` | 298,303 179×14 |
| `stage-02-body-line-1` | 298,318 179×14 |
| `stage-02-body-line-2` | 298,333 179×14 |
| `stage-02-card` | 282,170 220×229 |
| `stage-02-content-bar-0` | 353,211 88×7 |
| `stage-02-content-bar-1` | 353,225 110×7 |
| `stage-02-divider` | 343,201 1×70 |
| `stage-02-glow` | 330,207 120×52 |
| `stage-02-icon-frame` | 295,213 48×48 |
| `stage-02-lower-block-0` | 353,248 15×15 |
| `stage-02-lower-block-1` | 373,248 15×15 |
| `stage-02-lower-block-2` | 393,248 15×15 |
| `stage-02-number` | 298,187 18×15 |
| `stage-02-pill` | 294,362 115×22 |
| `stage-02-pill-icon` | 302,366 13×13 |
| `stage-02-pill-label` | 319,367 80×9 |
| `stage-02-rear-panel` | 318,200 170×72 |
| `stage-02-sidebar` | 319,201 24×70 |
| `stage-02-sidebar-row-0` | 325,223 11×2 |
| `stage-02-sidebar-row-1` | 325,233 11×2 |
| `stage-02-symbol` | 302,220 34×34 |
| `stage-02-title` | 297,283 184×12 |
| `stage-02-visual` | 294,199 199×82 |
| `stage-03-bar-a-0` | 605,214 87×4 |
| `stage-03-bar-b-0` | 697,214 18×4 |
| `stage-03-body` | 552,304 169×42 |
| `stage-03-body-line-0` | 552,303 169×14 |
| `stage-03-body-line-1` | 552,318 169×14 |
| `stage-03-body-line-2` | 552,333 169×14 |
| `stage-03-card` | 536,170 210×229 |
| `stage-03-check-0` | 589,208 16×16 |
| `stage-03-check-1` | 589,228 16×16 |
| `stage-03-check-2` | 589,248 16×16 |
| `stage-03-glow` | 582,207 110×52 |
| `stage-03-icon-frame` | 550,213 48×48 |
| `stage-03-number` | 552,187 18×15 |
| `stage-03-pill` | 548,362 125×22 |
| `stage-03-pill-icon` | 556,366 13×13 |
| `stage-03-pill-label` | 573,367 90×9 |
| `stage-03-rear-panel` | 572,200 160×72 |
| `stage-03-right-edge` | 724,208 1×56 |
| `stage-03-row-0` | 599,209 122×14 |
| `stage-03-row-1` | 599,229 122×14 |
| `stage-03-row-2` | 599,249 122×14 |
| `stage-03-symbol` | 558,221 33×33 |
| `stage-03-title` | 551,283 174×12 |
| `stage-03-visual` | 548,199 189×82 |
| `stage-04-body` | 795,304 111×42 |
| `stage-04-body-line-0` | 795,303 111×14 |
| `stage-04-body-line-1` | 795,318 111×14 |
| `stage-04-body-line-2` | 795,333 111×14 |
| `stage-04-card` | 779,170 142×229 |
| `stage-04-glow` | 790,203 48×48 |
| `stage-04-icon-frame` | 792,212 50×50 |
| `stage-04-number` | 795,187 18×15 |
| `stage-04-pill` | 790,362 93×22 |
| `stage-04-pill-icon` | 798,366 13×13 |
| `stage-04-pill-label` | 816,367 56×9 |
| `stage-04-rear-panel` | - |
| `stage-04-symbol` | 799,219 36×36 |
| `stage-04-title` | 794,283 116×12 |
| `stage-04-visual` | 791,199 121×82 |

## Actual paint-isolated ink

| Selector | x,y w×h | count |
|---|---|---:|
| `connector-1-dot` | 260,237 4×4 | 16 |
| `connector-1-glow` | 255,232 14×14 | 145 |
| `connector-1-line` | 246,238 30×2 | 32 |
| `connector-1-node` | 256,233 12×12 | 24 |
| `connector-2-dot` | 517,237 4×4 | 16 |
| `connector-2-glow` | 512,232 14×14 | 145 |
| `connector-2-line` | 508,238 24×2 | 20 |
| `connector-2-node` | 513,233 12×12 | 24 |
| `connector-3-dot` | 762,237 4×4 | 16 |
| `connector-3-glow` | 757,232 14×14 | 142 |
| `connector-3-line` | 750,238 24×2 | 20 |
| `connector-3-node` | 758,233 12×12 | 22 |
| `heading-eyebrow` | 424,49 176×7 | 730 |
| `heading-support` | 294,115 444×12 | 1422 |
| `heading-title` | 285,74 462×28 | 4501 |
| `stage-01-body-line-0` | 101,306 112×9 | 461 |
| `stage-01-body-line-1` | 101,321 106×9 | 407 |
| `stage-01-body-line-2` | 101,336 52×7 | 207 |
| `stage-01-number` | 101,188 14×12 | 112 |
| `stage-01-pill-icon` | 107,367 9×11 | 41 |
| `stage-01-pill-label` | 123,368 55×7 | 130 |
| `stage-01-symbol` | 109,221 29×36 | 526 |
| `stage-01-title` | 100,284 95×10 | 469 |
| `stage-02-active-dot` | 326,209 10×4 | 30 |
| `stage-02-body-line-0` | 298,306 106×9 | 374 |
| `stage-02-body-line-1` | 298,321 84×7 | 317 |
| `stage-02-body-line-2` | 298,336 120×10 | 498 |
| `stage-02-number` | 298,188 18×12 | 128 |
| `stage-02-pill-icon` | 304,367 9×11 | 69 |
| `stage-02-pill-label` | 319,367 80×7 | 167 |
| `stage-02-symbol` | 304,223 30×28 | 516 |
| `stage-02-title` | 298,284 115×12 | 574 |
| `stage-03-body-line-0` | 552,306 121×9 | 469 |
| `stage-03-body-line-1` | 552,321 120×10 | 472 |
| `stage-03-body-line-2` | 552,336 84×9 | 306 |
| `stage-03-check-0` | 589,208 16×16 | 208 |
| `stage-03-check-1` | 589,228 16×16 | 208 |
| `stage-03-check-2` | 589,248 16×16 | 208 |
| `stage-03-number` | 552,188 18×12 | 133 |
| `stage-03-pill-icon` | 557,369 11×6 | 19 |
| `stage-03-pill-label` | 573,368 90×8 | 196 |
| `stage-03-symbol` | 561,223 27×25 | 300 |
| `stage-03-title` | 551,284 115×12 | 575 |
| `stage-04-body-line-0` | 795,306 101×8 | 414 |
| `stage-04-body-line-1` | 795,321 101×10 | 378 |
| `stage-04-body-line-2` | 795,336 118×10 | 447 |
| `stage-04-number` | 795,188 18×12 | 131 |
| `stage-04-pill-icon` | 798,369 12×7 | 41 |
| `stage-04-pill-label` | 816,367 56×9 | 130 |
| `stage-04-symbol` | 802,221 30×32 | 402 |
| `stage-04-title` | 794,284 123×12 | 577 |

## Color samples (RGB)

| Sample | XY | Reference | Actual |
|---|---|---|---|
| pageBg | 40,40 | 17,17,17 | 17,17,17 |
| card1Fill | 200,270 | 23,23,23 | 23,23,23 |
| card1Border | 85,280 | 34,34,34 | 34,34,34 |
| primaryRedNumber | ref 103,189 / act 104,189 | 118,46,49 | 115,46,49 |
| mutedIconStroke | ref 120,246 / act 124,223 | 43,28,31 | 43,28,31 |
| title | ref 172,286 / act 174,287 | 231,231,231 | 231,231,218 |
| bodyText | ref 118,310 / act 122,310 | 104,104,104 | 88,91,88 |
| pillBorder | ref 96,364 / act 96,364 | 22,24,21 | 23,23,23 |
| connector | 262,239 | 152,71,70 | 151,70,69 |
| centerGlow | 512,250 | 56,25,22 | 50,22,19 |

## Region mismatch ratios

| Region | Mismatched | Total | Ratio |
|---|---:|---:|---:|
| heading | 7590 | 101400 | 7.49% |
| stage-01 | 2605 | 35953 | 7.25% |
| stage-02 | 4652 | 50380 | 9.23% |
| stage-03 | 4362 | 48090 | 9.07% |
| stage-04 | 3100 | 32518 | 9.53% |
| stage-01-visual | 272 | 5600 | 4.86% |
| stage-02-visual | 1905 | 16000 | 11.91% |
| stage-03-visual | 1425 | 15200 | 9.38% |
| stage-04-visual | 257 | 5600 | 4.59% |
| connector-01-02 | 146 | 960 | 15.21% |
| connector-02-03 | 123 | 816 | 15.07% |
| connector-03-04 | 119 | 792 | 15.03% |
| chat | 206 | 2750 | 7.49% |
| bottom-line | 0 | 7168 | 0.00% |

## Mask audits + isolated pairs

- `masks/*.png` — reference mask geometry with magenta ink hits
- `isolated/*` — ref/actual/side crops for major primitives
- `crops/` — nearest-neighbor 4× region triplets

## Remaining visual discrepancies

- `connector-1-node`: ink 257,238 11×3 → 256,233 12×12 (-1,-5 +1×+9); geo 256,233 13×13 → 256,233 13×13 (0,0 0×0)
- `connector-1-node-border`: ink 257,238 11×3 → 260,237 8×8 (+3,-1 -3×+5); geo 256,233 13×13 → - (-256,-233 -13×-13)
- `connector-1-glow`: ink 254,237 17×5 → 255,232 14×14 (+1,-5 -3×+9); geo 253,230 19×19 → 255,232 14×14 (+2,+2 -5×-5)
- `connector-2-node`: ink 514,236 11×9 → 513,233 12×12 (-1,-3 +1×+3); geo 513,233 13×13 → 513,233 13×13 (0,0 0×0)
- `connector-2-node-border`: ink 514,236 11×9 → 517,237 8×8 (+3,+1 -3×-1); geo 513,233 13×13 → - (-513,-233 -13×-13)
- `connector-2-node-interior`: ink 522,238 1×1 → 516,236 7×7 (-6,-2 +6×+6); geo 515,235 9×9 → - (-515,-235 -9×-9)
- `connector-2-glow`: ink 511,230 17×19 → 512,232 14×14 (+1,+2 -3×-5); geo 510,230 19×19 → 512,232 14×14 (+2,+2 -5×-5)
- `connector-3-node`: ink 758,238 11×3 → 758,233 12×12 (0,-5 +1×+9); geo 757,233 13×13 → 757,233 13×13 (0,0 0×0)
- `connector-3-node-border`: ink 758,238 11×3 → 758,237 8×8 (0,-1 -3×+5); geo 757,233 13×13 → - (-757,-233 -13×-13)
- `connector-3-glow`: ink 755,238 17×4 → 757,232 14×14 (+2,-6 -3×+10); geo 754,230 19×19 → 757,232 14×14 (+3,+2 -5×-5)
- `stage-01-pill-icon`: ink 105,364 13×14 → 107,367 9×11 (+2,+3 -4×-3); geo 104,364 14×14 → 105,366 13×13 (+1,+2 -1×-1)
- `stage-02-pill-icon`: ink 300,364 14×14 → 304,367 9×11 (+4,+3 -5×-3); geo 300,364 14×14 → 302,366 13×13 (+2,+2 -1×-1)
- `stage-03-pill-icon`: ink 554,364 12×14 → 557,369 11×6 (+3,+5 -1×-8); geo 552,364 14×14 → 556,366 13×13 (+4,+2 -1×-1)
- `stage-04-pill-icon`: ink 797,364 13×14 → 798,369 12×7 (+1,+5 -1×-7); geo 796,364 14×14 → 798,366 13×13 (+2,+2 -1×-1)
- `heading-support`: ink 292,115 450×12 → 294,115 444×12 (+2,0 -6×0); geo 288,113 460×16 → 291,113 450×15 (+3,0 -10×-1)
- `stage-01-symbol`: ink 111,223 33×33 → 109,221 29×36 (-2,-2 -4×+3); geo 108,218 36×40 → 106,221 36×36 (-2,+3 0×-4)
- `stage-03-symbol`: ink 560,223 30×29 → 561,223 27×25 (+1,0 -3×-4); geo 554,216 36×36 → 558,221 33×33 (+4,+5 -3×-3)
- `stage-01-title`: ink 101,285 99×9 → 100,284 95×10 (-1,-1 -4×+1); geo 98,282 120×18 → 100,283 125×12 (+2,+1 +5×-6)
- `stage-02-title`: ink 299,285 119×11 → 298,284 115×12 (-1,-1 -4×+1); geo 296,282 140×18 → 297,283 184×12 (+1,+1 +44×-6)
- `stage-03-title`: ink 551,285 120×11 → 551,284 115×12 (0,-1 -5×+1); geo 548,282 140×18 → 551,283 174×12 (+3,+1 +34×-6)
- `stage-04-title`: ink 793,285 118×10 → 794,284 123×12 (+1,-1 +5×+2); geo 790,282 128×18 → 794,283 116×12 (+4,+1 -12×-6)
- `stage-03-body-line-1`: ink 551,320 124×9 → 552,321 120×10 (+1,+1 -4×+1); geo 548,316 140×13 → 552,318 169×14 (+4,+2 +29×+1)
- `stage-04-body-line-1`: ink 794,320 95×9 → 795,321 101×10 (+1,+1 +6×+1); geo 790,316 128×13 → 795,318 111×14 (+5,+2 -17×+1)
- `stage-02-pill`: ink 295,362 119×22 → 294,362 115×22 (-1,0 -4×0); geo 294,362 120×22 → 294,362 115×22 (0,0 -5×0)
- `stage-03-pill`: ink 547,362 130×22 → 548,362 125×22 (+1,0 -5×0); geo 546,362 132×22 → 548,362 125×22 (+2,0 -7×0)
- `stage-04-pill`: ink 789,362 93×22 → 790,362 88×22 (+1,0 -5×0); geo 788,362 94×22 → 790,362 93×22 (+2,0 -1×0)
- `stage-03-pill-label`: ink 574,367 95×10 → 573,368 90×8 (-1,+1 -5×-2); geo 568,366 105×12 → 573,367 90×9 (+5,+1 -15×-3)
- `stage-01-icon-frame`: ink 97,213 55×51 → 99,214 50×50 (+2,+1 -5×-1); geo 97,210 55×55 → 99,214 50×50 (+2,+4 -5×-5)
- `stage-02-icon-frame`: ink 296,213 50×49 → 295,210 49×52 (-1,-3 -1×+3); geo 294,210 52×52 → 295,213 48×48 (+1,+3 -4×-4)
- `stage-03-icon-frame`: ink 547,212 51×50 → 550,210 48×52 (+3,-2 -3×+2); geo 546,210 52×52 → 550,213 48×48 (+4,+3 -4×-4)
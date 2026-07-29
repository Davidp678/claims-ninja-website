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
| overall mismatch | **4.93%** (23552 px) |

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
| Loose (L≥160, can include glow) | 285,74 463×42 | 283,74 465×28 |
| Dense glyph (L≥180) | 285,74 463×29 | 283,74 465×28 |

## Geometric bounds (mask geometry vs DOM)

| Element | Ref geometric | Actual DOM | Delta |
|---|---|---|---|
| `connector-1-line` | 246,238 30×3 | 246,238 30×3 | 0,0 0×0 |
| `connector-1-node` | 256,233 13×13 | 256,233 13×13 | 0,0 0×0 |
| `connector-1-node-border` | 256,233 13×13 | - | -256,-233 -13×-13 |
| `connector-1-node-interior` | 258,235 9×9 | - | -258,-235 -9×-9 |
| `connector-1-dot` | 260,237 5×5 | 260,237 5×5 | 0,0 0×0 |
| `connector-1-glow` | 253,230 19×19 | - | -253,-230 -19×-19 |
| `connector-2-line` | 508,238 24×3 | 508,238 24×3 | 0,0 0×0 |
| `connector-2-node` | 513,233 13×13 | 513,233 13×13 | 0,0 0×0 |
| `connector-2-node-border` | 513,233 13×13 | - | -513,-233 -13×-13 |
| `connector-2-node-interior` | 515,235 9×9 | - | -515,-235 -9×-9 |
| `connector-2-dot` | 517,237 5×5 | 517,237 5×5 | 0,0 0×0 |
| `connector-2-glow` | 510,230 19×19 | - | -510,-230 -19×-19 |
| `connector-3-line` | 750,238 24×3 | 750,238 24×3 | 0,0 0×0 |
| `connector-3-node` | 757,233 13×13 | 757,233 13×13 | 0,0 0×0 |
| `connector-3-node-border` | 757,233 13×13 | - | -757,-233 -13×-13 |
| `connector-3-node-interior` | 759,235 9×9 | - | -759,-235 -9×-9 |
| `connector-3-dot` | 761,237 5×5 | 761,237 5×5 | 0,0 0×0 |
| `connector-3-glow` | 754,230 19×19 | - | -754,-230 -19×-19 |
| `stage-03-check-0` | 589,208 16×16 | 589,208 16×16 | 0,0 0×0 |
| `stage-03-check-1` | 589,228 16×16 | 589,228 16×16 | 0,0 0×0 |
| `stage-03-check-2` | 589,248 16×16 | 589,248 16×16 | 0,0 0×0 |
| `stage-02-active-dot` | 327,208 9×9 | 326,209 9×9 | -1,+1 0×0 |
| `stage-01-pill-icon` | 104,364 14×14 | 105,363 14×14 | +1,-1 0×0 |
| `stage-02-pill-icon` | 300,364 14×14 | 302,363 14×14 | +2,-1 0×0 |
| `stage-03-pill-icon` | 552,364 14×14 | 556,363 14×14 | +4,-1 0×0 |
| `stage-04-pill-icon` | 796,364 14×14 | 798,363 14×14 | +2,-1 0×0 |
| `heading-eyebrow` | 420,47 185×12 | 1,49 1023×9 | -419,+2 +838×-3 |
| `heading-title` | 280,72 470×34 | 3,70 1024×30 | -277,-2 +554×-4 |
| `heading-support` | 288,113 460×16 | 288,112 452×16 | 0,-1 -8×0 |
| `stage-01-number` | 98,186 24×20 | 101,187 15×15 | +3,+1 -9×-5 |
| `stage-02-number` | 295,186 28×20 | 298,187 18×15 | +3,+1 -10×-5 |
| `stage-03-number` | 548,186 28×20 | 552,187 18×15 | +4,+1 -10×-5 |
| `stage-04-number` | 790,186 28×20 | 795,187 18×15 | +5,+1 -10×-5 |
| `stage-01-symbol` | 108,218 36×40 | 106,222 33×33 | -2,+4 -3×-7 |
| `stage-02-symbol` | 300,216 36×36 | 304,221 32×32 | +4,+5 -4×-4 |
| `stage-03-symbol` | 554,216 36×36 | 559,221 30×30 | +5,+5 -6×-6 |
| `stage-04-symbol` | 800,218 34×34 | 801,221 33×33 | +1,+3 -1×-1 |
| `stage-01-title` | 98,282 120×18 | 100,283 125×13 | +2,+1 +5×-5 |
| `stage-02-title` | 296,282 140×18 | 297,283 184×13 | +1,+1 +44×-5 |
| `stage-03-title` | 548,282 140×18 | 551,283 174×13 | +3,+1 +34×-5 |
| `stage-04-title` | 790,282 128×18 | 794,283 116×13 | +4,+1 -12×-5 |
| `stage-01-body-line-0` | 98,303 120×13 | 101,303 126×14 | +3,0 +6×+1 |
| `stage-01-body-line-1` | 98,316 120×13 | 101,317 126×14 | +3,+1 +6×+1 |
| `stage-01-body-line-2` | 98,329 80×13 | 101,331 126×14 | +3,+2 +46×+1 |
| `stage-02-body-line-0` | 296,303 140×13 | 298,303 179×14 | +2,0 +39×+1 |
| `stage-02-body-line-1` | 296,316 140×13 | 298,317 179×14 | +2,+1 +39×+1 |
| `stage-02-body-line-2` | 296,329 140×13 | 298,331 179×14 | +2,+2 +39×+1 |
| `stage-03-body-line-0` | 548,303 140×13 | 552,303 169×14 | +4,0 +29×+1 |
| `stage-03-body-line-1` | 548,316 140×13 | 552,317 169×14 | +4,+1 +29×+1 |
| `stage-03-body-line-2` | 548,329 120×13 | 552,331 169×14 | +4,+2 +49×+1 |
| `stage-04-body-line-0` | 790,303 128×13 | 795,303 111×14 | +5,0 -17×+1 |
| `stage-04-body-line-1` | 790,316 128×13 | 795,317 111×14 | +5,+1 -17×+1 |
| `stage-04-body-line-2` | 790,329 128×13 | 795,331 111×14 | +5,+2 -17×+1 |
| `stage-01-pill` | 96,362 94×22 | 97,362 94×22 | +1,0 0×0 |
| `stage-02-pill` | 294,362 120×22 | 294,362 120×22 | 0,0 0×0 |
| `stage-03-pill` | 546,362 132×22 | 548,362 131×22 | +2,0 -1×0 |
| `stage-04-pill` | 788,362 94×22 | 790,362 97×22 | +2,0 +3×0 |
| `stage-01-pill-label` | 118,366 70×12 | 125,369 58×9 | +7,+3 -12×-3 |
| `stage-02-pill-label` | 316,366 95×12 | 322,369 84×9 | +6,+3 -11×-3 |
| `stage-03-pill-label` | 568,366 105×12 | 576,369 95×9 | +8,+3 -10×-3 |
| `stage-04-pill-label` | 812,366 70×12 | 818,369 59×9 | +6,+3 -11×-3 |
| `stage-01-icon-frame` | 97,210 55×55 | 97,213 50×50 | 0,+3 -5×-5 |
| `stage-02-icon-frame` | 294,210 52×52 | 295,212 50×50 | +1,+2 -2×-2 |
| `stage-03-icon-frame` | 546,210 52×52 | 549,211 50×50 | +3,+1 -2×-2 |
| `stage-04-icon-frame` | 790,210 50×50 | 792,212 50×50 | +2,+2 0×0 |
| `stage-02-rear-panel` | 318,200 170×72 | 318,200 170×72 | 0,0 0×0 |
| `stage-03-rear-panel` | 572,200 160×78 | 572,200 160×72 | 0,0 0×-6 |

## Painted-ink bounds (mask ink vs paint-isolation)

Primitives marked `geometry-only` intentionally omit painted-ink deltas (JPEG ink is unreliable for those marks).

| Element | Ref ink | Actual ink | Delta | Methods |
|---|---|---|---|---|
| `connector-1-line` | 246,238 30×3 | 244,235 34×8 | -2,-3 +4×+5 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-1-node` | 257,238 11×3 | 253,230 18×18 | -4,-8 +7×+15 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-1-node-border` | 257,238 11×3 | 260,237 8×8 | +3,-1 -3×+5 | ref=mask-ink:connector; act=mask-ink:connector |
| `connector-1-node-interior` | 259,236 7×7 | 259,236 7×7 | 0,0 0×0 | ref=mask-ink:dark; act=mask-ink:dark |
| `connector-1-dot` | 261,238 3×3 | 257,234 10×10 | -4,-4 +7×+7 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-1-glow` | 254,237 17×5 | 254,232 17×14 | 0,-5 0×+9 | ref=mask-ink:glow; act=mask-ink:glow |
| `connector-2-line` | 508,238 24×3 | 506,235 28×8 | -2,-3 +4×+5 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-2-node` | 514,236 11×9 | 510,230 18×18 | -4,-6 +7×+9 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-2-node-border` | 514,236 11×9 | 517,237 8×8 | +3,+1 -3×-1 | ref=mask-ink:connector; act=mask-ink:connector |
| `connector-2-node-interior` | 522,238 1×1 | 516,236 7×7 | -6,-2 +6×+6 | ref=mask-ink:dark; act=mask-ink:dark |
| `connector-2-dot` | 518,238 3×3 | 514,234 10×10 | -4,-4 +7×+7 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-2-glow` | 511,230 17×19 | 511,230 17×19 | 0,0 0×0 | ref=mask-ink:glow; act=mask-ink:glow |
| `connector-3-line` | 751,238 23×3 | 748,235 28×8 | -3,-3 +5×+5 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-3-node` | 758,238 11×3 | 755,230 18×18 | -3,-8 +7×+15 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-3-node-border` | 758,238 11×3 | 758,237 8×8 | 0,-1 -3×+5 | ref=mask-ink:connector; act=mask-ink:connector |
| `connector-3-node-interior` | 760,236 7×7 | 760,236 7×7 | 0,0 0×0 | ref=mask-ink:dark; act=mask-ink:dark |
| `connector-3-dot` | 762,238 3×3 | 759,234 10×10 | -3,-4 +7×+7 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-3-glow` | 755,238 17×4 | 755,232 17×14 | 0,-6 0×+10 | ref=mask-ink:glow; act=mask-ink:glow |
| `stage-03-check-0` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-check-1` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-check-2` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-active-dot` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-pill-icon` | 105,364 13×14 | 107,365 10×11 | +2,+1 -3×-3 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-02-pill-icon` | 300,364 14×14 | 304,364 10×12 | +4,0 -4×-2 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-03-pill-icon` | 554,364 12×14 | 557,367 12×6 | +3,+3 0×-8 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-04-pill-icon` | 797,364 13×14 | 799,366 12×8 | +2,+2 -1×-6 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `heading-eyebrow` | 424,49 176×7 | 424,49 176×7 | 0,0 0×0 | ref=mask-ink:red; act=paint-diff-isolation |
| `heading-title` | 285,74 463×29 | 283,74 465×28 | -2,0 +2×-1 | ref=mask-ink:white180; act=paint-diff-isolation |
| `heading-support` | 292,115 450×12 | 288,115 452×12 | -4,0 +2×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-number` | 101,189 13×11 | 101,188 14×12 | 0,-1 +1×+1 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-02-number` | 298,189 17×11 | 298,188 18×12 | 0,-1 +1×+1 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-03-number` | 551,188 17×12 | 552,188 18×12 | +1,0 +1×0 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-04-number` | 793,189 18×11 | 795,188 18×12 | +2,-1 0×+1 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-01-symbol` | 111,223 33×33 | 111,223 23×31 | 0,0 -10×-2 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-02-symbol` | 304,224 32×28 | 306,224 28×26 | +2,0 -4×-2 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-03-symbol` | 560,223 30×29 | 562,224 24×21 | +2,+1 -6×-8 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-04-symbol` | 800,223 33×29 | 804,224 27×27 | +4,+1 -6×-2 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-01-title` | 101,285 99×9 | 100,285 99×10 | -1,0 0×+1 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-02-title` | 299,285 119×11 | 297,285 120×12 | -2,0 +1×+1 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-03-title` | 551,285 120×11 | 551,285 119×12 | 0,0 -1×+1 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-04-title` | 793,285 118×10 | 794,284 123×12 | +1,-1 +5×+2 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-01-body-line-0` | 101,305 112×10 | 101,306 114×9 | 0,+1 +2×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-body-line-1` | 101,320 107×9 | 101,320 108×9 | 0,0 +1×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-body-line-2` | 101,335 50×7 | 101,334 53×7 | 0,-1 +3×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-body-line-0` | 298,305 106×9 | 298,306 108×9 | 0,+1 +2×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-body-line-1` | 298,320 85×7 | 298,320 85×7 | 0,0 0×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-body-line-2` | 298,335 121×7 | 298,334 122×10 | 0,-1 +1×+3 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-body-line-0` | 551,305 123×10 | 552,306 124×9 | +1,+1 +1×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-body-line-1` | 551,320 124×9 | 552,320 123×10 | +1,0 -1×+1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-body-line-2` | 551,335 86×7 | 552,334 86×9 | +1,-1 0×+2 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-body-line-0` | 793,305 100×9 | 795,306 103×8 | +2,+1 +3×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-body-line-1` | 794,320 95×9 | 795,320 103×10 | +1,0 +8×+1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-body-line-2` | 793,335 121×7 | 795,334 118×10 | +2,-1 -3×+3 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-pill` | 97,362 92×22 | 97,362 89×22 | 0,0 -3×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-02-pill` | 295,362 119×22 | 294,362 120×22 | -1,0 +1×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-03-pill` | 547,362 130×22 | 548,362 126×22 | +1,0 -4×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-04-pill` | 789,362 93×22 | 790,362 92×22 | +1,0 -1×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-01-pill-label` | 124,368 57×7 | 125,369 54×7 | +1,+1 -3×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-pill-label` | 321,367 83×8 | 322,369 84×7 | +1,+2 +1×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-pill-label` | 574,367 95×10 | 576,369 95×9 | +2,+2 0×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-pill-label` | 817,367 58×9 | 818,369 59×9 | +1,+2 +1×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-icon-frame` | 97,213 55×51 | 97,213 50×50 | 0,0 -5×-1 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-02-icon-frame` | 296,213 50×49 | 295,210 50×52 | -1,-3 0×+3 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-03-icon-frame` | 547,212 51×50 | 549,210 49×52 | +2,-2 -2×+2 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-04-icon-frame` | 792,214 48×46 | 792,212 48×48 | 0,-2 0×+2 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-02-rear-panel` | 318,200 170×72 | 318,200 170×72 | 0,0 0×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-03-rear-panel` | 572,200 160×72 | 572,200 160×72 | 0,0 0×0 | ref=mask-ink:edge; act=mask-ink:edge |

## Actual DOM layout boxes

| Selector | x,y w×h |
|---|---|
| `connector-1-dot` | 260,237 5×5 |
| `connector-1-line` | 246,238 30×3 |
| `connector-1-node` | 256,233 13×13 |
| `connector-2-dot` | 517,237 5×5 |
| `connector-2-line` | 508,238 24×3 |
| `connector-2-node` | 513,233 13×13 |
| `connector-3-dot` | 761,237 5×5 |
| `connector-3-line` | 750,238 24×3 |
| `connector-3-node` | 757,233 13×13 |
| `heading-eyebrow` | 1,49 1023×9 |
| `heading-support` | 288,112 452×16 |
| `heading-title` | 3,70 1024×30 |
| `stage-01-body` | 101,303 126×42 |
| `stage-01-body-line-0` | 101,303 126×14 |
| `stage-01-body-line-1` | 101,317 126×14 |
| `stage-01-body-line-2` | 101,331 126×14 |
| `stage-01-card` | 85,170 157×229 |
| `stage-01-glow` | 95,201 52×52 |
| `stage-01-icon-frame` | 97,213 50×50 |
| `stage-01-number` | 101,187 15×15 |
| `stage-01-pill` | 97,362 94×22 |
| `stage-01-pill-icon` | 105,363 14×14 |
| `stage-01-pill-label` | 125,369 58×9 |
| `stage-01-rear-panel` | - |
| `stage-01-symbol` | 106,222 33×33 |
| `stage-01-title` | 100,283 125×13 |
| `stage-01-visual` | 97,199 136×82 |
| `stage-02-active-dot` | 326,209 9×9 |
| `stage-02-body` | 298,303 179×42 |
| `stage-02-body-line-0` | 298,303 179×14 |
| `stage-02-body-line-1` | 298,317 179×14 |
| `stage-02-body-line-2` | 298,331 179×14 |
| `stage-02-card` | 282,170 220×229 |
| `stage-02-content-bar-0` | 352,210 89×7 |
| `stage-02-content-bar-1` | 352,224 112×7 |
| `stage-02-divider` | 343,201 1×70 |
| `stage-02-glow` | 318,199 150×66 |
| `stage-02-icon-frame` | 295,212 50×50 |
| `stage-02-lower-block-0` | 352,249 15×15 |
| `stage-02-lower-block-1` | 372,249 15×15 |
| `stage-02-lower-block-2` | 392,249 15×15 |
| `stage-02-number` | 298,187 18×15 |
| `stage-02-pill` | 294,362 120×22 |
| `stage-02-pill-icon` | 302,363 14×14 |
| `stage-02-pill-label` | 322,369 84×9 |
| `stage-02-rear-panel` | 318,200 170×72 |
| `stage-02-sidebar` | 319,201 24×70 |
| `stage-02-sidebar-row-0` | 325,223 11×2 |
| `stage-02-sidebar-row-1` | 325,233 11×2 |
| `stage-02-symbol` | 304,221 32×32 |
| `stage-02-title` | 297,283 184×13 |
| `stage-02-visual` | 294,199 199×82 |
| `stage-03-bar-a-0` | 605,214 87×4 |
| `stage-03-bar-b-0` | 697,214 18×4 |
| `stage-03-body` | 552,303 169×42 |
| `stage-03-body-line-0` | 552,303 169×14 |
| `stage-03-body-line-1` | 552,317 169×14 |
| `stage-03-body-line-2` | 552,331 169×14 |
| `stage-03-card` | 536,170 210×229 |
| `stage-03-check-0` | 589,208 16×16 |
| `stage-03-check-1` | 589,228 16×16 |
| `stage-03-check-2` | 589,248 16×16 |
| `stage-03-glow` | 570,199 145×66 |
| `stage-03-icon-frame` | 549,211 50×50 |
| `stage-03-number` | 552,187 18×15 |
| `stage-03-pill` | 548,362 131×22 |
| `stage-03-pill-icon` | 556,363 14×14 |
| `stage-03-pill-label` | 576,369 95×9 |
| `stage-03-rear-panel` | 572,200 160×72 |
| `stage-03-right-edge` | 724,208 1×56 |
| `stage-03-row-0` | 599,209 122×14 |
| `stage-03-row-1` | 599,229 122×14 |
| `stage-03-row-2` | 599,249 122×14 |
| `stage-03-symbol` | 559,221 30×30 |
| `stage-03-title` | 551,283 174×13 |
| `stage-03-visual` | 548,199 189×82 |
| `stage-04-body` | 795,303 111×42 |
| `stage-04-body-line-0` | 795,303 111×14 |
| `stage-04-body-line-1` | 795,317 111×14 |
| `stage-04-body-line-2` | 795,331 111×14 |
| `stage-04-card` | 779,170 142×229 |
| `stage-04-glow` | 789,201 52×52 |
| `stage-04-icon-frame` | 792,212 50×50 |
| `stage-04-number` | 795,187 18×15 |
| `stage-04-pill` | 790,362 97×22 |
| `stage-04-pill-icon` | 798,363 14×14 |
| `stage-04-pill-label` | 818,369 59×9 |
| `stage-04-rear-panel` | - |
| `stage-04-symbol` | 801,221 33×33 |
| `stage-04-title` | 794,283 116×13 |
| `stage-04-visual` | 791,199 121×82 |

## Actual paint-isolated ink

| Selector | x,y w×h | count |
|---|---|---:|
| `connector-1-dot` | 257,234 10×10 | 75 |
| `connector-1-line` | 244,235 34×8 | 180 |
| `connector-1-node` | 253,230 18×18 | 220 |
| `connector-2-dot` | 514,234 10×10 | 75 |
| `connector-2-line` | 506,235 28×8 | 132 |
| `connector-2-node` | 510,230 18×18 | 220 |
| `connector-3-dot` | 759,234 10×10 | 75 |
| `connector-3-line` | 748,235 28×8 | 132 |
| `connector-3-node` | 755,230 18×18 | 220 |
| `heading-eyebrow` | 424,49 176×7 | 730 |
| `heading-support` | 288,115 452×12 | 2042 |
| `heading-title` | 283,74 465×28 | 4450 |
| `stage-01-body-line-0` | 101,306 114×9 | 453 |
| `stage-01-body-line-1` | 101,320 108×9 | 400 |
| `stage-01-body-line-2` | 101,334 53×7 | 204 |
| `stage-01-number` | 101,188 14×12 | 112 |
| `stage-01-pill-icon` | 107,365 10×11 | 54 |
| `stage-01-pill-label` | 125,369 54×7 | 175 |
| `stage-01-symbol` | 111,223 23×31 | 320 |
| `stage-01-title` | 100,285 99×10 | 499 |
| `stage-02-active-dot` | 325,207 12×6 | 49 |
| `stage-02-body-line-0` | 298,306 108×9 | 380 |
| `stage-02-body-line-1` | 298,320 85×7 | 311 |
| `stage-02-body-line-2` | 298,334 122×10 | 486 |
| `stage-02-number` | 298,188 18×12 | 128 |
| `stage-02-pill-icon` | 304,364 10×12 | 83 |
| `stage-02-pill-label` | 322,369 84×7 | 272 |
| `stage-02-symbol` | 306,224 28×26 | 378 |
| `stage-02-title` | 297,285 120×12 | 618 |
| `stage-03-body-line-0` | 552,306 124×9 | 465 |
| `stage-03-body-line-1` | 552,320 123×10 | 464 |
| `stage-03-body-line-2` | 552,334 86×9 | 316 |
| `stage-03-check-0` | 587,206 20×20 | 322 |
| `stage-03-check-1` | 587,226 20×20 | 322 |
| `stage-03-check-2` | 587,246 20×20 | 322 |
| `stage-03-number` | 552,188 18×12 | 133 |
| `stage-03-pill-icon` | 557,367 12×6 | 28 |
| `stage-03-pill-label` | 576,369 95×9 | 358 |
| `stage-03-symbol` | 562,224 24×21 | 197 |
| `stage-03-title` | 551,285 119×12 | 625 |
| `stage-04-body-line-0` | 795,306 103×8 | 416 |
| `stage-04-body-line-1` | 795,320 103×10 | 383 |
| `stage-04-body-line-2` | 795,334 118×10 | 441 |
| `stage-04-number` | 795,188 18×12 | 131 |
| `stage-04-pill-icon` | 799,366 12×8 | 52 |
| `stage-04-pill-label` | 818,369 59×9 | 238 |
| `stage-04-symbol` | 804,224 27×27 | 261 |
| `stage-04-title` | 794,284 123×12 | 585 |

## Color samples (RGB)

| Sample | XY | Reference | Actual |
|---|---|---|---|
| pageBg | 40,40 | 17,17,17 | 17,17,17 |
| card1Fill | 200,270 | 23,23,23 | 23,23,23 |
| card1Border | 85,280 | 34,34,34 | 34,34,34 |
| primaryRedNumber | ref 103,189 / act 104,189 | 118,46,49 | 115,46,49 |
| mutedIconStroke | ref 120,246 / act 132,231 | 43,28,31 | 41,27,29 |
| title | ref 172,286 / act 184,288 | 231,231,231 | 231,231,218 |
| bodyText | ref 118,310 / act 122,310 | 104,104,104 | 83,88,91 |
| pillBorder | ref 96,364 / act 96,364 | 22,24,21 | 23,23,23 |
| connector | 262,239 | 152,71,70 | 151,70,69 |
| centerGlow | 512,250 | 56,25,22 | 48,22,19 |

## Region mismatch ratios

| Region | Mismatched | Total | Ratio |
|---|---:|---:|---:|
| heading | 8325 | 101400 | 8.21% |
| stage-01 | 2671 | 35953 | 7.43% |
| stage-02 | 4439 | 50380 | 8.81% |
| stage-03 | 4339 | 48090 | 9.02% |
| stage-04 | 3167 | 32518 | 9.74% |
| stage-01-visual | 250 | 5600 | 4.46% |
| stage-02-visual | 1749 | 16000 | 10.93% |
| stage-03-visual | 1304 | 15200 | 8.58% |
| stage-04-visual | 266 | 5600 | 4.75% |
| connector-01-02 | 145 | 960 | 15.10% |
| connector-02-03 | 124 | 816 | 15.20% |
| connector-03-04 | 121 | 792 | 15.28% |
| chat | 206 | 2750 | 7.49% |
| bottom-line | 0 | 7168 | 0.00% |

## Mask audits + isolated pairs

- `masks/*.png` — reference mask geometry with magenta ink hits
- `isolated/*` — ref/actual/side crops for major primitives
- `crops/` — nearest-neighbor 4× region triplets

## Remaining visual discrepancies

- `connector-1-line`: ink 246,238 30×3 → 244,235 34×8 (-2,-3 +4×+5); geo 246,238 30×3 → 246,238 30×3 (0,0 0×0)
- `connector-1-node`: ink 257,238 11×3 → 253,230 18×18 (-4,-8 +7×+15); geo 256,233 13×13 → 256,233 13×13 (0,0 0×0)
- `connector-1-node-border`: ink 257,238 11×3 → 260,237 8×8 (+3,-1 -3×+5); geo 256,233 13×13 → - (-256,-233 -13×-13)
- `connector-1-dot`: ink 261,238 3×3 → 257,234 10×10 (-4,-4 +7×+7); geo 260,237 5×5 → 260,237 5×5 (0,0 0×0)
- `connector-1-glow`: ink 254,237 17×5 → 254,232 17×14 (0,-5 0×+9); geo 253,230 19×19 → - (-253,-230 -19×-19)
- `connector-2-line`: ink 508,238 24×3 → 506,235 28×8 (-2,-3 +4×+5); geo 508,238 24×3 → 508,238 24×3 (0,0 0×0)
- `connector-2-node`: ink 514,236 11×9 → 510,230 18×18 (-4,-6 +7×+9); geo 513,233 13×13 → 513,233 13×13 (0,0 0×0)
- `connector-2-node-border`: ink 514,236 11×9 → 517,237 8×8 (+3,+1 -3×-1); geo 513,233 13×13 → - (-513,-233 -13×-13)
- `connector-2-node-interior`: ink 522,238 1×1 → 516,236 7×7 (-6,-2 +6×+6); geo 515,235 9×9 → - (-515,-235 -9×-9)
- `connector-2-dot`: ink 518,238 3×3 → 514,234 10×10 (-4,-4 +7×+7); geo 517,237 5×5 → 517,237 5×5 (0,0 0×0)
- `connector-3-line`: ink 751,238 23×3 → 748,235 28×8 (-3,-3 +5×+5); geo 750,238 24×3 → 750,238 24×3 (0,0 0×0)
- `connector-3-node`: ink 758,238 11×3 → 755,230 18×18 (-3,-8 +7×+15); geo 757,233 13×13 → 757,233 13×13 (0,0 0×0)
- `connector-3-node-border`: ink 758,238 11×3 → 758,237 8×8 (0,-1 -3×+5); geo 757,233 13×13 → - (-757,-233 -13×-13)
- `connector-3-dot`: ink 762,238 3×3 → 759,234 10×10 (-3,-4 +7×+7); geo 761,237 5×5 → 761,237 5×5 (0,0 0×0)
- `connector-3-glow`: ink 755,238 17×4 → 755,232 17×14 (0,-6 0×+10); geo 754,230 19×19 → - (-754,-230 -19×-19)
- `stage-02-pill-icon`: ink 300,364 14×14 → 304,364 10×12 (+4,0 -4×-2); geo 300,364 14×14 → 302,363 14×14 (+2,-1 0×0)
- `stage-03-pill-icon`: ink 554,364 12×14 → 557,367 12×6 (+3,+3 0×-8); geo 552,364 14×14 → 556,363 14×14 (+4,-1 0×0)
- `stage-04-pill-icon`: ink 797,364 13×14 → 799,366 12×8 (+2,+2 -1×-6); geo 796,364 14×14 → 798,363 14×14 (+2,-1 0×0)
- `heading-support`: ink 292,115 450×12 → 288,115 452×12 (-4,0 +2×0); geo 288,113 460×16 → 288,112 452×16 (0,-1 -8×0)
- `stage-01-symbol`: ink 111,223 33×33 → 111,223 23×31 (0,0 -10×-2); geo 108,218 36×40 → 106,222 33×33 (-2,+4 -3×-7)
- `stage-02-symbol`: ink 304,224 32×28 → 306,224 28×26 (+2,0 -4×-2); geo 300,216 36×36 → 304,221 32×32 (+4,+5 -4×-4)
- `stage-03-symbol`: ink 560,223 30×29 → 562,224 24×21 (+2,+1 -6×-8); geo 554,216 36×36 → 559,221 30×30 (+5,+5 -6×-6)
- `stage-04-symbol`: ink 800,223 33×29 → 804,224 27×27 (+4,+1 -6×-2); geo 800,218 34×34 → 801,221 33×33 (+1,+3 -1×-1)
- `stage-04-title`: ink 793,285 118×10 → 794,284 123×12 (+1,-1 +5×+2); geo 790,282 128×18 → 794,283 116×13 (+4,+1 -12×-5)
- `stage-04-body-line-1`: ink 794,320 95×9 → 795,320 103×10 (+1,0 +8×+1); geo 790,316 128×13 → 795,317 111×14 (+5,+1 -17×+1)
- `stage-03-pill`: ink 547,362 130×22 → 548,362 126×22 (+1,0 -4×0); geo 546,362 132×22 → 548,362 131×22 (+2,0 -1×0)
- `stage-01-icon-frame`: ink 97,213 55×51 → 97,213 50×50 (0,0 -5×-1); geo 97,210 55×55 → 97,213 50×50 (0,+3 -5×-5)
- `stage-02-icon-frame`: ink 296,213 50×49 → 295,210 50×52 (-1,-3 0×+3); geo 294,210 52×52 → 295,212 50×50 (+1,+2 -2×-2)
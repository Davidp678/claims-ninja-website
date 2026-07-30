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
| overall mismatch | **6.13%** (29318 px) |

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
| Loose (L≥160, can include glow) | 285,74 463×42 | 287,77 451×39 |
| Dense glyph (L≥180) | 285,74 463×29 | 287,77 451×28 |

## Geometric bounds (mask geometry vs DOM)

| Element | Ref geometric | Actual DOM | Delta |
|---|---|---|---|
| `connector-1-line` | 246,238 30×3 | 246,238 30×3 | 0,0 0×0 |
| `connector-1-node` | 256,233 13×13 | 256,233 13×13 | 0,0 0×0 |
| `connector-1-node-border` | 256,233 13×13 | 257,234 11×11 | +1,+1 -2×-2 |
| `connector-1-node-interior` | 258,235 9×9 | 258,235 9×9 | 0,0 0×0 |
| `connector-1-dot` | 260,237 5×5 | 260,237 5×5 | 0,0 0×0 |
| `connector-1-glow` | 253,230 19×19 | 254,231 17×17 | +1,+1 -2×-2 |
| `connector-2-line` | 508,238 24×3 | 508,238 24×3 | 0,0 0×0 |
| `connector-2-node` | 513,233 13×13 | 513,233 13×13 | 0,0 0×0 |
| `connector-2-node-border` | 513,233 13×13 | 514,234 11×11 | +1,+1 -2×-2 |
| `connector-2-node-interior` | 515,235 9×9 | 515,235 9×9 | 0,0 0×0 |
| `connector-2-dot` | 517,237 5×5 | 517,237 5×5 | 0,0 0×0 |
| `connector-2-glow` | 510,230 19×19 | 511,231 17×17 | +1,+1 -2×-2 |
| `connector-3-line` | 750,238 24×3 | 750,238 24×3 | 0,0 0×0 |
| `connector-3-node` | 757,233 13×13 | 757,233 13×13 | 0,0 0×0 |
| `connector-3-node-border` | 757,233 13×13 | 758,234 11×11 | +1,+1 -2×-2 |
| `connector-3-node-interior` | 759,235 9×9 | 759,235 9×9 | 0,0 0×0 |
| `connector-3-dot` | 761,237 5×5 | 761,237 5×5 | 0,0 0×0 |
| `connector-3-glow` | 754,230 19×19 | 755,231 17×17 | +1,+1 -2×-2 |
| `stage-03-check-0` | 589,208 16×16 | 590,208 16×16 | +1,0 0×0 |
| `stage-03-check-1` | 589,228 16×16 | 590,228 16×16 | +1,0 0×0 |
| `stage-03-check-2` | 589,248 16×16 | 590,248 16×16 | +1,0 0×0 |
| `stage-02-active-dot` | 327,208 9×9 | 333,212 7×7 | +6,+4 -2×-2 |
| `stage-01-pill-icon` | 104,364 14×14 | 106,367 14×14 | +2,+3 0×0 |
| `stage-02-pill-icon` | 300,364 14×14 | 303,367 14×14 | +3,+3 0×0 |
| `stage-03-pill-icon` | 552,364 14×14 | 557,367 14×14 | +5,+3 0×0 |
| `stage-04-pill-icon` | 796,364 14×14 | 800,367 14×14 | +4,+3 0×0 |
| `heading-eyebrow` | 420,47 185×12 | 421,49 182×9 | +1,+2 -3×-3 |
| `heading-title` | 280,72 470×34 | 284,72 455×32 | +4,0 -15×-2 |
| `heading-support` | 288,113 460×16 | 288,113 460×16 | 0,0 0×0 |
| `stage-01-number` | 98,186 24×20 | 99,187 14×15 | +1,+1 -10×-5 |
| `stage-02-number` | 295,186 28×20 | 296,187 17×15 | +1,+1 -11×-5 |
| `stage-03-number` | 548,186 28×20 | 550,187 17×15 | +2,+1 -11×-5 |
| `stage-04-number` | 790,186 28×20 | 793,187 18×15 | +3,+1 -10×-5 |
| `stage-01-symbol` | 108,218 36×40 | 105,218 36×36 | -3,0 0×-4 |
| `stage-02-symbol` | 300,216 36×36 | 304,220 30×30 | +4,+4 -6×-6 |
| `stage-03-symbol` | 554,216 36×36 | 557,219 32×32 | +3,+3 -4×-4 |
| `stage-04-symbol` | 800,218 34×34 | 798,218 36×36 | -2,0 +2×+2 |
| `stage-01-title` | 98,282 120×18 | 99,283 130×13 | +1,+1 +10×-5 |
| `stage-02-title` | 296,282 140×18 | 296,283 187×13 | 0,+1 +47×-5 |
| `stage-03-title` | 548,282 140×18 | 550,283 177×13 | +2,+1 +37×-5 |
| `stage-04-title` | 790,282 128×18 | 793,283 115×12 | +3,+1 -13×-6 |
| `stage-01-body-line-0` | 98,303 120×13 | 99,304 130×13 | +1,+1 +10×0 |
| `stage-01-body-line-1` | 98,316 120×13 | 99,317 130×13 | +1,+1 +10×0 |
| `stage-01-body-line-2` | 98,329 80×13 | 99,330 130×13 | +1,+1 +50×0 |
| `stage-02-body-line-0` | 296,303 140×13 | 296,304 185×13 | 0,+1 +45×0 |
| `stage-02-body-line-1` | 296,316 140×13 | 296,317 185×13 | 0,+1 +45×0 |
| `stage-02-body-line-2` | 296,329 140×13 | 296,330 185×13 | 0,+1 +45×0 |
| `stage-03-body-line-0` | 548,303 140×13 | 550,304 175×13 | +2,+1 +35×0 |
| `stage-03-body-line-1` | 548,316 140×13 | 550,317 175×13 | +2,+1 +35×0 |
| `stage-03-body-line-2` | 548,329 120×13 | 550,330 175×13 | +2,+1 +55×0 |
| `stage-04-body-line-0` | 790,303 128×13 | 793,304 115×13 | +3,+1 -13×0 |
| `stage-04-body-line-1` | 790,316 128×13 | 793,317 115×13 | +3,+1 -13×0 |
| `stage-04-body-line-2` | 790,329 128×13 | 793,330 115×13 | +3,+1 -13×0 |
| `stage-01-pill` | 96,362 94×22 | 97,363 98×22 | +1,+1 +4×0 |
| `stage-02-pill` | 294,362 120×22 | 294,363 125×22 | 0,+1 +5×0 |
| `stage-03-pill` | 546,362 132×22 | 548,363 136×22 | +2,+1 +4×0 |
| `stage-04-pill` | 788,362 94×22 | 791,363 99×22 | +3,+1 +5×0 |
| `stage-01-pill-label` | 118,366 70×12 | 126,369 58×10 | +8,+3 -12×-2 |
| `stage-02-pill-label` | 316,366 95×12 | 323,369 85×10 | +7,+3 -10×-2 |
| `stage-03-pill-label` | 568,366 105×12 | 577,369 96×10 | +9,+3 -9×-2 |
| `stage-04-pill-label` | 812,366 70×12 | 820,369 59×10 | +8,+3 -11×-2 |
| `stage-01-icon-frame` | 97,210 55×55 | 98,211 50×50 | +1,+1 -5×-5 |
| `stage-02-icon-frame` | 294,210 52×52 | 295,211 48×48 | +1,+1 -4×-4 |
| `stage-03-icon-frame` | 546,210 52×52 | 549,211 48×48 | +3,+1 -4×-4 |
| `stage-04-icon-frame` | 790,210 50×50 | 791,211 50×50 | +1,+1 0×0 |
| `stage-02-rear-panel` | 318,200 170×72 | 319,201 170×72 | +1,+1 0×0 |
| `stage-03-rear-panel` | 572,200 160×78 | 573,201 160×72 | +1,+1 0×-6 |

## Painted-ink bounds (mask ink vs paint-isolation)

Primitives marked `geometry-only` intentionally omit painted-ink deltas (JPEG ink is unreliable for those marks).

| Element | Ref ink | Actual ink | Delta | Methods |
|---|---|---|---|---|
| `connector-1-line` | 246,238 30×3 | 246,238 30×3 | 0,0 0×0 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-1-node` | 257,238 11×3 | 256,233 12×13 | -1,-5 +1×+10 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-1-node-border` | 257,238 11×3 | 257,234 11×11 | 0,-4 0×+8 | ref=mask-ink:connector; act=mask-ink:connector |
| `connector-1-node-interior` | 259,236 7×7 | 261,236 5×7 | +2,0 -2×0 | ref=mask-ink:dark; act=mask-ink:dark |
| `connector-1-dot` | 261,238 3×3 | 260,237 4×5 | -1,-1 +1×+2 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-1-glow` | 254,237 17×5 | 254,231 16×17 | 0,-6 -1×+12 | ref=mask-ink:glow; act=paint-layer-isolation |
| `connector-2-line` | 508,238 24×3 | 508,238 24×3 | 0,0 0×0 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-2-node` | 514,236 11×9 | 513,233 12×13 | -1,-3 +1×+4 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-2-node-border` | 514,236 11×9 | 514,234 11×11 | 0,-2 0×+2 | ref=mask-ink:connector; act=mask-ink:connector |
| `connector-2-node-interior` | 522,238 1×1 | 518,236 5×7 | -4,-2 +4×+6 | ref=mask-ink:dark; act=mask-ink:dark |
| `connector-2-dot` | 518,238 3×3 | 517,237 4×5 | -1,-1 +1×+2 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-2-glow` | 511,230 17×19 | 511,231 16×17 | 0,+1 -1×-2 | ref=mask-ink:glow; act=paint-layer-isolation |
| `connector-3-line` | 751,238 23×3 | 750,238 24×3 | -1,0 +1×0 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-3-node` | 758,238 11×3 | 758,233 12×13 | 0,-5 +1×+10 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-3-node-border` | 758,238 11×3 | 758,234 11×11 | 0,-4 0×+8 | ref=mask-ink:connector; act=mask-ink:connector |
| `connector-3-node-interior` | 760,236 7×7 | 760,236 5×7 | 0,0 -2×0 | ref=mask-ink:dark; act=mask-ink:dark |
| `connector-3-dot` | 762,238 3×3 | 762,237 4×5 | 0,-1 +1×+2 | ref=mask-ink:connector; act=paint-layer-isolation |
| `connector-3-glow` | 755,238 17×4 | 756,231 16×17 | +1,-7 -1×+13 | ref=mask-ink:glow; act=paint-layer-isolation |
| `stage-03-check-0` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-check-1` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-check-2` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-active-dot` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-pill-icon` | 105,364 13×14 | 108,369 10×11 | +3,+5 -3×-3 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-02-pill-icon` | 300,364 14×14 | 305,368 10×9 | +5,+4 -4×-5 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-03-pill-icon` | 554,364 12×14 | 559,371 10×6 | +5,+7 -2×-8 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-04-pill-icon` | 797,364 13×14 | 801,370 12×8 | +4,+6 -1×-6 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `heading-eyebrow` | 424,49 176×7 | 421,49 180×7 | -3,0 +4×0 | ref=mask-ink:red; act=paint-diff-isolation |
| `heading-title` | 285,74 463×29 | 286,77 452×28 | +1,+3 -11×-1 | ref=mask-ink:white180; act=paint-diff-isolation |
| `heading-support` | 292,115 450×12 | 288,115 466×13 | -4,0 +16×+1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-number` | 101,189 13×11 | 99,188 14×12 | -2,-1 +1×+1 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-02-number` | 298,189 17×11 | 296,188 17×12 | -2,-1 0×+1 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-03-number` | 551,188 17×12 | 550,188 17×12 | -1,0 0×0 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-04-number` | 793,189 18×11 | 793,188 18×12 | 0,-1 0×+1 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-01-symbol` | 111,223 33×33 | 108,218 29×36 | -3,-5 -4×+3 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-02-symbol` | 304,224 32×28 | 306,223 26×24 | +2,-1 -6×-4 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-03-symbol` | 560,223 30×29 | 559,220 30×27 | -1,-3 0×-2 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-04-symbol` | 800,223 33×29 | 801,221 30×30 | +1,-2 -3×+1 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-01-title` | 101,285 99×9 | 99,285 97×10 | -2,0 -2×+1 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-02-title` | 299,285 119×11 | 297,285 117×12 | -2,0 -2×+1 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-03-title` | 551,285 120×11 | 550,285 117×12 | -1,0 -3×+1 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-04-title` | 793,285 118×10 | 793,284 122×12 | 0,-1 +4×+2 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-01-body-line-0` | 101,305 112×10 | 99,306 114×9 | -2,+1 +2×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-body-line-1` | 101,320 107×9 | 99,319 107×9 | -2,-1 0×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-body-line-2` | 101,335 50×7 | 99,332 53×7 | -2,-3 +3×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-body-line-0` | 298,305 106×9 | 296,306 107×9 | -2,+1 +1×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-body-line-1` | 298,320 85×7 | 296,319 85×7 | -2,-1 0×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-body-line-2` | 298,335 121×7 | 296,332 122×10 | -2,-3 +1×+3 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-body-line-0` | 551,305 123×10 | 550,306 123×9 | -1,+1 0×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-body-line-1` | 551,320 124×9 | 550,319 122×10 | -1,-1 -2×+1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-body-line-2` | 551,335 86×7 | 550,332 85×9 | -1,-3 -1×+2 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-body-line-0` | 793,305 100×9 | 793,306 103×8 | 0,+1 +3×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-body-line-1` | 794,320 95×9 | 793,319 102×10 | -1,-1 +7×+1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-body-line-2` | 793,335 121×7 | 793,332 122×10 | 0,-3 +1×+3 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-pill` | 97,362 92×22 | 97,363 93×21 | 0,+1 +1×-1 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-02-pill` | 295,362 119×22 | 294,363 120×21 | -1,+1 +1×-1 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-03-pill` | 547,362 130×22 | 548,363 130×21 | +1,+1 0×-1 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-04-pill` | 789,362 93×22 | 791,363 91×21 | +2,+1 -2×-1 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-01-pill-label` | 124,368 57×7 | 126,369 58×7 | +2,+1 +1×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-pill-label` | 321,367 83×8 | 323,369 85×7 | +2,+2 +2×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-pill-label` | 574,367 95×10 | 577,369 96×9 | +3,+2 +1×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-pill-label` | 817,367 58×9 | 820,369 59×9 | +3,+2 +1×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-icon-frame` | 97,213 55×51 | 98,211 50×50 | +1,-2 -5×-1 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-02-icon-frame` | 296,213 50×49 | 295,210 51×52 | -1,-3 +1×+3 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-03-icon-frame` | 547,212 51×50 | 549,210 49×52 | +2,-2 -2×+2 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-04-icon-frame` | 792,214 48×46 | 791,211 49×49 | -1,-3 +1×+3 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-02-rear-panel` | 318,200 170×72 | 318,201 170×71 | 0,+1 0×-1 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-03-rear-panel` | 572,200 160×72 | 572,201 160×72 | 0,+1 0×0 | ref=mask-ink:edge; act=mask-ink:edge |

## Actual DOM layout boxes

| Selector | x,y w×h |
|---|---|
| `connector-1-dot` | 260,237 5×5 |
| `connector-1-glow` | 254,231 17×17 |
| `connector-1-line` | 246,238 30×3 |
| `connector-1-node` | 256,233 13×13 |
| `connector-1-node-border` | 257,234 11×11 |
| `connector-1-node-interior` | 258,235 9×9 |
| `connector-2-dot` | 517,237 5×5 |
| `connector-2-glow` | 511,231 17×17 |
| `connector-2-line` | 508,238 24×3 |
| `connector-2-node` | 513,233 13×13 |
| `connector-2-node-border` | 514,234 11×11 |
| `connector-2-node-interior` | 515,235 9×9 |
| `connector-3-dot` | 761,237 5×5 |
| `connector-3-glow` | 755,231 17×17 |
| `connector-3-line` | 750,238 24×3 |
| `connector-3-node` | 757,233 13×13 |
| `connector-3-node-border` | 758,234 11×11 |
| `connector-3-node-interior` | 759,235 9×9 |
| `heading-eyebrow` | 421,49 182×9 |
| `heading-support` | 288,113 460×16 |
| `heading-title` | 284,72 455×32 |
| `stage-01-body` | 99,304 130×39 |
| `stage-01-body-line-0` | 99,304 130×13 |
| `stage-01-body-line-1` | 99,317 130×13 |
| `stage-01-body-line-2` | 99,330 130×13 |
| `stage-01-card` | 85,170 157×229 |
| `stage-01-glow` | 96,201 48×48 |
| `stage-01-icon-frame` | 98,211 50×50 |
| `stage-01-number` | 99,187 14×15 |
| `stage-01-pill` | 97,363 98×22 |
| `stage-01-pill-icon` | 106,367 14×14 |
| `stage-01-pill-label` | 126,369 58×10 |
| `stage-01-rear-panel` | - |
| `stage-01-symbol` | 105,218 36×36 |
| `stage-01-title` | 99,283 130×13 |
| `stage-01-visual` | 97,199 136×82 |
| `stage-02-active-dot` | 333,212 7×7 |
| `stage-02-body` | 296,304 185×39 |
| `stage-02-body-line-0` | 296,304 185×13 |
| `stage-02-body-line-1` | 296,317 185×13 |
| `stage-02-body-line-2` | 296,330 185×13 |
| `stage-02-card` | 282,170 220×229 |
| `stage-02-content-bar-0` | 365,212 79×6 |
| `stage-02-content-bar-1` | 365,226 97×6 |
| `stage-02-divider` | 354,202 1×70 |
| `stage-02-glow` | 334,203 130×56 |
| `stage-02-icon-frame` | 295,211 48×48 |
| `stage-02-lower-block-0` | 365,250 14×14 |
| `stage-02-lower-block-1` | 385,250 14×14 |
| `stage-02-lower-block-2` | 405,250 14×14 |
| `stage-02-number` | 296,187 17×15 |
| `stage-02-pill` | 294,363 125×22 |
| `stage-02-pill-icon` | 303,367 14×14 |
| `stage-02-pill-label` | 323,369 85×10 |
| `stage-02-rear-panel` | 319,201 170×72 |
| `stage-02-sidebar` | 320,202 34×70 |
| `stage-02-sidebar-row-0` | 343,214 8×3 |
| `stage-02-sidebar-row-1` | 343,225 7×2 |
| `stage-02-symbol` | 304,220 30×30 |
| `stage-02-title` | 296,283 187×13 |
| `stage-02-visual` | 294,199 199×82 |
| `stage-03-bar-a-0` | 621,218 92×5 |
| `stage-03-bar-b-0` | - |
| `stage-03-body` | 550,304 175×39 |
| `stage-03-body-line-0` | 550,304 175×13 |
| `stage-03-body-line-1` | 550,317 175×13 |
| `stage-03-body-line-2` | 550,330 175×13 |
| `stage-03-card` | 536,170 210×229 |
| `stage-03-check-0` | 590,208 16×16 |
| `stage-03-check-1` | 590,228 16×16 |
| `stage-03-check-2` | 590,248 16×16 |
| `stage-03-glow` | 588,203 120×56 |
| `stage-03-icon-frame` | 549,211 48×48 |
| `stage-03-number` | 550,187 17×15 |
| `stage-03-pill` | 548,363 136×22 |
| `stage-03-pill-icon` | 557,367 14×14 |
| `stage-03-pill-label` | 577,369 96×10 |
| `stage-03-rear-panel` | 573,201 160×72 |
| `stage-03-right-edge` | - |
| `stage-03-row-0` | 602,212 120×16 |
| `stage-03-row-1` | 602,232 120×16 |
| `stage-03-row-2` | 602,252 120×16 |
| `stage-03-symbol` | 557,219 32×32 |
| `stage-03-title` | 550,283 177×13 |
| `stage-03-visual` | 548,199 189×82 |
| `stage-04-body` | 793,304 115×39 |
| `stage-04-body-line-0` | 793,304 115×13 |
| `stage-04-body-line-1` | 793,317 115×13 |
| `stage-04-body-line-2` | 793,330 115×13 |
| `stage-04-card` | 779,170 142×229 |
| `stage-04-glow` | 790,201 48×48 |
| `stage-04-icon-frame` | 791,211 50×50 |
| `stage-04-number` | 793,187 18×15 |
| `stage-04-pill` | 791,363 99×22 |
| `stage-04-pill-icon` | 800,367 14×14 |
| `stage-04-pill-label` | 820,369 59×10 |
| `stage-04-rear-panel` | - |
| `stage-04-symbol` | 798,218 36×36 |
| `stage-04-title` | 793,283 115×12 |
| `stage-04-visual` | 791,199 121×82 |

## Actual paint-isolated ink

| Selector | x,y w×h | count |
|---|---|---:|
| `connector-1-dot` | 260,237 4×5 | 16 |
| `connector-1-glow` | 254,231 16×17 | 213 |
| `connector-1-line` | 246,238 30×3 | 52 |
| `connector-1-node` | 256,233 12×13 | 15 |
| `connector-2-dot` | 517,237 4×5 | 16 |
| `connector-2-glow` | 511,231 16×17 | 213 |
| `connector-2-line` | 508,238 24×3 | 34 |
| `connector-2-node` | 513,233 12×13 | 17 |
| `connector-3-dot` | 762,237 4×5 | 16 |
| `connector-3-glow` | 756,231 16×17 | 212 |
| `connector-3-line` | 750,238 24×3 | 34 |
| `connector-3-node` | 758,233 12×13 | 12 |
| `heading-eyebrow` | 421,49 180×7 | 602 |
| `heading-support` | 288,115 466×13 | 1827 |
| `heading-title` | 286,77 452×28 | 4325 |
| `stage-01-body-line-0` | 99,306 114×9 | 441 |
| `stage-01-body-line-1` | 99,319 107×9 | 390 |
| `stage-01-body-line-2` | 99,332 53×7 | 199 |
| `stage-01-number` | 99,188 14×12 | 110 |
| `stage-01-pill-icon` | 108,369 10×11 | 48 |
| `stage-01-pill-label` | 126,369 58×7 | 199 |
| `stage-01-symbol` | 108,218 29×36 | 496 |
| `stage-01-title` | 99,285 97×10 | 467 |
| `stage-02-active-dot` | 338,212 1×1 | 1 |
| `stage-02-body-line-0` | 296,306 107×9 | 378 |
| `stage-02-body-line-1` | 296,319 85×7 | 310 |
| `stage-02-body-line-2` | 296,332 122×10 | 484 |
| `stage-02-number` | 296,188 17×12 | 130 |
| `stage-02-pill-icon` | 305,368 10×9 | 57 |
| `stage-02-pill-label` | 323,369 85×7 | 263 |
| `stage-02-symbol` | 306,223 26×24 | 316 |
| `stage-02-title` | 297,285 117×12 | 567 |
| `stage-03-body-line-0` | 550,306 123×9 | 456 |
| `stage-03-body-line-1` | 550,319 122×10 | 461 |
| `stage-03-body-line-2` | 550,332 85×9 | 306 |
| `stage-03-check-0` | 590,208 16×16 | 208 |
| `stage-03-check-1` | 590,228 16×16 | 208 |
| `stage-03-check-2` | 590,248 16×16 | 208 |
| `stage-03-number` | 550,188 17×12 | 132 |
| `stage-03-pill-icon` | 559,371 10×6 | 27 |
| `stage-03-pill-label` | 577,369 96×9 | 322 |
| `stage-03-symbol` | 559,220 30×27 | 344 |
| `stage-03-title` | 550,285 117×12 | 615 |
| `stage-04-body-line-0` | 793,306 103×8 | 410 |
| `stage-04-body-line-1` | 793,319 102×10 | 376 |
| `stage-04-body-line-2` | 793,332 122×10 | 456 |
| `stage-04-number` | 793,188 18×12 | 128 |
| `stage-04-pill-icon` | 801,370 12×8 | 52 |
| `stage-04-pill-label` | 820,369 59×9 | 225 |
| `stage-04-symbol` | 801,221 30×30 | 373 |
| `stage-04-title` | 793,284 122×12 | 568 |

## Color samples (RGB)

| Sample | XY | Reference | Actual |
|---|---|---|---|
| pageBg | 40,40 | 17,17,17 | 16,16,16 |
| card1Fill | 200,270 | 23,23,23 | 22,22,22 |
| card1Border | 85,280 | 34,34,34 | 36,36,36 |
| primaryRedNumber | ref 103,189 / act 102,189 | 118,46,49 | 143,39,38 |
| mutedIconStroke | ref 120,246 / act 121,245 | 43,28,31 | 69,41,38 |
| title | ref 172,286 / act 159,288 | 231,231,231 | 242,242,235 |
| bodyText | ref 118,310 / act 120,310 | 104,104,104 | 103,109,106 |
| pillBorder | ref 96,364 / act 96,364 | 22,24,21 | 22,22,22 |
| connector | 262,239 | 152,71,70 | 173,81,82 |
| centerGlow | 512,250 | 56,25,22 | 50,22,19 |

## Region mismatch ratios

| Region | Mismatched | Total | Ratio |
|---|---:|---:|---:|
| heading | 9948 | 101400 | 9.81% |
| stage-01 | 3250 | 35953 | 9.04% |
| stage-02 | 5822 | 50380 | 11.56% |
| stage-03 | 6094 | 48090 | 12.67% |
| stage-04 | 3514 | 32518 | 10.81% |
| stage-01-visual | 575 | 5600 | 10.27% |
| stage-02-visual | 2628 | 16000 | 16.43% |
| stage-03-visual | 2889 | 15200 | 19.01% |
| stage-04-visual | 506 | 5600 | 9.04% |
| connector-01-02 | 172 | 960 | 17.92% |
| connector-02-03 | 158 | 816 | 19.36% |
| connector-03-04 | 151 | 792 | 19.07% |
| chat | 208 | 2750 | 7.56% |
| bottom-line | 0 | 7168 | 0.00% |

## Mask audits + isolated pairs

- `masks/*.png` — reference mask geometry with magenta ink hits
- `isolated/*` — ref/actual/side crops for major primitives
- `crops/` — nearest-neighbor 4× region triplets

## Remaining visual discrepancies

- `connector-1-node`: ink 257,238 11×3 → 256,233 12×13 (-1,-5 +1×+10); geo 256,233 13×13 → 256,233 13×13 (0,0 0×0)
- `connector-1-node-border`: ink 257,238 11×3 → 257,234 11×11 (0,-4 0×+8); geo 256,233 13×13 → 257,234 11×11 (+1,+1 -2×-2)
- `connector-1-glow`: ink 254,237 17×5 → 254,231 16×17 (0,-6 -1×+12); geo 253,230 19×19 → 254,231 17×17 (+1,+1 -2×-2)
- `connector-2-node`: ink 514,236 11×9 → 513,233 12×13 (-1,-3 +1×+4); geo 513,233 13×13 → 513,233 13×13 (0,0 0×0)
- `connector-2-node-interior`: ink 522,238 1×1 → 518,236 5×7 (-4,-2 +4×+6); geo 515,235 9×9 → 515,235 9×9 (0,0 0×0)
- `connector-3-node`: ink 758,238 11×3 → 758,233 12×13 (0,-5 +1×+10); geo 757,233 13×13 → 757,233 13×13 (0,0 0×0)
- `connector-3-node-border`: ink 758,238 11×3 → 758,234 11×11 (0,-4 0×+8); geo 757,233 13×13 → 758,234 11×11 (+1,+1 -2×-2)
- `connector-3-glow`: ink 755,238 17×4 → 756,231 16×17 (+1,-7 -1×+13); geo 754,230 19×19 → 755,231 17×17 (+1,+1 -2×-2)
- `stage-02-active-dot` (geometry-only): geo 327,208 9×9 → 333,212 7×7 (+6,+4 -2×-2)
- `stage-01-pill-icon`: ink 105,364 13×14 → 108,369 10×11 (+3,+5 -3×-3); geo 104,364 14×14 → 106,367 14×14 (+2,+3 0×0)
- `stage-02-pill-icon`: ink 300,364 14×14 → 305,368 10×9 (+5,+4 -4×-5); geo 300,364 14×14 → 303,367 14×14 (+3,+3 0×0)
- `stage-03-pill-icon`: ink 554,364 12×14 → 559,371 10×6 (+5,+7 -2×-8); geo 552,364 14×14 → 557,367 14×14 (+5,+3 0×0)
- `stage-04-pill-icon`: ink 797,364 13×14 → 801,370 12×8 (+4,+6 -1×-6); geo 796,364 14×14 → 800,367 14×14 (+4,+3 0×0)
- `heading-eyebrow`: ink 424,49 176×7 → 421,49 180×7 (-3,0 +4×0); geo 420,47 185×12 → 421,49 182×9 (+1,+2 -3×-3)
- `heading-title`: ink 285,74 463×29 → 286,77 452×28 (+1,+3 -11×-1); geo 280,72 470×34 → 284,72 455×32 (+4,0 -15×-2)
- `heading-support`: ink 292,115 450×12 → 288,115 466×13 (-4,0 +16×+1); geo 288,113 460×16 → 288,113 460×16 (0,0 0×0)
- `stage-01-symbol`: ink 111,223 33×33 → 108,218 29×36 (-3,-5 -4×+3); geo 108,218 36×40 → 105,218 36×36 (-3,0 0×-4)
- `stage-02-symbol`: ink 304,224 32×28 → 306,223 26×24 (+2,-1 -6×-4); geo 300,216 36×36 → 304,220 30×30 (+4,+4 -6×-6)
- `stage-03-symbol`: ink 560,223 30×29 → 559,220 30×27 (-1,-3 0×-2); geo 554,216 36×36 → 557,219 32×32 (+3,+3 -4×-4)
- `stage-04-title`: ink 793,285 118×10 → 793,284 122×12 (0,-1 +4×+2); geo 790,282 128×18 → 793,283 115×12 (+3,+1 -13×-6)
- `stage-01-body-line-2`: ink 101,335 50×7 → 99,332 53×7 (-2,-3 +3×0); geo 98,329 80×13 → 99,330 130×13 (+1,+1 +50×0)
- `stage-02-body-line-2`: ink 298,335 121×7 → 296,332 122×10 (-2,-3 +1×+3); geo 296,329 140×13 → 296,330 185×13 (0,+1 +45×0)
- `stage-03-body-line-2`: ink 551,335 86×7 → 550,332 85×9 (-1,-3 -1×+2); geo 548,329 120×13 → 550,330 175×13 (+2,+1 +55×0)
- `stage-04-body-line-1`: ink 794,320 95×9 → 793,319 102×10 (-1,-1 +7×+1); geo 790,316 128×13 → 793,317 115×13 (+3,+1 -13×0)
- `stage-04-body-line-2`: ink 793,335 121×7 → 793,332 122×10 (0,-3 +1×+3); geo 790,329 128×13 → 793,330 115×13 (+3,+1 -13×0)
- `stage-03-pill-label`: ink 574,367 95×10 → 577,369 96×9 (+3,+2 +1×-1); geo 568,366 105×12 → 577,369 96×10 (+9,+3 -9×-2)
- `stage-04-pill-label`: ink 817,367 58×9 → 820,369 59×9 (+3,+2 +1×0); geo 812,366 70×12 → 820,369 59×10 (+8,+3 -11×-2)
- `stage-01-icon-frame`: ink 97,213 55×51 → 98,211 50×50 (+1,-2 -5×-1); geo 97,210 55×55 → 98,211 50×50 (+1,+1 -5×-5)
- `stage-02-icon-frame`: ink 296,213 50×49 → 295,210 51×52 (-1,-3 +1×+3); geo 294,210 52×52 → 295,211 48×48 (+1,+1 -4×-4)
- `stage-04-icon-frame`: ink 792,214 48×46 → 791,211 49×49 (-1,-3 +1×+3); geo 790,210 50×50 → 791,211 50×50 (+1,+1 0×0)
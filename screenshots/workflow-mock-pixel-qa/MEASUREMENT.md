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
| overall mismatch | **5.20%** (24851 px) |

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
| Loose (L≥160, can include glow) | 285,74 463×42 | 284,75 463×28 |
| Dense glyph (L≥180) | 285,74 463×29 | 284,75 463×28 |

## Geometric bounds (mask geometry vs DOM)

| Element | Ref geometric | Actual DOM | Delta |
|---|---|---|---|
| `connector-1-line` | 246,238 30×3 | 242,238 40×2 | -4,0 +10×-1 |
| `connector-1-node` | 256,233 13×13 | 257,234 10×10 | +1,+1 -3×-3 |
| `connector-1-node-border` | 256,233 13×13 | - | -256,-233 -13×-13 |
| `connector-1-node-interior` | 258,235 9×9 | - | -258,-235 -9×-9 |
| `connector-1-dot` | 260,237 5×5 | 261,238 3×3 | +1,+1 -2×-2 |
| `connector-1-glow` | 253,230 19×19 | - | -253,-230 -19×-19 |
| `connector-2-line` | 508,238 24×3 | 502,238 34×2 | -6,0 +10×-1 |
| `connector-2-node` | 513,233 13×13 | 514,234 10×10 | +1,+1 -3×-3 |
| `connector-2-node-border` | 513,233 13×13 | - | -513,-233 -13×-13 |
| `connector-2-node-interior` | 515,235 9×9 | - | -515,-235 -9×-9 |
| `connector-2-dot` | 517,237 5×5 | 518,238 3×3 | +1,+1 -2×-2 |
| `connector-2-glow` | 510,230 19×19 | - | -510,-230 -19×-19 |
| `connector-3-line` | 750,238 24×3 | 746,238 33×2 | -4,0 +9×-1 |
| `connector-3-node` | 757,233 13×13 | 758,234 10×10 | +1,+1 -3×-3 |
| `connector-3-node-border` | 757,233 13×13 | - | -757,-233 -13×-13 |
| `connector-3-node-interior` | 759,235 9×9 | - | -759,-235 -9×-9 |
| `connector-3-dot` | 761,237 5×5 | 761,238 3×3 | 0,+1 -2×-2 |
| `connector-3-glow` | 754,230 19×19 | - | -754,-230 -19×-19 |
| `stage-03-check-0` | 600,208 16×16 | 611,212 12×12 | +11,+4 -4×-4 |
| `stage-03-check-1` | 600,228 16×16 | 611,234 12×12 | +11,+6 -4×-4 |
| `stage-03-check-2` | 600,248 16×16 | 611,256 12×12 | +11,+8 -4×-4 |
| `stage-02-active-dot` | 327,208 9×9 | 326,210 6×6 | -1,+2 -3×-3 |
| `stage-01-pill-icon` | 104,364 14×14 | 104,367 12×12 | 0,+3 -2×-2 |
| `stage-02-pill-icon` | 300,364 14×14 | 301,367 12×12 | +1,+3 -2×-2 |
| `stage-03-pill-icon` | 552,364 14×14 | 555,367 12×12 | +3,+3 -2×-2 |
| `stage-04-pill-icon` | 796,364 14×14 | 798,367 12×12 | +2,+3 -2×-2 |
| `heading-eyebrow` | 420,47 185×12 | 1,49 1023×9 | -419,+2 +838×-3 |
| `heading-title` | 280,72 470×34 | 3,71 1024×30 | -277,-1 +554×-4 |
| `heading-support` | 288,113 460×16 | 289,112 450×16 | +1,-1 -10×0 |
| `stage-01-number` | 98,186 24×20 | 102,187 15×15 | +4,+1 -9×-5 |
| `stage-02-number` | 295,186 28×20 | 299,187 18×15 | +4,+1 -10×-5 |
| `stage-03-number` | 548,186 28×20 | 553,187 18×15 | +5,+1 -10×-5 |
| `stage-04-number` | 790,186 28×20 | 796,187 18×15 | +6,+1 -10×-5 |
| `stage-01-symbol` | 108,218 36×40 | 109,223 32×32 | +1,+5 -4×-8 |
| `stage-02-symbol` | 300,216 36×36 | 307,223 30×30 | +7,+7 -6×-6 |
| `stage-03-symbol` | 554,216 36×36 | 560,222 28×28 | +6,+6 -8×-8 |
| `stage-04-symbol` | 800,218 34×34 | 803,223 32×32 | +3,+5 -2×-2 |
| `stage-01-title` | 98,282 120×18 | 100,283 127×15 | +2,+1 +7×-3 |
| `stage-02-title` | 296,282 140×18 | 297,283 186×15 | +1,+1 +46×-3 |
| `stage-03-title` | 548,282 140×18 | 551,283 176×15 | +3,+1 +36×-3 |
| `stage-04-title` | 790,282 128×18 | 794,283 118×14 | +4,+1 -10×-4 |
| `stage-01-body-line-0` | 98,303 120×13 | 100,303 129×15 | +2,0 +9×+2 |
| `stage-01-body-line-1` | 98,316 120×13 | 100,318 129×15 | +2,+2 +9×+2 |
| `stage-01-body-line-2` | 98,329 80×13 | 100,333 129×15 | +2,+4 +49×+2 |
| `stage-02-body-line-0` | 296,303 140×13 | 297,303 182×15 | +1,0 +42×+2 |
| `stage-02-body-line-1` | 296,316 140×13 | 297,318 182×15 | +1,+2 +42×+2 |
| `stage-02-body-line-2` | 296,329 140×13 | 297,333 182×15 | +1,+4 +42×+2 |
| `stage-03-body-line-0` | 548,303 140×13 | 551,303 172×15 | +3,0 +32×+2 |
| `stage-03-body-line-1` | 548,316 140×13 | 551,318 172×15 | +3,+2 +32×+2 |
| `stage-03-body-line-2` | 548,329 120×13 | 551,333 172×15 | +3,+4 +52×+2 |
| `stage-04-body-line-0` | 790,303 128×13 | 794,303 114×15 | +4,0 -14×+2 |
| `stage-04-body-line-1` | 790,316 128×13 | 794,318 114×15 | +4,+2 -14×+2 |
| `stage-04-body-line-2` | 790,329 128×13 | 794,333 114×15 | +4,+4 -14×+2 |
| `stage-01-pill` | 96,362 94×22 | 97,362 92×22 | +1,0 -2×0 |
| `stage-02-pill` | 294,362 120×22 | 294,362 118×22 | 0,0 -2×0 |
| `stage-03-pill` | 546,362 132×22 | 548,362 129×22 | +2,0 -3×0 |
| `stage-04-pill` | 788,362 94×22 | 791,362 93×22 | +3,0 -1×0 |
| `stage-01-pill-label` | 118,366 70×12 | 121,368 60×10 | +3,+2 -10×-2 |
| `stage-02-pill-label` | 316,366 95×12 | 318,368 86×10 | +2,+2 -9×-2 |
| `stage-03-pill-label` | 568,366 105×12 | 572,368 97×10 | +4,+2 -8×-2 |
| `stage-04-pill-label` | 812,366 70×12 | 815,368 61×10 | +3,+2 -9×-2 |
| `stage-01-icon-frame` | 97,210 55×55 | 98,212 54×54 | +1,+2 -1×-1 |
| `stage-02-icon-frame` | 294,210 52×52 | 295,211 54×54 | +1,+1 +2×+2 |
| `stage-03-icon-frame` | 546,210 52×52 | 549,211 50×50 | +3,+1 -2×-2 |
| `stage-04-icon-frame` | 790,210 50×50 | 792,212 54×54 | +2,+2 +4×+4 |
| `stage-02-rear-panel` | 318,200 170×72 | 317,201 172×72 | -1,+1 +2×0 |
| `stage-03-rear-panel` | 572,200 160×78 | 597,201 136×78 | +25,+1 -24×0 |

## Painted-ink bounds (mask ink vs paint-isolation)

| Element | Ref ink | Actual ink | Delta | Methods |
|---|---|---|---|---|
| `connector-1-line` | 246,238 30×3 | 240,236 42×7 | -6,-2 +12×+4 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-1-node` | 257,238 11×3 | 255,232 14×14 | -2,-6 +3×+11 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-1-node-border` | 257,238 11×3 | 257,234 11×10 | 0,-4 0×+7 | ref=mask-ink:connector; act=mask-ink:connector |
| `connector-1-node-interior` | 259,236 7×7 | 259,236 7×7 | 0,0 0×0 | ref=mask-ink:dark; act=mask-ink:dark |
| `connector-1-dot` | 261,238 3×3 | 259,236 7×7 | -2,-2 +4×+4 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-1-glow` | 254,237 17×5 | 254,234 17×10 | 0,-3 0×+5 | ref=mask-ink:glow; act=mask-ink:glow |
| `connector-2-line` | 508,238 24×3 | 500,236 36×7 | -8,-2 +12×+4 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-2-node` | 514,236 11×9 | 512,232 14×14 | -2,-4 +3×+5 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-2-node-border` | 514,236 11×9 | 514,234 11×10 | 0,-2 0×+1 | ref=mask-ink:connector; act=mask-ink:connector |
| `connector-2-node-interior` | 522,238 1×1 | 516,236 7×7 | -6,-2 +6×+6 | ref=mask-ink:dark; act=mask-ink:dark |
| `connector-2-dot` | 518,238 3×3 | 516,236 7×7 | -2,-2 +4×+4 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-2-glow` | 511,230 17×19 | 511,230 17×19 | 0,0 0×0 | ref=mask-ink:glow; act=mask-ink:glow |
| `connector-3-line` | 751,238 23×3 | 744,236 35×7 | -7,-2 +12×+4 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-3-node` | 758,238 11×3 | 756,232 14×14 | -2,-6 +3×+11 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-3-node-border` | 758,238 11×3 | 758,234 11×10 | 0,-4 0×+7 | ref=mask-ink:connector; act=mask-ink:connector |
| `connector-3-node-interior` | 760,236 7×7 | 760,236 7×7 | 0,0 0×0 | ref=mask-ink:dark; act=mask-ink:dark |
| `connector-3-dot` | 762,238 3×3 | 759,236 7×7 | -3,-2 +4×+4 | ref=mask-ink:connector; act=paint-diff-isolation |
| `connector-3-glow` | 755,238 17×4 | 755,234 17×10 | 0,-4 0×+6 | ref=mask-ink:glow; act=mask-ink:glow |
| `stage-03-check-0` | - | 609,210 16×16 | +609,+210 +16×+16 | ref=ref-ink-miss; act=paint-diff-isolation |
| `stage-03-check-1` | - | 609,232 16×16 | +609,+232 +16×+16 | ref=ref-ink-miss; act=paint-diff-isolation |
| `stage-03-check-2` | - | 609,254 16×16 | +609,+254 +16×+16 | ref=ref-ink-miss; act=paint-diff-isolation |
| `stage-02-active-dot` | - | 324,208 10×3 | +324,+208 +10×+3 | ref=ref-ink-miss; act=paint-diff-isolation |
| `stage-01-pill-icon` | 105,364 13×14 | 106,368 8×10 | +1,+4 -5×-4 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-02-pill-icon` | 300,364 14×14 | 303,368 8×10 | +3,+4 -6×-4 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-03-pill-icon` | 554,364 12×14 | 556,370 10×6 | +2,+6 -2×-8 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-04-pill-icon` | 797,364 13×14 | 798,370 11×6 | +1,+6 -2×-8 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `heading-eyebrow` | 424,49 176×7 | 424,49 176×7 | 0,0 0×0 | ref=mask-ink:red; act=paint-diff-isolation |
| `heading-title` | 285,74 463×29 | 284,75 463×28 | -1,+1 0×-1 | ref=mask-ink:white180; act=paint-diff-isolation |
| `heading-support` | 292,115 450×12 | 291,115 447×12 | -1,0 -3×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-number` | 101,189 13×11 | 102,188 14×12 | +1,-1 +1×+1 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-02-number` | 298,189 17×11 | 299,188 18×12 | +1,-1 +1×+1 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-03-number` | 551,188 17×12 | 553,188 18×12 | +2,0 +1×0 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-04-number` | 793,189 18×11 | 796,188 18×12 | +3,-1 0×+1 | ref=mask-ink:red; act=paint-diff-isolation |
| `stage-01-symbol` | 111,223 33×33 | 115,225 20×28 | +4,+2 -13×-5 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-02-symbol` | 304,224 32×28 | 310,226 24×24 | +6,+2 -8×-4 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-03-symbol` | 560,223 30×29 | 563,225 22×19 | +3,+2 -8×-10 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-04-symbol` | 800,223 33×29 | 806,227 26×24 | +6,+4 -7×-5 | ref=mask-ink:mutedRed; act=paint-diff-isolation |
| `stage-01-title` | 101,285 99×9 | 100,285 106×11 | -1,0 +7×+2 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-02-title` | 299,285 119×11 | 298,285 128×13 | -1,0 +9×+2 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-03-title` | 551,285 120×11 | 551,285 127×13 | 0,0 +7×+2 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-04-title` | 793,285 118×10 | 794,285 125×13 | +1,0 +7×+3 | ref=mask-ink:white170; act=paint-diff-isolation |
| `stage-01-body-line-0` | 101,305 112×10 | 100,305 125×11 | -1,0 +13×+1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-body-line-1` | 101,320 107×9 | 100,320 118×11 | -1,0 +11×+2 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-body-line-2` | 101,335 50×7 | 100,335 58×9 | -1,0 +8×+2 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-body-line-0` | 298,305 106×9 | 297,305 118×11 | -1,0 +12×+2 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-body-line-1` | 298,320 85×7 | 297,320 93×9 | -1,0 +8×+2 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-body-line-2` | 298,335 121×7 | 297,335 134×11 | -1,0 +13×+4 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-body-line-0` | 551,305 123×10 | 551,305 136×11 | 0,0 +13×+1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-body-line-1` | 551,320 124×9 | 551,320 134×11 | 0,0 +10×+2 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-body-line-2` | 551,335 86×7 | 551,335 94×11 | 0,0 +8×+4 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-body-line-0` | 793,305 100×9 | 794,305 113×9 | +1,0 +13×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-body-line-1` | 794,320 95×9 | 794,320 112×11 | 0,0 +17×+2 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-body-line-2` | 793,335 121×7 | 794,335 121×11 | +1,0 0×+4 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-pill` | 97,362 92×22 | 97,362 92×22 | 0,0 0×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-02-pill` | 295,362 119×22 | 294,362 118×22 | -1,0 -1×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-03-pill` | 547,362 130×22 | 548,362 129×22 | +1,0 -1×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-04-pill` | 789,362 93×22 | 791,362 88×22 | +2,0 -5×0 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-01-pill-label` | 124,368 57×7 | 121,368 60×7 | -3,0 +3×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-02-pill-label` | 321,367 83×8 | 318,368 86×7 | -3,+1 +3×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-03-pill-label` | 574,367 95×10 | 572,368 97×9 | -2,+1 +2×-1 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-04-pill-label` | 817,367 58×9 | 815,368 61×9 | -2,+1 +3×0 | ref=mask-ink:gray; act=paint-diff-isolation |
| `stage-01-icon-frame` | 97,213 55×51 | 98,212 54×53 | +1,-1 -1×+2 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-02-icon-frame` | 296,213 50×49 | 295,210 51×52 | -1,-3 +1×+3 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-03-icon-frame` | 547,212 51×50 | 549,210 49×52 | +2,-2 -2×+2 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-04-icon-frame` | 792,214 48×46 | 792,212 48×48 | 0,-2 0×+2 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-02-rear-panel` | 318,200 170×72 | 318,201 170×71 | 0,+1 0×-1 | ref=mask-ink:edge; act=mask-ink:edge |
| `stage-03-rear-panel` | 572,200 160×72 | 572,201 160×77 | 0,+1 0×+5 | ref=mask-ink:edge; act=mask-ink:edge |

## Actual DOM layout boxes

| Selector | x,y w×h |
|---|---|
| `connector-1-dot` | 261,238 3×3 |
| `connector-1-line` | 242,238 40×2 |
| `connector-1-node` | 257,234 10×10 |
| `connector-2-dot` | 518,238 3×3 |
| `connector-2-line` | 502,238 34×2 |
| `connector-2-node` | 514,234 10×10 |
| `connector-3-dot` | 761,238 3×3 |
| `connector-3-line` | 746,238 33×2 |
| `connector-3-node` | 758,234 10×10 |
| `heading-eyebrow` | 1,49 1023×9 |
| `heading-support` | 289,112 450×16 |
| `heading-title` | 3,71 1024×30 |
| `stage-01-body` | 100,303 129×45 |
| `stage-01-body-line-0` | 100,303 129×15 |
| `stage-01-body-line-1` | 100,318 129×15 |
| `stage-01-body-line-2` | 100,333 129×15 |
| `stage-01-card` | 85,170 157×229 |
| `stage-01-glow` | 94,205 48×48 |
| `stage-01-icon-frame` | 98,212 54×54 |
| `stage-01-number` | 102,187 15×15 |
| `stage-01-pill` | 97,362 92×22 |
| `stage-01-pill-icon` | 104,367 12×12 |
| `stage-01-pill-label` | 121,368 60×10 |
| `stage-01-rear-panel` | - |
| `stage-01-symbol` | 109,223 32×32 |
| `stage-01-title` | 100,283 127×15 |
| `stage-01-visual` | 98,201 135×80 |
| `stage-02-active-dot` | 326,210 6×6 |
| `stage-02-body` | 297,303 182×45 |
| `stage-02-body-line-0` | 297,303 182×15 |
| `stage-02-body-line-1` | 297,318 182×15 |
| `stage-02-body-line-2` | 297,333 182×15 |
| `stage-02-card` | 282,170 220×229 |
| `stage-02-content-bar-0` | 349,210 92×9 |
| `stage-02-content-bar-1` | 349,226 115×9 |
| `stage-02-divider` | 340,202 1×70 |
| `stage-02-glow` | 319,201 150×64 |
| `stage-02-icon-frame` | 295,211 54×54 |
| `stage-02-lower-block-0` | 349,246 40×18 |
| `stage-02-lower-block-1` | 394,246 40×18 |
| `stage-02-lower-block-2` | 440,246 40×18 |
| `stage-02-number` | 299,187 18×15 |
| `stage-02-pill` | 294,362 118×22 |
| `stage-02-pill-icon` | 301,367 12×12 |
| `stage-02-pill-label` | 318,368 86×10 |
| `stage-02-rear-panel` | 317,201 172×72 |
| `stage-02-sidebar` | 318,202 22×70 |
| `stage-02-sidebar-row-0` | 324,220 9×2 |
| `stage-02-sidebar-row-1` | 324,229 9×2 |
| `stage-02-symbol` | 307,223 30×30 |
| `stage-02-title` | 297,283 186×15 |
| `stage-02-visual` | 295,201 198×80 |
| `stage-03-bar-a-0` | 628,216 66×4 |
| `stage-03-bar-b-0` | 699,216 20×4 |
| `stage-03-body` | 551,303 172×45 |
| `stage-03-body-line-0` | 551,303 172×15 |
| `stage-03-body-line-1` | 551,318 172×15 |
| `stage-03-body-line-2` | 551,333 172×15 |
| `stage-03-card` | 536,170 210×229 |
| `stage-03-check-0` | 611,212 12×12 |
| `stage-03-check-1` | 611,234 12×12 |
| `stage-03-check-2` | 611,256 12×12 |
| `stage-03-glow` | 571,201 150×66 |
| `stage-03-icon-frame` | 549,211 50×50 |
| `stage-03-number` | 553,187 18×15 |
| `stage-03-pill` | 548,362 129×22 |
| `stage-03-pill-icon` | 555,367 12×12 |
| `stage-03-pill-label` | 572,368 97×10 |
| `stage-03-rear-panel` | 597,201 136×78 |
| `stage-03-right-edge` | 725,208 1×64 |
| `stage-03-row-0` | 605,209 120×18 |
| `stage-03-row-1` | 605,231 120×18 |
| `stage-03-row-2` | 605,253 120×18 |
| `stage-03-symbol` | 560,222 28×28 |
| `stage-03-title` | 551,283 176×15 |
| `stage-03-visual` | 549,201 188×80 |
| `stage-04-body` | 794,303 114×45 |
| `stage-04-body-line-0` | 794,303 114×15 |
| `stage-04-body-line-1` | 794,318 114×15 |
| `stage-04-body-line-2` | 794,333 114×15 |
| `stage-04-card` | 779,170 142×229 |
| `stage-04-glow` | 788,205 48×48 |
| `stage-04-icon-frame` | 792,212 54×54 |
| `stage-04-number` | 796,187 18×15 |
| `stage-04-pill` | 791,362 93×22 |
| `stage-04-pill-icon` | 798,367 12×12 |
| `stage-04-pill-label` | 815,368 61×10 |
| `stage-04-rear-panel` | - |
| `stage-04-symbol` | 803,223 32×32 |
| `stage-04-title` | 794,283 118×14 |
| `stage-04-visual` | 792,201 120×80 |

## Actual paint-isolated ink

| Selector | x,y w×h | count |
|---|---|---:|
| `connector-1-dot` | 259,236 7×7 | 45 |
| `connector-1-line` | 240,236 42×7 | 234 |
| `connector-1-node` | 255,232 14×14 | 159 |
| `connector-2-dot` | 516,236 7×7 | 45 |
| `connector-2-line` | 500,236 36×7 | 191 |
| `connector-2-node` | 512,232 14×14 | 159 |
| `connector-3-dot` | 759,236 7×7 | 45 |
| `connector-3-line` | 744,236 35×7 | 185 |
| `connector-3-node` | 756,232 14×14 | 159 |
| `heading-eyebrow` | 424,49 176×7 | 730 |
| `heading-support` | 291,115 447×12 | 1998 |
| `heading-title` | 284,75 463×28 | 4412 |
| `stage-01-body-line-0` | 100,305 125×11 | 532 |
| `stage-01-body-line-1` | 100,320 118×11 | 464 |
| `stage-01-body-line-2` | 100,335 58×9 | 243 |
| `stage-01-number` | 102,188 14×12 | 112 |
| `stage-01-pill-icon` | 106,368 8×10 | 37 |
| `stage-01-pill-label` | 121,368 60×7 | 218 |
| `stage-01-symbol` | 115,225 20×28 | 235 |
| `stage-01-title` | 100,285 106×11 | 584 |
| `stage-02-active-dot` | 324,208 10×3 | 24 |
| `stage-02-body-line-0` | 297,305 118×11 | 455 |
| `stage-02-body-line-1` | 297,320 93×9 | 367 |
| `stage-02-body-line-2` | 297,335 134×11 | 569 |
| `stage-02-number` | 299,188 18×12 | 128 |
| `stage-02-pill-icon` | 303,368 8×10 | 72 |
| `stage-02-pill-label` | 318,368 86×7 | 288 |
| `stage-02-symbol` | 310,226 24×24 | 280 |
| `stage-02-title` | 298,285 128×13 | 712 |
| `stage-03-body-line-0` | 551,305 136×11 | 561 |
| `stage-03-body-line-1` | 551,320 134×11 | 550 |
| `stage-03-body-line-2` | 551,335 94×11 | 378 |
| `stage-03-check-0` | 609,210 16×16 | 213 |
| `stage-03-check-1` | 609,232 16×16 | 213 |
| `stage-03-check-2` | 609,254 16×16 | 211 |
| `stage-03-number` | 553,188 18×12 | 133 |
| `stage-03-pill-icon` | 556,370 10×6 | 24 |
| `stage-03-pill-label` | 572,368 97×9 | 373 |
| `stage-03-symbol` | 563,225 22×19 | 159 |
| `stage-03-title` | 551,285 127×13 | 731 |
| `stage-04-body-line-0` | 794,305 113×9 | 483 |
| `stage-04-body-line-1` | 794,320 112×11 | 464 |
| `stage-04-body-line-2` | 794,335 121×11 | 485 |
| `stage-04-number` | 796,188 18×12 | 131 |
| `stage-04-pill-icon` | 798,370 11×6 | 40 |
| `stage-04-pill-label` | 815,368 61×9 | 235 |
| `stage-04-symbol` | 806,227 26×24 | 212 |
| `stage-04-title` | 794,285 125×13 | 620 |

## Color samples (RGB)

| Sample | XY | Reference | Actual |
|---|---|---|---|
| pageBg | 40,40 | 17,17,17 | 17,17,17 |
| card1Fill | 200,270 | 23,23,23 | 23,23,23 |
| card1Border | 85,280 | 34,34,34 | 34,34,34 |
| primaryRedNumber | ref 103,189 / act 105,189 | 118,46,49 | 116,64,59 |
| mutedIconStroke | ref 120,246 / act 125,246 | 43,28,31 | 48,31,34 |
| title | ref 172,286 / act 148,289 | 231,231,231 | 226,226,226 |
| bodyText | ref 118,310 / act 123,310 | 104,104,104 | 96,88,81 |
| pillBorder | ref 96,364 / act 96,364 | 22,24,21 | 23,23,23 |
| connector | 262,239 | 152,71,70 | 151,70,69 |
| centerGlow | 512,250 | 56,25,22 | 48,22,19 |

## Region mismatch ratios

| Region | Mismatched | Total | Ratio |
|---|---:|---:|---:|
| heading | 8392 | 101400 | 8.28% |
| stage-01 | 2968 | 35953 | 8.26% |
| stage-02 | 4817 | 50380 | 9.56% |
| stage-03 | 4665 | 48090 | 9.70% |
| stage-04 | 3356 | 32518 | 10.32% |
| stage-01-visual | 238 | 5600 | 4.25% |
| stage-02-visual | 1673 | 16000 | 10.46% |
| stage-03-visual | 1371 | 15200 | 9.02% |
| stage-04-visual | 255 | 5600 | 4.55% |
| connector-01-02 | 124 | 960 | 12.92% |
| connector-02-03 | 118 | 816 | 14.46% |
| connector-03-04 | 103 | 792 | 13.01% |
| chat | 206 | 2750 | 7.49% |
| bottom-line | 0 | 7168 | 0.00% |

## Mask audits + isolated pairs

- `masks/*.png` — reference mask geometry with magenta ink hits
- `isolated/*` — ref/actual/side crops for major primitives
- `crops/` — nearest-neighbor 4× region triplets

## Remaining visual discrepancies

- `connector-1-line`: ink 246,238 30×3 → 240,236 42×7 (-6,-2 +12×+4); geo 246,238 30×3 → 242,238 40×2 (-4,0 +10×-1)
- `connector-1-node`: ink 257,238 11×3 → 255,232 14×14 (-2,-6 +3×+11); geo 256,233 13×13 → 257,234 10×10 (+1,+1 -3×-3)
- `connector-1-node-border`: ink 257,238 11×3 → 257,234 11×10 (0,-4 0×+7); geo 256,233 13×13 → - (-256,-233 -13×-13)
- `connector-1-dot`: ink 261,238 3×3 → 259,236 7×7 (-2,-2 +4×+4); geo 260,237 5×5 → 261,238 3×3 (+1,+1 -2×-2)
- `connector-1-glow`: ink 254,237 17×5 → 254,234 17×10 (0,-3 0×+5); geo 253,230 19×19 → - (-253,-230 -19×-19)
- `connector-2-line`: ink 508,238 24×3 → 500,236 36×7 (-8,-2 +12×+4); geo 508,238 24×3 → 502,238 34×2 (-6,0 +10×-1)
- `connector-2-node`: ink 514,236 11×9 → 512,232 14×14 (-2,-4 +3×+5); geo 513,233 13×13 → 514,234 10×10 (+1,+1 -3×-3)
- `connector-2-node-interior`: ink 522,238 1×1 → 516,236 7×7 (-6,-2 +6×+6); geo 515,235 9×9 → - (-515,-235 -9×-9)
- `connector-2-dot`: ink 518,238 3×3 → 516,236 7×7 (-2,-2 +4×+4); geo 517,237 5×5 → 518,238 3×3 (+1,+1 -2×-2)
- `connector-3-line`: ink 751,238 23×3 → 744,236 35×7 (-7,-2 +12×+4); geo 750,238 24×3 → 746,238 33×2 (-4,0 +9×-1)
- `connector-3-node`: ink 758,238 11×3 → 756,232 14×14 (-2,-6 +3×+11); geo 757,233 13×13 → 758,234 10×10 (+1,+1 -3×-3)
- `connector-3-node-border`: ink 758,238 11×3 → 758,234 11×10 (0,-4 0×+7); geo 757,233 13×13 → - (-757,-233 -13×-13)
- `connector-3-dot`: ink 762,238 3×3 → 759,236 7×7 (-3,-2 +4×+4); geo 761,237 5×5 → 761,238 3×3 (0,+1 -2×-2)
- `connector-3-glow`: ink 755,238 17×4 → 755,234 17×10 (0,-4 0×+6); geo 754,230 19×19 → - (-754,-230 -19×-19)
- `stage-03-check-0`: ink - → 609,210 16×16 (+609,+210 +16×+16); geo 600,208 16×16 → 611,212 12×12 (+11,+4 -4×-4)
- `stage-03-check-1`: ink - → 609,232 16×16 (+609,+232 +16×+16); geo 600,228 16×16 → 611,234 12×12 (+11,+6 -4×-4)
- `stage-03-check-2`: ink - → 609,254 16×16 (+609,+254 +16×+16); geo 600,248 16×16 → 611,256 12×12 (+11,+8 -4×-4)
- `stage-02-active-dot`: ink - → 324,208 10×3 (+324,+208 +10×+3); geo 327,208 9×9 → 326,210 6×6 (-1,+2 -3×-3)
- `stage-01-pill-icon`: ink 105,364 13×14 → 106,368 8×10 (+1,+4 -5×-4); geo 104,364 14×14 → 104,367 12×12 (0,+3 -2×-2)
- `stage-02-pill-icon`: ink 300,364 14×14 → 303,368 8×10 (+3,+4 -6×-4); geo 300,364 14×14 → 301,367 12×12 (+1,+3 -2×-2)
- `stage-03-pill-icon`: ink 554,364 12×14 → 556,370 10×6 (+2,+6 -2×-8); geo 552,364 14×14 → 555,367 12×12 (+3,+3 -2×-2)
- `stage-04-pill-icon`: ink 797,364 13×14 → 798,370 11×6 (+1,+6 -2×-8); geo 796,364 14×14 → 798,367 12×12 (+2,+3 -2×-2)
- `stage-04-number`: ink 793,189 18×11 → 796,188 18×12 (+3,-1 0×+1); geo 790,186 28×20 → 796,187 18×15 (+6,+1 -10×-5)
- `stage-01-symbol`: ink 111,223 33×33 → 115,225 20×28 (+4,+2 -13×-5); geo 108,218 36×40 → 109,223 32×32 (+1,+5 -4×-8)
- `stage-02-symbol`: ink 304,224 32×28 → 310,226 24×24 (+6,+2 -8×-4); geo 300,216 36×36 → 307,223 30×30 (+7,+7 -6×-6)
- `stage-03-symbol`: ink 560,223 30×29 → 563,225 22×19 (+3,+2 -8×-10); geo 554,216 36×36 → 560,222 28×28 (+6,+6 -8×-8)
- `stage-04-symbol`: ink 800,223 33×29 → 806,227 26×24 (+6,+4 -7×-5); geo 800,218 34×34 → 803,223 32×32 (+3,+5 -2×-2)
- `stage-01-title`: ink 101,285 99×9 → 100,285 106×11 (-1,0 +7×+2); geo 98,282 120×18 → 100,283 127×15 (+2,+1 +7×-3)
- `stage-02-title`: ink 299,285 119×11 → 298,285 128×13 (-1,0 +9×+2); geo 296,282 140×18 → 297,283 186×15 (+1,+1 +46×-3)
- `stage-03-title`: ink 551,285 120×11 → 551,285 127×13 (0,0 +7×+2); geo 548,282 140×18 → 551,283 176×15 (+3,+1 +36×-3)
- `stage-04-title`: ink 793,285 118×10 → 794,285 125×13 (+1,0 +7×+3); geo 790,282 128×18 → 794,283 118×14 (+4,+1 -10×-4)
- `stage-01-body-line-0`: ink 101,305 112×10 → 100,305 125×11 (-1,0 +13×+1); geo 98,303 120×13 → 100,303 129×15 (+2,0 +9×+2)
- `stage-01-body-line-1`: ink 101,320 107×9 → 100,320 118×11 (-1,0 +11×+2); geo 98,316 120×13 → 100,318 129×15 (+2,+2 +9×+2)
- `stage-01-body-line-2`: ink 101,335 50×7 → 100,335 58×9 (-1,0 +8×+2); geo 98,329 80×13 → 100,333 129×15 (+2,+4 +49×+2)
- `stage-02-body-line-0`: ink 298,305 106×9 → 297,305 118×11 (-1,0 +12×+2); geo 296,303 140×13 → 297,303 182×15 (+1,0 +42×+2)
- `stage-02-body-line-1`: ink 298,320 85×7 → 297,320 93×9 (-1,0 +8×+2); geo 296,316 140×13 → 297,318 182×15 (+1,+2 +42×+2)
- `stage-02-body-line-2`: ink 298,335 121×7 → 297,335 134×11 (-1,0 +13×+4); geo 296,329 140×13 → 297,333 182×15 (+1,+4 +42×+2)
- `stage-03-body-line-0`: ink 551,305 123×10 → 551,305 136×11 (0,0 +13×+1); geo 548,303 140×13 → 551,303 172×15 (+3,0 +32×+2)
- `stage-03-body-line-1`: ink 551,320 124×9 → 551,320 134×11 (0,0 +10×+2); geo 548,316 140×13 → 551,318 172×15 (+3,+2 +32×+2)
- `stage-03-body-line-2`: ink 551,335 86×7 → 551,335 94×11 (0,0 +8×+4); geo 548,329 120×13 → 551,333 172×15 (+3,+4 +52×+2)
- `stage-04-body-line-0`: ink 793,305 100×9 → 794,305 113×9 (+1,0 +13×0); geo 790,303 128×13 → 794,303 114×15 (+4,0 -14×+2)
- `stage-04-body-line-1`: ink 794,320 95×9 → 794,320 112×11 (0,0 +17×+2); geo 790,316 128×13 → 794,318 114×15 (+4,+2 -14×+2)
- `stage-04-body-line-2`: ink 793,335 121×7 → 794,335 121×11 (+1,0 0×+4); geo 790,329 128×13 → 794,333 114×15 (+4,+4 -14×+2)
- `stage-04-pill`: ink 789,362 93×22 → 791,362 88×22 (+2,0 -5×0); geo 788,362 94×22 → 791,362 93×22 (+3,0 -1×0)
- `stage-01-pill-label`: ink 124,368 57×7 → 121,368 60×7 (-3,0 +3×0); geo 118,366 70×12 → 121,368 60×10 (+3,+2 -10×-2)
- `stage-02-pill-label`: ink 321,367 83×8 → 318,368 86×7 (-3,+1 +3×-1); geo 316,366 95×12 → 318,368 86×10 (+2,+2 -9×-2)
- `stage-02-icon-frame`: ink 296,213 50×49 → 295,210 51×52 (-1,-3 +1×+3); geo 294,210 52×52 → 295,211 54×54 (+1,+1 +2×+2)
- `stage-03-rear-panel`: ink 572,200 160×72 → 572,201 160×77 (0,+1 0×+5); geo 572,200 160×78 → 597,201 136×78 (+25,+1 -24×0)
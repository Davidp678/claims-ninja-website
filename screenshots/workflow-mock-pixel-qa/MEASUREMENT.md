# Workflow mock visual QA — element measurement

Canvas: **1024×467** | Capture: `http://localhost:3017`

## Measurement method (repaired)

| Side | Method |
|---|---|
| **Actual** | Stable `data-qa` selectors → DOM layout; sequential unique-color paint isolation with full SVG descendant restore; plus the same tight ROIs on the actual PNG for symmetric ink bounds. QA paint is never left in normal rendering. |
| **Reference** | Curated tight ROIs only (see `REFERENCE_ROIS`). No card-wide red flood fills that merge glow, rear panels, borders, or pill chrome into “icon” labels. |

**Do not trust prior MEASUREMENT rows** that labeled combined regions as `pillIcon` / `icon`. Those used connected-color bounds and are retired.

## Control

| Check | Result |
|---|---|
| actual vs actual mismatched | **0** |
| amplified hot pixels | **0** |
| overall mismatch | **5.78%** (27646 px) |

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
| Loose (L≥160, can include glow) | 285,74 463×42 | 274,73 477×28 |
| Dense glyph (L≥180) | 285,74 463×29 | 274,73 477×28 |
| Symmetric ROI + paint | 285,74 463×29 | roi 280,73 470×28 / paint 274,73 476×28 |

## Element-specific bounds (truthful)

| Element | Reference (ROI) | Actual (paint∥DOM) | Delta | Methods |
|---|---|---|---|---|
| `heading-eyebrow` | 424,49 176×7 | 423,49 177×7 | -1,0 +1×0 | ref=roi:red; act=roi:red |
| `heading-title` | 285,74 463×29 | 280,73 470×28 | -5,-1 +7×-1 | ref=roi:white180; act=roi:white180 |
| `heading-support` | 292,115 450×12 | 288,116 451×12 | -4,+1 +1×0 | ref=roi:gray; act=roi:gray |
| `stage-01-number` | 101,189 13×11 | 102,191 11×9 | +1,+2 -2×-2 | ref=roi:red; act=roi:red |
| `stage-01-icon-frame` | 97,213 55×51 | 100,214 52×52 | +3,+1 -3×+1 | ref=roi:edge; act=dom |
| `stage-01-symbol` | 114,224 22×30 | 117,227 18×26 | +3,+3 -4×-4 | ref=roi:red; act=paint-isolation |
| `stage-01-title` | 101,285 99×9 | 102,287 116×10 | +1,+2 +17×+1 | ref=roi:white170; act=roi:white170 |
| `stage-01-body-line-0` | 101,305 112×10 | 102,307 116×8 | +1,+2 +4×-2 | ref=roi:gray; act=roi:gray |
| `stage-01-body-line-1` | 101,320 107×9 | 102,316 116×13 | +1,-4 +9×+4 | ref=roi:gray; act=roi:gray |
| `stage-01-body-line-2` | 101,335 50×7 | 102,329 115×13 | +1,-6 +65×+6 | ref=roi:gray; act=roi:gray |
| `stage-01-pill` | 97,362 94×22 | 98,363 102×22 | +1,+1 +8×0 | ref=roi:edge; act=dom |
| `stage-01-pill-icon` | 107,365 9×11 | 106,368 12×12 | -1,+3 +3×+1 | ref=roi:red; act=dom |
| `stage-01-pill-label` | 124,368 57×7 | 124,369 67×8 | 0,+1 +10×+1 | ref=roi:gray; act=roi:gray |
| `stage-02-number` | 298,189 17×11 | 299,191 14×9 | +1,+2 -3×-2 | ref=roi:red; act=roi:red |
| `stage-02-icon-frame` | 296,213 52×51 | 297,213 50×50 | +1,0 -2×-1 | ref=roi:edge; act=dom |
| `stage-02-symbol` | 309,226 27×27 | 312,228 20×20 | +3,+2 -7×-7 | ref=roi:red; act=paint-isolation |
| `stage-02-title` | 299,285 119×11 | 299,287 137×13 | 0,+2 +18×+2 | ref=roi:white170; act=roi:white170 |
| `stage-02-body-line-0` | 298,305 106×9 | 299,307 122×8 | +1,+2 +16×-1 | ref=roi:gray; act=roi:gray |
| `stage-02-body-line-1` | 298,320 85×7 | 299,316 96×13 | +1,-4 +11×+6 | ref=roi:gray; act=roi:gray |
| `stage-02-body-line-2` | 298,335 121×7 | 299,329 136×13 | +1,-6 +15×+6 | ref=roi:gray; act=roi:gray |
| `stage-02-pill` | 295,362 120×22 | 295,363 132×22 | 0,+1 +12×0 | ref=roi:edge; act=dom |
| `stage-02-pill-icon` | 304,366 10×10 | 303,368 12×12 | -1,+2 +2×+2 | ref=roi:red; act=dom |
| `stage-02-pill-label` | 321,367 83×8 | 321,369 96×8 | 0,+2 +13×0 | ref=roi:gray; act=roi:gray |
| `stage-03-number` | 551,188 17×12 | 553,191 14×9 | +2,+3 -3×-3 | ref=roi:red; act=roi:red |
| `stage-03-icon-frame` | 547,212 53×52 | 551,213 50×50 | +4,+1 -3×-2 | ref=roi:edge; act=dom |
| `stage-03-symbol` | 561,224 28×30 | 567,229 18×16 | +6,+5 -10×-14 | ref=roi:red; act=paint-isolation |
| `stage-03-title` | 551,285 120×11 | 553,287 135×13 | +2,+2 +15×+2 | ref=roi:white170; act=roi:white170 |
| `stage-03-body-line-0` | 551,305 123×10 | 553,307 135×9 | +2,+2 +12×-1 | ref=roi:gray; act=roi:gray |
| `stage-03-body-line-1` | 551,320 124×9 | 553,316 134×13 | +2,-4 +10×+4 | ref=roi:gray; act=roi:gray |
| `stage-03-body-line-2` | 551,335 86×7 | 553,329 133×13 | +2,-6 +47×+6 | ref=roi:gray; act=roi:gray |
| `stage-03-pill` | 547,362 132×22 | 549,363 145×22 | +2,+1 +13×0 | ref=roi:edge; act=dom |
| `stage-03-pill-icon` | 556,366 10×10 | 557,368 12×12 | +1,+2 +2×+2 | ref=roi:red; act=dom |
| `stage-03-pill-label` | 574,367 95×10 | 575,369 109×10 | +1,+2 +14×0 | ref=roi:gray; act=roi:gray |
| `stage-04-number` | 793,189 18×11 | 796,191 15×9 | +3,+2 -3×-2 | ref=roi:red; act=roi:red |
| `stage-04-icon-frame` | 792,214 50×48 | 794,214 52×52 | +2,0 +2×+4 | ref=roi:edge; act=dom |
| `stage-04-symbol` | 802,225 29×29 | 809,229 22×22 | +7,+4 -7×-7 | ref=roi:red; act=paint-isolation |
| `stage-04-title` | 793,285 118×10 | 795,286 123×13 | +2,+1 +5×+3 | ref=roi:white170; act=roi:white170 |
| `stage-04-body-line-0` | 793,305 100×9 | 796,307 111×8 | +3,+2 +11×-1 | ref=roi:gray; act=roi:gray |
| `stage-04-body-line-1` | 794,320 95×9 | 796,321 111×8 | +2,+1 +16×-1 | ref=roi:gray; act=roi:gray |
| `stage-04-body-line-2` | 793,335 121×7 | 796,329 122×13 | +3,-6 +1×+6 | ref=roi:gray; act=roi:gray |
| `stage-04-pill` | 789,362 94×22 | 792,363 104×22 | +3,+1 +10×0 | ref=roi:edge; act=dom |
| `stage-04-pill-icon` | 798,366 10×10 | 800,368 12×12 | +2,+2 +2×+2 | ref=roi:red; act=dom |
| `stage-04-pill-label` | 817,367 58×9 | 818,369 68×9 | +1,+2 +10×0 | ref=roi:gray; act=roi:gray |
| `stage-02-rear-panel` | 318,200 170×72 | 319,201 172×72 | +1,+1 +2×0 | ref=roi:edge; act=dom |
| `stage-02-active-dot` | 324,226 12×3 | 328,210 6×6 | +4,-16 -6×+3 | ref=roi:red; act=dom |
| `stage-03-rear-panel` | 572,200 160×72 | 573,201 168×72 | +1,+1 +8×0 | ref=roi:edge; act=dom |
| `stage-03-check-0` | 580,224 9×4 | 587,210 12×12 | +7,-14 +3×+8 | ref=roi:red; act=dom |
| `stage-03-check-1` | 580,228 9×20 | 587,231 12×12 | +7,+3 +3×-8 | ref=roi:red; act=dom |
| `stage-03-check-2` | 580,248 9×6 | 587,252 12×12 | +7,+4 +3×+6 | ref=roi:red; act=dom |
| `connector-1-line` | 246,236 30×8 | 246,236 30×8 | 0,0 0×0 | ref=roi:red; act=roi:red |
| `connector-1-node` | 254,239 16×2 | 254,234 16×10 | 0,-5 0×+8 | ref=roi:red; act=roi:red |
| `connector-1-dot` | 258,239 8×2 | 258,236 8×8 | 0,-3 0×+6 | ref=roi:red; act=roi:red |
| `connector-2-line` | 508,236 24×7 | 508,236 24×8 | 0,0 0×+1 | ref=roi:red; act=roi:red |
| `connector-2-node` | 512,237 16×5 | 512,234 16×10 | 0,-3 0×+5 | ref=roi:red; act=roi:red |
| `connector-2-dot` | 516,238 8×4 | 516,236 8×8 | 0,-2 0×+4 | ref=roi:red; act=roi:red |
| `connector-3-line` | 750,236 24×8 | 750,236 24×8 | 0,0 0×0 | ref=roi:red; act=roi:red |
| `connector-3-node` | 756,239 16×2 | 756,234 16×10 | 0,-5 0×+8 | ref=roi:red; act=roi:red |
| `connector-3-dot` | 760,239 8×2 | 760,236 8×8 | 0,-3 0×+6 | ref=roi:red; act=roi:red |

## Actual DOM layout boxes (complete)

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
| `heading-eyebrow` | 0,49 1024×10 |
| `heading-support` | 286,113 452×16 |
| `heading-title` | 0,69 1024×31 |
| `stage-01-body` | 101,304 130×44 |
| `stage-01-body-line-0` | 101,304 130×15 |
| `stage-01-body-line-1` | 101,319 130×15 |
| `stage-01-body-line-2` | 101,333 130×15 |
| `stage-01-card` | 85,170 157×229 |
| `stage-01-glow` | 96,205 48×48 |
| `stage-01-icon-frame` | 100,214 52×52 |
| `stage-01-number` | 101,189 13×13 |
| `stage-01-pill` | 98,363 102×22 |
| `stage-01-pill-icon` | 106,368 12×12 |
| `stage-01-pill-label` | 124,369 67×11 |
| `stage-01-rear-panel` | - |
| `stage-01-symbol` | 111,225 30×30 |
| `stage-01-title` | 101,284 130×17 |
| `stage-01-visual` | 100,201 133×78 |
| `stage-02-active-dot` | 328,210 6×6 |
| `stage-02-body` | 298,304 193×44 |
| `stage-02-body-line-0` | 298,304 193×15 |
| `stage-02-body-line-1` | 298,319 193×15 |
| `stage-02-body-line-2` | 298,333 193×15 |
| `stage-02-card` | 282,170 220×229 |
| `stage-02-content-bar-0` | 351,210 92×9 |
| `stage-02-content-bar-1` | 351,226 115×9 |
| `stage-02-divider` | 342,202 1×70 |
| `stage-02-glow` | 321,201 150×64 |
| `stage-02-icon-frame` | 297,213 50×50 |
| `stage-02-lower-block-0` | 351,246 40×18 |
| `stage-02-lower-block-1` | 396,246 40×18 |
| `stage-02-lower-block-2` | 442,246 40×18 |
| `stage-02-number` | 298,189 15×13 |
| `stage-02-pill` | 295,363 132×22 |
| `stage-02-pill-icon` | 303,368 12×12 |
| `stage-02-pill-label` | 321,369 97×11 |
| `stage-02-rear-panel` | 319,201 172×72 |
| `stage-02-sidebar` | 320,202 22×70 |
| `stage-02-sidebar-row-0` | 326,220 9×2 |
| `stage-02-sidebar-row-1` | 326,229 9×2 |
| `stage-02-symbol` | 309,225 26×26 |
| `stage-02-title` | 298,284 193×17 |
| `stage-02-visual` | 297,201 196×78 |
| `stage-03-bar-a-0` | 604,214 98×4 |
| `stage-03-bar-b-0` | 707,214 20×4 |
| `stage-03-body` | 552,304 183×44 |
| `stage-03-body-line-0` | 552,304 183×15 |
| `stage-03-body-line-1` | 552,319 183×15 |
| `stage-03-body-line-2` | 552,333 183×15 |
| `stage-03-card` | 536,170 210×229 |
| `stage-03-check-0` | 587,210 12×12 |
| `stage-03-check-1` | 587,231 12×12 |
| `stage-03-check-2` | 587,252 12×12 |
| `stage-03-glow` | 573,201 150×66 |
| `stage-03-icon-frame` | 551,213 50×50 |
| `stage-03-number` | 552,189 15×13 |
| `stage-03-pill` | 549,363 145×22 |
| `stage-03-pill-icon` | 557,368 12×12 |
| `stage-03-pill-label` | 575,369 110×11 |
| `stage-03-rear-panel` | 573,201 168×72 |
| `stage-03-right-edge` | 733,208 1×58 |
| `stage-03-row-0` | 581,208 152×16 |
| `stage-03-row-1` | 581,229 152×16 |
| `stage-03-row-2` | 581,250 152×16 |
| `stage-03-symbol` | 563,225 26×26 |
| `stage-03-title` | 552,284 183×17 |
| `stage-03-visual` | 551,201 186×78 |
| `stage-04-body` | 795,304 117×41 |
| `stage-04-body-line-0` | 795,304 117×14 |
| `stage-04-body-line-1` | 795,318 117×14 |
| `stage-04-body-line-2` | 795,332 117×14 |
| `stage-04-card` | 779,170 142×229 |
| `stage-04-glow` | 790,205 48×48 |
| `stage-04-icon-frame` | 794,214 52×52 |
| `stage-04-number` | 795,189 16×13 |
| `stage-04-pill` | 792,363 104×22 |
| `stage-04-pill-icon` | 800,368 12×12 |
| `stage-04-pill-label` | 818,369 69×11 |
| `stage-04-rear-panel` | - |
| `stage-04-symbol` | 805,225 30×30 |
| `stage-04-title` | 795,284 115×16 |
| `stage-04-visual` | 794,201 118×78 |

## Actual paint-isolated ink (subset)

| Selector | x,y w×h | count |
|---|---|---:|
| `connector-1-dot` | 261,238 3×3 | 5 |
| `connector-1-line` | 242,238 40×2 | 33 |
| `connector-1-node` | 257,234 10×10 | 61 |
| `connector-2-dot` | 518,238 3×3 | 5 |
| `connector-2-line` | 502,238 34×2 | 32 |
| `connector-2-node` | 514,234 10×10 | 61 |
| `connector-3-dot` | 761,238 3×3 | 5 |
| `connector-3-line` | 746,238 33×2 | 28 |
| `connector-3-node` | 758,234 10×10 | 61 |
| `heading-eyebrow` | 423,49 177×7 | 268 |
| `heading-support` | 287,116 449×12 | 643 |
| `heading-title` | 274,73 476×28 | 3269 |
| `stage-01-body-line-0` | 102,307 130×8 | 134 |
| `stage-01-body-line-1` | 102,322 122×8 | 131 |
| `stage-01-body-line-2` | 102,336 59×8 | 77 |
| `stage-01-number` | 102,191 11×9 | 32 |
| `stage-01-pill-icon` | 109,373 5×1 | 3 |
| `stage-01-pill-label` | 125,370 66×7 | 96 |
| `stage-01-symbol` | 117,227 18×26 | 90 |
| `stage-01-title` | 102,287 115×10 | 358 |
| `stage-02-active-dot` | 328,210 6×3 | 12 |
| `stage-02-body-line-0` | 299,307 122×10 | 136 |
| `stage-02-body-line-1` | 299,324 96×6 | 92 |
| `stage-02-body-line-2` | 299,336 136×10 | 159 |
| `stage-02-number` | 299,191 14×9 | 39 |
| `stage-02-pill-icon` | 305,371 8×5 | 10 |
| `stage-02-pill-label` | 322,369 95×8 | 123 |
| `stage-02-symbol` | 312,228 20×20 | 96 |
| `stage-02-title` | 299,287 141×13 | 459 |
| `stage-03-body-line-0` | 553,307 140×10 | 162 |
| `stage-03-body-line-1` | 553,324 139×8 | 122 |
| `stage-03-body-line-2` | 553,336 97×10 | 104 |
| `stage-03-check-0` | 592,210 7×6 | 3 |
| `stage-03-check-1` | - | 0 |
| `stage-03-check-2` | 592,263 2×1 | 2 |
| `stage-03-number` | 553,191 14×9 | 37 |
| `stage-03-pill-icon` | - | 0 |
| `stage-03-pill-label` | 576,370 108×9 | 139 |
| `stage-03-symbol` | 567,229 18×16 | 52 |
| `stage-03-title` | 553,287 139×13 | 456 |
| `stage-04-body-line-0` | 796,307 111×8 | 109 |
| `stage-04-body-line-1` | 796,323 110×7 | 129 |
| `stage-04-body-line-2` | 797,336 122×8 | 126 |
| `stage-04-number` | 796,191 14×9 | 42 |
| `stage-04-pill-icon` | - | 0 |
| `stage-04-pill-label` | 819,370 67×9 | 96 |
| `stage-04-symbol` | 809,229 22×22 | 91 |
| `stage-04-title` | 796,286 124×13 | 333 |

## Color samples (RGB)

| Sample | XY | Reference | Actual |
|---|---|---|---|
| pageBg | 40,40 | 17,17,17 | 17,17,17 |
| card1Fill | 200,270 | 23,23,23 | 23,23,23 |
| card1Border | 85,280 | 34,34,34 | 34,34,34 |
| primaryRedNumber | 108,192 | 119,64,59 | 80,30,23 |
| mutedIconStroke | ref 120,246 / act 126,227 | 43,28,31 | 47,31,34 |
| title | ref 172,286 / act 110,291 | 231,231,231 | 226,226,226 |
| bodyText | ref 118,310 / act 109,310 | 104,104,104 | 104,98,98 |
| pillBorder | ref 96,364 / act 96,364 | 22,24,21 | 23,23,23 |
| connector | 262,239 | 152,71,70 | 151,70,69 |
| centerGlow | 512,250 | 56,25,22 | 61,28,24 |

## Region mismatch ratios

| Region | Mismatched | Total | Ratio |
|---|---:|---:|---:|
| heading | 9303 | 101400 | 9.17% |
| stage-01 | 3462 | 35953 | 9.63% |
| stage-02 | 5512 | 50380 | 10.94% |
| stage-03 | 5336 | 48090 | 11.10% |
| stage-04 | 3502 | 32518 | 10.77% |
| stage-01-visual | 231 | 5600 | 4.13% |
| stage-02-visual | 1726 | 16000 | 10.79% |
| stage-03-visual | 1325 | 15200 | 8.72% |
| stage-04-visual | 260 | 5600 | 4.64% |
| connector-01-02 | 118 | 960 | 12.29% |
| connector-02-03 | 108 | 816 | 13.24% |
| connector-03-04 | 99 | 792 | 12.50% |
| chat | 206 | 2750 | 7.49% |
| bottom-line | 0 | 7168 | 0.00% |

## Isolated primitive comparisons

Under `isolated/`: `*-ref.png`, `*-actual.png`, `*-side.png` for major primitives.

## Crops

Nearest-neighbor 4× region ref/actual/diff under `crops/`.

## Remaining discrepancies (from this capture)

- `heading-title`: ref 285,74 463×29 → act 280,73 470×28 (-5,-1 +7×-1; roi:white180)
- `heading-support`: ref 292,115 450×12 → act 288,116 451×12 (-4,+1 +1×0; roi:gray)
- `stage-01-icon-frame`: ref 97,213 55×51 → act 100,214 52×52 (+3,+1 -3×+1; dom)
- `stage-01-symbol`: ref 114,224 22×30 → act 117,227 18×26 (+3,+3 -4×-4; paint-isolation)
- `stage-01-title`: ref 101,285 99×9 → act 102,287 116×10 (+1,+2 +17×+1; roi:white170)
- `stage-01-body-line-0`: ref 101,305 112×10 → act 102,307 116×8 (+1,+2 +4×-2; roi:gray)
- `stage-01-body-line-1`: ref 101,320 107×9 → act 102,316 116×13 (+1,-4 +9×+4; roi:gray)
- `stage-01-body-line-2`: ref 101,335 50×7 → act 102,329 115×13 (+1,-6 +65×+6; roi:gray)
- `stage-01-pill`: ref 97,362 94×22 → act 98,363 102×22 (+1,+1 +8×0; dom)
- `stage-01-pill-icon`: ref 107,365 9×11 → act 106,368 12×12 (-1,+3 +3×+1; dom)
- `stage-01-pill-label`: ref 124,368 57×7 → act 124,369 67×8 (0,+1 +10×+1; roi:gray)
- `stage-02-symbol`: ref 309,226 27×27 → act 312,228 20×20 (+3,+2 -7×-7; paint-isolation)
- `stage-02-title`: ref 299,285 119×11 → act 299,287 137×13 (0,+2 +18×+2; roi:white170)
- `stage-02-body-line-0`: ref 298,305 106×9 → act 299,307 122×8 (+1,+2 +16×-1; roi:gray)
- `stage-02-body-line-1`: ref 298,320 85×7 → act 299,316 96×13 (+1,-4 +11×+6; roi:gray)
- `stage-02-body-line-2`: ref 298,335 121×7 → act 299,329 136×13 (+1,-6 +15×+6; roi:gray)
- `stage-02-pill`: ref 295,362 120×22 → act 295,363 132×22 (0,+1 +12×0; dom)
- `stage-02-pill-label`: ref 321,367 83×8 → act 321,369 96×8 (0,+2 +13×0; roi:gray)
- `stage-03-number`: ref 551,188 17×12 → act 553,191 14×9 (+2,+3 -3×-3; roi:red)
- `stage-03-icon-frame`: ref 547,212 53×52 → act 551,213 50×50 (+4,+1 -3×-2; dom)
- `stage-03-symbol`: ref 561,224 28×30 → act 567,229 18×16 (+6,+5 -10×-14; paint-isolation)
- `stage-03-title`: ref 551,285 120×11 → act 553,287 135×13 (+2,+2 +15×+2; roi:white170)
- `stage-03-body-line-0`: ref 551,305 123×10 → act 553,307 135×9 (+2,+2 +12×-1; roi:gray)
- `stage-03-body-line-1`: ref 551,320 124×9 → act 553,316 134×13 (+2,-4 +10×+4; roi:gray)
- `stage-03-body-line-2`: ref 551,335 86×7 → act 553,329 133×13 (+2,-6 +47×+6; roi:gray)
- `stage-03-pill`: ref 547,362 132×22 → act 549,363 145×22 (+2,+1 +13×0; dom)
- `stage-03-pill-label`: ref 574,367 95×10 → act 575,369 109×10 (+1,+2 +14×0; roi:gray)
- `stage-04-number`: ref 793,189 18×11 → act 796,191 15×9 (+3,+2 -3×-2; roi:red)
- `stage-04-icon-frame`: ref 792,214 50×48 → act 794,214 52×52 (+2,0 +2×+4; dom)
- `stage-04-symbol`: ref 802,225 29×29 → act 809,229 22×22 (+7,+4 -7×-7; paint-isolation)
- `stage-04-title`: ref 793,285 118×10 → act 795,286 123×13 (+2,+1 +5×+3; roi:white170)
- `stage-04-body-line-0`: ref 793,305 100×9 → act 796,307 111×8 (+3,+2 +11×-1; roi:gray)
- `stage-04-body-line-1`: ref 794,320 95×9 → act 796,321 111×8 (+2,+1 +16×-1; roi:gray)
- `stage-04-body-line-2`: ref 793,335 121×7 → act 796,329 122×13 (+3,-6 +1×+6; roi:gray)
- `stage-04-pill`: ref 789,362 94×22 → act 792,363 104×22 (+3,+1 +10×0; dom)
- `stage-04-pill-label`: ref 817,367 58×9 → act 818,369 68×9 (+1,+2 +10×0; roi:gray)
- `stage-02-active-dot`: ref 324,226 12×3 → act 328,210 6×6 (+4,-16 -6×+3; dom)
- `stage-03-rear-panel`: ref 572,200 160×72 → act 573,201 168×72 (+1,+1 +8×0; dom)
- `stage-03-check-0`: ref 580,224 9×4 → act 587,210 12×12 (+7,-14 +3×+8; dom)
- `stage-03-check-1`: ref 580,228 9×20 → act 587,231 12×12 (+7,+3 +3×-8; dom)
- `stage-03-check-2`: ref 580,248 9×6 → act 587,252 12×12 (+7,+4 +3×+6; dom)
- `connector-1-node`: ref 254,239 16×2 → act 254,234 16×10 (0,-5 0×+8; roi:red)
- `connector-1-dot`: ref 258,239 8×2 → act 258,236 8×8 (0,-3 0×+6; roi:red)
- `connector-2-node`: ref 512,237 16×5 → act 512,234 16×10 (0,-3 0×+5; roi:red)
- `connector-2-dot`: ref 516,238 8×4 → act 516,236 8×8 (0,-2 0×+4; roi:red)
- `connector-3-node`: ref 756,239 16×2 → act 756,234 16×10 (0,-5 0×+8; roi:red)
- `connector-3-dot`: ref 760,239 8×2 → act 760,236 8×8 (0,-3 0×+6; roi:red)
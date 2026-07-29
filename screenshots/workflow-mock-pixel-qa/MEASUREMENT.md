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
| overall mismatch | **0.00%** (1 px) |

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
| Loose (L≥160, can include glow) | 285,74 463×42 | 285,74 463×42 |
| Dense glyph (L≥180) | 285,74 463×29 | 285,74 463×29 |

## Geometric bounds (mask geometry vs DOM)

| Element | Ref geometric | Actual DOM | Delta |
|---|---|---|---|
| `connector-1-line` | 246,238 30×3 | 246,239 30×3 | 0,+1 0×0 |
| `connector-1-node` | 256,233 13×13 | 256,234 13×13 | 0,+1 0×0 |
| `connector-1-node-border` | 256,233 13×13 | 256,234 13×13 | 0,+1 0×0 |
| `connector-1-node-interior` | 258,235 9×9 | 258,236 9×9 | 0,+1 0×0 |
| `connector-1-dot` | 260,237 5×5 | 260,238 5×5 | 0,+1 0×0 |
| `connector-1-glow` | 253,230 19×19 | 254,232 17×17 | +1,+2 -2×-2 |
| `connector-2-line` | 508,238 24×3 | 508,239 24×3 | 0,+1 0×0 |
| `connector-2-node` | 513,233 13×13 | 513,234 13×13 | 0,+1 0×0 |
| `connector-2-node-border` | 513,233 13×13 | 513,234 13×13 | 0,+1 0×0 |
| `connector-2-node-interior` | 515,235 9×9 | 515,236 9×9 | 0,+1 0×0 |
| `connector-2-dot` | 517,237 5×5 | 517,238 5×5 | 0,+1 0×0 |
| `connector-2-glow` | 510,230 19×19 | 511,232 17×17 | +1,+2 -2×-2 |
| `connector-3-line` | 750,238 24×3 | 750,239 24×3 | 0,+1 0×0 |
| `connector-3-node` | 757,233 13×13 | 757,234 13×13 | 0,+1 0×0 |
| `connector-3-node-border` | 757,233 13×13 | 757,234 13×13 | 0,+1 0×0 |
| `connector-3-node-interior` | 759,235 9×9 | 759,236 9×9 | 0,+1 0×0 |
| `connector-3-dot` | 761,237 5×5 | 761,238 5×5 | 0,+1 0×0 |
| `connector-3-glow` | 754,230 19×19 | 755,232 17×17 | +1,+2 -2×-2 |
| `stage-03-check-0` | 589,208 16×16 | 589,208 16×16 | 0,0 0×0 |
| `stage-03-check-1` | 589,228 16×16 | 589,228 16×16 | 0,0 0×0 |
| `stage-03-check-2` | 589,248 16×16 | 589,248 16×16 | 0,0 0×0 |
| `stage-02-active-dot` | 327,208 9×9 | 331,210 7×7 | +4,+2 -2×-2 |
| `stage-01-pill-icon` | 104,364 14×14 | 96,362 14×14 | -8,-2 0×0 |
| `stage-02-pill-icon` | 300,364 14×14 | 293,362 14×14 | -7,-2 0×0 |
| `stage-03-pill-icon` | 552,364 14×14 | 547,362 14×14 | -5,-2 0×0 |
| `stage-04-pill-icon` | 796,364 14×14 | 790,362 14×14 | -6,-2 0×0 |
| `heading-eyebrow` | 420,47 185×12 | 421,49 182×9 | +1,+2 -3×-3 |
| `heading-title` | 280,72 470×34 | 283,69 459×32 | +3,-3 -11×-2 |
| `heading-support` | 288,113 460×16 | 291,113 460×17 | +3,0 0×+1 |
| `stage-01-number` | 98,186 24×20 | 98,186 14×22 | 0,0 -10×+2 |
| `stage-02-number` | 295,186 28×20 | 295,186 18×22 | 0,0 -10×+2 |
| `stage-03-number` | 548,186 28×20 | 549,186 19×22 | +1,0 -9×+2 |
| `stage-04-number` | 790,186 28×20 | 792,186 19×22 | +2,0 -9×+2 |
| `stage-01-symbol` | 108,218 36×40 | 104,217 36×36 | -4,-1 0×-4 |
| `stage-02-symbol` | 300,216 36×36 | 301,217 34×34 | +1,+1 -2×-2 |
| `stage-03-symbol` | 554,216 36×36 | 555,217 34×34 | +1,+1 -2×-2 |
| `stage-04-symbol` | 800,218 34×34 | 797,217 36×36 | -3,-1 +2×+2 |
| `stage-01-title` | 98,282 120×18 | 98,282 105×19 | 0,0 -15×+1 |
| `stage-02-title` | 296,282 140×18 | 295,282 126×19 | -1,0 -14×+1 |
| `stage-03-title` | 548,282 140×18 | 549,282 125×19 | +1,0 -15×+1 |
| `stage-04-title` | 790,282 128×18 | 792,282 129×35 | +2,0 +1×+17 |
| `stage-01-body-line-0` | 98,303 120×13 | 98,303 144×48 | 0,0 +24×+35 |
| `stage-01-body-line-1` | 98,316 120×13 | 98,351 144×48 | 0,+35 +24×+35 |
| `stage-01-body-line-2` | 98,329 80×13 | 98,399 144×24 | 0,+70 +64×+11 |
| `stage-02-body-line-0` | 296,303 140×13 | 295,303 207×24 | -1,0 +67×+11 |
| `stage-02-body-line-1` | 296,316 140×13 | 295,327 207×24 | -1,+11 +67×+11 |
| `stage-02-body-line-2` | 296,329 140×13 | 295,351 207×48 | -1,+22 +67×+35 |
| `stage-03-body-line-0` | 548,303 140×13 | 549,303 197×48 | +1,0 +57×+35 |
| `stage-03-body-line-1` | 548,316 140×13 | 549,351 197×48 | +1,+35 +57×+35 |
| `stage-03-body-line-2` | 548,329 120×13 | 549,399 197×24 | +1,+70 +77×+11 |
| `stage-04-body-line-0` | 790,303 128×13 | 792,303 129×48 | +2,0 +1×+35 |
| `stage-04-body-line-1` | 790,316 128×13 | 792,351 129×48 | +2,+35 +1×+35 |
| `stage-04-body-line-2` | 790,329 128×13 | 792,399 129×48 | +2,+70 +1×+35 |
| `stage-01-pill` | 96,362 94×22 | 96,362 120×22 | 0,0 +26×0 |
| `stage-02-pill` | 294,362 120×22 | 293,362 150×22 | -1,0 +30×0 |
| `stage-03-pill` | 546,362 132×22 | 547,362 165×22 | +1,0 +33×0 |
| `stage-04-pill` | 788,362 94×22 | 790,362 120×22 | +2,0 +26×0 |
| `stage-01-pill-label` | 118,366 70×12 | 96,377 100×21 | -22,+11 +30×+9 |
| `stage-02-pill-label` | 316,366 95×12 | 293,377 146×21 | -23,+11 +51×+9 |
| `stage-03-pill-label` | 568,366 105×12 | 547,377 165×21 | -21,+11 +60×+9 |
| `stage-04-pill-label` | 812,366 70×12 | 790,377 102×21 | -22,+11 +32×+9 |
| `stage-01-icon-frame` | 97,210 55×55 | 97,210 50×50 | 0,0 -5×-5 |
| `stage-02-icon-frame` | 294,210 52×52 | 294,210 48×48 | 0,0 -4×-4 |
| `stage-03-icon-frame` | 546,210 52×52 | 548,210 48×48 | +2,0 -4×-4 |
| `stage-04-icon-frame` | 790,210 50×50 | 790,210 50×50 | 0,0 0×0 |
| `stage-02-rear-panel` | 318,200 170×72 | 318,200 170×72 | 0,0 0×0 |
| `stage-03-rear-panel` | 572,200 160×78 | 572,200 160×72 | 0,0 0×-6 |

## Painted-ink bounds (mask ink vs paint-isolation)

Primitives marked `geometry-only` intentionally omit painted-ink deltas (JPEG ink is unreliable for those marks).

| Element | Ref ink | Actual ink | Delta | Methods |
|---|---|---|---|---|
| `connector-1-line` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-1-node` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-1-node-border` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-1-node-interior` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-1-dot` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-1-glow` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-2-line` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-2-node` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-2-node-border` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-2-node-interior` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-2-dot` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-2-glow` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-3-line` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-3-node` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-3-node-border` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-3-node-interior` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-3-dot` | — | — | — | geometry-only (no painted-ink delta) |
| `connector-3-glow` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-check-0` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-check-1` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-check-2` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-active-dot` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-pill-icon` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-pill-icon` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-pill-icon` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-04-pill-icon` | — | — | — | geometry-only (no painted-ink delta) |
| `heading-eyebrow` | — | — | — | geometry-only (no painted-ink delta) |
| `heading-title` | — | — | — | geometry-only (no painted-ink delta) |
| `heading-support` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-number` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-number` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-number` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-04-number` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-symbol` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-symbol` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-symbol` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-04-symbol` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-title` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-title` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-title` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-04-title` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-body-line-0` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-body-line-1` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-body-line-2` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-body-line-0` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-body-line-1` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-body-line-2` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-body-line-0` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-body-line-1` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-body-line-2` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-04-body-line-0` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-04-body-line-1` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-04-body-line-2` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-pill` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-pill` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-pill` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-04-pill` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-pill-label` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-pill-label` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-pill-label` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-04-pill-label` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-01-icon-frame` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-icon-frame` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-icon-frame` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-04-icon-frame` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-02-rear-panel` | — | — | — | geometry-only (no painted-ink delta) |
| `stage-03-rear-panel` | — | — | — | geometry-only (no painted-ink delta) |

## Actual DOM layout boxes

| Selector | x,y w×h |
|---|---|
| `connector-1-dot` | 260,238 5×5 |
| `connector-1-glow` | 254,232 17×17 |
| `connector-1-line` | 246,239 30×3 |
| `connector-1-node` | 256,234 13×13 |
| `connector-1-node-border` | 256,234 13×13 |
| `connector-1-node-interior` | 258,236 9×9 |
| `connector-2-dot` | 517,238 5×5 |
| `connector-2-glow` | 511,232 17×17 |
| `connector-2-line` | 508,239 24×3 |
| `connector-2-node` | 513,234 13×13 |
| `connector-2-node-border` | 513,234 13×13 |
| `connector-2-node-interior` | 515,236 9×9 |
| `connector-3-dot` | 761,238 5×5 |
| `connector-3-glow` | 755,232 17×17 |
| `connector-3-line` | 750,239 24×3 |
| `connector-3-node` | 757,234 13×13 |
| `connector-3-node-border` | 757,234 13×13 |
| `connector-3-node-interior` | 759,236 9×9 |
| `heading-eyebrow` | 421,49 182×9 |
| `heading-support` | 291,113 460×17 |
| `heading-title` | 283,69 459×32 |
| `stage-01-body` | 98,303 144×120 |
| `stage-01-body-line-0` | 98,303 144×48 |
| `stage-01-body-line-1` | 98,351 144×48 |
| `stage-01-body-line-2` | 98,399 144×24 |
| `stage-01-card` | 85,170 157×229 |
| `stage-01-glow` | 96,200 48×48 |
| `stage-01-icon-frame` | 97,210 50×50 |
| `stage-01-number` | 98,186 14×22 |
| `stage-01-pill` | 96,362 120×22 |
| `stage-01-pill-icon` | 96,362 14×14 |
| `stage-01-pill-label` | 96,377 100×21 |
| `stage-01-rear-panel` | - |
| `stage-01-symbol` | 104,217 36×36 |
| `stage-01-title` | 98,282 105×19 |
| `stage-01-visual` | 96,198 138×82 |
| `stage-02-active-dot` | 331,210 7×7 |
| `stage-02-body` | 295,303 207×96 |
| `stage-02-body-line-0` | 295,303 207×24 |
| `stage-02-body-line-1` | 295,327 207×24 |
| `stage-02-body-line-2` | 295,351 207×48 |
| `stage-02-card` | 282,170 220×229 |
| `stage-02-content-bar-0` | 363,210 70×6 |
| `stage-02-content-bar-1` | 363,224 90×6 |
| `stage-02-divider` | 352,200 1×72 |
| `stage-02-glow` | 333,202 130×56 |
| `stage-02-icon-frame` | 294,210 48×48 |
| `stage-02-lower-block-0` | 363,250 14×14 |
| `stage-02-lower-block-1` | 383,250 14×14 |
| `stage-02-lower-block-2` | 403,250 14×14 |
| `stage-02-number` | 295,186 18×22 |
| `stage-02-pill` | 293,362 150×22 |
| `stage-02-pill-icon` | 293,362 14×14 |
| `stage-02-pill-label` | 293,377 146×21 |
| `stage-02-rear-panel` | 318,200 170×72 |
| `stage-02-sidebar` | 318,200 34×72 |
| `stage-02-sidebar-row-0` | 341,212 8×3 |
| `stage-02-sidebar-row-1` | 341,223 7×2 |
| `stage-02-symbol` | 301,217 34×34 |
| `stage-02-title` | 295,282 126×19 |
| `stage-02-visual` | 293,198 201×82 |
| `stage-03-bar-a-0` | 609,213 80×5 |
| `stage-03-bar-b-0` | - |
| `stage-03-body` | 549,303 197×120 |
| `stage-03-body-line-0` | 549,303 197×48 |
| `stage-03-body-line-1` | 549,351 197×48 |
| `stage-03-body-line-2` | 549,399 197×24 |
| `stage-03-card` | 536,170 210×229 |
| `stage-03-check-0` | 589,208 16×16 |
| `stage-03-check-1` | 589,228 16×16 |
| `stage-03-check-2` | 589,248 16×16 |
| `stage-03-glow` | 587,202 120×56 |
| `stage-03-icon-frame` | 548,210 48×48 |
| `stage-03-number` | 549,186 19×22 |
| `stage-03-pill` | 547,362 165×22 |
| `stage-03-pill-icon` | 547,362 14×14 |
| `stage-03-pill-label` | 547,377 165×21 |
| `stage-03-rear-panel` | 572,200 160×72 |
| `stage-03-right-edge` | - |
| `stage-03-row-0` | 600,208 120×16 |
| `stage-03-row-1` | 600,228 120×16 |
| `stage-03-row-2` | 600,248 120×16 |
| `stage-03-symbol` | 555,217 34×34 |
| `stage-03-title` | 549,282 125×19 |
| `stage-03-visual` | 547,198 191×82 |
| `stage-04-body` | 792,303 129×144 |
| `stage-04-body-line-0` | 792,303 129×48 |
| `stage-04-body-line-1` | 792,351 129×48 |
| `stage-04-body-line-2` | 792,399 129×48 |
| `stage-04-card` | 779,170 142×229 |
| `stage-04-glow` | 790,200 48×48 |
| `stage-04-icon-frame` | 790,210 50×50 |
| `stage-04-number` | 792,186 19×22 |
| `stage-04-pill` | 790,362 120×22 |
| `stage-04-pill-icon` | 790,362 14×14 |
| `stage-04-pill-label` | 790,377 102×21 |
| `stage-04-rear-panel` | - |
| `stage-04-symbol` | 797,217 36×36 |
| `stage-04-title` | 792,282 129×35 |
| `stage-04-visual` | 790,198 123×82 |

## Actual paint-isolated ink

| Selector | x,y w×h | count |
|---|---|---:|

## Color samples (RGB)

| Sample | XY | Reference | Actual |
|---|---|---|---|
| pageBg | 40,40 | 17,17,17 | 16,16,16 |
| card1Fill | 200,270 | 23,23,23 | 23,23,23 |
| card1Border | 85,280 | 34,34,34 | 34,34,34 |
| primaryRedNumber | ref 103,189 / act 103,189 | 118,46,49 | 118,46,49 |
| mutedIconStroke | ref 120,246 / act 120,246 | 43,28,31 | 43,28,31 |
| title | ref 172,286 / act 172,286 | 231,231,231 | 231,231,231 |
| bodyText | ref 118,310 / act 118,310 | 104,104,104 | 104,104,104 |
| pillBorder | ref 96,364 / act 96,364 | 22,24,21 | 22,24,21 |
| connector | 262,239 | 152,71,70 | 152,71,70 |
| centerGlow | 512,250 | 56,25,22 | 56,25,22 |

## Region mismatch ratios

| Region | Mismatched | Total | Ratio |
|---|---:|---:|---:|
| heading | 0 | 101400 | 0.00% |
| stage-01 | 0 | 35953 | 0.00% |
| stage-02 | 0 | 50380 | 0.00% |
| stage-03 | 0 | 48090 | 0.00% |
| stage-04 | 0 | 32518 | 0.00% |
| stage-01-visual | 0 | 5600 | 0.00% |
| stage-02-visual | 0 | 16000 | 0.00% |
| stage-03-visual | 0 | 15200 | 0.00% |
| stage-04-visual | 0 | 5600 | 0.00% |
| connector-01-02 | 0 | 960 | 0.00% |
| connector-02-03 | 0 | 816 | 0.00% |
| connector-03-04 | 0 | 792 | 0.00% |
| chat | 0 | 2750 | 0.00% |
| bottom-line | 0 | 7168 | 0.00% |

## Mask audits + isolated pairs

- `masks/*.png` — reference mask geometry with magenta ink hits
- `isolated/*` — ref/actual/side crops for major primitives
- `crops/` — nearest-neighbor 4× region triplets

## Remaining visual discrepancies

- `stage-02-active-dot` (geometry-only): geo 327,208 9×9 → 331,210 7×7 (+4,+2 -2×-2)
- `stage-01-pill-icon` (geometry-only): geo 104,364 14×14 → 96,362 14×14 (-8,-2 0×0)
- `stage-02-pill-icon` (geometry-only): geo 300,364 14×14 → 293,362 14×14 (-7,-2 0×0)
- `stage-03-pill-icon` (geometry-only): geo 552,364 14×14 → 547,362 14×14 (-5,-2 0×0)
- `stage-04-pill-icon` (geometry-only): geo 796,364 14×14 → 790,362 14×14 (-6,-2 0×0)
- `heading-title` (geometry-only): geo 280,72 470×34 → 283,69 459×32 (+3,-3 -11×-2)
- `heading-support` (geometry-only): geo 288,113 460×16 → 291,113 460×17 (+3,0 0×+1)
- `stage-01-number` (geometry-only): geo 98,186 24×20 → 98,186 14×22 (0,0 -10×+2)
- `stage-02-number` (geometry-only): geo 295,186 28×20 → 295,186 18×22 (0,0 -10×+2)
- `stage-03-number` (geometry-only): geo 548,186 28×20 → 549,186 19×22 (+1,0 -9×+2)
- `stage-04-number` (geometry-only): geo 790,186 28×20 → 792,186 19×22 (+2,0 -9×+2)
- `stage-01-symbol` (geometry-only): geo 108,218 36×40 → 104,217 36×36 (-4,-1 0×-4)
- `stage-04-symbol` (geometry-only): geo 800,218 34×34 → 797,217 36×36 (-3,-1 +2×+2)
- `stage-01-title` (geometry-only): geo 98,282 120×18 → 98,282 105×19 (0,0 -15×+1)
- `stage-02-title` (geometry-only): geo 296,282 140×18 → 295,282 126×19 (-1,0 -14×+1)
- `stage-03-title` (geometry-only): geo 548,282 140×18 → 549,282 125×19 (+1,0 -15×+1)
- `stage-04-title` (geometry-only): geo 790,282 128×18 → 792,282 129×35 (+2,0 +1×+17)
- `stage-01-body-line-0` (geometry-only): geo 98,303 120×13 → 98,303 144×48 (0,0 +24×+35)
- `stage-01-body-line-1` (geometry-only): geo 98,316 120×13 → 98,351 144×48 (0,+35 +24×+35)
- `stage-01-body-line-2` (geometry-only): geo 98,329 80×13 → 98,399 144×24 (0,+70 +64×+11)
- `stage-02-body-line-0` (geometry-only): geo 296,303 140×13 → 295,303 207×24 (-1,0 +67×+11)
- `stage-02-body-line-1` (geometry-only): geo 296,316 140×13 → 295,327 207×24 (-1,+11 +67×+11)
- `stage-02-body-line-2` (geometry-only): geo 296,329 140×13 → 295,351 207×48 (-1,+22 +67×+35)
- `stage-03-body-line-0` (geometry-only): geo 548,303 140×13 → 549,303 197×48 (+1,0 +57×+35)
- `stage-03-body-line-1` (geometry-only): geo 548,316 140×13 → 549,351 197×48 (+1,+35 +57×+35)
- `stage-03-body-line-2` (geometry-only): geo 548,329 120×13 → 549,399 197×24 (+1,+70 +77×+11)
- `stage-04-body-line-0` (geometry-only): geo 790,303 128×13 → 792,303 129×48 (+2,0 +1×+35)
- `stage-04-body-line-1` (geometry-only): geo 790,316 128×13 → 792,351 129×48 (+2,+35 +1×+35)
- `stage-04-body-line-2` (geometry-only): geo 790,329 128×13 → 792,399 129×48 (+2,+70 +1×+35)
- `stage-01-pill` (geometry-only): geo 96,362 94×22 → 96,362 120×22 (0,0 +26×0)
- `stage-02-pill` (geometry-only): geo 294,362 120×22 → 293,362 150×22 (-1,0 +30×0)
- `stage-03-pill` (geometry-only): geo 546,362 132×22 → 547,362 165×22 (+1,0 +33×0)
- `stage-04-pill` (geometry-only): geo 788,362 94×22 → 790,362 120×22 (+2,0 +26×0)
- `stage-01-pill-label` (geometry-only): geo 118,366 70×12 → 96,377 100×21 (-22,+11 +30×+9)
- `stage-02-pill-label` (geometry-only): geo 316,366 95×12 → 293,377 146×21 (-23,+11 +51×+9)
- `stage-03-pill-label` (geometry-only): geo 568,366 105×12 → 547,377 165×21 (-21,+11 +60×+9)
- `stage-04-pill-label` (geometry-only): geo 812,366 70×12 → 790,377 102×21 (-22,+11 +32×+9)
- `stage-01-icon-frame` (geometry-only): geo 97,210 55×55 → 97,210 50×50 (0,0 -5×-5)
- `stage-02-icon-frame` (geometry-only): geo 294,210 52×52 → 294,210 48×48 (0,0 -4×-4)
- `stage-03-icon-frame` (geometry-only): geo 546,210 52×52 → 548,210 48×48 (+2,0 -4×-4)
- `stage-03-rear-panel` (geometry-only): geo 572,200 160×78 → 572,200 160×72 (0,0 0×-6)
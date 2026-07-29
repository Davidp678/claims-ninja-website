# Workflow mock visual QA — measurement tables

Canvas: **1024×467** · LEFT = reference · RIGHT = implementation  
Outer card geometry is locked per review rejection instructions.

## Control test

| Check | Result |
|---|---|
| `actual` vs `actual` mismatched pixels | **0** |
| Amplified hot pixels | **0** |
| Control artifact | `control-actual-vs-actual-diff.png` (blank/black) |

## Pixelmatch options

See `report.json` → `pixelmatchOptions`:

- `threshold: 0.1`
- `includeAA: true`
- `diffMask: true` (required so unchanged pixels stay transparent)
- `alpha: 0`
- Diff color `[255,64,64]`, AA `[255,200,0]`

## Locked outer geometry

| Stage | x | y | w | h |
|---|---:|---:|---:|---:|
| 01 | 85 | 170 | 157 | 229 |
| 02 | 282 | 170 | 220 | 229 |
| 03 | 536 | 170 | 210 | 229 |
| 04 | 779 | 170 | 142 | 229 |

Gaps: 40 / 34 / 33 · Connector Y: 239 · Chat: 38×38 @ right 9 / bottom 17

## Painted heading bounds (ink, not wrappers)

| Element | Reference | Actual (latest capture) |
|---|---|---|
| Eyebrow | see `report.json` `paintedBounds.headingEyebrow` | `actualHeadingEyebrow` |
| Title | `headingTitle` | `actualHeadingTitle` |
| Support | `headingSupport` | `actualHeadingSupport` |

## Color samples (RGB)

From `report.json` → `colorSamples` (reference vs actual at fixed coordinates):

- page background
- card fill
- card border
- primary/muted red number
- icon stroke
- title / body / pill border
- connector
- center glow

## Region artifacts

For each region under `screenshots/workflow-mock-pixel-qa/`:

- `region-<name>-ref.png`
- `region-<name>-actual.png`
- `region-<name>-diff.png`
- `crops/<name>-*-4x.png` (nearest-neighbor 4×)

Primary review crops: `heading`, `stage-01`…`stage-04`, `stage-*-visual`, connectors.

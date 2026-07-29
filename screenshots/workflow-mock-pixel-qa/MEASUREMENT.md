# Workflow mock visual QA - measurement delta table

Canvas: **1024x467** | Generated from capture at `http://localhost:3017`

## Control

| Check | Result |
|---|---|
| actual vs actual mismatched | **0** |
| amplified hot pixels | **0** |
| overall mismatch | **6.84%** (32728 px) |

## Pixelmatch options

```json
{
  "threshold": 0.1,
  "includeAA": true,
  "diffMask": true,
  "alpha": 0,
  "diffColor": [
    255,
    64,
    64
  ],
  "aaColor": [
    255,
    200,
    0
  ]
}
```

## Locked outer geometry (unchanged)

| Stage | x | y | w | h |
|---|---:|---:|---:|---:|
| 01 | 85 | 170 | 157 | 229 |
| 02 | 282 | 170 | 220 | 229 |
| 03 | 536 | 170 | 210 | 229 |
| 04 | 779 | 170 | 142 | 229 |

## Per-element painted bounds delta

| Element | Reference x,y w x h | Actual x,y w x h | Delta x,y w x h |
|---|---|---|---|
| heading.eyebrow | 425,49 175x7 | 426,49 173x7 | +1,0 -2x0 |
| heading.title | 285,74 463x42 | 278,75 469x29 | -7,+1 +6x-13 |
| heading.titleDense | 285,74 463x29 | 278,75 469x29 | -7,+1 +6x0 |
| heading.support | 292,115 450x12 | 284,115 456x12 | -8,0 +6x0 |
| stage-01.number | 101,189 13x11 | 103,190 20x16 | +2,+1 +7x+5 |
| stage-01.icon | 102,198 135x55 | 103,198 67x93 | +1,0 -68x+38 |
| stage-01.title | 101,285 111x36 | 103,289 89x32 | +2,+4 -22x-4 |
| stage-01.body | 101,305 112x37 | 102,298 127x58 | +1,-7 +15x+21 |
| stage-01.pillIcon | 107,366 9x10 | 104,367 103x23 | -3,+1 +94x+13 |
| stage-02.number | 298,189 17x11 | 300,190 23x16 | +2,+1 +6x+5 |
| stage-02.icon | 300,198 198x55 | 300,198 117x93 | 0,0 -81x+38 |
| stage-02.title | 299,285 119x36 | 300,289 165x15 | +1,+4 +46x-21 |
| stage-02.body | 298,305 121x39 | 300,298 164x58 | +2,-7 +43x+19 |
| stage-02.pillIcon | 304,366 10x10 | 308,355 130x22 | +4,-11 +120x+12 |
| stage-03.number | 551,188 17x12 | 554,190 23x16 | +3,+2 +6x+4 |
| stage-03.icon | 552,198 191x62 | 554,198 132x93 | +2,0 -59x+31 |
| stage-03.title | 551,285 121x36 | 554,289 163x16 | +3,+4 +42x-20 |
| stage-03.body | 551,305 124x39 | 554,298 164x58 | +3,-7 +40x+19 |
| stage-03.pillIcon | 557,366 11x10 | 564,367 142x11 | +7,+1 +131x+1 |
| stage-04.number | 793,189 17x11 | 797,190 23x16 | +4,+1 +6x+5 |
| stage-04.icon | 794,198 37x56 | 797,198 109x93 | +3,0 +72x+37 |
| stage-04.title | 793,285 118x27 | 796,288 122x13 | +3,+3 +4x-14 |
| stage-04.body | 793,305 121x39 | 797,298 121x58 | +4,-7 0x+19 |
| stage-04.pillIcon | 798,367 12x9 | 802,355 90x37 | +4,-12 +78x+28 |

## Color samples (RGB)

| Sample | XY | Reference | Actual |
|---|---|---|---|
| pageBg | 40,40 | 17,17,17 | 17,17,17 |
| card1Fill | 155,355 | 24,24,24 | 23,23,23 |
| card1Border | 85,280 | 34,34,34 | 34,34,34 |
| primaryRedNumber | 108,192 | 119,64,59 | 119,64,59 |
| mutedIconStroke | 125,240 | 30,20,28 | 93,51,48 |
| title | ref 109,293 / act 109,298 | 226,226,226 | 241,241,241 |
| bodyText | ref 118,310 / act 125,312 | 104,104,104 | 99,98,97 |
| pillBorder | 100,368 | 28,28,28 | 10,10,10 |
| connector | 262,239 | 152,71,70 | 151,70,69 |
| centerGlow | 512,250 | 56,25,22 | 60,27,23 |

## Region mismatch ratios

| Region | Mismatched | Total | Ratio |
|---|---:|---:|---:|
| heading | 8846 | 101400 | 8.72% |
| stage-01 | 4483 | 35953 | 12.47% |
| stage-02 | 7088 | 50380 | 14.07% |
| stage-03 | 7359 | 48090 | 15.30% |
| stage-04 | 4364 | 32518 | 13.42% |
| stage-01-visual | 420 | 5600 | 7.50% |
| stage-02-visual | 1833 | 16000 | 11.46% |
| stage-03-visual | 1770 | 15200 | 11.64% |
| stage-04-visual | 462 | 5600 | 8.25% |
| connector-01-02 | 133 | 960 | 13.85% |
| connector-02-03 | 131 | 816 | 16.05% |
| connector-03-04 | 118 | 792 | 14.90% |
| chat | 206 | 2750 | 7.49% |
| bottom-line | 0 | 7168 | 0.00% |

## Crops

Nearest-neighbor 4× ref/actual/diff under `crops/`.
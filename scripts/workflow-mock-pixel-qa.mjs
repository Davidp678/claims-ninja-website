/**
 * Pixel comparison of /dev/workflow-visual-qa against the native 1024×467 mock.
 *
 * Usage:
 *   SITE=http://localhost:3017 node scripts/workflow-mock-pixel-qa.mjs
 *
 * Control: actual-vs-actual must be 0% or the tool exits non-zero.
 */
import {
  copyFileSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { resolve } from "node:path";
import { chromium } from "@playwright/test";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import sharp from "sharp";
import {
  delta,
  fmtBox,
  fmtDelta,
  loadReferenceMasks,
  measureAllReferenceMasks,
  measureDomBounds,
  measurePaintIsolation,
  validateIsolation,
} from "./lib/workflow-element-measure.mjs";

const SITE = (process.env.SITE || "http://localhost:3017").replace(/\/$/, "");
const OUT = resolve("screenshots/workflow-mock-pixel-qa");
const REF_JPG = resolve("docs/design-system/workflow-mock/reference-native.jpg");
mkdirSync(OUT, { recursive: true });
mkdirSync(resolve(OUT, "crops"), { recursive: true });

const W = 1024;
const H = 467;

/** pixelmatch options — documented in report.json */
const PM_OPTS = {
  threshold: 0.1,
  includeAA: true,
  // Transparent mask: only changed/AA pixels are drawn (no washed original).
  diffMask: true,
  alpha: 0,
  diffColor: [255, 64, 64],
  aaColor: [255, 200, 0],
};

function loadPng(path) {
  return PNG.sync.read(readFileSync(path));
}

function writePng(path, png) {
  writeFileSync(path, PNG.sync.write(png));
}

/** Force opaque RGBA with identical dimensions. */
function normalizeRgba(png, width = W, height = H) {
  if (png.width !== width || png.height !== height) {
    throw new Error(
      `Dimension mismatch: got ${png.width}×${png.height}, expected ${width}×${height}`,
    );
  }
  const out = new PNG({ width, height });
  for (let i = 0; i < png.data.length; i += 4) {
    out.data[i] = png.data[i];
    out.data[i + 1] = png.data[i + 1];
    out.data[i + 2] = png.data[i + 2];
    out.data[i + 3] = 255;
  }
  return out;
}

async function jpegToPngSharp(jpegPath, outPngPath) {
  const buf = await sharp(jpegPath)
    .ensureAlpha()
    .resize(W, H, { fit: "fill", kernel: sharp.kernel.nearest })
    .png()
    .toBuffer();
  writeFileSync(outPngPath, buf);
}

/**
 * Amplified diff: black where close, bright red/amber where pixelmatch flagged a change.
 * Requires PM_OPTS.diffMask so unchanged pixels stay transparent (alpha 0).
 */
function amplifyDiff(diffPng) {
  const out = new PNG({ width: diffPng.width, height: diffPng.height });
  for (let i = 0; i < diffPng.data.length; i += 4) {
    const a = diffPng.data[i + 3];
    const r = diffPng.data[i];
    const g = diffPng.data[i + 1];
    if (a > 0) {
      // Preserve AA (yellow) vs mismatch (red) cues, boosted for review.
      out.data[i] = 255;
      out.data[i + 1] = g > 150 ? 180 : 48;
      out.data[i + 2] = 40;
      out.data[i + 3] = 255;
    } else {
      out.data[i] = 0;
      out.data[i + 1] = 0;
      out.data[i + 2] = 0;
      out.data[i + 3] = 255;
    }
    // silence unused lint on r when only alpha matters
    void r;
  }
  return out;
}

function overlay(a, b, alpha = 0.5) {
  const out = new PNG({ width: a.width, height: a.height });
  for (let i = 0; i < a.data.length; i += 4) {
    out.data[i] = Math.round(a.data[i] * (1 - alpha) + b.data[i] * alpha);
    out.data[i + 1] = Math.round(
      a.data[i + 1] * (1 - alpha) + b.data[i + 1] * alpha,
    );
    out.data[i + 2] = Math.round(
      a.data[i + 2] * (1 - alpha) + b.data[i + 2] * alpha,
    );
    out.data[i + 3] = 255;
  }
  return out;
}

function sideBySide(a, b) {
  const out = new PNG({ width: a.width * 2 + 8, height: a.height });
  for (let y = 0; y < a.height; y++) {
    for (let x = 0; x < a.width; x++) {
      const si = (y * a.width + x) * 4;
      const diL = (y * out.width + x) * 4;
      const diR = (y * out.width + (a.width + 8 + x)) * 4;
      for (let c = 0; c < 4; c++) {
        out.data[diL + c] = a.data[si + c];
        out.data[diR + c] = b.data[si + c];
      }
    }
    for (let x = a.width; x < a.width + 8; x++) {
      const di = (y * out.width + x) * 4;
      out.data[di] = 40;
      out.data[di + 1] = 40;
      out.data[di + 2] = 40;
      out.data[di + 3] = 255;
    }
  }
  return out;
}

function crop(png, region) {
  const { x, y, w, h } = region;
  const out = new PNG({ width: w, height: h });
  for (let row = 0; row < h; row++) {
    for (let col = 0; col < w; col++) {
      const si = ((y + row) * png.width + (x + col)) * 4;
      const di = (row * w + col) * 4;
      out.data[di] = png.data[si];
      out.data[di + 1] = png.data[si + 1];
      out.data[di + 2] = png.data[si + 2];
      out.data[di + 3] = png.data[si + 3];
    }
  }
  return out;
}

/** Nearest-neighbor enlarge for review crops. */
function nearestScale(png, scale) {
  const out = new PNG({
    width: png.width * scale,
    height: png.height * scale,
  });
  for (let y = 0; y < out.height; y++) {
    for (let x = 0; x < out.width; x++) {
      const sx = Math.floor(x / scale);
      const sy = Math.floor(y / scale);
      const si = (sy * png.width + sx) * 4;
      const di = (y * out.width + x) * 4;
      out.data[di] = png.data[si];
      out.data[di + 1] = png.data[si + 1];
      out.data[di + 2] = png.data[si + 2];
      out.data[di + 3] = 255;
    }
  }
  return out;
}

function compareImages(a, b, opts = PM_OPTS) {
  if (a.width !== b.width || a.height !== b.height) {
    throw new Error(
      `Compare size mismatch ${a.width}×${a.height} vs ${b.width}×${b.height}`,
    );
  }
  const diff = new PNG({ width: a.width, height: a.height });
  const mismatched = pixelmatch(
    a.data,
    b.data,
    diff.data,
    a.width,
    a.height,
    opts,
  );
  return { mismatched, diff, total: a.width * a.height };
}

function compareRegion(ref, actual, region, name) {
  const r = normalizeRgba(crop(ref, region), region.w, region.h);
  const a = normalizeRgba(crop(actual, region), region.w, region.h);
  const { mismatched, diff, total } = compareImages(r, a);
  writePng(resolve(OUT, `region-${name}-ref.png`), r);
  writePng(resolve(OUT, `region-${name}-actual.png`), a);
  writePng(resolve(OUT, `region-${name}-diff.png`), amplifyDiff(diff));
  writePng(resolve(OUT, `crops/${name}-ref-4x.png`), nearestScale(r, 4));
  writePng(resolve(OUT, `crops/${name}-actual-4x.png`), nearestScale(a, 4));
  writePng(
    resolve(OUT, `crops/${name}-diff-4x.png`),
    nearestScale(amplifyDiff(diff), 4),
  );
  return {
    name,
    region,
    mismatched,
    total,
    ratio: mismatched / total,
  };
}

function sampleRgb(png, x, y) {
  const i = (y * png.width + x) * 4;
  return [png.data[i], png.data[i + 1], png.data[i + 2]];
}

function paintedTextBounds(png, {
  x0,
  y0,
  x1,
  y1,
  minL = 70,
  redOnly = false,
}) {
  let minX = x1;
  let minY = y1;
  let maxX = x0;
  let maxY = y0;
  let count = 0;
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const i = (y * png.width + x) * 4;
      const r = png.data[i];
      const g = png.data[i + 1];
      const b = png.data[i + 2];
      const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      const isRed = r > 90 && r > g * 1.35 && r > b * 1.35;
      const hit = redOnly ? isRed : L >= minL || isRed;
      if (!hit) continue;
      count += 1;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
  }
  if (count === 0) return null;
  return {
    left: minX,
    top: minY,
    right: maxX,
    bottom: maxY,
    width: maxX - minX + 1,
    height: maxY - minY + 1,
    count,
  };
}

const regions = [
  { name: "heading", x: 120, y: 30, w: 780, h: 130 },
  { name: "stage-01", x: 85, y: 170, w: 157, h: 229 },
  { name: "stage-02", x: 282, y: 170, w: 220, h: 229 },
  { name: "stage-03", x: 536, y: 170, w: 210, h: 229 },
  { name: "stage-04", x: 779, y: 170, w: 142, h: 229 },
  { name: "stage-01-visual", x: 95, y: 200, w: 70, h: 80 },
  { name: "stage-02-visual", x: 292, y: 200, w: 200, h: 80 },
  { name: "stage-03-visual", x: 546, y: 200, w: 190, h: 80 },
  { name: "stage-04-visual", x: 789, y: 200, w: 70, h: 80 },
  { name: "connector-01-02", x: 242, y: 230, w: 40, h: 24 },
  { name: "connector-02-03", x: 502, y: 230, w: 34, h: 24 },
  { name: "connector-03-04", x: 746, y: 230, w: 33, h: 24 },
  { name: "chat", x: 970, y: 405, w: 50, h: 55 },
  { name: "bottom-line", x: 0, y: 460, w: 1024, h: 7 },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: W, height: H },
  deviceScaleFactor: 1,
});

const refPngPath = resolve(OUT, "reference-normalized.png");
await jpegToPngSharp(REF_JPG, refPngPath);
copyFileSync(REF_JPG, resolve(OUT, "reference-native.jpg"));

await page.goto(`${SITE}/dev/workflow-visual-qa`, {
  waitUntil: "networkidle",
  timeout: 90_000,
});
await page.addStyleTag({
  content: `
    *, *::before, *::after {
      animation: none !important;
      transition: none !important;
      caret-color: transparent !important;
    }
    nextjs-portal,
    [data-nextjs-toast],
    [data-nextjs-dialog-overlay],
    #__next-build-watcher,
    [data-next-badge-root] {
      display: none !important;
      visibility: hidden !important;
    }
  `,
});
await page.evaluate(async () => {
  if (document.fonts?.ready) await document.fonts.ready;
});
await page.waitForTimeout(600);

const section = page.locator("#process");
await section.waitFor({ state: "visible" });
const actualPath = resolve(OUT, "actual.png");
await page.screenshot({ path: actualPath, animations: "disabled" });

// Reliable element measurement WHILE page is still clean of QA paint.
const domBounds = await measureDomBounds(page);
console.error(
  `DOM measured ${Object.values(domBounds).filter(Boolean).length} selectors`,
);
const paintBounds = await measurePaintIsolation(page, section, domBounds);
console.error(
  `Paint-isolated ${Object.values(paintBounds).filter(Boolean).length} selectors`,
);

await browser.close();

const ref = normalizeRgba(loadPng(refPngPath));
const actual = normalizeRgba(loadPng(actualPath));
writePng(refPngPath, ref);
writePng(actualPath, actual);

const maskDoc = loadReferenceMasks();
const maskAuditDir = resolve(OUT, "masks");
const refMasks = measureAllReferenceMasks(ref, maskDoc, maskAuditDir);
const actualMasks = measureAllReferenceMasks(actual, maskDoc, null);

const assertions = validateIsolation({
  paintBounds,
  domBounds,
  refInk: refMasks.ink,
  refGeometric: refMasks.geometric,
  geometryOnly: refMasks.geometryOnly,
  maskDoc,
});
writeFileSync(
  resolve(OUT, "assertions.json"),
  JSON.stringify(assertions, null, 2),
);
if (!assertions.ok) {
  console.error("MEASUREMENT ASSERTIONS FAILED:");
  for (const f of assertions.failures) {
    console.error(`  [${f.rule}] ${f.name}: ${f.detail}`);
  }
  // Still write artifacts below, then exit non-zero so the run cannot be treated as pass.
}

// --- Control tests (must pass) ---
const control = compareImages(actual, actual);
const controlAmp = amplifyDiff(control.diff);
let controlHot = 0;
for (let i = 0; i < controlAmp.data.length; i += 4) {
  if (controlAmp.data[i] > 200) controlHot += 1;
}
const controlOk =
  control.mismatched === 0 && controlHot === 0 && control.total === W * H;
if (!controlOk) {
  console.error("CONTROL FAILED: actual-vs-actual is not 0%", {
    mismatched: control.mismatched,
    controlHot,
  });
  process.exit(3);
}
writePng(resolve(OUT, "control-actual-vs-actual-diff.png"), controlAmp);

const { mismatched, diff } = compareImages(ref, actual);
const amp = amplifyDiff(diff);
writePng(resolve(OUT, "diff-amplified.png"), amp);
writePng(resolve(OUT, "overlay-50.png"), overlay(ref, actual, 0.5));
writePng(resolve(OUT, "side-by-side.png"), sideBySide(ref, actual));

const regionResults = regions.map((r) => compareRegion(ref, actual, r, r.name));

const COMPARE_KEYS = Object.keys(maskDoc.primitives);

/** Dual-bound rows: geometric and painted-ink reported separately. */
const dualRows = COMPARE_KEYS.map((key) => {
  const isGeoOnly = Boolean(refMasks.geometryOnly?.[key]);
  const refGeo = refMasks.geometric[key] || null;
  const refInk = isGeoOnly ? null : refMasks.ink[key] || null;
  const actGeo = domBounds[key] || null;
  const actInk = isGeoOnly
    ? null
    : paintBounds[key] || actualMasks.ink[key] || null;
  return {
    element: key,
    geometryOnly: isGeoOnly,
    geometric: {
      ref: refGeo,
      actual: actGeo,
      delta: delta(refGeo, actGeo),
    },
    paintedInk: isGeoOnly
      ? { ref: null, actual: null, delta: null, skipped: "geometry-only" }
      : {
          ref: refInk,
          actual: actInk,
          delta: delta(refInk, actInk),
        },
  };
});

/** Ink-vs-ink deltas for review table (never mix ink with DOM). */
const elementDeltas = dualRows.map((row) => ({
  element: row.element,
  geometryOnly: row.geometryOnly,
  ref: row.paintedInk.ref,
  actual: row.paintedInk.actual,
  delta: row.paintedInk.delta,
  geometric: row.geometric,
  methods: {
    refInk: row.geometryOnly
      ? "geometry-only"
      : row.paintedInk.ref?.method || "ref-ink-miss",
    actInk: row.geometryOnly
      ? "geometry-only"
      : row.paintedInk.actual?.method || "act-ink-miss",
    refGeo: row.geometric.ref?.method || "ref-geo-miss",
    actGeo: row.geometric.actual?.method || "act-geo-miss",
  },
}));

// Headline contamination note: wide loose white detector vs dense glyph ink
const headingTitleLooseRef = paintedTextBounds(ref, {
  x0: 180,
  y0: 65,
  x1: 850,
  y1: 115,
  minL: 160,
});
const headingTitleDenseRef = paintedTextBounds(ref, {
  x0: 180,
  y0: 70,
  x1: 850,
  y1: 105,
  minL: 180,
});
const headingTitleLooseAct = paintedTextBounds(actual, {
  x0: 180,
  y0: 65,
  x1: 850,
  y1: 115,
  minL: 160,
});
const headingTitleDenseAct = paintedTextBounds(actual, {
  x0: 180,
  y0: 70,
  x1: 850,
  y1: 105,
  minL: 180,
});

function findBodySample(png) {
  for (let y = 310; y <= 340; y++) {
    for (let x = 105; x <= 200; x++) {
      const [r, g, b] = sampleRgb(png, x, y);
      const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      if (L > 80 && L < 140 && Math.abs(r - g) < 12 && Math.abs(g - b) < 12) {
        return { xy: [x, y], rgb: [r, g, b] };
      }
    }
  }
  return { xy: [130, 325], rgb: sampleRgb(png, 130, 325) };
}
const bodyRef = findBodySample(ref);
const bodyAct = findBodySample(actual);

function findMutedStroke(png) {
  // Walk stage-01 icon symbol band; take median-ish dark red stroke sample
  const samples = [];
  for (let y = 220; y <= 255; y++) {
    for (let x = 108; x <= 145; x++) {
      const [r, g, b] = sampleRgb(png, x, y);
      if (r > 20 && r < 120 && r > g && r > b && r - g > 5) {
        samples.push({ xy: [x, y], rgb: [r, g, b] });
      }
    }
  }
  if (!samples.length) {
    return { xy: [125, 240], rgb: sampleRgb(png, 125, 240) };
  }
  samples.sort((a, b) => a.rgb[0] - b.rgb[0]);
  return samples[Math.floor(samples.length / 2)];
}
const mutedRef = findMutedStroke(ref);
const mutedAct = findMutedStroke(actual);

function findTitleInk(png) {
  const candidates = [];
  for (let y = 286; y <= 300; y++) {
    for (let x = 105; x <= 200; x++) {
      const [r, g, b] = sampleRgb(png, x, y);
      if (r > 200 && g > 200 && b > 200 && Math.abs(r - g) < 8) {
        candidates.push({ xy: [x, y], rgb: [r, g, b] });
      }
    }
  }
  if (!candidates.length) {
    return { xy: [120, 290], rgb: sampleRgb(png, 120, 290) };
  }
  // Prefer solid interiors near the mode (not brightest AA fringe)
  candidates.sort((a, b) => a.rgb[0] - b.rgb[0]);
  return candidates[Math.floor(candidates.length * 0.35)];
}
const titleRef = findTitleInk(ref);
const titleAct = findTitleInk(actual);

function findPillBorder(png) {
  // Scan left edge of stage-01 pill band for mid-dark border (not fill, not card)
  for (let y = 364; y <= 384; y++) {
    for (let x = 96; x <= 110; x++) {
      const [r, g, b] = sampleRgb(png, x, y);
      const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      if (L >= 20 && L <= 45 && Math.abs(r - g) < 8) {
        return { xy: [x, y], rgb: [r, g, b] };
      }
    }
  }
  return { xy: [100, 368], rgb: sampleRgb(png, 100, 368) };
}
const pillRef = findPillBorder(ref);
const pillAct = findPillBorder(actual);

const colorSamples = {
  pageBg: {
    xy: [40, 40],
    ref: sampleRgb(ref, 40, 40),
    actual: sampleRgb(actual, 40, 40),
  },
  card1Fill: {
    // Empty card fill between visual and title (avoid body/pill ink)
    xy: [200, 270],
    ref: sampleRgb(ref, 200, 270),
    actual: sampleRgb(actual, 200, 270),
  },
  card1Border: {
    xy: [85, 280],
    ref: sampleRgb(ref, 85, 280),
    actual: sampleRgb(actual, 85, 280),
  },
  primaryRedNumber: (() => {
    const find = (png) => {
      for (let y = 186; y <= 200; y++) {
        for (let x = 100; x <= 120; x++) {
          const [r, g, b] = sampleRgb(png, x, y);
          if (r > 90 && r > g * 1.3 && r > b * 1.3) {
            return { xy: [x, y], rgb: [r, g, b] };
          }
        }
      }
      return { xy: [108, 192], rgb: sampleRgb(png, 108, 192) };
    };
    const r = find(ref);
    const a = find(actual);
    return {
      xyRef: r.xy,
      xyActual: a.xy,
      ref: r.rgb,
      actual: a.rgb,
    };
  })(),
  mutedIconStroke: {
    xyRef: mutedRef.xy,
    xyActual: mutedAct.xy,
    ref: mutedRef.rgb,
    actual: mutedAct.rgb,
  },
  title: {
    xyRef: titleRef.xy,
    xyActual: titleAct.xy,
    ref: titleRef.rgb,
    actual: titleAct.rgb,
  },
  bodyText: {
    xyRef: bodyRef.xy,
    xyActual: bodyAct.xy,
    ref: bodyRef.rgb,
    actual: bodyAct.rgb,
  },
  pillBorder: {
    xyRef: pillRef.xy,
    xyActual: pillAct.xy,
    ref: pillRef.rgb,
    actual: pillAct.rgb,
  },
  connector: {
    xy: [262, 239],
    ref: sampleRgb(ref, 262, 239),
    actual: sampleRgb(actual, 262, 239),
  },
  centerGlow: {
    xy: [512, 250],
    ref: sampleRgb(ref, 512, 250),
    actual: sampleRgb(actual, 512, 250),
  },
};

mkdirSync(resolve(OUT, "isolated"), { recursive: true });
function cropPair(name, box, pad = 4) {
  if (!box) return;
  const x = Math.max(0, box.x - pad);
  const y = Math.max(0, box.y - pad);
  const w = Math.min(W - x, box.w + pad * 2);
  const h = Math.min(H - y, box.h + pad * 2);
  const region = { x, y, w, h };
  writePng(
    resolve(OUT, `isolated/${name}-ref.png`),
    crop(ref, region),
  );
  writePng(
    resolve(OUT, `isolated/${name}-actual.png`),
    crop(actual, region),
  );
  const side = sideBySide(crop(ref, region), crop(actual, region));
  writePng(resolve(OUT, `isolated/${name}-side.png`), side);
}

const isolateNames = [
  "heading-eyebrow",
  "heading-title",
  "heading-support",
  "stage-01-number",
  "stage-01-symbol",
  "stage-01-pill-icon",
  "stage-01-title",
  "stage-01-body-line-0",
  "stage-02-symbol",
  "stage-02-rear-panel",
  "stage-02-active-dot",
  "stage-03-symbol",
  "stage-03-rear-panel",
  "stage-03-check-0",
  "stage-03-check-1",
  "stage-03-check-2",
  "stage-04-symbol",
  "connector-1-line",
  "connector-1-node",
  "connector-1-dot",
  "connector-2-node",
  "connector-3-node",
];
for (const name of isolateNames) {
  const box =
    paintBounds[name] ||
    domBounds[name] ||
    refMasks.geometric[name] ||
    refMasks.ink[name];
  cropPair(name, box, 6);
}

const report = {
  site: SITE,
  viewport: { width: W, height: H },
  pixelmatchOptions: PM_OPTS,
  measurementMethod: {
    actualGeometric: "DOM getBoundingClientRect via data-qa",
    actualPaintedInk:
      "sequential unique-color paint isolation (SVG stroke/fill/descendants restored)",
    referenceGeometric: "curated mask geometry in reference-masks.json",
    referencePaintedInk: "pixels inside curated mask matching inkMode",
    note: "Geometric and painted-ink bounds are reported separately and never mixed.",
  },
  assertions,
  controlTest: {
    name: "actual-vs-actual",
    mismatchedPixels: control.mismatched,
    amplifiedHotPixels: controlHot,
    mismatchRatio: 0,
    passed: true,
  },
  mismatchedPixels: mismatched,
  totalPixels: W * H,
  mismatchRatio: mismatched / (W * H),
  headingTitleContamination: {
    note: "Loose L>=160 detector on reference can include glow/AA below glyphs; dense L>=180 is glyph ink.",
    looseRef: headingTitleLooseRef,
    denseRef: headingTitleDenseRef,
    looseActual: headingTitleLooseAct,
    denseActual: headingTitleDenseAct,
  },
  dualBounds: dualRows,
  domBounds,
  paintBounds,
  refMasks,
  elementDeltas,
  colorSamples,
  regions: regionResults,
  artifacts: {
    actual: "actual.png",
    reference: "reference-normalized.png",
    overlay: "overlay-50.png",
    diff: "diff-amplified.png",
    sideBySide: "side-by-side.png",
    controlDiff: "control-actual-vs-actual-diff.png",
    crops: "crops/",
    isolated: "isolated/",
    masks: "masks/",
    assertions: "assertions.json",
    measurement: "MEASUREMENT.md",
    referenceMasks: "docs/design-system/workflow-mock/reference-masks.json",
  },
};

writeFileSync(resolve(OUT, "report.json"), JSON.stringify(report, null, 2));

const md = [];
md.push("# Workflow mock visual QA — dual-bound measurement");
md.push("");
md.push(`Canvas: **1024×467** | Capture: \`${SITE}\``);
md.push("");
md.push("## Measurement method");
md.push("");
md.push("| Bound type | Actual | Reference |");
md.push("|---|---|---|");
md.push(
  "| **Geometric** | `data-qa` DOM `getBoundingClientRect` | Curated mask geometry (`reference-masks.json`) |",
);
md.push(
  "| **Painted ink** | Sequential unique-color isolation (full SVG descendant recolor + restore) | Pixels **inside** the curated mask matching `inkMode` |",
);
md.push("");
md.push(
  "These two bound types are never mixed in a single delta cell. Mask audit overlays (magenta = ink hits) live under `masks/`.",
);
md.push("");
md.push("## Isolation assertions");
md.push("");
md.push(`| Result | **${assertions.ok ? "PASS" : "FAIL"}** |`);
md.push(`| Failures | **${assertions.failures.length}** |`);
md.push("");
if (assertions.failures.length) {
  md.push("| Rule | Element | Detail |");
  md.push("|---|---|---|");
  for (const f of assertions.failures) {
    md.push(`| \`${f.rule}\` | \`${f.name}\` | ${f.detail} |`);
  }
  md.push("");
}
md.push("## Control");
md.push("");
md.push("| Check | Result |");
md.push("|---|---|");
md.push(`| actual vs actual mismatched | **${control.mismatched}** |`);
md.push(`| amplified hot pixels | **${controlHot}** |`);
md.push(
  `| overall mismatch | **${((mismatched / (W * H)) * 100).toFixed(2)}%** (${mismatched} px) |`,
);
md.push("");
md.push("## Locked outer geometry (unchanged)");
md.push("");
md.push("| Stage | x | y | w | h |");
md.push("|---|---:|---:|---:|---:|");
md.push("| 01 | 85 | 170 | 157 | 229 |");
md.push("| 02 | 282 | 170 | 220 | 229 |");
md.push("| 03 | 536 | 170 | 210 | 229 |");
md.push("| 04 | 779 | 170 | 142 | 229 |");
md.push("");
md.push("## Heading title isolation note");
md.push("");
md.push("| Detector | Reference | Actual |");
md.push("|---|---|---|");
md.push(
  `| Loose (L≥160, can include glow) | ${headingTitleLooseRef ? `${headingTitleLooseRef.left},${headingTitleLooseRef.top} ${headingTitleLooseRef.width}×${headingTitleLooseRef.height}` : "-"} | ${headingTitleLooseAct ? `${headingTitleLooseAct.left},${headingTitleLooseAct.top} ${headingTitleLooseAct.width}×${headingTitleLooseAct.height}` : "-"} |`,
);
md.push(
  `| Dense glyph (L≥180) | ${headingTitleDenseRef ? `${headingTitleDenseRef.left},${headingTitleDenseRef.top} ${headingTitleDenseRef.width}×${headingTitleDenseRef.height}` : "-"} | ${headingTitleDenseAct ? `${headingTitleDenseAct.left},${headingTitleDenseAct.top} ${headingTitleDenseAct.width}×${headingTitleDenseAct.height}` : "-"} |`,
);
md.push("");
md.push("## Geometric bounds (mask geometry vs DOM)");
md.push("");
md.push("| Element | Ref geometric | Actual DOM | Delta |");
md.push("|---|---|---|---|");
for (const row of dualRows) {
  md.push(
    `| \`${row.element}\` | ${fmtBox(row.geometric.ref)} | ${fmtBox(row.geometric.actual)} | ${fmtDelta(row.geometric.delta)} |`,
  );
}
md.push("");
md.push("## Painted-ink bounds (mask ink vs paint-isolation)");
md.push("");
md.push(
  "Primitives marked `geometry-only` intentionally omit painted-ink deltas (JPEG ink is unreliable for those marks).",
);
md.push("");
md.push("| Element | Ref ink | Actual ink | Delta | Methods |");
md.push("|---|---|---|---|---|");
for (const row of elementDeltas) {
  if (row.geometryOnly) {
    md.push(
      `| \`${row.element}\` | — | — | — | geometry-only (no painted-ink delta) |`,
    );
    continue;
  }
  md.push(
    `| \`${row.element}\` | ${fmtBox(row.ref)} | ${fmtBox(row.actual)} | ${fmtDelta(row.delta)} | ref=${row.methods.refInk}; act=${row.methods.actInk} |`,
  );
}
md.push("");
md.push("## Actual DOM layout boxes");
md.push("");
md.push("| Selector | x,y w×h |");
md.push("|---|---|");
for (const [name, b] of Object.entries(domBounds).sort(([a], [c]) =>
  a.localeCompare(c),
)) {
  md.push(`| \`${name}\` | ${fmtBox(b)} |`);
}
md.push("");
md.push("## Actual paint-isolated ink");
md.push("");
md.push("| Selector | x,y w×h | count |");
md.push("|---|---|---:|");
for (const [name, b] of Object.entries(paintBounds).sort(([a], [c]) =>
  a.localeCompare(c),
)) {
  md.push(`| \`${name}\` | ${fmtBox(b)} | ${b?.count ?? 0} |`);
}
md.push("");
md.push("## Color samples (RGB)");
md.push("");
md.push("| Sample | XY | Reference | Actual |");
md.push("|---|---|---|---|");
for (const [name, s] of Object.entries(colorSamples)) {
  const xy = s.xy
    ? `${s.xy[0]},${s.xy[1]}`
    : `ref ${s.xyRef?.join(",")} / act ${s.xyActual?.join(",")}`;
  md.push(
    `| ${name} | ${xy} | ${s.ref.join(",")} | ${s.actual.join(",")} |`,
  );
}
md.push("");
md.push("## Region mismatch ratios");
md.push("");
md.push("| Region | Mismatched | Total | Ratio |");
md.push("|---|---:|---:|---:|");
for (const r of regionResults) {
  md.push(
    `| ${r.name} | ${r.mismatched} | ${r.total} | ${(r.ratio * 100).toFixed(2)}% |`,
  );
}
md.push("");
md.push("## Mask audits + isolated pairs");
md.push("");
md.push("- `masks/*.png` — reference mask geometry with magenta ink hits");
md.push("- `isolated/*` — ref/actual/side crops for major primitives");
md.push("- `crops/` — nearest-neighbor 4× region triplets");
md.push("");
md.push("## Remaining visual discrepancies");
md.push("");
const material = dualRows.filter((row) => {
  const d = row.geometryOnly
    ? row.geometric.delta
    : row.paintedInk.delta || row.geometric.delta;
  if (!d) return !row.geometryOnly;
  return (
    Math.abs(d.x) > 2 ||
    Math.abs(d.y) > 2 ||
    Math.abs(d.w) > 3 ||
    Math.abs(d.h) > 3
  );
});
for (const row of material) {
  if (row.geometryOnly) {
    md.push(
      `- \`${row.element}\` (geometry-only): geo ${fmtBox(row.geometric.ref)} → ${fmtBox(row.geometric.actual)} (${fmtDelta(row.geometric.delta)})`,
    );
    continue;
  }
  md.push(
    `- \`${row.element}\`: ink ${fmtBox(row.paintedInk.ref)} → ${fmtBox(row.paintedInk.actual)} (${fmtDelta(row.paintedInk.delta)}); geo ${fmtBox(row.geometric.ref)} → ${fmtBox(row.geometric.actual)} (${fmtDelta(row.geometric.delta)})`,
  );
}
writeFileSync(resolve(OUT, "MEASUREMENT.md"), md.join("\n"));

console.log(
  JSON.stringify(
    {
      overall: `${((mismatched / (W * H)) * 100).toFixed(2)}%`,
      mismatched,
      control: control.mismatched,
      assertionsOk: assertions.ok,
      assertionFailures: assertions.failures.length,
      elementRows: elementDeltas.length,
      materialDeltas: material.length,
      regions: regionResults.map((r) => ({
        name: r.name,
        pct: `${(r.ratio * 100).toFixed(2)}%`,
      })),
    },
    null,
    2,
  ),
);

if (!assertions.ok) process.exit(4);
process.exit(mismatched / (W * H) > 0.45 ? 2 : 0);

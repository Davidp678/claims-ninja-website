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

const ref = normalizeRgba(loadPng(refPngPath));
const actual = normalizeRgba(loadPng(actualPath));
writePng(refPngPath, ref);
writePng(actualPath, actual);

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
  await browser.close();
  process.exit(3);
}
writePng(resolve(OUT, "control-actual-vs-actual-diff.png"), controlAmp);

const { mismatched, diff } = compareImages(ref, actual);
const amp = amplifyDiff(diff);
writePng(resolve(OUT, "diff-amplified.png"), amp);
writePng(resolve(OUT, "overlay-50.png"), overlay(ref, actual, 0.5));
writePng(resolve(OUT, "side-by-side.png"), sideBySide(ref, actual));

const regionResults = regions.map((r) => compareRegion(ref, actual, r, r.name));

function stageElementBounds(png, card) {
  const { l, t, w } = card;
  const isRed = (x, y) => {
    const [r, g, b] = sampleRgb(png, x, y);
    return r > 85 && r > g * 1.3 && r > b * 1.3;
  };
  const isWhite = (x, y) => {
    const [r, g, b] = sampleRgb(png, x, y);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b >= 170;
  };
  const isGray = (x, y) => {
    const [r, g, b] = sampleRgb(png, x, y);
    const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return L > 70 && L < 160 && !(r > 85 && r > g * 1.3 && r > b * 1.3);
  };
  const box = (x0, y0, x1, y1, pred) => {
    let minX = x1;
    let minY = y1;
    let maxX = x0;
    let maxY = y0;
    let count = 0;
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        if (!pred(x, y)) continue;
        count += 1;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
    if (!count) return null;
    return {
      x: minX,
      y: minY,
      w: maxX - minX + 1,
      h: maxY - minY + 1,
      count,
    };
  };
  return {
    number: box(l, t, l + 40, t + 45, isRed),
    icon: box(l + 4, t + 28, l + w - 4, t + 120, isRed),
    title: box(l + 4, t + 100, l + w - 4, t + 150, isWhite),
    body: box(l + 4, t + 128, l + w - 4, t + 185, isGray),
    pillIcon: box(l + 4, t + 185, l + w - 4, t + 225, isRed),
  };
}

function deltaRow(name, refB, actB) {
  if (!refB && !actB) {
    return { element: name, ref: null, actual: null, delta: null };
  }
  const z = { x: 0, y: 0, w: 0, h: 0 };
  const r = refB || z;
  const a = actB || z;
  return {
    element: name,
    ref: refB,
    actual: actB,
    delta: {
      x: (a.x ?? 0) - (r.x ?? 0),
      y: (a.y ?? 0) - (r.y ?? 0),
      w: (a.w ?? 0) - (r.w ?? 0),
      h: (a.h ?? 0) - (r.h ?? 0),
    },
  };
}

function fmtBox(b) {
  if (!b) return "-";
  return `${b.x},${b.y} ${b.w}x${b.h}`;
}

function fmtDelta(d) {
  if (!d) return "-";
  const s = (n) => (n > 0 ? `+${n}` : `${n}`);
  return `${s(d.x)},${s(d.y)} ${s(d.w)}x${s(d.h)}`;
}

// Headline dense-ink bounds (stricter white) + full detector for continuity
const headingTitleDenseRef = paintedTextBounds(ref, {
  x0: 180,
  y0: 70,
  x1: 850,
  y1: 105,
  minL: 180,
});
const headingTitleDenseAct = paintedTextBounds(actual, {
  x0: 180,
  y0: 70,
  x1: 850,
  y1: 105,
  minL: 180,
});

const paintedBounds = {
  headingEyebrow: paintedTextBounds(ref, {
    x0: 300,
    y0: 40,
    x1: 720,
    y1: 62,
    redOnly: true,
  }),
  headingTitle: paintedTextBounds(ref, {
    x0: 180,
    y0: 65,
    x1: 850,
    y1: 115,
    minL: 160,
  }),
  headingTitleDense: headingTitleDenseRef,
  headingSupport: paintedTextBounds(ref, {
    x0: 200,
    y0: 110,
    x1: 820,
    y1: 145,
    minL: 70,
  }),
  actualHeadingEyebrow: paintedTextBounds(actual, {
    x0: 300,
    y0: 40,
    x1: 720,
    y1: 62,
    redOnly: true,
  }),
  actualHeadingTitle: paintedTextBounds(actual, {
    x0: 180,
    y0: 65,
    x1: 850,
    y1: 115,
    minL: 160,
  }),
  actualHeadingTitleDense: headingTitleDenseAct,
  actualHeadingSupport: paintedTextBounds(actual, {
    x0: 200,
    y0: 110,
    x1: 820,
    y1: 145,
    minL: 70,
  }),
};

const cards = [
  { name: "stage-01", l: 85, t: 170, w: 157 },
  { name: "stage-02", l: 282, t: 170, w: 220 },
  { name: "stage-03", l: 536, t: 170, w: 210 },
  { name: "stage-04", l: 779, t: 170, w: 142 },
];

const elementDeltas = [
  deltaRow(
    "heading.eyebrow",
    paintedBounds.headingEyebrow && {
      x: paintedBounds.headingEyebrow.left,
      y: paintedBounds.headingEyebrow.top,
      w: paintedBounds.headingEyebrow.width,
      h: paintedBounds.headingEyebrow.height,
    },
    paintedBounds.actualHeadingEyebrow && {
      x: paintedBounds.actualHeadingEyebrow.left,
      y: paintedBounds.actualHeadingEyebrow.top,
      w: paintedBounds.actualHeadingEyebrow.width,
      h: paintedBounds.actualHeadingEyebrow.height,
    },
  ),
  deltaRow(
    "heading.title",
    paintedBounds.headingTitle && {
      x: paintedBounds.headingTitle.left,
      y: paintedBounds.headingTitle.top,
      w: paintedBounds.headingTitle.width,
      h: paintedBounds.headingTitle.height,
    },
    paintedBounds.actualHeadingTitle && {
      x: paintedBounds.actualHeadingTitle.left,
      y: paintedBounds.actualHeadingTitle.top,
      w: paintedBounds.actualHeadingTitle.width,
      h: paintedBounds.actualHeadingTitle.height,
    },
  ),
  deltaRow(
    "heading.titleDense",
    headingTitleDenseRef && {
      x: headingTitleDenseRef.left,
      y: headingTitleDenseRef.top,
      w: headingTitleDenseRef.width,
      h: headingTitleDenseRef.height,
    },
    headingTitleDenseAct && {
      x: headingTitleDenseAct.left,
      y: headingTitleDenseAct.top,
      w: headingTitleDenseAct.width,
      h: headingTitleDenseAct.height,
    },
  ),
  deltaRow(
    "heading.support",
    paintedBounds.headingSupport && {
      x: paintedBounds.headingSupport.left,
      y: paintedBounds.headingSupport.top,
      w: paintedBounds.headingSupport.width,
      h: paintedBounds.headingSupport.height,
    },
    paintedBounds.actualHeadingSupport && {
      x: paintedBounds.actualHeadingSupport.left,
      y: paintedBounds.actualHeadingSupport.top,
      w: paintedBounds.actualHeadingSupport.width,
      h: paintedBounds.actualHeadingSupport.height,
    },
  ),
];

for (const card of cards) {
  const refE = stageElementBounds(ref, card);
  const actE = stageElementBounds(actual, card);
  for (const key of ["number", "icon", "title", "body", "pillIcon"]) {
    elementDeltas.push(
      deltaRow(`${card.name}.${key}`, refE[key], actE[key]),
    );
  }
}

// Body-text sample: find a gray ink pixel inside stage-01 description band
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

const colorSamples = {
  pageBg: {
    xy: [40, 40],
    ref: sampleRgb(ref, 40, 40),
    actual: sampleRgb(actual, 40, 40),
  },
  card1Fill: {
    // Below visual / above description — avoid icon glow contamination
    xy: [155, 355],
    ref: sampleRgb(ref, 155, 355),
    actual: sampleRgb(actual, 155, 355),
  },
  card1Border: {
    xy: [85, 280],
    ref: sampleRgb(ref, 85, 280),
    actual: sampleRgb(actual, 85, 280),
  },
  primaryRedNumber: {
    xy: [108, 192],
    ref: sampleRgb(ref, 108, 192),
    actual: sampleRgb(actual, 108, 192),
  },
  mutedIconStroke: {
    xy: [125, 240],
    ref: sampleRgb(ref, 125, 240),
    actual: sampleRgb(actual, 125, 240),
  },
  title: (() => {
    // Seek a bright title glyph inside stage-01 title band
    for (const png of [ref, actual]) {
      void png;
    }
    let refXY = [120, 290];
    let actXY = [120, 290];
    for (let y = 286; y <= 298; y++) {
      for (let x = 105; x <= 200; x++) {
        const [r, g, b] = sampleRgb(ref, x, y);
        if (r > 200 && g > 200 && b > 200) {
          refXY = [x, y];
          break;
        }
      }
    }
    for (let y = 286; y <= 298; y++) {
      for (let x = 105; x <= 200; x++) {
        const [r, g, b] = sampleRgb(actual, x, y);
        if (r > 200 && g > 200 && b > 200) {
          actXY = [x, y];
          break;
        }
      }
    }
    return {
      xyRef: refXY,
      xyActual: actXY,
      ref: sampleRgb(ref, refXY[0], refXY[1]),
      actual: sampleRgb(actual, actXY[0], actXY[1]),
    };
  })(),
  bodyText: {
    xyRef: bodyRef.xy,
    xyActual: bodyAct.xy,
    ref: bodyRef.rgb,
    actual: bodyAct.rgb,
  },
  pillBorder: {
    xy: [100, 368],
    ref: sampleRgb(ref, 100, 368),
    actual: sampleRgb(actual, 100, 368),
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

const report = {
  site: SITE,
  viewport: { width: W, height: H },
  pixelmatchOptions: PM_OPTS,
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
  paintedBounds,
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
    measurement: "MEASUREMENT.md",
  },
};

writeFileSync(resolve(OUT, "report.json"), JSON.stringify(report, null, 2));

const md = [];
md.push("# Workflow mock visual QA - measurement delta table");
md.push("");
md.push(`Canvas: **1024x467** | Generated from capture at \`${SITE}\``);
md.push("");
md.push("## Control");
md.push("");
md.push("| Check | Result |");
md.push("|---|---|");
md.push(`| actual vs actual mismatched | **${control.mismatched}** |`);
md.push(`| amplified hot pixels | **${controlHot}** |`);
md.push(`| overall mismatch | **${(mismatched / (W * H) * 100).toFixed(2)}%** (${mismatched} px) |`);
md.push("");
md.push("## Pixelmatch options");
md.push("");
md.push("```json");
md.push(JSON.stringify(PM_OPTS, null, 2));
md.push("```");
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
md.push("## Per-element painted bounds delta");
md.push("");
md.push("| Element | Reference x,y w x h | Actual x,y w x h | Delta x,y w x h |");
md.push("|---|---|---|---|");
for (const row of elementDeltas) {
  md.push(
    `| ${row.element} | ${fmtBox(row.ref)} | ${fmtBox(row.actual)} | ${fmtDelta(row.delta)} |`,
  );
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
md.push("## Crops");
md.push("");
md.push("Nearest-neighbor 4× ref/actual/diff under `crops/`.");
writeFileSync(resolve(OUT, "MEASUREMENT.md"), md.join("\n"));

console.log(JSON.stringify(report, null, 2));

await browser.close();

process.exit(mismatched / (W * H) > 0.45 ? 2 : 0);

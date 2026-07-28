/**
 * Pixel comparison of /dev/workflow-visual-qa against the native 1024×467 mock.
 *
 * Usage:
 *   SITE=http://localhost:3017 node scripts/workflow-mock-pixel-qa.mjs
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

const SITE = (process.env.SITE || "http://localhost:3017").replace(/\/$/, "");
const OUT = resolve("screenshots/workflow-mock-pixel-qa");
const REF_JPG = resolve("docs/design-system/workflow-mock/reference-native.jpg");
mkdirSync(OUT, { recursive: true });

const W = 1024;
const H = 467;

function loadPng(path) {
  return PNG.sync.read(readFileSync(path));
}

function writePng(path, png) {
  writeFileSync(path, PNG.sync.write(png));
}

async function jpegToPngViaPlaywright(page, jpegPath, outPngPath) {
  const b64 = readFileSync(jpegPath).toString("base64");
  await page.setViewportSize({ width: W, height: H });
  await page.setContent(`<!doctype html><html><body style="margin:0;background:#000">
    <img id="r" src="data:image/jpeg;base64,${b64}" width="${W}" height="${H}" style="display:block"/>
  </body></html>`);
  await page.waitForTimeout(100);
  await page.locator("#r").screenshot({ path: outPngPath });
}

function amplifyDiff(diffPng) {
  const out = new PNG({ width: diffPng.width, height: diffPng.height });
  for (let i = 0; i < diffPng.data.length; i += 4) {
    const hot = diffPng.data[i] > 0 || diffPng.data[i + 1] > 0;
    if (hot) {
      out.data[i] = 255;
      out.data[i + 1] = 40;
      out.data[i + 2] = 40;
      out.data[i + 3] = 255;
    } else {
      out.data[i] = 12;
      out.data[i + 1] = 12;
      out.data[i + 2] = 12;
      out.data[i + 3] = 255;
    }
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

function compareRegion(ref, actual, region, name) {
  const r = crop(ref, region);
  const a = crop(actual, region);
  const d = new PNG({ width: region.w, height: region.h });
  const mismatched = pixelmatch(r.data, a.data, d.data, region.w, region.h, {
    threshold: 0.12,
    includeAA: true,
  });
  writePng(resolve(OUT, `region-${name}-diff.png`), amplifyDiff(d));
  return {
    name,
    region,
    mismatched,
    total: region.w * region.h,
    ratio: mismatched / (region.w * region.h),
  };
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: W, height: H },
  deviceScaleFactor: 1,
});

// Normalize reference JPEG → PNG at exact canvas size
const refPngPath = resolve(OUT, "reference-normalized.png");
await jpegToPngViaPlaywright(page, REF_JPG, refPngPath);
copyFileSync(REF_JPG, resolve(OUT, "reference-native.jpg"));

// Capture harness
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
await page.waitForTimeout(500);

const section = page.locator("#process");
await section.waitFor({ state: "visible" });
const actualPath = resolve(OUT, "actual.png");
await page.screenshot({ path: actualPath, animations: "disabled" });

const ref = loadPng(refPngPath);
const actual = loadPng(actualPath);

if (ref.width !== actual.width || ref.height !== actual.height) {
  console.error("Size mismatch", {
    ref: { w: ref.width, h: ref.height },
    actual: { w: actual.width, h: actual.height },
  });
}

const diff = new PNG({ width: W, height: H });
const mismatched = pixelmatch(ref.data, actual.data, diff.data, W, H, {
  threshold: 0.12,
  includeAA: true,
});

writePng(resolve(OUT, "diff-amplified.png"), amplifyDiff(diff));
writePng(resolve(OUT, "overlay-50.png"), overlay(ref, actual, 0.5));
writePng(resolve(OUT, "side-by-side.png"), sideBySide(ref, actual));

const regions = [
  { name: "heading", x: 120, y: 30, w: 780, h: 120 },
  { name: "stage-01", x: 85, y: 170, w: 174, h: 229 },
  { name: "stage-02", x: 283, y: 170, w: 229, h: 229 },
  { name: "stage-03", x: 536, y: 170, w: 217, h: 229 },
  { name: "stage-04", x: 777, y: 170, w: 145, h: 229 },
  { name: "connector-01-02", x: 250, y: 230, w: 40, h: 24 },
  { name: "connector-02-03", x: 505, y: 230, w: 40, h: 24 },
  { name: "connector-03-04", x: 745, y: 230, w: 40, h: 24 },
  { name: "chat", x: 960, y: 400, w: 60, h: 60 },
  { name: "bottom-line", x: 0, y: 455, w: 1024, h: 12 },
];

const regionResults = regions.map((r) => compareRegion(ref, actual, r, r.name));

const report = {
  site: SITE,
  viewport: { width: W, height: H },
  mismatchedPixels: mismatched,
  totalPixels: W * H,
  mismatchRatio: mismatched / (W * H),
  regions: regionResults,
  artifacts: {
    actual: "actual.png",
    reference: "reference-normalized.png",
    overlay: "overlay-50.png",
    diff: "diff-amplified.png",
    sideBySide: "side-by-side.png",
  },
};

writeFileSync(resolve(OUT, "report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));

// Also capture homepage process at common viewports for review (not pixel-gated)
for (const vp of [
  { name: "home-1440", width: 1440, height: 900 },
  { name: "home-390", width: 390, height: 844 },
]) {
  const p = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  await p.goto(SITE, { waitUntil: "networkidle", timeout: 90_000 });
  await p.waitForTimeout(400);
  await p.locator("#process").screenshot({
    path: resolve(OUT, `${vp.name}-process.png`),
  });
  await p.close();
}

await browser.close();

// Non-zero exit if grossly mismatched (informational; visual approval still required)
process.exit(mismatched / (W * H) > 0.35 ? 2 : 0);

/**
 * Reliable element measurement for workflow visual QA.
 *
 * Actual:
 *   - DOM getBoundingClientRect relative to #process (layout boxes)
 *   - Sequential unique-color paint for ink (text/SVG), with full restore
 * Reference:
 *   - Same curated tight ROIs on the reference PNG
 * Actual ink (symmetric check):
 *   - Same curated ROIs on the actual PNG (apples-to-apples painted bounds)
 */
import { PNG } from "pngjs";

const QA_RGB = [255, 0, 220];

/** Layout boxes — measured via DOM. */
export const DOM_SELECTORS = [
  "heading-eyebrow",
  "heading-title",
  "heading-support",
  ...["01", "02", "03", "04"].flatMap((s) => [
    `stage-${s}-card`,
    `stage-${s}-number`,
    `stage-${s}-icon-frame`,
    `stage-${s}-symbol`,
    `stage-${s}-title`,
    `stage-${s}-body`,
    `stage-${s}-body-line-0`,
    `stage-${s}-body-line-1`,
    `stage-${s}-body-line-2`,
    `stage-${s}-pill`,
    `stage-${s}-pill-icon`,
    `stage-${s}-pill-label`,
    `stage-${s}-rear-panel`,
    `stage-${s}-glow`,
    `stage-${s}-visual`,
  ]),
  "stage-02-sidebar",
  "stage-02-divider",
  "stage-02-active-dot",
  "stage-02-sidebar-row-0",
  "stage-02-sidebar-row-1",
  "stage-02-content-bar-0",
  "stage-02-content-bar-1",
  "stage-02-lower-block-0",
  "stage-02-lower-block-1",
  "stage-02-lower-block-2",
  "stage-03-row-0",
  "stage-03-row-1",
  "stage-03-row-2",
  "stage-03-check-0",
  "stage-03-check-1",
  "stage-03-check-2",
  "stage-03-bar-a-0",
  "stage-03-bar-b-0",
  "stage-03-right-edge",
  "connector-1-line",
  "connector-1-node",
  "connector-1-dot",
  "connector-2-line",
  "connector-2-node",
  "connector-2-dot",
  "connector-3-line",
  "connector-3-node",
  "connector-3-dot",
];

/** Ink elements — sequential unique-color paint isolation. */
export const PAINT_SELECTORS = [
  "heading-eyebrow",
  "heading-title",
  "heading-support",
  "stage-01-number",
  "stage-01-symbol",
  "stage-01-title",
  "stage-01-body-line-0",
  "stage-01-body-line-1",
  "stage-01-body-line-2",
  "stage-01-pill-icon",
  "stage-01-pill-label",
  "stage-02-number",
  "stage-02-symbol",
  "stage-02-active-dot",
  "stage-02-title",
  "stage-02-body-line-0",
  "stage-02-body-line-1",
  "stage-02-body-line-2",
  "stage-02-pill-icon",
  "stage-02-pill-label",
  "stage-03-number",
  "stage-03-symbol",
  "stage-03-check-0",
  "stage-03-check-1",
  "stage-03-check-2",
  "stage-03-title",
  "stage-03-body-line-0",
  "stage-03-body-line-1",
  "stage-03-body-line-2",
  "stage-03-pill-icon",
  "stage-03-pill-label",
  "stage-04-number",
  "stage-04-symbol",
  "stage-04-title",
  "stage-04-body-line-0",
  "stage-04-body-line-1",
  "stage-04-body-line-2",
  "stage-04-pill-icon",
  "stage-04-pill-label",
  "connector-1-line",
  "connector-1-node",
  "connector-1-dot",
  "connector-2-line",
  "connector-2-node",
  "connector-2-dot",
  "connector-3-line",
  "connector-3-node",
  "connector-3-dot",
];

/**
 * Curated ROIs — windows small enough that extraction cannot merge neighbors.
 * Applied to BOTH reference and actual PNGs for symmetric painted bounds.
 */
export const REFERENCE_ROIS = {
  "heading-eyebrow": { x: 420, y: 47, w: 185, h: 12, mode: "red" },
  "heading-title": { x: 280, y: 72, w: 470, h: 34, mode: "white180" },
  "heading-support": { x: 288, y: 113, w: 460, h: 16, mode: "gray" },
  "stage-01-number": { x: 98, y: 186, w: 24, h: 20, mode: "red" },
  "stage-01-symbol": { x: 108, y: 220, w: 36, h: 36, mode: "red" },
  "stage-01-icon-frame": { x: 96, y: 210, w: 56, h: 56, mode: "edge" },
  "stage-01-title": { x: 98, y: 282, w: 120, h: 22, mode: "white170" },
  "stage-01-body-line-0": { x: 98, y: 303, w: 120, h: 13, mode: "gray" },
  "stage-01-body-line-1": { x: 98, y: 316, w: 120, h: 13, mode: "gray" },
  "stage-01-body-line-2": { x: 98, y: 329, w: 120, h: 13, mode: "gray" },
  "stage-01-pill": { x: 96, y: 362, w: 110, h: 22, mode: "edge" },
  "stage-01-pill-icon": { x: 100, y: 364, w: 16, h: 16, mode: "red" },
  "stage-01-pill-label": { x: 116, y: 366, w: 85, h: 14, mode: "gray" },
  "stage-02-number": { x: 295, y: 186, w: 28, h: 20, mode: "red" },
  "stage-02-symbol": { x: 300, y: 218, w: 36, h: 36, mode: "red" },
  "stage-02-icon-frame": { x: 292, y: 208, w: 56, h: 56, mode: "edge" },
  "stage-02-rear-panel": { x: 318, y: 200, w: 170, h: 72, mode: "edge" },
  "stage-02-active-dot": { x: 322, y: 205, w: 20, h: 24, mode: "red" },
  "stage-02-title": { x: 296, y: 282, w: 140, h: 22, mode: "white170" },
  "stage-02-body-line-0": { x: 296, y: 303, w: 140, h: 13, mode: "gray" },
  "stage-02-body-line-1": { x: 296, y: 316, w: 140, h: 13, mode: "gray" },
  "stage-02-body-line-2": { x: 296, y: 329, w: 140, h: 13, mode: "gray" },
  "stage-02-pill": { x: 294, y: 362, w: 150, h: 22, mode: "edge" },
  "stage-02-pill-icon": { x: 298, y: 364, w: 16, h: 16, mode: "red" },
  "stage-02-pill-label": { x: 314, y: 366, w: 125, h: 14, mode: "gray" },
  "stage-03-number": { x: 548, y: 186, w: 28, h: 20, mode: "red" },
  "stage-03-symbol": { x: 554, y: 218, w: 36, h: 36, mode: "red" },
  "stage-03-icon-frame": { x: 546, y: 208, w: 56, h: 56, mode: "edge" },
  "stage-03-rear-panel": { x: 572, y: 200, w: 160, h: 72, mode: "edge" },
  "stage-03-check-0": { x: 580, y: 208, w: 24, h: 20, mode: "red" },
  "stage-03-check-1": { x: 580, y: 228, w: 24, h: 20, mode: "red" },
  "stage-03-check-2": { x: 580, y: 248, w: 24, h: 20, mode: "red" },
  "stage-03-title": { x: 548, y: 282, w: 140, h: 22, mode: "white170" },
  "stage-03-body-line-0": { x: 548, y: 303, w: 140, h: 13, mode: "gray" },
  "stage-03-body-line-1": { x: 548, y: 316, w: 140, h: 13, mode: "gray" },
  "stage-03-body-line-2": { x: 548, y: 329, w: 140, h: 13, mode: "gray" },
  "stage-03-pill": { x: 546, y: 362, w: 160, h: 22, mode: "edge" },
  "stage-03-pill-icon": { x: 550, y: 364, w: 16, h: 16, mode: "red" },
  "stage-03-pill-label": { x: 566, y: 366, w: 135, h: 14, mode: "gray" },
  "stage-04-number": { x: 790, y: 186, w: 28, h: 20, mode: "red" },
  "stage-04-symbol": { x: 800, y: 220, w: 34, h: 34, mode: "red" },
  "stage-04-icon-frame": { x: 790, y: 210, w: 52, h: 52, mode: "edge" },
  "stage-04-title": { x: 790, y: 282, w: 128, h: 22, mode: "white170" },
  "stage-04-body-line-0": { x: 790, y: 303, w: 128, h: 13, mode: "gray" },
  "stage-04-body-line-1": { x: 790, y: 316, w: 128, h: 13, mode: "gray" },
  "stage-04-body-line-2": { x: 790, y: 329, w: 128, h: 13, mode: "gray" },
  "stage-04-pill": { x: 788, y: 362, w: 120, h: 22, mode: "edge" },
  "stage-04-pill-icon": { x: 792, y: 364, w: 16, h: 16, mode: "red" },
  "stage-04-pill-label": { x: 808, y: 366, w: 95, h: 14, mode: "gray" },
  "connector-1-line": { x: 246, y: 236, w: 30, h: 8, mode: "red" },
  "connector-1-node": { x: 254, y: 233, w: 16, h: 14, mode: "red" },
  "connector-1-dot": { x: 258, y: 236, w: 8, h: 8, mode: "red" },
  "connector-2-line": { x: 508, y: 236, w: 24, h: 8, mode: "red" },
  "connector-2-node": { x: 512, y: 233, w: 16, h: 14, mode: "red" },
  "connector-2-dot": { x: 516, y: 236, w: 8, h: 8, mode: "red" },
  "connector-3-line": { x: 750, y: 236, w: 24, h: 8, mode: "red" },
  "connector-3-node": { x: 756, y: 233, w: 16, h: 14, mode: "red" },
  "connector-3-dot": { x: 760, y: 236, w: 8, h: 8, mode: "red" },
};

function sample(png, x, y) {
  const i = (y * png.width + x) * 4;
  return [png.data[i], png.data[i + 1], png.data[i + 2], png.data[i + 3]];
}

function matchesMode(r, g, b, mode) {
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  if (mode === "red") return r > 70 && r > g * 1.2 && r > b * 1.2;
  if (mode === "white180") return L >= 180;
  if (mode === "white170") return L >= 170;
  if (mode === "gray") return L > 70 && L < 165 && !(r > 80 && r > g * 1.25);
  if (mode === "edge") return L > 26 && L < 72;
  return false;
}

export function measureRoi(png, roi) {
  const { x, y, w, h, mode } = roi;
  let minX = x + w;
  let minY = y + h;
  let maxX = x;
  let maxY = y;
  let count = 0;
  for (let yy = y; yy < y + h; yy++) {
    for (let xx = x; xx < x + w; xx++) {
      if (xx < 0 || yy < 0 || xx >= png.width || yy >= png.height) continue;
      const [r, g, b] = sample(png, xx, yy);
      if (!matchesMode(r, g, b, mode)) continue;
      count += 1;
      minX = Math.min(minX, xx);
      minY = Math.min(minY, yy);
      maxX = Math.max(maxX, xx);
      maxY = Math.max(maxY, yy);
    }
  }
  if (!count) return null;
  return {
    x: minX,
    y: minY,
    w: maxX - minX + 1,
    h: maxY - minY + 1,
    count,
    method: `roi:${mode}`,
  };
}

export function measureAllReferenceRois(png) {
  const out = {};
  for (const [name, roi] of Object.entries(REFERENCE_ROIS)) {
    out[name] = measureRoi(png, roi);
  }
  return out;
}

export async function measureDomBounds(page) {
  return page.evaluate((names) => {
    const section = document.querySelector("#process");
    if (!section) return {};
    const sr = section.getBoundingClientRect();
    const out = {};
    for (const name of names) {
      const el = document.querySelector(`[data-qa="${name}"]`);
      if (!el) {
        out[name] = null;
        continue;
      }
      const r = el.getBoundingClientRect();
      if (r.width < 0.5 || r.height < 0.5) {
        out[name] = null;
        continue;
      }
      out[name] = {
        x: Math.round(r.left - sr.left),
        y: Math.round(r.top - sr.top),
        w: Math.round(r.width),
        h: Math.round(r.height),
        method: "dom",
      };
    }
    return out;
  }, DOM_SELECTORS);
}

function extractQaColorBounds(png) {
  let minX = png.width;
  let minY = png.height;
  let maxX = 0;
  let maxY = 0;
  let count = 0;
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const i = (y * png.width + x) * 4;
      const r = png.data[i];
      const g = png.data[i + 1];
      const b = png.data[i + 2];
      // Hot magenta QA paint
      if (r > 200 && g < 90 && b > 150) {
        count += 1;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    }
  }
  if (!count) return null;
  return {
    x: minX,
    y: minY,
    w: maxX - minX + 1,
    h: maxY - minY + 1,
    count,
    method: "paint-isolation",
  };
}

/**
 * Snapshot every attribute/style we may mutate, including SVG descendants.
 */
async function paintElement(page, name) {
  return page.evaluate(
    ({ name: qaName, rgb }) => {
      const el = document.querySelector(`[data-qa="${qaName}"]`);
      if (!el) return false;
      const css = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
      const snap = [];
      const nodes = [el, ...el.querySelectorAll("*")];
      for (const node of nodes) {
        snap.push({
          stroke: node.getAttribute("stroke"),
          fill: node.getAttribute("fill"),
          style: node.getAttribute("style"),
          className: node.getAttribute("class"),
        });
      }
      window.__qaSnap = { name: qaName, snap };
      const hadFillBg = (() => {
        const bg = getComputedStyle(el).backgroundColor;
        return Boolean(bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent");
      })();
      el.style.setProperty("color", css, "important");
      el.style.setProperty("-webkit-text-fill-color", css, "important");
      el.style.setProperty("border-color", css, "important");
      el.style.setProperty("box-shadow", "none", "important");
      el.style.setProperty("text-shadow", "none", "important");
      el.style.setProperty("filter", "none", "important");
      el.style.setProperty("opacity", "1", "important");
      // Only recolor filled chrome (dots/checks). Never flood text layout boxes.
      if (hadFillBg) {
        el.style.setProperty("background-color", css, "important");
      }
      for (const node of nodes) {
        if (
          node.tagName === "circle" ||
          node.tagName === "rect" ||
          node.tagName === "ellipse" ||
          node.tagName === "path" ||
          node.tagName === "svg" ||
          node instanceof SVGElement
        ) {
          node.setAttribute("stroke", css);
          const f = node.getAttribute("fill");
          if (f && f !== "none") node.setAttribute("fill", css);
        }
      }
      return true;
    },
    { name, rgb: QA_RGB },
  );
}

async function restoreElement(page) {
  await page.evaluate(() => {
    const state = window.__qaSnap;
    if (!state) return;
    const el = document.querySelector(`[data-qa="${state.name}"]`);
    if (!el) return;
    const nodes = [el, ...el.querySelectorAll("*")];
    nodes.forEach((node, i) => {
      const prev = state.snap[i];
      if (!prev) return;
      if (prev.stroke == null) node.removeAttribute("stroke");
      else node.setAttribute("stroke", prev.stroke);
      if (prev.fill == null) node.removeAttribute("fill");
      else node.setAttribute("fill", prev.fill);
      if (prev.style == null) node.removeAttribute("style");
      else node.setAttribute("style", prev.style);
    });
    window.__qaSnap = null;
  });
}

/**
 * Sequential unique-color isolation — one primitive at a time.
 * Full descendant snapshot restore prevents QA-color leakage.
 */
export async function measurePaintIsolation(page, sectionLocator) {
  const out = {};
  for (const name of PAINT_SELECTORS) {
    const ok = await paintElement(page, name);
    if (!ok) {
      out[name] = null;
      continue;
    }
    const shot = await sectionLocator.screenshot({ type: "png" });
    const png = PNG.sync.read(shot);
    out[name] = extractQaColorBounds(png);
    await restoreElement(page);
  }
  return out;
}

export function delta(refB, actB) {
  if (!refB && !actB) return null;
  const z = { x: 0, y: 0, w: 0, h: 0 };
  const r = refB || z;
  const a = actB || z;
  return {
    x: (a.x || 0) - (r.x || 0),
    y: (a.y || 0) - (r.y || 0),
    w: (a.w || 0) - (r.w || 0),
    h: (a.h || 0) - (r.h || 0),
  };
}

export function fmtBox(b) {
  if (!b) return "-";
  return `${b.x},${b.y} ${b.w}×${b.h}`;
}

export function fmtDelta(d) {
  if (!d) return "-";
  const s = (n) => (n > 0 ? `+${n}` : `${n}`);
  return `${s(d.x)},${s(d.y)} ${s(d.w)}×${s(d.h)}`;
}

/**
 * Comparison priority for the delta table:
 * 1) Symmetric ROI (ref PNG vs actual PNG) — preferred for painted ink
 * 2) Actual paint-isolation vs ref ROI
 * 3) DOM for chrome boxes
 */
export function preferActual(key, { roiActual, paint, dom }) {
  const chrome =
    (key.includes("-pill") &&
      !key.includes("pill-icon") &&
      !key.includes("pill-label")) ||
    key.includes("icon-frame") ||
    key.includes("rear-panel") ||
    key.includes("card") ||
    key.includes("check-") ||
    key.includes("active-dot");
  if (chrome) return dom || roiActual || paint || null;
  // Reject microscopic paint hits (dark strokes can under-detect).
  const paintOk =
    paint && paint.count >= 20 && paint.w >= 6 && paint.h >= 6 ? paint : null;
  return roiActual || paintOk || dom || null;
}

/**
 * Workflow visual QA measurement.
 *
 * Dual reporting (never conflated):
 *   - geometric bounds (DOM for actual; curated mask geometry for reference)
 *   - painted-ink bounds (unique-color isolation for actual; mask+mode for reference)
 *
 * QA fails when expected visible primitives return null / implausible ink.
 */
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";

const QA_RGB = [255, 0, 220];
const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, "../..");
const MASKS_PATH = resolve(
  ROOT,
  "docs/design-system/workflow-mock/reference-masks.json",
);

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

/** Must succeed paint-isolation with plausible ink. */
export const REQUIRED_PAINT = [
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

export function loadReferenceMasks() {
  return JSON.parse(readFileSync(MASKS_PATH, "utf8"));
}

function sample(png, x, y) {
  const i = (y * png.width + x) * 4;
  return [png.data[i], png.data[i + 1], png.data[i + 2], png.data[i + 3]];
}

function matchesMode(r, g, b, mode) {
  const L = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  if (mode === "red") return r > 70 && r > g * 1.2 && r > b * 1.2;
  if (mode === "connector")
    return r > 55 && r >= g * 1.05 && r >= b * 1.05 && L < 170;
  if (mode === "mutedRed")
    return r > 28 && r < 140 && r >= g && r >= b * 0.85 && r - Math.min(g, b) >= 4;
  if (mode === "white180") return L >= 180;
  if (mode === "white170") return L >= 170;
  if (mode === "gray") return L > 70 && L < 165 && !(r > 80 && r > g * 1.25);
  if (mode === "edge") return L > 26 && L < 72;
  if (mode === "dark") return L < 28;
  if (mode === "glow")
    return r > 40 && r < 90 && g < 45 && b < 45 && r > g && r > b;
  return false;
}

function geometricBox(geo) {
  if (geo.type === "rect") {
    return { x: geo.x, y: geo.y, w: geo.w, h: geo.h, method: "mask-geometry" };
  }
  if (geo.type === "disk") {
    const r = Math.ceil(geo.r);
    return {
      x: Math.round(geo.cx - r),
      y: Math.round(geo.cy - r),
      w: r * 2 + 1,
      h: r * 2 + 1,
      method: "mask-geometry",
    };
  }
  if (geo.type === "annulus") {
    const r = Math.ceil(geo.rOuter);
    return {
      x: Math.round(geo.cx - r),
      y: Math.round(geo.cy - r),
      w: r * 2 + 1,
      h: r * 2 + 1,
      method: "mask-geometry",
    };
  }
  return null;
}

function insideGeometry(geo, x, y) {
  if (geo.type === "rect") {
    return x >= geo.x && y >= geo.y && x < geo.x + geo.w && y < geo.y + geo.h;
  }
  if (geo.type === "disk") {
    return Math.hypot(x - geo.cx, y - geo.cy) <= geo.r;
  }
  if (geo.type === "annulus") {
    const d = Math.hypot(x - geo.cx, y - geo.cy);
    return d <= geo.rOuter && d >= geo.rInner;
  }
  return false;
}

/** Painted-ink bounds inside a curated mask. */
export function measureMaskInk(png, geo, mode) {
  const box = geometricBox(geo);
  if (!box) return null;
  let minX = box.x + box.w;
  let minY = box.y + box.h;
  let maxX = box.x;
  let maxY = box.y;
  let count = 0;
  for (let y = box.y; y < box.y + box.h; y++) {
    for (let x = box.x; x < box.x + box.w; x++) {
      if (x < 0 || y < 0 || x >= png.width || y >= png.height) continue;
      if (!insideGeometry(geo, x, y)) continue;
      const [r, g, b] = sample(png, x, y);
      if (!matchesMode(r, g, b, mode)) continue;
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
    method: `mask-ink:${mode}`,
  };
}

/** Write magenta overlay of mask geometry + ink hits for audit. */
export function writeMaskAudit(png, name, geo, mode, outDir) {
  mkdirSync(outDir, { recursive: true });
  const box = geometricBox(geo);
  if (!box) return;
  const pad = 6;
  const x0 = Math.max(0, box.x - pad);
  const y0 = Math.max(0, box.y - pad);
  const w = Math.min(png.width - x0, box.w + pad * 2);
  const h = Math.min(png.height - y0, box.h + pad * 2);
  const out = new PNG({ width: w, height: h });
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const sx = x0 + x;
      const sy = y0 + y;
      const i = (y * w + x) * 4;
      const [r, g, b] = sample(png, sx, sy);
      const inGeo = insideGeometry(geo, sx, sy);
      const ink = inGeo && matchesMode(r, g, b, mode);
      if (ink) {
        out.data[i] = 255;
        out.data[i + 1] = 0;
        out.data[i + 2] = 220;
        out.data[i + 3] = 255;
      } else if (inGeo) {
        out.data[i] = Math.min(255, r + 40);
        out.data[i + 1] = Math.min(255, g + 20);
        out.data[i + 2] = Math.min(255, b + 40);
        out.data[i + 3] = 255;
      } else {
        out.data[i] = r;
        out.data[i + 1] = g;
        out.data[i + 2] = b;
        out.data[i + 3] = 255;
      }
    }
  }
  writeFileSync(resolve(outDir, `${name}.png`), PNG.sync.write(out));
}

export function measureAllReferenceMasks(png, maskDoc, auditDir) {
  const geometric = {};
  const ink = {};
  const geometryOnly = {};
  for (const [name, spec] of Object.entries(maskDoc.primitives)) {
    geometric[name] = geometricBox(spec.geometric);
    geometryOnly[name] = Boolean(spec.geometryOnly);
    if (spec.geometryOnly) {
      ink[name] = null;
      if (auditDir) {
        // Audit shows geometric mask only (no inkMode extraction).
        writeMaskAudit(png, name, spec.geometric, "edge", auditDir);
      }
      continue;
    }
    ink[name] = measureMaskInk(png, spec.geometric, spec.inkMode);
    if (auditDir) {
      writeMaskAudit(png, name, spec.geometric, spec.inkMode, auditDir);
    }
  }
  return { geometric, ink, geometryOnly };
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
        method: "dom-geometry",
      };
    }
    return out;
  }, DOM_SELECTORS);
}

function isQaMagenta(r, g, b) {
  // Unique QA color 255,0,220 — must NOT match brand reds (high R, low B).
  return r > 190 && b > 160 && g < 90 && b > r * 0.55 && r - g > 100;
}

/** Diff painted frame vs clean baseline inside a padded DOM box. */
function extractDiffBounds(cleanPng, paintedPng, box, pad = 4) {
  if (!box) return null;
  const x0 = Math.max(0, box.x - pad);
  const y0 = Math.max(0, box.y - pad);
  const x1 = Math.min(cleanPng.width - 1, box.x + box.w + pad);
  const y1 = Math.min(cleanPng.height - 1, box.y + box.h + pad);
  let minX = x1;
  let minY = y1;
  let maxX = x0;
  let maxY = y0;
  let count = 0;
  for (let y = y0; y <= y1; y++) {
    for (let x = x0; x <= x1; x++) {
      const i = (y * cleanPng.width + x) * 4;
      const pr = paintedPng.data[i];
      const pg = paintedPng.data[i + 1];
      const pb = paintedPng.data[i + 2];
      const dr = Math.abs(pr - cleanPng.data[i]);
      const dg = Math.abs(pg - cleanPng.data[i + 1]);
      const db = Math.abs(pb - cleanPng.data[i + 2]);
      const magenta = isQaMagenta(pr, pg, pb);
      const changed = dr + dg + db >= 90;
      if (!magenta && !changed) continue;
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
    method: "paint-diff-isolation",
  };
}

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
          strokeWidth: node.getAttribute("stroke-width"),
        });
      }
      window.__qaSnap = { name: qaName, snap };

      const cs = getComputedStyle(el);
      const hadFillBg =
        cs.backgroundColor &&
        cs.backgroundColor !== "rgba(0, 0, 0, 0)" &&
        cs.backgroundColor !== "transparent";

      el.style.setProperty("color", css, "important");
      el.style.setProperty("-webkit-text-fill-color", css, "important");
      el.style.setProperty("border-color", css, "important");
      el.style.setProperty("outline", "none", "important");
      el.style.setProperty("box-shadow", "none", "important");
      el.style.setProperty("text-shadow", "none", "important");
      el.style.setProperty("filter", "none", "important");
      el.style.setProperty("opacity", "1", "important");
      const forceFill =
        hadFillBg ||
        qaName.includes("active-dot") ||
        qaName.endsWith("-dot") ||
        qaName.includes("check-");
      if (forceFill) {
        el.style.setProperty("background-color", css, "important");
        el.style.setProperty("background", css, "important");
        el.style.setProperty("box-shadow", `0 0 0 2px ${css}`, "important");
      }

      for (const node of nodes) {
        const tag = node.tagName?.toLowerCase?.() || "";
        const isSvg =
          node instanceof SVGElement ||
          ["svg", "path", "circle", "rect", "ellipse", "line", "polyline", "polygon", "g"].includes(
            tag,
          );
        if (!isSvg) continue;
        node.style.setProperty("stroke", css, "important");
        node.style.setProperty("color", css, "important");
        node.style.setProperty("fill", "none", "important");
        node.setAttribute("stroke", css);
        const f = node.getAttribute("fill");
        if (f && f !== "none") {
          node.setAttribute("fill", css);
          node.style.setProperty("fill", css, "important");
        } else {
          node.setAttribute("fill", "none");
        }
      }

      el.querySelectorAll("svg").forEach((svg) => {
        svg.setAttribute("stroke", css);
        svg.style.setProperty("color", css, "important");
        svg.style.setProperty("stroke", css, "important");
        svg.querySelectorAll("*").forEach((child) => {
          child.setAttribute("stroke", css);
          child.style.setProperty("stroke", css, "important");
          child.style.setProperty("color", css, "important");
        });
      });

      // Scoped style: only this primitive + descendants (not whole page reds)
      const style = document.createElement("style");
      style.setAttribute("data-qa-paint", qaName);
      style.textContent = `
        [data-qa="${qaName}"] {
          color: ${css} !important;
          -webkit-text-fill-color: ${css} !important;
          border-color: ${css} !important;
        }
        [data-qa="${qaName}"] svg,
        [data-qa="${qaName}"] svg * {
          stroke: ${css} !important;
          color: ${css} !important;
        }
      `;
      document.head.appendChild(style);
      window.__qaSnap.styleTag = style;

      return true;
    },
    { name, rgb: QA_RGB },
  );
}

async function restoreElement(page) {
  await page.evaluate(() => {
    const state = window.__qaSnap;
    if (!state) return;
    if (state.styleTag?.parentNode) state.styleTag.parentNode.removeChild(state.styleTag);
    document.querySelectorAll(`style[data-qa-paint="${state.name}"]`).forEach((n) => n.remove());
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
      if (prev.strokeWidth == null) node.removeAttribute("stroke-width");
      else node.setAttribute("stroke-width", prev.strokeWidth);
      if (prev.style == null) node.removeAttribute("style");
      else node.setAttribute("style", prev.style);
    });
    window.__qaSnap = null;
  });
}

export async function measurePaintIsolation(page, sectionLocator, domBounds) {
  const cleanShot = await sectionLocator.screenshot({ type: "png" });
  const cleanPng = PNG.sync.read(cleanShot);
  const out = {};
  for (const name of REQUIRED_PAINT) {
    const ok = await paintElement(page, name);
    if (!ok) {
      out[name] = null;
      continue;
    }
    const shot = await sectionLocator.screenshot({ type: "png" });
    const painted = PNG.sync.read(shot);
    out[name] = extractDiffBounds(cleanPng, painted, domBounds?.[name] || null, 6);
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
 * Validate isolation quality. Returns { ok, failures[] }.
 * Measurement generation must fail when ok is false.
 */
export function validateIsolation({
  paintBounds,
  domBounds,
  refInk,
  refGeometric,
  geometryOnly = {},
  maskDoc = null,
}) {
  const failures = [];

  // Expected reference painted primitives cannot silently miss ink.
  if (maskDoc?.primitives) {
    for (const [name, spec] of Object.entries(maskDoc.primitives)) {
      if (spec.geometryOnly) continue;
      if (!spec.inkMode) continue;
      if (!refInk[name]) {
        failures.push({
          name,
          rule: "ref-ink-miss",
          detail:
            "expected reference painted-ink returned null; fix inkMode or mark geometryOnly",
        });
      }
    }
  }

  for (const name of REQUIRED_PAINT) {
    // Geometry-only primitives still require actual paint isolation for implementation QA.
    void geometryOnly;
    const paint = paintBounds[name];
    if (!paint) {
      failures.push({ name, rule: "paint-null", detail: "expected visible paint-isolation returned null" });
      continue;
    }
    const minCount =
      name.endsWith("-dot") || name.includes("active-dot")
        ? 3
        : name.includes("check-")
          ? 6
          : name.includes("pill-icon")
            ? 8
            : 8;
    if (paint.count < minCount) {
      failures.push({
        name,
        rule: "paint-too-few",
        detail: `count=${paint.count} box=${fmtBox(paint)} (min ${minCount})`,
      });
    }
    if (name.includes("pill-icon")) {
      const dom = domBounds[name];
      if (dom && paint) {
        const areaRatio = (paint.w * paint.h) / (dom.w * dom.h);
        if (areaRatio < 0.15 || areaRatio > 1.35) {
          failures.push({
            name,
            rule: "pill-icon-area",
            detail: `paint/dom area ratio ${areaRatio.toFixed(3)} (paint ${fmtBox(paint)} dom ${fmtBox(dom)})`,
          });
        }
      }
    }
    if (name.includes("connector") && (name.includes("node") || name.includes("dot"))) {
      if (paint.w / Math.max(1, paint.h) >= 8 || paint.h / Math.max(1, paint.w) >= 8) {
        failures.push({
          name,
          rule: "connector-aspect",
          detail: `extreme aspect ${paint.w}:${paint.h}`,
        });
      }
    }
  }

  // Reference connector nodes/dots cannot be flat slices
  for (const name of [
    "connector-1-node",
    "connector-1-dot",
    "connector-2-node",
    "connector-2-dot",
    "connector-3-node",
    "connector-3-dot",
  ]) {
    const ink = refInk[name];
    const geo = refGeometric[name];
    if (!geo) {
      failures.push({ name, rule: "ref-geo-missing", detail: "mask geometry missing" });
      continue;
    }
    if (geo.w / Math.max(1, geo.h) >= 4 || geo.h / Math.max(1, geo.w) >= 4) {
      failures.push({
        name,
        rule: "ref-geo-aspect",
        detail: `geometric mask not circular-ish ${fmtBox(geo)}`,
      });
    }
    // JPEG connector rings often yield sparse ink; geometric mask is authoritative.
    // Record slice ink as a soft warning only (not a hard failure).
    if (ink && (ink.w / Math.max(1, ink.h) >= 8 || ink.h / Math.max(1, ink.w) >= 8)) {
      failures.push({
        name,
        rule: "ref-ink-slice-soft",
        detail: `reference ink sparse/slice ${fmtBox(ink)}; geometric ${fmtBox(geo)} is authoritative`,
        soft: true,
      });
    }
  }

  // Three separate Stage 03 checks
  const checks = ["stage-03-check-0", "stage-03-check-1", "stage-03-check-2"];
  const checkBoxes = checks.map((n) => refGeometric[n]);
  if (checkBoxes.some((b) => !b)) {
    failures.push({
      name: "stage-03-checks",
      rule: "ref-checks-missing",
      detail: "one or more check geometric masks missing",
    });
  } else {
    // Must be three distinct y bands
    const ys = checkBoxes.map((b) => b.y).sort((a, b) => a - b);
    if (!(ys[1] > ys[0] + 8 && ys[2] > ys[1] + 8)) {
      failures.push({
        name: "stage-03-checks",
        rule: "ref-checks-overlap",
        detail: `check geometric y not separated: ${ys.join(",")}`,
      });
    }
  }
  for (const name of checks) {
    if (!paintBounds[name]) {
      failures.push({
        name,
        rule: "check-paint-null",
        detail: "Stage 03 check paint-isolation null",
      });
    }
  }

  const hard = failures.filter((f) => !f.soft);
  return { ok: hard.length === 0, failures, hardFailures: hard };
}

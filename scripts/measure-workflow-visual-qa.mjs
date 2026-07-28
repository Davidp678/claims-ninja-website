/**
 * Geometry QA for workflow visual match + hero calendar/shield alignment.
 * Usage: SITE=http://localhost:3017 node scripts/measure-workflow-visual-qa.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { chromium } from "@playwright/test";

const SITE = (process.env.SITE || "http://localhost:3017").replace(/\/$/, "");
const OUT = resolve("screenshots/workflow-visual-qa");
mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "laptop-1366", width: 1366, height: 768 },
  { name: "tablet-landscape-1024", width: 1024, height: 768 },
  { name: "tablet-portrait-768", width: 768, height: 1024 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-360", width: 360, height: 800 },
];

function rect(el) {
  const r = el.getBoundingClientRect();
  return {
    left: Math.round(r.left * 10) / 10,
    top: Math.round(r.top * 10) / 10,
    right: Math.round(r.right * 10) / 10,
    bottom: Math.round(r.bottom * 10) / 10,
    width: Math.round(r.width * 10) / 10,
    height: Math.round(r.height * 10) / 10,
    cx: Math.round((r.left + r.width / 2) * 10) / 10,
    cy: Math.round((r.top + r.height / 2) * 10) / 10,
  };
}

async function measure(page) {
  return page.evaluate(() => {
    const rectOf = (el) => {
      const r = el.getBoundingClientRect();
      return {
        left: Math.round(r.left * 10) / 10,
        top: Math.round(r.top * 10) / 10,
        right: Math.round(r.right * 10) / 10,
        bottom: Math.round(r.bottom * 10) / 10,
        width: Math.round(r.width * 10) / 10,
        height: Math.round(r.height * 10) / 10,
        cx: Math.round((r.left + r.width / 2) * 10) / 10,
        cy: Math.round((r.top + r.height / 2) * 10) / 10,
      };
    };

    const proofRoot = document.querySelector(
      '[aria-label="Trust and proof points"]',
    );
    const desktopProof = proofRoot
      ? Array.from(proofRoot.querySelectorAll(":scope > div")).find(
          (el) => getComputedStyle(el).display !== "none",
        )
      : null;

    let heroIcons = null;
    if (desktopProof) {
      const columns = Array.from(
        desktopProof.querySelectorAll("[data-proof-column]"),
      );
      const col3 = columns[2];
      if (col3) {
        const svgs = Array.from(col3.querySelectorAll("svg"));
        const shield = svgs[0];
        const calendar = svgs[1];
        if (shield && calendar) {
          const s = rectOf(shield);
          const c = rectOf(calendar);
          heroIcons = {
            shieldLeft: s.left,
            calendarLeft: c.left,
            leftDelta: Math.round(Math.abs(s.left - c.left) * 10) / 10,
            shieldCx: s.cx,
            calendarCx: c.cx,
            cxDelta: Math.round(Math.abs(s.cx - c.cx) * 10) / 10,
            aligned: Math.abs(s.left - c.left) <= 1 || Math.abs(s.cx - c.cx) <= 1,
          };
        }
      }
    }

    const process = document.querySelector("#process");
    const cards = process
      ? Array.from(process.querySelectorAll("[data-process-card]")).filter(
          (el) => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && r.height > 0 && getComputedStyle(el).display !== "none";
          },
        )
      : [];

    // Prefer desktop row if multiple layouts render (hidden ones have 0 size already filtered)
    const byStep = new Map();
    for (const el of cards) {
      const step =
        el.querySelector("[data-process-step]")?.textContent?.trim() || "";
      const r = rectOf(el);
      const existing = byStep.get(step);
      if (!existing || r.top < existing.card.top) {
        const visual = el.querySelector("[data-process-visual]");
        const title = el.querySelector("[data-process-title]");
        const desc = el.querySelector("[data-process-description]");
        const pill = el.querySelector("[data-process-pill]");
        const frames = Array.from(
          el.querySelectorAll("[data-process-icon-frame]"),
        );
        byStep.set(step, {
          step,
          card: r,
          stepRel: (() => {
            const s = el.querySelector("[data-process-step]");
            if (!s) return null;
            const sr = s.getBoundingClientRect();
            return {
              left: Math.round((sr.left - r.left) * 10) / 10,
              top: Math.round((sr.top - r.top) * 10) / 10,
            };
          })(),
          visual: visual ? rectOf(visual) : null,
          titleTop: title ? rectOf(title).top : null,
          descTop: desc ? rectOf(desc).top : null,
          pillBottom: pill ? rectOf(pill).bottom : null,
          iconFrames: frames.map((f) => ({
            w: rectOf(f).width,
            h: rectOf(f).height,
          })),
        });
      }
    }

    const processCards = Array.from(byStep.values()).sort((a, b) =>
      a.step.localeCompare(b.step),
    );

    const widths = processCards.map((c) => c.card.width);
    const heights = processCards.map((c) => c.card.height);
    const equalWidth =
      widths.length === 4 && widths.every((w) => Math.abs(w - widths[0]) <= 1);
    const equalHeight =
      heights.length === 4 &&
      heights.every((h) => Math.abs(h - heights[0]) <= 1);

    const titleTops = processCards.map((c) => c.titleTop).filter((v) => v != null);
    const descTops = processCards.map((c) => c.descTop).filter((v) => v != null);
    const pillBottoms = processCards
      .map((c) => c.pillBottom)
      .filter((v) => v != null);
    const baselineAlign = (vals) =>
      vals.length >= 2 &&
      vals.every((v) => Math.abs(v - vals[0]) <= 1);

    const nodes = process
      ? Array.from(process.querySelectorAll("[data-process-node]")).filter(
          (el) => {
            const r = el.getBoundingClientRect();
            return r.width > 0 && r.height > 0;
          },
        )
      : [];
    const rail = process?.querySelector("[data-process-rail]");
    const railLine = rail?.querySelector(".h-px, [class*='h-px']");
    const nodeRects = nodes.map((n) => rectOf(n));
    const railCy = railLine ? rectOf(railLine).cy : null;

    // Gap centers between consecutive cards when 4 in one row
    let gapCenters = [];
    if (processCards.length === 4) {
      const sorted = [...processCards].sort(
        (a, b) => a.card.left - b.card.left,
      );
      const sameRow = sorted.every(
        (c) => Math.abs(c.card.top - sorted[0].card.top) <= 2,
      );
      if (sameRow) {
        for (let i = 0; i < 3; i++) {
          const gapLeft = sorted[i].card.right;
          const gapRight = sorted[i + 1].card.left;
          gapCenters.push(Math.round(((gapLeft + gapRight) / 2) * 10) / 10);
        }
      }
    }

    const nodeGapDeltas = nodeRects.map((n, i) =>
      gapCenters[i] != null
        ? Math.round(Math.abs(n.cx - gapCenters[i]) * 10) / 10
        : null,
    );

    const frames01 = processCards[0]?.iconFrames?.[0] ?? null;
    const frames04 = processCards[3]?.iconFrames?.[0] ?? null;
    const frames02 = processCards[1]?.iconFrames?.[0] ?? null;
    const frames03 = processCards[2]?.iconFrames?.[0] ?? null;

    return {
      heroIcons,
      processCards: processCards.map((c) => ({
        step: c.step,
        width: c.card.width,
        height: c.card.height,
        stepRel: c.stepRel,
        visual: c.visual
          ? { width: c.visual.width, height: c.visual.height }
          : null,
        titleTop: c.titleTop,
        descTop: c.descTop,
        pillBottom: c.pillBottom,
        iconFrames: c.iconFrames,
      })),
      equalWidth,
      equalHeight,
      titlesAligned: baselineAlign(titleTops),
      descriptionsAligned: baselineAlign(descTops),
      pillsAligned: baselineAlign(pillBottoms),
      visualHeightsEqual:
        processCards.length === 4 &&
        processCards.every(
          (c) =>
            c.visual &&
            Math.abs(c.visual.height - processCards[0].visual.height) <= 1,
        ),
      stepOffsetsEqual:
        processCards.length === 4 &&
        processCards.every(
          (c) =>
            c.stepRel &&
            Math.abs(c.stepRel.left - processCards[0].stepRel.left) <= 1 &&
            Math.abs(c.stepRel.top - processCards[0].stepRel.top) <= 1,
        ),
      railCy,
      nodeCy: nodeRects.map((n) => n.cy),
      nodeCx: nodeRects.map((n) => n.cx),
      gapCenters,
      nodeGapDeltas,
      nodesOnRail:
        railCy != null &&
        nodeRects.length > 0 &&
        nodeRects.every((n) => Math.abs(n.cy - railCy) <= 1),
      nodesInGaps:
        nodeGapDeltas.length === 3 &&
        nodeGapDeltas.every((d) => d != null && d <= 2),
      frame01_04_match:
        frames01 &&
        frames04 &&
        frames01.w === frames04.w &&
        frames01.h === frames04.h,
      frame02_03_match:
        frames02 &&
        frames03 &&
        frames02.w === frames03.w &&
        frames02.h === frames03.h,
    };
  });
}

const browser = await chromium.launch({ headless: true });
const report = { site: SITE, viewports: {} };

for (const vp of VIEWPORTS) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
  });
  await page.goto(SITE, { waitUntil: "networkidle", timeout: 90_000 });
  await page.waitForTimeout(900);
  report.viewports[vp.name] = await measure(page);

  if (
    vp.name === "desktop-1440" ||
    vp.name === "mobile-390" ||
    vp.name === "tablet-portrait-768"
  ) {
    await page.locator("#process").screenshot({
      path: resolve(OUT, `${vp.name}-process.png`),
    });
    await page.locator('[aria-label="Trust and proof points"]').screenshot({
      path: resolve(OUT, `${vp.name}-proof.png`),
    });
    await page.screenshot({
      path: resolve(OUT, `${vp.name}-viewport.png`),
      fullPage: false,
    });
  }
  await page.close();
}

writeFileSync(resolve(OUT, "report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report.viewports["desktop-1440"], null, 2));

const d = report.viewports["desktop-1440"];
const ok =
  d?.heroIcons?.aligned &&
  d?.equalWidth &&
  d?.equalHeight &&
  d?.titlesAligned &&
  d?.descriptionsAligned &&
  d?.pillsAligned &&
  d?.visualHeightsEqual &&
  d?.stepOffsetsEqual &&
  d?.nodesOnRail &&
  d?.nodesInGaps &&
  d?.frame01_04_match &&
  d?.frame02_03_match;

await browser.close();
process.exit(ok ? 0 : 2);

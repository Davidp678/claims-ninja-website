/**
 * Measure hero proof column centers + process card geometry at key viewports.
 * Usage: SITE=http://localhost:3017 node scripts/measure-hero-workflow-geometry.mjs
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { chromium } from "@playwright/test";

const SITE = (process.env.SITE || "http://localhost:3017").replace(/\/$/, "");
const OUT_DIR = resolve("screenshots/hero-workflow-geometry-qa");
mkdirSync(OUT_DIR, { recursive: true });

const VIEWPORTS = [
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "laptop-1280", width: 1280, height: 800 },
  { name: "tablet-landscape-1024", width: 1024, height: 768 },
  { name: "tablet-portrait-768", width: 768, height: 1024 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-360", width: 360, height: 800 },
];

async function measure(page) {
  return page.evaluate(() => {
    const proofRoot = document.querySelector(
      '[aria-label="Trust and proof points"]',
    );
    const desktopProof = proofRoot
      ? Array.from(proofRoot.querySelectorAll(":scope > div")).find((el) => {
          const style = getComputedStyle(el);
          return style.display !== "none";
        })
      : null;

    const groups = desktopProof
      ? Array.from(desktopProof.querySelectorAll("[data-proof-group]"))
      : [];

    const proofGroups = groups.map((el, i) => {
      const r = el.getBoundingClientRect();
      const svg = el.querySelector("svg");
      const sr = svg?.getBoundingClientRect();
      return {
        index: i,
        text: (el.textContent || "").replace(/\s+/g, " ").trim().slice(0, 40),
        cx: Math.round((r.left + r.width / 2) * 10) / 10,
        cy: Math.round((r.top + r.height / 2) * 10) / 10,
        width: Math.round(r.width * 10) / 10,
        height: Math.round(r.height * 10) / 10,
        icon: sr
          ? {
              w: Math.round(sr.width * 10) / 10,
              h: Math.round(sr.height * 10) / 10,
            }
          : null,
      };
    });

    const upper = proofGroups.slice(0, 3);
    const lower = proofGroups.slice(3, 6);
    const columnCenterDeltas = [0, 1, 2].map((i) => {
      if (!upper[i] || !lower[i]) return null;
      return {
        column: i + 1,
        upperCx: upper[i].cx,
        lowerCx: lower[i].cx,
        delta: Math.round(Math.abs(upper[i].cx - lower[i].cx) * 10) / 10,
      };
    });

    const lowerIcons = lower.map((g) => g.icon).filter(Boolean);
    const iconUniform =
      lowerIcons.length === 3 &&
      lowerIcons.every(
        (ic) =>
          ic.w === lowerIcons[0].w && ic.h === lowerIcons[0].h,
      );

    const processSection = document.querySelector("#process");
    const cards = processSection
      ? Array.from(processSection.querySelectorAll("[data-process-card]")).filter(
          (el) => getComputedStyle(el).display !== "none",
        )
      : [];

    // Prefer visible desktop/tablet/mobile cards that are actually laid out
    const visibleCards = cards.filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    });

    // Deduplicate by step number text (mobile/tablet/desktop variants)
    const byStep = new Map();
    for (const el of visibleCards) {
      const step =
        el.querySelector("span")?.textContent?.trim() ||
        el.textContent?.trim().slice(0, 2) ||
        "";
      const r = el.getBoundingClientRect();
      const existing = byStep.get(step);
      if (!existing || r.top < existing.top) {
        byStep.set(step, {
          step,
          width: Math.round(r.width * 10) / 10,
          height: Math.round(r.height * 10) / 10,
          top: r.top,
          left: r.left,
        });
      }
    }
    const processCards = Array.from(byStep.values()).sort((a, b) =>
      a.step.localeCompare(b.step),
    );

    const widths = processCards.map((c) => c.width);
    const heights = processCards.map((c) => c.height);
    const equalWidth =
      widths.length >= 2 && widths.every((w) => Math.abs(w - widths[0]) <= 1);
    const equalHeight =
      heights.length >= 2 && heights.every((h) => Math.abs(h - heights[0]) <= 1);

    return {
      proofGroups,
      columnCenterDeltas,
      proofAligned:
        columnCenterDeltas.every((d) => d && d.delta <= 1) &&
        proofGroups.length >= 6,
      lowerIconUniform: iconUniform,
      lowerIcons,
      processCards,
      cardsEqualWidth: equalWidth,
      cardsEqualHeight: equalHeight,
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
  await page.waitForTimeout(800);

  const metrics = await measure(page);
  report.viewports[vp.name] = metrics;

  if (vp.name === "desktop-1440" || vp.name === "mobile-390") {
    const proof = page.locator('[aria-label="Trust and proof points"]');
    if (await proof.count()) {
      await proof.screenshot({
        path: resolve(OUT_DIR, `${vp.name}-proof.png`),
      });
    }
    const process = page.locator("#process");
    if (await process.count()) {
      await process.screenshot({
        path: resolve(OUT_DIR, `${vp.name}-process.png`),
      });
    }
    await page.screenshot({
      path: resolve(OUT_DIR, `${vp.name}-full.png`),
      fullPage: false,
    });
  }

  await page.close();
}

writeFileSync(resolve(OUT_DIR, "report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));

const desktop = report.viewports["desktop-1440"];
const ok =
  desktop?.proofAligned &&
  desktop?.lowerIconUniform &&
  desktop?.cardsEqualWidth &&
  desktop?.cardsEqualHeight &&
  desktop?.processCards?.length === 4;

await browser.close();
process.exit(ok ? 0 : 1);

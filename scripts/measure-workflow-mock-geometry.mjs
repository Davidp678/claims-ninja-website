/**
 * Measure major geometry from the native workflow mock (1024x467 JPEG).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { chromium } from "@playwright/test";

const REF = resolve("docs/design-system/workflow-mock/reference-native.jpg");
const OUT = resolve("docs/design-system/workflow-mock/reference-geometry.json");
mkdirSync(resolve("docs/design-system/workflow-mock"), { recursive: true });

const b64 = readFileSync(REF).toString("base64");
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1024, height: 467 },
  deviceScaleFactor: 1,
});

await page.setContent(`<!doctype html><html><body style="margin:0;background:#000">
<img id="ref" src="data:image/jpeg;base64,${b64}" width="1024" height="467" style="display:block"/>
</body></html>`);
await page.waitForTimeout(250);

const geometry = await page.evaluate(() => {
  const img = document.getElementById("ref");
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 467;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  const { data, width, height } = ctx.getImageData(0, 0, 1024, 467);

  const at = (x, y) => {
    const i =
      (Math.max(0, Math.min(height - 1, y)) * width +
        Math.max(0, Math.min(width - 1, x))) *
      4;
    return [data[i], data[i + 1], data[i + 2]];
  };
  const lum = (x, y) => {
    const [r, g, b] = at(x, y);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const isRed = (x, y) => {
    const [r, g, b] = at(x, y);
    return r > 120 && r > g + 40 && r > b + 40;
  };

  const scores = [];
  for (let x = 40; x < 980; x++) {
    let sum = 0;
    for (let y = 175; y < 395; y++) sum += lum(x, y);
    scores.push({ x, avg: sum / (395 - 175) });
  }
  const scoreAt = (x) => scores.find((s) => s.x === x)?.avg ?? 0;

  let leftMargin = 60;
  for (const s of scores) {
    if (s.avg > 20.5) {
      leftMargin = s.x;
      break;
    }
  }
  let rightMargin = 960;
  for (let i = scores.length - 1; i >= 0; i--) {
    if (scores[i].avg > 20.5) {
      rightMargin = scores[i].x;
      break;
    }
  }

  const nums = [];
  for (let y = 185; y <= 205; y++) {
    for (let x = 70; x < 900; x++) {
      if (!isRed(x, y)) continue;
      let b = nums.find((n) => Math.abs(n.cx - x) < 35);
      if (!b) {
        b = { xs: [], cx: x };
        nums.push(b);
      }
      b.xs.push(x);
      b.cx = b.xs.reduce((a, v) => a + v, 0) / b.xs.length;
    }
  }
  const numbers = nums
    .map((b) => ({
      cx: Math.round(b.cx),
      minX: Math.min(...b.xs),
      maxX: Math.max(...b.xs),
      count: b.xs.length,
    }))
    .filter((n) => n.count > 20)
    .sort((a, b) => a.cx - b.cx)
    .slice(0, 4);

  const between = [];
  for (let i = 0; i < 3; i++) {
    const a = numbers[i].cx;
    const b = numbers[i + 1].cx;
    const region = scores.filter((s) => s.x > a + 25 && s.x < b - 25);
    region.sort((p, q) => p.avg - q.avg);
    between.push(region[0]);
  }

  const cardLefts = [leftMargin];
  const cardRights = [];
  for (const gap of between) {
    let L = gap.x;
    let R = gap.x;
    while (L > 60 && scoreAt(L) < 23.5) L--;
    while (R < 970 && scoreAt(R) < 23.5) R++;
    cardRights.push(L);
    cardLefts.push(R);
  }
  cardRights.push(rightMargin);

  let top = 170;
  let bottom = 398;
  const x0 = cardLefts[0] + 20;
  const x1 = cardRights[0] - 20;
  for (let y = 140; y < 200; y++) {
    let s = 0;
    for (let x = x0; x < x1; x += 2) {
      if (lum(x, y) > lum(x, y - 1) + 4) s++;
    }
    if (s > 18) {
      top = y;
      break;
    }
  }
  for (let y = 420; y > 300; y--) {
    let s = 0;
    for (let x = x0; x < x1; x += 2) {
      if (lum(x, y) > lum(x, y + 1) + 4) s++;
    }
    if (s > 18) {
      bottom = y;
      break;
    }
  }

  const cards = cardLefts.map((left, i) => ({
    index: i + 1,
    left,
    right: cardRights[i],
    width: cardRights[i] - left + 1,
    top,
    bottom,
    height: bottom - top + 1,
    number: numbers[i],
  }));

  const connectors = between.map((gap, i) => {
    let minX = 999;
    let maxX = 0;
    let minY = 999;
    let maxY = 0;
    let found = false;
    for (let y = 220; y < 260; y++) {
      for (let x = gap.x - 18; x <= gap.x + 18; x++) {
        if (isRed(x, y)) {
          found = true;
          minX = Math.min(minX, x);
          maxX = Math.max(maxX, x);
          minY = Math.min(minY, y);
          maxY = Math.max(maxY, y);
        }
      }
    }
    return {
      from: i + 1,
      to: i + 2,
      gapCenterX: gap.x,
      gapAvgLum: Math.round(gap.avg * 10) / 10,
      gapLeft: cardRights[i] + 1,
      gapRight: cardLefts[i + 1] - 1,
      gapWidth: cardLefts[i + 1] - cardRights[i] - 1,
      node: found
        ? {
            left: minX,
            right: maxX,
            top: minY,
            bottom: maxY,
            cx: Math.round((minX + maxX) / 2),
            cy: Math.round((minY + maxY) / 2),
            width: maxX - minX + 1,
            height: maxY - minY + 1,
          }
        : null,
      lineY: found ? Math.round((minY + maxY) / 2) : 239,
    };
  });

  let chat = null;
  outer: for (let y = height - 70; y < height - 5; y++) {
    for (let x = width - 70; x < width - 5; x++) {
      if (!isRed(x, y)) continue;
      let minX = x;
      let maxX = x;
      let minY = y;
      let maxY = y;
      for (let yy = y - 35; yy < y + 40; yy++) {
        for (let xx = x - 40; xx < x + 40; xx++) {
          if (xx < 0 || yy < 0 || xx >= width || yy >= height) continue;
          if (isRed(xx, yy)) {
            minX = Math.min(minX, xx);
            maxX = Math.max(maxX, xx);
            minY = Math.min(minY, yy);
            maxY = Math.max(maxY, yy);
          }
        }
      }
      chat = {
        left: minX,
        top: minY,
        right: maxX,
        bottom: maxY,
        width: maxX - minX + 1,
        height: maxY - minY + 1,
        cx: Math.round((minX + maxX) / 2),
        cy: Math.round((minY + maxY) / 2),
      };
      break outer;
    }
  }

  let bottomLineY = null;
  for (let y = height - 2; y > height - 30; y--) {
    let hits = 0;
    for (let x = 10; x < width - 10; x += 3) {
      const L = lum(x, y);
      if (L > 22 && L < 90) hits++;
    }
    if (hits > 60) {
      bottomLineY = y;
      break;
    }
  }

  let eyebrowY = null;
  for (let y = 20; y < 90; y++) {
    let reds = 0;
    for (let x = 280; x < 744; x++) if (isRed(x, y)) reds++;
    if (reds > 25) {
      eyebrowY = y;
      break;
    }
  }
  let headlineY = null;
  for (let y = (eyebrowY || 30) + 5; y < 140; y++) {
    let whites = 0;
    for (let x = 180; x < 844; x += 2) if (lum(x, y) > 170) whites++;
    if (whites > 50) {
      headlineY = y;
      break;
    }
  }
  let supportY = null;
  for (let y = (headlineY || 80) + 20; y < 180; y++) {
    let greys = 0;
    for (let x = 160; x < 864; x += 2) {
      const L = lum(x, y);
      if (L > 90 && L < 170) greys++;
    }
    if (greys > 40) {
      supportY = y;
      break;
    }
  }

  // Number inset from card left
  const numberInsets = cards.map((c) =>
    c.number ? c.number.minX - c.left : null,
  );

  return {
    canvas: { width, height },
    backgroundRGB: at(8, 8),
    cardSampleRGB: at(cards[0].left + 24, top + 40),
    borderSampleRGB: at(cards[0].left, top + 40),
    connectorRedRGB: connectors[0]?.node
      ? at(connectors[0].node.cx, connectors[0].node.cy)
      : null,
    heading: { eyebrowY, headlineY, supportY },
    cards,
    connectors,
    numberInsets,
    bottomLineY,
    chat,
    cardWidthPattern: cards.map((c) => c.width),
    gaps: connectors.map((c) => c.gapWidth),
    designTokens: {
      sectionHeight: height,
      contentLeft: leftMargin,
      contentRight: rightMargin,
      cardTop: top,
      cardBottom: bottom,
      cardHeight: bottom - top + 1,
      connectorY: connectors[0]?.lineY ?? 239,
      headingToCards: top - (supportY || 118),
      cardsToBottomLine: (bottomLineY || 465) - bottom,
      chatRightOffset: width - (chat?.right || 1014) - 1,
      chatBottomOffset: height - (chat?.bottom || 450) - 1,
    },
  };
});

writeFileSync(OUT, JSON.stringify(geometry, null, 2));
console.log(JSON.stringify(geometry, null, 2));
await browser.close();

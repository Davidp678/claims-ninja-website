import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { PNG } from "pngjs";

const png = PNG.sync.read(
  readFileSync(resolve("screenshots/workflow-mock-pixel-qa/reference-normalized.png")),
);
const { width, height, data } = png;
const lum = (x, y) => {
  const i = (y * width + x) * 4;
  return 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
};
const isRed = (x, y) => {
  const i = (y * width + x) * 4;
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  return r > 130 && r > g + 45 && r > b + 45;
};

// Edge map: pixels brighter than neighbors (border-ish)
const edge = new Float64Array(width * height);
for (let y = 1; y < height - 1; y++) {
  for (let x = 1; x < width - 1; x++) {
    const L = lum(x, y);
    const gx = Math.abs(L - lum(x - 1, y)) + Math.abs(L - lum(x + 1, y));
    const gy = Math.abs(L - lum(x, y - 1)) + Math.abs(L - lum(x, y + 1));
    edge[y * width + x] = gx + gy;
  }
}

// Vertical projection of edges in card band
const vproj = new Array(width).fill(0);
for (let x = 50; x < width - 50; x++) {
  let s = 0;
  for (let y = 165; y < 405; y++) s += edge[y * width + x];
  vproj[x] = s;
}

// Find peaks (card left/right borders)
const peaks = [];
for (let x = 60; x < 960; x++) {
  if (
    vproj[x] > vproj[x - 1] &&
    vproj[x] >= vproj[x + 1] &&
    vproj[x] > 900
  ) {
    peaks.push({ x, score: vproj[x] });
  }
}
// Non-max suppression
const kept = [];
for (const p of peaks.sort((a, b) => b.score - a.score)) {
  if (kept.every((k) => Math.abs(k.x - p.x) > 12)) kept.push(p);
}
kept.sort((a, b) => a.x - b.x);

// Horizontal projection
const hproj = new Array(height).fill(0);
for (let y = 140; y < 430; y++) {
  let s = 0;
  for (let x = 80; x < 920; x++) s += edge[y * width + x];
  hproj[y] = s;
}
const hpeaks = [];
for (let y = 150; y < 420; y++) {
  if (hproj[y] > hproj[y - 1] && hproj[y] >= hproj[y + 1] && hproj[y] > 2000) {
    hpeaks.push({ y, score: hproj[y] });
  }
}
hpeaks.sort((a, b) => b.score - a.score);

// Red connector Y
let connectorYs = [];
for (let y = 200; y < 280; y++) {
  let c = 0;
  for (let x = 200; x < 850; x++) if (isRed(x, y)) c++;
  if (c > 8) connectorYs.push({ y, c });
}
connectorYs.sort((a, b) => b.c - a.c);

const out = {
  verticalBorderPeaks: kept.slice(0, 12),
  horizontalBorderPeaks: hpeaks.slice(0, 6),
  connectorYCandidates: connectorYs.slice(0, 5),
};
writeFileSync(
  resolve("docs/design-system/workflow-mock/edge-peaks.json"),
  JSON.stringify(out, null, 2),
);
console.log(JSON.stringify(out, null, 2));

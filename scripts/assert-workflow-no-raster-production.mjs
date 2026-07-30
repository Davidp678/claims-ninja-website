/**
 * Release assertion: ProcessSection production graph must not reference
 * reference-derived workflow-mock assets or encode the reference.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { resolve, join, relative } from "node:path";

const ROOT = resolve(process.cwd());
const FORBIDDEN_PATH_SNIPPETS = [
  "public/images/workflow-mock",
  "/images/workflow-mock/",
  "docs/design-system/workflow-mock",
  "screenshots/workflow-mock-pixel-qa",
  "reference-native.jpg",
  "reference-normalized.png",
  "heading-art.png",
  "stage-01-card.png",
  "stage-02-card.png",
  "stage-03-card.png",
  "stage-04-card.png",
  "stage-01-art.png",
  "stage-02-art.png",
  "stage-03-art.png",
  "stage-04-art.png",
  "connector-1-art.png",
  "connector-2-art.png",
  "connector-3-art.png",
  "chat-art.png",
];

const PROD_ROOTS = [
  resolve(ROOT, "src/components/sections/ProcessSection.tsx"),
  resolve(ROOT, "src/components/sections/process"),
  resolve(ROOT, "src/components/chatbot/ChatWidget.tsx"),
];

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (/\.(tsx?|jsx?|css|mjs|cjs)$/.test(name)) out.push(p);
  }
  return out;
}

function collectFiles() {
  const files = [];
  for (const root of PROD_ROOTS) {
    const st = existsSync(root) ? statSync(root) : null;
    if (!st) continue;
    if (st.isFile()) files.push(root);
    else walk(root, files);
  }
  return files;
}

const failures = [];

if (existsSync(resolve(ROOT, "public/images/workflow-mock"))) {
  failures.push({
    rule: "raster-dir-present",
    detail: "public/images/workflow-mock/ must not exist in production",
  });
}

for (const file of collectFiles()) {
  const text = readFileSync(file, "utf8");
  const rel = relative(ROOT, file).replace(/\\/g, "/");
  for (const snippet of FORBIDDEN_PATH_SNIPPETS) {
    if (text.includes(snippet)) {
      failures.push({
        rule: "forbidden-reference",
        detail: `${rel} references "${snippet}"`,
      });
    }
  }
  // Detect large base64 image payloads that could embed the reference.
  if (/data:image\/(png|jpeg|jpg|webp);base64,[A-Za-z0-9+/=]{400,}/i.test(text)) {
    failures.push({
      rule: "embedded-image-data-uri",
      detail: `${rel} contains a large data-URI image payload`,
    });
  }
}

const report = {
  ok: failures.length === 0,
  failures,
  scannedFiles: collectFiles().map((f) => relative(ROOT, f).replace(/\\/g, "/")),
};

console.log(JSON.stringify(report, null, 2));
if (!report.ok) process.exit(2);

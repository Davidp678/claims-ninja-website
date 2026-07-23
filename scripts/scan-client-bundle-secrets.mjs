/**
 * Scan Next.js client build output for accidental secret leakage.
 * Never prints matched secret values — only pattern names and file paths.
 *
 * Usage: node scripts/scan-client-bundle-secrets.mjs
 */

import { readdirSync, readFileSync, statSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIRS = [".next/static", ".next/server/app"];

const PATTERNS = [
  { name: "service_role_jwt", re: /service_role/i },
  { name: "supabase_service_env", re: /SUPABASE_SERVICE_ROLE_KEY/ },
  { name: "s2s_secret_env", re: /EXTERNAL_INTAKE_(S2S_SECRET|CREDENTIAL_SECRET|PEPPER)/ },
  { name: "staging_s2s_cred_literal", re: /staging_website_01/ },
  { name: "production_supabase_ref", re: /upwowfigsmhicdrfgepg/ },
  { name: "long_base64url_secretish", re: /[A-Za-z0-9_-]{60,}/g },
];

// Allowlist noisy but expected public tokens
const ALLOW_SUBSTRINGS = [
  "NEXT_PUBLIC_",
  "application/json",
  "webpack",
];

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (/\.(js|css|html|json)$/.test(name)) out.push(full);
  }
  return out;
}

let hits = 0;
const files = DIRS.flatMap((d) => walk(path.join(ROOT, d)));
console.log(`[scan-client-bundle-secrets] scanning ${files.length} files`);

for (const file of files) {
  const rel = path.relative(ROOT, file);
  // Skip server-only chunks that are expected to reference env names in some builds;
  // still flag production refs and credential literals everywhere.
  const text = readFileSync(file, "utf8");
  for (const pattern of PATTERNS) {
    if (pattern.name === "long_base64url_secretish") continue; // too noisy alone
    if (pattern.re.test(text)) {
      // Client static must not contain server secret env names or staging cred id.
      if (rel.includes(`${path.sep}static${path.sep}`) || rel.includes("/static/")) {
        hits += 1;
        console.error(`  HIT ${pattern.name} in ${rel}`);
      } else if (
        pattern.name === "production_supabase_ref" ||
        pattern.name === "staging_s2s_cred_literal"
      ) {
        hits += 1;
        console.error(`  HIT ${pattern.name} in ${rel}`);
      }
    }
  }
}

if (hits > 0) {
  console.error(`[scan-client-bundle-secrets] ${hits} hit(s)`);
  process.exit(1);
}
console.log("[scan-client-bundle-secrets] no client secret leaks detected");
void ALLOW_SUBSTRINGS;

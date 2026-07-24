/**
 * Direct Platform Preview S2S: create → upload → GET → PATCH (Continue).
 * Uses .tmp/local-preview-smoke.env. Never prints secrets.
 */
import { createHash, createHmac, randomBytes } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const ENV_PATH = resolve(".tmp/local-preview-smoke.env");
const FALLBACK = resolve(".tmp/website-preview.env");

function parseEnv(raw) {
  const out = {};
  for (const line of raw.split(/\r?\n/)) {
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq < 0) continue;
    let v = line.slice(eq + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    out[line.slice(0, eq)] = v;
  }
  return out;
}

function sha256Hex(buf) {
  return createHash("sha256").update(buf).digest("hex");
}

function sign(secret, canonical) {
  return createHmac("sha256", secret).update(canonical).digest("hex");
}

async function s2s(env, method, path, bodyBuf, contentType) {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const nonce = randomBytes(16).toString("hex");
  const bodyHash = sha256Hex(bodyBuf);
  const canonical = [
    env.EXTERNAL_INTAKE_CREDENTIAL_ID,
    method,
    path.split("?")[0],
    timestamp,
    nonce,
    bodyHash,
  ].join("\n");
  const signature = sign(env.EXTERNAL_INTAKE_CREDENTIAL_SECRET, canonical);
  const headers = {
    "X-CN-Credential-Id": env.EXTERNAL_INTAKE_CREDENTIAL_ID,
    "X-CN-Timestamp": timestamp,
    "X-CN-Nonce": nonce,
    "X-CN-Body-Sha256": bodyHash,
    "X-CN-Signature": signature,
  };
  if (contentType) headers["Content-Type"] = contentType;
  if (env.EXTERNAL_INTAKE_PLATFORM_PROTECTION_BYPASS) {
    headers["x-vercel-protection-bypass"] =
      env.EXTERNAL_INTAKE_PLATFORM_PROTECTION_BYPASS;
  }
  const url = `${env.EXTERNAL_INTAKE_PLATFORM_URL.replace(/\/$/, "")}${path}`;
  const res = await fetch(url, {
    method,
    headers,
    body: bodyBuf.length ? bodyBuf : undefined,
  });
  const text = await res.text();
  let json = null;
  try {
    json = JSON.parse(text);
  } catch {
    // leave null
  }
  return {
    status: res.status,
    contentType: res.headers.get("content-type"),
    ok: json?.ok ?? null,
    code: json?.error?.code ?? null,
    message: json?.error?.message ?? null,
    version: json?.data?.version ?? null,
    stage: json?.data?.stage ?? null,
    statusField: json?.data?.status ?? null,
    intakeHandle: json?.data?.intakeHandle ?? null,
    securityState: json?.data?.securityState ?? null,
    bodyPrefix: json ? null : text.slice(0, 120),
  };
}

async function main() {
  const path = existsSync(ENV_PATH) ? ENV_PATH : FALLBACK;
  const env = parseEnv(readFileSync(path, "utf8"));
  for (const k of [
    "EXTERNAL_INTAKE_PLATFORM_URL",
    "EXTERNAL_INTAKE_CREDENTIAL_ID",
    "EXTERNAL_INTAKE_CREDENTIAL_SECRET",
  ]) {
    if (!env[k]) throw new Error(`Missing ${k}`);
  }

  const createBody = Buffer.from(
    JSON.stringify({
      source: "diagnose_platform_continue",
      locale: "en-US",
      claimDraft: { propertyOrJobName: "Diag job", lossType: "water" },
    }),
  );
  const created = await s2s(
    env,
    "POST",
    "/api/external-intake/v1/sessions",
    createBody,
    "application/json",
  );
  console.log(JSON.stringify({ step: "POST sessions", ...created }));
  if (!created.ok || !created.intakeHandle) process.exit(2);

  const handle = created.intakeHandle;
  let version = created.version ?? 1;

  const pdf = Buffer.from(
    `%PDF-1.1\n1 0 obj<<>>endobj\ntrailer<<>>\n%%EOF\ns2s-${randomBytes(4).toString("hex")}\n`,
  );
  const checksum = sha256Hex(pdf);
  const boundary = `----cn${randomBytes(8).toString("hex")}`;
  const parts = [];
  const push = (s) => parts.push(Buffer.from(s, "utf8"));
  push(`--${boundary}\r\nContent-Disposition: form-data; name="intakeHandle"\r\n\r\n${handle}\r\n`);
  push(`--${boundary}\r\nContent-Disposition: form-data; name="expectedVersion"\r\n\r\n${version}\r\n`);
  push(`--${boundary}\r\nContent-Disposition: form-data; name="clientChecksumSha256"\r\n\r\n${checksum}\r\n`);
  push(
    `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="diag.pdf"\r\nContent-Type: application/pdf\r\n\r\n`,
  );
  parts.push(pdf);
  push(`\r\n--${boundary}--\r\n`);
  const multipart = Buffer.concat(parts);

  const uploaded = await s2s(
    env,
    "POST",
    "/api/external-intake/v1/files/upload",
    multipart,
    `multipart/form-data; boundary=${boundary}`,
  );
  console.log(JSON.stringify({ step: "POST files/upload", ...uploaded }));
  if (!uploaded.ok) process.exit(2);
  if (typeof uploaded.version === "number") version = uploaded.version;

  const got = await s2s(
    env,
    "GET",
    `/api/external-intake/v1/sessions/current?intakeHandle=${encodeURIComponent(handle)}`,
    Buffer.alloc(0),
  );
  console.log(JSON.stringify({ step: "GET sessions/current", ...got }));
  if (typeof got.version === "number") version = got.version;

  const patchBody = Buffer.from(
    JSON.stringify({
      intakeHandle: handle,
      expectedVersion: version,
      stage: "claim",
      patch: {
        claim: { propertyOrJobName: "Diag job continued", lossType: "water" },
      },
    }),
  );
  const patched = await s2s(
    env,
    "PATCH",
    "/api/external-intake/v1/sessions/current",
    patchBody,
    "application/json",
  );
  console.log(JSON.stringify({ step: "PATCH sessions/current", ...patched }));
  if (!patched.ok) process.exit(2);
}

main().catch((e) => {
  console.error("[diagnose-platform-continue]", e instanceof Error ? e.message : e);
  process.exit(1);
});

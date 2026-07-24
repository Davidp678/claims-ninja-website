/**
 * Authenticated Preview PDF upload smoke (Website BFF → Platform).
 *
 * Required env (never printed):
 *   SMOKE_BASE_URL — Website Preview origin
 *   VERCEL_AUTOMATION_BYPASS_SECRET — Website Deployment Protection bypass
 *
 * Usage:
 *   node --env-file=.tmp/website-preview-smoke.env scripts/smoke-preview-upload.mjs
 */
import { createHash, randomBytes } from "node:crypto";

const SITE = (process.env.SMOKE_BASE_URL || "").replace(/\/$/, "");
const BYPASS = (process.env.VERCEL_AUTOMATION_BYPASS_SECRET || "").trim();

function fail(msg) {
  console.error(`[smoke-preview-upload] ${msg}`);
  process.exit(1);
}

function bypassHeaders(extra = {}) {
  const headers = { ...extra };
  if (BYPASS) headers["x-vercel-protection-bypass"] = BYPASS;
  return headers;
}

class CookieJar {
  constructor() {
    this.map = new Map();
  }
  absorb(setCookies) {
    for (const raw of setCookies ?? []) {
      const part = String(raw).split(";")[0];
      const eq = part.indexOf("=");
      if (eq > 0) this.map.set(part.slice(0, eq), part.slice(eq + 1));
    }
  }
  cookieHeader() {
    return [...this.map.entries()].map(([k, v]) => `${k}=${v}`).join("; ");
  }
}

async function main() {
  if (!SITE) fail("SMOKE_BASE_URL required");
  if (SITE.includes("theclaimsninja.com") && !SITE.includes("vercel.app")) {
    fail("Refusing production site URL");
  }
  if (!BYPASS) {
    fail(
      "VERCEL_AUTOMATION_BYPASS_SECRET required for Website Preview Deployment Protection",
    );
  }

  const jar = new CookieJar();
  const origin = SITE;

  const csrfRes = await fetch(`${SITE}/api/onboarding/csrf`, {
    headers: bypassHeaders({ origin, cookie: jar.cookieHeader() }),
    redirect: "manual",
  });
  jar.absorb(csrfRes.headers.getSetCookie?.() ?? []);
  const csrfStatus = csrfRes.status;
  const csrfText = await csrfRes.text();
  let csrfJson;
  try {
    csrfJson = JSON.parse(csrfText);
  } catch {
    fail(
      `CSRF non-JSON status=${csrfStatus} (likely Deployment Protection). bodyPrefix=${csrfText.slice(0, 80).replace(/\s+/g, " ")}`,
    );
  }
  const csrfToken =
    csrfJson?.data?.csrfToken || csrfJson?.csrfToken || csrfJson?.token;
  if (!csrfToken) fail(`CSRF missing token status=${csrfStatus}`);

  const sessionRes = await fetch(`${SITE}/api/onboarding/session`, {
    method: "POST",
    headers: bypassHeaders({
      origin,
      "content-type": "application/json",
      "x-csrf-token": csrfToken,
      cookie: jar.cookieHeader(),
    }),
    body: JSON.stringify({
      source: "website_preview_smoke",
      locale: "en-US",
      claimDraft: {
        lossType: "water",
        claimType: "new_claim",
        title: `Preview smoke ${Date.now().toString(36)}`,
      },
    }),
    redirect: "manual",
  });
  jar.absorb(sessionRes.headers.getSetCookie?.() ?? []);
  const sessionText = await sessionRes.text();
  let sessionJson;
  try {
    sessionJson = JSON.parse(sessionText);
  } catch {
    fail(
      `SESSION non-JSON status=${sessionRes.status} bodyPrefix=${sessionText.slice(0, 120).replace(/\s+/g, " ")}`,
    );
  }
  if (!sessionJson?.ok) {
    fail(
      `SESSION failed status=${sessionRes.status} code=${sessionJson?.error?.code} msg=${sessionJson?.error?.message}`,
    );
  }
  const expectedVersion =
    sessionJson.data?.version ?? sessionJson.data?.expectedVersion ?? 1;

  const pdf = Buffer.from(
    `%PDF-1.1\n1 0 obj<<>>endobj\ntrailer<<>>\n%%EOF\nsmoke-${randomBytes(4).toString("hex")}\n`,
  );
  const checksum = createHash("sha256").update(pdf).digest("hex");
  const form = new FormData();
  form.append(
    "file",
    new Blob([pdf], { type: "application/pdf" }),
    "preview-smoke.pdf",
  );
  form.append("expectedVersion", String(expectedVersion));
  form.append("clientChecksumSha256", checksum);

  const uploadRes = await fetch(`${SITE}/api/onboarding/files`, {
    method: "POST",
    headers: bypassHeaders({
      origin,
      "x-csrf-token": csrfToken,
      cookie: jar.cookieHeader(),
    }),
    body: form,
    redirect: "manual",
  });
  const uploadText = await uploadRes.text();
  let uploadJson;
  try {
    uploadJson = JSON.parse(uploadText);
  } catch {
    fail(
      `UPLOAD non-JSON status=${uploadRes.status} bodyPrefix=${uploadText.slice(0, 160).replace(/\s+/g, " ")}`,
    );
  }

  console.log(
    JSON.stringify(
      {
        csrfStatus,
        sessionStatus: sessionRes.status,
        uploadStatus: uploadRes.status,
        ok: Boolean(uploadJson?.ok),
        errorCode: uploadJson?.error?.code ?? null,
        errorMessage: uploadJson?.error?.message ?? null,
        fileId: uploadJson?.data?.fileId ?? uploadJson?.data?.id ?? null,
        securityState:
          uploadJson?.data?.securityState ??
          uploadJson?.data?.scanStatus ??
          null,
      },
      null,
      2,
    ),
  );

  if (!uploadJson?.ok) {
    fail(
      `Upload failed code=${uploadJson?.error?.code} message=${uploadJson?.error?.message}`,
    );
  }
  console.log("[smoke-preview-upload] PASS");
}

main().catch((err) => fail(err instanceof Error ? err.message : String(err)));

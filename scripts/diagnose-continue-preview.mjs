/**
 * Reproduce hero Continue (session PATCH) against local BFF or Website Preview.
 * Never prints secret values.
 *
 * Usage:
 *   SITE=http://127.0.0.1:3017 node scripts/diagnose-continue-preview.mjs
 *   SITE=https://...vercel.app node scripts/diagnose-continue-preview.mjs
 */
import { createHash, randomBytes } from "node:crypto";

const SITE = (process.env.SITE || "http://127.0.0.1:3017").replace(/\/$/, "");

function fail(msg) {
  console.error(`[diagnose-continue] ${msg}`);
  process.exit(1);
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

async function getCsrf(jar) {
  const res = await fetch(`${SITE}/api/onboarding/csrf`, {
    headers: { origin: SITE },
  });
  jar.absorb(res.headers.getSetCookie?.() ?? []);
  const json = await res.json().catch(() => ({}));
  const token = json?.data?.csrfToken || json?.csrfToken || json?.token;
  if (!token) fail(`CSRF failed status=${res.status}`);
  return token;
}

async function main() {
  const jar = new CookieJar();
  const csrf = await getCsrf(jar);

  const sessionRes = await fetch(`${SITE}/api/onboarding/session`, {
    method: "POST",
    headers: {
      origin: SITE,
      "content-type": "application/json",
      "x-csrf-token": csrf,
      cookie: jar.cookieHeader(),
    },
    body: JSON.stringify({
      source: "diagnose_continue",
      locale: "en-US",
      claimDraft: {
        propertyOrJobName: `Diagnose ${Date.now().toString(36)}`,
        lossType: "water",
      },
    }),
  });
  jar.absorb(sessionRes.headers.getSetCookie?.() ?? []);
  const sessionJson = await sessionRes.json().catch(() => ({}));
  console.log(
    JSON.stringify({
      step: "POST /api/onboarding/session",
      status: sessionRes.status,
      ok: sessionJson?.ok,
      code: sessionJson?.error?.code ?? null,
      message: sessionJson?.error?.message ?? null,
      version: sessionJson?.data?.version ?? null,
    }),
  );
  if (!sessionJson?.ok) fail("session create failed");

  let version = sessionJson.data.version;

  const pdf = Buffer.from(
    `%PDF-1.1\n1 0 obj<<>>endobj\ntrailer<<>>\n%%EOF\ndiag-${randomBytes(4).toString("hex")}\n`,
  );
  const form = new FormData();
  form.append(
    "file",
    new Blob([pdf], { type: "application/pdf" }),
    "diagnose-continue.pdf",
  );
  form.append("expectedVersion", String(version));
  form.append(
    "clientChecksumSha256",
    createHash("sha256").update(pdf).digest("hex"),
  );

  const csrf2 = await getCsrf(jar);
  const uploadRes = await fetch(`${SITE}/api/onboarding/files`, {
    method: "POST",
    headers: {
      origin: SITE,
      "x-csrf-token": csrf2,
      cookie: jar.cookieHeader(),
    },
    body: form,
  });
  const uploadJson = await uploadRes.json().catch(() => ({}));
  console.log(
    JSON.stringify({
      step: "POST /api/onboarding/files",
      status: uploadRes.status,
      ok: uploadJson?.ok,
      code: uploadJson?.error?.code ?? null,
      message: uploadJson?.error?.message ?? null,
      securityState: uploadJson?.data?.securityState ?? null,
      version: uploadJson?.data?.version ?? null,
    }),
  );
  if (!uploadJson?.ok) fail("upload failed");
  if (typeof uploadJson.data?.version === "number") {
    version = uploadJson.data.version;
  }

  const getRes = await fetch(`${SITE}/api/onboarding/session`, {
    method: "GET",
    headers: { origin: SITE, cookie: jar.cookieHeader() },
  });
  const getJson = await getRes.json().catch(() => ({}));
  console.log(
    JSON.stringify({
      step: "GET /api/onboarding/session",
      status: getRes.status,
      ok: getJson?.ok,
      code: getJson?.error?.code ?? null,
      message: getJson?.error?.message ?? null,
      version: getJson?.data?.version ?? null,
      fileCount: Array.isArray(getJson?.data?.files)
        ? getJson.data.files.length
        : null,
    }),
  );
  if (getJson?.ok && typeof getJson.data?.version === "number") {
    version = getJson.data.version;
  }

  const csrf3 = await getCsrf(jar);
  const patchRes = await fetch(`${SITE}/api/onboarding/session`, {
    method: "PATCH",
    headers: {
      origin: SITE,
      "content-type": "application/json",
      "x-csrf-token": csrf3,
      cookie: jar.cookieHeader(),
    },
    body: JSON.stringify({
      expectedVersion: version,
      stage: "claim",
      patch: {
        claim: {
          propertyOrJobName: `Diagnose job ${Date.now().toString(36)}`,
          lossType: "water",
        },
      },
    }),
  });
  const patchJson = await patchRes.json().catch(() => ({}));
  console.log(
    JSON.stringify({
      step: "PATCH /api/onboarding/session (Continue)",
      status: patchRes.status,
      ok: patchJson?.ok,
      code: patchJson?.error?.code ?? null,
      message: patchJson?.error?.message ?? null,
      version: patchJson?.data?.version ?? null,
      stage: patchJson?.data?.stage ?? null,
      statusField: patchJson?.data?.status ?? null,
    }),
  );

  if (!patchJson?.ok) {
    process.exitCode = 2;
  }
}

main().catch((err) => fail(err instanceof Error ? err.message : String(err)));

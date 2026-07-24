/**
 * Staging-only website BFF → platform onboarding integration checks.
 * Requires website on :3000 and platform on :3001 with matching S2S staging secrets.
 *
 * Usage: node --env-file=.env.staging.local scripts/validate-onboarding-staging.mjs
 * Never prints secrets.
 */

import { randomBytes } from "node:crypto";

const STAGING_ONLY = process.env.EXTERNAL_INTAKE_STAGING_ONLY === "true";
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "http://127.0.0.1:3000").replace(
  /\/$/,
  "",
);
const PLATFORM = (
  process.env.EXTERNAL_INTAKE_PLATFORM_URL || ""
).replace(/\/$/, "");
const PRODUCTION_MARKERS = [
  "upwowfigsmhicdrfgepg",
  "app.theclaimsninja.com",
];

let failures = 0;
const marker = `ONBVAL_${Date.now().toString(36)}`;

function check(label, ok, detail) {
  if (ok) console.log(`  PASS ${label}`);
  else {
    failures += 1;
    console.error(`  FAIL ${label}${detail ? ` - ${detail}` : ""}`);
  }
}

function abort(msg) {
  console.error(`[validate-onboarding-staging] ${msg}`);
  process.exit(1);
}

function assertStagingScope() {
  if (process.env.NODE_ENV === "production") abort("NODE_ENV production");
  if (!STAGING_ONLY) abort("EXTERNAL_INTAKE_STAGING_ONLY must be true");
  for (const m of PRODUCTION_MARKERS) {
    if (SITE.includes(m) || PLATFORM.includes(m)) {
      abort(`Production marker detected: ${m}`);
    }
  }
  if (!PLATFORM.includes("127.0.0.1") && !PLATFORM.includes("localhost")) {
    abort("Platform URL must be local staging server for this harness");
  }
}

async function getCsrf(jar) {
  const res = await fetch(`${SITE}/api/onboarding/csrf`, {
    headers: { origin: SITE, cookie: jar.cookieHeader() },
  });
  const setCookie = res.headers.getSetCookie?.() ?? [];
  jar.absorb(setCookie);
  const json = await res.json();
  return json?.data?.csrfToken || json?.csrfToken || json?.token;
}

class CookieJar {
  constructor() {
    this.map = new Map();
  }
  absorb(setCookies) {
    for (const raw of setCookies) {
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
  assertStagingScope();
  console.log(
    `[validate-onboarding-staging] site=${SITE} platform=${PLATFORM} marker=${marker}`,
  );

  const jar = new CookieJar();
  const csrf = await getCsrf(jar);
  check("csrf minted", Boolean(csrf));

  const createRes = await fetch(`${SITE}/api/onboarding/session`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: SITE,
      "x-csrf-token": csrf,
      cookie: jar.cookieHeader(),
    },
    body: JSON.stringify({
      source: marker,
      locale: "en",
      claimDraft: {
        lossType: "roofing_exterior",
        claimType: "new_claim",
        title: `${marker} claim`,
      },
    }),
  });
  jar.absorb(createRes.headers.getSetCookie?.() ?? []);
  const createJson = await createRes.json().catch(() => ({}));
  check(
    "BFF create intake session",
    createRes.status === 200 || createRes.status === 201,
    `status=${createRes.status} code=${createJson?.error?.code ?? "-"}`,
  );

  const getRes = await fetch(`${SITE}/api/onboarding/session`, {
    headers: { origin: SITE, cookie: jar.cookieHeader() },
  });
  const getJson = await getRes.json().catch(() => ({}));
  const version =
    getJson?.data?.version ?? createJson?.data?.version ?? createJson?.version;
  check(
    "session projection readable",
    getRes.status === 200 && typeof version === "number",
    `status=${getRes.status} version=${version}`,
  );

  const csrf2 = await getCsrf(jar);
  const patchRes = await fetch(`${SITE}/api/onboarding/session`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      origin: SITE,
      "x-csrf-token": csrf2,
      cookie: jar.cookieHeader(),
    },
    body: JSON.stringify({
      expectedVersion: version,
      stage: "company",
      patch: {
        company: {
          legalCompanyName: `${marker} Co`,
          workEmail: `${marker.toLowerCase()}@example.test`,
        },
      },
    }),
  });
  check(
    "save/resume-safe session patch",
    patchRes.status === 200,
    `status=${patchRes.status}`,
  );

  const agr = await fetch(`${SITE}/api/onboarding/agreement`, {
    headers: { origin: SITE, cookie: jar.cookieHeader() },
  });
  const agrJson = await agr.json().catch(() => ({}));
  const agrData = agrJson?.data ?? agrJson;
  const acceptanceEnabled = agrData?.acceptanceEnabled;
  check(
    "legal acceptance disabled (public gate)",
    agr.status === 200 && acceptanceEnabled === false,
    `status=${agr.status} enabled=${acceptanceEnabled}`,
  );

  const patchJson = await patchRes.json().catch(() => ({}));
  const versionAfterPatch =
    patchJson?.data?.version ?? (typeof version === "number" ? version + 1 : 1);

  if (!agrData?.documentId || !agrData?.contentSha256) {
    check(
      "legal accept fails closed (no enabled document exposed)",
      acceptanceEnabled === false,
      `documentId=${agrData?.documentId ?? "null"}`,
    );
  } else {
    const csrf3 = await getCsrf(jar);
    const accept = await fetch(`${SITE}/api/onboarding/agreement/accept`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        origin: SITE,
        "x-csrf-token": csrf3,
        cookie: jar.cookieHeader(),
      },
      body: JSON.stringify({
        expectedVersion: versionAfterPatch,
        documentId: agrData.documentId,
        documentVersion: agrData.version,
        contentSha256: agrData.contentSha256,
        signerName: "Test Signer",
        signerEmail: `${marker.toLowerCase()}@example.test`,
        organizationName: `${marker} Co`,
        authorityAttested: true,
        termsAttested: true,
      }),
    });
    const acceptJson = await accept.json().catch(() => ({}));
    check(
      "legal accept fails closed",
      accept.status === 403 ||
        acceptJson?.error?.code === "LEGAL_ACCEPTANCE_DISABLED",
      `status=${accept.status} code=${acceptJson?.error?.code ?? "-"}`,
    );
  }

  check(
    "payment capture disabled in staging env",
    process.env.EXTERNAL_INTAKE_PAYMENT_CAPTURE_ENABLED !== "true",
  );

  const csrf4 = await getCsrf(jar);
  const pay = await fetch(`${SITE}/api/onboarding/billing/continue`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: SITE,
      "x-csrf-token": csrf4,
      cookie: jar.cookieHeader(),
    },
    body: JSON.stringify({}),
  });
  const payJson = await pay.json().catch(() => ({}));
  check(
    "billing continue fails closed without authorization / session",
    pay.status === 403 ||
      pay.status === 400 ||
      payJson?.error?.code === "BILLING_AUTHORIZATION_REQUIRED" ||
      payJson?.error?.code === "FORBIDDEN" ||
      payJson?.error?.code === "VALIDATION_ERROR" ||
      payJson?.error?.code === "SESSION_UNAUTHORIZED",
    `status=${pay.status} code=${payJson?.error?.code ?? "-"}`,
  );

  const csrf5 = await getCsrf(jar);
  const instr = await fetch(`${SITE}/api/onboarding/billing/instruments`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: SITE,
      "x-csrf-token": csrf5,
      cookie: jar.cookieHeader(),
    },
    body: JSON.stringify({
      pan: "4111111111111111",
      cvv: "123",
    }),
  });
  const instrJson = await instr.json().catch(() => ({}));
  check(
    "raw card capture rejected / disabled",
    instr.status === 403 || instr.status >= 400,
    `status=${instr.status} code=${instrJson?.error?.code ?? "-"}`,
  );

  // Disallowed upload type via BFF
  const csrf6 = await getCsrf(jar);
  const form = new FormData();
  form.append(
    "file",
    new Blob([randomBytes(32)], { type: "application/x-msdownload" }),
    `${marker}.exe`,
  );
  const up = await fetch(`${SITE}/api/onboarding/files`, {
    method: "POST",
    headers: {
      origin: SITE,
      "x-csrf-token": csrf6,
      cookie: jar.cookieHeader(),
    },
    body: form,
  });
  check(
    "disallowed upload fails safely",
    up.status >= 400,
    `status=${up.status}`,
  );

  if (failures > 0) abort(`${failures} check(s) failed`);
  console.log("\n[validate-onboarding-staging] all checks passed.");
  console.log(
    `Synthetic marker ${marker} — sessions may remain until platform cleanup sweep by source.`,
  );
}

main().catch((e) => abort(e instanceof Error ? e.message : String(e)));

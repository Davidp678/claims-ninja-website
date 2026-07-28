/**
 * Preview upload-backed Journey A + Journey B (same browser).
 * Uploads a clean PDF, waits for Ready, completes onboarding/handoff,
 * then starts a second claim with a different PDF.
 *
 * Never prints OTP codes, handoff codes, peppers, or service keys.
 *
 * Env: same as preview-onboarding-e2e-handoff-qa.mjs
 *   SMOKE_BASE_URL, EXTERNAL_INTAKE_PLATFORM_URL, bypass, staging supabase
 */
import { createHash, randomBytes } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@supabase/supabase-js";
import { chromium } from "@playwright/test";

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
    out[line.slice(0, eq).trim()] = v;
  }
  return out;
}

function loadEnvFile(path) {
  if (!existsSync(path)) return {};
  return parseEnv(readFileSync(path, "utf8"));
}

function sha256Hex(input) {
  return createHash("sha256").update(input).digest("hex");
}

function hashWithPepper(value, pepper) {
  if (!pepper) return sha256Hex(value);
  return sha256Hex(`${pepper}:${value}`);
}

function crackOtp(codeHash, pepper) {
  for (let i = 0; i < 1_000_000; i += 1) {
    const code = String(i).padStart(6, "0");
    if (hashWithPepper(code, pepper) === codeHash) return code;
  }
  return null;
}

function maskId(id) {
  if (!id || id.length < 12) return id ? `${id.slice(0, 2)}…` : null;
  return `${id.slice(0, 6)}…${id.slice(-4)}`;
}

function makePdf(label) {
  return Buffer.from(
    `%PDF-1.4\n1 0 obj<< /Type /Catalog >>endobj\ntrailer<<>>\n%%EOF\n${label}-${randomBytes(6).toString("hex")}\n`,
  );
}

const websiteEnv = {
  ...loadEnvFile(".tmp/website-preview-smoke.env"),
  ...loadEnvFile(".tmp/website-preview.env"),
};
const platformEnv = loadEnvFile("../claims-ninja-platform/.env.staging.local");

const SITE = (
  process.env.SMOKE_BASE_URL ||
  websiteEnv.SMOKE_BASE_URL ||
  websiteEnv.SITE ||
  ""
).replace(/\/$/, "");
const PLATFORM = (
  process.env.EXTERNAL_INTAKE_PLATFORM_URL ||
  websiteEnv.EXTERNAL_INTAKE_PLATFORM_URL ||
  ""
).replace(/\/$/, "");
const BYPASS = (
  process.env.VERCEL_AUTOMATION_BYPASS_SECRET ||
  websiteEnv.VERCEL_AUTOMATION_BYPASS_SECRET ||
  ""
).trim();

const STAGING_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || platformEnv.NEXT_PUBLIC_SUPABASE_URL;
const STAGING_SERVICE =
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  platformEnv.SUPABASE_SERVICE_ROLE_KEY;
const OTP_PEPPER =
  process.env.EXTERNAL_INTAKE_OTP_PEPPER ||
  platformEnv.EXTERNAL_INTAKE_OTP_PEPPER ||
  platformEnv.EXTERNAL_INTAKE_PEPPER ||
  "";
const HANDLE_PEPPER =
  process.env.EXTERNAL_INTAKE_HANDLE_PEPPER ||
  platformEnv.EXTERNAL_INTAKE_HANDLE_PEPPER ||
  platformEnv.EXTERNAL_INTAKE_PEPPER ||
  "";

if (!SITE || !BYPASS) {
  console.error("Missing SITE/SMOKE_BASE_URL or VERCEL_AUTOMATION_BYPASS_SECRET");
  process.exit(1);
}
if (!STAGING_URL || !STAGING_SERVICE || !OTP_PEPPER || !HANDLE_PEPPER) {
  console.error("Missing staging supabase/OTP/handle peppers");
  process.exit(1);
}

const OUT = resolve("screenshots/preview-onboarding-upload-e2e");
mkdirSync(OUT, { recursive: true });

const stamp = Date.now().toString(36);
const email = `upload.e2e.${stamp}@example.com`;
const password = `UploadE2e!${stamp}Aa1`;
const pdfA = resolve(OUT, "journey-a.pdf");
const pdfB = resolve(OUT, "journey-b.pdf");
writeFileSync(pdfA, makePdf("journey-a"));
writeFileSync(pdfB, makePdf("journey-b"));

const sb = createClient(STAGING_URL, STAGING_SERVICE, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const report = {
  startedAt: new Date().toISOString(),
  site: SITE,
  platform: PLATFORM ? PLATFORM.replace(/\/\/[^.]+/, "//…") : null,
  uploads: "clean_pdf",
  checks: {},
  error: null,
};

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();

async function waitForReady(timeoutMs = 180_000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    const body = await page.locator("body").innerText();
    if (/\bReady\b/.test(body) && /✓/.test(body)) return "ready";
    if (/We couldn’t complete the security scan/i.test(body)) {
      return "scan_unavailable";
    }
    if (/Rejected/i.test(body)) return "rejected";
    await page.waitForTimeout(2_000);
  }
  return "timeout";
}

async function uploadPdf(filePath) {
  const input = page.locator('input[type="file"]').first();
  await input.setInputFiles(filePath);
  await page.waitForTimeout(1_500);
  return waitForReady();
}

try {
  const home = new URL(SITE);
  home.searchParams.set("x-vercel-protection-bypass", BYPASS);
  home.searchParams.set("x-vercel-set-bypass-cookie", "true");
  await page.goto(home.toString(), { waitUntil: "networkidle", timeout: 90_000 });

  await page.locator("#hero-first-name").fill("Avery");
  await page.locator("#hero-last-name").fill(`Upload${stamp}`);
  await page.locator("#hero-property").fill(`Upload Claim A ${stamp}`);
  await page.locator("#hero-loss-type").selectOption("water");

  // Prefer uploading on hero if file input is present; else claim stage.
  const heroInput = page.locator('input[type="file"]').first();
  if (await heroInput.count()) {
    report.checks.journeyAUploadSurface = "hero";
    const state = await uploadPdf(pdfA);
    report.checks.journeyAScan = { state };
    if (state !== "ready") {
      throw new Error(`Journey A hero scan did not reach ready (${state})`);
    }
  }

  await Promise.all([
    page.waitForURL(/\/onboarding\/claim/, { timeout: 90_000 }),
    page.getByRole("button", { name: /continue claim intake/i }).click(),
  ]);
  await page.getByRole("heading", { name: /claim details/i }).waitFor({
    timeout: 90_000,
  });

  if (report.checks.journeyAScan?.state !== "ready") {
    report.checks.journeyAUploadSurface = "claim";
    const state = await uploadPdf(pdfA);
    report.checks.journeyAScan = { state };
    if (state !== "ready") {
      throw new Error(`Journey A claim scan did not reach ready (${state})`);
    }
  }

  await page.screenshot({
    path: resolve(OUT, "journey-a-ready.png"),
    fullPage: true,
  });

  await Promise.all([
    page.waitForURL(/\/onboarding\/company/, { timeout: 90_000 }),
    page.getByRole("button", { name: /continue to company/i }).click(),
  ]);

  await page.locator("#firstName").fill("Avery");
  await page.locator("#lastName").fill(`Upload${stamp}`);
  await page.locator("#title").fill("Owner");
  await page.locator("#mobile").fill("555-0301");
  await page.locator("#email").fill(email);
  await page.locator("#legal").fill(`Upload Co ${stamp}`);
  await page.locator("#dba").fill(`Upload Trade ${stamp}`);
  await page.locator("#companyPhone").fill("555-0302");
  await page.locator("#street").fill("200 Congress Ave");
  await page.locator("#city").fill("Austin");
  await page.locator("#state").selectOption("TX");
  await page.locator("#zip").fill("78701");
  await page.waitForFunction(() => {
    const btn = [...document.querySelectorAll("button")].find((b) =>
      /continue to agreement/i.test(b.textContent || ""),
    );
    return btn && !btn.disabled;
  });
  await Promise.all([
    page.waitForURL(/\/onboarding\/agreement/, { timeout: 90_000 }),
    page.getByRole("button", { name: /continue to agreement/i }).click(),
  ]);
  await page.waitForTimeout(2500);

  const boxes = page.locator('input[type="checkbox"]');
  await boxes.nth(0).check();
  await boxes.nth(1).check();
  await page.waitForTimeout(400);
  await Promise.all([
    page.waitForURL(/\/onboarding\/billing/, { timeout: 90_000 }),
    page.getByRole("button", { name: /agree and continue/i }).click(),
  ]);
  await page.waitForTimeout(2000);

  await page.locator("#billingFirstName").fill("Avery");
  await page.locator("#billingLastName").fill(`Upload${stamp}`);
  await page.locator("#billingTitle").fill("Billing Manager");
  await page.locator("#billingEmail").fill(email);
  await page.locator("#billingPhone").fill("555-0399");
  await page.locator("#legalCompanyName").fill(`Upload Co ${stamp}`);
  await page.locator("#dbaName").fill(`Upload Trade ${stamp}`);
  await page.locator("#apEmail").fill(`ap+upload${stamp}@example.com`);
  await page.locator("#apPhone").fill("555-0388");
  const sameBox = page.getByLabel(
    /Billing address is the same as company address/i,
  );
  if (!(await sameBox.isChecked())) await sameBox.check();
  await page
    .locator('label:has-text("I understand Claims Ninja") input[type="checkbox"]')
    .check();
  await page.waitForTimeout(500);
  await Promise.all([
    page.waitForURL(/\/onboarding\/account/, { timeout: 90_000 }),
    page
      .getByRole("button", {
        name: /complete billing profile|confirm acknowledgement|continue to account/i,
      })
      .click(),
  ]);

  await page.locator("#password").fill(password);
  await page.locator("#confirm").fill(password);
  await page.waitForFunction(() => {
    const btn = [...document.querySelectorAll("button")].find((b) =>
      /send verification code/i.test(b.textContent || ""),
    );
    return btn && !btn.disabled;
  });
  const passwordWait = page.waitForResponse(
    (res) =>
      res.url().includes("/api/onboarding/account/password") &&
      res.request().method() === "POST",
    { timeout: 90_000 },
  );
  await page.getByRole("button", { name: /send verification code/i }).click();
  const passwordRes = await passwordWait;
  const passwordJson = await passwordRes.json().catch(() => null);
  if (!passwordJson?.ok) {
    throw new Error(
      `Password submit failed: ${passwordJson?.error?.code ?? passwordRes.status()}`,
    );
  }
  await page.waitForURL(/\/onboarding\/verify/, { timeout: 90_000 });
  await page.waitForTimeout(1500);

  const cookie = (await context.cookies()).find(
    (c) => c.name === "cn_intake_handle",
  )?.value;
  if (!cookie) throw new Error("Missing intake handle cookie after password");
  const handleHash = hashWithPepper(cookie, HANDLE_PEPPER);
  const { data: sess, error: sessErr } = await sb
    .from("external_intake_sessions")
    .select("id, status, stage, organization_id, auth_user_id, claim_id")
    .eq("handle_hash", handleHash)
    .maybeSingle();
  if (sessErr || !sess?.id) {
    throw new Error(`Session not found for OTP crack: ${sessErr?.message ?? "missing"}`);
  }

  const { data: otpRow, error: otpErr } = await sb
    .from("intake_otp_challenges")
    .select("code_hash, created_at")
    .eq("intake_session_id", sess.id)
    .is("consumed_at", null)
    .order("created_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  const otp = otpRow?.code_hash
    ? crackOtp(otpRow.code_hash, OTP_PEPPER)
    : null;
  if (!otp) {
    throw new Error(`Unable to resolve OTP: ${otpErr?.message ?? "no challenge"}`);
  }

  const digits = page.locator('input[maxlength="1"]');
  await digits.first().waitFor({ timeout: 30_000 });
  for (let i = 0; i < 6; i += 1) {
    await digits.nth(i).fill(otp[i]);
  }
  await Promise.all([
    page.waitForURL(/\/onboarding\/activated/, { timeout: 120_000 }),
    page.getByRole("button", { name: /verify.*workspace/i }).click(),
  ]);

  const provisionDeadline = Date.now() + 240_000;
  while (Date.now() < provisionDeadline) {
    const activatedText = await page.locator("body").innerText();
    if (/your workspace is ready/i.test(activatedText)) break;
    const retryBtn = page.getByRole("button", { name: /retry setup/i });
    if (await retryBtn.count()) {
      await retryBtn.click();
      await page.waitForTimeout(2000);
      continue;
    }
    await page.waitForTimeout(2000);
  }

  const openBtn = page.getByRole("button", { name: /open claim workspace/i });
  await openBtn.waitFor({ timeout: 120_000 });
  await Promise.all([
    page.waitForURL(/\/(auth\/intake-handoff|dashboard\/claims\/)/i, {
      timeout: 120_000,
    }),
    openBtn.click(),
  ]);
  await page.waitForURL(/\/dashboard\/claims\/[0-9a-f-]{36}/i, {
    timeout: 120_000,
  });
  const claimUrlA = page.url();
  const claimIdA = claimUrlA.match(
    /\/dashboard\/claims\/([0-9a-f-]{36})/i,
  )?.[1];

  // Refresh session org/owner after provision
  const { data: sessAfter } = await sb
    .from("external_intake_sessions")
    .select("id, organization_id, auth_user_id, claim_id, status")
    .eq("id", sess.id)
    .maybeSingle();

  report.checks.journeyA = {
    sessionId: maskId(sess.id),
    organizationId: maskId(sessAfter?.organization_id ?? sess.organization_id),
    ownerUserId: maskId(sessAfter?.auth_user_id ?? sess.auth_user_id),
    claimId: maskId(claimIdA ?? sessAfter?.claim_id),
    destinationHost: new URL(claimUrlA).host,
    scanReady: report.checks.journeyAScan?.state === "ready",
  };
  await page.screenshot({
    path: resolve(OUT, "journey-a-workspace.png"),
    fullPage: true,
  });

  // Journey B — same browser, different claim + PDF
  const homeB = new URL(SITE);
  homeB.searchParams.set("x-vercel-protection-bypass", BYPASS);
  homeB.searchParams.set("x-vercel-set-bypass-cookie", "true");
  await page.goto(homeB.toString(), { waitUntil: "networkidle", timeout: 90_000 });
  await page.locator("#hero-first-name").fill("Avery");
  await page.locator("#hero-last-name").fill(`Upload${stamp}`);
  await page.locator("#hero-property").fill(`Upload Claim B ${stamp}`);
  await page.locator("#hero-loss-type").selectOption("fire");
  const stateB = await uploadPdf(pdfB);
  report.checks.journeyBScan = { state: stateB };
  if (stateB !== "ready") {
    throw new Error(`Journey B scan did not reach ready (${stateB})`);
  }
  await Promise.all([
    page.waitForURL(/\/onboarding\/claim/, { timeout: 90_000 }),
    page.getByRole("button", { name: /continue claim intake/i }).click(),
  ]);

  // Fast-path remaining stages for Journey B (reuse identity)
  await page.getByRole("button", { name: /continue to company/i }).click();
  await page.waitForURL(/\/onboarding\/company/, { timeout: 90_000 });
  // Company may be prefilled for returning contractor — fill required if empty
  if (!(await page.locator("#email").inputValue())) {
    await page.locator("#firstName").fill("Avery");
    await page.locator("#lastName").fill(`Upload${stamp}`);
    await page.locator("#title").fill("Owner");
    await page.locator("#mobile").fill("555-0301");
    await page.locator("#email").fill(email);
    await page.locator("#legal").fill(`Upload Co ${stamp}`);
    await page.locator("#dba").fill(`Upload Trade ${stamp}`);
    await page.locator("#companyPhone").fill("555-0302");
    await page.locator("#street").fill("200 Congress Ave");
    await page.locator("#city").fill("Austin");
    await page.locator("#state").selectOption("TX");
    await page.locator("#zip").fill("78701");
  }
  await page.getByRole("button", { name: /continue to agreement/i }).click();
  await page.waitForURL(/\/onboarding\/agreement/, { timeout: 90_000 });
  await page.waitForTimeout(2000);
  const boxesB = page.locator('input[type="checkbox"]');
  if (await boxesB.count()) {
    await boxesB.nth(0).check().catch(() => {});
    await boxesB.nth(1).check().catch(() => {});
  }
  const agreeBtn = page.getByRole("button", { name: /agree and continue|continue/i });
  if (await agreeBtn.count()) await agreeBtn.first().click();
  await page.waitForTimeout(2000);

  // If billing appears again
  if (/\/onboarding\/billing/.test(page.url())) {
    await page.locator("#billingFirstName").fill("Avery").catch(() => {});
    await page.locator("#billingLastName").fill(`Upload${stamp}`).catch(() => {});
    await page
      .locator('label:has-text("I understand Claims Ninja") input[type="checkbox"]')
      .check()
      .catch(() => {});
    await page
      .getByRole("button", {
        name: /complete billing profile|confirm acknowledgement|continue to account/i,
      })
      .click()
      .catch(() => {});
  }

  // Account/OTP may be skipped if already authenticated — wait for activated or claim
  await page.waitForTimeout(3000);
  const openB = page.getByRole("button", { name: /open claim workspace/i });
  if (await openB.count()) {
    await Promise.all([
      page.waitForURL(/\/(auth\/intake-handoff|dashboard\/claims\/)/i, {
        timeout: 120_000,
      }),
      openB.click(),
    ]);
    await page.waitForURL(/\/dashboard\/claims\/[0-9a-f-]{36}/i, {
      timeout: 120_000,
    });
  }

  const claimUrlB = page.url();
  const claimIdB = claimUrlB.match(
    /\/dashboard\/claims\/([0-9a-f-]{36})/i,
  )?.[1];

  const cookieB = (await context.cookies()).find(
    (c) => c.name === "cn_intake_handle",
  )?.value;
  let sessB = null;
  if (cookieB) {
    const handleHashB = hashWithPepper(cookieB, HANDLE_PEPPER);
    const { data } = await sb
      .from("external_intake_sessions")
      .select("id, organization_id, auth_user_id, claim_id, status")
      .eq("handle_hash", handleHashB)
      .maybeSingle();
    sessB = data;
  }

  const claimARaw = claimIdA ?? null;
  const claimBRaw = claimIdB ?? sessB?.claim_id ?? null;
  const orgARaw = sessAfter?.organization_id ?? sess.organization_id ?? null;
  const ownerARaw = sessAfter?.auth_user_id ?? sess.auth_user_id ?? null;
  report.checks.journeyB = {
    sessionId: maskId(sessB?.id),
    organizationId: maskId(sessB?.organization_id),
    ownerUserId: maskId(sessB?.auth_user_id),
    claimId: maskId(claimBRaw),
    scanReady: stateB === "ready",
    distinctClaim: Boolean(claimARaw && claimBRaw && claimARaw !== claimBRaw),
    sameOrganization: Boolean(
      orgARaw && sessB?.organization_id && orgARaw === sessB.organization_id,
    ),
    sameOwner: Boolean(
      ownerARaw && sessB?.auth_user_id && ownerARaw === sessB.auth_user_id,
    ),
  };

  await page.screenshot({
    path: resolve(OUT, "journey-b-workspace.png"),
    fullPage: true,
  });
} catch (err) {
  report.error = err instanceof Error ? err.message : String(err);
  await page
    .screenshot({ path: resolve(OUT, "failure.png"), fullPage: true })
    .catch(() => {});
}

await browser.close();
report.finishedAt = new Date().toISOString();
report.pass = Boolean(
  !report.error &&
    report.checks.journeyA?.scanReady &&
    report.checks.journeyA?.claimId &&
    report.checks.journeyB?.scanReady &&
    report.checks.journeyB?.distinctClaim,
);
writeFileSync(resolve(OUT, "report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exit(report.pass ? 0 : 1);

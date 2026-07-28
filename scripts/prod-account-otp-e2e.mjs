/**
 * Production Account OTP closeout proof.
 * - Invalid password: exact blocker, no /account/password request
 * - Valid send: loading → Resend-backed success → mailbox receipt → verify → workspace
 * Requires Production platform env via:
 *   cd ../claims-ninja-platform && npx vercel env run -e production -- node ../claims-ninja-website/scripts/prod-account-otp-e2e.mjs
 */
import { createHash, randomBytes } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { createClient } from "@supabase/supabase-js";
import { chromium } from "@playwright/test";

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
function extractOtp(text) {
  const m = String(text || "").match(/\b(\d{6})\b/);
  return m ? m[1] : null;
}
function maskId(id) {
  if (!id || id.length < 12) return id ? `${String(id).slice(0, 2)}…` : null;
  return `${id.slice(0, 6)}…${id.slice(-4)}`;
}
function makePdf(label) {
  return Buffer.from(
    `%PDF-1.4\n1 0 obj<< /Type /Catalog >>endobj\ntrailer<<>>\n%%EOF\n${label}-${randomBytes(8).toString("hex")}\n`,
  );
}

async function createTempMailbox() {
  const domainsRes = await fetch("https://api.mail.tm/domains");
  if (!domainsRes.ok) throw new Error(`mail.tm domains failed: ${domainsRes.status}`);
  const domainsJson = await domainsRes.json();
  const domains = domainsJson["hydra:member"] || domainsJson;
  const domain = domains?.[0]?.domain;
  if (!domain) throw new Error("mail.tm: no domain");
  const address = `cnotp${Date.now().toString(36)}@${domain}`;
  const password = `Otp-${randomBytes(8).toString("hex")}!Aa1`;
  const createRes = await fetch("https://api.mail.tm/accounts", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ address, password }),
  });
  if (!createRes.ok) throw new Error(`mail.tm create failed: ${createRes.status}`);
  const tokenRes = await fetch("https://api.mail.tm/token", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ address, password }),
  });
  if (!tokenRes.ok) throw new Error(`mail.tm token failed: ${tokenRes.status}`);
  const tokenJson = await tokenRes.json();
  if (!tokenJson.token) throw new Error("mail.tm token missing");
  return { address, token: tokenJson.token };
}

async function waitForOtpFromMailbox(token, { timeoutMs = 120_000 } = {}) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    const listRes = await fetch("https://api.mail.tm/messages", {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (listRes.ok) {
      const listJson = await listRes.json();
      const messages = listJson["hydra:member"] || [];
      for (const msg of messages) {
        const fullRes = await fetch(`https://api.mail.tm/messages/${msg.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!fullRes.ok) continue;
        const full = await fullRes.json();
        const blob = `${full.subject || ""}\n${full.text || ""}\n${full.intro || ""}`;
        if (!/Claims Ninja|verification code/i.test(blob)) continue;
        const code = extractOtp(blob);
        if (code) {
          return {
            code,
            subject: full.subject || null,
            receivedAt: full.createdAt || null,
          };
        }
      }
    }
    await new Promise((r) => setTimeout(r, 2500));
  }
  return null;
}

const SITE = (process.env.SMOKE_BASE_URL || "https://www.theclaimsninja.com").replace(
  /\/$/,
  "",
);
const PROD_SUPABASE_REF = "upwowfigsmhicdrfgepg";
const SUPABASE_URL = (process.env.NEXT_PUBLIC_SUPABASE_URL || "").trim();
const SUPABASE_SERVICE = (process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();
const OTP_PEPPER = (
  process.env.EXTERNAL_INTAKE_OTP_PEPPER ||
  process.env.EXTERNAL_INTAKE_PEPPER ||
  ""
).trim();
const HANDLE_PEPPER = (
  process.env.EXTERNAL_INTAKE_HANDLE_PEPPER ||
  process.env.EXTERNAL_INTAKE_PEPPER ||
  ""
).trim();

const OUT = resolve("screenshots/prod-account-otp-e2e");
mkdirSync(OUT, { recursive: true });
const pdfPath = resolve(OUT, "claim.pdf");
writeFileSync(pdfPath, makePdf("otp-e2e"));

const report = {
  site: SITE,
  startedAt: new Date().toISOString(),
  checks: {},
  pass: false,
  issue: null,
};

if (!SUPABASE_URL || !SUPABASE_SERVICE) {
  report.issue = "Missing Production Supabase";
  writeFileSync(resolve(OUT, "report.json"), JSON.stringify(report, null, 2));
  process.exit(1);
}
if (!new URL(SUPABASE_URL).host.startsWith(`${PROD_SUPABASE_REF}.`)) {
  report.issue = "Refusing non-production Supabase";
  writeFileSync(resolve(OUT, "report.json"), JSON.stringify(report, null, 2));
  process.exit(1);
}

const sb = createClient(SUPABASE_URL, SUPABASE_SERVICE, {
  auth: { persistSession: false, autoRefreshToken: false },
});

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const passwordRequests = [];
page.on("request", (req) => {
  if (req.url().includes("/api/onboarding/account/password") && req.method() === "POST") {
    passwordRequests.push({ url: req.url(), at: Date.now() });
  }
});

try {
  const mailbox = await createTempMailbox();
  const stamp = Date.now().toString(36);
  const email = mailbox.address;
  const weakPassword = "CorrectHorse12"; // missing special
  const strongPassword = `OtpClose-${stamp}-Aa1!`;
  report.checks.mailboxDomain = email.split("@")[1] || null;

  await page.goto(SITE, { waitUntil: "networkidle", timeout: 90_000 });
  await page.locator("#hero-first-name").fill("Casey");
  await page.locator("#hero-last-name").fill(`Otp${stamp}`);
  await page.locator("#hero-property").fill(`OTP Proof ${stamp}`);
  await page.locator("#hero-loss-type").selectOption("water");
  await page.locator('input[type="file"]').first().setInputFiles(pdfPath);
  await page.waitForFunction(
    () => /\bReady\b/.test(document.body.innerText || "") && /✓/.test(document.body.innerText || ""),
    null,
    { timeout: 180_000 },
  );
  await Promise.all([
    page.waitForURL(/\/onboarding\/claim/, { timeout: 90_000 }),
    page.getByRole("button", { name: /continue claim intake/i }).click(),
  ]);
  await page.getByRole("button", { name: /continue to company/i }).click();
  await page.waitForURL(/\/onboarding\/company/, { timeout: 90_000 });

  await page.locator("#firstName").fill("Casey");
  await page.locator("#lastName").fill(`Otp${stamp}`);
  await page.locator("#title").fill("Owner");
  await page.locator("#mobile").fill("555-0101");
  await page.locator("#email").fill(email);
  await page.locator("#legal").fill(`OTP Proof Co ${stamp}`);
  await page.locator("#dba").fill(`OTP Trade ${stamp}`);
  await page.locator("#companyPhone").fill("555-0102");
  await page.locator("#street").fill("100 Congress Ave");
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
  await page.waitForTimeout(2000);
  const boxes = page.locator('input[type="checkbox"]');
  const n = await boxes.count();
  for (let i = 0; i < n; i += 1) await boxes.nth(i).check().catch(() => {});
  await Promise.all([
    page.waitForURL(/\/onboarding\/(billing|account)/, { timeout: 90_000 }),
    page.getByRole("button", { name: /agree and continue/i }).click(),
  ]);
  if (/\/onboarding\/billing/.test(page.url())) {
    await page.locator("#billingFirstName").fill("Casey").catch(() => {});
    await page.locator("#billingLastName").fill(`Otp${stamp}`).catch(() => {});
    await page.locator("#billingTitle").fill("Billing").catch(() => {});
    await page.locator("#billingEmail").fill(email).catch(() => {});
    await page.locator("#billingPhone").fill("555-0199").catch(() => {});
    await page.locator("#legalCompanyName").fill(`OTP Proof Co ${stamp}`).catch(() => {});
    await page.locator("#dbaName").fill(`OTP Trade ${stamp}`).catch(() => {});
    await page.locator("#apEmail").fill(`ap+${stamp}@example.com`).catch(() => {});
    await page.locator("#apPhone").fill("555-0188").catch(() => {});
    const sameBox = page.getByLabel(/Billing address is the same as company address/i);
    if (await sameBox.count()) {
      if (!(await sameBox.isChecked())) await sameBox.check();
    }
    await page
      .locator('label:has-text("I understand Claims Ninja") input[type="checkbox"]')
      .check()
      .catch(() => {});
    await page
      .getByRole("button", {
        name: /complete billing profile|confirm acknowledgement|continue to account/i,
      })
      .click();
    await page.waitForURL(/\/onboarding\/account/, { timeout: 90_000 });
  }

  // --- Invalid password: no request ---
  passwordRequests.length = 0;
  await page.locator("#password").fill(weakPassword);
  await page.locator("#confirm").fill(weakPassword);
  await page.waitForTimeout(500);
  const sendBtn = page.getByRole("button", { name: /send verification code/i });
  const disabled = await sendBtn.isDisabled();
  const bodyText = await page.locator("body").innerText();
  const blockerVisible = /Add one special character to continue/i.test(bodyText);
  const noEmailYet = /No verification email has been sent yet/i.test(bodyText);
  report.checks.invalidForm = {
    ctaDisabled: disabled,
    blockerVisible,
    noEmailYetCopy: noEmailYet,
    passwordRequests: passwordRequests.length,
  };
  if (!disabled || !blockerVisible || passwordRequests.length !== 0) {
    throw new Error("Invalid-form gate failed");
  }
  await page.screenshot({ path: resolve(OUT, "01-invalid-blocker.png"), fullPage: false });

  // --- Valid send ---
  passwordRequests.length = 0;
  await page.locator("#password").fill(strongPassword);
  await page.locator("#confirm").fill(strongPassword);
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
  await sendBtn.click();
  const sendingVisible = await page
    .getByRole("button", { name: /sending verification code/i })
    .isVisible()
    .catch(() => false);
  const passwordRes = await passwordWait;
  const passwordJson = await passwordRes.json().catch(() => null);
  report.checks.validSend = {
    sendingVisible,
    httpStatus: passwordRes.status(),
    ok: passwordJson?.ok ?? null,
    emailSent: passwordJson?.data?.emailSent ?? null,
    passwordRequestCount: passwordRequests.length,
  };
  if (!passwordJson?.ok || passwordRequests.length !== 1) {
    throw new Error(
      `Password submit failed: ${passwordJson?.error?.code ?? passwordRes.status()}`,
    );
  }
  await page.waitForURL(/\/onboarding\/verify/, { timeout: 90_000 });
  await page.screenshot({ path: resolve(OUT, "02-verify-stage.png"), fullPage: false });

  // Mailbox receipt (authoritative)
  let mail = await waitForOtpFromMailbox(mailbox.token, { timeoutMs: 120_000 });
  let otpCode = mail?.code ?? null;
  if (!otpCode) {
    const handle = (await context.cookies()).find(
      (c) => c.name === "cn_intake_handle",
    )?.value;
    if (handle && HANDLE_PEPPER && OTP_PEPPER) {
      const { data: sess } = await sb
        .from("external_intake_sessions")
        .select("id")
        .eq("handle_hash", hashWithPepper(handle, HANDLE_PEPPER))
        .maybeSingle();
      if (sess?.id) {
        const { data: challenge } = await sb
          .from("intake_otp_challenges")
          .select("code_hash, consumed_at")
          .eq("intake_session_id", sess.id)
          .is("consumed_at", null)
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();
        if (challenge?.code_hash) {
          otpCode = crackOtp(challenge.code_hash, OTP_PEPPER);
          report.checks.otpSource = "db_crack_fallback";
        }
      }
    }
  } else {
    report.checks.otpSource = "mailbox_receipt";
  }
  report.checks.mailbox = {
    received: Boolean(mail?.code),
    subjectPresent: Boolean(mail?.subject),
    // Never include the code in the report.
  };
  if (!otpCode) throw new Error("OTP not received in mailbox and crack fallback failed");
  if (!mail?.code) {
    throw new Error(
      "Release gate: mailbox did not receive the OTP email (Resend 2xx alone is insufficient)",
    );
  }

  const digits = page.locator('input[maxlength="1"]');
  await digits.first().waitFor({ timeout: 30_000 });
  for (let i = 0; i < 6; i += 1) await digits.nth(i).fill(otpCode[i]);
  await Promise.all([
    page.waitForURL(/\/onboarding\/activated/, { timeout: 120_000 }),
    page.getByRole("button", { name: /verify.*workspace/i }).click(),
  ]);
  await page.waitForFunction(
    () => /your workspace is ready/i.test(document.body.innerText || ""),
    null,
    { timeout: 240_000 },
  );
  const openBtn = page.getByRole("button", { name: /open claim workspace/i });
  await openBtn.waitFor({ timeout: 180_000 });
  await Promise.all([
    page.waitForURL(/\/(auth\/intake-handoff|dashboard\/claims\/)/i, {
      timeout: 120_000,
    }),
    openBtn.click(),
  ]);
  await page.waitForURL(/\/dashboard\/claims\/[0-9a-f-]{36}/i, {
    timeout: 120_000,
  });
  const destUrl = page.url();
  const claimId = destUrl.match(/\/dashboard\/claims\/([0-9a-f-]{36})/i)?.[1];
  report.checks.workspace = {
    host: new URL(destUrl).host,
    claimId: maskId(claimId),
  };

  const handle = (await context.cookies()).find(
    (c) => c.name === "cn_intake_handle",
  )?.value;
  let sess = null;
  if (handle && HANDLE_PEPPER) {
    const { data } = await sb
      .from("external_intake_sessions")
      .select("id, organization_id, auth_user_id, claim_id, status")
      .eq("handle_hash", hashWithPepper(handle, HANDLE_PEPPER))
      .maybeSingle();
    sess = data;
  }
  report.checks.session = {
    sessionId: maskId(sess?.id),
    organizationId: maskId(sess?.organization_id),
    ownerUserId: maskId(sess?.auth_user_id),
    claimId: maskId(sess?.claim_id ?? claimId),
    status: sess?.status ?? null,
  };

  if (sess?.organization_id && sess?.auth_user_id) {
    const { count: orgMembers } = await sb
      .from("organization_members")
      .select("id", { count: "exact", head: true })
      .eq("organization_id", sess.organization_id)
      .eq("user_id", sess.auth_user_id);
    const { count: claims } = await sb
      .from("claims")
      .select("id", { count: "exact", head: true })
      .eq("external_intake_session_id", sess.id);
    report.checks.duplicateAudit = {
      orgMembershipRows: orgMembers ?? null,
      claimsForSession: claims ?? null,
    };
  }

  await page.screenshot({ path: resolve(OUT, "03-workspace.png"), fullPage: false });

  report.pass = Boolean(
    report.checks.invalidForm?.ctaDisabled &&
      report.checks.invalidForm?.blockerVisible &&
      report.checks.invalidForm?.passwordRequests === 0 &&
      report.checks.validSend?.ok &&
      report.checks.validSend?.passwordRequestCount === 1 &&
      report.checks.mailbox?.received &&
      report.checks.otpSource === "mailbox_receipt" &&
      report.checks.workspace?.host === "app.theclaimsninja.com",
  );
  if (!report.pass) {
    report.issue = "One or more Account OTP closeout gates failed";
  }
} catch (err) {
  report.issue = err instanceof Error ? err.message : String(err);
  await page
    .screenshot({ path: resolve(OUT, "failure.png"), fullPage: true })
    .catch(() => {});
}

await browser.close();
report.finishedAt = new Date().toISOString();
writeFileSync(resolve(OUT, "report.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
process.exit(report.pass ? 0 : 1);

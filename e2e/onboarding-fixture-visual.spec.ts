import { test, expect } from "@playwright/test";
import path from "node:path";
import { mkdirSync } from "node:fs";

/**
 * FIXTURE-DRIVEN visual QA (not live providers).
 * Uses Playwright route mocks to render upload/OTP/provision/handoff states.
 * Screenshots → .qa-artifacts/onboarding-fixture-visual (gitignored).
 */

const BASE = process.env.SMOKE_BASE_URL || "http://127.0.0.1:3000";
const OUT = path.join(process.cwd(), ".qa-artifacts", "onboarding-fixture-visual");

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
] as const;

function file(state: string, name = "estimate.pdf") {
  return {
    id: `file-${state}`,
    filename: name,
    sizeBytes: 120_000,
    securityState: state,
    contentType: "application/pdf",
  };
}

async function mockSession(
  page: import("@playwright/test").Page,
  files: ReturnType<typeof file>[],
  extras: Record<string, unknown> = {},
) {
  await page.route("**/api/onboarding/session", async (route) => {
    if (route.request().method() !== "GET") {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ ok: true, data: { version: 2 } }),
      });
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        ok: true,
        data: {
          status: "claim",
          stage: "claim",
          version: 2,
          claim: { propertyOrJobName: "Fixture Job" },
          company: { legalCompanyName: "Fixture Co", workEmail: "owner@fixture.test" },
          files,
          accountEmail: "owner@fixture.test",
          ...extras,
        },
        error: null,
      }),
    });
  });
  await page.route("**/api/onboarding/csrf", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true, data: { csrfToken: "fixture-csrf" } }),
    });
  });
}

async function shot(
  page: import("@playwright/test").Page,
  name: string,
  viewport: (typeof VIEWPORTS)[number],
) {
  mkdirSync(OUT, { recursive: true });
  await page.screenshot({
    path: path.join(OUT, `${viewport.name}-${name}.png`),
    fullPage: true,
  });
}

for (const viewport of VIEWPORTS) {
  test.describe(`fixture visual ${viewport.name}`, () => {
    test.use({
      viewport: { width: viewport.width, height: viewport.height },
      baseURL: BASE,
    });

    test("upload progress / quarantine / scanner unavailable / errors", async ({
      page,
    }) => {
      await mockSession(page, [
        file("uploading", "progress.pdf"),
        file("uploaded", "quarantine.pdf"),
        file("scan_unavailable", "scanner.pdf"),
        file("rejected", "bad.exe"),
        file("failed", "interrupted.pdf"),
        file("ready", "clean.pdf"),
      ]);
      await page.goto("/onboarding/claim");
      await expect(page.getByText("Uploading…")).toBeVisible();
      await expect(page.getByText("Protected — scan unavailable")).toBeVisible();
      await expect(page.getByText("Rejected")).toBeVisible();
      await expect(page.getByText("Failed")).toBeVisible();
      await shot(page, "upload-states", viewport);

      // Disallowed / oversize banner errors via fixture upload API mock
      await page.route("**/api/onboarding/files", async (route) => {
        if (route.request().method() !== "POST") {
          await route.continue();
          return;
        }
        await route.fulfill({
          status: 400,
          contentType: "application/json",
          body: JSON.stringify({
            ok: false,
            data: null,
            error: {
              code: "VALIDATION_ERROR",
              message: "This file type is not allowed, or the file is over 50 MB.",
            },
          }),
        });
      });
      // Use an accepted extension so the browser input accepts the file; API mock
      // still returns the disallowed/oversize validation message (fixture-driven).
      await page.setInputFiles('input[type="file"]', {
        name: "too-large.pdf",
        mimeType: "application/pdf",
        buffer: Buffer.from("%PDF-1.4 fixture"),
      });
      await expect(
        page.getByText(/not allowed|over 50/i).first(),
      ).toBeVisible();
      await shot(page, "upload-disallowed-oversize", viewport);
    });

    test("provisioning loading state", async ({ page }) => {
      await mockSession(page, [], { stage: "activated", status: "verified" });
      await page.route("**/api/onboarding/provision", async (route) => {
        await new Promise((r) => setTimeout(r, 2500));
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            ok: true,
            data: { status: "running" },
            error: null,
          }),
        });
      });
      await page.goto("/onboarding/activated");
      await expect(page.getByText(/setting up your workspace/i)).toBeVisible();
      await shot(page, "provision-loading", viewport);
    });

    test("legal clickwrap default / enabled / unavailable", async ({ page }) => {
      await mockSession(page, [], {
        stage: "agreement",
        status: "verified",
        accountEmail: "owner@fixture.test",
        company: {
          legalCompanyName: "Fixture Co",
          workEmail: "owner@fixture.test",
          firstName: "Pat",
          lastName: "Owner",
        },
      });
      const agreementPackage = (privacyPlaceholder: boolean) => ({
        ok: true,
        data: {
          documentId: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
          title: "Consulting Agreement",
          displayTitle: "Claims Ninja Terms of Service",
          version: "2026-06-10",
          effectiveDate: "2026-06-10",
          effectiveDateDisplay: "June 10, 2026",
          contentSha256:
            "30142d8d0b9452de83b7cf41f92e7094a413e813af3325e74e343e639aae948d",
          acceptanceEnabled: true,
          textPreview: "Fixture Terms of Service body for visual QA.",
          approvedAcceptanceLanguage:
            "I have read and agree to the Claims Ninja Terms of Service and acknowledge the Privacy Policy. I consent to use electronic records and signatures for this onboarding process.",
          privacy: {
            documentId: "b2c3d4e5-f6a7-8901-bcde-f12345678901",
            title: "Privacy Policy",
            version: "staging-placeholder-2026-07-23",
            effectiveDate: "2026-07-23",
            effectiveDateDisplay: "July 23, 2026",
            contentSha256:
              "40a3971ab186f598b1ec2ac925ccfe30573b360246560076cadce353241b5e38",
            textPreview: privacyPlaceholder
              ? "[STAGING PLACEHOLDER — NOT APPROVED LEGAL TEXT]\nFixture privacy body."
              : "Fixture Privacy Policy body for approved-content-ready visual QA.",
            stagingPlaceholder: privacyPlaceholder,
          },
        },
        error: null,
      });

      await page.route("**/api/onboarding/agreement", async (route) => {
        if (route.request().url().includes("accept")) {
          await route.continue();
          return;
        }
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify(agreementPackage(true)),
        });
      });
      await page.goto("/onboarding/agreement");
      await expect(page.getByRole("button", { name: /agree and continue/i })).toBeDisabled();
      await shot(page, "legal-clickwrap-default", viewport);
      await page.getByLabel(/authorized to bind/i).check();
      await page
        .getByText(/I have read and agree to the Claims Ninja Terms of Service/i)
        .click();
      // Placeholder Privacy stays fail-closed even with checkboxes attested.
      await expect(page.getByRole("button", { name: /agree and continue/i })).toBeDisabled();
      await expect(page.getByText(/staging placeholder and cannot be accepted/i)).toBeVisible();

      await page.unroute("**/api/onboarding/agreement");
      await page.route("**/api/onboarding/agreement", async (route) => {
        if (route.request().url().includes("accept")) {
          await route.continue();
          return;
        }
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify(agreementPackage(false)),
        });
      });
      await page.goto("/onboarding/agreement");
      await page.getByLabel(/authorized to bind/i).check();
      await page
        .getByText(/I have read and agree to the Claims Ninja Terms of Service/i)
        .click();
      await expect(page.getByRole("button", { name: /agree and continue/i })).toBeEnabled();
      await shot(page, "legal-clickwrap-ready", viewport);

      await page.unroute("**/api/onboarding/agreement");
      await page.route("**/api/onboarding/agreement", async (route) => {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            ok: true,
            data: { configurationError: "LEGAL_UNAVAILABLE", acceptanceEnabled: false },
            error: null,
          }),
        });
      });
      await page.goto("/onboarding/agreement");
      await expect(page.getByText(/unavailable|does not match/i).first()).toBeVisible();
      await shot(page, "legal-clickwrap-unavailable", viewport);
    });

    test("OTP invalid and resend cooldown", async ({ page }) => {
      await mockSession(page, [], {
        stage: "verification",
        status: "awaiting_verification",
        accountEmail: "owner@fixture.test",
      });
      await page.route("**/api/onboarding/account/otp/verify", async (route) => {
        await route.fulfill({
          status: 400,
          contentType: "application/json",
          body: JSON.stringify({
            ok: false,
            data: null,
            error: { code: "VALIDATION_ERROR", message: "Invalid or expired code." },
          }),
        });
      });
      await page.goto("/onboarding/verify");
      await expect(page.getByText(/verify your email/i)).toBeVisible();
      for (let i = 0; i < 6; i++) {
        await page.getByLabel(`Digit ${i + 1}`).fill(String(i + 1));
      }
      await page.getByRole("button", { name: /verify & create workspace/i }).click();
      await expect(page.getByText(/invalid or expired code/i)).toBeVisible();
      await expect(page.getByRole("button", { name: /resend code in/i })).toBeDisabled();
      await shot(page, "otp-invalid-cooldown", viewport);
    });

    test("provisioning loading / failure / handoff error", async ({ page }) => {
      await mockSession(page, [], { stage: "activated", status: "verified" });
      await page.route("**/api/onboarding/provision", async (route) => {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            ok: true,
            data: { status: "failed_retryable" },
            error: null,
          }),
        });
      });
      await page.route("**/api/onboarding/handoff", async (route) => {
        await route.fulfill({
          status: 400,
          contentType: "application/json",
          body: JSON.stringify({
            ok: false,
            data: null,
            error: { code: "INVALID_STATE", message: "Handoff is not available yet." },
          }),
        });
      });
      await page.goto("/onboarding/activated");
      await expect(
        page.getByRole("heading", { name: /needs attention/i }),
      ).toBeVisible();
      await expect(page.getByRole("button", { name: /retry setup/i })).toBeVisible();
      await shot(page, "provision-failure-retry", viewport);

      // Success path fixture
      await page.unroute("**/api/onboarding/provision");
      await page.route("**/api/onboarding/provision", async (route) => {
        await route.fulfill({
          status: 200,
          contentType: "application/json",
          body: JSON.stringify({
            ok: true,
            data: {
              status: "completed",
              organizationName: "Fixture Co",
              ownerName: "Pat Owner",
              claimTitle: "Fixture Job",
              readyFileCount: 1,
            },
            error: null,
          }),
        });
      });
      await page.goto("/onboarding/activated");
      await expect(page.getByText(/workspace is ready/i)).toBeVisible();
      await shot(page, "handoff-success-ready", viewport);
      await page.getByRole("button", { name: /open claim workspace/i }).click();
      await expect(page.getByText(/handoff is not available/i)).toBeVisible();
      await shot(page, "handoff-invalid", viewport);
    });
  });
}

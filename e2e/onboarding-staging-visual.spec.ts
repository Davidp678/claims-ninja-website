import { test, expect } from "@playwright/test";
import path from "node:path";
import { mkdirSync } from "node:fs";

/**
 * Staging visual QA for onboarding surfaces (desktop + mobile).
 * Screenshots written under .qa-artifacts/ (gitignored) — do not commit.
 *
 * Requires: website + platform staging servers; SMOKE_BASE_URL default http://127.0.0.1:3000
 */

const BASE = process.env.SMOKE_BASE_URL || "http://127.0.0.1:3000";
const OUT = path.join(process.cwd(), ".qa-artifacts", "onboarding-visual");

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
] as const;

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
  test.describe(`onboarding visual ${viewport.name}`, () => {
    test.use({
      viewport: { width: viewport.width, height: viewport.height },
      baseURL: BASE,
    });

    test("hero intake entry", async ({ page }) => {
      await page.goto("/");
      await expect(page.locator("body")).toBeVisible();
      await shot(page, "hero-intake", viewport);
    });

    test("claim stage shell", async ({ page }) => {
      await page.goto("/onboarding/claim");
      await expect(page.locator("body")).toBeVisible();
      await shot(page, "claim-stage", viewport);
    });

    test("company stage", async ({ page }) => {
      await page.goto("/onboarding/company");
      await shot(page, "company-stage", viewport);
    });

    test("agreement legal gate", async ({ page }) => {
      await page.goto("/onboarding/agreement");
      await shot(page, "agreement-legal-gate", viewport);
      const blocked = page.getByText(/legal acceptance is currently disabled/i);
      if (await blocked.count()) {
        await expect(blocked.first()).toBeVisible();
      }
    });

    test("billing stage", async ({ page }) => {
      await page.goto("/onboarding/billing");
      await shot(page, "billing-stage", viewport);
    });

    test("account stage", async ({ page }) => {
      await page.goto("/onboarding/account");
      await shot(page, "account-stage", viewport);
    });

    test("verify OTP stage", async ({ page }) => {
      await page.goto("/onboarding/verify");
      await shot(page, "verify-otp", viewport);
    });

    test("activated / handoff stage", async ({ page }) => {
      await page.goto("/onboarding/activated");
      await shot(page, "activated-handoff", viewport);
    });
  });
}

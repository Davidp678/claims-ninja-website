import { expect, test, type Page } from "@playwright/test";

const START_HERE_CTA = "/starthere";
const JOTFORM_CTA = "https://form.jotform.com/260536051303041";
const HUBSPOT_CTA = "https://meetings.hubspot.com/taylor-handsel/team";

/** The off-viewport toggle copy is display:none (Tailwind hidden/md:hidden),
 * so :visible resolves to exactly one toggle for the active viewport. */
function visibleToggle(page: Page) {
  return page.locator('button[aria-label^="Language:"]:visible');
}

test.describe("Desktop language toggle", () => {
  test("switches EN -> ES -> EN and renders Spanish labels", async ({
    page,
    baseURL,
  }) => {
    await page.goto("/");

    const toggle = visibleToggle(page);
    await expect(toggle).toBeVisible();
    // Toggle lives in the desktop CTA cluster alongside Start Claim Review.
    // Scope to the header so the duplicate in-page CTA isn't matched.
    await expect(
      page
        .getByRole("banner")
        .getByRole("link", { name: "Start Claim Review" }),
    ).toBeVisible();

    await toggle.click();
    await page.getByRole("option", { name: "Español" }).click();
    await expect(page).toHaveURL(/\/es$/);

    // Spanish nav + footer labels.
    await expect(
      page.getByRole("button", { name: "Plataforma" }).first(),
    ).toBeVisible();
    const footer = page.getByRole("contentinfo");
    await expect(footer.getByText("Empresa", { exact: true })).toBeVisible();
    await expect(footer.getByText("Recursos", { exact: true })).toBeVisible();

    // Switch back to English.
    await visibleToggle(page).click();
    await page.getByRole("option", { name: "US English" }).click();
    await expect(page).toHaveURL(`${baseURL}/`);
  });
});

test.describe("Mobile language toggle", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("compact toggle sits left of hamburger and navigates to /es", async ({
    page,
  }) => {
    await page.goto("/");

    const toggle = visibleToggle(page);
    const hamburger = page.getByRole("button", { name: "Open menu" });
    await expect(toggle).toBeVisible();
    await expect(hamburger).toBeVisible();

    const toggleBox = await toggle.boundingBox();
    const hamburgerBox = await hamburger.boundingBox();
    expect(toggleBox, "toggle bounding box").not.toBeNull();
    expect(hamburgerBox, "hamburger bounding box").not.toBeNull();
    // Compact toggle is positioned to the left of the hamburger.
    expect(toggleBox!.x).toBeLessThan(hamburgerBox!.x);

    // Hamburger still opens the mobile menu.
    await hamburger.click();
    const mobileMenu = page.locator("#mobile-menu");
    await expect(mobileMenu.getByRole("link").first()).toBeVisible();
    // Close it again before using the toggle.
    await page.getByRole("button", { name: "Close menu" }).click();

    // Toggle navigates to the Spanish site.
    await visibleToggle(page).click();
    await page.getByRole("option", { name: "Español" }).click();
    await expect(page).toHaveURL(/\/es$/);
  });
});

test.describe("SEO safety", () => {
  test("/es is noindex,follow and absent from sitemap", async ({ request }) => {
    const esRes = await request.get("/es");
    expect(esRes.ok()).toBeTruthy();
    const esHtml = await esRes.text();
    expect(esHtml).toContain('content="noindex, follow"');

    const sitemapRes = await request.get("/sitemap.xml");
    expect(sitemapRes.ok()).toBeTruthy();
    const sitemap = await sitemapRes.text();
    // Segment-precise: avoids false positives on case-studies/guides/resources.
    expect(sitemap).not.toMatch(/theclaimsninja\.com\/es(\/|<)/);
  });

  test("/starthere is noindex,nofollow and absent from sitemap", async ({
    request,
  }) => {
    const res = await request.get("/starthere");
    expect(res.ok()).toBeTruthy();
    const html = await res.text();
    expect(html).toContain("noindex");
    expect(html).toContain("nofollow");

    const sitemapRes = await request.get("/sitemap.xml");
    expect(sitemapRes.ok()).toBeTruthy();
    const sitemap = await sitemapRes.text();
    expect(sitemap).not.toMatch(/\/starthere(\/|<)/);
  });
});

test.describe("CTA integrity", () => {
  test("home claim-intake and schedule CTAs point to the right destinations", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.locator(`a[href="${START_HERE_CTA}"]`).first(),
    ).toHaveCount(1);
    await expect(
      page.locator(`a[href="${HUBSPOT_CTA}"]`).first(),
    ).toHaveCount(1);
  });

  test("/starthere onboarding CTAs point to Jotform", async ({ page }) => {
    await page.goto("/starthere");
    await expect(page.locator(`a[href="${JOTFORM_CTA}"]`)).toHaveCount(2);
  });
});

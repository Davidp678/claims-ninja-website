import assert from "node:assert/strict";
import { test } from "node:test";

import {
  HOMEPAGE_INTAKE_HREF,
  homepageIntakeHref,
  hrefHasHash,
  isHomepageIntakeHref,
} from "@/lib/homepage-intake";
import { localizePath } from "@/lib/i18n/paths";

test("canonical intake href is /#top", () => {
  assert.equal(HOMEPAGE_INTAKE_HREF, "/#top");
  assert.equal(homepageIntakeHref("en"), "/#top");
  assert.equal(homepageIntakeHref("es"), "/es#top");
});

test("isHomepageIntakeHref recognizes EN and ES intake destinations", () => {
  assert.equal(isHomepageIntakeHref("/#top"), true);
  assert.equal(isHomepageIntakeHref("/es#top"), true);
  assert.equal(isHomepageIntakeHref("/pricing"), false);
  assert.equal(isHomepageIntakeHref("/#contact"), false);
  assert.equal(
    isHomepageIntakeHref("https://meetings.hubspot.com/taylor-handsel/team"),
    false,
  );
});

test("hrefHasHash detects hash destinations", () => {
  assert.equal(hrefHasHash("/#top"), true);
  assert.equal(hrefHasHash("/pricing"), false);
});

test("localizePath preserves homepage intake hash", () => {
  assert.equal(localizePath("en", "/#top"), "/#top");
  assert.equal(localizePath("es", "/#top"), "/es#top");
  assert.equal(localizePath("es", "/pricing"), "/es/pricing");
});

"use client";

import { useEffect } from "react";

import {
  HOMEPAGE_INTAKE_HASH,
  scrollToHomepageIntake,
} from "@/lib/homepage-intake";

/**
 * Ensures `/#top` (and `/es#top`) scrolls to the hero intake after App Router
 * navigations and browser hash changes — Next soft-nav often skips native hash scroll.
 */
export function HomepageIntakeHashScroll() {
  useEffect(() => {
    const scrollIfIntakeHash = () => {
      if (window.location.hash !== HOMEPAGE_INTAKE_HASH) return;
      // Defer past layout/paint so the fixed header offset is applied.
      window.requestAnimationFrame(() => {
        scrollToHomepageIntake("smooth");
      });
    };

    scrollIfIntakeHash();
    window.addEventListener("hashchange", scrollIfIntakeHash);
    return () => window.removeEventListener("hashchange", scrollIfIntakeHash);
  }, []);

  return null;
}

"use client";

import { usePathname } from "next/navigation";

import type { Locale } from "@/lib/i18n/config";
import { localeFromPathname } from "@/lib/i18n/paths";

export function useMarketingLocale(): Locale {
  const pathname = usePathname();
  return localeFromPathname(pathname);
}

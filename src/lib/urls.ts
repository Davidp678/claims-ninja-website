import { CTA_LINKS } from "@/lib/constants";

export function isExternalHref(href: string): boolean {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function opensStartHereInNewTab(href: string): boolean {
  return href === CTA_LINKS.startHere;
}

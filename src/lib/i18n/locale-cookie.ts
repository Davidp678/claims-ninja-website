import {
  defaultLocale,
  isLocale,
  LOCALE_COOKIE_NAME,
  type Locale,
} from "@/lib/i18n/config";

const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export function getLocaleCookieOptions() {
  return {
    path: "/",
    maxAge: ONE_YEAR_SECONDS,
    sameSite: "lax" as const,
  };
}

export function readLocaleFromCookieValue(
  value: string | undefined,
): Locale {
  if (value && isLocale(value)) {
    return value;
  }
  return defaultLocale;
}

export function setLocaleCookieClient(locale: Locale): void {
  if (typeof document === "undefined") return;
  const { path, maxAge, sameSite } = getLocaleCookieOptions();
  document.cookie = `${LOCALE_COOKIE_NAME}=${locale};path=${path};max-age=${maxAge};samesite=${sameSite}`;
}

export function readLocaleCookieClient(): Locale {
  if (typeof document === "undefined") return defaultLocale;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${LOCALE_COOKIE_NAME}=`));
  const value = match?.split("=")[1];
  return readLocaleFromCookieValue(value);
}

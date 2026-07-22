import { randomBytes, timingSafeEqual } from "node:crypto";

import { INTAKE_CSRF_COOKIE, INTAKE_CSRF_HEADER } from "./constants";
import { getAllowedOrigins } from "./config";

export function createCsrfToken(): string {
  return randomBytes(32).toString("hex");
}

export function csrfCookieOptions(maxAgeSeconds = 60 * 60 * 24 * 7) {
  const secure = process.env.NODE_ENV === "production";
  return {
    httpOnly: false,
    secure,
    sameSite: "lax" as const,
    path: "/",
    maxAge: maxAgeSeconds,
  };
}

export function originAllowed(request: Request): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const allowed = getAllowedOrigins();

  if (origin) {
    return allowed.some((entry) => originsMatch(origin, entry));
  }

  if (referer) {
    try {
      const refererOrigin = new URL(referer).origin;
      return allowed.some((entry) => originsMatch(refererOrigin, entry));
    } catch {
      return false;
    }
  }

  // Same-origin navigations from some browsers omit Origin on GET; mutations must
  // still present Origin or Referer in modern browsers. Fail closed for mutations.
  return false;
}

function originsMatch(candidate: string, allowed: string): boolean {
  try {
    return new URL(candidate).origin === new URL(allowed).origin;
  } catch {
    return candidate === allowed;
  }
}

export function readCookieValue(
  cookieHeader: string | null,
  name: string,
): string | null {
  if (!cookieHeader) return null;
  const parts = cookieHeader.split(";");
  for (const part of parts) {
    const [rawName, ...rest] = part.trim().split("=");
    if (rawName === name) {
      return decodeURIComponent(rest.join("="));
    }
  }
  return null;
}

export function validateCsrf(request: Request): boolean {
  const header = request.headers.get(INTAKE_CSRF_HEADER);
  const cookie = readCookieValue(
    request.headers.get("cookie"),
    INTAKE_CSRF_COOKIE,
  );
  if (!header || !cookie) return false;
  if (header.length !== cookie.length) return false;
  try {
    return timingSafeEqual(Buffer.from(header), Buffer.from(cookie));
  } catch {
    return false;
  }
}

export function assertMutationSecurity(request: Request): {
  ok: true;
} | {
  ok: false;
  status: number;
  code: string;
  message: string;
} {
  if (!originAllowed(request)) {
    return {
      ok: false,
      status: 403,
      code: "ORIGIN_REJECTED",
      message: "Request origin is not allowed.",
    };
  }
  if (!validateCsrf(request)) {
    return {
      ok: false,
      status: 403,
      code: "CSRF_REJECTED",
      message: "Missing or invalid CSRF token.",
    };
  }
  return { ok: true };
}

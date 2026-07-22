import "server-only";

import { cookies } from "next/headers";

import { INTAKE_CSRF_COOKIE, INTAKE_HANDLE_COOKIE } from "./constants";
import { createCsrfToken, csrfCookieOptions } from "./csrf";

export function intakeHandleCookieOptions(maxAgeSeconds = 60 * 60 * 24 * 7) {
  const secure = process.env.NODE_ENV === "production";
  return {
    httpOnly: true,
    secure,
    sameSite: "lax" as const,
    path: "/",
    maxAge: maxAgeSeconds,
  };
}

export async function getIntakeHandleFromCookie(): Promise<string | null> {
  const jar = await cookies();
  const value = jar.get(INTAKE_HANDLE_COOKIE)?.value?.trim();
  return value || null;
}

export async function setIntakeHandleCookie(
  intakeHandle: string,
  maxAgeSeconds?: number,
): Promise<void> {
  const jar = await cookies();
  jar.set(
    INTAKE_HANDLE_COOKIE,
    intakeHandle,
    intakeHandleCookieOptions(maxAgeSeconds),
  );
}

export async function clearIntakeHandleCookie(): Promise<void> {
  const jar = await cookies();
  jar.delete(INTAKE_HANDLE_COOKIE);
}

export async function ensureCsrfCookie(): Promise<string> {
  const jar = await cookies();
  const existing = jar.get(INTAKE_CSRF_COOKIE)?.value;
  if (existing) return existing;
  const token = createCsrfToken();
  jar.set(INTAKE_CSRF_COOKIE, token, csrfCookieOptions());
  return token;
}

export async function rotateCsrfCookie(): Promise<string> {
  const jar = await cookies();
  const token = createCsrfToken();
  jar.set(INTAKE_CSRF_COOKIE, token, csrfCookieOptions());
  return token;
}

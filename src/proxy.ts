import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

import { isLocale, LOCALE_COOKIE_NAME } from "@/lib/i18n/config";
import { getLocaleCookieOptions } from "@/lib/i18n/locale-cookie";
import { localeFromPathname } from "@/lib/i18n/paths";

function shouldSkipLocale(pathname: string): boolean {
  return (
    pathname.startsWith("/api") ||
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/claim-report") ||
    pathname.startsWith("/help") ||
    pathname.startsWith("/tcnhc") ||
    pathname.startsWith("/_next")
  );
}

function isAuthPath(pathname: string): boolean {
  return pathname.startsWith("/dashboard") || pathname === "/login";
}

function applyLocaleCookieFromPath(
  pathname: string,
  response: NextResponse,
): NextResponse {
  const locale = localeFromPathname(pathname);
  if (isLocale(locale)) {
    response.cookies.set(LOCALE_COOKIE_NAME, locale, getLocaleCookieOptions());
  }
  return response;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  let response = NextResponse.next({ request });

  if (!shouldSkipLocale(pathname)) {
    response = applyLocaleCookieFromPath(pathname, response);
  }

  if (!isAuthPath(pathname)) {
    return response;
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  if (!url || !anonKey) {
    if (pathname.startsWith("/dashboard")) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/login";
      return NextResponse.redirect(loginUrl);
    }
    return response;
  }

  const supabase = createServerClient(url, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isDashboard = pathname.startsWith("/dashboard");
  const isLogin = pathname === "/login";

  if (isDashboard && !user) {
    const loginUrl = request.nextUrl.clone();
    loginUrl.pathname = "/login";
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isLogin && user) {
    const dashboardUrl = request.nextUrl.clone();
    dashboardUrl.pathname = "/dashboard/claims";
    dashboardUrl.search = "";
    return NextResponse.redirect(dashboardUrl);
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};

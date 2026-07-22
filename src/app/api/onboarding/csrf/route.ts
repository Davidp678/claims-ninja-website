import { ensureCsrfCookie } from "@/lib/onboarding/cookie";
import { jsonOk, handleOnboardingRouteError } from "@/lib/onboarding/http";

export const runtime = "nodejs";

export async function GET() {
  try {
    const csrfToken = await ensureCsrfCookie();
    return jsonOk({ csrfToken });
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}

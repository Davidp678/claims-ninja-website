import { clearIntakeHandleCookie } from "@/lib/onboarding/cookie";
import { assertMutationSecurity } from "@/lib/onboarding/csrf";
import {
  handleOnboardingRouteError,
  jsonError,
  jsonOk,
} from "@/lib/onboarding/http";

export const runtime = "nodejs";

/**
 * Clears the browser intake resume cookie after successful provisioning handoff
 * (or when starting a fresh claim over a completed session).
 */
export async function POST(request: Request) {
  try {
    const security = assertMutationSecurity(request);
    if (!security.ok) {
      return jsonError(security.status, security.code, security.message);
    }

    await clearIntakeHandleCookie();
    return jsonOk({ retired: true });
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}

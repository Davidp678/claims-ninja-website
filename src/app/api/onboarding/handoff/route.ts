import { getIntakeHandleFromCookie } from "@/lib/onboarding/cookie";
import { getExternalIntakeConfig } from "@/lib/onboarding/config";
import { assertMutationSecurity } from "@/lib/onboarding/csrf";
import { buildIntakeHandoffUrl } from "@/lib/onboarding/intake-handoff-url";
import {
  handleOnboardingRouteError,
  jsonError,
  jsonOk,
  mapPlatformResponse,
} from "@/lib/onboarding/http";
import { externalIntakeS2SJson } from "@/lib/onboarding/s2s";

export const runtime = "nodejs";

type MintData = {
  handoffCode?: string;
  expiresAt?: string;
  redirectPathHint?: string;
};

export async function POST(request: Request) {
  try {
    const security = assertMutationSecurity(request);
    if (!security.ok) {
      return jsonError(security.status, security.code, security.message);
    }

    const intakeHandle = await getIntakeHandleFromCookie();
    if (!intakeHandle) {
      return jsonError(401, "SESSION_UNAUTHORIZED", "No active intake session.");
    }

    const config = getExternalIntakeConfig();
    if (!config) {
      return jsonError(
        503,
        "INTAKE_NOT_CONFIGURED",
        "Onboarding platform URL is not configured.",
      );
    }

    const { status, envelope } = await externalIntakeS2SJson<MintData>(
      "POST",
      "/api/external-intake/v1/handoff/mint",
      { intakeHandle },
    );

    if (envelope.ok && envelope.data?.handoffCode) {
      // Build the browser landing URL server-side from EXTERNAL_INTAKE_PLATFORM_URL
      // so Preview does not depend on NEXT_PUBLIC_PLATFORM_URL.
      // Cookie retirement happens client-side immediately before navigation so a
      // failed assign can still retry mint with the same session.
      const browserHandoffUrl = buildIntakeHandoffUrl(
        config.platformBaseUrl,
        envelope.data.handoffCode,
      );
      return jsonOk(
        {
          expiresAt: envelope.data.expiresAt,
          redirectPathHint: envelope.data.redirectPathHint,
          browserHandoffUrl,
        },
        { status: status >= 200 && status < 300 ? status : 200 },
      );
    }

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}

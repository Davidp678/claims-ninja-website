import { getIntakeHandleFromCookie } from "@/lib/onboarding/cookie";
import { assertMutationSecurity } from "@/lib/onboarding/csrf";
import {
  AGREEMENT_TITLE,
  AGREEMENT_VERSION,
} from "@/lib/onboarding/constants";
import {
  handleOnboardingRouteError,
  jsonError,
  mapPlatformResponse,
} from "@/lib/onboarding/http";
import { externalIntakeS2SJson } from "@/lib/onboarding/s2s";

export const runtime = "nodejs";

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

    let body: Record<string, unknown> = {};
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      return jsonError(400, "INVALID_JSON", "Invalid JSON body.");
    }

    if (!body.authorityAttested || !body.termsAttested) {
      return jsonError(
        400,
        "VALIDATION_ERROR",
        "Both acceptance confirmations are required.",
      );
    }

    const { status, envelope } = await externalIntakeS2SJson(
      "POST",
      "/api/external-intake/v1/agreement/accept",
      {
        intakeHandle,
        expectedVersion: body.expectedVersion,
        documentId: body.documentId,
        documentVersion: body.documentVersion ?? AGREEMENT_VERSION,
        contentSha256: body.contentSha256,
        signerName: body.signerName,
        signerEmail: body.signerEmail,
        organizationName: body.organizationName,
        authorityAttested: true,
        termsAttested: true,
        acceptanceLanguage:
          body.acceptanceLanguage ??
          `I have read and agree to the ${AGREEMENT_TITLE}.`,
        locale: body.locale ?? "en-US",
        ip:
          request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
          "unknown",
        userAgent: request.headers.get("user-agent") ?? "unknown",
      },
    );

    return mapPlatformResponse(status, envelope);
  } catch (err) {
    return handleOnboardingRouteError(err);
  }
}

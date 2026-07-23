import { getIntakeHandleFromCookie } from "@/lib/onboarding/cookie";
import { assertMutationSecurity } from "@/lib/onboarding/csrf";
import {
  APPROVED_CLICKWRAP_LANGUAGE,
  TERMS_VERSION,
} from "@/lib/onboarding/agreement-canonical";
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

    const checkboxAttested = Boolean(
      body.checkboxAttested ?? body.termsAttested,
    );
    if (!body.authorityAttested || !checkboxAttested || body.explicitSubmit === false) {
      return jsonError(
        400,
        "VALIDATION_ERROR",
        "Required acceptance confirmations are missing.",
      );
    }

    const { status, envelope } = await externalIntakeS2SJson(
      "POST",
      "/api/external-intake/v1/agreement/accept",
      {
        intakeHandle,
        expectedVersion: body.expectedVersion,
        documentId: body.documentId,
        documentVersion: body.documentVersion ?? TERMS_VERSION,
        contentSha256: body.contentSha256,
        privacyDocumentId: body.privacyDocumentId,
        privacyDocumentVersion: body.privacyDocumentVersion,
        privacyContentSha256: body.privacyContentSha256,
        signerName: body.signerName,
        signerEmail: body.signerEmail,
        organizationName: body.organizationName,
        authorityAttested: true,
        termsAttested: true,
        checkboxAttested: true,
        explicitSubmit: true,
        acceptanceLanguage:
          typeof body.acceptanceLanguage === "string"
            ? body.acceptanceLanguage
            : APPROVED_CLICKWRAP_LANGUAGE,
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

"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { OnboardingLoading } from "@/components/onboarding/OnboardingLoading";
import { useOnboardingSessionContext } from "@/components/onboarding/OnboardingSessionContext";
import { onboardingFetchJson } from "@/lib/onboarding/client-api";
import {
  isOnboardingRoute,
  isRouteAllowed,
  maxAllowedOnboardingRoute,
  stagePath,
  type OnboardingRoute,
} from "@/lib/onboarding/stages";
import type { IntakeSessionProjection } from "@/lib/onboarding/types";

/**
 * Redirects skip-ahead deep links back to the furthest allowed stage.
 * Backward navigation to earlier stages remains allowed.
 * Shares the session snapshot with stage hooks to avoid a duplicate GET.
 */
export function OnboardingStageGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { setSnapshot, setGuardReady } = useOnboardingSessionContext();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setChecked(false);
    setGuardReady(false);

    void (async () => {
      const segment = pathname.split("/").filter(Boolean).pop() ?? "";
      if (!isOnboardingRoute(segment)) {
        if (!cancelled) {
          setChecked(true);
          setGuardReady(true);
        }
        return;
      }

      const requested = segment as OnboardingRoute;
      const result = await onboardingFetchJson<IntakeSessionProjection>(
        "/api/onboarding/session",
      );
      if (cancelled) return;

      if (!result.ok) {
        // No session — stage pages already render their own empty states.
        setSnapshot(null);
        setChecked(true);
        setGuardReady(true);
        return;
      }

      setSnapshot(result.data);
      const maxAllowed = maxAllowedOnboardingRoute(result.data);
      if (!isRouteAllowed(requested, maxAllowed)) {
        router.replace(stagePath(maxAllowed));
      }
      setChecked(true);
      setGuardReady(true);
    })();

    return () => {
      cancelled = true;
    };
  }, [pathname, router, setGuardReady, setSnapshot]);

  if (!checked) {
    return <OnboardingLoading />;
  }

  return <>{children}</>;
}

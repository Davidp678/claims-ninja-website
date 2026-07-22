"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { onboardingFetchJson } from "@/lib/onboarding/client-api";
import { stagePath, type OnboardingStage } from "@/lib/onboarding/stages";
import type { IntakeSessionProjection, SaveState } from "@/lib/onboarding/types";

export function useOnboardingSession() {
  const router = useRouter();
  const [session, setSession] = useState<IntakeSessionProjection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [version, setVersion] = useState(0);
  const versionRef = useRef(0);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const applySession = useCallback((data: IntakeSessionProjection) => {
    const nextVersion = data.version ?? 0;
    versionRef.current = nextVersion;
    setSession(data);
    setVersion(nextVersion);
    setError(null);
  }, []);

  const refresh = useCallback(async () => {
    setLoading(true);
    const result = await onboardingFetchJson<IntakeSessionProjection>(
      "/api/onboarding/session",
    );
    if (!result.ok) {
      setError(result.message);
      setSession(null);
      setLoading(false);
      return null;
    }
    applySession(result.data);
    setLoading(false);
    return result.data;
  }, [applySession]);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const result = await onboardingFetchJson<IntakeSessionProjection>(
        "/api/onboarding/session",
      );
      if (cancelled) return;
      if (!result.ok) {
        setError(result.message);
        setSession(null);
        setLoading(false);
        return;
      }
      applySession(result.data);
      setLoading(false);
    })();
    return () => {
      cancelled = true;
    };
  }, [applySession]);

  const patch = useCallback(
    async (stage: OnboardingStage, patchBody: Record<string, unknown>) => {
      setSaveState("saving");
      const result = await onboardingFetchJson<IntakeSessionProjection>(
        "/api/onboarding/session",
        {
          method: "PATCH",
          json: {
            expectedVersion: versionRef.current,
            stage,
            patch: patchBody,
          },
        },
      );
      if (!result.ok) {
        setSaveState("error");
        setError(result.message);
        return null;
      }
      applySession(result.data);
      setSaveState("saved");
      return result.data;
    },
    [applySession],
  );

  const autosave = useCallback(
    (stage: OnboardingStage, patchBody: Record<string, unknown>) => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => {
        void patch(stage, patchBody);
      }, 600);
    },
    [patch],
  );

  const saveExit = useCallback(async () => {
    setSaveState("saving");
    const result = await onboardingFetchJson("/api/onboarding/save-exit", {
      method: "POST",
      json: { expectedVersion: versionRef.current },
    });
    if (!result.ok) {
      setSaveState("error");
      setError(result.message);
      return;
    }
    setSaveState("saved");
    router.push("/");
  }, [router]);

  return {
    session,
    loading,
    error,
    saveState,
    version,
    refresh,
    patch,
    autosave,
    saveExit,
    setError,
    setSession,
    setSaveState,
  };
}

export function goToStage(
  router: ReturnType<typeof useRouter>,
  stage: Parameters<typeof stagePath>[0],
) {
  router.push(stagePath(stage));
}

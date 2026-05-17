"use client";

import { useCallback, useState } from "react";
import { HERO_VIDEO_URL } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function HeroVideoCard() {
  const [ready, setReady] = useState(false);

  const markReady = useCallback(() => {
    setReady(true);
  }, []);

  return (
    <div
      className={cn(
        // Mobile: aspect-video card with padding and rounded corners
        "relative mx-5 aspect-video overflow-hidden rounded-2xl sm:mx-8",
        // Mobile glow/ring treatment
        "shadow-[0_0_64px_-8px_rgba(185,28,28,0.65)] ring-1 ring-brand-red/60",
        // Desktop: fills parent column completely — no aspect ratio, no margin, no rounding
        "lg:absolute lg:inset-0 lg:mx-0 lg:rounded-none lg:shadow-none lg:ring-0",
        // Mobile bottom spacing
        "mb-14 sm:mb-16 lg:mb-0",
      )}
      aria-hidden
    >
      {/* Frame treatment — full ring on mobile, left-edge accent on desktop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 ring-1 ring-inset ring-brand-red/25 lg:hidden"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-px bg-brand-red/40 shadow-[0_0_48px_12px_rgba(185,28,28,0.45)] lg:block"
      />

      {/* Loading placeholder */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black/80 to-brand-black transition-opacity duration-700",
          ready ? "opacity-0" : "opacity-100",
        )}
      />

      {/* Video */}
      <video
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
          ready ? "opacity-100" : "opacity-0",
        )}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
        onLoadedData={markReady}
        onCanPlay={markReady}
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
      </video>

      {/* Subtle bottom vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/30 via-transparent to-transparent"
      />
    </div>
  );
}

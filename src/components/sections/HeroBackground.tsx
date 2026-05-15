"use client";

import { useCallback, useState } from "react";
import { HERO_VIDEO_URL } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function HeroBackground() {
  const [ready, setReady] = useState(false);

  const markReady = useCallback(() => {
    setReady(true);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden>
      {/* Poster-style fallback while video buffers */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-zinc-950 via-brand-black to-black transition-opacity duration-1000",
          ready ? "opacity-0" : "opacity-100",
        )}
      />

      {/* Video — subdued, cropped toward the right on desktop */}
      <video
        className={cn(
          "absolute inset-0 h-full w-full scale-110 object-cover object-center transition-opacity duration-1000",
          "lg:scale-105 lg:object-[82%_center]",
          "[@media(prefers-reduced-motion:reduce)]:!opacity-60",
          ready ? "opacity-25 lg:opacity-45" : "opacity-0",
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

      {/* Global darken — pushes video into background texture territory */}
      <div className="absolute inset-0 bg-brand-black/75 max-lg:bg-brand-black/85" />

      {/* Left-heavy calm zone for headline copy */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/95 to-transparent max-lg:from-brand-black max-lg:via-brand-black/98 max-lg:to-brand-black/90" />

      {/* Extra mobile wash — video mostly texture, not focal */}
      <div className="absolute inset-0 bg-brand-black/55 lg:hidden" />

      {/* Vertical depth for bottom-aligned content */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black/95" />

      {/* Soft vignette — darker where copy lives (left/center-left) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_15%_45%,rgba(0,0,0,0.85),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(0,0,0,0.7),transparent_50%)]" />

      {/* Brand red — restrained, upper-right only (away from headline) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_35%_at_92%_8%,rgba(185,28,28,0.14),transparent_70%)] max-lg:opacity-40" />

      {/* Edge falloff */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/60" />
    </div>
  );
}

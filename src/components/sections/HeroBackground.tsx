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

      {/* Video — full strength; readability handled by overlays */}
      <video
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000",
          "scale-105 object-center max-lg:object-[60%_center]",
          "lg:scale-100 lg:object-[78%_center]",
          "[@media(prefers-reduced-motion:reduce)]:opacity-100",
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

      {/* Light global grade — keeps texture without killing the video */}
      <div className="absolute inset-0 bg-brand-black/35 max-lg:bg-brand-black/45" />

      {/* Left-heavy gradient: calm copy zone, clearer video on the right */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-gradient-to-r from-brand-black/95 from-0% via-brand-black/75 via-35% to-brand-black/15 to-100%",
          "max-lg:bg-gradient-to-r max-lg:from-brand-black/92 max-lg:via-brand-black/80 max-lg:via-50% max-lg:to-brand-black/35 max-lg:to-100%",
        )}
      />

      {/* Bottom weight for CTAs / stats */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/25 via-transparent to-brand-black/80" />

      {/* Vignette on copy side only — not full-frame */}
      <div className="absolute inset-0 max-w-[min(100%,52rem)] bg-[radial-gradient(ellipse_100%_90%_at_0%_50%,rgba(0,0,0,0.55),transparent_70%)]" />

      {/* Brand red — upper-right, away from headline */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_95%_12%,rgba(185,28,28,0.12),transparent_65%)]" />

      {/* Top edge falloff */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-brand-black/50" />
    </div>
  );
}

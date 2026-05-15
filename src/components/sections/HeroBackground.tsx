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
          "absolute inset-0 bg-gradient-to-br from-zinc-900 via-brand-black to-black transition-opacity duration-1000",
          ready ? "opacity-0" : "opacity-100",
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(185,28,28,0.12),transparent_60%)] transition-opacity duration-1000",
          ready ? "opacity-0" : "opacity-100",
        )}
      />

      <video
        className={cn(
          "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 [@media(prefers-reduced-motion:reduce)]:opacity-100",
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

      {/* Cinematic grade + readability overlays */}
      <div className="absolute inset-0 bg-brand-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/35 to-brand-black/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/25 to-brand-black/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(185,28,28,0.2),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/40" />
    </div>
  );
}

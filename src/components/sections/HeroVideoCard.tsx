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
        "relative w-full max-w-2xl rounded-2xl p-px lg:max-w-[36rem] lg:rounded-3xl xl:max-w-[42rem]",
        "shadow-[0_0_64px_-8px_rgba(185,28,28,0.65)] ring-1 ring-brand-red/60",
        "bg-gradient-to-br from-brand-red/30 via-brand-red/10 to-white/5",
      )}
      aria-hidden
    >
      <div className="overflow-hidden rounded-[calc(1rem-1px)] bg-brand-black ring-1 ring-inset ring-white/12 lg:rounded-[calc(1.5rem-1px)]">
        <div className="relative aspect-video bg-brand-surface">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black/80 to-brand-black transition-opacity duration-700",
              ready ? "opacity-0" : "opacity-100",
            )}
          />
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
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/35 via-transparent to-transparent"
          />
        </div>
      </div>
    </div>
  );
}

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
      className="relative w-full max-w-2xl lg:max-w-[32rem] xl:max-w-[36rem]"
      aria-hidden
    >
      <div
        aria-hidden
        className="absolute -inset-3 rounded-[1.35rem] bg-[radial-gradient(ellipse_75%_65%_at_50%_100%,rgba(185,28,28,0.22),transparent_68%)] opacity-90 blur-xl lg:-inset-4 lg:rounded-[1.65rem]"
      />
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-brand-black shadow-2xl shadow-black/60 ring-1 ring-white/14 lg:rounded-3xl",
          "ring-offset-4 ring-offset-brand-black lg:ring-offset-[10px]",
        )}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-brand-red/25 lg:rounded-3xl"
        />
        <div className="relative aspect-video bg-brand-black">
          <div
            className={cn(
              "absolute inset-0 bg-brand-elevated transition-opacity duration-700",
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
        </div>
      </div>
    </div>
  );
}

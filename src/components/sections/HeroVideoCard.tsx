"use client";

import { useCallback, useState } from "react";
import { HERO_VIDEO_URL } from "@/lib/constants";
import { cn } from "@/lib/cn";

type HeroVideoCardVariant = "default" | "embedded";

type HeroVideoCardProps = {
  src?: string;
  embedSrc?: string;
  title?: string;
  mediaAspect?: string;
  className?: string;
  variant?: HeroVideoCardVariant;
};

const VARIANT_FRAME: Record<
  HeroVideoCardVariant,
  { frame: string; media: string }
> = {
  default: {
    frame: cn(
      "shadow-[0_0_80px_-4px_rgba(220,38,38,0.72)] ring-1 ring-brand-red/60",
      "bg-gradient-to-br from-brand-red/30 via-brand-red/10 to-white/5",
    ),
    media: "aspect-[27/20]",
  },
  embedded: {
    frame: cn(
      "shadow-[0_0_48px_-20px_rgba(220,38,38,0.4)] ring-1 ring-brand-red/40",
      "bg-gradient-to-br from-brand-red/20 via-brand-red/8 to-white/5",
    ),
    media: "aspect-video",
  },
};

export function HeroVideoCard({
  src = HERO_VIDEO_URL,
  embedSrc,
  title = "Product demo video",
  mediaAspect,
  className,
  variant = "default",
}: HeroVideoCardProps) {
  const [ready, setReady] = useState(false);
  const styles = VARIANT_FRAME[variant];

  const markReady = useCallback(() => {
    setReady(true);
  }, []);

  const mediaClassName = cn(
    "absolute inset-0 h-full w-full transition-opacity duration-700",
    ready ? "opacity-100" : "opacity-0",
  );

  return (
    <div
      className={cn(
        "relative w-full max-w-[760px] rounded-2xl p-px lg:rounded-3xl",
        styles.frame,
        className,
      )}
      aria-hidden={embedSrc ? undefined : true}
    >
      <div className="overflow-hidden rounded-[calc(1rem-1px)] bg-brand-black ring-1 ring-inset ring-white/12 lg:rounded-[calc(1.5rem-1px)]">
        <div className={cn("relative bg-brand-surface", mediaAspect ?? styles.media)}>
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black/80 to-brand-black transition-opacity duration-700",
              ready ? "opacity-0" : "opacity-100",
            )}
          />
          {embedSrc ? (
            <iframe
              src={embedSrc}
              title={title}
              className={cn(mediaClassName, "border-0")}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              onLoad={markReady}
            />
          ) : (
            <video
              className={cn(mediaClassName, "object-cover")}
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
              <source src={src} type="video/mp4" />
            </video>
          )}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/35 via-transparent to-transparent"
          />
        </div>
      </div>
    </div>
  );
}

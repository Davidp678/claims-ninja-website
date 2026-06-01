"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { cn } from "@/lib/cn";

type RoofingHeroImageCardProps = {
  src: string;
  alt: string;
  className?: string;
};

export function RoofingHeroImageCard({ src, alt, className }: RoofingHeroImageCardProps) {
  const [ready, setReady] = useState(false);

  const markReady = useCallback(() => {
    setReady(true);
  }, []);

  return (
    <div
      className={cn(
        "relative w-full max-w-[760px] rounded-2xl p-px lg:rounded-3xl",
        "shadow-[0_0_80px_-4px_rgba(220,38,38,0.72)] ring-1 ring-brand-red/60",
        "bg-gradient-to-br from-brand-red/30 via-brand-red/10 to-white/5",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[calc(1rem-1px)] bg-brand-black ring-1 ring-inset ring-white/12 lg:rounded-[calc(1.5rem-1px)]">
        <div className="relative aspect-[27/20] bg-brand-surface">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black/80 to-brand-black transition-opacity duration-700",
              ready ? "opacity-0" : "opacity-100",
            )}
            aria-hidden
          />
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 620px"
            className={cn(
              "object-cover transition-opacity duration-700",
              ready ? "opacity-100" : "opacity-0",
            )}
            onLoad={markReady}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-black/35 via-transparent to-transparent"
          />
        </div>
      </div>
    </div>
  );
}

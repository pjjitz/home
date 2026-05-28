"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Particles } from "@/components/motion";

interface HeroBackgroundProps {
  videoSrc: string;
  posterSrc: string;
  fallbackImage: string;
}

export function HeroBackground({ videoSrc, posterSrc, fallbackImage }: HeroBackgroundProps) {
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    setVideoError(false);
  }, [videoSrc]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={posterSrc}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setVideoError(true)}
          aria-hidden
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={fallbackImage}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_75%)]" />
      <div className="noise-overlay absolute inset-0 opacity-30" aria-hidden />
      <Particles className="absolute inset-0 h-full w-full opacity-60" />
    </div>
  );
}

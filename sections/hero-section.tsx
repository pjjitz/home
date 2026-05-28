"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/features/home";
import { siteConfig } from "@/config/site";
import { heroContent } from "@/data/config";
import { easeOutExpo } from "@/lib/motion";

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 32 },
        animate: { opacity: 1, y: 0 },
        transition: easeOutExpo,
      };

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden pb-16 pt-28 sm:pb-20"
      aria-label="Apresentação"
    >
      <HeroBackground
        videoSrc={heroContent.videoSrc}
        posterSrc={heroContent.posterSrc}
        fallbackImage={heroContent.fallbackImage}
      />

      <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div {...motionProps} className="max-w-4xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent sm:text-sm">
            {heroContent.eyebrow}
          </p>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {heroContent.headline}{" "}
            <span className="text-gradient">{heroContent.headlineAccent}</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {heroContent.subheadline}
          </p>

          <div className="mt-10">
            <Button asChild size="lg" className="glow-blue">
              <Link href={siteConfig.cta.secondary.href}>{siteConfig.cta.secondary.label}</Link>
            </Button>
          </div>
        </motion.div>

        <motion.a
          href="#links"
          className="mt-16 inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
          aria-label="Rolar para links"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 1, duration: 0.8 },
              })}
        >
          <span>Explorar</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}

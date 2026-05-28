import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { AcampsFormEmbed } from "@/features/acamps";
import { acamps2026Config } from "@/config/acamps";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = createMetadata({
  title: acamps2026Config.title,
  description: acamps2026Config.description,
  openGraph: {
    title: `${acamps2026Config.title} | ${siteConfig.name}`,
    description: acamps2026Config.description,
    images: [{ url: acamps2026Config.banner, alt: "Acamps 2026" }],
  },
});

export default function Acamps2026Page() {
  return (
    <div className="relative min-h-screen pt-24 pb-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-primary/10 to-transparent"
        aria-hidden
      />

      <div className="container-narrow relative px-4 sm:px-6">
        <Reveal>
          <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
            <Link href="/">
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Voltar ao início
            </Link>
          </Button>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-1 lg:gap-12 xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)] xl:items-start">
          <Reveal className="xl:sticky xl:top-28">
            <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src={acamps2026Config.banner}
                alt="Acamps 2026 PJJ Imperatriz"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-accent ring-1 ring-primary/30">
                Inscrições abertas
              </span>
            </div>

            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {acamps2026Config.subtitle}
            </p>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {acamps2026Config.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {acamps2026Config.description}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Link para compartilhar:{" "}
              <span className="font-mono text-foreground">
                {siteConfig.url.replace(/\/$/, "")}
                {acamps2026Config.path}
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <AcampsFormEmbed />
          </Reveal>
        </div>
      </div>
    </div>
  );
}

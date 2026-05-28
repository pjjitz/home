import { Suspense } from "react";
import {
  AboutSection,
  EventsSection,
  FooterSection,
  GallerySection,
  HeroSection,
  QuickLinksSection,
} from "@/sections";
import { Skeleton } from "@/components/ui/skeleton";

function SectionFallback() {
  return (
    <div className="section-padding container-wide space-y-4" aria-hidden>
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-4 w-96 max-w-full" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-40 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <QuickLinksSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <EventsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <GallerySection />
      </Suspense>
      <AboutSection />
      <FooterSection />
    </>
  );
}

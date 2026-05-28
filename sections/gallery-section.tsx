import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/motion";
import { GalleryGrid } from "@/features/gallery";
import { galleryItems } from "@/data/gallery";

export function GallerySection() {
  return (
    <section
      id="galeria"
      className="section-padding border-t border-border/50"
      aria-labelledby="galeria-heading"
    >
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Memórias"
            title="Momentos que marcam"
            description="Encontros, louvor, missão e festa: a cultura visual da nossa juventude."
            align="center"
            className="mx-auto text-center"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <GalleryGrid items={galleryItems} />
        </Reveal>
      </div>
    </section>
  );
}

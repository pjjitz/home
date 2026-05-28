import { LinkCard } from "@/components/shared/link-card";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal, StaggerGrid } from "@/components/motion";
import { quickLinks } from "@/data/links";

export function QuickLinksSection() {
  return (
    <section id="links" className="section-padding" aria-labelledby="links-heading">
      <div className="container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Acesso rápido"
            title="Tudo que a juventude precisa, em um toque."
            description="Grupos, inscrições, playlists e contatos organizados para você viver o PJJ sem fricção."
          />
        </Reveal>

        <StaggerGrid className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}

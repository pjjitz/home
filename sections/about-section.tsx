import { Reveal } from "@/components/motion";
import { SectionHeader } from "@/components/ui/section-header";
import { aboutContent } from "@/data/config";
import { siteConfig } from "@/config/site";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="section-padding border-t border-border/50"
      aria-labelledby="sobre-heading"
    >
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Quem somos"
              title={aboutContent.title}
              description={aboutContent.subtitle}
            />
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {aboutContent.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              {siteConfig.organization.project} · {siteConfig.organization.parent} ·{" "}
              {siteConfig.location.label}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-3 gap-4">
              {aboutContent.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-4 text-center transition hover:border-primary/30"
                >
                  <p className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            <ul className="mt-8 space-y-4">
              {aboutContent.pillars.map((pillar) => (
                <li
                  key={pillar.title}
                  className="glass glow-border rounded-2xl p-5 transition hover:-translate-y-0.5"
                >
                  <h3 className="font-display font-semibold text-foreground">{pillar.title}</h3>
                  <p className="mt-1 text-sm text-muted">{pillar.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

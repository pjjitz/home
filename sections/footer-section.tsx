import Link from "next/link";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/data/socials";
import { getIcon } from "@/lib/icons";
import { isExternalUrl } from "@/lib/utils";

export function FooterSection() {
  return (
    <footer className="border-t border-border/50 bg-background-elevated/50">
      <div className="container-wide section-padding !py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <p className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              {siteConfig.name}
            </p>
            <p className="mt-3 text-lg text-muted">{siteConfig.footer.tagline}</p>
            <p className="mt-2 text-sm text-muted-foreground">{siteConfig.location.label}</p>
          </div>

          <nav aria-label="Redes sociais">
            <ul className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = getIcon(social.icon);
                const external = isExternalUrl(social.href);
                return (
                  <li key={social.id}>
                    <Link
                      href={social.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="glass flex items-center gap-2 rounded-xl px-4 py-3 text-sm text-muted transition hover:border-primary/30 hover:text-foreground"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                      <span className="hidden sm:inline">{social.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">{siteConfig.footer.copyright}</p>
          <p className="font-display text-sm font-medium text-accent">
            Juventude viva. Cristo no centro. Shalom.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavHashLink } from "@/components/layout/nav-hash-link";
import { SiteLogo } from "@/components/layout/site-logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong py-3 shadow-lg" : "bg-transparent py-5",
      )}
    >
      <div className="container-wide flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <NavHashLink
          href="/#inicio"
          className="group flex items-center gap-3"
          onNavigate={closeMobile}
        >
          <SiteLogo className="transition group-hover:scale-105" />
          <span className="hidden font-display text-sm font-semibold tracking-tight sm:block">
            {siteConfig.name}
          </span>
        </NavHashLink>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Navegação principal"
        >
          {siteConfig.nav.map((item) => (
            <NavHashLink
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
            >
              {item.label}
            </NavHashLink>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-muted hover:bg-surface hover:text-foreground md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <nav
          id="mobile-nav"
          className="glass-strong border-t border-border md:hidden"
          aria-label="Navegação mobile"
        >
          <div className="container-wide flex flex-col gap-1 px-4 py-4">
            {siteConfig.nav.map((item) => (
              <NavHashLink
                key={item.href}
                href={item.href}
                onNavigate={closeMobile}
                className="rounded-lg px-3 py-3 text-base text-foreground hover:bg-surface"
              >
                {item.label}
              </NavHashLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}

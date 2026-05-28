"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
/** Rola até a âncora ao abrir a home com hash na URL (ex.: /#acamps-2026). */
export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const raw = window.location.hash.replace(/^#/, "");
    const hash = raw || null;
    if (!hash) return;

    const scrollToTarget = () => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const timeout = window.setTimeout(scrollToTarget, 150);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return null;
}

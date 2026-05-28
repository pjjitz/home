"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getHashFromHref, isHomeHashLink, toHomeHash } from "@/lib/nav";
import { cn } from "@/lib/utils";

interface NavHashLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}

export function NavHashLink({ href, className, children, onNavigate }: NavHashLinkProps) {
  const pathname = usePathname();
  const resolvedHref = isHomeHashLink(href) ? toHomeHash(href) : href;
  const hash = getHashFromHref(resolvedHref);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onNavigate?.();

    if (pathname !== "/" || !hash) return;

    event.preventDefault();
    const target = document.getElementById(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", toHomeHash(hash));
    }
  };

  return (
    <Link href={resolvedHref} onClick={handleClick} className={cn(className)}>
      {children}
    </Link>
  );
}

/** Garante âncoras funcionando em qualquer rota (ex.: /acamps2026 → /#eventos). */
export function toHomeHash(hash: string): string {
  const id = hash.replace(/^#/, "").replace(/^\//, "");
  return `/#${id}`;
}

export function getHashFromHref(href: string): string | null {
  const match = href.match(/#(.+)$/);
  return match?.[1] ?? null;
}

export function isHomeHashLink(href: string): boolean {
  return href.startsWith("/#") || href.startsWith("#");
}

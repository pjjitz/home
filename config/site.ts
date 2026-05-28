export const siteConfig = {
  name: "PJJ Imperatriz",
  shortName: "PJJ",
  title: "PJJ Imperatriz | Juventude Shalom",
  description:
    "Hub digital da juventude Shalom em Imperatriz, MA. Eventos, encontros, evangelização e pertencimento do Projeto Juventude para Jesus.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pjj-imperatriz.vercel.app",
  locale: "pt_BR",
  logo: {
    /** Gerado a partir de `Símbolo PJJ negativo.png` (margens cortadas). */
    src: "/images/logo-pjj-trimmed.png",
    alt: "Logo PJJ Imperatriz",
    width: 692,
    height: 950,
  },
  location: {
    city: "Imperatriz",
    state: "MA",
    country: "Brasil",
    label: "Imperatriz, MA",
  },
  organization: {
    parent: "Comunidade Católica Shalom",
    project: "Projeto Juventude para Jesus",
    acronym: "PJJ",
  },
  keywords: [
    "PJJ",
    "PJJ Imperatriz",
    "Juventude Shalom",
    "Comunidade Católica Shalom",
    "Projeto Juventude para Jesus",
    "juventudeshimperatriz",
    "jovens católicos",
    "Imperatriz MA",
    "evangelização jovem",
    "Acamps",
    "CJS",
  ],
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Links", href: "#links" },
    { label: "Eventos", href: "#eventos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Sobre", href: "#sobre" },
  ],
  cta: {
    secondary: { label: "Conheça o PJJ", href: "#sobre" },
  },
  footer: {
    tagline: "Juventude viva. Encontro real. Cristo no centro.",
    copyright: `© ${new Date().getFullYear()} PJJ Imperatriz · Comunidade Católica Shalom`,
  },
} as const;

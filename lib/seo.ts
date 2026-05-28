import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  const { title, description, url, keywords, locale, name } = siteConfig;

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s | ${name}`,
    },
    description,
    keywords: [...keywords],
    authors: [{ name: siteConfig.organization.parent }],
    creator: siteConfig.organization.project,
    openGraph: {
      type: "website",
      locale,
      url,
      title,
      description,
      siteName: name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    ...overrides,
  };
}

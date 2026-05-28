import type { LucideIcon } from "lucide-react";

export type EventStatus = "upcoming" | "live" | "past" | "registration";

export interface QuickLink {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  featured?: boolean;
  external?: boolean;
  image?: string;
}

export interface PjjEvent {
  id: string;
  title: string;
  description: string;
  /** ISO 8601. Opcional quando `dateLabel` estiver definido. */
  date?: string;
  endDate?: string;
  /** Texto exibido no lugar da data formatada (ex.: "Sem data definida"). */
  dateLabel?: string;
  location: string;
  href: string;
  banner: string;
  status: EventStatus;
  badge?: string;
  showCountdown?: boolean;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface IconLink extends QuickLink {
  Icon?: LucideIcon;
}

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { PjjEvent } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatEventDate(iso: string, locale = "pt-BR"): string {
  return new Intl.DateTimeFormat(locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Fortaleza",
  }).format(new Date(iso));
}

export function getEventDateDisplay(event: Pick<PjjEvent, "date" | "dateLabel">): string {
  if (event.dateLabel) return event.dateLabel;
  if (event.date) return formatEventDate(event.date);
  return "Data a definir";
}

export function isExternalUrl(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

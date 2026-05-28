import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { PjjEvent } from "@/types";

const TZ = "America/Fortaleza";

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
    timeZone: TZ,
  }).format(new Date(iso));
}

export function formatEventDateRange(
  startIso: string,
  endIso: string,
  locale = "pt-BR",
): string {
  const start = new Date(startIso);
  const end = new Date(endIso);

  const dayFmt = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    timeZone: TZ,
  });
  const monthFmt = new Intl.DateTimeFormat(locale, {
    month: "long",
    timeZone: TZ,
  });
  const yearFmt = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    timeZone: TZ,
  });

  const startDay = dayFmt.format(start);
  const endDay = dayFmt.format(end);
  const month = monthFmt.format(start);
  const year = yearFmt.format(start);

  if (startDay === endDay) {
    return `${startDay} de ${month} de ${year}`;
  }

  return `${startDay} a ${endDay} de ${month} de ${year}`;
}

export function getEventDateDisplay(
  event: Pick<PjjEvent, "date" | "endDate" | "dateLabel">,
): string {
  if (event.dateLabel) return event.dateLabel;
  if (event.date && event.endDate) return formatEventDateRange(event.date, event.endDate);
  if (event.date) return formatEventDate(event.date);
  return "Data a definir";
}

export function isExternalUrl(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

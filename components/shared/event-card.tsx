"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Countdown } from "@/components/shared/countdown";
import { getEventDateDisplay, isExternalUrl } from "@/lib/utils";
import { scaleIn } from "@/lib/motion";
import type { PjjEvent } from "@/types";

const statusLabels: Record<PjjEvent["status"], { label: string; variant: "default" | "success" | "warning" | "live" | "secondary" }> = {
  upcoming: { label: "Em breve", variant: "default" },
  live: { label: "Ao vivo", variant: "live" },
  past: { label: "Realizado", variant: "secondary" },
  registration: { label: "Inscrições", variant: "success" },
};

interface EventCardProps {
  event: PjjEvent;
}

export function EventCard({ event }: EventCardProps) {
  const status = statusLabels[event.status];
  const external = isExternalUrl(event.href);

  return (
    <motion.article variants={scaleIn} className="h-full">
      <Card className="group flex h-full flex-col overflow-hidden p-0 transition duration-500 hover:-translate-y-1 hover:shadow-glow">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={event.banner}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <div className="absolute left-4 top-4 flex gap-2">
            <Badge variant={status.variant}>{status.label}</Badge>
            {event.badge ? <Badge variant="warning">{event.badge}</Badge> : null}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-xl font-semibold tracking-tight">{event.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{event.description}</p>

          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Calendar className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              {event.date ? (
                <time dateTime={event.date}>{getEventDateDisplay(event)}</time>
              ) : (
                <span>{getEventDateDisplay(event)}</span>
              )}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden />
              {event.location}
            </li>
          </ul>

          {event.showCountdown && event.date && event.status !== "past" ? (
            <div className="mt-5">
              <Countdown targetDate={event.date} />
            </div>
          ) : null}

          <div className="mt-6">
            <Button asChild variant={event.status === "past" ? "secondary" : "default"} className="w-full sm:w-auto">
              <Link
                href={event.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-disabled={event.status === "past"}
              >
                {event.status === "registration"
                  ? "Inscrever-se"
                  : event.status === "past"
                    ? "Ver retrospectiva"
                    : "Saiba mais"}
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}

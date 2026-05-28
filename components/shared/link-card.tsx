"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getIcon } from "@/lib/icons";
import { cn, isExternalUrl } from "@/lib/utils";
import { scaleIn } from "@/lib/motion";
import type { QuickLink } from "@/types";

interface LinkCardProps {
  link: QuickLink;
}

export function LinkCard({ link }: LinkCardProps) {
  const Icon = getIcon(link.icon);
  const external = link.external ?? isExternalUrl(link.href);

  return (
    <motion.div variants={scaleIn}>
      <Link
        href={link.href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group block h-full focus-visible:outline-none"
      >
        <Card
          className={cn(
            "h-full overflow-hidden transition duration-500 hover:-translate-y-1 hover:shadow-glow",
            link.featured && "border-primary/20 bg-primary/5",
          )}
        >
          <CardHeader className="flex-row items-start justify-between gap-4 space-y-0">
            <span
              className={cn(
                "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition duration-500",
                link.featured
                  ? "bg-primary/20 text-accent group-hover:glow-blue"
                  : "bg-surface text-muted group-hover:bg-primary/15 group-hover:text-accent",
              )}
            >
              <Icon className="h-5 w-5" aria-hidden />
            </span>
            <ArrowUpRight
              className="h-4 w-4 text-muted opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-accent"
              aria-hidden
            />
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-2">{link.title}</CardTitle>
            <CardDescription>{link.description}</CardDescription>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { scaleIn } from "@/lib/motion";
import type { GalleryItem } from "@/types";

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {items.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelected(item)}
            className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Abrir imagem: ${item.alt}`}
          >
            <div className="relative overflow-hidden rounded-2xl glass glow-border">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              {item.category ? (
                <span className="absolute bottom-3 left-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
                  {item.category}
                </span>
              ) : null}
            </div>
          </motion.button>
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="overflow-hidden border-none bg-transparent p-0 shadow-none sm:max-w-4xl">
          {selected ? (
            <div className="relative aspect-auto max-h-[85vh] w-full">
              <Image
                src={selected.src}
                alt={selected.alt}
                width={selected.width}
                height={selected.height}
                className="h-auto max-h-[85vh] w-full rounded-xl object-contain"
                priority
              />
              <p className="mt-3 text-center text-sm text-muted">{selected.alt}</p>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

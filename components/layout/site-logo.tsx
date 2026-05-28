import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface SiteLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { box: "h-9", width: 36, height: 40 },
  md: { box: "h-10", width: 40, height: 44 },
  lg: { box: "h-14", width: 56, height: 62 },
} as const;

/** Logo PJJ com recorte visual (arquivo já sem margens laterais vazias). */
export function SiteLogo({ className, size = "md" }: SiteLogoProps) {
  const { logo } = siteConfig;
  const dim = sizes[size];

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center",
        dim.box,
        className,
      )}
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="h-full w-auto max-w-none object-contain object-center"
        priority
      />
    </span>
  );
}

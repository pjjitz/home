import type { SocialLink } from "@/types";
import { contactConfig } from "@/config/contact";

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: contactConfig.instagram.href,
    icon: "instagram",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: contactConfig.whatsapp.href,
    icon: "message-circle",
  },
];

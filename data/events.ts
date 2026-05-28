import type { PjjEvent } from "@/types";
import { contactConfig } from "@/config/contact";

/**
 * Edite este arquivo para adicionar ou alterar eventos.
 * date / endDate: formato ISO 8601 (ex: "2026-07-23T08:00:00-03:00")
 */
export const events: PjjEvent[] = [
  {
    id: "acamps-2026",
    title: "Acamps 2026",
    description:
      "O acampamento de jovens Shalom em Imperatriz. Dias de louvor, formação, esporte e comunhão.",
    date: "2026-07-23T08:00:00-03:00",
    endDate: "2026-07-26T20:00:00-03:00",
    location: "Chácara Israel, Imperatriz, MA",
    href: contactConfig.acampsPage,
    banner: "/images/acamps.png",
    status: "registration",
    badge: "Inscrições abertas",
    showCountdown: true,
  },
  {
    id: "after-acamps-2026",
    title: "After Acamps 2026 (Reencontro)",
    description:
      "Reencontro da galera após o Acamps: festa, louvor e celebração da amizade que continua.",
    dateLabel: "Após o Acamps 2026",
    location: "Imperatriz, MA",
    href: contactConfig.whatsapp.href,
    banner: "/images/reencontro.jpg",
    status: "upcoming",
    badge: "Em breve",
  },
  {
    id: "lazer-pjj",
    title: "Lazer do PJJ",
    description:
      "Tarde de confraternização, esportes e comunhão. Juventude viva, pertencimento de verdade.",
    dateLabel: "Sem data definida",
    location: "Imperatriz, MA",
    href: contactConfig.whatsapp.href,
    banner: "/images/lazerpjj.jpg",
    status: "upcoming",
  },
];

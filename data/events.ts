import type { PjjEvent } from "@/types";
import { contactConfig } from "@/config/contact";

/**
 * Edite este arquivo para adicionar ou alterar eventos.
 * date: formato ISO 8601 quando houver data confirmada.
 * dateLabel: texto exibido quando a data ainda não está definida.
 */
export const events: PjjEvent[] = [
  {
    id: "acamps-2026",
    title: "Acamps 2026",
    description:
      "O acampamento de jovens Shalom em Imperatriz. Dias de louvor, formação, esporte e comunhão.",
    dateLabel: "2026",
    location: "Imperatriz, MA",
    href: contactConfig.acampsForm,
    banner: "/images/acamps.png",
    status: "registration",
    badge: "Inscrições abertas",
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

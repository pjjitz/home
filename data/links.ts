import type { QuickLink } from "@/types";
import { contactConfig } from "@/config/contact";

/**
 * Edite este arquivo para adicionar ou alterar links rápidos.
 * Copie um objeto, altere os campos e faça commit no GitHub.
 */
export const quickLinks: QuickLink[] = [
  {
    id: "grupo-oracao",
    title: "Grupo de Oração",
    description: "Encontros semanais, louvor e formação na luz do Carisma Shalom.",
    href: contactConfig.whatsapp.href,
    icon: "flame",
    featured: true,
    external: true,
  },
  {
    id: "inscricao-acamp",
    title: "Inscrições Acamp's",
    description: "Vagas, valores e informações do Acamps 2026.",
    href: contactConfig.acampsForm,
    icon: "tent",
    featured: true,
    external: true,
  },
  {
    id: "playlist-louvor",
    title: "Playlist de Louvor",
    description: "Músicas que marcam nossa caminhada e aquecem o coração.",
    href: "https://open.spotify.com",
    icon: "music-2",
    external: true,
  },
  {
    id: "formacao",
    title: "Formação Jovem",
    description: "Materiais, estudos e conteúdos para crescer na fé com ousadia.",
    href: contactConfig.formacaoUrl,
    icon: "book-open",
    external: true,
  },
  {
    id: "missao",
    title: "Missão & Serviço",
    description: "Ações evangelizadoras e oportunidades de servir com a juventude.",
    href: "#sobre",
    icon: "heart-handshake",
  },
  {
    id: "contato",
    title: "Fale com a Secretaria Jovem",
    description: `Dúvidas, convites e parcerias. WhatsApp ${contactConfig.whatsapp.display}.`,
    href: contactConfig.whatsapp.href,
    icon: "message-circle",
    external: true,
  },
];

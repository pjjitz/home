import {
  BookOpen,
  Flame,
  HeartHandshake,
  Instagram,
  MessageCircle,
  Music,
  Music2,
  Tent,
  Youtube,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  flame: Flame,
  tent: Tent,
  "music-2": Music2,
  "book-open": BookOpen,
  "heart-handshake": HeartHandshake,
  "message-circle": MessageCircle,
  instagram: Instagram,
  youtube: Youtube,
  music: Music,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Flame;
}

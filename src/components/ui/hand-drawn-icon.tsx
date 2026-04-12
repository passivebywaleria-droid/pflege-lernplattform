"use client";

/**
 * Hand-Drawn Icon Set — Ersetzt Unicode-Emojis durch SVG-Icons im Doodle-Stil
 * Organische, leicht unregelmäßige Linien für warmen, handgemalten Look
 *
 * Quellen-Inspiration: Streamline Freehand / SVG Repo Hand-Drawn (CC0)
 * Alle Pfade sind Original-Kreationen im Doodle-Stil
 */

import { icons as lucideIcons } from "lucide-react";
import type { LucideProps } from "lucide-react";
import type { FC } from "react";

interface HandDrawnIconProps {
  name: IconName;
  size?: number;
  color?: string;
  className?: string;
}

export type IconName =
  | "check" | "cross" | "book" | "lightning" | "fire"
  | "heart" | "brain" | "lightbulb" | "search" | "pencil"
  | "trophy" | "clipboard" | "arrow-right" | "refresh" | "puzzle"
  | "hospital" | "target" | "celebration" | "muscle" | "star"
  | "books" | "sparkle" | "thinking" | "smile" | "grin" | "starry-eyes"
  | "neutral" | "clap" | "new";

const ICON_PATHS: Record<IconName, string> = {
  check: "M6 13.5c1.5 2 3.5 4.5 5.5 6.5C15 15 19 9 22 5c.3-.3-.2-.8-.5-.5C18 8 14.5 13 12 16.5c-1.5-2-3.5-4-5.5-5.5-.4-.3-.9.2-.5.5z",
  cross: "M6 6c4 4 8 8 12 12m0-12C14 10 10 14 6 18",
  book: "M4 4.5c0-1 .8-1.5 2-1.5 2.5 0 5 .8 6 2.5 1-1.7 3.5-2.5 6-2.5 1.2 0 2 .5 2 1.5v13c0 .8-.5 1.2-1.5 1.2-2 0-4.5.8-6.5 2.3-2-1.5-4.5-2.3-6.5-2.3-1 0-1.5-.4-1.5-1.2V4.5z M12 5.5v14.8",
  lightning: "M13 2L5.5 13h5L9 22l8.5-12h-5.2L13 2z",
  fire: "M12 23c-4.5 0-7-3-7-6.5 0-4 3-7 4.5-8.5.3-.3.8 0 .7.4-.5 2 .5 3.5 1.8 4.2C12.5 10 13 7 12 4c-.1-.4.4-.6.6-.3C15 7 19 10.5 19 16.5 19 20 16.5 23 12 23z",
  heart: "M12 21C8 17.5 3 13.5 3 9c0-3 2.5-5.5 5.5-5.5C10.5 3.5 12 5 12 5s1.5-1.5 3.5-1.5C18.5 3.5 21 6 21 9c0 4.5-5 8.5-9 12z",
  brain: "M12 2c-1.5 0-3 .8-3.5 2-.8-.3-2-.2-2.8.5-1 .8-1.2 2-.8 3-.8.5-1.4 1.5-1.4 2.5s.4 2 1.2 2.5c-.3 1 0 2.2.8 3 .8.7 2 .8 2.8.5.5 1.2 2 2 3.5 2s3-.8 3.5-2c.8.3 2 .2 2.8-.5 1-.8 1.2-2 .8-3 .8-.5 1.4-1.5 1.4-2.5s-.4-2-1.2-2.5c.3-1 0-2.2-.8-3-.8-.7-2-.8-2.8-.5C15 2.8 13.5 2 12 2z M12 2v20",
  lightbulb: "M9 21h6 M10 17c-2-1.5-3.5-3.5-3.5-6.5C6.5 7 9 4.5 12 4.5s5.5 2.5 5.5 6c0 3-1.5 5-3.5 6.5v1H10v-1z M10 17h4 M10 19h4",
  search: "M10 17c3.9 0 7-3.1 7-7s-3.1-7-7-7-7 3.1-7 7 3.1 7 7 7z M15.5 15.5L21 21",
  pencil: "M16.5 3.5l4 4L8 20l-4.5 1L5 16.5 16.5 3.5z M14 6l4 4",
  trophy: "M6 3h12v3c0 4-2.5 7-6 8-3.5-1-6-4-6-8V3z M3 3h3 M18 3h3 M3 3v4c0 1 .5 2 1.5 2.5 M21 3v4c0 1-.5 2-1.5 2.5 M8 21h8 M12 14v7",
  clipboard: "M8 4h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2 M9 2h6v3H9V2z M9 12h6 M9 16h4",
  "arrow-right": "M5 12h14m-6-6l6.5 6-6.5 6",
  refresh: "M3 12a9 9 0 0 1 15-6.7L21 2v6h-6l2.5-2.5A7 7 0 0 0 5 12 M21 12a9 9 0 0 1-15 6.7L3 22v-6h6l-2.5 2.5A7 7 0 0 0 19 12",
  puzzle: "M6 6h4.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5H20v4.5c1.5 0 2.5 1 2.5 2.5s-1 2.5-2.5 2.5V20H15.5c0-1.5-1-2.5-2.5-2.5s-2.5 1-2.5 2.5H6v-4.5C4.5 16 3.5 15 3.5 13.5S4.5 11 6 11V6z",
  hospital: "M4 22V6l8-4 8 4v16H4z M10 14h4v8h-4z M10 9h1v2h2V9h1v2h-1v1h-2v-1h-1V9z",
  target: "M12 22c5.5 0 10-4.5 10-10S17.5 2 12 2 2 6.5 2 12s4.5 10 10 10z M12 18c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6z M12 14c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z",
  celebration: "M4 21l3-10 7 7-10 3z M14 7l2.5-2.5 M18 11l2.5-.5 M11 4l.5 2.5 M16.5 16.5l2 2 M8.5 2l1 3 M2 8.5l3 1 M18 4l-1.5 3",
  muscle: "M3 12c0-2 1-4 3-4s3 2 3 4c1-2 2-4 4-4s3 2 3 4c0 3-3 7-7 9C5 19 3 15 3 12z",
  star: "M12 2l3 7h7l-5.5 4.5L18.5 21 12 17l-6.5 4 2-7.5L2 9h7l3-7z",
  books: "M4 4h4v16H4z M8 4h4v16H8z M13 6l4-1v15l-4 1V6z",
  sparkle: "M12 2v4 M12 18v4 M2 12h4 M18 12h4 M5 5l2.5 2.5 M16.5 16.5L19 19 M19 5l-2.5 2.5 M7.5 16.5L5 19",
  thinking: "M12 22c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z M9 9c0-.6.4-1 1-1s1 .4 1 1 M13 9c0-.6.4-1 1-1s1 .4 1 1 M8 15c1.5 1.5 5 2 8 0",
  smile: "M12 22c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z M9 9.5v1 M15 9.5v1 M8 15c1.5 1.5 5 2 8 0",
  grin: "M12 22c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z M9 9.5v1 M15 9.5v1 M8 14c1 2 3 3 4 3s3-1 4-3",
  "starry-eyes": "M12 22c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z M9 9l.7 1.5h1.6L10.5 11.5l.3 1.5L9 12.2 7.2 13l.3-1.5-.8-1h1.6z M15 9l.7 1.5h1.6l-.8 1 .3 1.5L15 12.2 13.2 13l.3-1.5-.8-1h1.6z M8 16c1.5 1 5 1.5 8 0",
  neutral: "M12 22c5 0 9-4 9-9s-4-9-9-9-9 4-9 9 4 9 9 9z M9 9.5v1 M15 9.5v1 M9 15h6",
  clap: "M12 2c-1 0-2 1-2 2v8l-3-2c-1-.5-2 0-2.5.8-.4.8 0 1.8.5 2.2l5 4c1 .8 2.5 1 3.5.5l3-1.5c1-.5 1.5-1.5 1.5-2.5V7c0-1-1-2-2-2s-2 1-2 2v-.5c0-1-1-1.5-2-1.5s-1.5.5-1.5 1.5V4c0-1-.5-2-1.5-2z",
  new: "M3 5h18v14H3V5z M8 9l2 3-2 3 M12 9v6 M16 9l-2 3 2 3",
};

export function HandDrawnIcon({ name, size = 24, color = "currentColor", className = "" }: HandDrawnIconProps) {
  const path = ICON_PATHS[name];
  if (!path) return null;

  // Icons die nur Strokes brauchen (kein Fill)
  const strokeOnly = !["check", "fire", "heart", "muscle", "star", "lightbulb"].includes(name);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={strokeOnly ? "none" : color}
      stroke={color}
      strokeWidth={strokeOnly ? 1.8 : 0.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path.split(" M").map((d, i) => (
        <path key={i} d={i === 0 ? d : `M${d}`} />
      ))}
    </svg>
  );
}

/**
 * Mapping: Emoji → HandDrawnIcon Name
 * Für schrittweise Migration von Unicode-Emojis zu SVG-Icons
 */
export const EMOJI_TO_ICON: Record<string, IconName> = {
  "✅": "check",
  "❌": "cross",
  "📖": "book",
  "⚡": "lightning",
  "🔥": "fire",
  "❤️": "heart",
  "🧠": "brain",
  "💡": "lightbulb",
  "🔍": "search",
  "✍️": "pencil",
  "🏆": "trophy",
  "📋": "clipboard",
  "▶️": "arrow-right",
  "🔄": "refresh",
  "🧩": "puzzle",
  "🏥": "hospital",
  "🎯": "target",
  "🎉": "celebration",
  "💪": "muscle",
  "⭐": "star",
  "📚": "books",
  "✨": "sparkle",
  "🤔": "thinking",
  "🙂": "smile",
  "😊": "grin",
  "🤩": "starry-eyes",
  "😶": "neutral",
  "👏": "clap",
  "🆕": "new",
};

/**
 * Hilfsfunktion: Emoji-String durch Icon ersetzen
 * Usage: <EmojiIcon emoji="🎉" size={24} />
 */
export function EmojiIcon({ emoji, size = 24, color, className }: { emoji: string; size?: number; color?: string; className?: string }) {
  const iconName = EMOJI_TO_ICON[emoji];
  if (!iconName) return <span className={className}>{emoji}</span>;
  return <HandDrawnIcon name={iconName} size={size} color={color} className={className} />;
}

/**
 * kebab-case → PascalCase Konvertierung
 * "graduation-cap" → "GraduationCap"
 * "stethoscope" → "Stethoscope"
 */
function kebabToPascal(str: string): string {
  return str
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

/**
 * Universelle Icon-Komponente für Content-Steps.
 * Auflösungs-Reihenfolge:
 * 1. HandDrawnIcon (29 Doodle-Icons)
 * 2. Emoji → HandDrawnIcon
 * 3. Lucide-React (1700+ Icons, dynamisch per kebab-case Name)
 * 4. Fallback: als Text rendern
 *
 * Usage: <ContentIcon icon="stethoscope" size={20} color="#C4877F" />
 *        <ContentIcon icon="graduation-cap" size={20} />
 *        <ContentIcon icon="heart" size={20} />  ← nutzt HandDrawn
 */
export function ContentIcon({ icon, size = 20, color = "#C4877F", className }: {
  icon?: string;
  size?: number;
  color?: string;
  className?: string;
}) {
  if (!icon) return null;

  // 1. HandDrawnIcon (Doodle-Stil hat Vorrang)
  if (icon in ICON_PATHS) {
    return <HandDrawnIcon name={icon as IconName} size={size} color={color} className={className} />;
  }

  // 2. Emoji → HandDrawnIcon
  if (EMOJI_TO_ICON[icon]) {
    return <HandDrawnIcon name={EMOJI_TO_ICON[icon]} size={size} color={color} className={className} />;
  }

  // 3. Lucide-React — alle 1700+ Icons via kebab-case Name
  const pascalName = kebabToPascal(icon);
  const LucideComponent = lucideIcons[pascalName as keyof typeof lucideIcons] as FC<LucideProps> | undefined;
  if (LucideComponent) {
    return <LucideComponent size={size} color={color} className={className} strokeWidth={1.8} />;
  }

  // 4. Fallback: als Text rendern (Emoji oder unbekannter Name)
  return <span className={className} style={{ fontSize: size * 0.8 }}>{icon}</span>;
}

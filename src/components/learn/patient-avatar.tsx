"use client";

interface PatientAvatarProps {
  name: string;
  size?: number;
  /** Klick-Handler — Avatar wird interaktiv (z. B. öffnet Patient-Modal) */
  onClick?: () => void;
}

/**
 * Patient-Avatar im Bundle-Stil (claude-design-bundle/shared.jsx PhotoPlaceholder).
 * Repeating-linear-gradient (135°) mit Accent-Tönen — fungiert als
 * dezenter, wiedererkennbarer Patient-Identifier ohne Foto.
 */
export function PatientAvatar({ name, size = 40, onClick }: PatientAvatarProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const interactive = !!onClick;
  const Element = interactive ? "button" : "div";

  return (
    <Element
      onClick={onClick}
      type={interactive ? "button" : undefined}
      aria-label={interactive ? `Mehr über ${name}` : undefined}
      className={`relative flex items-center justify-center shrink-0 ${
        interactive ? "cursor-pointer transition-transform active:scale-95" : ""
      }`}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        background: `repeating-linear-gradient(135deg, var(--lern-accent) 0 8px, var(--lern-accent-bg) 8px 16px)`,
      }}
    >
      <span
        className="text-white font-semibold tabular-nums"
        style={{
          fontSize: size * 0.32,
          textShadow: "0 1px 2px rgba(0,0,0,0.18)",
          letterSpacing: 0.5,
        }}
      >
        {initials}
      </span>
    </Element>
  );
}

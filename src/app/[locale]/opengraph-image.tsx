import { ImageResponse } from "next/og"

// Statisches Share-Bild für Social/Link-Vorschau (WhatsApp, IG, Pinterest, X, …).
// Wird von Next automatisch als og:image + twitter:image eingebunden.

export const alt = "Carovia — Deine komplette Pflege-Theorie, in deiner Sprache"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Warme Palette (muss hier hardcodiert sein — ImageResponse kennt keine CSS-Vars)
const LINEN = "#F8F5F0"
const SAGE = "#5A7D60"
const INK = "#1A1815"
const MUTE = "#4E4740"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: LINEN,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Marke */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              backgroundColor: SAGE,
              color: "#FFFFFF",
              fontSize: 38,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            C
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, color: INK }}>Carovia</div>
        </div>

        {/* Claim */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 700, color: INK, lineHeight: 1.05 }}>
            Deine komplette Pflege-Theorie.
          </div>
          <div style={{ fontSize: 76, fontWeight: 700, color: SAGE, lineHeight: 1.05 }}>
            Besser als mit Lehrer.
          </div>
        </div>

        {/* Fußzeile */}
        <div style={{ display: "flex", fontSize: 30, color: MUTE }}>
          In deiner Sprache · von einer Pflege-Lehrerin · Server in Deutschland
        </div>
      </div>
    ),
    { ...size }
  )
}

// CE-02 — An der Pflege von Menschen in kurativen Prozessen mitwirken
// Master-Barrel: re-exportiert alle Themen + Situationen
// Pipeline v9 — 2026-04-22

// ═══════════════════════════════════════════════════
// Array-Exports für content-loader (Seite /lernen/ce/ce-02)
// ═══════════════════════════════════════════════════

export { CE02_THEMEN } from "./themen";
export { CE02_SITUATIONEN } from "./situationen";

// ═══════════════════════════════════════════════════
// Themen
// ═══════════════════════════════════════════════════

// Thema: Sturz-Prophylaxe (Cluster B — Mobilität)
export {
  CE02_THEMA_STURZ_PROPHYLAXE_BAUSTEINE,
  CE02_THEMA_STURZ_PROPHYLAXE_GLOSSAR,
  CE02_THEMA_STURZ_PROPHYLAXE_KARTEIKARTEN,
} from "./themen/sturz-prophylaxe";

// Weitere Themen in Vorbereitung:
// - kinaesthetik (bausteine-plan.md vorhanden — noch nicht in TS)
// - thrombose-prophylaxe (bausteine-plan.md vorhanden — noch nicht in TS)
// - dekubitus-prophylaxe (Ordner angelegt — noch ohne Plan)

// ═══════════════════════════════════════════════════
// Situationen
// ═══════════════════════════════════════════════════

// Situation: Frau M. — Nächtlicher Sturz (Spirale 2, Akut-Setting)
export {
  CE02_SIT_FRAU_M_NACHT_STURZ_PATIENT,
  CE02_SIT_FRAU_M_NACHT_STURZ_INFORMIEREN,
  CE02_SIT_FRAU_M_NACHT_STURZ_BEOBACHTEN,
  CE02_SIT_FRAU_M_NACHT_STURZ_PLANEN,
  CE02_SIT_FRAU_M_NACHT_STURZ_DURCHFUEHREN,
  CE02_SIT_FRAU_M_NACHT_STURZ_EVALUIEREN,
  CE02_SIT_FRAU_M_NACHT_STURZ_DOKUMENTIEREN,
} from "./situationen/frau-m-nacht-sturz";

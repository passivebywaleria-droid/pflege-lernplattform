// CE-02 Thema Sturz-Prophylaxe — Karteikarten
// Quelle: content/ce-02/themen/sturz-prophylaxe/bausteine-plan.md (13 Karteikarten, 1 pro Baustein)
// Pipeline v9 — 2026-04-22

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_STURZ_PROPHYLAXE_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-sturz-kk-01",
    vorderseite: "Definition: Was ist ein Sturz nach WHO?",
    rueckseiteC1:
      "Ereignis, bei dem eine Person unbeabsichtigt auf dem Boden oder tieferer Ebene landet — inkl. Near-Miss.",
    rueckseiteB1:
      "Wenn jemand unabsichtlich auf den Boden fällt. Auch Fast-Stürze (Near-Miss) zählen.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "WHO 2007",
  },
  {
    id: "ce02-sturz-kk-02",
    vorderseite: "Was ist der stärkste Einzelprädiktor für einen erneuten Sturz?",
    rueckseiteC1:
      "Ein Sturz in den letzten 12 Monaten — verdoppelt das Risiko.",
    rueckseiteB1:
      "Ein Sturz im letzten Jahr. Die Chance für einen neuen Sturz ist dann doppelt so hoch.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Cochrane Review 2023",
  },
  {
    id: "ce02-sturz-kk-03",
    vorderseite: "Sind beidseitige Bettgitter eine Sturzprophylaxe?",
    rueckseiteC1:
      "Nein — sie können Sturzhöhe erhöhen. Ohne Zustimmung: freiheitsentziehende Maßnahme (§ 1831 BGB).",
    rueckseiteB1:
      "Nein. Patienten klettern darüber und fallen tiefer. Ohne Erlaubnis vom Gericht oder Patient verboten.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP 2022, § 1831 BGB",
  },
  {
    id: "ce02-sturz-kk-04",
    vorderseite:
      "Empfiehlt der DNQP-Standard 2022 ein einzelnes Sturzrisiko-Instrument als Pflicht?",
    rueckseiteC1:
      "Nein — klinische Einschätzung ist führend. Tools wie Tinetti, TUG, Morse sind Hilfsmittel.",
    rueckseiteB1:
      "Nein. Die Pflegekraft schaut selbst. Tools wie Tinetti oder TUG helfen, sind aber nicht Pflicht.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "DNQP 2022",
  },
  {
    id: "ce02-sturz-kk-05",
    vorderseite: "Was ist die wirksamste Einzelmaßnahme gegen Stürze?",
    rueckseiteC1:
      "Progressives Kraft- und Balance-Training, 2-3×/Woche, min. 12 Wochen (Cochrane 2023).",
    rueckseiteB1:
      "Kraft- und Balance-Training. 2-3 Mal pro Woche. Mindestens 12 Wochen lang.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Cochrane Review 2023 (Sherrington et al.)",
  },
  {
    id: "ce02-sturz-kk-06",
    vorderseite:
      "Welche 3 Medikamenten-Gruppen erhöhen das Sturzrisiko besonders stark?",
    rueckseiteC1:
      "Benzodiazepine/Z-Substanzen (Sedierung), Antihypertensiva (Orthostase), Diuretika (Nykturie + Volumenmangel).",
    rueckseiteB1:
      "Schlafmittel/Beruhigungsmittel, Blutdruckmittel, Wassertabletten.",
    tag: "krankheitslehre",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Beers-Liste 2023",
  },
  {
    id: "ce02-sturz-kk-07",
    vorderseite: "Welches Gesetz regelt die Fixierung in Deutschland?",
    rueckseiteC1:
      "§ 1831 BGB. Freiheitsentziehende Maßnahmen brauchen richterliche Genehmigung oder informierte Einwilligung. In akuter Eigengefährdung notfallmäßig, innerhalb 24 h richterliche Genehmigung beantragen.",
    rueckseiteB1:
      "§ 1831 BGB. Fixierung nur mit Erlaubnis vom Gericht oder vom Patienten. Im Notfall 24 Stunden Zeit für die Erlaubnis.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "§ 1831 BGB",
  },
  {
    id: "ce02-sturz-kk-08",
    vorderseite:
      "Bei welchem Patienten stellt man das Bett bewusst sehr tief (mit Sturzmatte)?",
    rueckseiteC1:
      "Bei Demenz-Patienten mit Klettertendenz — tiefes Bett + Matte reduziert Sturzhöhe und damit Verletzungsschwere.",
    rueckseiteB1:
      "Bei Demenz-Patienten, die nachts klettern. Tiefes Bett + Matte = weniger Verletzungen beim Sturz.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP 2022",
  },
  {
    id: "ce02-sturz-kk-09",
    vorderseite: "Was ist der Teufelskreis beim Post-Fall-Syndrom?",
    rueckseiteC1:
      "Sturz → Angst → Bewegungsvermeidung → Muskelabbau → Gleichgewichts-Verlust → erhöhtes Sturzrisiko.",
    rueckseiteB1:
      "Sturz → Angst → weniger Bewegung → schwächere Muskeln → schlechteres Gleichgewicht → höheres Sturzrisiko.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP 2022",
  },
  {
    id: "ce02-sturz-kk-10",
    vorderseite:
      "Welche 2 Zeichen sprechen für eine Hüftfraktur und bedeuten: nicht bewegen?",
    rueckseiteC1:
      "(1) Bein-Verkürzung und (2) Außenrotation des Fußes. Nicht bewegen, Notarzt/Arzt.",
    rueckseiteB1:
      "(1) Bein ist kürzer und (2) Fuß dreht nach außen. Nicht bewegen, Arzt rufen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP 2022",
  },
  {
    id: "ce02-sturz-kk-11",
    vorderseite: "Welche 7 Pflicht-Elemente hat ein Sturzprotokoll?",
    rueckseiteC1:
      "Zeit+Ort, Hergang, Umstände, Patientenzustand, Verletzungen, Sofortmaßnahmen, Nachsorge-Plan.",
    rueckseiteB1:
      "Zeit+Ort, was passiert ist, Umstände, Zustand des Patienten, Verletzungen, Hilfsmaßnahmen, nächste Schritte.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP 2022",
  },
  {
    id: "ce02-sturz-kk-12",
    vorderseite: "Was verhindern Hüftprotektoren — und was nicht?",
    rueckseiteC1:
      "Sie verhindern Hüftfrakturen beim Sturz, NICHT den Sturz selbst. Indikation nur bei Hochrisiko.",
    rueckseiteB1:
      "Sie verhindern Knochenbrüche an der Hüfte. Den Sturz verhindern sie NICHT.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP 2022",
  },
  {
    id: "ce02-sturz-kk-13",
    vorderseite:
      "Welche 5 Berufsgruppen gehören typischerweise ins Sturzprophylaxe-Team?",
    rueckseiteC1:
      "Pflege (koordiniert), Arzt, Physiotherapie, Augenarzt, Apotheker. Ggf. Ergotherapie/Sozialdienst.",
    rueckseiteB1:
      "Pflege, Arzt, Physiotherapie, Augenarzt, Apotheker. Manchmal auch Ergotherapie.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP 2022",
  },
];

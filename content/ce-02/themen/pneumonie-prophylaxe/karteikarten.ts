// CE-02 Thema Pneumonie-Prophylaxe — Karteikarten (11 Karten, 1 pro Baustein)
// Quelle: content/ce-02/themen/pneumonie-prophylaxe/karteikarten-plan.md
// Pipeline v9 — 2026-04-23
// FSRS-kompatibel: Vorderseite = Frage, Rückseite = Kernantwort

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_PNEUMONIE_PROPHYLAXE_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-pneumonie-kk-01",
    vorderseite: "Ab wann spricht man von einer nosokomialen Pneumonie?",
    rueckseiteC1:
      "Ab 48 Stunden nach Krankenhausaufnahme. Vorher gilt die Pneumonie als ambulant erworben (CAP — community-acquired pneumonia).",
    rueckseiteB1:
      "Ab 48 Stunden im Krankenhaus. Vorher: ambulant erworben (von zu Hause mitgebracht).",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "AWMF S3-Leitlinie Nosokomiale Pneumonie (2017)",
  },
  {
    id: "ce02-pneumonie-kk-02",
    vorderseite: "Nenne 4 pflegerelevante Hauptrisikofaktoren für eine Pneumonie.",
    rueckseiteC1:
      "(1) Immobilität, (2) Bewusstseinseinschränkung, (3) Dysphagie (Schluckstörung), (4) Intubation/Tracheotomie. Dazu: Sekretretention, Mikroaspiration, höheres Alter, COPD.",
    rueckseiteB1:
      "(1) Nicht aufstehen können, (2) Bewusstlosigkeit, (3) Schluckstörung, (4) Beatmungsschlauch. Dazu: Schleim bleibt in der Lunge, altes Alter, COPD.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "AWMF S3 (2017), KRINKO (2013)",
  },
  {
    id: "ce02-pneumonie-kk-03",
    vorderseite: "Wofür steht die Eselsbrücke LISA in der Pneumonie-Prophylaxe?",
    rueckseiteC1:
      "**L**agerung (Oberkörperhoch 30-45°), **I**nhalation (bei Indikation), **S**ekretmanagement, **A**temübungen. Merkhilfe — nicht Leitlinie. Kombination plus Frühmobilisation wirkt.",
    rueckseiteB1:
      "L = Lagerung (Oberkörper hoch), I = Inhalation (Luft feucht), S = Sekret weg, A = Atemübungen. Alle 4 zusammen plus Bewegung.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Pflege-Didaktik (allgemein verwendete Merkhilfe)",
  },
  {
    id: "ce02-pneumonie-kk-04",
    vorderseite: "Welche Oberkörperposition senkt nachweislich die Rate der ventilatorassoziierten Pneumonie? Warum auch Knieknick?",
    rueckseiteC1:
      "30-45° Oberkörperhochlagerung (Drakulovic-Studie 1999: VAP-Rate 34% → 8%). Knieknick verhindert das Hochrutschen (Scherkräfte), das sonst zum Dekubitus am Sakrum führt.",
    rueckseiteB1:
      "30-45° Oberkörper hoch. Das senkt Pneumonie stark (von 34% auf 8%). Knieknick: damit der Patient nicht nach unten rutscht und einen Dekubitus bekommt.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "KRINKO (2013), Drakulovic et al. (1999)",
  },
  {
    id: "ce02-pneumonie-kk-05",
    vorderseite: "Wie funktioniert die Lippenbremse und warum hilft sie bei COPD?",
    rueckseiteC1:
      "Locker geschlossene Lippen, langsam ausatmen (2x so lang wie einatmen). Erzeugt PEEP-Effekt: kleine Bronchien bleiben offen, kein dynamischer Kollaps, weniger Air-Trapping — bessere Ausatmung.",
    rueckseiteB1:
      "Lippen locker, langsam ausatmen (doppelt so lang wie einatmen). Die Bronchien bleiben offen. Luft kommt besser raus. Gut bei COPD und Atemnot.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "GOLD-Report COPD (2023), AWMF S2k COPD",
  },
  {
    id: "ce02-pneumonie-kk-06",
    vorderseite: "Was ist das Prinzip der Kontaktatmung und wann ist sie besonders geeignet?",
    rueckseiteC1:
      "Hände flach auf den Thorax legen, Patient atmet bewusst 'in die Hand hinein'. Nutzt propriozeptive Reize für gezielte Belüftung. Besonders bei schwachen, dementen, bewusstseinseingeschränkten Patienten — keine Geräte nötig.",
    rueckseiteB1:
      "Hände auf den Brustkorb legen. Patient atmet in die Hand. Aktiviert Lungenbereiche. Besonders gut bei schwachen oder verwirrten Patienten — ohne Geräte.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: false,
    quelle: "Atemtherapie-Grundlagen (Wacker-Schulz-Konzept)",
  },
  {
    id: "ce02-pneumonie-kk-07",
    vorderseite: "Warum ist Huffing oft besser als kräftiges Husten, besonders postoperativ?",
    rueckseiteC1:
      "Huffing (Hauchen bei offenem Mund, 'ha'-Laut) mobilisiert Sekret ohne hohen Intrathorax-Druck. Vermeidet Air-Trapping, starken OP-Schmerz und Bronchialkollaps. Postoperativ zusätzlich Bauchdecken-Abstützung mit Kissen.",
    rueckseiteB1:
      "Huffing (Mund auf, 'ha' ausatmen) mobilisiert Schleim ohne starken Druck. Weniger Schmerz nach OP. Kissen auf den Bauch drücken hilft zusätzlich.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Atemtherapie-Grundlagen",
  },
  {
    id: "ce02-pneumonie-kk-08",
    vorderseite: "Warum ist Frühmobilisation gleichzeitig Pneumonie-, Thrombose- und Dekubitus-Prophylaxe?",
    rueckseiteC1:
      "Aufrechte Position + Bewegung vergrößern das Atemzugvolumen (Pneumonie), aktivieren die Wadenmuskelpumpe (Thrombose) und verhindern lokale Dauerdruckbelastung (Dekubitus). Eine Maßnahme — drei Wirkungen.",
    rueckseiteB1:
      "Bewegung hilft drei Mal: Lunge bekommt mehr Luft (Pneumonie weg), Blut fließt gut (Thrombose weg), kein Dauerdruck auf die Haut (Dekubitus weg). Eine Maßnahme — drei Wirkungen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DNQP Mobilität (2020), AWMF S3 (2017)",
  },
  {
    id: "ce02-pneumonie-kk-09",
    vorderseite: "Wie hängen Mundpflege und Pneumonie zusammen?",
    rueckseiteC1:
      "Plaque-Bakterien (oropharyngeale Mikroflora) werden durch Mikroaspiration (v.a. nachts) in die tiefen Atemwege geschwemmt. Konsequente mechanische Mundpflege 2× täglich senkt die Pneumonie-Mortalität um bis zu 40%. Chlorhexidin-Einsatz umstritten.",
    rueckseiteB1:
      "Keime im Mund kommen nachts durch kleine Schluckunfälle in die Lunge. 2× täglich Zähne putzen senkt die Pneumonie-Todesrate um bis zu 40%. Bürste ist wichtiger als Spülung.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "KRINKO (2013)",
  },
  {
    id: "ce02-pneumonie-kk-10",
    vorderseite: "Was machst du als erste Maßnahme bei Verdacht auf Dysphagie?",
    rueckseiteC1:
      "SOFORT NPO (nichts per os — kein Essen, kein Trinken, keine orale Medikation). Arzt informieren, Verdacht dokumentieren. Logopädie anfordern. GUSS-Test durchführen (Trapl 2007).",
    rueckseiteB1:
      "Sofort: nichts essen, nichts trinken, keine Tabletten (NPO). Arzt rufen. Verdacht aufschreiben. Logopädie bestellen. GUSS-Test machen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "AWMF S3 (2017), Trapl et al. (2007)",
  },
  {
    id: "ce02-pneumonie-kk-11",
    vorderseite: "Nenne die 5 WHO-Momente der Händehygiene und das KRINKO-Pneumonie-Bündel (2013).",
    rueckseiteC1:
      "**5 WHO-Momente:** (1) vor Patient, (2) vor aseptischer Tätigkeit, (3) nach Risikomaterial, (4) nach Patient, (5) nach Umgebung. **KRINKO-Bündel:** Händehygiene + Oberkörperhochlagerung 30-45° + Mundpflege 2× täglich + Sekretmanagement + tägliche Indikationsprüfung (Beatmung, Sonde, Katheter).",
    rueckseiteB1:
      "5 WHO-Momente: (1) vor Patient, (2) vor sauberer Tätigkeit, (3) nach Schmutz, (4) nach Patient, (5) nach Umgebung. KRINKO-Bündel: Hände + 30-45° lagern + Mundpflege + Sekret + täglich prüfen.",
    tag: "pflege",
    kategorie: "recht",
    pruefungsrelevant: true,
    quelle: "WHO (2009), RKI/KRINKO (2013)",
  },
];

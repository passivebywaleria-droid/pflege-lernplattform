// CE-02 Thema Kontraktur-Prophylaxe — Karteikarten (9 Karten, 1 pro Baustein)
// Quelle: content/ce-02/themen/kontraktur-prophylaxe/karteikarten-plan.md
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_KONTRAKTUR_PROPHYLAXE_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-kontraktur-kk-01",
    vorderseite: "Was ist eine Kontraktur? (3 Merkmale)",
    rueckseiteC1:
      "Dauerhafte Gelenkversteifung. Merkmale: (1) aktive Bewegung eingeschränkt, (2) passive Bewegung eingeschränkt, (3) verhärtete Muskulatur mit erhöhtem Dehnungswiderstand.",
    rueckseiteB1:
      "Gelenk bleibt dauerhaft steif. Merkmale: (1) Patient kann nicht selbst bewegen, (2) du kannst auch nicht voll bewegen, (3) Muskel ist hart.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Bundesärztekammer (AAOS-Standard)",
  },
  {
    id: "ce02-kontraktur-kk-02",
    vorderseite:
      "Nach wie vielen Tagen Ruhigstellung beginnt sich Bindegewebe um die Gelenkkapsel zu bilden?",
    rueckseiteC1:
      "4-14 Tage. Deshalb so früh wie möglich aktiv oder passiv durchbewegen. Ein Spitzfuß kann sogar schon nach wenigen Tagen strikter Bettruhe entstehen.",
    rueckseiteB1:
      "4 bis 14 Tage. Deshalb sofort anfangen zu bewegen — nicht warten.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Bundesärztekammer (AAOS-Standard)",
  },
  {
    id: "ce02-kontraktur-kk-03",
    vorderseite: "Was ist die Funktionsstellung des Ellenbogens und warum?",
    rueckseiteC1:
      "90°-Beugung. Grund: Wenn das Gelenk versteifen würde, kann der Patient in dieser Stellung noch essen, das Gesicht waschen und Türen öffnen.",
    rueckseiteB1:
      "90° gebeugt. Warum? In dieser Stellung kann der Patient noch essen und das Gesicht waschen.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Bobath B. (1990); Bundesärztekammer (AAOS-Standard)",
  },
  {
    id: "ce02-kontraktur-kk-04",
    vorderseite: "Was ist der Spitzfuß und wie beugst du ihm vor?",
    rueckseiteC1:
      "Versteifung des oberen Sprunggelenks in Plantarflexion — Ferse erreicht Boden nicht mehr. Prophylaxe: 90°-Winkel Fuß-Unterschenkel, Bettbogen gegen Bettdeckendruck, regelmäßig Fuß dorsalextensieren. Kein Kissen unter der Kniekehle.",
    rueckseiteB1:
      "Der Fuß bleibt nach unten gestreckt. Ferse kommt nicht mehr auf den Boden. Vorbeugen: Fuß in 90°, Bettbogen nutzen, Fuß regelmäßig nach oben ziehen. Kein Kissen unter die Kniekehle.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Bundesärztekammer (AAOS-Standard)",
  },
  {
    id: "ce02-kontraktur-kk-05",
    vorderseite: "Welche 6 Risikogruppen für Kontrakturen kennst du?",
    rueckseiteC1:
      "1. Schlaganfall (Hemiplegie), 2. Intensivpatienten, 3. Demenz, 4. Parkinson, 5. Fixierte Patienten (FeM), 6. Multimorbide Pflegeheimbewohner. Prävalenz: 15-70 % älterer Krankenhauspatienten (Gnass 2010), 59,1 % ambulant Pflegebedürftiger (MDS 2018).",
    rueckseiteB1:
      "1. Schlaganfall, 2. Intensivpatienten, 3. Demenz, 4. Parkinson, 5. Fixierte Patienten, 6. alte Pflegeheimbewohner mit vielen Krankheiten. 59 % der ambulant gepflegten alten Menschen sind gefährdet (MDS 2018).",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Gnass I. et al. (2010); MDS (2018)",
  },
  {
    id: "ce02-kontraktur-kk-06",
    vorderseite:
      "Welches standardisierte Einzelinstrument gibt es für Kontrakturrisiko?",
    rueckseiteC1:
      "Keines. Stattdessen: klinikeigene Bewegungsanalyse + Mobilitätsassessments (Timed-Up-and-Go, MOTPA Brach 2006, EBoMo Zegelin 2007). Das klinische Urteil führt. Bei Veränderung neu einschätzen.",
    rueckseiteB1:
      "Keines. Stattdessen: Beobachtung im Alltag + Timed-Up-and-Go + MOTPA oder EBoMo + jedes Gelenk prüfen. Bei Veränderung neu prüfen.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Brach M. et al. (2006); Zegelin A. (2007); DNQP Mobilität (2020)",
  },
  {
    id: "ce02-kontraktur-kk-07",
    vorderseite: "Was ist das oberste Gebot der Kontrakturprophylaxe?",
    rueckseiteC1:
      "Bewegung. Jedes Gelenk, das nicht medizinisch ruhiggestellt sein muss, wird aktiv, assistiv oder passiv durchbewegt — täglich. Flach gelagert, Hohlräume flächig polstern, Neutral-Null-Stellung, kein Kissen unter der Kniekehle.",
    rueckseiteB1:
      "Bewegung. Jedes Gelenk täglich bewegen. Richtig lagern, flach lagern, kein Kissen unter die Kniekehle.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "§ 4 PflBG; DNQP Mobilität (2020)",
  },
  {
    id: "ce02-kontraktur-kk-08",
    vorderseite:
      "Was ist der Unterschied zwischen aktiver, assistiver und passiver Bewegung?",
    rueckseiteC1:
      "Aktiv = Patient bewegt selbst (wach, kooperativ). Assistiv = Patient bewegt mit, Pflege unterstützt (Schwäche, Hemiplegie — nach Bobath). Passiv = Pflege bewegt allein (Koma, komplette Lähmung). Alle drei: schmerzfrei, physiologisch, angekündigt, langsam.",
    rueckseiteB1:
      "Aktiv = Patient macht allein. Assistiv = Patient macht mit, du hilfst. Passiv = du machst allein (Patient bewusstlos). Alle drei: ohne Schmerz, ankündigen, langsam.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Bobath B. (1990)",
  },
  {
    id: "ce02-kontraktur-kk-09",
    vorderseite:
      "Nenne 4 Folgeprobleme von Kontrakturen — körperlich und psychosozial.",
    rueckseiteC1:
      "Körperlich: Dekubitus (Zwangshaltung), Pneumonie (Brustkorbfixation), Intertrigo (Hautfalten), Ulzera in Kniekehlen. Psychosozial: Schmerzen, Pflegeabhängigkeit, sozialer Rückzug. Teamarbeit interdisziplinär (DNQP Mobilität 2020): Pflege + Physio + Ergo + Arzt + Bezugspersonen.",
    rueckseiteB1:
      "Körperlich: Druckstellen, Lungenentzündung, Hautpilz (Intertrigo), Wunden in der Kniekehle. Seelisch/sozial: Schmerzen, mehr Pflege nötig, Rückzug. Alle zusammen: Pflege, Physio, Ergo, Arzt, Familie.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "DNQP Mobilität (2020)",
  },
];

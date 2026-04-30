// Auto-generiert von scripts/karteikarten-auto-gen.ts
// Nicht manuell bearbeiten — wird bei jedem Lauf überschrieben.

export interface AutoKarteikarte {
  id: string;
  bausteinRef: string;
  themaPrimaer: string;
  vorderseite: string;
  rueckseite: string;
  situationsId: string;
}

export const KARTEIKARTEN_AUTO: AutoKarteikarte[] = [
  {
    id: "kk-auto-sturz-prophylaxe-pim-priscus",
    bausteinRef: "sturz-prophylaxe-pim-priscus",
    themaPrimaer: "sturz-prophylaxe",
    vorderseite: "Frau M. (82) nimmt 5 Medikamente. Was ist eine PIM und welche Klassen sind sturz-relevant?",
    rueckseite: "PIM = Potenziell Inadäquate Medikation für > 65-Jährige (PRISCUS 2.0 / Beers 2023).\n\nSturz-relevante PIM-Klassen:\n• Z-Substanzen (Zolpidem, Zopiclon)\n• Benzodiazepine\n• Diuretika in der Nacht (Nykturie)\n• Antihypertensiva ohne RR-Monitoring\n• Anticholinergika (Verwirrtheit)\n\nFaustregel: Schlafmittel + Wassertabletten + Blutdrucksenker bei > 75 → immer PRISCUS-Check. Pflege erkennt + dokumentiert + spricht in Visite an.",
    situationsId: "frau-m-nacht-sturz",
  },
  {
    id: "kk-auto-sturz-prophylaxe-schellong",
    bausteinRef: "sturz-prophylaxe-schellong",
    themaPrimaer: "sturz-prophylaxe",
    vorderseite: "Frau M. (82, 3 RR-Senker, lange gelegen) — du sollst die erste Mobilisation vorbereiten. Welche Schellong-Werte machst du, was sind die positiv-Kriterien?",
    rueckseite: "Schellong nach AAS 2011:\n• Liegen mind. 5 Min → RR + Puls\n• Sitzen ≥ 1 Min → RR + Puls\n• Stehen 3 Min → RR + Puls\n\nPositiv (= Orthostase):\n• syst. ↓ ≥ 20 mmHg, oder\n• diast. ↓ ≥ 10 mmHg, oder\n• Puls ↑ > 30/Min\n\nFaustregel: Liegen-Sitzen-Stehen mit JE einer Messung. \"3 Min warten\" ohne RR ist wertlos.",
    situationsId: "frau-m-nacht-sturz",
  },
  {
    id: "kk-auto-pflegedokumentation-sturzprotokoll",
    bausteinRef: "pflegedokumentation-sturzprotokoll",
    themaPrimaer: "pflegedokumentation",
    vorderseite: "Frau M. (Sturz heute Nacht, kein Bruch, NRS 4-5 → 2) — du dokumentierst. Wo steht was, und worauf achtest du beim Stil?",
    rueckseite: "**Sturzprotokoll** (QM-Formular, MDK-pflichtig):\n9 Pflichtfelder: Datum/Uhrzeit, Ort, Hergang, Bewusstsein, Vitalzeichen, Verletzungen, Sofortmaßnahmen, Info an wen, Vermutete Ursache.\n\n**Pflegebericht** (chronologisch):\nFließtext mit Zeitstempel, sachlich. Nur Fakten, keine Wertungen.\n• Falsch: \\\"verwirrt\\\"\n• Richtig: \\\"orientiert zu Person, nicht zu Zeit\\\"\n\nFaustregel: Was nicht dokumentiert ist, ist juristisch nicht passiert (§ 630f BGB). Beides ist Pflicht — nicht doppelt, sondern getrennte Aufgaben.",
    situationsId: "frau-m-nacht-sturz",
  },
  {
    id: "kk-auto-kinaesthetik-transfer-boden",
    bausteinRef: "kinaesthetik-transfer-boden",
    themaPrimaer: "kinaesthetik",
    vorderseite: "Frau M. (82) liegt auf dem Boden, will ins Bett. Du wirst sie begleiten — wie nach Kinästhetik?",
    rueckseite: "Kinästhetik nach Hatch/Maietta (1996): **Patient bewegt sich selbst, Pflege begleitet.**\n\n5 Schritte Boden → Bett:\n1. Drehung auf nicht-schmerzhafte Seite\n2. Knie anziehen, Sitz auf Boden\n3. Mit Hand am Bett abstützen (Pflege begleitet am Becken)\n4. Auf die Knie, am Bett hochdrücken\n5. Auf Bettkante, ins Bett\n\nAnti-Patterns:\n• Heben hoch (Pflege-Rücken, Patient passiv)\n• Unter den Achseln (Schulter-Risiko)\n• Am Arm ziehen (Subluxation)\n• Schnelles Tempo erzwingen\n\nFaustregel: Patient bewegt selbst, Pflege begleitet + sichert + fragt das Tempo. Hand am Becken, nicht unter Achseln.",
    situationsId: "frau-m-nacht-sturz",
  },
  {
    id: "kk-auto-sturz-prophylaxe-reassessment",
    bausteinRef: "sturz-prophylaxe-reassessment",
    themaPrimaer: "sturz-prophylaxe",
    vorderseite: "Frau M. (Sturz vor 24h, NRS 4-5 → 2 nach Schmerzmittel) — wie machst du Re-Assessment, was sind Erfolgs-Kriterien?",
    rueckseite: "Re-Assessment nach DNQP/DGSS:\n\n4 Punkte:\n1. Wirkung? (NRS-Reduktion ≥ 30 % oder < 4 = Erfolg)\n2. Zeitpunkt richtig? (oral 30 Min, i.v. 15 Min, transdermal 30-60 Min)\n3. Score plausibel mit objektiven Zeichen? (Mimik, Atmung, Bewegung)\n4. Nebenwirkungen?\n\nBei Frau M.: NRS 2 = 6 Punkte Reduktion = Erfolg. Aber Bias-Prüfung wegen \\\"runterspielenden\\\"-Stil → Mimik/Atmung/Bewegung kongruent → ok.\n\nFaustregel: Bei runterspielenden Patient(inn)en immer Score + objektive Zeichen kombinieren.",
    situationsId: "frau-m-nacht-sturz",
  },
  {
    id: "kk-auto-sturz-prophylaxe-was-ist-ein-sturz",
    bausteinRef: "sturz-prophylaxe-was-ist-ein-sturz",
    themaPrimaer: "unbekannt",
    vorderseite: "Frau M. ist heute Nacht gestürzt — Birgit erzählt dir später, dass Mama sich vor 2 Wochen 'kurz am Schrank festgehalten' hat. Was zählt davon als Sturz?",
    rueckseite: "Beides. Die WHO definiert Sturz als unbeabsichtigtes Landen auf dem Boden / tieferer Ebene. Der DNQP 2022 ergänzt: Auch **Beinahe-Stürze** zählen — Risiko in den nächsten 6 Monaten 2-3x erhöht. Spektrum: Bauer (Demenz, nächtliche Desorientierung), Yilmaz (post-OP, situationsbedingt), Kovac (ambulant, Stolperfallen). Faustregel: **Jeder Beinahe-Sturz ist ein angekündigter Sturz.**",
    situationsId: "frau-m-nacht-sturz",
  },
  {
    id: "kk-auto-sturz-prophylaxe-risikofaktoren-spektrum",
    bausteinRef: "sturz-prophylaxe-risikofaktoren-spektrum",
    themaPrimaer: "unbekannt",
    vorderseite: "Birgit fragt dich am Morgen: \"Warum ist Mama gestürzt? Ist das einfach das Alter?\" — Was sagst du?",
    rueckseite: "Nein — Stürze sind multifaktoriell. Bei Frau M. mind. 5 Faktoren: Alter > 75, Parkinson II (Hauptfaktor: Bradykinese, posturale Instabilität), akute Pneumonie, Polypharmazie, nächtliche Klinikumgebung.\n\nSpektrum bei anderen:\n• Bauer (Demenz) → Kognition + Sundowning\n• Yilmaz (Hüft-TEP) → akute post-OP-Mobilität\n• Schmidt → Polyneuropathie + Bariatrik\n• Petrov → Halbseiten-Lähmung + Neglect\n\nFaustregel: **4+ Faktoren = hohes Risiko, kein Patient hat alle, jeder hat eigene.** (DNQP 2022, PRISCUS 2023)",
    situationsId: "frau-m-nacht-sturz",
  },
  {
    id: "kk-auto-schmerz-nrs-grundlagen",
    bausteinRef: "schmerz-nrs-grundlagen",
    themaPrimaer: "unbekannt",
    vorderseite: "Frau M. (82, Hüftschmerz nach Sturz) sagt: \"Es ist etwas unangenehm.\" Du fragst sie nach NRS. Sie sagt: \"Vielleicht eine 8.\" — Was bedeutet das, was tust du?",
    rueckseite: "NRS 8 = **starker Schmerz**, sofort handeln. Schritte: Lagerung optimieren (entlastend), Bedarfsanalgesie nach AVO besprechen, Arzt informieren (SBAR), nach Wirkbeginn (15-30 Min) re-assessen.\n\nSchwellenwerte (DNQP 2020):\n• 0-3 leicht — beobachten\n• 4-6 mäßig — interventionspflichtig\n• 7-10 stark — sofort handeln\n\nAlternative Skalen: KUSS (Kleinkind, Lukas), BESD/PAINAD (Demenz, Bauer), VAS, CPOT (Intensiv). Faustregel: **NRS ≥ 4 ist NIE \"wenig\".**",
    situationsId: "frau-m-nacht-sturz",
  },
  {
    id: "kk-auto-sturz-prophylaxe-dnqp-sechs-kriterien",
    bausteinRef: "sturz-prophylaxe-dnqp-sechs-kriterien",
    themaPrimaer: "sturz-prophylaxe",
    vorderseite: "Frau M. ist gestürzt — du planst gleich Maßnahmen. Welche 6 Kriterien strukturieren deine Sturzprophylaxe nach DNQP 2022?",
    rueckseite: "DNQP Sturzprophylaxe (2022) — 6 Kriterien:\n1. Sturzrisiko einschätzen (multifaktoriell, klinisch)\n2. Information + Beratung (Patient + Angehörige)\n3. Maßnahmenplanung MIT Patient (Kriterium 3 = partizipativ)\n4. Maßnahmen durchführen (Kraft+Balance, Umgebung, Medi-Review, Schuhwerk, Sehen, Hilfsmittel)\n5. Bei Sturz: Eskalation + Sturzprotokoll\n6. Evaluation nach 6 Wo / 3 Mo\n\nFaustregel: Reihenfolge ist nicht zufällig. Bei Sturz bei Kriterium 5 angekommen — aber 1-4 bleiben aktiv.",
    situationsId: "frau-m-nacht-sturz",
  },
  {
    id: "kk-auto-sturz-prophylaxe-bettgitter-recht",
    bausteinRef: "sturz-prophylaxe-bettgitter-recht",
    themaPrimaer: "sturz-prophylaxe",
    vorderseite: "Frau M. (orientiert, 82) ist heute Nacht gestürzt. Du überlegst: Beide Bettgitter hoch? Was sagt § 1831 BGB?",
    rueckseite: "Bettgitter wird zu FEM, wenn Patient daran gehindert wird, das Bett zu verlassen (BGH 2019).\n\nFolgen:\n• Zustimmungsfähig → Patient fragen + dokumentieren = legal\n• Nicht zustimmungsfähig → § 1831 BGB Genehmigung Richter\n• Notfall → § 34 StGB, sofort melden + nachgenehmigen\n\nKeine FEM:\n• Einseitig + Patient kommt raus\n• Halbe Bettgitter\n• Patient will es selbst\n\nBei Frau M.: orientiert → fragen, Selbstbestimmung. Werdenfelser Weg: Niedrigbett + Sensormatte vor Bettgitter.\n\nFaustregel: Beide hoch + nicht zustimmungsfähig + ohne Richter = strafbare Freiheitsberaubung.",
    situationsId: "frau-m-nacht-sturz",
  },
  {
    id: "kk-auto-pflegedokumentation-sbar",
    bausteinRef: "pflegedokumentation-sbar",
    themaPrimaer: "pflegedokumentation",
    vorderseite: "Es ist 03:15 Uhr. Du musst den Nachtarzt wegen Frau M. (Sturz, Hüftschmerz NRS 4) anrufen. Welche Struktur, welche Inhalte?",
    rueckseite: "SBAR (Situation/Background/Assessment/Recommendation):\n\nS (10s): \"Schwester X, Station 3B, Zimmer 14. Frau M., 82, ist um 02:48 gestürzt.\"\nB (15s): \"Aufnahme Dienstag, Pneumonie Tag 3, Parkinson II, Osteoporose, seit 2 Tagen Zolpidem.\"\nA (15s): \"RR 142/88, HF 76, SpO2 95%. Wach, orientiert, NRS 4 linke Hüfte. Keine Verkürzung/Außenrotation.\"\nR (10s): \"Bedarfsanalgesie nach AVO + ärztliche Sturzbeurteilung morgen. Frage: Zolpidem heute pausieren?\"\n\nFaustregel: 50 Sek total, vorher aufschreiben, nachher Repeat-Back. Sofortige Doku mit Zeitstempel + Arztname. (Aktionsbündnis Patientensicherheit 2014, DIVI 2020)",
    situationsId: "frau-m-nacht-sturz",
  },
];

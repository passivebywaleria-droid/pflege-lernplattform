// CE-02 Thema Stuhlausscheidung & Stomapflege — Karteikarten
// Quelle: content/ce-02/themen/stuhlausscheidung/karteikarten-plan.md (18 Karteikarten)
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_STUHLAUSSCHEIDUNG_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-stuhlausscheidung-kk-01",
    vorderseite: "Welche zwei Sphinkteren steuern die Defäkation — und welcher ist willkürlich?",
    rueckseiteC1:
      "M. sphincter ani internus = unwillkürlich (vegetativ gesteuert, Dauertonus). M. sphincter ani externus = willkürlich (bewusst kontrollierbar). Defäkation: rektale Füllung → Defäkationsreflex → internus erschlafft, externus willkürlich geöffnet.",
    rueckseiteB1:
      "Es gibt zwei Schließmuskeln: Der innere öffnet sich automatisch, der äußere öffnet sich bewusst — du entscheidest wann.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Anatomie Standardliteratur",
  },
  {
    id: "ce02-stuhlausscheidung-kk-02",
    vorderseite: "Bristol-Stuhlskala: Welcher Typ ist der Idealtyp und was bedeuten Typ 1 und Typ 7?",
    rueckseiteC1:
      "Typ 4 = glatte Wurst (Ideal). Typ 1 = harte Klumpen wie Nüsse → Obstipation. Typ 7 = flüssig → Diarrhoe. 7-stufige Skala nach Heaton 1997.",
    rueckseiteB1:
      "Typ 4 = perfekt (glatte, weiche Wurst). Typ 1 = Verstopfung (harte Kugeln). Typ 7 = Durchfall (flüssig wie Wasser).",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Heaton Bristol Stool Scale, 1997",
  },
  {
    id: "ce02-stuhlausscheidung-kk-03",
    vorderseite: "Was ist Mekonium — Aussehen, Zeitpunkt, und ab wann ist das Ausbleiben pathologisch?",
    rueckseiteC1:
      "Erster Stuhl Neugeborener: schwarz-grün, zähklebig, geruchlos. Abgang in ersten 24–48 h. Bleibt > 48 h aus: Verdacht Darmatresie, Mekoniumileus, Morbus Hirschsprung → Arzt.",
    rueckseiteB1:
      "Erster Stuhl beim Baby: schwarz-grün, klebrig, riecht nicht. Kommt in den ersten 2 Tagen. Wenn nicht — Arzt rufen. Dann wird der Stuhl normal und goldgelb.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Fachliteratur Neonatologie",
  },
  {
    id: "ce02-stuhlausscheidung-kk-04",
    vorderseite: "Definition Diarrhoe (Frequenz, Menge, Hauptkomplikation)",
    rueckseiteC1:
      "> 3 ungeformte Stühle/Tag oder > 250 g/24 h (Bristol 6–7). Hauptgefahr: Dehydratation und Elektrolytverlust. Besonders kritisch bei Säuglingen und Hochbetagten.",
    rueckseiteB1:
      "Mehr als 3× am Tag dünnflüssiger Stuhl. Hauptgefahr: der Körper verliert Wasser und Salze. Babys und alte Menschen besonders gefährdet.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "WHO; S3-Leitlinie Gastrointestinale Infektionen 2023",
  },
  {
    id: "ce02-stuhlausscheidung-kk-05",
    vorderseite: "Was ist der Unterschied zwischen osmotischer und sekretorischer Diarrhoe? Welcher hört beim Fasten auf?",
    rueckseiteC1:
      "Osmotisch: Stoffe ziehen Wasser passiv in Darm (Laxantien, Laktose) — sistiert beim Fasten. Sekretorisch: Darm sezerniert aktiv Wasser (Cholera, VIPom) — bleibt bei Fasten bestehen.",
    rueckseiteB1:
      "Osmotisch: Stoff zieht Wasser (z. B. Laxans) — hört auf wenn du nichts isst. Sekretorisch: Darm macht selbst Wasser (Cholera) — hört NICHT auf beim Fasten.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "S3-Leitlinie Gastrointestinale Infektionen 2023",
  },
  {
    id: "ce02-stuhlausscheidung-kk-06",
    vorderseite: "Rom-IV-Kriterien Obstipation — nenne 4 von 6",
    rueckseiteC1:
      "< 3 Stühle/Woche, harter/klumpiger Stuhl (Bristol 1–2), starkes Pressen, Gefühl unvollständiger Entleerung, Blockadegefühl, manuelle Manöver nötig. Mind. 2/6 über 3 Monate.",
    rueckseiteB1:
      "Weniger als 3× pro Woche, harter Stuhl, stark pressen müssen, Gefühl 'kommt nicht alles raus'. Wenn 2 oder mehr davon über 3 Monate — Obstipation.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "AWMF S2k Chronische Obstipation, 2022",
  },
  {
    id: "ce02-stuhlausscheidung-kk-07",
    vorderseite: "Was ist eine paradoxe Diarrhoe und warum ist Loperamid hier kontraindiziert?",
    rueckseiteC1:
      "Koprostase im Rektum/Sigma, dünnflüssiger Stuhl läuft als Überlauf an harter Masse vorbei. Sieht aus wie Diarrhoe, ist aber Obstipation. Loperamid verschlimmert Koprostase bis Ileus. Therapie: Ausräumung + Einlauf.",
    rueckseiteB1:
      "Harter Stuhl steckt unten, dünner Stuhl läuft außen vorbei — sieht aus wie Durchfall, ist aber Verstopfung. Imodium macht es schlimmer bis Darmverschluss. Arzt + Einlauf.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "AWMF S2k Chronische Obstipation, 2022",
  },
  {
    id: "ce02-stuhlausscheidung-kk-08",
    vorderseite: "Welche 5 Hauptursachen führen zu Obstipation — und was ist bei Opioiden zu beachten?",
    rueckseiteC1:
      "1. Immobilität 2. Trinkmangel 3. Ballaststoffmangel 4. Opioide (OIC bei >90% → prophylaktisch Laxans obligat!) 5. Kolonerkrankungen/organisch. Merke: Opioid starten = gleichzeitig Laxans starten.",
    rueckseiteB1:
      "Wenig Bewegung, wenig trinken, wenig Ballaststoffe, Morphin-ähnliche Mittel (fast alle bekommen Verstopfung!), Darmerkrankungen. Bei Morphin: immer sofort Abführmittel dazu.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "AWMF S2k Chronische Obstipation, 2022",
  },
  {
    id: "ce02-stuhlausscheidung-kk-09",
    vorderseite: "Welche 5 nicht-medikamentösen Maßnahmen stehen bei Obstipation vor dem Laxans — und warum morgens nach dem Frühstück?",
    rueckseiteC1:
      "1. Flüssigkeit 1,5–2 l (warm) 2. Bewegung 3. Ballaststoffe 30 g + Flüssigkeit 4. Toilettentraining nach Frühstück (gastrokolischer Reflex = stärkste Kolonmotilität) 5. Bauchmassage im Uhrzeigersinn.",
    rueckseiteB1:
      "Mehr trinken (warm morgens!), Bewegung, Ballaststoffe + viel Flüssigkeit, 20–30 Min nach Frühstück zur Toilette (da ist der Darm am aktivsten), Bauchmassage im Uhrzeigersinn.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "AWMF S2k Chronische Obstipation, 2022",
  },
  {
    id: "ce02-stuhlausscheidung-kk-10",
    vorderseite: "Erkläre die 4 Laxanziengruppen mit Wirkprinzip und nenne die Stufenplan-Reihenfolge.",
    rueckseiteC1:
      "1. Osmotisch (Macrogol 1. Wahl, Lactulose) — Wasser im Darm halten 2. Stimulierend (Bisacodyl) — kurzfristig, Peristaltik direkt 3. Quellmittel (Flohsamen) — Dauertherapie, viel trinken 4. Einlauf/Klysmen — bei Koprostase. Reihenfolge: nicht-medik. → Macrogol → Bisacodyl → Einlauf.",
    rueckseiteB1:
      "1. Macrogol (hält Wasser, beste Wahl) 2. Bisacodyl (regt direkt an, nur kurz) 3. Flohsamen (quillt auf, für Dauerhilfe, viel trinken) 4. Einlauf (bei hartem Stuhl der steckt). Zuerst immer nicht-medikamentöse Maßnahmen.",
    tag: "krankheitslehre",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "AWMF S2k Chronische Obstipation, 2022",
  },
  {
    id: "ce02-stuhlausscheidung-kk-11",
    vorderseite: "Was ist der Unterschied zwischen Meteorismus und Flatulenz — und welche 5 Maßnahmen helfen?",
    rueckseiteC1:
      "Meteorismus = Gasansammlung Darm → aufgetriebener Bauch. Flatulenz = übermäßiger Windabgang (>20×/Tag). Maßnahmen: 1. Blähende Speisen 2. Wärme auf Bauch 3. Bauchmassage Uhrzeigersinn 4. Bewegung 5. Karminativa (Kümmel/Fenchel). Bei Ileus-Verdacht: sofort Arzt!",
    rueckseiteB1:
      "Meteorismus = Bauch aufgebläht (Gas staut sich). Flatulenz = viele Winde. Hilft: blähende Speisen weglassen, Wärmflasche, Bauchmassage, Bewegung, Kümmel-/Fencheltee.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: false,
    quelle: "Fachliteratur Gastroenterologie",
  },
  {
    id: "ce02-stuhlausscheidung-kk-12",
    vorderseite: "Erkläre die 4 pathologischen Stuhlbefunde: Melaena, Hämatochezie, Steatorrhoe, Reiswasserstuhl — Farbe, Ursache, Dringlichkeit.",
    rueckseiteC1:
      "Melaena: schwarz/teerig, obere GI-Blutung, Notfall. Hämatochezie: rot, untere GI-Blutung, Arzt. Steatorrhoe: hell/fettig/schwimmt, Fettmalabsorption, Abklärung. Reiswasserstuhl: grau/wässrig, Cholera, Meldepflicht+Isolation. Merkregel: Oben=schwarz, Unten=rot.",
    rueckseiteB1:
      "Schwarz/teerig = oben Blutung → Notfall. Rot/frisch = unten Blutung → Arzt. Hell/fettig/schwimmt = Fett nicht aufgenommen → Arzt. Grau/wässrig = mögliche Cholera → Meldepflicht+Isolation.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "DGVS Leitlinie; WHO Cholera-Leitlinie 2017",
  },
  {
    id: "ce02-stuhlausscheidung-kk-13",
    vorderseite: "Was sind die 3 Stomaarten und wie unterscheiden sie sich in Ausscheidungsart und Versorgungsbedarf?",
    rueckseiteC1:
      "Kolostomie (Dickdarm): breiig–geformt, 1–2×/Tag, wenig Hautprobleme. Ileostomie (Dünndarm): dünnflüssig, kontinuierlich, Enzymaggression → viel Hautschutz! Elektrolytverluste! Urostomie: Urin kontinuierlich, Beutel mit Ablassventil. Endständig = permanent; Loop = rückverlagerbar.",
    rueckseiteB1:
      "Kolostomie = Dickdarm, breiig 1–2×/Tag. Ileostomie = Dünndarm, dünnflüssig immer, reizt Haut stark, viel trinken! Urostomie = Urin fließt immer, Ablassventil.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "FG SKM Stoma Handlungsempfehlungen 2023",
  },
  {
    id: "ce02-stuhlausscheidung-kk-14",
    vorderseite: "Wann nimmst du welchen Beutel — ausstreifbar oder geschlossen? Wann ist eine konvexe Basisplatte indiziert?",
    rueckseiteC1:
      "Ausstreifbar = Ileostomie (hohes, kontinuierliches Volumen). Geschlossen = Kolostomie (1–2×/Tag, geformt). Konvex = bei Retraktion/flachem Stoma — hebt Stoma heraus, verbessert Dichtigkeit. Zweiteilig: Platte 2–5 Tage, Beutel täglich — Hautschonung.",
    rueckseiteB1:
      "Ausstreifbar = Ileostomie (viel, dünnflüssig). Geschlossen = Kolostomie (wenig, geformt, täglich wechseln). Konvex = wenn Stoma eingesunken ist. Zweiteilig: Platte bleibt 2–5 Tage, Beutel täglich.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "FG SKM Stoma Handlungsempfehlungen 2023",
  },
  {
    id: "ce02-stuhlausscheidung-kk-15",
    vorderseite: "Welche 5 Hautschutzprodukte gibt es bei der Stomaversorgung — wann wird welches verwendet?",
    rueckseiteC1:
      "1. Basisplatte (Rondelle): Grundschutz, +2–3 mm Zuschnitt 2. Konvexplatte: bei Retraktion 3. Stomapaste: Unebenheiten füllen (alkoholfrei bei Reizung!) 4. Stomaputder: nässende Haut trocknen → Haftung vorbereiten 5. Hautschutzring: Abdichtung bei Narben/Falten.",
    rueckseiteB1:
      "Basisplatte = Grundschutz. Konvexplatte = eingesunkenes Stoma. Stomapaste = Lücken füllen (Alkohol beachten). Stoma-Puder = nässende Haut trocknen. Hautschutzring = abdichten bei Narben.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "FG SKM Stoma Handlungsempfehlungen 2023",
  },
  {
    id: "ce02-stuhlausscheidung-kk-16",
    vorderseite: "Welche 6 Stomakomplikationen kennst du — und welche ist ein Notfall?",
    rueckseiteC1:
      "1. Retraktion (Einsinken → konvex) 2. Prolaps (Vorfallen → Chirurg) 3. Stenose (Verengung → ärztl.) 4. Nekrose (Absterben → NOTFALL sofort!) 5. Parastomale Hernie (Vorwölbung → kein Heben, Gürtel) 6. Hautreizung (häufigste → Ursache identifizieren). Nekrose = immer sofort Arzt!",
    rueckseiteB1:
      "Retraktion (eingesunken), Prolaps (rausgefallen), Stenose (eng), Nekrose (schwarz → NOTFALL!), parastomale Hernie (neben Stoma wölbt sich was), Hautreizung (häufigste). Schwarz = sofort Arzt!",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "FG SKM Stoma Handlungsempfehlungen 2023",
  },
  {
    id: "ce02-stuhlausscheidung-kk-17",
    vorderseite: "Welche 3 Dimensionen umfasst die Stoma-Beratung — und was ist der erhöhte Flüssigkeitsbedarf bei Ileostomie?",
    rueckseiteC1:
      "1. Psychosozial (Körperbild, Normalisierung, ILCO, Psychologe bei Bedarf) 2. Selbstversorgung schrittweise (zuschauen→assistieren→selbst) 3. Ernährung: Ileostomie 2–3 l + Elektrolyte; Kolostomie blähungsarm; Urostomie 2–2,5 l. Ileostomie-Flüssigkeit: obligat — Elektrolytverluste!",
    rueckseiteB1:
      "Psyche (zuhören, normalisieren, ILCO), Selbstversorgung schrittweise üben, Ernährung: Ileostomie viel trinken (2–3 l + Elektrolyte!), Kolostomie blähungsarm, Urostomie 2–2,5 l.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "FG SKM Stoma Handlungsempfehlungen 2023",
  },
  {
    id: "ce02-stuhlausscheidung-kk-18",
    vorderseite: "Wie unterscheiden sich Suppositorium, Klysma und hoher Einlauf — und wann sind sie kontraindiziert?",
    rueckseiteC1:
      "Suppositorium: runde Seite zuerst, Linksseitenlage, 2–4 cm, 5–10 Min, KI: Anastomose/Proktitis/Thrombopenie. Klysma: 5–10 ml fertig, 5–10 Min warten, Wirkung 5–15 Min. Einlauf: 500–1000 ml körperwarm, Kniebrust-Lage, 10–15 Min halten. Alle KI: Perforation, frische Anastomosen.",
    rueckseiteB1:
      "Zäpfchen = runde Seite zuerst, 5–10 Min warten. Klysma = kleine Flasche, wirkt nach 5–15 Min. Einlauf = 500–1000 ml warm, 10–15 Min halten. Nie bei frischen Darmoperationen oder Verdacht auf Perforation!",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Fachliteratur Pflegepraxis",
  },
];

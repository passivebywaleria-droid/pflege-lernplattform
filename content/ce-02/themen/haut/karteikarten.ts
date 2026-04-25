// CE-02 Thema Haut — Karteikarten
// Quelle: content/ce-02/themen/haut/karteikarten-plan.md (18 Karteikarten, 1 pro Baustein)
// Pipeline v9 — 2026-04-23

import type { KarteikarteVorlage } from "../../../_types";

export const CE02_THEMA_HAUT_KARTEIKARTEN: KarteikarteVorlage[] = [
  {
    id: "ce02-haut-kk-01",
    vorderseite: "Nenne die 5 Hauptfunktionen der Haut.",
    rueckseiteC1:
      "Schutz (mechanisch, chemisch, UV, Keime) — Temperaturregulation — Sinneswahrnehmung — Stoffwechsel (Vitamin D) — Kommunikation (Erröten, Blässe, Schwitzen).",
    rueckseiteB1:
      "Die Haut schützt (vor Stößen, Chemikalien, Sonne, Keimen), regelt die Körpertemperatur, spürt Berührung und Schmerz, macht Vitamin D und zeigt Gefühle (z.B. Erröten).",
    tag: "anatomie",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Anatomische Nomenklatur",
  },
  {
    id: "ce02-haut-kk-02",
    vorderseite:
      "Nenne die drei Hautschichten von außen nach innen und je 1 Merkmal.",
    rueckseiteC1:
      "Epidermis (Oberhaut, gefäßfrei, Hornschicht) → Dermis (Lederhaut, Blutgefäße/Nerven/Drüsen) → Subcutis (Unterhaut, Fettgewebe, Polster/Energiespeicher).",
    rueckseiteB1:
      "Außen: Oberhaut (Epidermis) — keine Blutgefäße, Schutzschicht. Mitte: Lederhaut (Dermis) — Blutgefäße, Nerven, Drüsen. Innen: Unterhaut (Subcutis) — Fett als Polster und Energie.",
    tag: "anatomie",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Anatomische Nomenklatur",
  },
  {
    id: "ce02-haut-kk-03",
    vorderseite:
      "Nenne die 5 Schichten der Epidermis von unten nach oben. Wo entstehen neue Zellen, und wie lange dauert der Zyklus?",
    rueckseiteC1:
      "Basale → spinosum → granulosum → lucidum (nur Leistenhaut: Hand/Fuß) → corneum. Neue Zellen entstehen im Stratum basale. Zyklus ca. 28 Tage.",
    rueckseiteB1:
      "Von unten nach oben: Basale (neue Zellen) → Spinosum → Granulosum → Lucidum (nur Handfläche/Fußsohle) → Corneum (Hornschicht, oben). Zyklus: 28 Tage.",
    tag: "anatomie",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Schaefer/Redelmeier (Skin Barrier, 1996)",
  },
  {
    id: "ce02-haut-kk-04",
    vorderseite: "Nenne die 4 Hautanhangsgebilde und je 1 Funktion.",
    rueckseiteC1:
      "Haare (Schutz, Wärme, Sinnesorgan — aus Haarfollikeln) — Nägel (Schutz der Fingerkuppen — aus Nagelmatrix) — Talgdrüsen (Sebum → Hydrolipidfilm) — Schweißdrüsen (ekkrin: Temperaturregulation; apokrin: Duftstoffe ab Pubertät).",
    rueckseiteB1:
      "Haare (schützen, wärmen), Nägel (schützen Fingerkuppen), Talgdrüsen (machen Fett für die Haut), Schweißdrüsen (kühlen und machen Geruchsstoffe).",
    tag: "anatomie",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Anatomische Nomenklatur",
  },
  {
    id: "ce02-haut-kk-05",
    vorderseite:
      "Wo und von welchen Zellen wird Melanin gebildet? Was ist der Unterschied zwischen Eumelanin und Phäomelanin?",
    rueckseiteC1:
      "Von Melanozyten im Stratum basale. Alle Menschen haben gleich viele Melanozyten — Unterschied = Melaninmenge und -typ. Eumelanin = braun/schwarz. Phäomelanin = rot/gelb.",
    rueckseiteB1:
      "Melanozyten im untersten Teil der Oberhaut machen Melanin. Alle Menschen haben gleich viele Melanozyten. Eumelanin = braun/schwarz. Phäomelanin = rot/gelb.",
    tag: "anatomie",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Anatomische Nomenklatur; WHO (2020)",
  },
  {
    id: "ce02-haut-kk-06",
    vorderseite:
      "Nenne 4 pathologische Hautkolorit-Befunde und je 1 typische Ursache.",
    rueckseiteC1:
      "Erythem (Rötung) → Entzündung/Fieber/Dekubitus I. Blässe → Anämie/Schock. Zyanose (blau) → O₂-Mangel (zentral: Herz/Lunge; peripher: Kälte). Ikterus (gelb) → erhöhtes Bilirubin (Leber/Galle).",
    rueckseiteB1:
      "Rötung (Erythem) → Entzündung. Blässe → zu wenig Blut oder Schock. Blaue Haut (Zyanose) → zu wenig Sauerstoff. Gelbe Haut (Ikterus) → Leber- oder Galleproblem.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Anatomische Nomenklatur; AWMF-Leitlinie Dekubitus",
  },
  {
    id: "ce02-haut-kk-07",
    vorderseite:
      "Nenne die 5 klassischen Entzündungszeichen (lateinisch und deutsch) mit den Erstbeschreibern.",
    rueckseiteC1:
      "Rubor (Rötung), Dolor (Schmerz), Tumor (Schwellung), Calor (Wärme) — Celsus (~30 n.Chr.). Functio laesa (Funktionseinschränkung) — Galen (~200 n.Chr.).",
    rueckseiteB1:
      "Rubor = Rötung, Dolor = Schmerz, Tumor = Schwellung, Calor = Wärme — Celsus (~30 n.Chr.). Functio laesa = eingeschränkte Funktion — Galen (~200 n.Chr.).",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Celsus (~30 n.Chr.); Galen (~200 n.Chr.)",
  },
  {
    id: "ce02-haut-kk-08",
    vorderseite:
      "Wie führst du den Hautturgor-Test durch und was bedeutet 'stehende Hautfalte'?",
    rueckseiteC1:
      "Hautfalte am Handrücken (oder Sternum bei Älteren) anheben, loslassen. Normal: Rückkehr < 2 Sek. Faltenstehen > 2 Sek → Hinweis auf Exsikkose. Nicht allein bewerten: Mundschleimhaut, Urinfarbe, Blutdruck, Körpergewicht ergänzen.",
    rueckseiteB1:
      "Haut am Handrücken hochziehen und loslassen. Geht sie in < 2 Sekunden zurück → normal. Bleibt eine Falte stehen → zu wenig Flüssigkeit. Immer zusammen mit anderen Zeichen bewerten.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Pflegefachliche Standardliteratur; DGG-Empfehlungen",
  },
  {
    id: "ce02-haut-kk-09",
    vorderseite:
      "Beschreibe den Ödem-Test und nenne 2 typische Lokalisationen mit Ursache.",
    rueckseiteC1:
      "Fingerdruck 5 Sek am Schienbein/Knöchel — bleibende Delle = eindrückbares Ödem (pitting oedema). Beine → Rechtsherzinsuffizienz. Gesicht/Augen → Nephrotisches Syndrom. 1 Liter Flüssigkeit = ca. 1 kg Körpergewicht.",
    rueckseiteB1:
      "5 Sekunden mit dem Finger am Schienbein drücken. Bleibt eine Delle → Ödem. Beine geschwollen → Herzproblem. Gesicht/Augen geschwollen → Nierenproblem. 1 Liter Wasser = 1 kg mehr auf der Waage.",
    tag: "pflege",
    kategorie: "assessment",
    pruefungsrelevant: true,
    quelle: "Pflegefachliche Standardliteratur; DGG-Empfehlungen",
  },
  {
    id: "ce02-haut-kk-10",
    vorderseite:
      "Nenne 4 Mechanorezeptoren der Haut und den Reiz, den sie jeweils aufnehmen.",
    rueckseiteC1:
      "Merkel-Zellen → Druck. Meissner-Körperchen → leichte Berührung. Ruffini-Körperchen → Dehnung. Vater-Pacini-Körperchen → Vibration. Zusätzlich: freie Nervenendigungen → Wärme, Kälte, Schmerz (Nozizeption).",
    rueckseiteB1:
      "Merkel-Zellen: Druck. Meissner-Körperchen: leichte Berührung. Ruffini-Körperchen: Dehnung. Vater-Pacini-Körperchen: Vibration. Freie Nervenendigungen: Wärme, Kälte, Schmerz.",
    tag: "anatomie",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Anatomische Nomenklatur",
  },
  {
    id: "ce02-haut-kk-11",
    vorderseite:
      "Nenne je 3 Mechanismen der Haut bei Hitze (Wärme abgeben) und bei Kälte (Wärme sparen).",
    rueckseiteC1:
      "Hitze: Vasodilatation (Haut rötet), Schwitzen/Verdunstung, Konvektion/Strahlung. Kälte: Vasokonstriktion (Haut blass), Kältezittern, Piloerektion (Gänsehaut). Regulationszentrum: Hypothalamus. Kerntemperatur ~37 °C.",
    rueckseiteB1:
      "Bei Hitze: Blutgefäße weiten → Rötung, Schwitzen, Wärme strahlt ab. Bei Kälte: Blutgefäße eng → Blässe, Zittern, Gänsehaut. Der Hypothalamus regelt die Körpertemperatur (~37 °C).",
    tag: "anatomie",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Anatomische Nomenklatur",
  },
  {
    id: "ce02-haut-kk-12",
    vorderseite:
      "Was ist der Säureschutzmantel? Nenne Zusammensetzung, pH-Wert und 2 Funktionen.",
    rueckseiteC1:
      "Hydrolipidfilm aus Schweiß, Sebum und Korneozyten. pH 4,7–5,5 (leicht sauer). Funktionen: hemmt Pathogene, stabilisiert Barriere, puffert Alkali. Regeneration 30 Min–2 h. (Marchini 1902)",
    rueckseiteB1:
      "Ein Film aus Schweiß und Fett auf der Haut. pH 4,7–5,5 — leicht sauer. Er hält Keime fern und schützt die Haut. Er braucht 30 Min bis 2 Stunden zum Regenerieren. Seife zerstört ihn.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Marchini (1902); Schaefer/Redelmeier (Skin Barrier, 1996)",
  },
  {
    id: "ce02-haut-kk-13",
    vorderseite:
      "Nenne 4 typische Veränderungen der Altershaut und 2 pflegerische Konsequenzen.",
    rueckseiteC1:
      "Dünnere Epidermis (bis 20 %), weniger Talg/Schweiß (Sebostase) → trocken, weniger Kollagen/Elastin → Faltenstehen, langsamerer Zellzyklus (bis 60+ Tage). Konsequenzen: Reinigung minimieren (kurz, körperwarm), W/O-Produkte bevorzugen. (Kligman — Hautalterung)",
    rueckseiteB1:
      "Altershaut: dünner, trockener (weniger Fett und Schweiß), mehr Falten, Erneuerung dauert länger. Pflege: kurz und körperwarm waschen, fette Produkte (W/O) verwenden.",
    tag: "pflege",
    kategorie: "fakt",
    pruefungsrelevant: true,
    quelle: "Kligman (Hautalterung); DGG",
  },
  {
    id: "ce02-haut-kk-14",
    vorderseite:
      "Unterscheide Talgdrüsen, ekkrine und apokrine Schweißdrüsen: Sekret, Lage, Funktion.",
    rueckseiteC1:
      "Talgdrüsen: Sebum (Fett), holokrin, in Haarfollikel, überall außer Handinnenflächen/Fußsohle. Ekkrine Schweißdrüsen: Sudor (Wasser + Salz), merokrin, am ganzen Körper, Temperaturregulation. Apokrine: Proteinreich, Achsel/Genital/Mamille, Geruch durch Bakterien, aktiv ab Pubertät.",
    rueckseiteB1:
      "Talgdrüsen: machen Fett (Sebum) → schützen die Haut. Ekkrine Schweißdrüsen: machen Schweiß (Wasser + Salz) → kühlen. Apokrine Schweißdrüsen: eiweißreicher Schweiß → Geruch durch Bakterien, ab Pubertät aktiv.",
    tag: "anatomie",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Anatomische Nomenklatur; AWMF S1-Leitlinie Intertrigo (DDG, 2022)",
  },
  {
    id: "ce02-haut-kk-15",
    vorderseite:
      "Welche Wassertemperatur und Waschdauer sind für die Körperpflege empfohlen? Was ist bei Neuropathie zu beachten?",
    rueckseiteC1:
      "32–37 °C (körperwarm), Duschen < 5 Min, Vollbad < 15 Min. Höher → Barriereschaden; tiefer → Kreislaufbelastung. Bei Polyneuropathie (z.B. Diabetes): Verbrühungsgefahr durch fehlende Temperaturwahrnehmung → Temperatur vorher an Ellenbeuge testen, Thermostatarmatur nutzen.",
    rueckseiteB1:
      "32–37 °C, Duschen < 5 Min, Bad < 15 Min. Zu heiß schadet der Haut. Bei Taubheitsgefühl (z.B. Diabetes): Verbrühungsgefahr! Temperatur vorher am Ellenbogen testen.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "AWMF S1-Leitlinie Intertrigo (DDG, 2022)",
  },
  {
    id: "ce02-haut-kk-16",
    vorderseite:
      "Warum ist Syndet in der Pflege fast immer besser als Seife? Nenne 2 Gründe und 1 Ausnahme.",
    rueckseiteC1:
      "Syndet = synthetisches Detergens, pH ≈ 5,5 (hautneutral) → zerstört Säureschutzmantel nicht. Seife = Fettsäuresalz, pH 9–10 (alkalisch) → trocknet aus, schädigt Barriere. Ausnahme: Gesunde, normale Haut bei seltenem Gebrauch. Keine antibakteriellen Seifen ohne Indikation.",
    rueckseiteB1:
      "Syndet hat pH 5,5 wie die Haut → zerstört den Schutzfilm nicht. Seife hat pH 9–10 → trocknet aus und schadet. Ausnahme: gesunde Haut, die selten gewaschen wird.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "AWMF S1-Leitlinie Intertrigo (DDG, 2022); Schaefer/Redelmeier (Skin Barrier, 1996)",
  },
  {
    id: "ce02-haut-kk-17",
    vorderseite:
      "Unterscheide O/W und W/O-Emulsion: Aufbau, Gefühl auf der Haut, Indikation.",
    rueckseiteC1:
      "O/W (Öl in Wasser — außen Wasser): leicht, zieht schnell ein, kühlend → normale/feuchte Haut. W/O (Wasser in Öl — außen Öl): fett, okklusiv, Schutzfilm → trockene Haut, Altershaut, Inkontinenz. Regel: feucht → O/W, trocken → W/O.",
    rueckseiteB1:
      "O/W (außen Wasser): leicht, zieht schnell ein → für normale Haut. W/O (außen Öl): fett, bleibt auf der Haut → für trockene und alte Haut. Regel: feuchte Haut → O/W, trockene Haut → W/O.",
    tag: "pflege",
    kategorie: "fachbegriff",
    pruefungsrelevant: true,
    quelle: "Schaefer/Redelmeier (Skin Barrier, 1996)",
  },
  {
    id: "ce02-haut-kk-18",
    vorderseite:
      "Sortiere Lotion, Creme, Salbe und Öl nach Wassergehalt (viel → wenig) und nenne je 1 Indikation.",
    rueckseiteC1:
      "Viel Wasser → wenig Wasser: Lotion (große Flächen, Sommer) > Creme (Alltag, Gesicht, Hände) > Salbe (sehr trockene Haut, Rhagaden, Nachtpflege) > Öl (Babypflege, Stuhl-Reinigung, Pflaster lösen). Regel: Je trockener die Haut, desto fetter das Produkt.",
    rueckseiteB1:
      "Viel Wasser → wenig: Lotion (große Körperstellen) → Creme (Gesicht, Hände) → Salbe (sehr trockene Stellen) → Öl (Baby, Pflaster lösen). Trockene Haut → fettigeres Produkt.",
    tag: "pflege",
    kategorie: "handlung",
    pruefungsrelevant: true,
    quelle: "Schaefer/Redelmeier (Skin Barrier, 1996); Pflegefachliche Standardliteratur",
  },
];

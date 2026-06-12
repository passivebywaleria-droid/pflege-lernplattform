// CE-02 Thema Ernährungsgrundlagen — Wissensbausteine (17 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/ernaehrungsgrundlagen/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (C1 + Vorerfahrung)
// Stufe 2 = Hinweis (B2, mittlere)
// Stufe 3 = Erklärung als ContentStep (B1, Anfänger)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_ERNAEHRUNGSGRUNDLAGEN_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: naehrstoffgruppen-ueberblick (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-naehrstoffgruppen",
    themaId: "ernaehrungsgrundlagen",
    titel: "Nährstoffgruppen: Makro vs. Mikro",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir deinen Teller vom letzten Mittagessen vor. Was bekommt dein Körper aus diesem Essen — und warum braucht er unterschiedliche Bestandteile?",
      antwort:
        "Nährstoffe teilen sich in zwei Gruppen: Makronährstoffe (Kohlenhydrate, Fette, Proteine, Wasser, Ballaststoffe) liefern Energie und Baustoffe in Gramm-Mengen. Mikronährstoffe (Vitamine, Mineralstoffe, Spurenelemente) regulieren den Stoffwechsel in Milligramm- oder Mikrogramm-Mengen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Nährstoffe teilen sich in zwei Gruppen: Makronährstoffe (Kohlenhydrate, Fette, Proteine) liefern Energie und Baustoffe in großen Mengen. Mikronährstoffe (Vitamine, Mineralstoffe, Spurenelemente) wirken in kleinsten Mengen als Regulatoren.",
      textB1:
        "Im Essen gibt es zwei Arten von Nährstoffen. Makronährstoffe sind Kohlenhydrate, Fette und Eiweiße. Der Körper braucht viel davon. Mikronährstoffe sind Vitamine und Mineralstoffe. Der Körper braucht nur wenig, aber jeden Tag.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-01",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 1,
        kompetenzbereich: "I.1",
        quellen: ["DGE/ÖGE/SGE 2024 (D-A-CH-Referenzwerte)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-naehrstoffgruppen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Nährstoffgruppen: Makro vs. Mikro",
          body: "Nährstoffe werden nach der benötigten Menge eingeteilt:\n\n**Makronährstoffe** (griech. makros = groß) — liefern **Energie** und **Baustoffe**:\n- **Kohlenhydrate** — Hauptenergiequelle\n- **Fette (Lipide)** — Energiespeicher, Baustoff der Zellmembran\n- **Proteine (Eiweiße)** — Baustoff für Muskeln, Enzyme, Hormone\n- **Wasser** — Lösungs- und Transportmittel\n- **Ballaststoffe** — unverdaulich, wichtig für Darm\n\n**Mikronährstoffe** (griech. mikros = klein) — wirken als **Regulatoren**:\n- **Vitamine** — 13 lebenswichtige organische Verbindungen\n- **Mineralstoffe** (z.B. Natrium, Kalium, Calcium)\n- **Spurenelemente** (z.B. Eisen, Zink, Jod)\n\nMakronährstoffe werden in Gramm gemessen, Mikronährstoffe in Milligramm oder Mikrogramm. Fehlen einzelne Mikronährstoffe, kann trotz kalorisch ausreichender Ernährung eine **versteckte Unterversorgung** entstehen. (DGE/ÖGE/SGE, D-A-CH-Referenzwerte 2024)",
          glossarBegriffe: ["Makronährstoff", "Mikronährstoff", "Spurenelement", "Ballaststoff"],
        },
        contentB1: {
          title: "Nährstoffgruppen: Makro vs. Mikro",
          body: "Nährstoffe werden nach der Menge eingeteilt:\n\n**Makronährstoffe** — der Körper braucht viel davon (Gramm):\n- **Kohlenhydrate** — geben Energie\n- **Fette** — geben Energie und bauen die Zellen\n- **Eiweiße (Proteine)** — bauen die Muskeln\n- **Wasser** — löst und transportiert\n- **Ballaststoffe** — helfen dem Darm\n\n**Mikronährstoffe** — der Körper braucht wenig davon (Milligramm):\n- **Vitamine** — 13 Stück, lebenswichtig\n- **Mineralstoffe** — zum Beispiel Kalzium, Natrium\n- **Spurenelemente** — zum Beispiel Eisen, Jod\n\nWichtig: Auch wenn du genug Kalorien isst, kann ein Vitamin fehlen. Das heißt **versteckter Hunger**.",
          glossarBegriffe: ["Makronährstoff", "Mikronährstoff", "Spurenelement", "Ballaststoff"],
        },
      },
    },
    glossarBegriffe: ["Makronährstoff", "Mikronährstoff", "Spurenelement", "Ballaststoff"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: kohlenhydrate-energieanteil (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-kohlenhydrate",
    themaId: "ernaehrungsgrundlagen",
    titel: "Kohlenhydrate: Energieträger und DGE-Empfehlung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wenn du morgens Brot mit Marmelade isst und mittags Pasta — was macht dein Körper mit diesem Essen? Woran merkst du, dass du Energie daraus bekommst?",
      antwort:
        "Kohlenhydrate sind die Hauptenergiequelle. Sie liefern 4 kcal pro Gramm (Atwater-Faktor 1899). DGE 2024: >50 % der täglichen Energie aus Kohlenhydraten, Schwerpunkt auf komplexen Kohlenhydraten mit Ballaststoffen. WHO: freier Zucker <10 % der Tagesenergie, besser <5 %.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kohlenhydrate liefern 4 kcal pro Gramm und sollen laut DGE mehr als 50 % der täglichen Energie ausmachen. Sie kommen als Einfachzucker (Glukose), Zweifachzucker (Saccharose) oder Mehrfachzucker (Stärke) vor. Hauptquelle: Getreide, Obst, Kartoffeln.",
      textB1:
        "Kohlenhydrate geben 4 Kalorien pro Gramm. Sie sollen mehr als die Hälfte der Energie am Tag liefern. Es gibt Zucker (Einfach), Haushaltszucker (Zweifach) und Stärke (Mehrfach). Quellen: Brot, Nudeln, Obst, Kartoffeln.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-02",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DGE 2024", "WHO 2015 (Sugars intake)", "Atwater 1899"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-kohlenhydrate",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Kohlenhydrate: Energieträger und DGE-Empfehlung",
          body: "Kohlenhydrate sind die **Hauptenergiequelle** des Körpers. Energiewert: **4 kcal pro Gramm** (Atwater-Faktor).\n\n**Einteilung nach Kettenlänge:**\n- **Monosaccharide** (Einfachzucker): Glukose, Fruktose, Galaktose\n- **Disaccharide** (Zweifachzucker): Saccharose (Haushaltszucker), Laktose, Maltose\n- **Polysaccharide** (Mehrfachzucker): Stärke (Getreide, Kartoffeln), Glykogen (Leber), Ballaststoffe (unverdaulich)\n\n**DGE-Empfehlung:** >50 % der täglichen Energiezufuhr aus Kohlenhydraten, Schwerpunkt auf **komplexen Kohlenhydraten** mit Ballaststoffen.\n\n**WHO-Empfehlung zu freiem Zucker:** <10 % der Tagesenergie, besser <5 %. 'Freier Zucker' bedeutet Haushaltszucker plus Zucker aus Säften/Honig — nicht Zucker in ganzen Früchten.\n\n**Stoffwechsel:** Glukose wird direkt ins Blut aufgenommen (Blutzucker). Überschuss wird als Glykogen in Leber/Muskeln gespeichert. Das Gehirn verbraucht täglich ca. 120 g Glukose. (DGE 2024, WHO 2015, Atwater 1899)",
          glossarBegriffe: ["Monosaccharid", "Disaccharid", "Polysaccharid", "Atwater-Faktor"],
        },
        contentB1: {
          title: "Kohlenhydrate: Energieträger und DGE-Empfehlung",
          body: "Kohlenhydrate geben **Energie**: **4 Kalorien pro Gramm**.\n\n**Drei Arten:**\n- **Einfachzucker** (Monosaccharide): Traubenzucker (Glukose), Fruchtzucker\n- **Zweifachzucker** (Disaccharide): Haushaltszucker, Milchzucker\n- **Mehrfachzucker** (Polysaccharide): Stärke in Brot, Nudeln, Kartoffeln; Ballaststoffe\n\n**DGE sagt:** Mehr als **50 %** der Energie am Tag aus Kohlenhydraten. Am besten komplexe Kohlenhydrate mit Ballaststoffen — also Vollkorn, Kartoffeln, Hülsenfrüchte.\n\n**WHO sagt:** Weniger als **10 %** aus freiem Zucker, besser weniger als **5 %**. Freier Zucker = Haushaltszucker, Saft, Honig. Obst ist in Ordnung.\n\nWichtig: Das Gehirn braucht jeden Tag etwa 120 g Zucker — nur als Glukose.",
          glossarBegriffe: ["Monosaccharid", "Disaccharid", "Polysaccharid", "Atwater-Faktor"],
        },
      },
    },
    glossarBegriffe: ["Monosaccharid", "Disaccharid", "Polysaccharid", "Atwater-Faktor"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: fette-energiedichte (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-fette",
    themaId: "ernaehrungsgrundlagen",
    titel: "Fette: Energiedichte und Fettsäure-Qualität",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum macht ein Esslöffel Öl dicker als ein Esslöffel Reis, obwohl beide gleich viel wiegen? Was passiert im Körper damit?",
      antwort:
        "Fette liefern 9 kcal pro Gramm — mehr als doppelt so viel wie Kohlenhydrate oder Proteine. DGE-Empfehlung: ca. 30 % der Tagesenergie aus Fett. Wichtig ist die Qualität: ungesättigte Fettsäuren (Olivenöl, Fisch) vor gesättigten (Butter, Wurst). Essentielle Fettsäuren (Omega-3, Omega-6) muss der Körper über die Nahrung bekommen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Fette liefern 9 kcal pro Gramm — mehr als doppelt so viel wie Kohlenhydrate oder Proteine. DGE-Empfehlung: ca. 30 % der Tagesenergie aus Fett. Wichtig: die Qualität — ungesättigte Fettsäuren (Olivenöl, Fisch) vor gesättigten (Butter, Wurst).",
      textB1:
        "Fette geben 9 Kalorien pro Gramm — mehr als doppelt so viel wie Kohlenhydrate oder Eiweiß. DGE: 30 % der Energie aus Fett am Tag. Wichtig ist die Art: ungesättigte Fettsäuren (Öl, Fisch) sind besser als gesättigte (Butter, Wurst).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-03",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGE 2024 (Fettleitlinie)", "Atwater 1899"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-fette",
        tag: "pflege",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Fette: Energiedichte und Fettsäure-Qualität",
          body: "Fette (Lipide) sind die **energiedichteste** Nährstoffgruppe: **9 kcal pro Gramm** (Atwater-Faktor).\n\n**Funktionen:**\n- Energielieferant und Energiespeicher (Fettgewebe)\n- Baustein der Zellmembranen\n- Träger der fettlöslichen Vitamine (E, D, K, A)\n- Geschmacksträger und Sättigungsfaktor\n\n**Einteilung nach chemischer Struktur:**\n- **Gesättigte Fettsäuren** (keine Doppelbindungen): in Butter, Kokosöl, Wurst, Käse\n- **Einfach ungesättigte Fettsäuren** (eine Doppelbindung): in Olivenöl, Rapsöl, Nüssen\n- **Mehrfach ungesättigte Fettsäuren** (mehrere Doppelbindungen): Omega-3 (Fisch, Leinöl) und Omega-6 (Sonnenblumenöl)\n- **Trans-Fettsäuren**: bei industrieller Härtung entstanden — ungünstig\n\n**DGE-Empfehlungen:**\n- Gesamtfett: ~30 % der Tagesenergie\n- Gesättigte Fettsäuren: <10 % der Tagesenergie\n- Mehrfach ungesättigte Fettsäuren: 7-10 %, davon Omega-3 mindestens 0,5 %\n- Trans-Fettsäuren: so wenig wie möglich (<1 %)\n\n**Essentielle Fettsäuren** (der Körper kann sie nicht selbst herstellen): Linolsäure (Omega-6) und Alpha-Linolensäure (Omega-3). (DGE 2024, Atwater 1899)",
          glossarBegriffe: ["Lipid", "gesättigte Fettsäure", "ungesättigte Fettsäure", "Omega-3-Fettsäure", "Trans-Fettsäure", "essentielle Fettsäure"],
        },
        contentB1: {
          title: "Fette: Energiedichte und Fettsäure-Qualität",
          body: "Fette geben viel Energie: **9 Kalorien pro Gramm** — über **doppelt so viel** wie Kohlenhydrate.\n\n**Fette sind wichtig für:**\n- Energie und Energie-Speicher (Fettgewebe)\n- Den Bau von Zellen\n- Die Aufnahme von Vitamin E, D, K und A\n- Geschmack und Sättigung\n\n**Arten von Fett:**\n- **Gesättigte Fettsäuren** — fest bei Zimmertemperatur, in Butter, Wurst, Käse\n- **Ungesättigte Fettsäuren** — flüssig, in Öl, Nüssen, Fisch\n- **Omega-3** und **Omega-6** — lebenswichtig, der Körper kann sie nicht selbst bauen\n- **Trans-Fettsäuren** — ungesund, in Pommes und Fertigprodukten\n\n**DGE sagt:**\n- Etwa **30 %** der Energie aus Fett\n- Weniger als **10 %** aus gesättigten Fettsäuren\n- Trans-Fettsäuren so wenig wie möglich\n\nMerke: Öl ist besser als Butter.",
          glossarBegriffe: ["Lipid", "gesättigte Fettsäure", "ungesättigte Fettsäure", "Omega-3-Fettsäure", "Trans-Fettsäure", "essentielle Fettsäure"],
        },
      },
    },
    glossarBegriffe: ["Lipid", "gesättigte Fettsäure", "ungesättigte Fettsäure", "Omega-3-Fettsäure", "Trans-Fettsäure", "essentielle Fettsäure"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: proteine-funktion (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-proteine",
    themaId: "ernaehrungsgrundlagen",
    titel: "Proteine: Baustoff und Bedarf",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Sportler isst viel Hähnchen und Quark. Was passiert mit diesem Eiweiß im Körper? Und was wäre, wenn er gar kein Eiweiß essen würde?",
      antwort:
        "Proteine liefern 4 kcal pro Gramm und sind vor allem Baustoff: Muskeln, Enzyme, Antikörper, Hormone, Transport. Sie bestehen aus 20 Aminosäuren, davon 9 essentiell. DGE: 0,8 g/kg KG unter 65 Jahren, 1,0 g/kg ab 65 Jahren (wegen Sarkopenie-Prävention).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Proteine liefern 4 kcal pro Gramm und sollen 15-20 % der Tagesenergie ausmachen. Ihre Hauptaufgabe ist nicht Energie, sondern Baustoff: Muskeln, Enzyme, Hormone, Antikörper. Sie bestehen aus 20 Aminosäuren, davon 9 essentiell.",
      textB1:
        "Eiweiße geben 4 Kalorien pro Gramm. DGE: 15 bis 20 % der Energie am Tag aus Eiweiß. Hauptaufgabe ist nicht Energie, sondern Bauen: Muskeln, Enzyme, Hormone. Sie bestehen aus 20 Aminosäuren — 9 essentiell.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-04",
        phase: 1,
        stepType: "diagram",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGE/ÖGE/SGE 2024 (D-A-CH-Referenzwerte)", "FAO/WHO/UNU 2007", "DGEM 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-proteine",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Proteine: Baustoff und Bedarf",
          body: "Proteine (Eiweiße) sind die **Baustoffe** des Körpers. Energiewert: **4 kcal pro Gramm** (Atwater-Faktor). DGE-Empfehlung: **15-20 % der Tagesenergie** — das sind **0,8 g pro kg Körpergewicht** bei Erwachsenen bis 65 Jahre, **1,0 g/kg** ab 65 Jahren.\n\n**Funktionen:**\n- **Bau:** Muskeln, Haut, Haare, Nägel, Knochenmatrix\n- **Stoffwechsel:** alle Enzyme sind Proteine\n- **Abwehr:** Antikörper (Immunglobuline)\n- **Transport:** Hämoglobin (Sauerstoff), Albumin (Hormone)\n- **Regulation:** viele Hormone (Insulin)\n\n**Aminosäuren:**\n- **20 proteinogene Aminosäuren** insgesamt\n- **9 essentielle** (muss der Körper über die Nahrung bekommen): Leucin, Isoleucin, Valin, Lysin, Methionin, Phenylalanin, Threonin, Tryptophan, Histidin\n- **11 nicht-essentielle** (kann der Körper selbst herstellen)\n\n**Biologische Wertigkeit:** Je ähnlicher ein Nahrungsprotein dem Körperprotein ist, desto besser wird es verwertet. Durch **Kombination** (z.B. Kartoffeln + Ei oder Reis + Bohnen) lässt sich die Wertigkeit steigern.\n\n**Wichtig bei Mangelernährung:** Fehlendes Protein führt zu Muskelabbau (Sarkopenie) und schlechter Wundheilung. (DGE 2024, FAO/WHO/UNU 2007)",
          glossarBegriffe: ["Aminosäure", "essentielle Aminosäure", "biologische Wertigkeit", "Sarkopenie", "proteinogen"],
        },
        contentB1: {
          title: "Proteine: Baustoff und Bedarf",
          body: "Eiweiße (Proteine) sind die **Baustoffe** vom Körper. Sie geben auch Energie: **4 Kalorien pro Gramm**. DGE: **15-20 %** der Energie aus Eiweiß. Das sind **0,8 g pro kg Körpergewicht** am Tag, ab 65 Jahren **1,0 g pro kg**.\n\n**Eiweiß ist wichtig für:**\n- **Muskeln**, Haut, Haare, Nägel, Knochen\n- **Enzyme** (helfen beim Stoffwechsel)\n- **Antikörper** (gegen Krankheiten)\n- **Transport** im Blut (z.B. Sauerstoff)\n- **Hormone** wie Insulin\n\n**Aminosäuren:** Eiweiße bestehen aus 20 Bausteinen. **9 davon sind essentiell** — der Körper kann sie nicht selbst bauen. Du musst sie essen.\n\n**Gute Eiweißquellen:** Ei, Fleisch, Milch, Fisch, Bohnen, Linsen, Nüsse, Quark.\n\n**Trick:** Kartoffeln + Ei oder Reis + Bohnen zusammen — so ist das Eiweiß **hochwertiger**.\n\nWichtig: Bei zu wenig Eiweiß verliert der Körper Muskeln. Wunden heilen schlechter.",
          glossarBegriffe: ["Aminosäure", "essentielle Aminosäure", "biologische Wertigkeit", "Sarkopenie", "proteinogen"],
        },
      },
    },
    glossarBegriffe: ["Aminosäure", "essentielle Aminosäure", "biologische Wertigkeit", "Sarkopenie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: energiedichte-vergleich (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-energiedichte",
    themaId: "ernaehrungsgrundlagen",
    titel: "Energiedichte: Atwater-Faktoren in der Praxis",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hast 100 g Apfel und 100 g Schokolade. Wie viel Kalorien stecken jeweils drin — und woran liegt der Unterschied?",
      antwort:
        "Die Atwater-Faktoren (1899) geben Energieliefer-Werte pro Gramm: Kohlenhydrate 4 kcal/g, Proteine 4 kcal/g, Fette 9 kcal/g, Alkohol 7 kcal/g, Ballaststoffe 2 kcal/g. Fett ist also mehr als doppelt so energiedicht wie KH/Protein. Apfel: ~52 kcal/100 g. Schokolade: ~550 kcal/100 g.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Atwater-Faktoren (1899) geben Energieliefer-Werte pro Gramm: Kohlenhydrate 4 kcal/g, Proteine 4 kcal/g, Fette 9 kcal/g, Alkohol 7 kcal/g, Ballaststoffe 2 kcal/g. Fett ist also mehr als doppelt so energiedicht wie KH/Protein.",
      textB1:
        "Die Atwater-Faktoren sind feste Werte pro Gramm: Kohlenhydrate 4 Kalorien, Eiweiß 4 Kalorien, Fett 9 Kalorien, Alkohol 7 Kalorien. Fett hat also mehr als doppelt so viel Energie wie Kohlenhydrate oder Eiweiß.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-05",
        phase: 1,
        stepType: "tablefillin",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Atwater 1899", "DGE 2024"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-energiedichte",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Energiedichte: Atwater-Faktoren in der Praxis",
          body: "Die **Atwater-Faktoren** (Wilbur O. Atwater, USDA 1899) sind die bis heute gültigen Umrechnungsfaktoren zwischen Masse und Energie:\n\n| Nährstoff | Energie pro Gramm |\n|-----------|-------------------|\n| **Kohlenhydrate** | **4 kcal** |\n| **Proteine** | **4 kcal** |\n| **Fette** | **9 kcal** |\n| **Alkohol** | **7 kcal** |\n| **Ballaststoffe** | **2 kcal** |\n| **Wasser** | **0 kcal** |\n\n**Konsequenzen für die Praxis:**\n- Fett ist **über doppelt so energiedicht** wie KH oder Eiweiß — kleine Portion, viel Energie\n- 1 Esslöffel Öl (~10 g) = 90 kcal\n- 1 Apfel (~150 g) = ~90 kcal\n- Bei **Mangelernährung**: fettreiche Beilagen (Sahne, Öl, Nüsse) erhöhen Energiegehalt, ohne die Portion zu vergrößern\n- Bei **Übergewicht**: Fettreduktion bringt schnell Kalorieneinsparung\n\nMerke: **1 g Fett ≈ 2,25 g Kohlenhydrate** in Kalorien. (Atwater 1899, DGE 2024)",
          glossarBegriffe: ["Atwater-Faktor", "kcal / kJ", "Energiedichte"],
        },
        contentB1: {
          title: "Energiedichte: Atwater-Faktoren in der Praxis",
          body: "Die **Atwater-Faktoren** sagen, wie viel Energie jedes Gramm bringt:\n\n| Nährstoff | Energie pro Gramm |\n|-----------|-------------------|\n| **Kohlenhydrate** | **4 Kalorien** |\n| **Eiweiß** | **4 Kalorien** |\n| **Fett** | **9 Kalorien** |\n| **Alkohol** | **7 Kalorien** |\n| **Ballaststoffe** | **2 Kalorien** |\n| **Wasser** | **0 Kalorien** |\n\n**Was heißt das für die Pflege?**\n\nFett hat **mehr als doppelt so viel** Energie wie Kohlenhydrate oder Eiweiß. Beispiel:\n- 1 Esslöffel Öl (10 g) = **90 Kalorien**\n- 1 Apfel (150 g) = **etwa 90 Kalorien**\n\n**Bei Patienten mit Mangelernährung** hilft Fett: Sahne in die Suppe, Öl über den Salat, Nüsse als Snack. Kleine Menge — viel Energie.\n\nMerke: **1 g Fett** hat so viel Energie wie **über 2 g Kohlenhydrate**.",
          glossarBegriffe: ["Atwater-Faktor", "kcal / kJ", "Energiedichte"],
        },
      },
    },
    glossarBegriffe: ["Atwater-Faktor", "kcal / kJ", "Energiedichte"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: ballaststoffe (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-ballaststoffe",
    themaId: "ernaehrungsgrundlagen",
    titel: "Ballaststoffe: Typen und DGE-Empfehlung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum sind Haferflocken und Apfel länger im Bauch als weißes Brot? Was passiert mit den 'Ballast'-Stoffen im Darm?",
      antwort:
        "Ballaststoffe sind unverdauliche pflanzliche Kohlenhydrate. DGE empfiehlt ≥30 g pro Tag. Sie fördern die Darmtätigkeit, sättigen, senken Cholesterin und Blutzuckeranstieg. Wichtig: gleichzeitig viel trinken (≥1,5 l/Tag), sonst drohen Verstopfung und Bauchschmerzen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ballaststoffe sind unverdauliche Kohlenhydrate aus pflanzlichen Zellwänden. DGE empfiehlt ≥30 g pro Tag. Sie fördern die Darmtätigkeit, sättigen, senken Cholesterin und Blutzuckeranstieg. Quellen: Vollkorn, Obst, Gemüse, Hülsenfrüchte.",
      textB1:
        "Ballaststoffe sind Pflanzenteile, die der Körper nicht verdauen kann. DGE: mindestens 30 g am Tag. Sie machen den Darm aktiv, machen lange satt und halten den Blutzucker stabil. Quellen: Vollkorn, Obst, Gemüse, Bohnen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-06",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGE/ÖGE/SGE 2024", "WHO 2020 (Healthy diet)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-ballaststoffe",
        tag: "pflege",
        displayFormat: "analogy",
        contentC1: {
          title: "Ballaststoffe: Typen und DGE-Empfehlung",
          body: "Ballaststoffe sind **pflanzliche Nahrungsbestandteile**, die vom menschlichen Verdauungstrakt **nicht oder nur teilweise abgebaut** werden können.\n\n**Zwei Typen:**\n- **Wasserlösliche Ballaststoffe** (Pektine, Beta-Glucane): in Obst, Hafer, Hülsenfrüchten. Wirkung: senken Cholesterin, verlangsamen Blutzuckeranstieg, werden im Dickdarm durch Bakterien zu kurzkettigen Fettsäuren abgebaut.\n- **Wasserunlösliche Ballaststoffe** (Cellulose, Lignin): in Vollkorn, Getreideschalen, Gemüse. Wirkung: fördern Darmbewegung, vergrößern Stuhlvolumen, beugen Obstipation vor.\n\n**DGE-Empfehlung:** ≥30 g Ballaststoffe pro Tag für Erwachsene. Realität in Deutschland: Durchschnitt liegt bei 20-25 g.\n\n**Gesundheitliche Effekte (WHO, DGE 2024):**\n- Reduziertes Risiko für Herz-Kreislauf-Erkrankungen\n- Reduziertes Risiko für Dickdarmkrebs\n- Bessere Blutzucker-Kontrolle\n- Längere Sättigung — hilft bei Gewichtskontrolle\n\n**Wichtig bei Erhöhung der Ballaststoffzufuhr:** Gleichzeitig **Trinkmenge steigern** (mind. 1,5 l/Tag), sonst drohen Verstopfung und Bauchschmerzen. (DGE/ÖGE/SGE 2024)",
          glossarBegriffe: ["Ballaststoff", "Cellulose", "Pektin"],
        },
        contentB1: {
          title: "Ballaststoffe: Typen und DGE-Empfehlung",
          body: "Ballaststoffe sind Teile von Pflanzen, die der **Körper nicht verdauen** kann. Sie wandern durch den Darm und werden wieder ausgeschieden.\n\n**Zwei Typen:**\n- **Lösliche Ballaststoffe** (z.B. in Hafer, Apfel, Bohnen): senken Cholesterin, halten den Blutzucker stabil, füttern die Darmbakterien.\n- **Unlösliche Ballaststoffe** (z.B. in Vollkornbrot, Gemüse): machen den Stuhl weicher und größer, helfen gegen Verstopfung.\n\n**DGE sagt:** Mindestens **30 g Ballaststoffe am Tag**. In Deutschland essen die meisten nur 20-25 g.\n\n**Was Ballaststoffe bringen:**\n- Schutz vor Darmkrebs\n- Schutz vor Herzkrankheiten\n- Stabiler Blutzucker\n- Lange Sättigung — gut beim Abnehmen\n\n**Wichtig:** Wenn du mehr Ballaststoffe isst, musst du auch mehr **trinken** (mindestens 1,5 Liter am Tag). Sonst gibt es Verstopfung und Bauchweh.",
          glossarBegriffe: ["Ballaststoff", "Cellulose", "Pektin"],
        },
      },
    },
    glossarBegriffe: ["Ballaststoff", "Cellulose", "Pektin"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: vitamine-loeslichkeit (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-vitamine-loeslichkeit",
    themaId: "ernaehrungsgrundlagen",
    titel: "Vitamine: fettlöslich vs. wasserlöslich (EDEKA)",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum empfehlen manche Ernährungsexperten, Möhren mit etwas Öl zu essen? Was hat Öl mit Vitamin A zu tun?",
      antwort:
        "Vitamin A ist fettlöslich (EDEKA: E, D, K, A) und wird nur zusammen mit Nahrungsfett im Darm aufgenommen. Fettlösliche Vitamine werden im Körper gespeichert. Wasserlösliche Vitamine (8 B-Vitamine + C) werden nicht gespeichert — täglich nötig.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Vitamine teilt man nach Löslichkeit ein: Fettlöslich sind E, D, K, A (Merkhilfe 'EDEKA') — sie werden im Körper gespeichert. Wasserlöslich sind die 8 B-Vitamine und Vitamin C — sie werden nicht gespeichert, müssen täglich gegessen werden.",
      textB1:
        "Es gibt 2 Gruppen Vitamine: Fettlöslich: Vitamin E, D, K, A ('EDEKA') — der Körper kann sie speichern. Wasserlöslich: Vitamin C und die 8 B-Vitamine — der Körper kann sie nicht speichern, du musst sie jeden Tag essen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-07",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DGE/ÖGE/SGE 2024 (D-A-CH-Referenzwerte)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-vitamine",
        tag: "pflege",
        displayFormat: "mnemonic",
        contentC1: {
          title: "Vitamine: fettlöslich vs. wasserlöslich (EDEKA)",
          body: "Vitamine sind **13 organische Verbindungen**, die der Körper in kleinen Mengen braucht und (bis auf Ausnahmen) nicht selbst herstellen kann.\n\n**Fettlösliche Vitamine (Merkhilfe: EDEKA)**\n- **E** (Tocopherol): Zellschutz, in Nüssen, Pflanzenölen\n- **D** (Calciferol): Knochen, Immunsystem, in Fisch, Sonnenlicht synthetisiert\n- **K** (Phyllochinon): Blutgerinnung, in grünem Blattgemüse\n- **A** (Retinol): Augen, Haut, aus Milch, Leber, Karotin in Möhren\n\n**Merkmale fettlöslich:** Werden im Körper (Leber, Fettgewebe) **gespeichert**. Aufnahme benötigt **Fett in der Nahrung**. Überdosierung möglich (Hypervitaminose, besonders A und D).\n\n**Wasserlösliche Vitamine (8 B-Vitamine + Vitamin C)**\n- **B1** (Thiamin), **B2** (Riboflavin), **B3** (Niacin), **B5** (Pantothensäure), **B6** (Pyridoxin), **B7** (Biotin), **B9** (Folsäure), **B12** (Cobalamin)\n- **C** (Ascorbinsäure): Immunsystem, Kollagen, Antioxidans\n\n**Merkmale wasserlöslich:** Werden **nicht gespeichert** (Ausnahme: B12 in Leber, mehrere Jahre). Überschuss wird mit Urin ausgeschieden. Tägliche Zufuhr nötig. Hitze- und lichtempfindlich.\n\n**Besonderheiten:**\n- **Vitamin D** kann der Körper bei Sonnenlicht selbst herstellen — in Deutschland im Winter oft zu wenig.\n- **Vitamin B12** kommt fast nur in tierischen Produkten vor — Vegan-Ernährung braucht Supplementierung. (DGE/ÖGE/SGE 2024)",
          glossarBegriffe: ["Vitamin", "fettlöslich", "wasserlöslich", "Hypervitaminose", "Retinol", "Ascorbinsäure", "Cobalamin"],
        },
        contentB1: {
          title: "Vitamine: fettlöslich vs. wasserlöslich (EDEKA)",
          body: "Es gibt **13 Vitamine**. Sie sind in zwei Gruppen:\n\n**Fettlöslich: E, D, K, A** — Merke: '**EDEKA**'\n- **E** — schützt die Zellen (in Nüssen, Öl)\n- **D** — für Knochen (in Fisch, Sonnenlicht)\n- **K** — für die Blutgerinnung (in grünem Gemüse)\n- **A** — für die Augen (in Möhren, Milch, Leber)\n\n**Wichtig bei fettlöslich:**\n- Der Körper kann sie **speichern** (in der Leber und im Fett)\n- Du brauchst **Fett dazu** — z.B. Öl an den Möhrensalat\n- Zu viel kann schaden (besonders A und D)\n\n**Wasserlöslich: Vitamin C und die 8 B-Vitamine**\n- **B1 bis B12** — für Nerven, Blut, Stoffwechsel\n- **C** — für Immunsystem, Wunden\n\n**Wichtig bei wasserlöslich:**\n- Der Körper kann sie **nicht speichern** (außer B12)\n- Jeden Tag essen\n- Hitze und Licht machen sie kaputt — sanft kochen\n\n**Vitamin B12:** Fast nur in tierischen Produkten. Wer kein Fleisch isst, braucht ein Nahrungsergänzungsmittel.",
          glossarBegriffe: ["Vitamin", "fettlöslich", "wasserlöslich", "Hypervitaminose", "Retinol", "Ascorbinsäure", "Cobalamin"],
        },
      },
    },
    glossarBegriffe: ["Vitamin", "fettlöslich", "wasserlöslich", "Hypervitaminose", "Retinol", "Ascorbinsäure", "Cobalamin"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: vitamin-d-besonderheit (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-vitamin-d",
    themaId: "ernaehrungsgrundlagen",
    titel: "Vitamin D: Sonderfall und Pflege-Relevanz",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum empfehlen deutsche Hausärzte im Winter oft Vitamin-D-Tabletten — und warum im Sommer seltener? Was ist bei älteren Heimbewohnern besonders?",
      antwort:
        "Vitamin D wird in der Haut aus Cholesterin + UVB gebildet. In Deutschland (ab 50° N) reicht die UVB-Strahlung nur von April bis September. Ältere Menschen haben reduzierte Hautsynthese und gehen selten raus. DGE-Empfehlung bei fehlender Eigensynthese: 20 µg/Tag (800 IE). Mangel erhöht Sturz- und Frakturrisiko.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Vitamin D ist ein Sonderfall: Der Körper kann es bei UVB-Licht in der Haut selbst herstellen. In Deutschland gelingt das nur von April bis September, ab 50° nördlicher Breite. DGE-Zufuhr bei fehlender Eigensynthese: 20 µg/Tag (800 IE).",
      textB1:
        "Vitamin D ist besonders: Die Haut macht es aus Sonnenlicht. In Deutschland klappt das nur im Sommer (April bis September). Im Winter ist zu wenig Sonne. DGE: Bei wenig Sonne 20 Mikrogramm am Tag (800 Internationale Einheiten).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-08",
        phase: 1,
        stepType: "timeline",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGE/ÖGE/SGE 2024 (D-A-CH-Referenzwerte Vitamin D)", "RKI KiGGS-Studie 2008"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-vitamin-d",
        tag: "pflege",
        displayFormat: "diary",
        contentC1: {
          title: "Vitamin D: Sonderfall und Pflege-Relevanz",
          body: "Vitamin D nimmt eine Sonderstellung ein: Es ist das **einzige Vitamin**, das der Mensch in ausreichender Menge **selbst synthetisieren** kann — aus **7-Dehydrocholesterin** in der Haut unter Einfluss von **UVB-Strahlung** (290-315 nm).\n\n**Funktionen:**\n- **Calcium- und Phosphathaushalt** (Knochen-Mineralisierung)\n- **Muskelfunktion** (Sturzprävention bei Älteren!)\n- Immunmodulation\n\n**Das Deutschland-Problem:** Ab 50° nördlicher Breite (ganz Deutschland) reicht die UVB-Strahlung **nur von April bis September** für die Eigensynthese. Rund **60 % der Bevölkerung in Deutschland** erreichen die empfohlene Serum-25-OH-Vitamin-D-Konzentration nicht.\n\n**DGE-Empfehlung bei fehlender Eigensynthese:** **20 µg/Tag (800 IE)** ab 1 Jahr. Säuglinge: 10-12,5 µg/Tag (Rachitis-Prophylaxe).\n\n**Risikogruppen für Mangel:**\n- **Alte Menschen** (verminderte Hautsynthese, wenig Sonne)\n- **Pflegeheimbewohner** (selten draußen)\n- **Dunkelhäutige** (höherer UV-Schutz der Haut)\n- **Vollverschleierte** (wenig Hautexposition)\n- Säuglinge, Schwangere, chronisch Kranke\n\n**Mangel-Folgen:** Rachitis (Kinder), Osteomalazie (Erwachsene), Osteoporose, Muskelschwäche, erhöhtes Sturzrisiko. (DGE/ÖGE/SGE 2024)",
          glossarBegriffe: ["UVB-Strahlung", "Rachitis"],
        },
        contentB1: {
          title: "Vitamin D: Sonderfall und Pflege-Relevanz",
          body: "Vitamin D ist besonders — es ist das **einzige Vitamin**, das der Körper **selbst machen kann**. Die **Haut macht es aus Sonnenlicht** (UVB-Strahlen).\n\n**Wozu Vitamin D gut ist:**\n- **Knochen** stark halten (mit Kalzium zusammen)\n- **Muskeln** — schützt vor Stürzen bei älteren Menschen\n- Immunsystem\n\n**Das Deutschland-Problem:** In Deutschland ist die Sonne nur von **April bis September** stark genug für Vitamin D. Im Winter macht der Körper keins. Etwa **60 % der Menschen in Deutschland haben zu wenig Vitamin D.**\n\n**DGE sagt:** Wenn zu wenig Sonne, täglich **20 Mikrogramm Vitamin D** (also 800 Internationale Einheiten).\n\n**Wer hat besonders wenig?**\n- **Alte Menschen** — die Haut macht weniger\n- **Menschen in Pflegeheimen** — sie gehen wenig raus\n- **Menschen mit dunkler Haut** — weniger UV-Aufnahme\n- **Frauen mit Vollverschleierung**\n- **Babys, Schwangere, chronisch Kranke**\n\n**Was passiert bei Mangel:**\n- **Bei Kindern:** Rachitis (weiche Knochen)\n- **Bei Erwachsenen:** Osteomalazie, Osteoporose\n- **Bei allen:** schwache Muskeln, mehr Stürze\n\nWichtig: Pflegeheimbewohner brauchen oft eine Tablette — wegen Stürzen und Knochen.",
          glossarBegriffe: ["UVB-Strahlung", "Rachitis"],
        },
      },
    },
    glossarBegriffe: ["UVB-Strahlung", "Rachitis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: mineralstoffe-spurenelemente (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-mineralstoffe",
    themaId: "ernaehrungsgrundlagen",
    titel: "Mineralstoffe: Mengenelemente vs. Spurenelemente",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum bekommt ein Mensch Muskelkrämpfe bei starkem Schwitzen? Und was passiert bei einer Schwangeren, wenn sie zu wenig Eisen isst?",
      antwort:
        "Schwitzen verliert Natrium, Kalium, Magnesium — das führt zu Muskelkrämpfen. Eisenmangel führt zu Anämie — rote Blutkörperchen können keinen Sauerstoff mehr transportieren. Mengenelemente: >50 mg/Tag. Spurenelemente: <50 mg/Tag. Häufige Mangelzustände in Deutschland: Eisen (Frauen), Jod (alle), Magnesium.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Mineralstoffe sind anorganische Elemente. Unterteilung nach Tagesbedarf: Mengenelemente (>50 mg/Tag — Natrium, Kalium, Calcium, Magnesium, Phosphor, Chlorid, Schwefel) und Spurenelemente (<50 mg/Tag — z.B. Eisen, Zink, Jod, Selen, Kupfer).",
      textB1:
        "Mineralstoffe sind anorganisch (nicht aus lebender Natur). Zwei Gruppen: Mengenelemente (viel davon — z.B. Kalzium, Natrium, Kalium) und Spurenelemente (ganz wenig — z.B. Eisen, Jod, Zink). Menge heißt: mehr als 50 mg am Tag.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-09",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGE/ÖGE/SGE 2024 (D-A-CH-Referenzwerte Mineralstoffe)", "RKI NVS II"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-mineralstoffe",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Mineralstoffe: Mengenelemente vs. Spurenelemente",
          body: "Mineralstoffe sind **anorganische Nährstoffe** — im Gegensatz zu Vitaminen. Einteilung nach Tagesbedarf:\n\n**Mengenelemente (>50 mg/Tag):**\n- **Natrium (Na)**: Flüssigkeitshaushalt, Nervenreize. DGE: max 6 g NaCl/Tag\n- **Kalium (K)**: Herzfunktion, Muskeltätigkeit. DGE: 4000 mg/Tag\n- **Calcium (Ca)**: Knochen, Blutgerinnung. DGE: 1000 mg/Tag\n- **Magnesium (Mg)**: Muskel, Nerven, Enzyme. DGE: 300-400 mg/Tag\n- **Phosphor (P)**: Knochen, Energiestoffwechsel (ATP)\n- **Chlorid (Cl)**: Magensäure, Flüssigkeitsverschiebung\n- **Schwefel (S)**: Teil vieler Eiweiße\n\n**Spurenelemente (<50 mg/Tag):**\n- **Eisen (Fe)**: Hämoglobin, Sauerstofftransport. Frauen 15 mg/Tag, Männer 10 mg/Tag\n- **Zink (Zn)**: Immunsystem, Wundheilung\n- **Jod (I)**: Schilddrüsenhormone. DGE: 200 µg/Tag\n- **Selen (Se)**: Antioxidans\n- **Kupfer (Cu)**: Eisenverwertung, Bindegewebe\n\n**Häufige Mangelzustände in Deutschland:**\n- **Eisenmangel** (besonders Frauen im gebärfähigen Alter, Schwangere)\n- **Jodmangel** (Deutschland ist Jodmangelgebiet — Jodsalz wichtig)\n- **Magnesiummangel** (Ausdauersportler, ältere Menschen)\n\n**Verluste:** Schwitzen verliert vor allem Natrium, Kalium, Magnesium — Muskelkrämpfe möglich. (DGE/ÖGE/SGE 2024)",
          glossarBegriffe: ["Mengenelement", "Spurenelement"],
        },
        contentB1: {
          title: "Mineralstoffe: Mengenelemente vs. Spurenelemente",
          body: "Mineralstoffe sind **anorganisch** (keine Lebewesen). Zwei Gruppen:\n\n**Mengenelemente (viel — über 50 mg am Tag):**\n- **Natrium** — im Salz, hält Wasser im Körper\n- **Kalium** — fürs Herz und die Muskeln\n- **Kalzium** — für die Knochen (1000 mg am Tag)\n- **Magnesium** — für Muskeln und Nerven (300-400 mg)\n- **Phosphor**, **Chlor**, **Schwefel**\n\n**Spurenelemente (wenig — unter 50 mg am Tag):**\n- **Eisen** — für Blut und Sauerstoff (Frauen 15 mg, Männer 10 mg)\n- **Zink** — für Abwehr und Wundheilung\n- **Jod** — für die Schilddrüse (200 Mikrogramm am Tag)\n- **Selen**, **Kupfer**, **Mangan**, **Chrom**, **Fluor**\n\n**Was fehlt in Deutschland oft?**\n- **Eisen** — bei Frauen, die ihre Periode haben, und bei Schwangeren\n- **Jod** — Deutschland ist ein Jodmangel-Land. Deshalb **Jodsalz** verwenden\n- **Magnesium** — bei Sportlern und alten Menschen\n\n**Bei starkem Schwitzen** verliert der Körper Natrium, Kalium, Magnesium — das kann zu Muskelkrämpfen führen.",
          glossarBegriffe: ["Mengenelement", "Spurenelement"],
        },
      },
    },
    glossarBegriffe: ["Mengenelement", "Spurenelement"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: fluessigkeitsbedarf (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-fluessigkeit",
    themaId: "ernaehrungsgrundlagen",
    titel: "Flüssigkeitsbedarf: Berechnung und Pflege-Relevanz",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein 80-jähriger Heimbewohner wiegt 70 kg. Wie viel muss er am Tag trinken? Was passiert in seinem Körper, wenn er nur 500 ml trinkt?",
      antwort:
        "Flüssigkeitsbedarf: 30-35 ml/kg KG/Tag. Bei 70 kg: 2,1-2,5 l Gesamt, davon ca. 1,5 l über Getränke. Bei nur 500 ml drohen: Dehydrierung, verminderter Hautturgor, Tachykardie, Verwirrtheit. Senioren: Durstempfinden lässt nach — aktive Trinkbegleitung und Trinkprotokoll.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Flüssigkeitsbedarf bei Erwachsenen: ca. 30-35 ml pro kg Körpergewicht pro Tag — bei 70 kg also ca. 2,1-2,5 Liter. Davon etwa 1,5 l über Getränke, Rest aus Nahrung. DGE-Empfehlung Erwachsene: 1,5 l/Tag Getränke.",
      textB1:
        "Flüssigkeit pro Tag: 30-35 ml pro kg Körpergewicht. Bei 70 kg sind das 2,1 bis 2,5 Liter am Tag. Davon 1,5 Liter trinken, Rest aus dem Essen. DGE-Empfehlung: 1,5 Liter trinken — mehr bei Hitze, Fieber, Sport.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-10",
        phase: 1,
        stepType: "calculation",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["EFSA 2010 (Dietary Reference Values for water)", "DGE 2024"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-fluessigkeit",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Flüssigkeitsbedarf: Berechnung und Pflege-Relevanz",
          body: "Wasser ist der **mengenmäßig größte Bestandteil** des Körpers (55-60 % beim Erwachsenen, 75 % beim Säugling). Funktionen: Lösungs- und Transportmittel, Reaktionspartner im Stoffwechsel, Temperaturregulation.\n\n**Berechnung Flüssigkeitsbedarf:**\n- **Erwachsene**: ca. **30-35 ml pro kg Körpergewicht/Tag**\n- **Senioren ab 65 Jahre**: eher 30 ml/kg\n- **Säuglinge**: bis 130 ml/kg\n- **Kleinkinder**: 100 ml/kg\n\n**Quellen** (Gesamt beim Erwachsenen ~2,5 l/Tag):\n- **Getränke**: ca. 1,5 l (DGE-Empfehlung)\n- **Feste Nahrung**: ca. 0,9 l (Obst, Gemüse, Suppen)\n- **Oxidationswasser** (im Stoffwechsel): ca. 0,3 l\n\n**Ausfuhr:** Urin 1,0-1,5 l, Stuhl 0,1 l, Haut (Perspiratio insensibilis) 0,5 l, Atmung 0,3-0,4 l.\n\n**Mehrbedarf** bei: Fieber (+0,5-1 l pro °C über 37 °C), Diarrhoe, Erbrechen, Hitze, Sport, Stillende (+700 ml).\n\n**Senioren-Problem:** Durstempfinden lässt nach. Dehydrierungsrisiko in Pflegeheimen hoch — Bezugspflege muss Trinkmenge dokumentieren (Trinkprotokoll). (EFSA 2010, DGE 2024)",
          glossarBegriffe: ["Dehydrierung", "Perspiratio insensibilis", "Trinkprotokoll"],
        },
        contentB1: {
          title: "Flüssigkeitsbedarf: Berechnung und Pflege-Relevanz",
          body: "Wasser ist der **größte Teil** im Körper (Erwachsene: 55-60 %, Babys: 75 %). Wasser löst, transportiert und regelt die Temperatur.\n\n**So viel brauchst du am Tag:**\n- **Erwachsene**: **30-35 ml pro kg Körpergewicht**\n  Beispiel: 70 kg × 30 ml = 2,1 Liter am Tag\n- **Senioren ab 65 Jahren**: 30 ml pro kg\n- **Babys**: bis 130 ml pro kg\n\n**Wo kommt die Flüssigkeit her?** (Erwachsener, 2,5 Liter am Tag)\n- **Trinken**: 1,5 Liter\n- **Essen** (Obst, Gemüse, Suppe): 0,9 Liter\n- **Vom Körper** (beim Stoffwechsel): 0,3 Liter\n\n**Mehr brauchst du bei:**\n- **Fieber**: pro Grad über 37 °C extra 0,5-1 Liter\n- **Durchfall, Erbrechen**\n- **Sport, Hitze**\n- **Stillen**: plus 700 ml\n\n**Problem bei Senioren:** Sie merken weniger, dass sie Durst haben. In Pflegeheimen passiert oft **Austrocknung**. Die Pflege muss mit einem **Trinkprotokoll** aufpassen.",
          glossarBegriffe: ["Dehydrierung", "Perspiratio insensibilis", "Trinkprotokoll"],
        },
      },
    },
    glossarBegriffe: ["Dehydrierung", "Perspiratio insensibilis", "Trinkprotokoll"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: energiebedarf-berechnung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-energiebedarf",
    themaId: "ernaehrungsgrundlagen",
    titel: "Energiebedarf: Grundumsatz, PAL-Wert und Faustregel",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine bettlägerige 75-jährige Patientin wiegt 60 kg. Ein 25-jähriger Bauarbeiter wiegt auch 60 kg. Wer braucht mehr Kalorien am Tag und warum?",
      antwort:
        "Der Bauarbeiter braucht mehr: Gesamtenergiebedarf = Grundumsatz × PAL-Wert. PAL 1,2 (bettlägerig) vs. PAL 2,0-2,4 (Schwerarbeit). Grundumsatz 60 kg × 24 kcal = 1440 kcal. Bettlägerig: 1440 × 1,2 = 1728 kcal. Bauarbeiter: 1440 × 2,2 = ~3168 kcal.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Gesamtenergiebedarf setzt sich zusammen aus Grundumsatz (ca. 24 kcal/kg KG/Tag oder ~1 kcal/kg/h) und Leistungsumsatz (körperliche Aktivität). Faustregel: ~30 kcal/kg KG/Tag bei mittlerer Aktivität — bei 70 kg also ca. 2100 kcal/Tag.",
      textB1:
        "Der Gesamtbedarf an Energie hat zwei Teile: Grundumsatz (was der Körper in Ruhe braucht, etwa 24 kcal/kg) und Arbeitsumsatz (für Bewegung). Faustregel: 30 kcal pro kg Körpergewicht am Tag. Bei 70 kg: 2100 Kalorien.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-11",
        phase: 1,
        stepType: "calculation",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["FAO/WHO/UNU 2004 (Human Energy Requirements)", "Harris/Benedict 1919", "DGEM 2019 S3-Leitlinie"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-energiebedarf",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Energiebedarf: Grundumsatz, PAL-Wert und Faustregel",
          body: "Der **Gesamtenergiebedarf** (Total Energy Expenditure, TEE) setzt sich zusammen aus:\n\n**1. Grundumsatz (GU, Basal Metabolic Rate BMR)** — Energie für Körperfunktionen in völliger Ruhe (Herz, Atmung, Nieren, Körpertemperatur):\n- **Faustregel**: ca. **1 kcal pro kg KG pro Stunde** = 24 kcal/kg/Tag\n- Beispiel 70 kg: 70 × 24 = **1680 kcal** Grundumsatz\n\n**2. Leistungsumsatz (LU)** — Energie für körperliche Aktivität. Ausgedrückt als **PAL-Wert** (Physical Activity Level, Multiplikator zum GU):\n- **PAL 1,2**: bettlägerig, sehr eingeschränkt\n- **PAL 1,4-1,5**: sitzend, wenig Bewegung (Bürojob)\n- **PAL 1,6-1,7**: stehend, etwas Bewegung (Verkäufer)\n- **PAL 1,8-1,9**: körperlich aktiv (Pflege, Handwerk)\n- **PAL 2,0-2,4**: Schwerarbeit\n\n**3. Nahrungsinduzierte Thermogenese (NIT)**: ca. 10 % des Gesamtumsatzes — Energie zur Verdauung.\n\n**Berechnung**: **Gesamtbedarf = Grundumsatz × PAL**\n\n**Beispiel:** 70 kg Erwachsener, PAL 1,5 → 1680 × 1,5 = **2520 kcal/Tag**\n\n**Faustregel Pflege**: **30 kcal/kg KG/Tag** bei mittlerer Aktivität.\n\n**Bei Mangelernährung**: oft **35-40 kcal/kg KG/Tag** zum Aufbau nötig (DGEM-Leitlinie 2019). (FAO/WHO/UNU 2004, Harris/Benedict 1919)",
          glossarBegriffe: ["Grundumsatz", "PAL-Wert", "nahrungsinduzierte Thermogenese"],
        },
        contentB1: {
          title: "Energiebedarf: Grundumsatz, PAL-Wert und Faustregel",
          body: "Der Körper braucht Energie für zwei Dinge:\n\n**1. Grundumsatz (GU)** — Das braucht der Körper in **völliger Ruhe**. Für Herz, Atmung, Nieren, Temperatur.\n- Faustregel: **1 Kalorie pro kg Körpergewicht pro Stunde** = **24 kcal pro kg am Tag**\n- Beispiel: 70 kg × 24 = **1680 Kalorien** Grundumsatz\n\n**2. Arbeitsumsatz** — Das braucht der Körper für **Bewegung**. Je mehr du dich bewegst, desto mehr.\n\nDie Pflege rechnet mit dem **PAL-Wert** (wie aktiv jemand ist):\n- **PAL 1,2** — bettlägerig\n- **PAL 1,4-1,5** — Büroarbeit, wenig Bewegung\n- **PAL 1,6-1,7** — Verkäufer, Lehrer\n- **PAL 1,8-1,9** — Pflege, Handwerk\n- **PAL 2,0-2,4** — Schwerarbeit\n\n**So rechnest du den Gesamtbedarf:**\n**Gesamtbedarf = Grundumsatz × PAL**\n\n**Beispiel:** 70 kg, PAL 1,5 → 1680 × 1,5 = **2520 Kalorien am Tag**\n\n**Einfache Regel für die Pflege:**\n**30 Kalorien pro kg Körpergewicht am Tag** bei mittlerer Aktivität.\n\n**Bei Mangelernährung** braucht man mehr: **35-40 Kalorien pro kg** zum Aufbau.",
          glossarBegriffe: ["Grundumsatz", "PAL-Wert", "nahrungsinduzierte Thermogenese"],
        },
      },
    },
    glossarBegriffe: ["Grundumsatz", "PAL-Wert", "nahrungsinduzierte Thermogenese"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: naehrstoff-verteilung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-naehrstoffverteilung",
    themaId: "ernaehrungsgrundlagen",
    titel: "DGE-Makroverteilung und Plattenregel",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient soll 2000 Kalorien pro Tag essen. Wie viel Gramm Kohlenhydrate, Fett und Eiweiß sollten in einem vollwertigen Essen etwa drin sein?",
      antwort:
        "DGE-Richtwerte: >50 % Kohlenhydrate = >250 g, ~30 % Fett = ~67 g, 15-20 % Protein = 75-100 g bei 2000 kcal. Plattenregel: ½ Teller Gemüse/Obst, ¼ Beilage (Vollkorn), ¼ Proteinquelle.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die DGE-Richtwerte für eine vollwertige Ernährung: >50 % Kohlenhydrate, ~30 % Fett, 15-20 % Protein der Tagesenergie. Bei 2000 kcal: ~250 g KH, ~67 g Fett, ~75-100 g Eiweiß. Grundlage: 10 Regeln der DGE und D-A-CH-Referenzwerte 2024.",
      textB1:
        "Die DGE sagt: Mehr als 50 % Kohlenhydrate, etwa 30 % Fett, 15-20 % Eiweiß der Energie am Tag. Bei 2000 Kalorien: etwa 250 g Kohlenhydrate, 67 g Fett, 75-100 g Eiweiß. Grundlage: die 10 Regeln der DGE.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-12",
        phase: 1,
        stepType: "diagram",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGE/ÖGE/SGE 2024 (D-A-CH-Referenzwerte)", "DGE 2024 (10 Regeln)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-naehrstoffverteilung",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "DGE-Makroverteilung und Plattenregel",
          body: "Die DGE formuliert **drei Richtwerte** für die Verteilung der Makronährstoffe:\n\n| Nährstoff | Anteil Tagesenergie | Bei 2000 kcal |\n|-----------|---------------------|---------------|\n| **Kohlenhydrate** | **>50 %** | >250 g |\n| **Fette** | **~30 %** | ~67 g |\n| **Proteine** | **15-20 %** | 75-100 g |\n\n**Die 10 Regeln der DGE (Kurzform, 2024):**\n1. Lebensmittelvielfalt genießen\n2. Gemüse und Obst — nimm 5 am Tag (3 Portionen Gemüse, 2 Obst)\n3. Vollkorn wählen\n4. Milch und Milchprodukte täglich, Fisch 1-2× pro Woche, Fleisch <300-600 g/Woche\n5. Pflanzliche Öle bevorzugen\n6. Zucker und Salz einsparen (Salz <6 g/Tag, Zucker <10 % Energie)\n7. Am besten Wasser trinken (ca. 1,5 l/Tag)\n8. Schonend zubereiten (dünsten statt braten)\n9. Achtsam essen und genießen\n10. Auf das Gewicht achten und in Bewegung bleiben\n\n**Praktische Plattenregel:** **½ Gemüse/Obst**, **¼ Beilage** (Vollkorn, Kartoffeln), **¼ Proteinquelle** (Fisch, Hülsenfrüchte, mageres Fleisch). (DGE 2024, D-A-CH-Referenzwerte)",
          glossarBegriffe: ["D-A-CH-Referenzwerte", "Plattenregel"],
        },
        contentB1: {
          title: "DGE-Makroverteilung und Plattenregel",
          body: "Die DGE gibt **drei Richtwerte** für eine gesunde Ernährung:\n\n| Nährstoff | Anteil | Bei 2000 Kalorien |\n|-----------|--------|-------------------|\n| **Kohlenhydrate** | **mehr als 50 %** | mehr als 250 g |\n| **Fette** | **etwa 30 %** | etwa 67 g |\n| **Eiweiße** | **15 bis 20 %** | 75 bis 100 g |\n\n**Die 10 Regeln der DGE (kurz):**\n1. **Verschiedene** Lebensmittel essen\n2. **5 am Tag** — 3× Gemüse, 2× Obst\n3. **Vollkorn** wählen\n4. Milch täglich, Fisch 1-2× pro Woche, Fleisch weniger\n5. **Pflanzliches Öl** statt Butter\n6. **Wenig Zucker und Salz** (Salz unter 6 g, Zucker unter 10 %)\n7. **Wasser** trinken (1,5 Liter am Tag)\n8. **Schonend kochen** (dünsten, nicht braten)\n9. **Achtsam essen** und genießen\n10. **Gewicht halten** und sich **bewegen**\n\n**Plattenregel für jede Mahlzeit:**\n- **½ Teller**: Gemüse oder Obst\n- **¼ Teller**: Kartoffeln, Reis, Nudeln (am besten Vollkorn)\n- **¼ Teller**: Eiweiß (Fisch, Bohnen, Quark, Fleisch)",
          glossarBegriffe: ["D-A-CH-Referenzwerte", "Plattenregel"],
        },
      },
    },
    glossarBegriffe: ["D-A-CH-Referenzwerte", "Plattenregel"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: sonderernaehrung-kulturell (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-kulturell",
    themaId: "ernaehrungsgrundlagen",
    titel: "Kultursensible Ernährung: Religion und Individualität",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein muslimischer Patient und eine hinduistische Patientin liegen auf derselben Station. Was darfst du auf den Tisch stellen — und was nicht? Wie findest du das heraus?",
      antwort:
        "Islam: kein Schweinefleisch, kein Alkohol, Fleisch nur halal, Ramadan-Fasten (Kranke befreit, wollen aber oft trotzdem). Hinduismus: oft vegetarisch, kein Rindfleisch (Kuh heilig). Judentum: koscher — kein Schwein, kein Meeresfrüchte, Fleisch und Milch nie zusammen. Grundregel: individuell nachfragen, nicht pauschalisieren. § 5 PflBG: kultursensible Pflege ist Ausbildungsziel.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Religiöse und kulturelle Essensregeln beeinflussen die Ernährung: Islam — kein Schweinefleisch, kein Alkohol, Ramadan-Fasten. Judentum — koscher (kein Schwein, keine Mischung Fleisch/Milch). Hinduismus — oft vegetarisch, kein Rind. Bei Unsicherheit: fragen.",
      textB1:
        "Religion und Kultur beeinflussen das Essen: Islam: kein Schweinefleisch, kein Alkohol, Ramadan. Judentum: koscher — kein Schwein, Fleisch und Milch getrennt. Hinduismus: oft vegetarisch, kein Rind. Wichtig: Immer fragen!",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-13",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 5,
        kompetenzbereich: "V.1",
        quellen: ["§ 5 PflBG (Pflegeberufegesetz)", "Religionswissenschaftlicher Grundlage"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-kulturell",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Kultursensible Ernährung: Religion und Individualität",
          body: "Die Ernährung ist tief mit **Kultur, Religion und Identität** verbunden. Die Pflege muss die wichtigsten Regeln kennen — und vor allem: **individuell nachfragen**, nicht pauschalisieren.\n\n**Islam:**\n- Kein **Schweinefleisch**, kein **Alkohol** (auch nicht in Speisen, z.B. Alkohol in Pralinen oder Desserts)\n- Fleisch nur **halal** (rituell geschlachtet)\n- **Ramadan**: Fasten von Sonnenaufgang bis Sonnenuntergang — Kranke sind oft befreit, wollen aber trotzdem fasten. Pflege respektvoll informieren und Arzt einbinden.\n\n**Judentum:**\n- **Koscher** (kashrut): kein Schwein, keine Meeresfrüchte, Fleisch und Milchprodukte nie zusammen\n- Fleisch ritualgerecht geschlachtet (Schächtung)\n\n**Hinduismus:**\n- Oft **vegetarisch** oder vegan (Ahimsa — Gewaltlosigkeit)\n- **Kein Rindfleisch** (Kuh ist heilig)\n\n**Buddhismus:**\n- Häufig vegetarisch, aber nicht immer streng\n\n**Wichtig für die Pflege:**\n- **Individuell nachfragen**, nicht annehmen\n- **Küche informieren** — die meisten Krankenhäuser bieten Alternativen\n- **Respekt** vor religiösen Überzeugungen ist Teil der **kultursensiblen Pflege**\n\nDas Pflegeberufegesetz fordert kulturelle Kompetenz: **§ 5 PflBG** nennt 'kultursensible Pflege' als Ausbildungsziel.",
          glossarBegriffe: ["Halal", "Koscher", "Ramadan", "kultursensible Pflege", "Ahimsa"],
        },
        contentB1: {
          title: "Kultursensible Ernährung: Religion und Individualität",
          body: "Das Essen ist für viele Menschen mit **Religion und Kultur** verbunden. Die Pflege muss die wichtigsten Regeln kennen — und **immer fragen**, nicht annehmen.\n\n**Islam:**\n- **Kein Schweinefleisch**\n- **Kein Alkohol** — auch nicht in Pralinen oder Desserts\n- Fleisch nur **halal** (besonders geschlachtet)\n- **Ramadan**: Fasten den ganzen Tag, von Sonnenaufgang bis Sonnenuntergang. Kranke dürfen essen — wollen aber oft trotzdem fasten.\n\n**Judentum:**\n- **Koscher** essen\n- Kein Schwein, keine Meeresfrüchte\n- **Fleisch und Milch** nie zusammen (keine Käse-Wurst-Platte)\n\n**Hinduismus:**\n- Oft **vegetarisch**\n- **Kein Rindfleisch** (die Kuh ist heilig)\n\n**Buddhismus:**\n- Oft vegetarisch\n\n**Wichtig für die Pflege:**\n- **Immer persönlich fragen** — nicht annehmen\n- **Die Küche informieren** — sie kann andere Sachen kochen\n- **Respekt** zeigen\n\nDas Pflegeberufegesetz sagt: **kultursensible Pflege** ist Pflicht (§ 5 PflBG).",
          glossarBegriffe: ["Halal", "Koscher", "Ramadan", "kultursensible Pflege", "Ahimsa"],
        },
      },
    },
    glossarBegriffe: ["Halal", "Koscher", "Ramadan", "kultursensible Pflege", "Ahimsa"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: mangelernaehrung-erkennen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-mangelernaehrung-grundlagen",
    themaId: "ernaehrungsgrundlagen",
    titel: "Mangelernährung: Kriterien und Früherkennung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Woran merkst du, dass eine ältere Patientin zu wenig isst? An welchen Zeichen siehst du das, bevor die Waage es zeigt?",
      antwort:
        "Klinische Zeichen: Müdigkeit, Antriebslosigkeit, trockene Haut, verminderter Hautturgor, Muskelschwund (Sarkopenie), schlechte Wundheilung, Infektanfälligkeit. Kriterien DGEM/ESPEN: ungewollter Gewichtsverlust >5 % in 3 Monaten oder >10 % in 6 Monaten, ODER BMI <18,5 (Senioren <20), ODER <50 % Nahrungszufuhr >5 Tage.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Mangelernährung ist definiert als ungewollter Gewichtsverlust >5 % in 3 Monaten oder >10 % in 6 Monaten ODER BMI <18,5 (bei Senioren <20). Klinik: Müdigkeit, schlechte Wundheilung, Infektionsanfälligkeit, Muskelabbau (Sarkopenie).",
      textB1:
        "Mangelernährung heißt: Gewichtsverlust ohne Absicht — mehr als 5 % in 3 Monaten oder mehr als 10 % in 6 Monaten. Oder: BMI unter 18,5 (bei Senioren unter 20). Zeichen: Müdigkeit, schlechte Wundheilung, Muskeln werden weniger.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-14",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGEM 2019 S3-Leitlinie Klinische Ernährung", "DNQP 2017/2024 Expertenstandard Ernährungsmanagement"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-mangel",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Mangelernährung: Kriterien und Früherkennung",
          body: "**Mangelernährung** (Malnutrition) ist ein häufiges, oft übersehenes Problem — in deutschen Krankenhäusern betroffen: ca. **25 %** aller Patienten, in Pflegeheimen bis **50 %** (DGEM-Erhebung).\n\n**Kriterien (nach DGEM/ESPEN):**\n- **Ungewollter Gewichtsverlust**: >5 % in 3 Monaten oder >10 % in 6 Monaten\n- ODER **BMI** < 18,5 kg/m² (Senioren: < 20)\n- ODER reduzierte Nahrungsaufnahme (<50 % des Bedarfs über >5 Tage)\n\n**Klinische Zeichen:**\n- **Allgemein**: Müdigkeit, Antriebslosigkeit, Apathie\n- **Haut**: trocken, Turgor vermindert, Wundheilung schlecht\n- **Muskeln**: **Sarkopenie** (Schwund), Kraftverlust\n- **Immunsystem**: Infektanfälligkeit, schlechte Wundheilung\n- **Psyche**: Depression, Konzentrationsstörung\n\n**Folgen:**\n- Verlängerte Krankenhausaufenthalte\n- Erhöhte Sterblichkeit\n- Dekubitusrisiko steigt deutlich\n- Sturzrisiko steigt (Muskelschwund)\n\n**Wichtig:** Der **DNQP-Expertenstandard Ernährungsmanagement (2017, aktualisiert 2024)** verpflichtet zur Früherkennung. Assessment-Instrumente (MNA, NRS 2002) folgen im Thema Ernährungsassessment. (DGEM 2019, DNQP 2017/2024)",
          glossarBegriffe: ["Mangelernährung / Malnutrition", "Sarkopenie", "DNQP"],
        },
        contentB1: {
          title: "Mangelernährung: Kriterien und Früherkennung",
          body: "**Mangelernährung** ist häufig. Im Krankenhaus haben **1 von 4 Patienten** zu wenig Nährstoffe. Im Pflegeheim jeder **zweite**.\n\n**Wann hat jemand Mangelernährung?**\n- **Ungewollt Gewicht verloren**: mehr als **5 % in 3 Monaten** oder **10 % in 6 Monaten**\n- ODER **BMI unter 18,5** (bei Senioren unter 20)\n- ODER isst **weniger als die Hälfte** vom Bedarf, länger als 5 Tage\n\n**Zeichen, die du siehst:**\n- **Allgemein**: Müdigkeit, kein Antrieb, Apathie\n- **Haut**: trocken, Wunden heilen schlecht\n- **Muskeln**: werden weniger (Sarkopenie), keine Kraft\n- **Immunsystem**: bekommt schnell Infekte\n- **Psyche**: Depression, kann sich nicht konzentrieren\n\n**Wer ist besonders gefährdet?**\n- **Alte Menschen** (weniger Hunger, einsam)\n- Menschen mit **Demenz** oder **Schlaganfall** (Schluckstörungen)\n- Tumorkranke\n\n**Was passiert durch Mangelernährung?**\n- Krankenhausaufenthalt dauert länger\n- Höhere Sterblichkeit\n- Mehr **Dekubiti**\n- Mehr **Stürze** (weniger Muskel)\n\nDer **DNQP** (Expertenstandard) sagt: Jeder Patient muss **früh erkannt** werden.",
          glossarBegriffe: ["Mangelernährung / Malnutrition", "Sarkopenie", "DNQP"],
        },
      },
    },
    glossarBegriffe: ["Mangelernährung / Malnutrition", "Sarkopenie", "DNQP"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 15: sonderkostformen (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-kostformen",
    themaId: "ernaehrungsgrundlagen",
    titel: "Sonderkostformen: Übersicht und Pflegeaufgaben",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Auf deiner Station hat eine Patientin Diabetes, ein anderer Zöliakie, eine Dritte darf nach einem Schlaganfall nur pürierte Kost. Was heißen diese Kostformen konkret?",
      antwort:
        "Diabetes-Kost: KH-kontrolliert, nicht zuckerfrei, mit Insulin abgestimmt. Glutenfrei: kein Weizen, Roggen, Gerste — bei Zöliakie schon kleinste Mengen auslösen. Pürierte Kost: alles zu gleichmäßigem Brei (IDDSI-Level 4-5) bei Dysphagie — separat pürieren für Optik. Pflege: korrekt bestellen, dokumentieren, Akzeptanz beobachten.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kostformen in der Klinik: Vollkost (Normalkost), leichte Vollkost (schonend), Aufbaukost (Stufen nach OP), Diabetiker-Kost (KH-kontrolliert), glutenfrei (bei Zöliakie), passierte/pürierte Kost (bei Schluckstörungen), Diät bei Niere/Leber.",
      textB1:
        "Es gibt verschiedene Kostformen: Vollkost (normal), leichte Vollkost (schonend), Aufbaukost (nach OP), Diabetiker (weniger Zucker), glutenfrei (bei Zöliakie), pürierte Kost (bei Schluckstörungen), Nieren/Leber-Diät.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-15",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["DGEM 2019 S3-Leitlinie Klinische Ernährung", "IDDSI 2019 Framework"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-kostformen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Sonderkostformen: Übersicht und Pflegeaufgaben",
          body: "In Krankenhäusern und Pflegeeinrichtungen werden **standardisierte Kostformen** angeboten:\n\n**Allgemeine Kostformen:**\n- **Vollkost** — vollwertige Ernährung nach DGE, keine Einschränkungen\n- **Leichte Vollkost** — ohne bekannt unverträgliche Lebensmittel (Hülsenfrüchte, fette Speisen, scharfe Gewürze)\n- **Aufbaukost** — stufenweise nach Operation: Tee → Zwieback → leichte Vollkost\n\n**Krankheitsspezifische Kostformen:**\n- **Diabetes-gerechte Kost** — KH-kontrolliert, nach Insulin-Plan angepasst\n- **Reduktionskost** — kalorienreduziert (1000-1500 kcal) bei Adipositas\n- **Natrium-arme Kost** — <6 g NaCl/Tag bei Hypertonie, Herzinsuffizienz\n- **Eiweißreduzierte Kost** — bei chronischer Niereninsuffizienz\n- **Kaliumreduzierte Kost** — bei Dialyse\n\n**Bei Unverträglichkeiten/Allergien:**\n- **Glutenfrei** (Zöliakie) — kein Weizen, Roggen, Gerste; Reis, Mais, Buchweizen ok\n- **Laktosefrei** (Laktoseintoleranz) — keine Milchprodukte; laktosefreie Alternativen\n\n**Konsistenzangepasste Kostformen** (bei Schluckstörungen, Dysphagie):\n- **Passierte/pürierte Kost** — alles zu Brei (IDDSI-Level 4-5)\n- **Weiche Kost** — weich gegart, leicht zerdrückbar\n- **Angedickte Flüssigkeiten** (Stufe 1-4 nach IDDSI-Framework 2019)\n\n**Aufgabe der Pflege:** Kostform auf dem Bestellbogen korrekt angeben, Unverträglichkeiten dokumentieren, Küche informieren, Akzeptanz beobachten und evaluieren. (DGEM 2019, IDDSI 2019)",
          glossarBegriffe: ["Aufbaukost", "Dysphagie", "IDDSI", "Laktoseintoleranz"],
        },
        contentB1: {
          title: "Sonderkostformen: Übersicht und Pflegeaufgaben",
          body: "In Kliniken gibt es **verschiedene Kostformen**:\n\n**Allgemeine Kost:**\n- **Vollkost** — normales, gesundes Essen\n- **Leichte Vollkost** — schonend, ohne schwer verdauliche Sachen (Bohnen, fett, scharf)\n- **Aufbaukost** — nach OP Schritt für Schritt: Tee → Zwieback → leichte Vollkost\n\n**Kost bei Krankheit:**\n- **Diabetes-Kost** — weniger Zucker, auf Insulin abgestimmt\n- **Reduktions-Kost** — weniger Kalorien bei Übergewicht (1000-1500 kcal)\n- **Salzarm** — weniger Salz bei Bluthochdruck und Herz (unter 6 g)\n- **Eiweißreduziert** — bei Nierenkrankheit\n- **Kaliumreduziert** — bei Dialyse\n\n**Bei Allergien und Unverträglichkeiten:**\n- **Glutenfrei** — kein Weizen, Roggen, Gerste (bei **Zöliakie**)\n- **Laktosefrei** — keine Milchprodukte\n\n**Bei Schluckstörungen:**\n- **Pürierte Kost** — alles wird zu Brei\n- **Weiche Kost** — weich gekocht, leicht zu kauen\n- **Angedickte Getränke** — damit der Patient sich nicht verschluckt\n\n**Was die Pflege macht:**\n- Kostform richtig **bestellen**\n- Allergien und Unverträglichkeiten **aufschreiben**\n- Die **Küche informieren**\n- **Beobachten**, ob der Patient die Kost annimmt",
          glossarBegriffe: ["Aufbaukost", "Dysphagie", "IDDSI", "Laktoseintoleranz"],
        },
      },
    },
    glossarBegriffe: ["Aufbaukost", "Dysphagie", "IDDSI", "Laktoseintoleranz"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 16: pflege-ernaehrungsberatung (Bloom 6)
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-beratung",
    themaId: "ernaehrungsgrundlagen",
    titel: "Pflege-Ernährungsberatung: DNQP-Standard und interprofessionelles Team",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine 78-jährige Patientin hat in 3 Monaten 4 kg verloren, kocht nicht mehr und vergisst zu essen. Was empfiehlst du — konkret und praktisch? Ab wann holst du andere Berufsgruppen dazu?",
      antwort:
        "Erstintervention Pflege: Essenssituation gestalten (ruhig, ansprechend, Zahnprothese), 6 kleine Mahlzeiten statt 3, energiereiche Anreicherung (Sahne, Öl, Nüsse), Trinkprotokoll, Gewichtskontrolle. Dann interprofessionell: Ernährungsberater (komplexe Diät), Arzt (Trinknahrung, PEG-Indikation), Logopäde (Dysphagie), Sozialdienst (Einsamkeit), Psychologe (Depression). Rechtsgrundlage: § 5 PflBG (vorbehaltene Aufgabe).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pflege-Ernährungsberatung folgt dem DNQP-Standard Ernährungsmanagement (2017/2024): Screening → Assessment → Maßnahmenplan → Umsetzung → Evaluation. Pflege ist erste Beobachtung, aber nicht allein verantwortlich — Ernährungsberater, Arzt, Logopäde einbinden.",
      textB1:
        "Pflege-Ernährungsberatung folgt einem Plan: Screening (Suche) → Assessment (Untersuchung) → Plan → Umsetzung → Prüfen. Die Pflege sieht als Erste Probleme, aber andere Experten (Ernährungsberater, Arzt, Logopäde) helfen mit.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-16",
        phase: 1,
        stepType: "careplan",
        bloomLevel: 6,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2017/2024 (Expertenstandard Ernährungsmanagement)", "§ 5 PflBG (Pflegeberufegesetz)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-beratung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Pflege-Ernährungsberatung: DNQP-Standard und interprofessionelles Team",
          body: "Die **Ernährungsberatung in der Pflege** ist Teilaufgabe des Pflegeprozesses — aber eingebettet in ein interprofessionelles Netz.\n\n**Der DNQP-Expertenstandard 'Ernährungsmanagement in der Pflege' (2017, aktualisiert 2024)** beschreibt 5 Kriterien:\n1. **Screening** bei Aufnahme und regelmäßig (MNA, NRS 2002)\n2. **Differenziertes Assessment** bei auffälligem Screening\n3. **Individueller Maßnahmenplan** gemeinsam mit Patient, Angehörigen, Team\n4. **Umsetzung und Koordination** (Pflege, Küche, Ernährungsberatung)\n5. **Evaluation** und Dokumentation\n\n**Konkrete Pflege-Interventionen:**\n- **Essenssituation gestalten**: ruhiger Ort, ansprechend angerichtet, Sitzhaltung, Zahnprothese\n- **Appetit steigern**: Wunschkost, 6 kleine statt 3 große Mahlzeiten, Aufbaukost kalorisch anreichern (Sahne, Öl, Nüsse)\n- **Hilfsmittel**: spezielle Bestecke, rutschfeste Unterlagen, angedickte Getränke\n- **Begleitung beim Essen**: Zeit, keine Pflegehandlungen während der Mahlzeit, Würde wahren\n- **Dokumentation**: Trinkprotokoll, Essprotokoll, Gewichtsverlauf\n\n**Wann andere Berufsgruppen einbinden?**\n- **Ernährungsberater/Diätassistent**: bei komplexen Diäten, Mangelernährung, Wunschkost-Plan\n- **Arzt**: Diagnostik, Supplementierung (Trinknahrung, PEG-Indikation)\n- **Logopäde**: bei Schluckstörungen (Dysphagie-Diagnostik, Konsistenz-Empfehlung)\n- **Sozialdienst**: bei sozialen Ursachen (Einsamkeit, Armut)\n- **Seelsorge/Psychologe**: bei depressiver Ursache\n\n**Gesetzliche Grundlage:** Das **Pflegeberufegesetz § 5** listet Ernährungsberatung als **vorbehaltene Aufgabe** der Pflege. Pflegefachkräfte dürfen und müssen also beraten. (DNQP 2017/2024, § 5 PflBG)",
          glossarBegriffe: ["DNQP", "PEG", "Trinknahrung", "vorbehaltene Aufgabe"],
        },
        contentB1: {
          title: "Pflege-Ernährungsberatung: DNQP-Standard und interprofessionelles Team",
          body: "Die **Ernährungsberatung** ist Aufgabe der Pflege — aber **nicht allein**. Andere Berufe helfen mit.\n\n**Der DNQP sagt: 5 Schritte**\n1. **Screening** (Suche) bei Aufnahme und regelmäßig\n2. **Genauere Untersuchung**, wenn etwas auffällig ist\n3. **Plan zusammen mit Patient und Team**\n4. **Umsetzen** — gemeinsam mit Küche, Ernährungsberater\n5. **Prüfen**, ob es klappt, und **dokumentieren**\n\n**Was die Pflege konkret macht:**\n- **Ess-Situation gestalten**: ruhig, schön angerichtet, richtige Haltung, Zahnprothese da\n- **Appetit machen**: Wunsch-Essen, viele **kleine Mahlzeiten** statt 3 große, mit **Sahne, Öl, Nüssen anreichern**\n- **Hilfsmittel**: besondere Löffel, rutschfeste Unterlage, angedickte Getränke\n- **Dabei sein**: Zeit lassen, keine Pflege während dem Essen\n- **Aufschreiben**: Trink-Protokoll, Ess-Protokoll, Gewicht\n\n**Wann holst du andere dazu?**\n- **Ernährungsberater** — bei schwieriger Diät oder Mangelernährung\n- **Arzt** — für Untersuchungen, Trinknahrung, PEG\n- **Logopäde** — bei **Schluckstörung**\n- **Sozialdienst** — wenn jemand einsam oder arm ist\n- **Seelsorge/Psychologe** — bei Depression\n\n**Gesetz:** Das **Pflegeberufegesetz § 5** sagt: Ernährungsberatung ist eine **Aufgabe der Pflege** — ihr müsst es machen, nicht nur andere.",
          glossarBegriffe: ["DNQP", "PEG", "Trinknahrung", "vorbehaltene Aufgabe"],
        },
      },
    },
    glossarBegriffe: ["DNQP", "PEG", "Trinknahrung", "vorbehaltene Aufgabe"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 17: sinne-im-alter (Bloom 2) — AP-4 LE8 #3
  // ═══════════════════════════════════════════
  {
    bausteinId: "ernaehrungsgrundlagen-sinne-im-alter",
    themaId: "ernaehrungsgrundlagen",
    titel: "Geschmack, Geruch und Durst im Alter: Folgen für die Ernährung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine 84-Jährige sagt, das Essen schmecke 'nach nichts', und sie trinkt kaum. Was hat sich an ihren Sinnen verändert — und warum greifst du trotzdem nicht einfach zum Salzstreuer?",
      antwort:
        "Im Alter lassen Geschmacks- und Geruchssinn nach, dadurch schmeckt Essen fad und der Appetit sinkt — Risiko Mangelernährung. Auch das Durstempfinden ist reduziert (Exsikkose-Gefahr). Antwort: kräftig würzen, aber mit Kräutern und Gewürzen — nicht einfach mehr Salz (Salz belastet Herz und Blutdruck). Aktiv zum Trinken auffordern, Trinkplan. (Pflege heute, Kap. 7; I Care, Ernährung im Alter)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Im Alter nehmen Geschmackssinn und Geruchssinn ab → Speisen schmecken fad, Appetit sinkt, Mangelernährung droht. Zusätzlich ist das Durstempfinden reduziert (Exsikkose-Gefahr, Wassergehalt sinkt unter 50 %). Pflege: kräftig mit Kräutern/Gewürzen würzen (nicht salzen), appetitlich anrichten, angenehmer Geruch im Essbereich, aktiv zum Trinken auffordern. (Pflege heute, Kap. 7; I Care)",
      textB1:
        "Im Alter schmeckt und riecht man weniger. Darum schmeckt Essen fad und der Appetit wird kleiner. Das kann zu Mangelernährung führen. Auch das Durstgefühl ist schwächer — Gefahr: der Körper trocknet aus. Pflege: kräftig mit Kräutern und Gewürzen würzen (nicht mit Salz), schön anrichten, guter Geruch im Raum, oft ans Trinken erinnern.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-ernaehr-wb-17",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Pflege heute (7. Aufl.), Kap. 7 (Ernährung, Essen anreichen)", "I Care Pflege (Ernährung/Flüssigkeitshaushalt im Alter)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-ernaehrung-sinne-im-alter",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Geschmack, Geruch und Durst im Alter",
          body: "Mit dem Alter verändern sich die Sinne, die das Essen steuern — das hat direkte Folgen für die Ernährung (Pflege heute, Kap. 7).\n\n**Was sich verändert:**\n- **Geschmackssinn lässt nach**: Speisen schmecken fad, das Essen macht weniger Freude\n- **Geruchssinn lässt nach**: Da Schmecken und Riechen eng zusammenarbeiten, verstärkt das den Eindruck, dass Essen 'nach nichts' schmeckt. Fehlt der Geruchssinn ganz (**Anosmie**), steigt das Risiko für **Mangelernährung**\n- **Durstempfinden ist reduziert**: Im Alter sinkt der Wassergehalt des Körpers unter 50 %, gleichzeitig wird Durst schwächer empfunden — Gefahr der **Exsikkose** (Austrocknung)\n\n**Folge:** Weniger Appetit, weniger Genuss, zu wenig Trinken → Risiko für Mangelernährung und Flüssigkeitsmangel.\n\n**Konsequenzen für die Pflege:**\n- **Kräftig würzen — mit Kräutern und Gewürzen, nicht mit Salz.** Mehr Salz würde Herz und Blutdruck belasten; Kräuter bringen Geschmack ohne diesen Nachteil\n- **Appetitlich anrichten** — das Auge isst mit, gerade wenn der Geschmack nachlässt\n- **Angenehmer Geruch** im Speisebereich: Abgestandene Luft oder Geruch nach Urin und Stuhl verdirbt den Appetit; ein guter Duft regt ihn an\n- **Wunschkost** anbieten, kleine appetitliche Portionen\n- **Aktiv zum Trinken auffordern** und einen Trinkplan/ein Trinkprotokoll nutzen — auf das schwache Durstgefühl ist kein Verlass\n\nSo gleichst du die nachlassenden Sinne gezielt aus, statt nur 'mehr Salz' zu geben. (Pflege heute, Kap. 7; I Care)",
          glossarBegriffe: ["Mangelernährung", "Exsikkose"],
        },
        contentB1: {
          title: "Geschmack, Geruch und Durst im Alter",
          body: "Im Alter verändern sich die Sinne, die beim Essen wichtig sind (Pflege heute, Kap. 7).\n\n**Was sich verändert:**\n- **Schmecken lässt nach**: Essen schmeckt fad\n- **Riechen lässt nach**: Schmecken und Riechen gehören zusammen. Darum schmeckt Essen 'nach nichts'. Wenn der Geruchssinn ganz fehlt (**Anosmie**), droht **Mangelernährung**\n- **Durst lässt nach**: Der Körper hat weniger Wasser, und der Durst wird schwächer. Gefahr: Der Körper trocknet aus (**Exsikkose**)\n\n**Folge:** Weniger Appetit, weniger Trinken → Gefahr von Mangelernährung und Flüssigkeitsmangel.\n\n**Was die Pflege macht:**\n- **Kräftig würzen — mit Kräutern und Gewürzen, nicht mit Salz.** Salz ist schlecht für Herz und Blutdruck. Kräuter geben Geschmack ohne diesen Nachteil.\n- **Schön anrichten** — das Auge isst mit\n- **Guter Geruch** im Raum: Schlechte Luft oder Uringeruch macht den Appetit kaputt. Ein guter Duft macht Appetit.\n- **Wunsch-Essen**, kleine schöne Portionen\n- **Oft ans Trinken erinnern** und mit einem Trinkplan arbeiten — auf das Durstgefühl ist kein Verlass\n\nSo hilfst du gezielt, statt nur 'mehr Salz' zu nehmen.",
          glossarBegriffe: ["Mangelernährung", "Exsikkose"],
        },
      },
    },
    glossarBegriffe: ["Mangelernährung", "Exsikkose"],
    karteikarten: [],
  },
];

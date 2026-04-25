// CE-02 Thema Haut — Wissensbausteine (18 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/haut/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (C1 + Vorerfahrung)
// Stufe 2 = Hinweis (B2, mittlere)
// Stufe 3 = Erklärung als ContentStep (B1, Anfänger)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_HAUT_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: haut-funktionen (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-funktionen",
    themaId: "haut",
    titel: "Hautfunktionen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was würde passieren, wenn du keine Haut hättest? Nenne drei Dinge, die dann nicht mehr funktionieren würden.",
      antwort:
        "Die Haut hat fünf Kernaufgaben: Schutz (mechanisch, chemisch, vor UV und Keimen), Temperaturregulation, Sinneswahrnehmung, Stoffwechsel (Vitamin-D-Bildung) und Kommunikation (Erröten, Blässe, Schwitzen).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Haut hat fünf Kernaufgaben: Schutz (mechanisch, chemisch, vor UV und Keimen), Temperaturregulation, Sinneswahrnehmung, Stoffwechsel (Vitamin-D-Bildung) und Kommunikation (Erröten, Blässe, Schwitzen).",
      textB1:
        "Die Haut hat fünf wichtige Aufgaben: Sie schützt dich vor Verletzungen und Keimen. Sie hält die Körper-Temperatur. Sie lässt dich fühlen. Sie macht Vitamin D. Sie zeigt Gefühle — zum Beispiel beim Erröten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 1,
        kompetenzbereich: "I.1",
        quellen: ["Anatomische Nomenklatur", "Schaefer/Redelmeier (Skin Barrier, 1996)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-funktionen",
        tag: "anatomie",
        displayFormat: "checklist",
        contentC1: {
          title: "Hautfunktionen",
          body: "Die Haut ist mit 1,5 bis 2 m² das größte Organ des Körpers und übernimmt fünf wesentliche Aufgaben: Sie bildet eine **Schutzbarriere** gegen mechanische Reize, Chemikalien, UV-Strahlung und Mikroorganismen. Über Schweißbildung und Durchblutungsregulation sichert sie die **Temperaturregulation** — der Mensch hält so seine Kerntemperatur um 37 °C. Als **Sinnesorgan** nimmt sie Berührung, Druck, Temperatur und Schmerz wahr — über Millionen Rezeptoren. Im **Stoffwechsel** bildet sie unter UV-Licht Vitamin D und speichert Wasser sowie Fett. Schließlich dient sie der **sozialen Kommunikation**: Blässe, Röte, Schwitzen und Gänsehaut zeigen innere Zustände nach außen.",
          glossarBegriffe: ["Epidermis"],
        },
        contentB1: {
          title: "Hautfunktionen",
          body: "Die Haut ist das größte Organ. Sie ist 1,5 bis 2 Quadratmeter groß. Sie hat fünf Aufgaben:\n1. **Schutz:** Sie schützt vor Verletzungen, Keimen, Sonne und Chemie.\n2. **Temperatur:** Sie hält den Körper warm oder kühlt ihn durch Schwitzen.\n3. **Fühlen:** Sie spürt Berührung, Druck, Wärme, Kälte und Schmerz.\n4. **Stoffwechsel:** Sie macht mit Sonnenlicht Vitamin D. Sie speichert Wasser und Fett.\n5. **Zeigen:** Sie zeigt deine Gefühle — zum Beispiel wenn du rot wirst oder blass.",
          glossarBegriffe: ["Epidermis"],
        },
      },
    },
    glossarBegriffe: ["Epidermis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: haut-schichten-3 (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-schichten-3",
    themaId: "haut",
    titel: "Die drei Hautschichten",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wenn du dir in den Finger schneidest — welche Schichten durchtrennst du? Zähle sie in der Reihenfolge von außen nach innen auf.",
      antwort:
        "Die Haut besteht aus drei Schichten: Epidermis (Oberhaut, gefäßfrei, Hornschicht), Dermis (Lederhaut, Bindegewebe, Nerven und Gefäße) und Subcutis (Unterhaut, Fettgewebe, Polster und Energiespeicher).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Haut besteht aus drei Schichten: **Epidermis** (Oberhaut, gefäßfrei, Hornschicht), **Dermis** (Lederhaut, Bindegewebe, Nerven und Gefäße) und **Subcutis** (Unterhaut, Fettgewebe, Polster und Energiespeicher).",
      textB1:
        "Die Haut hat drei Schichten. Von oben nach unten:\n1. **Epidermis** — die Oberhaut.\n2. **Dermis** — die Lederhaut mit Nerven und Blutgefäßen.\n3. **Subcutis** — die Unterhaut mit Fett.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-02",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Anatomische Nomenklatur"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-schichten",
        tag: "anatomie",
        displayFormat: "checklist",
        contentC1: {
          title: "Die drei Hautschichten",
          body: "Die Haut ist in drei Schichten gegliedert, die unterschiedliche Funktionen übernehmen:\n\n**Epidermis (Oberhaut):** Dünnste Schicht, komplett gefäßfrei. Sie wird über Diffusion aus der Dermis versorgt. Bildet die äußere Barriere mit der Hornschicht.\n\n**Dermis (Lederhaut, auch Corium):** Besteht aus straffem Bindegewebe mit Kollagen- und elastischen Fasern. Hier liegen die Blutgefäße, Nerven, Tastkörperchen, Haarfollikel, Talg- und Schweißdrüsen. Verantwortlich für Festigkeit und Elastizität.\n\n**Subcutis (Unterhaut):** Enthält vor allem Fettgewebe — als Baufett (Polster, z.B. Fußsohle) und Depotfett (Energiespeicher). Zusätzlich liegen hier Vater-Pacini-Körperchen (Vibrationsrezeptoren) und größere Gefäße.",
          glossarBegriffe: ["Epidermis", "Dermis", "Subcutis"],
        },
        contentB1: {
          title: "Die drei Hautschichten",
          body: "Die Haut hat drei Schichten. Von außen nach innen:\n\n**1. Epidermis** (Oberhaut): Ganz außen. Sehr dünn. Sie hat keine Blutgefäße. Sie bekommt Nährstoffe von der Schicht darunter.\n\n**2. Dermis** (Lederhaut): In der Mitte. Sie ist stark und elastisch. Hier sind Blutgefäße, Nerven, Tast-Zellen, Haare und Drüsen.\n\n**3. Subcutis** (Unterhaut): Ganz unten. Hier liegt Fett. Das Fett polstert (zum Beispiel unter der Fußsohle) und speichert Energie. Hier sind auch Zellen, die Vibration fühlen.",
          glossarBegriffe: ["Epidermis", "Dermis", "Subcutis"],
        },
      },
    },
    glossarBegriffe: ["Epidermis", "Dermis", "Subcutis"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: haut-epidermis-5-schichten (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-epidermis-5-schichten",
    themaId: "haut",
    titel: "Die 5 Schichten der Epidermis",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Die obersten Hautzellen sind tot. Sie fallen ständig ab. Wo werden neue Zellen gebildet — oben oder unten? Und wie kommen sie nach oben?",
      antwort:
        "Die Epidermis besteht aus fünf Schichten (von unten nach oben): Stratum basale (Zellteilung), Stratum spinosum, Stratum granulosum, Stratum lucidum (nur Hand/Fuß) und Stratum corneum (Hornschicht). Neue Zellen entstehen im Stratum basale. Zyklus ca. 28 Tage.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Epidermis besteht aus fünf Schichten (von unten nach oben): **Stratum basale** (Zellteilung), **Stratum spinosum** (Stachelzellen), **Stratum granulosum** (Körnerzellen), **Stratum lucidum** (nur Hand/Fuß) und **Stratum corneum** (Hornschicht).",
      textB1:
        "Die Epidermis hat **5 Schichten**. Von unten nach oben:\n1. Stratum basale — hier entstehen neue Zellen\n2. Stratum spinosum\n3. Stratum granulosum\n4. Stratum lucidum (nur an Hand und Fuß)\n5. Stratum corneum — die Hornschicht außen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-03",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Anatomische Nomenklatur", "Schaefer/Redelmeier (Skin Barrier, 1996)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-epidermis-schichten",
        tag: "anatomie",
        contentC1: {
          title: "Die 5 Schichten der Epidermis",
          body: "Die Epidermis ist aus **fünf Schichten** aufgebaut, in denen Keratinozyten von unten nach oben wandern und dabei verhornen:\n\n**1. Stratum basale (Basalzellschicht):** Einzellige Schicht direkt auf der Basalmembran. Hier teilen sich die Keratinozyten durch Mitose. Auch Melanozyten (Melanin-Bildung) und Merkel-Zellen (Tastsinn) liegen hier.\n\n**2. Stratum spinosum (Stachelzellschicht):** Zellen verbinden sich über Desmosomen — unter dem Mikroskop sichtbar als 'Stacheln'. Mechanisch stabil.\n\n**3. Stratum granulosum (Körnerschicht):** Zellen enthalten Keratohyalin-Körnchen, die den Verhornungsprozess starten.\n\n**4. Stratum lucidum (Glanzschicht):** Nur in der Leistenhaut (Handfläche, Fußsohle). Zone des Zelltods.\n\n**5. Stratum corneum (Hornschicht):** 15–25 Zelllagen tote Korneozyten mit Fettzement dazwischen — die eigentliche Hautbarriere. Zellen schilfern oben ab (ca. 28 Tage Gesamtzyklus).",
          glossarBegriffe: ["Keratinozyt", "Melanozyt"],
        },
        contentB1: {
          title: "Die 5 Schichten der Epidermis",
          body: "Die Epidermis hat **5 Schichten**. Die Zellen wandern von unten nach oben — das dauert etwa **28 Tage**.\n\n**1. Stratum basale (unten):** Hier entstehen neue Zellen durch Teilung. Hier sind auch die Zellen für Farbe (Melanozyten) und für Tasten (Merkel-Zellen).\n\n**2. Stratum spinosum:** Die Zellen hängen fest zusammen wie Stacheln.\n\n**3. Stratum granulosum:** Die Zellen fangen an, Horn zu bilden.\n\n**4. Stratum lucidum:** Nur an Hand und Fußsohle. Die Zellen sterben.\n\n**5. Stratum corneum (oben):** Tote Zellen wie Ziegelsteine mit Fett als Mörtel. Diese Schicht ist deine Schutzschicht. Nach 28 Tagen fällt sie ab.",
          glossarBegriffe: ["Keratinozyt", "Melanozyt"],
        },
      },
    },
    glossarBegriffe: ["Keratinozyt", "Melanozyt"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: haut-anhangsgebilde (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-anhangsgebilde",
    themaId: "haut",
    titel: "Hautanhangsgebilde",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was alles gehört eigentlich noch zur Haut dazu — außer der Haut selbst? Denke an alles, was aus der Haut wächst oder in ihr steckt.",
      antwort:
        "Hautanhangsgebilde sind: Haare (aus Haarfollikeln), Nägel (aus Nagelmatrix), Talgdrüsen (Sebum, ölig), Schweißdrüsen (ekkrine — Wasser, apokrine — Geruch). Sie entstehen embryonal aus der Epidermis.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Hautanhangsgebilde sind: **Haare** (aus Haarfollikeln), **Nägel** (aus Nagelmatrix), **Talgdrüsen** (Sebum, ölig), **Schweißdrüsen** (ekkrine — Wasser, apokrine — Geruch). Sie entstehen embryonal aus der Epidermis.",
      textB1:
        "Zur Haut gehören dazu:\n1. Haare — wachsen aus Haarwurzeln\n2. Nägel — wachsen aus der Nagelwurzel\n3. Talgdrüsen — machen Öl\n4. Schweißdrüsen — machen Schweiß (Wasser und Geruch)",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-04",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Anatomische Nomenklatur"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-anhangsgebilde",
        tag: "anatomie",
        contentC1: {
          title: "Hautanhangsgebilde",
          body: "Hautanhangsgebilde entstehen embryonal aus der Epidermis, liegen aber in der Dermis oder tiefer:\n\n**Haare:** Wachsen aus Haarfollikeln in der Dermis. Jeder Haarfollikel hat eine Talgdrüse und einen kleinen Aufrichtermuskel (Musculus arrector pili — Gänsehaut). Haarwachstum in Zyklen (Anagen, Katagen, Telogen).\n\n**Nägel:** Hornplatten aus abgestorbenen Keratinozyten. Wachsen aus der Nagelmatrix. Fingernagel wächst ca. 3 mm/Monat, Zehennagel ca. 1,5 mm/Monat.\n\n**Talgdrüsen (Glandulae sebaceae):** Münden in Haarfollikel (holokrine Sekretion — ganze Zelle wird zu Sebum). Sebum + Schweiß bilden den Hydrolipidfilm.\n\n**Schweißdrüsen:** Zwei Typen:\n- **Ekkrin** (am ganzen Körper, 2–4 Mio.): Wasser + Salz, Temperaturregulation\n- **Apokrin** (Achsel, Genital): Duftstoffe, aktiv ab Pubertät",
          glossarBegriffe: ["Sebum", "Hydrolipidfilm"],
        },
        contentB1: {
          title: "Hautanhangsgebilde",
          body: "Zur Haut gehören 4 Dinge dazu. Sie entstehen aus der Haut, liegen aber tiefer:\n\n**1. Haare:** Wachsen aus der Haarwurzel. An jedem Haar hängt eine kleine Öldrüse und ein kleiner Muskel (Gänsehaut-Muskel).\n\n**2. Nägel:** Sind aus Horn, also toten Zellen. Wachsen aus der Nagelwurzel. Fingernagel: **3 mm pro Monat**. Zehennagel: **1,5 mm pro Monat**.\n\n**3. Talgdrüsen (Öldrüsen):** Machen Fett (Sebum). Das Fett pflegt die Haut und die Haare.\n\n**4. Schweißdrüsen:** Zwei Arten:\n- **Ekkrin** — überall am Körper. Machen Wasser-Schweiß zum Kühlen.\n- **Apokrin** — unter den Armen und im Genital-Bereich. Machen Duft-Schweiß ab der Pubertät.",
          glossarBegriffe: ["Sebum", "Hydrolipidfilm"],
        },
      },
    },
    glossarBegriffe: ["Sebum", "Hydrolipidfilm"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: haut-farbe-melanin (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-farbe-melanin",
    themaId: "haut",
    titel: "Melanin und Hautfarbe",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum wird man braun, wenn man in die Sonne geht? Und warum schützt Bräune die Haut?",
      antwort:
        "Die Hautfarbe wird vor allem durch Melanin bestimmt, gebildet in Melanozyten im Stratum basale. Mehr UV-Licht → mehr Melanin → dunklere Haut. Melanin absorbiert UV-Strahlung und schützt die DNA der Zellen. Alle Menschen haben gleich viele Melanozyten — unterschiedlich ist nur die Aktivität.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Hautfarbe wird vor allem durch **Melanin** bestimmt, gebildet in Melanozyten im Stratum basale. Mehr UV-Licht → mehr Melanin → dunklere Haut. Melanin absorbiert UV-Strahlung und schützt die DNA der Zellen.",
      textB1:
        "Die Farbe der Haut kommt von **Melanin**. Melanin ist ein dunkler Farbstoff. Er wird in der untersten Schicht der Epidermis gebildet. Sonne macht mehr Melanin — darum wird die Haut braun. Das schützt vor UV-Strahlen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-05",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Anatomische Nomenklatur", "WHO (2020)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-melanin",
        tag: "anatomie",
        contentC1: {
          title: "Melanin und Hautfarbe",
          body: "Die Hautfarbe (Kolorit) wird durch drei Pigmente bestimmt: **Melanin** (braun/schwarz), **Hämoglobin** (rot, in den Gefäßen) und **Carotin** (gelb, aus der Nahrung). Die individuelle Farbe hängt hauptsächlich von der Menge an Melanin ab.\n\n**Melanin** wird in Melanozyten im Stratum basale gebildet. Alle Menschen haben **gleich viele Melanozyten** — der Unterschied liegt in der Aktivität: Wie viel Melanin wird produziert, und welcher Typ (Eumelanin = braun/schwarz, Phäomelanin = rot/gelb)?\n\nUV-Strahlung aktiviert die Melaninbildung — die Haut bräunt. Melanin absorbiert UV-Strahlen und schützt so die DNA der tieferliegenden Zellen vor Mutationen. Menschen mit heller Haut haben weniger Eumelanin — daher höheres Hautkrebsrisiko bei UV-Exposition.",
          glossarBegriffe: ["Melanin", "Melanozyt"],
        },
        contentB1: {
          title: "Melanin und Hautfarbe",
          body: "Die Farbe der Haut kommt von drei Stoffen: **Melanin** (braun), **Hämoglobin** (rot, im Blut) und **Carotin** (gelb, aus Essen).\n\nVor allem **Melanin** bestimmt die Farbe. Es wird in Melanozyten in der untersten Schicht der Epidermis gebildet.\n\nWichtig: **Jeder Mensch hat gleich viele Melanozyten.** Unterschiedlich ist nur, wie viel Melanin die Zellen machen.\n\nSonne (UV-Strahlen) macht die Zellen aktiver — du wirst braun. Das Melanin schützt deine Zellen vor der Sonne. Helle Haut hat weniger Schutz. Darum ist Hautkrebs bei heller Haut ein höheres Risiko.",
          glossarBegriffe: ["Melanin", "Melanozyt"],
        },
      },
    },
    glossarBegriffe: ["Melanin", "Melanozyt"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: haut-beobachtung-kolorit (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-beobachtung-kolorit",
    themaId: "haut",
    titel: "Hautbeobachtung: Kolorit",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du gehst ins Zimmer und siehst einen Patienten. Bevor du ihn ansprichst: Auf welche 4 Hautfarben achtest du — und was könnte jede bedeuten?",
      antwort:
        "Pathologisches Kolorit — 4 Leitbefunde: Rötung (Erythem — Entzündung, Fieber, allergische Reaktion), Blässe (Anämie, Schock, Kreislaufproblem), Zyanose (blau — O2-Mangel, zentral/peripher), Ikterus (gelb — Bilirubin, Leber/Galle). Bei dunkler Haut: Handinnenfläche, Schleimhaut, Nagelbett beurteilen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pathologisches Kolorit — 4 Leitbefunde: **Rötung** (Erythem — Entzündung, Fieber, allergische Reaktion), **Blässe** (Anämie, Schock, Kreislaufproblem), **Zyanose** (blau — O2-Mangel, zentral/peripher), **Ikterus** (gelb — Bilirubin, Leber/Galle). Bei dunkler Haut: Handinnenfläche, Schleimhaut, Nagelbett beurteilen.",
      textB1:
        "Es gibt 4 wichtige Hautfarben, die Probleme zeigen:\n1. **Rot** (Erythem) → Entzündung, Fieber\n2. **Blass** → wenig Blut, Schock\n3. **Blau** (Zyanose) → wenig Sauerstoff\n4. **Gelb** (Ikterus) → Leber- oder Gallenproblem\n\nBei dunkler Haut: Schau an Handfläche, Schleimhaut und Nagelbett.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-06",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["Anatomische Nomenklatur", "AWMF-Leitlinie Dekubitus"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-kolorit",
        tag: "pflege",
        contentC1: {
          title: "Hautbeobachtung: Kolorit",
          body: "Das Hautkolorit ist ein zentraler Pflegebefund. Vier pathologische Muster sind zu unterscheiden:\n\n**Rötung (Erythem):** Gefäße sind erweitert, mehr Blut an der Oberfläche. Ursachen: Fieber, Entzündung, allergische Reaktion, Sonnenbrand, Dekubitus Kategorie I.\n\n**Blässe:** Wenig Hämoglobin oder Minderdurchblutung. Ursachen: Anämie, Schock, peripherer Vasospasmus, Ohnmacht.\n\n**Zyanose:** Bläulich-livide Färbung durch **Sauerstoffmangel** im Blut.\n- **Zentrale Zyanose** (Lippen, Zunge, Schleimhäute): Lungen- oder Herzproblem\n- **Periphere Zyanose** (Finger, Zehen, Akren): Kältebedingte Minderdurchblutung\n\n**Ikterus:** Gelbliche Verfärbung durch Bilirubin. Sichtbar ab ~2 mg/dl im Serum — zuerst an **Skleren** (Augenweiß), dann Haut. Ursachen: Leberfunktionsstörung, Gallenstau, Hämolyse.\n\n**Dunkle Haut:** Rötung ist schwer zu erkennen — Lokalbefund mit Temperatur, Verhärtung und Vergleich zur Umgebung beurteilen. Blässe, Zyanose und Ikterus am besten an Handinnenflächen, Fußsohlen, Mundschleimhaut, Bindehaut und Nagelbett prüfen.",
          glossarBegriffe: ["Erythem", "Zyanose", "Ikterus"],
        },
        contentB1: {
          title: "Hautbeobachtung: Kolorit",
          body: "Es gibt 4 Hautfarben, die Krankheiten zeigen:\n\n**1. Rot (Erythem):** Die Blutgefäße sind weit, mehr Blut in der Haut. Gründe: Fieber, Entzündung, Allergie, Sonnenbrand, beginnender Dekubitus.\n\n**2. Blass:** Wenig Blut in der Haut. Gründe: Blutarmut, Schock, Ohnmacht.\n\n**3. Blau (Zyanose):** Zu wenig Sauerstoff im Blut.\n- **Zentral** (Lippen, Zunge): Lunge oder Herz schwach.\n- **Peripher** (Finger, Zehen): Kalt, schlechte Durchblutung.\n\n**4. Gelb (Ikterus):** Gelber Stoff (Bilirubin) in der Haut. Zuerst im Augenweiß, dann in der Haut. Gründe: Leber oder Galle krank.\n\n**Bei dunkler Haut:** Rötung ist schwer zu sehen. Schau an **Handfläche, Fußsohle, Mund-Schleimhaut und Nagel**. Fühle: Ist die Stelle wärmer oder härter als die Umgebung?",
          glossarBegriffe: ["Erythem", "Zyanose", "Ikterus"],
        },
      },
    },
    glossarBegriffe: ["Erythem", "Zyanose", "Ikterus"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: haut-entzuendungszeichen-5 (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-entzuendungszeichen-5",
    themaId: "haut",
    titel: "Die 5 Entzündungszeichen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Dein Finger ist entzündet — nach einem Splitter. Welche 5 Zeichen siehst oder spürst du? Versuche sie mit eigenen Worten zu beschreiben.",
      antwort:
        "Die 5 Kardinalsymptome: Rubor (Rötung), Dolor (Schmerz), Tumor (Schwellung), Calor (Wärme) — nach Celsus (~30 n.Chr.). Functio laesa (Funktionseinschränkung) — nach Galen (~200 n.Chr.).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die klassischen Entzündungszeichen nach Celsus (~30 n.Chr.): **Rubor** (Rötung), **Dolor** (Schmerz), **Tumor** (Schwellung), **Calor** (Wärme). Galen (~200 n.Chr.) ergänzte **Functio laesa** (Funktionseinschränkung). Merke: R–D–T–C–F.",
      textB1:
        "Bei einer Entzündung gibt es **5 Zeichen** (lateinisch):\n1. Rubor — **Rötung**\n2. Dolor — **Schmerz**\n3. Tumor — **Schwellung**\n4. Calor — **Wärme**\n5. Functio laesa — **Funktion gestört** (du kannst die Stelle nicht gut benutzen)",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-07",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Celsus, De Medicina (~30 n.Chr.)", "Galen (~200 n.Chr.)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-entzuendung",
        tag: "pflege",
        contentC1: {
          title: "Die 5 Entzündungszeichen",
          body: "Die **4 klassischen Entzündungszeichen** wurden vom römischen Arzt **Celsus** (~30 n.Chr.) in 'De Medicina' beschrieben. Rund 200 Jahre später ergänzte **Galen** ein fünftes — heute die **5 Kardinalsymptome**:\n\n**1. Rubor (Rötung):** Gefäßerweiterung im Entzündungsgebiet → mehr Blut → sichtbare Röte.\n\n**2. Dolor (Schmerz):** Freisetzung von Entzündungsmediatoren (Bradykinin, Prostaglandine) reizt Nozizeptoren.\n\n**3. Tumor (Schwellung):** Erhöhte Gefäßpermeabilität → Plasma tritt ins Gewebe → Ödem.\n\n**4. Calor (Wärme):** Mehr Durchblutung + erhöhter Stoffwechsel → lokale Temperaturerhöhung.\n\n**5. Functio laesa (Funktionseinschränkung):** Das betroffene Gewebe oder Gelenk kann nicht mehr normal arbeiten — wegen Schmerz, Schwellung oder Gewebezerstörung.\n\n**Pflegerelevanz:** Bei einem Dekubitus Kategorie I fehlen meist Wärme und Schmerz — bei einer Infektion (Wundinfekt, Erysipel) sind alle 5 Zeichen vorhanden.",
          glossarBegriffe: ["Rubor, Dolor, Tumor, Calor", "Functio laesa", "Erythem"],
        },
        contentB1: {
          title: "Die 5 Entzündungszeichen",
          body: "Bei einer Entzündung gibt es **5 Zeichen**. Der Römer **Celsus** (vor 2000 Jahren) fand die ersten 4. **Galen** (200 Jahre später) fand das 5.\n\n**1. Rubor (rot):** Blutgefäße öffnen sich. Mehr Blut → die Stelle wird rot.\n\n**2. Dolor (Schmerz):** Der Körper schickt Schmerz-Stoffe. Die Schmerz-Nerven werden aktiv.\n\n**3. Tumor (Schwellung):** Wasser geht aus den Gefäßen ins Gewebe → die Stelle schwillt an.\n\n**4. Calor (warm):** Mehr Blut und mehr Arbeit → die Stelle wird warm.\n\n**5. Functio laesa (gestört):** Die Stelle kann nicht mehr normal arbeiten — zum Beispiel ein Finger, den du nicht mehr biegen kannst.\n\n**Wichtig in der Pflege:** Bei einem Dekubitus Kategorie I fehlen oft Wärme und Schmerz. Bei einer echten Infektion (Wunde, Erysipel) sind alle 5 da. So kannst du die beiden unterscheiden.",
          glossarBegriffe: ["Rubor, Dolor, Tumor, Calor", "Functio laesa"],
        },
      },
    },
    glossarBegriffe: ["Rubor, Dolor, Tumor, Calor", "Functio laesa"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: haut-turgor (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-turgor",
    themaId: "haut",
    titel: "Hautturgor",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wie kannst du mit **einem Griff** auf dem Handrücken prüfen, ob ein Patient zu wenig getrunken hat? Und warum funktioniert das?",
      antwort:
        "Der Hautturgor beschreibt die Elastizität der Haut. Test: Hautfalte am Handrücken oder Sternum kurz anheben und loslassen. Bleibt sie stehen (sog. 'Faltenstehen') → Exsikkose-Hinweis. Normal: Rückkehr in < 2 Sekunden. Bei alten Menschen am Sternum testen — Handrücken ist unzuverlässig.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der **Hautturgor** beschreibt die Elastizität der Haut. Test: Hautfalte am Handrücken oder Sternum kurz anheben und loslassen. Bleibt sie **stehen** (sog. 'Faltenstehen') → Exsikkose-Hinweis. Normal: Rückkehr in < 2 Sekunden.",
      textB1:
        "Der **Hautturgor** zeigt, wie elastisch die Haut ist. Test: Ziehe mit zwei Fingern eine Haut-Falte (Handrücken oder Brustbein) kurz hoch und lass los. Normal: Die Falte geht sofort zurück. Wenn sie stehen bleibt → der Patient hat zu wenig Flüssigkeit.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-08",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Pflegefachliche Standardliteratur", "DGG-Empfehlungen"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-turgor",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Hautturgor",
          body: "Der Hautturgor ist die **Spannung und Elastizität** der Haut, die durch den Flüssigkeitsgehalt und die elastischen Fasern bestimmt wird.\n\n**Durchführung Turgor-Test:**\n1. Zwei Finger (Daumen + Zeigefinger) eine Hautfalte am **Handrücken** oder **Sternum** anheben.\n2. Kurz hochziehen, dann loslassen.\n3. Beobachten: Kehrt die Falte in < 2 Sekunden zurück? → normal. Bleibt sie stehen (**Faltenstehen**) → Hinweis auf Dehydratation.\n\n**Wichtig bei der Interpretation:**\n- **Alte Menschen** haben physiologisch reduzierten Turgor durch weniger elastische Fasern — **Handrücken ist unzuverlässig**, besser am **Sternum** prüfen.\n- Bei Säuglingen ist der Turgor besonders aussagekräftig (zusätzlich eingesunkene Fontanelle).\n- Turgor alleine reicht nicht — kombiniere mit trockener Mundschleimhaut, Urinfarbe (dunkel konzentriert), Blutdruck und Gewichtsverlauf.",
          glossarBegriffe: ["Turgor"],
        },
        contentB1: {
          title: "Hautturgor",
          body: "Der Hautturgor zeigt, wie viel Wasser und Elastizität in der Haut ist.\n\n**So geht der Test:**\n1. Nimm zwei Finger.\n2. Ziehe eine Haut-Falte am **Handrücken** oder **Brustbein** hoch.\n3. Lass los und schau: Geht die Falte sofort zurück (unter 2 Sekunden)? → Das ist **normal**.\n4. Bleibt die Falte **stehen**? → Der Patient hat zu wenig Flüssigkeit.\n\n**Wichtig:**\n- **Alte Menschen:** Die Haut am Handrücken ist auch ohne Flüssigkeitsmangel weniger elastisch. **Besser** am Brustbein testen.\n- Der Turgor allein reicht nicht. Schau auch auf: Mund trocken? Urin dunkel? Blutdruck niedrig? Patient hat abgenommen?",
          glossarBegriffe: ["Turgor"],
        },
      },
    },
    glossarBegriffe: ["Turgor"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: haut-oedem-erkennen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-oedem-erkennen",
    themaId: "haut",
    titel: "Ödem erkennen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Die Beine eines Patienten sehen dicker aus als gestern. Wie kannst du mit **einem Fingerdruck** prüfen, ob es sich um Wasser im Gewebe handelt?",
      antwort:
        "Ödem = Flüssigkeitsansammlung im Zwischenzellraum. Test: Fingerdruck auf Schienbein/Knöchel für 5 Sek — bleibt eine Delle zurück (eindrückbar)? → Ödem. Typische Lokalisationen: Beine (kardial → Rechtsherzinsuffizienz), Gesicht/Augen (renal → Nephrotisches Syndrom), ganzer Körper (Anasarka). 1 Liter = ca. 1 kg Körpergewicht.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Ödem** = Flüssigkeitsansammlung im Zwischenzellraum. Test: **Fingerdruck** auf Schienbein/Knöchel für 5 Sek — bleibt eine Delle zurück (**eindrückbar**)? → Ödem. Typische Lokalisationen: Beine (kardial), Gesicht/Augen (renal), ganzer Körper (Anasarka).",
      textB1:
        "**Ödem** = Wasser im Gewebe. So testest du:\n1. Drücke mit einem Finger 5 Sekunden auf das Schienbein oder den Knöchel.\n2. Entsteht eine **Delle**, die bleibt? → Ödem.\n\nWo Ödeme sitzen:\n- An den Beinen → Herz-Problem\n- Am Gesicht → Nieren-Problem\n- Überall → sehr starkes Ödem (Anasarka)",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-09",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Pflegefachliche Standardliteratur", "DGG-Empfehlungen"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-oedem",
        tag: "pflege",
        contentC1: {
          title: "Ödem erkennen",
          body: "Ein **Ödem** ist eine pathologische Flüssigkeitsansammlung im interstitiellen Raum. Pflegerische Einteilung nach Klinik:\n\n**Eindrückbares Ödem (pitting oedema):** Fingerdruck hinterlässt Delle. Gradeinteilung (orientierend):\n- Grad 1: Delle < 2 mm, < 15 Sek. Rückkehr\n- Grad 2: Delle 2–4 mm, ca. 15 Sek.\n- Grad 3: Delle 4–6 mm, > 1 Min.\n- Grad 4: Delle > 6 mm, > 2 Min.\n\n**Nicht-eindrückbares Ödem:** Lymphödem, Myxödem — keine Delle durch Eiweißreichtum.\n\n**Typische Ursachen nach Lokalisation:**\n- **Beine (kardial):** Rechtsherzinsuffizienz → Druckanstieg im venösen System\n- **Gesicht/Lidödem (renal):** Eiweißverlust bei Nephrotischem Syndrom\n- **Lokal:** Entzündung, Thrombose, Allergie\n- **Anasarka:** Generalisiertes Ödem am ganzen Körper\n\n**Monitoring:** Täglich gleiche Tageszeit wiegen (1 l Flüssigkeit = 1 kg), Bilanzierung.",
          glossarBegriffe: ["Ödem"],
        },
        contentB1: {
          title: "Ödem erkennen",
          body: "Ein **Ödem** ist Wasser im Gewebe — zwischen den Zellen. So testest du:\n1. Drücke mit einem Finger 5 Sekunden auf das **Schienbein** oder den **Knöchel**.\n2. Bleibt eine **Delle**? → Eindrückbares Ödem.\n\n**Schweregrad:**\n- Grad 1: kleine Delle, geht schnell weg\n- Grad 2: mittlere Delle\n- Grad 3: tiefe Delle, bleibt über 1 Minute\n- Grad 4: sehr tiefe Delle, bleibt mehr als 2 Minuten\n\n**Wo sitzt das Ödem?**\n- **Beine** → oft Herz-Problem (Rechtsherz)\n- **Gesicht, Augen** → oft Nieren-Problem\n- **Überall** → Anasarka (sehr ernst)\n\n**Kontrolle:** Jeden Tag zur gleichen Zeit **wiegen** (1 Liter Wasser = 1 kg) und alle Flüssigkeiten aufschreiben.",
          glossarBegriffe: ["Ödem"],
        },
      },
    },
    glossarBegriffe: ["Ödem"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: haut-mechanorezeptoren (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-mechanorezeptoren",
    themaId: "haut",
    titel: "Mechanorezeptoren der Haut",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Schließ die Augen und spüre: Du kannst einen leichten Hauch von Wind, einen festen Händedruck, Kälte und eine Vibration unterscheiden. Wie macht deine Haut das?",
      antwort:
        "In der Haut gibt es 4 Mechanorezeptoren für unterschiedliche Reize: Merkel-Zellen (anhaltender Druck), Meissner-Körperchen (leichte Berührung, Bewegung), Ruffini-Körperchen (Dehnung, Druck), Vater-Pacini-Körperchen (Vibration, schnelle Veränderung). Dazu kommen freie Nervenendigungen für Wärme, Kälte und Schmerz.",
    },
    stufe2: {
      typ: "hinweis",
      text: "In der Haut gibt es **4 Mechanorezeptoren** für unterschiedliche Reize: **Merkel-Zellen** (anhaltender Druck), **Meissner-Körperchen** (leichte Berührung, Bewegung), **Ruffini-Körperchen** (Dehnung, Druck), **Vater-Pacini-Körperchen** (Vibration, schnelle Veränderung).",
      textB1:
        "Die Haut hat **4 Tast-Zellen** für verschiedene Reize:\n1. **Merkel-Zellen** — anhaltender Druck\n2. **Meissner** — leichte Berührung\n3. **Ruffini** — Dehnung\n4. **Vater-Pacini** — Vibration\n\nDazu kommen freie Nervenendigungen für Wärme, Kälte und Schmerz.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-10",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Anatomische Nomenklatur"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-rezeptoren",
        tag: "anatomie",
        contentC1: {
          title: "Mechanorezeptoren der Haut",
          body: "In der Haut arbeiten **4 Mechanorezeptoren** (plus freie Nervenendigungen), jeder für eine andere Reiz-Art:\n\n**Merkel-Zellen:** Stratum basale der Epidermis. Langsam adaptierend → melden **anhaltenden Druck** und feine Oberflächenstruktur. Dichte an Fingerkuppen hoch.\n\n**Meissner-Körperchen:** In Dermis-Papillen, v.a. an Fingerbeeren, Lippen, Zunge. Schnell adaptierend → melden **leichte Berührung** und Bewegungsreize.\n\n**Ruffini-Körperchen:** Tief in der Dermis. Langsam adaptierend → melden **Dehnung** und **anhaltenden Druck**, auch Gelenkstellung (Propriozeption).\n\n**Vater-Pacini-Körperchen:** Subcutis. Sehr schnell adaptierend → melden **Vibration** und schnelle Druckänderungen.\n\n**Freie Nervenendigungen:** In allen Schichten. Melden **Wärme, Kälte und Schmerz** (Nozizeption) — nicht mechanische Reize.",
          glossarBegriffe: [],
        },
        contentB1: {
          title: "Mechanorezeptoren der Haut",
          body: "In der Haut sind **4 Tast-Zellen** für verschiedene Reize. Jede Zelle kann eine bestimmte Sache gut:\n\n**1. Merkel-Zellen (Epidermis unten):** Spüren anhaltenden **Druck**. Sehr gut an Fingerkuppen — du kannst damit Blindenschrift lesen.\n\n**2. Meissner-Körperchen (Dermis oben):** Spüren **leichte Berührung** und **Bewegung**. Überall wo du besonders viel fühlst: Fingerbeeren, Lippen, Zunge.\n\n**3. Ruffini-Körperchen (Dermis tief):** Spüren **Dehnung** und anhaltenden Druck. Auch die Stellung von Gelenken.\n\n**4. Vater-Pacini-Körperchen (Subcutis):** Spüren **Vibration** und schnelle Bewegungen.\n\n**Freie Nervenendigungen:** Sie sind in allen Schichten. Sie spüren **Wärme, Kälte und Schmerz**.",
          glossarBegriffe: [],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: haut-temperatur-regulation (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-temperatur-regulation",
    themaId: "haut",
    titel: "Temperaturregulation der Haut",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Bei 30 °C im Sommer schwitzt du, bei 5 °C bekommst du Gänsehaut. Welche 3 Wege hat der Körper, um Wärme abzugeben — und welche 2, um sie zu halten?",
      antwort:
        "Kerntemperatur ~37 °C. Wärmeabgabe (Hitze): Vasodilatation, Schwitzen (Verdunstung), Konvektion, Strahlung, Konduktion. Wärmeerhalt (Kälte): Vasokonstriktion, Kältezittern, Gänsehaut (M. arrector pili). Regulationszentrum im Hypothalamus.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kerntemperatur ~37 °C. **Wärmeabgabe** (Hitze): Vasodilatation, Schwitzen (Verdunstung), Konvektion, Strahlung, Konduktion. **Wärmeerhalt** (Kälte): Vasokonstriktion, Kältezittern, Gänsehaut (M. arrector pili). Regulationszentrum im Hypothalamus.",
      textB1:
        "Der Körper hält **37 °C**. Das Zentrum dafür ist im Gehirn (Hypothalamus).\n\n**Bei Hitze (kühlen):** Blutgefäße werden weit, Schwitzen, Wärme geht ab.\n**Bei Kälte (warm halten):** Blutgefäße werden eng, Muskelzittern, Gänsehaut.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-11",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Anatomische Nomenklatur", "DGG-Empfehlungen"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-thermoregulation",
        tag: "anatomie",
        contentC1: {
          title: "Temperaturregulation der Haut",
          body: "Der Mensch ist ein Homoiotherm — Kerntemperatur um **37 °C**. Regulationszentrum: Hypothalamus. Die Haut ist das wichtigste Stellglied.\n\n**Bei Wärme (Wärmeabgabe):**\n- **Vasodilatation** der Hautgefäße → mehr Blut an der Oberfläche → Wärme gibt ab\n- **Schwitzen:** Ekkrine Drüsen → Verdunstung von Schweiß entzieht Verdunstungswärme\n- **Konvektion:** Abführung durch Luftbewegung\n- **Strahlung:** Infrarot-Abstrahlung\n- **Konduktion:** Wärmeleitung an kühle Oberflächen\n\n**Bei Kälte (Wärmeerhalt):**\n- **Vasokonstriktion** der Hautgefäße → weniger Durchblutung → Wärmestau innen\n- **Kältezittern:** unwillkürliche Muskelkontraktionen produzieren Wärme\n- **Gänsehaut** (M. arrector pili): Pilo-Erektion\n\n**Pflegerelevanz:** Alte Menschen haben eingeschränkte Regulation → schneller Hypothermie- oder Hyperthermie-Gefahr.",
          glossarBegriffe: ["Vasodilatation", "Vasokonstriktion"],
        },
        contentB1: {
          title: "Temperaturregulation der Haut",
          body: "Der Körper hält die Temperatur bei **37 °C**. Das Zentrum dafür ist im Gehirn (Hypothalamus).\n\n**Wenn es warm ist (Körper kühlt):**\n- **Gefäße weit:** Mehr Blut kommt an die Haut → Wärme geht ab.\n- **Schwitzen:** Schweiß verdunstet → die Haut kühlt.\n- **Wärme geht an die Luft** (Konvektion), strahlt ab (Strahlung).\n\n**Wenn es kalt ist (Körper wärmt):**\n- **Gefäße eng:** Weniger Blut an der Haut → Wärme bleibt innen.\n- **Zittern:** Muskeln arbeiten → machen Wärme.\n- **Gänsehaut:** Haare stehen auf.\n\n**Wichtig in der Pflege:** Alte Menschen können die Temperatur schlechter halten — sie werden schnell zu kalt oder zu warm.",
          glossarBegriffe: ["Vasodilatation", "Vasokonstriktion"],
        },
      },
    },
    glossarBegriffe: [],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: haut-saeureschutzmantel-ph55 (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-saeureschutzmantel-ph55",
    themaId: "haut",
    titel: "Säureschutzmantel (pH 4,7–5,5)",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum spannt deine Haut nach einer heißen Dusche mit viel Seife? Und was hat das mit Bakterien zu tun?",
      antwort:
        "Der Säureschutzmantel ist ein dünner Film aus Schweiß, Sebum und abgeschilferten Korneozyten mit einem pH-Wert von 4,7–5,5 (leicht sauer). Er hemmt das Wachstum pathogener Bakterien und Pilze und erhält die Hautbarriere. Seife (pH 9–10) zerstört ihn. Regeneration: 30 Min–2 h. (Marchini 1902)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der **Säureschutzmantel** ist ein dünner Film aus Schweiß, Sebum und abgeschilferten Korneozyten mit einem pH-Wert von **4,7–5,5** (leicht sauer). Er hemmt das Wachstum pathogener Bakterien und Pilze und erhält die Hautbarriere. (Marchini 1902 — Entdeckung)",
      textB1:
        "Die Haut hat einen **Schutz-Film**. Er heißt Säureschutzmantel.\n- Er besteht aus Schweiß, Hautfett und toten Zellen\n- Er ist leicht **sauer** (pH 4,7–5,5)\n- Er schützt vor Bakterien und Pilzen\n- Er hält die Haut-Barriere gesund",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-12",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: [
          "Marchini (1902)",
          "AWMF S1-Leitlinie Intertrigo (DDG, 2022)",
          "Schaefer/Redelmeier (Skin Barrier, 1996)",
        ],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-saeureschutzmantel",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Säureschutzmantel (pH 4,7–5,5)",
          body: "Der **Säureschutzmantel** (Hydrolipidfilm, Acid Mantle) wurde 1902 von Marchini beschrieben. Er ist ein dünner **Oberflächenfilm** auf der Haut, gebildet aus:\n\n- **Schweiß** (ekkrine Drüsen, enthält Milchsäure, Harnstoff, Aminosäuren)\n- **Sebum** (Talg, freie Fettsäuren, Triglyceride, Squalen)\n- **Abgeschilferten Korneozyten** und interzellulärer Lipidmatrix\n\n**pH-Wert:** 4,7–5,5 (leicht sauer, physiologisch)\n\n**Funktionen:**\n- **Antimikrobiell:** Pathogene Bakterien wachsen schlechter im sauren Milieu\n- **Stabilisierung der Hautbarriere:** saure Umgebung fördert die Reifung der Korneozyten-Lipide\n- **Pufferkapazität:** Neutralisiert alkalische Einwirkung (Seifen pH 9–10)\n\n**Störungen:** Häufiges Waschen mit alkalischer Seife, Desinfektionsmittel, Inkontinenz — der Film regeneriert bei gesunder Haut in ca. **30 Min bis 2 h**.\n\nFür die Pflege: **pH-neutrale bzw. hautneutrale Produkte (pH 5,5)** verwenden.",
          glossarBegriffe: ["Säureschutzmantel", "Hydrolipidfilm", "Sebum", "Syndet"],
        },
        contentB1: {
          title: "Säureschutzmantel (pH 4,7–5,5)",
          body: "Die Haut hat einen **Schutz-Film**. Er heißt Säureschutzmantel. Der Arzt **Marchini** hat ihn 1902 entdeckt.\n\n**Woraus besteht er?**\n- **Schweiß** (aus den Schweißdrüsen)\n- **Fett** (aus den Talgdrüsen)\n- **Tote Haut-Zellen**\n\n**pH-Wert: 4,7–5,5 → leicht sauer.**\n\n**Was macht er?**\n- Er **tötet Keime**: Schlimme Bakterien mögen es nicht sauer.\n- Er **schützt die Haut-Barriere**.\n- Er **puffert Basen**: Wenn du mit Seife (pH 9) wäschst, kann er das wieder ausgleichen.\n\n**Was stört ihn?**\n- Viel Seife\n- Desinfektions-Mittel\n- Inkontinenz (Urin macht die Haut basisch)\n\nBei gesunder Haut ist der Film nach **30 Minuten bis 2 Stunden** wieder da.\n\n**Für die Pflege:** Nimm Produkte mit **pH 5,5** (hautneutral).",
          glossarBegriffe: ["Säureschutzmantel", "Hydrolipidfilm", "Syndet"],
        },
      },
    },
    glossarBegriffe: ["Säureschutzmantel", "Hydrolipidfilm", "Syndet"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: haut-alterung-lebensspanne (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-alterung-lebensspanne",
    themaId: "haut",
    titel: "Altershaut und Lebensspanne",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum ist die Haut eines 85-jährigen Patienten dünner, trockener und empfindlicher als die eines 25-jährigen? Nenne 3 Veränderungen, die mit dem Alter passieren.",
      antwort:
        "Altershaut zeigt: dünnere Epidermis (bis 20% Verlust), weniger Talg- und Schweißdrüsen (Sebostase → trocken), weniger Kollagen/Elastin → reduzierter Turgor und erhöhte Verletzlichkeit. Zusätzlich: langsamere Wundheilung (28 → 60+ Tage), abnehmende Melanozyten-Zahl, verringerte Vitamin-D-Synthese. (DGG, Kligman — Hautalterung)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Altershaut zeigt: dünnere Epidermis, weniger Talg- und Schweißdrüsen, weniger Kollagen/Elastin → reduzierter Turgor und erhöhte Verletzlichkeit. Zusätzlich: langsamere Wundheilung, abnehmende Melanozyten-Zahl, verringerte Vitamin-D-Synthese. (DGG, AWMF-Empfehlungen)",
      textB1:
        "Mit dem Alter ändert sich die Haut:\n- Sie wird **dünner**\n- Sie produziert **weniger Fett und Schweiß** → trocken\n- Sie hat **weniger Kollagen** → Falten\n- Sie **heilt langsamer**\n- Sie macht **weniger Vitamin D** aus Sonnenlicht",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-13",
        phase: 1,
        stepType: "timeline",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DGG (Deutsche Gesellschaft für Geriatrie)", "Kligman (Hautalterung)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-alterung",
        tag: "pflege",
        contentC1: {
          title: "Altershaut und Lebensspanne",
          body: "Die Haut verändert sich über die Lebensspanne. Pflegerisch relevant sind vor allem Altersveränderungen:\n\n**Neugeborenenhaut (0–28 d):** Dünn, pH neutral (~6,5), weniger Eigenschutz.\n\n**Säugling/Kleinkind:** Barriereaufbau abgeschlossen um 3. Lebensmonat.\n\n**Jugend (Pubertät):** Androgene aktivieren Talgdrüsen → Akne möglich.\n\n**Erwachsenenalter:** Stabile Barriere, Turgor optimal.\n\n**Alter (>65):**\n- **Dünnere Epidermis** (bis zu 20%) → erhöhte Verletzlichkeit\n- **Weniger Kollagen/Elastin** → weniger Turgor, Falten\n- **Weniger Talg + Schweiß** → Sebostase (trockene Haut), Juckreiz\n- **Langsamere Wundheilung** (Epidermis-Turnover von 28 auf 60+ Tage verlängert)\n- **Vitamin-D-Synthese reduziert** → häufig Substitution nötig\n\n**Pflegerelevanz:** Weniger Reinigung, mehr Rückfettung, W/O-Emulsionen bevorzugen, Hautschutz bei Inkontinenz. (DGG-Empfehlungen)",
          glossarBegriffe: ["Sebostase"],
        },
        contentB1: {
          title: "Altershaut und Lebensspanne",
          body: "Die Haut verändert sich im Laufe des Lebens:\n\n**Baby (0–28 Tage):** Haut dünn, pH noch **nicht sauer** (6,5).\n\n**Kleinkind:** Nach 3 Monaten ist die Schutz-Barriere fertig.\n\n**Pubertät:** Hormone → Talgdrüsen aktiv → manchmal Akne.\n\n**Erwachsener:** Stabile Haut, guter Turgor.\n\n**Im Alter (über 65):**\n- Epidermis ist **20% dünner** → die Haut reißt schneller\n- **Weniger Kollagen** → Haut verliert Spannung\n- **Weniger Talg und Schweiß** → Haut ist **trocken**, juckt oft\n- **Wunden heilen langsamer** (28 Tage → 60 Tage oder länger)\n- Weniger Vitamin D aus der Sonne\n\n**Für die Pflege:**\n- Weniger waschen\n- Mehr **Fett-Creme** benutzen (W/O statt O/W)\n- Bei Inkontinenz: Hautschutz\n- pH 5,5 Produkte",
          glossarBegriffe: ["Sebostase"],
        },
      },
    },
    glossarBegriffe: ["Sebostase"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: haut-druesen-sebum-sudor (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-druesen-sebum-sudor",
    themaId: "haut",
    titel: "Hautdrüsen: Sebum und Sudor",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum wird manche Haut schnell ölig (fettig) und manche trocken? Welche Drüsen spielen dabei welche Rolle?",
      antwort:
        "Die Haut hat 2 Drüsentypen: Talgdrüsen (Glandulae sebaceae) → Sebum (Fett); Schweißdrüsen → Sudor (Wasser). Beide Sekrete bilden den Hydrolipidfilm. Verteilung: Talg v.a. Kopf/Gesicht/Rücken, ekkrine Schweißdrüsen überall, apokrine nur Achsel/Genital.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Haut hat 2 Drüsentypen: **Talgdrüsen** (Glandulae sebaceae) → **Sebum** (Fett); **Schweißdrüsen** → **Sudor** (Wasser). Beide Sekrete bilden den Hydrolipidfilm. Verteilung: Talg v.a. Kopf/Gesicht/Rücken, ekkrine Schweißdrüsen überall, apokrine nur Achsel/Genital.",
      textB1:
        "Die Haut hat **2 Drüsen-Arten**:\n- **Talgdrüsen** → machen **Sebum** (Fett). Viel am Kopf und im Gesicht.\n- **Schweißdrüsen** → machen **Sudor** (Schweiß, Wasser). Überall — außer in der Achsel und im Genital: dort mit Geruch (apokrin).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-14",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: [
          "Anatomische Nomenklatur",
          "AWMF S1-Leitlinie Intertrigo (DDG, 2022)",
        ],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-druesen",
        tag: "anatomie",
        contentC1: {
          title: "Hautdrüsen: Sebum und Sudor",
          body: "Die Haut besitzt zwei Drüsentypen, deren Sekrete zusammen den Hydrolipidfilm bilden:\n\n**Talgdrüsen (Glandulae sebaceae):**\n- Münden in Haarfollikel\n- Sekretion: **holokrin** (die ganze Zelle zerfällt und wird zu Sebum)\n- Sebum = Triglyceride + freie Fettsäuren + Squalen\n- Dichte: Kopf/Gesicht/Brust/Rücken hoch (seborrhoische Areale)\n- Aktivität hormongesteuert → Pubertät = Maximum, Ruhe im Kindesalter und Alter\n\n**Schweißdrüsen:**\n\n**Ekkrine:** Ca. 2–4 Mio. am ganzen Körper. Sekretion: merokrin. Produkt: klarer, geruchsneutraler Schweiß (Wasser, NaCl, Harnstoff). Funktion: **Temperaturregulation** durch Verdunstung.\n\n**Apokrine:** Nur Achselhöhle, Genitalbereich, Mamille. Aktiv ab **Pubertät**. Produkt: eiweißreich — **Geruch entsteht durch bakterielle Zersetzung**.\n\n**Pflegerelevanz:** Starker Schweiß → Mazeration unter Falten → Intertrigo.",
          glossarBegriffe: ["Sebum", "Sebostase"],
        },
        contentB1: {
          title: "Hautdrüsen: Sebum und Sudor",
          body: "Die Haut hat **2 Arten Drüsen**:\n\n**Talgdrüsen (Sebum):**\n- Machen **Fett (Sebum)**\n- Münden in Haar-Kanäle\n- Dichte am Kopf, Gesicht, Brust, Rücken hoch\n- Hormon-abhängig: In der Pubertät sehr aktiv → Akne\n- Alte Menschen: Wenig Sebum → Haut ist trocken\n\n**Schweißdrüsen (2 Arten):**\n\n**1. Ekkrin (überall):**\n- 2 bis 4 Millionen am ganzen Körper\n- Schweiß: Wasser mit Salz, **geruchlos**\n- Funktion: **Kühlen** (Verdunstung)\n\n**2. Apokrin (nur Achsel + Genital):**\n- Aktiv ab der **Pubertät**\n- Schweiß mit **Eiweiß**\n- Zuerst geruchlos — Bakterien machen erst den **Geruch**\n\n**In der Pflege:**\n- Viel Schweiß in Hautfalten → **Intertrigo** (nasse, wunde Haut)",
          glossarBegriffe: ["Sebum", "Sebostase"],
        },
      },
    },
    glossarBegriffe: ["Sebum", "Sebostase"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 15: haut-reinigung-temperatur (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-reinigung-temperatur",
    themaId: "haut",
    titel: "Hautreinigung und Wassertemperatur",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient steht unter einer heißen Dusche (42 °C). Was passiert mit seiner Haut? Und wäre 20 °C besser? Warum ist beides problematisch?",
      antwort:
        "Ideal: 32–37 °C Wasser (körperwarm). Heißes Wasser (>40 °C) löst Lipide und Sebum → Barrieredefekt. Zu kaltes Wasser (<20 °C) beeinträchtigt periphere Durchblutung. Waschdauer < 5 Min. Bei Neuropathie (Diabetes): Verbrühungsgefahr durch fehlende Temperaturempfindung → Temperatur vorher prüfen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Ideal: 32–37 °C** Wasser (körperwarm). Heißes Wasser (>40 °C) löst Lipide und Sebum → Barrieredefekt. Zu kaltes Wasser (<20 °C) beeinträchtigt periphere Durchblutung. Waschdauer **< 5 Min**.",
      textB1:
        "Die richtige Wasser-Temperatur zum Waschen: **32–37 °C** (körperwarm).\n- Zu heiß (über 40 °C): Macht die Haut trocken\n- Zu kalt (unter 20 °C): Schlechte Durchblutung\n- **Kurz waschen**: unter 5 Minuten",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-15",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DGG (Deutsche Gesellschaft für Geriatrie)", "AWMF S1-Leitlinie Intertrigo (DDG, 2022)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-reinigung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Hautreinigung und Wassertemperatur",
          body: "Die Wahl von Wassertemperatur und Waschdauer beeinflusst die Hautbarriere direkt.\n\n**Ideale Wassertemperatur: 32–37 °C** (körperwarm).\n\n**Warum zu heiß schadet:**\n- Oberflächenlipide werden aus der Hornschicht ausgewaschen\n- Sebum wird emulgiert und weggewaschen → Säureschutzmantel zerstört\n- Vasodilatation → Juckreiz, evtl. Kreislaufbelastung\n- Bei >42 °C **Verbrühungsgefahr** (vor allem bei Neuropathie, Demenz, Säuglingen)\n\n**Warum zu kalt schadet:**\n- Starke Vasokonstriktion → schlechte Durchblutung\n- Bei langem Einwirken: Hypothermierisiko (Kinder, Alte)\n\n**Waschdauer:**\n- Duschen **< 5 Min**, Vollbad **< 15 Min**\n- Kein tägliches Vollbad bei Altershaut!\n\n**Sicherheit:**\n- Wassertemperatur **vor** Wasserkontakt mit Ellenbeuge prüfen\n- Bei Neuropathie (z.B. Diabetes): Patient kann Hitze nicht spüren → Thermostat-Armatur empfohlen",
          glossarBegriffe: ["Syndet", "Säureschutzmantel"],
        },
        contentB1: {
          title: "Hautreinigung und Wassertemperatur",
          body: "Die richtige Temperatur und Zeit beim Waschen ist wichtig.\n\n**Ideal: 32–37 °C** (körperwarm).\n\n**Zu heiß (über 40 °C):**\n- Das **Fett** in der Haut wird weggewaschen → Haut wird trocken\n- Der Schutz-Film (pH 5,5) geht kaputt\n- **Verbrennungs-Gefahr** — besonders bei Menschen mit Diabetes oder Demenz\n\n**Zu kalt (unter 20 °C):**\n- Blutgefäße werden eng → schlechte Durchblutung\n- Alte Menschen oder Kinder können **unterkühlen**\n\n**Waschzeit:**\n- **Duschen: unter 5 Minuten**\n- **Baden: unter 15 Minuten**\n- **Nicht jeden Tag ganz waschen** bei alten Menschen\n\n**Wichtig für die Sicherheit:**\n- Temperatur **vorher** am Innen-Arm prüfen\n- Bei Diabetes oder Demenz: Der Patient spürt Hitze vielleicht nicht → **du** musst prüfen",
          glossarBegriffe: ["Syndet"],
        },
      },
    },
    glossarBegriffe: ["Syndet"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 16: haut-seife-vs-syndet (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-seife-vs-syndet",
    themaId: "haut",
    titel: "Seife vs. Syndet",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient hat sehr trockene Haut. Er fragt: 'Welche Seife soll ich nehmen?' Was antwortest du — und warum ist die Frage falsch gestellt?",
      antwort:
        "Syndet statt Seife. Seife (alkalisch, pH 9–10) ist ein Fettsäuresalz. Syndet (synthetisches Detergens) ist pH-anpassbar (meist 5,5). Für empfindliche/trockene/pflegebedürftige Haut: immer Syndet. Klassische Seife nur bei gesunder, fettiger Haut — und selten. (Schaefer/Redelmeier 1996)",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Seife** (alkalisch, pH 9–10) ist ein Fettsäuresalz. **Syndet** (synthetisches Detergens) ist pH-anpassbar (meist 5,5). Für empfindliche/trockene/pflegebedürftige Haut: **Syndet**. Klassische Seife nur bei gesunder, fettiger Haut — und selten. (Schaefer/Redelmeier 1996)",
      textB1:
        "Es gibt 2 Reiniger:\n- **Seife**: pH 9–10 (basisch) — macht die Haut trocken\n- **Syndet**: pH 5,5 (wie die Haut) — schont die Haut\n\nIn der Pflege fast immer: **Syndet**. Klassische Seife nur bei gesunder, fettiger Haut — und selten.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-16",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: [
          "Schaefer/Redelmeier (Skin Barrier, 1996)",
          "AWMF S1-Leitlinie Intertrigo (DDG, 2022)",
        ],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-seife-syndet",
        tag: "pflege",
        contentC1: {
          title: "Seife vs. Syndet",
          body: "Klassische **Seife** und moderne **Syndets** unterscheiden sich chemisch und in ihrer Hautverträglichkeit deutlich.\n\n**Seife (Traditional Soap):**\n- Chemisch: Natrium- oder Kaliumsalz höherer Fettsäuren\n- pH: **9–10** (stark alkalisch)\n- Problem: Neutralisiert den Säureschutzmantel; bei häufiger Nutzung Barriereschaden\n\n**Syndet (Synthetic Detergent):**\n- Chemisch: Synthetische Tenside\n- pH: **anpassbar, meist 5,5** (hautneutral)\n- Wirkung: Reinigt ohne Säureschutzmantel zu zerstören\n- Oft mit rückfettenden Zusätzen (Öle, Ceramide, Panthenol)\n\n**Pflegepraxis:**\n- **Altershaut, Neurodermitis, Diabetes, Inkontinenz, Hautdefekte** → **immer Syndet**\n- **Gesunde junge Haut** → auch Seife möglich, aber sparsam\n- Antibakterielle Seife **nicht routinemäßig** — fördert Resistenzen\n\n**Merke:** 'pH-neutral' heißt in Pflegeprodukten meist **pH 5,5**, nicht pH 7.",
          glossarBegriffe: ["Syndet"],
        },
        contentB1: {
          title: "Seife vs. Syndet",
          body: "Es gibt **Seife** und **Syndet**. Sie sind nicht gleich.\n\n**Seife:**\n- pH: **9–10** (basisch, nicht wie die Haut)\n- Reinigt sehr stark, auch gutes Fett weg\n- Macht die Haut trocken bei oft benutzen\n\n**Syndet (Synthetic Detergent):**\n- pH: **5,5** (wie die Haut)\n- Reinigt, aber nicht zu stark\n- Oft mit zusätzlichem Fett oder Panthenol\n\n**In der Pflege:**\n- Alte Menschen, Diabetes, Neurodermitis, Inkontinenz, Wunden → **immer Syndet**\n- Gesunde Haut → Seife ist auch ok, aber selten\n- **Nach dem Waschen: Haut mit Creme pflegen**\n\n**Wichtig:** 'pH-neutral' auf Packungen heißt meist **pH 5,5** (wie die Haut) — **nicht** pH 7 (wie Wasser).",
          glossarBegriffe: ["Syndet"],
        },
      },
    },
    glossarBegriffe: ["Syndet"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 17: haut-o-w-vs-w-o-emulsionen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-o-w-vs-w-o-emulsionen",
    themaId: "haut",
    titel: "O/W- vs. W/O-Emulsionen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient schwitzt viel und hat normale Haut. Ein anderer Patient ist alt, die Haut ist **sehr trocken und rau**. Beide brauchen eine Creme. Welche **Art** Creme für welchen Patienten — und warum?",
      antwort:
        "O/W (Öl in Wasser, außen Wasser): leicht, kühlend, zieht schnell ein → normale/feuchte/schwitzende Haut. W/O (Wasser in Öl, außen Öl): fetthaltig, okklusiv, bleibt länger liegen → trockene/rissige Haut, Altershaut, Wetterschutz. Regel: feucht → O/W, trocken → W/O.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**O/W** (Öl in Wasser, außen Wasser): leicht, kühlend, zieht schnell ein → **normale/feuchte/schwitzende** Haut. **W/O** (Wasser in Öl, außen Öl): fetthaltig, okklusiv, bleibt länger liegen → **trockene/rissige** Haut, Altershaut, Wetterschutz. Regel: 'feucht → O/W, trocken → W/O'.",
      textB1:
        "Es gibt 2 Creme-Arten:\n- **O/W-Creme** (Öl in Wasser): **leicht**, zieht schnell ein. Für **normale** und **schwitzende** Haut.\n- **W/O-Creme** (Wasser in Öl): **fetter**, bleibt länger auf der Haut. Für **trockene**, raue Haut und alte Menschen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-17",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Schaefer/Redelmeier (Skin Barrier, 1996)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-emulsionen",
        tag: "pflege",
        contentC1: {
          title: "O/W- vs. W/O-Emulsionen",
          body: "Pflegeprodukte sind meist **Emulsionen** — Mischungen aus Wasser und Öl, zusammengehalten durch Emulgatoren. Zwei Grundtypen:\n\n**O/W-Emulsion (Öl-in-Wasser):**\n- **Außen Wasser**, innen Öltropfen\n- Leicht, spritzig, zieht schnell ein, kühlender Verdunstungseffekt\n- **Indikation:** gesunde Haut, feuchte/schwitzende Haut, Sommer\n- Beispiele: Milch, Lotion, leichte Tagescreme\n\n**W/O-Emulsion (Wasser-in-Öl):**\n- **Außen Öl**, innen Wassertröpfchen\n- Fetthaltig, **okklusiv** (bildet Filmschicht), zieht langsamer ein\n- **Indikation:** sehr trockene Haut, Altershaut, Neurodermitis, Wetterschutz (Winter)\n- Beispiele: Fettcreme, Kältecreme, Nachtcreme\n\n**Regel: Trockene Haut → W/O. Feuchte/normale Haut → O/W.**\n\n**Inkontinenz-Hautschutz:** meist W/O mit Zinkoxid (bildet Schutzfilm)\n\n**Zusätze:** Urea (feuchtigkeitsbindend), Ceramide (Barrierereparatur), Panthenol (beruhigend).",
          glossarBegriffe: ["Emulsion"],
        },
        contentB1: {
          title: "O/W- vs. W/O-Emulsionen",
          body: "Cremes bestehen aus **Wasser** und **Öl**. Zwei Arten:\n\n**O/W-Creme** (Öl-in-Wasser — außen ist Wasser):\n- **Leicht**, zieht schnell ein\n- Fühlt sich **kühl** an\n- **Gut für:** normale Haut, schwitzende Haut, Sommer\n\n**W/O-Creme** (Wasser-in-Öl — außen ist Öl):\n- **Sehr fett**, bleibt länger auf der Haut\n- Macht einen **Schutz-Film**\n- **Gut für:** sehr trockene Haut, alte Menschen, rissige Haut, Winter\n\n**Regel:** **Fett auf trocken. Leicht auf feucht.**\n\nBei **Inkontinenz** → meist W/O-Creme mit **Zinkoxid** — das gibt Schutz vor Urin.\n\n**Zusätze in Cremes:**\n- **Urea**: bindet Wasser\n- **Ceramide**: reparieren die Haut\n- **Panthenol**: beruhigt",
          glossarBegriffe: ["Emulsion"],
        },
      },
    },
    glossarBegriffe: ["Emulsion"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 18: haut-pflegeprodukte (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "haut-pflegeprodukte",
    themaId: "haut",
    titel: "Hautpflegeprodukte: Lotion, Creme, Salbe, Öl",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du findest 4 Dosen im Pflegeschrank: Creme, Lotion, Salbe, Öl. Welches Produkt hat am meisten **Wasser**, welches am meisten **Fett** — und welches nimmst du wann?",
      antwort:
        "Stufenweise von wässrig zu fett: Lotion (flüssig, sehr wässrig — Sommer, große Flächen), Creme (Emulsion — Standard, Alltag), Salbe (sehr fett, kaum Wasser — sehr trockene, rissige Haut), Öl (reines Öl — Babypflege, sehr trockene Haut, Reinigung bei Stuhl). Regel: Je trockener die Haut, desto fetter das Produkt.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Stufenweise von wässrig zu fett: **Lotion** (flüssig, sehr wässrig — Sommer, große Flächen), **Creme** (Emulsion — Standard, Alltag), **Salbe** (sehr fett, kaum Wasser — sehr trockene, rissige Haut, Okklusion), **Öl** (reines Öl — Babypflege, sehr trockene Haut, Reinigung bei Stuhl).",
      textB1:
        "Von **viel Wasser** (leicht) zu **viel Fett** (dick):\n- **Lotion**: flüssig, schnell und leicht, für den Sommer\n- **Creme**: Standard, für den Alltag\n- **Salbe**: sehr fett, für sehr trockene Haut\n- **Öl**: nur Öl, für Babys oder sehr trockene Haut",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-haut-wb-18",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Schaefer/Redelmeier (Skin Barrier, 1996)", "DGG (Deutsche Gesellschaft für Geriatrie)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-haut-pflegeprodukte",
        tag: "pflege",
        contentC1: {
          title: "Hautpflegeprodukte: Lotion, Creme, Salbe, Öl",
          body: "Hautpflegeprodukte werden nach Wasser-/Fettgehalt und Konsistenz eingeteilt. Die richtige Wahl hängt von Hautzustand, Körperregion und Witterung ab.\n\n**Lotion (Milch):**\n- Konsistenz: flüssig, meist O/W mit **hohem Wasseranteil**\n- Zieht schnell ein, kaum rückfettend\n- **Einsatz:** Körperpflege bei normaler Haut, Sommer, große Flächen\n\n**Creme:**\n- Konsistenz: halbfest, streichfähig, Emulsion (O/W oder W/O)\n- **Einsatz:** Alltagspflege, Gesicht, Hände\n\n**Salbe:**\n- Konsistenz: sehr fett, kaum Wasser, stark **okklusiv**\n- **Einsatz:** Sehr trockene Haut, Rhagaden (Risse), Nachtpflege\n- Unter Verband: Okklusion nur gezielt einsetzen\n\n**Öl:**\n- Reines Pflanzenöl (Mandel, Jojoba, Olivenöl)\n- **Einsatz:** Säuglingspflege, Reinigung bei Stuhlrückständen, Lösen von Pflastern\n\n**Grundregel:** Je **trockener und älter** die Haut, desto **fetter** das Produkt.",
          glossarBegriffe: ["Emulsion", "TEWL"],
        },
        contentB1: {
          title: "Hautpflegeprodukte: Lotion, Creme, Salbe, Öl",
          body: "Pflegeprodukte nach **Wasser** und **Fett** sortiert — von leicht zu fett:\n\n**1. Lotion (Milch):**\n- Sehr **flüssig**, viel Wasser\n- Zieht schnell ein, kaum Fett\n- **Für:** normale Haut, große Flächen (Rücken, Beine), Sommer\n\n**2. Creme:**\n- **Halbfest**, gut streichbar\n- Mischung aus Wasser und Fett\n- **Für:** Alltag, Gesicht, Hände\n\n**3. Salbe:**\n- **Sehr fett**, fast kein Wasser\n- Macht einen **Schutz-Film**\n- **Für:** sehr trockene Haut, rissige Haut, Winter, Nacht\n\n**4. Öl:**\n- Nur Öl (z.B. Mandel-Öl, Oliven-Öl, Baby-Öl)\n- **Für:**\n  - **Babys** (Bad, Massage)\n  - **Reinigung** bei starkem Stuhl\n  - Pflaster lösen\n\n**Regel:** Je **trockener die Haut**, desto **mehr Fett**. Je **wärmer das Wetter**, desto **leichter das Produkt**.",
          glossarBegriffe: ["Emulsion"],
        },
      },
    },
    glossarBegriffe: ["Emulsion"],
    karteikarten: [],
  },
];

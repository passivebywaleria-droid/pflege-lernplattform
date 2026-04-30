// CE-02 Situation Frau Yilmaz Spirale 2 — Phase 6: Dokumentieren
// Steps: 4 Kern + 2 Optional · Bloom: B4-B6 · Zeit: ~15-20 Min
// Quelle: content/ce-02/situationen/ls-yilmaz-spirale2/phase-dokumentieren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_YILMAZ_SPIRALE2_DOKUMENTIEREN: SituationsPhase = {
  phaseId: "ls-yilmaz-spirale2-dokumentieren",
  phase: "dokumentieren",
  titel: "Dokumentieren — Wunddokumentation + Expertenstandard S-P-E",
  titelB1: "Dokumentieren — Wundbericht schreiben",
  kontext:
    "Du sitzt am Pflegepult. Der Verband ist gewechselt, das Foto gemacht. Jetzt kommt der Teil, den viele unterschätzen: die schriftliche Dokumentation. Frau Yilmaz hat gefragt: 'Sie schreiben alles auf. Ist das für mich oder für die Akte?' Du hast geantwortet: 'Für beides — wenn ich alles aufschreibe, kann die nächste Schicht genau weitermachen. Und wenn Sie die Akte irgendwann haben wollen, gehört sie Ihnen.'",
  kontextB1:
    "Du sitzt am Computer auf der Station. Der Verband ist fertig. Das Foto ist gemacht. Jetzt schreibst du den Wundbericht. Eine gute Dokumentation ist wichtig — für die nächste Schicht, für den Arzt, für die Qualitätssicherung.",
  kernSteps: [
    // Step 6.0b — Inline-Wissen: Wunddokumentation nach Standard (W-D-E-X-R-Schema)
    // Bevor der Schueler den Wundbericht frei schreibt, braucht er das Schema:
    // Welche Informationen MUESSEN in eine Wunddokumentation?
    {
      stepId: "ce02-yilmaz-s2-doku-00b-wunddoku-schema",
      phase: 6,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "§ 630f BGB",
        "NPUAP/EPUAP/PPPIA 2019",
        "DNQP 2024",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-doku-wunddoku-schema",
      tag: "pflege",
      themaPrimaer: "pflegedokumentation",
      themenSekundaer: ["dekubitus-prophylaxe", "haut"],
      transition: "Schema im Kopf? Dann schreib jetzt den Wundbericht für Frau Yilmaz.",
      contentC1: {
        title: "Wunddokumentation — was muss rein?",
        body: "",
        glossarBegriffe: ["Wunddokumentation", "Wundgrund", "Exsudat", "Wundrand"],
      },
      contentB1: {
        title: "Wundbericht — was muss drin stehen?",
        body: "",
        glossarBegriffe: ["Wunddokumentation"],
      },
      inlineWissen: {
        bausteinRef: "pflegedokumentation-wunddoku-schema",
        storyAufhaenger:
          "Du sitzt am Pflegepult. Gleich schreibst du den Wundbericht für Frau Yilmaz. Aber Fliesstext ohne Struktur ist ein häufiger Fehler. Welche Informationen MUESSEN in eine standardkonforme Wunddokumentation?",
        storyAufhaengerB1:
          "Du sitzt am Computer. Gleich schreibst du den Wundbericht. Welche Informationen müssen drinstehen?",
        kerntext:
          "Eine **vollständige Wunddokumentation** folgt einem festen Schema. Merkhilfe: **L-G-F-E-R-A** (Lage, Grösse, Farbe, Exsudat, Rand, Aktion).\n\n• **L — Lokalisation:** Wo ist die Wunde? (Sakrum, zentral)\n\n• **G — Grösse:** Länge x Breite in cm. Immer mit Masstab messen, nicht schätzen. Fotodokumentation als Ergänzung.\n\n• **F — Farbe / Wundgrund:** Rosa-granulativ (Heilung), Rötlich-feucht (Entzündung), Gelblich (Fibrin/Belag), Schwarz (Nekrose). Prozentualer Anteil bei Mischwunden.\n\n• **E — Exsudat:** Menge (kein/minimal/mässig/viel) + Art (serös/sanguinolent/purulent).\n\n• **R — Wundrand:** Intakt? Mazeriert? Epithelialisierend? Unterminiert?\n\n• **A — Aktion:** Was wurde gemacht? Welcher Verband? Nächster Wechsel wann?\n\n**Plus Pflichtfelder:** Datum, Uhrzeit, Handzeichen. Reaktion der Patientin. Schmerzangabe (NRS). Foto mit Einwilligung.\n\n**Bei Frau Yilmaz heute (Tag 17):** L = Sakrum, G = 1,5x2,5 cm (rückläufig), F = rosa-granulativ, E = minimal/serös, R = nicht mazeriert, A = Hydrokolloid-Verband erneürt.",
        kerntextB1:
          "Ein **Wundbericht** braucht feste Punkte. Merke: **L-G-F-E-R-A**.\n\n• **L** — Wo ist die Wunde? (Steissbein, Mitte)\n\n• **G** — Wie gross? In cm x cm messen.\n\n• **F** — Welche Farbe hat der Wundgrund? (Rosa = Heilung, Rot = Entzündung, Gelb = Belag, Schwarz = totes Gewebe)\n\n• **E** — Wie viel Flüssigkeit? (keine / wenig / mittel / viel)\n\n• **R** — Wie sieht der Rand aus? (aufgeweicht? sauber?)\n\n• **A** — Was hast du gemacht? Welcher Verband? Wann nächster Wechsel?\n\n**Und dazu:** Datum, Uhrzeit, dein Name. Reaktion der Patientin. Schmerz-Zahl (NRS). Foto (nur mit Erlaubnis).",
        faustregel:
          "L-G-F-E-R-A: Lage, Grösse, Farbe, Exsudat, Rand, Aktion. Plus Datum, Schmerz, Foto.",
        faustregelB1:
          "L-G-F-E-R-A: Wo, wie gross, welche Farbe, wie viel Flüssigkeit, wie sieht der Rand aus, was hast du gemacht.",
        spektrum: [
          {
            patientName: "Frau M.",
            situationsId: "frau-m-nacht-sturz",
            hauptfaktor: "Sturzprotokoll vs. Wunddoku",
            kurzbeschreibung:
              "Bei Frau M. hast du ein Sturzprotokoll geschrieben. Ein Wundbericht hat ein anderes Schema — weniger Ereignis-Chronologie, mehr Befund-Systematik (L-G-F-E-R-A).",
          },
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Wunddoku bei Neglect",
            kurzbeschreibung:
              "Bei ihm: Wunde an der betroffenen Seite wird vom Patienten nicht wahrgenommen. Die Dokumentation muss explizit vermerken: 'Patient zeigt keine Schmerzreaktion — Neglect-bedingt, nicht schmerzfrei.'",
          },
          {
            patientName: "Emilia",
            situationsId: "ls-emilia-säugling",
            hauptfaktor: "Wunddoku bei Säuglingen",
            kurzbeschreibung:
              "Haut von Säuglingen ist dünner und heilt anders. Wundgrösse und -farbe verändern sich schneller. Dokumentationsintervalle kürzer (alle 4-6 Stunden statt täglich).",
          },
        ],
        karteikarte: {
          vorderseite:
            "Nenne die 6 Pflicht-Elemente einer standardkonformen Wunddokumentation (Merkhilfe!) und erkläre, was bei Frau Yilmaz heute (Tag 17) jeweils einzutragen wäre.",
          rueckseite:
            "L-G-F-E-R-A:\nL = Sakrum, zentral\nG = 1,5 x 2,5 cm (rückläufig ggue. 2x3 cm Tag 14)\nF = Rosa-granulativ (Heilungszeichen)\nE = Minimal, serös\nR = Nicht mazeriert (verbessert)\nA = Hydrokolloid-Verband erneürt, Foto mit Einwilligung\n\nPlus: Datum + Uhrzeit, Handzeichen, NRS (0 — Neuropathie), Patientin kooperiert.\n\nFaustregel: **L-G-F-E-R-A + Datum + Schmerz + Foto.**",
        },
      },
    },

    // Step 6.1 — Freetext: Wundbericht im Klartext
    {
      stepId: "ce02-yilmaz-s2-doku-01-wundbericht-freitext",
      phase: 6,
      stepType: "freetext",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["§ 630f BGB", "DNQP (2. Aktualisierung 2024)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-s2-doku-wundbericht",
      tag: "pflege",
      contentC1: {
        title: "Wundbericht schreiben — ohne Vorlage",
        body: "Dokumentiere den Verbandwechsel von heute (Tag 17 post-OP) in 5-7 Sätzen. Nutze die WHO-Kriterien für Wundbeschreibung. Was nicht dokumentiert ist, gilt als nicht durchgeführt. (§ 630f BGB)",
        glossarBegriffe: [
          "§ 630f BGB",
          "Wunddokumentation",
          "Verbandwechsel",
        ],
      },
      contentB1: {
        title: "Wundbericht schreiben",
        body: "Schreibe einen kurzen Wundbericht für heute (Tag 17). 5-6 Sätze. Was hast du gesehen? Was hast du gemacht? Was machst du als nächstes?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Schreibe den Wundbericht für den Verbandwechsel heute (Tag 17 post-OP). 5-7 Sätze, WHO-Kriterien.",
        musterantwort:
          "23.04.2026, 08:15 Uhr, Verbandwechsel Wunde Sakrum. Wundlokalisation: Sakrum, zentral. Wundgröße: 1,5 cm × 2,5 cm (rückläufig gegenüber Erstbefund 2×3 cm am 20.04.2026). Wundgrund: rosa-granulativ, kein nekrotischer Anteil. Exsudat: minimal, serös. Wundrand: nicht mazeriert, leichte Epithelialisierung erkennbar. Patientin kooperiert gut, kein Schmerzausdruck (periphere Neuropathie bekannt). Wundauflage: Hydrokolloid-Verband neu aufgelegt. Fotodokumentation erfolgt (mit Einwilligung Patientin). Nächster Verbandwechsel: 24.04.2026, Frühschicht.",
        bewertungskriterien: [
          "Datum und Uhrzeit vorhanden",
          "Wundlokalisation benannt",
          "Wundgröße in cm×cm angegeben",
          "Wundgrund-Farbe beschrieben",
          "Exsudat-Menge und -Art erwähnt",
          "Wundrand-Zustand beschrieben",
          "Wundauflage erwähnt",
          "Reaktion der Patientin erwähnt",
          "Nächster Verbandwechsel geplant",
        ],
      },
    },

    // Inline-Wissen: Qualitaetsdimensionen und DNQP-Expertenstandard
    {
      stepId: "ce02-yilmaz-s2-doku-01b-qualität-dnqp",
      phase: 6,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Donabedian A. (1966)", "DNQP 2024"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-doku-01b-qualität-dnqp",
      tag: "pflege",
      themaPrimaer: "pflegedokumentation",
      themenSekundaer: ["dekubitus-prophylaxe"],
      transition: "Qualitätsbegriffe klar. Ordne sie in die Matrix.",
      contentC1: {
        title: "Qualitätsdimensionen und DNQP-Expertenstandard",
        body: "",
        glossarBegriffe: ["Strukturqualität", "Prozessqualität", "Ergebnisqualität", "Donabedian", "DNQP", "Expertenstandard", "Struktur-Kriterium"],
      },
      contentB1: {
        title: "Qualität prüfen mit dem DNQP",
        body: "",
        glossarBegriffe: ["DNQP", "Expertenstandard"],
      },
      inlineWissen: {
        bausteinRef: "pflegedokumentation-dnqp",
        storyAufhaenger: "Du hast den Wundbericht geschrieben. Hat die Pflege dem Standard entsprochen? Sieben Begriffe.",
        storyAufhaengerB1: "Hat die Pflege dem Standard entsprochen?",
        kerntext: "**DNQP** = Deutsches Netzwerk für Qualitätsentwicklung in der Pflege. Gibt **Expertenstandards** heraus. Dekubitusprophylaxe 2024 hat **Struktur-Kriterien** (S), Prozess-Kriterien (P), Ergebnis-Kriterien (E).\n\n**Struktur-Kriterium** = Was muss vorhanden sein?\n\n**Strukturqualität** = Voraussetzungen erfüllt? **Prozessqualität** = Maßnahmen durchgeführt? **Ergebnisqualität** = Resultat? (Donabedian 1966)\n\nBei Frau Yilmaz: S teilweise, P teilweise, E Kat. II aber heilend.",
        kerntextB1: "**DNQP** = Organisation für Pflege-Standards. **Expertenstandard** = was mindestens gemacht werden muss.\n**Struktur-Kriterium** = Was muss da sein?\n**Strukturqualität** = Genug da? **Prozessqualität** = Gemacht? **Ergebnisqualität** = Ergebnis?",
        faustregel: "DNQP-Expertenstandard: S + P + E. Systemanalyse, kein Schuld-Framing.",
        faustregelB1: "DNQP = Standard. Struktur + Prozess + Ergebnis prüfen.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Was sind die 3 DNQP-Dimensionen bei Frau Yilmaz?",
          rueckseite: "DNQP 2024: S-Kriterien (Kompetenz, Material), P-Kriterien (Inspektion, Umlagerung), E-Kriterien (Dekubitusfreiheit/Verbesserung). Donabedian: Systemanalyse.",
        },
      },
    },

    // Step 6.2 — Matrix (3×3): Donabedian Qualitätsprüfung
    {
      stepId: "ce02-yilmaz-s2-doku-02-spe-qualitätscheck",
      phase: 6,
      stepType: "matrix",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["Donabedian A. (1966)"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-yilmaz-s2-doku-donabedian",
      tag: "pflege",
      contentC1: {
        title: "Donabedian-Qualitätsprüfung für den Fall Frau Yilmaz",
        body: "9 Aussagen in eine 3×3-Matrix einordnen: S-P-E × positiv/negativ/offen. Bloom 5 — systematische Qualitätsbewertung. Quelle: Donabedian A. (1966)",
        glossarBegriffe: [
          "Strukturqualität",
          "Prozessqualität",
          "Ergebnisqualität",
          "Donabedian",
        ],
      },
      contentB1: {
        title: "S-P-E-Bewertung für den Fall Frau Yilmaz",
        body: "Ordne die Aussagen in die Tabelle ein: S = Struktur, P = Prozess, E = Ergebnis. Und: positiv, negativ oder offen?",
        glossarBegriffe: ["Donabedian"],
      },
      question: {
        fragetext:
          "Ordne die 9 Aussagen in die S-P-E-Matrix (Zeilen) × positiv/negativ/offen (Spalten) ein.",
        matrix: {
          instruction:
            "Ordne jede Aussage dem richtigen Quadranten zu: Achse X = Bewertung (positiv/negativ/offen), Achse Y = Qualitätsdimension (Struktur/Prozess/Ergebnis).",
          axisX: {
            label: "Bewertung",
            low: "Positiv",
            high: "Negativ / Offen",
          },
          axisY: {
            label: "Qualitätsdimension",
            low: "Ergebnis (E)",
            high: "Struktur (S)",
          },
          items: [
            {
              id: "s_pos",
              text: "Weichlagerungsmatratze war vorhanden",
              correctQuadrant: 1,
            },
            {
              id: "s_neg",
              text: "Pflegepersonal hatte nicht immer Zeit für tägliche Hautinspektion",
              correctQuadrant: 2,
            },
            {
              id: "s_off",
              text: "Fortbildungsstand der Pflegenden zu Dekubitus-Prophylaxe unklar",
              correctQuadrant: 3,
            },
            {
              id: "p_pos",
              text: "Umlagerung wurde dokumentiert und größtenteils durchgeführt",
              correctQuadrant: 1,
            },
            {
              id: "p_neg",
              text: "Rötung wurde von Kollegin nicht dokumentiert",
              correctQuadrant: 2,
            },
            {
              id: "p_off",
              text: "Patienteninformation zu Dekubitusrisiko wurde nicht dokumentiert",
              correctQuadrant: 3,
            },
            {
              id: "e_pos",
              text: "Wunde heilt nach 3 Tagen sichtbar (Granulation, Größe rückläufig)",
              correctQuadrant: 1,
            },
            {
              id: "e_neg",
              text: "Dekubitus Kategorie II ist entstanden trotz Prophylaxeplan",
              correctQuadrant: 2,
            },
            {
              id: "e_off",
              text: "Langzeitverlauf nach Entlassung und Compliance zuhause unbekannt",
              correctQuadrant: 3,
            },
          ],
        },
      },
    },

    // Step 6.3 — Matching: Expertenstandard DNQP 2024 anwenden
    {
      stepId: "ce02-yilmaz-s2-doku-03-expertenstandard-anwenden",
      phase: 6,
      stepType: "matching",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP (2. Aktualisierung 2024)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-s2-doku-dnqp",
      tag: "pflege",
      contentC1: {
        title: "Expertenstandard DNQP 2024 — Kriterien abgleichen",
        body: "5 Struktur-Kriterien des Expertenstandards Dekubitusprophylaxe (DNQP 2. Aktualisierung 2024) mit dem Fall Frau Yilmaz abgleichen. Ordne jedem Kriterium die korrekte Bewertung zu. Bloom 4-5.",
        glossarBegriffe: ["DNQP", "Expertenstandard", "Struktur-Kriterium"],
      },
      contentB1: {
        title: "Expertenstandard — was wurde erfüllt?",
        body: "5 Kriterien aus dem Expertenstandard. Was hat die Pflege bei Frau Yilmaz erfüllt — und was nicht?",
        glossarBegriffe: ["DNQP", "Expertenstandard"],
      },
      question: {
        fragetext:
          "Ordne jedem DNQP-Kriterium die richtige Bewertung aus dem Fall Frau Yilmaz zu: erfüllt / teilweise erfüllt / nicht erfüllt.",
        matchingPairs: [
          {
            left:
              "S1: Pflegende mit Kompetenz zur Risiköinschätzung",
            right:
              "Teilweise erfüllt — Braden-Skala wurde regelmäßig ausgefüllt, aber: Spätschicht-Kollegin hat Rötung wahrgenommen, ohne sie als Kategorie I zu klassifizieren oder zu dokumentieren → Wahrnehmungs-/Beurteilungskompetenz nicht reliabel sichergestellt",
          },
          {
            left:
              "S2: Kontinuierliche Risiköinschätzung mit validiertem Instrument",
            right:
              "Teilweise erfüllt — Braden-Score wurde erhoben, aber ein Tag ohne Eintragung in der Akte",
          },
          {
            left:
              "P1: Maßnahmenplan bei erkanntem Risiko",
            right:
              "Erfüllt — Positionierungsplan war dokumentiert (Spirale 1 + jetzt aktualisiert)",
          },
          {
            left:
              "P2: Regelmäßige Hautinspektion",
            right:
              "Nicht erfüllt — Kollegin hat Rötung gesehen aber nicht dokumentiert, Tag 13 lt. Akte ohne Eintragung",
          },
          {
            left:
              "E1: Dekubitusfreiheit oder Verbesserung des Hautbefundes",
            right:
              "Teilweise erfüllt — Kategorie II entstanden, aber jetzt heilend. Kategorie III/IV vermieden.",
          },
        ],
      },
    },

    // Step 6.4 — Reflection (B6): Abschlussreflexion Spirale 2
    {
      stepId: "ce02-yilmaz-s2-doku-04-spirale-vergleich",
      phase: 6,
      stepType: "reflection",
      bloomLevel: 6,
      kompetenzbereich: "I.1",
      quellen: ["DNQP (2. Aktualisierung 2024)", "Donabedian A. (1966)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-s2-doku-abschluss",
      tag: "pflege",
      contentC1: {
        title: "Abschlussreflexion Spirale 2 — Was hast du dazugelernt?",
        body: "Du erinnerst dich an Frau Yilmaz aus Spirale 1 — damals Dekubitus Kategorie I, Prophylaxeplanung. Jetzt Spirale 2: Kategorie II, versorgen, evaluieren, dokumentieren. Schreibe 3-5 Sätze: Was hast du in dieser Situation gelernt, das über Spirale 1 hinausgeht?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was hast du heute gelernt?",
        body: "In Spirale 1 hast du Kategorie 1 gelernt. Heute war Kategorie 2. Schreibe 3-4 Sätze: Was ist neu für dich? Was nimmst du mit für die Praxis?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Abschlussreflexion Spirale 2: Was hast du gelernt das über Spirale 1 hinausgeht? Was nimmst du für die Praxis mit?",
        reflection: {
          prompt:
            "Schreibe 3-5 Sätze. Beziehe dich auf: 1) Kategorie II vs. I (aus Prophylaxe wird Therapie), 2) Systemanalyse (Dekubitus als Systemversagen), 3) Dokumentation als Qualitätssicherung, 4) Patientenkommunikation angepasst an Sprache und Kultur.",
          placeholder:
            "In Spirale 1 habe ich gelernt … In Spirale 2 ist neu … Für die Praxis nehme ich mit … Besonders wichtig war für mich …",
          systemPrompt:
            "Bewerte die Reflexion: Hat der Schüler den Unterschied Kategorie I vs. II als Schwellenübergang erkannt (aus Prophylaxe wird Therapie)? Hat er den Systemcharakter des Dekubitus-Entstehens beschrieben (nicht Schuld einer Person)? Hat er Dokumentation als Qualitätssicherung erkannt? Hat er interkulturelle Kompetenz (Honig-Zitat) als Lernmoment erwähnt? Feedback im Sandwich-Prinzip. Lob für Bloom-5/6-Reflexion.",
        },
      },
    },
  ],
  optionaleSteps: [
    // Opt 6.5 — CarePlan (Lückentext-Variante): Wundbericht Textbausteine (B1-Schüler)
    {
      stepId: "ce02-yilmaz-s2-doku-opt-01-textbausteine-vorlage",
      phase: 6,
      stepType: "careplan",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["§ 630f BGB"],
      track: "vertiefung",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-s2-doku-vorlage",
      tag: "pflege",
      contentC1: {
        title: "Wundbericht mit Vorlage — B1-Unterstützung",
        body: "Wundbericht mit vorgegebenen Textbausteinen vervollständigen. Für Schüler die noch Unterstützung bei freiem Schreiben brauchen.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Wundbericht ausfüllen — mit Hilfe",
        body: "Fülle den Wundbericht aus. Die Felder helfen dir dabei.",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Vervollständige den Wundbericht.",
        careplan: {
          patientName: "Frau Yilmaz",
          situation:
            "Verbandwechsel Tag 17 post-OP, Dekubitus Kategorie II am Sakrum.",
          situationB1:
            "Verbandwechsel heute (Tag 17 nach Hüft-OP). Wunde am Steißbein.",
          steps: [
            {
              phase: "problem",
              prompt: "Datum und Uhrzeit:",
              promptB1: "Wann hast du den Verbandwechsel gemacht?",
              musterantwort: "23.04.2026, 08:15 Uhr",
            },
            {
              phase: "ziel",
              prompt: "Wundgröße (cm × cm):",
              promptB1: "Wie groß ist die Wunde?",
              options: [
                { text: "1,5 cm × 2,5 cm", isCorrect: true, explanation: "Aktüller Befund Tag 17." },
                { text: "2 cm × 3 cm", isCorrect: false, explanation: "Das war der Befund bei Entdeckung (Tag 14). Heute ist die Wunde kleiner." },
                { text: "3 cm × 4 cm", isCorrect: false, explanation: "Falsch — die Wunde ist kleiner geworden, nicht größer." },
              ],
            },
            {
              phase: "massnahme",
              prompt: "Wundgrund (Farbe):",
              promptB1: "Welche Farbe hat der Wundgrund heute?",
              options: [
                { text: "Rosa-granulativ", isCorrect: true, explanation: "Granulationsgewebe = Heilungszeichen. Rosa-rot ist positiv." },
                { text: "Gelblich", isCorrect: false, explanation: "Gelblich = Fibrinbelag oder eitriges Exsudat — das ist bei Frau Yilmaz nicht der Fall." },
                { text: "Rötlich-feucht (wie bei Erstbefund)", isCorrect: false, explanation: "Das war Tag 14. Heute sieht die Wunde besser aus." },
              ],
            },
            {
              phase: "durchfuehrung",
              prompt: "Wundauflage verwendet:",
              promptB1: "Welchen Verband hast du genommen?",
              musterantwort: "Hydrokolloid-Verband (wie angeordnet von Dr. Kirchner)",
            },
            {
              phase: "evaluation",
              prompt: "Nächster Verbandwechsel geplant:",
              promptB1: "Wann soll der nächste Verbandwechsel sein?",
              musterantwort: "24.04.2026, Frühschicht",
            },
          ],
        },
      },
    },

    // Opt 6.6 — Text (stepbystep): Meldepflicht bei Dekubitus (mittlere/starke Schüler)
    {
      stepId: "ce02-yilmaz-s2-doku-opt-02-meldepflicht",
      phase: 6,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2. Aktualisierung 2024)",
        "§ 115 SGB XI — Pflegequalität",
      ],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-doku-meldepflicht",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Wann muss ein Dekubitus gemeldet werden?",
        body: "Meldewege: 1) Intern: Stationsleitung + Qualitätsmanagement (immer, bei Dekubitus Kategorie II-IV). 2) Extern stationäre Pflege (Pflegeheim): Qualitätsprüfung MDK, kritisches Ereignis → Meldepflicht nach § 115 SGB XI. 3) Akuthaus (wie bei Frau Yilmaz): keine externe Meldepflicht, aber internes Qualitätsereignis. Unterschied: In der vollstationären Pflege ist ein neu entstandener Dekubitus ein schwerwiegendes Qualitätsereignis mit Meldepflicht. Im Akutkrankenhaus gilt stattdessen: interne Fehler-Dokumentation + CIRS (Critical Incident Reporting System).",
        glossarBegriffe: [
          "CIRS",
          "Critical Incident Reporting System",
          "Qualitätssicherung",
          "§ 115 SGB XI",
        ],
      },
      contentB1: {
        title: "Wann meldet man einen Dekubitus?",
        body: "1) Immer intern melden — der Stationsleitung sagen. 2) Im Pflegeheim: Es gibt eine externe Meldepflicht (MDK). 3) Im Krankenhaus (wie bei Frau Yilmaz): keine externe Meldepflicht — aber das Krankenhaus hat ein internes System (CIRS). CIRS bedeutet: Jeder Fehler oder Fast-Fehler wird anonym gemeldet, damit alle daraus lernen.",
        glossarBegriffe: ["CIRS"],
      },
    },
  ],
  geschaetzteDauer: 18,
};

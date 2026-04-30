// CE-02 Situation Frau Yilmaz Spirale 2 — Phase 5: Evaluieren
// Steps: 4 Kern + 2 Optional · Bloom: B4-B6 · Zeit: ~15-20 Min
// Quelle: content/ce-02/situationen/ls-yilmaz-spirale2/phase-evaluieren.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_YILMAZ_SPIRALE2_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-yilmaz-spirale2-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren — Wundstatus nach 3 Tagen + kritische Reflexion",
  titelB1: "Evaluieren — Wie ist die Wunde nach 3 Tagen?",
  kontext:
    "Drei Tage später. Du bist wieder im Frühdienst und machst den Verbandwechsel bei Frau Yilmaz. Szenario A (Default): Die Wunde zeigt gute Granulationszeichen — rosaroter Wundgrund, Wundrand nicht mehr mazeriert, Größe leicht rückläufig auf ~1,5×2,5 cm. Frau Yilmaz hat die 2-stündliche Umlagerung akzeptiert. Sevim hat ihr erklärt warum. Die Physiotherapeutin hat die Mobilisation intensiviert. Frau Yilmaz sagt: 'Ich will nach Hause. Mustafa kann nicht gut kochen. Er braucht mich.' Sie ist in 4 Tagen entlassungsbereit — wenn die Wunde weiter heilt und die Entlassungsplanung klappt.",
  kontextB1:
    "Drei Tage später. Du machst wieder den Verbandwechsel bei Frau Yilmaz. Die Wunde sieht besser aus: Der Wundgrund ist rosa-rot (gut), der Rand ist nicht mehr aufgeweicht. Die Wunde ist etwas kleiner: ~1,5×2,5 cm. Frau Yilmaz hat das Umlagern jetzt akzeptiert. Sie sagt: 'Ich will nach Hause. Mustafa kann nicht gut kochen. Er braucht mich.'",
  kernSteps: [
    // Inline-Wissen: Wundheilungsphasen und Granulationsgewebe
    {
      stepId: "ce02-yilmaz-s2-eval-00b-wundheilung",
      phase: 5,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP/PPPIA 2019"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-eval-00b-wundheilung",
      tag: "krankheitslehre",
      themaPrimaer: "dekubitus-prophylaxe",
      themenSekundaer: ["haut"],
      transition: "Wundheilungsphasen im Kopf. Vergleiche Tag 14 mit Tag 17.",
      contentC1: {
        title: "Wundheilungsphasen und Granulationsgewebe",
        body: "",
        glossarBegriffe: ["Granulationsgewebe", "Exsudat", "Exsudationsphase", "Resorptionsphase", "Proliferationsphase", "Regenerationsphase"],
      },
      contentB1: {
        title: "Wie heilt eine Wunde? 4 Phasen",
        body: "",
        glossarBegriffe: ["Granulationsgewebe", "Exsudat"],
      },
      inlineWissen: {
        bausteinRef: "dekubitus-prophylaxe-wundheilung",
        storyAufhaenger: "Die Wunde sieht besser aus. Aber was heißt besser? Sechs Begriffe helfen.",
        storyAufhaengerB1: "Die Wunde sieht besser aus. Sechs Begriffe helfen.",
        kerntext: "**Granulationsgewebe** = neues Heilungsgewebe. Rosa-rot, körnig. Zeichen der Heilung.\n\n**Exsudat** = Wundflüssigkeit. Serös (klar) = normal. Purulent (eitrig) = Infektion.\n\n**4 Wundheilungsphasen:**\n\u2022 **Exsudationsphase** (Tag 1-3) \u2014 Entzündung, Reinigung.\n\u2022 **Resorptionsphase** (Tag 3-7) \u2014 Abbau toten Gewebes.\n\u2022 **Proliferationsphase** (Tag 7-21) \u2014 Granulation, Wunde wird kleiner. **Frau Yilmaz ist hier (Tag 17).**\n\u2022 **Regenerationsphase** (Wochen-Monate) \u2014 Narbe reift.",
        kerntextB1: "**Granulationsgewebe** = neues Heilungsgewebe. Rosa-rot. Wunde heilt.\n**Exsudat** = Flüssigkeit aus Wunde. Klar = ok. Eitrig = schlecht.\n\n**4 Phasen:** Phase 1: Entzündung. Phase 2: Aufraäumen. Phase 3: Heilgewebe wächst (= Frau Yilmaz). Phase 4: Narbe.",
        faustregel: "Granulation = rosa = heilt. 4 Phasen: Exsudation \u2192 Resorption \u2192 Proliferation \u2192 Regeneration.",
        faustregelB1: "Rosa Gewebe = heilt. Frau Yilmaz ist in Phase 3.",
        spektrum: [],
        karteikarte: {
          vorderseite: "In welcher Phase ist Frau Yilmaz (Tag 17)?",
          rueckseite: "Proliferationsphase (Tag 7-21): Granulationsgewebe, Wunde wird kleiner, Exsudat minimal.",
        },
      },
    },

    // Step 5.1 — Comparison: Wundstatus Tag 14 vs. Tag 17
    {
      stepId: "ce02-yilmaz-s2-eval-01-wundstatus-beurteilen",
      phase: 5,
      stepType: "comparison",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP/PPPIA (2019)", "DNQP (2. Aktualisierung 2024)"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-yilmaz-s2-eval-wundverlauf",
      tag: "krankheitslehre",
      contentC1: {
        title: "Wundverlauf beurteilen — Tag 14 vs. Tag 17",
        body: "Vergleiche den Wundbefund bei Entdeckung (Tag 14) mit dem heutigen Befund (Tag 17). Bloom 4 — klinisches Urteilsvermögen.",
        glossarBegriffe: ["Granulation", "Granulationsgewebe", "Exsudat"],
      },
      contentB1: {
        title: "Vergleich: Wunde am Anfang und heute",
        body: "Vergleiche wie die Wunde bei Entdeckung war und wie sie heute ist.",
        glossarBegriffe: ["Granulation"],
      },
      question: {
        fragetext:
          "Vergleiche Tag 14 (Entdeckung) mit Tag 17 (heute) und bewerte den Heilungsverlauf.",
        comparison: {
          instruction:
            "Vergleiche beide Zeitpunkte. Wähle am Ende die richtige Einschätzung.",
          columns: [
            { label: "Tag 14 — Entdeckung" },
            { label: "Tag 17 — heute" },
          ],
          rows: [
            {
              criterion: "Wundgröße",
              values: ["2 cm × 3 cm", "1,5 cm × 2,5 cm — rückläufig"],
              valuesB1: ["2×3 cm", "1,5×2,5 cm — kleiner geworden"],
              highlight: 1,
            },
            {
              criterion: "Wundgrund",
              values: [
                "Rötlich-feucht (Entzündungsphase)",
                "Rosa-granulativ (Granulationsgewebe aufgebaut)",
              ],
              valuesB1: [
                "Rötlich-feucht",
                "Rosa — Heilungsgewebe wächst",
              ],
              highlight: 1,
            },
            {
              criterion: "Wundrand",
              values: ["Mazeriert — aufgeweicht", "Nicht mazeriert — besser"],
              valuesB1: ["Aufgeweicht", "Nicht mehr aufgeweicht"],
              highlight: 1,
            },
            {
              criterion: "Exsudat",
              values: ["Wenig", "Minimal — deutlich weniger"],
              valuesB1: ["Wenig Flüssigkeit", "Fast keine Flüssigkeit mehr"],
              highlight: 1,
            },
            {
              criterion: "Schmerz (Frau Yilmaz)",
              values: ["Keiner — Neuropathie", "Keiner — Neuropathie"],
              valuesB1: ["Kein Schmerz", "Kein Schmerz"],
            },
            {
              criterion: "Einschätzung Heilungsverlauf",
              values: ["—", "Positiv: Granulation erkennbar, Größe rückläufig ✓"],
              valuesB1: ["—", "Positiv: Wunde heilt gut ✓"],
              highlight: 1,
            },
          ],
        },
      },
    },

    // Inline-Wissen: Donabedian \u2014 Struktur vs. Prozess
    {
      stepId: "ce02-yilmaz-s2-eval-01b-donabedian-ebenen",
      phase: 5,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Donabedian A. (1966)"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-eval-01b-donabedian-ebenen",
      tag: "pflege",
      themaPrimaer: "pflegeprozess",
      themenSekundaer: ["dekubitus-prophylaxe"],
      transition: "Ebenen klar. Bewerte die Luecke.",
      contentC1: {
        title: "Donabedian \u2014 Struktur vs. Prozess",
        body: "",
        glossarBegriffe: ["Strukturebene", "Prozessebene"],
      },
      contentB1: {
        title: "Struktur und Prozess \u2014 Unterschied",
        body: "",
        glossarBegriffe: ["Strukturebene", "Prozessebene"],
      },
      inlineWissen: {
        bausteinRef: "pflegeprozess-donabedian-ebenen",
        storyAufhaenger: "Am Tag 15: nur 5x statt 8x umgelagert. Struktur- oder Prozessproblem?",
        storyAufhaengerB1: "Nur 5x umgelagert statt 8x. Warum?",
        kerntext: "**Strukturebene** = Rahmenbedingungen: Personal, Material, Organisation. Wenn zu wenig Personal = Strukturproblem.\n\n**Prozessebene** = Tatsächliches Handeln: Umlagerung, Dokumentation. Wenn Personal da aber nicht gemacht = Prozessproblem.\n\nMeistens beide zusammen. Lösung liegt im System, nicht bei Einzelpersonen.",
        kerntextB1: "**Strukturebene** = Was ist da? (Personal, Material).\n**Prozessebene** = Was wird gemacht? (Umlagerung, Doku).\nMeistens beides zusammen. Lösung = System ändern.",
        faustregel: "Strukturebene = Rahmenbedingungen. Prozessebene = tatsächliches Handeln. Meistens beides zusammen.",
        faustregelB1: "Struktur = Was ist da? Prozess = Was wird gemacht?",
        spektrum: [],
        karteikarte: {
          vorderseite: "Tag 15: nur 5x umgelagert. Warum?",
          rueckseite: "Personalknappheit = Strukturproblem. Nicht gemacht obwohl Personal da = Prozessproblem. Meistens beides (Donabedian 1966).",
        },
      },
    },

    // Step 5.2 — MC (Multiple-Choice): Umlagerungs-Compliance und Schlussfolgerungen
    {
      stepId: "ce02-yilmaz-s2-eval-02-umlagerung-compliance",
      phase: 5,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Donabedian A. (1966)", "DNQP (2. Aktualisierung 2024)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-yilmaz-s2-eval-compliance",
      tag: "pflege",
      contentC1: {
        title: "Umlagerungs-Lücke — Schlussfolgerungen",
        body: "Die Pflegedokumentation der letzten 3 Tage zeigt: Am Tag 15 wurde Frau Yilmaz nur 5× statt 8× umgelagert. Mehrere Antworten sind möglich. Bloom 4 — mehrschichtige Kausalität.",
        glossarBegriffe: ["Donabedian", "Strukturebene", "Prozessebene"],
      },
      contentB1: {
        title: "Nicht genug umgelagert — was folgerst du?",
        body: "Am Tag 15 wurde Frau Yilmaz nur 5 Mal umgelagert statt 8 Mal. Was bedeutet das? Mehrere Antworten können richtig sein.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Die Pflegedokumentation zeigt: Am Tag 15 nur 5× statt 8× Umlagerung (Schichtlücke + Personalengpass). Welche Schlussfolgerungen sind richtig? (Mehrfachauswahl möglich)",
        multiSelect: true,
        optionen: [
          {
            text: "Das Ergebnis ist trotzdem gut — also war die 5-malige Umlagerung ausreichend.",
            isCorrect: false,
            explanation:
              "FALSCH — Erfolg trotz Prophylaxelücke bedeutet nicht, dass die Lücke unbedeutend war. Bei einem anderen Patienten (z.B. schlechtere Durchblutung, höheres Gewicht) hätte dieselbe Lücke zu Verschlimmerung geführt. Evidenz gilt nicht rückwärts.",
            explanationB1:
              "Falsch. Gut gegangen bedeutet nicht richtig gemacht. Bei anderen Patienten wäre dieselbe Lücke schlimmer.",
          },
          {
            text: "Die Lücke muss dokumentiert und an die Stationsleitung gemeldet werden.",
            isCorrect: true,
            explanation:
              "RICHTIG — Transparenz und Qualitätssicherung. Die Dokumentationslücke ist ein Qualitätsereignis, das systematisch ausgewertet werden muss — nicht vertuscht. (Prozessebene Donabedian)",
            explanationB1:
              "Richtig. Die Lücke muss aufgeschrieben und der Stationsleitung gemeldet werden. Das ist Qualitätssicherung.",
          },
          {
            text: "Zukünftige Personalplanung sollte Prophylaxen als nicht-unterbrechbaren Standard sicherstellen.",
            isCorrect: true,
            explanation:
              "RICHTIG — Strukturebene (Donabedian): Wenn Personalknappheit dazu führt, dass Prophylaxen nicht durchgeführt werden, ist das ein Systemfehler auf Strukturebene. Einzelpersonen sind nicht schuld — das System muss sich ändern.",
            explanationB1:
              "Richtig. Wenn zu wenig Personal da ist, können Maßnahmen nicht durchgeführt werden. Das ist ein Problem des Systems — nicht einer Person.",
          },
          {
            text: "Frau Yilmaz hätte die Lücke selber schließen können durch Eigenbewegung.",
            isCorrect: false,
            explanation:
              "FALSCH in der Grundannahme — Eigenressource ist zwar real (Frau Yilmaz kann sich begrenzt bewegen), aber die primäre Verantwortung für Dekubitusprophylaxe liegt bei der Pflege, nicht bei der Patientin. Eigenressourcen ergänzen die Prophylaxe — sie ersetzen nicht die Pflegepflicht. Die Luecke auf Eigenbewegung abzuwälzen ist ein häufiger Denkfehler.",
            explanationB1:
              "Falsch gedacht. Frau Yilmaz kann sich ein bisschen selbst drehen — aber das ist nicht ihre Aufgabe. Prophylaxe ist Aufgabe der Pflege. Man kann die Luecke nicht auf die Patientin abwälzen.",
          },
        ],
      },
    },

    // Step 5.2b — Inline-Wissen: Pflegedokumentation als Qualitaetssicherung (Wiederbegegnung)
    // Pflegedokumentation wurde bei Frau M. zentral gelehrt. Hier Wiederbegegnung:
    // Bei Frau Yilmaz zeigt sich, was passiert wenn Dokumentation lueckenhaft ist.
    {
      stepId: "ce02-yilmaz-s2-eval-02b-doku-wiederbegegnung",
      phase: 5,
      stepType: "inlineWissen",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "§ 630f BGB — Dokumentationspflicht",
        "DNQP 2024 — Expertenstandard Dekubitusprophylaxe",
        "Donabedian A. (1966)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-eval-doku-qualität",
      tag: "pflege",
      themaPrimaer: "pflegedokumentation",
      themenSekundaer: ["dekubitus-prophylaxe"],
      transition: "Mit diesem Bild im Kopf: Was ist dein Fazit zu Spirale 2?",
      contentC1: {
        title: "Dokumentation als Qualitätssicherung — was bei Frau Yilmaz schiefging",
        body: "",
        glossarBegriffe: ["§ 630f BGB", "Beweislastumkehr", "Prozessqualität"],
      },
      contentB1: {
        title: "Warum ist Aufschreiben so wichtig?",
        body: "",
        glossarBegriffe: ["§ 630f BGB"],
      },
      inlineWissen: {
        bausteinRef: "pflegedokumentation-qualitätssicherung",
        wiederbegegnung: {
          basisBausteinId: "pflegedokumentation-grundlagen",
          basisPatient: "Frau M.",
          vertiefung:
            "Bei Frau M. hast du das Sturzprotokoll geschrieben — Dokumentation als rechtliche Absicherung (§ 630f BGB). Bei Frau Yilmaz siehst du jetzt die andere Seite: Was passiert, wenn NICHT dokumentiert wird. Die Kollegin hat die Roetung gesehen — aber nicht aufgeschrieben. Folge: Kein Befund in der Akte, kein Handlungsauftrag für die nächste Schicht, 12-24 Stunden Verzögerung bis zur Entdeckung des offenen Dekubitus. Dokumentation ist nicht nur Recht — sie ist Prozessqualität (Donabedian).",
          vertiefungB1:
            "Bei Frau M. hast du das Sturzprotokoll geschrieben — weil alles aufgeschrieben werden muss (§ 630f BGB). Bei Frau Yilmaz siehst du jetzt: Was passiert, wenn man NICHT aufschreibt. Die Kollegin hat die Roetung gesehen — aber nicht geschrieben. Folge: 12-24 Stunden später erst die offene Wunde entdeckt. Aufschreiben ist nicht nur Pflicht — es schützt den Patienten.",
        },
        storyAufhaenger:
          "Du hast gerade gesehen: Am Tag 15 wurde nur 5x statt 8x umgelagert. Und die Roetung wurde gestern gesehen aber nicht dokumentiert. Beides zeigt: Dokumentation ist nicht Papierkram — sie ist der Mechanismus, der Qualität sicherstellt.",
        storyAufhaengerB1:
          "Am Tag 15 wurde nur 5 Mal umgelagert statt 8 Mal. Und die Roetung gestern — gesehen aber nicht aufgeschrieben. Was folgt daraus?",
        kerntext:
          "**Dokumentation hat 3 Funktionen gleichzeitig:**\n\n• **Rechtlich:** Was nicht dokumentiert ist, gilt als nicht durchgeführt (§ 630f BGB). Beweislastumkehr: Die Einrichtung muss beweisen, dass die Maßnahme stattfand.\n\n• **Kommunikativ:** Die nächste Schicht weiss nur, was in der Akte steht. Mündliche Übergabe allein reicht nicht — bei Schichtwechsel gehen bis zu 40 % der Informationen verloren.\n\n• **Qualitätssichernd:** Dokumentation macht Prozessqualität messbar (Donabedian 1966). Wurde der Umlagerungsrhythmus eingehalten? Wurde die Hautinspektion durchgeführt? Ohne Dokumentation: nicht nachweisbar.\n\n**Bei Frau Yilmaz konkret:**\n1. Roetung gesehen → nicht dokumentiert → nächste Schicht wusste nichts → 12-24h Verzögerung.\n2. Tag 15: nur 5x umgelagert → Luecke in Doku sichtbar → Qualitätsereignis.\n3. Wundbefund Tag 14: korrekt dokumentiert → Verlaufsbeurteilung Tag 17 möglich.",
        kerntextB1:
          "**Dokumentation hat 3 Aufgaben:**\n\n• **Recht:** Was nicht geschrieben ist, gilt als nicht gemacht (§ 630f BGB).\n\n• **Kommunikation:** Die nächste Schicht weiss nur, was in der Akte steht.\n\n• **Qualität:** Man kann prüfen: Wurde alles gemacht? Ohne Dokumentation: nicht prüfbar.\n\n**Bei Frau Yilmaz:**\n1. Roetung nicht aufgeschrieben → nächste Schicht wusste nichts → Verzögerung.\n2. Tag 15: nur 5x umgelagert statt 8x → Luecke sichtbar.\n3. Wundbefund Tag 14: aufgeschrieben → Tag 17 kann man vergleichen.",
        faustregel:
          "Dokumentation ist dreifach wirksam: rechtlich, kommunikativ, qualitätssichernd. Was nicht drinsteht, existiert nicht.",
        faustregelB1:
          "Was nicht aufgeschrieben ist, existiert nicht. Dokumentation schützt Patienten und Pflegekräfte.",
        spektrum: [
          {
            patientName: "Frau M.",
            situationsId: "frau-m-nacht-sturz",
            hauptfaktor: "Sturzprotokoll",
            kurzbeschreibung:
              "Bei ihr hast du das Sturzprotokoll geschrieben. Dokumentation als Erstversorgung: Uhrzeit, Sturzmechanismus, Verletzungen, VZ, Maßnahmen. Ohne Protokoll: kein Nachweis der korrekten Erstversorgung.",
          },
          {
            patientName: "Herr Nguyen",
            situationsId: "ls-nguyen-stoma",
            hauptfaktor: "Stoma-Dokumentation",
            kurzbeschreibung:
              "Stoma-Versorgung braucht exakte Dokumentation: Stomagrösse, Hautkonditierung, Beutelwechsel-Frequenz. Ohne Verlaufsdoku: kein Nachweis dass Komplikationen rechtzeitig erkannt wurden.",
          },
          {
            patientName: "Frau Kovac",
            situationsId: "ls-kovac-ambulant",
            hauptfaktor: "Ambulant — Schnittstelle Pflegedienst",
            kurzbeschreibung:
              "Im ambulanten Setting kommen verschiedene Pflegekräfte. Dokumentation ist die einzige Kommunikation zwischen ihnen. Fehlende Doku = Informationsverlust = Risiko.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Bei Frau Yilmaz wurde die Roetung gesehen aber nicht dokumentiert. Was sind die 3 Konsequnzen — und welche Funktionen hat Pflegedokumentation?",
          rueckseite:
            "Konsequnzen: 1) Nächste Schicht nicht informiert (12-24h Verzögerung). 2) Kein rechtlicher Nachweis (§ 630f BGB). 3) Qualitätsereignis nicht nachvollziehbar (Donabedian).\n\n3 Funktionen: Rechtlich (Beweislastumkehr), Kommunikativ (Schichtübergabe), Qualitätssichernd (Prozessqualität messbar).\n\nSpektrum: Frau M. (Sturzprotokoll), Nguyen (Stoma-Doku), Kovac (ambulant, Schnittstellenkommunikation).\n\nFaustregel: **Was nicht dokumentiert ist, existiert nicht.**",
        },
      },
    },

    // Step 5.3 — Reflection (B6): Kern-Reflexion Spirale 2
    {
      stepId: "ce02-yilmaz-s2-eval-03-reflexion-warum",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 6,
      kompetenzbereich: "I.1",
      quellen: ["Donabedian A. (1966)", "DNQP (2. Aktualisierung 2024)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-s2-eval-systemreflexion",
      tag: "pflege",
      contentC1: {
        title: "Kern-Reflexion Spirale 2 — Systemanalyse",
        body: "Du hast jetzt den ganzen Fall begleitet. Schreibe 5-8 Sätze: Warum ist der Dekubitus trotz korrekter Prophylaxeplanung entstanden? Unterscheide Patienten-Ebene, System-Ebene und was du beim nächsten ähnlichen Fall anders machen würdest.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Warum ist die Wunde entstanden? Deine Reflexion.",
        body: "Schreibe in 4-6 Sätzen: Warum ist die Wunde entstanden — obwohl Prophylaxe geplant war? Was war bei Frau Yilmaz selbst das Problem? Was war beim System das Problem? Was machst du beim nächsten Mal anders?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Reflexion: Warum ist der Dekubitus bei Frau Yilmaz trotz korrekter Prophylaxeplanung entstanden?",
        reflection: {
          prompt:
            "Schreibe 5-8 Sätze. Unterscheide: Patientenfaktoren (Diabetes, Neuropathie, Adipositas, Ablehnung Umlagerung) — Systemfaktoren (nicht-dokumentierte Rötung, Personalknappheit, Schichtlücke) — Verbesserungspotenzial (was du beim nächsten ähnlichen Fall anders machen würdest).",
          placeholder:
            "Der Dekubitus ist entstanden, weil … Auf Patientenebene … Auf Systemebene … Beim nächsten Mal würde ich …",
          systemPrompt:
            "Bewerte die Reflexion auf Vollständigkeit: Hat der Schüler mindestens 3 Ebenen benannt (Patientenfaktoren, Systemfaktoren, Verbesserungspotenzial)? Wurde Neuropathie als Faktor erkannt? Wurde der Systemcharakter betont (kein Schuld-Framing einer Person)? Wurde das Donabedian-Modell implizit oder explizit angewendet? Feedback im Sandwich-Prinzip (Loben + Korrigieren + Ermutigen).",
        },
      },
    },

    // Inline-Wissen: Entlassungsmanagement und Pflegeueberleitung
    {
      stepId: "ce02-yilmaz-s2-eval-03b-entlassung",
      phase: 5,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP 2019 \u2014 Entlassungsmanagement"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-eval-03b-entlassung",
      tag: "pflege",
      themaPrimaer: "pflegeprozess",
      themenSekundaer: ["dekubitus-prophylaxe"],
      transition: "Entlassung geplant. Erstelle den Plan.",
      contentC1: {
        title: "Entlassungsmanagement und Pflegeüberleitung",
        body: "",
        glossarBegriffe: ["Entlassungsmanagement", "Pflegeüberleitung", "Hilfsmittelversorgung"],
      },
      contentB1: {
        title: "Was muss vor der Entlassung geregelt sein?",
        body: "",
        glossarBegriffe: ["Entlassungsmanagement", "Hilfsmittelversorgung"],
      },
      inlineWissen: {
        bausteinRef: "pflegeprozess-entlassung",
        storyAufhaenger: "Frau Yilmaz geht in 4 Tagen nach Hause. Wer macht den Verbandwechsel? Wer lagert um?",
        storyAufhaengerB1: "Frau Yilmaz geht bald nach Hause. Wer kümmert sich dann?",
        kerntext: "**Entlassungsmanagement** (DNQP 2019) = Systematische Planung der Entlassung ab Tag 1.\n\n**Pflegeüberleitung** = Informationsweitergabe an ambulante Pflege: Pflegebedarf, Wundstatus, Medikamente, Hilfsmittel.\n\n**Hilfsmittelversorgung** = Organisation von Hilfsmitteln: Rollator, erhöhter Toilettensitz, Badewannensitz, Antirutschmatten.",
        kerntextB1: "**Entlassungsmanagement** = Alles planen bevor der Patient nach Hause geht.\n**Pflegeüberleitung** = Informationen an ambulante Pflege geben.\n**Hilfsmittelversorgung** = Hilfsmittel organisieren.",
        faustregel: "Entlassungsmanagement = ab Tag 1 planen. Pflegeüberleitung = Info an ambulante Pflege. Hilfsmittel rechtzeitig.",
        faustregelB1: "Entlassung früh planen. Info weitergeben. Hilfsmittel bestellen.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Was muss vor Frau Yilmaz Entlassung geregelt sein?",
          rueckseite: "Entlassungsmanagement: 1) Pflegeüberleitung, 2) Hilfsmittel, 3) Wundmaterial, 4) Sevim einweisen, 5) Hausarzt-Termin.",
        },
      },
    },

    // Step 5.4 — CarePlan: Entlassungsplanung
    {
      stepId: "ce02-yilmaz-s2-eval-04-entlassungsplanung",
      phase: 5,
      stepType: "careplan",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP (2. Aktualisierung 2024)",
        "§ 11 PflBG — Entlassungsmanagement",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-s2-eval-entlassung",
      tag: "pflege",
      contentC1: {
        title: "Entlassungsplan für Frau Yilmaz entwickeln",
        body: "Frau Yilmaz soll in 4 Tagen entlassen werden. Bloom 5 — Entlassung erfordert multiprofessionelle Koordination.",
        glossarBegriffe: [
          "Entlassungsmanagement",
          "Pflegeüberleitung",
          "Hilfsmittelversorgung",
        ],
      },
      contentB1: {
        title: "Was muss vor der Entlassung geregelt sein?",
        body: "Frau Yilmaz geht in 4 Tagen nach Hause. Was muss vorher noch passieren? Erstelle den Plan.",
        glossarBegriffe: ["Entlassungsmanagement"],
      },
      question: {
        fragetext:
          "Erstelle den Entlassungsplan für Frau Yilmaz. Wähle alle notwendigen Maßnahmen aus und bewerte warum sie wichtig sind.",
        careplan: {
          patientName: "Frau Yilmaz",
          situation:
            "79 Jahre, Hüft-TEP rechts Tag 17, Dekubitus Kategorie II am Sakrum (heilend, ~1,5×2,5 cm), Diabetes Typ 2, Adipositas, Neuropathie. Soll in 4 Tagen entlassen werden. Ehemann Mustafa (83) zuhause, kaum Deutsch. Tochter Sevim berufstätig, abends verfügbar.",
          situationB1:
            "Frau Yilmaz geht in 4 Tagen nach Hause. Sie hat eine Hüft-OP und eine heilende Wunde. Ihr Mann Mustafa (83) ist zuhause. Er spricht kaum Deutsch. Die Tochter Sevim kann abends helfen.",
          steps: [
            {
              phase: "problem",
              prompt:
                "Welche 3 Haupt-Entlassungsprobleme bestehen für Frau Yilmaz?",
              promptB1:
                "Was sind die drei größten Probleme bei der Entlassung?",
              options: [
                {
                  text: "Wundversorgung nach Entlassung nicht gesichert",
                  isCorrect: true,
                  explanation:
                    "Kernproblem: Wer macht den Verbandwechsel zuhause? Wann? Mit welchem Material?",
                },
                {
                  text: "Positionierung zuhause: Mustafa kann das nicht allein",
                  isCorrect: true,
                  explanation:
                    "Mustafa ist 83 Jahre alt — er kann die 135°-Seitenlage nicht allein durchführen. Wer übernimmt die Umlagerung zuhause?",
                },
                {
                  text: "Pflegegrad noch nicht bewilligt — Kostenübernahme offen",
                  isCorrect: true,
                  explanation:
                    "Der Pflegegradantrag läuft. Bis zur Bewilligung müssen Übergangslösungen koordiniert werden.",
                },
                {
                  text: "Frau Yilmaz kann keine Treppen steigen",
                  isCorrect: false,
                  explanation:
                    "Sie wohnt im Erdgeschoss — keine Treppen nötig. Treppensteigen ist daher kein aktuelles Entlassungsproblem.",
                },
              ],
            },
            {
              phase: "ziel",
              prompt:
                "Formuliere das Entlassungsziel für Frau Yilmaz (1 Satz).",
              promptB1: "Was ist das Ziel für die Entlassung?",
              musterantwort:
                "Frau Yilmaz wird sicher entlassen, Wundversorgung und Positionierung sind durch ambulante Pflege und Angehörige gesichert, Hilfsmittel sind vorhanden, Pflegegrad-Antrag begleitet.",
            },
            {
              phase: "massnahme",
              prompt:
                "Welche 5 Entlassungsmaßnahmen sind für Frau Yilmaz notwendig?",
              promptB1: "Was muss vor der Entlassung gemacht werden?",
              options: [
                {
                  text: "Wundkontrolle beim Hausarzt in 3 Tagen nach Entlassung",
                  isCorrect: true,
                  explanation:
                    "Kontinuierliche Wundkontrolle ambulant ist Pflicht für Kategorie-II-Heilung.",
                },
                {
                  text: "Wundversorgungsmaterial für 1 Woche mitgeben + Einweisung Tochter Sevim",
                  isCorrect: true,
                  explanation:
                    "Sevim übernimmt den Verbandwechsel zuhause — sie braucht Material und Anleitung.",
                },
                {
                  text: "Physiotherapie ambulant fortführen",
                  isCorrect: true,
                  explanation:
                    "Mobilisation und Gang-Sicherheit müssen ambulant weitergeführt werden — auch wegen der Hüft-TEP.",
                },
                {
                  text: "Positionierungsplan für zuhause erstellen + Mustafa einbeziehen",
                  isCorrect: true,
                  explanation:
                    "Mustafa muss wissen wie er helfen kann — Schräglagerung vereinfacht erklären, ambulanter Pflegedienst koordinieren.",
                },
                {
                  text: "Hilfsmittel: Rollator + erhöhter Toilettensitz + Badewannensitz + Antirutschmatten + Greifhilfen",
                  isCorrect: true,
                  explanation:
                    "Sturzprophylaxe + TEP-Schutz zuhause: Rollator hat sie schon. Erhöhter Toilettensitz ist TEP-Standard (Hüftbeugung <90° auch zuhause einhalten). Badewannensitz + Antirutschmatten reduzieren Sturzrisiko im Bad. Greifhilfen erleichtern Anziehen von Schuhen/Strümpfen ohne tiefes Bücken.",
                },
                {
                  text: "Stationäre Verlängerung um 2 Wochen beantragen",
                  isCorrect: false,
                  explanation:
                    "Nur wenn ambulante Versorgung nicht sichergestellt werden kann. Primär: ambulante Koordination.",
                },
              ],
            },
          ],
        },
      },
    },
  ],
  optionaleSteps: [
    // Opt 5.5 — Timeline: Wundheilungsphasen (B1-Schüler)
    {
      stepId: "ce02-yilmaz-s2-eval-opt-01-wundheilung-phasen",
      phase: 5,
      stepType: "timeline",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP (2019)"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-eval-wundheilung",
      tag: "krankheitslehre",
      contentC1: {
        title: "Wundheilungsphasen — wo steht Frau Yilmaz?",
        body: "4 Wundheilungsphasen visualisieren. Frau Yilmaz befindet sich jetzt in Phase 3. Quelle: (NPUAP/EPUAP 2019)",
        glossarBegriffe: [
          "Exsudationsphase",
          "Resorptionsphase",
          "Proliferationsphase",
          "Regenerationsphase",
        ],
      },
      contentB1: {
        title: "In welcher Wundheilungsphase ist Frau Yilmaz?",
        body: "Es gibt 4 Phasen der Wundheilung. Wo ist Frau Yilmaz heute?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Ordne die Wundheilungsphasen auf der Timeline. In welcher Phase ist Frau Yilmaz heute (Tag 17)?",
        timeline: {
          instruction:
            "Ordne die Phasen der Wundheilung in der richtigen Reihenfolge auf der Timeline.",
          events: [
            {
              id: "phase1",
              time: "Tag 1-3",
              title: "Exsudationsphase",
              description:
                "Entzündungsreaktion — Wunde ist feucht, rötlich, geschwollen. Leukozyten reinigen die Wunde. Ziel: Keime abtöten, Wundgrund reinigen.",
              descriptionB1:
                "Die Wunde ist entzündet. Immunzellen reinigen die Wunde. Rötlich und feucht.",
              icon: "flame",
              highlight: false,
            },
            {
              id: "phase2",
              time: "Tag 3-7",
              title: "Resorptionsphase",
              description:
                "Abbau von Debris und toten Zellen. Übergang zu Heilungsgewebe. Exsudat nimmt ab.",
              descriptionB1:
                "Tote Zellen werden abgebaut. Das Exsudat wird weniger.",
              highlight: false,
            },
            {
              id: "phase3",
              time: "Tag 7-21",
              title: "Proliferationsphase ← Frau Yilmaz ist hier",
              description:
                "Granulationsgewebe wird aufgebaut (rosa-rot, körnig). Neue Blutgefäße wachsen ein (Angiogenese). Wunde wird kleiner. Dies ist der aktuelle Status bei Frau Yilmaz (Tag 17).",
              descriptionB1:
                "Heilungsgewebe wächst. Die Wunde wird kleiner und rosa. Das ist die Phase, in der Frau Yilmaz jetzt ist.",
              highlight: true,
            },
            {
              id: "phase4",
              time: "Wochen bis Monate",
              title: "Regenerationsphase",
              description:
                "Narbengewebe reift aus. Zugfestigkeit der Haut nimmt zu. Vollständige Epithelialisierung.",
              descriptionB1:
                "Narbengewebe entsteht und wird fester. Die Haut schließt sich vollständig.",
              highlight: false,
            },
          ],
        },
      },
    },

    // Inline-Wissen: Entzuendungszeichen \u2014 Rubor, Calor, Dolor, Tumor, Functio laesa
    {
      stepId: "ce02-yilmaz-s2-eval-04b-entzündungszeichen",
      phase: 5,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Celsus/Galen", "NPUAP/EPUAP/PPPIA 2019"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-eval-04b-entzündungszeichen",
      tag: "krankheitslehre",
      themaPrimaer: "dekubitus-prophylaxe",
      themenSekundaer: ["haut"],
      transition: "Entzündungszeichen im Kopf. Was wenn die Wunde schlechter aussieht?",
      contentC1: {
        title: "Entzündungszeichen \u2014 Rubor, Calor, Dolor, Tumor, Functio läsa",
        body: "",
        glossarBegriffe: ["Rubor", "Calor", "Dolor", "Tumor", "Functio läsa", "Wundinfektion"],
      },
      contentB1: {
        title: "5 Zeichen einer Entzündung",
        body: "",
        glossarBegriffe: ["Wundinfektion"],
      },
      inlineWissen: {
        bausteinRef: "dekubitus-prophylaxe-entzündung",
        storyAufhaenger: "Im Alternativszenario sieht die Wunde schlechter aus. Die 5 Kardinalzeichen der Entzündung helfen beim Erkennen.",
        storyAufhaengerB1: "Woran erkennst du eine entzündete Wunde?",
        kerntext: "**5 Kardinalzeichen** (Celsus/Galen):\n\u2022 **Rubor** = Roetung\n\u2022 **Calor** = Überwärmung\n\u2022 **Dolor** = Schmerz (Cave Neuropathie!)\n\u2022 **Tumor** = Schwellung\n\u2022 **Functio läsa** = Funktionseinschränkung\n\n**Wundinfektion** = Keime in der Wunde. Zeichen: \u2265 2 Kardinalzeichen + eitriges Exsudat. Sofort Arzt informieren.",
        kerntextB1: "**5 Zeichen:** Rot, warm, Schmerz (Vorsicht: Nerven!), geschwollen, funktioniert nicht richtig.\n\n**Wundinfektion** = \u2265 2 Zeichen + Eiter. Sofort Arzt rufen.",
        faustregel: "5 Kardinalzeichen: Rubor, Calor, Dolor, Tumor, Functio läsa. \u2265 2 + Eiter = Infektion \u2192 Arzt.",
        faustregelB1: "5 Zeichen: rot, warm, Schmerz, geschwollen, funktioniert nicht. + Eiter = Arzt rufen.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Nenne die 5 Kardinalzeichen und erkläre Wundinfektion.",
          rueckseite: "Rubor, Calor, Dolor, Tumor, Functio läsa. Wundinfektion: \u2265 2 Zeichen + Eiter. Cave Neuropathie: Dolor kann fehlen.",
        },
      },
    },

    // Opt 5.6 — Branching: Negativ-Szenario (starke Schüler)
    {
      stepId: "ce02-yilmaz-s2-eval-opt-02-negativszenario",
      phase: 5,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP/PPPIA (2019)", "DNQP (2. Aktualisierung 2024)"],
      track: "vertiefung",
      modus: "praxis-sim",
      lernziel: "ce02-yilmaz-s2-eval-eskalation",
      tag: "krankheitslehre",
      contentC1: {
        title: "Alternativszenario B: Wunde hat sich verschlechtert",
        body: "Was wäre wenn: Verbandwechsel Tag 17, aber Wundrand ist gerötet, eitriges Exsudat, Temperatur 37,8°C. Was sind die Inflammationszeichen? Wann rufst du den Arzt? Wie dokumentierst du?",
        glossarBegriffe: [
          "Rubor",
          "Calor",
          "Dolor",
          "Tumor",
          "Functio läsa",
          "Wundinfektion",
        ],
      },
      contentB1: {
        title: "Was wenn es schlechter geworden wäre?",
        body: "Stell dir vor: Die Wunde sieht heute schlechter aus. Wundrand ist rot, eitriges Exsudat, leicht erhöhte Temperatur. Was machst du?",
        glossarBegriffe: ["Wundinfektion"],
      },
      question: {
        fragetext:
          "Alternativszenario B: Wundbefund Tag 17 hat sich verschlechtert — eitriges Exsudat, geröteter Wundrand, Temperatur 37,8°C. Was ist deine nächste Aktion?",
        branchingOptions: [
          {
            text: "Verbandwechsel wie geplant durchführen, nichts melden — vielleicht ist es morgen besser.",
            feedback:
              "Falsch. Geröteter Wundrand (Rubor) + erhöhte Temperatur (Calor) sind 2 klassische Cardinal Signs der Inflammation nach Celsus/Galen. Hinzu kommt purulentes (eitriges) Exsudat — das ist ein Infektionszeichen. Zusammen ergibt das einen Infektionsverdacht, der sofortige ärztliche Einschätzung erfordert. Abwarten verschlimmert die Situation.",
            feedbackB1:
              "Falsch. Rötung und erhöhte Temperatur (das sind Inflammationszeichen) zusammen mit eitrigem Exsudat zeigen eine Wundinfektion. Du musst sofort den Arzt informieren — nicht warten.",
            isCorrect: false,
          },
          {
            text: "Befund dokumentieren + sofort Ärztin Dr. Kirchner per SBAR informieren: Wundrand gerötet, eitriges Exsudat, T 37,8°C — mögliche Wundinfektion.",
            feedback:
              "Korrekt. Mindestens 2 klassische Cardinal Signs nach Celsus/Galen sind erfüllt: Rubor (Rötung Wundrand) + Calor (erhöhte Temperatur 37,8°C). Zusätzlich: purulentes (eitriges) Exsudat → klinischer Infektionsverdacht (Eiter ist kein Inflammations-Cardinal-Sign, sondern ein Infektionszeichen). Sofortige SBAR-Meldung + Dokumentation sind die pflegerisch korrekten Maßnahmen. Dr. Kirchner entscheidet über Abstrich, Antibiotikum oder Therapieänderung.",
            feedbackB1:
              "Richtig. Du siehst Rötung (Rubor) und höhere Temperatur (Calor) — zusammen mit dem eitrigen Exsudat ist das ein Infektionsverdacht. Du dokumentierst und rufst sofort die Ärztin an (SBAR). Das ist richtig.",
            isCorrect: true,
          },
          {
            text: "Wunde reinigen, neuen Verband drauf — und beim nächsten Schichtwechsel übergeben.",
            feedback:
              "Nicht ausreichend. Verbandwechsel ist korrekt, aber ohne Arzt-Ruf und ohne Dokumentation fehlt die Eskalation. Infektionsverdacht (Rubor + Calor + purulentes Exsudat) erfordert sofortige Meldung — nicht nur am Schichtwechsel. Die nächste Schicht beginnt ggf. 8 Stunden später.",
            feedbackB1:
              "Nicht genug. Verbandwechsel ist gut. Aber: Du musst sofort den Arzt informieren — nicht erst beim Schichtwechsel.",
            isCorrect: false,
          },
        ],
      },
    },
  ],
  geschaetzteDauer: 18,
};

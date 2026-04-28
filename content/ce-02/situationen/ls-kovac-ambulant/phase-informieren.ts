// CE-02 Situation Kovač — Phase 1: Informieren — Ankommen, Überblick, Vertrauensaufbau
// Steps: 5 · Bloom: B2-B3 · Zeit: ~15-25 Min
// Quelle: phase-informieren.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_KOVAC_AMBULANT_INFORMIEREN: SituationsPhase = {
  phaseId: "ls-kovac-ambulant-informieren",
  phase: "informieren",
  titel: "Ankommen & Überblick",
  titelB1: "Ankommen bei Frau Kovač",
  kontext:
    "Es ist 07:30 Uhr. Du hast gerade die Haustür der Wohnanlage mit dem Schlüssel geöffnet und fährst im Aufzug in den 3. Stock. In der Hand: die Pflegedokumentation von Frau Kovač — heute gedruckt, weil das Tablet des Pflegedienstes geladen wird. Du weißt: Frau Kovač, 84 Jahre, COPD III, Kontrakturen, schläft schlecht, verweigert die Kompressionsstrümpfe. Dein Auftrag: Körperpflege, Atemübungen, Bewegungsübungen, Trinkprotokoll prüfen, Medikamente stellen. Alles in 45 Minuten.",
  kontextB1:
    "Es ist 07:30 Uhr morgens. Du fährst mit dem Aufzug in den 3. Stock. Du hast die Pflege-Dokumentation von Frau Kovač dabei — ein Heft mit allen wichtigen Informationen über sie. Du weißt: Frau Kovač, 84 Jahre, schwere Lungen-Erkrankung (COPD), Knie lassen sich nicht ganz strecken (Kontraktur), schläft schlecht, lehnt Kompressionsstrümpfe ab. Dein Auftrag: Körperpflege, Atem-Übungen, Bewegungs-Übungen, Trinkprotokoll prüfen und Medikamente vorbereiten. Alles in 45 Minuten.",
  kernSteps: [
    // Step 1.1 — Übergabe lesen
    {
      stepId: "ce02-kovac-info-01-uebergabe-lesen",
      phase: 1,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Kontinenzförderung 2014", "§ 630f BGB"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-kovac-ambulant-info-uebergabe",
      tag: "pflege",
      displayFormat: "scenario",
      bildkategorie: "szene",
      bildhinweis:
        "Ambulante Pflegekraft liest handschriftlichen Übergabezettel auf einem Klemmbrett, Treppenhaus mit Tageslicht, Copic-Marker-Skizzenstil, kein Text, keine Beschriftung",
      imageAlt:
        "Pflegekraft liest Übergabezettel auf einem Klemmbrett im Treppenhaus",
      contentC1: {
        title: "Die Übergabe von gestern Abend",
        body: "Du öffnest die Dokumentationsmappe. Die Kollegin vom Abendbesuch — Petra — hat einen handschriftlichen Zettel beigelegt:\n\n\"Fr. Kovač unruhig. Hat kaum gegessen — nur Brot. Trinkmenge 820 ml (Protokoll liegt am Küchentisch). Stühle seit 4 Tagen keiner. Kompressionsstrümpfe wieder abgelehnt. Atemübungen kurz gemacht, Frau K. erschöpft nach 3 Min. Kollegin Petra.\"\n\nDas ist die ambulante Übergabe — knapp und alltagstauglich. Sie enthält **S** (Situation: 84-jährige Patientin, unruhig) und **B** (Background: 820 ml, 4 Tage Obstipation, Verweigerung) — aber **A** (Assessment: was hat Petra eingeschätzt?) und **R** (Recommendation: was schlägt sie für heute vor?) fehlen. Das ist keine vollständige SBAR-Übergabe — das ist Realität ambulanter Praxis. Du musst Assessment und Recommendation heute Morgen selbst ergänzen.",
        fallbezug:
          "Frau Kovač (84, COPD III, Herzinsuffizienz NYHA II, Pflegegrad 3) — dein dritter Morgenbesuch. Praxisanleiterin Frau Özdemir hat dir empfohlen: 'Nimm dir Zeit für die Erklärungen — nicht für uns, für sie.'",
        glossarBegriffe: ["Kompressionsstrümpfe", "Obstipation", "Trinkmenge", "SBAR"],
      },
      contentB1: {
        title: "Der Zettel von Kollegin Petra",
        body: "Du liest den Zettel der Kollegin vom Abend-Besuch. Die Kollegin heißt Petra.\n\nSie hat aufgeschrieben:\n\"Frau Kovač war unruhig. Sie hat fast nichts gegessen — nur Brot. Sie hat 820 ml getrunken (das steht im Protokoll, es liegt auf dem Küchentisch). Seit 4 Tagen kein Stuhlgang. Die Kompressionsstrümpfe (= Strümpfe gegen Blut-Gerinnsel) hat sie wieder abgelehnt. Die Atem-Übungen hat sie kurz gemacht. Nach 3 Minuten war sie erschöpft. Kollegin Petra.\"\n\nDas ist die ambulante Übergabe (= kurze Information von Kollegin zu Kollegin). Sie ist kürzer als im Krankenhaus. **Wichtig:** Petras Zettel sagt **was war**. Aber er sagt **nicht** was Petra dachte und was sie für heute vorschlägt. Das musst du selbst ergänzen.",
        fallbezug:
          "Frau Kovač, 84 Jahre. Sie hat COPD (= schwere Lungen-Erkrankung). Pflegegrad 3. Du bist Pflegeschülerin im 2. Ausbildungsdrittel.",
        glossarBegriffe: ["Kompressionsstrümpfe", "Obstipation", "Trinkmenge"],
      },
    },

    // Step 1.2 — Prioritäten vor der Tür
    {
      stepId: "ce02-kovac-info-02-prioritaeten-vor-betreten",
      phase: 1,
      stepType: "sorting",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Kontinenzförderung 2014", "GOLD-Report COPD 2023"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-kovac-ambulant-info-prioritaeten",
      tag: "pflege",
      contentC1: {
        title: "Prioritäten vor der Tür",
        body: "Du stehst vor der Wohnungstür. Bevor du klingelst, ordnest du die Informationen aus der Übergabe nach Dringlichkeit. Es gibt keine absolut richtige Reihenfolge — aber es gibt eine klinische Logik: Akutsignale zuerst, dann Prophylaxe, dann Beratungsthemen.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was ist am dringendsten?",
        body: "Du stehst vor der Tür von Frau Kovač. Welche Information ist am dringendsten? Ordne die Infos aus der Übergabe — was ist das Wichtigste?\n\nHinweis: Zuerst das Akute (= das Gefährliche), dann Prophylaxe (= Vorbeugung), dann Ernährung.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Ordne die Informationen aus der Übergabe nach Dringlichkeit (Wichtigstes zuerst).",
        sortItems: [
          "Kein Stuhlgang seit 4 Tagen (Obstipationsrisiko, Dehydration-Zusammenhang)",
          "Trinkmenge 820 ml gestern (deutlich unter Bedarf bei COPD + Herzinsuffizienz)",
          "Erschöpfung nach 3 Min Atemübungen (Kontext für heute Morgen)",
          "Kompressionsstrümpfe verweigert (Prophylaxe-Risiko, Aufklärung nötig)",
          "Nur Brot gegessen (Ernährungsdefizit, nicht akut gefährlich)",
        ],
      },
    },

    // Step 1.3 — Wohnungscheck (highlight)
    {
      stepId: "ce02-kovac-info-03-wohnungscheck",
      phase: 1,
      stepType: "highlight",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP Erhaltung und Förderung der Mobilität 2017/2024",
        "MDS/Medizinischer Dienst 2018",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-ambulant-info-risikocheck",
      tag: "pflege",
      bildkategorie: "szene",
      bildhinweis:
        "Wohnzimmer einer älteren Frau, Sessel vor dem Fernseher, kleiner Teppich auf dem Boden, Küchentisch sichtbar im Hintergrund mit Heft und Bechern, morgendliches Tageslicht, Copic-Marker-Skizzenstil, kein Text",
      imageAlt:
        "Wohnzimmer einer älteren Frau mit Sessel, Teppich und Küchentisch",
      contentC1: {
        title: "Wohnungscheck in 30 Sekunden",
        body: "Du betrittst die Wohnung. Frau Kovač sitzt im Sessel vor dem Fernseher — der noch läuft. Sie sagt: \"Ah, Sie sind's. Ich hab noch nicht mal Kaffee.\"\n\nDein Blick erfasst die Wohnung in 30 Sekunden. Markiere im Text unten alle Risikofaktoren.",
        glossarBegriffe: ["Kontraktur", "Thrombose", "Trinkprotokoll"],
      },
      contentB1: {
        title: "Was siehst du in der Wohnung?",
        body: "Du betrittst die Wohnung. Frau Kovač sitzt im Sessel. Der Fernseher läuft noch. Sie sagt: \"Ah, Sie sind's. Ich hab noch nicht mal Kaffee.\"\n\nDu schaust die Wohnung an — in 30 Sekunden. Was siehst du? Markiere die Risiken:\n\n**Wichtige Fachbegriffe:**\n- Kompressionsstrümpfe = spezielle Strümpfe, die den Blut-Fluss in den Beinen fördern\n- Trinkprotokoll = Liste, wie viel die Patientin pro Tag trinkt\n- Stolperfalle = etwas auf dem Boden, über das man stolpern kann",
        glossarBegriffe: ["Kompressionsstrümpfe", "Trinkprotokoll"],
      },
      question: {
        fragetext:
          "Markiere alle Risikofaktoren im folgenden Beschreibungstext.",
        highlightSegments: [
          {
            text: "Die Wohnung riecht leicht nach Rauch.",
            isError: true,
            reason:
              "Rauchgeruch ist bei COPD III relevant — passives Rauchen in geschlossenen Räumen verschlechtert die Lungenfunktion zusätzlich zur aktiven Rauchbelastung.",
            reasonB1:
              "Rauch in der Wohnung ist bei COPD gefährlich. Die Lunge ist schon geschädigt.",
          },
          {
            text: "Auf dem Küchentisch steht ein halbvoller Kaffeebecher von gestern Abend.",
            isError: false,
          },
          {
            text: "Am Boden liegt ein kleiner Teppich vor dem Sessel.",
            isError: true,
            reason:
              "Stolperfalle — bei Kontrakturen und eingeschränkter Mobilität (COPD, Herzinsuffizienz) ist das Sturzrisiko erhöht. Teppiche ohne Antirutsch-Unterlage sind ein vermeidbares Risiko.",
            reasonB1:
              "Stolperfalle! Frau Kovač hat Knie-Probleme (Kontraktur) und ist durch COPD erschöpft. Sie kann leicht stolpern.",
          },
          {
            text: "Das Trinkprotokoll liegt aufgeschlagen — letzte Eintragung: 21:00 Uhr, 150 ml.",
            isError: true,
            reason:
              "Trinkprotokoll-Lücke: zwischen 21:00 Uhr und jetzt (07:30) — über 10 Stunden ohne dokumentierte Flüssigkeitsaufnahme. Bei ohnehin zu geringer Trinkmenge ein Alarmsignal.",
            reasonB1:
              "Lücke im Trinkprotokoll: Seit 21:00 Uhr keine Eintragung. Frau Kovač hat die ganze Nacht wahrscheinlich nicht getrunken.",
          },
          {
            text: "Im Badezimmer: Kompressionsstrümpfe noch in der Packung.",
            isError: true,
            reason:
              "Kompressionsstrümpfe nicht getragen — bei Herzinsuffizienz mit Unterschenkelödemen und eingeschränkter Mobilität erhöhtes Thromboserisiko. Aufklärung und Dokumentation der Verweigerung erforderlich.",
            reasonB1:
              "Kompressionsstrümpfe noch in der Packung — sie benutzt sie nicht. Das ist ein Thrombose-Risiko (= Blut-Gerinnsel).",
          },
        ],
      },
    },

    // Step 1.4 — Erstkontakt-Dialog
    {
      stepId: "ce02-kovac-info-04-erstkontakt-dialog",
      phase: 1,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DNQP Kontinenzförderung 2014"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-kovac-ambulant-info-dialog",
      tag: "pflege",
      contentC1: {
        title: "Erstkontakt — aktives Zuhören",
        body: "Du hast geklingelt, Frau Kovač hat die Tür geöffnet. **Wichtig — du bist Gast in ihrer Wohnung:** Hausrecht respektieren heißt, du bittest um Eintritt ('Guten Morgen, Frau Kovač — darf ich reinkommen?'), du gehst nicht selbstverständlich rein. Erst wenn sie dich hereingebeten hat, betrittst du den Wohnraum. Im stationären Setting ist das anders — dort gehört der Raum dem Krankenhaus, hier gehört er ihr.\n\nFrau Kovač hat dich hereingebeten. Sie wirkt erschöpft, schaltet den Fernseher aus. Du fragst nach der Nacht — Frau Kovač antwortet. Drei Dialogphasen: Begrüßung setzen — Befindlichkeit erheben — Antwort wählen.",
        glossarBegriffe: ["Hausrecht"],
      },
      contentB1: {
        title: "Gespräch mit Frau Kovač",
        body: "Du hast geklingelt. Frau Kovač macht die Tür auf. **Wichtig:** Das ist ihre Wohnung. Du fragst: 'Guten Morgen, Frau Kovač — darf ich reinkommen?' Erst wenn sie ja sagt, gehst du rein. Das ist Hausrecht.\n\nFrau Kovač hat dich reingebeten. Sie schaltet den Fernseher aus. Sie wirkt müde. Du führst ein kurzes Gespräch in drei Phasen. Wähle die richtige Antwort.\n\n**Richtig: b** — Du hörst zu. Du fragst nach. Das nennt man aktives Zuhören.",
        glossarBegriffe: ["Hausrecht"],
      },
      question: {
        fragetext: "Wähle deine Antwort auf Frau Kovač.",
        patientName: "Frau Kovač",
        dialogPhases: [
          {
            context:
              "Du betrittst die Wohnung und begrüßt Frau Kovač. Sie schaltet den Fernseher aus und schaut dich an.",
            contextB1:
              "Du kommst rein. Frau Kovač schaltet den Fernseher aus und schaut dich an.",
            speaker: "Du",
            options: [
              {
                text: "\"Guten Morgen, Frau Kovač — ich bin's. Wie geht es Ihnen heute Morgen?\"",
                textB1:
                  "\"Guten Morgen, Frau Kovač. Wie geht es Ihnen heute?\"",
                patientResponse:
                  "Frau Kovač nickt. \"Morgen. Ich hab nicht gut geschlafen. Wieder.\"",
                patientResponseB1:
                  "Frau Kovač nickt. \"Morgen. Ich hab schlecht geschlafen.\"",
                score: 3,
                feedback:
                  "Freundlich, klar, offen formuliert. Du schaffst sofort Raum für ihre Antwort. Weiter.",
                feedbackB1:
                  "Gut. Du bist freundlich. Du fragst offen. Frau Kovač kann antworten was sie möchte.",
              },
              {
                text: "\"Guten Morgen, Frau Kovač. Ich muss gleich die Atemübungen machen, also fangen wir an.\"",
                textB1:
                  "\"Guten Morgen. Ich muss jetzt gleich mit den Übungen anfangen.\"",
                patientResponse:
                  "Frau Kovač zieht die Augenbrauen hoch. \"Na, bitte sehr.\"",
                patientResponseB1:
                  "Frau Kovač schaut weg. \"Na, wenn Sie meinen.\"",
                score: 1,
                feedback:
                  "Zu aufgabenorientiert. Der Einstieg ohne Befindlichkeitsfrage signalisiert: Deine Zeit ist wichtiger als ihre. Bei Frau Kovač funktioniert das besonders schlecht — sie braucht das Gefühl, dass du zuhörst.",
                feedbackB1:
                  "Nicht gut. Du fragst nicht wie es ihr geht. Das macht Frau Kovač nicht froh.",
              },
            ],
          },
          {
            context:
              "Frau Kovač sagt: \"Ich hab nicht gut geschlafen. Um zwei war ich wach. Dann konnte ich nicht mehr.\"",
            contextB1:
              "Frau Kovač sagt: \"Ich hab nicht gut geschlafen. Um zwei war ich wach. Dann konnte ich nicht mehr einschlafen.\"",
            speaker: "Frau Kovač",
            options: [
              {
                text: "\"Das klingt anstrengend. Erzählen Sie mir mehr — wann sind Sie eingeschlafen?\"",
                textB1:
                  "\"Das klingt anstrengend. Wann sind Sie eingeschlafen?\"",
                patientResponse:
                  "\"Na, so um halb elf. Dann war ich weg. Aber dann um zwei — dann war ich auf einmal wach.\"",
                patientResponseB1:
                  "\"So um halb elf bin ich eingeschlafen. Aber um zwei war ich plötzlich wach.\"",
                score: 3,
                feedback:
                  "Aktives Zuhören. Du validierst ('Das klingt anstrengend'), fragst dann präzise nach (Schlaflatenz erheben). Diese Information ist klinisch relevant für die Schlafanamnese.",
                feedbackB1:
                  "Richtig. Du hörst zu (aktives Zuhören). Du fragst nach. Frau Kovač fühlt sich gehört.",
              },
              {
                text: "\"Das höre ich oft bei COPD-Patienten — das ist normal.\"",
                textB1:
                  "\"Das höre ich oft bei Lungen-Kranken — das ist normal.\"",
                patientResponse:
                  "Frau Kovač sieht dich kurz an. \"Normal. Schön.\"",
                patientResponseB1:
                  "Frau Kovač sieht dich kurz an. \"Normal. Na ja.\"",
                score: 0,
                feedback:
                  "Verallgemeinernd und gesprächsschließend. 'Das ist normal' signalisiert: Kein Handlungsbedarf. Frau Kovač fühlt sich nicht ernst genommen — und du verlierst wertvolle Anamnese-Information.",
                feedbackB1:
                  "Nicht gut. 'Das ist normal' schließt das Gespräch. Frau Kovač fühlt sich nicht gehört.",
              },
              {
                text: "\"Wir schauen das heute genauer an. Jetzt erst die Übungen, ja?\"",
                textB1:
                  "\"Wir schauen das später an. Jetzt erst die Übungen, ja?\"",
                patientResponse:
                  "Frau Kovač nickt ohne Begeisterung. \"Wenn Sie wollen.\"",
                patientResponseB1:
                  "Frau Kovač nickt. \"Wenn Sie wollen.\"",
                score: 1,
                feedback:
                  "Aufgabenorientiert — du schiebst das Thema auf und signalisierst gleichzeitig: Die Übungen sind wichtiger als ihr Schlaferlebnis. Frau Kovač wird das bemerken.",
                feedbackB1:
                  "Nicht gut. Du hörst nicht zu. Die Übungen sind wichtiger als ihr Erlebnis. Das spürt Frau Kovač.",
              },
            ],
          },
          {
            context:
              "Du hast die Schlaf-Information erhoben und weißt: Einschlaflatenz ca. 30–40 Min, nächtliches Erwachen um 02:00 Uhr, Fernsehen als Kompensation. Jetzt gibst du Frau Kovač eine Vorschau auf den Morgen.",
            contextB1:
              "Du weißt jetzt: Frau Kovač schläft schlecht. Du sagst ihr, was heute Morgen passiert.",
            speaker: "Du",
            options: [
              {
                text: "\"Frau Kovač, wir schauen heute auf die Atemübungen, auf das Trinken und auf die Gelenke. Für den Schlaf machen wir heute Abend ein kurzes Gespräch — ich erkläre Ihnen dann, was im Körper passiert.\"",
                textB1:
                  "\"Frau Kovač, heute machen wir Atem-Übungen, reden über das Trinken und schauen die Gelenke an. Den Schlaf besprechen wir heute Abend — ich erkläre dir dann, was im Körper passiert.\"",
                patientResponse:
                  "\"Na gut. Dann fangen wir an.\" — Sie dreht sich zum Fenster und zieht die Vorhänge auf.",
                patientResponseB1:
                  "\"Na gut. Dann fangen wir an.\" — Sie öffnet die Vorhänge.",
                score: 3,
                feedback:
                  "Transparent und respektvoll. Du gibst Frau Kovač die Agenda für den Besuch — sie kann sich darauf einstellen. Das erhöht ihre Kooperation ohne Druck.",
                feedbackB1:
                  "Gut. Du sagst ihr was heute passiert. Frau Kovač kann sich darauf einstellen.",
              },
              {
                text: "\"Dann machen wir jetzt direkt die Atemübungen.\"",
                textB1:
                  "\"Gut, dann machen wir jetzt die Atem-Übungen.\"",
                patientResponse:
                  "Frau Kovač atmet kurz durch die Nase. \"Direkt, ja.\"",
                patientResponseB1: "Frau Kovač atmet kurz. \"Direkt, ja.\"",
                score: 1,
                feedback:
                  "Kein Überblick gegeben. Frau Kovač weiß nicht, was heute alles kommt. Das kann bei unliebsamen Maßnahmen zu Widerstand führen — sie kommt 'kalt' in jeden nächsten Schritt.",
                feedbackB1:
                  "Du gibst keinen Überblick. Frau Kovač weiß nicht was als Nächstes kommt.",
              },
            ],
          },
        ],
      },
    },

    // Step 1.5 — Comparison: ambulant vs. stationär
    {
      stepId: "ce02-kovac-info-05-ambulant-vs-stationaer",
      phase: 1,
      stepType: "comparison",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["§ 630f BGB", "DNQP Kontinenzförderung 2014"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-ambulant-info-setting",
      tag: "pflege",
      contentC1: {
        title: "Ambulant vs. stationär — was ändert sich?",
        body: "Du pflegst heute allein, 45 Minuten, in Frau Kovačs Wohnung. Das ist fundamental anders als auf der Station. Welche Unterschiede beeinflussen deine Prioritätensetzung?",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Ambulant und stationär — der Unterschied",
        body: "Ambulante Pflege = du pflegst zu Hause bei der Patientin. Stationäre Pflege = du pflegst in einem Krankenhaus oder Pflegeheim. Was ist anders?",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Welche Unterschiede zwischen ambulanter und stationärer Pflege sind für deine heutige Planung relevant?",
        comparison: {
          instruction:
            "Vergleiche die beiden Settings — und überlege: Was bedeutet das für heute bei Frau Kovač?",
          columns: [
            { label: "Stationäre Pflege", icon: "🏥" },
            { label: "Ambulante Pflege (Frau Kovač)", icon: "🏠" },
          ],
          rows: [
            {
              criterion: "Team",
              values: [
                "Kollegen jederzeit erreichbar, Notarzt auf Station",
                "Du allein in der Wohnung — nächste Kollegin kommt erst abends",
              ],
              valuesB1: [
                "Du hast Kollegen. Du kannst rufen.",
                "Du bist allein. Hilfe kommt erst abends.",
              ],
              highlight: 1,
            },
            {
              criterion: "Zeit",
              values: [
                "Maßnahmen auf mehrere Schichten verteilbar",
                "45 Minuten gesamt — was du jetzt nicht schaffst, bleibt bis abends",
              ],
              valuesB1: [
                "Du kannst vieles auf andere Schichten aufteilen.",
                "Du hast 45 Minuten. Dann ist Schluss bis abends.",
              ],
              highlight: 1,
            },
            {
              criterion: "Beobachtung",
              values: [
                "24h-Beobachtung, Monitoring möglich",
                "Lückenhafte Beobachtung — nur Befunderhebung beim Besuch",
              ],
              valuesB1: [
                "Im Krankenhaus siehst du den Patienten 24 Stunden.",
                "Du siehst Frau Kovač nur beim Besuch. Dazwischen weißt du nichts.",
              ],
              highlight: 1,
            },
            {
              criterion: "Entscheidungshoheit",
              values: [
                "Hausordnung, Stationsregeln gelten",
                "Frau Kovač bestimmt in ihrer Wohnung — Autonomie hat Vorrang",
              ],
              valuesB1: [
                "Im Krankenhaus gibt es Regeln.",
                "Frau Kovač bestimmt was in ihrer Wohnung passiert.",
              ],
              highlight: 1,
            },
          ],
        },
      },
    },
  ],
  optionaleSteps: [
    // Opt-1.A — Glossar (B1-Schüler)
    {
      stepId: "ce02-kovac-info-opt-a-glossar",
      phase: 1,
      stepType: "text",
      bloomLevel: 1,
      kompetenzbereich: "I.1",
      quellen: ["DNQP Kontinenzförderung 2014"],
      track: "vertiefung",
      modus: "entdecker",
      tag: "pflege",
      displayFormat: "glossary",
      contentC1: {
        title: "Fachbegriffe der Übergabe",
        body: "**Kompressionsstrümpfe:** Spezielle medizinische Strümpfe, die durch gleichmäßigen Druck den venösen Rückfluss fördern und Thrombosen vorbeugen. Nicht dasselbe wie Stützstrümpfe aus dem Supermarkt.\n\n**Obstipation:** Verstopfung — weniger als 3 Stuhlgänge pro Woche, oft mit hartem Stuhl und Pressnotwendigkeit. Chronische Obstipation kann durch Flüssigkeitsmangel verschlechtert werden.\n\n**Flüssigkeitsbilanz / Trinkmenge:** Gegenüberstellung von Flüssigkeitsaufnahme und -abgabe. Bei ambulanter Pflege wird die Zufuhr über das Trinkprotokoll erfasst.",
        glossarBegriffe: [
          "Kompressionsstrümpfe",
          "Obstipation",
          "Flüssigkeitsbilanz",
        ],
      },
      contentB1: {
        title: "Was bedeuten die Fachbegriffe?",
        body: "**Kompressionsstrümpfe** = spezielle Strümpfe gegen Blut-Gerinnsel (= Thrombose). Sie drücken die Beine leicht — das ist so gewollt. Es fördert den Blut-Fluss.\n\n**Obstipation** = Verstopfung. Weniger als 3 Mal Stuhlgang pro Woche. Der Stuhl ist hart. Manchmal kommt zu wenig Trinken dazu.\n\n**Trinkmenge / Trinkprotokoll** = eine Liste, in die eingetragen wird wie viel die Patientin getrunken hat. Wichtig bei Frau Kovač, weil sie zu wenig trinkt.",
        glossarBegriffe: [
          "Kompressionsstrümpfe",
          "Obstipation",
          "Trinkprotokoll",
        ],
      },
    },

    // Opt-1.B — SGB-XI-Kontext: Pflegegrad 3 + Leistungsrahmen (NEU — Fix F-01)
    {
      stepId: "ce02-kovac-info-opt-b-sgb-xi-kontext",
      phase: 1,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "SGB XI § 14 (Pflegebedürftigkeit)",
        "SGB XI § 15 (Pflegegrad-Module)",
        "SGB XI § 36 (Pflegesachleistung)",
        "SGB XI § 37 (Pflegegeld)",
        "SGB XI § 45a (Entlastungsbetrag)",
      ],
      track: "vertiefung",
      modus: "entdecker",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Pflegegrad 3 — was deckt das SGB XI ab?",
        body: "Frau Kovač hat Pflegegrad 3 (PG 3) — \"schwere Beeinträchtigung der Selbstständigkeit\" nach § 14, § 15 SGB XI. Was bedeutet das konkret für die ambulante Versorgung?\n\n**Leistungsrahmen PG 3 (Stand 2024):**\n- **§ 36 Pflegesachleistung:** 1.497 €/Monat — finanziert die Hausbesuche durch den ambulanten Pflegedienst (etwa 2× tägl. Besuch à 30–45 Min, kein Nachtdienst enthalten).\n- **§ 37 Pflegegeld** (alternativ): 573 €/Monat — wenn Angehörige die Pflege übernehmen.\n- **Kombinationsleistung:** Mischung aus § 36 + § 37 anteilig möglich.\n- **§ 45a Entlastungsbetrag:** 125 €/Monat zusätzlich — z.B. für Haushaltshilfe, Betreuungsangebote.\n- **Verhinderungspflege § 39:** 1.612 €/Jahr für Vertretung wenn Pflegeperson ausfällt.\n- **Tages-/Nachtpflege § 41:** zusätzlicher Anspruch — kann bei Frau Kovačs nächtlichem Risikoprofil (Insomnie + Schwindel + COPD) sinnvoll sein.\n\n**Spannungsfeld bei Frau Kovač:**\nIhr Risikoprofil — alleinlebend, COPD III mit FEV1 30-49 %, NYHA II, Sturzneigung durch Kontraktur + Schwindel, nächtliches Erwachen mit Husten — sprengt eigentlich den Standard-PG-3-Rahmen. Der Pflegedienst kommt 2× tägl., **nachts ist sie allein**. Das ist kein Versagen des Pflegedienstes — das ist die Grenze des § 36-Budgets. Aufgabe der Pflegefachkraft: dieses Spannungsfeld erkennen, dokumentieren und ggf. Höherstufung (§ 18 MD-Begutachtung) anregen oder Tagespflege/Verhinderungspflege thematisieren.\n\nQuelle: (SGB XI §§ 14, 15, 36, 37, 41, 45a — aktuelle Beträge 2024)",
        fallbezug:
          "Frau Kovačs Pflegegrad 3 deckt morgens und abends Sachleistung ab. Wenn sie nachts stürzt — niemand ist da. Sohn Darko in Split kann nicht in 5 Min vorbeikommen. Notruf-System (Hausnotruf-Knopf) wäre hier ein konkreter, finanzierbarer Schritt (zuzahlungsfrei über § 40 Pflegehilfsmittel).",
        glossarBegriffe: [
          "SGB XI",
          "Pflegegrad",
          "Pflegesachleistung",
          "Pflegegeld",
          "Entlastungsbetrag",
          "Verhinderungspflege",
        ],
      },
      contentB1: {
        title: "Was bedeutet Pflegegrad 3?",
        body: "Frau Kovač hat **Pflegegrad 3**. Das ist eine Stufe nach dem Gesetz (SGB XI). Sie braucht viel Hilfe.\n\n**Was bezahlt die Pflegekasse (2024)?**\n- **1.497 € pro Monat** für den Pflegedienst (= § 36 Pflegesachleistung). Das reicht für 2× Besuch pro Tag.\n- **125 € extra** pro Monat für Entlastung (z.B. Haushaltshilfe, § 45a).\n- **Tagespflege oder Nachtpflege** sind extra möglich (§ 41).\n- **Hausnotruf** zahlt die Kasse meistens komplett (§ 40).\n- **Verhinderungspflege** (§ 39): bis 1.612 € im Jahr für eine Vertretung.\n\n**Problem bei Frau Kovač:**\n2× Besuch pro Tag — **nachts ist sie allein**. Aber sie hat COPD, Schwindel und kann stürzen. Sohn Darko ist in Kroatien. Das ist eine Lücke. Du als Pflegekraft musst das **erkennen und aufschreiben**. Vielleicht braucht sie:\n- Hausnotruf-Knopf\n- Tagespflege ein paar Stunden\n- Höheren Pflegegrad (Antrag beim MD).\n\nDas ist deine Aufgabe: nicht nur waschen und Übungen — sondern auch sehen was fehlt im System.",
        glossarBegriffe: [
          "Pflegegrad",
          "SGB XI",
          "Pflegesachleistung",
          "Hausnotruf",
        ],
      },
      wusstestDuDas:
        "Pflegegrad 3 = 1.497 € Pflegesachleistung pro Monat (Stand 2024). Das deckt 2× tägl. Hausbesuch — nicht den Nachtdienst. Bei Risikoprofilen wie Frau Kovač ist Hausnotruf (§ 40 SGB XI, zuzahlungsfrei) der erste konkrete Hebel.",
    },

    // Opt-1.C — Touren-Planung in der ambulanten Pflege (NEU)
    {
      stepId: "ce02-kovac-info-opt-c-tourenplanung",
      phase: 1,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["MDS/Medizinischer Dienst 2018", "SGB XI § 36"],
      track: "vertiefung",
      modus: "entdecker",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Frau Kovač ist nicht dein einziger Patient",
        body: "Du hast 45 Minuten bei Frau Kovač. **Davor und danach sind andere Patienten.** Die ambulante Pflege funktioniert in **Touren**: eine Pflegekraft fährt morgens 5–10 Patienten in fester Reihenfolge ab.\n\n**Eine typische Morgenrunde:**\n- 06:30 — Herr Schmidt (Insulin + Frühstück, 25 Min)\n- 07:00 — Fahrt 15 Min\n- 07:15 — Frau Tanaka (Wundversorgung, 30 Min)\n- 07:45 — Fahrt 15 Min\n- **07:30 — Frau Kovač** (Vollpflege + Atemübungen, 45 Min)\n- 08:15 — Fahrt 10 Min\n- 08:25 — Herr Yilmaz (Medikamente + Anziehen, 20 Min)\n- ... bis ca. 12:00 Uhr.\n\n**Was das für dich bei Frau Kovač bedeutet:**\n1. **Du kannst nicht überziehen** — der nächste Patient wartet bereits, oft schon im Aufzug auf dich.\n2. **Wenn Frau Kovač eine Krise hat (Atemnot, Sturz)** — du musst entscheiden: bleiben oder weiter? Bei vitaler Gefährdung bleibst du und rufst Notarzt — der nächste Patient wird vom Pflegedienst informiert.\n3. **Übergaben in der Tour** — du dokumentierst auf dem Tablet zwischen den Besuchen, oft im Auto.\n4. **Belastung** — 5–10 Patienten in 5 Stunden = wenig Zeit für jeden. Diese Tour-Logik prägt jede Pflege-Entscheidung.\n5. **Wechselnde Bezugspersonen** — Frau Kovač sieht morgens dich, abends Petra, an anderen Tagen wieder andere. Kontinuität entsteht nur durch **Dokumentation** — nicht durch Personen.\n\n**Pflege-Realität:** Wenn der Pflegedienst Personalnot hat, wird die Tour länger, die Zeit pro Patient kürzer. Das ist nicht deine Schuld — aber du musst es kennen, um damit professionell umzugehen.",
        fallbezug:
          "Wenn Frau Kovač heute Morgen 5 Minuten länger braucht für die Atemübungen (Komplikation Lippenzyanose), dann verschiebt sich deine ganze restliche Tour. Herr Yilmaz wartet 5 Min länger auf seine Medikamente. Das ist kein Drama — aber es zeigt, warum jede Minute zählt.",
        glossarBegriffe: [
          "Tour",
          "Tourenplanung",
          "Bezugspflege",
          "Übergabe",
        ],
      },
      contentB1: {
        title: "Frau Kovač ist nicht deine einzige Patientin",
        body: "Du hast 45 Minuten bei Frau Kovač. **Davor und danach sind andere Patienten.** In der ambulanten Pflege fährst du eine **Tour** — 5 bis 10 Patienten an einem Vormittag.\n\n**Beispiel deiner Morgenrunde:**\n- 06:30 — Herr Schmidt: Insulin + Frühstück\n- 07:15 — Frau Tanaka: Wundversorgung\n- **07:30 — Frau Kovač: Vollpflege + Atem-Übungen**\n- 08:25 — Herr Yilmaz: Medikamente\n- ... bis ca. 12:00 Uhr.\n\n**Was bedeutet das?**\n1. Du kannst **nicht länger bleiben**. Der nächste Patient wartet schon.\n2. Wenn Frau Kovač eine Krise hat (Atemnot, Sturz), entscheidest du: bleibe ich oder fahre ich weiter? Bei Gefahr bleibst du. Der Pflegedienst sagt dem nächsten Patienten Bescheid.\n3. Du dokumentierst zwischen den Besuchen, oft im Auto.\n4. Frau Kovač sieht morgens dich, abends Petra, andere Tage andere. **Was wichtig ist, schreibst du auf** — sonst weiß die Kollegin morgen nichts.\n\nDas ist die ambulante Realität: wenig Zeit, viele Patienten, **Doku ist deine Stimme** wenn du nicht da bist.",
        glossarBegriffe: ["Tour", "Übergabe"],
      },
    },
  ],
  geschaetzteDauer: 20,
};

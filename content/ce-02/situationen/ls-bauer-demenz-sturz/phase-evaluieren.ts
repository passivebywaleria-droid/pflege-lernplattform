// CE-02 Situation Herr Bauer — Demenz und Sturz — Phase 5: Evaluieren
// Steps: 7 (4 Kern + 1 Inline-Wissen + 2 Optional) · Bloom: B2-B5 (mit B6-Anteil in Reflexion)
// Quelle: content/ce-02/situationen/ls-bauer-demenz-sturz/phase-evaluieren.md
// Pipeline v9 — 2026-04-23
// Inline-Wissen: 1 Baustein (sturz-prophylaxe Wiederbegegnung — Evaluation)

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_BAUER_DEMENZ_STURZ_EVALUIEREN: SituationsPhase = {
  phaseId: "ls-bauer-evaluieren",
  phase: "evaluieren",
  titel: "Evaluieren",
  titelB1: "Prüfen was funktioniert hat",
  kontext:
    "Szenensprung: Es ist 15:30 Uhr, Nachmittag. Du bist jetzt im Spätdienst-Beginn. Frau Meier gibt dir kurz Rückmeldung: 'Herr Bauer hat heute bis jetzt zusammen ca. 1000 ml getrunken (200 Frühstück, 400 Mittag, 400 Nachmittag) — besser als gestern. Kein erneuter Sturz. Aber er war mittags wieder sehr unruhig und hat versucht, die Einheit zu verlassen.' Dann: Tochter Ingrid Bauer steht an der Rezeption. Sie hat von dem nächtlichen Sturz erfahren — durch einen Anruf der Nachtstation. Sie ist aufgewühlt, macht sich Vorwürfe. Ihr erstes Wort zu dir: 'Hätte das nicht verhindert werden können? Warum war er allein im Flur?' Das ist der schwierigste Moment des Tages. Nicht medizinisch — emotional.",
  kontextB1:
    "Es ist 15:30 Uhr. Spätdienst. Frau Meier sagt dir: 'Herr Bauer hat bis jetzt zusammen ca. 1000 ml getrunken (200 Frühstück, 400 Mittag, 400 Nachmittag) — besser als gestern. Er ist nicht gestürzt. Aber mittags war er wieder sehr unruhig.' Dann kommt Tochter Ingrid. Sie hat von dem Sturz heute Nacht erfahren. Sie ist aufgewühlt. Sie sagt zu dir: 'Hätte das nicht verhindert werden können? Warum war er allein im Flur?' Das ist der schwerste Moment des Tages — nicht medizinisch, sondern emotional.",
  kernSteps: [
    // Step 5.1 — Categorize: Pflegeziele erreicht/offen/anzupassen
    {
      stepId: "ce02-bauer-eval-01-ziele-pruefung",
      phase: 5,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Fiechter/Meier (1981): Pflegeprozess-Modell"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-bauer-eval-pflegeziele",
      tag: "pflege",
      contentC1: {
        title: "Pflegeziele — was wurde erreicht?",
        body: "Welche der heute geplanten Pflegeziele wurden erreicht, welche sind noch offen, welche müssen angepasst werden? Sortiere die Ergebniskarten.",
        glossarBegriffe: ["Evaluation", "Pflegeziel", "Anpassung"],
      },
      contentB1: {
        title: "Was hat heute funktioniert?",
        body: "Sortiere die Karten: Was wurde heute erreicht? Was nicht? Was muss morgen geändert werden?",
        glossarBegriffe: ["Evaluation", "Pflegeziel"],
      },
      question: {
        fragetext:
          "Ordne jede Karte einer Kategorie zu: 'Erreicht', 'Noch offen', 'Muss angepasst werden'.",
        categories: [
          { name: "Heute erreicht" },
          { name: "Noch offen" },
          { name: "Muss angepasst werden" },
        ],
        categoryItems: [
          {
            text: "Körperpflege durchgeführt (komplikationsreduziert, zweiter Anlauf)",
            correctCategory: 0,
          },
          {
            text: "Kniebewegung 2× passiv durchgeführt",
            correctCategory: 0,
          },
          {
            text: "Mundschleimhaut befeuchtet (Wattestäbchen)",
            correctCategory: 0,
          },
          {
            text: "Trinkmenge bis Schichtende ca. 1000 ml (200 ml Frühstück + 400 ml Mittag + 400 ml Nachmittag)",
            correctCategory: 0,
          },
          {
            text: "Trinkziel 1500 ml täglich noch nicht erreicht (heute 1000 ml — Etappe 1300 ml ebenfalls offen)",
            correctCategory: 1,
          },
          {
            text: "Nachtlicht + Niedrigbett — noch nicht umgesetzt, Übergabe an Nachtdienst nötig",
            correctCategory: 1,
          },
          {
            text: "Mobilisation an Bettrand — zurückgestellt, morgen erneuter Versuch",
            correctCategory: 2,
          },
          {
            text: "Sensormatte am Boden — muss noch bestellt/eingeholt werden",
            correctCategory: 1,
          },
        ],
      },
    },

    // Step 5.1b — Inline-Wissen: Sturz-Prophylaxe Evaluation (Wiederbegegnung)
    // Sturz-Prophylaxe-Maßnahmen wurden in Phase 3 geplant. Hier: Wie evaluiert
    // man ob Sturzschutz-Maßnahmen wirken? Was ist der Unterschied zwischen
    // "kein Sturz heute" und "wirksamer Sturzschutz"?
    {
      stepId: "ce02-bauer-eval-01b-sturzschutz-evaluation",
      phase: 5,
      stepType: "inlineWissen",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP 2022 — Expertenstandard Sturzprophylaxe, Kriterium E5",
        "Fiechter/Meier (1981): Pflegeprozess-Modell",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-eval-sturzschutz-evaluation",
      tag: "pflege",
      themaPrimaer: "sturz-prophylaxe",
      themenSekundaer: ["kontraktur-prophylaxe"],
      transition: "Sturzschutz evaluiert. Jetzt wartet Ingrid — das schwierigste Gespraech des Tages.",
      contentC1: {
        title: "Sturzschutz evaluieren — wann ist eine Maßnahme wirksam?",
        body: "",
        glossarBegriffe: ["Evaluation", "Sturzprophylaxe", "DNQP Kriterium E5"],
      },
      contentB1: {
        title: "Hat der Sturzschutz funktioniert?",
        body: "",
        glossarBegriffe: ["Evaluation", "Sturzschutz"],
      },
      inlineWissen: {
        bausteinRef: "sturz-prophylaxe-evaluation",
        wiederbegegnung: {
          basisBausteinId: "sturz-prophylaxe-risikofaktoren-spektrum",
          basisPatient: "Frau M.",
          vertiefung:
            "Sturzrisikofaktoren und Maßnahmen kennst du — jetzt die Evaluations-Frage: Herr Bauer ist heute nicht gestuerzt. Heißt das, die Maßnahmen wirken? Nicht unbedingt. Der DNQP 2022 (Kriterium E5) unterscheidet: **Ergebnis-Evaluation** (kein Sturz) und **Prozess-Evaluation** (wurden alle Maßnahmen umgesetzt?). Beides zusammen ergibt das Bild.",
          vertiefungB1:
            "Du kennst die Sturzrisiken von Phase 1 und die Maßnahmen von Phase 3. Herr Bauer ist heute nicht gestuerzt. Heißt das, alles hat funktioniert? Nicht unbedingt. Du musst pruefen: Wurden alle Maßnahmen gemacht? Und: Hat er nicht gestuerzt WEIL sie gemacht wurden?",
        },
        storyAufhaenger:
          "Es ist 15:30 Uhr. Herr Bauer ist heute nicht gestuerzt. Trinkmenge bei 1000 ml (Ziel 1500). Nachtlicht und Niedrigbett stehen noch nicht. War der Tag ein Erfolg?",
        storyAufhaengerB1:
          "Es ist 15:30 Uhr. Herr Bauer ist nicht gestuerzt. Aber er hat nur 1000 ml getrunken und Nachtlicht fehlt noch. War das ein guter Tag?",
        kerntext:
          "Der DNQP 2022 (Kriterium E5) fordert bei Sturzprophylaxe eine **systematische Evaluation** — nicht nur \"ist er gestuerzt oder nicht\".\n\n**Zwei Evaluations-Ebenen:**\n\n• **Ergebnis-Evaluation:** Hat sich das Sturzrisiko veraendert? Bei Herr Bauer: kein erneuter Sturz heute — aber das Risikoprofil ist unveraendert (Demenz + Mirtazapin + Inkontinenz + Desorientierung). Einzelergebnis ≠ Risikoreduktion.\n\n• **Prozess-Evaluation:** Wurden alle geplanten Maßnahmen umgesetzt?\n  - Niedrigbett eingerichtet? → **Nein** (noch nicht umgesetzt)\n  - Nachtlicht installiert? → **Nein** (Uebergabe an Nachtdienst)\n  - Toilettengang vor Schlafengehen? → **Noch nicht geprueft**\n  - Mirtazapin-Dosis beim Arzt gemeldet? → **Ja**\n  - Sensormatte bestellt? → **Nein** (offen)\n\n**Evaluation-Intervalle bei hohem Sturzrisiko:**\n\n• Taeglich in den ersten 72h nach Sturzereignis\n• Dann woechentlich\n• Bei jedem Sturzfolge-Ereignis sofort neu\n\n**Sturz trotz Maßnahmen?** Kein Versagen — aber Anlass fuer Re-Assessment und Plan-Anpassung.",
        kerntextB1:
          "Evaluation heißt: **Pruefe ob dein Plan funktioniert hat.**\n\n**Zwei Fragen:**\n\n• **Ist er gestuerzt?** Heute nicht — gut. Aber sein Risiko ist noch genau so hoch wie gestern.\n\n• **Wurden alle Maßnahmen gemacht?**\n  - Niedrigbett? → Nein\n  - Nachtlicht? → Nein\n  - Toilette vor dem Schlafen? → Noch nicht geprueft\n  - Arzt wegen Mirtazapin? → Ja\n\n**Wann evaluieren?**\n\n• Erste 3 Tage nach Sturz: taeglich\n• Dann: jede Woche\n• Bei neuem Sturz: sofort",
        faustregel:
          "Kein Sturz heute heißt nicht: Sturzschutz wirkt. Erst wenn alle Maßnahmen umgesetzt UND kein Sturz = Erfolg.",
        faustregelB1:
          "Kein Sturz heute = gut. Aber erst wenn ALLE Maßnahmen auch gemacht sind, kannst du sagen: Es funktioniert.",
        spektrum: [
          {
            patientName: "Frau M.",
            situationsId: "frau-m-nacht-sturz",
            hauptfaktor: "Erster Sturz, Parkinson",
            kurzbeschreibung:
              "Bei Frau M. zeigt die Evaluation nach 72h: Schellong-Protokoll, NRS-Verlauf, Betthoehe angepasst, Rufknopf in Reichweite. Ihr Sturz war situativ (Pneumonie + Nacht) — Risiko sinkt mit Genesung.",
          },
          {
            patientName: "Frau Yilmaz",
            situationsId: "ls-yilmaz-hueft-tep",
            hauptfaktor: "Post-OP, Erstmobilisation",
            kurzbeschreibung:
              "Nach Hueft-TEP: Evaluation fokussiert auf Mobilisationsfortschritt (Tag 1: Bettrand, Tag 2: Stehen, Tag 3: erste Schritte). Sturzschutz = engmaschige Physiotherapie + Gehwagen.",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Polyneuropathie, chronisch",
            kurzbeschreibung:
              "Bei chronischem Sturzrisiko (Polyneuropathie): Evaluation nicht taeglich sondern monatlich. Ziel: Stabilitaet erhalten, nicht Risiko eliminieren. Schuhwerk-Check, Fußinspektion, Gleichgewichtsuebungen.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Herr Bauer ist heute nicht gestuerzt. Nachtlicht und Niedrigbett stehen noch nicht. Ist die Sturzprophylaxe erfolgreich?",
          rueckseite:
            "**Nein** — Ergebnis (kein Sturz) ≠ Prozess (Maßnahmen umgesetzt). DNQP 2022, E5 fordert **beide** Evaluationsebenen. Bei Herrn Bauer: Nachtlicht, Niedrigbett, Sensormatte NICHT umgesetzt → Prozess-Evaluation NICHT bestanden. Evaluations-Intervalle: taeglich in 72h nach Sturz, dann woechentlich. Spektrum: Frau M. (situativ, sinkt mit Genesung), Yilmaz (Mobilisationsfortschritt), Schmidt (chronisch, monatlich). Faustregel: **Kein Sturz + alle Maßnahmen umgesetzt = Erfolg. Kein Sturz allein = Zufall.**",
        },
      },
    },

    // Step 5.2 — Dialog: Angehörigen-Gespräch mit Ingrid
    {
      stepId: "ce02-bauer-eval-02-angehoerigen-gespraech",
      phase: 5,
      stepType: "dialog",
      bloomLevel: 5,
      kompetenzbereich: "V.1",
      quellen: [
        "Kitwood T. (1997)",
        "DNQP Beziehungsgestaltung Demenz 2018",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-bauer-eval-angehoerigenkommunikation",
      tag: "pflege",
      contentC1: {
        title: "Gespräch mit Tochter Ingrid",
        body: "Vorbedingung geklärt: Bevor du Auskunft gibst, prüfst du in der Akte: Ingrid Bauer ist als gesetzliche Betreuerin (Bestellung 2024, Aufgabenkreis Gesundheitssorge) eingetragen — Auskunft ist also rechtlich zulässig (§ 203 StGB Schweigepflicht ↔ Betreuung nach § 1814 BGB; DSGVO Art. 9). Wäre sie nicht Betreuerin, müsstest du an Stationsleitung verweisen.\n\nIngrid Bauer (55, Grundschullehrerin) steht vor dir. Aufgewühlt, Schuldgefühle im Gesicht. Ihr erster Satz: 'Hätte das nicht verhindert werden können? Warum war er allein im Flur?' — Du führst das Gespräch.",
        glossarBegriffe: [
          "Empathie",
          "Angehörigenkommunikation",
          "Schuldgefühle",
          "Transparenz",
          "Schweigepflicht",
          "Gesetzliche Betreuung",
        ],
      },
      contentB1: {
        title: "Gespräch mit der Tochter",
        body: "Wichtig vorher: Du schaust kurz in die Akte: Ist Ingrid die gesetzliche Betreuerin? Bei Herrn Bauer: ja (seit 2024). Das heißt: Du darfst ihr Auskunft geben. Wenn nicht: an die Stationsleitung verweisen.\n\nIngrid Bauer kommt zur Station. Sie ist aufgeregt und macht sich Vorwürfe. Sie fragt: 'Hätte das nicht verhindert werden können? Warum war er allein im Flur?' — Was sagst du?",
        glossarBegriffe: ["Empathie", "Schuldgefühle", "Ehrlichkeit", "Schweigepflicht", "Betreuung"],
      },
      question: {
        fragetext: "Führe das Gespräch mit Ingrid in 5 Schritten.",
        patientName: "Ingrid Bauer (Tochter)",
        dialogPhases: [
          {
            context:
              "Ingrid Bauer schaut dich an, Augen feucht. Sie sagt: 'Hätte das nicht verhindert werden können? Warum war er allein im Flur?'",
            contextB1:
              "Ingrid schaut dich an. Ihre Augen sind feucht. Sie sagt: 'Hätte das nicht verhindert werden können?'",
            speaker: "Ingrid",
            options: [
              {
                text: "\"Frau Bauer, ich kann verstehen, wie aufgewühlt Sie gerade sind. Ich bin froh, dass Sie hier sind — ich möchte Ihnen erklären, was in der Nacht passiert ist.\"",
                textB1:
                  "\"Frau Bauer, ich verstehe, dass Sie aufgewühlt sind. Ich erkläre Ihnen was passiert ist.\"",
                patientResponse:
                  "Ingrid atmet aus. \"Ja. Bitte.\" Ihre Hände entspannen sich leicht.",
                patientResponseB1:
                  "Ingrid atmet aus. \"Ja, bitte.\"",
                score: 3,
                feedback:
                  "Richtig. Empathie zuerst — keine Rechtfertigung, kein Ablenkungsmanöver. Du nimmst ihr Gefühl ernst und kündigst an, dass du erklärst. Das ist der wichtigste erste Schritt.",
                feedbackB1:
                  "Sehr gut. Du nimmst ihre Aufregung ernst. Du rechtfertigst dich nicht. Du sagst: Ich erkläre es dir. Das beruhigt.",
              },
              {
                text: "\"Das ist eine sehr seltene Situation — so etwas passiert normalerweise nicht bei uns.\"",
                textB1:
                  "\"Das ist ein seltener Ausnahmefall. Das passiert sonst nicht.\"",
                patientResponse:
                  "Ingrid schaut skeptisch. \"Aber es ist passiert.\"",
                patientResponseB1:
                  "Ingrid sagt: \"Aber es ist passiert.\"",
                score: 0,
                feedback:
                  "Defensiv und wenig glaubwürdig. Ingrid weiß, dass Stürze bei Demenz häufig vorkommen — das ist kein Ausnahmefall. Defensive Reaktionen verringern Vertrauen. Ehrlichkeit und Empathie sind wirksamer.",
                feedbackB1:
                  "Falsch. Du versuchst dich zu schützen. Aber Ingrid merkt: Das stimmt nicht. Stürze kommen bei Demenz oft vor. Ehrlichkeit ist besser.",
              },
              {
                text: "\"Wir tun alles was wir können, aber Stürze können wir leider nicht immer verhindern.\"",
                textB1:
                  "\"Wir tun alles — aber Stürze kann man nicht immer verhindern.\"",
                patientResponse:
                  "Ingrid hört zu — aber ihr Gesicht bleibt angespannt.",
                patientResponseB1:
                  "Ingrid hört zu. Aber sie ist noch angespannt.",
                score: 1,
                feedback:
                  "Nicht falsch — aber noch nicht genug. Das ist eine sachliche Antwort, aber sie geht nicht auf Ingrids emotionalen Zustand ein. Zuerst Empathie, dann Information.",
                feedbackB1:
                  "Nicht falsch — aber Ingrid braucht zuerst das Gefühl, dass du sie verstehst. Dann erst die sachliche Erklärung.",
              },
            ],
          },
          {
            context:
              "Du hast Ingrid zugehört und Empathie gezeigt. Jetzt erkläre ihr ruhig was in der Nacht passiert ist.",
            contextB1:
              "Jetzt erkläre Ingrid ruhig was in der Nacht passiert ist.",
            speaker: "Du",
            options: [
              {
                text: "\"Ihr Vater ist in der Nacht aufgestanden — wahrscheinlich wegen des Harndrangs oder Desorientierung. Die Nachtpflegerin hat ihn schnell gefunden, sitzend, ansprechbar, ohne Verletzungen. Sie hat ihn zurück ins Bett gebracht und ein Protokoll begonnen.\"",
                textB1:
                  "\"Ihr Vater ist nachts aufgestanden — wahrscheinlich Harndrang oder Verwirrtheit. Die Nachtschwester hat ihn schnell gefunden. Er saß auf dem Boden. Keine Verletzungen. Sie hat ihn zurück ins Bett gebracht.\"",
                patientResponse:
                  "Ingrid nickt langsam. \"Das klingt nach Papa. Er steht nachts immer auf.\"",
                patientResponseB1:
                  "Ingrid nickt. \"Das klingt nach Papa.\"",
                score: 3,
                feedback:
                  "Vollständig, ehrlich, ohne Schuldzuweisung. Du beschreibst das Ereignis klar, nennst was die Nachtpflege getan hat und bleibst sachlich.",
                feedbackB1:
                  "Sehr gut. Klar, ehrlich, kurz. Du sagst was passiert ist — nicht mehr und nicht weniger.",
              },
              {
                text: "\"Ich kann dazu nicht viel sagen — das war die Nachtschicht, ich war da nicht dabei.\"",
                textB1:
                  "\"Ich war nicht dabei — das war die Nachtschicht.\"",
                patientResponse:
                  "Ingrid schaut enttäuscht. \"Aber jemand muss mir doch etwas sagen können.\"",
                patientResponseB1:
                  "Ingrid schaut enttäuscht.",
                score: 0,
                feedback:
                  "Nicht ok. Du kennst den Sachverhalt aus der Übergabe — das ist genug um es zu erklären. 'Ich war nicht dabei' lässt Ingrid im Stich. Die Pflegedokumentation gehört allen im Team.",
                feedbackB1:
                  "Falsch. Du weißt es aus der Übergabe. Du musst nicht dabei gewesen sein um es zu erklären. Ingrid braucht eine Antwort von dir.",
              },
            ],
          },
          {
            context:
              "Ingrid fragt: 'Was wird jetzt konkret geändert, damit das nicht wieder passiert?'",
            contextB1:
              "Ingrid fragt: 'Was ändert sich jetzt, damit er nicht wieder stürzt?'",
            speaker: "Ingrid",
            options: [
              {
                text: "\"Wir stellen heute Nacht das Bett auf die niedrigste Position, bringen ein Nachtlicht an und bieten Ihrem Vater vor dem Schlafengehen den Toilettengang an. Außerdem wurde die Medikation dem Arzt gemeldet — Mirtazapin erhöht möglicherweise das Sturzrisiko.\"",
                textB1:
                  "\"Wir machen heute Nacht: Bett niedrig stellen, Nachtlicht anmachen, Toilette vor dem Schlafen anbieten. Und der Arzt schaut sich das Schlafmittel an.\"",
                patientResponse:
                  "Ingrid atmet hörbar aus. \"Das klingt gut. Danke, dass Sie mir das erklären.\"",
                patientResponseB1:
                  "Ingrid atmet aus. \"Danke. Das klingt gut.\"",
                score: 3,
                feedback:
                  "Konkret, vollständig, handlungsorientiert. Du nennst spezifische Maßnahmen und zeigst dass das Team bereits handelt. Ingrid sieht: Es passiert etwas.",
                feedbackB1:
                  "Sehr gut. Drei konkrete Dinge. Ingrid sieht: Ihr Vater ist sicherer heute Nacht.",
              },
              {
                text: "\"Wir werden alles tun, um zukünftige Stürze zu verhindern — da können Sie sich auf uns verlassen.\"",
                textB1:
                  "\"Wir tun alles, damit es nicht wieder passiert.\"",
                patientResponse:
                  "Ingrid nickt — aber wirkt nicht beruhigt.",
                patientResponseB1:
                  "Ingrid nickt, aber ist noch unsicher.",
                score: 1,
                feedback:
                  "Zu vage. \"Wir tun alles\" ist eine Floskel ohne Inhalt. Ingrid braucht konkrete Maßnahmen, keine Versprechen. Nenne was genau heute Nacht passiert.",
                feedbackB1:
                  "Zu vage. \"Alles tun\" — was genau? Ingrid braucht konkrete Informationen, keine allgemeinen Versprechen.",
              },
            ],
          },
          {
            context:
              "Plötzlich kommt Herr Bauer in einem Rollstuhl in die Flurnähe — eine Pflegerin hat ihn zum Nachmittagsspaziergang gefahren. Er sieht Ingrid und sagt:",
            contextB1:
              "Plötzlich kommt Herrn Bauer im Rollstuhl auf den Flur. Er sieht Ingrid und sagt:",
            speaker: "Herr Bauer",
            options: [
              {
                text: "Du lässt den Moment wirken — schweigst kurz und beobachtest.",
                textB1:
                  "Du wartest kurz und schaust was passiert.",
                patientResponse:
                  "Herr Bauer streckt die Hand aus und sagt: \"Mein Kind...\" Ingrid tritt auf ihn zu, nimmt seine Hand. Ihre Augen füllen sich mit Tränen.",
                patientResponseB1:
                  "Herr Bauer sagt: \"Mein Kind...\" Ingrid geht zu ihm hin. Sie nimmt seine Hand.",
                score: 3,
                feedback:
                  "Richtig. Manchmal ist Schweigen die beste Pflege-Handlung. Du lässt Vater und Tochter diesen Moment haben — das ist Beziehungsgestaltung nach Kitwood.",
                feedbackB1:
                  "Richtig. Du machst Platz für diesen Moment. Vater und Tochter brauchen gerade keine Pflege-Worte.",
              },
              {
                text: "Du sagst: \"Herr Bauer, das ist Ihre Tochter Ingrid — erkennen Sie sie?\"",
                textB1:
                  "Du sagst: \"Das ist Ihre Tochter Ingrid — kennen Sie sie?\"",
                patientResponse:
                  "Herr Bauer schaut dich an, dann Ingrid — der Moment ist gebrochen.",
                patientResponseB1:
                  "Herr Bauer schaut dich an. Der Moment ist vorbei.",
                score: 0,
                feedback:
                  "Du unterbrichst einen lichten Moment. Herr Bauer erkennt Ingrid — das ist ein kostbares Ereignis. Solche Momente brauchen keine pflegerische Moderation.",
                feedbackB1:
                  "Du unterbrichst. Herrn Bauer erkennt gerade seine Tochter — das ist selten und wertvoll. Solche Momente brauchen Stille.",
              },
            ],
          },
          {
            context:
              "Nach dem Moment zwischen Herr Bauer und Ingrid: Wie schließt du das Gespräch ab?",
            contextB1:
              "Wie beendest du das Gespräch mit Ingrid?",
            speaker: "Du",
            options: [
              {
                text: "\"Frau Bauer, ich freue mich, dass Sie heute da sind. Ihr Vater erkennt Sie — das ist etwas Besonderes. Wenn Sie morgen anrufen möchten um zu hören wie die Nacht war, rufen Sie gerne an. Und wenn Sie Fragen haben — ich bin ansprechbar.\"",
                textB1:
                  "\"Frau Bauer, schön dass Sie da waren. Ihr Vater hat Sie erkannt — das ist schön. Wenn Sie morgen anrufen wollen, rufen Sie an. Fragen Sie mich — ich helfe Ihnen.\"",
                patientResponse:
                  "Ingrid lächelt das erste Mal. \"Danke. Das hat mir sehr geholfen.\"",
                patientResponseB1:
                  "Ingrid lächelt. \"Danke.\"",
                score: 3,
                feedback:
                  "Abschluss mit Kontinuität: Du bestätigst den positiven Moment, bietest konkrete Kontaktmöglichkeit, endest mit Offenheit. Ingrid fühlt sich gehört und begleitet.",
                feedbackB1:
                  "Sehr gut. Du endest positiv. Du gibst ihr einen Plan (anrufen). Sie geht beruhigt nach Hause.",
              },
              {
                text: "\"Okay, ich muss jetzt weiter — wir haben noch viel zu tun. Falls Sie Fragen haben, wenden Sie sich an die Stationsleitung.\"",
                textB1:
                  "\"Ich muss weiter. Bei Fragen: Stationsleitung.\"",
                patientResponse:
                  "Ingrid nickt, wirkt etwas verloren.",
                patientResponseB1:
                  "Ingrid nickt. Sie schaut ein bisschen verloren.",
                score: 0,
                feedback:
                  "Abbruch ohne Abschluss. Der Gesprächsmoment verdient einen würdigen Abschluss — nicht eine Weiterleitung. Ingrid verlässt die Station ohne das Gefühl, begleitet worden zu sein.",
                feedbackB1:
                  "Du beendest das Gespräch zu abrupt. Ingrid braucht einen richtigen Abschluss — kein 'Ich muss weiter'.",
              },
            ],
          },
        ],
      },
    },

    // Step 5.3 — Text: Schuldgefühle von Angehörigen
    {
      stepId: "ce02-bauer-eval-03-schuld-entlastung",
      phase: 5,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "V.1",
      quellen: [
        "Kitwood T. (1997)",
        "DNQP Beziehungsgestaltung Demenz 2018",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-bauer-eval-angehoerige-verstaendnis",
      tag: "pflege",
      displayFormat: "scenario",
      contentC1: {
        title: "Angehörige von Demenz-Patienten — was wir wissen",
        body: "Gesprächssituation mit Ingrid Bauer, Nachmittag.\n\n3 Dinge die du über Angehörige von Menschen mit Demenz im Pflegeheim wissen solltest:\n\n1. Schuldgefühle beim Heimübergang sind normal und sehr häufig — das Gespräch mit Ingrid ist pflegerische Aufgabe, nicht nur Sozialarbeit. Das DNQP (2018) nennt Angehörige ausdrücklich als Teil der Pflegebeziehung.\n\n2. Angehörige sind Experten für den Menschen — Ingrid kennt ihren Vater besser als das gesamte Pflegeteam. Sie weiß welches Lied ihn beruhigt, welche Geste er liebt. Diese Information ist Ressource.\n\n3. Angehörige brauchen Entlastung, keine Bewertung — Ingrid macht sich Vorwürfe ('Hätte ich ihn nicht ins Heim geben sollen?'). Die Pflege beantwortet keine Fragen die sie sich selbst stellen muss. Aber die Pflege kann bestätigen: 'Sie haben eine sehr schwere Entscheidung getroffen — und das aus Liebe.' (Kitwood T. 1997: Demenz reconsidered).",
        glossarBegriffe: ["Angehörigenberatung", "Schuldgefühle", "Person-Centered Care"],
      },
      contentB1: {
        title: "Angehörige von Demenz-Patienten",
        body: "Gespräch mit Ingrid Bauer.\n\n3 wichtige Dinge:\n\n1. Schuldgefühle sind normal — fast alle Angehörigen haben Schuldgefühle wenn jemand ins Heim kommt. Das Gespräch mit ihr ist deine Aufgabe als Pflegeperson.\n\n2. Angehörige kennen den Menschen — Ingrid kennt ihren Vater besser als du. Was beruhigt ihn? Was mag er? Sie weiß es.\n\n3. Sie brauchen Entlastung — keine Vorwürfe. Ingrid fragt sich: 'Habe ich richtig entschieden?' Das kannst du nicht beantworten. Aber du kannst sagen: 'Das war eine schwere Entscheidung — aus Liebe.'",
        glossarBegriffe: ["Angehörige", "Schuldgefühle", "Demenz"],
      },
    },

    // Step 5.4 — Reflection: Tag-Reflexion
    {
      stepId: "ce02-bauer-eval-04-reflexion-tag",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "II.1",
      quellen: ["Kitwood T. (1997)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-bauer-eval-reflexion",
      tag: "pflege",
      contentC1: {
        title: "Reflexion: Was hat dich heute überrascht?",
        body: "Nach einem langen Tag mit Herrn Bauer und Ingrid: Was hat dich am meisten überrascht — beim Umgang mit Herrn Bauer ODER beim Gespräch mit seiner Tochter? Was würdest du beim nächsten Mal anders machen?",
        glossarBegriffe: ["Reflexion", "Professionalisierung"],
      },
      contentB1: {
        title: "Was hast du heute gelernt?",
        body: "Was hat dich heute überrascht — bei Herrn Bauer ODER beim Gespräch mit Ingrid? Was machst du beim nächsten Mal anders?",
        glossarBegriffe: ["Reflexion", "Lernen"],
      },
      question: {
        fragetext:
          "Was hat dich heute am meisten überrascht? Was würdest du beim nächsten Mal anders machen?",
        reflection: {
          prompt:
            "Schreibe frei. Es gibt kein Richtig oder Falsch. Deine ehrliche Reflexion ist der Lerngewinn.",
          placeholder:
            "Was mich heute überrascht hat, war... Beim nächsten Mal würde ich...",
          systemPrompt:
            "Der Schüler reflektiert einen Tag in der Demenzpflege (Herr Bauer + Angehörigengespräch mit Ingrid). Gib Sandwich-Feedback: 1) Was der Schüler gut erkannt hat (Demenz = Angst, nicht Böswilligkeit; Angehörige brauchen Entlastung; Dokumentation schützt das Team), 2) Ergänzung falls Aspekte fehlen (Spaced Repetition, Teamkommunikation, Biographiearbeit), 3) Ermutigung für die weitere Ausbildung.",
        },
      },
    },
  ],

  optionaleSteps: [
    // Step 5.5 — VIPS-Modell
    {
      stepId: "ce02-bauer-eval-05-vips-modell",
      phase: 5,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Kitwood T. (1997): Dementia Reconsidered"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-bauer-eval-vips",
      tag: "krankheitslehre",
      displayFormat: "crossref",
      contentC1: {
        title: "VIPS-Modell der personenzentrierten Pflege",
        body: "Das VIPS-Modell nach Kitwood (1997) beschreibt personenzentrierte Pflege bei Demenz in 4 Dimensionen:\n\nV — Value (Würde): Jeder Mensch hat einen Wert — unabhängig von Kognition oder Kooperation. Herr Bauers Würde gilt auch wenn er schlägt.\n\nI — Individual (Einzigartigkeit): Herr Bauer ist Schreiner, war verheiratet, mag Freddy Quinn. Diese Biographie ist der Schlüssel zur Pflege.\n\nP — Perspective (Innenperspektive): Wie erlebt Herr Bauer die Pflegesituation? Er hat Angst — das ist seine Realität.\n\nS — Social (Soziale Einbettung): Ingrid ist Teil des Pflegesystems — nicht Besucher, sondern Partnerin.\n\nQuelle: Kitwood T. (1997): Dementia Reconsidered. Open University Press.",
        glossarBegriffe: ["VIPS-Modell", "Personenzentrierte Pflege", "Würde"],
      },
      contentB1: {
        title: "VIPS — Pflege für Menschen mit Demenz",
        body: "Das VIPS-Modell erklärt, wie man Menschen mit Demenz gut pflegt. 4 Buchstaben:\n\nV = Würde: Herr Bauer hat Würde — auch wenn er schlägt oder laut ist.\nI = Einzigartigkeit: Er war Schreiner. Er mag Freddy Quinn. Das ist wichtig für die Pflege.\nP = Innenperspektive: Wie erlebt ER die Situation? Er hat Angst.\nS = Soziales: Ingrid ist Partner der Pflege — nicht nur Besucherin.\n\nQuelle: Kitwood T. (1997).",
        glossarBegriffe: ["VIPS", "Würde", "Demenz"],
      },
    },

    // Step 5.6 — Calculation: Flüssigkeitsbilanz
    {
      stepId: "ce02-bauer-eval-06-exsikkose-bilanz",
      phase: 5,
      stepType: "calculation",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["ICS Leitlinien", "Pflegeprozess-Standard Flüssigkeitsbilanzierung"],
      track: "vertiefung",
      modus: "challenge",
      lernziel: "ce02-bauer-eval-fluessigkeitsbilanz",
      tag: "krankheitslehre",
      contentC1: {
        title: "Flüssigkeitsbilanz Herr Bauer",
        body: "Berechne die Flüssigkeitsbilanz von Herrn Bauer für heute. Einfuhr: 200 ml Frühstück + 400 ml Mittag + 400 ml Nachmittag = 1000 ml gesamt. Ausfuhr: Urin geschätzt ~750 ml, Perspiratio insensibilis ~800 ml (bei einem 82-jährigen, immobilen Patienten, Lehrbuch-Schätzung ca. 700–1000 ml/Tag — bei Fieber oder Wärme deutlich höher) = 1550 ml. Bilanz = Einfuhr minus Ausfuhr. Was bedeutet das für morgen?",
        glossarBegriffe: [
          "Flüssigkeitsbilanz",
          "Perspiratio",
          "Einfuhr",
          "Ausfuhr",
          "Exsikkose",
        ],
      },
      contentB1: {
        title: "Wie viel Flüssigkeit hat Herr Bauer heute?",
        body: "Berechne: Herr Bauer hat heute getrunken: 200 ml + 400 ml + 400 ml = 1000 ml. Sein Körper hat verloren: ca. 750 ml Urin + ca. 800 ml durch die Haut und Atmung (Schätzung Lehrbuch) = 1550 ml. Bilanz = Was rein kommt minus was raus geht. Was bedeutet das?",
        glossarBegriffe: ["Flüssigkeitsbilanz", "Einfuhr", "Ausfuhr"],
      },
      question: {
        fragetext:
          "Berechne die Flüssigkeitsbilanz: Einfuhr (1000 ml) minus Ausfuhr (1550 ml). Ergebnis in ml.",
        calculation: {
          instruction:
            "Einfuhr: 1000 ml. Ausfuhr: 1550 ml. Berechne die Bilanz (Vorzeichen beachten).",
          formula: "Bilanz = Einfuhr − Ausfuhr",
          correctValue: -550,
          unit: "ml",
          tolerance: 0,
          explanation:
            "Bilanz = 1000 − 1550 = −550 ml. Negative Bilanz bedeutet: Herr Bauer verliert deutlich mehr als er aufnimmt. Morgen muss die Trinkmenge erhöht werden — Ziel 1500 ml. Ein Defizit dieser Größe über mehrere Tage = Exsikkoserisiko.",
          explanationB1:
            "1000 ml rein, 1550 ml raus = −550 ml. Minus = er verliert deutlich mehr als er bekommt. Morgen: mehr trinken. Ziel: 1500 ml.",
        },
      },
    },
  ],
  geschaetzteDauer: 20,
};

// CE-02 Situation Herr Nguyen — Phase 2: Beobachten
// Steps: 6 Kern + 3 Optional · Bloom: B3–B4 · Zeit: ~30–45 Min
// Brilliant-Prinzip: Step 2.1 (Stomafarbe-Frage VOR Erklärung)
// Quelle: content/ce-02/situationen/ls-nguyen-stoma/phase-beobachten.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_NGUYEN_STOMA_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-nguyen-stoma-beobachten",
  phase: "beobachten",
  titel: "Beobachten — Was sehe ich?",
  titelB1: "Beobachten — Was sehe ich bei Herrn Nguyen?",
  kontext:
    "Du betrittst Zimmer 6. Herr Nguyen liegt im Bett, das Kopfteil leicht erhöht. Er schaut zur Wand, als du hereinkommst. Tochter Linh sitzt auf dem Stuhl rechts, Handy in der Hand. Sie steht auf: 'Guten Morgen. Papa hat gut geschlafen.' Ehefrau Mai sitzt am Fenster. Sie lächelt kurz, dann schaut sie auf ihre Hände. Du begrüßt Herrn Nguyen auf Augenhöhe, erklärst auf Deutsch was du gleich tun wirst — Linh übersetzt. Herr Nguyen nickt knapp. Linh übersetzt leise: 'Er sagt, es ist ihm peinlich. Er möchte nicht, dass jemand das sieht.' Jetzt: systemische Beobachtung, bevor der Beutel geöffnet wird.",
  kontextB1:
    "Du gehst ins Zimmer 6. Herr Nguyen liegt im Bett. Er schaut zur Wand. Tochter Linh steht auf: 'Guten Morgen. Papa hat gut geschlafen.' Ehefrau Mai sitzt am Fenster. Du begrüßt Herrn Nguyen. Linh übersetzt. Linh sagt leise: 'Er sagt, es ist ihm peinlich. Er möchte nicht, dass jemand das sieht.' Jetzt: Erst schauen, dann handeln.",
  kernSteps: [
    // Step 2.1 — Hotspot: Stomafarbe (BRILLIANT-FRAGE)
    {
      stepId: "ce02-nguyen-beob-01-stomafarbe-frage",
      phase: 2,
      stepType: "hotspot",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-nguyen-beob-stoma-inspektion",
      tag: "pflege",
      bildkategorie: "prozedur",
      imageAlt:
        "Vier Stoma-Varianten nebeneinander: A rosig-rot (normal), B blass-weißlich (Durchblutungsstörung), C dunkel-livide (Nekrose-Verdacht), D mit Hautrötung und Mazeration",
      bildhinweis:
        "Four stoma close-up variants side by side, A: healthy pink-red stoma, B: pale whitish stoma, C: dark livid-purple stoma, D: stoma with surrounding red irritated skin, medical illustration style, copic marker sketch, absolutely no text no labels no words",
      contentC1: {
        title: "BRILLIANT-FRAGE: Was ist ein gesundes Stoma?",
        body: "Du siehst Herrn Nguyens Stoma zum ersten Mal (Beutel noch drauf, aber das Sichtfenster der Stomaplatte ermöglicht einen ersten Blick auf die Stomawand). Vor dir ist ein Bild mit vier Stoma-Varianten. Bevor wir erklären, was normal ist: Klicke auf das Bild, das den Normalzustand zeigt. Was sieht für dich nach 'alles in Ordnung' aus — und was würde dich besorgen?",
        glossarBegriffe: ["Stoma", "Stomaplatte", "Mazerierung", "livide"],
      },
      contentB1: {
        title: "Welches Stoma sieht gesund aus?",
        body: "Du schaust zum ersten Mal auf Herrn Nguyens Stoma (= Öffnung am Bauch). Du siehst 4 verschiedene Bilder von Stomata. Bevor wir erklären: Klicke auf das Bild, das normal und gesund aussieht.",
        glossarBegriffe: ["Stoma", "livide", "Mazerierung"],
      },
      question: {
        fragetext:
          "Klicke auf das Stoma, das Normalzustand zeigt. Was würde dich bei den anderen Varianten besorgen?",
        hotspot: {
          imageUrl: "/images/ce02/stoma-varianten.svg",
          imageAlt:
            "Vier Stoma-Varianten: A rosig-rot, B blass-weißlich, C dunkel-livide, D mit Hautrötung",
          instruction:
            "Klicke auf das Stoma, das einen gesunden Normalzustand zeigt.",
          zones: [
            {
              id: "A",
              x: 15,
              y: 50,
              radius: 12,
              label: "A — Rosig-rot (Normalzustand ✓)",
            },
            {
              id: "B",
              x: 38,
              y: 50,
              radius: 12,
              label: "B — Blass-weißlich (Durchblutungsstörung → sofort melden)",
            },
            {
              id: "C",
              x: 62,
              y: 50,
              radius: 12,
              label: "C — Dunkel-livide (Nekrose-Verdacht → Notfall)",
            },
            {
              id: "D",
              x: 85,
              y: 50,
              radius: 12,
              label: "D — Hautrötung + Mazerierung (Leckage-Folge → Versorgungsplan anpassen)",
            },
          ],
        },
      },
    },

    // Step 2.2 — Text (checklist): Gesundes Stoma — Normalzeichen
    {
      stepId: "ce02-nguyen-beob-02-stoma-normal",
      phase: 2,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-nguyen-beob-stoma-normalzeichen",
      tag: "pflege",
      displayFormat: "checklist",
      contentC1: {
        title: "Was ist ein gesundes Stoma? — Normalzeichen",
        body: "Nach dem Hotspot: Hier sind die klinischen Zeichen, die du bei der Stomainspektion beobachten und dokumentieren musst.\n\n☑ Farbe rosig bis kräftig rot (durchblutetes Schleimhautgewebe)\n☑ Schleimhaut feucht und leicht glänzend\n☑ Herausragen 1–2 cm über Hautniveau\n☑ Hautumgebung reizlos (keine Rötung, kein Ausschlag, keine **Mazerierung** — Aufweichung der Haut durch zu viel Feuchtigkeit)\n☑ Stomaöffnung zentral positioniert\n\n**Alarmzeichen (sofortiger Handlungsbedarf):**\n⚠ Blass/weißlich = Durchblutungsstörung → sofort Arzt informieren\n⚠ Livide/dunkel-violett oder schwarz = Nekrose-Verdacht → akuter Notfall, Stomatherapeuten + Arzt sofort rufen\n\nMerke: **Wundheilung** = der natürliche Prozess, mit dem der Körper geschädigtes Gewebe repariert. Phasen: Reinigung → Granulation → Epithelisation. Brauchen wir später bei Albumin und Ernährung.\n\nQuelle: (FG SKM, Handlungsempfehlungen Stomapflege, 2023)",
        glossarBegriffe: ["livide", "Mazerierung", "Nekrose", "Stomaplatte", "Wundheilung", "Haut", "Arzt", "Ernährung", "Albumin", "Granulation"],
      },
      contentB1: {
        title: "Ein gesundes Stoma — so sieht es aus",
        body: "Nach dem Bild: Das hier sind die Zeichen, dass das Stoma gesund ist:\n\n☑ Farbe: rosig bis kräftig rot\n☑ Schleimhaut feucht und glänzend\n☑ Steht 1–2 cm aus der Bauch-Wand heraus\n☑ Die Haut rund um das Stoma ist reizlos (nicht rot, kein Ausschlag)\n\n**Alarm-Zeichen (sofort melden!):**\n⚠ Blass oder weiß = Blut fließt nicht richtig → Arzt informieren\n⚠ Dunkel-lila oder schwarz = Gewebe stirbt ab → sofort Arzt rufen\n\nMerke: **Wundheilung** = wie der Körper Wunden repariert. Sie braucht Eiweiß (Albumin). Wenn jemand wenig isst, heilt die Wunde schlechter.",
        glossarBegriffe: ["Stoma", "livide", "Nekrose", "Wundheilung", "Haut", "Mazerierung", "Arzt", "Albumin"],
      },
    },

    // Step 2.3 — Highlight: Haut-Assessment
    {
      stepId: "ce02-nguyen-beob-03-haut-assessment",
      phase: 2,
      stepType: "highlight",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "FG SKM — Handlungsempfehlungen Stomapflege (2023)",
        "DNQP — Expertenstandard Pflege von Menschen mit chronischen Wunden (2. Aktualisierung 2015)",
        "AWMF S3-Leitlinie Lokaltherapie chronischer Wunden (Reg. 091-001)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-nguyen-beob-haut-assessment",
      tag: "pflege",
      contentC1: {
        title: "Haut-Assessment — was dokumentierst du sofort?",
        body: "Du hast jetzt die Abdeckung vorsichtig gelüftet. Du siehst die Haut rund um das Stoma und die Bauchdecke. Im folgenden Beobachtungstext sind 8 Informationen enthalten. Markiere alles, was du sofort in der Pflegedokumentation erfassen würdest.",
        glossarBegriffe: ["Mazerierung", "serös", "Stomaplatte"],
      },
      contentB1: {
        title: "Was schreibst du auf?",
        body: "Du schaust auf die Haut rund um das Stoma und auf die Bauch-Wunde. Im Text unten sind 8 Informationen. Markiere alles, was du in die Pflegeakte schreiben würdest.",
        glossarBegriffe: ["Mazerierung", "serös"],
      },
      question: {
        fragetext:
          "Markiere alle Beobachtungen, die du sofort in der Pflegedokumentation erfassen würdest.",
        highlightSegments: [
          {
            text: "Hautumgebung leicht gerötet (ca. 2 cm Radius um Stomaring)",
            isError: true,
            reason:
              "Dokumentationspflichtig — Hautveränderung um das Stoma ist ein früher Hinweis auf Mazerierung (Stomainhalt-Kontakt) oder Druckstelle durch Stomaplatte. Muss beobachtet und zeitlich verlaufsbewertet werden.",
            reasonB1:
              "Wichtig aufschreiben! Rote Haut rund um das Stoma kann ein Problem werden. Mazerierung (Haut wird durch Stomainhalt beschädigt) beginnt oft so.",
          },
          {
            text: "Stoma kräftig rosa, feucht, ca. 1,5 cm prominierend",
            isError: true,
            reason:
              "Dokumentationspflichtig — Stomafarbe, Feuchtigkeit und Prominenz sind die drei Kern-Parameter der täglichen Stomakontrolle. 'Kräftig rosa + feucht + 1,5 cm' = Normalzeichen → dokumentieren als Verlaufsparameter.",
            reasonB1:
              "Wichtig aufschreiben! Das ist der Normalzustand. Du schreibst ihn auf damit die nächste Schicht vergleichen kann.",
          },
          {
            text: "Bett-Laken sauber",
            isError: false,
            reason:
              "Kein Pflicht-Dokumentationselement — sauberes Laken ist kein klinisch relevanter Befund der Stomapflege. Nur relevant bei Leckage (dann: 'Bettlaken kontaminiert → gewechselt').",
            reasonB1:
              "Muss man nicht aufschreiben — sauberes Laken ist kein Pflegeproblem.",
          },
          {
            text: "Wundnaht unteres Abdomen leicht gerötet, seröse Absonderung am unteren Rand",
            isError: true,
            reason:
              "Dokumentationspflichtig — Wundnaht-Status post-OP ist tägliche Beobachtungspflicht. Die fünf Kardinalsymptome der Wundinfektion (Calor / Wärme, Rubor / Rötung, Dolor / Schmerz, Tumor / Schwellung, Functio läsa / Funktionseinschränkung) immer mitprüfen. 'Leicht gerötet + seröse Absonderung' ist am 4. POD noch grenzwertig-tolerierbar. Eskalations-Kriterien (sofortige Arzt-Information): Rötungs-Ausdehnung > 2 cm um Wunde, eitrige/trübe Absonderung, zunehmender Druckschmerz, lokale Wärme, neue Schwellung, Fieber. Quelle: DNQP Pflege chronischer Wunden; AWMF Wundbehandlung.",
            reasonB1:
              "Wichtig aufschreiben! Die Bauch-Wunde ist leicht rot. Am 4. Tag nach der OP ist das grenzwertig — du musst genau hinschauen. Alarm-Zeichen für Wundinfektion: 1) Rötung wird größer (> 2 cm), 2) Eiter (gelb-grünlich) statt klar-seröser Flüssigkeit, 3) starke Schmerzen, 4) Wunde wird warm, 5) Fieber. Wenn eines davon kommt → sofort Arzt informieren.",
          },
          {
            text: "Stoma-Beutel: bräunlich-gelblicher, dünnflüssiger Inhalt, ca. 1/3 gefüllt",
            isError: true,
            reason:
              "Dokumentationspflichtig — Stoma-Output (Konsistenz, Farbe, geschätzte Menge) ist ein Pflicht-Element der Stomadokumentation. Dünnflüssig-gelblich am 4. Tag ist normale Transitphase — aber dokumentiert als Baseline für Verlauf.",
            reasonB1:
              "Wichtig aufschreiben! Der Inhalt des Beutels (Farbe, Konsistenz, Menge) gehört in die Stomadokumentation.",
          },
          {
            text: "Herr Nguyen atmet regelmäßig, keine Dyspnoe sichtbar",
            isError: false,
            reason:
              "Kein Pflicht-Element der Stomadokumentation — Atemfrequenz ist ein allgemeines Beobachtungsmerkmal. Relevant wenn abweichend, aber hier kein spezifischer Stomabefund.",
            reasonB1:
              "Nicht nötig aufzuschreiben — die Atmung ist normal, und das gehört nicht in die Stoma-Dokumentation.",
          },
          {
            text: "Keine sichtbare Mazerierung der Haut",
            isError: true,
            reason:
              "Dokumentationspflichtig — der ausdrückliche Ausschluss von Mazerierung ist ein positiver Befund, der dokumentiert werden muss. 'Keine Mazerierung' bedeutet: Stomaplatte sitzt dicht, kein Stomainhalt-Hautkontakt. Verlaufsparameter.",
            reasonB1:
              "Wichtig aufschreiben! 'Keine Mazerierung' (= die Haut ist noch nicht beschädigt durch Stomainhalt) ist ein gutes Zeichen — und du schreibst es auf.",
          },
          {
            text: "Tochter Linh ist anwesend und übersetzt",
            isError: false,
            reason:
              "Gehört nicht in die Stomadokumentation — aber in den Pflegebericht als kontextueller Faktor. In Phase 6 (Dokumentieren) wird das aufgegriffen.",
            reasonB1:
              "Nicht in die Stoma-Dokumentation — aber in den Pflegebericht. Das kommt in Phase 6.",
          },
        ],
      },
    },

    // Step 2.4 — Dialog (3 Phasen): Ernährung beobachten
    {
      stepId: "ce02-nguyen-beob-04-ernährung-sehen",
      phase: 2,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DGEM Leitlinie Klinische Ernährung — Chirurgie (2020, AWMF-Register 073-003)",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-nguyen-beob-ernährung",
      tag: "pflege",
      contentC1: {
        title: "Das Tablett — fast unberührt",
        body: "Du schaust auf das Frühstücks-Tablett von Herrn Nguyen. Fast unberührt. Der Tee ist kalt, der Zwieback liegt noch eingepackt, der Haferschleim vom Abend vorher ist noch da. Du fragst Linh nach dem Ernährungs-Intake. Was sagst du — und wie reagierst du auf ihre Antwort?",
        glossarBegriffe: ["Albumin", "Mangelernährung", "NRS-2002"],
      },
      contentB1: {
        title: "Das Frühstück ist nicht angerührt",
        body: "Das Tablett von Herrn Nguyen ist fast noch voll. Er hat kaum gegessen. Du fragst Linh, die Tochter. Wie reagierst du auf ihre Antwort?",
        glossarBegriffe: ["Albumin", "Mangelernährung"],
      },
      question: {
        fragetext: "Wähle deine Reaktion auf Linhs Aussage.",
        patientName: "Linh (Tochter)",
        dialogPhases: [
          {
            context:
              "Du schaust auf das fast unberührte Frühstückstablett. Du fragst Linh: \"Hat Ihr Vater heute Morgen etwas gegessen oder getrunken?\" Linh schaut kurz auf ihren Vater, dann sagt sie:\n\n\"Papa hat früher für 60 Gäste gekocht. Jetzt isst er drei Löffel und schiebt den Teller weg. Das macht mir Sorgen.\"",
            contextB1:
              "Das Frühstück ist fast nicht angerührt. Du fragst Linh: \"Hat Ihr Vater heute etwas gegessen?\" Linh schaut kurz ihren Vater an und sagt dann:\n\n\"Papa hat früher für 60 Gäste gekocht. Jetzt isst er drei Löffel und schiebt den Teller weg. Das macht mir Sorgen.\"",
            speaker: "Linh",
            options: [
              {
                text: "\"Danke Linh. Das ist eine wichtige Information — ich notiere das und frage weiter.\"",
                textB1:
                  "\"Danke. Das ist wichtig — ich schreibe das auf und frage weiter.\"",
                patientResponse: "Linh nickt. Herr Nguyen schaut zur Seite. Er sagt nichts.",
                patientResponseB1:
                  "Linh nickt. Herr Nguyen schaut zur Seite.",
                score: 3,
                feedback:
                  "Richtig. Du nimmst Linhs Information ernst und dokumentierst sie. Der minimale Intake ist nicht nur ein Ernährungsproblem — er ist auch ein Ausdruck von Herr Nguyens psychosozialer Situation. Linh verbindet Fakten (drei Löffel) mit Biografie (Koch für 60 Gäste) und Emotion (Sorge).",
                feedbackB1:
                  "Gut. Du nimmst die Information ernst. Linhs Hinweis ist wichtig: Papa isst fast nichts. Das ist medizinisch und menschlich ein Problem.",
              },
              {
                text: "\"Das ist nach einer OP oft so — das wird schon wieder.\"",
                textB1:
                  "\"Das ist normal nach einer OP. Das kommt wieder.\"",
                patientResponse: "Linh übersetzt. Herr Nguyen sagt nichts. Linh wirkt enttäuscht.",
                patientResponseB1:
                  "Linh übersetzt. Herr Nguyen schweigt. Linh wirkt enttäuscht.",
                score: 1,
                feedback:
                  "Du hast erkannt, dass Beruhigung wichtig ist — aber hier zu verharmlosend. Herrn Nguyens Albumin liegt bei 28 g/l, das ist bereits klinische Hypoalbuminämie und kommt nicht 'von selbst' wieder, weil sein Körper post-OP einen erhöhten Eiweißbedarf hat. Stattdessen: Linhs Sorge ernst nehmen, dokumentieren und Ernährungsberaterin anfordern. Ihre biografische Beobachtung (Koch für 60 Gäste) ist wertvolle Information.",
                feedbackB1:
                  "Du wolltest Linh beruhigen — der Impuls ist verständlich. Aber: Albumin 28 g/l ist zu niedrig, weil Herr Nguyen nach der OP mehr Eiweiß braucht — das geht nicht von selbst weg. Stattdessen: Linhs Sorge ernst nehmen und aufschreiben.",
              },
            ],
          },
          {
            context:
              "Du hast Linhs Aussage gehört. Herr Nguyen isst seit Tagen kaum etwas. Was ist dein nächster Schritt?",
            contextB1:
              "Du weißt jetzt: Herr Nguyen isst kaum etwas. Was tust du?",
            speaker: "Du",
            options: [
              {
                text: "'Das ist nach einer OP normal, das kommt wieder.'",
                textB1:
                  "'Das ist nach einer Operation normal. Das kommt wieder.'",
                patientResponse:
                  "Linh nickt unsicher. Herr Nguyen sagt nichts.",
                patientResponseB1:
                  "Linh nickt. Herr Nguyen sagt nichts.",
                score: 0,
                feedback:
                  "Du hast den Impuls, Herrn Nguyen zu beruhigen — das ist gut gemeint. Aber hier zu verharmlosend, weil Albumin 28 g/l (Normwert 35–52 g/l) bereits eine klinische Hypoalbuminämie ist. Das ist deshalb gefährlich: post-OP-Mangelernährung verlangsamt Wundheilung, erhöht Infektionsrisiko und verlängert den stationären Aufenthalt. Stattdessen: Eine Ernährungsberaterin muss aktiv angefordert werden — das ist eine pflegerische Pflicht (DGEM 2020).",
                feedbackB1:
                  "Du wolltest Herrn Nguyen beruhigen — der Impuls ist verständlich. Aber: Albumin 28 g/l ist zu niedrig. Das heißt: Herr Nguyen hat schon eine Mangelernährung, weil er nicht genug Eiweiß isst. Stattdessen: Wir müssen handeln und die Ernährungsberaterin anfordern.",
              },
              {
                text: "'Ich dokumentiere den minimalen Intake, fordere die Ernährungsberaterin an und frage Herrn Nguyen — durch Linh — ob er Übelkeit hat.'",
                textB1:
                  "'Ich schreibe den minimalen Intake auf, fordere die Ernährungsberaterin an und frage durch Linh, ob Herr Nguyen Übelkeit hat.'",
                patientResponse:
                  "Linh übersetzt. Herr Nguyen schüttelt den Kopf: 'Nein. Kein Hunger.' Linh ergänzt: 'Er isst wirklich nicht, seit der OP.'",
                patientResponseB1:
                  "Linh fragt. Herr Nguyen schüttelt den Kopf: 'Kein Hunger.' Linh sagt: 'Er isst wirklich nicht, seit der Operation.'",
                score: 3,
                feedback:
                  "Richtig. Drei Schritte gleichzeitig: Dokumentation (Verlaufsmessbarkeit), interprofessionelle Anforderung (Ernährungsberaterin ist die Fachkraft), und aktive Ursachenklärung (Übelkeit? Schmerz? psychosozial?). Das ist strukturiertes Assessment vor Intervention. Quelle: DGEM Leitlinie Chirurgie 2020.",
                feedbackB1:
                  "Richtig. Du tust drei Dinge: aufschreiben, Fachkraft anfordern, nach Ursache fragen. Das ist gute Pflege.",
              },
              {
                text: "'Herr Nguyen, Sie müssen mehr essen — Ihr Körper braucht das für die Wundheilung.'",
                textB1:
                  "'Herr Nguyen, Sie müssen mehr essen. Das ist wichtig für die Wunde.'",
                patientResponse:
                  "Linh übersetzt. Herr Nguyen schaut auf seine Hände. Er sagt nichts.",
                patientResponseB1:
                  "Linh übersetzt. Herr Nguyen schaut auf seine Hände.",
                score: 1,
                feedback:
                  "Du hast erkannt, dass Wundheilung Energie braucht — fachlich richtig. Aber zu direktiv ohne Ursachenklärung, weil 'Sie müssen' Druck erzeugt, ohne das Problem zu verstehen. Warum isst Herr Nguyen nicht? Übelkeit? Schmerzen? Appetitlosigkeit durch Stress und Körperbild-Veränderung? Stattdessen: Erst Ursachen klären, dann gemeinsam Lösung suchen — das ist Assessment vor Intervention (DGEM 2020).",
                feedbackB1:
                  "Du hast erkannt, dass Essen wichtig ist — das stimmt. Aber: 'Sie müssen' macht Druck. Wir wissen noch nicht, warum Herr Nguyen nicht isst. Stattdessen: Erst fragen (Hat er Übelkeit? Schmerzen?), dann handeln.",
              },
            ],
          },
          {
            context:
              "Du hast entschieden, die Ernährungsberaterin anzufordern. Was trägst du sofort in die Pflegedokumentation ein?",
            contextB1:
              "Du willst die Ernährungsberaterin anfordern. Was schreibst du in die Pflegeakte?",
            speaker: "Du",
            options: [
              {
                text: "'Minimaler oraler Intake seit OP-Tag: heute Morgen kein Frühstück. Albumin 28 g/l (prä-OP bekannt). Ernährungsberaterin angefordert um [Zeit]. Ursachenklärung: keine Übelkeit geäußert.'",
                textB1:
                  "'Herr Nguyen hat heute kein Frühstück gegessen. Albumin 28 g/l. Ernährungsberaterin angefordert um [Zeit].'",
                patientResponse: "Linh nickt anerkennend. Herr Nguyen schaut kurz zu dir — das erste Mal heute.",
                patientResponseB1: "Linh nickt. Herr Nguyen schaut dich kurz an.",
                score: 3,
                feedback:
                  "Korrekte Dokumentation: Beobachtung (kein Frühstück), klinischer Hintergrund (Albumin 28 als bekannter Risikofaktor), Maßnahme (Anforderung mit Zeit), Ursachenklärung (Übelkeit verneint). Das ermöglicht Verlaufsmessung und zeigt der Folgeschicht, was bereits getan wurde.",
                feedbackB1:
                  "Gut dokumentiert. Die drei Kernpunkte sind alle drin: Was du beobachtet hast, Laborwert als Hintergrund, und was du getan hast.",
              },
              {
                text: "'Herr Nguyen isst nicht.' (Ende)",
                textB1: "'Herr Nguyen isst nicht.'",
                patientResponse: "Linh schaut dich fragend an. Sie wartet auf mehr.",
                patientResponseB1: "Linh wartet. Sie erwartet mehr Information.",
                score: 0,
                feedback:
                  "Du hast den Kerngedanken erkannt — Essen ist ein Thema. Aber zu knapp, weil eine klinisch relevante Dokumentation vier Elemente braucht: Was genau (kein Frühstück), Hintergrund (Albumin, Gewichtsverlust), Maßnahme (was du getan hast), und Verantwortlicher (Ernährungsberaterin angefordert). Stattdessen: Diese vier Punkte zusammenführen — sonst kann die Folgeschicht nicht weiterarbeiten.",
                feedbackB1:
                  "Du hast erkannt, dass es um Essen geht — gut. Aber zu wenig, weil die Dokumentation mehr braucht: Was genau hat er nicht gegessen? Was hast du getan? Wer wurde informiert? Stattdessen: Diese vier Punkte aufschreiben.",
              },
            ],
          },
        ],
      },
    },

    // Step 2.4b — InlineWissen: Sensorisches Empfinden
    // Position: VOR Step 2.5 (Matrix: Braden-Subskalen)
    // Grund: "sensorisches Empfinden" ist eine Braden-Subskala und wird in Step 2.5 verwendet
    {
      stepId: "ce02-nguyen-beob-iw-sensorisches-empfinden",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Braden B.J., Bergstrom N. (1987): A Conceptual Schema for the Study of the Etiology of Pressure Sores",
        "DNQP — Expertenstandard Dekubitusprophylaxe in der Pflege, 3. Aktualisierung (2017)",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-nguyen-beob-sensorisches-empfinden",
      tag: "pflege",
      themaPrimaer: "dekubitus-prophylaxe",
      themenSekundaer: ["stuhlausscheidung"],
      transition:
        "Sensorisches Empfinden verstanden. Jetzt: Ordne die Braden-Subskalen für Herrn Nguyen ein.",
      contentC1: {
        title: "Braden-Subskala: Sensorisches Empfinden",
        body: "",
        glossarBegriffe: ["sensorisches Empfinden", "Braden-Skala", "Nozizeption", "Subskala", "Leckage"],
      },
      contentB1: {
        title: "Braden-Skala: Was ist sensorisches Empfinden?",
        body: "",
        glossarBegriffe: ["sensorisches Empfinden", "Braden-Skala", "Subskala", "Leckage"],
      },
      inlineWissen: {
        bausteinRef: "sensorisches-empfinden",
        storyAufhaenger:
          "Gleich ordnest du Herrn Nguyens Braden-Subskalen ein. Eine davon ist das 'sensorische Empfinden'. Herr Nguyen hat post-OP-Schmerzen — das klingt nach intaktem Empfinden. Aber: Schmerz kann auch dazu führen, dass er Bewegung vermeidet. Was bedeutet das für sein Dekubitusrisiko?",
        kerntext:
          "**Was ist eine Subskala?** Eine **Subskala** = ein Teilbereich (Unter-Skala) eines Assessment-Instruments. Die Braden-Skala besteht aus 6 Subskalen, die einzeln bewertet werden — die Summe ergibt den Gesamtscore.\n\n**Was ist eine Leckage?** Eine **Leckage** = das Austreten von Stomainhalt (oder Wundsekret) zwischen Hautschutzplatte und Haut, weil die Abdichtung nicht mehr hält.\n\n**Was ist sensorisches Empfinden?** Die Fähigkeit, auf druckbedingte Beschwerden (Schmerz, Unbehagen) zu reagieren und eine Lageveränderung einzuleiten. Es ist die erste der 6 Braden-Subskalen.\n\n**4 Stufen (Braden-Score):**\n\n• **4 Punkte — Nicht eingeschränkt:** Patient spürt Druck, reagiert sofort, verändert die Lage selbstständig.\n• **3 Punkte — Leicht eingeschränkt:** Patient spürt Druck, reagiert aber verzögert oder braucht Aufforderung.\n• **2 Punkte — Stark eingeschränkt:** Patient reagiert nur auf starke Schmerzreize, kann Unbehagen nicht sinnvoll verbalisieren.\n• **1 Punkt — Vollständig ausgefallen:** Patient reagiert nicht auf Schmerzreize (Bewusstlosigkeit, tiefe Sedierung, Plegie).\n\n**Herr Nguyen:** Er hat post-OP-Schmerzen (NRS 3/10). Das bedeutet: Sein sensorisches Empfinden ist grundsätzlich intakt — er SPÜRT Druck. Aber: Der Schmerz begrenzt seine Bewegungsbereitschaft. Jede Lageveränderung tut weh → er bleibt liegen → Druck wirkt länger → Dekubitusrisiko steigt. Score: **3 Punkte (leicht eingeschränkt).**\n\n**Klinische Relevanz:** Bei Patienten mit Schmerz-bedingter Immobilität ist das sensorische Empfinden formal intakt, aber funktionell eingeschränkt. Schmerzmanagement ist deshalb Teil der Dekubitusprophylaxe.",
        kerntextB1:
          "**Was ist eine Subskala?** Eine **Subskala** = ein Teil-Bereich eines Tests. Die Braden-Skala hat 6 Subskalen.\n\n**Was ist eine Leckage?** **Leckage** = wenn Stuhl aus dem Stoma seitlich neben der Platte rauskommt (statt in den Beutel).\n\n**Was ist sensorisches Empfinden?** Die Fähigkeit, Druck zu spüren und sich deshalb umzulagern.\n\n**Braden-Skala Punkte:**\n• 4 = spürt alles, bewegt sich sofort\n• 3 = spürt Druck, reagiert aber langsam\n• 2 = reagiert nur auf starke Schmerzen\n• 1 = reagiert gar nicht\n\n**Herr Nguyen:** Er spürt Druck (Schmerz NRS 3/10). Aber: Weil Bewegung weh tut, bleibt er liegen. Druck wirkt länger → Dekubitus-Risiko steigt.\n\nScore: **3 Punkte** (leicht eingeschränkt).",
        faustregel:
          "**Sensorisches Empfinden = Spürt der Patient Druck und bewegt sich?** Bei Herrn Nguyen: Er spürt — aber Schmerz hält ihn fest.",
        faustregelB1:
          "Sensorisches Empfinden = Spürt er Druck? Ja — aber er bewegt sich trotzdem nicht, weil es weh tut.",
        karteikarte: {
          vorderseite: "Was misst die Braden-Subskala 'sensorisches Empfinden' — und warum hat Herr Nguyen 3 von 4 Punkten?",
          rueckseite:
            "Sensorisches Empfinden = Fähigkeit, druckbedingte Beschwerden zu spüren und die Lage zu verändern. 4 Stufen (4 = intakt, 1 = ausgefallen). Herr Nguyen: Empfinden intakt (NRS 3/10 = er spürt Druck), aber Schmerz hemmt Lageveränderung → funktionell eingeschränkt → 3 Punkte. Schmerzmanagement = Teil der Dekubitusprophylaxe. **Spürt er Druck? Ja. Bewegt er sich? Nein — weil es weh tut.**",
          vorderseiteB1: "Was bedeutet 'sensorisches Empfinden' bei der Braden-Skala?",
          rueckseiteB1:
            "Kann der Patient Druck spüren und sich bewegen? Herr Nguyen spürt Druck — aber Bewegung tut weh, also bleibt er liegen. Score: 3 von 4.",
        },
      },
    },

    // Step 2.5 — Matrix: Braden-Subskalen einordnen
    {
      stepId: "ce02-nguyen-beob-05-dekubitus-risiko",
      phase: 2,
      stepType: "matrix",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "DNQP — Expertenstandard Dekubitusprophylaxe in der Pflege, 3. Aktualisierung (2017)",
      ],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-nguyen-beob-braden",
      tag: "pflege",
      contentC1: {
        title: "Braden-Skala: Herrn Nguyens Risiko einordnen",
        body: "Herr Nguyens Braden-Gesamtwert ist 14 (gering-moderate Gefährdung). Ordne die drei ausgewählten Braden-Subskalen für Herrn Nguyen korrekt ein. Bloom 4 — Analysieren.",
        glossarBegriffe: ["Braden-Skala", "sensorisches Empfinden", "Mazerierung"],
      },
      contentB1: {
        title: "Braden-Skala für Herrn Nguyen",
        body: "Ordne die Subskalen der Braden-Skala für Herrn Nguyen richtig ein.",
        glossarBegriffe: ["Braden-Skala", "Dekubitus-Risiko"],
      },
      question: {
        fragetext:
          "Ordne die Braden-Subskalen für Herrn Nguyen korrekt in die Matrix ein. X-Achse: Einschränkungsgrad. Y-Achse: Subskala.",
        matrix: {
          instruction:
            "Ordne jede Subskala dem richtigen Einschränkungsgrad zu: normal / leicht eingeschränkt / stark eingeschränkt.",
          axisX: {
            label: "Einschränkungsgrad",
            low: "Normal (volle Funktion)",
            high: "Stark eingeschränkt",
          },
          axisY: {
            label: "Subskala",
            low: "Einzelne Subskala",
            high: "",
          },
          items: [
            {
              id: "sens",
              text: "Sensorisches Empfinden: Herr Nguyen hat post-OP-Schmerz → reduziert Lagekorrekturen",
              correctQuadrant: 2,
            },
            {
              id: "feucht",
              text: "Feuchtigkeit: Keine Inkontinenz — aber Stomainhalt-Kontakt auf Haut bei Leckage möglich",
              correctQuadrant: 2,
            },
            {
              id: "aktivität",
              text: "Aktivität: 4. Tag post-OP, Bettruhe mit Auflockerung an Bettkante",
              correctQuadrant: 3,
            },
          ],
        },
      },
    },

    // Step 2.6 — TrueFalse (Mehrfach): Thrombose-Assessment
    {
      stepId: "ce02-nguyen-beob-06-thrombose-zeichen",
      phase: 2,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S3-Leitlinie Prophylaxe der venösen Thromboembolie (Reg. 003-001, aktuelle Fassung)",
        "Pflege heute, 7. Aufl. — Thromboseprophylaxe",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-nguyen-beob-thrombose",
      tag: "krankheitslehre",
      contentC1: {
        title: "Thrombose-Assessment bei Herrn Nguyen",
        body: "**Thromboseprophylaxe** = Maßnahmen zur Verhinderung von Blutgerinnseln in den Venen (pharmakologisch z.B. Heparin, physikalisch z.B. Kompression, plus Mobilisation).\n\nDu schaust kurz auf beide Beine von Herrn Nguyen — Inspektion (Schwellung, Verfärbung, Kollateralvenen) und vorsichtige Palpation. Vier Aussagen zur Thromboseprophylaxe und -assessment — welche stimmen?",
        glossarBegriffe: ["Thrombose", "Heparin", "Wells-Score", "Tumorerkrankung", "Thromboseprophylaxe"],
      },
      contentB1: {
        title: "Thrombose prüfen — was stimmt?",
        body: "**Thromboseprophylaxe** = alle Maßnahmen, die Blutgerinnsel verhindern: Heparin-Spritze, Bewegung, Kompressions-Strümpfe.\n\nDu schaust auf die Beine von Herrn Nguyen. Vier Aussagen — welche sind richtig?",
        glossarBegriffe: ["Thrombose", "Heparin", "Venenthrombose", "Thromboseprophylaxe"],
      },
      question: {
        fragetext:
          "Welche Aussagen zur Thromboseprophylaxe und -assessment bei Herrn Nguyen stimmen?",
        trueFalseCards: [
          {
            statement:
              "Warme, geschwollene, schmerzhafte Wade = Alarmzeichen → Arzt informieren, keine aktiven Provokationsmanöver durchführen.",
            isTrue: true,
            explanation:
              "Richtig. Klinische Inspektions-Zeichen einer tiefen Beinvenenthrombose sind: Schwellung (oft einseitig), Wärmegefühl, Druckschmerz entlang der Venen (z.B. Wadenkompressions-Schmerz), Spannungsgefühl, Verfärbung, sichtbare Kollateralvenen. Diese Befunde meldest du dem Arzt. Aktive Provokationsmanöver (Homans-Zeichen = Dorsalflexion des Fußes, Payr-Zeichen = Druck auf Fußsohle) gelten heute als obsolet: niedrige Sensitivität und Spezifität, theoretisches Embolisierungs-Risiko durch Manipulation. Bewertung der Vortest-Wahrscheinlichkeit erfolgt klinisch (z.B. Wells-Score) plus Bildgebung. Quelle: AWMF S3-Leitlinie VTE-Prophylaxe (Reg. 003-001).",
          },
          {
            statement:
              "Heparin s.c. läuft → Thrombose-Risiko ist damit vollständig ausgeschaltet.",
            isTrue: false,
            explanation:
              "Falsch. NMH (niedermolekulares Heparin) reduziert das Thrombose-Risiko signifikant, schaltet es aber nicht komplett aus. Bei Herrn Nguyen kommen mehrere Risikofaktoren zusammen: Kolonkarzinom (Tumorerkrankung ist eigenständiger Thrombose-Risikofaktor!), post-OP-Immobilisation, Mangelernährung. Mobilisation und physikalische Maßnahmen bleiben unverzichtbar.",
          },
          {
            statement:
              "Bei Krebserkrankung ist das Thrombose-Risiko erhöht — auch unabhängig von der Immobilisation.",
            isTrue: true,
            explanation:
              "Richtig. Tumorerkrankungen aktivieren Gerinnungsfaktoren (Virchow-Trias: Hyperkoagulabilität durch Krebszellen). Das ist ein eigenständiger Risikofaktor, der zu Immobilisation und OP-Stress addiert wird. Bei Herrn Nguyen ist das Thrombose-Risiko daher besonders hoch.",
          },
          {
            statement:
              "Thrombose-Prophylaxe durch Pflege = nur Heparin geben.",
            isTrue: false,
            explanation:
              "Falsch. Die Thromboseprophylaxe besteht aus drei gleichwertigen Säulen: 1) Pharmakologisch (Heparin), 2) Physikalisch (Kompressionsstrümpfe, Beinübungen), 3) Mobilisation (auch kurze Mobilisationsschritte reduzieren das Risiko). Pflege ist für alle drei Säulen mitverantwortlich — nicht nur für die Heparin-Gabe.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [
    // 2.opt-0b — InlineWissen: Bristol Stool Scale
    // Position: VOR Step opt-1 (Comparison: Stoma-Output und Bristol)
    // Grund: "Bristol Stool Scale" wird in opt-1 als zentraler Vergleichsrahmen verwendet
    {
      stepId: "ce02-nguyen-beob-iw-bristol-stool-scale",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Heaton K.W., Lewis S.J. (1997): Stool Form Scale as a Useful Guide — Scandinavian Journal of Gastroenterology 32(9):920–924",
        "I Care Pflege, 2. Aufl. (2020): Kap. Stuhlausscheidung",
      ],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-nguyen-beob-bristol-stool-scale",
      tag: "pflege",
      themaPrimaer: "stuhlausscheidung",
      themenSekundaer: ["pflegedokumentation"],
      transition:
        "Bristol Stool Scale verstanden. Jetzt: Vergleiche den Stoma-Output in den verschiedenen post-OP-Phasen.",
      contentC1: {
        title: "Bristol Stool Scale — Stuhlkonsistenz standardisiert beurteilen",
        body: "",
        glossarBegriffe: ["Bristol Stool Scale", "Stuhlkonsistenz", "Stoma-Output", "Stoma"],
      },
      contentB1: {
        title: "Bristol Stool Scale — Stuhl-Form beurteilen",
        body: "",
        glossarBegriffe: ["Bristol Stool Scale", "Stuhlkonsistenz", "Stoma"],
      },
      inlineWissen: {
        bausteinRef: "bristol-stool-scale",
        storyAufhaenger:
          "Im Stoma-Beutel von Herrn Nguyen ist dünnflüssig-gelblicher Inhalt. Wie beschreibst du das fachlich? 'Dünnflüssig' ist ein guter Anfang — aber die Bristol Stool Scale gibt dir ein einheitliches Klassifikationssystem, das jede Pflegekraft weltweit versteht.",
        kerntext:
          "**Was ist die Bristol Stool Scale?** Eine 7-stufige Skala zur standardisierten Beurteilung der Stuhlkonsistenz. Entwickelt 1997 von Heaton & Lewis an der University of Bristol.\n\n**Die 7 Typen:**\n\n• **Typ 1:** Einzelne, harte Klumpen (wie Nüsse) — Obstipation\n• **Typ 2:** Wurstförmig, klumpig — leichte Obstipation\n• **Typ 3:** Wurstförmig mit Rissen — Normalbereich\n• **Typ 4:** Wurstförmig, glatt — **ideal** (Normalbereich)\n• **Typ 5:** Weiche Klümpchen mit scharfen Rändern — leichte Diarrhoe\n• **Typ 6:** Breiig, aufgeweichte Stückchen — Diarrhoe\n• **Typ 7:** Vollständig flüssig — starke Diarrhoe\n\n**Anwendung bei Herrn Nguyen:**\n\nAm 4. POD: Stoma-Output dünnflüssig-gelblich = **Bristol Typ 6–7** (Transitphase, normal für diesen Zeitpunkt). Mit Kostaufbau wird der Output in den nächsten Tagen Richtung Typ 4–5 wandern.\n\n**Warum Bristol bei Stoma?** Einheitliche Sprache in der Dokumentation. Statt 'ziemlich flüssig' schreibst du: 'Output Bristol Typ 6'. Das ist eindeutig, messbar und verlaufsbeurteilbar.\n\n**Wichtig:** Bei Kolostoma pendelt sich der Output bei Bristol 4–5 ein. Bei Ileostoma bleibt er dauerhaft bei 6–7 (Dickdarm fehlt als Wasser-Resorbierer).",
        kerntextB1:
          "**Was ist die Bristol Stool Scale?** Eine Skala mit 7 Stufen für die Stuhlform.\n\n• **Typ 1–2:** Sehr fest (Verstopfung)\n• **Typ 3–4:** Normal (ideal)\n• **Typ 5–6:** Weich bis breiig (leichter Durchfall)\n• **Typ 7:** Ganz flüssig (Durchfall)\n\n**Bei Herrn Nguyen:** Am 4. Tag nach der OP ist der Output **Typ 6–7** (flüssig). Das ist normal in den ersten Tagen. Später wird es fester (Typ 4–5).\n\n**Warum nutzen wir diese Skala?** Statt 'ziemlich flüssig' schreibst du: 'Bristol Typ 6'. Das versteht jeder.",
        faustregel:
          "**Bristol 3–4 = normal. Bei Kolostoma post-OP: Typ 6–7 am Anfang, dann Richtung 4–5.** Eindeutig dokumentieren statt 'ziemlich flüssig'.",
        faustregelB1:
          "Bristol 3–4 ist normal. Am Anfang nach der OP ist Typ 6–7 normal. Es wird mit der Zeit fester.",
        karteikarte: {
          vorderseite: "Was ist die Bristol Stool Scale — und welcher Typ passt zu Herrn Nguyens Stoma-Output am 4. POD?",
          rueckseite:
            "Bristol Stool Scale: 7-stufige Klassifikation der Stuhlkonsistenz (Heaton/Lewis 1997). Typ 1–2 = Obstipation, 3–4 = normal, 5–7 = Diarrhoe. Herr Nguyen am 4. POD: Typ 6–7 (dünnflüssig, Transitphase = normal). Kolostoma: pendelt sich bei Typ 4–5 ein. Ileostoma: bleibt bei 6–7 (kein Dickdarm). **Bristol statt Prosa — dokumentiere eine Zahl statt 'ziemlich flüssig'.**",
          vorderseiteB1: "Was bedeutet Bristol Stool Scale?",
          rueckseiteB1:
            "Eine Skala mit 7 Stufen für die Stuhlform. 1–2 = fest, 3–4 = normal, 5–7 = flüssig. Am 4. Tag ist Typ 6–7 bei Stoma normal.",
        },
      },
    },

    // 2.opt-1 — Comparison: Stoma-Output und Bristol
    {
      stepId: "ce02-nguyen-beob-opt1-stoma-output-bristol",
      phase: 2,
      stepType: "comparison",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Heaton KW, Lewis SJ (1997). Stool Form Scale — Scandinavian Journal of Gastroenterology",
      ],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-nguyen-beob-stoma-output",
      tag: "pflege",
      contentC1: {
        title: "Stoma-Output und Bristol Stool Scale",
        body: "Was ist normaler Stoma-Output in den ersten Tagen post-OP? Vergleich der Output-Entwicklung.",
        glossarBegriffe: ["Bristol Stool Scale", "Stoma-Output", "Transitphase"],
      },
      contentB1: {
        title: "Was kommt aus dem Stoma — und wann wird es normal?",
        body: "Was ist normaler Stuhl aus dem Stoma? Das ändert sich in den ersten Wochen.",
        glossarBegriffe: ["Stoma-Output", "Konsistenz"],
      },
      question: {
        fragetext: "Vergleiche den Stoma-Output nach OP-Zeitraum.",
        comparison: {
          instruction: "Vergleiche den normalen Stoma-Output in den verschiedenen Phasen nach der OP.",
          columns: [
            { label: "Tag 1–3 post-OP" },
            { label: "Tag 4–7 post-OP" },
            { label: "Ab Woche 2" },
          ],
          rows: [
            {
              criterion: "Konsistenz",
              values: ["Kein oder sehr wenig Output, ggf. Schleim", "Dünnflüssig-gelblich (Transitphase)", "Zunehmend breiig bis geformt"],
              valuesB1: ["Fast kein Stuhl, manchmal Schleim", "Dünn und gelblich — das ist normal", "Weicher bis fester Stuhl"],
            },
            {
              criterion: "Warum",
              values: ["Darm erholt sich, Peristaltik startet wieder", "Kostaufbau beginnt, Darm aktiv", "Normale Kost aufgebaut, Darm regulär"],
              valuesB1: ["Der Darm braucht Zeit", "Herr Nguyen darf jetzt essen — der Darm arbeitet", "Wenn Herr Nguyen normal isst, wird der Stuhl normal"],
            },
          ],
        },
      },
    },

    // 2.opt-2 — Flipcard: Albumin erklärt
    {
      stepId: "ce02-nguyen-beob-opt2-albumin-ernährung",
      phase: 2,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["DGEM Leitlinie Klinische Ernährung — Chirurgie (2020)"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-nguyen-beob-albumin",
      tag: "krankheitslehre",
      contentC1: {
        title: "Albumin 28 g/l — was bedeutet das?",
        body: "Albumin ist ein wichtiger Laborwert bei Mangelernährung. Lerne was Herrn Nguyens Wert bedeutet.",
        glossarBegriffe: ["Albumin", "Hypoalbuminämie", "Mangelernährung"],
      },
      contentB1: {
        title: "Albumin — was ist das?",
        body: "Albumin ist ein wichtiges Eiweiß im Blut. Herr Nguyen hat zu wenig davon. Was bedeutet das?",
        glossarBegriffe: ["Albumin", "Mangelernährung"],
      },
      question: {
        fragetext: "Klicke die Karten um.",
        flipcard: {
          instruction: "Klicke jede Karte um.",
          cards: [
            {
              front: "Albumin 28 g/l bei Herrn Nguyen — Normwert?",
              back: "Normwert: 35–52 g/l. 28 g/l = Hypoalbuminämie = klinisches Zeichen der Mangelernährung. Albumin ist ein Transporteiweiß — bei Mangel: schlechte Wundheilung, Ödeme, Immunschwäche. Wundheilung nach Stoma-OP besonders gefährdet. Quelle: (DGEM 2020)",
              backB1:
                "Normal: 35–52 g/l. Herr Nguyen hat 28 — das ist zu wenig. Albumin ist wichtig für Wundheilung. Bei Mangel: die Wunde heilt schlechter. Das ist nach einer OP ein Problem.",
            },
            {
              front: "Warum hat Herr Nguyen so wenig Albumin?",
              back: "Drei Ursachen: 1) Krebserkrankung (Tumor verbraucht Energie und Eiweiß), 2) 6 kg Gewichtsverlust in 3 Monaten (präoperative Mangelernährung), 3) Kaum oraler Intake seit der OP (Appetitlosigkeit, Übelkeit, psychosozial). Das Zusammenspiel dieser drei Faktoren ist klassisch für den postoperativen onkologischen Patienten.",
              backB1:
                "Drei Gründe: 1) Der Krebs hat viel Energie gebraucht, 2) Er hat vor der Operation 6 kg verloren, 3) Er isst seit der Operation fast nichts. Das ist ein bekanntes Problem bei Krebspatienten nach einer OP.",
            },
          ],
          shuffled: false,
        },
      },
    },

    // 2.opt-3 — Text (analogy): Mazerierung erklärt
    {
      stepId: "ce02-nguyen-beob-opt3-mazerierung-erklären",
      phase: 2,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-nguyen-beob-mazerierung",
      tag: "pflege",
      displayFormat: "analogy",
      contentC1: {
        title: "Mazerierung: Wenn Stomainhalt auf die Haut trifft",
        body: "Mazerierung ist die häufigste Haut-Komplikation bei Stoma-Patienten — und sie entsteht durch eine klare Ursache.\n\nAnalogievon: Stell dir vor, du trägst stundenlang nasse Socken. Die Fußhaut wird aufgeweicht, weißlich und verletzlich — winzige Belastungen, die du sonst nicht spürst, reißen jetzt die Haut ein. Genauso passiert es, wenn Stomainhalt (bei Kolostoma: leicht alkalisch, bei Ileostoma: enzymatisch aggressiv) dauerhaft auf die Haut rund ums Stoma gelangt. Die Haut verliert ihre Schutzbarriere. Es entstehen Mazeration, Rötung, Einrisse — ein Teufelskreis, weil die Stomaplatte dann nicht mehr dicht sitzt.\n\n**Was schützt?** 1) Passende Plattengröße (Stoma exakt ausgemessen), 2) Schutzpaste (füllt Unebenheiten), 3) Regelmäßiger Beutelwechsel (spätestens wenn 1/3–2/3 voll).",
        glossarBegriffe: ["Mazerierung", "Stomaplatte", "Schutzpaste", "Beutelwechsel", "Haut", "Mazeration", "Rötung", "Stoma", "Ursache"],
      },
      contentB1: {
        title: "Mazerierung: Was passiert mit der Haut?",
        body: "Mazerierung heißt: die Haut wird durch Feuchtigkeit beschädigt.\n\nAnalogievon: Stell dir vor: Du trägst stundenlang nasse Socken. Die Haut wird weich und verletzlich. Genauso passiert es, wenn Stuhl aus dem Stoma auf die Haut kommt. Der Stuhl greift die Haut an. Die Haut wird rot, weich, und reißt ein.\n\n**Was schützt?** 1) Die Stomaplatte muss genau passen, 2) Schutzpaste füllt kleine Lücken, 3) Beutel regelmäßig wechseln — nicht zu voll werden lassen.",
        glossarBegriffe: ["Mazerierung", "Stomaplatte", "Schutzpaste", "Haut", "Stoma", "Beutelwechsel", "Rötung", "Ursache", "Mazeration"],
      },
    },
  ],
  geschaetzteDauer: 35,
};

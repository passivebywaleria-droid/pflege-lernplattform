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
        body: "Nach dem Hotspot: Hier sind die klinischen Zeichen, die du bei der Stomainspektion beobachten und dokumentieren musst.\n\n☑ Farbe rosig bis kräftig rot (durchblutetes Schleimhautgewebe)\n☑ Schleimhaut feucht und leicht glänzend\n☑ Herausragen 1–2 cm über Hautniveau\n☑ Hautumgebung reizlos (keine Rötung, kein Ausschlag, keine Mazerierung)\n☑ Stomaöffnung zentral positioniert\n\n**Alarmzeichen (sofortiger Handlungsbedarf):**\n⚠ Blass/weißlich = Durchblutungsstörung → sofort Arzt informieren\n⚠ Livide/dunkel-violett oder schwarz = Nekrose-Verdacht → akuter Notfall, Stomatherapeuten + Arzt sofort rufen\n\nQuelle: (FG SKM, Handlungsempfehlungen Stomapflege, 2023)",
        glossarBegriffe: ["livide", "Mazerierung", "Nekrose", "Stomaplatte"],
      },
      contentB1: {
        title: "Ein gesundes Stoma — so sieht es aus",
        body: "Nach dem Bild: Das hier sind die Zeichen, dass das Stoma gesund ist:\n\n☑ Farbe: rosig bis kräftig rot\n☑ Schleimhaut feucht und glänzend\n☑ Steht 1–2 cm aus der Bauch-Wand heraus\n☑ Die Haut rund um das Stoma ist reizlos (nicht rot, kein Ausschlag)\n\n**Alarm-Zeichen (sofort melden!):**\n⚠ Blass oder weiß = Blut fließt nicht richtig → Arzt informieren\n⚠ Dunkel-lila oder schwarz = Gewebe stirbt ab → sofort Arzt rufen",
        glossarBegriffe: ["Stoma", "livide", "Nekrose"],
      },
    },

    // Step 2.3 — Highlight: Haut-Assessment
    {
      stepId: "ce02-nguyen-beob-03-haut-assessment",
      phase: 2,
      stepType: "highlight",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["FG SKM — Handlungsempfehlungen Stomapflege (2023)"],
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
              "Dokumentationspflichtig — Wundnaht-Status post-OP ist tägliche Beobachtungspflicht. 'Leicht gerötet + seröse Absonderung' ist noch tolerierbar am 4. Tag, muss aber verlaufsbewertet werden. Zunahme von Rötung oder eitriger Absonderung = sofortige Arzt-Information.",
            reasonB1:
              "Wichtig aufschreiben! Die Bauch-Wunde ist leicht rot. Das ist nach einer Operation normal — aber du schreibst es auf und schaust morgen wieder nach.",
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
      stepId: "ce02-nguyen-beob-04-ernaehrung-sehen",
      phase: 2,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: [
        "DGEM Leitlinie Klinische Ernährung — Chirurgie (2020, AWMF-Register 073-003)",
      ],
      track: "basis",
      modus: "story",
      lernziel: "ce02-nguyen-beob-ernaehrung",
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
              "Du schaust auf das fast unberührte Frühstückstablett. Du fragst Linh: 'Hat Ihr Vater heute Morgen etwas gegessen oder getrunken?' Linh schaut kurz auf ihren Vater, dann sagt sie:",
            contextB1:
              "Das Frühstück ist fast nicht angerührt. Du fragst Linh: 'Hat Ihr Vater heute etwas gegessen?' Linh schaut kurz ihren Vater an und sagt dann:",
            speaker: "Linh",
            options: [
              {
                text: "Linh: 'Papa hat früher für 60 Gäste gekocht. Jetzt isst er drei Löffel und schiebt den Teller weg. Das macht mir Sorgen.'",
                textB1:
                  "Linh: 'Papa hat früher für 60 Gäste gekocht. Jetzt isst er drei Löffel und schiebt den Teller weg. Das macht mir Sorgen.'",
                patientResponse: "Herr Nguyen schaut zur Seite. Er sagt nichts.",
                patientResponseB1:
                  "Herr Nguyen schaut zur Seite. Er sagt nichts.",
                score: 3,
                feedback:
                  "Dieses Zitat ist zentral. Linh verbindet Fakten (drei Löffel) mit Biografie (Koch für 60 Gäste) und Emotion (Sorge). Das ist wichtige Information für das Pflegeteam. Merke: Der minimale Intake ist nicht nur ein Ernährungsproblem — er ist auch ein Ausdruck von Herr Nguyens psychosozialer Situation.",
                feedbackB1:
                  "Wichtiges Zitat. Linh sagt: Papa isst fast nichts. Das ist medizinisch ein Problem — und auch menschlich. Herr Nguyen hat früher Essen geliebt. Jetzt kann er nicht essen. Das ist schwer.",
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
                  "Zu verharmlosend. Herrn Nguyens Albumin liegt bei 28 g/l (Normwert 35–52 g/l) — das ist bereits eine klinische Hypoalbuminämie. 'Kommt von selbst' ist hier falsch: post-OP-Mangelernährung verlangsamt Wundheilung, erhöht Infektionsrisiko und verlängert den stationären Aufenthalt. Eine Ernährungsberaterin muss aktiv angefordert werden.",
                feedbackB1:
                  "Nicht richtig. Albumin 28 g/l ist zu niedrig. Das heißt: Herr Nguyen hat schon eine Mangelernährung. Das geht nicht 'von selbst weg'. Wir müssen handeln.",
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
                  "Zu direktiv — ohne Ursachenklärung. 'Sie müssen' erzeugt Druck ohne Verständnis des Problems. Warum isst Herr Nguyen nicht? Übelkeit? Schmerzen? Appetitlosigkeit durch Stress und Körperbild-Veränderung? Ohne Ursachenklärung ist die Aufforderung wenig hilfreich — und kulturell kann sie als Vorwurf wirken.",
                feedbackB1:
                  "Nicht so gut. 'Sie müssen' macht Druck. Wir wissen noch nicht, warum Herr Nguyen nicht isst. Erst fragen, dann handeln.",
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
                patientResponse: "",
                patientResponseB1: "",
                score: 3,
                feedback:
                  "Korrekte Dokumentation: Beobachtung (kein Frühstück), klinischer Hintergrund (Albumin 28 als bekannter Risikofaktor), Maßnahme (Anforderung mit Zeit), Ursachenklärung (Übelkeit verneint). Das ermöglicht Verlaufsmessung und zeigt der Folgeschicht, was bereits getan wurde.",
                feedbackB1:
                  "Gut dokumentiert. Die drei Kernpunkte sind alle drin: Was du beobachtet hast, Laborwert als Hintergrund, und was du getan hast.",
              },
              {
                text: "'Herr Nguyen isst nicht.' (Ende)",
                textB1: "'Herr Nguyen isst nicht.'",
                patientResponse: "",
                patientResponseB1: "",
                score: 0,
                feedback:
                  "Zu knapp. Eine klinisch relevante Information braucht: Was genau (kein Frühstück), Hintergrund (Albumin, Gewichtsverlust), Maßnahme (was du getan hast), und Verantwortlicher (Ernährungsberaterin angefordert). Ohne diese Elemente ist die Dokumentation nicht behandlungskontinuierend.",
                feedbackB1:
                  "Zu wenig. Die Dokumentation braucht mehr: Was genau hat er nicht gegessen? Was hast du getan? Wer wurde informiert?",
              },
            ],
          },
        ],
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
              id: "aktivitaet",
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
        "Heaton KW, Lewis SJ (1997). Stool Form Scale — Scandinavian Journal of Gastroenterology",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-nguyen-beob-thrombose",
      tag: "krankheitslehre",
      contentC1: {
        title: "Thrombose-Assessment bei Herrn Nguyen",
        body: "Du schaust kurz auf beide Beine von Herrn Nguyen. Vier Aussagen zur Thromboseprophylaxe und -assessment — welche stimmen?",
        glossarBegriffe: ["Thrombose", "Heparin", "Homans-Zeichen", "Tumorerkrankung"],
      },
      contentB1: {
        title: "Thrombose prüfen — was stimmt?",
        body: "Du schaust auf die Beine von Herrn Nguyen. Vier Aussagen — welche sind richtig?",
        glossarBegriffe: ["Thrombose", "Heparin", "Venenthrombose"],
      },
      question: {
        fragetext:
          "Welche Aussagen zur Thromboseprophylaxe und -assessment bei Herrn Nguyen stimmen?",
        trueFalseCards: [
          {
            statement:
              "Warme, geschwollene Wade = Alarmzeichen → Arzt informieren (aber nicht aktiv auf die Wade drücken).",
            isTrue: true,
            explanation:
              "Richtig. Warme, geschwollene Wade ist ein klassisches Thrombose-Zeichen. Das sogenannte Homans-Zeichen (Schmerz bei Dorsalflexion des Fußes) gilt inzwischen als nicht zuverlässig — und aktives Drücken auf die Wade darf nicht mehr geübt werden (Emboliegefahr). Bei Verdacht: Arzt informieren, Bein hochlagern, keine Massage.",
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
      stepId: "ce02-nguyen-beob-opt2-albumin-ernaehrung",
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
      stepId: "ce02-nguyen-beob-opt3-mazerierung-erklaeren",
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
        glossarBegriffe: ["Mazerierung", "Stomaplatte", "Schutzpaste"],
      },
      contentB1: {
        title: "Mazerierung: Was passiert mit der Haut?",
        body: "Mazerierung heißt: die Haut wird durch Feuchtigkeit beschädigt.\n\nAnalogievon: Stell dir vor: Du trägst stundenlang nasse Socken. Die Haut wird weich und verletzlich. Genauso passiert es, wenn Stuhl aus dem Stoma auf die Haut kommt. Der Stuhl greift die Haut an. Die Haut wird rot, weich, und reißt ein.\n\n**Was schützt?** 1) Die Stomaplatte muss genau passen, 2) Schutzpaste füllt kleine Lücken, 3) Beutel regelmäßig wechseln — nicht zu voll werden lassen.",
        glossarBegriffe: ["Mazerierung", "Stomaplatte", "Schutzpaste"],
      },
    },
  ],
  geschaetzteDauer: 35,
};

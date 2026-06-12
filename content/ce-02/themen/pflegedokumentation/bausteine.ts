// CE-02 Thema Pflegedokumentation & Übergabe — Wissensbausteine (15 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/pflegedokumentation/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (starke Schüler)
// Stufe 2 = Hinweis (mittlere Schüler)
// Stufe 3 = Erklärung als ContentStep (Anfänger)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_PFLEGEDOKUMENTATION_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: dokumentationspflicht-grundsatz (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-grundsatz",
    themaId: "pflegedokumentation",
    titel: "Grundsatz: Was nicht dokumentiert ist, gilt als nicht durchgeführt",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, du hast Frau Meier heute 3x mobilisiert, aber nichts aufgeschrieben. Die Tochter fragt abends nach. Wie beweist du, dass du es gemacht hast?",
      antwort:
        "Du kannst es nicht beweisen. Der Grundsatz lautet: Was nicht dokumentiert ist, gilt als nicht durchgeführt (Beweislastumkehr nach § 630f BGB). Ohne Eintrag gilt die Maßnahme vor Gericht als nicht erbracht — unabhängig davon, was tatsächlich stattgefunden hat.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Grundsatz der Pflegedokumentation lautet: **Was nicht dokumentiert ist, gilt als nicht durchgeführt.** Die Pflicht zur Dokumentation ergibt sich aus § 630f BGB (Behandlungsdokumentation) und gilt auch für Pflegekräfte.",
      textB1:
        "Es gibt einen wichtigen Satz: **Was nicht aufgeschrieben ist, das gilt als nicht gemacht.** Du musst alles dokumentieren, was du am Patienten machst. Das steht im Gesetz (§ 630f BGB).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["§ 630f BGB", "§ 132a SGB V"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-grundsatz",
        tag: "pflege",
        displayFormat: "quote",
        contentC1: {
          title: "Grundsatz: Dokumentationspflicht",
          body: "Die Pflegedokumentation ist keine freiwillige Zusatzaufgabe — sie ist **gesetzliche Pflicht**. Nach § 630f BGB (Behandlungsvertragsrecht) müssen alle durchgeführten Maßnahmen, Beobachtungen, Anordnungen und Reaktionen des Patienten schriftlich festgehalten werden. Die Rechtsprechung wendet hier die **Beweislastumkehr** an: Gibt es keine Dokumentation zu einer Maßnahme, gilt sie als **nicht durchgeführt**. Das betrifft dich direkt: Hast du einen Patienten mobilisiert, aber es nicht eingetragen, kann dir bei einem Sturz niemand nachweisen, dass du deine Aufgabe erfüllt hast. Die Dokumentation dient drei Zwecken: **rechtliche Absicherung**, **Informationsweitergabe** zwischen Schichten und **Qualitätssicherung**. Sie ist zudem Pflichtleistung für die Abrechnung mit Pflegekassen (§ 132a SGB V).",
          glossarBegriffe: ["Pflegedokumentation", "Beweislastumkehr"],
        },
        contentB1: {
          title: "Grundsatz: Dokumentationspflicht",
          body: "Dokumentation ist Pflicht — nicht extra. Das Gesetz (§ 630f BGB) sagt: Du musst alles aufschreiben, was du am Patienten machst. Warum so wichtig? Wenn du nichts aufschreibst, **gilt es als nicht gemacht**. Ein Beispiel: Du hast den Patienten alle 2 Stunden gedreht. Aber du hast es nicht eingetragen. Der Patient bekommt einen Dekubitus. Das Gericht sagt dann: 'Sie haben nicht gedreht.' Auch wenn du es gemacht hast. Dokumentation hat drei Aufgaben: Sie **schützt dich rechtlich**, sie **informiert die Kollegen** und sie **sichert die Qualität** der Pflege.",
          glossarBegriffe: ["Pflegedokumentation", "Beweislastumkehr"],
        },
      },
    },
    glossarBegriffe: ["Pflegedokumentation", "Beweislastumkehr"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: dokumentation-was-muss-rein (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-inhalte",
    themaId: "pflegedokumentation",
    titel: "Pflichtinhalte der Pflegedokumentation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du dokumentierst nach deiner Frühschicht. Was muss alles rein — und was ist unwichtig? Liste auf, was dir einfällt.",
      antwort:
        "Pflichtinhalte: durchgeführte Pflegemaßnahmen, Beobachtungen (Vitalzeichen, Haut, Verhalten), ärztliche Anordnungen und deren Umsetzung, Reaktionen des Patienten, Besonderheiten/Abweichungen, Stürze/Unfälle. Nicht hinein: Privatmeinungen, Spekulationen, unsachliche Urteile über die Person.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Pflichtinhalte sind: **durchgeführte Pflegemaßnahmen**, **Beobachtungen** (Vitalzeichen, Haut, Verhalten), **ärztliche Anordnungen und deren Umsetzung**, **Reaktionen des Patienten**, **Besonderheiten/Abweichungen** und **Stürze/Unfälle**. Privates gehört nicht hinein.",
      textB1:
        "Was muss rein: **Was du gemacht hast**, **was du gesehen hast** (Haut, Puls, Verhalten), **was der Arzt angeordnet hat**, **wie der Patient reagiert hat** und **alles Besondere** (Sturz, Schmerzen). Privatmeinungen gehören **nicht** rein.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-02",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["§ 630f BGB", "DNQP 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-inhalte",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Pflichtinhalte der Pflegedokumentation",
          body: "Die Pflegedokumentation muss **alle pflegerelevanten Informationen** enthalten — aber nur diese. Pflicht sind:\n\n1. **Durchgeführte Maßnahmen**: Grundpflege, Prophylaxen, Mobilisation, Medikamentengabe (inkl. Zeit + Kürzel).\n2. **Beobachtungen**: Vitalzeichen, Hautstatus, Bewusstseinslage, Schmerzen, Stuhl/Urin, Nahrungsaufnahme.\n3. **Ärztliche Anordnungen**: Was wurde angeordnet, wann umgesetzt, welche Reaktion?\n4. **Reaktionen des Patienten**: 'Frau M. tolerierte die Mobilisation gut', 'Herr K. klagte über Schwindel'.\n5. **Abweichungen von der Pflegeplanung**: Warum wurde ein Pflegeziel heute nicht erreicht?\n6. **Besondere Ereignisse**: Stürze, Unfälle, Angehörigengespräche, Krankenhausaufnahmen.\n\n**Nicht hinein gehören**: Privatmeinungen ('Patient ist nervig'), Spekulationen, Äußerungen Dritter ohne Relevanz, persönliche Konflikte im Team.",
          glossarBegriffe: ["Pflegedokumentation"],
        },
        contentB1: {
          title: "Pflichtinhalte der Pflegedokumentation",
          body: "Was muss in die Dokumentation? **Alles, was für die Pflege wichtig ist.**\n\n1. **Was du gemacht hast**: Waschen, Drehen, Mobilisation, Medikamente (mit Uhrzeit).\n2. **Was du gesehen hast**: Puls, Blutdruck, Haut, Schmerzen, wie der Patient gegessen hat.\n3. **Was der Arzt gesagt hat**: Neue Anordnungen und was du umgesetzt hast.\n4. **Wie der Patient reagiert hat**: 'Hat gut mitgemacht' oder 'Hat Schmerzen gehabt'.\n5. **Besonderes**: Sturz, Gespräch mit Familie, neue Probleme.\n\n**Nicht rein kommt**: Deine Meinung ('nervt mich'), Vermutungen, Gerüchte. Nur **Fakten**.",
          glossarBegriffe: ["Pflegedokumentation"],
        },
      },
    },
    glossarBegriffe: ["Pflegedokumentation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: pflegebericht-regeln (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-pflegebericht",
    themaId: "pflegedokumentation",
    titel: "Pflegebericht: 5 Regeln für sachliches Schreiben",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du schreibst einen Pflegebericht über Herrn K., der heute gestürzt ist. Was müsstest du ändern, wenn du diesen Satz liest: 'Der Patient war wieder unruhig und hat sich geweigert, im Bett zu bleiben — typisch für ihn.'",
      antwort:
        "Der Satz hat mehrere Fehler: 'wieder' ist wertend (impliziert Gewohnheit), 'typisch für ihn' ist Persönlichkeitsurteil, 'geweigert' ist interpretierend. Korrekt: Datum + Uhrzeit + konkretes Verhalten ('Herr K. versuchte um 22:15 das Bett zu verlassen. Auf meine Bitte, liegenzubleiben, reagierte er nicht.') — sachlich, wertfrei, Ich-Form, konkret.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein guter Pflegebericht ist **chronologisch** (zeitlich geordnet), **sachlich** (nur Fakten, keine Meinung), **wertfrei** (nicht beurteilend) und in der **Ich-Form** (nicht 'man' oder passiv). Er beschreibt **was** passiert ist — nicht **warum** du es interpretierst.",
      textB1:
        "Ein guter Pflegebericht ist **zeitlich geordnet** (erst das, dann das), **sachlich** (nur Fakten), **ohne Meinung** und in der **Ich-Form** ('Ich habe...' statt 'Man hat...'). Schreibe **was** passiert ist — nicht **was du denkst**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-03",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["§ 630f BGB", "DNQP 2023"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-pflegebericht",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Pflegebericht: 5 Regeln",
          body: "Der Pflegebericht ist der **narrative Teil** der Dokumentation — die Fließtext-Erzählung zusätzlich zu den strukturierten Einträgen (Kurve, Tagesplan). Fünf Regeln:\n\n1. **Chronologisch**: Einträge in zeitlicher Reihenfolge, jeder mit Datum + Uhrzeit + Handzeichen.\n2. **Sachlich**: Nur beobachtbare Fakten. Statt 'aggressiv' → 'erhob die Stimme und schlug auf den Tisch'.\n3. **Wertfrei**: Keine Urteile über Persönlichkeit. Statt 'Patient ist faul' → 'Patient lehnte Mobilisation mit dem Hinweis ab, er sei müde'.\n4. **Ich-Form**: 'Ich habe Herrn K. um 9:00 gewaschen.' — nicht 'Man hat' oder 'Es wurde'. Das macht klar, wer verantwortlich ist.\n5. **Konkret**: Zahlen, Zeiten, Zitate. 'Patient trank 500 ml zwischen 8:00 und 12:00.' — nicht 'wenig getrunken'.\n\nWörtliche Zitate des Patienten **in Anführungszeichen** sind erlaubt und oft wertvoll — sie zeigen Originalton ohne Interpretation.",
          glossarBegriffe: ["Pflegebericht"],
        },
        contentB1: {
          title: "Pflegebericht: 5 Regeln",
          body: "Der Pflegebericht ist ein **kleiner Text**, den du zusätzlich schreibst. Fünf Regeln:\n\n1. **Zeitlich geordnet**: Erst das um 8 Uhr, dann das um 10 Uhr. Mit Datum und Uhrzeit.\n2. **Sachlich**: Nur **was du gesehen hast**. Nicht 'aggressiv', sondern 'hat laut gesprochen und auf den Tisch geschlagen'.\n3. **Ohne Meinung**: Nicht 'faul', sondern 'sagte, er sei müde'.\n4. **Ich-Form**: **'Ich habe'** — nicht 'man hat'. So weiß jeder, wer es war.\n5. **Konkret**: **Zahlen und Zeiten**. 'Er trank 500 ml zwischen 8 und 12 Uhr' — nicht 'wenig'.\n\n**Zitate** des Patienten in Anführungszeichen sind gut.",
          glossarBegriffe: ["Pflegebericht"],
        },
      },
    },
    glossarBegriffe: ["Pflegebericht"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: sis-sechs-themenfelder (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-sis-themenfelder",
    themaId: "pflegedokumentation",
    titel: "SIS: 6 Themenfelder der Strukturierten Informationssammlung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Früher gab es die klassische Pflegeanamnese mit 13 AEDL oder 11 ATL — viele Seiten, viele Kreuze. Seit 2014 gibt es die SIS mit nur 6 Themenfeldern. Warum macht weniger manchmal mehr Sinn in der Pflege?",
      antwort:
        "Weniger Kreuze bedeuten mehr Fokus auf den Menschen: Die SIS ersetzt Ankreuzlisten durch Narrativ. Statt 'Kann der Patient waschen: ja/nein' fragt die SIS 'Was ist dem Bewohner wichtig?' und 'Was macht ihm Sorge?'. Das Ziel: weniger Bürokratie, mehr Beziehungsarbeit — und trotzdem Rechtssicherheit.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **SIS** (Strukturierte Informationssammlung) wurde 2014 vom BMG eingeführt. Sie besteht aus **6 Themenfeldern**: Kognition/Kommunikation, Mobilität, krankheitsbezogene Anforderungen, Selbstversorgung, Leben in sozialen Beziehungen, Haushalt/Wohnen.",
      textB1:
        "Die **SIS** (Strukturierte Informationssammlung) gibt es seit 2014. Sie hat **6 Themenfelder**: 1. Denken und Sprechen, 2. Bewegung, 3. Krankheit, 4. Selbst-Versorgung (Waschen, Essen), 5. Soziales Leben, 6. Wohnen und Haushalt.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["BMG / Beikirch & Roes (2014)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-sis-themenfelder",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "SIS: 6 Themenfelder",
          body: "Die **Strukturierte Informationssammlung (SIS)** ersetzte ab 2014 die klassische Pflegeanamnese (z.B. nach AEDL/ATL). Sie wurde im Auftrag des **Bundesgesundheitsministeriums (BMG)** von Beikirch und Roes entwickelt und ist Grundlage des **Strukturmodells der Pflegedokumentation**. Die 6 Themenfelder:\n\n1. **Kognitive und kommunikative Fähigkeiten**: Orientierung, Gedächtnis, Sprache, Verstehen.\n2. **Mobilität und Beweglichkeit**: Gehen, Sitzen, Positionieren, Transfer.\n3. **Krankheitsbezogene Anforderungen und Belastungen**: Medikamente, Wunden, Schmerzen, Symptome.\n4. **Selbstversorgung**: Körperpflege, Kleidung, Ernährung, Ausscheidung.\n5. **Leben in sozialen Beziehungen**: Kontakte, Aktivitäten, Einsamkeit.\n6. **Haushaltsführung/Wohnsituation** (ambulant) bzw. **Tages- und Nachtgestaltung** (stationär).\n\nErgänzt durch **Themenfeld A** (aktuelle Situation) und **Themenfeld B** (Risiken/Phänomene). Ziel: weniger Kreuze, mehr Narrativ — Pflege als **Beziehungsarbeit**.",
          glossarBegriffe: ["SIS", "Strukturmodell"],
        },
        contentB1: {
          title: "SIS: 6 Themenfelder",
          body: "Die **SIS** heißt 'Strukturierte Informationssammlung'. Sie ist neu seit **2014** und kommt vom Gesundheitsministerium. Sie hat **6 Felder**:\n\n1. **Denken und Sprechen**: Kann er sich orientieren? Versteht er dich?\n2. **Bewegung**: Kann er gehen, sitzen, sich umdrehen?\n3. **Krankheit**: Welche Medikamente? Welche Schmerzen? Welche Wunden?\n4. **Selbst-Versorgung**: Kann er sich waschen, anziehen, essen, auf Toilette gehen?\n5. **Soziales Leben**: Hat er Kontakte? Fühlt er sich einsam?\n6. **Wohnen und Alltag**: Wie lebt er zu Hause oder im Heim?\n\nDazu gibt es **Feld A** (Was ist aktuell wichtig?) und **Feld B** (Welche Risiken gibt es?). Die SIS will: **weniger ankreuzen, mehr erzählen**.",
          glossarBegriffe: ["SIS", "Strukturmodell"],
        },
      },
    },
    glossarBegriffe: ["SIS", "Strukturmodell"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: strukturmodell-4-elemente (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-strukturmodell",
    themaId: "pflegedokumentation",
    titel: "Strukturmodell: 4 Elemente der Entbürokratisierung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor: Du bekommst eine neue Doku-Mappe mit 40 Seiten Checklisten pro Bewohner — und eine zweite mit 6 Themenfeldern und einem Bericht nur bei Abweichungen. Welche würdest du bevorzugen? Warum?",
      antwort:
        "Die zweite — weniger Papier, mehr Fokus auf den Menschen. Genau das ist das Ziel des Strukturmodells (BMG 2014): 4 Elemente (SIS, Maßnahmenplan, Bericht nur bei Abweichungen, Evaluation) reduzieren die Dokumentationsmenge um ~30 % — ohne Verlust an Rechtssicherheit.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das **Strukturmodell** (BMG 2014) hat **4 Elemente**: (1) **SIS** — Informationssammlung, (2) **individueller Maßnahmenplan** — Pflegeplanung, (3) **Bericht** — nur bei Abweichungen vom Plan ('Fokus auf Abweichung'), (4) **Evaluation** — regelmäßige Überprüfung.",
      textB1:
        "Das **Strukturmodell** hat **4 Teile**: (1) **SIS** — Infos sammeln, (2) **Maßnahmen-Plan** — was soll gemacht werden, (3) **Bericht** — nur bei Änderungen (nicht jeden Tag), (4) **Evaluation** — prüfen, ob es klappt.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["BMG / Beikirch & Roes (2014)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-strukturmodell",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Strukturmodell: 4 Elemente",
          body: "Das **Strukturmodell der Entbürokratisierung** (BMG 2014) hat **4 Elemente**:\n\n1. **SIS (Strukturierte Informationssammlung)** — Erstgespräch mit Bewohner/Angehörigen, 6 Themenfelder + Feld A (aktuelle Situation) + Feld B (Risikomatrix). Ergebnis: Verstehen **wer der Mensch ist**, nicht nur **was fehlt**.\n\n2. **Individueller Maßnahmenplan** — Aus der SIS abgeleitete Pflegehandlungen pro Tag/Woche. Nur **individuelle** Maßnahmen, keine Standards.\n\n3. **Berichteblatt** — Fokussiert auf **Abweichungen**: Nur wenn etwas Ungewöhnliches passiert (Sturz, Zustandsverschlechterung, Ablehnung), wird berichtet. Das **reduziert die Dokumentationsmenge um ~30 %**.\n\n4. **Evaluation** — Regelmäßige Überprüfung: Passt der Plan noch? Haben sich die Bedürfnisse verändert? Mindestens **alle 6 Monate**, sonst nach Bedarf.\n\nZiel: **mehr Zeit am Menschen, weniger Papier** — ohne Verlust an Rechtssicherheit.",
          glossarBegriffe: ["Strukturmodell", "SIS"],
        },
        contentB1: {
          title: "Strukturmodell: 4 Elemente",
          body: "Das **Strukturmodell** hat **4 Teile**:\n\n1. **SIS** (Strukturierte Informationssammlung): Du sprichst mit dem Bewohner und der Familie. Du füllst 6 Themenfelder aus. **Du verstehst den Menschen**.\n\n2. **Maßnahmen-Plan**: Was soll jeden Tag gemacht werden? Nur **individuell**, keine Standards.\n\n3. **Bericht**: Du schreibst **nur bei Besonderem**. Nicht jeden Tag alles. Das spart Zeit (~30 % weniger).\n\n4. **Evaluation**: Du prüfst **alle 6 Monate** (oder öfter): Passt der Plan noch? Was hat sich geändert?\n\n**Ziel**: Mehr Zeit für den Menschen, weniger Papier — aber immer noch rechtssicher.",
          glossarBegriffe: ["Strukturmodell", "SIS"],
        },
      },
    },
    glossarBegriffe: ["Strukturmodell", "SIS"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: sbar-schema (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-sbar",
    themaId: "pflegedokumentation",
    titel: "SBAR-Schema: Strukturierte Meldungen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du musst dem Arzt am Telefon schnell mitteilen: Herr K. hat Schmerzen, er ist seit gestern neu, er hat hohes Fieber, du willst ein Schmerzmittel. Wie baust du diese Information so auf, dass der Arzt **alles** versteht, ohne zurückzufragen?",
      antwort:
        "Strukturiere nach SBAR: S — aktuelles Problem (Schmerzen, Fieber), B — Vorgeschichte (seit gestern, neue Aufnahme, Diagnose), A — deine Einschätzung (Verdacht auf Infektion?), R — dein Vorschlag (Schmerzmittel, bitte kommen). SBAR verhindert, dass du vergisst, was der Arzt braucht, um zu entscheiden.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**SBAR** ist ein Kommunikations-Schema aus der Luftfahrt (Leonard 2004, BMJ). Es gliedert eine Meldung in 4 Teile: **S**ituation (was ist jetzt?), **B**ackground (Vorgeschichte), **A**ssessment (Einschätzung), **R**ecommendation (Empfehlung).",
      textB1:
        "**SBAR** ist eine Struktur für Meldungen. Vier Teile: **S** = Situation (was ist jetzt?), **B** = Background (was war vorher?), **A** = Assessment (was denkst du?), **R** = Recommendation (was brauchst du?).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-06",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["Leonard M., Graham S., Bonacum D. (2004): BMJ Qual Saf"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-sbar",
        tag: "pflege",
        contentC1: {
          title: "SBAR-Schema",
          body: "**SBAR** wurde in der US-Marine entwickelt und von Michael Leonard (Kaiser Permanente) **2004 in die Medizin übertragen** (Leonard et al., BMJ Qual Saf). Es gibt strukturierten Meldungen einen klaren Aufbau:\n\n**S — Situation**: Wer bist du, welcher Patient, was ist das aktuelle Problem?\n*Beispiel*: 'Schwester Meier, Station 3, ich rufe wegen Herrn Koch, Zimmer 212. Er klagt seit 20 Minuten über starke Brustschmerzen.'\n\n**B — Background**: Relevante Vorgeschichte, Diagnosen, Medikation.\n*Beispiel*: 'Aufnahme vor 2 Tagen wegen Pneumonie. Vorerkrankungen: KHK, Diabetes. Aktuelle Medikamente: ...'\n\n**A — Assessment**: Deine Einschätzung — was glaubst du, was los ist?\n*Beispiel*: 'Blutdruck 90/60, Puls 110, kaltschweißig. Ich vermute einen kardialen Notfall.'\n\n**R — Recommendation**: Konkreter Vorschlag, was als Nächstes zu tun ist.\n*Beispiel*: 'Ich bitte um sofortige Vorstellung und EKG.'\n\nVorteil: **Keine Info vergessen, kein Rückfragen nötig** — kürzer und klarer.",
          glossarBegriffe: ["SBAR", "ISBAR"],
        },
        contentB1: {
          title: "SBAR-Schema",
          body: "**SBAR** ist eine Struktur für wichtige Meldungen. Sie kommt aus der **Luftfahrt** und wird seit 2004 in der Medizin genutzt (Leonard 2004). Vier Teile:\n\n**S — Situation** (Was ist jetzt?): Wer bist du, welcher Patient, was ist das Problem?\n*Beispiel*: 'Schwester Meier, Station 3. Herr Koch, Zimmer 212, hat seit 20 Minuten starke Brustschmerzen.'\n\n**B — Background** (Was war vorher?): Diagnose, Medikamente, Vorerkrankungen.\n\n**A — Assessment** (Was denkst du?): Deine Einschätzung.\n*Beispiel*: 'Blutdruck 90/60, Puls 110. Ich vermute einen Herznotfall.'\n\n**R — Recommendation** (Was brauchst du?): Was soll jetzt passieren?\n*Beispiel*: 'Bitte kommen Sie sofort und machen Sie ein EKG.'\n\n**Vorteil**: **Klar und kurz**. Kein Vergessen, kein Nachfragen.",
          glossarBegriffe: ["SBAR", "ISBAR"],
        },
      },
    },
    glossarBegriffe: ["SBAR", "ISBAR"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: uebergabeformen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-uebergabeformen",
    themaId: "pflegedokumentation",
    titel: "Übergabeformen: Mündlich, schriftlich, Bedside-Handover",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, du gibst an die Spätschicht ab. Option A: Ihr sitzt im Dienstzimmer, du erzählst alles. Option B: Ihr geht gemeinsam von Zimmer zu Zimmer. Welche Form hat welche Vor- und Nachteile? Was erfährt der Patient?",
      antwort:
        "Option A: schnell, Rückfragen möglich, aber fehleranfällig und kein Patientenbezug. Option B (Bedside-Handover): Patient wird einbezogen, Haut/Infusionen direkt kontrolliert, Sicherheit steigt nachweislich — aber dauert länger, Datenschutz bei Mehrbettzimmer schwierig. Best Practice: Kombination beider Formen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Drei Übergabeformen: (1) **mündlich im Dienstzimmer** — schnell, aber ohne Patientenbezug, (2) **schriftlich** (Doku/Kurve) — immer verfügbar, aber kein Rückfragen möglich, (3) **Bedside-Handover** (am Bett) — Patient wird einbezogen, Sicherheit steigt, dauert länger.",
      textB1:
        "Drei Arten von Übergabe: (1) **Mündlich im Zimmer** — schnell, aber Patient nicht dabei. (2) **Schriftlich** — steht in der Doku, immer nachlesbar. (3) **Am Bett** — Patient ist dabei, kann selbst etwas sagen, dauert länger.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-07",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2023", "WHO Patient Safety Principles (2007)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-uebergabeformen",
        tag: "pflege",
        contentC1: {
          title: "Übergabeformen",
          body: "Die Übergabe hat **drei Hauptformen**, die sich ergänzen:\n\n**1. Mündliche Übergabe im Dienstzimmer**\n- *Vorteil*: Schnell, Rückfragen möglich, Team-Gefühl.\n- *Nachteil*: Fehleranfällig (Gedächtnis), Patient wird nicht einbezogen, Diskretionsprobleme bei lauten Gesprächen.\n\n**2. Schriftliche Übergabe (Doku, Kurve, Pflegebericht)**\n- *Vorteil*: Immer verfügbar, rechtssicher, auch für Vertretungen nachlesbar.\n- *Nachteil*: Kein Rückfragen möglich, braucht Lesezeit, oft unvollständig ohne mündliche Ergänzung.\n\n**3. Bedside-Handover (Übergabe am Bett)**\n- *Vorteil*: **Patient wird einbezogen**, kann Angaben korrigieren, Hautinspektion + Infusionen/Drainagen werden direkt gesichtet, **Sicherheit steigt nachweislich**.\n- *Nachteil*: Dauert länger, Diskretion bei Mehrbettzimmern schwierig, nicht jeder Patient möchte anwesend sein.\n\n**Best Practice (DNQP 2023)**: **Kombination** aller drei Formen — kurzer schriftlicher Bericht + mündliche Übergabe + Bedside-Rundgang bei kritischen Patienten.",
          glossarBegriffe: ["Bedside-Handover"],
        },
        contentB1: {
          title: "Übergabeformen",
          body: "Es gibt **drei Arten** von Übergabe:\n\n**1. Mündlich im Dienstzimmer**\n- **Gut**: Schnell, man kann fragen.\n- **Nicht gut**: Man vergisst was, der Patient ist nicht dabei.\n\n**2. Schriftlich (in der Doku)**\n- **Gut**: Immer lesbar, rechtssicher.\n- **Nicht gut**: Man kann nicht fragen, dauert zum Lesen.\n\n**3. Am Bett (Bedside-Handover)**\n- **Gut**: **Patient ist dabei**, kann selbst was sagen. Du siehst die Haut, die Infusionen direkt. Mehr **Sicherheit**.\n- **Nicht gut**: Dauert länger. Bei Mehrbett-Zimmern schwierig (Datenschutz).\n\n**Am besten (DNQP 2023)**: **Alle drei Formen kombinieren**. Ein kurzer schriftlicher Bericht + mündliche Übergabe + bei kritischen Patienten **am Bett** schauen.",
          glossarBegriffe: ["Bedside-Handover"],
        },
      },
    },
    glossarBegriffe: ["Bedside-Handover"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: isbar-vs-sbar (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-isbar",
    themaId: "pflegedokumentation",
    titel: "ISBAR: Erweiterung von SBAR um Identification",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Die WHO empfiehlt seit 2007 ISBAR statt SBAR. Was könnte der Unterschied sein — und warum war das S allein nicht genug, gerade in großen Kliniken mit vielen Patienten?",
      antwort:
        "In großen Kliniken gibt es häufig Patienten mit gleichem Nachnamen oder ähnlichen Namen. ISBAR fügt ein I (Identification) vor S-B-A-R: Wer bist du (Anrufer), wer ist der Patient (Name, Geburtsdatum, Station)? Das verhindert Patientenverwechslungen, die zu Behandlungsfehlern führen können.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**ISBAR = Identification + SBAR**. Das **I** am Anfang wird vor die anderen Buchstaben gestellt: Wer bin ich (Anrufer)? Wer ist der Patient (Name, Geburtsdatum, Station)? Die WHO empfiehlt ISBAR seit 2007 zur Vermeidung von Patientenverwechslung.",
      textB1:
        "**ISBAR = I + SBAR**. Das **I** ist neu und steht am Anfang: **I** = **Identification** (Wer bin ich? Wer ist der Patient? Name, Geburtstag). Die WHO sagt seit 2007: Bitte zuerst sagen, wer gemeint ist — sonst Verwechslungen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-08",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["WHO Patient Safety Alliance (2007): High 5s Initiative"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-isbar",
        tag: "pflege",
        displayFormat: "mnemonic",
        contentC1: {
          title: "ISBAR: Erweiterung von SBAR",
          body: "**ISBAR** ist eine Erweiterung von SBAR um ein **I** am Anfang: **Identification**.\n\n**I — Identification**: Wer bist du? Welcher Patient? Klare Identifikation beider Seiten.\n*Beispiel*: 'Schwester Meier, Station Chirurgie 3, zum Patienten Herrn Koch, geb. 14.05.1952, Zimmer 212 Bett A.'\n\nWarum das **I** so wichtig ist: In großen Kliniken gibt es oft Patienten mit gleichem Nachnamen oder ähnlichen Namen. Ohne Identifikation können Medikationsverwechslungen und Fehlbehandlungen entstehen. Die **WHO Patient Safety Alliance** empfiehlt ISBAR seit 2007 als Teil der 'High 5s'-Initiative zur Reduktion von Behandlungsfehlern.\n\nDer Rest (S-B-A-R) bleibt identisch:\n- **S** — Situation (aktuelles Problem)\n- **B** — Background (Vorgeschichte)\n- **A** — Assessment (Einschätzung)\n- **R** — Recommendation (Empfehlung)",
          glossarBegriffe: ["ISBAR", "SBAR"],
        },
        contentB1: {
          title: "ISBAR: Erweiterung von SBAR",
          body: "**ISBAR** ist **SBAR + ein I am Anfang**.\n\n**I — Identification** (Wer ist wer?): Wer bist du? Welcher Patient?\n*Beispiel*: 'Schwester Meier, Station Chirurgie 3, Patient Herr Koch, geboren am 14.05.1952, Zimmer 212.'\n\n**Warum das I?** In großen Kliniken gibt es viele Patienten mit ähnlichen Namen. Ohne klares **Identifizieren** gibt es **Verwechslungen** — auch bei Medikamenten. Die **WHO** empfiehlt seit **2007**: Zuerst klar sagen, **wer gemeint ist**.\n\nDanach weiter mit **S-B-A-R**: Situation, Background, Assessment, Recommendation.",
          glossarBegriffe: ["ISBAR", "SBAR"],
        },
      },
    },
    glossarBegriffe: ["ISBAR", "SBAR"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: elektronisch-vs-papier (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-dokusysteme",
    themaId: "pflegedokumentation",
    titel: "Papier vs. elektronische Pflegedokumentation (eDoku)",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Deine Station stellt nächste Woche von Papier auf elektronische Doku (eDoku) um. Die Kollegin Frau M. sagt: 'Früher war alles besser — auf Papier ging nichts kaputt.' Was sagst du? Welche Argumente hast du für und gegen beide Systeme?",
      antwort:
        "Beide haben Stärken: Papier ist ausfallsicher (kein Serverausfall) und günstig, aber schwer lesbar, keine Suche, keine Warnungen. eDoku ist strukturiert, durchsuchbar, liefert automatische Reports und Warnungen (Allergien), hat aber Systemabhängigkeit und Klick-Fatigue. Best Practice: eDoku mit Notfall-Papierformular. DSGVO gilt für beide gleich.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Beide Systeme haben Stärken: **Papier** ist ausfallsicher (kein Stromausfall), aber schwer lesbar, unstrukturiert, schlecht durchsuchbar. **eDoku** ist strukturiert, durchsuchbar, lesbar, erzeugt automatisch Reports — ist aber systemabhängig (Serverausfall, Login-Probleme).",
      textB1:
        "Beide haben Vorteile: **Papier** geht immer, auch ohne Strom. Aber: schwer lesbar, keine Suche möglich. **Elektronisch (eDoku)**: lesbar, schnell suchbar, automatische Berichte. Aber: Wenn der Server kaputt ist, geht nichts.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-09",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["§ 630f BGB", "DSGVO (2016/679)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-dokusysteme",
        tag: "pflege",
        contentC1: {
          title: "Papier vs. eDoku",
          body: "Dokumentationssysteme gibt es als **Papier** und **elektronisch (eDoku)** — beide mit klaren Vor- und Nachteilen.\n\n**Papier-Dokumentation**\n- *Vorteile*: **Ausfallsicher** (kein Strom, kein Server), niedrige Anschaffungskosten, vertraut für ältere Kollegen.\n- *Nachteile*: **Handschrift oft unlesbar** (Haftungsrisiko), **keine Suche möglich**, **keine Warnmeldungen**, **Redundanz** (dieselbe Info an 3 Stellen), **Diebstahl/Verlust**.\n\n**Elektronische Dokumentation (eDoku)**\n- *Vorteile*: **Immer lesbar**, **durchsuchbar**, **automatische Reports** (MDK, Abrechnung), **Warnhinweise** (z.B. Medikation-Allergien), **Gleichzeitiger Zugriff** (mehrere Kollegen), **Backups** gegen Verlust.\n- *Nachteile*: **Systemabhängig** (Serverausfall = Stillstand), **Login-Frust**, **Klick-Fatigue** (viele Menüs), **Kosten**, **Schulung** nötig, **Datenschutz-Risiken** (Cyberangriff).\n\n**Entscheidung**: Die meisten Kliniken wandern zu eDoku — mit **Notfall-Papierformular** für Systemausfälle. Die DSGVO gilt für **beide** Systeme gleich.",
          glossarBegriffe: ["DSGVO"],
        },
        contentB1: {
          title: "Papier vs. eDoku",
          body: "Es gibt **zwei Systeme**: **Papier** und **elektronisch (eDoku)**.\n\n**Papier**\n- **Gut**: Funktioniert immer, auch ohne Strom. Keine teure Technik.\n- **Nicht gut**: **Handschrift schwer lesbar** (Problem vor Gericht), **keine Suche**, gleiche Infos an mehreren Stellen, Blätter können verloren gehen.\n\n**Elektronisch (eDoku)**\n- **Gut**: **Immer lesbar**, **schnell suchen**, **automatische Berichte**, **Warnungen** (z.B. Allergien), **Backup** gegen Verlust.\n- **Nicht gut**: Wenn der Server kaputt ist, geht nichts. **Klick-Frust** (viele Menüs), **teuer**, braucht **Schulung**.\n\n**Heute machen** die meisten Kliniken **elektronisch** — mit **Papier-Notfallformular**, wenn das System ausfällt. **DSGVO** gilt für beide Systeme.",
          glossarBegriffe: ["DSGVO"],
        },
      },
    },
    glossarBegriffe: ["DSGVO"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: aufbewahrungsfrist-dsgvo (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-aufbewahrung",
    themaId: "pflegedokumentation",
    titel: "Aufbewahrungsfristen und DSGVO",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau K. ist vor 2 Jahren verstorben. Ihre Tochter ruft an und fragt, ob man die alten Pflegeakten der Mutter noch hat. Was sagst du ihr? Wie lange müssen solche Unterlagen in Deutschland aufbewahrt werden?",
      antwort:
        "Die Akte muss noch vorhanden sein: § 630f Abs. 3 BGB schreibt 10 Jahre Aufbewahrung nach Abschluss der Behandlung vor — auch nach dem Tod des Patienten. 2 Jahre sind zu kurz. Die Tochter hat als Erbin ein Einsichtsrecht (§ 630g BGB), muss aber Vollmacht/Erbnachweis vorlegen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die **Aufbewahrungsfrist** für Pflege-/Behandlungsdokumentation beträgt nach § 630f Abs. 3 BGB **10 Jahre** nach Abschluss der Behandlung. Bei minderjährigen Patienten kann die Frist länger sein (bis zur Vollendung des 28. Lebensjahres).",
      textB1:
        "Die Pflegeakten musst du **10 Jahre** aufbewahren (§ 630f Absatz 3 BGB). Das gilt **nach Ende der Behandlung**. Bei **Kindern** manchmal länger — **bis der Patient 28 Jahre alt ist**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["§ 630f Abs. 3 BGB", "DSGVO (2016/679)", "Röntgenverordnung"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-aufbewahrung",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Aufbewahrungsfristen und DSGVO",
          body: "**Aufbewahrungsfristen** in der Pflege sind gesetzlich klar geregelt:\n\n**10 Jahre** nach § 630f Abs. 3 BGB — für die **allgemeine Pflege-/Behandlungsdokumentation**. Gilt nach Abschluss der Behandlung (Entlassung, Tod, Wechsel).\n\n**28 Jahre bei Minderjährigen** — um Ansprüche aus Kindheitsbehandlungen auch später prüfen zu können. Genauer: bis zur Vollendung des 28. Lebensjahres des Patienten.\n\n**30 Jahre** bei besonderen Fällen, z.B. **Strahlentherapie** (Röntgenverordnung).\n\n**DSGVO** (gültig seit 25.05.2018) regelt den Umgang während und nach der Aufbewahrung:\n- **Datensparsamkeit**: Nur was nötig ist speichern.\n- **Zweckbindung**: Daten nur für Pflege verwenden, nicht für andere Zwecke.\n- **Löschung nach Frist**: Nach 10 Jahren **verpflichtend** — papierhaft schreddern, elektronisch sicher löschen.\n- **Auskunftsrecht**: Patienten dürfen ihre Daten einsehen und Kopien erhalten.",
          glossarBegriffe: ["Aufbewahrungsfrist", "DSGVO"],
        },
        contentB1: {
          title: "Aufbewahrungsfristen und DSGVO",
          body: "Wie lange musst du Pflegeakten aufbewahren?\n\n**10 Jahre** — normal, nach Ende der Behandlung (§ 630f Absatz 3 BGB).\n\n**Bis 28. Lebensjahr** — bei **Kindern**. Zum Beispiel: Ein Kind wird mit 5 behandelt. Die Akte muss **23 Jahre** aufgehoben werden (bis das Kind 28 ist).\n\n**30 Jahre** — bei besonderen Sachen wie **Röntgen** oder **Strahlentherapie**.\n\n**DSGVO** (Gesetz seit **2018**) sagt:\n- Nur speichern, **was nötig ist**.\n- Daten **nur für die Pflege** nutzen, nicht für Werbung oder andere Zwecke.\n- Nach 10 Jahren **löschen** (Papier schreddern, Computer sicher löschen).\n- **Patient darf** seine Daten **sehen** und eine **Kopie** bekommen.",
          glossarBegriffe: ["Aufbewahrungsfrist", "DSGVO"],
        },
      },
    },
    glossarBegriffe: ["Aufbewahrungsfrist", "DSGVO"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: dokumentation-fehler-korrigieren (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-korrekturen",
    themaId: "pflegedokumentation",
    titel: "Korrekturen in der Pflegedokumentation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hast beim Pflegebericht gerade einen Fehler gemacht: Du hast 'Blutdruck 140/90' geschrieben, richtig wäre '120/80'. Du hast noch keinen Stift abgesetzt. Was machst du — überkleben, durchstreichen, Tippex, neu schreiben? Und warum?",
      antwort:
        "Einmal sauber durchstreichen (Original muss lesbar bleiben!), Korrektur daneben schreiben, Datum + Uhrzeit + Handzeichen. Tippex, Überkleben, Ausradieren, Rückdatieren sind verboten — das ist Urkundenfälschung (§ 267 StGB). Auch wenn der Fehler 'unwichtig' scheint: Die richtige Korrektur schützt dich rechtlich.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Korrekturen in der Pflegedokumentation: **Einmal sauber durchstreichen** (Original lesbar lassen!), **Korrektur dazuschreiben**, **Datum und Handzeichen**. **Verboten**: Tippex, Überkleben, Ausradieren, Rückdatieren. Grund: Urkundenfälschung (§ 267 StGB).",
      textB1:
        "Wenn du einen Fehler gemacht hast: **Einmal durchstreichen** (das Alte muss noch lesbar sein!), **richtig dazuschreiben**, **Datum und Kürzel**. **Verboten**: Tippex, Überkleben, Ausradieren, Rückdatieren. Sonst = **Urkundenfälschung**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-11",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["§ 630f Abs. 1 BGB", "§ 267 StGB"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-korrekturen",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Korrekturen richtig vornehmen",
          body: "Korrekturen in der Pflegedokumentation unterliegen strengen Regeln (§ 630f Abs. 1 BGB + § 267 StGB):\n\n**Korrekte Fehlerberichtigung**\n1. **Einmal dünn durchstreichen** — das Original muss **lesbar** bleiben.\n2. **Korrektur darüber oder daneben** schreiben.\n3. **Datum + Uhrzeit + Handzeichen** der Korrektur.\n4. Bei wichtigen Änderungen: **Kurze Erklärung** ('Korrektur: Verwechslung mit Nachbarpatient').\n\n**Nie erlaubt**\n- **Tippex, Überkleben, Radiergummi** — macht Original unleserlich.\n- **Ausreißen** von Seiten — sichtbare Manipulation.\n- **Rückdatieren** — Urkundenfälschung nach § 267 StGB.\n- **Überschreiben** mit derselben Farbe — keine Nachvollziehbarkeit.\n\n**Bei eDoku**: Das System protokolliert **jede Änderung automatisch** (wer, wann, was), plus Logbuch-Export für MDK/Gericht. Alte Einträge werden **nie gelöscht**, sondern **als korrigiert markiert**.",
          glossarBegriffe: ["Urkundenfälschung"],
        },
        contentB1: {
          title: "Korrekturen richtig vornehmen",
          body: "So korrigierst du einen Fehler richtig:\n\n**Das ist richtig**\n1. **Einmal durchstreichen** (dünn — man muss das Alte noch lesen können).\n2. **Richtig danebenschreiben**.\n3. **Datum, Uhrzeit, dein Kürzel**.\n4. Bei wichtigen Fehlern: **Warum war es falsch?** ('Ich habe den Namen verwechselt').\n\n**Verboten**\n- **Tippex oder überkleben** (Alt ist nicht mehr lesbar).\n- **Seite ausreißen** (das sieht man).\n- **Rückdatieren** (mit altem Datum schreiben, als wäre es damals geschrieben) — das ist **Urkundenfälschung** (§ 267 StGB).\n- **Einfach überschreiben** — man kann nicht sehen, was vorher stand.\n\n**Bei eDoku**: Der Computer merkt sich **jede Änderung** automatisch.",
          glossarBegriffe: ["Urkundenfälschung"],
        },
      },
    },
    glossarBegriffe: ["Urkundenfälschung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: datenschutz-schweigepflicht (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-schweigepflicht",
    themaId: "pflegedokumentation",
    titel: "Schweigepflicht und Datenschutz",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Die Tochter von Herrn P. ruft dich auf der Station an und sagt: 'Ich bin die Tochter, wie geht es meinem Vater?' Du kennst sie nicht persönlich. Darfst du ihr am Telefon erzählen, wie es ihrem Vater geht? Was ist dein Abwägungskriterium?",
      antwort:
        "Nein — ohne Einwilligung des Patienten darfst du keine Gesundheitsinfos weitergeben, auch nicht an Angehörige (§ 203 StGB + DSGVO Art. 9). Telefonisch ist die Identität nicht verifizierbar. Richtig: 'Ihr Vater muss uns erlauben, Ihnen Auskunft zu geben.' Ausnahmen: Lebensgefahr, gesetzliche Meldepflicht, bevollmächtigter Betreuer.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Schweigepflicht** (§ 203 StGB) + **DSGVO** gelten zusammen: **Ohne Einwilligung des Patienten** darfst du keine Gesundheitsinfos an Dritte (auch Angehörige!) weitergeben. Ausnahmen: **Lebensgefahr**, **gesetzliche Pflicht** (Meldepflicht), **vormundschaftliche Befugnis**.",
      textB1:
        "**Schweigepflicht** (§ 203 StGB) und **DSGVO**: **Ohne Erlaubnis des Patienten** darfst du **niemandem** etwas sagen — auch **nicht der Familie**! Ausnahmen: **Lebensgefahr**, **Meldepflicht** bei bestimmten Krankheiten, **gesetzlicher Betreuer**.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-12",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["§ 203 StGB", "DSGVO Art. 9", "§ 34 StGB", "§ 6 IfSG"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-schweigepflicht",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Schweigepflicht und Datenschutz",
          body: "Die **Schweigepflicht** ist für Pflegekräfte zentral und mehrfach geregelt:\n\n**§ 203 StGB** (Verletzung von Privatgeheimnissen): Bis zu **1 Jahr Haft oder Geldstrafe** bei Verstoß.\n\n**DSGVO Art. 9**: Gesundheitsdaten sind **besonders geschützt** — Verarbeitung nur mit **ausdrücklicher Einwilligung** oder **gesetzlicher Erlaubnis**.\n\n**Wann darf ich Informationen weitergeben?**\n1. **Patient hat eingewilligt** (schriftlich, mündlich oder konkludent).\n2. **Gesetzliche Meldepflicht** (Infektionsschutzgesetz, § 6 IfSG — z.B. Tuberkulose).\n3. **Lebensgefahr** — rechtfertigender Notstand (§ 34 StGB).\n4. **Gesetzlicher Betreuer/Vormund** mit nachgewiesener Vollmacht (Vorlage!).\n\n**Wann NICHT?**\n- **Angehörige ohne Einwilligung** — auch Ehepartner/Kinder **nicht automatisch**.\n- **Telefonisch** ohne Identitätsprüfung — kein Gesprächspartner verifiziert = keine Auskunft.\n- **Im Bus, im Aufzug, in der Cafeteria** — auch ohne Namen ist jedes Detail verboten.\n- **In sozialen Medien** — nie Patientenfotos oder Fallgeschichten posten.",
          glossarBegriffe: ["Schweigepflicht", "DSGVO"],
        },
        contentB1: {
          title: "Schweigepflicht und Datenschutz",
          body: "Die **Schweigepflicht** ist sehr wichtig:\n\n**§ 203 StGB**: Wenn du Gesundheitsdaten verrätst, bekommst du **bis zu 1 Jahr Haft** oder eine Geldstrafe. Auch die **DSGVO** schützt Gesundheitsdaten besonders stark.\n\n**Wann darfst du etwas sagen?**\n1. **Wenn der Patient es erlaubt**.\n2. **Wenn das Gesetz es verlangt** (zum Beispiel bei bestimmten Krankheiten wie Tuberkulose — § 6 IfSG).\n3. **Wenn Lebensgefahr besteht**.\n4. **Wenn jemand ein gesetzlicher Betreuer ist** — mit einem **Papier** (Vollmacht).\n\n**Wann NICHT?**\n- **Der Familie** ohne Erlaubnis — **auch nicht dem Ehemann oder den Kindern**!\n- **Am Telefon** — du weißt nicht, wer dran ist.\n- **Im Bus, im Aufzug, in der Cafeteria** — nie über Patienten sprechen.\n- **In WhatsApp, Instagram, TikTok** — niemals Fotos oder Geschichten.",
          glossarBegriffe: ["Schweigepflicht", "DSGVO"],
        },
      },
    },
    glossarBegriffe: ["Schweigepflicht", "DSGVO"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: uebergabe-fallbeispiel-sbar (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-sbar-anwenden",
    themaId: "pflegedokumentation",
    titel: "ISBAR anwenden: Meldung bei Hypoglykämie-Verdacht",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hast Frau B. (72 Jahre, seit 3 Tagen auf Station wegen Pneumonie, Diabetikerin). Sie ist heute nach der Visite plötzlich apathisch, atmet schnell, Blutzucker 48 mg/dl. Du musst jetzt den diensthabenden Arzt anrufen. Formuliere die Meldung nach ISBAR — **alle 5 Teile**.",
      antwort:
        "I: 'Schwester Demir, Station 4B, Patientin Frau Hansen, geb. 15.03.1954, Zimmer 418.' S: 'BZ 48 mg/dl, apathisch, Atemfrequenz 28/min, zittert, reagiert verzögert.' B: 'Seit 3 Tagen wegen Pneumonie, insulinpflichtige Diabetikerin, letzte Insulingabe vor 2h, Frühstück nicht gegessen.' A: 'Ich vermute Hypoglykämie.' R: 'Bitte sofort kommen, soll ich Glukose bereithalten?'",
    },
    stufe2: {
      typ: "hinweis",
      text: "Gehe Schritt für Schritt durch ISBAR: **I** = Wer bist du, wer ist die Patientin? **S** = Was ist jetzt akut? **B** = Was war vorher (Diagnose, Vorgeschichte)? **A** = Was vermutest du (Einschätzung)? **R** = Was brauchst du vom Arzt (klare Bitte)? Jede Stufe 1-3 Sätze.",
      textB1:
        "Geh durch die 5 Teile: **I** = Wer bist du, wer ist die Patientin? **S** = Was ist gerade passiert? **B** = Was war vorher (Krankheit, Aufnahmegrund)? **A** = Was denkst du (Vermutung)? **R** = Was brauchst du vom Arzt (klare Bitte)?",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-13",
        phase: 1,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["Leonard M. et al. (2004)", "WHO (2007)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-sbar-anwenden",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "ISBAR anwenden: Musterlösung Hypoglykämie",
          body: "**Musterlösung ISBAR für Frau B.**:\n\n**I — Identification**\n'Hier Schwester Demir, Station 4B. Ich rufe wegen Patientin Frau Barbara Hansen, geb. 15.03.1954, Zimmer 418 Bett A.'\n\n**S — Situation**\n'Frau Hansen wurde gerade apathisch, atmet mit Frequenz 28/min und zittert. Ihr aktuell gemessener Blutzucker ist **48 mg/dl**. Sie reagiert verzögert auf Ansprache.'\n\n**B — Background**\n'Sie ist seit 3 Tagen bei uns wegen einer Pneumonie, bekommt aktuell Cefuroxim i.v. Sie ist insulinpflichtige Diabetikerin, letzte Insulingabe vor 2 Stunden (8 IE Novorapid). Frühstück hat sie heute nicht gegessen.'\n\n**A — Assessment**\n'Ich vermute eine **Hypoglykämie** durch Insulin ohne ausreichende Kohlenhydratzufuhr. Die Atemveränderung könnte eine beginnende Schocksymptomatik sein.'\n\n**R — Recommendation**\n'Ich bitte um sofortige Vorstellung und Anordnung zur Glukose-Gabe. Soll ich bereits Traubenzucker oder 20 ml Glukose 20 % bereithalten?'\n\n**Wichtig**: Jeder Teil **klar und kurz**. Kein Füllwort. Keine Interpretation ohne Grundlage.",
          glossarBegriffe: ["ISBAR", "SBAR", "Hypoglykämie"],
        },
        contentB1: {
          title: "ISBAR anwenden: Musterlösung",
          body: "**So wäre die Meldung richtig**:\n\n**I**: 'Schwester Demir, Station 4B. Patientin Frau Barbara Hansen, geboren 15.03.1954, Zimmer 418.'\n\n**S**: 'Frau Hansen ist jetzt apathisch. Sie atmet schnell (28 pro Minute). Sie zittert. Blutzucker **48**. Sie reagiert langsam.'\n\n**B**: 'Sie ist seit 3 Tagen bei uns. Diagnose: Pneumonie. Sie bekommt Cefuroxim. Sie hat **Diabetes** und nimmt **Insulin**. Letzte Insulingabe: **vor 2 Stunden, 8 IE Novorapid**. **Frühstück** hat sie heute **nicht gegessen**.'\n\n**A**: 'Ich vermute eine **Unterzuckerung** (Hypoglykämie). Weil sie Insulin hatte, aber nicht gegessen hat.'\n\n**R**: 'Bitte kommen Sie sofort. Was soll ich machen? **Traubenzucker** oder **Glukose** bereithalten?'",
          glossarBegriffe: ["ISBAR", "SBAR", "Hypoglykämie"],
        },
      },
    },
    glossarBegriffe: ["ISBAR", "SBAR", "Hypoglykämie"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: fallreflektion-dokumentationsfehler (Bloom 6)
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-fehleranalyse",
    themaId: "pflegedokumentation",
    titel: "Fehleranalyse: Unsachliche Pflegeberichte korrigieren",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr S. ist gestürzt. Die Pflegende schreibt: 'Herr S. ist ja wieder über seinen Gehwagen gefallen, typisch für ihn — er hört einfach nicht zu. War heute früh erneut durch den Flur gerast. Hätten wir ihn fixieren sollen?' Analysiere diesen Eintrag — was ist falsch? Schreibe einen korrekten Eintrag.",
      antwort:
        "Fehler: (1) 'typisch für ihn' = Persönlichkeitsurteil, (2) 'gerast' = unsachlich, (3) 'hört nicht zu' = Urteil statt Beobachtung, (4) 'Hätten wir...' = Spekulation gehört in Fallbesprechung, (5) Fixierungsfrage = rechtlich heikel (§ 1906a BGB). Korrekt: '15.04.2026, 9:35 Uhr: Herr S. fiel im Flur zwischen Zimmer 12 und Schwesternzimmer. Ging mit Rollator zügig. Bat ihn, langsamer zu gehen — reagierte nicht sofort. Stolperte über Türschwelle, fiel rechts. Keine sichtbaren Verletzungen, RR 130/80, Puls 78. Arzt Dr. Meyer informiert 9:40. Sturzprotokoll ausgefüllt. (Schw. Demir)'",
    },
    stufe2: {
      typ: "hinweis",
      text: "Dieser Eintrag hat **mehrere Fehler**: (1) **Wertung** ('typisch'), (2) **unsachliche Sprache** ('gerast', 'hört nicht zu'), (3) **fehlende Zeit/Fakten** (wann, wo, wie), (4) **Spekulation statt Handlung** ('Hätten wir...'), (5) **Fixierungsfrage** ist **rechtlich heikel** (§ 1906a BGB).",
      textB1:
        "Der Eintrag hat **viele Fehler**: (1) **Wertung** ('typisch'), (2) **unsachlich** ('gerast', 'hört nicht zu'), (3) **keine Zeit** oder **genaue Infos**, (4) **Frage statt Fakten** ('Hätten wir...'), (5) **Fixierung** ist **rechtlich schwierig** (§ 1906a BGB).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-14",
        phase: 1,
        stepType: "text",
        bloomLevel: 6,
        kompetenzbereich: "I.1",
        quellen: ["§ 630f BGB", "§ 267 StGB", "§ 1906a BGB", "DNQP 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-pflegedokumentation-fehleranalyse",
        tag: "pflege",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Fehleranalyse: Unsachliche Pflegeberichte",
          body: "**Analyse der Fehler** im Originaleintrag:\n\n1. **'Typisch für ihn'** — **Wertung der Persönlichkeit**, nicht erlaubt. Ersetze durch **beobachtetes Verhalten**.\n2. **'Gerast'** — **unsachlich**. Konkret: '9:30 Uhr im Flur zwischen Zimmer 12 und Schwesternzimmer mit Gehwagen in gesteigertem Tempo gegangen.'\n3. **'Hört einfach nicht zu'** — **Urteil**. Besser: 'Auf Ansprache, langsamer zu gehen, reagierte Herr S. nicht.'\n4. **'Hätten wir...'** — **Spekulation statt Dokumentation**. Gehört nicht in den Pflegebericht. Solche Fragen gehören in **Fallbesprechung oder Pflegevisite**.\n5. **'Fixieren'** — **Fixierung ist letzte Maßnahme** (§ 1906a BGB) und braucht richterliche Genehmigung bei länger als kurzzeitig. In der Dokumentation gehört **keine unreflektierte Fixierungsfrage**.\n\n**Korrekte Dokumentation**:\n'**15.04.2026, 9:35 Uhr**: Herr S. fiel im Flur zwischen Zimmer 12 und Schwesternzimmer. Er ging mit seinem Rollator in zügigem Tempo. Auf meine Bitte, langsamer zu gehen, reagierte er nicht sofort. Er stolperte über die Türschwelle und fiel auf die rechte Seite. Keine sichtbaren Verletzungen, Blutdruck 130/80, Puls 78. Arzt Dr. Meyer informiert um 9:40. Sturzprotokoll ausgefüllt. (Schw. Demir)'",
          glossarBegriffe: ["Pflegebericht", "Urkundenfälschung"],
        },
        contentB1: {
          title: "Fehleranalyse: Unsachliche Pflegeberichte",
          body: "**Was war falsch**?\n\n1. **'Typisch'** — das ist **Urteil**, kein Fakt. Nicht erlaubt.\n2. **'Gerast'** — **unsachlich**. Besser: 'ging schnell'. Und: **Wann**? **Wo**?\n3. **'Hört nicht zu'** — **Meinung**. Besser: 'Auf meine Bitte reagierte er nicht sofort.'\n4. **'Hätten wir...'** — **Fragen gehören nicht in den Bericht**. Solche Fragen besprichst du im **Team**, nicht im Bericht.\n5. **'Fixieren'** — **Fixierung ist letzte Maßnahme**. Das Gesetz (§ 1906a BGB) sagt: Man braucht einen **Richter**. Schreib so was **nicht** einfach in den Bericht.\n\n**So sollte es richtig aussehen**:\n'**15.04.2026, 9:35 Uhr**: Herr S. fiel im Flur zwischen Zimmer 12 und Schwesternzimmer. Er ging mit dem Rollator **schnell**. Ich bat ihn, langsamer zu gehen. Er reagierte nicht sofort. Er **stolperte** über die Türschwelle und fiel auf die **rechte Seite**. **Keine Verletzungen sichtbar**. Blutdruck **130/80**, Puls **78**. Arzt **Dr. Meyer** informiert um **9:40**. **Sturzprotokoll** ausgefüllt. **(Schw. Demir)**'",
          glossarBegriffe: ["Pflegebericht", "Urkundenfälschung"],
        },
      },
    },
    glossarBegriffe: ["Pflegebericht", "Urkundenfälschung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 15: mdk-grundsatzstellungnahme (Bloom 4) — AP-4 LE5 #13
  // ═══════════════════════════════════════════
  {
    bausteinId: "pflegedokumentation-mdk-grundsatzstellungnahme",
    themaId: "pflegedokumentation",
    titel: "Doku-Systeme einschätzen: die MDK-Grundsatzstellungnahme als Maßstab",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Dein Träger führt ein neues Dokumentationssystem ein. Woran misst du, ob es gut ist — und welches offizielle Dokument gibt dir dafür Kriterien an die Hand?",
      antwort:
        "Maßstab ist die Grundsatzstellungnahme des MDK 'Pflegeprozess und Dokumentation' (2005). Ein gutes System bildet alle Schritte des Pflegeprozesses ab, ist nachvollziehbar, vermeidet überflüssige Doppeldokumentation und ist im Alltag handhabbar. Der Medizinische Dienst prüft die Pflegequalität unter anderem anhand der Dokumentation und Pflegeplanung. (MDK-Grundsatzstellungnahme 2005; I Care, Kap. 2/3)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die MDK-Grundsatzstellungnahme 'Pflegeprozess und Dokumentation' (2005) ist ein Handlungsempfehlungs-Papier, an dem du einrichtungseigene Dokumentationssysteme einschätzt. Prüfkriterien: Bildet das System alle Pflegeprozess-Schritte ab? Ist es nachvollziehbar? Vermeidet es Doppeldokumentation (Entbürokratisierung, SIS)? Ist es im Alltag handhabbar? Der Medizinische Dienst (MDK, seit 2021 MD) prüft Pflegequalität u.a. anhand der Dokumentation. (I Care, Kap. 2/3)",
      textB1:
        "Die MDK-Grundsatzstellungnahme 'Pflegeprozess und Dokumentation' (2005) hilft dir zu beurteilen, ob ein Dokumentationssystem gut ist. Du prüfst: Bildet es alle Schritte des Pflegeprozesses ab? Kann man nachvollziehen, wer was wann gemacht hat? Schreibt man Dinge nicht doppelt? Ist es im Alltag gut machbar? Der Medizinische Dienst (MDK) kontrolliert die Pflegequalität auch über die Dokumentation.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-dokud-wb-15",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["MDK (Hrsg.) 2005: Grundsatzstellungnahme Pflegeprozess und Dokumentation", "I Care Pflege (Kap. 2 Berufsfeld / Kap. 3 Pflegeplanung, MDK)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-dokud-mdk-grundsatzstellungnahme",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Doku-Systeme einschätzen: die MDK-Grundsatzstellungnahme",
          body: "Dokumentationssysteme sind nicht alle gleich gut. Um ein einrichtungseigenes System fachlich **einzuschätzen**, brauchst du einen Maßstab — und den liefert ein offizielles Papier des Medizinischen Dienstes.\n\n**Wer ist der Medizinische Dienst?**\nDer **Medizinische Dienst (MDK** — Medizinischer Dienst der Krankenkassen; **seit 2021 'Medizinischer Dienst', MD)** begutachtet für die Kranken- und Pflegeversicherung, stellt die **Pflegebedürftigkeit (Pflegegrad)** fest und **sichert die Pflegequalität**. Bei Qualitätsprüfungen — stationär wie ambulant (z.B. bei Hausbesuchen) — zieht er die **Pflegedokumentation und Pflegeplanung** heran. (I Care, Kap. 2/3)\n\n**Die Grundsatzstellungnahme:**\nDie **Grundsatzstellungnahme 'Pflegeprozess und Dokumentation – Handlungsempfehlungen zur Professionalisierung und Qualitätssicherung'** (2005) beschreibt, wie der Pflegeprozess dokumentiert werden soll. Sie dient als **Maßstab, um Dokumentationssysteme einzuschätzen.**\n\n**Kriterien, an denen du ein System misst:**\n- **Vollständigkeit:** Bildet es **alle Schritte des Pflegeprozesses** ab (Informationssammlung, Probleme/Ressourcen, Ziele, Maßnahmen, Durchführung, Evaluation)?\n- **Nachvollziehbarkeit:** Ist erkennbar, **wer was wann** getan hat?\n- **Keine Doppeldokumentation:** Wird Gleiches nicht mehrfach geschrieben? Hier setzt die **Entbürokratisierung** an (SIS / Strukturmodell)\n- **Handhabbarkeit:** Ist es im Alltag praktikabel und wird es **tatsächlich gelebt** — nicht nur 'für die Prüfung' gepflegt?\n- **Datenschutz:** Sind Aufbewahrung und Schweigepflicht gesichert?\n\n**Warum das zählt:** Die Dokumentation ist zugleich **Qualitäts- und Haftungsnachweis**. Gegenüber dem Medizinischen Dienst belegt sie, dass Maßnahmen geplant und durchgeführt wurden. Trotzdem gilt: Dokumentation ist **Mittel zum Zweck** — Ziel ist nachvollziehbare, gute Pflege, nicht möglichst viel Papier. (MDK 2005; I Care, Kap. 2/3)",
          glossarBegriffe: ["Medizinischer Dienst (MDK)", "Grundsatzstellungnahme", "SIS"],
        },
        contentB1: {
          title: "Doku-Systeme einschätzen: die MDK-Grundsatzstellungnahme",
          body: "Nicht jedes Dokumentationssystem ist gleich gut. Um zu **beurteilen**, ob eins gut ist, brauchst du einen Maßstab. Den gibt ein offizielles Papier des Medizinischen Dienstes.\n\n**Wer ist der Medizinische Dienst?**\nDer **Medizinische Dienst (MDK; seit 2021 'MD')** prüft für die Kranken- und Pflegekasse, stellt den **Pflegegrad** fest und **kontrolliert die Pflegequalität**. Dabei schaut er sich die **Dokumentation und Pflegeplanung** an — im Heim und auch zu Hause beim Pflegedienst. (I Care, Kap. 2/3)\n\n**Die Grundsatzstellungnahme:**\nDas Papier **'Pflegeprozess und Dokumentation'** (2005) sagt, wie der Pflegeprozess dokumentiert werden soll. Du nutzt es als **Messlatte** für ein Dokumentationssystem.\n\n**Worauf du achtest:**\n- **Vollständig:** Sind **alle Schritte des Pflegeprozesses** drin (Informationen, Probleme/Ressourcen, Ziele, Maßnahmen, Durchführung, Bewertung)?\n- **Nachvollziehbar:** Sieht man, **wer was wann** gemacht hat?\n- **Nicht doppelt:** Schreibt man Dinge nicht mehrfach? (Dafür gibt es SIS und Strukturmodell)\n- **Machbar:** Ist es im Alltag praktisch und wird es **wirklich benutzt** — nicht nur für die Prüfung?\n- **Datenschutz:** Sind Aufbewahrung und Schweigepflicht sicher?\n\n**Warum wichtig:** Die Dokumentation ist ein **Nachweis** — für gute Qualität und vor Gericht. Dem Medizinischen Dienst zeigst du damit, dass du Maßnahmen geplant und gemacht hast. Aber: Dokumentieren ist **Mittel zum Zweck**. Ziel ist gute Pflege, nicht viel Papier.",
          glossarBegriffe: ["Medizinischer Dienst (MDK)", "Grundsatzstellungnahme", "SIS"],
        },
      },
    },
    glossarBegriffe: ["Medizinischer Dienst (MDK)", "Grundsatzstellungnahme", "SIS"],
    karteikarten: [],
  },
];

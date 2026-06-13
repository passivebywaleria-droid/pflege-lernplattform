// CE-04 Thema Gesprächsführung — Wissensbausteine (5 Bausteine, 3 Stufen)
// Lernergebnis-First (specs/ce-04/kommunikation-build-plan.md)
// Deckt: LE1-W2 (formale Aspekte erläutern), LE1-K2 (Settings vor Rogers analysieren), LE1-E1 (Bedeutung Gesprächsführung diskutieren)
// Quelle: recherche/kommunikation-gesundheitswesen-volltext/ (verbatim belegt)

import type { Wissensbaustein } from "../../../_types";

export const CE04_THEMA_GESPRAECHSFUEHRUNG_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: rogers-personenzentriert (Bloom 4) — LE1-K2
  // ═══════════════════════════════════════════
  {
    bausteinId: "gespraechsfuehrung-rogers",
    themaId: "gespraechsfuehrung",
    titel: "Personenzentrierte Gesprächsführung nach Rogers",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient erzählt dir umständlich von seiner Angst vor der OP. Du denkst: 'Das ist doch eine Routine-OP.' Was machst du mit diesem Gedanken — und welche drei inneren Haltungen helfen dir, das Gespräch wirklich hilfreich zu führen?",
      antwort:
        "Den Gedanken nimmst du zurück — bei der personenzentrierten Gesprächsführung nach Carl Rogers steht das Erleben des Sprechenden im Mittelpunkt, der Zuhörende nimmt sich und seine Bewertungen ganz zurück. Drei Grundhaltungen tragen das Gespräch: Empathie (einfühlendes Verstehen), unbedingte Wertschätzung (den anderen ohne Bedingungen annehmen) und Echtheit/Kongruenz (stimmig sein, ohne etwas vorzumachen). (Kommunikation im Gesundheitswesen, Kap. 1)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die personenzentrierte (klientenzentrierte) Gesprächsführung nach Carl Rogers sieht gelungene Kommunikation als Bereitschaft, die Situation aus Sicht des Sprechenden zu sehen. Drei Grundhaltungen: 1) Empathie (einfühlendes Verstehen), 2) unbedingte Wertschätzung (Annahme ohne Bedingungen, positive Haltung), 3) Echtheit/Kongruenz (stimmige verbale und nonverbale Reaktionen, ohne etwas vorzumachen). Der Mensch wird mit seinem Potenzial (Aktualisierungstendenz), seinem Selbstkonzept und seinem inneren Bezugsrahmen gesehen. (Kommunikation im Gesundheitswesen, Kap. 1)",
      textB1:
        "Die personenzentrierte Gesprächsführung nach Carl Rogers heißt: Das Erleben des anderen steht im Mittelpunkt, deine eigenen Bewertungen nimmst du zurück. Drei Haltungen helfen: 1) Empathie (sich einfühlen), 2) Wertschätzung (den anderen annehmen, ohne Bedingungen), 3) Echtheit (ehrlich und stimmig sein, nichts vorspielen).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-gespr-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 1 (klientenzentrierte/personenzentrierte Gesprächsführung, Carl Rogers)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-gespr-rogers",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Personenzentrierte Gesprächsführung nach Rogers",
          body: "Die **personenzentrierte** (auch **klientenzentrierte**) Gesprächsführung geht auf **Carl Rogers** zurück und stammt ursprünglich aus Beratung und Gesprächstherapie. Grundidee: gelungene Kommunikation ist die **Bereitschaft, die Situation aus Sicht des Sprechenden zu sehen** (Kommunikation im Gesundheitswesen, Kap. 1).\n\nDer **Sprechende steht mit seinem Erleben im Mittelpunkt** — der Zuhörende nimmt sich und seine eigenen Assoziationen und Bewertungen **ganz zurück**.\n\n**Die drei Grundhaltungen:**\n1. **Empathie** — einfühlendes Verstehen: Du versuchst, dich in das einzufühlen, was den anderen bewegt.\n2. **Unbedingte Wertschätzung** — du nimmst den Menschen so an, wie er ist, **ohne Bedingungen** und mit positiver Haltung (auch wenn du sein Verhalten nicht teilst).\n3. **Echtheit (Kongruenz)** — deine verbalen und nonverbalen Reaktionen sind **stimmig**; du machst dem anderen nichts vor.\n\n**Das Menschenbild dahinter:**\n- **Aktualisierungstendenz** — jeder Mensch hat das Potenzial, sich zu entwickeln und eigene Ressourcen zu nutzen.\n- **Selbstkonzept** — das, was jemand von sich selbst hält (aus lebenslanger Erfahrung).\n- **Innerer Bezugsrahmen** — die Überzeugungen, Werte und Einstellungen, nach denen ein Mensch fühlt und urteilt.\n\n**In der Pflege:** Diese Haltung fördert eine zugewandte Kommunikation, gegenseitiges Verständnis und Vertrauen — die Basis jeder Pflegebeziehung und Beratung. Ein Beratungssetting lässt sich daran **analysieren**: Wird der Patient personenzentriert gesehen? Sind Empathie, Wertschätzung und Echtheit spürbar? (Kommunikation im Gesundheitswesen, Kap. 1)",
          glossarBegriffe: ["personenzentrierte Gesprächsführung", "Empathie", "unbedingte Wertschätzung", "Kongruenz (Echtheit)"],
        },
        contentB1: {
          title: "Personenzentrierte Gesprächsführung nach Rogers",
          body: "Die **personenzentrierte Gesprächsführung** geht auf **Carl Rogers** zurück. Grundidee: gute Kommunikation heißt, die Situation **aus Sicht des anderen** zu sehen (Kommunikation im Gesundheitswesen, Kap. 1).\n\nDer **andere und sein Erleben stehen im Mittelpunkt** — deine eigenen Bewertungen nimmst du **ganz zurück**.\n\n**Drei Haltungen:**\n1. **Empathie** — dich in den anderen einfühlen: Was bewegt ihn?\n2. **Wertschätzung** — den Menschen annehmen, **ohne Bedingungen**, auch wenn du sein Verhalten nicht teilst.\n3. **Echtheit (Kongruenz)** — ehrlich und stimmig sein, nichts vorspielen.\n\n**Das Menschenbild:** Jeder Mensch hat **eigene Stärken** und kann sich entwickeln. Jeder hat ein **Selbstbild** und eigene **Werte**, nach denen er urteilt.\n\n**In der Pflege:** Diese Haltung schafft Vertrauen — die Basis jeder Pflegebeziehung. Frag dich: Wird der Patient so gesehen? Spürt er Empathie, Wertschätzung und Echtheit?",
          glossarBegriffe: ["personenzentrierte Gesprächsführung", "Empathie", "unbedingte Wertschätzung", "Kongruenz (Echtheit)"],
        },
      },
    },
    glossarBegriffe: ["personenzentrierte Gesprächsführung", "Empathie", "unbedingte Wertschätzung", "Kongruenz (Echtheit)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: aktives-zuhoeren (Bloom 3) — LE1-W2
  // ═══════════════════════════════════════════
  {
    bausteinId: "gespraechsfuehrung-aktives-zuhoeren",
    themaId: "gespraechsfuehrung",
    titel: "Aktives Zuhören: zugewandt und ohne Bewertung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Patientin erzählt von ihren Sorgen, während du am Fußende stehst, auf die Uhr schaust und 'mhm' sagst. Sie verstummt. Was hättest du anders machen können — nonverbal UND verbal?",
      antwort:
        "Aktives Zuhören braucht beides. Nonverbal: gleiche Höhe einnehmen (hinsetzen), zugewandte Körperhaltung, Blickkontakt, angemessene Distanz, keine Hektik. Verbal: offene Fragen, zustimmendes Kopfnicken, Worte des Verstehens, und vor allem Paraphrasieren ('Verstehe ich Sie richtig, dass …') sowie das Verbalisieren von Emotionen ('Das belastet Sie sehr'). Alles ohne Bewertung. (Kommunikation im Gesundheitswesen, Kap. 2)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Aktives Zuhören = sich voll auf den Gesprächspartner fokussieren, ohne Bewertung. Nonverbale Zeichen: angemessene Distanz, zugewandte Kopf-/Körperhaltung, gleiche räumliche Höhe, freundlicher Blickkontakt. Verbale Zeichen: offene Fragen, zustimmendes Kopfnicken, Worte des Verstehens. Bezugnehmende Techniken zur Verständnissicherung: Paraphrase ('Verstehe ich Sie richtig, dass …') und Verbalisieren von Emotionen/Wünschen ('Das belastet Sie sehr'). (Kommunikation im Gesundheitswesen, Kap. 2)",
      textB1:
        "Aktives Zuhören heißt: sich ganz auf den anderen einlassen, ohne zu bewerten. Mit dem Körper: gleiche Höhe (hinsetzen), zugewandt sein, Blickkontakt, nicht hetzen. Mit Worten: offene Fragen, Kopfnicken, Verstehen zeigen. Zwei wichtige Techniken: Paraphrasieren ('Verstehe ich Sie richtig, dass …') und Gefühle aussprechen ('Das belastet Sie sehr').",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-gespr-wb-02",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (Aktives Zuhören verwirklichen; bezugnehmende Gesprächstechniken)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-gespr-aktives-zuhoeren",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Aktives Zuhören",
          body: "**Aktives Zuhören** bedeutet, sich im Moment der Interaktion **voll und ganz auf den Gesprächspartner zu fokussieren** — **ohne Bewertung oder Meinungsäußerung**. So erfasst du die subjektiven Vorstellungen, Sorgen und Erwartungen eines Patienten (Kommunikation im Gesundheitswesen, Kap. 2).\n\n**Nonverbale Zeichen aktiven Zuhörens:**\n- **angemessene Distanzregelung** (nicht zu nah, nicht zu fern)\n- **zugewandte Kopf- und Körperhaltung**\n- **gleiche räumliche Höhe** — setz dich, statt über dem Patienten zu stehen\n- **freundlicher Blickkontakt**, eine spürbar positive innere Einstellung\n\n**Verbale Zeichen:**\n- **offene Fragen**, **zustimmendes Kopfnicken**, verbale Laute oder Worte des Verstehens\n- Wenn du nebenbei dokumentierst, kündige es an: 'Ich höre Ihnen zu, ich mache nur nebenbei ein paar Notizen.'\n\n**Bezugnehmende Techniken zur Verständnissicherung:**\n- **Paraphrase** — das Gehörte in eigenen Worten zurückgeben: *'Verstehe ich Sie richtig, dass …'*, *'Sie meinen also, dass …'*\n- **Verbalisieren von Emotionen** — das Gefühl ansprechen: *'Für Sie ist es sehr belastend, dass …'*, *'Sie machen sich Sorgen wegen …'*\n- **Verbalisieren von Wünschen** — *'Sie hätten gerne, dass …'*\n\n**Wichtig:** Beim aktiven Zuhören erkennst du auch **Ängste, Verunsicherung und Trauer** des Patienten — wertvolle Hinweise für die weitere Pflege. (Kommunikation im Gesundheitswesen, Kap. 2)",
          glossarBegriffe: ["aktives Zuhören", "Paraphrase", "Verbalisieren von Emotionen"],
        },
        contentB1: {
          title: "Aktives Zuhören",
          body: "**Aktives Zuhören** heißt: dich **ganz auf den anderen** einlassen — **ohne zu bewerten**. So erfährst du, was den Patienten wirklich bewegt (Kommunikation im Gesundheitswesen, Kap. 2).\n\n**Mit dem Körper (nonverbal):**\n- **richtige Distanz** (nicht zu nah, nicht zu weit)\n- **zugewandte Haltung**\n- **gleiche Höhe** — setz dich hin, steh nicht über dem Patienten\n- **freundlicher Blickkontakt**\n\n**Mit Worten (verbal):**\n- **offene Fragen**, **Kopfnicken**, Worte des Verstehens\n- Wenn du nebenbei schreibst: sag es an — 'Ich höre Ihnen zu, ich notiere nur kurz.'\n\n**Zwei wichtige Techniken:**\n- **Paraphrase** — mit eigenen Worten wiederholen: *'Verstehe ich Sie richtig, dass …'*\n- **Gefühle aussprechen** — *'Das belastet Sie sehr'*, *'Sie machen sich Sorgen wegen …'*\n\n**Wichtig:** So erkennst du auch **Angst, Unsicherheit und Trauer** — wichtige Hinweise für die Pflege.",
          glossarBegriffe: ["aktives Zuhören", "Paraphrase", "Verbalisieren von Emotionen"],
        },
      },
    },
    glossarBegriffe: ["aktives Zuhören", "Paraphrase", "Verbalisieren von Emotionen"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: fragetechniken-ich-botschaften (Bloom 2) — LE1-W2
  // ═══════════════════════════════════════════
  {
    bausteinId: "gespraechsfuehrung-fragetechniken",
    themaId: "gespraechsfuehrung",
    titel: "Offene und geschlossene Fragen — und Ich-Botschaften",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du willst wissen, wie es einem Patienten nach der Nacht geht. 'Haben Sie gut geschlafen?' oder 'Wie war Ihre Nacht?' — welche Frage bringt dir mehr, und wann ist die andere trotzdem besser?",
      antwort:
        "'Wie war Ihre Nacht?' ist eine offene Frage — sie lädt zum Erzählen ein und bringt mehr Informationen. 'Haben Sie gut geschlafen?' ist geschlossen (Ja/Nein) — gut, um schnell etwas Konkretes zu sichern oder bei kognitiv eingeschränkten/sehr erschöpften Patienten. Beide haben ihren Platz. Für Verständigung über Konflikte helfen zusätzlich Ich-Botschaften statt Vorwürfe. (Kommunikation im Gesundheitswesen, Kap. 2)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Offene Fragen (W-Fragen: wie, was, warum) geben dem Gesprächspartner Raum, sich zu äußern — gut zur Informationsgewinnung. Geschlossene Fragen (Ja/Nein) helfen, Konkretes zu sichern, und sind bei kognitiv beeinträchtigten oder erschöpften Menschen oft hilfreicher. Ich-Botschaften (Gefühle, Beobachtungen, Wünsche als eigene Sichtweise ausdrücken) reduzieren Konfliktpotenzial gegenüber Du-Vorwürfen. (Kommunikation im Gesundheitswesen, Kap. 2)",
      textB1:
        "Offene Fragen (wie, was, warum) laden zum Erzählen ein — du bekommst mehr Infos. Geschlossene Fragen (Antwort Ja/Nein) sind gut, um etwas Konkretes zu klären, und helfen bei müden oder verwirrten Menschen. Ich-Botschaften (deine Gefühle und Wünsche als deine Sicht sagen) vermeiden Streit besser als Vorwürfe.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-gespr-wb-03",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (offene/geschlossene Fragen; Ich-Botschaften)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-gespr-fragetechniken",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Offene und geschlossene Fragen — und Ich-Botschaften",
          body: "Die Art deiner Frage steuert, was du erfährst (Kommunikation im Gesundheitswesen, Kap. 2).\n\n**Offene Fragen** (W-Fragen: *Wie? Was? Warum? Wodurch?*)\n- geben dem Gesprächspartner **Raum, sich zu äußern**\n- ideal zur **Informationsgewinnung** und am Gesprächsanfang\n- Beispiel: *'Wie war Ihre Nacht?'*, *'Was bedeutet das für Sie?'*\n\n**Geschlossene Fragen** (Antwort Ja/Nein oder kurz)\n- gut, um **Konkretes zu sichern** oder zu bestätigen\n- hilfreich bei **kognitiv beeinträchtigten, sehr erschöpften oder stark belasteten** Menschen, die offene Fragen überfordern\n- Beispiel: *'Haben Sie Schmerzen?'*, *'Soll ich das Fenster öffnen?'*\n\n**Faustregel:** Erst öffnen (erzählen lassen), dann mit geschlossenen Fragen präzisieren.\n\n**Ich-Botschaften** drücken **Gefühle, Beobachtungen und Wünsche als eigene Sichtweise** aus — nicht als Vorwurf. Sie klären, wo Unverständnis über Handlungen besteht, und **reduzieren Konfliktpotenzial**.\n- Statt (Du-Vorwurf): *'Sie klingeln ja ständig!'*\n- Besser (Ich-Botschaft): *'Ich merke, dass Sie heute oft Unterstützung brauchen — lassen Sie uns schauen, was dahintersteckt.'* (Kommunikation im Gesundheitswesen, Kap. 2)",
          glossarBegriffe: ["offene Frage", "geschlossene Frage", "Ich-Botschaft"],
        },
        contentB1: {
          title: "Offene und geschlossene Fragen — und Ich-Botschaften",
          body: "Deine Frage steuert, was du erfährst (Kommunikation im Gesundheitswesen, Kap. 2).\n\n**Offene Fragen** (*Wie? Was? Warum?*)\n- laden zum **Erzählen** ein\n- gut, um **viel zu erfahren** und am Anfang\n- Beispiel: *'Wie war Ihre Nacht?'*\n\n**Geschlossene Fragen** (Antwort Ja/Nein)\n- gut, um etwas **Konkretes** zu klären\n- hilfreich bei **müden oder verwirrten** Menschen\n- Beispiel: *'Haben Sie Schmerzen?'*\n\n**Regel:** Erst erzählen lassen (offen), dann genau nachfragen (geschlossen).\n\n**Ich-Botschaften** sagen **deine Gefühle und Wünsche** — nicht als Vorwurf. Das vermeidet Streit.\n- Vorwurf: *'Sie klingeln ja ständig!'*\n- Besser: *'Ich merke, Sie brauchen heute oft Hilfe — schauen wir, woran das liegt.'*",
          glossarBegriffe: ["offene Frage", "geschlossene Frage", "Ich-Botschaft"],
        },
      },
    },
    glossarBegriffe: ["offene Frage", "geschlossene Frage", "Ich-Botschaft"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: formale-aspekte-gespraech (Bloom 2) — LE1-W2
  // ═══════════════════════════════════════════
  {
    bausteinId: "gespraechsfuehrung-formale-aspekte",
    themaId: "gespraechsfuehrung",
    titel: "Formale Aspekte: Rahmen und Aufbau professioneller Gespräche",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du sollst mit einer Patientin ein heikles Aufklärungsgespräch führen — im Vierbettzimmer, zwischen Tür und Angel, ohne Zeitpuffer. Was läuft hier schon vor dem ersten Wort schief, und wie würdest du das Gespräch professionell aufbauen?",
      antwort:
        "Schief läuft der Rahmen: kein geschützter Raum (Datenschutz, Mitpatienten hören mit), keine Zeit, keine Vorbereitung. Professionelle Gespräche brauchen geklärte Rahmenbedingungen (Raum, Zeit, Hilfsmittel, wer ist dabei, Datenschutz). Und eine Struktur: 1) Einleitung/Vorstellung, 2) eigene Rolle nennen, 3) Thema + Zeit klären, 4) Informationen sammeln und geben, 5) weiteres Vorgehen, 6) beenden, 7) Abschluss. (Kommunikation im Gesundheitswesen, Kap. 2)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Formale Aspekte professioneller Gespräche: (1) Rahmenbedingungen klären — Raum (geschützt? Mitpatienten?), Art des Gesprächspartners (kognitive/mobile Einschränkungen, Emotionen?), benötigte Hilfsmittel, wer ist dabei (Angehörige/Betreuer?), Datenschutz, Nachbereitungszeit. (2) Gesprächsstruktur: Einleitung/Vorstellung → eigene Rolle → Thema+Zeit klären → Informationen sammeln/geben → weiteres Vorgehen → beenden → Abschluss. (3) patientengerechte Sprache (kein Fachjargon). (Kommunikation im Gesundheitswesen, Kap. 2)",
      textB1:
        "Wichtig vor und in jedem Gespräch: Der Rahmen muss stimmen — ein geschützter Raum (Datenschutz!), genug Zeit, die richtigen Hilfsmittel, und du weißt, wer dabei ist. Der Aufbau folgt einer Reihenfolge: erst vorstellen, deine Rolle nennen, Thema und Zeit klären, dann Informationen austauschen, weiteres Vorgehen klären, beenden, Abschluss. Sprich einfach, ohne Fachwörter.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-gespr-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 2 (Rahmenbedingungen berücksichtigen; Gesprächsstruktur)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-gespr-formale-aspekte",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Formale Aspekte: Rahmen und Aufbau",
          body: "Bevor das erste Wort fällt, entscheidet der **Rahmen** über den Erfolg eines Gesprächs (Kommunikation im Gesundheitswesen, Kap. 2).\n\n**Rahmenbedingungen klären — Leitfragen:**\n- **Raum:** Sind Kollegen oder Mitpatienten anwesend? Gibt es einen **separaten, geschützten Raum** (gerade bei heiklen Themen)?\n- **Gesprächspartner:** kognitive Beeinträchtigungen? Mobilitätseinschränkungen? Ist mit **starker Emotion oder psychischer Belastung** zu rechnen?\n- **Hilfsmittel:** Unterlagen, anschauliche Medien, Licht, Schreibwerkzeug, Formulare?\n- **Beteiligte:** allein mit dem Patienten oder **Angehörige/Betreuer** einbeziehen?\n- **Datenschutz:** Was muss berücksichtigt werden?\n- **Zeit:** auch **Nachbereitungszeit** einplanen.\n\n**Gesprächsstruktur (an jeden Kontext anpassbar):**\n1. **Einleitung**, ggf. Vorstellung der eigenen Person und Beteiligter\n2. **eigene Funktion/Rolle** verbalisieren\n3. **Thema und Zeitressource** klären\n4. **Informationen sammeln und geben**\n5. **weiteres Vorgehen** / nächste Schritte festlegen\n6. **Thematik beenden**, ggf. weiteres Treffen vereinbaren\n7. **Abschluss**\n\nWichtig: **Flexibilität** — je nach Reaktion der Beteiligten weicht man von der Struktur ab.\n\n**Patientengerechte Sprache:** Kein Fachjargon, um zu 'glänzen' — sprich auf dem Sprachniveau des Patienten. Verwendet der Patient irritierende Fachbegriffe, frag nach: *'Was bedeutet das für Sie?'* (Kommunikation im Gesundheitswesen, Kap. 2)",
          glossarBegriffe: ["Rahmenbedingungen", "Gesprächsstruktur", "patientengerechte Sprache"],
        },
        contentB1: {
          title: "Formale Aspekte: Rahmen und Aufbau",
          body: "Schon vor dem ersten Wort entscheidet der **Rahmen** über den Erfolg (Kommunikation im Gesundheitswesen, Kap. 2).\n\n**Rahmen klären — frag dich:**\n- **Raum:** Hören Mitpatienten mit? Gibt es einen **geschützten Raum**?\n- **Wer ist mein Gegenüber:** verwirrt? eingeschränkt beweglich? stark belastet?\n- **Hilfsmittel:** Unterlagen, Stift, Formulare da?\n- **Wer ist dabei:** nur der Patient oder auch **Angehörige**?\n- **Datenschutz** beachten.\n- **Zeit** einplanen, auch fürs Nachbereiten.\n\n**Aufbau des Gesprächs:**\n1. **Begrüßen / vorstellen**\n2. **eigene Rolle** nennen\n3. **Thema und Zeit** klären\n4. **Informationen** austauschen\n5. **weiteres Vorgehen** klären\n6. **beenden**, ggf. neuen Termin\n7. **Abschluss**\n\nSei **flexibel** — manchmal läuft es anders.\n\n**Einfache Sprache:** Keine Fachwörter, um anzugeben. Sprich so, dass der Patient dich versteht. Sagt er ein Fachwort falsch, frag nach: *'Was bedeutet das für Sie?'*",
          glossarBegriffe: ["Rahmenbedingungen", "Gesprächsstruktur", "patientengerechte Sprache"],
        },
      },
    },
    glossarBegriffe: ["Rahmenbedingungen", "Gesprächsstruktur", "patientengerechte Sprache"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: gespraech-beziehung-reflexion (Bloom 5) — LE1-E1
  // ═══════════════════════════════════════════
  {
    bausteinId: "gespraechsfuehrung-beziehung-reflexion",
    themaId: "gespraechsfuehrung",
    titel: "Warum Gesprächsführung Beziehungen formt",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Zwei Pflegekräfte sagen dem gleichen Patienten dieselbe Information. Bei der einen fühlt er sich ernst genommen, bei der anderen abgefertigt. Woran liegt das — und warum ist das mehr als 'nett sein'?",
      antwort:
        "Es liegt an der Gesprächsführung — Haltung, aktives Zuhören, Wertschätzung, der Beziehungsaspekt jeder Nachricht. Wie wir kommunizieren, entwickelt und gestaltet die Beziehung; sie ist kein Nebenprodukt. Eine tragfähige Pflegebeziehung ist die Grundlage für Vertrauen, Compliance und gute Versorgung. Darum ist Gesprächsführung Fachkompetenz, nicht nur Höflichkeit. (Kommunikation im Gesundheitswesen, Kap. 1/2)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Wie wir Gespräche führen, entwickelt und gestaltet Beziehungen — der Beziehungsaspekt jeder Nachricht (Watzlawick) und die Grundhaltungen nach Rogers (Empathie, Wertschätzung, Echtheit) wirken direkt auf das Verhältnis. Eine tragfähige Beziehung ist Grundlage für Vertrauen und Versorgungsqualität. Gesprächsführung ist damit Fachkompetenz, nicht nur Freundlichkeit.",
      textB1:
        "Wie wir reden, formt die Beziehung. Der Beziehungsteil jeder Nachricht (Watzlawick) und die Haltungen nach Rogers (Empathie, Wertschätzung, Echtheit) wirken direkt darauf. Eine gute Beziehung ist die Basis für Vertrauen und gute Pflege. Gesprächsführung ist deshalb echtes Können — nicht nur nett sein.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-gespr-wb-05",
        phase: 1,
        stepType: "reflection",
        bloomLevel: 5,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 1/2 (Bedeutung der Gesprächsführung für Beziehungsgestaltung)"],
        track: "basis",
        modus: "schreibtisch",
        lernziel: "ce04-gespr-beziehung",
        tag: "pflege",
        contentC1: {
          title: "Warum Gesprächsführung Beziehungen formt",
          body: "Gesprächsführung ist kein 'Soft Skill' am Rande — sie **entwickelt und gestaltet Beziehungen** (Kommunikation im Gesundheitswesen, Kap. 1/2).\n\n**Warum?**\n- Jede Nachricht hat einen **Beziehungsaspekt** (Watzlawick): das *Wie* sagt etwas über das Verhältnis aus und bestimmt, wie der Inhalt ankommt.\n- Die **Grundhaltungen nach Rogers** (Empathie, Wertschätzung, Echtheit) wirken direkt auf die Beziehung — sie schaffen oder zerstören Vertrauen.\n- **Aktives Zuhören** signalisiert: 'Du bist mir wichtig.' Das vertieft die Beziehung; Abfertigung beschädigt sie.\n\n**Die Konsequenz für die Pflege:** Eine **tragfähige Pflegebeziehung** ist die Grundlage für Vertrauen, Therapietreue (Compliance) und eine gute Versorgung. Deshalb ist Gesprächsführung eine **Fachkompetenz** — nicht bloß Höflichkeit.",
          glossarBegriffe: ["personenzentrierte Gesprächsführung", "aktives Zuhören", "Inhalts- und Beziehungsaspekt"],
        },
        contentB1: {
          title: "Warum Gesprächsführung Beziehungen formt",
          body: "Gesprächsführung ist kein nettes Beiwerk — sie **formt die Beziehung** (Kommunikation im Gesundheitswesen, Kap. 1/2).\n\n**Warum?**\n- Jede Nachricht hat einen **Beziehungsteil** (Watzlawick): das *Wie* zeigt, wie ihr zueinander steht.\n- Die **Haltungen nach Rogers** (Empathie, Wertschätzung, Echtheit) bauen Vertrauen auf — oder zerstören es.\n- **Aktives Zuhören** sagt: 'Du bist mir wichtig.' Abfertigen sagt das Gegenteil.\n\n**Folge für die Pflege:** Eine **gute Beziehung** ist die Basis für Vertrauen und gute Versorgung. Darum ist Gesprächsführung echtes **Können** — nicht nur Höflichkeit.",
          glossarBegriffe: ["personenzentrierte Gesprächsführung", "aktives Zuhören", "Inhalts- und Beziehungsaspekt"],
        },
        question: {
          fragetext: "Erinnere dich an ein Gespräch (als Patient, Angehöriger oder im Praktikum), das eine Beziehung verändert hat. Wie kam das?",
          reflection: {
            prompt:
              "Schreibe 4-6 Sätze: 1) Schildere ein Gespräch, das eine Beziehung spürbar verändert hat (besser oder schlechter). 2) Was an der Gesprächsführung war dafür verantwortlich (Haltung, Zuhören, Tonfall, Beziehungsaspekt)? 3) Warum ist Gesprächsführung deiner Meinung nach Fachkompetenz und nicht nur 'nett sein'?",
            placeholder:
              "Das Gespräch war … Verändert hat die Beziehung … Verantwortlich dafür war … Für mich ist Gesprächsführung Fachkompetenz, weil …",
            systemPrompt:
              "Bewerte im Sandwich-Prinzip. Verknüpft der Schüler die Gesprächsführung kausal mit der Beziehungsveränderung (nicht nur 'war nett/unfreundlich', sondern WAS: Haltung, aktives Zuhören, Beziehungsaspekt, Wertschätzung)? Erkennt er Gesprächsführung als Fachkompetenz mit Folgen für Vertrauen/Versorgung? Lob für eine reflektierte Verbindung von Kommunikation und Beziehung. Niemals abwertend.",
          },
        },
      },
    },
    glossarBegriffe: ["personenzentrierte Gesprächsführung", "aktives Zuhören", "Inhalts- und Beziehungsaspekt"],
    karteikarten: [],
  },
];

// CE-04 Thema Beratung — Wissensbausteine (4 Bausteine, 3 Stufen)
// Lernergebnis-First (specs/ce-04/kommunikation-build-plan.md)
// Deckt: LE1-W5 (Beratung psychol./psychosoz./päd.), LE1-W6 (direktiv/non-direktiv), LE1-K1 (Pflegeberatungs-Settings), LE1-K5 (kollegiale Beratung)
// Quelle: I Care Pflege Kap. 22 (ISAB, KB II.2); Kommunikation im Gesundheitswesen Kap. 3 (kollegiale Beratung)

import type { Wissensbaustein } from "../../../_types";

export const CE04_THEMA_BERATUNG_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: isab-vier-formen (Bloom 2) — LE1-W5/K1
  // ═══════════════════════════════════════════
  {
    bausteinId: "beratung-isab-vier-formen",
    themaId: "beratung",
    titel: "Informieren, Schulen, Anleiten, Beraten (ISAB)",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du erklärst einem Diabetiker (a) was Insulin ist, (b) zeigst ihm Schritt für Schritt das Spritzen, (c) gibst eine kleine Gruppenschulung zur Ernährung und (d) hilfst ihm, seinen Alltag mit der Erkrankung selbst zu gestalten. Das sind vier verschiedene Dinge — wie heißen sie?",
      antwort:
        "Das sind die vier Formen der Patientenedukation: (a) Informieren (Wissen weitergeben), (b) Anleiten (praktische Handlungskompetenz Schritt für Schritt, 4-Schritte-Prozess), (c) Schulen (strukturierte Schulung/Mikroschulung), (d) Beraten (gemeinsam Lösungen für den Alltag entwickeln). Zusammen 'Informieren, Schulen, Anleiten, Beraten' (ISAB) — laut Pflegeberufereformgesetz Kernaufgabe der Pflege. (I Care Pflege, Kap. 22)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Informieren, Schulen, Anleiten und Beraten (ISAB) ist laut Pflegeberufereformgesetz eine Kernaufgabe der Pflege (Kompetenzbereich II.2). Ziel: Selbstständigkeit und Mündigkeit des Pflegeempfängers sichern. Informieren = Wissen weitergeben; Schulen = strukturierte (Mikro-)Schulung; Anleiten = praktische Handlungskompetenz in 4 Schritten; Beraten = gemeinsam individuelle Lösungen entwickeln. (I Care Pflege, Kap. 22)",
      textB1:
        "Informieren, Schulen, Anleiten und Beraten (ISAB) gehört laut Gesetz zu den Kernaufgaben der Pflege. Ziel: Der Patient soll sich selbst helfen können. Informieren = Wissen geben. Schulen = eine geplante Schulung. Anleiten = etwas Schritt für Schritt zeigen. Beraten = zusammen eine Lösung für den Alltag finden.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-beratung-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "II.2",
        quellen: ["I Care Pflege, Kap. 22 (Informieren, Schulen, Anleiten und Beraten; Pflegeberufereformgesetz)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-beratung-isab",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Informieren, Schulen, Anleiten, Beraten (ISAB)",
          body: "**Informieren, Schulen, Anleiten und Beraten** (kurz **ISAB**) ist laut **Pflegeberufereformgesetz** eine **Kernaufgabe der Pflege** (Kompetenzbereich II.2). Es ist Teil von Prävention und Gesundheitsförderung. Ziel ist nicht nur Aufklärung, sondern die **Selbstständigkeit und Mündigkeit** des Pflegeempfängers — er soll sich (bis zu einem gewissen Grad) **selbst helfen** können (I Care Pflege, Kap. 22).\n\n**Die vier Formen — am Beispiel Diabetes:**\n1. **Informieren** — Wissen weitergeben: *'Insulin senkt den Blutzucker.'* Gibt Sicherheit und Orientierung.\n2. **Schulen** — eine **strukturierte (Mikro-)Schulung**, oft für Gruppen, zu einem Thema (z.B. Ernährung bei Diabetes).\n3. **Anleiten** — **praktische Handlungskompetenz** Schritt für Schritt vermitteln (z.B. das Spritzen). Folgt einem **4-Schritte-Anleitungsprozess** und gilt für alle Altersstufen.\n4. **Beraten** — **gemeinsam individuelle Lösungen** für den Alltag entwickeln; der Pflegeempfänger entscheidet mit.\n\n**Pflegeberatung findet überall statt** — geplant (Aufnahme-, Entlassgespräch) und ungeplant im Tagesablauf (die Bettsteuerung erklären, den Atemtrainer zeigen). Wer die vier Formen unterscheidet, wählt bewusst die passende — statt nur 'irgendwie zu erklären'. (I Care Pflege, Kap. 22)",
          glossarBegriffe: ["ISAB (Informieren/Schulen/Anleiten/Beraten)", "Patientenedukation", "Mündigkeit"],
        },
        contentB1: {
          title: "Informieren, Schulen, Anleiten, Beraten (ISAB)",
          body: "**Informieren, Schulen, Anleiten und Beraten** (**ISAB**) gehört laut **Gesetz** zu den **Kernaufgaben der Pflege**. Ziel: Der Patient soll sich **selbst helfen** können (I Care Pflege, Kap. 22).\n\n**Die vier Formen — Beispiel Diabetes:**\n1. **Informieren** — Wissen geben: *'Insulin senkt den Blutzucker.'*\n2. **Schulen** — eine **geplante Schulung**, oft in der Gruppe (z.B. Ernährung).\n3. **Anleiten** — etwas **Schritt für Schritt zeigen** (z.B. das Spritzen). Es gibt dafür **4 Schritte**.\n4. **Beraten** — **zusammen eine Lösung** für den Alltag finden; der Patient entscheidet mit.\n\n**Beraten passiert überall** — geplant (Aufnahme, Entlassung) und nebenbei (die Bettsteuerung erklären). Wer die vier Formen kennt, wählt bewusst die richtige.",
          glossarBegriffe: ["ISAB (Informieren/Schulen/Anleiten/Beraten)", "Patientenedukation", "Mündigkeit"],
        },
      },
    },
    glossarBegriffe: ["ISAB (Informieren/Schulen/Anleiten/Beraten)", "Patientenedukation", "Mündigkeit"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: direktiv-non-direktiv (Bloom 2) — LE1-W6
  // ═══════════════════════════════════════════
  {
    bausteinId: "beratung-direktiv-non-direktiv",
    themaId: "beratung",
    titel: "Direktive und non-direktive Beratung: Wer findet die Lösung?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Patient A fragt: 'Wie spritze ich das Insulin richtig?' Patient B sagt: 'Ich weiß nicht, wie ich mit der Diagnose Diabetes überhaupt leben soll.' Brauchen beide dieselbe Art von Beratung — und wer soll jeweils die Lösung finden?",
      antwort:
        "Nein. Patient A braucht direktive Beratung: Hier hast du das Expertenwissen und gibst eine klare Anleitung/Empfehlung — du findest die Lösung. Patient B braucht non-direktive (personenzentrierte) Beratung: Hier begleitest du ihn, hörst zu, und er entwickelt seine eigene Lösung — die Lösung kommt von ihm. Gute Berater erkennen, welche Situation welche Aufgabe verlangt. (I Care Pflege, Kap. 22; Rogers)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Direktive Beratung: Der Berater bringt sein Expertenwissen ein und gibt konkrete Empfehlungen oder Anleitungen (z.B. Informieren, Schulen, Anleiten — der Berater steuert und 'führt'). Non-direktive (personenzentrierte) Beratung nach Rogers: Der Berater begleitet mit Empathie und Wertschätzung, der Ratsuchende entwickelt selbst seine Lösung (Selbstbestimmung). Die Aufgabe des Beraters wechselt je nach Situation — bei Wissens-/Handlungsfragen eher direktiv, bei Sinn-/Lebensfragen eher non-direktiv.",
      textB1:
        "Direktive Beratung: Du bist der Experte und gibst eine klare Empfehlung oder zeigst, wie es geht (z.B. Anleiten). Du steuerst. Non-direktive Beratung (nach Rogers): Du begleitest und hörst zu, der Patient findet selbst seine Lösung. Bei praktischen Fragen ('Wie spritze ich?') eher direktiv. Bei Lebensfragen ('Wie lebe ich damit?') eher non-direktiv.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-beratung-wb-02",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "II.2",
        quellen: ["I Care Pflege, Kap. 22 (Beratung)", "Kommunikation im Gesundheitswesen, Kap. 1 (personenzentriert/Rogers)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-beratung-direktiv",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Direktive und non-direktive Beratung",
          body: "Beratung ist nicht immer gleich. Die zentrale Frage: **Wer findet die Lösung — der Berater oder der Ratsuchende?** Danach unterscheidet man zwei Pole (I Care Pflege, Kap. 22; Rogers):\n\n**Direktive Beratung — der Berater steuert.**\n- Du bringst dein **Expertenwissen** ein und gibst **konkrete Empfehlungen oder Anleitungen**.\n- Passend bei klaren **Wissens- und Handlungsfragen**: *'Wie spritze ich das Insulin?'*, *'Wie versorge ich die Wunde zu Hause?'*\n- Aufgabe des Beraters: fachlich korrekt informieren, anleiten, schulen — verständlich und sicher.\n- Nahe an **Informieren, Schulen, Anleiten** (ISAB). *(Das eigentliche 'Beraten' in ISAB ist dagegen eher non-direktiv — siehe unten.)*\n\n**Non-direktive (personenzentrierte) Beratung — der Ratsuchende findet die Lösung.**\n- Du **begleitest** mit Empathie und Wertschätzung (nach **Rogers**); der Mensch entwickelt **selbst** seine Lösung.\n- Passend bei **Sinn-, Lebens- und Entscheidungsfragen**: *'Wie soll ich mit der Diagnose leben?'*\n- Aufgabe des Beraters: zuhören, Verständnis fördern, die **Selbstbestimmung** stärken — nicht die eigene Lösung aufdrängen.\n\n**Die Kunst:** die Situation richtig einschätzen und die passende Haltung wählen. Bei Praktischem direktiv, bei Persönlichem non-direktiv — oft fließend in einem Gespräch. (I Care Pflege, Kap. 22; Rogers)",
          glossarBegriffe: ["direktive Beratung", "non-direktive Beratung", "Selbstbestimmung"],
        },
        contentB1: {
          title: "Direktive und non-direktive Beratung",
          body: "Beratung ist nicht immer gleich. Die wichtige Frage: **Wer findet die Lösung?** (I Care Pflege, Kap. 22; Rogers):\n\n**Direktive Beratung — du steuerst.**\n- Du bist der **Experte** und gibst eine **klare Empfehlung** oder zeigst, wie es geht.\n- Gut bei **praktischen Fragen**: *'Wie spritze ich Insulin?'*\n- Nahe an **Informieren, Anleiten, Schulen**. *(Das 'Beraten' selbst ist eher non-direktiv.)*\n\n**Non-direktive Beratung — der Patient findet die Lösung.**\n- Du **begleitest** mit Empathie (nach **Rogers**), der Patient findet **selbst** seinen Weg.\n- Gut bei **Lebensfragen**: *'Wie soll ich mit der Diagnose leben?'*\n- Deine Aufgabe: zuhören und die **Selbstbestimmung** stärken — nicht deine Lösung aufdrängen.\n\n**Die Kunst:** die Situation richtig einschätzen. Praktisch → direktiv. Persönlich → non-direktiv.",
          glossarBegriffe: ["direktive Beratung", "non-direktive Beratung", "Selbstbestimmung"],
        },
      },
    },
    glossarBegriffe: ["direktive Beratung", "non-direktive Beratung", "Selbstbestimmung"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: beratung-perspektiven (Bloom 2) — LE1-W5
  // ═══════════════════════════════════════════
  {
    bausteinId: "beratung-perspektiven",
    themaId: "beratung",
    titel: "Beratung aus drei Perspektiven: psychologisch, psychosozial, pädagogisch",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine frisch operierte Patientin soll lernen, ihren Stoma-Beutel selbst zu wechseln, traut sich aber nicht und schämt sich. Reicht es, ihr die Technik zu zeigen — oder spielt mehr hinein?",
      antwort:
        "Mehr spielt hinein. Beratung verbindet drei Perspektiven: pädagogisch (wie vermittle ich die Technik so, dass sie lernt?), psychologisch (ihr Erleben, Scham, Angst, Selbstbild) und psychosozial (ihr Umfeld, Unterstützung zu Hause, soziale Folgen). Wer nur die Technik zeigt, übersieht, warum sie sich nicht traut. (Kommunikation im Gesundheitswesen, Kap. 1/2; I Care Pflege, Kap. 22)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Beratung integriert drei Perspektiven: pädagogisch (Lernen ermöglichen, Wissen und Können verständlich vermitteln), psychologisch (subjektives Erleben, Wahrnehmung, Gefühle, Selbstkonzept des Ratsuchenden) und psychosozial (soziales Umfeld, Belastungen, Ressourcen, Folgen der Erkrankung im Leben). Erst zusammen wird Beratung wirksam. (Kommunikation im Gesundheitswesen; I Care Pflege, Kap. 22)",
      textB1:
        "Beratung hat drei Seiten: pädagogisch (wie lernt der Patient gut?), psychologisch (sein Erleben, Gefühle, Selbstbild) und psychosozial (sein Umfeld, Unterstützung, Folgen im Leben). Nur die Technik zu zeigen reicht oft nicht.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-beratung-wb-03",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "II.2",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 1 (pädagogische Psychologie, psychosoziale Kompetenz, biopsychosoziale Sichtweise)", "I Care Pflege, Kap. 22 (Beratung)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-beratung-perspektiven",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Beratung aus drei Perspektiven",
          body: "Gute Beratung ist mehr als Wissensvermittlung. Sie verbindet **drei Perspektiven** (Kommunikation im Gesundheitswesen; I Care Pflege, Kap. 22):\n\n**1. Pädagogische Perspektive — wie lernt der Mensch?**\nBeratung soll **Lernen ermöglichen**. Du überlegst: Wie vermittle ich Wissen und Handlungskompetenz so, dass der Patient es versteht und umsetzen kann? (Verständliche Sprache, Schritte, Wiederholung, Üben.)\n\n**2. Psychologische Perspektive — was erlebt der Mensch?**\nBeratung berücksichtigt das **subjektive Erleben und die Wahrnehmung**: Gefühle (Angst, Scham), das **Selbstkonzept** (was hält der Patient von sich?), seinen inneren Bezugsrahmen. Ohne das bleibt Beratung an der Oberfläche.\n\n**3. Psychosoziale Perspektive — in welchem Umfeld lebt der Mensch?**\nBeratung sieht das **soziale Umfeld**: Wer unterstützt zu Hause? Welche Belastungen, welche Ressourcen gibt es? Welche **sozialen Folgen** hat die Erkrankung (Beruf, Rolle, Teilhabe)? Dies entspricht einer **biopsychosozialen Sichtweise** auf das Gesundheitsproblem.\n\n**Beispiel Stoma-Anleitung:** Pädagogisch zeigst du die Technik; psychologisch nimmst du Scham und Angst ernst; psychosozial klärst du die Unterstützung zu Hause. Erst zusammen wird die Beratung wirksam. (Kommunikation im Gesundheitswesen; I Care Pflege, Kap. 22)",
          glossarBegriffe: ["biopsychosoziale Sichtweise", "Selbstkonzept", "psychosoziale Kompetenz"],
        },
        contentB1: {
          title: "Beratung aus drei Perspektiven",
          body: "Gute Beratung ist mehr als Wissen weitergeben. Sie hat **drei Seiten** (Kommunikation im Gesundheitswesen; I Care Pflege, Kap. 22):\n\n**1. Pädagogisch — wie lernt der Patient?**\nDu überlegst: Wie zeige ich es so, dass er es **versteht und kann**? (Einfache Sprache, Schritte, Üben, Wiederholen.)\n\n**2. Psychologisch — was fühlt der Patient?**\nDu nimmst **Gefühle** ernst: Angst, Scham. Und sein **Selbstbild** — was hält er von sich? Ohne das bleibt Beratung an der Oberfläche.\n\n**3. Psychosozial — wie lebt der Patient?**\nDu schaust auf das **Umfeld**: Wer hilft zu Hause? Welche Belastungen gibt es? Welche **Folgen** hat die Krankheit im Leben (Beruf, Familie)?\n\n**Beispiel Stoma:** Du zeigst die Technik (pädagogisch), nimmst die Scham ernst (psychologisch) und klärst die Hilfe zu Hause (psychosozial). Erst zusammen hilft die Beratung wirklich.",
          glossarBegriffe: ["biopsychosoziale Sichtweise", "Selbstkonzept", "psychosoziale Kompetenz"],
        },
      },
    },
    glossarBegriffe: ["biopsychosoziale Sichtweise", "Selbstkonzept", "psychosoziale Kompetenz"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: kollegiale-beratung (Bloom 3) — LE1-K5
  // ═══════════════════════════════════════════
  {
    bausteinId: "beratung-kollegiale-beratung",
    themaId: "beratung",
    titel: "Kollegiale Beratung: Im Team Lösungen finden",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein belastender Fall lässt dich nicht los — ein Patient ist verstorben, und du fragst dich, ob du etwas hättest anders machen sollen. Wie kann dir das Team strukturiert helfen, ohne dass es zum Tratsch im Dienstzimmer wird?",
      antwort:
        "Durch kollegiale Beratung: ein strukturiertes Format, in dem das Team einen Fall reflektiert und gemeinsam Lösungen findet. Es braucht keinen externen Experten, alle sind gleichberechtigt, die Rollen (Moderator, Fallerzähler, kollegiale Berater) wechseln. Feste Regeln (Vertraulichkeit, Wertschätzung, der Fallerzähler bestimmt die Richtung) schützen den Rahmen — anders als beim Tratsch. (Kommunikation im Gesundheitswesen, Kap. 3)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kollegiale Beratung ist ein strukturiertes Format zur wechselseitigen Reflexion beruflicher Vorkommnisse — Ziel: Lösungsfindung, Stressverarbeitung, Burn-out-Prävention. Sie braucht keinen externen Experten, alle sind gleichberechtigt, die Rollen wechseln (Moderator, Fallerzähler, kollegiale Berater, Sekretär). Regeln: Vertraulichkeit, gegenseitiger Respekt/Wertschätzung, der Fallerzähler entscheidet, was er berichtet und in welche Richtung er beraten wird; es redet immer nur einer. Verwandt: Intervision, Supervision, Balint-Gruppe. (Kommunikation im Gesundheitswesen, Kap. 3)",
      textB1:
        "Kollegiale Beratung ist ein geregeltes Treffen, in dem das Team einen Fall bespricht und zusammen Lösungen sucht. Ziele: Lösungen finden, Stress verarbeiten, Burn-out vermeiden. Man braucht keinen Experten von außen, alle sind gleich, die Rollen wechseln. Regeln: Vertraulichkeit, Respekt, der Fallerzähler bestimmt, was er erzählt und wie beraten wird, und es redet immer nur einer.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-beratung-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "II.2",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 3 (Kollegiale Beratung, Intervision und Supervision)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-beratung-kollegiale",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Kollegiale Beratung",
          body: "**Kollegiale Beratung** ist eine **wechselseitige Reflexion** im Team: Berufliche Vorkommnisse werden besprochen, um eine **Problemlösung** zu unterstützen — gemeinsames Lernen zur Kompetenzerweiterung (Kommunikation im Gesundheitswesen, Kap. 3).\n\n**Wirkung:** Lösungsfindung, Reduktion beruflicher Anspannung, Stressverarbeitung, **Burn-out-Prävention**.\n\n**Das Besondere:**\n- Sie braucht **keinen externen Experten**, wenn die Methodik allen bekannt ist.\n- Alle sind **gleichberechtigt**, die **Rollen wechseln**.\n- Eine **wertschätzende Grundhaltung** wird vorausgesetzt, die Themen werden **vertraulich** behandelt.\n\n**Die Regeln:**\n- Alle verpflichten sich zur **Vertraulichkeit**.\n- Ansichten werden mit **Respekt und Wertschätzung** akzeptiert.\n- Der **Fallerzähler entscheidet selbst**, was er berichtet und **in welche Richtung** er beraten werden will — er kann den Prozess jederzeit ändern oder beenden.\n- Jeder bringt sich ein; **es redet immer nur einer**.\n\n**Ablauf (Auszug):**\n1. **Casting** — Rollen verteilen: Moderator (führt durch die Phasen), Fallerzähler (bringt die Situation ein), kollegiale Berater, Sekretär (schreibt mit).\n2. **Spontanerzählung** — der Fallerzähler schildert ~10 Min die Situation, der Moderator unterstützt mit klärenden Fragen; danach Verständnisfragen.\n3. weitere Phasen: Sammeln von Perspektiven/Lösungsansätzen → Rückmeldung an den Fallerzähler.\n\n**Verwandte Formate:** Intervision (geleitete kollegiale Reflexion) und Supervision (mit Supervisor). Die ideale Gruppe umfasst max. ~10 Personen. (Kommunikation im Gesundheitswesen, Kap. 3)",
          glossarBegriffe: ["kollegiale Beratung", "Supervision", "Intervision"],
        },
        contentB1: {
          title: "Kollegiale Beratung",
          body: "**Kollegiale Beratung** ist eine **gemeinsame Reflexion** im Team: Ihr besprecht einen Fall und sucht zusammen eine **Lösung** (Kommunikation im Gesundheitswesen, Kap. 3).\n\n**Wirkung:** Lösungen finden, Stress abbauen, **Burn-out vermeiden**.\n\n**Das Besondere:**\n- Kein **Experte von außen** nötig.\n- Alle sind **gleich**, die **Rollen wechseln**.\n- **Wertschätzung** und **Vertraulichkeit** sind Pflicht.\n\n**Die Regeln:**\n- Alle halten **Vertraulichkeit**.\n- Man behandelt sich mit **Respekt**.\n- Der **Fallerzähler bestimmt**, was er erzählt und **wie** beraten wird. Er kann jederzeit stoppen.\n- **Es redet immer nur einer.**\n\n**Ablauf (Auszug):**\n1. **Rollen verteilen**: Moderator, Fallerzähler, Berater, Sekretär.\n2. **Erzählen** — der Fallerzähler schildert ~10 Min, dann Verständnisfragen.\n3. **Lösungen sammeln** → Rückmeldung an den Fallerzähler.\n\n**Ähnliche Formate:** Intervision und Supervision. Gruppe: höchstens ~10 Personen.",
          glossarBegriffe: ["kollegiale Beratung", "Supervision", "Intervision"],
        },
      },
    },
    glossarBegriffe: ["kollegiale Beratung", "Supervision", "Intervision"],
    karteikarten: [],
  },
];

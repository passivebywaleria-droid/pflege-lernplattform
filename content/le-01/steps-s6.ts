// Session 6: "Pflege erforschen" — LE 01 Personen- und situationsorientiert pflegen
// Generiert vom Content-Generator v2.1 mit Phasen-Bogen
// TB11: Pflegewissenschaft & EBN (KB-V, F32-F37)
// TB12: Pflegebeziehung & Kultur (KB-II, F46-F47, F50)
// Leitfall: Yasemin Demirci — Tradition vs. Evidenz
// Bloom: B2-B4, 22 Steps, ~30 Min
// Interleaving: 10% (Snack + Memory aus früheren Sessions)

import type { ContentStep } from "../_types";

export const STEPS_S6: ContentStep[] = [
  // =============================================================
  // Step 1: Selfrating — Vorwissen aktivieren (TB11)
  // =============================================================
  {
    stepId: "le01-s6-tb11-01",
    phase: "s6",
    stepType: "selfrating",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Dein Wissensstand: Pflegewissenschaft",
      body: "Schätze dich ein: Wie gut kennst du dich mit Pflegewissenschaft und Evidence-based Nursing aus?",
    },
    contentB1: {
      title: "Was weißt du schon?",
      body: "Wie gut kennst du dich aus? Schätze dich ein.",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich kann erklären, was Pflegewissenschaft ist.",
        "Ich kenne den Unterschied zwischen Tradition und Evidenz.",
        "Ich weiß, was Evidence-based Nursing (EBN) bedeutet.",
        "Ich kann die 3 Säulen der Wissenschaft nennen.",
      ],
    },
  },

  // =============================================================
  // Step 2: Dialog — Yasemin: Rivanol-Szene (SZENE)
  // =============================================================
  {
    stepId: "le01-s6-tb11-02",
    phase: "s6",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.101-102"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "\"Das machen wir schon immer so\"",
      body: "Yasemin beobachtet auf Station eine Diskussion über Wundbehandlung mit Rivanol.",
      fallbezug: "Tag 4 auf Station. Yasemin steht am Verbandswagen und hört einer Diskussion zu.",
    },
    contentB1: {
      title: "Tradition oder Beweis?",
      body: "Yasemin hört ein Gespräch. Es geht um alte Gewohnheiten in der Pflege.",
      fallbezug: "Tag 4. Yasemin hört einer Diskussion zu.",
    },
    question: {
      fragetext: "Eine Diskussion auf Station:",
      dialogPhases: [
        {
          context: "Am Verbandswagen auf Station. Kollegin Sabine greift zum Rivanol und sagt: 'Rivanol auf die Wunde — das machen wir hier seit 20 Jahren so.' Die Praxisanleiterin schaut zu dir und fragt: 'Was denkst du — sollte Sabine Rivanol verwenden?'",
          contextB1: "Kollegin Sabine will Rivanol auf eine Wunde tun. Die Praxisanleiterin fragt dich: 'Was denkst du?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Ich bin unsicher. Sollte ich nachschauen, ob es Studien zu Rivanol gibt? Nur weil wir es lange machen, heißt das ja nicht, dass es das Beste ist.",
              textB1: "Soll ich nachschauen, ob es Beweise gibt, dass Rivanol hilft? Vielleicht gibt es bessere Methoden.",
              patientResponse: "Sabine runzelt die Stirn: 'Studien? Bei meinen Patienten hat es doch immer funktioniert!' Die Praxisanleiterin nickt dir zu: 'Gute Frage. Genau das ist der Unterschied zwischen Tradition und Evidenz.'",
              patientResponseB1: "Sabine sagt: 'Es hat immer funktioniert!' Die Praxisanleiterin sagt: 'Gute Frage! Das ist der Unterschied: Tradition oder Beweis?'",
              score: 3,
              feedback: "Ausgezeichnet! Du zeigst Initiative und willst selbst nach Evidenz suchen. Genau das ist Evidence-based Nursing: Nicht Tradition folgen, sondern nach wissenschaftlichen Belegen fragen. Rivanol verzögert tatsächlich die Wundheilung — die Forschung hat das gezeigt.",
              feedbackB1: "Sehr gut! Du willst selbst nachschauen. Das ist EBN: Nicht Tradition folgen, sondern nach Forschung fragen.",
            },
            {
              text: "Sabine hat so viel Erfahrung — ich traue mich nicht, das in Frage zu stellen. Vielleicht hat sie recht?",
              textB1: "Sabine hat viel Erfahrung. Ich traue mich nicht zu widersprechen.",
              patientResponse: "Sabine lächelt: 'Siehst du, Erfahrung zählt!' Die Praxisanleiterin schüttelt leicht den Kopf: 'Erfahrung ist wichtig, aber sie kann auch täuschen.'",
              patientResponseB1: "Sabine freut sich. Die Praxisanleiterin sagt: 'Erfahrung ist wichtig, aber sie kann täuschen.'",
              score: 2,
              feedback: "Erfahrung zu respektieren ist verständlich. Aber trau dich zu fragen! Erfahrung ist ein Teil von EBN, aber allein nicht ausreichend. Vielleicht heilten die Wunden trotz Rivanol — oder sogar langsamer als ohne.",
              feedbackB1: "Erfahrung ist wichtig, aber allein nicht genug. Trau dich zu fragen! Vielleicht heilten die Wunden trotz Rivanol.",
            },
            {
              text: "Wenn Sabine das seit 20 Jahren so macht, wird es schon stimmen. Ich würde auch Rivanol nehmen.",
              textB1: "20 Jahre Erfahrung reichen mir. Ich würde auch Rivanol nehmen.",
              patientResponse: "Sabine nickt zufrieden. Die Praxisanleiterin seufzt: 'Genau diese Denkweise wollen wir hinterfragen.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Genau das wollen wir hinterfragen.'",
              score: 1,
              feedback: "Vorsicht! Tradition ('Das machen wir seit 20 Jahren') ist eine unstrukturierte Wissensquelle. Studien zeigen: Rivanol schädigt gesunde Hautzellen und verzögert die Wundheilung. Evidenzbasierte Pflege nutzt heute hydroaktive Wundversorgung.",
              feedbackB1: "Nein! Nur weil etwas lange gemacht wird, ist es nicht richtig. Rivanol schadet sogar der Wundheilung.",
            },
          ],
        },
        {
          context: "Die Praxisanleiterin erklärt: 'Forschung zeigt, dass Rivanol die Wundheilung sogar verzögern kann.' Sabine antwortet: 'Forschung hin oder her — bei meinen Patienten hat es immer funktioniert.' Die Praxisanleiterin fragt dich: 'Was ist das Problem mit Sabines Argumentation?'",
          contextB1: "Sabine sagt: 'Bei meinen Patienten hat es funktioniert.' Die Praxisanleiterin fragt dich: 'Was ist das Problem?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Ich frage mich: Woher weiß Sabine, dass die Wunden wegen Rivanol geheilt sind? Vielleicht wären sie ohne Rivanol genauso schnell — oder sogar schneller — geheilt.",
              textB1: "Aber woher weiß Sabine, dass Rivanol geholfen hat? Vielleicht heilten die Wunden auch ohne Rivanol.",
              patientResponse: "Die Praxisanleiterin nickt anerkennend: 'Genau. Das ist der Kern von EBN: Wir brauchen Evidenz — nicht Gewohnheit.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Genau! Wir brauchen Beweise, nicht Gewohnheit.'",
              score: 3,
              feedback: "Perfekt hinterfragt! Einzelerfahrung ist nicht generalisierbar. Der Trugschluss: Weil B nach A passiert, hat A verursacht B. Ohne Kontrollgruppe wissen wir nicht, ob die Heilung wegen oder trotz Rivanol kam.",
              feedbackB1: "Sehr gut! Du fragst genau richtig. Einzelne Erfahrungen beweisen nichts. Man braucht Studien mit vielen Patienten.",
            },
            {
              text: "Ich finde, Sabine sollte auf die Praxisanleiterin hören. Die ist doch die Vorgesetzte.",
              textB1: "Sabine sollte auf die Chefin hören. Die Praxisanleiterin hat recht.",
              patientResponse: "Die Praxisanleiterin schüttelt den Kopf: 'Es geht nicht um Hierarchie — es geht um Evidenz.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Es geht nicht um Chef. Es geht um Beweise.'",
              score: 1,
              feedback: "Autoritätshörigkeit ist auch eine unstrukturierte Wissensquelle! In EBN entscheidet nicht der Rang, sondern die Evidenz. Auch eine Praxisanleiterin muss ihre Aussagen mit Studien belegen können.",
              feedbackB1: "Nein! Es geht nicht darum, wer Chef ist. Es geht darum, was die Forschung sagt.",
            },
            {
              text: "Vielleicht hat Sabine ja recht, aber müsste sie nicht zeigen können, dass Rivanol wirklich besser ist als neuere Methoden?",
              textB1: "Vielleicht hat Sabine recht. Aber müsste sie nicht zeigen, dass Rivanol besser ist?",
              patientResponse: "Die Praxisanleiterin lächelt: 'Gut gedacht. Und genau das können Studien leisten.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Gut gedacht. Studien können das zeigen.'",
              score: 2,
              feedback: "Guter Ansatz! Erfahrung ist ein Teil von EBN, aber sie muss mit externer Evidenz abgeglichen werden. Studien haben gezeigt: Hydroaktive Wundversorgung ist Rivanol überlegen. Die Beweislast liegt bei der traditionellen Methode.",
              feedbackB1: "Guter Ansatz! Erfahrung muss mit Forschung verglichen werden. Studien zeigen: Es gibt bessere Methoden als Rivanol.",
            },
          ],
        },
      ],
      patientName: "Yasemin Demirci",
    },
  },

  // =============================================================
  // Step 3: Text — Was ist Pflegewissenschaft? (ERKLÄRUNG)
  // =============================================================
  {
    stepId: "le01-s6-tb11-03",
    phase: "s6",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.103"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Was ist Pflegewissenschaft?",
      body: "Pflegewissenschaft erforscht die \"Pflegepraxis für die Pflegepraxis\" — mit dem Ziel, die Qualität der Pflege zu verbessern.\n\nAnders als Philosophie hat Pflegewissenschaft ein konkretes Handlungsfeld: Sie untersucht, was in der Pflege wirkt, was schadet und was verbessert werden kann.\n\n**Die 3 Säulen der Wissenschaft:**\n1. **Forschung** — Neues Wissen generieren (Was hilft wirklich?)\n2. **Theorie** — Zusammenfassung klar definierter Aussagen über Pflege\n3. **Lehre** — Wissen vermitteln und weitergeben\n\nNachprüfbarkeit ist der Kern wissenschaftlichen Wissens: Was nicht überprüft werden kann, ist keine Wissenschaft.",
      fallbezug: "Yasemin versteht: Die Frage ist nicht 'Hat Rivanol immer funktioniert?' — sondern 'Gibt es einen Beweis, dass es funktioniert?'",
    },
    contentB1: {
      title: "Was ist Pflegewissenschaft?",
      body: "Pflegewissenschaft untersucht, was in der Pflege gut funktioniert und was nicht.\n\n**3 Säulen:**\n1. **Forschung** — Neues herausfinden\n2. **Theorie** — Wissen aufschreiben und ordnen\n3. **Lehre** — Wissen weitergeben\n\nWichtig: Wissen muss überprüfbar sein. Nur Tradition reicht nicht.",
      fallbezug: "Yasemin lernt: Man darf nicht einfach sagen 'Das machen wir immer so'. Man muss fragen: Gibt es einen Beweis?",
    },
  },

  // =============================================================
  // Step 4: Comparison — Strukturiert vs. Unstrukturiert (ERKLÄRUNG)
  // =============================================================
  {
    stepId: "le01-s6-tb11-04",
    phase: "s6",
    stepType: "comparison",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.101-102"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Woher kommt Pflegewissen?",
      body: "Nicht jedes Wissen ist gleich zuverlässig. Vergleiche die beiden Quellen.",
    },
    contentB1: {
      title: "Gutes und schlechtes Wissen",
      body: "Es gibt zuverlässiges Wissen und unsicheres Wissen. Vergleiche selbst.",
    },
    question: {
      fragetext: "Vergleiche die Wissensquellen:",
      comparison: {
        instruction: "Vergleiche strukturierte und unstrukturierte Wissensquellen:",
        columns: [
          { label: "Strukturiert", icon: "flask-conical" },
          { label: "Unstrukturiert", icon: "help-circle" },
        ],
        rows: [
          { criterion: "Grundlage", values: ["Logisches Denken + wissenschaftliches Forschen", "Intuition, Tradition, Erfahrung, Versuch & Irrtum"] },
          { criterion: "Überprüfbarkeit", values: ["Systematisch überprüft, nachvollziehbar", "Subjektiv, nicht verallgemeinerbar"] },
          { criterion: "Beispiel", values: ["Studie zeigt: Lagerungswechsel alle 2h reduziert Dekubitus um 60%", "\"Das machen wir hier seit 20 Jahren so\" (Rivanol)"] },
          { criterion: "Verlässlichkeit", values: ["Hoch — weil nachprüfbar", "Gering — kann sogar schaden"] },
          { criterion: "Logisches Denken", values: ["Induktiv (Einzelfall → Allgemeines) + Deduktiv (Allgemeines → Einzelfall)", "Fehlt oder unsystematisch"] },
        ],
      },
    },
  },

  // =============================================================
  // Step 5: Reveal — 3 Säulen der Pflegewissenschaft (ERKLÄRUNG)
  // =============================================================
  {
    stepId: "le01-s6-tb11-05",
    phase: "s6",
    stepType: "reveal",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.103-105"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "3 Säulen + 3 Ebenen",
      body: "Tippe auf jede Karte, um die Ebenen der Pflegeforschung zu entdecken.",
    },
    contentB1: {
      title: "Pflegeforschung — 3 Ebenen",
      body: "Tippe auf jede Karte. Was wird erforscht?",
    },
    question: {
      fragetext: "Die 3 Ebenen der Pflegeforschung:",
      revealItems: [
        { icon: "user", label: "Mikro-Ebene", detail: "Direkte Pflegepraxis: Was hilft dem einzelnen Patienten? Z.B. Welche Dekubitusprophylaxe ist am wirksamsten?" },
        { icon: "building-2", label: "Meso-Ebene", detail: "Organisation der Pflege: Wie organisieren wir Pflege besser? Z.B. Ist Primary Nursing effektiver als Funktionspflege?" },
        { icon: "globe", label: "Makro-Ebene", detail: "Gesundheitssystem: Welche Auswirkungen hat die Pflegeversicherung? Wie verändert der Fachkräftemangel die Versorgung?" },
      ],
    },
  },

  // =============================================================
  // Step 6: MC — EBN-Verständnis prüfen (CHECKPOINT)
  // =============================================================
  {
    stepId: "le01-s6-tb11-06",
    phase: "s6",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.113"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Kurzer Check: EBN",
      body: "Evidence-based Nursing verbindet drei Dinge. Welche?",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Was gehört zu EBN? Wähle die richtige Antwort.",
    },
    question: {
      fragetext: "Was integriert Evidence-based Nursing (EBN)?",
      options: [
        { text: "Externe Evidenz + klinische Expertise + Patientenpräferenzen", isCorrect: true, explanation: "Richtig! EBN verbindet wissenschaftliche Forschungsergebnisse (Evidenz) mit der Erfahrung der Pflegenden (Expertise) und den Wünschen der Patienten (Präferenzen)." },
        { text: "Tradition + Intuition + Autorität", isCorrect: false, explanation: "Das sind unstrukturierte Wissensquellen — genau das, was EBN ersetzen will. Tradition allein reicht nicht." },
        { text: "Pflegetheorien + Pflegemodelle + Pflegeleitbilder", isCorrect: false, explanation: "Das sind Umsetzungsstufen von Theorien in die Praxis, aber nicht die Definition von EBN." },
        { text: "Diagnose + Therapie + Evaluation", isCorrect: false, explanation: "Das klingt nach dem Pflegeprozess, nicht nach EBN. EBN ist die Grundlage, auf der der Pflegeprozess basieren sollte." },
      ],
    },
  },

  // =============================================================
  // Step 7: Flipcard — EBN in der Praxis (ANDERS_ERKLÄRT)
  // =============================================================
  {
    stepId: "le01-s6-tb11-07",
    phase: "s6",
    stepType: "flipcard",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.101-102, 113"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "ANDERS_ERKLÄRT",
    contentC1: {
      title: "Wissensquellen im Alltag",
      body: "Tippe auf jede Karte: Welche Wissensquelle steckt dahinter — und ist sie zuverlässig?",
    },
    contentB1: {
      title: "Woher kommt das Wissen?",
      body: "Tippe auf jede Karte. Ist diese Wissensquelle gut oder schlecht?",
    },
    question: {
      fragetext: "Erkenne die Wissensquellen:",
      cards: [
        { front: "\"Das machen wir seit 20 Jahren so.\"", back: "Tradition — Unstrukturiert! Nur weil etwas lange gemacht wird, ist es nicht richtig. Rivanol ist ein Beispiel: jahrzehntelang Standard, obwohl die Evidenz dagegen spricht.", icon: "alert-triangle" },
        { front: "\"Ich spüre, dass es dem Patienten schlechter geht.\"", back: "Intuition — Wertvoll als Warnsignal! Aber sie muss durch Messung bestätigt werden: Vitalzeichen, Beobachtung, Assessment. Intuition allein reicht nicht.", icon: "heart" },
        { front: "\"Die Leitlinie empfiehlt Lagerungswechsel alle 2 Stunden.\"", back: "Externe Evidenz — Strukturiert! Leitlinien basieren auf Studien und Expertenkonsens. Sie sind die verlässlichste Wissensquelle für die Praxis.", icon: "book-open" },
        { front: "\"Die Stationsleitung hat gesagt, wir sollen es so machen.\"", back: "Autorität — Unstrukturiert! Autorität allein ist kein Beweis. Die Stationsleitung kann sich irren. Nachfragen ist erlaubt und professionell.", icon: "shield-alert" },
        { front: "\"In der Studie mit 500 Patienten war Methode A wirksamer.\"", back: "Wissenschaftliches Forschen — Strukturiert! Studien sind nachprüfbar, systematisch und verallgemeinerbar. Das ist der Kern von EBN.", icon: "flask-conical" },
      ],
    },
  },

  // =============================================================
  // Step 8: Text — Rivanol-Beispiel (STORYTELLING)
  // =============================================================
  {
    stepId: "le01-s6-tb11-08",
    phase: "s6",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.102"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "STORYTELLING",
    contentC1: {
      title: "Der Fall Rivanol",
      body: "Über Jahrzehnte war Rivanol (Ethacridinlactat) ein Standardmittel zur Wundbehandlung in deutschen Krankenhäusern. Generationen von Pflegekräften lernten es in der Ausbildung.\n\nDann zeigte die Forschung: Rivanol kann die Wundheilung sogar **verzögern**. Es schädigt gesunde Hautzellen und hat keinen nachgewiesenen Vorteil gegenüber moderner Wundversorgung.\n\nTrotzdem wurde es noch jahrelang weiter verwendet. Warum?\n\n- **Tradition:** \"Das machen wir seit 20 Jahren so.\"\n- **Autorität:** \"Die Stationsleitung hat es mir so beigebracht.\"\n- **Erfahrung:** \"Bei meinen Patienten hat es funktioniert.\"\n\nGenau hier setzt EBN an: Pflegerisches Handeln muss auf **Evidenz** basieren — nicht auf Gewohnheit.\n\n💡 **Wusstest du?** Heute wird statt Rivanol häufig hydroaktive Wundversorgung eingesetzt — weil Studien ihre Überlegenheit belegen.",
      fallbezug: "Yasemin denkt: Wenn ich als fertige Pflegefachfrau arbeite, will ich wissen WARUM ich etwas tue — nicht nur WIE.",
    },
    contentB1: {
      title: "Das Rivanol-Beispiel",
      body: "Rivanol war lange ein Mittel zur Wundbehandlung. Viele Pflegekräfte haben es benutzt.\n\nAber die Forschung hat gezeigt: Rivanol kann der Wunde sogar **schaden**. Es zerstört gesunde Hautzellen.\n\nWarum haben es trotzdem viele weiter benutzt?\n- \"Das machen wir immer so.\" (Tradition)\n- \"Die Chefin hat es mir so beigebracht.\" (Autorität)\n\nEBN sagt: Man muss nach **Beweisen** handeln — nicht nach Gewohnheit.",
      fallbezug: "Yasemin lernt: Man muss immer fragen: Gibt es einen Beweis, dass es funktioniert?",
    },
  },

  // =============================================================
  // Step 9: Text — 3 Ebenen der Forschung (ERKLÄRUNG)
  // =============================================================
  {
    stepId: "le01-s6-tb11-09",
    phase: "s6",
    stepType: "text",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.104-105"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Wo wird geforscht?",
      body: "Pflegeforschung arbeitet auf **3 Ebenen**:\n\n**Mikro-Ebene (Patient):**\nDirekte Pflegepraxis. Z.B.: Welche Lagerung verhindert Dekubitus am besten? Welches Schmerzassessment ist bei Kindern am genauesten?\n\n**Meso-Ebene (Station/Einrichtung):**\nOrganisation der Pflege. Z.B.: Ist Primary Nursing besser als Funktionspflege? Wie wirkt sich der Personalschlüssel auf die Pflegequalität aus?\n\n**Makro-Ebene (Gesundheitssystem):**\nGesundheitspolitik und Versorgungsstrukturen. Z.B.: Welche Auswirkungen hat die Pflegeversicherung? Wie verändert der Fachkräftemangel die Versorgung?",
      fallbezug: "Yasemin erkennt: Auch ihre Beobachtungen auf Station könnten eines Tages Teil einer Studie werden.",
    },
    contentB1: {
      title: "3 Bereiche der Pflegeforschung",
      body: "Pflegeforschung gibt es auf 3 Ebenen:\n\n**1. Patient:** Was hilft dem Patienten am besten? (z.B. Lagerung gegen Druckstellen)\n\n**2. Station:** Wie organisiert man Pflege am besten? (z.B. feste Bezugspflege)\n\n**3. System:** Wie funktioniert das Gesundheitssystem? (z.B. Auswirkungen des Pflegemangels)",
      fallbezug: "Yasemin lernt: Forschung ist nicht nur im Labor — sie passiert auch auf der Station.",
    },
  },

  // =============================================================
  // Step 10: Categorize — Wissensquellen zuordnen (ANWENDUNG)
  // =============================================================
  {
    stepId: "le01-s6-tb11-10",
    phase: "s6",
    stepType: "categorize",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.101-102"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Sortiere die Wissensquellen!",
      body: "Ordne jede Aussage der richtigen Kategorie zu.",
    },
    contentB1: {
      title: "Wissensquellen sortieren",
      body: "Welche Wissensquelle ist strukturiert? Welche ist unstrukturiert? Sortiere!",
    },
    question: {
      fragetext: "Ordne zu: Strukturiert oder Unstrukturiert?",
      categories: [
        { name: "Strukturiert (zuverlässig)" },
        { name: "Unstrukturiert (kritisch hinterfragen)" },
      ],
      items: [
        { text: "Ergebnis einer randomisierten Studie", correctCategory: 0 },
        { text: "\"Das hat die Stationsleitung so gesagt\"", correctCategory: 1 },
        { text: "Nationale Expertenstandards des DNQP", correctCategory: 0 },
        { text: "\"Bei meinen Patienten hat es immer geklappt\"", correctCategory: 1 },
        { text: "Systematische Literaturrecherche", correctCategory: 0 },
        { text: "\"Mein Bauchgefühl sagt mir...\"", correctCategory: 1 },
        { text: "Ergebnis einer Meta-Analyse", correctCategory: 0 },
        { text: "\"Das haben wir in der Ausbildung so gelernt\"", correctCategory: 1 },
      ],
    },
  },

  // =============================================================
  // Step 11: Confidence — TB11 Reflexion (REFLEXION)
  // =============================================================
  {
    stepId: "le01-s6-tb11-11",
    phase: "s6",
    stepType: "confidence",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Wie sicher bist du jetzt?",
      body: "Du hast Pflegewissenschaft und EBN kennengelernt. Schätze dich ein.",
    },
    contentB1: {
      title: "Wie sicher bist du?",
      body: "Schätze dich ein. Wie gut verstehst du EBN?",
    },
    question: {
      fragetext: "Wie sicher fühlst du dich bei diesen Aussagen?",
      statements: [
        "Ich kann erklären, was Evidence-based Nursing bedeutet.",
        "Ich kann strukturierte von unstrukturierten Wissensquellen unterscheiden.",
        "Ich kenne die 3 Ebenen der Pflegeforschung.",
      ],
    },
  },

  // =============================================================
  // Step 12: Swipe — Snack: Interleaving (TB11-Stoff)
  // =============================================================
  {
    stepId: "le01-s6-sn-01",
    phase: "s6",
    stepType: "swipe",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: ["Q3 S.101-113", "Q2 S.78"],
    track: "vertiefung",
    modus: "challenge",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Schnellcheck: Stimmt das?",
      body: "Wische nach rechts (stimmt) oder links (stimmt nicht).",
    },
    contentB1: {
      title: "Stimmt das?",
      body: "Wische: Stimmt oder stimmt nicht?",
    },
    question: {
      fragetext: "Stimmt das?",
      cards: [
        { statement: "EBN bedeutet, ausschließlich nach Studien zu handeln.", isTrue: false, explanation: "Nicht nur Studien! EBN integriert externe Evidenz, klinische Expertise UND Patientenpräferenzen. Alle drei zählen." },
        { statement: "Intuition kann ein wertvolles Warnsignal sein, muss aber überprüft werden.", isTrue: true, explanation: "Richtig! Intuition ist kein Beweis, aber sie kann auf Probleme hinweisen. Dann muss man objektiv messen." },
        { statement: "Der Pflegeprozess hat 6 Schritte nach Fiechter und Meier.", isTrue: true, explanation: "Richtig! Informationssammlung, Probleme erkennen, Ziele, Maßnahmen planen, durchführen, evaluieren. (Wiederholung aus S2)" },
        { statement: "Pflegewissenschaft forscht nur an Universitäten.", isTrue: false, explanation: "Nein! Pflegeforschung findet auch direkt in der Praxis statt — z.B. durch Study Nurses in Krankenhäusern." },
        { statement: "Nachprüfbarkeit ist der Kern wissenschaftlichen Wissens.", isTrue: true, explanation: "Richtig! Was nicht überprüft werden kann, ist keine Wissenschaft. Das unterscheidet Wissenschaft von Tradition." },
      ],
    },
  },

  // =============================================================
  // Step 13: Dialog — Yasemin trifft Frau Krüger (TB12 SZENE)
  // =============================================================
  {
    stepId: "le01-s6-tb12-01",
    phase: "s6",
    stepType: "dialog",
    bloomLevel: 2,
    kompetenzbereich: "KB-II",
    quellen: ["Q4 S.129-131"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "SZENE",
    contentC1: {
      title: "Frau Krüger und die Verlaufskurve",
      body: "Yasemin betreut eine Patientin mit chronischer Herzinsuffizienz. Der Zustand schwankt seit Monaten.",
      fallbezug: "Yasemin fragt sich: Wie kann man den Verlauf einer chronischen Krankheit verstehen?",
    },
    contentB1: {
      title: "Eine Patientin mit chronischer Krankheit",
      body: "Yasemin betreut Frau Krüger. Ihr Zustand wird mal besser, mal schlechter.",
      fallbezug: "Yasemin will verstehen: Warum geht es mal gut und mal schlecht?",
    },
    question: {
      fragetext: "Ein Gespräch über chronische Krankheit:",
      dialogPhases: [
        {
          context: "Auf Station. Yasemin erzählt der Praxisanleiterin: 'Frau Krüger war letzte Woche stabil, jetzt geht es ihr wieder schlechter. Gibt es da ein Muster?' Die Praxisanleiterin nickt und fragt: 'Was denkst du — warum schwankt der Zustand?'",
          contextB1: "Yasemin fragt: 'Frau Krüger war letzte Woche gut, jetzt geht es ihr schlecht. Warum?' Die Praxisanleiterin fragt zurück: 'Was denkst du?'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Mir ist aufgefallen, dass es bei Frau Krüger gute und schlechte Wochen gibt. Ist das typisch für chronische Krankheiten? Gibt es da ein Muster?",
              textB1: "Mir ist aufgefallen: Manche Wochen sind gut, manche schlecht. Ist das normal bei chronischen Krankheiten?",
              patientResponse: "Die Praxisanleiterin lächelt: 'Genau! Das beschreibt das Trajekt-Modell von Corbin und Strauss. Kennst du es?'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Richtig! Das heißt Trajekt-Modell.'",
              score: 3,
              feedback: "Sehr gut beobachtet! Du erkennst das Muster. Das Trajekt-Modell (Corbin & Strauss) beschreibt genau das: Chronische Krankheiten verlaufen in Phasen — stabil, instabil, Krise, Erholung. Die Pflege passt sich jeder Phase an.",
              feedbackB1: "Sehr gut! Du erkennst das Muster. Chronische Krankheiten haben Phasen. Das Trajekt-Modell erklärt das.",
            },
            {
              text: "Könnte es sein, dass Frau Krüger ihre Medikamente nicht richtig nimmt? Soll ich mal nachfragen, ob sie alles regelmäßig einnimmt?",
              textB1: "Vielleicht nimmt Frau Krüger die Medikamente nicht richtig. Soll ich sie fragen?",
              patientResponse: "Die Praxisanleiterin sagt: 'Medikamenten-Compliance ist wichtig, aber das allein erklärt nicht den typischen Verlauf einer chronischen Krankheit.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Medikamente sind wichtig, aber das erklärt nicht alles.'",
              score: 2,
              feedback: "Medikamenten-Compliance prüfen ist praktisch sinnvoll und zeigt Initiative. Aber Schwankungen sind bei chronischen Erkrankungen normal — auch bei perfekter Medikamenteneinnahme. Das Trajekt-Modell erklärt: Phasen gehören zum Verlauf dazu.",
              feedbackB1: "Medikamente prüfen ist gut gedacht, aber Schwankungen sind bei chronischen Krankheiten normal — auch mit Medikamenten.",
            },
            {
              text: "Ehrlich gesagt macht mich das traurig. Sie wird doch nicht mehr gesund, oder? Bei chronisch wird es doch nur schlechter.",
              textB1: "Das macht mich traurig. Chronische Krankheiten werden doch immer nur schlechter, oder?",
              patientResponse: "Die Praxisanleiterin schüttelt den Kopf: 'So einfach ist es nicht. Es gibt auch stabile Phasen und Erholung.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Nein, es gibt auch gute Phasen.'",
              score: 1,
              feedback: "Das stimmt nicht! Chronisch heißt nicht nur Verschlechterung. Das Trajekt-Modell zeigt: Es gibt auch stabile Phasen und Erholung. Pflege kann aktiv dazu beitragen, stabile Phasen zu verlängern.",
              feedbackB1: "Falsch! Chronisch heißt nicht immer schlechter. Es gibt auch gute Phasen. Pflege kann helfen.",
            },
          ],
        },
        {
          context: "Die Praxisanleiterin hat das Trajekt-Modell erklärt. Yasemin fragt: 'Was bedeutet das konkret für unsere Pflege bei Frau Krüger? Sie ist gerade instabil.'",
          contextB1: "Yasemin fragt: 'Was machen wir bei Frau Krüger? Sie ist gerade in einer schlechten Phase.'",
          speaker: "Praxisanleiterin",
          options: [
            {
              text: "Dann sollten wir jetzt genauer hinschauen, oder? Ich würde öfter nach ihr sehen, ihre Symptome beobachten und auch fragen, wie es ihr emotional geht.",
              textB1: "Dann muss ich jetzt öfter nach ihr schauen, oder? Und fragen, wie es ihr geht.",
              patientResponse: "Die Praxisanleiterin nickt: 'Genau. Und wenn sie wieder stabil ist, steht Beratung und Selbstmanagement im Vordergrund. Die Pflege ändert sich mit der Phase.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Richtig. Wenn es besser wird, beraten wir sie mehr.'",
              score: 3,
              feedback: "Perfekt! In jeder Phase sind andere Interventionen nötig: Instabil = engere Beobachtung + Symptomkontrolle. Stabil = Beratung + Selbstmanagement. Krise = Akutversorgung. Die Pflege begleitet durch alle Phasen.",
              feedbackB1: "Richtig! Jede Phase braucht andere Pflege. Instabil = mehr aufpassen. Stabil = beraten.",
            },
            {
              text: "Soll ich den Arzt informieren? Wenn es ihr schlechter geht, brauchen wir vielleicht neue Anordnungen.",
              textB1: "Soll ich den Arzt rufen? Vielleicht brauchen wir neue Anordnungen.",
              patientResponse: "Die Praxisanleiterin sagt: 'Den Arzt informieren ja — aber Pflege hat eine eigene Verantwortung in jeder Phase.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Arzt informieren ja, aber Pflege hat eigene Aufgaben.'",
              score: 2,
              feedback: "Ärztliche Information ist wichtig und dein Instinkt ist richtig. Aber Pflege ist mehr als Arztanordnungen ausführen. Das Trajekt-Modell zeigt: Pflege hat eine eigenständige Rolle in jeder Phase — von der Beobachtung bis zur emotionalen Begleitung.",
              feedbackB1: "Arzt informieren ist richtig, aber Pflege hat auch eigene wichtige Aufgaben.",
            },
            {
              text: "Das ist frustrierend. Wenn es ihr sowieso immer wieder schlechter geht, was können wir dann überhaupt tun?",
              textB1: "Das ist frustrierend. Wenn es immer wieder schlecht wird — was können wir tun?",
              patientResponse: "Die Praxisanleiterin sagt ernst: 'Abwarten ist nie eine Option. Pflege begleitet aktiv — in jeder Phase.'",
              patientResponseB1: "Die Praxisanleiterin sagt: 'Abwarten geht nicht. Pflege ist immer aktiv.'",
              score: 1,
              feedback: "Abwarten widerspricht dem pflegerischen Auftrag! Gerade in instabilen Phasen ist Pflege besonders wichtig: Engmaschige Beobachtung, Symptommanagement, emotionale Unterstützung. Pflege begleitet durch alle Phasen aktiv.",
              feedbackB1: "Nein! Pflege wartet nicht ab. Gerade in schlechten Phasen ist Pflege besonders wichtig.",
            },
          ],
        },
      ],
      patientName: "Yasemin Demirci",
    },
  },

  // =============================================================
  // Step 14: Text — Trajekt-Modell (ERKLÄRUNG)
  // =============================================================
  {
    stepId: "le01-s6-tb12-02",
    phase: "s6",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q4 S.129-131"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Corbin & Strauss: Das Trajekt-Modell",
      body: "Das Trajekt-Modell (auch: Verlaufskurvenmodell) beschreibt, wie chronische Krankheiten verlaufen. Der Verlauf ist keine gerade Linie — er ist eine **Kurve mit Phasen**:\n\n1. **Vorphase** — Risikofaktoren bestehen, aber keine Symptome\n2. **Diagnose** — Krankheit wird festgestellt\n3. **Stabil** — Symptome sind unter Kontrolle\n4. **Instabil** — Symptome schwanken, Anpassung nötig\n5. **Akut/Krise** — Lebensbedrohliche Verschlechterung\n6. **Erholung** — Verbesserung nach Krise\n7. **Verfall** — Fortschreitende Verschlechterung\n8. **Sterben** — Letzte Lebensphase\n\n**Pflege begleitet alle Phasen.** In jeder Phase sind andere Interventionen nötig: In der stabilen Phase steht Beratung im Vordergrund, in der Krise die Akutversorgung.",
      fallbezug: "Frau Krüger befindet sich gerade zwischen \"instabil\" und \"akut\". Yasemin versteht: Das ist nicht ungewöhnlich bei chronischer Herzinsuffizienz.",
    },
    contentB1: {
      title: "Das Verlaufskurven-Modell",
      body: "Chronische Krankheiten verlaufen in Phasen:\n\n1. **Noch gesund** — Risiko besteht, aber keine Beschwerden\n2. **Diagnose** — Krankheit wird festgestellt\n3. **Stabil** — Es geht gut, alles unter Kontrolle\n4. **Instabil** — Mal besser, mal schlechter\n5. **Krise** — Sehr schlecht, Gefahr für das Leben\n6. **Erholung** — Es wird wieder besser\n7. **Verfall** — Es wird langsam schlechter\n8. **Sterben** — Letzte Phase des Lebens\n\nPflege passt sich jeder Phase an.",
      fallbezug: "Frau Krüger ist gerade instabil. Yasemin versteht jetzt: Das ist normal bei chronischer Krankheit.",
    },
  },

  // =============================================================
  // Step 15: Timeline — Benner: Novize bis Expertin (ERKLÄRUNG)
  // =============================================================
  {
    stepId: "le01-s6-tb12-03",
    phase: "s6",
    stepType: "timeline",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q12 Benner 2012"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Benner: Vom Neuling zur Expertin",
      body: "Patricia Benner beschreibt 5 Stufen der Pflegekompetenz. Wo stehst du gerade?",
    },
    contentB1: {
      title: "5 Stufen in der Pflege",
      body: "So entwickelt sich eine Pflegekraft weiter. Schau dir die 5 Stufen an.",
    },
    question: {
      fragetext: "Die 5 Stufen nach Benner (1984):",
      timelineEvents: [
        { year: "Stufe 1", title: "Neuling (Novize)", description: "Handelt nach festen Regeln. Braucht klare Anweisungen. Hat noch keine Erfahrung.", icon: "baby" },
        { year: "Stufe 2", title: "Fortgeschrittene Anfängerin", description: "Erkennt erste Situationsmuster. Kann ähnliche Fälle vergleichen. Braucht noch Unterstützung.", icon: "sprout" },
        { year: "Stufe 3", title: "Kompetente Pflegende", description: "Setzt Prioritäten. Plant vorausschauend. Übernimmt Verantwortung.", icon: "target" },
        { year: "Stufe 4", title: "Erfahrene Pflegende", description: "Erfasst Situationen ganzheitlich. Erkennt Abweichungen sofort. Handelt flexibel.", icon: "eye" },
        { year: "Stufe 5", title: "Expertin", description: "Handelt intuitiv-richtig. Erfasst komplexe Situationen auf einen Blick. Jahre praktischer Erfahrung.", icon: "award" },
      ],
    },
  },

  // =============================================================
  // Step 16: MC — Benner/Trajekt (CHECKPOINT)
  // =============================================================
  {
    stepId: "le01-s6-tb12-04",
    phase: "s6",
    stepType: "mc",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q12 Benner 2012", "Q4 S.129-131"],
    track: "basis",
    modus: "challenge",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "CHECKPOINT",
    contentC1: {
      title: "Kurzer Check!",
      body: "Was kennzeichnet Benners Expertin?",
    },
    contentB1: {
      title: "Kurzer Check!",
      body: "Wie handelt eine Pflege-Expertin nach Benner?",
    },
    question: {
      fragetext: "Was ist das wichtigste Merkmal einer Pflege-Expertin nach Benner?",
      options: [
        { text: "Sie handelt intuitiv-richtig auf Basis jahrelanger Erfahrung", isCorrect: true, explanation: "Richtig! Die Expertin erfasst komplexe Situationen ganzheitlich und handelt intuitiv-richtig — ohne erst Regeln durchgehen zu müssen. Das braucht Jahre praktischer Erfahrung." },
        { text: "Sie kennt alle Pflegetheorien auswendig", isCorrect: false, explanation: "Theoriewissen ist wichtig, aber Benners Modell betont die praktische Erfahrung. Die Expertin erkennt Muster, die in keinem Lehrbuch stehen." },
        { text: "Sie folgt immer den Regeln und Leitlinien", isCorrect: false, explanation: "Das beschreibt eher den Neuling (Stufe 1). Die Expertin kann von Regeln abweichen, wenn die Situation es erfordert — intuitiv-richtig." },
        { text: "Sie arbeitet am schnellsten", isCorrect: false, explanation: "Geschwindigkeit ist kein Kriterium bei Benner. Es geht um die Qualität der Wahrnehmung und Entscheidung." },
      ],
    },
  },

  // =============================================================
  // Step 17: Text — Leininger: Transkulturelle Pflege (ERKLÄRUNG)
  // =============================================================
  {
    stepId: "le01-s6-tb12-05",
    phase: "s6",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q4 S.133-135"],
    track: "basis",
    modus: "entdecker",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "ERKLÄRUNG",
    contentC1: {
      title: "Leininger: Pflege und Kultur",
      body: "Madeleine Leininger entwickelte die Theorie der kulturspezifischen Fürsorge — das **Sunrise-Modell**.\n\nKernaussage: Kultur beeinflusst, wie Menschen Gesundheit und Krankheit erleben. Pflege muss kulturelle Besonderheiten berücksichtigen.\n\n**Was Kultur beeinflusst:**\n- Gesundheitsverständnis (Was ist \"krank\"?)\n- Schmerzerleben und Schmerzausdruck\n- Ernährungsgewohnheiten und Nahrungstabus\n- Körperpflege und Schamgrenzen\n- Sterberituale und Trauer\n\n**Kulturkongruente Pflege** bedeutet: Pflege so gestalten, dass sie zur Kultur des Patienten passt — nicht den Patienten an die Pflege anpassen.\n\nAber: Kulturelle Praktiken, die dem Patienten schaden, dürfen nicht unkritisch übernommen werden.",
      fallbezug: "Yasemin erinnert sich an Herrn Al-Rashid: Er lehnte Körperpflege durch eine Frau ab. Leininger würde sagen: Das ist eine kulturelle Präferenz, die respektiert werden muss.",
    },
    contentB1: {
      title: "Pflege und Kultur",
      body: "Leininger sagt: Die Kultur beeinflusst, wie Menschen Krankheit erleben.\n\n**Kultur beeinflusst z.B.:**\n- Was man unter \"krank\" versteht\n- Wie man Schmerzen zeigt\n- Was man essen darf\n- Wer den Körper berühren darf\n\nGute Pflege passt sich an die Kultur an. Aber: Wenn eine Tradition dem Patienten schadet, muss man darüber sprechen.",
      fallbezug: "Yasemin denkt an Herrn Al-Rashid: Er wollte keine Frau für die Körperpflege. Das war eine kulturelle Grenze — und sie war richtig.",
    },
  },

  // =============================================================
  // Step 18: Text — Patientenperspektive: Frau Krüger (PATIENTEN_PERSPEKTIVE)
  // =============================================================
  {
    stepId: "le01-s6-tb12-06",
    phase: "s6",
    stepType: "text",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q4 S.129-131"],
    track: "basis",
    modus: "story",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "PATIENTEN_PERSPEKTIVE",
    contentC1: {
      title: "Aus Frau Krügers Sicht",
      body: "\"Ich bin jetzt seit 4 Jahren herzkrank. Am Anfang dachte ich, die Tabletten machen alles wieder gut. Aber dann kamen die schlechten Phasen — mal konnte ich kaum atmen, mal ging es wochenlang gut.\n\nDas Schlimmste ist die Ungewissheit. Wie wird es morgen sein? Nächste Woche?\n\nDie Pflegekräfte, die mich kennen, merken sofort, wenn es mir schlechter geht — manchmal bevor ich es selbst merke. Eine Schwester hat mir erklärt, dass chronische Krankheit in Phasen verläuft. Das hat mir geholfen zu verstehen: Es ist nicht meine Schuld, wenn es mal schlechter wird.\n\nWas ich mir wünsche: Dass jemand mit mir spricht — nicht nur über meine Medikamente, sondern über mein Leben mit dieser Krankheit.\"",
      fallbezug: "Frau Krüger zeigt: Pflege bei chronischer Krankheit bedeutet Begleitung über alle Phasen — nicht nur Medikamente geben.",
    },
    contentB1: {
      title: "Frau Krüger erzählt",
      body: "\"Ich bin seit 4 Jahren herzkrank. Manchmal geht es mir gut, manchmal schlecht. Das Schlimmste ist: Ich weiß nie, wie morgen wird.\n\nEine Pflegerin hat mir erklärt: Chronische Krankheit hat Phasen. Mal stabil, mal instabil. Das hat mir geholfen zu verstehen.\n\nIch wünsche mir: Jemand, der mit mir über mein Leben spricht — nicht nur über Tabletten.\"",
      fallbezug: "Frau Krüger zeigt: Pflege ist mehr als Medikamente. Es geht um Begleitung.",
    },
  },

  // =============================================================
  // Step 19: Branching — Kulturelle Pflegesituation (ANWENDUNG)
  // =============================================================
  {
    stepId: "le01-s6-tb12-07",
    phase: "s6",
    stepType: "branching",
    bloomLevel: 3,
    kompetenzbereich: "KB-II",
    quellen: ["Q4 S.133-135"],
    track: "basis",
    modus: "praxis-sim",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Kulturelle Pflege in der Praxis",
      body: "Frau Yilmaz, 72, wurde mit einer Oberschenkelhalsfraktur aufgenommen. Ihre Tochter besteht darauf, bei ihr zu übernachten und alles selbst zu machen — auch die Körperpflege. Die Nachtwache beschwert sich.",
      fallbezug: "Yasemin erinnert sich an Leininger: Kultur beeinflusst, wie Pflege erlebt wird.",
    },
    contentB1: {
      title: "Pflege und Familie",
      body: "Frau Yilmaz ist 72 und hat sich den Oberschenkel gebrochen. Ihre Tochter will alles selbst machen. Die Nachtwache beschwert sich darüber.",
      fallbezug: "Yasemin denkt: Wie geht man mit kulturellen Unterschieden um?",
    },
    question: {
      fragetext: "Wie gehst du mit dieser Situation um?",
      branchingOptions: [
        {
          text: "Die Tochter einbeziehen: Gemeinsam besprechen, welche Aufgaben sie übernehmen kann und welche die Pflege machen muss.",
          feedback: "Kulturkongruente Pflege nach Leininger: Die Familie wird als Ressource einbezogen. Medizinisch notwendige Maßnahmen (z.B. Thromboseprophylaxe) erklärt die Pflegekraft, die Tochter übernimmt die Körperpflege.",
          feedbackB1: "Gut! Die Familie einbeziehen ist richtig. Die Tochter kann die Körperpflege machen, aber medizinische Dinge macht die Pflege.",
          isCorrect: true,
        },
        {
          text: "Der Tochter erklären, dass in Deutschland die Pflegekräfte die Pflege übernehmen — so sind die Regeln.",
          feedback: "Das klingt nach 'In Deutschland machen wir das so'. Leininger würde sagen: Das ignoriert die kulturelle Bedeutung von Familienpflege in vielen Kulturen. Es verletzt die Autonomie.",
          feedbackB1: "Das ist nicht gut. Man darf nicht einfach sagen 'Bei uns ist das so'. Man muss die Kultur respektieren.",
          isCorrect: false,
        },
        {
          text: "Die Tochter machen lassen und sich nicht einmischen.",
          feedback: "Die Familie einbeziehen ist richtig — aber komplett zurückziehen ist gefährlich. Professionelle Pflege muss sicherstellen, dass medizinische Maßnahmen (Thromboseprophylaxe, Wundkontrolle) durchgeführt werden.",
          feedbackB1: "Die Tochter einbeziehen ist gut, aber die Pflege muss trotzdem wichtige medizinische Aufgaben machen.",
          isCorrect: false,
        },
      ],
    },
  },

  // =============================================================
  // Step 20: Freetext — Reflexion Kultur (REFLEXION)
  // =============================================================
  {
    stepId: "le01-s6-tb12-08",
    phase: "s6",
    stepType: "freetext",
    bloomLevel: 4,
    kompetenzbereich: "KB-II",
    quellen: ["Q4 S.133-135"],
    track: "vertiefung",
    modus: "schreibtisch",
    lernziel: "ce01-le01-pflegebeziehung",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Deine Reflexion",
      body: "Denke über kulturelle Unterschiede in der Pflege nach.",
    },
    contentB1: {
      title: "Was denkst du?",
      body: "Schreibe deine Gedanken über Kultur und Pflege.",
    },
    question: {
      fragetext: "Beschreibe eine Situation, in der kulturelle Unterschiede die Pflege beeinflussen könnten. Was würdest du als Pflegefachkraft tun?",
      musterantwort: "Kulturelle Unterschiede können sich z.B. in der Körperpflege zeigen (Schamgrenzen), bei der Ernährung (Nahrungstabus), beim Schmerzausdruck oder bei Sterberitualen. Als Pflegefachkraft würde ich zuerst fragen, was der Patient/die Familie sich wünscht, dann gemeinsam eine Lösung finden und medizinisch notwendige Maßnahmen erklären.",
      bewertungskriterien: [
        "Konkretes Beispiel genannt",
        "Respekt vor kulturellen Unterschieden erkennbar",
        "Professionelle Lösung vorgeschlagen",
      ],
      satzanfaengeB1: [
        "Eine Situation könnte sein...",
        "Als Pflegekraft würde ich...",
        "Wichtig ist, dass...",
      ],
    },
  },

  // =============================================================
  // Step 21: Memory — Begriffe-Puzzle (ANWENDUNG)
  // =============================================================
  {
    stepId: "le01-s6-bk-01",
    phase: "s6",
    stepType: "memory",
    bloomLevel: 2,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "vertiefung",
    modus: "puzzle",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "ANWENDUNG",
    contentC1: {
      title: "Begriffe-Memory",
      body: "Finde die passenden Paare: Theoretiker/Konzept und Beschreibung.",
    },
    contentB1: {
      title: "Memory-Spiel",
      body: "Finde die Paare! Wer oder was gehört zusammen?",
    },
    question: {
      fragetext: "Finde die 6 Paare:",
      pairs: [
        { a: "Evidence-based Nursing", b: "Evidenz + Expertise + Patientenpräferenzen" },
        { a: "Corbin & Strauss", b: "Trajekt-Modell (Verlaufskurve)" },
        { a: "Benner", b: "Vom Neuling zur Expertin (5 Stufen)" },
        { a: "Leininger", b: "Transkulturelle Pflege (Sunrise-Modell)" },
        { a: "Mikro-Ebene", b: "Pflegepraxis am Patientenbett" },
        { a: "Strukturiertes Wissen", b: "Logisches Denken + Forschen" },
      ],
    },
  },

  // =============================================================
  // Step 22: Summary — Session-Abschluss
  // =============================================================
  {
    stepId: "le01-s6-bk-02",
    phase: "s6",
    stepType: "summary",
    bloomLevel: 3,
    kompetenzbereich: "KB-V",
    quellen: [],
    track: "basis",
    modus: "checkpoint",
    lernziel: "ce01-le01-pflegewissenschaft",
    themenblockPhase: "REFLEXION",
    contentC1: {
      title: "Das hast du heute gelernt",
      body: "Session 6 ist geschafft! Hier sind deine wichtigsten Erkenntnisse.",
    },
    contentB1: {
      title: "Zusammenfassung",
      body: "Das hast du heute gelernt. Gut gemacht!",
    },
    question: {
      fragetext: "Deine Kernaussagen aus Session 6:",
      summaryPoints: [
        "**Pflegewissenschaft** erforscht die Pflegepraxis für die Pflegepraxis — auf 3 Ebenen: Mikro, Meso, Makro.",
        "**EBN** verbindet externe Evidenz + klinische Expertise + Patientenpräferenzen. Tradition allein reicht nicht.",
        "**Corbin & Strauss** beschreiben chronische Krankheit als Verlaufskurve mit Phasen — Pflege begleitet alle Phasen.",
        "**Benner** zeigt 5 Stufen der Pflegekompetenz: vom Neuling (regelgeleitet) zur Expertin (intuitiv-richtig).",
        "**Leininger** fordert kulturkongruente Pflege: Kultur respektieren, aber Patient nicht gefährden.",
      ],
    },
  },
];

// CE-04 Thema Kommunikationsmodelle — Wissensbausteine (5 Bausteine, 3 Stufen)
// Lernergebnis-First (Build-Plan: specs/ce-04/kommunikation-build-plan.md)
// Deckt: LE1-W1 (Modelle herausstellen), LE1-W3 (verbal/nonverbal erklären), LE1-E2 (Modell/Situation einschätzen diskutieren)
// Quelle: recherche/kommunikation-gesundheitswesen-volltext/ (verbatim belegt)

import type { Wissensbaustein } from "../../../_types";

export const CE04_THEMA_KOMMUNIKATIONSMODELLE_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: sender-empfaenger-modell (Bloom 2) — LE1-W1/W3
  // ═══════════════════════════════════════════
  {
    bausteinId: "kommunikationsmodelle-sender-empfaenger",
    themaId: "kommunikationsmodelle",
    titel: "Das Sender-Empfänger-Modell: Wie eine Nachricht ankommt",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du sagst einer Kollegin im lauten Stationsflur etwas Wichtiges, und sie versteht das Gegenteil. Wo überall auf dem Weg vom Gedanken bis zu ihrem Verständnis kann die Nachricht 'kaputtgehen'?",
      antwort:
        "Im Sender-Empfänger-Modell (Transmissionsmodell) durchläuft eine Nachricht: Informationsquelle (Gedanke) → Kodierung (in Worte/Tonfall fassen) → Signal über einen Kanal (Sprache) → Dekodierung beim Empfänger → Verständnis → Rückmeldung. An jeder Station kann eine Störung auftreten (Lärm, falsche Wortwahl, Missverständnis). Darum ist die Rückmeldung so wichtig. (Kommunikation im Gesundheitswesen, Kap. 1)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das Sender-Empfänger- bzw. Transmissionsmodell beschreibt Kommunikation als Übertragung: Informationsquelle → Sender (kodiert die Nachricht in Worte/Tonfall) → Signal über einen Kanal (z.B. Sprache, Telefon) → Empfänger (dekodiert) → Rückmeldung. Auf dem Weg können Störquellen die Nachricht verfälschen. In dialogischen Gesprächen wechseln Sender und Empfänger ständig die Rollen. (Kommunikation im Gesundheitswesen, Kap. 1)",
      textB1:
        "Das Sender-Empfänger-Modell zeigt: Eine Nachricht wird vom Sender in Worte und Tonfall verpackt (kodiert), über einen Kanal (z.B. Sprache) gesendet, und der Empfänger packt sie wieder aus (dekodiert). Dann gibt er eine Rückmeldung. Unterwegs kann etwas stören (Lärm, falsche Worte). Im Gespräch tauschen beide ständig die Rollen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-kommmodelle-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 1 (Transmissionsmodell / Sender-Empfänger-Modell, Shannon & Weaver)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-kommmodelle-sender-empfaenger",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Das Sender-Empfänger-Modell",
          body: "Das **Sender-Empfänger-Modell** (auch **Transmissionsmodell**, nach Shannon & Weaver) ist das Grundmodell der Kommunikation. Es versteht Kommunikation als **Übertragung einer Nachricht** von einem Sender zu einem Empfänger (Kommunikation im Gesundheitswesen, Kap. 1).\n\n**Die Stationen einer Nachricht:**\n1. **Informationsquelle** — der Gedanke/die Absicht (z.B. im Gehirn)\n2. **Sender** — der Sprechende; er **kodiert** die Nachricht (verpackt sie in Worte, Tonfall, Mimik)\n3. **Signal** über einen **Kanal** — die Nachricht wird übertragen (Sprache, Telefon, Schrift)\n4. **Empfänger** — der Hörende; er **dekodiert** die Nachricht (entschlüsselt Worte und Tonfall)\n5. **Rückmeldung (Feedback)** — der Empfänger reagiert; so wird er selbst zum Sender\n\n**Störquellen:** An jeder Station kann die Nachricht verfälscht werden — Umgebungslärm, ungünstige Wortwahl, ein anderes Vorverständnis. Deshalb ist die **Rückmeldung** entscheidend: Nur sie zeigt, ob die Nachricht so ankam, wie sie gemeint war.\n\n**In der Pflege:** Im Gespräch wechseln **Sender und Empfänger ständig die Rollen**. Wer das Modell kennt, prüft aktiv: Ist meine Nachricht klar kodiert? Habe ich den Kanal (laut/leise, Zeit/Ruhe) im Griff? Hole ich mir eine Rückmeldung? (Kommunikation im Gesundheitswesen, Kap. 1)",
          glossarBegriffe: ["Sender-Empfänger-Modell", "Kodierung", "Rückmeldung (Feedback)"],
        },
        contentB1: {
          title: "Das Sender-Empfänger-Modell",
          body: "Das **Sender-Empfänger-Modell** ist das Grundmodell der Kommunikation. Eine Nachricht wird von einer Person zur anderen **übertragen** (Kommunikation im Gesundheitswesen, Kap. 1).\n\n**So läuft eine Nachricht:**\n1. **Gedanke** — was du sagen willst\n2. **Sender** — du **verpackst** den Gedanken in Worte und Tonfall (kodieren)\n3. **Kanal** — die Nachricht geht raus (Sprache, Telefon)\n4. **Empfänger** — die andere Person **packt aus** (dekodieren)\n5. **Rückmeldung** — sie antwortet; jetzt ist sie der Sender\n\n**Was stören kann:** Lärm, schlechte Worte, ein anderes Verständnis. Darum ist die **Rückmeldung** so wichtig: Nur so weißt du, ob deine Nachricht richtig ankam.\n\n**In der Pflege:** Im Gespräch wechseln beide ständig die Rolle. Frag dich: Sind meine Worte klar? Ist es ruhig genug? Hole ich mir eine Rückmeldung?",
          glossarBegriffe: ["Sender-Empfänger-Modell", "Kodierung", "Rückmeldung (Feedback)"],
        },
      },
    },
    glossarBegriffe: ["Sender-Empfänger-Modell", "Kodierung", "Rückmeldung (Feedback)"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: watzlawick-5-axiome (Bloom 4) — LE1-W1
  // ═══════════════════════════════════════════
  {
    bausteinId: "kommunikationsmodelle-watzlawick",
    themaId: "kommunikationsmodelle",
    titel: "Watzlawick: Die 5 Axiome der Kommunikation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient dreht sich bei der Visite wortlos zur Wand und schweigt. 'Er kommuniziert ja gar nicht', sagt ein Schüler. Stimmt das — oder sagt das Schweigen sehr wohl etwas?",
      antwort:
        "Es sagt sehr viel. Nach Watzlawicks 1. Axiom kann man nicht NICHT kommunizieren — jedes Verhalten (auch Schweigen, Wegdrehen) hat Mitteilungscharakter. Das Wegdrehen kommuniziert Rückzug, Ärger oder Erschöpfung. Watzlawick beschreibt 5 solcher Grundsätze (Axiome), die erklären, warum Kommunikation gelingt oder stört. (Kommunikation im Gesundheitswesen, Kap. 1)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Paul Watzlawick formulierte 5 Axiome (Grundsätze) der Kommunikation: 1) Man kann nicht nicht kommunizieren — jedes Verhalten ist Mitteilung. 2) Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt (was + wie). 3) Kommunikation wird durch individuelle Ereignisfolgen strukturiert (jeder setzt andere Ursache-Wirkung-Punkte → Interpunktion). 4) Kommunikation ist digital (verbal) und analog (nonverbal). 5) Kommunikation ist symmetrisch (gleichwertig) oder komplementär (ergänzend/ungleich). (Kommunikation im Gesundheitswesen, Kap. 1)",
      textB1:
        "Paul Watzlawick hat 5 Grundsätze (Axiome) der Kommunikation aufgestellt: 1) Man kann nicht NICHT kommunizieren — auch Schweigen sagt etwas. 2) Jede Nachricht hat einen Inhalt (was) und einen Beziehungs-Teil (wie). 3) Jeder sieht eine andere Ursache für einen Streit. 4) Wir reden mit Worten (digital) und mit Körper/Tonfall (analog). 5) Eine Beziehung ist gleichwertig (symmetrisch) oder ungleich (komplementär, z.B. Chef-Mitarbeiter).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-kommmodelle-wb-02",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 1 (5 Axiome der Kommunikation, Paul Watzlawick)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-kommmodelle-watzlawick",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Watzlawick: Die 5 Axiome der Kommunikation",
          body: "**Paul Watzlawick** beschrieb 5 **Axiome** (Grundsätze) der Kommunikation. Sie erklären, warum Kommunikation gelingt — oder in ungünstige Muster kippt (Kommunikation im Gesundheitswesen, Kap. 1):\n\n**1. Man kann nicht nicht kommunizieren.**\nJedes Verhalten in einer Interaktion hat Mitteilungscharakter — auch Schweigen, Wegdrehen, Nichtreagieren. *Pflege:* Der wortlose Patient teilt sehr wohl etwas mit.\n\n**2. Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt.**\n*Was* wird gesagt (Inhalt) und *wie* (Beziehung). Der Beziehungsaspekt bestimmt, wie der Inhalt verstanden wird. *Pflege:* 'Nehmen Sie die Tablette' kann fürsorglich oder herablassend klingen — gleicher Inhalt, andere Beziehung.\n\n**3. Kommunikation strukturiert sich durch individuelle Ereignisfolgen (Interpunktion).**\nJeder gewichtet Ursachen und Auslöser anders ('Ich ziehe mich zurück, weil du nörgelst' — 'Ich nörgle, weil du dich zurückziehst'). So entsteht ein zirkulärer Prozess, der Kommunikation stören kann.\n\n**4. Kommunikation ist digital UND analog.**\n**Digital = verbal** (die Worte), **analog = nonverbal** (Mimik, Gestik, Tonfall). Die analogen Elemente werden sehr schnell wahrgenommen, die digitalen sind leichter zu verfälschen. Beide ergänzen sich.\n\n**5. Kommunikation ist symmetrisch oder komplementär.**\n**Symmetrisch** = auf Gleichwertigkeit angelegt (zwei Kollegen). **Komplementär** = auf Unterschiedlichkeit/Ergänzung (Pflegekraft–Patient, Vorgesetzte–Auszubildende). *Pflege:* Viele Pflegebeziehungen sind komplementär — das ist nicht schlecht, aber man sollte es wissen (➔ asymmetrische Kommunikation).\n\nDieses Modell ist eines der bekanntesten zur **Erklärung von Kommunikationsstörungen**. (Kommunikation im Gesundheitswesen, Kap. 1)",
          glossarBegriffe: ["Axiom", "Inhalts- und Beziehungsaspekt", "Interpunktion", "symmetrische/komplementäre Kommunikation"],
        },
        contentB1: {
          title: "Watzlawick: Die 5 Grundsätze der Kommunikation",
          body: "**Paul Watzlawick** hat 5 **Grundsätze (Axiome)** der Kommunikation beschrieben. Sie erklären, warum Reden gelingt oder schiefgeht (Kommunikation im Gesundheitswesen, Kap. 1):\n\n**1. Man kann nicht NICHT kommunizieren.**\nJedes Verhalten sagt etwas — auch Schweigen oder Wegdrehen. *Pflege:* Der stille Patient teilt etwas mit.\n\n**2. Jede Nachricht hat einen Inhalt UND eine Beziehung.**\n*Was* du sagst und *wie* du es sagst. 'Nehmen Sie die Tablette' kann nett oder von oben herab klingen — gleicher Inhalt, andere Beziehung.\n\n**3. Jeder sieht eine andere Ursache.**\n'Ich ziehe mich zurück, weil du nörgelst' — 'Ich nörgle, weil du dich zurückziehst'. So dreht sich ein Streit im Kreis.\n\n**4. Wir reden mit Worten UND mit dem Körper.**\n**Digital = Worte**, **analog = Mimik, Gestik, Tonfall**. Den Körper sehen wir sehr schnell. Beides gehört zusammen.\n\n**5. Gleichwertig oder ungleich.**\n**Symmetrisch** = beide gleich (zwei Kollegen). **Komplementär** = ungleich (Pflegekraft–Patient, Chef–Azubi). Viele Pflege-Beziehungen sind ungleich — das ist normal, aber gut zu wissen.",
          glossarBegriffe: ["Axiom", "Inhalts- und Beziehungsaspekt", "Interpunktion", "symmetrische/komplementäre Kommunikation"],
        },
      },
    },
    glossarBegriffe: ["Axiom", "Inhalts- und Beziehungsaspekt", "Interpunktion", "symmetrische/komplementäre Kommunikation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: schulz-von-thun-vier-ohren (Bloom 4) — LE1-W1
  // ═══════════════════════════════════════════
  {
    bausteinId: "kommunikationsmodelle-schulz-von-thun",
    themaId: "kommunikationsmodelle",
    titel: "Schulz von Thun: Das Vier-Ohren-Modell",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du sagst einer Patientin: 'Ihr Mittagessen steht seit einer Stunde kalt da.' Sie antwortet gereizt: 'Soll ich jetzt ein schlechtes Gewissen haben?' Ihr habt über dieselbe Aussage geredet — warum die heftige Reaktion?",
      antwort:
        "Weil jede Nachricht vier Seiten hat (Schulz von Thun) und die Patientin mit einem anderen 'Ohr' gehört hat. Du meintest vielleicht den Sachinhalt ('das Essen ist kalt') oder einen Appell ('soll ich neues holen?'). Sie hörte mit dem Beziehungsohr einen Vorwurf. Das Vier-Ohren-Modell erklärt genau solche Missverständnisse. (Kommunikation im Gesundheitswesen, Kap. 1)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das Vier-Ohren-Modell (Kommunikationsquadrat, Friedemann Schulz von Thun) sagt: Jede Nachricht hat vier Seiten. Der Sender spricht mit 'vier Schnäbeln', der Empfänger hört mit 'vier Ohren': 1) Sachinhalt (worüber informiert wird), 2) Selbstoffenbarung/Selbstkundgabe (was der Sender über sich zeigt), 3) Beziehung (wie der Sender zum Empfänger steht), 4) Appell (was getan werden soll). Missverständnisse entstehen, wenn Sender und Empfänger verschiedene Seiten betonen. (Kommunikation im Gesundheitswesen, Kap. 1)",
      textB1:
        "Das Vier-Ohren-Modell von Friedemann Schulz von Thun sagt: Jede Nachricht hat vier Seiten. Der Sender spricht mit 'vier Schnäbeln', der Empfänger hört mit 'vier Ohren': 1) Sachinhalt (die Information), 2) Selbstkundgabe (was der Sender über sich zeigt), 3) Beziehung (wie er zum anderen steht), 4) Appell (was passieren soll). Missverständnisse kommen, wenn beide eine andere Seite betonen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-kommmodelle-wb-03",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 1 (Vier-Ohren-Modell / Kommunikationsquadrat, Friedemann Schulz von Thun)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-kommmodelle-schulz-von-thun",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Schulz von Thun: Das Vier-Ohren-Modell",
          body: "Das **Vier-Ohren-Modell** (auch **Kommunikationsquadrat**) von **Friedemann Schulz von Thun** ist eines der praxisnächsten Modelle. Es greift Watzlawicks Beziehungsaspekt auf und erweitert ihn: **Jede Nachricht hat vier Seiten** — der Sender spricht mit 'vier Schnäbeln', der Empfänger hört mit 'vier Ohren' (Kommunikation im Gesundheitswesen, Kap. 1).\n\n**Die vier Seiten einer Nachricht:**\n1. **Sachinhalt** — worüber informiert wird (die reine Information)\n2. **Selbstoffenbarung / Selbstkundgabe** — was der Sender über sich selbst zeigt (Gefühle, Werte, Zustand)\n3. **Beziehung** — was die Nachricht über das Verhältnis von Sender und Empfänger aussagt\n4. **Appell** — was der Empfänger tun oder wie er reagieren soll\n\n**Warum das Missverständnisse erklärt:** Sender und Empfänger können **unterschiedliche Seiten betonen**. Beispiel: 'Ihr Essen steht seit einer Stunde kalt da.'\n- Sach-Ohr: *Das Essen ist kalt.*\n- Appell-Ohr: *Soll ich neues holen?*\n- Beziehungs-Ohr: *Du kümmerst dich nicht um mich.* (→ gereizte Reaktion)\n- Selbstkundgabe: *Ich bin in Sorge, dass du zu wenig isst.*\n\n**In der Pflege:** Wer das Modell kennt, kann ein **'überempfindliches Beziehungsohr'** beim Patienten erkennen und bewusst auf der Sach- oder Selbstkundgabe-Ebene nachsteuern ('Ich frage, weil ich mir Sorgen mache, dass Sie zu wenig essen'). Das entschärft Konflikte, bevor sie entstehen. (Kommunikation im Gesundheitswesen, Kap. 1)",
          glossarBegriffe: ["Vier-Ohren-Modell", "Sachinhalt", "Selbstoffenbarung", "Appell"],
        },
        contentB1: {
          title: "Schulz von Thun: Das Vier-Ohren-Modell",
          body: "Das **Vier-Ohren-Modell** (auch **Kommunikationsquadrat**) von **Friedemann Schulz von Thun** ist sehr praktisch. **Jede Nachricht hat vier Seiten** — der Sender spricht mit 'vier Schnäbeln', der Empfänger hört mit 'vier Ohren' (Kommunikation im Gesundheitswesen, Kap. 1).\n\n**Die vier Seiten:**\n1. **Sachinhalt** — die reine Information\n2. **Selbstkundgabe** — was der Sender über sich zeigt (Gefühle, Zustand)\n3. **Beziehung** — wie der Sender zum anderen steht\n4. **Appell** — was der andere tun soll\n\n**Warum das Missverständnisse erklärt:** Beide betonen oft eine **andere Seite**. Beispiel: 'Ihr Essen steht seit einer Stunde kalt da.'\n- Sach-Ohr: *Das Essen ist kalt.*\n- Appell-Ohr: *Soll ich neues holen?*\n- Beziehungs-Ohr: *Du kümmerst dich nicht.* (→ gereizt!)\n- Selbstkundgabe: *Ich sorge mich, dass du zu wenig isst.*\n\n**In der Pflege:** Wenn ein Patient mit dem **Beziehungsohr** sehr empfindlich hört, kannst du bewusst die Sach- oder Gefühls-Seite betonen: 'Ich frage, weil ich mir Sorgen mache.' So vermeidest du Streit.",
          glossarBegriffe: ["Vier-Ohren-Modell", "Sachinhalt", "Selbstoffenbarung", "Appell"],
        },
      },
    },
    glossarBegriffe: ["Vier-Ohren-Modell", "Sachinhalt", "Selbstoffenbarung", "Appell"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: verbal-nonverbal-paraverbal (Bloom 2) — LE1-W3
  // ═══════════════════════════════════════════
  {
    bausteinId: "kommunikationsmodelle-verbal-nonverbal",
    themaId: "kommunikationsmodelle",
    titel: "Verbale, nonverbale und paraverbale Kommunikation",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Kollegin sagt mit verschränkten Armen, abgewandtem Blick und flachem Tonfall: 'Klar, alles gut.' Was glaubst du ihr — die Worte oder den Körper? Und warum?",
      antwort:
        "Den Körper. Kommunikation läuft über drei Kanäle: verbal (die Worte), nonverbal (Mimik, Gestik, Körperhaltung, Blick) und paraverbal (Tonfall, Lautstärke, Sprechtempo). Bei Widerspruch zwischen Worten und Körper glauben wir meist dem Nonverbalen — es wird schneller wahrgenommen und ist schwerer zu kontrollieren. (Kommunikation im Gesundheitswesen, Kap. 1)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Kommunikation hat drei Ebenen: verbal (gesprochene/geschriebene Worte), nonverbal (Mimik, Gestik, Körperhaltung, Blickkontakt, Abstand) und paraverbal (Tonfall, Lautstärke, Sprechtempo, Pausen). Watzlawick nennt verbal 'digital' und nonverbal 'analog'. Das Nonverbale/Analoge wird schnell wahrgenommen und wirkt stark; widersprechen sich Worte und Körper, glaubt der Empfänger meist dem Körper. (Kommunikation im Gesundheitswesen, Kap. 1)",
      textB1:
        "Kommunikation hat drei Ebenen: verbal (die Worte), nonverbal (Mimik, Gestik, Körperhaltung, Blick, Abstand) und paraverbal (Tonfall, Lautstärke, Tempo). Den Körper sehen wir sehr schnell. Wenn Worte und Körper sich widersprechen, glauben wir meist dem Körper.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-kommmodelle-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 1 (verbale/nonverbale Kommunikation, digital/analog)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce04-kommmodelle-verbal-nonverbal",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Verbale, nonverbale und paraverbale Kommunikation",
          body: "Kommunikation läuft nie nur über Worte. Drei Ebenen wirken immer zusammen (Kommunikation im Gesundheitswesen, Kap. 1):\n\n**1. Verbale Kommunikation** — die **gesprochenen oder geschriebenen Worte** (der Inhalt). Watzlawick nennt sie **digital**. Sie ist präzise, aber leicht zu verfälschen oder zu 'beschönigen'.\n\n**2. Nonverbale Kommunikation** — alles **Körpersprachliche**: Mimik (Gesichtsausdruck), Gestik (Hände), Körperhaltung, Blickkontakt, Abstand (Nähe/Distanz). Watzlawick nennt sie **analog**. Sie wird **sehr schnell wahrgenommen** und ist schwerer bewusst zu steuern.\n\n**3. Paraverbale Kommunikation** — das **Wie des Sprechens**: Tonfall, Lautstärke, Sprechtempo, Betonung, Pausen.\n\n**Die wichtigste Regel:** Widersprechen sich **Worte und Körper** ('Alles gut' mit verschränkten Armen und abgewandtem Blick), glaubt der Empfänger fast immer dem **Nonverbalen**.\n\n**In der Pflege:**\n- **Beobachten:** Die Körpersprache des Patienten verrät oft mehr als seine Worte (Schmerz, Angst, Scham).\n- **Selbst senden:** Deine eigene Mimik/Haltung muss zu deinen Worten passen — sonst wirkst du unglaubwürdig. Zugewandte Haltung, Blickkontakt auf Augenhöhe und ruhiger Tonfall schaffen Vertrauen. (Kommunikation im Gesundheitswesen, Kap. 1)",
          glossarBegriffe: ["verbale Kommunikation", "nonverbale Kommunikation", "paraverbale Kommunikation"],
        },
        contentB1: {
          title: "Verbale, nonverbale und paraverbale Kommunikation",
          body: "Kommunikation ist nie nur Worte. Drei Ebenen wirken zusammen (Kommunikation im Gesundheitswesen, Kap. 1):\n\n**1. Verbal** — die **Worte** (gesprochen oder geschrieben). Watzlawick sagt **digital**.\n\n**2. Nonverbal** — die **Körpersprache**: Mimik (Gesicht), Gestik (Hände), Körperhaltung, Blick, Abstand. Watzlawick sagt **analog**. Wir sehen sie **sehr schnell**.\n\n**3. Paraverbal** — das **Wie**: Tonfall, Lautstärke, Tempo, Pausen.\n\n**Wichtigste Regel:** Wenn **Worte und Körper** sich widersprechen ('Alles gut' mit verschränkten Armen), glauben wir dem **Körper**.\n\n**In der Pflege:**\n- **Beobachte** die Körpersprache des Patienten — sie zeigt oft Schmerz, Angst oder Scham, auch wenn er nichts sagt.\n- **Achte auf dich selbst:** Dein Gesicht und deine Haltung müssen zu deinen Worten passen. Zugewandt sein, Blickkontakt auf Augenhöhe, ruhiger Ton — das schafft Vertrauen.",
          glossarBegriffe: ["verbale Kommunikation", "nonverbale Kommunikation", "paraverbale Kommunikation"],
        },
      },
    },
    glossarBegriffe: ["verbale Kommunikation", "nonverbale Kommunikation", "paraverbale Kommunikation"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: modell-situation-einschaetzen (Bloom 5) — LE1-E2 (Reflexion/diskutieren)
  // ═══════════════════════════════════════════
  {
    bausteinId: "kommunikationsmodelle-situation-einschaetzen",
    themaId: "kommunikationsmodelle",
    titel: "Welches Modell hilft wann? Gesprächssituationen einschätzen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hast jetzt drei Modelle (Sender-Empfänger, Watzlawick, Schulz von Thun). Ein Gespräch eskaliert, obwohl 'inhaltlich' alles klar war. Welches Modell würdest du zur Analyse heranziehen — und warum macht die richtige Wahl den Unterschied?",
      antwort:
        "Es kommt auf die Situation an. Geht es um technische Übertragungsfehler (Lärm, unklare Worte, fehlende Rückmeldung) → Sender-Empfänger-Modell. Geht es um eine gestörte Beziehung/zirkuläre Schuldzuweisung → Watzlawick (Beziehungsaspekt, Interpunktion). Geht es um ein konkretes Missverständnis 'auf welchem Ohr gehört' → Schulz von Thun. Die richtige Modell-Wahl lenkt den Blick auf die tatsächliche Störungsquelle. (Kommunikation im Gesundheitswesen, Kap. 1)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Modelle konkurrieren nicht, sie ergänzen sich — jedes beleuchtet eine andere Störungsquelle. Sender-Empfänger: Übertragung/Kanal/Rückmeldung. Watzlawick: Beziehungsebene, Unmöglichkeit des Nicht-Kommunizierens, Interpunktion, symmetrisch/komplementär. Schulz von Thun: die vier Seiten/Ohren einer einzelnen Nachricht. Eine korrekte Einschätzung der Gesprächssituation und des passenden Modells ist entscheidend für den Gesprächserfolg.",
      textB1:
        "Die Modelle widersprechen sich nicht — jedes zeigt eine andere Störquelle. Sender-Empfänger: Geht es um Übertragung, Kanal, Rückmeldung? Watzlawick: Geht es um die Beziehung, ums Schweigen, um Schuldzuweisungen? Schulz von Thun: Geht es um ein Missverständnis bei einer einzelnen Aussage (welches Ohr)? Wer die Situation richtig einschätzt und das passende Modell wählt, führt das Gespräch besser.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce04-kommmodelle-wb-05",
        phase: 1,
        stepType: "reflection",
        bloomLevel: 5,
        kompetenzbereich: "II.1",
        quellen: ["Kommunikation im Gesundheitswesen, Kap. 1 (Modelle im Praxisbezug; Einschätzung von Gesprächssituation und Modell)"],
        track: "basis",
        modus: "schreibtisch",
        lernziel: "ce04-kommmodelle-situation-einschaetzen",
        tag: "pflege",
        contentC1: {
          title: "Welches Modell hilft wann?",
          body: "Drei Modelle, drei Blickwinkel — sie konkurrieren nicht, sondern **ergänzen** sich. Welches du zur Analyse einer Situation wählst, lenkt deinen Blick auf eine andere mögliche **Störungsquelle**:\n\n- **Sender-Empfänger-Modell** → wenn es um **technische Übertragung** geht: ungünstiger Kanal (Lärm, Hektik), unklar kodierte Worte, fehlende Rückmeldung.\n- **Watzlawick** → wenn es um die **Beziehung** geht: ein 'sprechendes' Schweigen (Axiom 1), ein verletzter Beziehungsaspekt (Axiom 2), zirkuläre Schuldzuweisung (Interpunktion, Axiom 3), eine ungleiche/komplementäre Rollenverteilung (Axiom 5).\n- **Schulz von Thun** → wenn ein **konkretes Missverständnis** bei einer einzelnen Aussage vorliegt: Sender und Empfänger betonen verschiedene 'Ohren' (Sach-, Beziehungs-, Appell-, Selbstkundgabe-Ohr).\n\nEine korrekte **Einschätzung der Gesprächssituation und des passenden Modells** ist mitentscheidend für den erfolgreichen Verlauf eines Gesprächs. (Kommunikation im Gesundheitswesen, Kap. 1)",
          glossarBegriffe: ["Sender-Empfänger-Modell", "Vier-Ohren-Modell", "Interpunktion"],
        },
        contentB1: {
          title: "Welches Modell hilft wann?",
          body: "Drei Modelle, drei Blickwinkel — sie ergänzen sich. Welches du wählst, zeigt eine andere mögliche **Störquelle**:\n\n- **Sender-Empfänger** → wenn es um die **Übertragung** geht: Lärm, unklare Worte, keine Rückmeldung.\n- **Watzlawick** → wenn es um die **Beziehung** geht: ein 'sprechendes' Schweigen, ein verletzter Beziehungsteil, Schuldzuweisung im Kreis, eine ungleiche Rolle (Chef–Azubi).\n- **Schulz von Thun** → wenn ein **Missverständnis bei einer Aussage** vorliegt: beide hören mit einem anderen 'Ohr'.\n\nWer die Situation richtig einschätzt und das passende Modell wählt, führt das Gespräch besser.",
          glossarBegriffe: ["Sender-Empfänger-Modell", "Vier-Ohren-Modell", "Interpunktion"],
        },
        question: {
          fragetext: "Beschreibe eine Situation, in der ein Gespräch schwierig wurde, und analysiere sie mit einem passenden Modell.",
          reflection: {
            prompt:
              "Schreibe 4-6 Sätze: 1) Schildere kurz eine schwierige Gesprächssituation (Praxis, Schule oder privat). 2) Welches Modell passt am besten zur Analyse — und warum gerade dieses? 3) Was war nach diesem Modell die eigentliche Störungsquelle? 4) Was würdest du beim nächsten Mal anders machen?",
            placeholder:
              "Die Situation war … Ich wähle das Modell von …, weil … Die eigentliche Störung lag bei … Nächstes Mal würde ich …",
            systemPrompt:
              "Bewerte im Sandwich-Prinzip. Wählt der Schüler ein zur geschilderten Situation PASSENDES Modell und begründet die Wahl (nicht nur ein Modell nennen, sondern die Eignung)? Erkennt er die Störungsquelle modellgerecht (Sender-Empfänger=Übertragung/Kanal/Feedback; Watzlawick=Beziehung/Interpunktion/Nicht-nicht-kommunizieren; Schulz von Thun=vier Ohren/Seiten)? Lob für eine differenzierte, modellgestützte Analyse statt Bauchgefühl. Niemals abwertend.",
          },
        },
      },
    },
    glossarBegriffe: ["Sender-Empfänger-Modell", "Vier-Ohren-Modell", "Interpunktion"],
    karteikarten: [],
  },
];

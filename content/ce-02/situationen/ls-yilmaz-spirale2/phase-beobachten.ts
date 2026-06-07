// CE-02 Situation Frau Yilmaz Spirale 2 — Phase 2: Beobachten
// Steps: 6 Kern + 3 Optional · Bloom: B3-B4 · Zeit: ~25-35 Min
// BRILLIANT-Prinzip: Step 2.1 (erst sehen, dann einordnen)
// Quelle: content/ce-02/situationen/ls-yilmaz-spirale2/phase-beobachten.md
// Pipeline v9 — 2026-04-23

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_YILMAZ_SPIRALE2_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-yilmaz-spirale2-beobachten",
  phase: "beobachten",
  titel: "Beobachten — Dekubitus Grad II erkennen + Braden-Skala",
  titelB1: "Schauen — Was ist die Wunde? Warum ist sie entstanden?",
  kontext:
    "Du hilfst Frau Yilmaz, sich auf die Seite zu legen, damit du das Sakrum inspizieren kannst. Mustafa schaut besorgt zu. Bevor du startest schaltest du das Zimmerlicht und die Bettleuchte ein — Tageslicht reicht im Halbdunkel des Frühdienstes nicht für eine Wundinspektion. Die Handlampe nutzt du zusätzlich für die Detailansicht. Du ziehst die Schutzhandschuhe an. Was du siehst, ist nicht mehr das, was die Kollegin als 'Rötung' bezeichnet hat. Du siehst zuerst die Wunde — bevor dir jemand erklärt, was ein Dekubitus Kategorie II ist. Das ist bewusst so.",
  kontextB1:
    "Du hilfst Frau Yilmaz, sich auf die Seite zu legen. Mustafa schaut zu. Du machst das Zimmerlicht und die Bettleuchte an — du brauchst gutes Licht für die Wunde. Die Handlampe nutzt du extra für Details. Du ziehst Handschuhe an. Du schaust dir die Haut am Steißbein an. Was du siehst, ist mehr als eine Rötung.",
  kernSteps: [
    // Step 2.0b — Inline-Wissen: Dekubitus-Entstehung (Druck + Scherkraefte + Zeit)
    // Der Schueler soll verstehen WARUM ein Dekubitus entsteht, bevor er die Wunde sieht.
    // Pathophysiologie: Druck → Ischaemie → Zellschaden. Scherkraefte als Verstaerker.
    {
      stepId: "ce02-yilmaz-s2-beob-00b-dekubitus-entstehung",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "NPUAP/EPUAP/PPPIA 2019",
        "DNQP 2024 — Expertenstandard Dekubitusprophylaxe",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-beob-pathophysiologie",
      tag: "krankheitslehre",
      themaPrimaer: "dekubitus-prophylaxe",
      themenSekundaer: ["haut", "positionierung"],
      transition: "Jetzt weisst du wie ein Dekubitus entsteht. Schau dir an, was bei Frau Yilmaz passiert ist.",
      contentC1: {
        title: "Wie entsteht ein Dekubitus?",
        body: "**Dekubitus** = lokale Druckwunde der Haut. Entsteht durch Druck × Zeit, verstärkt durch Scherkräfte und Feuchtigkeit (NPUAP/EPUAP/PPPIA 2019). Drei Mechanismen wirken zusammen — siehe Detail-Erklärung unten.",
        glossarBegriffe: ["Dekubitus", "Ischämie", "Scherkräfte", "Reperfusionsschaden", "Gewebehypoxie", "Haut", "Druckwunde"],
      },
      contentB1: {
        title: "Warum entsteht ein Dekubitus?",
        body: "**Dekubitus** = Wunde durch zu langen Druck auf die Haut. Wenn das Gewebe gedrückt wird, bekommt es kein Blut mehr (Ischämie). Drei Dinge wirken zusammen: Druck, Scherkräfte, Zeit.",
        glossarBegriffe: ["Dekubitus", "Ischämie", "Scherkräfte", "Haut", "Druckwunde"],
      },
      inlineWissen: {
        bausteinRef: "dekubitus-prophylaxe-entstehung",
        storyAufhaenger:
          "Frau Yilmaz liegt seit 14 Tagen ueberwiegend auf dem Rücken. Ihr Körpergewicht (BMI 34) drückt auf das Sakrum — den Knochenvorsprung am unteren Rücken. Die Haut und das Gewebe dazwischen werden zusammengedrückt wie ein Schwamm. Was passiert dabei genau?",
        storyAufhaengerB1:
          "Frau Yilmaz liegt seit 14 Tagen meist auf dem Rücken. Ihr Körpergewicht drückt auf das Steissbein. Was passiert mit der Haut dabei?",
        kerntext:
          "**Das Grundprinzip:** Wenn Gewebe zwischen Knochen und Unterlage länger als toleriert zusammengedrückt wird, entsteht **Ischämie** — die Blutversorgung wird unterbrochen.\n\n**3 Mechanismen wirken zusammen:**\n\n• **Druck** — Das Körpergewicht presst Haut und Gewebe auf den Knochen. Je höher das Gewicht (Adipositas) und je kleiner die Auflagefläche (Knochenvorsprung), desto höher der lokale Druck.\n\n• **Scherkräfte** — Beim Hochrutschen im Bett verschieben sich Hautschichten gegeneinander. Das Gewebe wird nicht nur gedrückt, sondern auch gezogen. Bei Frau Yilmaz: Scherkräfte beim Transfer und beim Rollator-Gehen.\n\n• **Zeit** — Einzelner Druck schadet wenig. Dauerhafter Druck ueber Stunden tötet Gewebe. Deshalb ist der **Umlagerungsrhythmus** so entscheidend: alle 2 Stunden Druck-Entlastung.\n\n**Bei Frau Yilmaz kamen 4 Verstärker hinzu:**\nNeuropathie (kein Schmerzsignal), Diabetes (schlechte Durchblutung), Inkontinenz (Mazeration), und die gelegentlich abgelehnte Umlagerung.",
        kerntextB1:
          "**Das Grundprinzip:** Wenn die Haut zu lange gedrückt wird, bekommt sie kein Blut mehr. Das nennt man **Ischämie**.\n\n**3 Dinge wirken zusammen:**\n\n• **Druck** — Das Körpergewicht drückt auf den Knochen. Je schwerer der Mensch, desto mehr Druck.\n\n• **Scherkräfte** — Beim Hochrutschen im Bett wird die Haut gezogen und gedrückt gleichzeitig.\n\n• **Zeit** — Kurzer Druck ist nicht schlimm. Langer Druck (Stunden) tötet Gewebe. Deshalb: alle 2 Stunden umlagern.\n\n**Bei Frau Yilmaz kam dazu:** Nerven spüren nichts (Neuropathie), Diabetes (schlechte Durchblutung), Feuchtigkeit (Inkontinenz-Pad), und sie wollte manchmal nicht umgelagert werden.",
        faustregel:
          "Dekubitus = Druck x Zeit. Scherkräfte und Feuchtigkeit verstärken den Schaden. Umlagerung bricht die Gleichung.",
        faustregelB1:
          "Dekubitus entsteht durch Druck ueber lange Zeit. Umlagern alle 2 Stunden unterbricht den Druck.",
        spektrum: [
          {
            patientName: "Herr Bauer",
            situationsId: "ls-bauer-demenz-sturz",
            hauptfaktor: "Immobilität durch Demenz",
            kurzbeschreibung:
              "Er bewegt sich nachts nicht, weil er nicht versteht, dass er sich drehen muss. Kein Schmerzsignal durch kognitive Einschränkung — anderer Mechanismus als Neuropathie, gleiches Ergebnis.",
          },
          {
            patientName: "Frau Schmidt",
            situationsId: "ls-schmidt-adipositas",
            hauptfaktor: "Hoher lokaler Druck durch BMI 38",
            kurzbeschreibung:
              "Mehr Körpergewicht = mehr Druck auf Knochenvorsprünge. Standard-Matratzen reichen bei BMI > 35 oft nicht — Schwerlast-Matratze nötig.",
          },
          {
            patientName: "Herr Petrov",
            situationsId: "ls-petrov-schlaganfall",
            hauptfaktor: "Scherkräfte durch Spastik",
            kurzbeschreibung:
              "Spastik in der betroffenen Seite erzeugt unkontrollierte Scherkräfte. Er rutscht im Bett, ohne es zu merken. Bobath-Lagerung reduziert Spastik und damit Scherkräfte.",
          },
        ],
        sonstBox:
          "Der **Reperfusionsschaden**: Wenn nach langer Ischämie das Blut zurückkehrt, entsteht paradoxerweise zusätzlicher Schaden durch freie Sauerstoffradikale. Deshalb ist kurze regelmässige Entlastung (Mikrobewegungen alle 15-20 Min) besser als seltene grosse Umlagerungen.",
        sonstBoxB1:
          "Wenn nach langem Druck das Blut zurückkommt, kann das Gewebe nochmal geschädigt werden (Reperfusionsschaden). Deshalb sind kleine Bewegungen zwischendurch auch wichtig — nicht nur die grosse Umlagerung alle 2 Stunden.",
        karteikarte: {
          vorderseite:
            "Erkläre die 3 Mechanismen der Dekubitus-Entstehung am Beispiel von Frau Yilmaz (BMI 34, Sakrum, 14 Tage post-OP).",
          rueckseite:
            "1) Druck: Körpergewicht (BMI 34) auf Sakrum (Knochenvorsprung). 2) Scherkräfte: Verschiebung der Hautschichten beim Transfer/Hochrutschen. 3) Zeit: 14 Tage ueberwiegend Rückenlage, gelegentlich Umlagerung abgelehnt.\n\nVerstärker: Neuropathie (kein Schmerzsignal), Diabetes (Mikrozirkulation), Inkontinenz (Mazeration).\n\nSpektrum: Bauer (Demenz-Immobilität), Schmidt (BMI 38), Petrov (Spastik-Scherkräfte).\n\nFaustregel: **Dekubitus = Druck x Zeit. Umlagerung bricht die Gleichung.**",
        },
      },
    },

    // Step 2.1 — Hotspot: Wunde sehen (BRILLIANT-Frage)
    {
      stepId: "ce02-yilmaz-s2-beob-01-wunde-sehen",
      phase: 2,
      stepType: "hotspot",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP/PPPIA (2019)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce02-yilmaz-s2-beob-wunde",
      tag: "pflege",
      bildkategorie: "prozedur",
      imageAlt:
        "Illustration des Sakrums mit Dekubitus Kategorie II: flache offene Erosion, rötlicher Wundgrund, mazerierter Wundrand",
      bildhinweis:
        "Medical illustration of sacrum skin wound stage 2 pressure injury, flat open erosion 2x3cm, reddish wound bed, macerated wound edge, clinical view from above, copic marker sketch style, absolutely no text no labels no words",
      contentC1: {
        title: "BRILLIANT-FRAGE: Was siehst du?",
        body: "Bevor wir erklären was ein Dekubitus Kategorie II ist: Schaue auf die Abbildung und benenne was du siehst. Nutze dein Vorwissen. Drei Befunde sollen markiert werden.",
        glossarBegriffe: ["Wundrand", "Wundgrund", "Mazeration"],
      },
      contentB1: {
        title: "Was siehst du an der Wunde?",
        body: "Schau dir das Bild genau an. Markiere drei Stellen auf dem Bild. Du brauchst kein Fachvorwissen — schau einfach und benenne was du erkennst.",
        glossarBegriffe: ["Mazeration"],
      },
      question: {
        fragetext:
          "Markiere die drei Befunde auf der Abbildung: Wundrand, Wundgrund und mazerierte Umgebungshaut.",
        hotspot: {
          imageUrl: "/illustrations/dekubitus-kat2-sakrum.svg",
          imageAlt:
            "Sakrum mit Dekubitus Kategorie II — flache offene Erosion",
          instruction:
            "Klicke auf die drei markierten Bereiche: Wundrand, Wundgrund, mazerierte Umgebungshaut.",
          zones: [
            {
              id: "wundrand",
              x: 35,
              y: 30,
              radius: 12,
              label:
                "Wundrand — leicht gerötet, Umgebung mazeriert (aufgeweicht durch Inkontinenz-Schutz)",
            },
            {
              id: "wundgrund",
              x: 50,
              y: 50,
              radius: 15,
              label:
                "Wundgrund — rötlich-feucht, kein nekrotisches Gewebe sichtbar, ca. 2×3 cm",
            },
            {
              id: "mazeration",
              x: 65,
              y: 70,
              radius: 12,
              label:
                "Mazerierte Umgebungshaut — aufgeweichte Hornschicht durch Dauerfeuchte (Inkontinenz-Pad)",
            },
          ],
        },
      },
    },

    // Inline-Wissen: Wundbeurteilung \u2014 Wundrand, Wundgrund und Kategorien
    {
      stepId: "ce02-yilmaz-s2-beob-01b-kategorien-wund",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP/PPPIA 2019", "DNQP 2024"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-beob-01b-kategorien-wund",
      tag: "krankheitslehre",
      themaPrimaer: "dekubitus-prophylaxe",
      themenSekundaer: ["haut"],
      transition: "Du kennst die Begriffe. Vergleiche jetzt Kategorie I und II.",
      contentC1: {
        title: "Wundbeurteilung \u2014 Wundrand, Wundgrund und Kategorien",
        body: "",
        glossarBegriffe: ["Wundrand", "Wundgrund", "Erosion", "Dekubitus Kategorie I", "Dekubitus Kategorie II", "Hornschicht", "Hautbarriere"],
      },
      contentB1: {
        title: "Wundbeurteilung \u2014 was siehst du an einer Wunde?",
        body: "",
        glossarBegriffe: ["Wundrand", "Wundgrund", "Dekubitus Kategorie I", "Dekubitus Kategorie II"],
      },
      inlineWissen: {
        bausteinRef: "dekubitus-prophylaxe-wundbeurteilung",
        storyAufhaenger: "Du hast gerade die Wunde auf dem Bild markiert. Jetzt die Fachbegriffe dazu: Was genau sind Wundrand, Wundgrund, und was unterscheidet Kategorie I von II?",
        storyAufhaengerB1: "Du hast die Wunde gesehen. Jetzt die Fachwörter: Was ist Wundrand? Was ist Wundgrund?",
        kerntext: "**Wundgrund** = die Oberfläche innerhalb der Wunde. Farbe zeigt den Zustand:\n\u2022 Rosa-rot (Granulation) = Heilung\n\u2022 Gelblich (Fibrin) = Reinigungsphase\n\u2022 Schwarz (Nekrose) = totes Gewebe\n\n**Wundrand** = die Grenze zwischen Wunde und gesunder Haut. Mazeriert = aufgeweicht durch Feuchtigkeit. Epithelialisierend = neue Haut wächst nach.\n\n**Erosion** = flacher, oberflächlicher Hautverlust (Epidermis). Typisch für Kategorie II.\n\n**Kategorie I** = Intakte Haut, nicht-wegdrückbare Roetung. Fingertest positiv. **Hautbarriere** (= **Hornschicht** als oberste Schutzschicht) noch intakt.\n\n**Kategorie II** = Teilverlust der Haut. Flache Erosion oder Blase. Hornschicht durchbrochen. Ab hier: Wundversorgung statt Prophylaxe.",
        kerntextB1: "**Wundgrund** = die Fläche in der Wunde. Farbe zeigt den Zustand: Rosa = heilt. Gelb = reinigt sich. Schwarz = totes Gewebe.\n\n**Wundrand** = Grenze zwischen Wunde und gesunder Haut. Aufgeweicht = mazeriert.\n\n**Erosion** = flache offene Stelle. Typisch für Kategorie 2.\n\n**Kategorie 1** = Haut noch ganz. Rote Stelle. **Hautbarriere** (= **Hornschicht**) intakt.\n**Kategorie 2** = Haut offen. Hornschicht kaputt. Jetzt braucht es Wundversorgung.",
        faustregel: "Wundgrund = Farbe zeigt Zustand. Wundrand = mazeriert oder heilend. Kategorie I = Haut intakt. Kategorie II = Haut offen = Therapie.",
        faustregelB1: "Wundgrund: Rosa = heilt. Wundrand: aufgeweicht = schlecht. Kat. 1 = Haut ganz. Kat. 2 = Haut offen.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Was unterscheidet Dekubitus Kategorie I von Kategorie II am Beispiel von Frau Yilmaz?",
          rueckseite: "Kat. I: Intakte Haut, nicht-wegdrückbare Roetung, Fingertest positiv, Hornschicht intakt. Kat. II: Teilverlust der Haut (Erosion/Blase), Hornschicht durchbrochen. Bei Frau Yilmaz: 2x3 cm Erosion am Sakrum = Kat. II. Wundgrund: rötlich-feucht. Wundrand: mazeriert.",
        },
      },
    },

    // Step 2.2 — Comparison: Kategorie I vs. II
    {
      stepId: "ce02-yilmaz-s2-beob-02-kategorien-abgrenzen",
      phase: 2,
      stepType: "comparison",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP/PPPIA (2019)"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-yilmaz-s2-beob-kategorien",
      tag: "krankheitslehre",
      contentC1: {
        title: "Kategorie I vs. Kategorie II — der Unterschied",
        body: "Ordne Frau Yilmaz' Befund eindeutig einer Kategorie zu. Quelle: (NPUAP/EPUAP/PPPIA 2019)",
        glossarBegriffe: ["Dekubitus Kategorie I", "Dekubitus Kategorie II", "Fingertest", "Erosion"],
      },
      contentB1: {
        title: "Kategorie 1 oder Kategorie 2 — was ist der Unterschied?",
        body: "Schau dir die Tabelle an. Welche Kategorie hat Frau Yilmaz?",
        glossarBegriffe: ["Dekubitus Kategorie I", "Dekubitus Kategorie II", "Fingertest"],
      },
      question: {
        fragetext:
          "Vergleiche Kategorie I und Kategorie II. Ordne Frau Yilmaz' Befund der richtigen Kategorie zu.",
        comparison: {
          instruction:
            "Vergleiche beide Kategorien und ordne Frau Yilmaz' Befund zu.",
          columns: [
            { label: "Kategorie I" },
            { label: "Kategorie II" },
          ],
          rows: [
            {
              criterion: "Hautbild",
              values: [
                "Intakte Haut, nicht wegdrückbare Rötung",
                "Teilverlust der Haut — flache offene Wunde (Erosion) oder Blase",
              ],
              valuesB1: [
                "Haut ist ganz. Rote Stelle, die beim Drücken nicht weg geht.",
                "Haut ist offen. Flache Wunde oder Blase.",
              ],
              highlight: 1,
            },
            {
              criterion: "Wundtiefe",
              values: [
                "Keine Wunde — Haut intakt",
                "Teilverlust — Epidermis und/oder Dermis betroffen",
              ],
              valuesB1: [
                "Keine Wunde — Haut ist noch zu.",
                "Teilverlust — obere Hautschicht fehlt.",
              ],
              highlight: 1,
            },
            {
              criterion: "Fingertest",
              values: [
                "Anwendbar — Rötung verschwindet beim Drücken → Kategorie I",
                "Nicht anwendbar — Haut ist offen",
              ],
              valuesB1: [
                "Kann man machen — Rötung geht weg beim Drücken.",
                "Kann man nicht machen — Haut ist schon offen.",
              ],
              highlight: 1,
            },
            {
              criterion: "Bei Frau Yilmaz",
              values: [
                "— nicht zutreffend",
                "Flache Erosion 2×3 cm am Sakrum, rötlich-feucht, kein Nekroseanteil → Kategorie II ✓",
              ],
              valuesB1: [
                "— trifft nicht zu",
                "Offene Wunde 2×3 cm am Steißbein, rötlich-feucht → Kategorie 2 ✓",
              ],
              highlight: 1,
            },
          ],
        },
      },
    },

    // Step 2.3 — Dialog (2 Phasen): Patientenreaktion (Zitat Z1)
    {
      stepId: "ce02-yilmaz-s2-beob-03-patient-reaktion",
      phase: 2,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["NPUAP/EPUAP/PPPIA (2019)"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-yilmaz-s2-beob-kommunikation",
      tag: "pflege",
      contentC1: {
        title: "Frau Yilmaz reagiert auf die Wunde",
        body: "Frau Yilmaz fragt dich. Wähle die Antwort die ihrem Sprachniveau entspricht und ehrlich ist.",
        glossarBegriffe: [],
      },
      contentB1: {
        title: "Was sagst du Frau Yilmaz?",
        body: "Frau Yilmaz fragt dich. Wie erklärst du ihr, was du siehst?",
        glossarBegriffe: [],
      },
      question: {
        fragetext: "Frau Yilmaz fragt — wie antwortest du?",
        patientName: "Frau Yilmaz",
        dialogPhases: [
          {
            context:
              "Frau Yilmaz dreht den Kopf und fragt: 'Was ist das? Da tut es nicht weh — ich hab nichts gemerkt. Ist das schlimm?'",
            contextB1:
              "Frau Yilmaz fragt: 'Was ist das? Es tut nicht weh — ich habe nichts gespürt. Ist das schlimm?'",
            speaker: "Du",
            options: [
              {
                text: "\"Das ist ein Dekubitus Kategorie II, durch Druck auf das Sakrum entstanden.\"",
                textB1:
                  "\"Das ist ein Dekubitus Kategorie 2 — durch Druck auf das Steißbein.\"",
                patientResponse:
                  "Frau Yilmaz schaut dich an. 'Dekubitus? Was ist das?' — ihr Blick bleibt fragend.",
                patientResponseB1:
                  "Frau Yilmaz schaut dich an. 'Dekubitus? Das kenne ich nicht.'",
                score: 1,
                feedback:
                  "Fachlich korrekt — aber zu komplex für Frau Yilmaz. 'Dekubitus Kategorie II' und 'Sakrum' sind Fachbegriffe, die sie nicht versteht. Patientenkommunikation passt sich dem Sprachniveau an.",
                feedbackB1:
                  "Der Fachbegriff ist richtig — aber Frau Yilmaz versteht ihn nicht. Erkläre in einfachen Worten.",
              },
              {
                text: "\"Sie haben eine kleine offene Wunde am Steiß. Das entsteht, wenn man längere Zeit auf einer Stelle liegt — das Gewebe wird dann nicht gut durchblutet.\"",
                textB1:
                  "\"Sie haben eine kleine Wunde am Steiß. Die entsteht, wenn man lange auf einer Stelle liegt. Die Haut bekommt dann nicht genug Blut.\"",
                patientResponse:
                  "Frau Yilmaz nickt langsam. 'Ah. Weil ich so viel liege. Und ich hab nichts gespürt?' — sie schaut besorgt, aber versteht.",
                patientResponseB1:
                  "Frau Yilmaz nickt. 'Ah. Weil ich viel liege. Und ich habe nichts gespürt?'",
                score: 3,
                feedback:
                  "Klar, verständlich, ehrlich. Du erklärst den Entstehungsmechanismus ohne Fachbegriffe. Frau Yilmaz kann es nachvollziehen — und das Nicht-Spüren (Neuropathie) kannst du im nächsten Schritt erklären.",
                feedbackB1:
                  "Sehr gut. Einfache Worte, klarer Zusammenhang. Frau Yilmaz versteht.",
              },
              {
                text: "\"Das ist nicht schlimm, das kriegen wir hin.\"",
                textB1: "\"Das ist nicht schlimm, wir kümmern uns.\"",
                patientResponse:
                  "Frau Yilmaz: 'Wenn Sie das sagen …' — sie entspannt sich, aber schaut noch unsicher.",
                patientResponseB1:
                  "Frau Yilmaz: 'Gut.' — aber sie versteht immer noch nicht was es ist.",
                score: 1,
                feedback:
                  "Beruhigend — aber informationsleer. Frau Yilmaz hat das Recht zu verstehen, was mit ihr passiert. Ohne Information kann sie nicht kooperieren (z.B. Positionierung akzeptieren). Erklären + Beruhigen ist besser als nur Beruhigen.",
                feedbackB1:
                  "Du willst sie beruhigen — gut. Aber sie weiß immer noch nicht, was es ist. Erkläre es ihr — dann kann sie mithelfen.",
              },
            ],
          },
          {
            context:
              "Frau Yilmaz fragt: 'Aber warum habe ich das nicht gespürt? Die Schwestern haben mich immer auf die Seite gelegt — ich hab das manchmal nicht gewollt, das war unbeqüm. Aber sie haben es trotzdem gemacht.' Sie schaut dich fragend an.",
            contextB1:
              "Frau Yilmaz fragt: 'Warum habe ich das nicht gespürt? Die Schwestern haben mich immer auf die Seite gelegt — das war nicht schön. Aber sie haben es gemacht.' Sie schaut dich an.",
            speaker: "Du",
            options: [
              {
                text: "\"Die Nerven durch den Diabetes sind manchmal weniger empfindlich — das nennt sich Neuropathie. Deshalb hat die Haut keinen Schmerz gesendet, obwohl sie gedrückt wurde.\"",
                textB1:
                  "\"Bei Diabetes können die Nerven schlechter werden. Das heißt: Die Haut spürt weniger. Kein Schmerz — obwohl die Haut gedrückt wurde.\"",
                patientResponse:
                  "Frau Yilmaz nickt. 'Ah. Der Diabetes … Ich wusste nicht, dass das so geht.' — ein Moment Stille, dann: 'Und das Umlagern hat doch was gebracht?'",
                patientResponseB1:
                  "Frau Yilmaz nickt. 'Aha — der Diabetes. Ich wusste das nicht.' Kurze Pause: 'Und das Drehen hat geholfen?'",
                score: 3,
                feedback:
                  "Erklärung auf Augenhöhe — medizinisch korrekt und verständlich. Du verknüpfst Neuropathie mit dem konkreten Erlebnis. Und: Du lässt Raum für ihre nächste Frage.",
                feedbackB1:
                  "Sehr gut. Einfach erklärt. Frau Yilmaz versteht den Zusammenhang.",
              },
              {
                text: "\"Das weiß ich auch nicht genau — das müssen Sie den Arzt fragen.\"",
                textB1: "\"Das weiß ich nicht — fragen Sie den Arzt.\"",
                patientResponse:
                  "Frau Yilmaz schaut enttäuscht. 'Immer der Arzt. Aber Sie sind doch auch hier.'",
                patientResponseB1:
                  "Frau Yilmaz schaut enttäuscht. 'Immer der Arzt. Aber Sie sind auch da.'",
                score: 0,
                feedback:
                  "Diese Frage gehört zu deinem Pflegewissen — Neuropathie bei Diabetes ist ein Kern-Thema der Pflegeausbildung. An den Arzt verweisen ist hier nicht nötig und wirkt auf Frau Yilmaz abweisend.",
                feedbackB1:
                  "Das ist dein Wissen als Pflegekraft. Neuropathie bei Diabetes gehört zur Pflege. Du kannst es erklären.",
              },
            ],
          },
        ],
      },
    },

    // Step 2.3b — Inline-Wissen: Braden-Skala (Wiederbegegnung aus Spirale 1)
    // In Spirale 1 wurde die Braden-Skala eingefuehrt. Hier kompakte Wiederbegegnung
    // mit situationsspezifischer Vertiefung: Was hat sich seit Aufnahme veraendert?
    {
      stepId: "ce02-yilmaz-s2-beob-03b-braden-wiederbegegnung",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "Braden B.J., Bergstrom N. (1987)",
        "DNQP 2024 — Expertenstandard Dekubitusprophylaxe",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-beob-braden-wiederbegegnung",
      tag: "krankheitslehre",
      themaPrimaer: "dekubitus-prophylaxe",
      themenSekundaer: ["haut"],
      transition: "Frisch im Kopf? Dann füll die Braden-Skala für Frau Yilmaz heute aus.",
      contentC1: {
        title: "Braden-Skala — Erinnerung aus Spirale 1",
        body: "",
        glossarBegriffe: ["Braden-Skala", "Subskala"],
      },
      contentB1: {
        title: "Braden-Skala — kennst du noch?",
        body: "",
        glossarBegriffe: ["Braden-Skala"],
      },
      inlineWissen: {
        bausteinRef: "dekubitus-prophylaxe-braden-skala",
        wiederbegegnung: {
          basisBausteinId: "dekubitus-prophylaxe-braden-skala",
          basisPatient: "Frau Yilmaz (Spirale 1)",
          vertiefung:
            "In Spirale 1 hast du die Braden-Skala bei Aufnahme ausgefüllt: Score 13 (mässiges Risiko). Heute, 14 Tage später, hat sich der Score kaum verändert — aber ein Dekubitus Kategorie II ist trotzdem entstanden. Das zeigt: Die Braden-Skala misst Risiko, nicht Ergebnis. Ein Score von 13-14 heißt nicht \"sicher\", sondern \"Prophylaxe ist Pflicht\". Wenn die Prophylaxe lückenhaft durchgeführt wird, entsteht trotz moderatem Score ein Dekubitus.",
          vertiefungB1:
            "In Spirale 1 hast du die Braden-Skala ausgefüllt: Score 13 (mittleres Risiko). Heute nach 14 Tagen: Der Score ist ähnlich — aber trotzdem ist eine Wunde entstanden. Das zeigt: Ein mittlerer Score bedeutet nicht \"alles gut\". Es bedeutet: Prophylaxe muss gemacht werden. Wenn sie nicht gemacht wird, passiert genau das.",
        },
        storyAufhaenger:
          "Du sollst gleich die Braden-Skala für Frau Yilmaz heute ausfüllen. Erinnerst du dich an die 6 Subskalen? Kurze Auffrischung, bevor du die Tabelle ausfüllst.",
        storyAufhaengerB1:
          "Gleich füllst du die Braden-Skala für heute aus. Kurze Erinnerung: Was war die Braden-Skala nochmal?",
        kerntext:
          "Die **Braden-Skala** (Braden & Bergstrom 1987) ist das am häufigsten verwendete Instrument zur Einschätzung des Dekubitusrisikos im deutschsprachigen Raum.\n\n**6 Subskalen, je 1-4 Punkte:**\n\n• **Sensorisches Empfinden** — Kann der Patient Druck spüren?\n\n• **Feuchtigkeit** — Wie oft ist die Haut feucht?\n\n• **Aktivität** — Wie viel bewegt sich der Patient (Bett, Stuhl, Gehen)?\n\n• **Mobilität** — Kann er seine Position selbst ändern?\n\n• **Ernährung** — Isst er ausreichend?\n\n• **Reibung/Scherkräfte** — Rutscht er beim Bewegen?\n\n**Gesamtscore 6-23:** Je niedriger, desto höher das Risiko.\n• ≤ 12 = hohes Risiko\n• 13-14 = mässiges Risiko\n• 15-18 = geringes Risiko\n• > 18 = kein erhöhtes Risiko",
        kerntextB1:
          "Die **Braden-Skala** misst das Dekubitus-Risiko.\n\n**6 Punkte werden bewertet:**\n\n• Kann der Patient Druck spüren?\n• Wie oft ist die Haut feucht?\n• Wie viel bewegt er sich?\n• Kann er sich selbst drehen?\n• Isst er genug?\n• Rutscht er beim Bewegen?\n\n**Jeder Punkt: 1-4.** Alle zusammen = Gesamtscore (6-23).\n\n• 12 oder weniger = hohes Risiko\n• 13-14 = mittleres Risiko\n• 15-18 = geringes Risiko\n• Über 18 = kein erhöhtes Risiko",
        faustregel:
          "Braden ≤ 14 = Prophylaxe ist Pflicht. Aber: Ein moderater Score schützt nicht — nur konsequnte Maßnahmen tun es.",
        faustregelB1:
          "Braden 14 oder weniger = Prophylaxe ist Pflicht. Aber auch mit mittlerem Risiko kann ein Dekubitus entstehen.",
        karteikarte: {
          vorderseite:
            "Frau Yilmaz hat Braden-Score 14 (mässiges Risiko). Trotzdem ist ein Dekubitus Kat. II entstanden. Was sagt das ueber die Braden-Skala?",
          rueckseite:
            "Die Braden-Skala misst Risiko, nicht Ergebnis. Score 13-14 = mässiges Risiko = Prophylaxe ist Pflicht. Wenn Prophylaxe lückenhaft (Schichtausfall, Ablehnung, fehlende Dokumentation), entsteht Dekubitus trotz moderatem Score.\n\n6 Subskalen: Sensorik, Feuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Score 6-23 (niedriger = höher Risiko).\n\nFaustregel: **Braden ≤ 14 = Prophylaxe Pflicht. Nur konsequnte Maßnahmen schützen.**",
        },
      },
    },

    // Step 2.4 — TableFillIn: Braden-Skala ausfüllen
    {
      stepId: "ce02-yilmaz-s2-beob-04-braden-heute",
      phase: 2,
      stepType: "tablefillin",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Braden B.J., Bergstrom N. (1987)"],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-yilmaz-s2-beob-braden",
      tag: "krankheitslehre",
      contentC1: {
        title: "Braden-Skala heute — Tag 14 post-OP",
        body: "Fülle die Braden-Skala für Frau Yilmaz heute aus. Nutze die Fallinformationen aus patient-plan.md. Gesamtscore und Interpretation am Ende.",
        glossarBegriffe: ["Braden-Skala", "Subskala"],
      },
      contentB1: {
        title: "Braden-Skala für heute ausfüllen",
        body: "Trage die Punkte für Frau Yilmaz in die Tabelle ein. Die Informationen hast du aus der Akte.",
        glossarBegriffe: ["Braden-Skala"],
      },
      question: {
        fragetext:
          "Fülle die Braden-Skala für Frau Yilmaz heute (Tag 14 post-OP) aus.",
        tablefillin: {
          instruction:
            "Trage die Punkte für jede Subskala ein. Gesamtscore = Summe aller Werte.",
          headers: [
            "Subskala",
            "Beschreibung Frau Yilmaz",
            "Punkte (1-4)",
          ],
          rows: [
            [
              { value: "Wahrnehmung", isBlank: false },
              { value: "Periphere Neuropathie — reduziertes Schmerzempfinden an Fersen und Sakrum", isBlank: false },
              { value: "2", isBlank: true, options: ["1", "2", "3", "4"] },
            ],
            [
              { value: "Feuchtigkeit", isBlank: false },
              { value: "Gelegentliche Inkontinenz, Inkontinenz-Pad", isBlank: false },
              { value: "2", isBlank: true, options: ["1", "2", "3", "4"] },
            ],
            [
              { value: "Aktivität", isBlank: false },
              { value: "Läuft mit Rollator — kurze Strecken (~15 m)", isBlank: false },
              { value: "3", isBlank: true, options: ["1", "2", "3", "4"] },
            ],
            [
              { value: "Mobilität", isBlank: false },
              { value: "Stark eingeschränkt — bewegt sich gelegentlich, dreht sich aber durch Adipositas + postoperativer Schwäche nicht ohne Anstrengung selbstständig um", isBlank: false },
              { value: "2", isBlank: true, options: ["1", "2", "3", "4"] },
            ],
            [
              { value: "Ernährung", isBlank: false },
              { value: "Isst meistens — Appetit mäßig reduziert durch Schmerzen", isBlank: false },
              { value: "3", isBlank: true, options: ["1", "2", "3", "4"] },
            ],
            [
              { value: "Reibung / Scherkräfte", isBlank: false },
              { value: "Braucht bei Umlagerung Hilfe — Scherkräfte beim Hochrutschen im Bett (Becken verschiebt sich relativ zur Haut) → potenzielles Problem", isBlank: false },
              { value: "2", isBlank: true, options: ["1", "2", "3"] },
            ],
            [
              { value: "Gesamtscore", isBlank: false },
              { value: "→ Mäßiges Risiko (≤ 18 = Risiko vorhanden)", isBlank: false },
              { value: "14", isBlank: true, options: ["10", "12", "14", "16", "18"] },
            ],
          ],
        },
      },
    },

    // Inline-Wissen: Donabedian und Risikofaktoren \u2014 Systemanalyse statt Schuld
    {
      stepId: "ce02-yilmaz-s2-beob-04b-donabedian",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["Donabedian A. (1966)", "DNQP 2024"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-beob-04b-donabedian",
      tag: "pflege",
      themaPrimaer: "dekubitus-prophylaxe",
      themenSekundaer: ["pflegeprozess"],
      transition: "Du kennst das Modell. Schreib jetzt deine Analyse.",
      contentC1: {
        title: "Donabedian und Risikofaktoren \u2014 Systemanalyse statt Schuld",
        body: "**Donabedian-Modell** = Qualitäts-Konzept aus 3 Ebenen: Struktur, Prozess, Ergebnis. Drei Begriffe brauchst du gleich:\n\n• **Patientenautonomie** = Recht der Patientin, über ihren Körper und ihre Pflege selbst zu entscheiden — auch wenn die Entscheidung pflegerisch ungünstig ist.\n\n• **Wundheilung** = biologischer Prozess der Geweberegeneration nach einer Verletzung; verläuft in 4 Phasen.\n\n• **Weichlagerung** = Lagerung auf druckverteilenden Matratzen oder Auflagen, um den Auflagedruck auf Knochen-Vorsprünge zu senken.",
        glossarBegriffe: ["Donabedian", "Strukturqualität", "Prozessqualität", "Endogene Faktoren", "Exogene Faktoren", "Organisationsfaktoren", "Patientenautonomie", "Wundheilung", "Weichlagerung", "Pflege", "Lagerung"],
      },
      contentB1: {
        title: "Warum ist die Wunde entstanden? System statt Schuld",
        body: "**Donabedian-Modell** = Qualität in 3 Teilen: Struktur, Prozess, Ergebnis. Drei wichtige Wörter:\n\n• **Patientenautonomie** = die Patientin darf selbst entscheiden — auch wenn es nicht ideal ist.\n\n• **Wundheilung** = wie eine Wunde heilt. Es gibt 4 Phasen.\n\n• **Weichlagerung** = Lagerung auf einer weichen Matratze, damit weniger Druck auf den Knochen kommt.",
        glossarBegriffe: ["Donabedian", "Endogene Faktoren", "Exogene Faktoren", "Organisationsfaktoren", "Patientenautonomie", "Wundheilung", "Weichlagerung", "Pflege", "Lagerung"],
      },
      inlineWissen: {
        bausteinRef: "dekubitus-prophylaxe-donabedian",
        storyAufhaenger: "Warum ist Frau Yilmaz Dekubitus trotz Prophylaxeplan entstanden? Die Antwort liegt nicht bei einer Person \u2014 sondern im System. Das **Donabedian-Modell** hilft, die Ursachen systematisch zu sortieren.",
        storyAufhaengerB1: "Warum ist die Wunde entstanden \u2014 obwohl Prophylaxe geplant war? Ein Modell hilft: Donabedian.",
        kerntext: "**Donabedian-Modell** (1966) teilt Qualität in 3 Dimensionen:\n\n\u2022 **Strukturqualität** = Was IST vorhanden? Personal, Material, Ausstattung. Bei Frau Yilmaz: Weichlagerungsmatratze war da, aber Personalschlüssel war knapp.\n\n\u2022 **Prozessqualität** = Was WIRD getan? Umlagerung, Hautinspektion, Dokumentation. Bei Frau Yilmaz: Umlagerung geplant, aber nicht immer durchgeführt. Roetung gesehen, nicht dokumentiert.\n\n\u2022 Ergebnisqualität = Was IST das Resultat? Dekubitus entstanden (negativ), aber Kat. II statt III/IV (Schadensbegrenzung).\n\n**Risikofaktoren** nach Ebene:\n\u2022 **Endogene Faktoren** (= vom Patienten): Diabetes, Neuropathie, Adipositas, Alter.\n\u2022 **Exogene Faktoren** (= von aussen): Inkontinenz-Pad, Matratze, Scherkräfte.\n\u2022 **Organisationsfaktoren** (= System): Personalknappheit, Dokumentationslücke, Ablehnung der Umlagerung.\n\nWichtig: Kein Schuld-Framing. Dekubitus ist ein Systemereignis \u2014 nicht das Versagen einer Person.",
        kerntextB1: "**Donabedian-Modell** (1966) hat 3 Teile:\n\n\u2022 **Struktur** = Was ist da? Personal, Material.\n\u2022 **Prozess** = Was wurde gemacht? Umlagerung, Hautinspektion.\n\u2022 **Ergebnis** = Was ist passiert? Wunde entstanden.\n\n**Risikofaktoren:**\n\u2022 **Endogen** (= Person): Diabetes, Übergewicht, Nerven-Schädigung.\n\u2022 **Exogen** (= von aussen): Inkontinenz-Pad, Matratze.\n\u2022 **Organisation** (= System): Zu wenig Personal, nicht aufgeschrieben.\n\nWichtig: Niemand ist schuld. Es ist ein System-Problem.",
        faustregel: "Donabedian: Struktur \u2192 Prozess \u2192 Ergebnis. Dekubitus = Systemereignis, kein Einzelversagen. Endogen + Exogen + Organisation.",
        faustregelB1: "3 Teile: Struktur + Prozess + Ergebnis. Risiken: Person + Umgebung + System. Niemand ist schuld.",
        spektrum: [],
        karteikarte: {
          vorderseite: "Erkläre das Donabedian-Modell am Fall Frau Yilmaz.",
          rueckseite: "Donabedian (1966): S = Struktur (Matratze da, Personal knapp). P = Prozess (Umlagerung lückenhaft, Roetung nicht dokumentiert). E = Ergebnis (Dekubitus Kat. II). Risikofaktoren: Endogen (Diabetes, Neuropathie), Exogen (Inkontinenz-Pad), Organisation (Personalschlüssel, Dokumentationslücke). Systemanalyse, kein Schuld-Framing.",
        },
      },
    },

    // Step 2.5 — Freetext: Warum trotz Prophylaxe?
    {
      stepId: "ce02-yilmaz-s2-beob-05-warum-trotz-prophylaxe",
      phase: 2,
      stepType: "freetext",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: [
        "Donabedian A. (1966)",
        "Moore Z., Cowman S., Conroy R.M. (2022)",
        "DNQP (2. Aktualisierung 2024)",
      ],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-yilmaz-s2-beob-systemanalyse",
      tag: "pflege",
      contentC1: {
        title: "Kern-Frage von Spirale 2: Warum trotz Prophylaxe?",
        body: "In der Pflegeplanung aus Spirale 1 war 2-stündliche Umlagerung vorgesehen. Frau Yilmaz ist trotzdem an Dekubitus Kategorie II erkrankt. Nenne mindestens 3 mögliche Gründe — mit Quellenangabe wo relevant.",
        glossarBegriffe: ["Donabedian", "Strukturqualität", "Prozessqualität"],
      },
      contentB1: {
        title: "Warum ist die Wunde entstanden — obwohl Prophylaxe geplant war?",
        body: "Die Pflegeplanung aus Spirale 1 hatte 2-stündliche Umlagerung geplant. Frau Yilmaz hat trotzdem eine Wunde bekommen. Schreibe mindestens 3 mögliche Gründe auf.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Nenne mindestens 3 mögliche Gründe, warum der Dekubitus trotz korrekter Prophylaxeplanung entstanden ist.",
        musterantwort:
          "1) Prophylaxeplan korrekt, aber nicht immer umgesetzt: Schichtlücken, Personalknappheit → Strukturqualitätsproblem (Donabedian 1966). 2) Frau Yilmaz hat Umlagerung manchmal abgelehnt ('das war unbeqüm') → Patientenautonomie vs. Prophylaxepflicht. 3) Neuropathie durch Diabetes → kein Schmerzsignal → kein Melden an Pflegende. 4) Inkontinenz = Dauerfeuchte durch Pad → Mazeration → Hautbarriere geschwächt → erhöhte Anfälligkeit. 5) Adipositas → lokaler Auflagedruck am Sakrum trotz Weichlagerungsmatratze erhöht (Körpermasse verteilt Druck ungleichmäßig).",
        bewertungskriterien: [
          "Mindestens 3 Ebenen benannt (Patient, System, Umgebung)",
          "Nicht nur Patientenfaktoren — auch Systemfaktoren erkannt",
          "Neuropathie als Grund erwähnt",
          "Kein Schuld-Framing — Systemanalyse",
        ],
        satzanfaengeB1: [
          "Frau Yilmaz konnte keinen Schmerz spüren, weil …",
          "Die Pflegekräfte konnten manchmal nicht umlagern, weil …",
          "Das Inkontinenz-Pad hat die Haut geschwächt, weil …",
          "Adipositas macht es schwerer, weil …",
          "Frau Yilmaz hat manchmal Nein gesagt, weil …",
        ],
      },
    },

    // Step 2.6 — Categorize: Risikofaktoren kategorisieren
    {
      stepId: "ce02-yilmaz-s2-beob-06-umgebung-feuchtigkeit",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["DNQP (2. Aktualisierung 2024)", "Donabedian A. (1966)"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce02-yilmaz-s2-beob-risikofaktoren",
      tag: "pflege",
      contentC1: {
        title: "Risikofaktoren mehrdimensional einordnen",
        body: "Ordne die 8 Items in die drei Kategorien ein. Bloom 4 — Mehrschichtige Kausalität erkennen.",
        glossarBegriffe: [
          "Endogene Faktoren",
          "Exogene Faktoren",
          "Organisationsfaktoren",
        ],
      },
      contentB1: {
        title: "Was hat zum Dekubitus beigetragen? Sortiere.",
        body: "Ordne die Faktoren in drei Gruppen: Faktoren von der Person selbst, Faktoren von außen, Organisationsfaktoren.",
        glossarBegriffe: [],
      },
      question: {
        fragetext:
          "Ordne jeden Faktor der richtigen Kategorie zu.",
        categories: [
          { name: "Endogene Faktoren (Person)" },
          { name: "Exogene Faktoren (Umgebung)" },
          { name: "Verhaltens- / Organisationsfaktoren" },
        ],
        categoryItems: [
          { text: "Diabetes mellitus Typ 2 — verzögerte Wundheilung", correctCategory: 0 },
          { text: "Periphere Neuropathie — kein Schmerzsignal", correctCategory: 0 },
          { text: "Adipositas BMI 34 — erhöhter Auflagedruck", correctCategory: 0 },
          { text: "Alter 79 Jahre — dünnere Haut, geringere Durchblutungsreserve", correctCategory: 0 },
          { text: "Inkontinenz-Pad — Feuchtigkeitskammer am Sakrum", correctCategory: 1 },
          { text: "Krankenhausmatratze — Weichlagerung nicht immer optimiert", correctCategory: 1 },
          { text: "Scherkräfte beim Rollator-Gehen", correctCategory: 1 },
          { text: "Ablehnung der Umlagerung durch Frau Yilmaz ('war unbeqüm')", correctCategory: 2 },
          { text: "Rötung von Kollegin gesehen aber nicht dokumentiert", correctCategory: 2 },
        ],
      },
    },
  ],
  optionaleSteps: [
    // Opt 2.7 — Text (stepbystep): Fingertest-Kontrastwissen (B1-Schüler)
    {
      stepId: "ce02-yilmaz-s2-beob-opt-01-fingertest",
      phase: 2,
      stepType: "text",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP/PPPIA (2019)"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-beob-fingertest",
      tag: "pflege",
      displayFormat: "stepbystep",
      contentC1: {
        title: "Fingertest — jetzt nicht mehr anwendbar",
        body: "Der Fingertest funktioniert nur bei intakter Haut (Kategorie I). Bei Frau Yilmaz ist die Haut offen (Kategorie II) — der Fingertest ist hier nicht mehr sinnvoll. Zur Erinnerung: Beim Fingertest drückt man 3 Sekunden auf die gerötete Stelle. Verschwindet die Rötung nicht (= nicht-wegdrückbar) → Kategorie I. Bei offener Haut hat der Test keine Bedeutung mehr.",
        glossarBegriffe: ["Fingertest", "Nicht-wegdrückbare Rötung", "Haut", "Rötung"],
      },
      contentB1: {
        title: "Fingertest — warum jetzt nicht?",
        body: "Den Fingertest machst du, wenn die Haut noch ganz ist. Du drückst 3 Sekunden drauf. Geht die Rötung nicht weg → Kategorie 1. Bei Frau Yilmaz geht das nicht — die Haut ist schon offen. Der Test macht keinen Sinn mehr.",
        glossarBegriffe: ["Fingertest", "Haut", "Rötung"],
      },
    },

    // Opt 2.8 — Flipcard (2 Karten): Mazeration erklärt (mittlere Schüler)
    {
      stepId: "ce02-yilmaz-s2-beob-opt-02-mazeration",
      phase: 2,
      stepType: "flipcard",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP (2019)"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-beob-mazeration",
      tag: "krankheitslehre",
      contentC1: {
        title: "Mazeration — was passiert mit der Haut?",
        body: "Zwei Karten zur Mazeration. Quelle: (NPUAP/EPUAP 2019)",
        glossarBegriffe: ["Mazeration", "Hornschicht", "Hautbarriere"],
      },
      contentB1: {
        title: "Mazeration — warum ist die Haut aufgeweicht?",
        body: "Zwei Karten zum Thema Mazeration.",
        glossarBegriffe: ["Mazeration"],
      },
      question: {
        fragetext: "Drehe die Karten um.",
        flipcard: {
          instruction: "Drehe jede Karte um.",
          cards: [
            {
              front: "Warum ist die Haut um die Wunde feucht und aufgeweicht?",
              back: "Mazeration = Aufweichung der Hornschicht durch lang anhaltende Feuchtigkeit (Urin, Schweiß, Wundexsudat). Folge: Hautbarriere bricht ein → leichteres Eindringen von Bakterien + erhöhte Reibungsempfindlichkeit.",
              backB1:
                "Mazeration = die Haut wird durch lange Feuchtigkeit weich und schwach. Bei Frau Yilmaz: Das Inkontinenz-Pad hält Feuchtigkeit. Die Haut wird schwächer. Leichter für Bakterien zu eindringen.",
              category: "Mazeration + Ursache",
            },
            {
              front: "Welche Verbindung hat Mazeration zum Inkontinenz-Pad bei Frau Yilmaz?",
              back: "Das Inkontinenz-Pad wirkt wie eine Feuchtigkeitskammer. Selbst bei kleiner Feuchtigkeit bleibt die Haut unter dem Pad dauerhaft feucht. Dies beschleunigt Mazeration am Sakrum — besonders gefährlich in Kombination mit Druck.",
              backB1:
                "Das Pad hält Feuchtigkeit fest. Die Haut am Steißbein ist dann immer feucht. Das macht die Haut schwächer. Zusammen mit dem Druck entsteht schneller eine Wunde.",
              category: "Mazeration + Inkontinenz-Pad",
            },
          ],
          shuffled: false,
        },
      },
    },

    // Opt 2.9 — Text (crossref): Deep Tissue Injury (C1-Schüler)
    {
      stepId: "ce02-yilmaz-s2-beob-opt-03-deep-tissue",
      phase: 2,
      stepType: "text",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["NPUAP/EPUAP/PPPIA (2019)"],
      track: "vertiefung",
      modus: "entdecker",
      lernziel: "ce02-yilmaz-s2-beob-deep-tissue",
      tag: "krankheitslehre",
      displayFormat: "crossref",
      contentC1: {
        title: "Vertiefung: Deep Tissue Injury (DTI)",
        body: "Warum eine Kategorie-II-Wunde manchmal nur die sichtbare Spitze einer tieferen Schädigung ist: Scherkräfte-Mechanismus — die Gewebeschichten verschieben sich in entgegengesetzte Richtungen (z.B. beim Hochrutschen im Bett). Tiefes Gewebe (Muskel, Fettgewebe nahe Knochen) wird stärker belastet als die Hautoberfläche. Die Haut kann noch intakt sein, während darunter Gewebe bereits nekrotisch wird — das ergibt das Bild eines 'Eisbergs'. Verbindung zu Frau Yilmaz: Scherkräfte beim Rollator-Gehen (Becken verschiebt sich relativ zur Haut). Quelle: (NPUAP/EPUAP/PPPIA 2019)",
        glossarBegriffe: ["Deep Tissue Injury", "Scherkräfte", "Nekrose", "Haut", "Ursache"],
      },
      contentB1: {
        title: "Vertiefung: Tiefe Gewebeschädigung (DTI)",
        body: "Manchmal sieht die Haut oben noch fast gut aus — aber darunter ist das Gewebe schon kaputt. Das nennt man Deep Tissue Injury (= tiefe Gewebeschädigung). Es ist wie ein Eisberg: oben klein, unten groß. Ursache: Beim Rutschen im Bett werden die Schichten im Gewebe gegeneinander geschoben (Scherkräfte). Bei Frau Yilmaz: Scherkräfte beim Gehen mit Rollator.",
        glossarBegriffe: ["Deep Tissue Injury", "Scherkräfte", "Haut", "Ursache"],
      },
    },
  ],
  geschaetzteDauer: 30,
};

// CE-02 Situation Kovač — Phase 2: Beobachten — Atembeobachtung, Gelenke, Schlaf, Flüssigkeit
// Steps: 6 · Bloom: B3-B4 · Zeit: ~25-35 Min
// Quelle: phase-beobachten.md

import type { SituationsPhase } from "../../../_types";

export const CE02_SIT_KOVAC_AMBULANT_BEOBACHTEN: SituationsPhase = {
  phaseId: "ls-kovac-ambulant-beobachten",
  phase: "beobachten",
  titel: "Beobachten & Einschätzen",
  titelB1: "Was zeigt Frau Kovačs Körper heute?",
  kontext:
    "Frau Kovač sitzt im Sessel. Du hast das Gespräch eröffnet, das Trinkprotokoll liegt auf dem Tisch. Jetzt geht es darum, systematisch zu beobachten — mit deinen Augen, deinen Ohren, deinen Fragen. Bei COPD III ist das kein Routinecheck; was du hier übersiehst, wird beim nächsten Besuch schlimmer. Und du hast 45 Minuten.",
  kontextB1:
    "Frau Kovač sitzt im Sessel. Du hast mit ihr gesprochen. Jetzt beobachtest du sie genau. Du schaust auf die Atmung. Du schaust auf die Knie. Du fragst nach dem Schlaf. Du schaust auf das Trinkprotokoll. Nimm dir Zeit — was du übersiehst, wird schlimmer.",
  kernSteps: [
    // Inline-Wissen: Atemzeichen-Vokabular — VOR Step 2.1 (damit die Brilliant-Frage offen bleibt,
    // aber die Vokabel "Atemfrequenz, Lippenbremse, Atemhilfsmuskulatur, Sputum" klar sind)
    {
      stepId: "ce02-kovac-beob-iw-atemzeichen-vokabular",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 1,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023", "I Care Pflege 2020"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-beob-atemzeichen-vokabular",
      tag: "krankheitslehre",
      contentC1: {
        title: "Atemzeichen — die Begriffe vorab",
        body: "Bevor du gleich Frau Kovač beobachtest: Diese Fachbegriffe brauchst du — kurz definiert.\n\n**Atemfrequenz** = Anzahl der Atemzüge pro Minute. Normal beim Erwachsenen: 12–20/Min.\n\n**Lippenbremse** = Ausatmungstechnik. Lippen leicht schließen, langsam ausatmen — wie durch einen Strohhalm.\n\n**Atemhilfsmuskulatur** = Hilfsmuskeln am Hals und an den Schultern, die nur bei Atemnot aktiv mitarbeiten. Sichtbar als Schulterheben beim Einatmen.\n\n**Sputum** = Auswurf, der beim Husten aus der Lunge nach oben kommt. Farbe und Menge sind klinisch wichtig.\n\n**Infektionszeichen** = Hinweise auf Entzündung — z.B. gelber/grüner Schleim, Fieber, schnellere Atmung.",
        glossarBegriffe: ["Atemfrequenz", "Lippenbremse", "Atemhilfsmuskulatur", "Sputum", "Infektionszeichen", "Husten"],
      },
      contentB1: {
        title: "Wichtige Wörter zur Atmung",
        body: "Bevor du Frau Kovač anschaust, lerne kurz die Wörter:\n\n**Atemfrequenz** = wie oft jemand pro Minute atmet. Normal: 12–20 Mal pro Minute.\n\n**Lippenbremse** = eine Atem-Technik. Du atmest aus mit fast geschlossenen Lippen — wie durch einen Strohhalm.\n\n**Atemhilfsmuskulatur** = Hilfs-Muskeln am Hals und an den Schultern. Sie helfen nur, wenn die Atmung schwer ist. Du siehst es: die Schultern gehen hoch beim Einatmen.\n\n**Sputum** = der Schleim, der beim Husten hochkommt. Die Farbe ist wichtig.\n\n**Infektionszeichen** = Hinweise auf eine Entzündung — z.B. gelber Schleim oder Fieber.",
        glossarBegriffe: ["Atemfrequenz", "Lippenbremse", "Atemhilfsmuskulatur", "Sputum", "Infektionszeichen", "Husten"],
      },
      inlineWissen: {
        bausteinRef: "atemzeichen-vokabular",
        storyAufhaenger:
          "Frau Kovač sitzt vor dir und atmet. Gleich wirst du beobachten und beschreiben, was du siehst. Damit du genau benennen kannst, was du siehst — hier die Vokabel-Liste.",
        storyAufhaengerB1:
          "Frau Kovač sitzt vor dir. Du wirst gleich genau beobachten. Damit du sagen kannst, was du siehst — hier die wichtigsten Wörter.",
        kerntext:
          "**Atemfrequenz** = Anzahl der Atemzüge pro Minute. Normal beim Erwachsenen: 12–20/Min.\n\n**Lippenbremse** = Ausatmungstechnik. Lippen leicht schließen, langsam ausatmen — wie durch einen Strohhalm.\n\n**Atemhilfsmuskulatur** = Hilfsmuskeln am Hals und an den Schultern, die nur bei Atemnot aktiv mitarbeiten. Sichtbar als Schulterheben beim Einatmen.\n\n**Sputum** = Auswurf, der beim Husten aus der Lunge nach oben kommt. Farbe und Menge sind klinisch wichtig.\n\n**Infektionszeichen** = Hinweise auf Entzündung — z.B. gelber/grüner Schleim, Fieber, schnellere Atmung.",
        kerntextB1:
          "**Atemfrequenz** = wie oft jemand pro Minute atmet. Normal: 12–20 Mal pro Minute.\n\n**Lippenbremse** = eine Atem-Technik. Lippen fast geschlossen — wie ein Strohhalm.\n\n**Atemhilfsmuskulatur** = Hilfs-Muskeln am Hals und an den Schultern. Sie helfen nur bei Atemnot.\n\n**Sputum** = der Schleim, der beim Husten hochkommt.\n\n**Infektionszeichen** = Hinweise auf eine Entzündung — z.B. gelber Schleim oder Fieber.",
        faustregel:
          "Atemfrequenz, Lippenbremse, Atemhilfsmuskulatur, Sputum, Infektionszeichen — diese 5 Begriffe sind das Vokabular für jede COPD-Beobachtung.",
        faustregelB1:
          "5 Wörter für die Atem-Beobachtung: Atemfrequenz, Lippenbremse, Atemhilfsmuskulatur, Sputum, Infektionszeichen.",
        karteikarte: {
          vorderseite: "Welche 5 Begriffe brauchst du, um Frau Kovačs Atmung systematisch zu beobachten und zu dokumentieren?",
          rueckseite: "Atemfrequenz (12–20/Min normal) · Lippenbremse (Ausatmungstechnik) · Atemhilfsmuskulatur (Schulterheben bei Atemnot) · Sputum (Auswurf, Farbe wichtig) · Infektionszeichen (gelber Schleim, Fieber, Tachypnoe).",
          vorderseiteB1: "Welche 5 Wörter brauchst du, um Frau Kovačs Atmung zu beschreiben?",
          rueckseiteB1: "Atemfrequenz, Lippenbremse, Atemhilfsmuskulatur, Sputum, Infektionszeichen.",
        },
      },
    },

    // Step 2.1 — BRILLIANT-FRAGE Atembeobachtung
    {
      stepId: "ce02-kovac-beob-01-atembeobachtung-brilliant",
      phase: 2,
      stepType: "freetext",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce02-kovac-ambulant-beob-atmung",
      tag: "pflege",
      contentC1: {
        title: "Was siehst du — bevor du nachliest?",
        body: "Du schaust Frau Kovač an. Sie sitzt aufrecht im Sessel, atmet ruhig, aber du bemerkst etwas. Bevor du nachliest, was bei COPD III 'normal' ist:\n\nBeschreibe in 2–3 Sätzen, was du bei der Atmung von Frau Kovač beobachten würdest. Was fällt auf? Was würdest du prüfen?\n\nEs gibt keine richtige oder falsche Antwort — du bereitest dich vor.",
        glossarBegriffe: [
          "Atemfrequenz",
          "Lippenbremse",
          "Atemhilfsmuskulatur",
          "Sputum",
        ],
      },
      contentB1: {
        title: "Was siehst du bei der Atmung?",
        body: "Du schaust Frau Kovač an. Sie sitzt im Sessel und atmet.\n\nBeschreibe in 1–2 Sätzen: Was siehst du bei ihrer Atmung? Was hörst du? Was fällt dir auf?\n\nEs gibt kein richtig oder falsch — du beschreibst, was du siehst.",
        glossarBegriffe: ["Atemfrequenz", "Lippenbremse"],
      },
      question: {
        fragetext:
          "Beschreibe in 2–3 Sätzen, was du bei Frau Kovačs Atmung beobachtest — bevor du die Erklärung liest.",
        musterantwort:
          "Erwartete Beobachtungspunkte: Atemfrequenz (12–20/Min normal), Einsatz der Atemhilfsmuskulatur (Schulterheben?), Lippenbremse spontan aktiv?, Atemgeräusche (Giemen, Brummen, Pfeifen?), Sputum-Farbe wenn Husten, Körperhaltung (Kutschersitz?). Frau Kovač sagt: \"Heute Nacht hab ich gehusten. Viel. Der Schleim will nicht raus.\" — gelber Schleim wäre Infektionszeichen.",
        bewertungskriterien: [
          "Mindestens 2 Beobachtungspunkte genannt",
          "Kein reines Wiederholen von Diagnosen",
          "Bezug auf aktuelle Situation (Nacht, Husten)",
        ],
        satzanfaengeB1: [
          "Ich sehe, dass ...",
          "Ich höre ...",
          "Ich bemerke ...",
          "Die Atmung ist ...",
        ],
      },
    },

    // Step 2.2 — COPD Atemzeichen Checkliste
    {
      stepId: "ce02-kovac-beob-02-copd-atemzeichen",
      phase: 2,
      stepType: "text",
      bloomLevel: 3,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-ambulant-beob-copd-checkliste",
      tag: "krankheitslehre",
      displayFormat: "checklist",
      bildkategorie: "szene",
      bildhinweis:
        "Ambulante Pflegekraft beobachtet ältere Frau beim Atmen im Sessel, Hände locker auf Oberschenkeln, morgendliches Licht, medizinisch-illustrativer Stil, kein Text",
      imageAlt:
        "Pflegekraft beobachtet die Atmung einer älteren Patientin im Sessel",
      contentC1: {
        title: "Was du bei COPD beobachten musst",
        body: "Bei Frau Kovač (COPD III) ist die Atembeobachtung keine Routine — sie gibt dir täglich Hinweise auf Verschlechterung oder Komplikation. Diese 7 Punkte musst du systematisch prüfen:\n\n✓ **Atemfrequenz** — Normal: 12–20 Atemzüge/Min. Tachypnoe (>20/Min) ist ein Warnsignal bei COPD.\n\n✓ **Atemhilfsmuskulatur** — Schulterheben beim Einatmen zeigt erhöhte Atemarbeit. Bei Frau Kovač mit Herzinsuffizienz zusätzlich beachten.\n\n✓ **Lippenbremse** — Ist sie spontan aktiv? (Pfeifen beim Ausatmen) Die Lippenbremse erhöht den intrabronchialen Druck und verhindert Atemwegskollaps (PEEP-Effekt).\n\n✓ **Atemgeräusche** — Giemen (hoch), Brummen (tief), Pfeifen (exspiratorisch) = Obstruktion. Knistern (inspiratorisch) = mögliches Lungenödem bei Herzinsuffizienz.\n\n✓ **Sputum-Farbe** — Weiß-klar = normal. Gelb-grün = Infektion (Arzt informieren!). Rostig-schaumig = Lungenödem.\n\n✓ **Körperhaltung** — Kutschersitz (vorgeneigt, Unterarme abgestützt) reduziert die Atemarbeit durch Fixierung der Atemhilfsmuskulatur — spontane Einnahme zeigt erhöhte Dyspnoe.\n\n✓ **SpO2** — Falls Pulsoximeter vorhanden: Im **stabilen Zustand** sind bei COPD III oft Werte >92 % normal. Der Zielkorridor 88–92 % gilt **bei akuter Exazerbation und unter Sauerstofftherapie** (BTS Emergency Oxygen 2017, GOLD 2023). Eine **fallende** SpO2 unter 92 % bei Frau Kovač im stabilen Zustand ist immer klärungsbedürftig — nicht 'normal'. Quelle: (GOLD-Report COPD 2023; BTS Emergency Oxygen 2017)",
        fallbezug:
          "Frau Kovač hat heute Nacht viel gehustet — sie sagt: \"Der Schleim will nicht raus.\" Das kann auf verdickte Sekrete durch Dehydration hinweisen (Trinkmenge 820 ml) oder auf eine beginnende Infektion (gelber Schleim?).",
        glossarBegriffe: [
          "Tachypnoe",
          "Lippenbremse",
          "Atemhilfsmuskulatur",
          "Sputum",
          "Kutschersitz",
          "SpO2",
          "PEEP-Effekt",
          "Fixierung",
          "Arzt",
          "Trinken",
          "COPD",
          "Herzinsuffizienz",
          "Ziel",
          "Obstruktion",
          "Pulsoximeter",
        ],
      },
      contentB1: {
        title: "7 Dinge bei der Atmung beobachten",
        body: "Bei COPD musst du die Atmung genau beobachten. Hier sind die 7 wichtigsten Punkte:\n\n✓ **Atemfrequenz** — Wie oft atmet sie pro Minute? Normal: 12–20 Mal. Schneller = Warnsignal.\n\n✓ **Schulterheben** — Hebt sie die Schultern beim Einatmen hoch? Das zeigt: Die Atmung ist anstrengend.\n\n✓ **Lippenbremse** — Atmet sie durch leicht geschlossene Lippen aus? (Wie durch einen Strohhalm.) Das hilft der Lunge.\n\n✓ **Atemgeräusche** — Hörst du Pfeifen oder Brummen? Das zeigt: Die Luftwege sind eng.\n\n✓ **Schleim-Farbe** — Welche Farbe hat der Schleim wenn sie hustet? Weiß = ok. Gelb-grün = möglicherweise Infektion → Arzt informieren.\n\n✓ **Körperhaltung** — Sitzt sie vorgebeugt mit Armen auf den Knien? Das ist der Kutschersitz — er erleichtert die Atmung.\n\n✓ **SpO2 (Sauerstoff im Blut)** — Falls ein Gerät vorhanden ist: Im stabilen Zustand sind bei Frau Kovač Werte über 92 % normal. Der Bereich 88–92 % ist nur das Ziel **wenn sie akut Atemnot hat und Sauerstoff bekommt**. Wenn der Wert plötzlich unter 92 % fällt — **nicht** sagen 'das ist bei COPD so', sondern beobachten und melden. Quelle: (GOLD-Report COPD 2023)",
        fallbezug:
          "Frau Kovač hat heute Nacht viel gehustet. Sie sagt: \"Der Schleim will nicht raus.\" Das könnte an zu wenig Trinken liegen — oder an einer Infektion.",
        glossarBegriffe: [
          "Atemfrequenz",
          "Lippenbremse",
          "Kutschersitz",
          "SpO2",
          "Fixierung",
          "Arzt",
          "Trinken",
          "COPD",
          "Herzinsuffizienz",
          "Ziel",
          "Obstruktion",
          "Pulsoximeter",
        ],
      },
    },

    // Step 2.3 — Gelenke categorize
    {
      stepId: "ce02-kovac-beob-03-gelenke-assessment",
      phase: 2,
      stepType: "categorize",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "MDS/Medizinischer Dienst 2018 — Kontrakturrisiko ambulant",
        "DNQP Erhaltung und Förderung der Mobilität 2017/2024",
        "DNQP Expertenstandard Schmerzmanagement in der Pflege 2020",
        "Wells et al. 2003 — TVT-Score",
      ],
      track: "basis",
      modus: "puzzle",
      lernziel: "ce02-kovac-ambulant-beob-kontraktur",
      tag: "krankheitslehre",
      contentC1: {
        title: "Gelenk-Assessment: Was siehst du?",
        body: "**Vokabel-Block — vier Begriffe vorab:**\n\n**Kontraktur** = dauerhafte Bewegungseinschränkung eines Gelenks durch Verkürzung von Muskeln, Sehnen oder Kapseln.\n\n**Extensionsdefizit** = das Gelenk lässt sich nicht vollständig strecken (z.B. Knie bleibt um 15° gebeugt).\n\n**VAS** = Visuelle Analogskala für Schmerz, 0 (kein Schmerz) bis 10 (stärkster Schmerz). Standard-Instrument der Schmerz-Erfassung.\n\n**DNQP** = Deutsches Netzwerk für Qualitätsentwicklung in der Pflege — gibt die nationalen Expertenstandards heraus (z.B. DNQP Schmerzmanagement 2020).\n\n---\n\nDu schaust dir Frau Kovačs Kniegelenke an. Ordne die Befunde in drei Kategorien ein:\n\n- **Normalbefund** (kein Hinweis): keine Auffälligkeit, keine Maßnahme nötig.\n- **Kontraktur-Zeichen** (chronisch bekannt, dokumentationspflichtig): gehört zum bekannten Krankheitsbild — beobachten, dokumentieren, ggf. mit Physiotherapie abstimmen. Auch milder Schmerz (VAS 1-3) bei Bewegung gehört hierher: nach DNQP Schmerzmanagement immer zu dokumentieren, ab VAS ≥4 interventionspflichtig.\n- **Akutes Warnsignal** (jetzt Arzt-Rücksprache): **neue** Befunde, die nicht zum bekannten Krankheitsbild passen — TVT-Verdacht, Entzündungszeichen.\n\nQuelle: (MDS/Medizinischer Dienst 2018; DNQP Schmerzmanagement 2020)",
        glossarBegriffe: [
          "Kontraktur",
          "Extensionsdefizit",
          "Flexionskontraktur",
          "VAS",
          "DNQP",
        ],
      },
      contentB1: {
        title: "Was ist normal — was ist ein Warnsignal?",
        body: "**Vier Wörter vorab:**\n\n**Kontraktur** = ein Gelenk lässt sich nicht mehr richtig bewegen, weil Muskeln oder Sehnen kürzer geworden sind. Es bleibt steif.\n\n**Extensionsdefizit** = das Gelenk geht nicht mehr ganz gerade. Beispiel: das Knie bleibt um 15 Grad gebeugt.\n\n**VAS** = visuelle Skala für Schmerz: 0 = kein Schmerz, 10 = stärkster Schmerz.\n\n**Schmerz-Skala** = ein Erhebungs-Instrument für Schmerzen, das einen Zahlen- oder Bildwert von 0 bis 10 abfragt.\n\n**DNQP** = ein deutsches Netzwerk, das Pflege-Standards macht (z.B. für die Schmerz-Pflege).\n\n---\n\nDu schaust auf Frau Kovačs Knie. Es gibt 3 Kategorien:\n\n- **Normalbefund** = nichts Auffälliges, keine Maßnahme.\n- **Kontraktur-Zeichen** = bekanntes Problem. Beobachten und aufschreiben.\n- **Akutes Warnsignal** = etwas Neues. Jetzt Arzt informieren.\n\nWichtig: Auch leichter Schmerz (z.B. VAS 3 von 10) ist nicht 'normal'. Du musst ihn aufschreiben (Standard DNQP Schmerz). Ab VAS 4 musst du etwas dagegen tun.",
        glossarBegriffe: ["Kontraktur", "Extensionsdefizit", "VAS", "Schmerz-Skala", "DNQP"],
      },
      question: {
        fragetext:
          "Ordne die Kniebefunde in die richtige Kategorie ein.",
        categories: [
          { name: "Normalbefund" },
          { name: "Kontraktur-Zeichen" },
          { name: "Akutes Warnsignal" },
        ],
        categoryItems: [
          {
            text: "Extensionsdefizit ca. 15° — Knie streckt sich nicht vollständig",
            correctCategory: 1,
          },
          {
            text: "Rötung und Wärme über dem Knie",
            correctCategory: 2,
          },
          {
            text: "Schmerz bei Bewegung VAS 3/10 — chronisch bekannt, dokumentationspflichtig",
            correctCategory: 1,
          },
          {
            text: "Haut über dem Knie gespannt, glänzend",
            correctCategory: 2,
          },
          {
            text: "**Neue** Umfangsdifferenz linkes/rechtes Bein ≥2 cm gegenüber Vortagen",
            correctCategory: 2,
          },
          {
            text: "Morgensteifigkeit die sich nach 10–15 Min bessert",
            correctCategory: 1,
          },
        ],
      },
    },

    // Inline-Wissen: Einschlaflatenz — VOR Step 2.4 (Dialog nutzt den Begriff)
    {
      stepId: "ce02-kovac-beob-iw-einschlaflatenz",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["ICSD-3 (International Classification of Sleep Disorders, 3. Aufl. 2014)"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-beob-einschlaflatenz",
      tag: "krankheitslehre",
      contentC1: {
        title: "Was ist Einschlaflatenz?",
        body: "",
        glossarBegriffe: ["Einschlaflatenz"],
      },
      contentB1: {
        title: "Was bedeutet Einschlaflatenz?",
        body: "",
        glossarBegriffe: ["Einschlaflatenz"],
      },
      inlineWissen: {
        bausteinRef: "einschlaflatenz",
        storyAufhaenger:
          "Frau Kovač sagt: \"Ich lieg dann und denk. Irgendwann schlaf ich ein.\" Aber wie lang ist \"irgendwann\"? In der Schlafmedizin gibt es dafür einen Fachbegriff — und eine Grenze, ab der es klinisch relevant wird.",
        storyAufhaengerB1:
          "Frau Kovač sagt: \"Ich liege lange wach und denke.\" Wie lange dauert es, bis sie einschläft? Dafür gibt es einen Fachbegriff.",
        kerntext:
          "**Einschlaflatenz** ist die Zeit vom Hinlegen mit Schlafabsicht bis zum tatsächlichen Einschlafen. Normal sind **10–20 Minuten**. Ab **>30 Minuten** an mindestens 3 Nächten pro Woche über ≥3 Monate spricht man von einer **Insomnie** nach ICSD-3-Kriterien.\n\nDie Einschlaflatenz ist ein zentrales Kriterium der Schlafanamnese — sie unterscheidet \"ab und zu schlecht geschlafen\" von einer behandlungsbedürftigen Schlafstörung. Bei Frau Kovač (COPD III + Herzinsuffizienz) kommen erschwerend hinzu: nächtlicher Husten, Dyspnoe im Liegen und Nykturie — Faktoren die die Einschlaflatenz unabhängig verlängern.\n\nQuelle: (ICSD-3 2014; DGSM S3-Leitlinie Insomnie 2017)",
        kerntextB1:
          "**Einschlaflatenz** = die Zeit, bis du einschläfst. Normal: 10–20 Minuten.\n\nWenn jemand **länger als 30 Minuten** braucht, an mindestens 3 Nächten pro Woche, und das über 3 Monate — dann ist das eine **Schlafstörung** (Insomnie).\n\nBei Frau Kovač kommen noch Husten, Atemnot und häufiges Aufstehen nachts dazu. Das macht das Einschlafen noch schwieriger.",
        faustregel:
          "Einschlaflatenz >30 Min, ≥3 Nächte/Woche, ≥3 Monate = Insomnie-Verdacht. Bei der Schlafanamnese immer konkret nach Minuten fragen.",
        faustregelB1:
          "Mehr als 30 Minuten zum Einschlafen, 3 Nächte pro Woche, 3 Monate lang = Schlafstörung. Immer genau fragen: Wie viele Minuten?",
        karteikarte: {
          vorderseite: "Frau Kovač liegt \"lang\" wach bevor sie einschläft. Wie heißt das in der Fachsprache — und ab wann ist es klinisch relevant?",
          rueckseite: "Einschlaflatenz = Zeit vom Hinlegen bis Einschlafen. Normal: 10–20 Min. Klinisch relevant (Insomnie-Kriterium ICSD-3): >30 Min an ≥3 Nächten/Woche über ≥3 Monate. Bei Frau Kovač verlängert durch COPD-Husten, Dyspnoe und Nykturie.",
          vorderseiteB1: "Frau Kovač liegt lange wach. Wie heißt das? Wann ist es eine Schlafstörung?",
          rueckseiteB1: "Einschlaflatenz = Zeit bis zum Einschlafen. Normal: 10–20 Minuten. Schlafstörung: mehr als 30 Minuten, 3 Nächte pro Woche, 3 Monate lang.",
        },
      },
    },

    // Step 2.4 — Schlafanamnese Dialog
    {
      stepId: "ce02-kovac-beob-04-schlafanamnese",
      phase: 2,
      stepType: "dialog",
      bloomLevel: 3,
      kompetenzbereich: "V.1",
      quellen: ["DGSM S3-Leitlinie Insomnie 2017"],
      track: "basis",
      modus: "story",
      lernziel: "ce02-kovac-ambulant-beob-schlaf",
      tag: "pflege",
      contentC1: {
        title: "Schlaf-Anamnese im Gespräch",
        body: "Frau Kovač schläft schlecht — das weiß du aus der Übergabe. Aber wie genau? Wann schläft sie ein? Wann wacht sie auf? Warum macht sie den Fernseher an? Gute Anamnese heißt: offene Fragen stellen, präzise nachfragen, nicht werten.",
        glossarBegriffe: ["Insomnie", "Einschlaflatenz", "Schlafhygiene"],
      },
      contentB1: {
        title: "Gespräch über den Schlaf",
        body: "Du fragst Frau Kovač nach dem Schlaf. Sie schläft schlecht. Du möchtest genau wissen: Wann schläft sie ein? Wann wacht sie auf? Warum macht sie den Fernseher an?",
        glossarBegriffe: ["Insomnie", "Einschlaflatenz"],
      },
      question: {
        fragetext: "Wähle die beste Frage in jeder Dialogphase.",
        patientName: "Frau Kovač",
        dialogPhases: [
          {
            context:
              "Du fragst Frau Kovač nach dem Schlafen. Sie hat in der Übergabe 'schläft schlecht' stehen.",
            contextB1:
              "Du fragst nach dem Schlaf. In der Übergabe steht: schläft schlecht.",
            speaker: "Du",
            options: [
              {
                text: "\"Frau Kovač, wann gehen Sie abends ins Bett?\"",
                textB1: "\"Frau Kovač, wann gehen Sie abends schlafen?\"",
                patientResponse:
                  "\"Nach dem Film. So gegen elf, halb zwölf.\"",
                patientResponseB1: "\"Nach dem Film. So um elf, halb zwölf.\"",
                score: 3,
                feedback:
                  "Offene Frage, konkret und unangreifbar. Du erfährst die Schlafzeit ohne Wertung. Weiter zur nächsten Phase.",
                feedbackB1:
                  "Gut. Offene Frage. Du erfährst wann sie schlafen geht.",
              },
              {
                text: "\"Warum sehen Sie so spät noch fern?\"",
                textB1: "\"Warum schauen Sie abends so lange fern?\"",
                patientResponse:
                  "Frau Kovač sieht dich kurz an. \"Weil ich es will.\"",
                patientResponseB1:
                  "Frau Kovač schaut kurz. \"Weil ich es will.\"",
                score: 0,
                feedback:
                  "Wertend. Die Frage 'Warum' mit implizitem Vorwurf schließt das Gespräch. Frau Kovač wird sich verteidigen statt antworten. Anamnese ist keine Verhandlung.",
                feedbackB1:
                  "Nicht gut. Die Frage klingt wie Kritik. Frau Kovač sagt dann nichts mehr.",
              },
            ],
          },
          {
            context:
              "Frau Kovač sagt: \"Nach dem Film. So gegen elf, halb zwölf.\" Du fragst weiter.",
            contextB1:
              "Frau Kovač sagt: \"Um elf oder halb zwölf.\" Du fragst weiter.",
            speaker: "Du",
            options: [
              {
                text: "\"Und wann schlafen Sie ein?\"",
                textB1: "\"Und wann schlafen Sie dann ein?\"",
                patientResponse:
                  "\"Lange. Ich lieg dann und denk. Dann schlaf ich irgendwann. Dann bin ich wieder wach. Um zwei hab ich aufgehört zu versuchen und den Fernseher angemacht.\"",
                patientResponseB1:
                  "\"Lang. Ich denke dann viel. Irgendwann schlafe ich ein. Dann bin ich um zwei wach. Dann habe ich den Fernseher angemacht.\"",
                score: 3,
                feedback:
                  "Präzise Nachfrage — du erhebst die Einschlaflatenz (klinisch wichtig für Insomnie-Assessment). Frau Kovač gibt dir damit fast die vollständige Schlafanamnese.",
                feedbackB1:
                  "Gut. Du fragst genau nach. Frau Kovač erzählt mehr.",
              },
              {
                text: "\"Das müssen Sie mit dem Arzt besprechen.\"",
                textB1: "\"Das müssen Sie dem Arzt sagen.\"",
                patientResponse:
                  "\"Dem hab ich schon alles gesagt. Er sagt, das ist Alter.\"",
                patientResponseB1:
                  "\"Dem hab ich schon gesagt. Er sagt: das ist Alter.\"",
                score: 0,
                feedback:
                  "Gesprächsabbruch und Verantwortungsweitergabe. Du bist jetzt bei ihr — der Arzt ist nicht dabei. Die Anamnese gehört zu deiner Aufgabe, nicht nur zum Arzt.",
                feedbackB1:
                  "Nicht gut. Du brichst das Gespräch ab. Die Anamnese ist auch deine Aufgabe.",
              },
            ],
          },
          {
            context:
              "Frau Kovač hat erzählt: Einschlaflatenz lang, nächtliches Erwachen, TV als Kompensation. Du wählst die nächste Frage.",
            contextB1:
              "Frau Kovač hat erzählt: sie schläft spät ein, wacht nachts auf, macht den Fernseher an. Du fragst weiter.",
            speaker: "Du",
            options: [
              {
                text: "\"Haben Sie tagsüber manchmal Schlafepisoden — also dass Sie plötzlich einschlafen oder sehr müde werden?\"",
                textB1:
                  "\"Schlafen Sie tagsüber manchmal — zum Beispiel am Nachmittag?\"",
                patientResponse:
                  "\"Ja, manchmal. Nach dem Mittagessen mach ich die Augen zu. Kurz.\"",
                patientResponseB1:
                  "\"Ja, manchmal. Nach dem Mittag mache ich kurz die Augen zu.\"",
                score: 3,
                feedback:
                  "Klinisch wichtig. Tagesschläfrigkeit hilft, zwischen primärer Insomnie und zirkadianer Störung zu unterscheiden. Bei Frau Kovač: möglicherweise Schlaf-Kompensation tagsüber, was den Nachtschlaf weiter verschlechtert.",
                feedbackB1:
                  "Gut. Das ist eine wichtige Frage. Tagesschlaf beeinflusst den Nachtschlaf.",
              },
              {
                text: "\"Nehmen Sie Schlaftabletten?\"",
                textB1: "\"Nehmen Sie Medikamente zum Schlafen?\"",
                patientResponse:
                  "\"Nein. Der Arzt wollte mir welche geben. Ich hab abgelehnt. Die machen süchtig.\"",
                patientResponseB1:
                  "\"Nein. Ich will keine. Die machen süchtig.\"",
                score: 1,
                feedback:
                  "Guter Ansatz — Medikamenten-Anamnese ist immer wichtig und gehört in jedes Schlaf-Assessment. Aber: Tagesschläfrigkeit wäre **stattdessen** die prioritäre nächste Frage gewesen, **weil** sie zwischen primärer Insomnie und zirkadianer Rhythmusstörung unterscheiden hilft. Beim nächsten Mal: erst Schlafmuster komplettieren, dann Medikamente.",
                feedbackB1:
                  "Guter Ansatz — Medikamente fragen ist wichtig. Aber **stattdessen** wäre die wichtigere Frage jetzt: Schläft sie tagsüber? **Weil** Tagesschlaf den Nachtschlaf erklären kann.",
              },
            ],
          },
        ],
      },
    },

    // Inline-Wissen: Flüssigkeitsbilanz — VOR Step 2.5 (Trinkprotokoll-Berechnung)
    {
      stepId: "ce02-kovac-beob-iw-flüssigkeitsbilanz",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: [
        "ESC Heart Failure Guidelines 2023",
        "DGE (2024): Referenzwerte Wasserzufuhr",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-beob-flüssigkeitsbilanz",
      tag: "pflege",
      contentC1: {
        title: "Was ist eine Flüssigkeitsbilanz?",
        body: "",
        glossarBegriffe: ["Flüssigkeitsbilanz"],
      },
      contentB1: {
        title: "Was bedeutet Flüssigkeitsbilanz?",
        body: "",
        glossarBegriffe: ["Flüssigkeitsbilanz"],
      },
      inlineWissen: {
        bausteinRef: "flüssigkeitsbilanz",
        storyAufhaenger:
          "Auf Frau Kovačs Küchentisch liegt das Trinkprotokoll von gestern. 6 Einträge, handschriftlich. Gleich wirst du die Summe berechnen — aber vorher musst du verstehen, was eine Flüssigkeitsbilanz eigentlich misst und warum der Zielwert bei Frau Kovač nicht der Standard-Wert ist.",
        storyAufhaengerB1:
          "Auf dem Küchentisch liegt das Trinkprotokoll. Du wirst gleich zusammenrechnen, wie viel Frau Kovač getrunken hat. Aber zuerst: Was ist eine Flüssigkeitsbilanz — und warum ist bei ihr der Zielwert anders?",
        kerntext:
          "Die **Flüssigkeitsbilanz** erfasst die Gegenüberstellung von **Einfuhr** (Trinkmenge + Infusionen + Sondenkost) und **Ausfuhr** (Urin + Erbrechen + Drainage + Schweiß). Im ambulanten Setting wird meist nur die Trinkmenge dokumentiert (vereinfachte Bilanz).\n\nDie allgemeine Empfehlung für Gesunde liegt bei **≥1.500 ml/Tag** (DGE/DNQP). Bei Frau Kovač gilt dieser Wert **nicht**: Herzinsuffizienz NYHA II + Furosemid 40 mg bedeuten, dass der Hausarzt einen **individuellen Zielwert** festlegt — hier **1.200 ml/Tag als Obergrenze**, nicht als Untergrenze. Zu viel Flüssigkeit belastet das insuffiziente Herz; zu wenig verdickt das Bronchialsekret bei COPD.\n\nQuelle: (ESC Heart Failure Guidelines 2023; DGE Referenzwerte Wasserzufuhr 2024)",
        kerntextB1:
          "**Flüssigkeitsbilanz** = Wie viel kommt rein (Trinken) und wie viel kommt raus (Urin, Schweiß). Ambulant schreibt man meist nur das Trinken auf.\n\nNormaler Zielwert für Gesunde: **1.500 ml pro Tag**. Frau Kovač hat eine **Herzschwäche und nimmt eine Wassertablette** (Furosemid). Deshalb hat der Hausarzt einen anderen Wert festgelegt: **1.200 ml pro Tag**. Mehr wäre schlecht fürs Herz. Weniger ist schlecht für die Lunge (der Schleim wird zäh).",
        faustregel:
          "Flüssigkeitsbilanz = Einfuhr minus Ausfuhr. Bei Herzinsuffizienz + Diuretikum: Zielwert immer ärztlich individuell — nie den Standardwert 1.500 ml blind übernehmen.",
        faustregelB1:
          "Flüssigkeitsbilanz = Trinken minus Ausscheidung. Bei Herzschwäche: Der Arzt legt den Zielwert fest — nicht der Standardwert von 1.500 ml.",
        karteikarte: {
          vorderseite: "Frau Kovačs Trinkprotokoll zeigt 800 ml. Wie heißt die Gegenüberstellung von Einfuhr und Ausfuhr — und warum gilt bei ihr nicht der Standard-Zielwert?",
          rueckseite: "Flüssigkeitsbilanz = Einfuhr (Trinkmenge, Infusion) vs. Ausfuhr (Urin, Schweiß). Standard: ≥1.500 ml/Tag (DGE/DNQP). Bei Herzinsuffizienz + Furosemid ärztlich individuell: hier 1.200 ml/Tag (ESC 2023). Zu viel = Herzbelastung. Zu wenig = zähes Sekret bei COPD.",
          vorderseiteB1: "Was ist eine Flüssigkeitsbilanz? Warum darf Frau Kovač nicht einfach 1.500 ml trinken?",
          rueckseiteB1: "Flüssigkeitsbilanz = Trinken gegen Ausscheidung rechnen. Standard: 1.500 ml/Tag. Frau Kovač: 1.200 ml/Tag (Arzt-Vorgabe wegen Herzschwäche). Mehr wäre schlecht fürs Herz.",
        },
      },
    },

    // Step 2.5 — Trinkprotokoll calculation
    {
      stepId: "ce02-kovac-beob-05-trinkprotokoll-auswerten",
      phase: 2,
      stepType: "calculation",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "ESC Heart Failure Guidelines 2023",
        "GOLD-Report COPD 2023",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-kovac-ambulant-beob-flüssigkeit",
      tag: "anatomie",
      contentC1: {
        title: "Trinkprotokoll auswerten",
        body: "Du nimmst das Trinkprotokoll vom Küchentisch. Frau Kovač hat gestern eingetragen:\n\n07:30 — Kaffee: 150 ml\n09:00 — Wasser: 100 ml\n12:00 — Suppe: 200 ml\n15:30 — Tee: 100 ml\n18:30 — Abend-Kaffee: 100 ml\n21:00 — Wasser: 150 ml\n\nBerechne die Gesamttrinkmenge im Protokoll. **Hinweis zur Diskrepanz:** Petras Übergabezettel nennt 820 ml — das Protokoll ergibt 800 ml. Petra hat überschlagen, du rechnest exakt aus dem Protokoll. Solche kleinen Differenzen sind in ambulanter Praxis normal und keine Dokumentations-Lücke.\n\n**Wichtig — der Zielwert für Frau Kovač:**\nDNQP = Deutsches Netzwerk für Qualitätsentwicklung in der Pflege (gibt deutsche Pflege-Standards heraus). Die allgemeine DNQP/DGE-Empfehlung für Gesunde liegt bei 1.500 ml/Tag. Diese Empfehlung gilt für Frau Kovač **nicht 1:1**. Bei Herzinsuffizienz NYHA II + Furosemid (40 mg) ist die Trinkmenge ärztlich individuell festzulegen — die ESC Heart Failure Guidelines 2023 nennen für stabile Herzinsuffizienz häufig **1.200 ml/Tag als ärztlich vereinbarte Obergrenze**, NICHT als Untergrenze. Im Pflegeplan von Frau Kovač ist mit dem Hausarzt **1.200 ml/Tag** als individuelles Tagesziel vereinbart. Berechne deshalb das Defizit zu **diesem ärztlich festgelegten Wert** — nicht zur Generic-Empfehlung von 1.500 ml. (ESC Heart Failure Guidelines 2023; DGE Referenzwerte Wasserzufuhr 2024)",
        glossarBegriffe: ["Flüssigkeitsbilanz", "Exsikkose", "DNQP"],
      },
      contentB1: {
        title: "Wie viel hat Frau Kovač getrunken?",
        body: "Das Trinkprotokoll zeigt:\n- 07:30 Kaffee: 150 ml\n- 09:00 Wasser: 100 ml\n- 12:00 Suppe: 200 ml\n- 15:30 Tee: 100 ml\n- 18:30 Kaffee: 100 ml\n- 21:00 Wasser: 150 ml\n\nAddiere alle Mengen zusammen.\n\n**Wichtig:** Petras Zettel sagt 820 ml. Das Protokoll ergibt 800 ml. Das ist normal — Petra hat geschätzt, du rechnest genau.\n\n**Wichtig zum Zielwert:** Die 1.500 ml sind eine **allgemeine Empfehlung für Gesunde** (DNQP). Frau Kovač hat **Herz-Schwäche und das Wasser-Tabletten Furosemid**. Deshalb hat der Hausarzt für sie **1.200 ml pro Tag als Obergrenze** festgelegt. Du rechnest gegen diesen Wert — **nicht** gegen 1.500 ml.",
        glossarBegriffe: ["Flüssigkeitsbilanz"],
      },
      question: {
        fragetext:
          "Berechne die Gesamttrinkmenge nach dem Protokoll. Wie viel fehlt bis zum ärztlich vereinbarten Tagesziel von 1.200 ml?",
        calculation: {
          instruction:
            "Addiere die Trinkmengen des gestrigen Tages aus dem Protokoll. Ärztlich vereinbartes Tagesziel für Frau Kovač: 1.200 ml/Tag (Hausarzt, individuell wegen NYHA II + Furosemid).",
          formula:
            "Gesamt = 150 + 100 + 200 + 100 + 100 + 150 = ? ml. Defizit zum ärztlich vereinbarten Ziel = 1.200 – Gesamt = ? ml",
          correctValue: 800,
          unit: "ml (Gesamttrinkmenge laut Protokoll)",
          tolerance: 0,
          explanation:
            "800 ml — das ist deutlich unter dem ärztlich vereinbarten Tagesziel von 1.200 ml. Defizit: 400 ml.\n\n**Warum 1.200 ml und nicht 1.500 ml?**\nDie DNQP-Empfehlung von 1.500 ml gilt für Gesunde. Frau Kovač hat Herzinsuffizienz NYHA II und nimmt Furosemid 40 mg morgens (= Schleifendiuretikum). Die ESC Heart Failure Guidelines 2023 empfehlen bei stabiler Herzinsuffizienz häufig eine ärztlich festgelegte Trinkmengen-Obergrenze von 1.000-1.500 ml — bei Frau Kovač im Pflegeplan: 1.200 ml/Tag.\n\n**Heißt das, sie soll noch weniger trinken?** Nein — 800 ml sind zu wenig. Bei COPD fördert ausreichende Flüssigkeit die Sekretverflüssigung. Das Ziel ist **schrittweise auf 1.200 ml** steigern, nicht überschreiten. Bei einer aktuellen Trinkmenge von 750-950 ml (Pflegeplan-Status) ist das Defizit das Hauptproblem — nicht eine Überschreitung. (ESC Heart Failure Guidelines 2023; DGE Referenzwerte Wasserzufuhr 2024)",
          explanationB1:
            "800 ml — das ist zu wenig. Das Ziel vom Hausarzt ist 1.200 ml pro Tag. Es fehlen also 400 ml.\n\n**Warum nicht 1.500 ml?**\n1.500 ml gilt für gesunde Menschen. Frau Kovač hat eine Herz-Schwäche und nimmt das Wasser-Tabletten Furosemid. Deshalb hat der Hausarzt einen niedrigeren Wert festgelegt: 1.200 ml/Tag — als **Obergrenze**.\n\n**Soll sie weniger trinken?** Nein — 800 ml sind immer noch zu wenig. Bei COPD braucht die Lunge Wasser, damit der Schleim flüssiger wird. Das Ziel ist: langsam auf 1.200 ml hoch.",
        },
      },
    },

    // Step 2.6 — Thrombose TrueFalse
    {
      stepId: "ce02-kovac-beob-06-oedeme-thrombose-blick",
      phase: 2,
      stepType: "truefalse",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: [
        "AWMF S3-Leitlinie VTE-Prophylaxe 2015",
        "GOLD-Report COPD 2023",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce02-kovac-ambulant-beob-thrombose",
      tag: "krankheitslehre",
      contentC1: {
        title: "Thromboserisiko einschätzen",
        body: "Frau Kovač trägt keine Kompressionsstrümpfe, sitzt viel, hat Herzinsuffizienz mit Unterschenkelödemen. Prüfe dein Wissen: Was stimmt, was stimmt nicht?",
        glossarBegriffe: [
          "Thrombose",
          "Virchow-Trias",
          "Stase",
          "Kompressionstherapie",
        ],
      },
      contentB1: {
        title: "Was ist richtig — was ist falsch?",
        body: "Frau Kovač trägt keine Kompressionsstrümpfe. Sie sitzt viel. Ihre Beine sind geschwollen. Prüfe: Was ist richtig, was ist falsch?",
        glossarBegriffe: ["Thrombose", "Kompressionsstrümpfe"],
      },
      question: {
        fragetext:
          "Richtig oder falsch? Prüfe die folgenden Aussagen zum Thromboserisiko von Frau Kovač.",
        trueFalseCards: [
          {
            statement:
              "Frau Kovač trägt keine Kompressionsstrümpfe und sitzt viel — das erhöht die venöse Stase in den Beinvenen.",
            isTrue: true,
            explanation:
              "Richtig. Venöse Stase (verlangsamter Blutfluss in den Venen) ist einer der drei Faktoren der Virchow-Trias. Bei Immobilität ohne Kompression akkumuliert Blut in den Venen der Beine — Thrombosegefahr steigt.",
          },
          {
            statement:
              "ASS 100 mg täglich ersetzt die Kompressionstherapie vollständig — Frau Kovač ist durch die Tabletten ausreichend geschützt.",
            isTrue: false,
            explanation:
              "Falsch. ASS (Acetylsalicylsäure) hemmt die Thrombozytenaggregation — wirkt auf die arterielle Thrombose (Herzinfarkt, Schlaganfall-Prophylaxe). Tiefe Venenthrombosen entstehen durch Stase + Gerinnungsaktivierung — hier wirkt ASS kaum. Kompressionsstrümpfe wirken mechanisch auf Stase. Beides ergänzt sich.",
          },
          {
            statement:
              "Bei Herzinsuffizienz mit Unterschenkelödemen ist die Thrombosegefahr erhöht.",
            isTrue: true,
            explanation:
              "Richtig. Ödeme entstehen durch erhöhten hydrostatischen Druck und verminderte Albumin-Konzentration. Sie verschlechtern die Mikrozirkulation und erhöhen das lokale Thromboserisiko (Virchow-Trias: Stase + Gewebsdruck auf Gefäße).",
          },
          {
            statement:
              "Wenn Frau Kovač keine Beschwerden in den Beinen hat, ist kein Thromboserisiko vorhanden.",
            isTrue: false,
            explanation:
              "Falsch. Tiefe Beinvenenthrombosen (TVT) verlaufen in über 50 % der Fälle asymptomatisch oder zeigen nur unspezifische Symptome. Das Fehlen von Beschwerden schließt eine TVT nicht aus — das Risikoprofil (Alter, Immobilität, Herzinsuffizienz, keine Kompression) ist entscheidend.",
          },
        ],
      },
    },
    // Inline-Wissen: FEV1 — VOR Opt-2.A (Flipcard COPD-Stadien nutzt den Begriff)
    {
      stepId: "ce02-kovac-beob-iw-fev1",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-beob-fev1",
      tag: "krankheitslehre",
      contentC1: {
        title: "Was ist FEV1?",
        body: "",
        glossarBegriffe: ["FEV1"],
      },
      contentB1: {
        title: "Was bedeutet FEV1?",
        body: "",
        glossarBegriffe: ["FEV1"],
      },
      inlineWissen: {
        bausteinRef: "fev1",
        storyAufhaenger:
          "Frau Kovač hat COPD Stadium III. Der Arzt hat das mit einer Lungenfunktionsprüfung festgestellt — und der wichtigste Wert dabei heißt FEV1. Bevor du die 4 COPD-Stadien lernst, musst du verstehen, was FEV1 misst.",
        storyAufhaengerB1:
          "Frau Kovačs COPD ist auf Stufe 3. Woher weiß man das? Es gibt einen Test für die Lunge. Der wichtigste Wert heißt FEV1.",
        kerntext:
          "**FEV1** (Forciertes Exspiratorisches Volumen in 1 Sekunde) ist das Luftvolumen, das ein Patient nach maximaler Einatmung in der **ersten Sekunde** einer forcierten Ausatmung ausstoßen kann. Es wird in Litern gemessen und als **Prozent des alters- und geschlechtsabhängigen Sollwerts** angegeben.\n\nFEV1 ist der zentrale Parameter der GOLD-Klassifikation für COPD:\n- GOLD I (leicht): FEV1 ≥80 % Soll\n- GOLD II (mittel): FEV1 50–79 %\n- GOLD III (schwer): FEV1 30–49 %\n- GOLD IV (sehr schwer): FEV1 <30 %\n\nFrau Kovač mit COPD GOLD III hat also nur noch **30–49 % der normalen Ausatemkraft** in der ersten Sekunde. Das erklärt, warum sie nach 3 Minuten Atemübungen erschöpft ist.\n\nQuelle: (GOLD-Report COPD 2023)",
        kerntextB1:
          "**FEV1** = Wie viel Luft du in der **ersten Sekunde** kräftig ausatmen kannst. Das wird in Prozent angegeben — verglichen mit gesunden Menschen gleichen Alters.\n\nBei Frau Kovač (COPD Stufe 3) ist der FEV1-Wert nur noch **30–49 %** von normal. Sie kann also nur noch die Hälfte oder weniger der normalen Luftmenge schnell ausatmen. Deshalb ist sie so schnell erschöpft.",
        faustregel:
          "FEV1 = Sekundenkapazität. Je niedriger der Prozentwert, desto schwerer die COPD. Unter 50 % = schwere Einschränkung im Alltag.",
        faustregelB1:
          "FEV1 = Wie viel Luft in einer Sekunde rauskommt. Weniger als die Hälfte = schwere COPD.",
        karteikarte: {
          vorderseite: "Frau Kovač hat FEV1 30–49 %. Was misst der FEV1-Wert — und was bedeutet das für ihren Alltag?",
          rueckseite: "FEV1 = Forciertes Exspiratorisches Volumen in 1 Sekunde. Misst die Luftmenge bei maximaler Ausatmung in der 1. Sekunde, als % vom Sollwert. 30–49 % = GOLD III (schwere COPD). Alltagsfolge: Belastungsdyspnoe bei leichter Anstrengung, schnelle Erschöpfung bei Atemübungen.",
          vorderseiteB1: "Was ist FEV1? Was bedeutet 30–49 % bei Frau Kovač?",
          rueckseiteB1: "FEV1 = Wie viel Luft in 1 Sekunde rauskommt. 30–49 % = schwere COPD (Stufe 3). Frau Kovač wird bei kleiner Anstrengung schnell erschöpft.",
        },
      },
    },

    // Inline-Wissen: GOLD-Klassifikation — VOR Opt-2.A (Flipcard nutzt den Begriff)
    {
      stepId: "ce02-kovac-beob-iw-gold-klassifikation",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce02-kovac-beob-gold-klassifikation",
      tag: "krankheitslehre",
      contentC1: {
        title: "Was ist die GOLD-Klassifikation?",
        body: "",
        glossarBegriffe: ["GOLD-Klassifikation"],
      },
      contentB1: {
        title: "Was bedeutet GOLD bei COPD?",
        body: "",
        glossarBegriffe: ["GOLD-Klassifikation"],
      },
      inlineWissen: {
        bausteinRef: "gold-klassifikation",
        storyAufhaenger:
          "\"COPD GOLD III\" steht in Frau Kovačs Pflegebericht. GOLD ist keine Farbe — es ist ein internationales Klassifikationssystem, das bestimmt, wie schwer die COPD ist und welche Therapie empfohlen wird.",
        storyAufhaengerB1:
          "Im Pflegebericht steht: COPD GOLD III. Aber was bedeutet GOLD? Das ist kein Farben-Wort. Es ist ein System, das sagt: Wie schwer ist die Lungenerkrankung?",
        kerntext:
          "**GOLD** steht für **G**lobal Initiative for Chronic **O**bstructive **L**ung **D**isease — eine internationale Expertengruppe, die seit 2001 den COPD-Report herausgibt. Dieser Report definiert:\n\n1. **Spirometrische Stadien** (I–IV, basierend auf FEV1)\n2. **ABE-Gruppen** (seit 2023 statt ABCD): Kombination aus Symptom-Last (mMRC/CAT-Score) und Exazerbationsrisiko — bestimmt die Therapie\n\nFür die Pflege ist besonders wichtig: Das GOLD-Stadium allein sagt nicht alles. Ein Patient mit GOLD III kann bei guter Therapie und wenigen Exazerbationen stabiler sein als ein GOLD-II-Patient mit häufigen Schüben. Frau Kovač ist GOLD III mit bekannten Exazerbationen — sie gehört zur höheren Risikogruppe.\n\nQuelle: (GOLD-Report COPD 2023)",
        kerntextB1:
          "**GOLD** = ein internationales System zur Einteilung von COPD in 4 Stufen (I bis IV). GOLD steht für: Global Initiative for Chronic Obstructive Lung Disease.\n\nDie Stufe richtet sich nach dem **FEV1-Wert** (wie viel Luft die Lunge ausatmen kann). Je niedriger die Stufe, desto leichter die COPD. Frau Kovač ist auf **Stufe III** = schwere COPD.\n\nAber: Die Stufe allein reicht nicht. Man schaut auch: Wie viele Verschlechterungen (Schübe) hat der Patient? Wie stark sind die Beschwerden im Alltag?",
        faustregel:
          "GOLD = das Stufensystem für COPD (I–IV). Basiert auf FEV1 + Symptome + Exazerbationsrate. Je höher die Stufe, desto schwerer die Erkrankung.",
        faustregelB1:
          "GOLD = COPD-Stufen von 1 bis 4. Stufe 3 (wie Frau Kovač) = schwer. Stufe 4 = sehr schwer.",
        karteikarte: {
          vorderseite: "Was bedeutet GOLD bei COPD — und warum hat Frau Kovač GOLD III?",
          rueckseite: "GOLD = Global Initiative for Chronic Obstructive Lung Disease. Internationales Klassifikationssystem mit Stadien I–IV basierend auf FEV1. GOLD III = FEV1 30–49 % = schwere COPD. Seit 2023: ABE-Gruppen (Symptome + Exazerbationsrisiko) ergänzen die Spirometrie für die Therapie-Empfehlung.",
          vorderseiteB1: "Was heißt GOLD? Warum hat Frau Kovač GOLD III?",
          rueckseiteB1: "GOLD = COPD-Stufensystem (I–IV). Stufe III = 30–49 % Lungenkapazität = schwere COPD. Frau Kovač hat diese Stufe, weil ihre Lunge nur noch halb so viel Luft ausatmen kann wie normal.",
        },
      },
    },
  ],
  optionaleSteps: [
    // Opt-2.A — COPD-Stadien Flipcard
    {
      stepId: "ce02-kovac-beob-opt-a-copd-stadien",
      phase: 2,
      stepType: "flipcard",
      bloomLevel: 2,
      kompetenzbereich: "I.1",
      quellen: ["GOLD-Report COPD 2023"],
      track: "vertiefung",
      modus: "puzzle",
      tag: "krankheitslehre",
      contentC1: {
        title: "COPD-Stadien I–IV im Überblick",
        body: "Frau Kovač hat COPD III — aber was bedeuten die Stadien? Drehe die Karte um.",
        glossarBegriffe: ["FEV1", "GOLD-Klassifikation"],
      },
      contentB1: {
        title: "Die 4 COPD-Stufen",
        body: "COPD hat 4 Stufen. Frau Kovač ist auf Stufe 3. Was bedeutet das? Drehe die Karte um.",
        glossarBegriffe: ["FEV1"],
      },
      question: {
        fragetext: "Drehe die Karten um — lerne die COPD-Stadien.",
        flipcard: {
          instruction:
            "Drehe jede Karte um und lerne die COPD-Stadien nach GOLD.",
          cards: [
            {
              front: "COPD Stadium I (leicht)",
              back: "FEV1 ≥ 80 % des Sollwertes. Kaum Symptome. Husten möglich. Oft noch unerkannt.",
              backB1:
                "Stufe 1 — leichte COPD. Die Lunge ist wenig geschädigt. Oft kein Problem im Alltag.",
            },
            {
              front: "COPD Stadium II (mittelgradig)",
              back: "FEV1 50–79 %. Belastungsdyspnoe. Chronischer Husten. Erste Alltagseinschränkungen.",
              backB1:
                "Stufe 2 — mittlere COPD. Bei Anstrengung kommt Atemnot. Husten öfter.",
            },
            {
              front: "COPD Stadium III (schwer) — Frau Kovač",
              back: "FEV1 30–49 %. Deutliche Dyspnoe auch bei leichter Belastung. Häufige Exazerbationen möglich. Lebensqualität eingeschränkt.",
              backB1:
                "Stufe 3 — schwere COPD. Das ist Frau Kovač. Schon bei kleiner Bewegung kommt Atemnot. Das ist sehr anstrengend.",
            },
            {
              front: "COPD Stadium IV (sehr schwer)",
              back: "FEV1 < 30 %. Ruhedyspnoe möglich. Chronische Hypoxämie. Oft Heimsauerstoff nötig.",
              backB1:
                "Stufe 4 — sehr schwere COPD. Schon in Ruhe kommt Atemnot. Manchmal braucht man Sauerstoff zu Hause.",
            },
          ],
        },
      },
    },
  ],
  geschaetzteDauer: 30,
};

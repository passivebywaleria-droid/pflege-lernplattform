// CE-02 Thema Positionierung — Wissensbausteine (13 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/positionierung/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (stark)
// Stufe 2 = Hinweis (mittel, B2)
// Stufe 3 = Erklärung als ContentStep (Bloom 1-5)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_POSITIONIERUNG_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: positionierung-definition (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-definition",
    themaId: "positionierung",
    titel: "Definition: Was ist Positionierung?",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum redet die moderne Pflege von 'Positionierung' und nicht mehr von 'Lagerung'? Was steckt hinter dem Wortwechsel?",
      antwort:
        "Positionierung beschreibt eine aktive Pflegehandlung: du bringst den Patienten gemeinsam mit ihm in eine Körperhaltung. Der Begriff löst 'Lagerung' ab, weil er die Aktivität des Patienten betont — nicht das passive Abgelegt-Werden. Drei Ziele: Druckentlastung, Funktionsförderung, Aktivitäts-Ermöglichung. (DNQP 2017/2024)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Positionierung heißt: du bringst den Patienten gemeinsam mit ihm in eine Körperhaltung, die Druck entlastet, Atmung stützt oder eine Bewegung ermöglicht. Der Begriff löst 'Lagerung' ab, weil er die Aktivität des Patienten betont, nicht das Abgelegt-Werden.",
      textB1:
        "Positionierung heißt: du bringst den Patienten in eine Körperhaltung. Zusammen mit ihm. Früher sagte man 'Lagerung'. Aber dieses Wort klingt nach 'abgelegt werden'. Positionierung zeigt: Der Patient macht mit.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2017/2024"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-definition",
        tag: "pflege",
        displayFormat: "beforeafter",
        contentC1: {
          title: "Definition: Was ist Positionierung?",
          body: "Positionierung ist eine Pflegehandlung, bei der du dem Patienten hilfst, eine bestimmte Körperhaltung einzunehmen — im Bett, im Stuhl oder im Rollstuhl. Ziele sind in der Regel drei: erstens **Druckentlastung** gefährdeter Hautstellen (Dekubitusprophylaxe), zweitens **Förderung der Körperfunktion** (Atmung, Kreislauf, Wahrnehmung), drittens **Ermöglichung von Aktivität** (essen, sehen, kommunizieren). Der alte Begriff 'Lagerung' beschrieb eher ein statisches Abgelegt-Werden. Die moderne Pflege nennt es **Positionierung**, weil sie den Patienten als Mitgestalter sieht — du aktivierst seine Eigenbewegung wo möglich (Kinästhetik nach Hatch/Maietta, 1970er Jahre). Der DNQP-Expertenstandard Dekubitusprophylaxe (2017/2024) verwendet durchgängig den Begriff Positionierung. (DNQP 2017/2024)",
          glossarBegriffe: ["Positionierung", "Dekubitusprophylaxe", "Kinästhetik"],
        },
        contentB1: {
          title: "Definition: Was ist Positionierung?",
          body: "Positionierung ist eine Pflege-Maßnahme. Du bringst den Patienten in eine bestimmte Haltung. Das kann im Bett sein, im Stuhl oder im Rollstuhl. Es gibt 3 Gründe dafür:\n\n1. **Druck-Entlastung**: Die Haut bekommt keine Wunde (Dekubitus).\n2. **Körper-Funktion**: Atmen, Kreislauf, Wahrnehmen werden besser.\n3. **Aktivität**: Der Patient kann essen, sehen, sprechen.\n\nFrüher sagte man 'Lagerung'. Das klingt passiv. Heute sagen wir **Positionierung**. Weil der Patient mitmacht. Du aktivierst seine Bewegung, wo es geht.",
          glossarBegriffe: ["Positionierung", "Dekubitusprophylaxe", "Kinästhetik"],
        },
      },
    },
    glossarBegriffe: ["Positionierung", "Dekubitusprophylaxe", "Kinästhetik"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: positionierung-arten-uebersicht (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-arten-uebersicht",
    themaId: "positionierung",
    titel: "Positionierungsarten im Überblick",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir 3 verschiedene Patienten vor: einer hat Herzinsuffizienz, einer ist bewusstlos nach Unfall, einer hat ein Lungenödem. Wie würdest du jeden lagern — und warum anders?",
      antwort:
        "Herzinsuffizienz/Lungenödem → Herzbett (Oberkörper 45°, Knie leicht gebeugt). Bewusstlos nach Unfall mit Blutverlust → Schocklage (Beine hoch, Kopf flach). Lungenödem wie Herzinsuffizienz → Herzbett. Jede Position hat eine klare Physiologie dahinter. (DNQP 2017/2024, NPUAP/EPUAP 2019)",
    },
    stufe2: {
      typ: "hinweis",
      text: "In der Pflege gibt es Standard-Positionierungen (30°, 90°, 135°, Rückenlage, Bauchlage) und Spezial-Positionierungen (Herzbett, Schocklage, Beinhochlage). Jede hat ein klares Ziel: Druckentlastung, Atmung, Kreislauf oder Notfall-Situation.",
      textB1:
        "Es gibt viele Positionen. Die wichtigsten: 30°, 90°, 135°, Rücken, Bauch. Dazu kommen Spezial-Positionen: Herzbett (für Herzkranke), Schock-Lage (Notfall), Bein-Hoch-Lage. Jede hat einen bestimmten Zweck.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-02",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2017/2024", "NPUAP/EPUAP 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-arten",
        tag: "pflege",
        bildkategorie: "szene",
        imageAlt:
          "Drei Positionierungen nebeneinander: Herzbett, Schocklage, 30°-Seitenlage mit beschrifteten Winkeln",
        bildhinweis:
          "Three patient positioning diagrams side by side: cardiac position with elevated headrest, shock position with elevated legs, 30-degree side position — copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Positionierungsarten im Überblick",
          body: "**Standard (Dekubitusprophylaxe):**\n- **30°-Seitenlage**: Schonend, entlastet Sakrum und Trochanter — Goldstandard bei Dekubitusrisiko.\n- **135°-Lage** (modifizierte Bauchlage): Entlastet Rücken und Sakrum komplett.\n- **90°-Seitenlage**: Vollständige Seitenlage — stärker belastend für den unten liegenden Trochanter, nur kurzzeitig.\n- **Rückenlage (0°)**: Ausgangslage, aber auf Dauer höchstes Dekubitusrisiko am Sakrum.\n- **Bauchlage (180°)**: Selten in der Grundpflege; wichtig bei ARDS-Therapie auf Intensiv.\n\n**Spezial (Funktion/Notfall):**\n- **Herzbett (Oberkörper 45°, Knie leicht gebeugt)**: Bei Herzinsuffizienz, Dyspnoe.\n- **Schocklage (Kopf flach, Beine 30° hoch)**: Bei hypovolämischem Schock — Blutrückfluss zum Herzen.\n- **Beinhochlage**: Bei Ödem, Thromboseprophylaxe, Venenbeschwerden. (DNQP 2017/2024, NPUAP/EPUAP 2019)",
          glossarBegriffe: ["30°-Seitenlage", "135°-Lage", "Herzbett", "Schocklage"],
        },
        contentB1: {
          title: "Positionierungsarten im Überblick",
          body: "**Standard-Positionen** (gegen Dekubitus):\n- **30°-Seitenlage**: Patient leicht auf die Seite, 30 Grad. Schonend. Goldstandard.\n- **135°-Lage**: Fast auf den Bauch, 45 Grad Richtung Matratze. Entlastet Rücken und Fersen.\n- **90°-Seitenlage**: Voll auf der Seite. Drückt den Hüftknochen unten. Nur kurz.\n- **Rückenlage**: Auf dem Rücken. Ausgangs-Position. Macht am längsten Druck am Steißbein.\n- **Bauchlage**: Auf dem Bauch. Selten. Wichtig auf Intensiv-Station.\n\n**Spezial-Positionen** (für bestimmte Probleme):\n- **Herzbett**: Oberkörper hoch, Knie leicht gebeugt. Bei Herz-Problemen und Atemnot.\n- **Schock-Lage**: Kopf flach, Beine hoch. Bei Notfall mit Blutverlust.\n- **Bein-Hoch-Lage**: Bei Wasser im Bein oder Venen-Problemen.",
          glossarBegriffe: ["30°-Seitenlage", "135°-Lage", "Herzbett", "Schocklage"],
        },
      },
    },
    glossarBegriffe: ["30°-Seitenlage", "90°-Seitenlage", "135°-Lage", "Herzbett", "Schocklage"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: positionierung-30-grad (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-30-grad",
    themaId: "positionierung",
    titel: "30°-Seitenlage: Durchführung und Kontrolle",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum sind ausgerechnet 30 Grad das Maß? Weder 20 noch 45 — wieso 30? Denk nach, bevor du weiterliest.",
      antwort:
        "Bei 30° ist der Trochanter major komplett druckfrei, aber der Patient hat noch Boden-Kontakt über Gesäß und Rücken — das Gewicht verteilt sich auf viel Fläche. Bei mehr Grad (45°, 90°) drückt der Trochanter. Bei weniger (15°) ist kaum Entlastung. Sweet Spot: 30°. (NPUAP/EPUAP 2019)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bei 30° ist der Trochanter major komplett druckfrei, aber der Patient hat noch Boden-Kontakt über Gesäß und Rücken — das Gewicht verteilt sich auf viel Fläche. Bei mehr Grad (45°, 90°) drückt der Trochanter. Bei weniger (15°) ist kaum Entlastung. Sweet Spot: 30°.",
      textB1:
        "Bei 30 Grad liegt der Hüftknochen (Trochanter) frei. Er drückt nicht. Das Gewicht liegt auf Po und Rücken. Bei mehr Grad drückt der Hüftknochen. Bei weniger Grad ist der Patient fast auf dem Rücken — kaum Entlastung.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-03",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["NPUAP/EPUAP 2019", "DNQP 2017/2024"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-30grad",
        tag: "pflege",
        displayFormat: "stepbystep",
        bildkategorie: "prozedur",
        imageAlt:
          "Patient in 30°-Seitenlage mit Kissen am Rücken, Trochanter frei, Fersen auf Kissen",
        bildhinweis:
          "Patient in 30-degree lateral position with pillow support along back, hip bone (trochanter) clearly floating free from mattress, heels raised on pillow — copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "30°-Seitenlage: Durchführung",
          body: "Die **30°-Seitenlage** gilt als Goldstandard der Dekubitusprophylaxe (NPUAP/EPUAP, DNQP). So funktioniert sie:\n\n**Schritt 1:** Ausgangslage Rückenlage. Bett auf Arbeitshöhe.\n**Schritt 2:** Du legst ein stabiles Kissen längs entlang des Rückens, vom Schulterblatt bis zum Becken.\n**Schritt 3:** Mit Hilfe des Kissens kippst du den Patienten etwa 30° zur Seite — Kontrolle: der **Trochanter major** muss **vollkommen frei** liegen, ohne Matratzenkontakt.\n**Schritt 4:** Ein Kissen unter das oben liegende Bein (Knie leicht angewinkelt). Den unteren Arm vorsichtig entlasten.\n**Schritt 5:** Fersen mit einem kleinen Kissen oder Fersenfreilagerung entlasten — nicht vergessen.\n\n**Kontroll-Faustregel:** Beide Gesäßhälften haben noch Matratzenkontakt — sonst ist zu viel gekippt (dann wird es zur 90°-Lage). (NPUAP/EPUAP 2019, DNQP 2017/2024)",
          glossarBegriffe: ["30°-Seitenlage", "Trochanter major"],
        },
        contentB1: {
          title: "30°-Seitenlage: Schritt für Schritt",
          body: "Die **30°-Seitenlage** ist die beste Position gegen Dekubitus. So geht es:\n\n**Start**: Patient liegt auf dem Rücken. Bett hoch stellen.\n**Schritt 1**: Großes, festes Kissen längs an den Rücken legen. Vom Schulterblatt bis zum Becken.\n**Schritt 2**: Patient mit dem Kissen auf die Seite kippen. Etwa 30 Grad. Kontrolle: Der Hüftknochen (Trochanter) darf die Matratze nicht berühren.\n**Schritt 3**: Kissen unter das obere Bein. Knie ist leicht gebeugt. Unterer Arm liegt ohne Druck.\n**Schritt 4**: Kleines Kissen unter die Waden, damit die Fersen frei sind.\n\n**Kontrolle**: Beide Pobacken sollen die Matratze noch berühren. Sonst zu stark gekippt.",
          glossarBegriffe: ["30°-Seitenlage", "Trochanter major"],
        },
      },
    },
    glossarBegriffe: ["30°-Seitenlage", "Trochanter major"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: positionierung-90-und-ruecken (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-90-und-ruecken",
    themaId: "positionierung",
    titel: "90°-Seitenlage und Rückenlage",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Die 90°-Seitenlage war früher Standard. Heute ist sie die Ausnahme. Was hat sich geändert?",
      antwort:
        "Studien zeigten: Das gesamte Körpergewicht ruht in 90°-Seitenlage auf dem Trochanter major — einem kleinen Knochenvorsprung mit wenig Polster. Hoher Punktdruck. Die 30°-Seitenlage verteilt denselben Druck auf viel mehr Fläche. Rückenlage ist Ausgangslage, aber Dauer-Rückenlage führt zum Sakrum-Dekubitus (ca. 46% aller Fälle). (DNQP 2017/2024)",
    },
    stufe2: {
      typ: "hinweis",
      text: "In der 90°-Seitenlage liegt der Patient vollständig auf der Seite — das Körpergewicht ruht auf dem Trochanter major. Hohe Druckbelastung auf kleiner Fläche. Rückenlage (0°) ist Ausgangsposition, aber Dauer-Rückenlage führt zum Sakrum-Dekubitus.",
      textB1:
        "90°-Seitenlage: Patient voll auf der Seite. Der Hüftknochen drückt stark. Nur kurz. Rückenlage: Patient auf dem Rücken. Ist die Start-Position. Aber zu lange Rückenlage macht Dekubitus am Steißbein.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-04",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2017/2024"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-90-ruecken",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "90°-Seitenlage und Rückenlage",
          body: "**90°-Seitenlage**: Der Patient liegt vollständig auf der Seite. Der untere Arm wird vor den Körper geschoben, der obere Arm liegt auf einem Kissen. Problem: Das gesamte Körpergewicht drückt auf den unten liegenden **Trochanter major** — eine kleine, knochige Fläche ohne Polster. Die 90°-Seitenlage wird heute **selten und nur kurzzeitig** verwendet, z.B. für bestimmte Untersuchungen oder Intimpflege.\n\n**Rückenlage (0°)**: Ausgangsposition für viele Maßnahmen. Kopf auf flachem Kissen, Arme neben dem Körper. Problem: Der Druck wirkt auf **Hinterhaupt, Schulterblätter, Ellenbogen, Sakrum und Fersen**. Das Sakrum trägt ca. 46% aller Dekubiti. Wird die Rückenlage länger als 1-2 Stunden gehalten, muss mikromobilisiert oder umgelagert werden. (DNQP 2017/2024)",
          glossarBegriffe: ["90°-Seitenlage", "Rückenlage", "Sakrum", "Trochanter major"],
        },
        contentB1: {
          title: "90°-Seitenlage und Rückenlage",
          body: "**90°-Seitenlage**: Patient liegt voll auf der Seite. Das ganze Gewicht drückt auf den **Hüftknochen unten** (Trochanter). Das ist eine kleine Stelle, wenig Polster. Deshalb: Nur kurz. Nicht über Stunden.\n\n**Rückenlage**: Patient liegt auf dem Rücken. Kopf auf einem flachen Kissen. Probleme: Druck an Hinterkopf, Schulterblatt, **Steißbein**, Fersen. Das **Steißbein** ist die häufigste Dekubitus-Stelle — fast die Hälfte aller Fälle. Deshalb: Rückenlage nicht länger als 1-2 Stunden ohne Umlagerung.",
          glossarBegriffe: ["90°-Seitenlage", "Rückenlage", "Sakrum", "Trochanter major"],
        },
      },
    },
    glossarBegriffe: ["90°-Seitenlage", "Rückenlage", "Sakrum"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: positionierung-135-grad (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-135-grad",
    themaId: "positionierung",
    titel: "135°-Lage: Indikation und Durchführung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, dein Patient hat schon einen Dekubitus am Steißbein. Alle Seitenlagen sind schmerzhaft. Welche Position bleibt dir?",
      antwort:
        "Die 135°-Lage (modifizierte Bauchlage, A-Lage). Sie entlastet Rücken und Sakrum komplett — Patient liegt zu 3/4 auf dem Bauch. Voraussetzung: stabile Atmung, keine Kontraindikation. Kontraindikationen: frische abdominelle OP, schwere Dyspnoe, Hirndruck, instabile Wirbelsäule. (NPUAP/EPUAP 2019, DNQP 2017/2024)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die 135°-Lage (auch 'modifizierte Bauchlage' oder 'A-Lage') ist eine 3/4-Bauchlage. Sie entlastet kompletten Rücken und Sakrum. Patient liegt auf Brust, Bauch und vorderem Oberschenkel. Voraussetzung: stabile Atmung und keine Kontraindikation (z.B. frische OP am Bauch).",
      textB1:
        "Die 135°-Lage ist fast Bauchlage. Der Rücken liegt in der Luft. Patient liegt auf Brust, Bauch und Bein. Rücken und Steißbein sind frei. Aber: Der Patient muss gut atmen können. Nicht nach frischer Bauch-OP.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-05",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["NPUAP/EPUAP 2019", "DNQP 2017/2024"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-135grad",
        tag: "pflege",
        displayFormat: "stepbystep",
        bildkategorie: "prozedur",
        imageAlt:
          "Patient in 135°-Lage (3/4-Bauchlage) mit Kissen unter Brust, Bauch und oberem Bein, Kopf seitlich",
        bildhinweis:
          "Patient in 135-degree prone position, 3/4 on stomach, pillow support under chest and upper leg, head turned to side — copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "135°-Lage: Durchführung und Indikation",
          body: "Die **135°-Lage** (auch **A-Lage** oder modifizierte Bauchlage) ist eine Positionierung zwischen Seitenlage und Bauchlage. Der Patient liegt nicht voll auf dem Bauch, sondern zu 3/4 — mit leichter Seitenneigung.\n\n**Durchführung:**\n1. Ausgangslage: 30°-Seitenlage.\n2. Kissen unter Brust und Bauch platzieren, so dass Brust und Hüfte 135° zur Matratze liegen.\n3. Oberes Bein gebeugt nach vorn auf ein großes Kissen (Knie etwa 90°).\n4. Unterer Arm hinter dem Körper, oberer Arm entspannt vor dem Gesicht.\n5. Kopf auf flaches Kissen, **zur Seite gedreht** (nicht Gesicht direkt auf das Kissen).\n\n**Indikation:** Patienten mit bestehendem Dekubitus am Sakrum oder Hochrisiko-Patienten, wenn alle Rücken-Positionen ausfallen.\n\n**Kontraindikation:** frische abdominelle Operationen, schwere Dyspnoe, hoher Hirndruck, instabile Wirbelsäule. Vorsicht bei Adipositas (Atemeinschränkung). Regelmäßige Atemkontrolle! (NPUAP/EPUAP 2019, DNQP 2017/2024)",
          glossarBegriffe: ["135°-Lage"],
        },
        contentB1: {
          title: "135°-Lage: Schritt für Schritt",
          body: "Die **135°-Lage** ist eine Position zwischen Seite und Bauch. Der Patient liegt zu 3/4 auf dem Bauch. Der Rücken ist komplett frei.\n\n**So geht es:**\n1. Start: 30°-Seitenlage.\n2. Kissen unter Brust und Bauch legen, bis der Winkel stimmt.\n3. Oberes Bein nach vorne auf ein großes Kissen. Knie gebeugt.\n4. Unterer Arm hinter dem Körper. Oberer Arm entspannt vor dem Gesicht.\n5. Kopf auf einem flachen Kissen, **zur Seite gedreht**.\n\n**Wann?** Wenn der Patient schon einen Dekubitus am Steißbein hat. Oder wenn andere Positionen alle nicht gehen.\n\n**Wann NICHT?** Nach frischer Bauch-OP. Bei schwerer Atemnot. Bei Hirn-Druck. Bei unsicherer Wirbelsäule. Immer die Atmung kontrollieren!",
          glossarBegriffe: ["135°-Lage"],
        },
      },
    },
    glossarBegriffe: ["135°-Lage"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: positionierung-praedilektion (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-praedilektion",
    themaId: "positionierung",
    titel: "Prädilektionsstellen je Position",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient liegt im Rollstuhl. Wo entsteht der typische Druck? Und ändert sich das, wenn er ins Bett umgelagert wird?",
      antwort:
        "Sitzend: Sitzbeinhöcker (Tuber ischiadicum), Steißbein, Fersen. Im Bett (Rückenlage): Druck verlagert sich auf Hinterhaupt, Schulterblätter, Sakrum und Fersen. Jede Position hat ihr eigenes Risiko-Profil — deshalb wechselst du zwischen 3-4 verschiedenen Positionen. (NPUAP/EPUAP 2019)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Prädilektionsstellen hängen von der Position ab: Rückenlage → Hinterhaupt, Sakrum, Fersen. Seitenlage → Trochanter, Ohr, Malleolus. Sitzend → Sitzbeinhöcker, Steißbein. Bauchlage → Stirn, Brustbein, Knie. Jede Position hat ihr eigenes Risiko-Profil.",
      textB1:
        "Die typischen Druckstellen hängen davon ab, wie der Patient liegt. Rückenlage → Hinterkopf, Steißbein, Fersen. Seitenlage → Hüftknochen, Ohr, Knöchel. Sitzen → Po-Knochen. Bauchlage → Stirn, Brustbein, Knie.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-06",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["NPUAP/EPUAP 2019", "DNQP 2017/2024"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-praedilektion",
        tag: "pflege",
        displayFormat: "checklist",
        bildkategorie: "anatomie",
        imageAlt:
          "Körper in 4 Positionen (Rücken, Seite, Bauch, Sitzen) mit eingezeichneten Druckstellen",
        bildhinweis:
          "Human body shown in four positions (supine, lateral, prone, sitting) with marked pressure points highlighted in red — copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Prädilektionsstellen je Position",
          body: "Prädilektionsstellen liegen dort, wo **Knochenvorsprünge** mit wenig Weichteilpolster direkt auf die Unterlage drücken:\n\n**Rückenlage (0°):** Hinterhaupt, Schulterblätter, Dornfortsätze, Ellenbogen, **Sakrum** (ca. 46%), **Fersen** (ca. 19%).\n\n**Seitenlage (30° und 90°):** **Trochanter major**, Ohrmuschel, Schulter (Akromion), Rippenbogen, Knie, **Malleolus** (Knöchel).\n\n**135°-Lage:** Darmbeinkamm vorn, Rippenbogen, Knie, Fußrücken — dafür Entlastung von Rücken und Sakrum.\n\n**Bauchlage (180°):** Stirn, Kinn, Brustbein (Sternum), Beckenvorderseite, Knie, Fußrücken.\n\n**Sitzend (Rollstuhl/Stuhl):** **Sitzbeinhöcker** (Tuber ischiadicum), Steißbein, Fersen.\n\n**Geräteassoziiert:** Nasenrücken (O2-Brille), Ohr (O2-Schlauch), Genitalbereich (Dauerkatheter). (NPUAP/EPUAP 2019)",
          glossarBegriffe: ["Prädilektionsstelle", "Sakrum", "Trochanter major", "Sitzbeinhöcker", "Akromion", "Malleolus"],
        },
        contentB1: {
          title: "Prädilektionsstellen je Position",
          body: "Dekubitus entsteht da, wo ein Knochen nah unter der Haut liegt und Druck bekommt:\n\n**Rückenlage**: Hinterkopf, Schulterblatt, Ellenbogen, **Steißbein** (häufigste Stelle, fast die Hälfte aller Fälle), **Fersen** (jede 5. Stelle).\n\n**Seitenlage**: **Hüftknochen oben** (Trochanter), Ohr, Schulter, Knie-Seiten, **Knöchel**.\n\n**135°-Lage**: Beckenknochen vorn, Rippen-Seite, Knie, Fußrücken — Rücken und Steißbein sind frei.\n\n**Bauchlage**: Stirn, Kinn, Brustbein, Becken vorn, Knie, Fußrücken.\n\n**Sitzen**: Sitzknochen, Steißbein, Fersen.\n\n**Durch Geräte**: Nase (O2-Brille), Ohr (O2-Schlauch), Intim-Bereich (Katheter).",
          glossarBegriffe: ["Prädilektionsstelle", "Sakrum", "Trochanter major", "Sitzbeinhöcker", "Akromion", "Malleolus"],
        },
      },
    },
    glossarBegriffe: ["Prädilektionsstelle", "Sitzbeinhöcker", "Akromion", "Malleolus"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: positionierung-mikrobewegungen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-mikrobewegungen",
    themaId: "positionierung",
    titel: "Mikrobewegungen: Das Herzstück der Prophylaxe",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du sitzt 4 Stunden im Bus. Merkst du, wann dein Hintern taub wird? Was machst du dann automatisch?",
      antwort:
        "Du verlagerst automatisch dein Gewicht — das ist eine Mikrobewegung. Viele Patienten spüren das nicht mehr (Sensibilitätsverlust) oder können sich nicht selbst bewegen. Die Pflegekraft übernimmt dann diese kleine, häufige Entlastung. (DNQP 2017/2024, Moore 2022)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Mikrobewegungen sind kleine Gewichtsverlagerungen, die der Patient selbst ausführt oder die du anleitest — oft reicht ein Kissen, das unter einen Arm oder ein Bein geschoben wird. Sie unterbrechen den Dauerdruck zwischen den großen Umlagerungs-Intervallen.",
      textB1:
        "Mikro-Bewegungen sind kleine Bewegungen. Der Patient verlagert sein Gewicht. Zum Beispiel: Kissen unter einen Arm oder ein Bein schieben. Diese kleinen Änderungen unterbrechen den Druck zwischen den großen Umlagerungen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-07",
        phase: 1,
        stepType: "text",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2017/2024", "Moore Z. Cochrane Review 2022"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-mikrobewegungen",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Mikrobewegungen",
          body: "**Mikrobewegungen** sind das Herzstück moderner Dekubitusprophylaxe. Statt den Patienten alle 2 Stunden komplett umzulagern, unterbricht man den Druck durch **kleine, häufigere Gewichtsverlagerungen**.\n\n**Was zählt als Mikrobewegung?**\n- Kissen-Position leicht verändern (Arm, Bein, Becken anders stützen).\n- Bett-Kopfteil oder Fußteil um 10° verstellen.\n- Patient anleiten: 'Heben Sie mal kurz das Knie' oder 'Verschieben Sie den Po leicht nach rechts.'\n- Aktivierung über Kommunikation.\n\n**Wirkung:** Schon eine Veränderung von 2-3 cm unterbricht den Kapillardruck genug, um Durchblutung wiederherzustellen. Nach Cochrane-Review (Moore 2022) sind Mikrobewegungen wirksamer als starre 2-Stunden-Intervalle.\n\n**Rolle der Pflege:** Nicht nur umlagern, sondern **zur Eigenbewegung animieren** — so nutzt du die Rest-Mobilität des Patienten. Wenn er selbst nicht kann, machst du es für ihn. (DNQP 2017/2024, Moore 2022)",
          glossarBegriffe: ["Mikrobewegung", "Kapillardruck"],
        },
        contentB1: {
          title: "Mikrobewegungen",
          body: "**Mikro-Bewegungen** sind kleine Änderungen der Position. Sie sind sehr wichtig gegen Dekubitus.\n\n**Was sind Mikro-Bewegungen?**\n- Ein Kissen leicht verschieben (unter dem Arm oder Bein).\n- Das Bett vorne oder hinten 10 Grad verstellen.\n- Dem Patienten sagen: 'Beugen Sie mal das Knie' — oder 'Heben Sie den Po'.\n- Aktive Mitarbeit des Patienten fördern.\n\n**Warum wirken sie?** Schon 2-3 cm Bewegung öffnen die Blutgefäße wieder. Die Haut bekommt Sauerstoff. Eine Studie (Moore 2022) zeigt: Mikro-Bewegungen sind besser als fixe 2-Stunden-Umlagerung.\n\n**Rolle der Pflegekraft:** Nicht nur selbst bewegen — auch den Patienten anleiten. Nutze, was er noch selbst kann.",
          glossarBegriffe: ["Mikrobewegung", "Kapillardruck"],
        },
      },
    },
    glossarBegriffe: ["Mikrobewegung", "Kapillardruck"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: positionierung-rhythmus (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-rhythmus",
    themaId: "positionierung",
    titel: "Individueller Umlagerungsrhythmus",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine Pflegekraft sagt: 'Wir lagern alle 2 Stunden um, immer. Das ist Vorschrift.' Eine andere sagt: 'Das gibt es nicht mehr.' Wer hat recht?",
      antwort:
        "Die zweite Pflegekraft hat recht. Der starre 2-Stunden-Rhythmus ist veraltet. Der Expertenstandard Dekubitusprophylaxe (DNQP 2017/2024) fordert einen individuell geplanten Rhythmus: abhängig von Risiko, Hautzustand, Matratzen-System, Aktivität und Toleranz des Patienten. (DNQP 2017/2024)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der starre 2-Stunden-Rhythmus ist veraltet. Der Expertenstandard Dekubitusprophylaxe (DNQP 2017/2024) fordert einen individuell geplanten Rhythmus, abhängig von Risiko, Hautzustand, Matratzen-System und Toleranz des Patienten. Typisch: 2-4 Stunden, mit Mikrobewegungen dazwischen.",
      textB1:
        "Die alte Regel 'alle 2 Stunden umlagern' gibt es nicht mehr. Heute gilt: individueller Rhythmus. Er hängt vom Risiko ab, von der Haut, von der Matratze. Meistens: alle 2-4 Stunden. Dazwischen: Mikro-Bewegungen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-08",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP 2017/2024", "NPUAP/EPUAP 2019"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-rhythmus",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Individueller Umlagerungsrhythmus",
          body: "Der alte **starre 2-Stunden-Rhythmus** wurde in Studien als weder wirksam noch individuell passend widerlegt. Der aktuelle **Expertenstandard Dekubitusprophylaxe (DNQP 2017/2024)** fordert eine **individuelle Positionierungsplanung** mit diesen Faktoren:\n\n- **Individuelles Risiko** (Braden-Skala, klinischer Blick).\n- **Hautzustand** nach jeder Umlagerung beurteilen (nicht-wegdrückbare Rötung = Rhythmus verkürzen).\n- **Matratzen-System**: Wechseldruck- und Weichlagerungsmatratzen erlauben längere Intervalle.\n- **Aktivität des Patienten**: Wer sich selbst bewegt, braucht weniger Hilfe von außen.\n- **Toleranz**: Manche Patienten erwachen jedes Mal — kürzere Intervalle können dann kontraproduktiv sein.\n\n**Orientierungswerte in der Praxis:**\n- Hohes Risiko, Standard-Matratze: alle 2 Stunden.\n- Mittleres Risiko, Wechseldruckmatratze: alle 3-4 Stunden.\n- Nachts: evtl. längere Intervalle, wenn Schlaf sonst nicht möglich.\n\n**Pflicht:** Der individuelle Rhythmus wird im Positionierungsprotokoll dokumentiert. (DNQP 2017/2024)",
          glossarBegriffe: ["Umlagerungsrhythmus", "Braden-Skala"],
        },
        contentB1: {
          title: "Individueller Umlagerungsrhythmus",
          body: "Die alte Regel 'alle 2 Stunden umlagern' gilt nicht mehr. Heute planst du den Rhythmus für jeden Patienten **individuell**. Das entscheidet:\n\n- **Risiko**: Hoch oder mittel? (Braden-Skala).\n- **Haut**: Wie sieht sie nach der letzten Umlagerung aus? Rote Stelle, die nicht weggeht? → Häufiger umlagern.\n- **Matratze**: Spezialmatratze erlaubt längere Abstände.\n- **Aktivität**: Wer sich selbst bewegt, braucht weniger Hilfe.\n- **Toleranz**: Manche Patienten wachen jedes Mal auf — dann machst du nachts längere Abstände.\n\n**Praxis-Werte:**\n- Hohes Risiko, normale Matratze: alle 2 Stunden.\n- Mittleres Risiko, Spezial-Matratze: alle 3-4 Stunden.\n\nAlles wird im **Positionierungsprotokoll** aufgeschrieben.",
          glossarBegriffe: ["Umlagerungsrhythmus", "Braden-Skala"],
        },
      },
    },
    glossarBegriffe: ["Umlagerungsrhythmus", "Braden-Skala"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: positionierung-matratzen (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-matratzen",
    themaId: "positionierung",
    titel: "Spezialmatratzen: Wechseldruck vs. Weichlagerung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Zwei Patienten mit Dekubitus-Risiko — einer ist wach und mobilisiert sich ab und zu, einer liegt im Koma. Brauchen beide dieselbe Spezialmatratze?",
      antwort:
        "Nein. Der wache, mobile Patient profitiert von einer Weichlagerungsmatratze (behält Eigenbewegung). Der komatöse Patient braucht eine Wechseldruckmatratze (mechanische Umlagerung durch alternierende Luftkammern). Die Wahl richtet sich nach Aktivität und Risiko. (NPUAP/EPUAP 2019, DNQP 2017/2024)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Zwei Hauptgruppen: Wechseldruckmatratzen (aktiv, Luftkammern füllen abwechselnd, mechanische Entlastung) und Weichlagerungsmatratzen (passiv, der Körper sinkt ein, Druck verteilt sich auf große Fläche). Jede Gruppe hat andere Indikationen und Kontraindikationen.",
      textB1:
        "Zwei Arten: Wechseldruck-Matratze (aktiv — Luft wechselt in Kammern) und Weichlagerungs-Matratze (weich — Körper sinkt ein). Jede hat andere Vor- und Nachteile. Du wählst je nach Patient.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-09",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["NPUAP/EPUAP 2019", "DNQP 2017/2024"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-matratzen",
        tag: "pflege",
        bildkategorie: "geraet",
        imageAlt:
          "Zwei Matratzen im Vergleich: Wechseldruckmatratze mit sichtbaren Luftkammern links, Weichlagerungsmatratze aus Schaumstoff rechts",
        bildhinweis:
          "Two medical mattresses side by side: alternating pressure mattress with visible air chambers on left, foam comfort mattress on right, cross-section view — copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Spezialmatratzen: Wechseldruck vs. Weichlagerung",
          body: "**Wechseldruckmatratzen** (aktiv):\n- Aufbau: Luftkammern, die sich abwechselnd füllen und leeren (alle 10-12 Minuten).\n- Wirkung: Mechanische Umlagerung, Druckentlastung bei allen Körperstellen nacheinander.\n- Indikation: Hohes bis sehr hohes Dekubitusrisiko, stark immobile Patienten.\n- Kontraindikation: Instabile Wirbelsäule, starke Schmerzen durch Bewegung.\n- Nachteil: Eigenbewegung des Patienten wird erschwert.\n\n**Weichlagerungsmatratzen** (passiv):\n- Aufbau: Schaumstoff, Viskogel oder Mikroglaskugeln. Der Körper sinkt ein, Druck verteilt sich auf große Fläche.\n- Wirkung: Reduzierter Flächendruck.\n- Indikation: Mittleres bis hohes Risiko, Patienten mit Restmobilität.\n- Kontraindikation: Sehr schwere Patienten (Durchsinken), Patienten mit Mobilisierungsziel.\n\n**Wichtig:** Spezialmatratze ist eine Ergänzung zur Pflege, kein Ersatz. Umlagerung und Hautpflege bleiben Pflicht. (NPUAP/EPUAP 2019, DNQP 2017/2024)",
          glossarBegriffe: ["Wechseldruckmatratze", "Weichlagerungsmatratze"],
        },
        contentB1: {
          title: "Spezialmatratzen: Wechseldruck vs. Weichlagerung",
          body: "**Wechseldruck-Matratze** (aktiv):\n- Luft-Kammern füllen und leeren sich abwechselnd. Der Patient wird leicht gehoben und gesenkt.\n- Wann? Hohes Risiko, Patient bewegt sich kaum.\n- Nicht bei: Wirbelsäule nicht stabil, starke Schmerzen.\n- Nachteil: Der Patient kann sich weniger gut selbst bewegen.\n\n**Weichlagerungs-Matratze** (passiv):\n- Schaumstoff oder spezielles Gel. Der Körper sinkt ein. Druck verteilt sich.\n- Wann? Mittleres Risiko, Patient kann sich noch etwas bewegen.\n- Nicht bei: Sehr schweren Patienten (sinken durch). Wenn der Patient wieder aufstehen soll.\n\n**Wichtig:** Die Spezial-Matratze ersetzt nicht das Umlagern. Auch mit Spezial-Matratze: umlagern, Haut pflegen.",
          glossarBegriffe: ["Wechseldruckmatratze", "Weichlagerungsmatratze"],
        },
        question: {
          fragetext: "Welche Matratze für welchen Patienten?",
          comparison: {
            instruction: "Vergleiche Wechseldruck- und Weichlagerungsmatratze",
            columns: [
              { label: "Wechseldruckmatratze" },
              { label: "Weichlagerungsmatratze" },
            ],
            rows: [
              {
                criterion: "Wirkprinzip",
                values: ["Aktiv (Luftkammern wechseln)", "Passiv (Körper sinkt ein)"],
              },
              {
                criterion: "Indikation",
                values: ["Sehr hohes Risiko, stark immobil", "Mittleres Risiko, Restmobilität"],
              },
              {
                criterion: "Eigenbewegung",
                values: ["Wird erschwert", "Bleibt erhalten"],
              },
            ],
          },
        },
      },
    },
    glossarBegriffe: ["Wechseldruckmatratze", "Weichlagerungsmatratze"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: positionierung-protokoll (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-protokoll",
    themaId: "positionierung",
    titel: "Positionierungsprotokoll",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum wird jede Umlagerung dokumentiert — reicht es nicht zu sagen 'wir haben umgelagert'?",
      antwort:
        "Die Dokumentationspflicht ergibt sich aus § 630f BGB. Im Schadensfall (Dekubitus-Vorwurf) ist das Protokoll Beweismittel: 'Nicht dokumentiert = nicht durchgeführt' (BGH-Rechtsprechung). Das Protokoll ist auch pflegerisch wichtig — nur so erkennst du Trends. (§ 630f BGB, DNQP 2017/2024)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das Positionierungsprotokoll dokumentiert: Zeit, Position, durchführende Pflegekraft und Besonderheiten (Hautzustand, Patientenreaktion). Es ist rechtlich bindend — was nicht dokumentiert ist, gilt als nicht durchgeführt. Pflichtteil der Pflegedokumentation.",
      textB1:
        "Das Positionierungs-Protokoll schreibt auf: wann, welche Position, wer, was war besonders. Das ist rechtlich wichtig. Was nicht dokumentiert ist, gilt als nicht gemacht. Teil der Pflege-Dokumentation.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["§ 630f BGB", "DNQP 2017/2024"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-protokoll",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Positionierungsprotokoll",
          body: "Das **Positionierungsprotokoll** ist ein formalisiertes Dokument der Pflegedokumentation. Es wird bei Patienten mit Dekubitus-Risiko oder bestehendem Dekubitus geführt.\n\n**Pflicht-Einträge pro Umlagerung:**\n- Uhrzeit.\n- Position (z.B. 'LSL 30°' = linke Seitenlage 30°).\n- Handzeichen oder Name der durchführenden Pflegekraft.\n- Hautbeobachtung (unauffällig / Rötung / Druckstelle / Beschwerden).\n- Besonderheiten (Patient kooperativ / ablehnend / Schmerz beim Umlagern).\n\n**Rechtliche Bedeutung:** Die Dokumentationspflicht ergibt sich aus § 630f BGB (Behandlungsvertrag). Im Schadensfall (Dekubitus-Vorwurf) ist das Protokoll Beweismittel. **Nicht dokumentiert = nicht durchgeführt** — das ist Rechtsprechung des BGH.\n\n**Wichtig:** Zeitnah eintragen, nicht am Ende der Schicht rückwirkend. (§ 630f BGB, DNQP 2017/2024)",
          glossarBegriffe: ["Positionierungsprotokoll"],
        },
        contentB1: {
          title: "Positionierungsprotokoll",
          body: "Das **Positionierungs-Protokoll** ist ein Dokument in der Pflege-Akte. Es ist Pflicht bei Dekubitus-Risiko.\n\n**Was musst du eintragen?**\n- Uhr-Zeit.\n- Position (zum Beispiel 'LSL 30°' = linke Seiten-Lage 30 Grad).\n- Name oder Hand-Zeichen (wer hat gemacht).\n- Haut-Zustand (normal / rot / Wunde / Beschwerden).\n- Besonderheiten (Patient macht mit / lehnt ab / hat Schmerzen).\n\n**Warum so genau?** Das Protokoll ist rechtlich wichtig. Wenn ein Patient einen Dekubitus bekommt und die Angehörigen fragen 'Wurde umgelagert?', ist das Protokoll der Beweis. Gesetz: § 630f BGB. Regel: Was nicht geschrieben ist, gilt als **nicht gemacht**.\n\n**Wichtig:** Sofort eintragen, nicht am Ende der Schicht.",
          glossarBegriffe: ["Positionierungsprotokoll"],
        },
      },
    },
    glossarBegriffe: ["Positionierungsprotokoll"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: positionierung-spezial-lagen (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-spezial-lagen",
    themaId: "positionierung",
    titel: "Spezial-Lagen: Herzbett, Schocklage, Beinhochlage",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Drei Patienten, drei Probleme: Atemnot durch Herzinsuffizienz, starker Blutverlust nach Unfall, geschwollenes Bein nach OP. Welche Position passt zu welchem Problem?",
      antwort:
        "Herzinsuffizienz/Atemnot → Herzbett (Oberkörper 30-45° hoch, Knie leicht gebeugt). Blutverlust → Schocklage (Kopf flach, Beine 20-30° hoch). Geschwollenes Bein → Beinhochlage (Beine auf Kissen). Jede Position hat eine klare Physiologie dahinter. (I Care Pflege, DNQP 2017/2024)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Drei Spezial-Positionen mit klarer Indikation: Herzbett (Oberkörper 30-45° hoch + Knie leicht gebeugt) bei Dyspnoe/Herzinsuffizienz. Schocklage (Kopf flach + Beine 30° hoch) bei hypovolämischem Schock. Beinhochlage (Beine auf Kissen) bei Ödem/Thromboseprophylaxe.",
      textB1:
        "Drei Spezial-Positionen: Herzbett (Oberkörper hoch, Knie leicht gebeugt) bei Atemnot und Herz-Problemen. Schock-Lage (Kopf flach, Beine hoch) bei Blutverlust. Bein-Hoch-Lage (Beine auf Kissen) bei dicken Beinen oder Venen-Problemen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-11",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["I Care Pflege", "DNQP 2017/2024", "Notfallmedizinische Leitlinien"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-speziallagen",
        tag: "pflege",
        bildkategorie: "szene",
        imageAlt:
          "Drei Spezial-Positionen nebeneinander: Herzbett mit Oberkörper hoch und Knieunterstützung, Schocklage mit Beinen hoch, Beinhochlage",
        bildhinweis:
          "Three special patient positions side by side: cardiac bed with elevated upper body and knee support, shock position with elevated legs, leg elevation position — copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Spezial-Lagen im Detail",
          body: "**Herzbett** (Oberkörper 30-45° hoch, Knie leicht gebeugt):\n- Wirkung: Senkt den venösen Rückfluss zum Herzen (Vorlast-Reduktion), entlastet die Atmung.\n- Indikation: Akute Linksherzinsuffizienz mit Lungenödem, Dyspnoe, COPD-Exazerbation.\n- Durchführung: Kopfteil hoch, Knierolle oder Kissen unter den Knien (verhindert Hinunterrutschen).\n- NICHT bei: Hypovolämischem Schock.\n\n**Schocklage** (Kopf flach, Beine 20-30° hoch):\n- Wirkung: Steigert den venösen Rückfluss, verbessert Hirn- und Herzperfusion.\n- Indikation: Hypovolämischer Schock (Blutung, Volumenmangel), Synkope.\n- Kontraindikation: Kardiogener Schock, Schädel-Hirn-Trauma, Atemnot, Hirndruck, Wirbelsäulenverletzung.\n\n**Beinhochlage** (Beine auf Kissen, ca. 15-30°):\n- Wirkung: Unterstützt venösen Rückfluss, reduziert Ödem-Bildung.\n- Indikation: Ödem, Thromboseprophylaxe, nach Venen-OP.\n- Kontraindikation: Periphere arterielle Verschlusskrankheit (pAVK) — bei pAVK wäre Tieflagerung richtig. (I Care Pflege, DNQP 2017/2024)",
          glossarBegriffe: ["Herzbett", "Schocklage"],
        },
        contentB1: {
          title: "Spezial-Lagen im Detail",
          body: "**Herzbett** (Oberkörper hoch, Knie leicht gebeugt):\n- Wirkung: Herz und Atmung werden entlastet.\n- Wann? Akute Atemnot, Herzinsuffizienz, Lungen-Ödem, COPD.\n- Wie? Bett-Kopfteil hoch stellen. Kissen oder Knie-Rolle unter die Knie (verhindert Rutschen).\n- NICHT bei: Schock mit niedrigem Blutdruck.\n\n**Schock-Lage** (Kopf flach, Beine hoch):\n- Wirkung: Blut fließt zum Herzen und Gehirn.\n- Wann? Notfall mit Blutverlust, Ohnmacht.\n- Wie? Fuß-Teil hoch oder Beine auf Kissen. Kopf flach (NICHT tiefer als Herz).\n- NICHT bei: Herz-Schock, Kopf-Verletzung, Atemnot, Hirn-Druck, Wirbelsäule unsicher.\n\n**Bein-Hoch-Lage** (Beine auf Kissen, leicht hoch):\n- Wirkung: Blut fließt besser aus den Beinen zurück. Weniger Schwellung.\n- Wann? Dicke Beine, Thromboseprophylaxe, nach Venen-OP.\n- NICHT bei: Schlechte Arterien im Bein (pAVK) — dann genau umgekehrt: Bein tief.",
          glossarBegriffe: ["Herzbett", "Schocklage"],
        },
      },
    },
    glossarBegriffe: ["Herzbett", "Schocklage"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: positionierung-fem-grundlagen (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-fem-grundlagen",
    themaId: "positionierung",
    titel: "Freiheitsentziehende Maßnahmen (FeM)",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein verwirrter Patient klettert nachts ständig aus dem Bett. Eine Kollegin sagt: 'Bettgitter hoch, Problem gelöst.' Du zögerst — warum?",
      antwort:
        "Du zögerst zu Recht. Bettgitter ist eine freiheitsentziehende Maßnahme (FeM), die rechtlich genehmigt werden muss (§ 1906a BGB). Erster Schritt: Alternativen prüfen (Niederflurbett, Sensormatte, mehr Betreuung), Ursachen angehen (Delir? Schmerz? Angst?), dokumentieren. (§ 1906a BGB, Werdenfelser Weg)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Bettgitter und Fixierungen sind freiheitsentziehende Maßnahmen (FeM). Sie dürfen nur mit richterlicher Genehmigung (§ 1906a BGB) oder mit freiem Willen des Patienten angewendet werden. Ausnahme: akute Gefahrenabwehr für kurze Zeit. Erster Schritt: Alternativen prüfen.",
      textB1:
        "Bettgitter und Fixierungen sind freiheitsentziehende Maßnahmen. Das heißt: Du nimmst dem Patienten seine Freiheit. Das geht nur mit Erlaubnis vom Richter (§ 1906a BGB). Oder wenn der Patient es wirklich selbst will. Zuerst immer Alternativen suchen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-12",
        phase: 1,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "V.1",
        quellen: ["§ 1906a BGB", "§ 239 StGB", "Werdenfelser Weg"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-fem",
        tag: "pflege",
        displayFormat: "stepbystep",
        bildkategorie: "szene",
        imageAlt:
          "Patientenbett mit hochgezogenem Bettgitter links (durchgestrichen), Niederflurbett mit Sensormatte rechts (mit Häkchen)",
        bildhinweis:
          "Two beds side by side: left bed with raised side rails crossed out in red, right bed low to floor with sensor mat in front and checkmark — copic marker sketch style, absolutely no text no labels no words",
        contentC1: {
          title: "Freiheitsentziehende Maßnahmen (FeM)",
          body: "**Freiheitsentziehende Maßnahmen (FeM)** schränken die Bewegungsfreiheit ein: hochgezogene **Bettgitter** (auch wenn nur eins), **Bauchgurte**, **Handgelenks-Fixierungen**, **sedierende Medikamente** zum Ruhigstellen, abgeschlossene Türen.\n\n**Rechtliche Grundlage:**\n- **Art. 2 Grundgesetz** schützt die Freiheit der Person.\n- **§ 1906a BGB** regelt FeM bei Betreuten: **genehmigungspflichtig** durch das **Betreuungsgericht**, außer in akuten Gefahrensituationen (dann kurzfristig, richterliche Genehmigung unverzüglich einholen).\n- **§ 239 StGB** (Freiheitsberaubung) droht bei unzulässigen Maßnahmen.\n\n**Werdenfelser Weg** (bundesweit etabliert): Erster Schritt immer **Alternativen** prüfen — Niederflurbett, Sensormatte vor dem Bett, Bewegungsmelder, individuelle Betreuung, Tagesstruktur, Schmerzbehandlung, Delirmanagement.\n\nDie Prüfung der Alternativen muss in der Pflege-Dokumentation sichtbar werden. (§ 1906a BGB, Werdenfelser Weg)",
          glossarBegriffe: ["Freiheitsentziehende Maßnahmen"],
        },
        contentB1: {
          title: "Freiheitsentziehende Maßnahmen (FeM)",
          body: "**Freiheitsentziehende Maßnahmen (FeM)** schränken die Freiheit des Patienten ein. Beispiele: **Bett-Gitter hoch**, **Bauch-Gurte**, **Hand-Fesseln**, ruhigstellende Medikamente, abgeschlossene Türen.\n\n**Gesetz:**\n- **Art. 2 Grundgesetz**: Jeder Mensch hat das Recht auf Freiheit.\n- **§ 1906a BGB**: FeM bei Betreuten brauchen die **Erlaubnis vom Gericht**. Nur in akuter Gefahr darfst du kurz ohne Erlaubnis handeln — aber der Richter muss sofort danach eingeschaltet werden.\n- **§ 239 StGB**: Wer Freiheit beraubt, macht sich strafbar.\n\n**Werdenfelser Weg**: Immer zuerst Alternativen prüfen!\n- **Nieder-Flur-Bett** (nah am Boden, kein Gitter nötig).\n- **Sensor-Matte** (ruft Pflege, wenn Patient aufsteht).\n- **Bewegungs-Melder**.\n- **Mehr Betreuung** (Aktivierung, Gespräch).\n- **Schmerz-Behandlung** und **Delir-Management**.\n\nDie Prüfung der Alternativen musst du in der Pflege-Akte dokumentieren.",
          glossarBegriffe: ["Freiheitsentziehende Maßnahmen"],
        },
      },
    },
    glossarBegriffe: ["Freiheitsentziehende Maßnahmen"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: positionierung-arbeitsschutz (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "positionierung-arbeitsschutz",
    themaId: "positionierung",
    titel: "Rückenschonendes Arbeiten und Arbeitsschutz",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Deine Kollegin beugt sich weit über das Bett, um den Patienten zu drehen. Sie sagt: 'Ich habe nur 30 Sekunden Zeit.' Ihr Rücken wird das nicht lange mitmachen. Was sagst du — und warum ist das auch rechtlich dein Thema?",
      antwort:
        "Rückenschonendes Arbeiten ist Arbeitsschutz-Pflicht (§ 3 ArbSchG, TRBS 2121). Du sagst: 'Stell das Bett hoch, dann machen wir es zu zweit — wir haben das Rutschbrett.' Der Arbeitgeber hat die Hilfsmittel bereitzustellen. Wenn sie fehlen: schriftlich an die PDL melden. (§ 3 ArbSchG, TRBS 2121)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Rückenschonendes Arbeiten ist Arbeitsschutz-Pflicht (§ 3 ArbSchG, TRBS 2121). Grundregeln: Bett auf Hüfthöhe, Kinästhetik statt Heben, zu zweit schwere Patienten, Hilfsmittel nutzen (Rutschbrett, Lifter, Drehscheibe). Pflegekräfte haben das Recht, Hilfsmittel einzufordern.",
      textB1:
        "Rücken-schonendes Arbeiten ist Pflicht (§ 3 Arbeits-Schutz-Gesetz). Regeln: Bett hoch stellen (auf Hüft-Höhe). Kinästhetik statt Heben. Schwere Patienten zu zweit. Hilfsmittel nutzen. Du hast das Recht auf Hilfsmittel.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-pos-wb-13",
        phase: 1,
        stepType: "text",
        bloomLevel: 5,
        kompetenzbereich: "V.1",
        quellen: ["§ 3 ArbSchG", "§ 15 ArbSchG", "TRBS 2121", "Lastenhandhabungsverordnung"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-positionierung-arbeitsschutz",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Rückenschonendes Arbeiten",
          body: "**Rückenschonendes Arbeiten** ist in der Pflege sowohl didaktisch als auch **rechtlich** verpflichtend.\n\n**Gesetzliche Grundlagen:**\n- **§ 3 Arbeitsschutzgesetz (ArbSchG)**: Arbeitgeber muss Gefährdungen am Arbeitsplatz minimieren.\n- **§ 15 ArbSchG**: Beschäftigte müssen mitwirken — und haben das Recht, Gefährdungen zu melden.\n- **Technische Regel TRBS 2121**: Vermeidung manueller Lasten-Handhabung.\n- **Lastenhandhabungsverordnung (LasthandhabV)**: Regelt Grenzen manueller Belastung.\n\n**Praktische Regeln:**\n1. **Bett auf Arbeitshöhe**: Matratze auf Höhe des eigenen Hüftknochens oder leicht darunter.\n2. **Kinästhetik statt Heben**: Eigenbewegung des Patienten aktivieren.\n3. **Zu zweit** bei immobilen und schweren Patienten (ab ca. 20 kg direkt zu bewegender Last).\n4. **Hilfsmittel immer** wenn verfügbar: Rutschbrett, Drehscheibe, Rollbrett, Patientenlifter, Aufstehhilfe.\n5. **Breite Standbasis**: Füße hüftbreit, leicht versetzt.\n6. **Aus den Beinen arbeiten**: Knie gebeugt, Rücken gerade — nicht aus dem Kreuz.\n7. **Pausen einhalten**: Aktive Erholungspausen mit Dehnübungen.\n\n**Pflichten:** Wenn Hilfsmittel fehlen, meldest du das schriftlich an die Pflegedienstleitung. Du bist **nicht verpflichtet**, unter gesundheitsgefährdenden Bedingungen zu arbeiten. (§ 3 ArbSchG, TRBS 2121)",
          glossarBegriffe: ["Kinästhetik"],
        },
        contentB1: {
          title: "Rückenschonendes Arbeiten",
          body: "**Rücken-schonendes Arbeiten** ist in der Pflege Pflicht. Auch rechtlich.\n\n**Gesetze:**\n- **§ 3 Arbeits-Schutz-Gesetz**: Der Chef muss den Arbeitsplatz sicher machen.\n- **§ 15 Arbeits-Schutz-Gesetz**: Du musst mitmachen — und darfst Probleme melden.\n- **Lasten-Handhabungs-Verordnung**: Regelt, wie viel du heben darfst.\n\n**Regeln in der Praxis:**\n1. **Bett auf Arbeits-Höhe** (auf Hüfte oder knapp darunter).\n2. **Kinästhetik statt Heben**: Der Patient bewegt sich selbst, so viel er kann.\n3. **Zu zweit** bei schweren oder bewusstlosen Patienten.\n4. **Hilfsmittel nutzen**: Rutsch-Brett, Dreh-Scheibe, Lifter, Aufsteh-Hilfe.\n5. **Breiter Stand**: Füße hüft-breit, ein Fuß leicht vorn.\n6. **Aus den Beinen arbeiten**: Knie beugen, Rücken gerade. Nicht aus dem Kreuz.\n7. **Pausen machen**: Mit Dehn-Übungen.\n\n**Wichtig:** Wenn Hilfsmittel fehlen — schreibe an die Pflege-Dienst-Leitung. Du darfst **NICHT** arbeiten, wenn es deinen Rücken kaputt macht.",
          glossarBegriffe: ["Kinästhetik"],
        },
      },
    },
    glossarBegriffe: ["Kinästhetik"],
    karteikarten: [],
  },
];

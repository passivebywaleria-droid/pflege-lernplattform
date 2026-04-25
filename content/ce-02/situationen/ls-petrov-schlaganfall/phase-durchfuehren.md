# Phase 4 — Durchführen

**situationId:** ls-petrov-schlaganfall
**Zeit:** ~40-60 Min
**Bloom:** B4–B5
**Kern-Frage:** Wie führe ich komplexe Maßnahmen sicher durch — und was tue ich, wenn etwas schiefläuft?
**Steps:** 9 (inkl. 2 Komplikationen mit Branching)

---

## KontextB1

Es ist 07:55 Uhr. Du hast alles vorbereitet.
Du hast: frische Bett-Wäsche, eine Wasch-Schüssel, angedickte Flüssigkeit, Einmal-Handschuhe.
Das Zimmer ist warm: 22 Grad.
Die Tür ist zu. Herr Petrov schaut dich an.
Er hält das Foto von seiner Frau Natalya in der linken Hand.
Er sagt: "Bitte... langsam."
Das ist sein Wunsch. Du machst alles langsam und sagst immer vorher, was du tust.

---

## Kontext

07:55 Uhr. Du hast alles vorbereitet: frische Bettwäsche, Waschschüssel, angedickte Flüssigkeit, Einmalhandschuhe. Das Zimmer ist auf 22°C aufgeheizt, die Tür ist zu. Herr Petrov schaut dich an. Er hat sein Foto von Natalya in die linke Hand genommen.

**Zitat Z3** erscheint als Quote-Card: *"Bitte... langsam."*

Das ist sein Wunsch. Du nimmst ihn als Leitprinzip.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 4.1 | `dur-01-vorbereitung-bobath-lagerung` | **text** (displayFormat: `stepbystep`) | B3 | Vier Schritte vor der Körperpflege: 1) Bett auf Arbeitshöhe bringen (Rückenprävention, LasthandhabV §2) 2) Herrn Petrov über alles informieren was als nächstes kommt — jeder Handgriff wird angekündigt 3) Betroffene Seite (rechts) als gleichwertige Seite einbeziehen — nicht übergehen 4) Ressourcen aktivieren: Was kann er selbst? Linke Hand am Waschvorgang beteiligen. Grundsatz Bobath: Bewegungsangebote machen, nicht übernehmen. Quelle: (Bobath B. 1990, Adult Hemiplegia) | pflege |
| 4.2 | `dur-02-ganzkoerperpflege-sequencing` | **sequencing** | B4 | Reihenfolge der Ganzkörperpflege nach Bobath beim halbseitig betroffenen Patienten. Karten: [Gesicht, Hals waschen — Patient beginnt selbst mit linker Hand] → [Oberkörper: gesunde Seite zuerst entkleiden, betroffene Seite ankleiden zuerst] → [Rücken: Seitlage nach Bobath-Prinzip] → [Intimpflege: Anleitung zur Eigenpflege soweit möglich] → [Beine: gesunde Seite zuerst waschen, betroffene Seite aktiv-assistiv einbeziehen] → [Fersen und Prädilektionsstellen inspizieren und eincremen]. Merkhilfe: "Ausziehen: Gesunde zuerst — Anziehen: Betroffene zuerst." Quelle: (Bobath B. 1990; Fröhlich A. 1998 Basale Stimulation) | pflege |
| 4.3 | `dur-03-drehen-seitenlage` | **diagram** (Ablaufdiagramm) | B3 | Ablaufdiagramm: Drehen von Herrn Petrov auf die betroffene Seite (Bobath-Prinzip). 5 Schritte visuell: 1) Linkes Bein anstellen (90°, Fuß auf Matratze) 2) Linken Arm quer über die Brust 3) Hand an Schulterblatt (nicht an Schulter!) und Beckenkamm 4) Drehen in einem gleichmäßigen Zug 5) Korrekte Seitenlage: Schulter nach vorne ziehen, Arm gestreckt auf Kissen, Bein leicht gebeugt. Merkhilfe: "Schulter-Beckenkamm, nicht Achsel-Taille." Quelle: (Bobath 1948; DNQP Mobilität 2020) | anatomie |
| 4.4 | `dur-04-atemuebungen` | **matching** | B3 | Zuordnung: Pneumonieprophylaxe-Maßnahmen zu ihrer Wirkung. 4 Paare: [Oberkörperhochlagerung 30°] → ["Schleim kann leichter abfließen, Zwerchfell fällt nach unten"] / [Tiefatemübungen, Lippenbremse] → ["Alveolen bleiben offen, Atelektasen werden verhindert"] / [Abhusten auf Anleitung] → ["Sekret wird mobilisiert und abtransportiert"] / [Frühmobilisation — Bettkante] → ["Vertikale Körperhaltung verbessert Atemvolumen um bis zu 30%"] . Quelle: (RKI/KRINKO 2013; AWMF S3 Schlaganfall) | krankheitslehre |
| 4.5 | `dur-05-essen-anreichen` | **text** (displayFormat: `checklist`) | B3 | Anreichen des Frühstücks bei Herrn Petrov. Checkliste 6 Punkte: ☐ Oberkörper auf 90° aufgerichtet (Aspirationsschutz, IDDSI 2019) ☐ Angedickte Flüssigkeit Level 2 bereitgestellt ☐ Löffel von der gesunden Seite (links) anreichen — Schluckreiz stimulieren ☐ Kleine Portionen: max. 5 ml pro Löffel ☐ Ruhige Atmosphäre: Kein Radio, kein Gesprächsdruck ☐ Beobachten: Husten? Feuchte Stimme? Verschlucken? Wenn ja: Stop. Quelle: (IDDSI 2019; DGG/DGN 2020 Neurogene Dysphagie) | pflege |

---

## KOMPLIKATION 1 — Herr Petrov verschluckt sich

**Trigger:** Während des Frühstücks, nach Step 4.5.

**Szene:** Herr Petrov hustet plötzlich heftig. Er greift mit der linken Hand zur Kehle. **Zitat Z4** erscheint: *(Husten heftig, greift mit linker Hand zur Kehle)*

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 4.6 | `dur-06-komp1-verschlucken` | **branching** (GROSSES Branching, 3 Pfade + Re-Entry) | B5 | **KOMPLIKATION 1 — BRANCHING.** *"Herr Petrov hustet stark beim Trinken. Was tust du als erstes?"* Pfad A: "Ich schlage ihm auf den Rücken, damit er frei bekommt." → Feedback: Rückenschlag beim Verschlucken (nicht vollständiger Fremdkörper) kann Bolus tiefer drücken — nur bei vollständiger Atemwegsobstruktion. Bei Verschlucken/Aspirationsereignis: andere Maßnahmen. Pfad B: "Ich stoppe das Anreichen sofort, fordere Herrn Petrov auf zu husten wenn er kann, sitze ihn gerade auf (90°), beobachte Atemgeräusch und Sättigung." → Richtiger Pfad. Erklärungs-Insert: 5 Maßnahmen bei Aspirationsereignis. Pfad C: "Ich rufe sofort den Arzt." → Nicht falsch, aber zu früh — erst stabile Situation herstellen, dann bewerten ob ärztliche Intervention nötig. **Trigger für Baustein `pneumonie-prophylaxe-aspiration-akut` Stufe 1–2 für Pfad A oder C.** | pflege |
| 4.7 | `dur-07-komp1-nachbeobachtung` | **timer** (3 Min Beobachtungsprotokoll) | B4 | Nach dem Ereignis: Du beobachtest 3 Minuten strukturiert. Timer-Step: Du tickst in Echtzeit 6 Beobachtungspunkte ab. [Atemfrequenz jetzt] / [Atemgeräusch: klar oder feucht-rasselnd?] / [Sättigung wenn Pulsox verfügbar] / [Herr Petrov ist wieder ruhiger / weiter Husten?] / [Feuchte Stimme? Ihm bitten zu sprechen.] / [Entscheidung: Weiter mit angepasster Konsistenz oder Stop + Arzt informieren?] Nach Timer: Befund-Zusammenfassung. | krankheitslehre |

---

## KOMPLIKATION 2 — Ehefrau Natalya möchte normalen Tee geben

**Trigger:** Natalya kommt 09:00 Uhr ins Zimmer, du bist noch da.

**Szene:** Natalya betritt das Zimmer mit einer Thermoskanne. Sie lächelt: **Zitat Z5** erscheint: *"Ich habe Tee mitgebracht, normalen — er trinkt immer ohne Zucker. Darf ich ihm geben?"*

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 4.8 | `dur-08-komp2-natalya` | **chatSim** (Beratungsgespräch, 4 Schritte) | B5 | **KOMPLIKATION 2 — ChatSim.** Simuliertes Beratungsgespräch mit Natalya. Schüler wählt bei jedem Schritt die beste Antwort: Schritt 1: Einstieg — wie reagiere ich auf das Lächeln von Natalya? [Validierend: "Wie schön, dass Sie kommen."] Schritt 2: Die Erklärung — warum kein normaler Tee? Drei Formulierungen zur Auswahl (medizinisch-technisch / einfach-verständlich / abweisend). Beste: einfach, ohne Fachbegriffe, mit Begründung: "Die Schluckmuskeln von Herrn Petrov arbeiten gerade nicht zuverlässig. Dünne Flüssigkeit kann in die Atemwege rutschen — das ist sehr gefährlich. Wir verdicken deshalb alles. Ich zeige Ihnen das gerne." Schritt 3: Alternative anbieten — verdickte Flüssigkeit vorbereiten. Schritt 4: Einbeziehen — Natalya darf anreichen, wenn sie es mit Anleitung tut. Feedback nach jedem Schritt: Sandwich. **Trigger für Baustein `essen-anreichen-dysphagie-angehoerige` Stufe 2.** | pflege |

---

## Mobilisation — Bettkante

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 4.9 | `dur-09-mobilisation-bettkante` | **dialog** (4 Phasen) | B4 | Dialog: Du möchtest Herrn Petrov an die Bettkante bringen. Vier Dialog-Phasen: Phase 1 — Ankündigen und Vorbereiten: *"Herr Petrov, wir versuchen jetzt, ans Bettkante zu kommen. Das ist wichtig für die Atmung und für Ihren Arm."* Er nickt. Phase 2 — Drehen und Aufsetzen: Schüler wählt zwischen 3 Vorgehensweisen (Bobath-gerecht / Heben / Ziehen am Arm). Bobath = richtig. Phase 3 — An der Bettkante: Herr Petrov sitzt. Er schaut auf seine Beine. **Zitat Z6** erscheint: Herr Petrov hält nach 8 Minuten den linken Daumen hoch. Phase 4 — Evaluation direkt: Wie lange? Schmerz? Schwindel? Schüler trifft Entscheidung: Zurück ins Bett oder noch 5 Minuten? KI-Feedback: bei Rückenposition ohne Abstützen → Sturzgefahr beachten. Quelle: (DGG 2022 S1-Leitlinie Frühmobilisation; Bobath 1948) | pflege |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 4.10 | `dur-opt-01-iddsi-stufen` | **comparison** | B3 | B2-Schüler | IDDSI-Framework Levels 0-4 im Vergleich: Normalkost → weich → püriert → breiig → dünnflüssig. Was Herr Petrov bekommt: Level 2 (Flüssigkeiten) + Level 4 (Essen). |
| 4.11 | `dur-opt-02-katheter-handling` | **text** (displayFormat: `checklist`) | B2 | B1 / kein Katheter-Vorwissen | Katheter-Bilanzierung Schritt für Schritt: Eingegebene Flüssigkeit, ausgeschiedene Menge, Differenz — mit Normwerten. |
| 4.12 | `dur-opt-03-aphasie-kommunikation-vertiefung` | **swipe** (Richtig/Falsch) | B3 | B2-Mittlere | 8 Aussagen zur Kommunikation mit Aphasie-Patienten swipe-basiert auswerten. |

---

---

## B1-Felder für Kern-Steps — Phase 4

### Step 4.1 — bodyB1 (dur-01-vorbereitung-bobath-lagerung)
Vor der Körper-Pflege — 4 Schritte:
Schritt 1: Stelle das Bett auf die richtige Höhe. Das schützt deinen Rücken.
Schritt 2: Sage Herrn Petrov immer vorher, was du machst.
Zum Beispiel: "Jetzt drehe ich Sie auf die Seite."
Schritt 3: Die rechte Seite ist die betroffene Seite. Sie ist genauso wichtig.
Übergehe sie nicht. Beziehe sie mit ein.
Schritt 4: Was kann Herr Petrov selbst tun? Seine linke Hand ist aktiv.
Lass ihn mitmachen. Das ist das Bobath-Prinzip: Bewegung anbieten — nicht übernehmen.

### Step 4.2 — bodyB1 (dur-02-ganzkoerperpflege-sequencing)
Die Reihenfolge der Körper-Pflege nach Bobath:
1. Gesicht und Hals: Herr Petrov beginnt selbst mit der linken Hand.
2. Ober-Körper: Zuerst die gesunde Seite aus-kleiden. Zuerst die betroffene Seite an-kleiden.
3. Rücken: Du drehst ihn auf die Seite (= Seiten-Lage nach Bobath).
4. Intim-Pflege: So viel wie möglich selbst machen lassen.
5. Beine: Gesunde Seite zuerst waschen. Betroffene Seite aktiv mitbewegen.
6. Fersen und Druck-Stellen: Anschauen und eincremen.
Merkhilfe: "Ausziehen: Gesunde zuerst. Anziehen: Betroffene zuerst."

### Step 4.3 — bodyB1 (dur-03-drehen-seitenlage)
Du drehst Herrn Petrov auf die Seite. 5 Schritte:
1. Linkes Bein anstellen: Der Fuß ist auf der Matratze, das Knie zeigt nach oben (90°).
2. Linken Arm über die Brust legen.
3. Deine rechte Hand liegt an seiner Schulter-Blatt (nicht an der Schulter!).
   Deine linke Hand liegt an seinem Becken-Kamm.
4. Drehe ihn langsam und gleichmäßig.
5. Korrekte Seiten-Lage: Schulter nach vorne ziehen. Arm gestreckt auf Kissen.
   Bein ein wenig gebeugt.
Merkhilfe: "Schulter-Blatt und Becken-Kamm — nicht Achsel und Taille."

### Step 4.4 — bodyB1 (dur-04-atemuebungen)
Pneumonie-Prophylaxe (= Lungen-Entzündung verhindern). 4 Maßnahmen:
Ober-Körper-Hochlagerung (30°) → Der Schleim kann besser abfließen. Das Zwerchfell fällt nach unten.
Tiefe Atem-Übungen (Lippen-Bremse) → Die Lungen-Bläschen bleiben offen. Atelektasen (= eingefallene Stellen in der Lunge) werden verhindert.
Abhusten → Der Schleim löst sich. Er kann abtransportiert werden.
Früh-Mobilisation — Bett-Kante → Wenn der Mensch aufrecht sitzt, atmet er viel besser (bis zu 30% mehr Volumen).

### Step 4.5 — bodyB1 (dur-05-essen-anreichen)
Herr Petrov isst Frühstück. Du reichst ihm das Essen an. 6 Punkte:
Ober-Körper auf 90° aufgerichtet — das schützt vor Verschlucken.
Angedickte Flüssigkeit Level 2 bereitstellen — kein normales Wasser.
Löffel von links anreichen — das ist seine gesunde Seite.
Kleine Portionen: max. 5 ml pro Löffel.
Ruhige Atmosphäre: Kein Radio. Kein Gesprächs-Druck.
Beobachten: Hustet er? Klingt die Stimme feucht? Verschluckt er sich?
Wenn ja: Sofort aufhören.

### Komplikation 1 — situationB1 (dur-06-komp1-verschlucken)
Herr Petrov hustet stark beim Trinken. Er greift mit der linken Hand an den Hals.
Was tust du als erstes?
Richtig (Pfad B):
Stopp — gib ihm nichts mehr.
Bitte ihn zu husten, wenn er kann.
Setze ihn gerade auf (90°).
Beobachte seine Atmung und Sauerstoff-Sättigung.
Falsch (Pfad A): Nicht auf den Rücken schlagen. Das kann das Essen tiefer drücken.
Das machst du nur, wenn er sich gar nicht mehr Luft kriegt (= vollständige Obstruktion).
Falsch (Pfad C): Den Arzt sofort rufen ist zu früh. Erst stabilisieren — dann bewerten.

### Komplikation 1 — feedbackB1 (dur-07-komp1-nachbeobachtung)
Jetzt beobachtest du 3 Minuten lang. 6 Punkte:
Wie oft atmet er jetzt pro Minute?
Klingt die Atmung klar oder feucht-rasselnd?
Wie ist die Sauerstoff-Sättigung? (wenn Puls-Oximeter vorhanden)
Ist er wieder ruhiger? Oder hustet er weiter?
Klingt die Stimme noch feucht? Bitte ihn, etwas zu sagen.
Entscheidung: Weiter mit angepasster Konsistenz? Oder aufhören und den Arzt informieren?

### Komplikation 2 — situationB1 (dur-08-komp2-natalya)
Natalya kommt ins Zimmer. Sie lächelt. Sie hat eine Thermos-Kanne dabei.
Sie sagt: "Ich habe Tee mitgebracht — normalen. Er trinkt immer ohne Zucker. Darf ich ihm geben?"
Schritt 1 — Wie reagierst du? Sage: "Wie schön, dass Sie kommen."
Schritt 2 — Erkläre es einfach: "Die Schluck-Muskeln von Herrn Petrov arbeiten gerade nicht gut.
Dünne Flüssigkeit kann in die Lunge rutschen. Das ist sehr gefährlich.
Wir machen deshalb alle Getränke dicker. Ich zeige Ihnen das gerne."
Schritt 3 — Biete eine Alternative an: Zeige Natalya die angedickte Flüssigkeit.
Schritt 4 — Beziehe Natalya ein: Sie darf anreichen — wenn du es ihr zeigst.

### Step 4.9 — bodyB1 (dur-09-mobilisation-bettkante)
Du möchtest Herrn Petrov an die Bett-Kante bringen.
Phase 1 — Ankündigen: "Herr Petrov, wir versuchen jetzt, an die Bett-Kante zu kommen.
Das ist gut für die Atmung und für Ihren Arm." Er nickt.
Phase 2 — Aufsetzen: Du drehst ihn nach Bobath und setzt ihn auf.
Nicht ziehen. Nicht heben. Bewegung anbieten.
Phase 3 — Sitzen: Herr Petrov sitzt an der Kante. Er schaut auf seine Beine.
Nach 8 Minuten zeigt er den Daumen nach oben.
Phase 4 — Bewerten: Wie lange sitzt er? Hat er Schmerzen? Ist ihm schwindelig?
Dann entscheidest du: Zurück ins Bett — oder noch 5 Minuten?

---

## Phase-4-Abschluss

*Zwischenseite:* "Du hast eine komplexe Pflegemaßnahme gemeistert — inklusive zwei unerwarteter Situationen. Herr Petrov sitzt seit 8 Minuten an der Bettkante. Natalya ist informiert. Jetzt: Wie hat es gewirkt?"

---

## Baustein-Trigger Phase 4

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| step-4.2 mehr als 2 Fehler in Reihenfolge | `ganzkörperpflege-bobath-besonderheiten` | Stufe 2–3 |
| step-4.6-Pfad-A | `pneumonie-prophylaxe-aspiration-akut` | Stufe 1–2 |
| step-4.8 Schritt-2-schlecht | `essen-anreichen-dysphagie-angehoerige` | Stufe 2 |

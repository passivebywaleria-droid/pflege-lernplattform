# Didaktisches Wissensnetz — CE-übergreifender Leitfaden

> **Zweck:** Der verbindliche didaktische Rahmen für ALLE CE. Jeder CE-Chat liest das,
> bevor er Situationen/Wissens-Tabs baut. Ergänzt `specs/didaktisches-konzept.md` (Theorie)
> um die konkreten Bau-Prinzipien. Wird gepflegt — Ideen unten tragen einen Status.
>
> **Findbar über:** verlinkt aus `specs/START-PROMPT-WISSENS-TABS.md`, Memory
> `project_wissens_tabs_kampagne.md`, `specs/ce-06/REDESIGN-SITUATIONEN-CE06.md`.

## Didaktische Grundlagen (konsolidiert)

Alles, was wir zur Didaktik festgelegt haben — an einem Ort. Wo eine Wahrheitsquelle
existiert, ist sie genannt (dort ändern, nicht hier gabeln).

### Grundhaltung
- **Curriculum-first.** Reihenfolge IMMER: Rahmenlehrplan-Lernergebnisse → Wissens-Landkarte
  (welches Wissen?) → Situationen (welche tragen es?) → Verteilung → Bausteine. Nie
  Situation-first. (→ `project_wissens_tabs_kampagne.md`)
- **Pflegefachlichkeit hat oberste Priorität.** Erst Literatur Wort für Wort lesen, dann
  schreiben. Nichts aus dem Gedächtnis. Kein erfundener Content. (→ `.claude/rules/pflege-konformitaet.md`,
  Memory `feedback_kein_erfundener_content`)
- **Anrede immer „du"**, nie „Sie" — auch in B1. (→ AGENTS.md Learnings)
- **Curriculum-Tiefe-Grounding:** Was nicht aus Pflege-Standardliteratur belegbar ist, liegt
  über Ausbildungsniveau → kürzen statt extern jagen (I Care = Maßstab). (→ `feedback_curriculum_tiefe`)

### Die drei Adaptivitäts-Achsen
Jeder Schüler wird auf drei getrennten Achsen gemessen — Content trägt Marker für alle drei:
1. **Sprachkompetenz** (Muttersprache … B1) → B1-Variante + Glossar + Vorlese/Nachsprech.
2. **Pflegefachwissen** (pro Thema) → Track/Modus, Einstieg als Kalibrierung.
3. **Kognitive Tiefe (Bloom 1–6)** → steuert die Aufgaben-Tiefe. (→ VISION.md „Zwei Achsen"; Bloom als 3.)
- **Antwortzeit ist ein Signal** (schnell+richtig = weiß es; langsam+geraten = nicht) → laufende
  Kalibrierung. (→ VISION.md „Einstufung: Testen, nicht Fragen")

### Die 5 Kompetenzbereiche + KB-Marker-Regel
KB I Pflegeprozesse · II Kommunikation · III intra-/interprofessionell · IV Recht/Qualität ·
V Wissenschaft/Berufsethos. Marker aus dem **LE-Schwerpunkt-Set** (Katalog `kompetenzbereichPrimaer`
+ `…Sekundaer`), nie geraten. Wissens-Tab → LE-Primär; Anwendungs-Step → real trainierter KB
aus dem Set. Coverage-Ziel: Schwerpunkte der LE nachweisbar abdecken (→ Kompetenznachweis
Bezirksregierung, `specs/KOMPETENZ-NACHWEIS-BEZIRKSREGIERUNG.md`).

### Baustein-Aufbau (Gold-Standard, Pflicht)
Antizipation (Denkfehler wecken) → das **WARUM** (belegt) → die Regel → **mentales Modell**
(Kette/Netz) → **Faustregel** → **Spektrum** (3–5 belegte Kontrast-Patienten) → **Karteikarte**.
NICHT „Fakten aufzählen". Urheberrecht: paraphrasiert (Abstandstest 0), sichtbar nur
Primärquellen/Standards. Vorlage: Step `ce06-wagner-erk-01b-hks-erkennen`.

### Wissens-Rhythmus-Korridor + Situationsgröße
Inline-Wissen **20–30 %** (Ziel 25 %) pro Situation. Verteilung wichtiger als exaktes Verhältnis;
Wissen kommt **vor** seiner Anwendung. (→ `feedback_wissens_rhythmus`)
- **Situationsgröße wird ABGELEITET, nicht fixiert:** aus dem Wissen, das die LE fordert, PLUS
  dessen Anwendung. Keine feste „~10 Steps"-Zahl. Braucht ein Thema viel Wissen, braucht es auch
  mehr Anwendungs-Steps — die Situation wächst.
- **Korridor zu hoch → mehr Anwendung, NICHT weniger Wissen.** Ein zu hoher Wissens-Anteil ist
  meist ein Symptom fehlender Anwendung, nicht von zu viel Wissen. (Wagner: 5 Tabs → 36 %, weil
  ALS/KPR keine Anwendung hatten; Fix = Anwendungs-Steps ergänzen → 29 %.)

### Feedback-Didaktik
- **Sandwich-Prinzip:** loben → konkret korrigieren → ermutigen. Nie abwertend (besonders B1).
- **„Warum?" bei JEDER Antwort** — richtige UND falsche erklären, konkret was/warum.
- **Fehleranalyse + Strategiewechsel („6 Wege zum Ziel"):** bei Nichtverstehen nicht 6× dieselbe
  Frage — anderer Fragetyp / Sinneskanal / Abstraktionsgrad (MC → Text → Bild → Analogie →
  Nachsprechen → Fallbeispiel). Warum versteht er nicht? (Sprache/Begriff/Konzept/geraten)
  (→ VISION.md „Die KI als Didaktiker")

### Zwei Lernmodi
- **Lernen-Modus:** verzahnt (Wissenstext → sofort Steps → nächster Text), Bloom 1–4.
- **Prüfungs-Modus:** langer Patientenfall + offene Fragen (freetext), Bloom 4–6, kein Feedback
  bis Ende, echtes Prüfungsformat. (→ Memory `project_content_sizing_modell`, Pipeline-Learnings)

### Abwechslung / Modi-Vielfalt
Nicht nur MC. Fragetyp/Sinneskanal alle 15–20 Min wechseln (MC, Zuordnung, Lückentext, Sortierung,
Memory, Branching, Highlight, Reflexion, Sprechübung). Nie „digitales Buch", nie Monotonie.
(→ VISION.md „Ein Tag", `specs/ADAPTIVER-THEMENBOGEN.md`)

## Leitprinzip: „Ein Kern-Wissen, mehrere Begegnungen"

Jedes Kern-Wissen wird **einmal tief** in seiner Heimat-Situation gelehrt und dann
**absichtlich wieder getroffen** aus anderen Perspektiven — als Kontrast, Wiederbegegnung,
Anwendung in der Nachbar-Situation. Redundanz aus verschiedenen Blickwinkeln ist KEIN
Fehler, sondern das Lernprinzip (Interleaving + Spaced Repetition + Perspektivwechsel).

- Die eigentliche Kompetenz ist oft **Unterscheidung** (Synkope vs. HKS vs. Apoplex …) —
  die entsteht nur durch nebeneinandergestellte Fälle, nie isoliert.
- Ein Konzept einmal als *Erkennen*, einmal als *Entscheiden*, einmal als *Reflektieren*
  = Bloom-Steigerung über Begegnungen hinweg.
- Getragen von vorhandener Engine/Schema: `WiederbegegnungEintrag`, `spektrum[]` in
  `inlineWissen`, SM-2 (`use-karteikarten.ts`), Marker (kb/bloom/le/kernfaktId).

## Ideen-Katalog (Status: ✅ Pflicht · 🔜 Backlog-Engine · 💡 offen)

### Lehr-Rhythmus
1. **✅ Productive Failure — Hook VOR Wissen.** Erst ein Anwendungs-/Fallstrick-Step, der
   den Denkfehler weckt, DANN der Wissens-Tab, DANN die saubere Anwendung. Der Tab landet
   auf vorbereitetem Boden. (Wagner P1 macht es; als Muster verbindlich.)
1b. **✅ Jeder Wissens-Tab braucht eine Anwendung unmittelbar danach** (Constructive Alignment).
   Ein Tab ohne folgende Anwendung ist totes Lesen — die Bloom-Stufe steigt nie von 2 (verstehen)
   auf 3–4 (anwenden). Beim Bau prüfen: Wird JEDER Tab in einem nachfolgenden Step angewandt/abgerufen?
2. **✅ Immer ein „Warum" tiefer.** Jeder Fakt beantwortet das Warum eine Ebene tiefer als
   erwartet (30:2 → No-Flow-Zeit). Nie nur behaupten, immer den Mechanismus.
3. **💡 Transfer-Beats (near/far transfer).** Nach dem Lernen im Heimat-Kontext ein Beat
   „gleiche Lage, anderer Ort" (Station → ambulant/zuhause): löst Situations-Bindung,
   baut flexibles Wissen.

### Behalten (Spaced Repetition / Retrieval)
4. **🔜 Karteikarten der Wissens-Tabs in die SM-2-Engine speisen.** Jeder Tab trägt schon
   `karteikarte` — sie sollen automatisch in den situationsbasierten Spaced-Repetition-Stack
   (bekannte Engine-Lücke: Karteikarten-Tabelle ist noch LE-basiert). Größter Behaltens-Hebel;
   Marker liegen bereit.
5. **✅ Wiederbegegnung = aktives Abrufen, nicht passive Erinnerung.** Wenn ein Konzept
   wiederkommt, ZUERST fragen („Was war der Unterschied Synkope/HKS?"), dann bestätigen.
   Retrieval schlägt Wiederlesen.

### Adaptivität (die zwei Achsen + Bloom)
6. **🔜 Adaptive Tab-Tiefe.** Starker Schüler → kompakte Version/überspringen; kämpfender →
   voller Tab + B1. Über die Marker (bloom/kb) + Zwei-Achsen-Profil steuerbar.
7. **✅ Denkfehler-Tags an Distraktoren.** Jede falsche Option trägt den Denkfehler, den sie
   verkörpert („Schnappatmung = Atmung"). Nutzen dreifach: KI-Tutor kann gezielt gegensteuern,
   „häufige Denkfehler"-Review, reichere Trainings-Präferenzpaare (→ `KI-DATENSATZ-STRATEGIE.md`).
8. **✅ Sprach-Achse mitbauen, nicht nachrüsten.** Zu jedem Wissens-Tab: B1-Variante +
   Aussprache-Kandidaten markieren (Fachbegriffe wie „Kammerflimmern", „Defibrillation")
   für Vorlese-/Nachsprech-Funktion (TTS/Whisper, VISION). Glossar-Begriffe = natürlicher Anker.

### Konstruktives Alignment
9. **✅ Ziel-Bloom muss geprüft werden.** Pro LE die höchste geforderte Bloom-Stufe irgendwo
   als Assessment-Beat erreichen (nicht nur lehren). Check: `scripts/lernergebnis-tiefe.ts`
   (berührt/geübt/geprüft). Gate „mind. geübt", Ziel „geprüft" auf Ziel-Bloom.

### Motivation / Kohärenz
10. **💡 Roter-Faden-Figur.** Wiederkehrende Nebenfigur (z. B. die Pflegeschülerin aus Wagner)
    über eine CE für emotionale Bindung + longitudinales Denken (VISION: Motivation über Wochen).
11. **✅/🔜 Cross-CE-Spiralcurriculum.** Kern-Konzepte kehren über CEs hinweg absichtlich wieder,
    mit steigender Tiefe („SBAR kennst du aus CE-03 → hier im Notfall CE-06"). Wahrheitsquelle:
    **`specs/CROSS-CE-KONZEPTREGISTER.md`** (Heimat → Wiederbegegnungen, zentral besessen, jeder
    Chat liest es). Cross-CE-Interleaving in Prüfungen (Notfall-Mix CE-06×CE-05) = Engine-Feature 🔜;
    Marker (ce/le) + `WiederbegegnungEintrag` tragen es schon.

### Assessment als Kalibrierung
12. **💡 Situations-Einstieg als Diagnostik.** Der erste Beat kann als Mikro-Einstufung die
    zwei Achsen kalibrieren (VISION: laufende Kalibrierung), statt separatem Test.

## Anwendung
Beim Bau einer Situation: die ✅-Punkte sind Pflicht. 🔜/💡 sind vorgemerkt — Marker JETZT
so setzen, dass sie später ohne Content-Umbau greifen (Denkfehler-Tags, karteikarte, B1,
kb/bloom). Neue Ideen hier eintragen (mit Status), nicht in Einzel-Chats verlieren.

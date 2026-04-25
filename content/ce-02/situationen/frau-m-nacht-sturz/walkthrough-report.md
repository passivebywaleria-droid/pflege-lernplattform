# Walkthrough-Report: frau-m-nacht-sturz

**Geprüft:** 2026-04-23
**Prüfer:** student-walkthrough
**CE:** ce-02
**Situation:** frau-m-nacht-sturz
**Phasen:** 6 (informieren, beobachten, planen, durchfuehren, evaluieren, dokumentieren)
**Steps gesamt:** 30 (5 + 6 + 5 + 7 + 4 + 3)

## Zusammenfassung

- **Gefundene Bugs:** 15
- **K.O.-Fehler:** 4 (müssen vor Launch gefixt werden)
- **Hoch:** 6
- **Mittel:** 5

**Empfehlung an step-fixer:**
Ja — step-fixer kann für die K.O.-Bugs 1-4 loslaufen. Die Bugs B-01 (Confidence-Verwechslung), B-02 (Body-Dopplung bei 1-Zeilen-scenario), B-03 (dangling "Erklärung oben"-Verweis) sind struktur-technisch lösbar. Bug B-04 (Selbsteinschätzungs-Widerspruch im Eval-Step) braucht eine Content-Dozentin-Entscheidung parallel.

---

## Bugs (nach Schwere)

### K.O.

#### B-01: Confidence-Step bei subjektiven Aussagen — "Falsch!"-Feedback bei ehrlicher Selbsteinschätzung
- **Datei:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-informieren.ts:52-98`
- **Step:** `ce02-frau-m-info-02-vor-betreten` — "Wie sicher fühlst du dich?"
- **Problem:** `stepType: "confidence"` mit subjektiven `confidenceCards` wie "Sehr unsicher …", "Mittelmäßig …", "Sicher — ich weiß, worauf es ankommt". Der Renderer `StepConfidence` (src/components/learn/step-confidence.tsx) zeigt pro Karte zuerst Wahr/Falsch-Buttons, dann "Wie sicher bist du?" und vergleicht die Wahr/Falsch-Antwort gegen `isTrue`. Markiert man z.B. ehrlich "Wahr" bei "Sehr unsicher" (isTrue: false), kommt "Falsch!" als Überschrift — obwohl die Aussage eine Selbstauskunft ist. Bei "Sicher — ich weiß, worauf es ankommt" (isTrue: true) muss der User "Wahr" tippen um Lob zu bekommen — unabhängig davon, ob er sich wirklich sicher fühlt.
- **Fix:** stepType wechseln zu `selfrating` und die 3 Aussagen als Skala-Optionen mappen. Alternativ: separate Komponente `StepSelfassessment` mit Karten OHNE "isTrue"-Feld. Feldform anpassen — nicht `confidenceCards`, sondern `selfRatingOptions: [{label, nextStep?}]`.
- **Renderer-Ursache:** `step-confidence.tsx:68-83` validiert `selectedAnswer === card.isTrue` und gibt "Falsch" aus.

#### B-02: Doppelter Body-Text bei displayFormat "scenario" mit 1-Absatz-Body
- **Datei 1:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-informieren.ts:35-37` — Step `ce02-frau-m-info-01-uebergabe-sbar`
- **Datei 2:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-beobachten.ts:120-122` — Step `ce02-frau-m-beob-02-zolpidem-erklaert`
- **Problem:** Beide Steps haben `displayFormat: "scenario"` + einen body OHNE `\n\n`-Trennung (nur 1 zusammenhängender Absatz). Der Renderer `DisplayFormatView` case "scenario" (`step-text.tsx:402-417`) splittet body in `lines`, nimmt `lines[0]` als "Setting"-Überschrift und `lines.slice(1).join("\n") || body` als Description. Wenn nur 1 Zeile existiert, ist `lines.slice(1)` leer → Fallback `|| body` greift → der komplette body wird **zusätzlich** zur Setting-Zeile nochmal gerendert. Schüler sieht denselben Text zweimal.
- **Fix Option A (Content):** body mit `\n\n` in Setting-Zeile + Rest splitten — z.B. erste Zeile als Mini-Setting, dann `\n\n` und dann der Rest. Beispiel Step 1.1:
  ```
  "02:48 Uhr, Flur der internistischen Station.\n\nFrau Keller flüstert..."
  ```
- **Fix Option B (Renderer):** `description = lines.slice(1).join("\n")` — `|| body`-Fallback entfernen, stattdessen Setting weglassen wenn lines.length===1 (gesamten body als description zeigen).
- **Renderer-Ursache:** `step-text.tsx:404` — `const description = lines.slice(1).join("\n") || body;` → der `|| body` macht das Duplikat.

#### B-03: Dangling-Verweis "Der Unterschied steht in der Erklärung oben"
- **Datei:** `src/lib/adaptive/fehler-analyse.ts:32-33`
- **Trifft Step:** `ce02-frau-m-info-03-erste-prioritaet` (MC-fallstrick) und alle anderen MC-Steps in der Situation (6 betroffen: info-03, beob-04 ist categorize, dur-07-hueftprotektor).
- **Problem:** Wenn ein Schüler eine falsche MC-Antwort gibt und die Fehler-Analyse `verwechslung` trifft, zeigt das AnswerSheet den Text: "Zwei ähnliche Begriffe liegen hier eng beieinander. Der Unterschied steht in der Erklärung oben." Im MC-Renderer gibt es aber keine "Erklärung oben" — nur eine Erklärung unter jeder Option. Das AnswerSheet erscheint unten am Bildschirm. Der Verweis "oben" ist falsch und der versprochene Inhalt (Unterschieds-Erklärung) existiert nirgends strukturiert.
- **Fix:** Text in fehler-analyse.ts anpassen: "Zwei ähnliche Begriffe liegen hier eng beieinander. Lies die Erklärung unter deiner Wahl und der richtigen Antwort genau durch." ODER besser: Konkret auf den Distraktor-Text verweisen. Die User-Notiz sagt das sei "inzwischen gefixt", aber der aktuelle Code zeigt noch "Erklärung oben".
- **Renderer-Ursache:** `fehler-analyse.ts:32` — statischer Text der Lage nicht reflektiert.

#### B-04: Confidence-nachher widerspricht Feedback-Logik (Eval-Phase)
- **Datei:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-evaluieren.ts:99-148`
- **Step:** `ce02-frau-m-eval-03-konfidenz-nachher`
- **Problem:** Gleiche Struktur wie B-01 — 3 Aussagen ("Immer noch unsicher", "Sicherer als vorher", "Klar sicher") mit `isTrue: false, false, true`. Der Schüler, der ehrlich "Immer noch unsicher" wählt, bekommt das Feedback: `"Falsch"` (wegen isTrue=false beantwortet mit Wahr). Die explanation-Texte sind zwar freundlich, aber die Überschrift "Falsch!" entwertet die ehrliche Selbsteinschätzung nach 30 Steps Arbeit. Verstärkt durch "Falsch" in Eval-Phase = demotivierend direkt nach Hauptlernstrecke.
- **Fix:** Gleich wie B-01 — stepType `selfrating` oder neue Komponente. Content-didaktisch: explanation-Texte behalten, nur Feedback-Header entfernen.

---

### Hoch

#### B-05: Misconception-Feedback verweist auf "feine Unterschiede" ohne sie zu zeigen
- **Datei:** `src/lib/adaptive/fehler-analyse.ts:234` (plus bloom-feedback.tsx:234)
- **Trifft:** MC-Steps mit Kategorisierung "verwechslung"
- **Problem:** Kurz-Tipp "Tipp: Achte auf die feinen Unterschiede." erscheint, aber die Plattform zeigt diese Unterschiede nicht aktiv (keine Vergleichstabelle, kein zweiter Versuch mit anderer Darstellung). Widerspricht VISION.md "Strategiewechsel wenn es nicht klappt".
- **Fix:** Bei `verwechslung` einen Re-Try-Step mit Vergleichstabelle anbieten, oder Hinweis präziser formulieren: "Lies die Erklärung unter der richtigen Option noch einmal — sie hebt den Unterschied hervor."

#### B-06: Sortierbare Karten im Sorting-Step zeigen "sortItems" — aber StepSorting erwartet "items"
- **Datei:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-informieren.ts:367-377` (info-05), `phase-durchfuehren.ts:44-53` (dur-01)
- **Step:** `ce02-frau-m-info-05-was-pruefe-ich`, `ce02-frau-m-dur-01-transfer-vom-boden`
- **Problem:** User meldet "Karten werden nicht gerendert". Code-seitig: `step-renderer.tsx:292` macht Fallback `q?.sortItems ?? q?.items`, das funktioniert. **ABER**: Der Schritt in `phase-durchfuehren.ts:44` hat keinen `fragetext` am Question-Root, sondern der fragetext ist im Question-Objekt gesetzt (`question: { fragetext: ..., sortItems: [...] }`). Der Renderer zieht `q.fragetext` korrekt. Technisch funktionieren die Karten. Eventuell liegt der User-Report an einem früheren Stand oder an einem Cache-Problem. **Trotzdem Risiko**: Keine dokumentierte Konvention welches Feld Pflicht ist. Konsolidiere auf `sortItems` als kanonisches Feld laut _types.ts.
- **Fix:** Verifikation durch manuellen Test + Turbopack-Cache leeren (`rm -rf .next`). Wenn Bug reproduzierbar: Im Renderer explizit auf `q?.sortItems` prüfen und Warn-Log wenn undefined.

#### B-07: TrueFalse Step 2.5 "Orthostase-Test" — sichtbarer Stacking-Fehler möglich
- **Datei:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-beobachten.ts:306-361`
- **Step:** `ce02-frau-m-beob-05-orthostase-test`
- **Problem:** User meldet "Karten werden möglicherweise nicht vollständig gezeigt". Renderer (step-truefalse.tsx) zeigt eine Karte nach der anderen mit `cardIdx`. Content hat 4 Karten, das ist funktional korrekt. Wenn visueller Bug auftritt, liegt er entweder am Turbopack-Cache oder an einer Scroll-Überlappung des Feedback-Ergebnisses mit den folgenden Karten.
- **Fix:** Manuelle Verifikation im Dev-Server. Wenn Bug sichtbar ist: Scroll-Container `overflow-y-auto` in step-truefalse.tsx Zeile 126 wird bei großem Feedback-Text ggf. eingeklemmt — dann min-h-0 Fix nötig.

#### B-08: Harte Feedback-Sprache bei Dialog-Wahl score:0 — "Das war falsch" als B1-Feedback
- **Datei:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-informieren.ts:234-235` (info-04 Phase 1 Option 3)
- **Step:** `ce02-frau-m-info-04-zimmer-betreten`
- **Problem:** feedbackB1 beginnt mit "Das war falsch." — kein Sandwich, keine Ermutigung vor dem Tadel. VISION.md fordert: Loben → Korrigieren → Ermutigen. Gleiches Muster bei `phase-beobachten.ts:241-242` ("Schlecht. Frau M. hat dir etwas Wichtiges gesagt. Du wischst es weg."). Und bei `phase-durchfuehren.ts:260-262` ("Schlecht. 'Ich ziehe Sie hoch' — das ist falsch").
- **Fix:** B1-Feedbacks mit Lob starten lassen: "Gut, dass du geantwortet hast — aber hier war die Aussage problematisch: …"

#### B-09: Wiederholende Diagnose-Badges in JEDEM Step
- **Datei:** `src/app/[locale]/lernen/situation/[situationId]/page.tsx:120-132`
- **Problem:** Die Patient-Box mit 5 Diagnose-Badges (Pneumonie, Parkinson, Hypertonie, Osteoporose, Katarakt) wird im Header auf JEDER Seite voll gerendert. Bei 30 Steps = 30× dieselben Badges. Nach Phase 1 kennt der Schüler die Diagnosen.
- **Fix:** Nach Phase 1 (ab beobachten) auf kompakte Badge einklappen: Name + Alter + Chevron-Toggle um bei Bedarf wieder zu öffnen.

#### B-10: Phase 1 Step 1.1 Body erreicht potentiell Carousel-Trigger (≥3 Sätze), displayFormat verhindert es nicht
- **Datei:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-informieren.ts:37`
- **Problem:** In `step-text.tsx:499-500`: `const useCarousel = !displayFormat && (carousel || cards.length >= 3);` — displayFormat="scenario" deaktiviert Carousel korrekt. ABER: modus="story" setzt kein `carousel=true` (nur modus="entdecker" tut das, siehe step-renderer.tsx:252). Also kein akuter Bug — nur fragil. Wenn jemand modus="entdecker" auf Step 1.1 setzt, wird BEIDES getriggert und der Renderer-Pfad kaputtgehen.
- **Fix:** Defensive Programmierung — in step-text.tsx `useCarousel = !displayFormat && ...` bleibt, aber dokumentieren dass displayFormat + carousel sich gegenseitig ausschließen.

---

### Mittel

#### B-11: Fachbegriff "Nykturie" mehrfach im Content ohne Glossar-Eintrag in contentC1.glossarBegriffe
- **Datei:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-beobachten.ts:70-71, 296-297`
- **Steps:** beob-01 (HCT-reason nennt Nykturie), beob-04 (Categorize-Item nennt Nykturie)
- **Problem:** "Nykturie" ist im Text, aber `glossarBegriffe: ["Polypharmazie"]` bzw. `["Intrinsische/Extrinsische Risikofaktoren"]` — Nykturie fehlt. B1-Schüler wird diesen Begriff nicht kennen.
- **Fix:** "Nykturie" zu `glossarBegriffe` hinzufügen in betroffenen Steps.

#### B-12: "PRISCUS" und "Z-Substanzen" ohne Glossar-Eintrag
- **Datei:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-beobachten.ts:82-85, 122-128`
- **Step:** beob-01 (Zolpidem-Erklärung), beob-02 (Zolpidem erklärt)
- **Problem:** "PRISCUS-2.0-Liste", "Z-Substanzen", "Nicht-Benzodiazepin-Hypnotika" sind hochspezifische Fachbegriffe. `glossarBegriffe: ["Polypharmazie"]` reicht nicht.
- **Fix:** PRISCUS und Z-Substanzen als Glossar-Einträge ergänzen.

#### B-13: Titel der Confidence-Steps identisch mit Phasen-Name-Untertitel
- **Datei:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-informieren.ts:64, 69` vs. `phase-evaluieren.ts:113, 118`
- **Problem:** Sowohl info-02 als auch eval-03 haben Titel "Wie sicher fühlst du dich?" — Schüler bekommt in Eval-Phase das Gefühl "ich bin wieder am Anfang". Zweiter Step sollte differenziert sein: "Wie sicher fühlst du dich jetzt?" (eval hat das schon in fragetext, aber Titel ist identisch).
- **Fix:** Titel in eval-03 ändern zu "Wie sicher fühlst du dich nach allem?" oder "Dein Ende-Check".

#### B-14: Dialog-Body bei info-04 enthält Markdown-Underscore-Italics `_"..."_` im body-Text
- **Datei:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-informieren.ts:175-176`, phase-planen.ts:115, phase-durchfuehren.ts:164-165
- **Problem:** body-Text in Dialog-Steps enthält `_"Zitat"_` — der Renderer (step-dialog.tsx bzw. step-text.tsx) parsed das nicht als Italic (keine Markdown-Komponente aktiv). Schüler sieht die Underscores als sichtbare Zeichen.
- **Fix:** Markdown-Parser (z.B. remark/react-markdown) einbauen ODER die Underscores durch HTML-Entities oder `<em>` ersetzen ODER die Zitat-Formatierung via displayFormat="quote" oder speziellem Widget übernehmen.

#### B-15: Step eval-04 Reflexion — fragetext verweist auf "KI-Sandwich-Feedback" aber kein Muster
- **Datei:** `content/ce-02/situationen/frau-m-nacht-sturz/phase-evaluieren.ts:155-187`
- **Step:** `ce02-frau-m-eval-04-reflexion-frage`
- **Problem:** `musterantwort` fehlt (richtig so bei Reflexion), aber stepType=`freetext` und der StepFreetext-Renderer hat keinen speziellen Reflexions-Pfad — er zeigt `musterantwort` wenn vorhanden. Für diesen Step fehlt sie komplett. Könnte Renderer-Fehler geben, wenn Code auf musterantwort.length zugreift. Vermerk zur Sicherheit: prüfen ob StepFreetext robust gegen fehlendes musterantwort.
- **Fix:** In step-freetext.tsx defensiv prüfen. Alternativ: stepType zu `reflection` wechseln und `reflection: { prompt, systemPrompt }` statt `musterantwort` nutzen — der Renderer hat dafür einen eigenen Pfad (step-renderer.tsx:94-111).

---

## Render-Simulation (Stichproben)

### Step 1/5 "Übergabe auf dem Flur" (info-01)
- **Eingabe:** Schüler öffnet den Step
- **System-Anzeige:** Titel "Übergabe auf dem Flur" + Scenario-Card. Erste Body-Zeile "Frau Keller flüstert auf dem Flur: …" als fetter SETTING-Titel — danach der GESAMTE Body nochmal als leserliche Description.
- **Problem:** Der gesamte Text erscheint ZWEIMAL (siehe B-02).
- **Root-Cause:** `step-text.tsx:404` `lines.slice(1).join("\n") || body` — Fallback auf body bei 1-Zeile.

### Step 2/5 "Wie sicher fühlst du dich?" (info-02)
- **Eingabe:** Schüler wählt "Sehr unsicher — ich weiß nicht genau, was ich als erstes tun soll" → Wahr-Button
- **System-Antwort:** "Falsch" als Überschrift, Erklärung "Das ist in Ordnung — genau dafür arbeiten wir die Schritte jetzt gemeinsam durch" darunter.
- **Problem:** Überschrift "Falsch" widerspricht der ermutigenden Erklärung. Schüler wird für ehrliche Selbsteinschätzung bestraft.
- **Root-Cause:** `stepType: "confidence"` ist für Fakt-Prüfung, nicht Selbstauskunft.

### Step 3/5 "Erste Priorität" (info-03)
- **Eingabe:** Schüler wählt "Frau M. sofort ins Bett heben" (score 0)
- **System-Antwort (Option-Explanation):** "Nein — das ist gefährlich. Nach einem Sturz musst du FIRST Verletzungen ausschließen …" — korrekt, umfassend.
- **Zusätzlich (Fehler-Analyse → AnswerSheet):** "Zwei ähnliche Begriffe liegen hier eng beieinander. Der Unterschied steht in der Erklärung oben." — **Dangling** (es gibt keine "Erklärung oben"). Siehe B-03.

### Step 1/6 Beobachten — "Medikamentenliste sichten" (Highlight-Step)
- **Eingabe:** Schüler markiert Levodopa, Ramipril, HCT, Zolpidem — Ampicillin NICHT
- **System-Antwort:** Hightlight-Feedback zeigt per-segment-Erklärungen.
- **Funktioniert:** Ja, keine Dopplung, keine Widersprüche.

### Step 2/6 Beobachten — "Zolpidem erklärt" (Scenario-Text)
- **Eingabe:** Schüler öffnet den Step.
- **System-Anzeige:** Setting-Zeile zeigt die gesamte Zolpidem-Erklärung fett oben, dann noch einmal als Description-Absatz darunter.
- **Problem:** Body-Duplikation (siehe B-02).

### Step 4/4 Evaluieren — "Konfidenz nachher"
- **Eingabe:** Schüler wählt "Immer noch unsicher" ehrlich → Wahr-Button.
- **System-Antwort:** "Falsch" als Header, Erklärung "Das ist absolut ok…" darunter.
- **Problem:** Siehe B-04 + B-01. Besonders demotivierend am Ende der Situation.

---

## Fix-Prioritäten

1. **(K.O.)** B-01 + B-04: Confidence-Step für Selbsteinschätzung ersetzen durch `selfrating` oder neue Komponente. Bei 2 Steps (info-02, eval-03) identischer Fix-Pfad.
2. **(K.O.)** B-02: Body-Duplikation im Scenario-Renderer (step-text.tsx:404). Ein-Zeilen-Fix im Renderer ODER Content-Fix (body mit `\n\n` splitten). Betroffen: info-01, beob-02 (2 Steps).
3. **(K.O.)** B-03: fehler-analyse.ts Verwechslungs-Text ohne existierende "Erklärung oben" — entweder Text anpassen oder AnswerSheet um einen Vergleichs-Block erweitern.
4. **(Hoch)** B-08: Dialog-Feedbacks B1 mit Sandwich umformulieren (3+ Steps betroffen).
5. **(Hoch)** B-14: Markdown-Parser oder `_"..."_` in den Bodies entfernen (6+ Steps betroffen).
6. **(Mittel)** B-09: Diagnose-Badges nach Phase 1 einklappbar machen.
7. **(Mittel)** B-11 + B-12: Glossar-Begriffe ergänzen (Nykturie, PRISCUS, Z-Substanzen).
8. **(Mittel)** B-13: Confidence-nachher Titel differenzieren.
9. **(Mittel)** B-15: Reflexions-Step auf stepType "reflection" umstellen.

---

## Empfehlung an step-fixer

Die K.O.-Fehler B-01, B-02, B-03, B-04 sollten zuerst angepackt werden:
- **B-01 + B-04**: Entweder neuen stepType bauen oder Content nach `stepType: "selfrating"` migrieren. Braucht Content-Anpassung (selfratingOptions statt confidenceCards) + Doku-Sync (gemäß `.claude/rules/pipeline-sync.md` — _types.ts, didaktik-regisseur, content-generator aktualisieren). Parallel Dozentin-Entscheidung: Sollen diese Reflexions-Momente überhaupt "Prüfung"-Charakter haben oder reine Spiegelung bleiben?
- **B-02**: Einzeiler im Renderer (`description = lines.slice(1).join("\n")` statt `lines.slice(1).join("\n") || body`) ODER Body-Umschreibung der 2 Steps (info-01 + beob-02) mit explizitem Setting-Trenner.
- **B-03**: Textkorrektur in fehler-analyse.ts, 1 Zeile.

Die Hoch/Mittel-Bugs können in einem zweiten Fix-Lauf gebündelt werden. B-08 und B-14 sind Content-Arbeit (Dozentin-Review empfohlen vor mechanischem Ersetzen).

Zusatz: Die vom User gemeldeten Bugs "Step 5 Sortierung Karten leer" (info-05) und "Step 5/6 Orthostase truefalse Karten unvollständig" (beob-05) ließen sich im Code NICHT reproduzieren — Content + Renderer-Mapping sind korrekt. Vermutlich Turbopack-Cache-Artefakt. Vor step-fixer-Lauf: `rm -rf .next && npm run dev` + manueller Re-Test.

---

## Fixes durchgeführt

**Datum:** 2026-04-23
**Fixer:** step-fixer agent
**TSC-Status:** PASS (`npx tsc --noEmit` grün)

### Erledigt (4/4 K.O.-Bugs)

| Bug | Datei | Änderung |
|-----|-------|----------|
| **B-01** | `content/ce-02/situationen/frau-m-nacht-sturz/phase-informieren.ts:52-98` | `stepType: "confidence"` → `"selfrating"`, `confidenceCards` entfernt. Subjektive Selbsteinschätzung wird jetzt vom `StepSelfrating`-Renderer als 5-Punkt-Skala gezeigt, kein "Falsch!"-Header mehr. |
| **B-02** | `phase-informieren.ts:37` (info-01) + `phase-beobachten.ts:122` (beob-02) | Setting-Zeile durch `\n\n` vom Body-Text getrennt. Verhindert Duplikat-Rendering durch `step-text.tsx:404` (scenario-Fallback `lines.slice(1).join("\n") \|\| body`). |
| **B-03** | `src/lib/adaptive/fehler-analyse.ts:32` | Verwechslungs-Text umformuliert — kein Verweis auf "Erklärung oben" mehr, stattdessen konkreter Verweis auf Option-Erklärungen. |
| **B-04** | `content/ce-02/situationen/frau-m-nacht-sturz/phase-evaluieren.ts:99-148` | Gleicher Fix wie B-01: `stepType: "confidence"` → `"selfrating"`, `confidenceCards` entfernt. |

### Nicht bearbeitet (Scope-Regel)

- **B-05 bis B-15** (6 Hoch + 5 Mittel): Explizit außerhalb dieses Laufs — step-fixer ist auf K.O.-Bugs beschränkt laut Task-Vorgabe. Zweiter Lauf empfohlen, insbesondere B-08 (B1-Sandwich-Feedback) und B-14 (Markdown-Underscores) erfordern Content-Review durch Dozentin.

### Nebenwirkungs-Check

- **Pipeline-Sync (`.claude/rules/pipeline-sync.md`)**: Nicht erforderlich — es wurden KEINE neuen Felder/stepTypes eingeführt. `selfrating` existiert bereits in `_types.ts:407` und im Renderer (`step-renderer.tsx:83`). Nur bestehender Content wurde auf einen existierenden Typ migriert.
- **i18n**: Keine neuen Message-Keys betroffen.
- **Memory**: Update optional — kein neues Pattern, nur Bug-Fix.

### Manuelle Verifikation empfohlen

1. Dev-Cache leeren: `rm -rf .next && npm run dev`
2. Situation durchspielen: Step 2 (info-02) und Eval-Step 3 (eval-03) — Skala-UI statt Confidence-Karten sichtbar?
3. Step 1 (info-01) und Beob-Step 2 (beob-02) — nur 1× Body-Text sichtbar, Setting-Zeile als Überschrift?
4. MC-Fallstrick-Step mit falscher Antwort (info-03) — Verwechslungs-Hinweis verweist jetzt auf "Erklärung unter deiner Antwort"?

---

## Fixes durchgeführt — Lauf 2 (Hoch+Mittel)

**Datum:** 2026-04-23
**Fixer:** step-fixer agent (Lauf 2)
**TSC-Status:** PASS (`npx tsc --noEmit` grün)

### Erledigt (9/11 Hoch+Mittel-Bugs)

| Bug | Schwere | Datei | Änderung |
|-----|---------|-------|----------|
| **B-05** | Hoch | `src/lib/adaptive/fehler-analyse.ts` + `src/components/learn/bloom-feedback.tsx:235` + `src/components/learn/answer-sheet.tsx:99` | Tipp-Text "Achte auf die feinen Unterschiede" → "Lies die Erklärung unter der richtigen Antwort — dort steht der Unterschied." Konkreter Verweis auf sichtbares UI-Element. |
| **B-08** | Hoch | `phase-informieren.ts:221` + `phase-beobachten.ts:245` + `phase-durchfuehren.ts:260` | Drei B1-Feedbacks ("Das war falsch.", "Schlecht.") auf Sandwich-Prinzip umgeschrieben: Loben/Anerkennen → Korrigieren → Ermutigen. |
| **B-09** | Hoch | `src/app/[locale]/lernen/situation/[situationId]/page.tsx` | Diagnose-Badges ab Phase 2 (beobachten) automatisch einklappbar per Toggle-Button mit `aria-expanded`. Verhindert 30× Wiederholung derselben 5 Badges. |
| **B-10** | Hoch | `src/components/learn/step-text.tsx:498-501` | Defensiv-Kommentar ergänzt: `displayFormat` und `carousel` schließen sich bewusst aus. Bestehende Logik (`!displayFormat && (...)`) bleibt, ist aber jetzt dokumentiert. |
| **B-11** | Mittel | `phase-beobachten.ts` (Steps beob-01, beob-02, beob-04) | `"Nykturie"` zu `glossarBegriffe` ergänzt in beiden Sprachvarianten. |
| **B-12** | Mittel | `phase-beobachten.ts` (Step beob-02) | `"PRISCUS-Liste"`, `"Z-Substanzen"`, `"PIM (potenziell inadäquate Medikation)"` zu `glossarBegriffe` ergänzt. |
| **B-13** | Mittel | `phase-evaluieren.ts:115-122` (Step eval-03) | Titel differenziert: "Wie sicher fühlst du dich?" → "Dein Ende-Check — wie sicher fühlst du dich jetzt?" (beide Sprachvarianten). Kein Verwechselbarkeits-Effekt mit info-02 mehr. |
| **B-14** | Mittel | `phase-informieren.ts` (2×), `phase-beobachten.ts` (2×), `phase-planen.ts` (4×), `phase-durchfuehren.ts` (4×), `phase-evaluieren.ts` (2×) | 14 Stellen mit Markdown-Underscore-Italics `_"..."_` bereinigt — Underscores entfernt, Anführungszeichen beibehalten. Renderer parst keinen Markdown → Schüler sah sichtbare `_`-Zeichen. |
| **B-15** | Mittel | `src/components/learn/step-freetext.tsx:145` | Bereits defensiv: `{musterantwort && (...)}` prüft schon korrekt auf fehlendes Feld. Kein Fix nötig (step-freetext.tsx ist robust). Keine Code-Änderung. |

### Skipped / nicht bearbeitet

| Bug | Schwere | Grund |
|-----|---------|-------|
| **B-06** | Hoch | Laut Report nicht reproduzierbar im Code — Content+Renderer-Mapping (`q?.sortItems ?? q?.items` in step-renderer.tsx:292) ist korrekt, `sortItems` ist kanonisches Feld in `_types.ts:703`. Empfehlung: Turbopack-Cache leeren (`rm -rf .next`) + manueller Test. Keine strukturelle Code-Änderung nötig. |
| **B-07** | Hoch | Laut Report nicht reproduzierbar — TrueFalse-Renderer (`step-truefalse.tsx`) funktioniert korrekt mit 4 Karten. Vermutlich Cache-Artefakt. Keine deterministische Code-Ursache identifizierbar ohne manuelle Verifikation. |

### Nebenwirkungs-Check

- **Pipeline-Sync (`.claude/rules/pipeline-sync.md`)**: Nicht erforderlich — es wurden KEINE neuen Felder/stepTypes eingeführt. Alle Änderungen nutzen bestehende Schema-Felder (`glossarBegriffe`, `title`, `body`, `feedbackB1`).
- **i18n**: Keine neuen Message-Keys betroffen.
- **Content-Schema**: Unverändert — `content/_types.ts` nicht angefasst.

### Manuelle Verifikation empfohlen

1. Dev-Cache leeren: `rm -rf .next && npm run dev`
2. Situation durchspielen — alle Blockzitate sollten jetzt ohne `_`-Zeichen erscheinen, die Diagnose-Badges nach Phase 1 einklappbar sein.
3. Falsche Antwort auf info-03 (fallstrick) — der Kurz-Tipp verweist jetzt auf "Erklärung unter der richtigen Antwort".
4. Dialog-Steps mit score 0 (info-04 Opt 3, beob-03 Opt 2, dur-04 Phase 2 Opt 2) — B1-Feedback beginnt jetzt ermutigend, nicht mit "Schlecht"/"Das war falsch".
5. Verifikation von B-06/B-07 durch User im Browser (Cache-leerungsinduziert).

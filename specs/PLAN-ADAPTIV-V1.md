# PLAN — Adaptivität v1: „Der Tutor merkt es sich"

> **Status:** Plan für Waleria (2026-07-18), Baustein 4 des KERN-LOOP-STANDARD.
> Kern-Idee von Waleria: Falsche Antwort → Erklärung (existiert) → **ein paar Steps
> später denselben Inhalt ANDERS abfragen („Erinnerst du dich…?")** → Spaced Repetition.
> Dieses Dokument denkt den Loop ganzheitlich zu Ende — von der Antwort bis zum nächsten Tag.

---

## 0. Das Prinzip: Der Kernfakt ist die Währung

Nicht „Step 7 war falsch", sondern „**Kernfakt F-07 (Schnappatmung ≠ Atmung) ist wackelig**".
Jeder claim-tragende Step trägt bereits `kernfaktId: ["F-XX"]` (Grounding W2) — dieselben
IDs verbinden Antwort-Steps, Spickzettel-Bausteine und Karteikarten. Die Adaptivität
arbeitet auf dieser Ebene: Was wackelt, wird nachgehakt, gefestigt und notfalls in den
nächsten Tag getragen. **Alles Material dafür existiert schon und ist gegroundet —
v1 braucht KEINEN neuen Content und KEIN LLM** (Regel „kein erfundener Content").

## 1. Der Loop in fünf Stationen

```
        ┌──────────────────────────────────────────────────────────┐
        │  ① MESSEN          jede Antwort: richtig? + Antwortzeit  │
        │                    + Fehlerkategorie + Spickzettel-Log   │
        │  ② SOFORT          Sheet erklärt (existiert) + situative │
        │     REAGIEREN      Angebote (Spickzettel / Erklär-anders)│
        │  ③ NACHHAKEN       2–4 Steps später: „Erinnerst du       │
        │     (Walerias Idee) dich?" — gleicher Kernfakt, ANDERES  │
        │                    Format, als Intermezzo               │
        │  ④ FESTIGEN        Ende der Situation: Rest-Wackliges → │
        │                    Schwächen-Register (+1 Tag, Karten)  │
        │  ⑤ ENTLASTEN       wer sicher ist, bekommt NICHTS davon │
        └──────────────────────────────────────────────────────────┘
```

### ① Messen (existiert — wird nur verdrahtet)
- richtig/falsch + `analysiereFehler` (Antwortzeit → Kategorie: geraten / unsicher /
  Sprach-/Konzeptproblem) laufen heute schon bei jedem MC.
- `spickzettel:{situationId}:{stepId}` (seit Baustein 3) sagt, ob der Schüler das Wissen
  konsultiert hat.
- NEU: **Kernfakt-Register** pro Situation (`src/lib/adaptive/kernfakt-register.ts`):
  `{ "F-07": { status: "wackelig" | "gefestigt", stepId, kategorie, fehlerText } }` —
  localStorage (Gast + eingeloggt), rein first-party.

### ② Sofort reagieren (kleine Ergänzungen am AnswerSheet)
- Falsch am Anker-Step mit Spickzettel → im Sheet erscheint zusätzlich
  **„🗒 Spickzettel ansehen"** (öffnet den Baustein direkt aus dem Feedback — der
  Schüler muss nicht wissen, dass es ihn unterm Step gibt).
- Kategorie „geraten" (sehr schnell + falsch) → Reihenfolge im Sheet dreht:
  „Erklär mir das anders" rückt VOR die Musterlösung (VISION: bei Raten von Grund auf
  anders erklären, nicht dasselbe nochmal).
- Bereits vorhanden und unverändert: Warum-Text, „Warum die anderen nicht?", Ermutigung.

### ③ Nachhaken — das „Erinnerst du dich?"-Intermezzo (der Kern)
**Auslöser:** Kernfakt wackelig. **Zeitpunkt:** frühestens 2 Steps später, spätestens an
der nächsten Phasengrenze (Abstand = echtes Retrieval statt Kurzzeitgedächtnis; die
VISION nennt beides — „sofort ähnliche Frage" UND Spaced Repetition — wir wählen den
verzögerten Abruf, weil er nachweislich stärker festigt und der Sofort-Teil durch
Erklärung + Spickzettel-Angebot abgedeckt ist).

**Woher kommt die andere Frage? Quellen-Hierarchie (Waleria-Korrektur 2026-07-18:
anderer KONTEXT + anderer Satzbau, damit nichts wiedererkannt/erraten wird):**

1. **Spektrum-Kontrastfall (bevorzugt):** Der Wissens-Baustein zum Kernfakt trägt im
   `spektrum[]` bereits ANDERE Patienten mit belegten Kontrast-Beschreibungen. Daraus
   wird die Nachhak-Frage gebaut — anderer Patient, anderer Satzbau, gleiche Kompetenz:
   > Original verpatzt: „Wie wertest du die schnappende Atmung?" (Wagner)
   > Nachgehakt: „Jemand ist bewusstlos, atmet aber ruhig und gleichmäßig — beginnst
   > du mit der Wiederbelebung?" → Nein, stabile Seitenlage. (wortgetreu aus
   > `spektrum[].kurzbeschreibung`, geprüfter Content, B1-Variante vorhanden)
   Das ist NICHT dieselbe Frage in neuem Gewand, sondern der Transfer-Fall — nicht
   durch Wiedererkennen lösbar.
2. **Options-Transform (Fallback):** Nur wenn der Kernfakt keinen Baustein mit
   Spektrum hat: TrueFalse aus der richtigen Option (wortgleich, ehrlich: hier ist
   Wiedererkennen möglich — schwächere, aber immer noch wirksame Festigung).
3. **Kein Material → kein Recheck:** dann nur Spickzettel-Angebot + Schwächen-Register.

**Pipeline-Regel für NEUEN Content (Walerias Punkt, wird Teil des Regisseur-Formats):**
Jeder claim-tragende Kern-Step bekommt künftig eine mitgeschriebene **Nachhak-Variante**
(`nachhakVariante`: andere Formulierung, anderer Mini-Kontext, gleiche kernfaktId,
eigene B1-Fassung) — vom didaktik-prüfer + pflege-validator mitgeprüft. Für den
CE-06-Bestand reicht die Spektrum-Hierarchie oben; kein Nachrüst-Batch nötig.

**Anderer-Situations-Abruf (v2, Architektur schon angelegt):** Das Schwächen-Register
ist kernfakt-basiert — sobald der Schüler die NÄCHSTE Situation beginnt, die denselben
Kernfakt berührt (Wiederbegegnungs-Netz), wird dort zuerst abgefragt statt gelesen.
v1 legt dafür nur die Daten richtig ab.

Generator: `src/lib/adaptive/recheck-generator.ts` — pure Funktion, unit-testbar.
Kein LLM, keine neuen Fakten, B1-Varianten automatisch.

**Darstellung:** eigener Intermezzo-Screen („Kurz nachgehakt · Erinnerst du dich?"),
zählt NICHT im x/12-Zähler (wie die Micro-Narration) — die Situation fühlt sich nicht
länger an, und der Play-then-Gate-Zähler bleibt unberührt.
- Richtig → eine Zeile: „Sitzt. Genau darum ging es vorhin." → Kernfakt „gefestigt".
- Wieder falsch → Spickzettel öffnet sich direkt (Faustregel zuerst), Kernfakt bleibt
  wackelig → Station ④.

**Schutzregeln (nicht nerven):**
- Max. 3 Intermezzi pro Situation, nie zwei hintereinander, Abstand ≥ 2 Steps.
- Für Gäste erst NACH dem Gate-Fenster (verschiebt keine Funnel-Mechanik).
- Pro Kernfakt maximal EIN Recheck pro Situation.

### ④ Festigen über die Session hinaus
**Karteikarten-Grundsatz (Waleria-Korrektur 2026-07-18): Karteikarten sind
WISSENS-Karten, keine Situations-Karten.** Die Karte hängt am Wissens-Baustein
(existiert dort bereits: patientenbezogene Vorderseite, abstrakte Rückseite) — EINE
Karte pro Baustein, situationsübergreifend dedupliziert (Wiederbegegnungs-Prinzip).
Wackelt derselbe Kernfakt in drei Situationen, entsteht KEINE neue Karte — die
bestehende Baustein-Karte wird **früher fällig gestellt** (Intervall-Reset auf +1 Tag).

Am Situationsende (🎉-Screen):
- Verbleibend wackelige Kernfakten → **`POST /api/progress/schwaechen`**, geschlüsselt
  auf **Baustein/Kernfakt** (begriff = Baustein-Titel, Karte = die vorhandene
  Baustein-Karteikarte), NICHT auf die verpatzte Einzelfrage. Upsert statt Insert:
  existiert der Eintrag, wird nur `naechsteWiederholung`/`intervallTage` zurückgesetzt.
  Eingeloggt: Server. Gast: bleibt im localStorage-Register (wird beim Signup-Merge
  nicht verworfen; Server-Sync in v2).
- Anzeige im 🎉-Screen (ehrlich, VISION „Schwachstellen sichtbar"):
  „Das sitzt schon: 9 von 11. Morgen nochmal ansehen: Schnappatmung, No-Flow-Zeit."
- Anschluss (späterer Baustein Wiedereinstieg): Recap fragt genau diese Fakten ab —
  „Erinnerst du dich noch an Herrn Wagner? …".

### ⑤ Entlasten bei Stärke
- Wer einen Kernfakt beim ersten Mal richtig + zügig beantwortet: **kein** Intermezzo,
  **kein** Angebot — Stärke heißt Ruhe (Duolingo-Fehler vermeiden: Starke nicht mit
  Wiederholungen langweilen).
- **Bewusst NICHT in v1: echter Step-Skip.** Die Situationen sind narrativ (Notfall-
  Dramaturgie) und das Tiefe-Gate (W10) hängt an durchlaufenen Steps — Skip bricht
  beides. Stattdessen ist „schnell durch" bei Stärke automatisch der Fall, weil nichts
  eingeschoben wird. Echtes Skip-/Beschleunigungs-Angebot: v2, nach Pilot-Daten.
- **Sprach-Achse:** 2× (langsam + falsch) oder Kategorie „Sprachproblem" → EINMALIG
  pro Session: „Soll ich einfacher erklären?" → öffnet das SpracheSheet (B1-Angebot).
  (Freigegebene Idee „Sprache proaktiv anbieten" — gehört in diesen Loop.)

## 2. Messbarkeit (Pilot-Auswertung, first-party)
Neue Funnel-Events: `recheck_gezeigt`, `recheck_richtig`, `recheck_falsch`,
`spickzettel_angebot_angenommen`, `sprache_angebot_gezeigt/angenommen`.
Erfolgskriterien: ≥ 70 % der Rechecks richtig (Festigung wirkt) · Spickzettel-Angebot-
Annahme ≥ 50 % · kein Anstieg der Abbruchrate an Intermezzi.

## 3. Umsetzungs-Schnitt
1. Kernfakt-Register + Verdrahtung Messen/Sheet-Angebote (klein)
2. Recheck-Generator (pure, ~10 Tests) + Intermezzo-Screen im Player (mittel)
3. Situationsende → Schwächen-POST + 🎉-Screen-Zeile (klein)
4. Sprach-Angebot (klein) · Funnel-Events (klein)
Pilot: Wagner + Ríos (wie Spickzettel), Rest CE-06 automatisch (rein datengetrieben).
Kein Content-Batch, kein Pipeline-Sync nötig (keine neuen Content-Felder) — nur
KERN-LOOP-STANDARD um den Loop-Abschnitt ergänzen.

## 4. Entscheidungen für Waleria
1. **Intermezzo-Anrede:** „Kurz nachgehakt · Erinnerst du dich?" — okay, oder andere
   Formulierung? (Ton: neugierig, nie prüfend.)
2. **Sitzt-Moment:** dezente Zeile (Empfehlung) oder kleiner Feier-Moment? Konfetti
   bleibt so oder so dem Situationsende vorbehalten.
3. **Skip in v1 weglassen** (Begründung oben) — einverstanden?

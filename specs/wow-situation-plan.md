# 7-Tage-Plan: Wow-Situation für Vorzeige-Demo

**Erstellt:** 2026-04-25
**Ziel:** EINE Lernsituation auf "Pitch-Demo"-Niveau bringen — der 5-Minuten-WOW-Moment für Investoren, Schulleiter, Pflegelehrkräfte.

**Kandidat-Situation:** TBD
- **Option A — `frau-m-nacht-sturz`** (Pilot, schon halb da, weniger Risiko, Sturzprävention/Demenz-nah)
- **Option B — `ls-nguyen-stoma`** (interkulturell + Scham + 9 Themen verwoben, emotional kraftvoller)

---

## Tag 1 — Bug-Free + Tiefe

**Ziel:** Situation läuft komplett bug-frei, Patient + Phasen haben emotionale + fachliche Tiefe.

**Tasks:**
1. Student-walkthrough Agent auf Situation laufen lassen → Bug-Report
2. Step-fixer-Agent auf alle Bugs (K.O. + Hoch + Mittel) → Fixes
3. Patient-Bio von ~200 auf **1.500 Wörter Lebensgeschichte** erweitern
   - Kindheit (1-2 Absätze, Kontext)
   - Beruf, Familie, Werte
   - Persönlichkeit detailliert (Sprachstil, Mimik, Marotten)
   - Aktuelle Situation emotional aufladen
4. Pro Phase Kontext-Erzählung von 200 → **400 Wörter**
5. Mind. 8 Patientenzitate (vorher 5-6) — pro Phase mind. 1
6. TypeScript-Check + Build + Deploy

**Akzeptanz:**
- 0 Bugs aus walkthrough-Report
- Patient-Bio fühlt sich an wie eine echte Person, nicht wie ein Fall-Beispiel
- Build erfolgreich

**Geschätzt:** 4-5 Stunden Agent-Zeit + 1 Stunde Review

---

## Tag 2 — Audio

**Ziel:** Multi-modal — Patient hat eine echte Stimme.

**Tasks:**
1. ElevenLabs-Account einrichten (oder OpenAI TTS) + API-Token in `.env`
2. Voice-Profile auswählen:
   - Patient (Hauptstimme, deutsch, alters-/geschlechtsgerecht)
   - Tochter/Übersetzerin (falls relevant)
   - Pflegekraft (für SBAR-Übergaben)
3. Audio-Generierungs-Script `scripts/generate-audio.ts`:
   - Liest alle Zitate aus patient.ts
   - Generiert MP3-Dateien in `public/audio/{situationId}/{zitatId}.mp3`
   - Cached um keine Tokens zu verbrennen
4. UI-Integration: Play-Button neben Zitaten in Patient-Karte + Phasen
5. Optional: Kontext-Vorlesung der Phasen-Einleitung (für B1-Schüler)

**Akzeptanz:**
- Mindestens 8 Patientenzitate vertont
- Audio spielt sauber im Browser (Mobile + Desktop)
- Lade-Zeit < 500ms (Audio gecached)
- DSGVO-konform (kein Real-Name, keine User-Daten an ElevenLabs)

**Geschätzt:** 3-4 Stunden + ~10€ Audio-Generierung

---

## Tag 3 — Visuell

**Ziel:** Bilder, Anatomie, Animationen — die App sieht aus wie eine Premium-Lern-Plattform.

**Tasks:**
1. **Anatomie-SVGs** via medical-svg-Skill
   - Pro Situation 3-5 SVGs (z.B. Hüftgelenk, Stoma-Querschnitt, Hautschichten)
   - Hotspots klickbar machen (klick auf Stelle → Tooltip)
2. **Patientenfoto** AI-generiert (DSGVO-explizit fiktiv, mit Wasserzeichen)
   - Realistisches Portrait, alters-/geschlechtsgerecht
   - In Patient-Karte oben prominent
3. **Pflege-Handlungs-Animationen** (3-5 GIFs/Lottie)
   - Beutelwechsel (4-Frames)
   - Bobath-Lagerung (3-Frames)
   - Mobilisationsschritte (5-Frames)
4. **Phasen-Übergangs-Animation** (motion.div Polish)
   - Sanfter Slide + Patient-Foto folgt mit
5. **Branching-Visualisierung** (Komplikationen)
   - "Du hast Pfad A gewählt" mit Linien-Diagramm

**Akzeptanz:**
- Mindestens 1 Anatomie-SVG mit Hotspots pro Phase
- Patientenfoto in Karte sichtbar
- Mindestens 3 Animationen
- Lade-Zeit OK (Lottie statt großer GIFs)

**Geschätzt:** 5-6 Stunden

---

## Tag 4 — Adaptivität live demonstrieren

**Ziel:** Sichtbar machen dass die App ADAPTIV ist — Demo-Killer für Fachpublikum.

**Tasks:**
1. **Demo-Modus** einbauen (URL-Parameter `?demo=1`)
2. **Schüler-Profil-Switcher** (top-right Button):
   - C1 + Vorerfahrung
   - B2 + etwas Praxis
   - B1 + Anfänger
3. Bei Wechsel: Steps werden live umgeschaltet — sichtbar weniger/mehr für je Profil
4. **Antwortzeit-Heatmap** (Bottom-Right Overlay):
   - Zeigt pro Step die Antwortzeit + ob "raten" oder "konzept"-Fehler
   - Lehrer-Sicht
5. **3 vorgefertigte "Demo-Spielzüge"** als Skript:
   - Spielzug 1: C1-Schülerin → flott durch in 12 Min
   - Spielzug 2: B1-Schüler → braucht 28 Min mit allen Bausteinen
   - Spielzug 3: Schüler rät → KI erkennt + bietet Alternativ-Zugang

**Akzeptanz:**
- Profil-Switch ist live sichtbar in den Steps
- Antwortzeit-Tracking funktioniert
- 3 Demo-Skripte als Markdown verfügbar

**Geschätzt:** 6-8 Stunden (am komplexesten)

---

## Tag 5 — KI-Tutor + Lehrer-Dashboard

**Ziel:** Zeige die AI-Magie + Lehrer-Mehrwert.

**Tasks:**
1. **KI-Tutor-Button** an jedem Step
   - "Frag den Tutor" → Modal öffnet
   - Llama 3.3 (Nebius EU) bekommt: aktueller Step + Bausteine + Frage
   - Antwort aus Content (RAG-light) + Sandwich-Feedback
2. **Lehrer-Live-Dashboard** Demo:
   - URL: `/lehrer/live/{klasse}`
   - Sieht 8 Schüler-Avatars
   - Pro Schüler: aktuelle Phase, Antwortzeit, Fehler-Pattern
   - Klick auf Avatar → siehe gerade was der Schüler tut
3. **Lehrer-Chat** (innerhalb App)
   - Schüler kann "Frage an Lehrer" senden
   - Lehrer sieht Kontext (welcher Step, welche Antwort)
4. **Klassenraum-Modus** (für Beamer)
   - Anonymisierte Aggregat-Stats
   - "Wie viel % der Klasse hat richtig?"

**Akzeptanz:**
- KI-Tutor antwortet auf 5 Test-Fragen sinnvoll (≤2s)
- Lehrer-Dashboard zeigt 8 Mock-Schüler in Echtzeit
- Lehrer-Chat funktional (auch wenn nur 1:1)

**Geschätzt:** 8-10 Stunden

---

## Tag 6 — Spaced-Repetition-Showcase

**Ziel:** Zeige den Langzeit-Lerneffekt.

**Tasks:**
1. **7-Tage-Zeitraffer-Modus** (Demo-Feature)
   - Button "Tag 1" → "Tag 2" → ... → "Tag 7"
   - Bei Klick: Animation zeigt Karteikarten die hochkommen
   - Mastery-Bar pro Thema steigt sichtbar
2. **Forgetting-Curve-Visualisierung**
   - Recharts-Diagramm: blaue Kurve "ohne Wiederholung", grüne mit
   - Live aktualisiert während Demo-Klicks
3. **Mastery-Indikator** pro Thema sichtbar
   - "Dekubitus: 78% sicher" mit Farbverlauf
   - Bei Hover: "Zuletzt geübt vor 2 Tagen, nächste Wiederholung morgen"
4. **Streak + XP** Animationen
   - Confetti bei Erfolgen
   - "5 Tage in Folge!" Badge

**Akzeptanz:**
- 7-Tage-Zeitraffer animiert flüssig
- Forgetting-Curve sichtbar
- Mastery + Streak motivieren

**Geschätzt:** 4-5 Stunden

---

## Tag 7 — Polish + Demo-Skript

**Ziel:** Verkaufsfertig.

**Tasks:**
1. **Performance-Audit**
   - Lighthouse: > 90 alle Kategorien (Mobile)
   - Bundle-Size geprüft, Code-Splitting für Audio/Bilder
   - First Load < 2s
2. **Bug-Sweep** durchläuft die ganze Situation 3× komplett
3. **Demo-Skript schreiben** (als PDF + Video)
   - 5-Min-Pitch: Was siehst du jetzt? Was macht das besonders?
   - 15-Min-Tiefen-Demo: Mit Profil-Wechsel, KI-Tutor, Lehrer-Dashboard
   - 30-Min-Workshop-Variante: Hands-on Schüler/Lehrer
4. **Video-Aufnahme** (1080p, mit Voice-Over)
   - Screencast der Demo
   - Optional: Echte Schülerin (Pflegeschülerin filmen während sie es nutzt)
5. **Sales-Material**
   - 10 Screenshots für Folien
   - Onepager (PDF) mit USPs
   - GIF-Highlight-Reel für Twitter/LinkedIn

**Akzeptanz:**
- Performance: Lighthouse Mobile > 90
- 0 sichtbare Bugs in 3 Test-Durchläufen
- Demo-Skript getestet auf 1 Test-Person (Verständnis check)
- Video aufgenommen + Sales-Material erstellt

**Geschätzt:** 5-6 Stunden

---

## Gesamtaufwand

**Reine Arbeit:** ~40-50 Stunden über 7 Tage.

**Externe Kosten:**
- ElevenLabs / OpenAI TTS: ~10€
- AI-Bilder (DALL·E / Midjourney): ~10€
- ggf. Stock-Images: ~30€

**Erwartetes Ergebnis:**
- EINE Situation auf "wow"-Niveau, die du in jeder Pflegeschule, jeder Konferenz, jedem Pitch zeigst
- Beweis dass die Architektur skaliert (gleicher Stack, andere Inhalte = nur Content-Arbeit)
- Investoren sehen ein funktionierendes Produkt, nicht eine Idee

---

## Vorgehen

Wir arbeiten den Plan **Tag für Tag** ab. Pro Tag:
1. Du sagst "Tag X start"
2. Ich liste die konkreten Tasks
3. Wir machen sie durch (mit Background-Agents wo möglich)
4. Am Ende des Tages: Deploy + kurzer Abschluss-Bericht
5. Tag X.md im Plan-Ordner abgehakt

**Nächster Schritt:**
- Welche Situation? Frau M. (Sturz) oder Nguyen (Stoma)?
- Soll Tag 1 jetzt starten?

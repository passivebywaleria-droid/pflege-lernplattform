# Abschluss-Screen der Situation (Audit-Lücke 2) — ENTSCHIEDEN + GEBAUT

> **Status:** GEBAUT (2026-07-18). Walerias Entscheidungen: **B-Abruf** (Faustregel
> erst als Frage, Tap deckt wortgleich auf) + **Ton C1 Coach** + **Gast-Zeile ja,
> dezent**. Referenz: `specs/DIDAKTIK-AUDIT-SITUATIONEN.md` (Lücke 2),
> `specs/KERN-LOOP-STANDARD.md`, VISION „Am Ende des Tages".
> Mockup: `specs/mockups/abschluss-screen/entwurf.html` (3 Ton-Varianten klickbar).
>
> **Umsetzung:** `src/components/learn/abschluss-screen.tsx` +
> `src/lib/learn/abschluss-daten.ts` (Anker-Regel identisch zur Spickzettel-
> Verteilung) + Player sammelt `onNext(correct)` pro Step (Session-State).
> Content: `faustregelAbruf`(+B1) an allen 7 Wagner/Ríos-Bausteinen,
> `abschlussText`(+B1) Wagner+Ríos, `teaser`(+B1) Ríos+Lehmann — alles nur aus
> belegtem Situations-Content. i18n ×3 (situation.abschluss.*).
> Walkthrough-verifiziert (lokale Prod-Instanz, echter 12-Step-Durchlauf).
>
> **Pflegefachliche Korrektur (Waleria 2026-07-19):** Die Abruf-Frage „Wie drückst
> du richtig?" versprach die vollständige Technik, deckte aber nur die Faustregel
> auf (ohne 5–6 cm / 100–120/min — I care 3. Aufl., Abb. 23.6 wortwörtlich
> nachgelesen) = Halbwissen. Fix: (1) Frage-Scope == Faustregel-Scope („Warum ist
> beim Drücken jede Pause gefährlich?"), die übrigen 6 Fragen gegen ihre
> Faustregeln geprüft (Scope deckt); (2) jede aufgedeckte Karte hat jetzt
> „Ganzen Baustein lesen" → vollständiger, bereits gegengelesener Kerntext
> wortgleich. REGEL für alle künftigen Meta-Texte: erst Literatur wortwörtlich
> lesen, Frage nie mehr versprechen lassen als die Antwort liefert, Destillat nie
> als Endpunkt.
>
> **Bewusste Abweichung (Ehrlichkeit):** Die Gast-Zeile verspricht FORTSCHRITT
> („bleibt erhalten, auf jedem Gerät"), NICHT „Schwächen kommen wieder" — Letzteres
> existiert erst mit Adaptiv-v1/Karten-Upsert. Dann Text nachschärfen.
>
> **Pipeline-Sync:** `faustregelAbruf`, `abschlussText`, `teaser` werden im ohnehin
> offenen Baustein-5-Sync (Option A, 7 Stellen — DESIGN-WISSEN-IN-STEPS Abschnitt 4.2)
> mit aufgenommen; Regisseur schreibt sie künftig mit. Bis dahin: optionale Felder
> mit Fallback, kein Zwang für Alt-Content.

## Ist-Zustand (der Befund)

`situation/[situationId]/page.tsx` Z. 580–601: 🎉-Emoji + Situationstitel + Link zur
CE-Seite. Kein Recap, kein Abruf, keine Schwächen, kein Morgen. Der didaktisch
wertvollste Moment (Abruf direkt nach der Anstrengung) verpufft.

## Datenlage (belegt, Stand heute)

| Baustein des Screens | Datenquelle | Status |
|---|---|---|
| Faustregeln wortgleich | `inlineWissen.faustregel` (+`faustregelB1`) der Situation — Wagner 5, Ríos 2 | ✅ existiert |
| Welche Bausteine „besucht" | Abschluss = alle Phasen fertig → ALLE Bausteine sind begegnet (Begegnet-Regel). Spickzettel-Öffnung zusätzlich in `localStorage spickzettel:{sit}:{step}` | ✅ existiert |
| Schwächen (falsche Antworten) | `StepRenderer.onNext(correct)` liefert das Signal schon hoch — **der Player wirft es heute weg** (`onNext={() => handleNextStep()}`) | 🔧 kleiner Eingriff: Session-State sammeln |
| Schwäche → Faustregel-Zuordnung | `verteileSpickzettel` kennt Anker-Step ↔ Baustein. Falsch am Anker-Step = diese Faustregel wackelt | ✅ Mapping existiert |
| Karteikarten „gespeichert" | **existiert im Situations-Player NICHT** (Karteikarten-API ist LE-basiert). Upsert kommt erst mit Adaptiv-v1 | ⛔ nicht versprechen |
| „Morgen"-Ausblick | Nächste Situation der CE (Reihenfolge im CE-Manifest) | ✅ existiert |

**Ehrlichkeits-Grenzen (werden eingehalten, nicht kaschiert):**
1. Antwort-Historie ist session-only. Wer mittendrin die App schließt und
   wiederkommt, hat für die erste Hälfte keine Daten → Schwächen-Block wird dann
   **weggelassen** (nie geraten, nie „alles super" lügen).
2. Falsche Antworten an Steps OHNE Baustein-Anker ergeben keine benannte
   Schwäche — sie fließen nur in die Zählung ein („X von Y beim ersten Versuch").
3. Kein „Karten gespeichert"-Versprechen, solange der Wissens-Karten-Upsert
   (Adaptiv-v1) nicht gebaut ist.

## Der Screen (Struktur, fix — Ton variabel)

Kein Step, daher DARF er scrollen (Kern-Loop-Regel 3 gilt für Aufgaben-Screens).
Reihenfolge = didaktische Reihenfolge: erst Abruf/Recap, dann Befund, dann Ausblick.

```
┌──────────────────────────────────┐
│ ✓ (ruhiges Icon, kein 🎉-Kitsch) │
│ KOPF: Story-Abschluss (1 Satz)   │  A. Patient-Outcome („Das Notfallteam
│ + Leistungszeile (1 Zeile)       │     übernimmt — du hast alles Wichtige
│                                  │     getan.") — braucht 1 Content-Zeile
│ DAS NIMMST DU MIT                │     pro Situation (abschlussText)
│ ┌ Faustregel 1 (wortgleich) ┐    │
│ ┌ Faustregel 2 ┐ …               │  B. Recap: wacklige zuerst + markiert,
│                                  │     Rest darunter. Formfrage:
│                                  │     Liste vs. Aufdeck-Karten (Abruf!)
│ EHRLICHE ZEILE                   │  C. Schwächen: Ton-Entscheidung
│                                  │
│ MORGEN                           │  D. Ausblick: 1-2 Zeilen
│ [ Weiter ]                       │  EINE Aktion (wie bisher → CE-Seite)
└──────────────────────────────────┘
```

### B — Recap-Form (Entscheidung 1)

- **B-Liste:** Faustregeln direkt lesbar, wacklige oben mit Amber-Marker.
  Schnell, passiv. („Zusammenfassung lesen")
- **B-Abruf:** Jede Faustregel zunächst als Frage-Karte („Woran erkennst du den
  Stillstand?") → Tap deckt die wortgleiche Faustregel auf. Aktiver Abruf =
  messbar besserer Behaltens-Effekt (Testing-Effekt) und das Audit fordert
  wörtlich „Rückblick MIT Abruf". Kostet ~20-30 s mehr.
  Abruf-Frage = neues optionales Content-Feld `faustregelAbruf` mit generischem
  Fallback („Was gilt bei {Baustein-Titel}?").

Empfehlung: **B-Abruf** — sonst bauen wir wieder eine Lese-Wand, nur am Ende.

### C — Ton der Schwächen-Zeile (Entscheidung 2, Beispieldaten Wagner: 2 Fehler)

- **C1 Coach (direkt):** „Zweimal daneben: Schnappatmung und Defi holen. Die
  beiden markierten Faustregeln oben sind deine Baustellen — lies sie nochmal,
  bevor du gehst."
- **C2 Befund (nüchtern):** „9 von 11 beim ersten Versuch. Zwei Faustregeln
  saßen noch nicht sicher — sie sind oben markiert."
- **C3 Sandwich (weich):** „Das meiste saß beim ersten Versuch. Bei
  ‚Schnappatmung' und ‚Defi holen' lohnt ein zweiter Blick — die beiden sind
  oben markiert."
- **0-Fehler-Fall (alle Varianten):** „Alle Antworten beim ersten Versuch —
  wirklich stark." (nur wenn wahr; ehrliches Lob-Prinzip vom 16.07.)
- **Keine-Daten-Fall:** Block entfällt komplett.

### D — „Morgen"-Ausblick (Entscheidung 3)

- **D1 Nächster Fall (konkret):** „Als Nächstes: Frau Ríos kippt beim
  Frühstück vom Stuhl — und ist gleich wieder wach. Was der Unterschied zu
  Herrn Wagner ist, entscheidest du." (Cliffhanger aus Patient + 1 Spannungssatz;
  braucht 1 Content-Zeile `teaserText` pro Situation ODER generischen Fallback
  aus Patient+Titel)
- **D2 Wiederkommen (Vertiefung):** „Die 5 Faustregeln kommen wieder — die
  wackligen zuerst." — **erst ehrlich, wenn Adaptiv-v1/Karten gebaut sind** →
  nicht in v1.

Empfehlung: **D1** mit generischem Fallback, teaserText nur für Wagner+Ríos
handgeschrieben (Demo-Pfad).

## Zweitwirkungen (um die Ecke)

- **Content-Pipeline:** 2 neue OPTIONALE Felder (`abschlussText`, `teaserText`
  bzw. `faustregelAbruf`) mit Fallbacks → keine Zwangsmigration, aber
  Pipeline-Sync-Eintrag (7 Stellen) fällig, sobald der Regisseur sie mitschreiben
  soll. Für v1: nur Wagner + Ríos handschriftlich.
- **B1/AR:** Faustregeln haben B1-Varianten ✅. Alle Screen-Textbausteine gehen
  über messages/{de,ar,tr}.json (3 Sprachen, Pflicht). abschlussText/teaserText
  brauchen B1-Varianten wie jeder Content.
- **Play-then-Gate:** Auch Gäste erreichen den Abschluss (Demo-Pfad!). Der
  Recap-Moment ist der stärkste Konversions-Moment der ganzen Situation —
  dezente Zeile für Gäste: „Konto sichern, damit deine Schwächen morgen
  wiederkommen" statt Paywall-Banner. (Entscheidung 4, optional in v1)
- **Klassenraum/Offline:** Screen ist rein client-seitig aus Bundle-Daten +
  localStorage → offline voll funktionsfähig, kein API-Call.
- **Kompetenznachweis:** Abschluss-Event existiert (Funnel). Schwächen-Daten
  session-only heißt: fürs Dozenten-Dashboard später brauchen wir persistente
  Antwort-Events — bewusst NICHT jetzt (Scope).

## Bau-Umfang (nach Ton-Freigabe)

1. Player: `onNext(correct)` in Session-State sammeln (Map stepId→correct) +
   Anker-Mapping für Schwächen-Namen. ~1 Datei.
2. `AbschlussScreen`-Komponente (ersetzt 🎉-Block), i18n ×3.
3. Content: abschlussText/teaserText (+B1) für Wagner + Ríos.
4. Tests + Walkthrough-Screenshots an Waleria, Deploy nur nach Freigabe.

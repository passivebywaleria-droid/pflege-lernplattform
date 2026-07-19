# Auftakt-Screen der Situation (Audit-Lücke 1) — ENTSCHIEDEN + GEBAUT

> **Status:** GEBAUT (2026-07-19). Walerias Entscheidungen: **Lernziele stammen
> aus dem PflBG/Rahmenlehrplan und teilen sich auf die Situationen auf** (statt
> der ursprünglich vorgeschlagenen Frage-Form) + **Szene ja** + **nur Schrittzahl**.
> Referenz: `specs/DIDAKTIK-AUDIT-SITUATIONEN.md` (Lücke 1),
> `specs/KERN-LOOP-STANDARD.md`. Mockup: `specs/mockups/auftakt-screen/entwurf.html`.
>
> **Umsetzung:** `src/components/learn/auftakt-screen.tsx` + Player-State
> `auftaktAktiv` (nur bei frischem Start; Resume/fertige Situation überspringen;
> Server-Resume-Pfad wartet den Fetch ab — kein Auftakt-Flackern). Neues Feld
> `Lernsituation.lernzieleSchueler[]` = schülersprachliche 1:1-Übersetzung je
> EINES offiziellen Lernergebnisses mit `lernergebnisId` (Traceability für den
> Kompetenznachweis; Quelle: specs/ce-06/lernergebnis-mapping.json + Scaffold).
> Wagner: K2/W1/K5/E1 · Ríos: K3 (2 Zeilen, Spoiler-Regel eingehalten — keine
> Hypoglykämie im Auftakt). Szene = Phase-1-kontext wortgleich (vorher toter
> Content). Fußzeile „Lernziele nach Rahmenlehrplan" (B2B-Vertrauen). i18n ×3,
> 4 neue Tests (612 grün), Walkthrough-Screenshots (Wagner C1, Ríos B1) an
> Waleria. Die Fragen-Symmetrie-Idee (Auftakt fragt → Abschluss deckt auf)
> bleibt als spätere Option dokumentiert, wurde NICHT gebaut.
> **Pipeline-Sync:** `lernzieleSchueler` auf der Baustein-5-Sync-Liste (wie
> faustregelAbruf/abschlussText/teaser). Deploy nur nach Freigabe.

## Ist-Befund (belegt)

1. **Kalter Einstieg:** CE-Karte/Deep-Link → sofort Step 1. Kein Lernziel, kein
   Patient-Rahmen (Avatar nur als kleines Icon in der Meta-Zeile, Tap → Modal —
   findet kaum jemand).
2. **Toter Content:** Die Phasen-Szenen (`SituationsPhase.kontext`, z. B. Wagner:
   „Du kommst mit dem Frühdienst auf den Flur, als Herr Wagner ein paar Meter vor
   dir zu Boden geht…") werden im Situations-Player **nirgends gerendert** (Grep:
   nur alte fallverlauf-engine). Gegengelesener Content, der nie ankommt.
3. **Lernziele existieren nur als IDs** (`lernziel: "ce06-wagner-schnappatmung"`)
   + Rahmenlehrplan-Mapping — nichts davon ist schülersprachlich.

## Der Screen (Struktur-Vorschlag)

Ein Screen, EINE Aktion (Kern-Loop). Erscheint NUR bei frischem Start
(Phase 1, Step 0, nichts abgeschlossen) — Resume springt direkt in den Step
(Wiedereinstiegs-Recap bleibt wie beschlossen geparkt).

```
┌──────────────────────────────────┐
│ [Avatar]  Klaus Wagner · 67      │  PATIENT: 1 Karte, 1 Setting-Zeile
│ Kardiologische Normalstation,    │  (Tap → bestehendes Patient-Modal)
│ 08:15 Uhr                        │
│                                  │
│ (Szene, kursiv: Phase-1-kontext  │  SZENE: wortgleich der bislang
│  wortgleich — „Du kommst mit dem │  UNGENUTZTE kontext-Text
│  Frühdienst auf den Flur…")      │  → 0 neuer Content (Entscheidung B)
│                                  │
│ AM ENDE KANNST DU DAS BEANTWORTEN│  LERNZIEL: Form = Entscheidung A
│ · Woran erkennst du den          │
│   Kreislauf-Stillstand?          │
│ · Was kommt zuerst — und darfst  │
│   du zum Defi laufen?            │
│                                  │
│ 12 Schritte                      │  META: Entscheidung C
│ [        Los geht's        ]     │  EINE Aktion
└──────────────────────────────────┘
```

## Die Kern-Idee (Empfehlung): Fragen-Symmetrie Auftakt ↔ Abschluss

Der Abschluss-Screen deckt Faustregeln über **Abruf-Fragen** auf (B-Abruf, seit
gestern live). Der Auftakt zeigt **2–3 derselben Fragen als Versprechen** —
unbeantwortet. Wirkung:

- **Advance Organizer in Frageform** (aktiviert statt informiert — dieselbe
  Didaktik-Entscheidung wie beim Abschluss, nur gespiegelt).
- **Der Bogen schließt sich:** Auftakt stellt die Fragen → Situation beantwortet
  sie → Abschluss ruft sie ab. Der Schüler ERLEBT den Zuwachs.
- **Null neuer Content bei Wagner** — die `faustregelAbruf`-Felder existieren.

**Spoiler-Regel (Pflicht):** Eine Auftakt-Frage darf die Auflösung der Situation
nicht verraten. Wagner: unkritisch (Titel sagt eh „Reanimation"). **Ríos:
„Wann denkst du an Unterzucker?" würde den Hypoglykämie-Twist spoilern** →
optionales Feld `auftaktFragen` (kuratierte, twist-freie Auswahl; für Ríos
handgeschrieben, z. B. „Ein Mensch sackt weg und der Kreislauf läuft — was
prüfst du zuerst?"). Default ohne Feld: erste 2–3 Abruf-Fragen in Reihenfolge.

**Ehrlichkeits-Regel:** Kein generischer Lernziel-Textbaustein als Fallback.
Situationen ohne Abruf-Fragen/auftaktFragen zeigen den Block NICHT (Patient +
Szene + Schrittzahl tragen den Auftakt allein). Kein erfundenes „Hier lernst du
wichtige Kompetenzen"-Blabla.

## Entscheidungen für Waleria

- **A — Lernziel-Form:**
  - A1 Kompetenz-Versprechen: „Danach kannst du: den Stillstand erkennen, richtig
    alarmieren, wirksam drücken." (nüchtern, listenhaft; braucht neues
    Prosa-Feld `lernzielSchueler` pro Situation)
  - **A2 Neugier-Fragen (Empfehlung):** 2–3 Abruf-Fragen als „Am Ende kannst du
    das beantworten" (aktivierend, Bogen zum Abschluss, 0 neuer Content)
  - A3 Beides: 1 Kompetenz-Satz + 2 Fragen (voller, mehr Text auf dem Screen)
- **B — Szene zeigen?** Ja (Phase-1-kontext wortgleich, kursiv) vs. Nein (nur
  Patient + Lernziel). Empfehlung: **Ja** — nutzt den toten Content, gibt der
  ersten Frage von Step 1 endlich ihren Rahmen. Dopplungs-Check Wagner: kontext
  erzählt die Ankunft, Step-1-body fasst die Befunde — keine echte Dopplung.
- **C — Zeitangabe:** Nur Schrittzahl („12 Schritte") vs. Schritte + Minuten.
  Empfehlung: **nur Schrittzahl** — Zeitangaben schreckten nachweislich ab
  (Lesezeit-Label-Learning 2026-07-16), Schrittzahl ist ehrlich und tempo-neutral.

## Zweitwirkungen (um die Ecke)

- **Pipeline:** neues OPTIONALES Feld `auftaktFragen` (+B1) → kommt auf die
  Baustein-5-Sync-Liste (wie faustregelAbruf/abschlussText/teaser). Kein Zwang
  für Alt-Content.
- **B1/AR:** Szene + Patient haben B1-Varianten ✅; UI-Labels über
  messages/{de,ar,tr}.json (×3 Pflicht); auftaktFragen mit B1-Variante.
- **Play-then-Gate:** Auftakt ist kein Antwort-Step — Gate-Logik unberührt.
  Gäste sehen ihn (guter erster Eindruck im Demo-Pfad).
- **Offline/Klassenraum:** rein client-seitig aus Bundle-Daten.
- **Abschluss-Kopplung:** Wenn A2 gewählt wird, sollten Auftakt-Fragen eine
  TEILMENGE der Abschluss-Abruf-Fragen sein (sonst verspricht der Auftakt etwas,
  das der Abschluss nie einlöst).
- **Micro-Redundanz Patient-Modal:** Auftakt zeigt Patient prominent → das
  Avatar-Modal bleibt als Nachschlag (kein Konflikt, gleiche Datenquelle).

## Bau-Umfang (nach Freigabe)

1. `AuftaktScreen`-Komponente + Player-State (frischer Start → Auftakt,
   „Los geht's" → Step 1; Resume überspringt). ~2 Dateien.
2. `_types.ts`: `Lernsituation.auftaktFragen?: string[]` + `auftaktFragenB1?`.
3. Content: Ríos twist-freie auftaktFragen (handgeschrieben, gegen Kerntexte
   gelesen); Wagner nutzt Default (erste 3 Abruf-Fragen).
4. i18n ×3, Tests (Helper + Komponente), Walkthrough-Screenshots an Waleria.
5. Deploy nur nach Freigabe.

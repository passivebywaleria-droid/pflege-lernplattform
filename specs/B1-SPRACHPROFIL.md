# B1-Sprachprofil — verbindliche Referenz für einfache Sprache

> **Zweck:** Jeder B1-Text der Plattform (Wissens-Tabs `*B1`-Felder, `contentB1`, `explanationB1`,
> `feedbackB1`, `erklaerungB1` im Glossar) wird gegen dieses Profil geschrieben und geprüft.
> **Grundlage:** systematische Auswertung dreier DaZ-Pflege-Lehrwerke (lokal, gitignored):
> Peikert „Deutsch B1 in der Pflege" (Elsevier, 4. Aufl. 2023) · Micucci/Würtz „Deutsch A2/B1 in der
> Pflege" (Elsevier 2021) · „Fit für die Fachsprachprüfung B2–C1 Medizin" (Negativ-Referenz).
> Quelldateien: `recherche/deutsch-b1-pflege-volltext/`, `recherche/deutsch-a2b1-pflege-volltext/`,
> `recherche/fsp-b2c1-medizin-volltext/` — Analyse-Berichte: `scratchpad/bericht-peikert.md` + `bericht-micucci.md`.
>
> **Abgrenzung:** B1 = **Einfache Sprache** (telc-B1-Zulassungsniveau der Pflegeausbildung), NICHT
> Leichte Sprache/A1 (`recherche/inhalte/ERGEBNIS.md` „Leichte vs. Einfache Sprache"). Kurze Sätze,
> aber echte Fachinhalte — der Schüler soll die Prüfung bestehen, nicht infantilisiert werden.

---

## 0. Kern in einem Satz

Kurze Hauptsätze, ein Nebensatz pro Satz, jeder Fachbegriff sofort erklärt, „du"-Anrede, echte Umlaute —
gleiche belegte Fachaussage wie C1, nur sprachlich vereinfacht. **Kein neues Grounding** (dieselben
`kernfaktId`, dieselben Belege — nur das Register ändert sich).

---

## 1. Satzbau-Norm (belegt aus beiden B1-Lehrwerken)

| Merkmal | Regel | Beleg-Referenz |
|---|---|---|
| **Satzlänge** | 8–15 Wörter Lesetext, Ziel-Median **7–9**. Harte Obergrenze **~20 Wörter** — längere Sätze splitten. | Micucci-Lesetexte 8–15 W; Peikert Median ~10 |
| **Satzbau** | Überwiegend Parataxe (Hauptsätze). Verbalstil, kein Nominalstil. | beide |
| **Nebensatz-Tiefe** | **max. 1 Ebene** (Hauptsatz + 1 Nebensatz). Keine Doppel-Einbettung. | beide |
| **Konnektoren-Korridor** | Erlaubt: **und, oder, aber, denn, weil, dass, wenn, als, deshalb, damit, trotzdem, obwohl, sondern, außerdem, schließlich, zuerst/dann/danach, erstens/zweitens**. | beide, explizit |
| **Verboten (zu hoch)** | insofern, zumal, wenngleich, hinsichtlich, bezüglich, sofern, mithin, dahingehend | FSP-Negativliste |
| **Aufzählung** | Bei 3+ gleichrangigen Punkten: kurze Einzelsätze oder Doppelpunkt-Liste, **nicht** ein Schachtelsatz. | Peikert (Spiegelstriche) |
| **Anrede** | **Immer „du"** an den Lernenden (Plattform-Regel — die Lehrwerke siezen aus Konvention; wir übernehmen ihr *Niveau*, nicht ihre Anrede). Patient im Fall bleibt „Sie". | Plattform-Regel `code-quality.md` |
| **Emotion** | Explizit benennen („Dein Herz rast."), nicht andeuten. | Micucci |

---

## 2. Grammatik-Grenze (aus der Progression beider Bücher abgeleitet)

Die Lehrwerke bauen B1 linear auf. Was **spät** kommt, ist das *obere* Ende — sparsam einsetzen.

### Erlaubt (Kern, früh eingeführt)
- Präsens, **Perfekt** (Standard-Vergangenheit der Berufssprache), Präteritum von *sein/haben/*Modalverben
- Modalverben, Imperativ, trennbare/reflexive Verben, Komparativ/Superlativ
- **Nebensätze**: `weil, dass, wenn, als` + **Relativsätze** (der/die/das)
- **Passiv** (Präsens + Perfekt) — dosiert, für Abläufe/Vorgänge
- **Infinitiv mit `zu`** („Es ist wichtig, sofort zu drücken.")
- Konjunktiv II **nur** als Höflichkeit/Ratschlag/Wunsch: *würde, könnte, sollte, wäre, hätte*

### Vermeiden (zu hoch / obere B1-Kante)
| Struktur | Stattdessen |
|---|---|
| **Futur I/II** („wird … werden") | **Präsens + Zeitangabe**: „Gleich kommt das Team." (Peikert wörtlich: Futur „so gut wie gar nicht") |
| **Konjunktiv I** (indirekte Rede: „er sei", „sie habe") | Indikativ + direkte Rede: *Sie sagt: „Ich habe Schmerzen."* (schärfster B2/C1-Marker!) |
| **Konjunktiv-II-Vollparadigma** (käme, träte, bräuchte) | würde-Umschreibung |
| **Genitiv** gehäuft | `von` + Dativ, oder umformulieren |
| **Nominalstil / Substantivketten** („nach erfolgter Reperfusion") | Verbalstil: „nachdem das Gefäß wieder offen ist" |
| **erweitertes Partizipialattribut** („der seit drei Tagen liegende Patient") | Relativsatz: „der Patient, der seit drei Tagen liegt" |

---

## 3. Fachwort-Einführung (die 4 belegten Muster)

Ein B1-Text darf Fachbegriffe enthalten — er muss sie nur **sofort** greifbar machen. Vier Muster aus den Büchern:

1. **Fachwort + sofortige Klammer-Paraphrase** (Hauptmuster):
   `Schnappatmung` bleibt stehen, aber im *ersten* Auftreten erklärt der Satz selbst, was es ist.
   ⚠️ **Regel:** Die Klammer darf **kein schwereres Fachwort** enthalten (B1: *nicht* „(agonale Atmung)").
2. **Infinitiv-Definition:** „Ein Katheter ist eine dünne Röhre. Man legt ihn, **um** Urin abzuleiten."
   / „Der Defibrillator **dient dazu**, das Herz mit Strom wieder in den Takt zu bringen."
3. **Kompositum-Zerlegung:** langes Wort in Bestimmungs- + Grundwort: „Blut-zucker-mess-gerät =
   ein Gerät, das den Zucker im Blut misst." Grundwort (letztes Nomen) trägt die Bedeutung + den Artikel.
4. **Fachsprache ↔ Umgangssprache** (die „Übersetzer"-Rolle der Pflege): Fachbegriff neben Alltagswort
   stellen — siehe §6.

### ⚠️ KERNREGEL: Fachwort ERKLÄREN heißt NICHT Fachwort ERSETZEN

Die Schüler müssen die **Pflegefachsprache lernen** — sie ist Prüfungs- und Berufsvoraussetzung. B1 vereinfacht
die **Satz-Sprache drumherum**, streicht aber **niemals** den fachlich zwingenden Begriff selbst. Ein Fachwort,
das im C1-Text steht, MUSS auch im B1-Text stehen — mit einer Alltags-Erklärung daneben, nicht an seiner Stelle.

- ✅ **richtig (behalten + erklären):** „Sie hatte eine Synkope — eine kurze Ohnmacht." · „Das Medikament wird
  intravenös gegeben, also direkt in die Vene." · „Ein Dekubitus (wund vom langen Liegen) …" · „Nitrat, ein
  Medikament, das die Gefäße weitet …"
- ❌ **falsch (weg-vereinfacht):** „Sie ist kurz ohnmächtig geworden." (Synkope fehlt) · „direkt in die Vene"
  (intravenös fehlt) · „wund vom Liegen" (Dekubitus fehlt).

**Betrifft u.a.** (nie ersetzen, immer behalten+erklären): Dekubitus, intravenös/i.v., subkutan/s.c.,
intramuskulär, Synkope, Apoplex, Hypoglykämie, Angina pectoris, akutes Koronarsyndrom, Nitrat, Pulsoximetrie,
Deeskalation, Sedierung, Eigenschutz, Hypothermie, Reanimation, Defibrillation, Aspiration, Kolostoma,
Kompetenzgrenze, Arztanordnung — und generell jeder Begriff aus dem CE-Glossar, der im C1-Tab vorkommt.

**Mechanischer Check:** `scripts/b1-fachwort-retention.ts <sit>|--all` — flaggt jeden Fachbegriff, der im
C1-Prosatext eines Tabs steht, im zugehörigen B1-Text aber fehlt. Ziel: **0 fehlende Fachwörter**.
(Der `b1-sprachcheck` prüft die Satz-Sprache; dieser Check prüft die fachliche Vollständigkeit — beide grün.)

---

## 4. B1 ↔ B2/C1 — die Fachterm-Verbotsliste

**Zentraler Befund der FSP-Analyse:** Selbst die Fachsprachprüfung schreibt für das *Patienten*gespräch
einfache Sprache vor. B2/C1 beginnt erst beim **ärztlichen Dokumentations-Register**.

**Wichtige Unterscheidung — zwei Register, zwei Regeln:**
- **Lehr-Prosa (Wissens-Tabs, Erklärtexte):** Fachwort **behalten + erklären** (§3-Kernregel). Der latinisierte
  Begriff ist hier LERNZIEL — „Sie hatte eine Synkope, eine kurze Ohnmacht". Nicht streichen.
- **Simulierte Patienten-Rede (Dialog-Steps, was die Pflegekraft zum Patienten SAGT):** hier den **Laienbegriff**
  benutzen — „Ihnen ist kurz schwarz vor Augen geworden", nicht „Sie hatten eine Synkope". Das ist die
  „Übersetzer"-Rolle. Die Tabelle unten gilt für DIESES Register.

Für die Lehr-Prosa heißt die Tabelle also: der rechte Begriff bleibt (erklärt), der linke ist die Erklärung dazu.

| B1-erlaubt (im Text) | B2/C1 — nur erklärt als Glossar-Begriff |
|---|---|
| Fieber | Pyrexie |
| Schwindel | Vertigo |
| Ohnmacht / kurze Bewusstlosigkeit | Synkope |
| Husten / blutiger Husten | Tussis / Hämoptoe |
| Auswurf | Sputum |
| Juckreiz / Ausschlag | Pruritus / Exanthem |
| Übelkeit / Erbrechen | Nausea / Emesis |
| hoher / niedriger Blutdruck | Hypertonie / Hypotonie |
| Herzrasen / langsamer Herzschlag | Tachykardie / Bradykardie |
| Atemnot / Atemstillstand | Dyspnoe / Apnoe |
| Durchfall / Verstopfung | Diarrhö / Obstipation |
| Übergewicht / Abmagerung | Adipositas / Kachexie |
| Wundliegen / Druckgeschwür | Dekubitus |

**Ausdrücklich verbotenes Register (B2/C1):** Konjunktiv I der indirekten Rede, Arztbrief-Nominalstil
(„Z. n.", „V. a.", „DD"), Kollegen-Anrede („Sehr geehrte Frau Kollegin"), latinisierte Lokalisation +
Kürzel im Fließtext (mmHg, Laborzahlen). Das ist Arzt-Arzt-Sprache, nicht Schüler-B1.

---

## 5. Belegter B1-Pflegewortschatz (Referenz-Set)

Diese Wörter sind in den B1-Lehrwerken belegt → in B1-Content **ohne** Erklärung nutzbar. (Auszug der für
Akutsituationen/CE-06 relevanten Felder; vollständige Listen in den Analyse-Berichten.)

- **Vitalzeichen/Basis:** Blutdruck, Puls, Atmung, Bewusstsein, Temperatur, Fieber, Wert messen/eintragen,
  Kurvenblatt. (⚠️ Zahlen-Grenzwerte sind in den Sprachbüchern NICHT belegt außer: Tachykardie >100/Min,
  Bradykardie <60/Min, Hypoglykämie <50 mg/dl, Fieber-Bereich — klinische Zahlen kommen aus I care.)
- **Notfall:** Notruf, Notarzt, Rettungsdienst (112), Rettungswagen, Notfallplan, Erste-Hilfe-Koffer,
  Notfallwagen, Wundversorgung, bewusstlos, lebensgefährlich, sich verschlucken, ersticken, ausspucken,
  Herzdruckmassage, Defibrillator, Mund-zu-Mund-Beatmung, stabile Seitenlage, Puls fühlen.
- **Körper:** Kopf, Hals, Brust, Bauch, Rücken, Arm, Bein, Hand, Handrücken, Handinnenfläche, Wange, Knie,
  Fuß; Herz, Lunge, Magen, Darm, Gehirn, Leber, Niere, Blase.
- **Symptome:** Schmerzen, weh tun, Schwindel, Übelkeit, Erbrechen, Husten, Atembeschwerden, Fieber,
  Schüttelfrost, Kreislaufstörung, Blutung/bluten, Verletzung, Bruch, Entzündung, Jucken.
- **Handeln:** messen, drücken, heben, ziehen, drehen, halten, festhalten, anlegen, geben, rufen,
  informieren, überwachen, beobachten, dokumentieren, reichen, aufziehen.

---

## 6. Fachsprache → Umgangssprache-Paare (für `erklaerungB1` im Glossar)

Belegt aus den Lehrwerk-Übersetzungstabellen. **Paraphrasiert nutzen** (nicht wörtlich kopieren —
Abstandstest). Direkt verwendbar als B1-Glossar-Erklärung:

| Fachbegriff | B1-Erklärung |
|---|---|
| Tachykardie | zu schneller Puls (über 100 pro Minute), „Herzrasen" |
| Bradykardie | zu langsamer Puls (unter 60 pro Minute) |
| Hypertonie | hoher Blutdruck |
| Hypotonie | niedriger Blutdruck |
| Hyperglykämie | Überzuckerung (zu viel Zucker im Blut) |
| Hypoglykämie | Unterzuckerung (zu wenig Zucker im Blut) |
| Anämie | Blutarmut |
| Dekubitus | Druckgeschwür — wund vom langen Liegen |
| Obstipation | Verstopfung |
| Diarrhö | Durchfall |
| Prophylaxe | Vorbeugung — etwas verhindern, bevor es passiert |
| Inkontinenz | Harn oder Stuhl nicht zurückhalten können |
| Fraktur | Knochenbruch |
| Kontraktur | Versteifung eines Gelenks |
| Pneumonie | Lungenentzündung |
| Apoplex | Schlaganfall |
| Synkope | kurze Ohnmacht — man wird kurz bewusstlos und wacht von allein wieder auf |
| Aspiration | etwas (Essen, Flüssigkeit) kommt in die Atemwege statt in die Speiseröhre |
| Zyanose | die Haut/Lippen werden blau, weil zu wenig Sauerstoff da ist |
| Reanimation | Wiederbelebung |
| Palliativpflege | Pflege in der Sterbephase — Ziel ist Wohlbefinden, nicht Heilung |
| Validation | wertschätzende Haltung bei Demenz — man korrigiert die Person nicht |

---

## 7. Prüf-Checkliste pro B1-Text (vor Freigabe)

```
[ ] Satzlänge: kein Satz > ~20 Wörter? Median 7–9?
[ ] Nur 1 Nebensatz-Ebene pro Satz?
[ ] Konnektoren im Korridor (§1)? Kein insofern/zumal/hinsichtlich?
[ ] Kein Futur (Präsens+Zeitangabe)? Kein Konjunktiv I? Kein Nominalstil?
[ ] Jeder Fachbegriff beim ersten Auftreten erklärt (Muster §3)?
[ ] Keine Klammer-Erklärung mit SCHWEREREM Fachwort?
[ ] Latinisierte Fachterme (§4) nur erklärt, nie unerklärt tragend?
[ ] „du"-Anrede an Lernende, echte Umlaute (ä/ö/ü/ß)?
[ ] Fachlich IDENTISCH zur C1-Fassung (kein Fakt weggelassen/verändert)?
[ ] Abstandstest 0 (scripts/abstand-ce06-situation.ts prüft B1-Felder mit)?
```

---

## 8. Wichtige Einschränkung (ehrlich)

Die Sprachbücher sind **Sprachbücher, keine Notfall-Lehrbücher** — sie liefern Register, Satzbau und
Wortschatz, aber **keine klinische Tiefe** (kein ABCDE, keine Reanimations-Details, keine Schockformen).
Die **fachliche Substanz** kommt weiter aus I care / dem Notfallmedizin-Index (die gegroundeten Kernfakten);
dieses Profil regelt nur die **sprachliche Oberfläche**. B1 ändert das *Wie*, nie das *Was*.

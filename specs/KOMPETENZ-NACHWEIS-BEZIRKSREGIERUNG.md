# Kompetenz-Nachweis vor der Bezirksregierung

> **Zweck:** Pflegeschulen müssen der zuständigen Behörde (Bezirksregierung /
> Landesprüfungsamt) nachweisen, dass die vorgeschriebenen Kompetenzen vermittelt
> wurden — gegliedert nach den **fünf Kompetenzbereichen** der Anlagen zur PflAPrV.
> Wenn Carovia den Theorieunterricht (teilweise) ersetzt, muss die Plattform diesen
> Nachweis liefern können. Datengrundlage dafür entsteht JETZT bei der Content-
> Erstellung — nicht nachträglich rekonstruierbar.

## Die fünf Kompetenzbereiche (PflAPrV, offizielle Bezeichnung)

| KB | Kurzbezeichnung |
|----|-----------------|
| I | Pflegeprozesse und Pflegediagnostik in akuten und dauerhaften Pflegesituationen |
| II | Kommunikation und Beratung personen- und situationsbezogen gestalten |
| III | Intra- und interprofessionelles Handeln in unterschiedlichen systemischen Kontexten |
| IV | Gesetzliche und institutionelle Rahmenbedingungen / Qualität und Berufsethik |
| V | Das eigene Handeln auf wissenschaftlicher/ethischer Grundlage reflektieren/begründen |

(Feingliederung z. B. I.1–I.6, II.1–II.3 … steht im Rahmenlehrplan; die CE/LE-genaue
Schwerpunkt-Zuordnung liegt in `specs/rahmenplan-bibb.md` + je CE im Katalog.)

## Datengrundlage (entsteht bei der Content-Erstellung — K.O.)

Jeder Baustein und jeder Antwort-Step trägt:
- `kompetenzbereich` — der **primäre** KB-Schwerpunkt der Lerneinheit, übernommen
  aus dem Rahmenlehrplan (`kompetenzbereichPrimaer` im Lernergebnis-Katalog), NICHT
  fachlich geraten. Belegt über `schwerpunktQuellzeile` gegen den Rahmenlehrplan-Volltext.
- `lernzielId` / `lernzielIds` — Bezug zum Rahmenlehrplan-Lernergebnis.
- `bloomLevel` — erreichte kognitive Tiefe (berührt/geübt/geprüft, s. Coverage-Tiefe).

Optional zusätzlich die Neben-Schwerpunkte (`kompetenzbereicheSekundaer`) — für die
Aussage „dieser Inhalt zahlt auch auf KB X ein".

> **Quelle der Zuordnung:** Der Rahmenlehrplan gibt den Kompetenzschwerpunkt PRO
> LERNEINHEIT vor (Kopf jeder LE). Beispiel CE-06: LE1/LE4/LE5 = I.4, LE2/LE3 = III.2,
> jeweils mit Neben-Schwerpunkten. Eingetragen in `specs/curriculum/ce-06-lernergebnisse.json`.

## Aggregations-Logik (für das spätere Reporting)

Aus den abgeschlossenen Steps eines Schülers lässt sich verlustfrei ableiten:

```
Nachweis(Schüler) =
  für jeden KB (I–V):
    Σ abgeschlossene Steps mit kompetenzbereich == KB
    → erreichte Bloom-Tiefe pro zugehörigem Lernergebnis (max)
    → Liste der abgedeckten CE/LE
    → Lernzeit (aus Aktivitäts-Log, s. VISION „Lernzeit-Nachweis")
```

Aggregations-Ebenen: **pro Schüler** (Einzelnachweis) und **pro Klasse**
(Sammelübersicht). Beide exportierbar als PDF.

## Was JETZT existiert vs. was später kommt

| | Status |
|---|--------|
| KB-Marker pro Lernergebnis (Katalog) | ✅ CE-06 eingetragen, belegt |
| KB-Marker pro Baustein/Step | ✅ Regel im Start-Prompt (K.O.), Gold-Standard-Baustein trägt I.4 |
| Aggregations-Logik spezifiziert | ✅ dieses Dokument |
| Reporting-UI + PDF-Export | ⏳ später (braucht echte Schülerdaten; erst nach Pilot sinnvoll) |
| Rechtlich exakte Nachweis-Form | ✅ weitgehend geklärt (Recherche 2026-07-12): keine amtliche Einzelvorlage; Anker = 5 KB. Feinform erst mit Reporting-UI |

## Rechtshierarchie — worauf wir uns verankern (Recherche 2026-07-12)

Es gibt **KEINE amtliche Einzelvorlage** „Schüler X, KB I–V erfüllt", die die Schule
einreicht. Der Nachweis ist ein **System aus drei Instrumenten**:

1. **Schul-Ebene — genehmigtes schulinternes Curriculum** (§ 2 PflAPrV): die Schule
   legt es der zuständigen Behörde vor Ausbildungsbeginn zur Genehmigung vor und weist
   damit nach, dass **alle** Kompetenzen der PflAPrV-Anlagen vermittelt werden.
   → **Hier zahlt unser KB × LE × Bloom-Coverage-Mapping ein (B2B/Schule).**
2. **Schüler-Ebene laufend:** Ausbildungsnachweis (§ 3 Abs. 5 — „Kompetenzentwicklung
   feststellbar") + Jahreszeugnisse (§ 6 — Noten getrennt Unterricht/Praxis) +
   qualifizierte Leistungseinschätzungen. → **Hier ist Carovia Zulieferer** (Lernzeit-/
   Aktivitäts- + KB-Aggregation), nicht Ersatz.
3. **Schüler-Ebene final — staatliche Prüfung:** Zwischenprüfung (§ 7, nach Anlage 1)
   + Abschlussprüfung (§ 9, nach Anlage 2), beide nach KB gegliedert; Zeugnis + Urkunde
   stellt die zuständige Behörde aus. → **bleibt bei Schule/Behörde.**

**Stabiler, bundeseinheitlicher Anker = die 5 KB der PflAPrV-Anlagen** (rechtsverbindlich).
Die 11 CE sind bundeseinheitlich empfohlen (Fachkommission § 53 PflBG). Die **LE-Struktur
ist Umsetzungsebene** (unsere Quelle NRW-geprägt) — deshalb Aussagen/Nachweise auf KB + CE
verankern, nicht auf LE. Details: `specs/START-PROMPT-WISSENS-TABS.md` (Rechtshierarchie).

### Zuständige Behörde je Bundesland (Bezeichnung variiert)
NRW = **Bezirksregierungen** · Bayern = **Landesamt für Pflege** · Baden-Württemberg =
**Regierungspräsidien** · Hessen = **Landesamt für Gesundheit und Pflege** · Berlin =
**Landesprüfungsamt für Gesundheitsberufe** (LAGeSo) · Niedersachsen = **RLSB**.
„Bezirksregierung" ist NRW-spezifisch; bundesweit korrekt: „zuständige Behörde".

## Konsequenz für den Bau (geklärt)

Weil der Anker die **5 KB** sind und wir sie Step-granular markieren, können wir **jede**
spätere Nachweis-Form daraus erzeugen, ohne Content anzufassen. Deshalb ist die genaue
Report-**Form** kein Blocker mehr — sie wird erst mit der Reporting-UI (nach dem Pilot)
final entschieden. Falls eine konkrete Behörden-/Schulanforderung auftaucht: hier
ergänzen (pro Schüler vs. Klasse? Ebene KB vs. Feingliederung I.1…? Lernzeit je KB?).

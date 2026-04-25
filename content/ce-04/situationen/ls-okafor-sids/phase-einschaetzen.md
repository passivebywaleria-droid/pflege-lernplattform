# Phase: Einschätzen

## Metadaten

| Feld | Wert |
|------|------|
| phase | einschaetzen |
| situationId | `ls-okafor-sids` |
| bloomRange | [2, 3] |
| geschaetzteMin | 20-25 |
| tags | krankheitslehre (45%), pflege (40%), anatomie (15%) |

---

## Kontext (~250 Wörter)

Frau Okafor erzählt von Daniels Alltag. Im Gespräch kommen Details über seine Schlafumgebung zur Sprache: Daniel schläft nachts bei ihr im Bett, eingehüllt in eine dicke Kuscheldecke, weil sie dann besser hört, wenn er weint. Sie bettet ihn auch gelegentlich auf den Bauch, weil er so ruhiger schläft.

Du hörst zu. Du unterbrichst nicht. Du machst dir gedanklich eine Liste.

Als Pflegefachkraft kennst du die Risikofaktoren für den plötzlichen Kindstod (SIDS). Du kannst einschätzen, welche Elemente in Daniels Schlafumgebung das Risiko erhöhen — und welche es senken. Diese Einschätzung ist die Grundlage für alles, was du gleich sagen wirst.

Aber: Du weißt auch, dass Frau Okafor keine Nachlässigkeit zeigt. Sie handelt aus Fürsorge. Deine Einschätzung ist fachlich — nicht wertend.

- kontextB1: Frau Okafor erzählt dir von Daniels Schlafen.
  Daniel schläft in ihrem Bett. Er liegt unter einer dicken Decke.
  Manchmal schläft er auf dem Bauch — dann schläft er ruhiger.
  Du hörst zu. Du fragst nicht viel. Du machst dir eine Liste im Kopf.
  Welche Punkte erhöhen das Risiko für SIDS?
  Welche Punkte schützen Daniel?
  Frau Okafor handelt aus Liebe — nicht aus Nachlässigkeit.
  Deine Einschätzung ist fachlich. Du urteilst nicht über sie.

---

## Kern-Steps

| # | Step-Typ | Bloom | Inhalt | Tag |
|---|----------|-------|--------|-----|
| K1 | text (scenario) | B1 | Neue Information: Frau Okafor beschreibt Daniels Schlafumgebung — Elternbett, Kuscheldecke, gelegentliche Bauchlage | krankheitslehre |
| K2 | categorize | B2 | Schlaf-Faktoren sortieren: Risikofaktor / Schutzfaktor / Neutral. Karten: Bauchlage, Elternbett, dicke Kuscheldecke, vollstillen, Rauchen (kein Faktor hier), Rückenlage, Schlafsack, Raumtemperatur 16-18°C, nicht rauchen | krankheitslehre |
| K3 | mc | B3 | "Welche Risikokombination ist in Daniels Fall am bedeutendsten?" (A) Elternbett allein / (B) Kuscheldecke allein / (C) Elternbett + weiche Kuscheldecke + Bauchlage als Kombination / (D) Stillen | krankheitslehre |
| K4 | freetext | B3 | "Was motiviert Frau Okafor zu ihrer Schlaf-Entscheidung? Benenne mindestens 2 verschiedene Gründe." | pflege |

---

## Optionale Steps

| # | Step-Typ | Bloom | Für wen | Inhalt | Tag |
|---|----------|-------|---------|--------|-----|
| O1 | text (stepbystep) | B1 | B1-Schüler | Was ist SIDS? Definition, Häufigkeit, Altersgruppe (AAP SIDS 2022) — schrittweise erklärt | krankheitslehre |
| O2 | flipcard | B2 | Mittlere | SIDS-Risikofaktoren: 6 Karten. Vorderseite: Faktor. Rückseite: Warum erhöht er das Risiko? (z.B. Bauchlage → erschwertes Wiedererwachen) | krankheitslehre |
| O3 | slider | B2 | Alle | "Wie hoch schätzt du Daniels SIDS-Risiko im Vergleich zu einem Kind ohne Risikofaktoren ein?" (Skala 1-5) → Auflösung mit Erklärung: Risikokombination, aber kein Hochrisiko | krankheitslehre |
| O4 | text (scenario) | B1 | B1-Schüler | Frau Okafor beschreibt Bauchlage: "Auf dem Bauch schläft er viel ruhiger." Hintergrundinformation: Warum ist Bauchlage für Säuglinge < 1 Jahr ein Risikofaktor? | krankheitslehre |

---

## Baustein-Trigger

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| K2 zu viele Fehler | `gesundheitsfoerderung-kinder-sids-risikofaktoren` | Sequencer wählt |
| K3 falsch (A oder B) | Erklärung Risikokombination SIDS — warum Faktoren zusammen wirken | Stufe 2-3 |
| K4 nennt nur Kultur, nicht praktische Gründe | `patientenberatung-motivation-verstehen` | Stufe 2 |

---

## Didaktische Notizen

- **Brilliant-Prinzip:** K2 (categorize) — Schüler muss zuerst selbst sortieren, bevor die Auflösung kommt. Aktiviert Vorwissen.
- **Keine Bewertung der Mutter:** K4 explizit auf Motivations-Verstehen ausgerichtet. Schüler soll Empathie entwickeln, nicht urteilen.
- **Fachlich konkret:** SIDS-Risikofaktoren sind evidenzbasiert (AAP SIDS 2022). Keine Verallgemeinerungen.
- **Schutzfaktor Stillen** bewusst als Karte in K2 aufgenommen — Anerkennung für Frau Okafors gutes Handeln schon in der Einschätzung verankern.

# Phase 2 — Einschätzen

## Metadaten

- **phase:** einschaetzen
- **situationsTyp:** beratung
- **bloomRange:** [2, 3]
- **geschaetzteZeit:** 20-30 Min
- **tags:** pflege (40%), krankheitslehre (40%), anatomie (20%)

---

## Kontext (~260 Wörter)

Du hast dich vorgestellt. Kurz, ruhig, ohne Aufregung. Mia hält jetzt den Plastikring und kaut daran. Frau Schneider schaut dich an — zum ersten Mal wirklich.

Sie sagt: _"Dr. Brinkmann hat gesagt, Sie erklären mir noch mal, was das genau ist — die MMR-Impfung. Ich habe ein paar Fragen."_

Du hörst: Es gibt keine grundsätzliche Ablehnung. Es gibt Fragen. Das ist der Unterschied — und er ist riesig.

Jetzt kommt deine zweite Aufgabe: **Einschätzen, bevor du informierst.** Was weiß Frau Schneider schon? Was denkt sie zu wissen? Woher kommen ihre Informationen? Welche Emotionen stecken dahinter — Angst, Skepsis, Misstrauen, Verwirrung?

Beratung ohne Einschätzung ist Information mit falschem Adressaten.

---

## Kern-Steps (jeder Schüler sieht diese)

| # | Step-Typ | Bloom | Inhalt | Tag |
|---|----------|-------|--------|-----|
| K1 | dialog | B2 | Du stellst offene Fragen: "Was haben Sie bisher gelesen oder gehört über MMR?" — Frau Schneider antwortet (scripted): Nennt Eltern-Facebook-Gruppe, erwähnt "Nebenwirkungen", sagt vage "da gibt es Studien". Deine Aufgabe: Aktiv zuhören, nicht unterbrechen. | pflege |
| K2 | categorize | B3 | Aussagen von Frau Schneider einordnen: Gegeben 5 Karten mit ihren Sätzen (paraphrasiert) — ordne ein: "Wissensaussage", "Emotionale Aussage", "Fehlinformation", "Frage". Beispiel: 'Ich habe Angst vor Nebenwirkungen' = emotional. 'Da wurde ein Zusammenhang mit Autismus nachgewiesen' = Fehlinformation. | pflege |
| K3 | mc | B3 | "Frau Schneider sagt: 'Wir leben doch sowieso gesund — brauchen wir das wirklich?' Welches Konzept steckt dahinter?" — (A) Gesundheit als Abwesenheit von Krankheit (B) Laientheorie: Natürlichkeit schützt vor Krankheit (C) Richtige Einschätzung — gesundes Leben ersetzt Impfungen (D) Salutogenese. — Richtig: B. | krankheitslehre |
| K4 | text (news) | B2 | Faktenblock: § 20a IfSG — Masern-Impfpflicht (seit 01.03.2020). Gilt für: Kinder in Gemeinschaftseinrichtungen (Kita, Schule), Pflege und medizinische Einrichtungen. Gilt NICHT für: Kleinkinder unter 1 Jahr ohne Kita, Kinder zu Hause. Mia (13 Monate, ohne Kita): noch keine Pflichtsituation — aber sobald Kita-Eintritt. | krankheitslehre |
| K5 | estimation | B3 | Schieberegler: "Wie hoch ist die notwendige Durchimpfungsrate, damit Masern nicht mehr in der Bevölkerung zirkulieren?" — Skala 50%-100%. Richtig: 95% (WHO-Schwelle). Feedback: Deutschland liegt aktuell unter dieser Schwelle in einzelnen Regionen (RKI, 2023). | krankheitslehre |
| K6 | swipe | B2 | 4 Karten: Häufige Gründe für Impfzögerlichkeit. Swipe Links = trifft auf Frau Schneider zu / Rechts = trifft nicht zu (basierend auf dem, was du in K1 gehört hast). Auswertung zeigt Muster: Fehlinformation, Angst, soziales Umfeld, Misstrauen gegen Pharmaindustrie. | pflege |

---

## Optionale Steps (Sequencer wählt basierend auf Profil)

| # | Step-Typ | Bloom | Für wen | Inhalt | Tag |
|---|----------|-------|---------|--------|-----|
| O1 | text (stepbystep) | B1 | B1-Schüler | Schritt für Schritt: Wie stelle ich fest, was jemand schon weiß? FRAGE — PAUSE — HÖREN — ZUSAMMENFASSEN (Kurzanleitung für Einschätzungsgespräch) | pflege |
| O2 | truefalse | B2 | Mittlere | 5 Aussagen zu § 20a IfSG: wahr/falsch. "Alle Kinder unter 2 Jahren müssen gegen Masern geimpft sein" = falsch. "Kinder, die in eine Kita aufgenommen werden, müssen einen Nachweis erbringen" = wahr. | krankheitslehre |
| O3 | text (analogy) | B1 | B1-Schüler | Analogie Herdenimmunität: "Stell dir eine Klasse vor. Wenn 19 von 20 Schülern geimpft sind, stecken sich die anderen nicht an — der Kranke findet keinen Empfänger mehr. Masern brauchen 95% — viel mehr als Grippe (65%)." Quelle: (WHO, Immunization Coverage) | krankheitslehre |
| O4 | flipcard | B2 | Mittlere | 3 Flipcards: Stadium der Entscheidungsfindung. Vorne: Verhalten/Aussage. Hinten: Wo steht die Person gerade? (Noch nicht bereit, Abwägen, Fast entschieden). Hilft beim Einschätzen der Beratungsstrategie. | pflege |

---

## Baustein-Trigger

| Trigger | Baustein-ID | Stufe |
|---------|------------|-------|
| K3-Falsch (C) | `gesundheitsmodelle-definition` | Sequencer wählt — natürliches Verhalten ersetzt keine Immunisierung |
| K5-Schätzung stark daneben | `impfungen-herdenimmunität` | Sequencer wählt — Schwellenwert + Masernspezifika |
| K2-Kategorisierung fehlt "Fehlinformation" | `impfungen-wakefield-mythos` | Stufe 2 oder 3 — kurze Einführung was kommt |
| O2 gewählt | `impfungen-masern-impfpflicht-ifsg` | Stufe 1 (C1-Denkfrage) oder Stufe 3 (B1-Erklärung) |

---

## Feedback K3

**Richtig (B):**
"Genau. Die Aussage 'Wir leben gesund — brauchen wir das?' ist eine klassische Laien-Theorie: Gesundheit als Ergebnis des eigenen Lebensstils, Krankheit als Versagen dieses Schutzes. Das ist verständlich — und falsch. Masern-Viren fragen nicht nach Ernährungsweise. Herdenimmunität braucht Zahlen, nicht Lifestyle. Merke: Gesundheitsverhalten und Impfschutz schließen sich nicht aus — sie ergänzen sich."

**Falsch (A):**
"Nicht ganz — Frau Schneider sagt nicht nur 'krank/nicht krank', sie spricht über ihre Lebensweise als Schutz. Das ist mehr als nur eine Krankheitsdefinition. Es ist eine Theorie über den Ursprung von Gesundheit: Ich tue das Richtige, also bin ich sicher. Diesen Glauben zu verstehen ist wichtiger als ihn zu widerlegen."

**Falsch (C):**
"Das ist die Fehlvorstellung, auf die du mit Fakten antworten wirst — aber noch nicht jetzt. Erst verstehen, dann informieren. Merke: Frau Schneiders Überzeugung ist nachvollziehbar, aber immunologisch nicht haltbar."

**Falsch (D):**
"Salutogenese (Antonovsky, 1987) fragt nach Faktoren, die gesund erhalten — das ist ein Gesundheitsmodell. Frau Schneider formuliert aber keine Theorie über Schutzfaktoren, sondern eine Alltagsüberzeugung: 'gesund leben = keine Impfung nötig'. Das ist eine Laientheorie, keine Salutogenese."

---

## Adaptivitäts-Notiz

- **C1 + Vorerfahrung:** K1-K6. Optionals bei Bedarf. Keine Glossar-Unterstützung.
- **B2 + etwas Praxis:** Alle Kern-Steps + O2 + O4.
- **B1 + Anfänger:** Alle Kern-Steps + O1 + O3. Glossar für § IfSG, Herdenimmunität, Impfpflicht. TTS für K4.

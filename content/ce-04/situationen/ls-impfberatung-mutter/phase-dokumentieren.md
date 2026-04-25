# Phase 6 — Dokumentieren

## Metadaten

- **phase:** dokumentieren
- **situationsTyp:** beratung
- **bloomRange:** [4, 6]
- **geschaetzteZeit:** 15-25 Min
- **tags:** pflege (50%), krankheitslehre (35%), anatomie (15%)

---

## Kontext (~220 Wörter)

Das Gespräch ist beendet. Frau Schneider ist mit Mia auf dem Arm in den Wartebereich gegangen — um nachzudenken, um zu entscheiden, oder um einen neuen Termin zu vereinbaren.

Jetzt beginnt die Phase, die im Praxisalltag oft unterschätzt wird: die Dokumentation.

Impfaufklärung hat eine rechtliche Dimension. Bevor jede Impfung verabreicht wird, ist eine ordnungsgemäße Aufklärung Pflicht — und diese Aufklärung muss dokumentiert sein. Ohne Dokumentation: kein Nachweis. Kein Nachweis: rechtliches Risiko für die Praxis.

Und wenn eine Empfehlung abgelehnt wird, gilt das erst recht: Die Ablehnung muss so dokumentiert werden, dass sie als informierte, freiwillige Entscheidung nachvollziehbar ist.

Das ist kein Formalismus — das ist Schutz: für Frau Schneider, für Mia, für die Praxis, für dich.

---

## Kern-Steps (jeder Schüler sieht diese)

| # | Step-Typ | Bloom | Inhalt | Tag |
|---|----------|-------|--------|-----|
| K1 | text (checklist) | B2 | Pflichtinhalte der Impfaufklärung (rechtlich) — was muss dokumentiert sein: (1) Aufklärung über Wirkung und Zweck der Impfung (2) Aufklärung über mögliche Nebenwirkungen (3) Aufklärung über Komplikationen (4) Aufklärung über Alternativen (5) Datum, Uhrzeit, Name der aufklärenden Person (6) Einwilligung oder Ablehnung — unterschrieben oder handschriftlich vermerkt. Quelle: § 630d BGB, § 630e BGB, STIKO-Empfehlungen. | pflege |
| K2 | cloze | B4 | Lückentext: Eintrag ins Praxissystem vervollständigen. Vorlage: "Aufklärungsgespräch zur MMR-Impfung am [Datum]. Mutter Frau Schneider wurde über [___] aufgeklärt. Inhalt: Wirkungsweise der [___]-Impfung, häufige Nebenwirkungen (Rötung, Fieber), seltene Komplikationen (Fieberkrampf <[___]), Vergleich Erkrankungs- vs. Impfrisiko. Die Mutter hat [___]. Nächster Termin: [___]. Dokumentiert von: [Name], Auszubildende, unter Aufsicht von Dr. Brinkmann." | pflege |
| K3 | mc | B4 | "Frau Schneider entscheidet sich, die Impfung heute abzulehnen. Was muss jetzt dokumentiert werden?" — (A) Nichts — sie kommt ja wieder (B) Nur, dass sie heute nicht geimpft wurde (C) Ablehnung nach erfolgter Aufklärung, mit Datum, Inhalt der Aufklärung, Unterschrift der Mutter oder Vermerk bei Verweigerung der Unterschrift (D) Eine Meldung ans Gesundheitsamt. — Richtig: C. | pflege |
| K4 | text (news) | B3 | Faktenblock: MMR-Impfung und Meldepflicht nach IfSG. Relevante Punkte: Masern ist eine meldepflichtige Erkrankung (§ 6 IfSG). MMR-Impfung selbst: keine Meldepflicht für Einzelimpfungen. Aber: Impfdaten werden aggregiert vom RKI erfasst (Surveillance-System, § 13 IfSG). In Einrichtungen nach § 20a IfSG: Nachweis-Pflicht, keine Individual-Meldung. Quelle: (§ 6 IfSG, § 13 IfSG, RKI 2024). | krankheitslehre |
| K5 | freetext | B6 | "Frau Schneider hat heute die Impfung abgelehnt und bittet um einen Termin in 4 Wochen. Formuliere den Eintrag ins Praxisdokumentationssystem — vollständig, rechtlich korrekt, nicht wertend." Rubrik-Raster als Hilfe: Was wurde besprochen? Welche Entscheidung? Wiedervorlagetermin? Unterschrift-Status? | pflege |
| K6 | reflection | B6 | "Du hast heute ein Beratungsgespräch begleitet — von der ersten Wahrnehmung bis zur Dokumentation. Was nimmst du für dich mit? Was würdest du beim nächsten Mal anders machen?" (Abschluss-Reflexion der Situation) | pflege |

---

## Optionale Steps (Sequencer wählt basierend auf Profil)

| # | Step-Typ | Bloom | Für wen | Inhalt | Tag |
|---|----------|-------|---------|--------|-----|
| O1 | sorting | B3 | Mittlere | Karten sortieren: Welche Informationen gehören in die Aufklärungsdokumentation? (Karten mit Inhalten — einige sind Pflicht, manche optional, manche gehören nicht rein). Beispiel: 'Mutter war nervös' = nicht rein. 'Aufklärung erfolgte zu Wirkung und Nebenwirkungen' = rein. | pflege |
| O2 | text (scenario) | B2 | B1-Schüler | Szenario-Text: Was passiert, wenn eine Impfung ohne ordnungsgemäße Aufklärung verabreicht wird? Rechtliches Risiko für Praxis + Arzt. Warum Dokumentation Schutz ist. (§ 630d BGB, § 630e BGB) | pflege |
| O3 | text (glossary) | B1 | B1-Schüler | Glossar: Informed Consent, § 630d BGB, Meldepflicht, Surveillance, Wiedervorlage | pflege |
| O4 | comparison | B4 | Mittlere + C1 | Zweispaltige Tabelle: Dokumentation bei erteilter Einwilligung vs. bei Ablehnung. Was ist gleich, was ist unterschiedlich? | pflege |

---

## Baustein-Trigger

| Trigger | Baustein-ID | Stufe |
|---------|------------|-------|
| K3-Falsch (A oder B) | `patientenberatung-dokumentation-beratung` | Stufe 2 oder 3 — Ablehnung = besonders dokumentationspflichtig |
| K4 immer | `impfungen-meldepflicht-ifsg` | Stufe 1 (C1) oder Stufe 3 (B1) |
| K2-Lücken falsch | `patientenberatung-aufklaerung-rechtlich` | Stufe 2 — rechtliche Pflichtinhalte konkret |

---

## Feedback K3

**Richtig (C):**
"Genau. Die Ablehnung nach erfolgter Aufklärung ist der dokumentationspflichtigste Moment in diesem Gespräch. Es muss nachvollziehbar sein: Die Mutter hat alle Informationen bekommen und frei entschieden. Ohne diese Dokumentation fehlt der Nachweis, dass überhaupt eine Aufklärung stattgefunden hat."

**Falsch (A):**
"Nicht ganz — auch wenn sie wiederkommt, muss das heutige Gespräch dokumentiert sein. Was wäre, wenn sie morgen bei einem anderen Arzt ist? Was wäre, wenn Mia erkrankt? Der Aufklärungsnachweis gilt für heute — unabhängig davon was morgen kommt."

**Falsch (B):**
"Das ist zu wenig. Zu dokumentieren ist nicht nur das Ergebnis (nicht geimpft), sondern der gesamte Aufklärungsprozess — was besprochen wurde, dass die Mutter Gelegenheit hatte Fragen zu stellen, und dass sie informiert abgelehnt hat. Nur dann ist die Praxis rechtlich abgesichert."

**Falsch (D) — Gesundheitsamt:**
"Das ist nicht korrekt — eine Impf-Ablehnung löst keine Meldepflicht aus. Meldepflichtig wäre eine Masern-Erkrankung (§ 6 IfSG). Aber die reine Ablehnung der Impfempfehlung ist kein meldepflichtiges Ereignis."

---

## Freitext K5 — Musterlösung (für Feedback-Anzeige)

**Pflichtinhalte in einer vollständigen Antwort:**
- Datum und Uhrzeit des Gesprächs
- Aufklärung erfolgte zu: Wirkungsweise MMR, häufige und seltene Nebenwirkungen, Risikovergleich Erkrankung vs. Impfung, Wakefield-Mythus thematisiert (Widerlegung erklärt)
- Entscheidung: Ablehnung der Impfung für heute
- Mutter bittet um Wiedervorlagetermin in 4 Wochen
- Einwilligungsstatus: Ablehnung dokumentiert (Unterschrift / Vermerk wenn Unterschrift verweigert)
- Dokumentiert von: Meltem [Nachname], Auszubildende im Mehrsparteneinsatz, unter Supervision Dr. Brinkmann

**Nicht in die Dokumentation:**
- Persönliche Wertung der Entscheidung
- Beschreibung von Frau Schneiders Emotionen (außer als sachlicher Befund)
- Mutmaßungen ("wahrscheinlich wird sie sich doch impfen lassen")

---

## Adaptivitäts-Notiz

- **C1 + Vorerfahrung:** K1-K6. Freitext K5 ohne Hilfsmittel. K6 als Abschluss.
- **B2 + etwas Praxis:** Alle Kern-Steps + O1 + O4. Freitext K5 mit Rubrik-Hilfe.
- **B1 + Anfänger:** Alle Kern-Steps + O2 + O3. Freitext K5 mit Textbausteinen zum Auswählen. TTS für K1, K4. Glossar aktiv.

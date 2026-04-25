# Phase 1 — Wahrnehmen

## Metadaten

- **phase:** wahrnehmen
- **situationsTyp:** beratung
- **bloomRange:** [1, 2]
- **geschaetzteZeit:** 15-20 Min
- **tags:** pflege (60%), krankheitslehre (20%), anatomie (20%)

---

## Kontext (~230 Wörter)

<!-- kontextB1:
Du gehst ins Beratungs-Zimmer.
Das Zimmer ist klein und hell.
Frau Schneider sitzt mit Mia auf dem Schoß.
Mia spielt mit einem Ring.
Frau Schneider schaut kurz hoch. Sie sagt nichts.
Sie wartet, was du sagst.
Jetzt ist deine erste Aufgabe: Schau genau hin.
Was siehst du? Was spürst du?
Erst schauen — dann sprechen.
-->

Du betrittst das Beratungszimmer. Es ist ein kleines, helles Zimmer — Wickeltisch in der Ecke, zwei Stühle gegenüber dem Arztschreibtisch, ein Kinderkörbchen mit Spielzeug auf dem Boden.

Frau Schneider sitzt mit Mia auf dem Schoß. Mia greift nach einem Plastikring auf dem Tisch und lässt ihn fallen. Frau Schneider hebt ihn auf, gibt ihn zurück, ohne aufzusehen.

Als du reinkommst, schaut Frau Schneider kurz hoch. Keine Begrüßung noch — sie wartet, was du sagst.

Du weißt: Dieses erste Wahrnehmen ist kein Small Talk. Hier sammelst du still Information, bevor du auch nur ein Wort über Impfungen sagst. Was siehst du? Was hörst du? Was spürst du — auch bei dir selbst?

**Deine erste Aufgabe: schauen, bevor du sprichst.**

---

## Kern-Steps (jeder Schüler sieht diese)

| # | Step-Typ | Bloom | Inhalt | Tag |
|---|----------|-------|--------|-----|
| K1 | text (scenario) | B1 | Raumszene: Frau Schneider, Mia, Warteraum-Atmosphäre. Einleitende Szene wie oben. TTS-relevant. | pflege |
| K1-bodyB1 | — | — | Du gehst ins Zimmer. Frau Schneider sitzt da. Mia sitzt auf ihrem Schoß. Frau Schneider schaut kurz zu dir. Sie sagt noch nichts. Deine Aufgabe jetzt: Schau genau hin. Was siehst du? | — |
| K2 | hotspot | B2 | Bild des Beratungszimmers: "Wo schaust du zuerst hin?" — Körperhaltung Mutter, Kind, Jacke an, Handygriff. Klickpunkte: Schultern (verschränkt/angelehnt), Blick (Tür, Kind, du), Stimme wird per Narration ergänzt. | pflege |
| K2-bodyB1 | — | — | Schau auf das Bild. Wo schaust du zuerst hin? Klicke auf die Stelle. Körper-Haltung (= Wie sitzt jemand?) ist wichtig. Sie sagt: Ist die Person entspannt oder angespannt? | — |
| K3 | mc | B2 | "Was bedeutet es, dass Frau Schneider die Jacke noch anlässt?" — (A) Sie hat Kälte (B) Sie ist bereit zu gehen, fühlt sich noch nicht angekommen (C) Das ist normal, bedeutet nichts (D) Sie ist unhöflich." — Richtig: B + Erklärung Körpersprache als erstes Signal. | pflege |
| K3-bodyB1 | — | — | Frau Schneider hat die Jacke noch an. Was bedeutet das? Jacke anlassen = die Person ist noch nicht wirklich angekommen. Sie ist noch nicht sicher, ob sie bleiben möchte. | — |
| K4 | reflection | B2 | "Wie ist deine eigene Haltung zum Impfen? Bist du für oder gegen MMR-Impfung? Schreib 2-3 Sätze — ehrlich." Hinweis: Diese Antwort sieht nur du. Es gibt kein Falsch. | pflege |
| K4-bodyB1 | — | — | Was denkst du über Impfungen? Bist du dafür oder dagegen? Schreib 2-3 Sätze. Nur du siehst diese Antwort. Es gibt kein Richtig und kein Falsch. | — |
| K5 | text (procontra) | B1 | Kurztext: Warum eigene Haltung reflektieren wichtig ist — nicht um sie zu verstecken, sondern um sie nicht unbewusst einzusetzen. Professionelle Neutralität ist Arbeit, keine Natürlichkeit. | pflege |
| K5-bodyB1 | — | — | Deine eigene Meinung ist wichtig. Aber im Gespräch darfst du sie nicht zeigen. Warum? Frau Schneider soll selbst entscheiden. Du hilfst ihr dabei. Das nennt man: professionelle Haltung (= neutral bleiben im Beruf). Das ist nicht einfach. Das muss man üben. | — |

---

## Optionale Steps (Sequencer wählt basierend auf Profil)

| # | Step-Typ | Bloom | Für wen | Inhalt | Tag |
|---|----------|-------|---------|--------|-----|
| O1 | flipcard | B1 | B1-Schüler | Flipcards: Körpersignal → Mögliche Bedeutung (je 3 Karten: verschränkte Arme, Blick zur Tür, nach vorne gelehnt). Vorderseite: Bild/Beschreibung. Rückseite: Mögliche Bedeutung + Vorsicht: nicht überinterpretieren! | pflege |
| O2 | freetext | B2 | Alle | "Stelle dir vor, du bist selbst Mutter und zögerst bei einer Impfung. Was willst du, dass die Pflegeperson dir gegenüber zuerst tut?" | pflege |
| O3 | text (glossary) | B1 | B1-Schüler | Glossar-Eintrag: Nonverbale Kommunikation — Definition + 3 Beispiele im Pflegekontext | pflege |

---

## Baustein-Trigger

| Trigger | Baustein-ID | Stufe |
|---------|------------|-------|
| K2-Falsch oder K3-Falsch | `patientenberatung-kommunikationsziele-beratung` | Sequencer wählt |
| K4 immer (nach Reflexion) | `gesundheitsmodelle-professionelle-haltung` | Stufe 2 (Hinweis) — kurze Vertiefung zu professioneller Neutralität |
| O2 gewählt | `patientenberatung-formate-unterschied` | Stufe 1 (Denkfrage für C1) oder Stufe 3 (B1) |

---

## Richtig/Falsch-Feedback K3

**Richtig (B):**
"Genau — die Jacke gibt dir ein erstes Signal: Frau Schneider ist noch nicht wirklich angekommen, noch nicht ganz dabei. Das heißt nicht, dass sie feindlich ist. Es heißt: Sie braucht einen Moment zum Ankommen. Kein Thema, kein Druck — erst Kontakt."

<!-- feedbackB1 Richtig (B):
Gut gemacht! Die Jacke zeigt dir: Frau Schneider ist noch nicht wirklich da.
Sie braucht einen Moment.
Das ist kein Problem. Das ist normal.
Zuerst: Kontakt aufbauen. Kein Druck.
-->

**Falsch (A) — Kälte:**
"Das könnte sein — aber im Kontext eines Beratungsgesprächs ist Körpersprache oft aussagekräftiger. Schau auf andere Signale: der Griff zum Handy, der wechselnde Blick. Signale liest man nie einzeln, immer als Muster."

<!-- feedbackB1 Falsch (A):
Das könnte stimmen. Aber schau auf alle Signale zusammen.
Die Jacke + der Blick zur Tür + das Handy = Frau Schneider ist noch vorsichtig.
Körper-Signale liest man nie allein. Immer als Muster.
-->

**Falsch (C) — bedeutet nichts:**
"Nicht ganz — Körpersignale bedeuten etwas, auch wenn sie keine Gewissheit geben. Sie geben dir eine erste Hypothese, die du im Gespräch überprüfst. Jacke anlassen + Blick zur Tür + kurzer Augenkontakt = Muster von Vorsicht. Kein Urteil, aber ein Hinweis zum Reagieren."

<!-- feedbackB1 Falsch (C):
Körper-Signale bedeuten immer etwas.
Sie geben dir einen ersten Hinweis.
Du prüfst den Hinweis im Gespräch.
Jacke an + Blick zur Tür = Vorsicht. Das ist ein wichtiges Signal.
-->

**Falsch (D) — unhöflich:**
"Nicht ganz. Was wie Unhöflichkeit aussieht, ist oft Schutz. Menschen in unsicheren Situationen schützen sich — durch Distanz, durch Vorsicht, durch 'Nicht-ganz-reinkommen'. Deine Aufgabe: Schutz respektieren, nicht als Ablehnung lesen."

<!-- feedbackB1 Falsch (D):
Das sieht aus wie Unhöflichkeit. Aber es ist Schutz.
Frau Schneider ist unsicher. Sie schützt sich.
Deine Aufgabe: Respektiere das. Es ist keine Ablehnung.
-->

---

## Adaptivitäts-Notiz

- **C1 + Vorerfahrung:** K2 + K3 + K4 — dann direkt Phase 2. Optionals überspringen.
- **B2 + etwas Praxis:** Alle Kern-Steps + O2.
- **B1 + Anfänger:** Alle Kern-Steps + O1 + O3. Texte mit TTS. Glossar aktiv.

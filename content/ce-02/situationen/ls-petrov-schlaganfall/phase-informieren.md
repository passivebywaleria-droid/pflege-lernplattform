# Phase 1 — Informieren

**situationId:** ls-petrov-schlaganfall
**Zeit:** ~20-30 Min
**Bloom:** B2–B3
**Kern-Frage:** Was weiß ich über diesen Patienten? Wie bereite ich mich auf eine Situation vor, die ich noch nie erlebt habe?
**Steps:** 5

---

## KontextB1

Es ist 07:15 Uhr. Du bist in der Früh-Schicht.
Frau Wegner ist deine Praxisanleiterin. Sie bringt dich vor Zimmer 112.
Sie sagt leise:
> *"Viktor Petrov, 58 Jahre. Er hatte einen Schlaganfall (= Apoplex). Das war vor 5 Tagen.
> Er war auf der Stroke Unit (= Schlaganfall-Station). Gestern kam er auf unsere Station.
> Sein rechter Arm und sein rechtes Bein sind schwach (= Hemiparese).
> Er kann schlecht schlucken (= Dysphagie).
> Er hat Schwierigkeiten beim Sprechen (= Aphasie).
> Er hat einen Katheter in der Blase (= BVK).
> Er versteht alles. Aber er kann kaum antworten.
> Ich bin nebenan. Du machst das."*

Du nimmst die Akte von Herrn Petrov und liest.

---

## Kontext

Es ist 07:15 Uhr, Frühschicht auf der neurologischen Normalstation. Frau Wegner, deine Praxisanleiterin, bringt dich vor Zimmer 112 zum Stehen. Sie flüstert:

> *"Viktor Petrov, 58, gestern von der Stroke Unit verlegt. Ischämischer Apoplex links, Hemiparese rechts, Dysphagie, leichte Aphasie. Hat einen Blasenkatheter. Frühschicht heißt: Körperpflege, Mobilisation, Frühstück anreichen, Kathetercheck. Er versteht alles, kann aber kaum sprechen. Ich bin nebenan — du machst das."*

Du nimmst die Patientenakte und liest kurz. Fünf Tage nach dem Schlaganfall. Ein 58-jähriger Ingenieur. Das Bild auf dem Deckblatt zeigt einen kräftigen Mann.

---

## Kern-Steps

| # | Step-ID | Step-Typ | Bloom | Inhalt | Tag |
|---|---------|----------|-------|--------|-----|
| 1.1 | `info-01-akte-sichten` | **text** (displayFormat: `scenario`) | B2 | Szene: Du hältst die Akte in der Hand. SBAR-Übergabe (schriftlich): **S** = Herr Petrov, 58, Ischämischer Apoplex Tag 5. **B** = Hemiparese rechts (Arm komplett, Bein partiell), Dysphagie Grad 2, Aphasie (versteht alles, spricht kaum), BVK seit Tag 1. **A** = Stabile Vitalzeichen, keine Dekubituszeichen, orale Ernährung mit angedicktener Flüssigkeit (IDDSI Niveau 2) und Kostform B möglich. Pneumonieprophylaxe aktiv. **R** = Frühschicht: Körperpflege (Bobath-gerecht), Mobilisation (Bettkante anstreben), Frühstück anreichen, Kathetercheck, Vitalzeichen. Verlegter: Stroke Unit → Normalstation (gestern 16:00 Uhr). | pflege |
| 1.2 | `info-02-pflegeprozess-check` | **mc** (Single-Choice) | B2 | *"Bevor du das Zimmer betrittst: In welchem Schritt des Pflegeprozesses befindest du dich gerade?"* A) Planen (weil du die Maßnahmen schon kennst) B) Informationssammlung (weil du dir ein Bild machst, bevor du handelst) C) Durchführen (weil die Schicht beginnt und du anfangen musst) D) Evaluieren (weil du den gestrigen Tag nachbereitest). **Richtig: B.** Feedback bei A: "Planen kommt nach dem Einschätzen. Erst sammeln, dann einordnen, dann planen." Feedback bei C: "Handeln ohne Informationssammlung ist ein häufiger Fehler — Priorisierung fehlt dann." | pflege |
| 1.3 | `info-03-schlaganfall-akutwissen` | **flipcard** (3 Karten) | B2 | Drei Flipcards als kurzes Orientierungswissen — Basis für die Situation: Karte 1: **Was ist ein ischämischer Apoplex?** → Unterbrechung der Blutversorgung eines Hirnbereichs durch Gefäßverschluss. Beim linken MCA-Infarkt: rechte Körperhälfte betroffen + Sprachzentrum. Karte 2: **Was ist Hemiparese?** → Halbseitige Muskelschwäche (nicht vollständige Lähmung = Plegie). Bei Herrn Petrov: Arm funktionell komplett ausgefallen, Bein partiell. Karte 3: **Was ist Dysphagie?** → Schluckstörung. Bei Herrn Petrov Grad 2 nach GUSS (Trapl et al., 2007): Breiiges sicher, Dünnflüssiges aspirationsgefährdet. | krankheitslehre |
| 1.4 | `info-04-zimmer-betreten` | **dialog** (3 Phasen) | B3 | Dialog: Du betrittst das Zimmer. Herr Petrov liegt leicht aufgerichtet (Oberkörper ca. 30°), schaut dich an. Du stellst dich vor. Drei Antwort-Optionen: A) "Guten Morgen, Herr Petrov. Ich bin [Name], Pflegeschüler. Frau Wegner schickt mich — wir machen heute zusammen Ihre Morgenpflege." (mit Augenkontakt, langsam gesprochen) B) "Hallo, ich bin neu hier, also keine Sorge, ich mach das schon." (zu beiläufig, keine Orientierung gegeben) C) "Guten Morgen! Können Sie mir sagen, wie es Ihnen heute geht?" (sprachlich zu viel für einen Aphasie-Patienten). **Richtig: A.** Knappe, klare Sätze, erklären was kommt — essenziell bei Aphasie. **Zitat Z1** erscheint nach Auswahl: Herr Petrov nickt, schaut dich ruhig an, sagt: *"Morgen... besser?"* | pflege |
| 1.5 | `info-05-aphasie-kommunikation` | **sorting** | B3 | Sortier-Aufgabe: Reihenfolge für die Kommunikation mit einem Aphasie-Patienten festlegen. Karten: [Kurze, einfache Sätze verwenden] → [Ja/Nein-Fragen stellen, keine offenen] → [Zeit lassen für Reaktion (10-15 Sek.)] → [Blickkontakt halten] → [Keine laute Stimme — er ist nicht taub]. **Trigger für Baustein `kinaesthetik` (Kommunikation im Bobath-Kontext) bei Fehlern.** | pflege |

---

## Optionale Steps

| # | Step-ID | Step-Typ | Bloom | Für wen | Inhalt |
|---|---------|----------|-------|---------|--------|
| 1.6 | `info-opt-01-apoplex-hirnareale` | **text** (displayFormat: `analogy`) | B2 | B1-Schüler / Grundlagen-Bedarf | Analogie: Das Gehirn ist wie ein Dirigent. Fällt er auf der linken Seite aus, spielen die Musiker der rechten Seite (Körperhälfte) ohne Dirigent — chaotisch oder gar nicht. Das Sprachzentrum liegt ebenfalls links — deshalb hat Herr Petrov Mühe zu sprechen, obwohl er alles versteht. (AWMF S3 Schlaganfall) |
| 1.7 | `info-opt-02-pflegeprozess-6-schritte` | **timeline** | B2 | B1-Schüler / kein Vorwissen Pflegeprozess | Zeitleiste der 6 Schritte (Fiechter/Meier 1981). Herr Petrovs Schicht ist eingebettet: Jetzt gerade = Schritt 1 (Informationssammlung). Danach: Schritt 2 (Probleme/Ressourcen erkennen) im Zimmer. Diese Karte gibt Orientierung welcher Schritt wann kommt. |

---

---

## B1-Felder für Kern-Steps — Phase 1

### Step 1.1 — bodyB1 (info-01-akte-sichten)
Du liest die Akte von Herrn Petrov. Das ist die Situation (= S):
Herr Petrov, 58 Jahre alt. Er hatte einen Schlaganfall. Das war vor 5 Tagen.
Das ist der Hintergrund (= B):
Rechter Arm: bewegt sich nicht. Rechtes Bein: nur ein wenig bewegbar.
Schlucken ist schwach (= Dysphagie Grad 2). Sprechen ist schwer (= Aphasie).
Er hat einen Blasen-Katheter (= BVK).
Das ist dein Auftrag (= A + R):
Du machst die Körper-Pflege. Du hilfst beim Frühstück. Du kontrollierst den Katheter.
Du misst die Vitalzeichen (= Blutdruck, Puls, Temperatur, Atmung).

### Step 1.2 — feedbackB1 (info-02-pflegeprozess-check)
Die richtige Antwort ist B: Informations-Sammlung.
Du sammelst zuerst alle Informationen. Dann planst du.
Handeln ohne Informationen ist gefährlich.

### Step 1.3 — bodyB1 (info-03-schlaganfall-akutwissen)
Karte 1 — Was ist ein ischämischer Apoplex?
Ein Blutgefäß im Gehirn ist verstopft. Das Blut kommt nicht mehr durch.
Ein Teil des Gehirns bekommt keinen Sauerstoff. Er stirbt ab.
Bei Herrn Petrov: Die linke Seite des Gehirns ist betroffen.
Deshalb funktioniert die rechte Körperseite nicht gut.
Das Sprachzentrum liegt auch links. Deshalb kann er kaum sprechen.

Karte 2 — Was ist Hemiparese (= halbseitige Schwäche)?
Hemi = halb. Parese = Schwäche.
Herr Petrovs rechter Arm: Er kann ihn nicht bewegen.
Herr Petrovs rechtes Bein: Er kann es ein wenig heben. Aber er kann nicht darauf stehen.

Karte 3 — Was ist Dysphagie (= Schluck-Störung)?
Dysphagie bedeutet: Schlucken ist schwierig.
Herr Petrov hat Dysphagie Grad 2 (nach GUSS-Test).
Er schluckt breies Essen sicher.
Aber dünne Flüssigkeit ist gefährlich. Sie kann in die Lunge kommen (= Aspiration).

### Step 1.4 — bodyB1 (info-04-zimmer-betreten)
Du gehst ins Zimmer. Du sprichst langsam und deutlich.
Richtige Antwort: A — "Guten Morgen, Herr Petrov. Ich bin [Name], Pflegeschüler. Frau Wegner schickt mich. Wir machen heute zusammen Ihre Morgenpflege."
Warum ist A richtig?
Der Satz ist kurz. Du erklärst was kommt. Du schaust Herrn Petrov an.
Das ist wichtig: Herr Petrov hat Aphasie. Er versteht alles. Aber er braucht einfache Sätze.
Herr Petrov nickt. Er sagt: "Morgen... besser?"

### Step 1.5 — bodyB1 (info-05-aphasie-kommunikation)
Kommunikation mit Herrn Petrov — die richtige Reihenfolge:
1. Kurze Sätze sprechen (max. 5-7 Wörter).
2. Ja/Nein-Fragen stellen: "Haben Sie Schmerzen?" — nicht "Wie fühlen Sie sich?"
3. Warten — gib Herrn Petrov 10-15 Sekunden Zeit zum Antworten.
4. Augenkontakt halten. Schau ihn an.
5. Nicht laut sprechen. Er ist nicht taub. Er kann schlecht sprechen — aber er hört gut.

---

## Phase-1-Abschluss

*Zwischenseite:* "Du weißt jetzt: Wer Herr Petrov ist, was sein Schlaganfall bedeutet und wie die Kommunikation mit ihm funktioniert. Jetzt gehst du rein — und schaust genau hin."

---

## Baustein-Trigger Phase 1

| Trigger | Baustein | Stufe |
|---------|----------|-------|
| step-1.2-falsch (Antwort A oder C) | `pflegeprozess-definition` | Sequencer wählt |
| step-1.5-Fehler in Reihenfolge | `kinaesthetik-kommunikation-im-kontakt` | Stufe 2–3 |

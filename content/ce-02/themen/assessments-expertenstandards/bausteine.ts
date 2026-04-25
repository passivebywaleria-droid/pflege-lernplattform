// CE-02 Thema Assessments & Expertenstandards — Wissensbausteine (14 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/assessments-expertenstandards/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Stufe 1 = Denkfrage (starke Schüler, Bloom ≥ 3)
// Stufe 2 = Hinweis (mittlere Schüler, Bloom 2-3)
// Stufe 3 = Erklärung als ContentStep (schwache Schüler, Bloom 1-2)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_ASSESSMENTS_EXPERTENSTANDARDS_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: screening-vs-assessment (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-screening-assessment",
    themaId: "assessments-expertenstandards",
    titel: "Screening vs. Assessment",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hast im Frühdienst 12 Bewohner. Du hast 10 Minuten, um einen ersten Überblick über Sturzrisiken zu bekommen. Was machst du anders, als wenn du 60 Minuten für einen einzigen Bewohner hättest?",
      antwort:
        "Mit wenig Zeit machst du ein Screening: wenige Fragen, grob filtern. Mit viel Zeit machst du ein Assessment: tiefe, standardisierte Einschätzung. Screening filtert Risiko-Personen heraus — Assessment klärt das Ausmaß bei auffälligen Personen.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein Screening ist ein kurzes Such-Verfahren mit wenigen Fragen — es soll Risiko-Personen herausfiltern. Ein Assessment ist eine tiefere Einschätzung bei auffälligen Personen — mit mehr Items, genauer, meist standardisiert.",
      textB1:
        "Ein Screening ist ein kurzer Test: Wer hat vielleicht ein Problem? Es sucht nur grob. Ein Assessment ist ein langer Test: Wie groß ist das Problem wirklich? Es fragt viel genauer nach.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-01",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DNQP-Verfahrensordnung (2024)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-screening-assessment",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Screening vs. Assessment",
          body: "Im Pflegealltag arbeitest du mit zwei unterschiedlichen Prüf-Tiefen: Beim **Screening** gehst du breit und schnell vor. Wenige Fragen oder Beobachtungen reichen, um zu entscheiden: Ist hier überhaupt ein Risiko oder ein Problem? Ein typisches Beispiel ist die erste Einschätzung: 'Ist der Bewohner in den letzten 12 Monaten gestürzt?' — wenn ja, dann folgt der nächste Schritt. Das **Assessment** greift dort, wo das Screening angeschlagen hat. Es ist standardisiert, umfassender und oft punktbewertet (z.B. Braden-Skala, Barthel-Index). Es beantwortet: Wie stark ist das Risiko? Wo liegen die Ursachen? Welche Ressourcen hat die Person? Das Ergebnis fließt direkt in die Pflegeplanung ein.",
          glossarBegriffe: ["Screening", "Assessment", "standardisiert", "Ressourcen"],
        },
        contentB1: {
          title: "Screening vs. Assessment",
          body: "Beim Pflegen gibt es zwei Arten zu prüfen: Das **Screening** ist kurz und schnell. Du stellst wenige Fragen. So findest du schnell heraus: Gibt es hier vielleicht ein Problem? Zum Beispiel: 'Ist der Bewohner im letzten Jahr gestürzt?' Wenn ja, machst du den nächsten Schritt. Das **Assessment** ist länger und genauer. Du füllst ein festes Formular aus. Du bekommst oft Punkte. Zum Beispiel die Braden-Skala für das Dekubitus-Risiko. Das Ergebnis sagt dir: Wie groß ist das Risiko? Was musst du planen? Das schreibst du dann in die Pflegeplanung.",
          glossarBegriffe: ["Screening", "Assessment"],
        },
      },
    },
    glossarBegriffe: ["Screening", "Assessment"],
    karteikarten: [
      {
        id: "ce02-assess-kk-01",
        vorderseite: "Was ist der Unterschied zwischen Screening und Assessment?",
        rueckseiteC1:
          "Screening = kurzes Such-Verfahren, wenige Items, filtert Risiko-Personen. Assessment = tiefe, standardisierte Einschätzung bei auffälligen Personen. Erst Screening, dann bei Bedarf Assessment.",
        rueckseiteB1:
          "Screening ist kurz und sucht breit. Es findet Menschen mit vielleicht einem Problem. Assessment ist lang und genau. Es prüft tief nach, wie groß das Problem ist.",
        tag: "pflege",
        kategorie: "fachbegriff",
        pruefungsrelevant: true,
        quelle: "DNQP-Verfahrensordnung (2024)",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: dnqp-grundlagen (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-dnqp",
    themaId: "assessments-expertenstandards",
    titel: "DNQP — Grundlagen und Rechtsstellung",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wer entscheidet eigentlich, was in der Pflege als 'richtig' gilt — zum Beispiel wie oft ein Patient umgelagert werden soll? Wer schreibt solche Regeln in Deutschland?",
      antwort:
        "Das DNQP (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege) an der Hochschule Osnabrück. Es entwickelt seit 1999 nationale Expertenstandards. Diese gelten juristisch als antizipiertes Sachverständigengutachten — Abweichung ohne Begründung kann als Fahrlässigkeit gewertet werden.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das DNQP (Deutsches Netzwerk für Qualitätsentwicklung in der Pflege) sitzt an der Hochschule Osnabrück. Es entwickelt seit 1999 nationale Expertenstandards — aktuell 12 Stück — die den allgemein anerkannten Stand der Pflegeforschung abbilden.",
      textB1:
        "Das DNQP ist eine Gruppe von Experten. Es sitzt in Osnabrück. Es schreibt seit 1999 die wichtigsten Pflege-Regeln in Deutschland. Diese Regeln heißen Expertenstandards. Es gibt aktuell 12 Stück.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-02",
        phase: 1,
        stepType: "text",
        bloomLevel: 1,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2024)", "§ 113a SGB XI"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-dnqp",
        tag: "pflege",
        displayFormat: "news",
        contentC1: {
          title: "Das DNQP — Steckbrief",
          body: "Das **Deutsche Netzwerk für Qualitätsentwicklung in der Pflege (DNQP)** wurde 1999 an der Hochschule Osnabrück gegründet. Sein Auftrag: evidenzbasierte Pflege-Regeln entwickeln, die bundesweit gelten. Pro Standard arbeitet eine Expertengruppe aus 8 bis 12 Pflegepraktikern und Pflegewissenschaftlern. Nach systematischer Literaturrecherche, Konsensuskonferenz und modellhafter Implementierung wird der Standard verabschiedet. Rechtsgrundlage für die Altenpflege: **§ 113a SGB XI** — Expertenstandards zur Sicherung der Pflegequalität. In der Rechtsprechung gelten Expertenstandards als **'antizipiertes Sachverständigengutachten'**. Heißt: Wer ohne Begründung gegen einen Standard handelt, gilt als fahrlässig. (DNQP 2024; § 113a SGB XI)",
          glossarBegriffe: ["DNQP", "Expertenstandard", "antizipiertes Sachverständigengutachten", "evidenzbasiert"],
        },
        contentB1: {
          title: "Das DNQP",
          body: "Das **DNQP** heißt: Deutsches Netzwerk für Qualitätsentwicklung in der Pflege. Es arbeitet seit 1999 an der Hochschule Osnabrück. Seine Aufgabe: Schreiben, wie gute Pflege in Deutschland aussehen muss. Eine Gruppe von 8 bis 12 Pflege-Experten arbeitet zusammen. Sie lesen viele Studien. Dann schreiben sie einen neuen **Expertenstandard**. Das ist eine Regel, die bundesweit gilt. Diese Regeln sind auch juristisch wichtig. Wenn du dich ohne Grund nicht daran hältst, gilt das als **Fahrlässigkeit**. Rechtsgrundlage: **§ 113a SGB XI** (Altenpflege). (DNQP 2024)",
          glossarBegriffe: ["DNQP", "Expertenstandard"],
        },
      },
    },
    glossarBegriffe: ["DNQP", "Expertenstandard", "antizipiertes Sachverständigengutachten"],
    karteikarten: [
      {
        id: "ce02-assess-kk-02",
        vorderseite: "Was ist das DNQP und welche juristische Bedeutung haben seine Expertenstandards?",
        rueckseiteC1:
          "DNQP = Deutsches Netzwerk für Qualitätsentwicklung in der Pflege, Hochschule Osnabrück, seit 1999. Expertenstandards gelten juristisch als antizipiertes Sachverständigengutachten. Rechtsgrundlagen: § 113a SGB XI (Altenpflege), § 137a SGB V.",
        rueckseiteB1:
          "DNQP ist die Pflege-Expertengruppe in Osnabrück. Sie schreibt seit 1999 die wichtigsten Pflege-Regeln. Die Regeln gelten auch juristisch. In der Altenpflege über § 113a SGB XI.",
        tag: "pflege",
        kategorie: "fachbegriff",
        pruefungsrelevant: true,
        quelle: "DNQP (2024); § 113a SGB XI",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: zwoelf-expertenstandards (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-zwoelf-standards",
    themaId: "assessments-expertenstandards",
    titel: "Die 12 DNQP-Expertenstandards",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wenn du an die größten Pflege-Themen denkst — wo passieren die häufigsten Probleme, für die man klare Regeln bräuchte? Nenne 4-5 Themen.",
      antwort:
        "Das DNQP hat 12 Standards zu den häufigsten Pflegerisiken entwickelt: Dekubitus, Sturz, Schmerz (akut + chronisch), Ernährung, Harnkontinenz, chronische Wunden, Entlassung, Demenz-Beziehung, Mobilität, Mundgesundheit, Hautintegrität.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Aktuell gibt es 12 nationale Expertenstandards: Dekubitus, Entlassungsmanagement, Schmerz akut, Sturz, Harnkontinenz, Chronische Wunden, Ernährung, Schmerz chronisch, Beziehungsgestaltung bei Demenz, Mobilität, Mundgesundheit, Hautintegrität.",
      textB1:
        "Es gibt 12 Expertenstandards. Themen: Dekubitus, Entlassung, Schmerz (akut und chronisch), Stürze, Harnkontinenz, Wunden, Ernährung, Beziehung bei Demenz, Mobilität, Mundgesundheit, Hautintegrität.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-03",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2024)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-zwoelf-standards",
        tag: "pflege",
        contentC1: {
          title: "Die 12 DNQP-Expertenstandards (Stand 2024)",
          body: "Das DNQP hat folgende 12 Expertenstandards veröffentlicht (Stand 2024): 1. **Dekubitusprophylaxe** (aktualisiert 2017/2024) 2. **Entlassungsmanagement** (aktualisiert 2019) 3. **Schmerzmanagement bei akuten Schmerzen** (2011) 4. **Sturzprophylaxe** (aktualisiert 2022) 5. **Förderung der Harnkontinenz** (aktualisiert 2014) 6. **Pflege von Menschen mit chronischen Wunden** (aktualisiert 2015) 7. **Ernährungsmanagement** (aktualisiert 2017) 8. **Schmerzmanagement bei chronischen Schmerzen** (2015) 9. **Beziehungsgestaltung bei Demenz** (2019) 10. **Erhaltung und Förderung der Mobilität** (2014) 11. **Mundgesundheit in der Pflege** (2022) 12. **Erhalt und Förderung der Hautintegrität** (2023). Jeder Standard wird alle 3-5 Jahre aktualisiert. (DNQP 2024)",
          glossarBegriffe: ["Prophylaxe", "Hautintegrität"],
        },
        contentB1: {
          title: "Die 12 Expertenstandards",
          body: "Das DNQP hat diese 12 Expertenstandards (Stand 2024): 1. **Dekubitusprophylaxe** (2017) 2. **Entlassungsmanagement** (2019) 3. **Schmerzmanagement akut** (2011) 4. **Sturzprophylaxe** (2022) 5. **Harnkontinenz** (2014) 6. **Chronische Wunden** (2015) 7. **Ernährungsmanagement** (2017) 8. **Schmerzmanagement chronisch** (2015) 9. **Beziehung bei Demenz** (2019) 10. **Mobilität** (2014) 11. **Mundgesundheit** (2022) 12. **Hautintegrität** (2023). Alle Standards werden nach 3-5 Jahren überprüft und neu geschrieben. (DNQP 2024)",
          glossarBegriffe: ["Prophylaxe", "Hautintegrität"],
        },
      },
    },
    glossarBegriffe: ["Prophylaxe", "Hautintegrität"],
    karteikarten: [
      {
        id: "ce02-assess-kk-03",
        vorderseite: "Wie viele DNQP-Expertenstandards gibt es aktuell? Nenne 6 davon.",
        rueckseiteC1:
          "12 Standards. Beispiele: Dekubitus (2017), Sturz (2022), Schmerz akut (2011), Schmerz chronisch (2015), Harnkontinenz (2014), Ernährungsmanagement (2017), Chronische Wunden (2015), Beziehungsgestaltung Demenz (2019), Mobilität (2014), Mundgesundheit (2022), Hautintegrität (2023), Entlassungsmanagement (2019).",
        rueckseiteB1:
          "12 Expertenstandards vom DNQP. Neueste: Hautintegrität (2023), Mundgesundheit (2022), Sturz (2022). Alle paar Jahre werden sie neu geschrieben.",
        tag: "pflege",
        kategorie: "fakt",
        pruefungsrelevant: true,
        quelle: "DNQP (2024)",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: s-p-e-struktur (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-spe",
    themaId: "assessments-expertenstandards",
    titel: "S-P-E-Struktur nach Donabedian",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wenn du die Qualität einer Pflegestation bewerten willst — reicht es zu fragen 'Geht es den Bewohnern gut?' Oder musst du auch andere Dinge prüfen? Welche wären das?",
      antwort:
        "Nein — gute Qualität braucht drei Perspektiven: Struktur (Personal, Material, Qualifikation), Prozess (Abläufe, Maßnahmen) und Ergebnis (wurde das Ziel erreicht?). Alle drei sind nötig — das ist das S-P-E-Modell nach Donabedian 1966.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Jeder Expertenstandard hat eine S-P-E-Struktur nach Donabedian (1966): S = Struktur (was ist vorhanden? Personal, Wissen, Material), P = Prozess (was wird getan? Ablauf, Maßnahmen), E = Ergebnis (was kommt raus? Zielerreichung).",
      textB1:
        "Jeder Expertenstandard hat 3 Teile: S = Struktur (was gibt es? Personal, Material), P = Prozess (was tun wir? Abläufe), E = Ergebnis (was kommt heraus? Ist das Ziel erreicht?). Das Modell stammt von Donabedian (1966).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-04",
        phase: 1,
        stepType: "diagram",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Donabedian A. (1966)", "DNQP (2024)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-spe",
        tag: "pflege",
        contentC1: {
          title: "S-P-E-Struktur nach Donabedian",
          body: "Die **S-P-E-Struktur** geht auf Avedis Donabedian zurück (1966, Milbank Memorial Fund Quarterly). Er entwickelte dieses Dreiecks-Modell zur Bewertung von Gesundheitsversorgung. Das DNQP hat es auf Expertenstandards übertragen: **S (Struktur):** Voraussetzungen der Einrichtung — Qualifikation der Pflegefachkraft, vorhandene Assessmentinstrumente, Hilfsmittel, Verfahrensregelungen. Beispiel (Dekubitus): 'Die Einrichtung stellt sicher, dass qualifizierte PFK vorhanden sind.' **P (Prozess):** Konkretes Handeln — was wird getan? Wann? Wie? Von wem? Beispiel: 'Die PFK führt das Risiko-Assessment durch.' **E (Ergebnis):** Überprüfbares Resultat — wurde das Ziel erreicht? Beispiel: 'Eine aktuelle Einschätzung des Dekubitusrisikos liegt vor.' Jedes der 6 Standardkriterien hat S1/P1/E1, S2/P2/E2 usw. (Donabedian 1966; DNQP 2024)",
          glossarBegriffe: ["S-P-E-Struktur", "Struktur", "Prozess", "Ergebnis"],
        },
        contentB1: {
          title: "S-P-E-Struktur",
          body: "Die **S-P-E-Struktur** kommt von Avedis Donabedian (1966). Das DNQP nutzt sie für alle Expertenstandards. **S = Struktur:** Was ist da? Welches Personal? Welche Hilfsmittel? Welches Wissen? Beispiel: Eine Pflegefachkraft ist vorhanden. **P = Prozess:** Was wird getan? Zum Beispiel: Die Pflegefachkraft macht das Assessment. **E = Ergebnis:** Was kommt heraus? Zum Beispiel: Es gibt eine aktuelle Einschätzung des Risikos. Jeder Expertenstandard hat 6 Kriterien. Jedes Kriterium hat diese 3 Teile: S1/P1/E1, dann S2/P2/E2 und so weiter. (Donabedian 1966; DNQP 2024)",
          glossarBegriffe: ["S-P-E-Struktur"],
        },
      },
    },
    glossarBegriffe: ["S-P-E-Struktur"],
    karteikarten: [
      {
        id: "ce02-assess-kk-04",
        vorderseite: "Was bedeutet die S-P-E-Struktur in Expertenstandards? Wer hat das Modell entwickelt?",
        rueckseiteC1:
          "S = Struktur (Voraussetzungen, Ressourcen), P = Prozess (Handeln), E = Ergebnis (Zielerreichung). Modell von Avedis Donabedian (1966). Jedes der 6 Standardkriterien hat S/P/E: S1/P1/E1 bis S6/P6/E6.",
        rueckseiteB1:
          "S = Struktur (was ist da?), P = Prozess (was wird getan?), E = Ergebnis (was kommt raus?). Von Donabedian (1966). Jedes Kriterium im Standard hat alle 3.",
        tag: "pflege",
        kategorie: "fachbegriff",
        pruefungsrelevant: true,
        quelle: "Donabedian A. (1966); DNQP (2024)",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: braden-skala (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-braden",
    themaId: "assessments-expertenstandards",
    titel: "Braden-Skala",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Welche 6 Dinge würdest du an einem Patienten prüfen, um zu entscheiden: Ist er in Gefahr, einen Dekubitus zu bekommen? Denk an Risikofaktoren.",
      antwort:
        "Die Braden-Skala (Braden & Bergstrom 1987) prüft 6 Subskalen: sensorische Wahrnehmung, Hautfeuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Summe 6-23. Niedrige Punktzahl = hohes Risiko.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die Braden-Skala (Braden & Bergstrom 1987) prüft 6 Subskalen: sensorische Wahrnehmung, Hautfeuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Jede Subskala bekommt 1-4 Punkte. Gesamtpunkte: 6-23. Je niedriger, desto höher das Risiko.",
      textB1:
        "Die Braden-Skala prüft 6 Dinge: Wahrnehmung, Hautfeuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung. Jedes wird mit 1-4 Punkten bewertet. Summe: 6 bis 23. Wichtig: Wenig Punkte = hohes Risiko für Dekubitus. (Braden & Bergstrom 1987)",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-05",
        phase: 1,
        stepType: "labelImage",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Braden B.J., Bergstrom N. (1987)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-braden",
        tag: "pflege",
        contentC1: {
          title: "Braden-Skala",
          body: "Die **Braden-Skala** wurde 1987 von Barbara Braden und Nancy Bergstrom in den USA entwickelt (Rehabilitation Nursing 12(1)). Sie ist das weltweit am häufigsten eingesetzte Dekubitus-Risikoassessment. **Die 6 Subskalen:** 1. **Sensorische Wahrnehmung** (kann Patient Druck/Schmerz wahrnehmen?) 2. **Hautfeuchtigkeit** (wie oft ist die Haut feucht?) 3. **Aktivität** (wie viel bewegt sich der Patient aus dem Bett heraus?) 4. **Mobilität** (wie viel kann er die Lage selbst ändern?) 5. **Ernährung** (wie ist der Ernährungszustand?) 6. **Reibung und Scherkräfte** (rutscht der Patient, braucht er Hilfe beim Positionieren?) Bewertung: 1 (am schlechtesten) bis 4 (am besten) pro Subskala, außer 'Reibung' (nur 1-3). **Gesamt: 6-23 Punkte**. Ein Wert ≤18 gilt oft als Risiko-Schwelle — aber der DNQP-Standard empfiehlt die **klinische Einschätzung** als Hauptinstrument, nicht eine starre Punktgrenze. (Braden & Bergstrom 1987; DNQP 2024)",
          glossarBegriffe: ["Braden-Skala", "Subskala", "Scherkräfte", "klinische Einschätzung"],
        },
        contentB1: {
          title: "Braden-Skala",
          body: "Die **Braden-Skala** haben Barbara Braden und Nancy Bergstrom 1987 in den USA entwickelt. Man benutzt sie weltweit, um das Dekubitus-Risiko zu prüfen. Die 6 Punkte sind: 1. **Wahrnehmung** (Spürt der Patient Druck?) 2. **Hautfeuchtigkeit** (Ist die Haut oft nass?) 3. **Aktivität** (Steht er manchmal auf?) 4. **Mobilität** (Kann er sich allein drehen?) 5. **Ernährung** (Isst er genug?) 6. **Reibung** (Rutscht er? Braucht er Hilfe beim Positionieren?) Jeder Punkt bekommt 1-4 Punkte (Reibung nur 1-3). Summe: 6 bis 23. **Wenig Punkte = hohes Risiko**. Aber: Das DNQP sagt: Die **klinische Einschätzung** der Pflegefachkraft ist wichtiger als die Punktzahl allein.",
          glossarBegriffe: ["Braden-Skala", "klinische Einschätzung"],
        },
      },
    },
    glossarBegriffe: ["Braden-Skala", "Subskala", "Scherkräfte", "klinische Einschätzung"],
    karteikarten: [
      {
        id: "ce02-assess-kk-05",
        vorderseite: "Nenne die 6 Subskalen der Braden-Skala. Wie wird das Risiko interpretiert?",
        rueckseiteC1:
          "Sensorische Wahrnehmung, Hautfeuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung/Scherkräfte. Jede 1-4 Punkte (Reibung 1-3). Summe 6-23. Niedrige Punktzahl = hohes Dekubitus-Risiko. (Braden & Bergstrom 1987)",
        rueckseiteB1:
          "6 Subskalen: Wahrnehmung, Hautfeuchtigkeit, Aktivität, Mobilität, Ernährung, Reibung. Jede 1-4 Punkte. Summe 6-23. Wenig Punkte = hohes Risiko.",
        tag: "pflege",
        kategorie: "assessment",
        pruefungsrelevant: true,
        quelle: "Braden B.J., Bergstrom N. (1987)",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: barthel-index (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-barthel",
    themaId: "assessments-expertenstandards",
    titel: "Barthel-Index",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wie würdest du messen, wie selbstständig ein 82-jähriger Bewohner im Alltag noch ist? Welche Tätigkeiten müsste er können? Nenne 5-6 Bereiche.",
      antwort:
        "Der Barthel-Index (Mahoney & Barthel 1965) misst Selbstständigkeit bei 10 Alltagsaktivitäten: Essen, Baden, Körperpflege, Ankleiden, Stuhl-/Harnkontrolle, WC, Transfer, Gehen, Treppensteigen. Skala 0-100. Hoch = selbstständig.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Barthel-Index (Mahoney & Barthel 1965) misst die Selbstständigkeit bei 10 Alltagsaktivitäten (Essen, Anziehen, Körperpflege, WC, Baden, Transfer, Treppensteigen, Gehen, Blasen-/Stuhlkontrolle). Punktesumme 0-100. Je höher, desto selbstständiger.",
      textB1:
        "Der Barthel-Index prüft, wie gut jemand im Alltag klarkommt. Es gibt 10 Bereiche: Essen, Anziehen, Waschen, Toilette, Gehen und mehr. Summe: 0-100 Punkte. Viel Punkte = selbstständig. (Mahoney & Barthel 1965)",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-06",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Mahoney F.I., Barthel D.W. (1965)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-barthel",
        tag: "pflege",
        contentC1: {
          title: "Barthel-Index",
          body: "Der **Barthel-Index** wurde 1965 von Florence Mahoney und Dorothea Barthel entwickelt (Maryland State Medical Journal 14). Ursprünglicher Zweck: Rehabilitationsverlauf nach Schlaganfall messen. Heute global eingesetzt zur Beurteilung der Selbstständigkeit im Alltag (Activities of Daily Living, ADL). **Die 10 Items:** 1. Essen (0/5/10) 2. Baden (0/5) 3. Körperpflege (0/5) 4. An- und Auskleiden (0/5/10) 5. Stuhlkontrolle (0/5/10) 6. Harnkontrolle (0/5/10) 7. Toilettenbenutzung (0/5/10) 8. Transfer Bett → Stuhl (0/5/10/15) 9. Mobilität/Gehen (0/5/10/15) 10. Treppensteigen (0/5/10). **Gesamtsumme: 0-100 Punkte**. Orientierungswerte: 0-30 = schwere Pflegebedürftigkeit, 35-80 = mittelschwer, 85-95 = leicht, 100 = selbstständig. Wichtig: Der Index misst **Leistung** (was der Patient tut), nicht **Kapazität** (was er theoretisch könnte). (Mahoney & Barthel 1965)",
          glossarBegriffe: ["Barthel-Index", "Activities of Daily Living", "ADL", "Transfer"],
        },
        contentB1: {
          title: "Barthel-Index",
          body: "Der **Barthel-Index** kommt von Mahoney und Barthel aus dem Jahr 1965. Am Anfang hat man damit Schlaganfall-Patienten geprüft. Heute benutzt man ihn weltweit, um zu messen, wie selbstständig ein Mensch im Alltag ist. **Die 10 Bereiche:** 1. Essen 2. Baden 3. Körperpflege (Kämmen, Zähne putzen) 4. An- und Auskleiden 5. Stuhlkontrolle 6. Harnkontrolle 7. Toilette benutzen 8. Vom Bett in den Stuhl (Transfer) 9. Gehen oder Rollstuhl fahren 10. Treppensteigen. Jeder Bereich hat 0, 5, 10 oder 15 Punkte. Gesamt: 0-100 Punkte. 100 = alles allein. 0 = braucht bei allem Hilfe. Wichtig: Der Index misst, **was der Patient wirklich tut** — nicht, was er theoretisch könnte.",
          glossarBegriffe: ["Barthel-Index", "ADL", "Transfer"],
        },
      },
    },
    glossarBegriffe: ["Barthel-Index", "Activities of Daily Living", "ADL"],
    karteikarten: [
      {
        id: "ce02-assess-kk-06",
        vorderseite: "Was misst der Barthel-Index? Was ist die Punkteskala?",
        rueckseiteC1:
          "Körperliche Selbstständigkeit bei 10 Alltagsaktivitäten (ADLs): Essen, Baden, Körperpflege, Ankleiden, Stuhl-/Harnkontrolle, WC, Transfer, Gehen, Treppen. Skala 0-100. 100 = vollständig selbstständig, 0 = vollständig abhängig. Misst Leistung, nicht Kapazität. (Mahoney & Barthel 1965)",
        rueckseiteB1:
          "10 Alltagsbereiche (Essen, Waschen, Gehen etc.). Summe: 0-100. Viel Punkte = selbstständig. Er misst, was der Patient wirklich tut.",
        tag: "pflege",
        kategorie: "assessment",
        pruefungsrelevant: true,
        quelle: "Mahoney F.I., Barthel D.W. (1965)",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: nrs-schmerzskala (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-nrs",
    themaId: "assessments-expertenstandards",
    titel: "NRS und Schmerzskalen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Schmerzen sind unsichtbar. Wie fragst du einen Patienten, wie stark seine Schmerzen sind — so, dass die Antwort auch für deinen Kollegen in der nächsten Schicht verständlich ist?",
      antwort:
        "Mit der NRS: Patient gibt Zahl von 0 bis 10 an. 0 = kein Schmerz, 10 = stärkster vorstellbarer Schmerz. Einfach, schnell, dokumentierbar — auch telefonisch nutzbar. Für Demenz: BESD. Für Kinder: Smiley-Skala.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Die NRS (Numeric Rating Scale) ist die Standard-Schmerzskala: Patient gibt Zahl von 0 bis 10 an (0 = kein Schmerz, 10 = stärkster vorstellbarer Schmerz). Einfach, schnell, vergleichbar, auch telefonisch nutzbar. Empfohlen ab Schulalter.",
      textB1:
        "Die NRS ist die wichtigste Schmerzskala. Der Patient sagt eine Zahl von 0 bis 10. 0 = kein Schmerz. 10 = schlimmster Schmerz, den man sich vorstellen kann. Einfach, schnell. Gut ab Schulalter.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-07",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["DNQP-Expertenstandard Schmerzmanagement (2011/2015)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-nrs",
        tag: "pflege",
        contentC1: {
          title: "NRS und Schmerzskalen",
          body: "Die **NRS (Numeric Rating Scale)** ist die international am häufigsten eingesetzte Schmerzskala für Erwachsene und Jugendliche. Der Patient gibt auf einer Skala von 0 bis 10 an, wie stark sein Schmerz aktuell ist: **0** = kein Schmerz, **1-3** = leichter Schmerz, **4-6** = mittlerer Schmerz, **7-10** = starker Schmerz. **Wann welche Skala?** NRS (0-10): Erwachsene, Jugendliche, ältere Menschen mit erhaltener Kommunikation. VAS (Visuelle Analogskala): Wenn Patient Zahlen schwer einschätzen kann. Smiley-/Gesichter-Skala: Kinder ab ca. 4 Jahren. BESD (Beurteilung von Schmerzen bei Demenz): bei schwerer Demenz — Pflegekraft bewertet Beobachtung. Der DNQP-Expertenstandard Schmerzmanagement (akut 2011, chronisch 2015) fordert regelmäßiges Schmerzassessment mit einer passenden Skala. (DNQP 2011/2015)",
          glossarBegriffe: ["NRS", "VAS", "BESD", "Numeric Rating Scale"],
        },
        contentB1: {
          title: "NRS und Schmerzskalen",
          body: "Die **NRS** ist die wichtigste Schmerzskala. Der Patient gibt eine Zahl von 0 bis 10 an: **0** = kein Schmerz, **1-3** = wenig Schmerz, **4-6** = mittlerer Schmerz, **7-10** = starker Schmerz. Aber nicht jeder kann die NRS gut nutzen. Es gibt andere Skalen: **VAS**: Eine Linie. Der Patient zeigt mit einem Regler, wie stark der Schmerz ist. **Smiley-Skala**: Für Kinder. Verschiedene Gesichter von lachend bis weinend. **BESD**: Für Menschen mit starker Demenz. Die Pflegekraft schaut und bewertet selbst. Der DNQP sagt: Regelmäßig nach Schmerzen fragen. (DNQP 2011/2015)",
          glossarBegriffe: ["NRS", "BESD"],
        },
      },
    },
    glossarBegriffe: ["NRS", "VAS", "BESD", "Numeric Rating Scale"],
    karteikarten: [
      {
        id: "ce02-assess-kk-07",
        vorderseite: "Was ist die NRS? Welche Alternativen gibt es für Kinder, Demenz, Beatmung?",
        rueckseiteC1:
          "NRS = Numeric Rating Scale, 0 (kein Schmerz) bis 10 (stärkster Schmerz). Alternativen: VAS (visuelle Linie), Smiley-/Gesichter-Skala (Kinder ab ~4 J.), BESD (Beurteilung Schmerz bei Demenz), BPS (Behavioral Pain Scale — Beatmung).",
        rueckseiteB1:
          "NRS: Patient sagt Zahl von 0 bis 10. Für Kinder: Smiley-Skala. Für Demenz: BESD. Für Beatmung: BPS.",
        tag: "pflege",
        kategorie: "assessment",
        pruefungsrelevant: true,
        quelle: "DNQP-Expertenstandard Schmerzmanagement (2011/2015)",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: mna-ernaehrung (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-mna",
    themaId: "assessments-expertenstandards",
    titel: "MNA — Mini Nutritional Assessment",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Eine 85-jährige Bewohnerin hat in 3 Monaten 4 kg abgenommen. Ist das normal? Wie findest du heraus, ob sie eine Mangelernährung hat? Welche Dinge würdest du prüfen?",
      antwort:
        "Ungewollter Gewichtsverlust von >5 % in 3 Monaten ist ein klares Warnsignal. Das MNA (Guigoz 1994) prüft zweistufig: MNA-SF (6 Items, 0-14) als Screening, dann bei Auffälligkeit das volle MNA (18 Items, 0-30).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Das MNA (Mini Nutritional Assessment, Guigoz 1994) ist das Standard-Instrument zur Früherkennung von Mangelernährung bei älteren Menschen. Zwei Stufen: MNA-SF (Short Form, 6 Items, 0-14 Punkte) als Screening — dann bei Auffälligkeit das volle MNA.",
      textB1:
        "Das MNA ist ein Test für Mangelernährung bei älteren Menschen. Es gibt zwei Teile: Erst die kurze Form (MNA-SF, 6 Fragen, 0-14 Punkte). Wenn da ein Risiko rauskommt, dann das lange MNA. (Guigoz 1994)",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-08",
        phase: 1,
        stepType: "flipcard",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["Guigoz Y., Vellas B., Garry P.J. (1994)", "DNQP-Expertenstandard Ernährungsmanagement (2017)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-mna",
        tag: "pflege",
        contentC1: {
          title: "MNA — Mini Nutritional Assessment",
          body: "Das **Mini Nutritional Assessment (MNA)** wurde 1994 von Yves Guigoz und Bruno Vellas entwickelt (Facts and Research in Gerontology). Es ist speziell für Menschen ab 65 Jahren validiert. **Zweistufiges Verfahren:** 1. **MNA-SF (Short Form, Screening):** 6 Fragen zu Appetit, Gewichtsverlust, Mobilität, Stress/Krankheit, Neuropsychologie, BMI oder Wadenumfang. **Punkteskala 0-14**: 12-14 = normaler Ernährungszustand, 8-11 = Risiko für Mangelernährung, 0-7 = Mangelernährung. 2. **MNA (Full Assessment):** Falls Screening ≤11 — 12 weitere Fragen zu Ernährungsgewohnheiten, Selbsteinschätzung, anthropometrischen Maßen. Gesamt: 0-30 Punkte. Das MNA ist im DNQP-Expertenstandard **Ernährungsmanagement** (2017) als etabliertes Assessment genannt. (Guigoz 1994; DNQP 2017)",
          glossarBegriffe: ["MNA", "Mangelernährung", "BMI"],
        },
        contentB1: {
          title: "MNA",
          body: "Das **MNA** heißt: Mini Nutritional Assessment. Es kommt von Guigoz aus dem Jahr 1994. Es ist ein Test für ältere Menschen (ab 65 Jahren). Es gibt **zwei Teile:** 1. **MNA-SF (kurz):** 6 Fragen über Appetit, Gewichtsverlust, Mobilität, Krankheiten, geistigen Zustand und BMI. Punkte: 0-14: 12-14 = alles gut, 8-11 = Risiko, 0-7 = Mangelernährung. 2. **MNA (lang):** Wenn die kurze Form schlecht ausgeht, machst du den langen Test. 12 weitere Fragen. Gesamt: 0-30 Punkte. Das MNA steht im Expertenstandard **Ernährungsmanagement** vom DNQP (2017).",
          glossarBegriffe: ["MNA", "Mangelernährung"],
        },
      },
    },
    glossarBegriffe: ["MNA", "Mangelernährung"],
    karteikarten: [
      {
        id: "ce02-assess-kk-08",
        vorderseite: "Was ist das MNA? Welche zwei Stufen hat es und wie werden die Werte interpretiert?",
        rueckseiteC1:
          "Mini Nutritional Assessment (Guigoz 1994), validiert für Menschen ≥65 Jahre. MNA-SF (Screening, 6 Items, 0-14 Punkte): 12-14 normal, 8-11 Risiko, 0-7 Mangelernährung. Bei Auffälligkeit volles MNA (18 Items, 0-30).",
        rueckseiteB1:
          "MNA ist ein Test für Mangelernährung bei älteren Menschen. Erst kurzer Test (MNA-SF, 0-14). Wenn Risiko: langer Test (0-30). Von Guigoz (1994).",
        tag: "pflege",
        kategorie: "assessment",
        pruefungsrelevant: true,
        quelle: "Guigoz Y., Vellas B., Garry P.J. (1994); DNQP (2017)",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: timed-up-and-go (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-tug",
    themaId: "assessments-expertenstandards",
    titel: "Timed-Up-and-Go-Test (TUG)",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wie findest du schnell heraus, ob ein 80-jähriger Bewohner sturzgefährdet ist, ohne aufwändige Geräte? Was würdest du ihn tun lassen?",
      antwort:
        "Der TUG: Patient steht auf, geht 3 Meter, dreht um, kommt zurück, setzt sich. Zeit stoppen. Unter 10 Sekunden = normal. Über 20 Sekunden = erhöhte Sturzgefahr. (Podsiadlo & Richardson 1991)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Der Timed-Up-and-Go-Test (TUG) von Podsiadlo & Richardson (1991) ist ein 3-Meter-Gehtest: Patient steht aus Stuhl auf, geht 3 Meter, dreht um, geht zurück, setzt sich. Zeit wird gestoppt. Über 20 Sekunden = erhöhte Sturzgefahr.",
      textB1:
        "Der TUG (Timed-Up-and-Go) ist ein einfacher Sturztest. Der Patient steht auf, geht 3 Meter, dreht um, kommt zurück und setzt sich. Du stoppst die Zeit. Über 20 Sekunden = höhere Sturzgefahr. (Podsiadlo & Richardson 1991)",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-09",
        phase: 1,
        stepType: "timeline",
        bloomLevel: 3,
        kompetenzbereich: "I.1",
        quellen: ["Podsiadlo D., Richardson S. (1991)", "DNQP (2022)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-tug",
        tag: "pflege",
        contentC1: {
          title: "Timed-Up-and-Go-Test (TUG)",
          body: "Der **Timed 'Up & Go' Test (TUG)** wurde 1991 von Diane Podsiadlo und Sandra Richardson in Kanada entwickelt (Journal of the American Geriatrics Society 39(2)). **Durchführung:** 1. Patient sitzt auf Stuhl mit Armlehnen (Sitzhöhe ca. 45 cm) 2. Auf Kommando 'Los' aufstehen 3. 3 Meter geradeaus in normalem Tempo gehen (Markierung am Boden) 4. Umdrehen 5. Zurückgehen und sich wieder setzen. **Zeit wird gemessen.** Hilfsmittel (Gehstock, Rollator) sind erlaubt und werden dokumentiert. **Orientierungswerte:** <10 Sek. = normale Mobilität, 10-19 Sek. = leicht eingeschränkt, 20-29 Sek. = erhöhtes Sturzrisiko, ≥30 Sek. = stark eingeschränkt. Im DNQP-Expertenstandard Sturzprophylaxe (2022) ist TUG als geeignetes Assessment-Instrument empfohlen. (Podsiadlo & Richardson 1991; DNQP 2022)",
          glossarBegriffe: ["Timed-Up-and-Go", "Sturzrisiko"],
        },
        contentB1: {
          title: "Timed-Up-and-Go-Test (TUG)",
          body: "Der **TUG-Test** gibt es seit 1991 (Podsiadlo & Richardson aus Kanada). **So geht der Test:** 1. Der Patient sitzt auf einem Stuhl mit Armlehnen 2. Auf 'Los' steht er auf 3. Er geht 3 Meter geradeaus (Markierung am Boden) 4. Er dreht um 5. Er geht zurück und setzt sich wieder. **Du stoppst die Zeit.** Gehstock oder Rollator sind erlaubt — schreib das auf. **Ergebnisse:** Unter 10 Sekunden: Alles gut. 10-19 Sekunden: Geht so. 20-29 Sekunden: Sturzgefahr. 30 Sekunden und mehr: Sehr hohe Sturzgefahr. Der **DNQP-Expertenstandard Sturzprophylaxe** (2022) empfiehlt diesen Test.",
          glossarBegriffe: ["Timed-Up-and-Go", "Sturzrisiko"],
        },
      },
    },
    glossarBegriffe: ["Timed-Up-and-Go", "Sturzrisiko"],
    karteikarten: [
      {
        id: "ce02-assess-kk-09",
        vorderseite: "Was ist der TUG-Test? Wie wird er durchgeführt, ab wie vielen Sekunden besteht Sturzrisiko?",
        rueckseiteC1:
          "Timed-Up-and-Go: Patient steht aus Stuhl auf, geht 3 m, dreht um, geht zurück, setzt sich. Zeit messen. <10 Sek. normal, 10-19 grenzwertig, 20-29 erhöhtes Sturzrisiko, ≥30 stark eingeschränkt. Hilfsmittel erlaubt + dokumentieren. (Podsiadlo & Richardson 1991)",
        rueckseiteB1:
          "TUG: Aufstehen, 3 Meter gehen, umdrehen, zurück, hinsetzen. Zeit stoppen. Über 20 Sekunden = Sturzgefahr. Über 30 = sehr hohe Sturzgefahr.",
        tag: "pflege",
        kategorie: "assessment",
        pruefungsrelevant: true,
        quelle: "Podsiadlo D., Richardson S. (1991)",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: assessments-zuordnung (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-zuordnung",
    themaId: "assessments-expertenstandards",
    titel: "Assessment-Zuordnung zum Pflegeproblem",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Du hast einen neu aufgenommenen 84-jährigen Bewohner: Schlaganfall vor 2 Monaten, 6 kg Gewichtsverlust, Schmerzen im Rücken, geht unsicher. Welche 4 Assessments machst du — und in welcher Reihenfolge?",
      antwort:
        "Pflegeprozess-Logik: Erst Informationen sammeln. Dann: (1) Barthel (Selbstständigkeit nach Schlaganfall), (2) MNA/MNA-SF (Gewichtsverlust), (3) NRS (Rückenschmerz), (4) TUG (Gangunsicherheit). Braden je nach Mobilität. Nicht alle auf einmal.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Assessments passen zu bestimmten Pflegeproblemen: Braden → Dekubitusrisiko, Barthel → Selbstständigkeit, NRS → Schmerz, MNA → Mangelernährung, TUG → Sturzrisiko/Mobilität. Bei mehreren Problemen: immer mit dem Pflegeprozess strukturieren (Info sammeln zuerst).",
      textB1:
        "Jedes Assessment hat ein Thema: Braden = Dekubitus. Barthel = Selbstständigkeit. NRS = Schmerz. MNA = Essen. TUG = Stürze. Bei einem Patienten mit vielen Problemen: Erst alle Infos sammeln, dann die passenden Assessments machen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-10",
        phase: 1,
        stepType: "matrix",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2024)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-zuordnung",
        tag: "pflege",
        contentC1: {
          title: "Assessment-Zuordnung zum Pflegeproblem",
          body: "Die Assessment-Wahl folgt dem **Pflegeprozess**: Zuerst sammelst du Informationen (Anamnese, Beobachtung, Dokumentation), dann entscheidest du, welche standardisierten Assessments nötig sind. **Zuordnung Assessment → Pflegeproblem:** Braden-Skala = Dekubitusrisiko (DNQP Dekubitusprophylaxe 2017/2024). Barthel-Index = ADL-Selbstständigkeit. NRS = Schmerzintensität (DNQP Schmerzmanagement 2011/2015). MNA/MNA-SF = Mangelernährungsrisiko (DNQP Ernährungsmanagement 2017). TUG = Sturzrisiko/Mobilität (DNQP Sturzprophylaxe 2022). BESD = Schmerz bei Demenz. Tinetti-Test = Gleichgewicht/Gang. **Vorgehen bei komplexen Fällen:** Informationen zuerst strukturieren (z.B. nach ATLs), dann die 3-4 relevantesten Assessments durchführen. Nicht alle auf einmal — das überfordert den Patienten. (DNQP 2024)",
          glossarBegriffe: ["Anamnese", "Pflegeprozess", "Assessmentauswahl"],
        },
        contentB1: {
          title: "Welches Assessment für welches Problem?",
          body: "Bei der Auswahl von Assessments hilft der **Pflegeprozess**: Erst Informationen sammeln, dann die passenden Tests machen. **Welches Assessment für welches Problem?** Braden = Dekubitus-Risiko. Barthel = Selbstständigkeit im Alltag. NRS = Schmerz-Stärke. MNA = Mangelernährungs-Risiko. TUG = Sturz-Risiko, Mobilität. BESD = Schmerz bei Demenz. Wenn ein Patient **viele Probleme** hat: Nicht alle Tests auf einmal. Sammle erst Informationen. Dann wähle die **3-4 wichtigsten** Tests. Sonst wird der Patient überfordert. (DNQP 2024)",
          glossarBegriffe: ["Pflegeprozess"],
        },
      },
    },
    glossarBegriffe: ["Anamnese", "Pflegeprozess"],
    karteikarten: [
      {
        id: "ce02-assess-kk-10",
        vorderseite: "Ordne zu: Welches Assessment misst Dekubitusrisiko, Sturzrisiko, Ernährungsstatus, Schmerz, Selbstständigkeit im Alltag?",
        rueckseiteC1:
          "Braden-Skala = Dekubitus-Risiko. TUG = Sturz-Risiko/Mobilität. MNA (MNA-SF) = Mangelernährungsrisiko. NRS = Schmerzintensität. Barthel-Index = ADL-Selbstständigkeit.",
        rueckseiteB1:
          "Braden = Dekubitus. TUG = Sturz. MNA = Essen. NRS = Schmerz. Barthel = Selbstständigkeit.",
        tag: "pflege",
        kategorie: "assessment",
        pruefungsrelevant: true,
        quelle: "DNQP (2024)",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: klassifikationssysteme (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-klassifikationen",
    themaId: "assessments-expertenstandards",
    titel: "Pflegeklassifikationssysteme (NANDA-I / NIC / NOC)",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wenn zwei Pflegekräfte den gleichen Patienten beschreiben — warum würden sie wahrscheinlich unterschiedliche Worte benutzen? Und warum ist das ein Problem, z.B. beim Pflegeüberleitungsbogen?",
      antwort:
        "Ohne einheitliche Fachsprache sind Pflegedokumentationen nicht vergleichbar, Fehler entstehen, Forschung wird schwerer. Klassifikationssysteme wie NANDA-I (Diagnosen), NIC (Maßnahmen), NOC (Outcomes) lösen das.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Klassifikationssysteme sind einheitliche Fachsprachen: NANDA-I (Pflegediagnosen), NIC (Interventionen), NOC (Outcomes), ICNP (ICN-Klassifikation), ENP (European Nursing care Pathways). Ziel: Gleiche Begriffe überall — vergleichbar, dokumentierbar.",
      textB1:
        "Klassifikationssysteme sind gleiche Wörter für alle. Beispiele: NANDA-I (für Diagnosen), NIC (für Maßnahmen), NOC (für Ergebnisse), ENP (Pflegepfade). So reden alle dieselbe Sprache.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-11",
        phase: 1,
        stepType: "text",
        bloomLevel: 2,
        kompetenzbereich: "I.1",
        quellen: ["NANDA International (2021-2023)", "ICN (2021)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-klassifikationen",
        tag: "pflege",
        displayFormat: "glossary",
        contentC1: {
          title: "Pflegeklassifikationssysteme",
          body: "**Klassifikationssysteme** sind strukturierte Fachvokabulare, die in der Pflegedokumentation genutzt werden. **Die wichtigsten Systeme:** **NANDA-I** (NANDA International, seit 1982) — Pflegediagnosen. Aktuelle Version 2021-2023 enthält ~250 Diagnosen (z.B. 'Akute Schmerzen', 'Sturzgefahr'). **NIC** (Nursing Interventions Classification, University of Iowa) — rund 554 Pflegemaßnahmen. **NOC** (Nursing Outcomes Classification) — messbare Pflegeergebnisse. Häufig zusammen mit NANDA und NIC als 'NNN-Verbindung' genutzt. **ICNP** (International Classification for Nursing Practice, vom ICN) — globale Terminologie. **ENP** (European Nursing care Pathways) — im deutschsprachigen Raum verbreitet. In Deutschland: keine gesetzliche Pflicht zu einem bestimmten System. (NANDA International 2021-2023; ICN 2021)",
          glossarBegriffe: ["NANDA-I", "NIC", "NOC", "ICNP", "ENP", "Pflegediagnose"],
        },
        contentB1: {
          title: "Pflegeklassifikationssysteme",
          body: "**Klassifikationssysteme** sind gleiche Wörter für Pflege. Alle Pflegekräfte benutzen die gleichen Begriffe. So kann man Pflege **vergleichen** und in Studien untersuchen. **Die wichtigsten:** **NANDA-I** (seit 1982, USA) — **Pflegediagnosen**. Etwa 250 Diagnosen, z.B. 'Sturzgefahr' oder 'Akute Schmerzen'. **NIC** — rund 554 **Pflegemaßnahmen**. **NOC** — **Pflegeergebnisse**, die man messen kann. **ICNP** — Welt-Terminologie vom **ICN**. **ENP** — European Nursing care Pathways, im deutschsprachigen Raum oft genutzt. In Deutschland ist **kein System Pflicht**. Jede Einrichtung darf wählen. (NANDA International 2021-2023)",
          glossarBegriffe: ["NANDA-I", "NIC", "NOC"],
        },
      },
    },
    glossarBegriffe: ["NANDA-I", "NIC", "NOC", "ICNP", "ENP", "Pflegediagnose"],
    karteikarten: [
      {
        id: "ce02-assess-kk-11",
        vorderseite: "Wofür stehen NANDA-I, NIC und NOC? Was misst jedes System?",
        rueckseiteC1:
          "NANDA-I = Pflegediagnosen (seit 1982, ~250). NIC = Nursing Interventions Classification (~554 Pflegemaßnahmen). NOC = Nursing Outcomes Classification (messbare Pflegeergebnisse). Oft zusammen als 'NNN-Verbindung'. Weitere: ICNP (ICN), ENP (europäischer Raum).",
        rueckseiteB1:
          "NANDA = Pflegediagnosen. NIC = Pflegemaßnahmen. NOC = Pflegeergebnisse. Oft zusammen: 'NNN-Verbindung'.",
        tag: "pflege",
        kategorie: "fachbegriff",
        pruefungsrelevant: true,
        quelle: "NANDA International (2021-2023)",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: sechs-standardkriterien (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-sechs-kriterien",
    themaId: "assessments-expertenstandards",
    titel: "Die 6 Standardkriterien",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Wenn du einen Expertenstandard schreibst — was muss darin stehen, damit eine Pflegekraft am nächsten Tag danach arbeiten kann? Nenne 5-6 wichtige Punkte.",
      antwort:
        "Jeder DNQP-Standard hat 6 Kriterien: (1) Risikoerhebung/Assessment, (2) Voraussetzungen/Verfahrensregelung, (3) Maßnahmenplanung, (4) Durchführung, (5) Information/Beratung/Schulung, (6) Evaluation. Jedes mit S/P/E. Die Reihenfolge folgt dem Pflegeprozess.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Jeder DNQP-Expertenstandard hat 6 Standardkriterien: S1/P1/E1 = Risikoerhebung (Screening/Assessment), S2/P2/E2 = Voraussetzungen/Verfahren, S3/P3/E3 = Maßnahmenplanung, S4/P4/E4 = Durchführung, S5/P5/E5 = Information/Beratung/Schulung, S6/P6/E6 = Evaluation.",
      textB1:
        "Jeder Expertenstandard hat 6 Kriterien: (1) Risiko prüfen, (2) Voraussetzungen schaffen, (3) Maßnahmen planen, (4) Maßnahmen durchführen, (5) Informieren und beraten, (6) Evaluieren (prüfen, ob es hilft).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-12",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 4,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2024)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-sechs-kriterien",
        tag: "pflege",
        contentC1: {
          title: "Die 6 Standardkriterien",
          body: "Alle 12 DNQP-Expertenstandards sind nach demselben Muster aufgebaut — **6 Standardkriterien**, jedes mit S-P-E (Struktur/Prozess/Ergebnis): **1. Kriterium 1 — Risikoerhebung / Screening / Assessment:** Auf Risiko screenen, bei Auffälligkeit Assessment. Wer? Welches Instrument? Wann? **2. Kriterium 2 — Voraussetzungen / Verfahrensregelung:** Einrichtung schafft Strukturen (Material, Personal, Verfahrensanweisung). **3. Kriterium 3 — Maßnahmenplanung:** Individueller Maßnahmenplan auf Basis des Assessments. **4. Kriterium 4 — Durchführung der Maßnahmen:** Maßnahmen werden umgesetzt, dokumentiert. **5. Kriterium 5 — Information, Beratung, Schulung, Anleitung:** Patient/Angehörige informieren und befähigen. **6. Kriterium 6 — Evaluation:** Wirksamkeit prüfen, Maßnahmen anpassen. Das sichert: Von Risiko bis Erfolg wird alles durchdacht — keine Lücken. (DNQP 2024)",
          glossarBegriffe: ["Verfahrensregelung", "Maßnahmenplanung", "Evaluation"],
        },
        contentB1: {
          title: "Die 6 Standardkriterien",
          body: "Alle 12 Expertenstandards haben **die gleiche Struktur**: 6 Kriterien. Jedes Kriterium hat S-P-E. **1. Risiko prüfen:** Screening und Assessment. Wer macht es? Womit? Wann? **2. Voraussetzungen:** Die Einrichtung muss alles bereitstellen: Personal, Material, Regeln. **3. Maßnahmen planen:** Ein individueller Plan für diesen Patienten. **4. Maßnahmen durchführen:** Die Maßnahmen machen und aufschreiben. **5. Informieren und beraten:** Patient und Angehörige mitnehmen. **6. Evaluieren:** Prüfen: Hat es geholfen? Muss man was ändern? So geht es bei jedem Standard gleich. So vergisst man nichts. (DNQP 2024)",
          glossarBegriffe: ["Evaluation"],
        },
      },
    },
    glossarBegriffe: ["Verfahrensregelung", "Maßnahmenplanung", "Evaluation"],
    karteikarten: [
      {
        id: "ce02-assess-kk-12",
        vorderseite: "Nenne die 6 Standardkriterien eines DNQP-Expertenstandards in der richtigen Reihenfolge.",
        rueckseiteC1:
          "1. Risikoerhebung/Screening/Assessment, 2. Voraussetzungen/Verfahrensregelung, 3. Maßnahmenplanung, 4. Durchführung, 5. Information/Beratung/Schulung/Anleitung, 6. Evaluation. Jedes Kriterium hat S/P/E (Donabedian 1966).",
        rueckseiteB1:
          "1. Risiko prüfen, 2. Voraussetzungen schaffen, 3. Maßnahmen planen, 4. Maßnahmen durchführen, 5. Informieren + beraten, 6. Evaluieren.",
        tag: "pflege",
        kategorie: "fakt",
        pruefungsrelevant: true,
        quelle: "DNQP (2024)",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: juristische-bedeutung (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-recht",
    themaId: "assessments-expertenstandards",
    titel: "Juristische Bedeutung von Expertenstandards",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Frau Kaya stürzt im Pflegeheim und bricht sich die Hüfte. Ihr Sohn klagt gegen das Heim. Warum könnte der Expertenstandard Sturzprophylaxe plötzlich juristisch wichtig werden?",
      antwort:
        "Expertenstandards gelten als antizipiertes Sachverständigengutachten. Das Heim muss nachweisen, dass es standardkonform gehandelt hat (Beweislastumkehr). Abweichung ohne dokumentierte Begründung gilt als Fahrlässigkeit (§ 222/229 StGB, Zivilhaftung).",
    },
    stufe2: {
      typ: "hinweis",
      text: "Expertenstandards gelten als antizipiertes Sachverständigengutachten (Rechtsprechung). Wer ohne dokumentierte Begründung davon abweicht, handelt fahrlässig. Pflegefachkraft: Durchführungsverantwortung. Leitung: Organisationsverantwortung.",
      textB1:
        "Expertenstandards sind vor Gericht wichtig. Sie gelten als vorweggenommenes Gutachten von Experten. Wer ohne Grund nicht danach arbeitet, ist fahrlässig. Pflegekraft ist für die Durchführung verantwortlich, Leitung für die Organisation.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-13",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["§ 113a SGB XI", "§ 137a SGB V", "§ 222/§ 229 StGB", "DNQP (2024)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-recht",
        tag: "pflege",
        displayFormat: "scenario",
        contentC1: {
          title: "Juristische Bedeutung von Expertenstandards",
          body: "Die Rechtsprechung wertet Expertenstandards als **antizipiertes Sachverständigengutachten**. Das heißt: Sie beschreiben, was ein Sachverständiger im Einzelfall bestätigen würde — ohne dass er gerufen werden muss. **Folgen bei Schadensfall:** Strafrechtlich: Abweichung ohne Begründung kann als Fahrlässigkeit gewertet werden (§ 222/229 StGB bei Tod/Verletzung). Zivilrechtlich: Haftung für Schäden, Schmerzensgeld. **Beweislastumkehr**: Die Einrichtung muss nachweisen, dass sie standardkonform gehandelt hat. **Verantwortungsebenen:** Pflegefachkraft = **Durchführungsverantwortung** (korrekte Umsetzung der Maßnahmen, dokumentieren). Pflegedienstleitung = **Organisationsverantwortung** (Standards einführen, Personal schulen, Material bereitstellen). **Abweichung erlaubt?** Ja — aber mit **dokumentierter Begründung** (z.B. Patient lehnt Maßnahme ausdrücklich ab). Ohne Dokumentation = Fahrlässigkeit. Rechtsgrundlagen: **§ 113a SGB XI** (Altenpflege), **§ 137a SGB V**. (DNQP 2024)",
          glossarBegriffe: ["antizipiertes Sachverständigengutachten", "Durchführungsverantwortung", "Organisationsverantwortung", "Beweislastumkehr", "Fahrlässigkeit"],
        },
        contentB1: {
          title: "Warum sind Expertenstandards vor Gericht wichtig?",
          body: "Gerichte sagen: Expertenstandards sind wie ein **vorweggenommenes Gutachten**. Sie zeigen, was richtige Pflege ist. Wer sich nicht daran hält, hat ein Problem. **Was passiert bei einem Schadensfall?** Strafrecht: Der Schaden kann als **Fahrlässigkeit** gewertet werden (§ 222 StGB bei Tod, § 229 StGB bei Verletzung). Zivilrecht: Die Einrichtung muss zahlen (Schmerzensgeld). **Beweislastumkehr**: Das Heim muss zeigen, dass es den Standard befolgt hat. **Wer trägt die Verantwortung?** Du als Pflegekraft: Du musst die Maßnahmen **richtig durchführen und aufschreiben**. Die Leitung: Sie muss die Standards einführen, dich schulen, Material bereitstellen. **Darfst du vom Standard abweichen?** Ja — aber **mit Begründung im Pflegebericht**. Ohne Begründung gilt: **Fahrlässigkeit**. Gesetze: **§ 113a SGB XI** (Altenpflege), **§ 137a SGB V**.",
          glossarBegriffe: ["Durchführungsverantwortung", "Organisationsverantwortung", "Fahrlässigkeit"],
        },
      },
    },
    glossarBegriffe: ["antizipiertes Sachverständigengutachten", "Durchführungsverantwortung", "Organisationsverantwortung", "Beweislastumkehr", "Fahrlässigkeit"],
    karteikarten: [
      {
        id: "ce02-assess-kk-13",
        vorderseite: "Warum haben Expertenstandards juristische Bedeutung? Wer trägt welche Verantwortung?",
        rueckseiteC1:
          "Gelten als antizipiertes Sachverständigengutachten. Abweichung ohne Begründung = Fahrlässigkeit. Beweislastumkehr: Einrichtung muss standardkonformes Handeln nachweisen. Zwei Ebenen: PFK = Durchführungsverantwortung, Leitung = Organisationsverantwortung. Rechtsgrundlagen: § 113a SGB XI, § 137a SGB V.",
        rueckseiteB1:
          "Expertenstandards gelten vor Gericht wie ein Gutachten. Ohne Grund abweichen = fahrlässig. Pflegekraft = Durchführungsverantwortung, Leitung = Organisationsverantwortung. Gesetze: § 113a SGB XI, § 137a SGB V.",
        tag: "pflege",
        kategorie: "recht",
        pruefungsrelevant: true,
        quelle: "§ 113a SGB XI; DNQP (2024)",
      },
    ],
  },

  // ═══════════════════════════════════════════
  // Baustein 14: assessments-kritisch-reflektieren (Bloom 5)
  // ═══════════════════════════════════════════
  {
    bausteinId: "assessments-expertenstandards-kritik",
    themaId: "assessments-expertenstandards",
    titel: "Grenzen standardisierter Assessments",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Die Braden-Skala zeigt bei Herrn Özkan (68 J., Schlaganfall) 22 Punkte — praktisch kein Risiko. Dein Bauchgefühl sagt aber: 'Der ist gefährdet.' Was vertraust du? Und warum?",
      antwort:
        "Beidem. Assessments sind Momentaufnahmen mit Grenzen (Interrater-Unterschiede, kulturelle Prägung, Skala-Gläubigkeit). Der DNQP-Standard Dekubitus 2017/2024 betont: Klinische Einschätzung der PFK ist primäres Instrument. Dokumentiere beides und plane vorsichtig.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Assessments haben Grenzen: Sie sind Momentaufnahmen, kulturell geprägt, sprachabhängig, im Extremfall untrainiert (Interrater-Reliabilität). Der DNQP-Standard Dekubitus 2017/2024 betont deshalb: Die klinische Einschätzung der PFK ist das primäre Instrument, nicht die Skala.",
      textB1:
        "Assessments sind nicht perfekt: Sie sind Momentaufnahmen, oft auf Englisch entwickelt und dann übersetzt. Zwei Pflegekräfte können unterschiedliche Punkte geben. Der DNQP sagt: Deine eigene Einschätzung als Pflegekraft ist am wichtigsten, nicht die Skala.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-assess-wb-14",
        phase: 1,
        stepType: "reflection",
        bloomLevel: 5,
        kompetenzbereich: "I.1",
        quellen: ["DNQP (2024)", "Benner P. (1984)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-assessments-kritik",
        tag: "pflege",
        displayFormat: "procontra",
        contentC1: {
          title: "Grenzen standardisierter Assessments",
          body: "**Grenzen standardisierter Assessments:** 1. **Momentaufnahme:** Ein Assessment zeigt den Zustand in diesem Moment — nicht die Entwicklung. Zustände können sich innerhalb von Stunden ändern (akute Erkrankung, Medikamente). 2. **Interrater-Reliabilität:** Unterschiedliche PFK können unterschiedliche Punkte vergeben. Schulung und klare Kriterien sind nötig. 3. **Sprachliche und kulturelle Prägung:** Viele Skalen stammen aus USA/UK. Übersetzungen können Nuancen verlieren. 4. **Risiko der Skala-Gläubigkeit:** Die Zahl wird zum Selbstzweck — 'Braden 22, also kein Risiko' — obwohl das klinische Bild etwas anderes sagt. **Position des DNQP (Dekubitus 2017/2024):** Die **klinische Einschätzung der PFK** ist das **primäre Instrument**. Skalen sind Ergänzung, nicht Ersatz. Professionelle Intuition + Assessment = beste Einschätzung. Dokumentiere beides: die Zahl und deine fachliche Begründung, wenn sie abweicht. (DNQP 2024)",
          glossarBegriffe: ["klinische Einschätzung", "Interrater-Reliabilität"],
        },
        contentB1: {
          title: "Grenzen standardisierter Assessments",
          body: "**Assessments sind nicht perfekt. Das musst du wissen:** 1. **Momentaufnahme:** Das Assessment zeigt nur jetzt. Morgen kann alles anders sein — besonders bei akuten Krankheiten. 2. **Unterschiedliche Einschätzung:** Zwei Pflegekräfte können verschiedene Punkte geben. Deshalb müssen alle gut geschult sein. 3. **Aus anderen Ländern:** Viele Skalen kommen aus den USA oder England. Bei der Übersetzung gehen manchmal Bedeutungen verloren. 4. **Skala ist nicht alles:** Manche Pflegekräfte schauen nur auf die Zahl. Aber die Zahl ist nicht die ganze Wahrheit. **Was sagt der DNQP?** Deine **eigene Einschätzung** als Pflegekraft ist am wichtigsten. Die Skala ist nur eine Hilfe. **Wichtig:** Wenn dein Bauchgefühl anders sagt als die Skala — dokumentiere beides und plane vorsichtig.",
          glossarBegriffe: ["klinische Einschätzung", "Interrater-Reliabilität"],
        },
      },
    },
    glossarBegriffe: ["klinische Einschätzung", "Interrater-Reliabilität"],
    karteikarten: [
      {
        id: "ce02-assess-kk-14",
        vorderseite: "Welche Grenzen haben standardisierte Assessments? Was sagt der DNQP dazu?",
        rueckseiteC1:
          "Momentaufnahme, Interrater-Unterschiede, kulturelle Prägung, Skala-Gläubigkeit. DNQP (Dekubitus 2017/2024): Klinische Einschätzung der PFK ist primäres Instrument — Skalen ergänzen, ersetzen nicht. Bei Abweichung zwischen Bauchgefühl und Skala: beides dokumentieren.",
        rueckseiteB1:
          "Assessments haben Grenzen: Momentaufnahmen, kulturell geprägt, nicht perfekt objektiv. DNQP sagt: Deine Einschätzung als Pflegekraft ist am wichtigsten. Skala hilft nur. Wenn dein Bauchgefühl anders sagt — beides aufschreiben.",
        tag: "pflege",
        kategorie: "handlung",
        pruefungsrelevant: true,
        quelle: "DNQP (2024)",
      },
    ],
  },
];

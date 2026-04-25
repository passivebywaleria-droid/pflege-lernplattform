// CE-02 Thema Blasenkatheter — Wissensbausteine (13 Bausteine, 3 Stufen)
// Quelle: content/ce-02/themen/blasenkatheter/bausteine-plan.md
// Pipeline v9 — 2026-04-23
// Kompetenzbereich: III.2 | Cluster: E (Ärztliche Anordnungen)
// Stufe 1 = Denkfrage (starke Schüler, Bloom ≥3)
// Stufe 2 = Hinweis (mittlere Schüler)
// Stufe 3 = Erklärung als ContentStep (Bloom 1-2, alle Schüler)

import type { Wissensbaustein } from "../../../_types";

export const CE02_THEMA_BLASENKATHETER_BAUSTEINE: Wissensbaustein[] = [
  // ═══════════════════════════════════════════
  // Baustein 1: katheter-definition-und-arten (Bloom 1)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-definition-arten",
    themaId: "blasenkatheter",
    titel: "Katheter-Definition und Arten",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, ein Patient kann seinen Urin nicht mehr selbst ablassen. Welche Wege fallen dir ein, wie man die Blase entleeren könnte? Sammle in eigenen Worten.",
      antwort:
        "Ein Blasenkatheter ist ein steriles Medizinprodukt, das Urin aus der Harnblase ableitet. Die Auswahl richtet sich nach Indikation und Dauer: ISK (Einmalkatheter), BVK (transurethraler Dauerkatheter), SPDK (suprapubischer Katheter), 3-Wege-Spülkatheter (bei Hämaturie). (KRINKO 2015, EAUN 2021)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Ein Blasenkatheter ist ein steriler Kunststoffschlauch, der Urin aus der Blase ableitet. Es gibt 4 Hauptformen: Einmalkatheter (ISK), transurethraler Dauerkatheter (BVK), suprapubischer Katheter (SPDK) und Spülkatheter (3-Wege). (KRINKO 2015)",
      textB1:
        "Ein Blasenkatheter ist ein dünner Schlauch. Er leitet Urin aus der Blase raus. Es gibt 4 Formen: Einmalkatheter (einmal rein, einmal raus), Dauerkatheter (bleibt über Harnröhre), suprapubischer Katheter (durch Bauch) und Spülkatheter.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-01",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 1,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "EAUN Guideline (2021)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-arten",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Blasenkatheter: Definition und 4 Arten",
          body: "Ein Blasenkatheter ist ein steriles Medizinprodukt, das Urin aus der Harnblase ableitet. Die Auswahl richtet sich nach Indikation und Dauer:\n\n**1. Einmalkatheter (Intermittierender Katheterismus, ISK)** — wird eingeführt, Urin läuft ab, Katheter wird entfernt. Goldstandard bei neurogener Blasenstörung oder Restharn.\n\n**2. Transurethraler Dauerkatheter (BVK, Blasenverweilkatheter)** — wird über die Harnröhre eingeführt und bleibt über Tage bis Wochen liegen. Fixierung durch Ballon (5-10 ml Aqua dest.) in der Blase.\n\n**3. Suprapubischer Katheter (SPDK)** — durch eine kleine Öffnung in der Bauchdecke direkt in die Blase. Vorteil: keine Harnröhrenreizung, niedrigeres HWI-Risiko bei Langzeit.\n\n**4. Spülkatheter (3-Wege-Katheter)** — hat zusätzlichen Kanal für Dauerspülung bei Hämaturie (z.B. nach Prostata-OP). (KRINKO 2015, EAUN 2021)",
          glossarBegriffe: ["Blasenkatheter", "ISK", "BVK", "SPDK"],
        },
        contentB1: {
          title: "Blasenkatheter: Definition und 4 Arten",
          body: "Ein Blasenkatheter ist ein Schlauch aus Kunststoff. Er leitet Urin aus der Blase. Welcher Katheter passt, hängt von der Situation ab:\n\n**1. Einmalkatheter (ISK)** — Rein, Urin läuft raus, wieder raus. Zum Beispiel, wenn die Blase nicht mehr richtig entleert.\n\n**2. Dauerkatheter (BVK)** — Geht über die Harnröhre in die Blase. Bleibt Tage oder Wochen drin. Ein kleiner Ballon (mit Wasser gefüllt) hält ihn in der Blase.\n\n**3. Suprapubischer Katheter (SPDK)** — Geht durch einen kleinen Schnitt im Bauch in die Blase. Vorteil: weniger Infektionen.\n\n**4. Spülkatheter (3 Wege)** — Hat einen Extra-Schlauch zum Spülen. Wird benutzt, wenn Blut im Urin ist.",
          glossarBegriffe: ["Blasenkatheter", "ISK", "BVK", "SPDK"],
        },
        question: {
          fragetext: "Welche der folgenden Aussagen zum ISK (Einmalkatheter) ist FALSCH?",
          optionen: [
            {
              text: "ISK ist der Goldstandard bei neurogener Blase und chronischem Restharn.",
              isCorrect: false,
              explanation: "Das stimmt — ISK ist tatsächlich der Goldstandard bei neurogener Blase.",
            },
            {
              text: "Ein Dauerkatheter ist immer die beste Lösung bei Blasenproblemen.",
              isCorrect: true,
              explanation: "Nicht ganz — ein Dauerkatheter birgt pro Liegetag 3-10% zusätzliches Infektionsrisiko (KRINKO 2015). Der ISK (intermittierende Selbstkatheterisierung) ist bei Restharn der Goldstandard. Merke: So kurz wie möglich, so selten wie möglich — und DK ist nie die Standard-Lösung.",
              explanationB1: "Nicht ganz — ein Dauerkatheter macht viele Infektionen. Jeden Tag mehr Risiko. Besser ist oft der Einmalkatheter (ISK). Merke: Dauerkatheter nur wenn wirklich nötig. Und so kurz wie möglich.",
            },
            {
              text: "ISK kann zu Hause täglich 4-6x durchgeführt werden.",
              isCorrect: false,
              explanation: "Das stimmt — ISK ist eine Alltags-Selbstversorgung zu Hause (saubere, nicht sterile Technik).",
            },
            {
              text: "Der suprapubische Katheter (SPDK) hat bei Langzeitableitung ein niedrigeres Infektionsrisiko als der transurethrale DK.",
              isCorrect: false,
              explanation: "Das stimmt — der SPDK hat bei geplanter Langzeitableitung > 2 Wochen ein niedrigeres CAUTI-Risiko.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Blasenkatheter", "ISK", "BVK", "SPDK"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 2: katheter-materialien-und-groessen (Bloom 2)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-material-groesse",
    themaId: "blasenkatheter",
    titel: "Material und Größe (Charrière)",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Katheter aus einem billigen Material darf nur 5 Tage liegen. Warum? Was könnte an einem Material wichtig sein, wenn es Wochen im Körper bleibt?",
      antwort:
        "Material bestimmt Liegezeit: Latex/PVC max 5 Tage (reizt Schleimhaut, Latex-Allergie möglich), silikonisierter Latex max 14 Tage, Vollsilikon 4-6 Wochen (biokompatibel). Antimikrobielle Beschichtungen sind KEINE Standardprophylaxe (KRINKO 2015). Größe in Charrière (Ch): 1 Ch = 1/3 mm Außendurchmesser. Erwachsene: 12-16 Ch, Kinder: 8-10 Ch.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Material bestimmt Liegezeit: Latex/PVC max 5 Tage (reizt), silikonisierter Latex max 14 Tage, **Silikon 4-6 Wochen** (biokompatibel). Größe in Charrière (Ch): 1 Ch = 1/3 mm Außendurchmesser. Erwachsene: 12-16 Ch, Kinder: 8-10 Ch.",
      textB1:
        "Das Material entscheidet, wie lange ein Katheter liegen darf: Latex/PVC max 5 Tage (reizt). Silikon-Latex max 14 Tage. **Silikon 4-6 Wochen** (gut verträglich). Die Größe heißt Charrière (Ch). Erwachsene: 12-16 Ch. Kinder: 8-10 Ch.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-02",
        phase: 1,
        stepType: "comparison",
        bloomLevel: 2,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "EAUN Guideline (2021)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-material",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Katheter-Material und Größe (Charrière)",
          body: "**Materialien im Überblick** (KRINKO 2015, EAUN 2021):\n\n| Material | Max. Liegezeit | Eigenschaften |\n|----------|----------------|---------------|\n| Latex / PVC | 5 Tage | Günstig, reizt Schleimhaut, Latex-Allergie möglich |\n| Silikonisierter Latex | 14 Tage | Beschichtet, weniger Reizung |\n| Vollsilikon | 4-6 Wochen | Biokompatibel, teuer, bevorzugt für Langzeit |\n| Antimikrobiell beschichtet | variabel | NICHT als Standardprophylaxe empfohlen (KRINKO 2015) |\n\n**Größen (Charrière-Skala):** 1 Ch = 1/3 mm Außendurchmesser. Also: 12 Ch = 4 mm, 16 Ch = 5,3 mm.\n- Frauen/Männer Erwachsene: 12-16 Ch\n- Kinder: 8-10 Ch\n- Säuglinge: 6-8 Ch\n\n**Regel**: So dünn wie möglich, so dick wie nötig. Ein zu dicker Katheter verletzt die Harnröhre, ein zu dünner kann durch Sekret verstopfen. Farbcode am Katheteransatz zeigt die Größe (standardisiert).",
          glossarBegriffe: ["Charrière", "Ch"],
        },
        contentB1: {
          title: "Katheter-Material und Größe (Charrière)",
          body: "**Materialien und wie lange sie liegen dürfen:**\n\n- **Latex/PVC**: max 5 Tage. Billig, aber reizt die Haut. Manche sind allergisch.\n- **Silikonisierter Latex**: max 14 Tage. Beschichtet, weniger Reizung.\n- **Vollsilikon**: 4-6 Wochen. Gut verträglich, teuer. Für lange Zeit.\n- **Antimikrobiell beschichtet**: NICHT zur Standardprophylaxe (KRINKO 2015). Nur in speziellen Fällen.\n\n**Größen — Charrière (Ch):** 1 Ch = 1/3 Millimeter.\n- Erwachsene (Frau und Mann): 12-16 Ch\n- Kinder: 8-10 Ch\n- Babys: 6-8 Ch\n\n**Regel**: So dünn wie möglich, so dick wie nötig. Zu dick = Harnröhre kaputt. Zu dünn = verstopft. Die Farbe am Katheter-Ende zeigt die Größe.",
          glossarBegriffe: ["Charrière", "Ch"],
        },
        question: {
          fragetext: "Was bedeutet 12 Ch in Millimeter?",
          optionen: [
            {
              text: "12 mm",
              isCorrect: false,
              explanation: "Nein — 12 Ch wäre 12 × 1/3 mm = 4 mm. Nicht 12 mm.",
              explanationB1: "Nicht ganz — Ch heißt Charrière. 1 Ch = 1/3 mm. Also 12 Ch = 4 mm.",
            },
            {
              text: "4 mm",
              isCorrect: true,
              explanation: "Genau — 1 Ch = 1/3 mm, also 12 Ch = 4 mm. Erwachsene: 12-16 Ch.",
              explanationB1: "Richtig — 12 Ch = 4 mm. 1 Ch ist immer 1/3 Millimeter.",
            },
            {
              text: "1,2 mm",
              isCorrect: false,
              explanation: "Nicht ganz — 1 Ch = 1/3 mm = 0,33 mm. 12 Ch = 4 mm.",
              explanationB1: "Nicht ganz — 12 Ch = 4 mm. 1 Ch = 1/3 mm.",
            },
            {
              text: "6 mm",
              isCorrect: false,
              explanation: "Nicht ganz — 6 mm wären 18 Ch (18 × 1/3 mm = 6 mm).",
              explanationB1: "Nicht ganz — 6 mm wären 18 Ch. 12 Ch = 4 mm.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Charrière", "Ch"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 3: indikationen-krinko (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-indikationen",
    themaId: "blasenkatheter",
    titel: "KRINKO-Indikationen für den Dauerkatheter",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Stell dir vor, eine Kollegin sagt: 'Die inkontinente Frau M. legen wir einen Katheter, das ist einfacher für die Pflege.' Ist das eine korrekte Indikation? Warum ja oder nein?",
      antwort:
        "KRINKO (2015) nennt 5 zulässige Indikationen: 1) perioperativ (OP, bestimmte Eingriffe), 2) akuter Harnverhalt/Urinretention, 3) stundengenaue Bilanzierung (Intensiv), 4) Dekubitus + Inkontinenz (Wundheilung!), 5) Palliation/Komfort am Lebensende. NICHT erlaubt: reine Inkontinenz, Pflegeerleichterung, Urinkulturen ohne bestehenden Katheter, Sturzprophylaxe.",
    },
    stufe2: {
      typ: "hinweis",
      text: "KRINKO (2015) nennt 5 zulässige Indikationen: 1) perioperativ (OP, bestimmte Eingriffe), 2) akuter Harnverhalt/Urinretention, 3) stundengenaue Bilanzierung (Intensiv), 4) Dekubitus + Inkontinenz (Wundheilung!), 5) Palliation/Komfort am Lebensende.",
      textB1:
        "Die KRINKO (2015) sagt: Ein Dauerkatheter ist nur in 5 Fällen erlaubt: 1) vor/nach OP, 2) Blase kann nicht mehr entleeren, 3) Urin muss genau gemessen werden (Intensiv), 4) Dekubitus + Inkontinenz (Wunde soll heilen), 5) am Lebensende für Komfort.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-03",
        phase: 1,
        stepType: "categorize",
        bloomLevel: 4,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "CDC/HICPAC (2009, Update 2019)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-indikationen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "KRINKO-Indikationen — ja und nein",
          body: "**Zulässige Indikationen** (KRINKO 2015, CDC/HICPAC 2009):\n\n1. **Perioperativ** — bei ausgewählten operativen Eingriffen (Urologie, Gynäkologie, lange OPs)\n2. **Akute Urinretention / Harnverhalt** — Blase kann nicht spontan entleeren\n3. **Stundengenaue Bilanzierung** — bei kritisch Kranken (Intensiv, Schock, akutes Nierenversagen)\n4. **Sakrale / perineale Wunden bei Inkontinenz** — Dekubitus heilt nicht, wenn Urin auf die Wunde läuft\n5. **Palliativversorgung** — Komfort am Lebensende, wenn Umlagern Schmerzen verursacht\n\n**NICHT erlaubte Indikationen** (häufige Fehler!):\n- ❌ Reine Harninkontinenz als alleinige Indikation\n- ❌ Pflegeerleichterung (Zeitersparnis)\n- ❌ Urinkulturen sammeln (außer bei bestehendem Katheter)\n- ❌ Bequemlichkeit des Teams / Angehöriger\n- ❌ Sturzprophylaxe (Patient soll nicht aufstehen)\n\n**Grundregel**: Jeden Tag neu prüfen — kann er raus? So kurz wie möglich = Maximum-Regel. (KRINKO 2015)",
          glossarBegriffe: ["Harnverhalt", "Urinretention", "KRINKO", "Maximum-Regel"],
        },
        contentB1: {
          title: "KRINKO-Indikationen — ja und nein",
          body: "**Wann darf man einen Dauerkatheter legen?** (KRINKO 2015):\n\n1. **Vor/nach einer OP** — wenn der Arzt es anordnet\n2. **Harnverhalt** — die Blase kann nicht mehr entleeren\n3. **Intensivstation** — Urin muss genau gemessen werden (Stunde für Stunde)\n4. **Dekubitus am Po + Inkontinenz** — damit die Wunde heilen kann\n5. **Am Lebensende** — für Komfort, wenn Umlagern weh tut\n\n**Was ist NICHT erlaubt?**\n- ❌ Nur weil jemand inkontinent ist\n- ❌ Damit die Pflege schneller geht\n- ❌ Um einen Urin-Test zu machen (wenn noch kein Katheter liegt)\n- ❌ Damit der Patient nicht aufsteht (Sturz-Angst)\n\n**Wichtig**: Jeden Tag fragen — kann er raus? So kurz wie möglich.",
          glossarBegriffe: ["Harnverhalt", "KRINKO", "Maximum-Regel"],
        },
        question: {
          fragetext: "Welche der folgenden Situationen ist eine ZULÄSSIGE Indikation für einen Blasenverweilkatheter (BVK) laut KRINKO 2015?",
          optionen: [
            {
              text: "Ein Patient ist inkontinent und die Nachtschicht möchte weniger Wäschewechsel.",
              isCorrect: false,
              explanation: "Nicht ganz — Pflegeerleichterung ist KEINE Indikation (KRINKO 2015). Inkontinenz allein rechtfertigt keinen Dauerkatheter.",
              explanationB1: "Nicht ganz — Inkontinenz allein ist kein Grund für einen Katheter. Pflegeerleichterung auch nicht.",
            },
            {
              text: "Ein Patient auf der Intensivstation mit Schock braucht stundengenaue Urinbilanzierung.",
              isCorrect: true,
              explanation: "Genau — stundengenaue Bilanzierung bei kritisch Kranken (Intensiv, Schock) ist eine der 5 KRINKO-Indikationen.",
              explanationB1: "Richtig — auf der Intensivstation muss Urin genau gemessen werden. Das ist erlaubt.",
            },
            {
              text: "Ein sturzgefährdeter Patient soll nachts nicht zur Toilette müssen.",
              isCorrect: false,
              explanation: "Nicht ganz — Sturzprophylaxe ist keine Indikation (KRINKO 2015). Alternativen: Niederflurbett, Toilettenstuhl, Nachtlicht.",
              explanationB1: "Nicht ganz — Angst vor Sturz ist kein Grund für einen Katheter. Das ist nicht erlaubt.",
            },
            {
              text: "Eine Urinkultur soll entnommen werden.",
              isCorrect: false,
              explanation: "Nicht ganz — für Urinkulturen reicht Mittelstrahlurin oder ein Einmalkatheter. Einen DK nur für die Probe zu legen ist keine Indikation.",
              explanationB1: "Nicht ganz — für eine Urinprobe braucht man keinen Dauerkatheter. Mittelstrahlurin reicht.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Harnverhalt", "Urinretention", "KRINKO", "Maximum-Regel"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 4: vorbereitung-material-steril (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-vorbereitung",
    themaId: "blasenkatheter",
    titel: "Vorbereitung und steriles Material",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Was brauchst du, um eine sterile Katheterisierung vorzubereiten? Sammle in eigenen Worten — denk an Material, Umgebung und den Patienten.",
      antwort:
        "Vorbereitung: Händedesinfektion, steriles Katheterset (Lochtuch, Pinzette, Tupfer, Schale), Antiseptikum (z.B. Octenisept), steriles Gleitgel mit Lokalanästhetikum (Instillagel — Einwirkzeit 2-5 Min!), Katheter in passender Größe, Urinauffangbeutel (geschlossenes System), Aqua dest. zum Blocken (KEIN NaCl!), 2 Paar sterile Handschuhe, 2-Personen-Prinzip. (KRINKO 2015, CDC/HICPAC 2009)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Vorbereitung: Händedesinfektion, steriles Katheterset (Lochtuch, Pinzette, Tupfer, Schale), Antiseptikum (z.B. Octenisept), steriles Gleitgel (anästhesierend), Katheter in passender Größe, Urinauffangbeutel (geschlossenes System), sterile Handschuhe, 2. Person.",
      textB1:
        "Was du brauchst: Hände desinfizieren, steriles Katheter-Set (Tuch, Pinzette, Tupfer), Desinfektionsmittel, Gleitgel (mit Betäubung), Katheter in richtiger Größe, Urinbeutel (geschlossenes System), sterile Handschuhe, eine zweite Person.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-04",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 3,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "CDC/HICPAC (2009, Update 2019)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-vorbereitung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Sterile Vorbereitung der Katheterisierung",
          body: "**Sterile Vorbereitung** (KRINKO 2015, CDC/HICPAC 2009):\n\n**Material — geschlossenes System:**\n- Steriles Katheterset (Einmalset): Lochtuch, sterile Tupfer, Pinzette, Nierenschale\n- **Antiseptikum** (Octenisept, Prontosan — wässrige, schleimhautverträgliche Lösung)\n- **Steriles Gleitgel mit Lokalanästhetikum** (z.B. Instillagel — Lidocain) — Einwirkzeit 2-5 Min!\n- **Katheter** in passender Ch (Erwachsene 12-16, Kinder 8-10)\n- **Urinauffangbeutel** mit Rücklaufsperre und Probeentnahmeport\n- **Aqua dest.** zum Blocken (5-10 ml, je nach Ballongröße) — **KEIN NaCl!**\n- 2 Paar sterile Handschuhe\n\n**Patient:**\n- Identifikation, Aufklärung, Einwilligung\n- Intimsphäre schützen (Sichtschutz)\n- Lagerung: Frau — Rückenlage mit angewinkelten Beinen. Mann — Rückenlage.\n\n**Team:**\n- 2-Personen-Prinzip empfohlen (eine desinfiziert, eine führt)\n\n**Prinzip**: Geschlossenes System nie öffnen — Infektionsrisiko!",
          glossarBegriffe: ["Antiseptikum", "Aqua dest.", "geschlossenes System"],
        },
        contentB1: {
          title: "Sterile Vorbereitung der Katheterisierung",
          body: "**Was du vorbereiten musst:**\n\n**Material:**\n- Steriles Katheter-Set: Tuch, sterile Tupfer, Pinzette\n- **Desinfektionsmittel** (z.B. Octenisept) für die Haut\n- **Gleitgel mit Betäubung** (z.B. Instillagel) — 2-5 Minuten einwirken lassen\n- **Katheter** — richtige Größe: Erwachsene 12-16 Ch, Kinder 8-10 Ch\n- **Urinbeutel** mit Rückschlagventil (geschlossenes System!)\n- **Aqua dest.** zum Blocken — 5-10 ml (**KEIN NaCl!**)\n- 2 Paar sterile Handschuhe\n\n**Patient:**\n- Name prüfen, aufklären, Einverständnis holen\n- Intimsphäre schützen\n- Lagerung: Frau — auf dem Rücken, Beine angewinkelt. Mann — auf dem Rücken, gerade.\n\n**Team:**\n- Zu zweit arbeiten (einer desinfiziert, einer führt ein)\n\n**Wichtig**: Das geschlossene System nie aufmachen!",
          glossarBegriffe: ["Antiseptikum", "Aqua dest.", "geschlossenes System"],
        },
        question: {
          fragetext: "Womit wird der Katheter-Ballon geblockt — und was ist verboten?",
          optionen: [
            {
              text: "NaCl 0,9%, weil es körperneutral ist.",
              isCorrect: false,
              explanation: "Nicht ganz — NaCl ist kontraindiziert. NaCl kann im Ballon kristallisieren, ihn undicht machen oder das Ablassen blockieren. Immer Aqua dest. verwenden!",
              explanationB1: "Nicht ganz — NaCl macht Kristalle. Der Ballon wird kaputt oder geht nicht raus. Immer Aqua dest.!",
            },
            {
              text: "Aqua dest. (destilliertes Wasser), 5-10 ml laut Herstellerangabe.",
              isCorrect: true,
              explanation: "Genau — Aqua dest. ist die einzige zugelassene Flüssigkeit zum Blocken des Katheterballons. NaCl kristallisiert und macht den Ballon undicht.",
              explanationB1: "Richtig — Aqua dest. (gereinigtes Wasser), 5-10 ml. Nie NaCl (Kochsalz).",
            },
            {
              text: "Leitungswasser, weil es einfach verfügbar ist.",
              isCorrect: false,
              explanation: "Nein — Leitungswasser enthält Keime und Mineralien. Nur steriles Aqua dest. ist zugelassen.",
              explanationB1: "Nein — Leitungswasser hat Keime. Nur Aqua dest. (steriles destilliertes Wasser).",
            },
            {
              text: "Luft, damit der Ballon leicht bleibt.",
              isCorrect: false,
              explanation: "Nein — Luft wird nicht verwendet. Der Ballon muss mit Flüssigkeit (Aqua dest.) geblockt werden, damit er dicht bleibt.",
              explanationB1: "Nein — Luft geht nicht. Nur Aqua dest. in den Ballon.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Antiseptikum", "Aqua dest.", "geschlossenes System"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 5: katheterisierung-frau (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-technik-frau",
    themaId: "blasenkatheter",
    titel: "Katheterisierung der Frau — Technik",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Die Harnröhre der Frau ist nur 3-5 cm lang. Wie tief musst du den Katheter vorsichtig einführen, damit er sicher in der Blase liegt? Überlege — warum reicht 3 cm nicht?",
      antwort:
        "Frau: 4-6 cm einführen bis Urin fließt, dann 2-3 cm weiter vorschieben — damit der Ballon in der Blase liegt, nicht in der Harnröhre! Ballon erst dann blocken. Desinfektion immer von vorne nach hinten, spreizende Hand bleibt gespreizt bis Katheter liegt. (KRINKO 2015, EAUN 2021)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Frau: Rückenlage, Beine angewinkelt. Intim-Desinfektion von vorne nach hinten (Labien → Meatus urethrae), Einwirkzeit! Katheter **4-6 cm** einführen bis Urin fließt, dann 2-3 cm vorschieben, Ballon blocken (5-10 ml Aqua dest.).",
      textB1:
        "Frau: Rückenlage, Beine angewinkelt. Desinfektion von **vorne nach hinten** (nie andersrum!) — Einwirkzeit abwarten. Katheter **4-6 cm** einführen, bis Urin kommt. Dann 2-3 cm weiter. Ballon blocken (5-10 ml Aqua dest.).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-05",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 3,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "EAUN Guideline (2021)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-technik-frau",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Katheterisierung der Frau — Schritt für Schritt",
          body: "**Katheterisierung der Frau** (KRINKO 2015, EAUN 2021):\n\n1. **Identifikation, Aufklärung, Einwilligung**\n2. **Lagerung**: Rückenlage, Beine aufgestellt/angewinkelt\n3. **Händedesinfektion**, unsterile Handschuhe, Lochtuch legen\n4. **Mit nicht-dominanter Hand Labien spreizen** (bleibt kontaminiert — nicht mehr lösen!)\n5. **Intim-Desinfektion** mit dominanter Hand, Pinzette + getränkte Tupfer: immer **von vorne nach hinten**, 3 Tupfer (rechts, links, Meatus). **Einwirkzeit 30-60 Sek!**\n6. **Sterile Handschuhe**, Gleitgel **2-5 Min einwirken lassen**\n7. **Katheter 4-6 cm einführen** bis Urin fließt, dann **2-3 cm weiter** vorschieben (Ballon muss in der Blase liegen!)\n8. **Ballon blocken** mit 5-10 ml Aqua dest.\n9. **Katheter leicht zurückziehen** bis Widerstand (Ballon am Blasenausgang)\n10. **Urinbeutel anschließen** (geschlossenes System)\n11. **Fixierung am Oberschenkel**, Beutel unterhalb der Blase",
          glossarBegriffe: ["Labien", "Meatus urethrae"],
        },
        contentB1: {
          title: "Katheterisierung der Frau — Schritt für Schritt",
          body: "**Katheter legen bei der Frau:**\n\n1. Patientin begrüßen, aufklären, Einverständnis\n2. **Lagerung**: Rückenlage, Beine angewinkelt\n3. Hände desinfizieren, unsterile Handschuhe, Lochtuch\n4. **Labien spreizen** mit einer Hand (diese Hand bleibt dreckig, nicht mehr lösen!)\n5. **Desinfektion**: Immer **von vorne nach hinten**, 3 Tupfer (rechts, links, Mitte). **30-60 Sekunden warten!**\n6. Sterile Handschuhe, **Gleitgel 2-5 Min einwirken**\n7. Katheter **4-6 cm einführen** bis Urin kommt, dann **2-3 cm weiter**\n8. **Ballon blocken** mit 5-10 ml Aqua dest.\n9. Katheter leicht zurückziehen, bis Widerstand kommt\n10. Urinbeutel anschließen (nicht öffnen!)\n11. Am Oberschenkel fixieren, Beutel **unter** der Blase",
          glossarBegriffe: ["Labien", "Meatus urethrae"],
        },
        question: {
          fragetext: "Warum wird der Katheter bei der Frau nach dem ersten Urinfluss noch 2-3 cm weiter vorgeschoben?",
          optionen: [
            {
              text: "Damit mehr Urin auf einmal ablaufen kann.",
              isCorrect: false,
              explanation: "Nicht ganz — der Grund ist die Lage des Ballons. Wenn der Ballon in der Harnröhre geblockt wird, reißt sie ein (Via falsa).",
              explanationB1: "Nicht ganz — der Grund ist der Ballon. Er muss in der Blase sein.",
            },
            {
              text: "Damit der Ballon in der Blase liegt und nicht in der Harnröhre geblockt wird.",
              isCorrect: true,
              explanation: "Genau — wenn Urin fließt, liegt die Katheterspitze gerade in der Blase. Der Ballon ist noch in der Harnröhre. Erst 2-3 cm weiter vorschieben, dann liegt der Ballon sicher in der Blase. (KRINKO 2015, EAUN 2021)",
              explanationB1: "Richtig — wenn Urin kommt, musst du 2-3 cm weiter schieben. Sonst liegt der Ballon in der Harnröhre und reißt sie beim Aufblasen.",
            },
            {
              text: "Um die Desinfektion zu vertiefen.",
              isCorrect: false,
              explanation: "Nein — die Desinfektion erfolgt vor dem Einführen und hat nichts mit der Eindringtiefe des Katheters zu tun.",
              explanationB1: "Nein — die Desinfektion war vorher. Das Weiterschieben ist wegen des Ballons.",
            },
            {
              text: "Weil die Harnröhre der Frau 8-10 cm lang ist.",
              isCorrect: false,
              explanation: "Nicht ganz — die weibliche Harnröhre ist nur 3-5 cm lang. Der Katheter wird 4-6 cm eingeführt, dann noch 2-3 cm weiter.",
              explanationB1: "Nicht ganz — die Harnröhre der Frau ist nur 3-5 cm lang.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Labien", "Meatus urethrae"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 6: katheterisierung-mann (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-technik-mann",
    themaId: "blasenkatheter",
    titel: "Katheterisierung des Mannes — Technik und Paraphimose",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Die Harnröhre des Mannes ist 20-25 cm lang und hat **Krümmungen**. Was bedeutet das für das Einführen des Katheters? Warum gibt es hier mehr Verletzungsgefahr als bei der Frau?",
      antwort:
        "Mann: Penis senkrecht (90°) halten — Harnröhre streckt sich. Gleitgel aktiv in die Harnröhre instillieren (10 ml), 5 Min einwirken. Katheter 20-25 cm einführen. Bei Widerstand Penis auf 45° absenken — KEINE Gewalt! Nach dem Legen: Vorhaut sofort zurück über die Glans (Paraphimose-Prävention!). (KRINKO 2015, EAUN 2021)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Mann: Rückenlage. Penis senkrecht (90°) halten → Harnröhre streckt sich. Gleitgel **aktiv instillieren** (10 ml über Glans in die Harnröhre), 5 Min einwirken. Katheter **20-25 cm** einführen (bis Urin), dann Penis absenken, Ballon blocken.",
      textB1:
        "Mann: Rückenlage. Penis **senkrecht nach oben** halten (90°), damit die Harnröhre gerade wird. Gleitgel **in die Harnröhre** geben (10 ml), 5 Minuten warten. Katheter **20-25 cm** einführen, bis Urin kommt. Dann Penis absenken, blocken.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-06",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 3,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "EAUN Guideline (2021)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-technik-mann",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Katheterisierung des Mannes — Schritt für Schritt",
          body: "**Katheterisierung des Mannes** (KRINKO 2015, EAUN 2021):\n\n1. **Identifikation, Aufklärung, Einwilligung**\n2. **Lagerung**: Rückenlage, Beine leicht gespreizt\n3. **Händedesinfektion**, unsterile Handschuhe, Lochtuch legen\n4. **Penis mit nicht-dominanter Hand** greifen (kontaminiert!), **Vorhaut zurückziehen** (falls vorhanden)\n5. **Intim-Desinfektion**: 3 Tupfer — **kreisförmig von der Harnröhrenöffnung nach außen**, **Einwirkzeit 30-60 Sek**\n6. **Sterile Handschuhe**, Gleitgel **aktiv in die Harnröhre instillieren** (10 ml), Penis leicht zuhalten, **5 Min einwirken**\n7. **Penis senkrecht (90°) halten** — Harnröhre streckt sich\n8. **Katheter langsam vorschieben bis 20-25 cm** — bei Widerstand Penis leicht **absenken auf 45°**\n9. **Kein Gewaltanwenden!** Widerstand bei Beckenboden/Prostata normal — tief atmen lassen, warten\n10. Bei Urinfluss: **2-3 cm weiter**, Ballon blocken (5-10 ml Aqua dest.)\n11. **Vorhaut zurückziehen** (Paraphimose verhindern!), Beutel anschließen",
          glossarBegriffe: ["Paraphimose", "Via falsa"],
        },
        contentB1: {
          title: "Katheterisierung des Mannes — Schritt für Schritt",
          body: "**Katheter legen beim Mann:**\n\n1. Patient begrüßen, aufklären\n2. **Lagerung**: Rückenlage, Beine leicht offen\n3. Hände desinfizieren, unsterile Handschuhe, Lochtuch\n4. **Penis halten** mit einer Hand (diese Hand bleibt dreckig), **Vorhaut zurück** (wenn da)\n5. **Desinfektion**: 3 Tupfer, **kreisförmig von der Mitte nach außen**, 30-60 Sek warten\n6. Sterile Handschuhe, **Gleitgel in die Harnröhre spritzen** (10 ml), **5 Min warten**\n7. **Penis senkrecht nach oben** halten (90°) → Harnröhre gerade\n8. Katheter **20-25 cm einführen** — bei Widerstand Penis leicht **nach unten** (45°)\n9. **Keine Gewalt!** Widerstand ist normal — Patient soll tief atmen\n10. Wenn Urin kommt: **2-3 cm weiter**, Ballon blocken (5-10 ml Aqua dest.)\n11. **Vorhaut wieder nach vorne ziehen!** Sonst: Paraphimose (gefährlich!). Beutel anschließen.",
          glossarBegriffe: ["Paraphimose", "Via falsa"],
        },
        question: {
          fragetext: "Warum muss die Vorhaut nach der Katheter-Anlage beim Mann sofort wieder nach vorne gezogen werden?",
          optionen: [
            {
              text: "Damit der Katheter besser sitzt.",
              isCorrect: false,
              explanation: "Nicht ganz — der Sitz des Katheters hängt nicht von der Vorhaut ab.",
              explanationB1: "Nicht ganz — der Katheter sitzt auch ohne das.",
            },
            {
              text: "Sonst entsteht eine Paraphimose — die Vorhaut schnürt den Penis ab, Lymphstau, Gewebsnekrose. Urologischer Notfall!",
              isCorrect: true,
              explanation: "Genau — die zurückgezogene Vorhaut kann den Penis abschnüren. Lymphstau, Ödeme, Gewebsnekrose innerhalb von Stunden. Sofort manuell reponieren. (EAUN 2021)",
              explanationB1: "Richtig — die Vorhaut hinten = Paraphimose. Sie schnürt den Penis ab, das Gewebe schwillt, kann absterben. Notfall! Immer sofort nach vorne.",
            },
            {
              text: "Für die Hygiene — damit der Meatus urethrae geschützt bleibt.",
              isCorrect: false,
              explanation: "Nicht der Hauptgrund — der kritische Grund ist die Paraphimose-Gefahr.",
              explanationB1: "Nicht der Hauptgrund — es geht um die Paraphimose-Gefahr.",
            },
            {
              text: "Das ist bei beschnittenen Männern nicht nötig.",
              isCorrect: false,
              explanation: "Diese Antwort ist nur bei beschnittenen Männern zutreffend. Bei Männern mit Vorhaut ist die sofortige Reposition nach der Anlage Pflicht.",
              explanationB1: "Stimmt nur bei beschnittenen Männern. Bei allen anderen: Vorhaut immer zurück nach vorne.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Paraphimose", "Via falsa"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 7: harnwegsinfektion-cauti (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-cauti-infektion",
    themaId: "blasenkatheter",
    titel: "CAUTI — Entstehung und atypischer Verlauf bei Älteren",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum wird ein Katheter mit jedem Tag, den er liegt, gefährlicher? Was passiert genau im Körper? Überlege — was ist der Unterschied zwischen Tag 1 und Tag 10?",
      antwort:
        "CAUTI (Catheter-associated Urinary Tract Infection) = häufigste nosokomiale Infektion (30-40%, RKI/KISS). Pro Liegetag 3-10% Bakteriurie-Risiko. Ursache: Biofilm auf Katheter nach 72h + Aufsteigen durch Lumen/außen. Erreger: E. coli (25-30%), Enterokokken, Pseudomonas. Bei Älteren atypisch: Delir/Verwirrtheit oft einziges Zeichen!",
    },
    stufe2: {
      typ: "hinweis",
      text: "CAUTI (Catheter-associated Urinary Tract Infection) = **häufigste nosokomiale Infektion** (30-40%, RKI/KISS). Pro Liegetag **3-10% Bakteriurie-Risiko**. Ursache: Biofilm auf Katheter + Aufsteigen durch Lumen/außen. Erreger: E. coli, Enterokokken, Pseudomonas.",
      textB1:
        "CAUTI = Katheter-bedingte Harnwegsinfektion. Das ist die **häufigste Krankenhausinfektion** (30-40%). **Pro Tag** mit Katheter kommen 3-10% mehr Bakterien in die Blase. Warum? Ein Biofilm wächst auf dem Katheter. E. coli steigt auf.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-07",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "CDC/HICPAC (2009, Update 2019)", "RKI/KISS (2023)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-cauti",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "CAUTI — Entstehung und Epidemiologie",
          body: "**CAUTI — Pathogenese und Epidemiologie** (KRINKO 2015, RKI/KISS 2023):\n\n**Häufigkeit**: CAUTI ist **die häufigste nosokomiale Infektion**: 30-40% aller Krankenhausinfektionen. Pro Liegetag steigt das **Bakteriurie-Risiko um 3-10%**. Nach 10 Tagen: fast jeder Patient bakteriurisch.\n\n**Entstehungsweg:**\n1. **Extraluminal** (außen am Katheter, 65-70%) — Keime der Periurethralhaut wandern zwischen Katheter und Harnröhrenwand hoch\n2. **Intraluminal** (im Katheter-Lumen, 30-35%) — Kontamination beim Beutelwechsel oder Öffnen des Systems\n3. **Biofilm**: innerhalb 72h auf der Katheteroberfläche — Bakterien vermehren sich geschützt, sind antibiotikaresistent\n\n**Häufigste Erreger** (KISS-Daten):\n- E. coli (25-30%), Enterococcus faecalis (15-20%), Pseudomonas aeruginosa (10-15%)\n\n**Symptome**: Trüber Urin, stechender Geruch, Fieber, Unterbauchschmerzen. **Bei Alten atypisch**: Verwirrtheit, Delir, Sturz, reduzierter AZ — oft einziges Zeichen! Asymptomatische Bakteriurie = KEINE Antibiose.",
          glossarBegriffe: ["CAUTI", "Biofilm", "nosokomial"],
        },
        contentB1: {
          title: "CAUTI — Entstehung und Epidemiologie",
          body: "**CAUTI — Infektion durch den Katheter:**\n\n**Wie oft?** CAUTI ist die **häufigste Infektion im Krankenhaus** (30-40%, RKI). **Jeden Tag** mit Katheter kommen 3-10% mehr Bakterien rein. Nach 10 Tagen haben fast alle Patienten Bakterien im Urin.\n\n**Wie kommen die Bakterien rein?**\n1. **Außen am Katheter** (65-70%) — Hautkeime wandern hoch\n2. **Im Schlauch** (30-35%) — beim Beutelwechsel\n3. **Biofilm**: Nach 3 Tagen bildet sich ein Schleim auf dem Katheter. Da kleben Bakterien und vermehren sich. Antibiotika wirken schlecht.\n\n**Welche Keime?** E. coli (25-30%), Enterokokken, Pseudomonas.\n\n**Symptome**: Trüber Urin, schlechter Geruch, Fieber, Bauchschmerzen. **Bei alten Menschen oft anders**: Verwirrtheit, Stürze, plötzlich schlecht — das ist oft das einzige Zeichen! Nur Bakterien ohne Symptome = keine Antibiose.",
          glossarBegriffe: ["CAUTI", "Biofilm", "nosokomial"],
        },
        question: {
          fragetext: "Ein 84-jähriger Patient mit Dauerkatheter wird plötzlich verwirrt und stürzt. Fieber hat er nicht. Woran denkst du als Erstes?",
          optionen: [
            {
              text: "Das ist normales Sundowning bei seinem Alter.",
              isCorrect: false,
              explanation: "VORSICHT — bei älteren Patienten mit Katheter ist Delir/Verwirrtheit oft das einzige Symptom einer CAUTI. Immer zuerst Infektion ausschließen! (KRINKO 2015)",
              explanationB1: "VORSICHT — Verwirrtheit und Sturz bei Katheter kann eine Infektion sein. Immer Urin prüfen, Arzt informieren!",
            },
            {
              text: "Mögliche CAUTI — bei alten Patienten ist Delir/Verwirrtheit oft das einzige Symptom. Urin untersuchen, Arzt informieren.",
              isCorrect: true,
              explanation: "Genau — bei älteren Patienten verläuft CAUTI atypisch: kein Fieber, keine Schmerzen, aber plötzliche Wesensveränderung, Sturz, AZ-Verschlechterung. Immer an CAUTI denken! (KRINKO 2015, RKI/KISS 2023)",
              explanationB1: "Richtig — bei alten Menschen ist Verwirrtheit oft das einzige Zeichen einer Infektion. Immer daran denken, Urin testen, Arzt holen.",
            },
            {
              text: "Er braucht sofort Antibiotika — bei Verwirrtheit hilft das am schnellsten.",
              isCorrect: false,
              explanation: "Nicht ganz — erst muss eine Infektion nachgewiesen werden (Urinkultur). Asymptomatische Bakteriurie wird nicht behandelt. Antibiotic Stewardship!",
              explanationB1: "Nicht ganz — erst prüfen ob wirklich eine Infektion da ist. Nicht einfach Antibiotika geben.",
            },
            {
              text: "Er hat wahrscheinlich zu wenig getrunken — mehr Flüssigkeit geben.",
              isCorrect: false,
              explanation: "Das ist zu kurz gedacht — bei einem Patienten mit Katheter und Verwirrtheit muss CAUTI ausgeschlossen werden. Flüssigkeitsgabe allein reicht nicht.",
              explanationB1: "Das allein reicht nicht. Bei Katheter und Verwirrtheit: immer an Infektion denken.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["CAUTI", "Biofilm", "nosokomial"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 8: geschlossenes-system-pflege (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-geschlossenes-system",
    themaId: "blasenkatheter",
    titel: "Geschlossenes System — Pflege und Beutel-Management",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Warum ist das 'geschlossene System' bei einem Dauerkatheter so wichtig? Was passiert, wenn du den Beutel ausleerst und dabei etwas tropft?",
      antwort:
        "Geschlossenes System = Katheter + Ableitungsschlauch + Beutel bleiben ungetrennt. Jedes Öffnen bringt neue Keime rein. Beutel immer unterhalb des Blasenniveaus (Reflux vermeiden!). Leeren bei 2/3 Füllung. Kein Routine-Beutelwechsel (7-14 Tage). Urinprobe nur aus Probeentnahmeport — nie aus dem Beutel. (KRINKO 2015)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Geschlossenes System = Katheter + Ableitungsschlauch + Beutel bleiben **ungetrennt**. Beutel **unterhalb Blasenniveau** (nie höher, nie am Boden). Leeren bei 2/3 voll. Beutelwechsel nur bei System-Defekt oder Wechselzeit. Kein Spülen zur Prophylaxe.",
      textB1:
        "Geschlossenes System = Katheter, Schlauch und Beutel bleiben **zusammen**. Beutel **immer unter der Blase** (nie höher, nie am Boden). Leeren wenn 2/3 voll. Beutel nur wechseln, wenn kaputt. Kein Spülen zum Vorbeugen.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-08",
        phase: 1,
        stepType: "categorize",
        bloomLevel: 3,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "CDC/HICPAC (2009, Update 2019)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-geschlossenes-system",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Geschlossenes System — Do's und Don'ts",
          body: "**Geschlossenes System — Pflegeprinzipien** (KRINKO 2015, CDC/HICPAC 2009):\n\n**Was heißt geschlossen?**\nKatheter → Ableitungsschlauch → Urinbeutel → Ablasshahn bilden eine unabhängige Einheit. Verbindung **nie öffnen** (außer Beutelwechsel bei Defekt).\n\n**Beutel-Position:**\n- **Immer unterhalb des Blasenniveaus** → kein Reflux\n- **NIE über Blasenhöhe** (auch beim Transport!) → Reflux = häufiger CAUTI-Auslöser\n- **NIE auf dem Fußboden** → Kontaminationsrisiko\n\n**Leeren:**\n- Bei ca. **2/3 Füllung** (nicht später — Gewicht zieht am Katheter)\n- **Einmalhandschuhe**, eigenes Gefäß pro Patient, Ablasshahn nicht am Gefäß berühren\n- Anschließend Hahn mit Alkoholtuch wischen, Händedesinfektion\n\n**Beutelwechsel:**\n- **Nicht routinemäßig!** Nur bei: Defekt, Leckage, starker Verschmutzung, 7-14 Tage je nach Hersteller\n\n**Urinkultur-Probe**: NUR aus dem **Probeentnahmeport** (NIE aus dem Beutel — kontaminiert).",
          glossarBegriffe: ["geschlossenes System"],
        },
        contentB1: {
          title: "Geschlossenes System — Do's und Don'ts",
          body: "**Das geschlossene System — so pflegst du es:**\n\n**Wo hängt der Beutel?**\n- **Immer unter der Blase** (Urin läuft runter, nicht hoch)\n- **NIE höher halten** (auch nicht beim Transport!) → Urin fließt zurück\n- **NIE auf den Boden** → zu viele Keime\n\n**Wann leeren?**\n- Wenn der Beutel **2/3 voll** ist\n- **Einmalhandschuhe**, eigenes Gefäß für jeden Patienten\n- Nach dem Leeren: mit Alkoholtuch wischen, Hände desinfizieren\n\n**Beutel wechseln?**\n- **Nicht routinemäßig!** Nur wenn: kaputt, undicht, dreckig, 7-14 Tage alt\n\n**Urinprobe nehmen:** NUR aus dem speziellen Port — NIE aus dem Beutel!",
          glossarBegriffe: ["geschlossenes System"],
        },
        question: {
          fragetext: "Beim Transport eines Patienten mit Dauerkatheter hängt der Urinbeutel am Bettgitter auf Hüfthöhe. Was ist daran falsch?",
          optionen: [
            {
              text: "Gar nichts — Hüfthöhe ist gut sichtbar und sicher.",
              isCorrect: false,
              explanation: "NIEMALS — wenn der Beutel auf Hüfthöhe hängt, liegt er höher als die Blase (Patient sitzt oder liegt). Reflux! (KRINKO 2015)",
              explanationB1: "NIEMALS — der Beutel muss immer unter der Blase hängen. Sonst fließt dreckiger Urin zurück.",
            },
            {
              text: "Der Beutel liegt über Blasenniveau — kontaminierter Urin fließt zurück in die Blase (Reflux = häufiger CAUTI-Auslöser).",
              isCorrect: true,
              explanation: "Genau — beim Transport muss der Beutel immer unterhalb des Blasenniveaus bleiben, z.B. am Bettrahmen unterhalb der Matratze oder am Rollstuhl unten. (KRINKO 2015)",
              explanationB1: "Richtig — Beutel immer unter der Blase, auch beim Transport. Sonst fließt Urin zurück.",
            },
            {
              text: "Der Beutel ist nicht abgeklemmt — das müsste er beim Transport sein.",
              isCorrect: false,
              explanation: "Nicht ganz — der Beutel wird beim Transport nicht routinemäßig abgeklemmt. Das Hauptproblem ist die Position (über Blasenniveau).",
              explanationB1: "Nicht ganz — Abklemmen ist nicht die Lösung. Das Problem ist die Position des Beutels.",
            },
            {
              text: "Der Beutel sollte beim Transport in einer Plastiktüte versteckt werden — für die Würde des Patienten.",
              isCorrect: false,
              explanation: "Die Würde des Patienten ist wichtig, aber das ist nicht das Sicherheitsproblem hier. Die Position ist das Problem.",
              explanationB1: "Die Würde ist wichtig, aber das ist nicht das Problem hier. Position des Beutels ist falsch.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["geschlossenes System"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 9: intimpflege-mit-katheter (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-intimpflege",
    themaId: "blasenkatheter",
    titel: "Intimpflege bei liegendem Katheter",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient mit Dauerkatheter muss mindestens 1x täglich im Intimbereich gewaschen werden. Was ist dabei anders als bei einem Patienten ohne Katheter?",
      antwort:
        "Intimpflege 1x täglich mit Wasser und pH-neutraler Seife — KEIN Antiseptikum (KRINKO 2015, keine Evidenz, schadet Schleimhaut). Katheter vom Körper weg wischen (Richtung Beutel, ca. 10 cm). Mann: Vorhaut zurück und danach immer wieder nach vorne reponieren! Katheter am Oberschenkel fixieren — kein Zug, kein Knick. (KRINKO 2015)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Intimpflege **1x täglich** mit **Wasser und pH-neutraler Seife** — KEIN Antiseptikum (KRINKO 2015). Reinigung von Meatus zum Katheter hin (nicht rückwärts Richtung Körper ziehen). Katheter nicht am Patienten reiben.",
      textB1:
        "Intimpflege **jeden Tag 1x** mit **Wasser und pH-neutraler Seife** — **KEIN Desinfektionsmittel** (KRINKO 2015). Waschen von der Harnröhrenöffnung **weg vom Körper** den Katheter entlang. Den Katheter nicht am Körper reiben.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-09",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 3,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "CDC/HICPAC (2009, Update 2019)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-intimpflege",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Intimpflege bei liegendem Katheter",
          body: "**Intimpflege bei liegendem Katheter** (KRINKO 2015, CDC/HICPAC 2009):\n\n**Grundregel**: Routine-Intimpflege ist wichtig, aber **Antiseptika sind KONTRAINDIZIERT** (keine Prävention, schädigen Schleimhaut, fördern Resistenzen).\n\n**Vorgehen:**\n1. **Händedesinfektion, Einmalhandschuhe**\n2. **Warmes Wasser + pH-neutrale Waschlotion** (z.B. Sebamed)\n3. **Reinigung der Intimregion**: Frau — von vorne nach hinten, Labien spreizen, Meatus reinigen. Mann — Glans, Vorhaut zurückziehen, danach wieder reponieren!\n4. **Katheter reinigen**: Mit separatem Lappen **von der Harnröhre weg** Richtung Beutel (ca. 10 cm), nie andersherum\n5. **Abtrocknen** (feucht = Pilzwachstum)\n6. **Fixierung prüfen**: Katheter am Oberschenkel locker fixieren — kein Zug, keine Knicke\n\n**Häufigkeit**: 1x täglich Routine, zusätzlich nach Stuhlgang.\n\n**NICHT**: Octenisept, Betaisodona, Alkohol am Katheter.",
          glossarBegriffe: ["Meatus urethrae"],
        },
        contentB1: {
          title: "Intimpflege bei liegendem Katheter",
          body: "**Intimpflege mit Katheter — so geht's:**\n\n**Wichtig**: Kein Desinfektionsmittel! Nur Wasser und milde Seife (KRINKO 2015).\n\n**Schritte:**\n1. Hände desinfizieren, Einmalhandschuhe\n2. **Warmes Wasser + milde Waschlotion** (pH-neutral)\n3. Frau: Von vorne nach hinten waschen. Mann: Eichel waschen, Vorhaut zurück, nach dem Waschen wieder nach vorne!\n4. **Katheter waschen**: Mit extra Lappen **vom Körper weg** Richtung Beutel (ca. 10 cm). **Nie Richtung Körper!**\n5. **Gut abtrocknen** (feucht = Pilze)\n6. **Katheter fixieren** am Oberschenkel — locker, kein Ziehen, kein Knick\n\n**Wann?** 1x am Tag, extra nach Stuhlgang.\n\n**NICHT**: Octenisept, Betaisodona, Alkohol — schadet nur.",
          glossarBegriffe: ["Meatus urethrae"],
        },
        question: {
          fragetext: "Mit welchem Mittel wird der Intimbereich bei liegendem Dauerkatheter gereinigt?",
          optionen: [
            {
              text: "Octenisept — desinfiziert und schützt vor CAUTI.",
              isCorrect: false,
              explanation: "Nicht ganz — Antiseptika als Routinepflege am Katheter werden NICHT empfohlen (KRINKO 2015). Keine Evidenz für Schutzwirkung, aber Schleimhautreizung und Resistenzen.",
              explanationB1: "Nicht ganz — Desinfektionsmittel bringen nichts (KRINKO). Sie schaden sogar. Nur Wasser und Seife.",
            },
            {
              text: "Wasser und pH-neutrale Waschlotion, 1x täglich (plus nach Stuhlgang).",
              isCorrect: true,
              explanation: "Genau — Wasser und pH-neutrale Seife reichen. Antiseptika sind nicht indiziert (KRINKO 2015, CDC 2009). Waschlappen vom Körper weg wischen.",
              explanationB1: "Richtig — Wasser und milde Seife, 1x täglich (plus nach Stuhlgang). Kein Desinfektionsmittel!",
            },
            {
              text: "Alkohol 70% — tötet alle Keime zuverlässig.",
              isCorrect: false,
              explanation: "Nein — Alkohol schädigt die Schleimhaut und das Kathetermaterial. Nie für die Intimpflege verwenden.",
              explanationB1: "Nein — Alkohol schadet der Haut und dem Katheter.",
            },
            {
              text: "Nichts — die Stelle ist steril, Waschen bringt Keime rein.",
              isCorrect: false,
              explanation: "Nein — tägliche Intimpflege ist ein Pflegestandard. Ohne Reinigung sammeln sich Sekrete an, die das Infektionsrisiko erhöhen.",
              explanationB1: "Nein — täglich waschen ist wichtig. Ohne Reinigung gibt es Sekrete, die Probleme machen.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Meatus urethrae"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 10: komplikationen-fruehzeichen (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-komplikationen",
    themaId: "blasenkatheter",
    titel: "Komplikationen — Früherkennung und Notfälle",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Welche Komplikationen können bei einem Dauerkatheter auftreten? Überlege: Was geht kaputt, wenn ein Fremdkörper lange in einem empfindlichen Organ liegt?",
      antwort:
        "Komplikationen: 1) CAUTI (häufigste, 30-40%), 2) Via falsa (falscher Weg beim Legen — Notfall!), 3) Urethra-Striktur (Narbe = Verengung), 4) Ballonverletzung/-Platzen, 5) Urolithiasis (Steine am Katheter), 6) Paraphimose (Mann, Notfall!), 7) Blutung, 8) Druckulcus Harnröhre. Tägliche Beobachtung: Menge, Farbe, Geruch, Schmerz, Fieber, Harnröhreneingang.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Komplikationen: 1) CAUTI (häufigste), 2) Via falsa (falscher Weg beim Legen), 3) Urethra-Striktur (Narbe = Verengung), 4) Ballonverletzung, 5) Urolithiasis (Steine am Katheter), 6) Paraphimose (Vorhaut), 7) Blutung, 8) Harnröhrenreizung/Druckulcus.",
      textB1:
        "Komplikationen beim Dauerkatheter: 1) Infektion (CAUTI, am häufigsten), 2) Harnröhre kaputt (Via falsa), 3) Narbe, 4) Ballon platzt, 5) Steine am Katheter, 6) Paraphimose (Vorhaut), 7) Blutung, 8) Druckstellen in der Harnröhre.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-10",
        phase: 1,
        stepType: "text",
        bloomLevel: 4,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "EAUN Guideline (2021)", "AWMF S3-Leitlinie HWI (2017, Update 2024)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-komplikationen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "Komplikationen — Früherkennung und Maßnahmen",
          body: "**Komplikationen des Dauerkatheters** (KRINKO 2015, EAUN 2021):\n\n| Komplikation | Zeichen | Sofort-Maßnahme |\n|---|---|---|\n| **CAUTI** (30-40%) | Fieber, trüber Urin, Delir bei Alten | Arzt, Urinprobe |\n| **Via falsa** | starke Blutung, kein Urinfluss | **SOFORT Arzt!** Nicht blocken! |\n| **Urethra-Striktur** | schwieriges Legen, dünner Harnstrahl | Urologe, Bougierung |\n| **Ballon platzt** | Katheterfragmente | Arzt, ggf. Zystoskopie |\n| **Urolithiasis** | Katheter verstopft | Katheterwechsel |\n| **Paraphimose** | Vorhaut geschwollen, schmerzhaft | **Notfall!** Sofort Arzt |\n| **Blutung** | roter Urin, Koagel | Arzt, ggf. Spülkatheter |\n| **Druckulcus** | Schmerz, Sekret, Entzündung | Katheter entfernen, Arzt |\n\n**Tägliche Beobachtung**: Urinmenge, Farbe, Geruch, Schmerzen, Fieber, Harnröhreneingang. **Pflegerische Dokumentation essenziell!**",
          glossarBegriffe: ["Via falsa", "Striktur", "Paraphimose"],
        },
        contentB1: {
          title: "Komplikationen — Früherkennung und Maßnahmen",
          body: "**Komplikationen und was du tun musst:**\n\n| Was passiert | Zeichen | Was du tust |\n|---|---|---|\n| **Infektion (CAUTI)** | Fieber, trüber Urin, Verwirrtheit | Arzt holen, Urinprobe |\n| **Weg kaputt (Via falsa)** | Viel Blut, kein Urin | **Sofort Arzt!** Nicht aufblasen! |\n| **Narbe (Striktur)** | Schwacher Harnstrahl später | Urologe |\n| **Ballon platzt** | Stücke in der Blase | Arzt |\n| **Steine** | Katheter verstopft | Neuer Katheter |\n| **Paraphimose** | Vorhaut hinten, dick, schmerzhaft | **Notfall!** Sofort Arzt |\n| **Blutung** | Rot im Urin | Arzt, ggf. Spülkatheter |\n| **Druckstelle** | Schmerz, Sekret | Katheter raus, Arzt |\n\n**Jeden Tag beobachten**: Wie viel Urin? Welche Farbe? Riecht er schlecht? Schmerzen? Fieber? Rote Stelle um den Katheter?\n**Immer dokumentieren!**",
          glossarBegriffe: ["Via falsa", "Striktur", "Paraphimose"],
        },
        question: {
          fragetext: "Während der Katheterisierung beim Mann kommt es zu starker Blutung und kein Urin fließt. Was tust du?",
          optionen: [
            {
              text: "Fester drücken — der Widerstand geht dann weg.",
              isCorrect: false,
              explanation: "NIEMALS — das ist Via falsa. Fester drücken vergrößert die Verletzung massiv. Blut + kein Urin = STOP.",
              explanationB1: "NIEMALS — Blut + kein Urin = Fehler. Mehr Druck macht es schlimmer.",
            },
            {
              text: "Katheter an Ort und Stelle belassen (nicht blocken, nicht ziehen), SOFORT Arzt rufen — Verdacht auf Via falsa.",
              isCorrect: true,
              explanation: "Genau — Blutung + kein Urinfluss = Via falsa (falscher Weg). Katheter belassen (nicht ziehen, nicht blocken), sofort Arzt. Urologischer Notfall! (KRINKO 2015, EAUN 2021)",
              explanationB1: "Richtig — Blut + kein Urin = STOP! Katheter drin lassen (nicht aufblasen, nicht raus), sofort Arzt. Das ist ein Notfall.",
            },
            {
              text: "Katheter sofort herausziehen und neu anfangen.",
              isCorrect: false,
              explanation: "Nein — bei Verdacht auf Via falsa den Katheter nicht ziehen und nicht neu anlegen. Arzt informieren, der Katheter bleibt in situ.",
              explanationB1: "Nein — Katheter drin lassen, nicht rausziehen. Sofort Arzt holen.",
            },
            {
              text: "Ballon schnell blocken, damit der Katheter sitzt.",
              isCorrect: false,
              explanation: "Nein — Ballon aufblasen bei Via falsa würde die Harnröhre zerreißen. Katheter belassen, Arzt holen.",
              explanationB1: "Nein — Ballon aufblasen macht alles viel schlimmer. Sofort Arzt.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Via falsa", "Striktur", "Paraphimose"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 11: katheterentfernung-maximum-regel (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-entfernung-maximum",
    themaId: "blasenkatheter",
    titel: "Katheterentfernung und Maximum-Regel",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Ein Patient hat seit 3 Tagen einen Katheter nach einer Hüft-OP. Er kann wieder selbst aufstehen. Was tust du? Wer entscheidet, wann der Katheter raus kann?",
      antwort:
        "Maximum-Regel (KRINKO 2015): So kurz wie möglich — täglich Indikation prüfen. Entfernung: 1) Ballon mit Spritze ENTleeren (passiv absaugen, nie reindrücken!). 2) Katheter langsam ziehen. 3) Dokumentieren. 4) Bis zu 6h auf erste Miktion warten. Blasentraining (Abklemmen) ist laut Cochrane 2024 nicht mehr Standard.",
    },
    stufe2: {
      typ: "hinweis",
      text: "**Maximum-Regel** (KRINKO 2015): Jeder Liegetag erhöht das CAUTI-Risiko — also so **kurz wie möglich**. Tägliche Indikationsprüfung! Vor Entfernung: Blasentraining (3-6h abklemmen) umstritten. Entfernung: Ballon entleeren (nicht blocken!), Katheter zügig ziehen.",
      textB1:
        "**Maximum-Regel** (KRINKO 2015): Der Katheter muss **so kurz wie möglich** liegen. Jeden Tag fragen: Kann er raus? Früher war Blasentraining üblich (abklemmen) — heute umstritten. Ziehen: Ballon **leer machen** (nicht rein!), Katheter raus, fertig.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-11",
        phase: 1,
        stepType: "sequencing",
        bloomLevel: 4,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "Cochrane Review (2013, Update 2024)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-entfernung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Maximum-Regel und Katheterentfernung",
          body: "**Maximum-Regel** (KRINKO 2015, CDC/HICPAC 2009):\n\n> **So kurz wie möglich, so lang wie nötig.**\n\n**Tägliche Indikationsprüfung** (Pflegestandard):\n- Ist die Indikation noch gegeben?\n- Kann der Patient spontan Wasser lassen?\n- Kann auf ISK, Kondomurinal oder Einlagen umgestellt werden?\n- Bei OP-Patient: Sobald mobil + spontanes Wasserlassen möglich → raus!\n\n**Blasentraining** (früher Standard, heute nicht mehr empfohlen):\n- Cochrane 2013/2024: Kein Vorteil gegenüber direkter Entfernung. Direkt ziehen!\n\n**Entfernung Schritt für Schritt:**\n1. Aufklärung, Einmalhandschuhe\n2. **Ballon ENTleeren** — mit Spritze passiv absaugen (nicht reindrücken!)\n3. Katheter **langsam, gleichmäßig ziehen** (1-2 Sek)\n4. Material entsorgen, Dokumentation\n5. **Beobachtung**: Wann erste Miktion? Restharn?\n6. Falls nach 6h kein spontanes Wasserlassen: Arzt informieren (Harnverhalt?)",
          glossarBegriffe: ["Maximum-Regel", "Harnverhalt"],
        },
        contentB1: {
          title: "Maximum-Regel und Katheterentfernung",
          body: "**Maximum-Regel — Die wichtigste Regel:**\n\n> **So kurz wie möglich, so lang wie nötig.**\n\n**Jeden Tag fragen:**\n- Brauchen wir den Katheter noch?\n- Kann der Patient wieder selbst Wasser lassen?\n- Nach OP: Wenn der Patient aufstehen kann + selbst Wasser lassen kann → raus!\n\n**Blasentraining** (früher üblich, heute nicht mehr):\n- Studien (Cochrane 2024) sagen: Bringt nichts. Einfach direkt ziehen.\n\n**So ziehst du den Katheter:**\n1. Patient aufklären, Einmalhandschuhe\n2. **Ballon leer machen** — mit Spritze Wasser rausziehen (nicht reindrücken!)\n3. Katheter **langsam und gleichmäßig** rausziehen (1-2 Sek)\n4. In gelben Sack, dokumentieren\n5. **Beobachten**: Wann pinkelt er wieder? Wieviel Restharn?\n6. Wenn nach **6 Stunden** kein Urin kommt: **Arzt informieren** (Harnverhalt?)",
          glossarBegriffe: ["Maximum-Regel", "Harnverhalt"],
        },
        question: {
          fragetext: "Du entfernst einen Dauerkatheter. Nach 2 Stunden hat der Patient noch nicht uriniert. Was tust du?",
          optionen: [
            {
              text: "Sofort neuen Katheter legen — nach 2 Stunden ist ein Harnverhalt sicher.",
              isCorrect: false,
              explanation: "Nicht ganz — bis zu 6 Stunden warten auf erste spontane Miktion ist normal, besonders nach längerer Katheterzeit. Erst nach 6h ohne Miktion: Arzt informieren.",
              explanationB1: "Nicht ganz — 6 Stunden warten ist normal. Erst nach 6 Stunden ohne Pinkeln: Arzt holen.",
            },
            {
              text: "Weiterwarten — bis zu 6 Stunden ist normal. Flüssigkeitszufuhr fördern.",
              isCorrect: true,
              explanation: "Genau — bis zu 6 Stunden nach Katheterentfernung ohne spontane Miktion ist normal (KRINKO 2015). Ausreichende Flüssigkeitszufuhr fördern. Erst nach 6h: Arzt, Blasenscan, ggf. ISK.",
              explanationB1: "Richtig — 6 Stunden Geduld ist normal. Viel trinken lassen. Erst danach Arzt holen.",
            },
            {
              text: "Blasentraining — Katheter 3 Stunden abklemmen, dann öffnen.",
              isCorrect: false,
              explanation: "Nicht mehr aktuell — Blasentraining ist laut Cochrane 2024 nicht mehr Standard. Direkt ziehen und abwarten.",
              explanationB1: "Nicht mehr aktuell — Blasentraining (abklemmen) ist heute nicht mehr empfohlen (Cochrane 2024).",
            },
            {
              text: "Auf den Bauch des Patienten drücken — das stimuliert das Wasserlassen.",
              isCorrect: false,
              explanation: "Nicht empfohlen — das ist keine evidenzbasierte Maßnahme. Flüssigkeitszufuhr, Aufstehen, Wärme können helfen. Arzt bei 6h Harnverhalt.",
              explanationB1: "Nicht empfohlen. Viel trinken, aufstehen, warten. Nach 6 Stunden Arzt.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Maximum-Regel", "Harnverhalt"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 12: alternativen-zum-dauerkatheter (Bloom 4)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-alternativen",
    themaId: "blasenkatheter",
    titel: "Alternativen zum Dauerkatheter",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Herr B., 82, hat Inkontinenz und Demenz. Die Familie fragt: 'Kann er einen Katheter bekommen?' Was sind die Alternativen zum Dauerkatheter — und warum sind sie meistens besser?",
      antwort:
        "Alternativen: 1) ISK (Goldstandard bei Restharn, 4-6x/Tag, kaum CAUTI-Risiko). 2) Kondomurinal (Mann, bei Inkontinenz ohne Restharn, täglich wechseln). 3) Inkontinenz-Einlagen (Hautpflege!). 4) Toilettentraining / Timed Voiding (alle 2-3h, auch bei Demenz wirksam). 5) Toilettenstuhl. (KRINKO 2015, EAUN 2021)",
    },
    stufe2: {
      typ: "hinweis",
      text: "Alternativen zum DK: 1) **ISK** (Intermittierende Selbstkatheterisierung — Goldstandard bei Restharn), 2) **Kondomurinal** (Mann, bei Inkontinenz), 3) **Inkontinenz-Einlagen/Windeln**, 4) **Toilettentraining** (zeitgesteuerte Miktion), 5) **Toilettenstuhl**.",
      textB1:
        "Alternativen zum Dauerkatheter: 1) **Einmalkatheter (ISK)** bei Restharn, 2) **Kondomurinal** (Kondom mit Schlauch, für Männer), 3) **Einlagen/Windeln**, 4) **Toilettentraining** (feste Zeiten), 5) **Toilettenstuhl** neben dem Bett.",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-12",
        phase: 1,
        stepType: "reveal",
        bloomLevel: 4,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "EAUN Guideline (2021)", "AWMF S3-Leitlinie HWI (2024)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-alternativen",
        tag: "pflege",
        displayFormat: "checklist",
        contentC1: {
          title: "5 Alternativen zum Dauerkatheter",
          body: "**Alternativen zum transurethralen Dauerkatheter** (KRINKO 2015, EAUN 2021):\n\n**1. ISK — Goldstandard bei Restharn**\n- 4-6x/Tag Einmalkatheter (zu Hause sauber, nicht steril)\n- Bei neurogener Blase, MS, Querschnitt, hypoaktivem Detrusor\n- Kaum CAUTI-Risiko\n\n**2. Kondomurinal (nur Mann, bei Inkontinenz ohne Restharn)**\n- Täglich wechseln, Haut täglich inspizieren\n- Kontraindikation: Hautläsionen, Harnverhalt\n\n**3. Inkontinenz-Hilfsmittel**\n- Mehrmals täglich wechseln, Haut pflegen (Barriere-Creme)\n- Keine Infektionsgefahr, aber Dermatitis möglich\n\n**4. Toilettentraining / Timed Voiding**\n- Alle 2-3h zur Toilette bringen\n- Bei Demenz wirksam — reduziert Inkontinenzepisoden\n\n**5. Toilettenstuhl / Urinflasche**\n- Für bettlägerige Patienten mit erhaltener Blasenkontrolle\n- Niedrigschwellig, erhält Würde",
          glossarBegriffe: ["ISK", "Kondomurinal"],
        },
        contentB1: {
          title: "5 Alternativen zum Dauerkatheter",
          body: "**Alternativen zum Dauerkatheter:**\n\n**1. Einmalkatheter (ISK) — der beste Weg bei Restharn**\n- Patient (oder Pflege) macht **4-6 mal am Tag** einen Einmalkatheter\n- Gut bei: Querschnittlähmung, MS, schwache Blasenmuskeln\n- Fast keine Infektionen\n\n**2. Kondomurinal (nur Mann)**\n- Kondom mit Schlauch, sammelt Urin im Beutel\n- Jeden Tag wechseln, Haut pflegen\n- Nicht bei: offener Haut, Harnverhalt\n\n**3. Einlagen / Windeln**\n- Oft wechseln, Haut gut pflegen (Creme)\n\n**4. Toilettentraining**\n- Alle 2-3 Stunden zur Toilette bringen\n- Gut bei Demenz — weniger Inkontinenz-Episoden\n\n**5. Toilettenstuhl neben dem Bett**\n- Für Menschen im Bett, die noch Bescheid sagen können",
          glossarBegriffe: ["ISK", "Kondomurinal"],
        },
        question: {
          fragetext: "Was ist der Goldstandard bei chronischem Restharn (Alternative zum Dauerkatheter)?",
          optionen: [
            {
              text: "Dauerkatheter — der sitzt zuverlässig.",
              isCorrect: false,
              explanation: "Nicht ganz — bei chronischem Restharn ist ISK (Intermittierende Selbstkatheterisierung) der Goldstandard. Deutlich weniger CAUTI-Risiko als DK.",
              explanationB1: "Nicht ganz — ISK ist besser als Dauerkatheter. Weniger Infektionen.",
            },
            {
              text: "ISK — Intermittierende Selbstkatheterisierung, 4-6x/Tag. Deutlich weniger CAUTI-Risiko.",
              isCorrect: true,
              explanation: "Genau — ISK ist der Goldstandard bei chronischem Restharn. 4-6x täglich Einmalkatheter, zu Hause sauber (nicht steril). Deutlich weniger CAUTI-Risiko als Dauerkatheter. (EAUN 2021, AWMF 2024)",
              explanationB1: "Richtig — ISK ist der beste Weg bei Restharn. 4-6 mal am Tag einmalkatheterisieren. Weniger Infektionen als Dauerkatheter.",
            },
            {
              text: "Kondomurinal — das ist das Sicherste.",
              isCorrect: false,
              explanation: "Nicht ganz — Kondomurinal ist nur für Männer und nur bei Inkontinenz OHNE Restharn. Bei Restharn ist ISK die Wahl.",
              explanationB1: "Nicht ganz — Kondomurinal ist nur für Männer, und nur wenn kein Restharn da ist.",
            },
            {
              text: "Blasentraining — der Patient übt das Zurückhalten.",
              isCorrect: false,
              explanation: "Nicht ganz — Blasentraining hilft bei Dranginkontinenz, nicht bei Restharn. ISK ist die Wahl bei Restharn.",
              explanationB1: "Nicht ganz — das hilft bei anderen Blasenproblemen, nicht bei Restharn.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["ISK", "Kondomurinal"],
    karteikarten: [],
  },

  // ═══════════════════════════════════════════
  // Baustein 13: spuelung-indikation-und-technik (Bloom 3)
  // ═══════════════════════════════════════════
  {
    bausteinId: "blasenkatheter-spuelung",
    themaId: "blasenkatheter",
    titel: "Blasenspülung — Indikation und Kompetenzgrenzen",
    stufe1: {
      typ: "denkfrage",
      frage:
        "Die Kollegin sagt: 'Der Katheter ist verstopft, ich spüle mal durch mit Kochsalzlösung.' Darf sie das? Wer entscheidet, wann gespült wird?",
      antwort:
        "Blasenspülung nur auf ärztliche Anordnung (§ 630a BGB — Vorbehaltsaufgabe). Indikationen: Blutkoagel, Obstruktion, nach urologischer OP. Technik: streng steril, NaCl 0,9% körperwarm, 100-500 ml, sanft injizieren, passiv zurücklaufen lassen. NIEMALS prophylaktisch (KRINKO 2015). Ohne Anordnung: Lage prüfen, Knick?, Patient umlagern — dann Arzt.",
    },
    stufe2: {
      typ: "hinweis",
      text: "Blasenspülung nur **auf ärztliche Anordnung** (§ 630a BGB) bei: Blutkoagel, Obstruktion, nach urologischer OP. Technik: **streng steril**, geschlossenes System beibehalten. **NIEMALS prophylaktisch** (KRINKO 2015). Lösung: NaCl 0,9% steril, körperwarm.",
      textB1:
        "Spülen **nur wenn der Arzt es sagt** (§ 630a BGB). Gründe: Blut-Klumpen, Katheter verstopft, nach OP. **Streng steril** arbeiten. **NIEMALS zum Vorbeugen spülen** (KRINKO 2015). Lösung: NaCl 0,9% steril, körperwarm (nicht kalt!).",
    },
    stufe3: {
      typ: "erklaerung",
      step: {
        stepId: "ce02-bk-wb-13",
        phase: 1,
        stepType: "categorize",
        bloomLevel: 3,
        kompetenzbereich: "III.2",
        quellen: ["KRINKO (2015)", "§ 630a BGB (Behandlungsvertrag)", "§ 4 PflBG (Vorbehaltsaufgaben der Pflege)"],
        track: "basis",
        modus: "entdecker",
        lernziel: "ce02-blasenkatheter-spuelung",
        tag: "pflege",
        displayFormat: "stepbystep",
        contentC1: {
          title: "Blasenspülung — Indikation, Technik, Grenzen",
          body: "**Blasenspülung** (KRINKO 2015, § 630a BGB):\n\n**Pflegerechtlich**: Blasenspülung ist **ärztlich anordnungspflichtig** (§ 630a BGB, Vorbehaltsaufgabe). Pflege führt nach Anordnung durch.\n\n**Indikationen** (streng begrenzt):\n1. Verstopfung durch Blutkoagel oder Sediment\n2. Nach urologischer OP (TURP, Blasentumor) — meist Dauerspülung\n3. Nach Zystoskopie zur Reinigung\n4. **NICHT zur Infektionsprophylaxe** — kontraindiziert!\n\n**Technik — Einmalspülung:**\n1. Händedesinfektion, sterile Handschuhe\n2. **NaCl 0,9% steril, körperwarm** (nicht kalt → Blasenkrampf!)\n3. **100-500 ml** mit **steriler Blasenspritze** über Zuleitung\n4. Leicht injizieren, **passiv zurücklaufen lassen**\n5. **Geschlossenes System** möglichst erhalten\n6. Dokumentation: Menge, Aussehen Rücklauf\n\n**Ohne Anordnung darf Pflege:** Katheterlage prüfen, Knick/Klemme am Schlauch beseitigen, Patient umlagern, Flüssigkeitszufuhr prüfen — dann Arzt informieren.",
          glossarBegriffe: ["Blasenspülung"],
        },
        contentB1: {
          title: "Blasenspülung — Indikation, Technik, Grenzen",
          body: "**Blasenspülung — wann und wie:**\n\n**Wichtig**: Spülen darf nur **der Arzt anordnen** (§ 630a BGB).\n\n**Wann spült man?**\n1. Katheter verstopft durch Blut oder Sediment\n2. Nach Urologie-OP (meist Dauerspülung)\n3. Nach Zystoskopie\n4. **NIEMALS zum Vorbeugen** von Infektionen!\n\n**So spülst du — Einmalspülung:**\n1. Hände desinfizieren, sterile Handschuhe\n2. **NaCl 0,9% steril, körperwarm** (nicht kalt — sonst krampft die Blase!)\n3. **100-500 ml** mit **steriler Spritze** in den Katheter\n4. Leicht reindrücken, **zurücklaufen lassen**\n5. System **so wenig wie möglich öffnen**\n6. Dokumentieren: Menge, Aussehen\n\n**Was Pflege SELBST darf:** Lage prüfen, Knick kontrollieren, umlagern. Dann Arzt informieren.",
          glossarBegriffe: ["Blasenspülung"],
        },
        question: {
          fragetext: "Der Katheter eines Patienten läuft nicht mehr — kein Urin im Beutel. Was darfst du als Pflegekraft OHNE ärztliche Anordnung tun?",
          optionen: [
            {
              text: "Sofort mit NaCl 0,9% durchspülen, das geht schneller.",
              isCorrect: false,
              explanation: "Nicht ganz — Blasenspülung ist ärztliche Anordnung (§ 630a BGB). Ohne Anordnung nicht spülen — haftungsrechtlich problematisch.",
              explanationB1: "Nicht ganz — Spülen geht nur mit Arzt-Anordnung. Nicht einfach selbst spülen.",
            },
            {
              text: "Katheterlage prüfen, Knick/Klemme am Schlauch beseitigen, Patient umlagern — dann Arzt informieren.",
              isCorrect: true,
              explanation: "Genau — das sind Maßnahmen innerhalb der pflegerischen Eigenverantwortung. Die Spülung selbst ist Arzt-Anordnung (§ 630a BGB, KRINKO 2015).",
              explanationB1: "Richtig — erst selbst prüfen (Lage, Knick), dann Arzt informieren. Spülen nur mit Anordnung.",
            },
            {
              text: "Den Beutel leeren — vielleicht ist er zu voll.",
              isCorrect: false,
              explanation: "Leeren bei 2/3 Füllung ist korrekt, aber wenn kein Urin fließt liegt das Problem am Katheter, nicht am Beutel. Katheterlage und Schlauch prüfen zuerst.",
              explanationB1: "Den Beutel leeren reicht nicht — wenn kein Urin fließt, ist der Katheter das Problem. Erst prüfen.",
            },
            {
              text: "Nichts — nur der Arzt darf handeln.",
              isCorrect: false,
              explanation: "Nicht ganz — Pflege darf und soll selbstständig Katheterlage prüfen, Knicke beseitigen, Patient umlagern, bevor der Arzt gerufen wird.",
              explanationB1: "Nicht ganz — Pflege darf schon selbst prüfen: Lage, Knick, umlagern. Dann Arzt.",
            },
          ],
        },
      },
    },
    glossarBegriffe: ["Blasenspülung"],
    karteikarten: [],
  },
];

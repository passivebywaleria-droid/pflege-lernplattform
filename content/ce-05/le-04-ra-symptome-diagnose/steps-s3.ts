// Lektion 04: RA — Symptome, Formen, Diagnose
// CE 05 — Block B: Rheumatoide Arthritis
// Session 3: "Transfer & Prüfung" (Bloom B4-B6, ~30 Min)
// Neue Patientin: Elisabeth Richter, 67, seronegative RA
// Erlebnis-Konzept v2 — 8 Modi, Brilliant-Prinzip, Interleaving

import type { ContentStep } from "../_types";

export const STEPS_S3: ContentStep[] = [
  // =============================================================
  // Phase 1 (Min 0-3): CHECKPOINT — Boss-Vorschau + Prüfungs-MC
  // =============================================================

  // ─── Step 1: Boss-Vorschau ───
  {
    stepId: "s3-01-text-boss",
    phase: 1,
    stepType: "text",
    modus: "checkpoint",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024"],
    xpValue: 5,
    contentC1: {
      title: "Boss-Vorschau: Deine Abschlussaufgabe",
      body: "Eine echte Prüfungsfrage wartet — du musst erst alle Steps schaffen, um sie freizuschalten.\n\nNeue Patientin: 67 Jahre, ganz andere Symptome als Mehmet. Du wirst vergleichen, analysieren und Entscheidungen treffen.",
      fallbezug: "Mehmet kennst du bereits. Jetzt kommt Fall 2 — anders, aber gleiche Erkrankung.",
    },
    contentB1: {
      title: "Deine Abschlussaufgabe",
      body: "Eine schwere Frage wartet — du musst erst alle Steps schaffen.\n\nNeue Patientin: Sie hat auch RA — aber ganz anders als Mehmet. Du wirst die beiden Fälle vergleichen.",
    },
  },

  // ─── Step 2: Prüfungs-MC mit Interleaving ───
  {
    stepId: "s3-02-mc-pruefung",
    phase: 1,
    stepType: "mc",
    modus: "challenge",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "S3-Leitlinie RA DGRh 2024", "AMBOSS"],
    xpValue: 15,
    contentC1: {
      title: "Prüfungs-MC: RA-Diagnostik",
      body: "Eine 43-jährige Patientin stellt sich mit seit 8 Wochen bestehenden symmetrischen Schwellungen der MCP-Gelenke II-IV beidseits vor. Die Morgensteifigkeit beträgt 90 Minuten. CRP 28 mg/l, BSG 42 mm/h. Sie berichtet zudem über ausgeprägte Fatigue.",
      fallbezug: "Wende die ACR/EULAR-Klassifikationskriterien aus Session 2 an.",
    },
    contentB1: {
      title: "Prüfungsfrage: RA erkennen",
      body: "Eine Frau, 43 Jahre alt, hat seit 8 Wochen geschwollene Fingergelenke. Beide Hände gleich. Die Steifigkeit am Morgen dauert 90 Minuten. Die Entzündungswerte sind hoch. Sie ist sehr müde.",
    },
    question: {
      fragetext: "Welcher nächste diagnostische Schritt hat die höchste Priorität?",
      optionen: [
        {
          text: "Röntgen beider Hände und Füße in 2 Ebenen",
          isCorrect: false,
          explanation: "Röntgen ist wichtig, zeigt aber in der Frühphase (<6 Monate) oft noch keine Erosionen. Zuerst brauchen wir serologische Marker.",
        },
        {
          text: "Anti-CCP-Antikörper und Rheumafaktor bestimmen",
          isCorrect: true,
          explanation: "Richtig! Anti-CCP (Spezifität >95%) und RF sind die entscheidenden serologischen Marker bei dieser Konstellation.",
        },
        {
          text: "MRT der Hände mit Kontrastmittel",
          isCorrect: false,
          explanation: "MRT ist sensitiver als Röntgen, aber als Erstdiagnostik zu aufwändig. Zuerst Labor, dann Bildgebung wenn nötig.",
        },
        {
          text: "Gelenkpunktion der MCP-Gelenke",
          isCorrect: false,
          explanation: "Gelenkpunktion bei MCP ist technisch schwierig und bei V.a. RA nicht die Erstmaßnahme. Sie dient dem Ausschluss von septischer Arthritis oder Gicht.",
        },
        {
          text: "Harnsäure im Serum bestimmen (Interleaving: Anatomie/Gicht)",
          isCorrect: false,
          explanation: "Harnsäure ist relevant bei Gicht, nicht bei RA. Gicht betrifft typischerweise das Großzehengrundgelenk (Podagra). Guter Gedanke zur Differentialdiagnose!",
        },
      ],
    },
    wusstestDuDas: "Die ACR/EULAR-Klassifikationskriterien von 2010 vergeben Punkte für Gelenkbeteiligung, Serologie, Entzündungswerte und Symptomdauer. Ab 6 Punkten gilt RA als gesichert.",
  },

  // =============================================================
  // Phase 2 (Min 3-8): STORY — Neue Patientin Elisabeth Richter
  // =============================================================

  // ─── Step 3: Story — Elisabeth Richter ───
  {
    stepId: "s3-03-text-elisabeth",
    phase: 2,
    stepType: "text",
    modus: "story",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "S3-Leitlinie RA DGRh 2024"],
    xpValue: 5,
    contentC1: {
      title: "Neue Patientin: Elisabeth Richter, 67 Jahre",
      body: "Aufnahme auf die rheumatologische Station:\n\nElisabeth Richter, 67 Jahre, pensionierte Lehrerin. Seit 2 Jahren zunehmende Gelenkbeschwerden — zuerst Knie, dann Schultern, seit 6 Monaten auch Handgelenke.\n\nDas Besondere: RF und Anti-CCP sind negativ. Trotzdem hat sie RA — eine seronegative RA (ca. 20-30% der Patienten).\n\n| Befund | Wert |\n|--------|------|\n| Alter | 67 Jahre |\n| RF | negativ |\n| Anti-CCP | negativ |\n| CRP | 34 mg/l (erhöht) |\n| BSG | 38 mm/h (erhöht) |\n| DAS28 | 4.9 (hohe Aktivität) |\n| Befall | Knie, Schultern, Handgelenke |",
      fallbezug: "Im Vergleich zu Mehmet (seropositive RA, kleine Gelenke) betrifft Elisabeths RA vor allem große Gelenke.",
      glossarBegriffe: ["Seronegative RA", "DAS28", "Rheumafaktor"],
    },
    contentB1: {
      title: "Neue Patientin: Elisabeth Richter",
      body: "Elisabeth Richter, 67 Jahre, früher Lehrerin. Seit 2 Jahren Gelenkschmerzen — zuerst Knie, dann Schultern, jetzt Handgelenke.\n\nDer Bluttest für Rheumafaktor ist NEGATIV. Trotzdem hat sie RA — seronegative RA (20-30% der Patienten).\n\nDie Entzündungswerte (CRP, BSG) sind erhöht. DAS28 ist 4.9 — hohe Krankheitsaktivität.",
      fallbezug: "Mehmet hat kleine Gelenke betroffen (Finger). Elisabeth hat große Gelenke betroffen (Knie, Schultern).",
    },
  },

  // ─── Step 4: Dialog — Elisabeth erzählt ihre Geschichte ───
  {
    stepId: "s3-04-dialog-elisabeth",
    phase: 2,
    stepType: "dialog",
    modus: "story",
    bloomLevel: 4,
    kompetenzbereich: "KB-II.2",
    quellen: ["S3-Leitlinie RA DGRh 2024"],
    xpValue: 30,
    contentC1: {
      title: "Elisabeth erzählt ihre Geschichte",
      body: "Du führst das Aufnahmegespräch mit Frau Richter auf der rheumatologischen Station.",
      fallbezug: "Achte auf die Unterschiede zu Mehmets Symptompräsentation.",
    },
    contentB1: {
      title: "Gespräch mit Frau Richter",
      body: "Du sprichst mit Frau Richter. Sie erzählt dir, wie die Krankheit bei ihr angefangen hat.",
    },
    question: {
      patientName: "Elisabeth Richter",
      fragetext: "Frau Richter erzählt von ihren Beschwerden.",
      dialogPhases: [
        {
          context: "Frau Richter sitzt auf der Bettkante. Sie bewegt die rechte Schulter vorsichtig und verzieht das Gesicht. 'Guten Tag. Ich bin froh, dass endlich jemand zugehört hat. Zwei Jahre lang haben mir die Ärzte gesagt, das sei Arthrose. Weil der Rheumafaktor negativ war.'",
          contextB1: "Frau Richter sitzt auf dem Bett. Ihre Schulter tut weh. Sie sagt: 'Die Ärzte dachten 2 Jahre lang, ich habe Arthrose. Weil der Bluttest normal war.'",
          options: [
            {
              text: "Das klingt sehr frustrierend, Frau Richter. Erzählen Sie mir — wie hat alles angefangen? Welches Gelenk war zuerst betroffen?",
              textB1: "Das war bestimmt schwer für Sie. Was hat zuerst wehgetan?",
              patientResponse: "Es fing mit dem rechten Knie an, vor 2 Jahren. Ich dachte, ich hätte mich beim Wandern überanstrengt. Dann kam das linke Knie dazu. Dann die Schultern. Immer beide Seiten, immer gleichzeitig. Und morgens komme ich kaum aus dem Bett — 45 Minuten dauert es, bis alles einigermaßen geht.",
              patientResponseB1: "Zuerst das rechte Knie, vor 2 Jahren. Dann das linke Knie. Dann beide Schultern. Immer beide Seiten gleich. Morgens bin ich 45 Minuten steif.",
              score: 3,
              feedback: "Sehr gut! Empathisch und gezielt. Symmetrischer Befall großer Gelenke + Morgensteifigkeit sind wichtige diagnostische Hinweise.",
              feedbackB1: "Sehr gut! Du fragst freundlich und nach den wichtigen Informationen. Beide Seiten gleich betroffen — das ist typisch für RA.",
            },
            {
              text: "Ihr Rheumafaktor war negativ — warum vermuten Sie dann RA?",
              textB1: "Aber der Bluttest war doch normal?",
              patientResponse: "Genau das haben alle gesagt! Aber eine junge Rheumatologin hat dann einen Ultraschall gemacht. Da hat man die Entzündung in den Gelenken gesehen. Und mit einem MRT auch.",
              patientResponseB1: "Das haben die anderen Ärzte auch gesagt. Aber dann hat eine Ärztin mit Ultraschall die Entzündung gesehen.",
              score: 2,
              feedback: "Fachlich relevant, aber der Tonfall wirkt wie Zweifel an der Diagnose. 20-30% der RA-Patienten sind seronegativ — Bildgebung sichert die Diagnose.",
              feedbackB1: "Die Frage ist wichtig. Aber pass auf: Es klingt, als ob du ihr nicht glaubst. 20-30% der RA-Patienten haben einen normalen Bluttest.",
            },
          ],
        },
        {
          context: "Frau Richter schaut auf ihre Hände. 'Das Schlimmste ist: Ich kann nicht mehr schreiben. 35 Jahre habe ich Kindern das Schreiben beigebracht. Und jetzt kann ich selbst keinen Brief an meine Enkelin schreiben. Die Handgelenke...' Sie bricht ab.",
          contextB1: "Frau Richter schaut auf ihre Hände. 'Ich kann nicht mehr schreiben. Ich war 35 Jahre Lehrerin. Jetzt kann ich meiner Enkelin keinen Brief schreiben.'",
          options: [
            {
              text: "Das berührt mich, Frau Richter. Ihre Hände waren Ihr Werkzeug als Lehrerin. Seit wann sind die Handgelenke betroffen? Und wie äußert sich das im Alltag?",
              textB1: "Das tut mir leid. Seit wann tun die Handgelenke weh? Was können Sie nicht mehr machen?",
              patientResponse: "Seit etwa 6 Monaten. Ich kann keine Flaschen mehr aufdrehen, keine Tür öffnen wenn sie klemmt, und Messer und Gabel halten wird immer schwerer. Morgens am schlimmsten.",
              patientResponseB1: "Seit 6 Monaten. Flaschen aufdrehen geht nicht mehr. Messer und Gabel sind schwer zu halten. Morgens ist es am schlimmsten.",
              score: 3,
              feedback: "Empathisch und fachlich zugleich. Griffkraft-Minderung und Alltagseinschränkungen sind pflege-relevante Assessmentdaten.",
              feedbackB1: "Sehr gut! Du verstehst, wie traurig Frau Richter ist. Und du fragst nach dem Alltag — das ist wichtig für die Pflege.",
            },
            {
              text: "Es gibt Hilfsmittel die Ihnen helfen können — zum Beispiel dicke Griffe für Stifte.",
              textB1: "Es gibt Hilfen — zum Beispiel dicke Stifte.",
              patientResponse: "Ja, ich habe schon so einen Stift. Aber es geht mir nicht um den Stift. Es geht darum, dass mein Körper mich im Stich lässt.",
              patientResponseB1: "Ich habe schon so einen Stift. Aber das ist nicht das Problem. Mein Körper macht nicht mehr mit.",
              score: 1,
              feedback: "Zu schnelle Problemlösung! Frau Richter braucht Empathie, nicht Hilfsmittelberatung. Erst zuhören, dann Lösungen.",
              feedbackB1: "Zu schnell! Frau Richter will erst gehört werden. Erst zuhören, dann Lösungen vorschlagen.",
            },
          ],
        },
        {
          context: "Du hast dir Notizen gemacht. Frau Richter fragt: 'Sagen Sie mal ehrlich — kann das noch besser werden? Oder ist das jetzt so für immer?'",
          contextB1: "Frau Richter fragt: 'Wird das noch besser? Oder bleibt das so?'",
          options: [
            {
              text: "Ich verstehe Ihre Sorge. Seronegative RA ist gut behandelbar. Es gibt Medikamente die die Entzündung bremsen können. Ihre Ärztin wird mit Ihnen einen Plan machen. Viele Patienten erleben deutliche Besserung.",
              textB1: "Ich verstehe, dass Sie sich Sorgen machen. Es gibt gute Medikamente. Ihre Ärztin wird einen Plan machen. Vielen Patienten geht es danach besser.",
              patientResponse: "Das hoffe ich. Ich will einfach morgens wieder aufstehen können und mit meiner Enkelin frühstücken. Das ist alles was ich will.",
              patientResponseB1: "Das hoffe ich. Ich will morgens wieder aufstehen können. Und mit meiner Enkelin frühstücken.",
              score: 3,
              feedback: "Professionell und ehrlich. Berechtigte Hoffnung ohne falsche Versprechen, Verweis auf ärztliche Therapieplanung.",
              feedbackB1: "Sehr gut! Du bist ehrlich und machst Mut. Du sagst, die Ärztin macht den Plan — das ist richtig. Du machst keine falschen Versprechen.",
            },
            {
              text: "Das wird schon wieder! Machen Sie sich keine Sorgen.",
              textB1: "Das wird bestimmt wieder gut!",
              patientResponse: "Hm. Das haben mir schon viele gesagt. Aber besser ist es nicht geworden in 2 Jahren.",
              patientResponseB1: "Das haben schon viele gesagt. Aber besser wurde es nicht.",
              score: 1,
              feedback: "Leere Beruhigung. Frau Richter verdient ehrliche Antworten — Bagatellisieren zerstört Vertrauen.",
              feedbackB1: "Das ist zu einfach. Frau Richter merkt, dass du sie nur beruhigen willst. Sie braucht ehrliche Antworten.",
            },
          ],
        },
        {
          context: "Zum Schluss fragst du nach weiteren Symptomen. Frau Richter überlegt: 'Ach ja — seit einigen Wochen habe ich so kleine harte Knoten am Ellenbogen. Und manchmal sind meine Augen ganz trocken. Hat das was damit zu tun?'",
          contextB1: "Frau Richter sagt: 'Ich habe harte Knoten am Ellenbogen. Und meine Augen sind oft trocken. Gehört das dazu?'",
          options: [
            {
              text: "Gute Beobachtung! Die Knoten könnten Rheumaknoten sein — die kommen bei RA vor. Und trockene Augen können ein Zeichen für ein begleitendes Sicca-Syndrom sein. Ich notiere beides für die Ärztin.",
              textB1: "Gut, dass Sie das sagen! Die Knoten gehören zur RA. Und trockene Augen können auch dazugehören. Ich schreibe das auf für die Ärztin.",
              patientResponse: "Oh, das wusste ich nicht. Ich dachte die Knoten wären Überbeine. Gut dass ich gefragt habe.",
              patientResponseB1: "Das wusste ich nicht. Gut, dass ich gefragt habe.",
              score: 3,
              feedback: "Excellent! Rheumaknoten treten bei 20-30% der seropositiven RA auf. Sicca-Symptomatik weist auf ein sekundäres Sjögren-Syndrom hin.",
              feedbackB1: "Sehr gut! Die Knoten heißen Rheumaknoten. Trockene Augen können vom Sjögren-Syndrom kommen — das kommt oft zusammen mit RA vor. Du hast alles richtig erkannt.",
            },
            {
              text: "Das muss die Ärztin beurteilen. Ich bin kein Arzt.",
              textB1: "Das muss die Ärztin sagen. Ich bin kein Arzt.",
              patientResponse: "Natürlich. Ich dachte nur, vielleicht wissen Sie etwas darüber.",
              patientResponseB1: "Ja, schon. Aber vielleicht wissen Sie etwas darüber?",
              score: 2,
              feedback: "Formal korrekt, aber du nutzt dein Pflegewissen nicht. Als Pflegefachkraft solltest du extraartikuläre Manifestationen erkennen und dokumentieren.",
              feedbackB1: "Das stimmt, aber du weißt eigentlich mehr. Als Pflegekraft solltest du solche Zeichen erkennen und aufschreiben.",
            },
          ],
        },
      ],
    },
  },

  // ─── Step 5: Comparison — Mehmet vs. Elisabeth ───
  {
    stepId: "s3-05-comparison-vergleich",
    phase: 2,
    stepType: "comparison",
    modus: "entdecker",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "S3-Leitlinie RA DGRh 2024", "AMBOSS"],
    xpValue: 20,
    contentC1: {
      title: "Mehmet vs. Elisabeth: Zwei RA-Verläufe",
      body: "Gleiche Erkrankung — zwei völlig verschiedene Präsentationen. Vergleiche die beiden Fälle.",
      fallbezug: "Beide haben RA. Aber fast alles andere ist unterschiedlich.",
    },
    contentB1: {
      title: "Mehmet und Elisabeth im Vergleich",
      body: "Beide haben RA. Aber die Krankheit zeigt sich ganz anders.",
    },
    question: {
      fragetext: "Vergleiche die beiden RA-Verläufe:",
      comparison: {
        instruction: "Erkenne die Unterschiede zwischen den beiden RA-Verläufen.",
        columns: [
          { label: "Mehmet Demir", icon: "👤" },
          { label: "Elisabeth Richter", icon: "👤" },
        ],
        rows: [
          {
            criterion: "Alter",
            values: ["43 Jahre", "67 Jahre"],
          },
          {
            criterion: "Geschlecht",
            values: ["Männlich", "Weiblich"],
          },
          {
            criterion: "Serologie",
            values: ["RF+, Anti-CCP+ (seropositiv)", "RF-, Anti-CCP- (seronegativ)"],
            valuesB1: ["Bluttest positiv", "Bluttest negativ"],
          },
          {
            criterion: "Gelenkbefall",
            values: ["Kleine Gelenke (MCP II-IV beidseits)", "Große Gelenke (Knie, Schultern, Handgelenke)"],
            valuesB1: ["Kleine Gelenke (Finger)", "Große Gelenke (Knie, Schultern)"],
          },
          {
            criterion: "Verlauf",
            values: ["Akuter Beginn, 3 Monate, Erstdiagnose", "Schleichend über 2 Jahre, 2 Jahre fehldiagnostiziert"],
            valuesB1: ["Plötzlich, seit 3 Monaten, neu", "Langsam, seit 2 Jahren, erst spät erkannt"],
          },
          {
            criterion: "Prognose-Faktoren",
            values: ["Seropositiv → aggressiverer Verlauf möglich, aber: frühes Window of Opportunity", "Seronegativ → oft milderer Verlauf, aber: 2 Jahre Verzögerung"],
            valuesB1: ["Positiver Bluttest → kann schlimmer werden, ABER: früh erkannt", "Negativer Bluttest → oft milder, ABER: 2 Jahre zu spät erkannt"],
          },
        ],
      },
    },
    wusstestDuDas: "Seronegative RA macht ca. 20-30% aller RA-Fälle aus. Die Diagnose dauert oft länger, weil der Rheumafaktor als Screening-Marker fehlt.",
  },

  // =============================================================
  // Phase 3 (Min 8-15): PRAXIS-SIM + SORTIERSTATION + SCHREIBTISCH
  // =============================================================

  // ─── Step 6: Branching — Diagnostik planen ───
  {
    stepId: "s3-06-branching-diagnostik",
    phase: 3,
    stepType: "branching",
    modus: "praxis-sim",
    bloomLevel: 5,
    kompetenzbereich: "KB-I.2",
    quellen: ["S3-Leitlinie RA DGRh 2024", "AMBOSS"],
    xpValue: 30,
    contentC1: {
      title: "Diagnostik planen: Was ordnest du für Elisabeth an?",
      body: "Du besprichst dich mit der Stationsärztin. Sie fragt: 'Wir haben eine seronegative Patientin mit DAS28 4.9. Welchen diagnostischen Weg schlägst du vor?'",
      fallbezug: "Bei seronegativer RA ist die Bildgebung oft entscheidender als bei seropositiver.",
    },
    contentB1: {
      title: "Welche Untersuchungen braucht Elisabeth?",
      body: "Die Ärztin fragt dich: Elisabeth hat RA, aber der Bluttest ist negativ. Was sollen wir untersuchen?",
    },
    question: {
      fragetext: "Die Ärztin fragt nach deiner Einschätzung: Welcher diagnostische Weg ist bei seronegativer RA am sinnvollsten?",
      branchingOptions: [
        {
          text: "Zuerst nochmal RF und Anti-CCP wiederholen — vielleicht war der Test falsch-negativ",
          feedback: "Serokonversion kommt vor (10-15%), aber nach 2 Jahren und zweimalig negativen Werten unwahrscheinlich. Bildgebung bringt mehr.",
          isCorrect: false,
        },
        {
          text: "Gelenkultraschall (Arthrosonografie) zur Darstellung der Synovitis + ergänzend MRT bei unklarem Befund",
          feedback: "Perfekt! Bei seronegativer RA ist Bildgebung der Schlüssel. Ultraschall zeigt Synovitis in Echtzeit, Power-Doppler macht aktive Entzündung sichtbar.",
          isCorrect: true,
        },
        {
          text: "Direkt mit der Therapie beginnen — die klinischen Zeichen reichen für die Diagnose",
          feedback: "Nachvollziehbar, aber gefährlich. Ohne Bildgebung könntest du PsA oder Kristallarthropathie übersehen. Differentialdiagnose ist bei seronegativer RA besonders wichtig.",
          isCorrect: false,
        },
      ],
    },
  },

  // ─── Step 7: Sequencing — Diagnostik-Priorisierung ───
  {
    stepId: "s3-07-sequencing-priorisierung",
    phase: 3,
    stepType: "sequencing",
    modus: "sortierstation",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.2",
    quellen: ["S3-Leitlinie RA DGRh 2024", "Herold Innere Medizin 2024"],
    xpValue: 20,
    contentC1: {
      title: "Priorisierung: 6 Maßnahmen bei V.a. RA",
      body: "Window of Opportunity: Innerhalb der ersten 12 Wochen sollte die Diagnostik abgeschlossen sein. Die richtige Reihenfolge spart Zeit und vermeidet unnötige Untersuchungen.",
    },
    contentB1: {
      title: "In welcher Reihenfolge wird untersucht?",
      body: "Je schneller die Diagnose, desto besser die Behandlung. Die Untersuchungen folgen einem festen Ablauf.",
    },
    question: {
      fragetext: "Sortiere die 6 diagnostischen Schritte in die korrekte Reihenfolge:",
      sequencing: {
        instruction: "Vom ersten Schritt bis zum letzten — in der korrekten Reihenfolge.",
        items: [
          { id: "seq-1", label: "Ausführliche Anamnese (Symptome, Dauer, Familiengeschichte)" },
          { id: "seq-2", label: "Klinische Untersuchung (Gelenke tasten, Beweglichkeit prüfen)" },
          { id: "seq-3", label: "Labor (CRP, BSG, RF, Anti-CCP, Blutbild)" },
          { id: "seq-4", label: "Bildgebung (Ultraschall, ggf. Röntgen/MRT)" },
          { id: "seq-5", label: "Differentialdiagnosen ausschließen (Gicht, Arthrose, PsA)" },
          { id: "seq-6", label: "Therapieeinleitung nach gesicherter Diagnose" },
        ],
      },
    },
  },

  // ─── Step 8: Freetext — Pflegebericht Elisabeth ───
  {
    stepId: "s3-08-freetext-pflegebericht",
    phase: 3,
    stepType: "freetext",
    modus: "schreibtisch",
    bloomLevel: 5,
    kompetenzbereich: "KB-I.2",
    quellen: ["S3-Leitlinie RA DGRh 2024"],
    xpValue: 25,
    contentC1: {
      title: "Pflegebericht: Elisabeth Richter aufnehmen",
      body: "Dokumentiere die pflegerische Erstaufnahme von Frau Richter fachsprachlich. Berücksichtige: Aufnahmegrund, Gelenkstatus, funktionelle Einschränkungen, Nebendiagnosen, psychosoziale Situation.",
      fallbezug: "Frau Richter: 67 J., seronegative RA, Knie/Schultern/Handgelenke, DAS28 4.9, Rheumaknoten, Sicca-Symptomatik, lebt allein.",
    },
    contentB1: {
      title: "Schreibe einen Aufnahmebericht",
      body: "Schreibe auf, was wichtig ist über Frau Richter. Nutze die Informationen aus dem Gespräch.",
    },
    question: {
      fragetext: "Dokumentiere die Erstaufnahme von Frau Richter. Verwende Fachsprache und nenne alle pflegerisch relevanten Informationen.",
      musterantwort: "Patientin Elisabeth Richter, 67 Jahre, stationäre Aufnahme wegen hoher Krankheitsaktivität bei bekannter seronegativer Rheumatoider Arthritis (ED vor 2 Jahren, initial 2 Jahre als Arthrose fehldiagnostiziert). Gelenkstatus: Symmetrische Schwellungen und Bewegungseinschränkungen der Knie, Schultern und Handgelenke beidseits. Morgensteifigkeit ca. 45 Minuten. DAS28: 4.9 (hohe Aktivität). Rheumaknoten beidseits an den Ellenbogen. Extraartikulär: Sicca-Symptomatik (trockene Augen, V.a. sekundäres Sjögren-Syndrom). Funktionelle Einschränkungen: Griffkraft deutlich reduziert, kann nicht mehr schreiben, Schwierigkeiten beim Öffnen von Flaschen, Bestecknutzung eingeschränkt. ADL-Unterstützung morgens erforderlich. Psychosozial: Pensionierte Lehrerin, lebt allein, Enkelin als wichtige Bezugsperson.",
      bewertungskriterien: [
        "Fachsprachlich korrekte Dokumentation",
        "Seronegative RA mit relevanten Befunden erwähnt",
        "Funktionelle Einschränkungen und ADL-Bedarf erfasst",
        "Extraartikuläre Manifestationen dokumentiert",
        "Psychosoziale Situation berücksichtigt",
      ],
      satzanfaengeB1: [
        "Die Patientin ist...",
        "Sie klagt über...",
        "Die Gelenke...",
        "Im Alltag kann sie nicht mehr...",
        "Sie lebt...",
      ],
    },
  },

  // ─── Step 9: Swipe — Differentialdiagnose-Schnellcheck ───
  {
    stepId: "s3-09-swipe-differentialdiagnose",
    phase: 3,
    stepType: "swipe",
    modus: "challenge",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "AMBOSS"],
    xpValue: 15,
    contentC1: {
      title: "Differentialdiagnose-Schnellcheck",
      body: "Differentialdiagnose: Passt der Befund zu RA oder zu einer anderen Erkrankung?",
    },
    contentB1: {
      title: "Was passt zu RA — und was nicht?",
      body: "Manche Befunde passen zu RA, andere nicht. Erkennst du den Unterschied?",
    },
    question: {
      fragetext: "Passt der Befund zu RA oder nicht?",
      swipe: {
        instruction: "Entscheide bei jedem Befund: Passt zu RA oder nicht?",
        cards: [
          {
            statement: "Symmetrische Schwellung der MCP-Gelenke",
            statementB1: "Beide Hände gleich geschwollen (Fingergelenke)",
            isCorrect: true,
            explanation: "Typisch! Symmetrischer Befall kleiner Gelenke ist ein Kardinalsymptom der RA.",
            explanationB1: "Ja! Beide Hände gleich betroffen — das ist sehr typisch für RA.",
          },
          {
            statement: "Akuter Beginn im Großzehengrundgelenk, nachts, extrem schmerzhaft",
            statementB1: "Plötzlich starke Schmerzen im großen Zeh, nachts",
            isCorrect: false,
            explanation: "Das ist Gicht (Podagra)! Typisch: Akuter Beginn, Großzehe, nachts, extrem schmerzhaft. RA beginnt schleichender.",
            explanationB1: "Nein! Das ist Gicht, nicht RA. Gicht kommt plötzlich im großen Zeh.",
          },
          {
            statement: "Morgensteifigkeit >60 Minuten, bessert sich mit Bewegung",
            statementB1: "Morgens über 60 Minuten steif, wird besser wenn man sich bewegt",
            isCorrect: true,
            explanation: "Klassisch für RA! Entzündliche Morgensteifigkeit >60 Min mit Besserung durch Bewegung. Arthrose: <30 Min, Verschlechterung durch Belastung.",
            explanationB1: "Ja! Bei RA dauert die Steifigkeit über 60 Minuten. Bewegung hilft. Bei Arthrose ist es umgekehrt.",
          },
          {
            statement: "Endgelenke (DIP) der Finger betroffen, Heberden-Knoten",
            statementB1: "Die Fingerspitzen-Gelenke sind dick und knotig",
            isCorrect: false,
            explanation: "DIP-Befall mit Heberden-Knoten ist typisch für Arthrose, nicht RA! RA betrifft MCP und PIP, spart die DIP aus.",
            explanationB1: "Nein! Dicke Fingerspitzen-Gelenke sind Arthrose, nicht RA. RA betrifft die mittleren Gelenke.",
          },
          {
            statement: "Erhöhte Entzündungswerte (CRP, BSG) mit Fatigue",
            statementB1: "Entzündungswerte im Blut sind hoch, Patient ist sehr müde",
            isCorrect: true,
            explanation: "Passt zu RA. Systemische Entzündung erhöht CRP und BSG. Fatigue betrifft bis 80% der RA-Patienten.",
            explanationB1: "Ja! Hohe Entzündungswerte und Müdigkeit sind typisch für RA.",
          },
          {
            statement: "Schuppende Hautveränderungen an den Streckseiten, Nagelveränderungen",
            statementB1: "Schuppige Haut und kaputte Fingernägel",
            isCorrect: false,
            explanation: "Das deutet auf Psoriasis-Arthritis hin! Hautbeteiligung (Psoriasis) + Gelenkbeteiligung → PsA, nicht RA.",
            explanationB1: "Nein! Schuppige Haut und Nagelprobleme passen zu Psoriasis-Arthritis, nicht RA.",
          },
          {
            statement: "Rheumaknoten an den Ellenbogen",
            statementB1: "Harte Knoten am Ellenbogen",
            isCorrect: true,
            explanation: "Rheumaknoten (Noduli rheumatici) sind extraartikuläre Manifestationen der RA. Sie treten bei 20-30% der seropositiven Patienten auf.",
            explanationB1: "Ja! Rheumaknoten gehören zur RA. Sie kommen bei 20-30% der Patienten vor.",
          },
          {
            statement: "Wirbelsäulensteifigkeit, die sich morgens bessert, Entzündung der Iliosakralgelenke",
            statementB1: "Steifer Rücken, besonders am Morgen, Entzündung im Becken",
            isCorrect: false,
            explanation: "Das ist eine axiale Spondyloarthritis (M. Bechterew)! RA betrifft fast nie die Wirbelsäule (außer HWS bei Langzeitverlauf).",
            explanationB1: "Nein! Das ist Morbus Bechterew, nicht RA. RA betrifft normalerweise nicht den Rücken.",
          },
        ],
      },
    },
  },

  // ─── Step 10: Timeline — Elisabeths Krankheitsverlauf ───
  {
    stepId: "s3-10-timeline-verlauf",
    phase: 3,
    stepType: "timeline",
    modus: "entdecker",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["S3-Leitlinie RA DGRh 2024"],
    xpValue: 15,
    contentC1: {
      title: "Elisabeths Krankheitsverlauf (2 Jahre)",
      body: "Verfolge die Stationen von den ersten Beschwerden bis zur richtigen Diagnose.",
      fallbezug: "2 Jahre Fehldiagnose — eine häufige Geschichte bei seronegativer RA.",
    },
    contentB1: {
      title: "Elisabeths Weg zur Diagnose",
      body: "2 Jahre hat es gedauert. So ist es passiert:",
    },
    question: {
      fragetext: "Erkunde die 5 Stationen von Elisabeths Krankheitsverlauf:",
      timeline: {
        instruction: "Erkunde Elisabeths Krankheitsverlauf — von den ersten Symptomen bis zur Diagnose.",
        events: [
          {
            id: "tl-1",
            time: "Vor 2 Jahren",
            title: "Erste Beschwerden: rechtes Knie",
            description: "Elisabeth bemerkt Schmerzen im rechten Knie nach einer Wanderung. Sie denkt an Überanstrengung. Hausarzt verordnet Ibuprofen. Besserung, aber nicht komplett.",
            descriptionB1: "Das rechte Knie tut weh nach dem Wandern. Der Hausarzt gibt Schmerzmittel. Es wird etwas besser.",
            icon: "⚠️",
          },
          {
            id: "tl-2",
            time: "Vor 18 Monaten",
            title: "Linkes Knie + Morgensteifigkeit",
            description: "Jetzt auch das linke Knie. Morgensteifigkeit 30 Minuten. Hausarzt: 'Arthrose, das ist in Ihrem Alter normal.' Röntgen: leichte degenerative Veränderungen. RF negativ → 'Kein Rheuma.' Überweisung zum Orthopäden.",
            descriptionB1: "Auch das linke Knie tut weh. Morgens 30 Minuten steif. Arzt sagt: Arthrose. Bluttest für Rheuma negativ.",
            icon: "📈",
            highlight: true,
          },
          {
            id: "tl-3",
            time: "Vor 12 Monaten",
            title: "Schultern betroffen, Fatigue",
            description: "Beide Schultern schmerzen. Ausgeprägte Fatigue. Orthopäde: 'Impingement-Syndrom beidseits.' Physiotherapie hilft kaum. Morgensteifigkeit jetzt 40 Minuten. CRP erstmals bestimmt: 22 mg/l — leicht erhöht, wird als 'unspezifisch' eingeordnet.",
            descriptionB1: "Jetzt auch beide Schultern. Elisabeth ist immer müde. Der Orthopäde sagt: Schulterprobleme. Krankengymnastik hilft wenig.",
            icon: "📈",
          },
          {
            id: "tl-4",
            time: "Vor 6 Monaten",
            title: "Handgelenke + Rheumatologin",
            description: "Handgelenke geschwollen, Griffkraft nimmt ab. Kann nicht mehr schreiben. Neue Hausärztin überweist zur Rheumatologin. Ultraschall zeigt: aktive Synovitis in Knien, Schultern UND Handgelenken. Power-Doppler positiv. MRT bestätigt: Erosionen in den Handgelenken. Diagnose: Seronegative Rheumatoide Arthritis.",
            descriptionB1: "Die Handgelenke schwellen an. Eine neue Ärztin schickt Elisabeth zur Rheumatologin. Ultraschall und MRT zeigen: Entzündung! Diagnose: Seronegative RA.",
            icon: "✅",
            highlight: true,
          },
          {
            id: "tl-5",
            time: "Heute",
            title: "Stationäre Aufnahme, DAS28 4.9",
            description: "Therapie mit MTX seit 4 Monaten zeigt noch keine ausreichende Wirkung. DAS28 4.9 (hohe Aktivität). Stationäre Aufnahme zur Therapieoptimierung. Rheumaknoten an den Ellenbogen. Sicca-Symptomatik (V.a. sekundäres Sjögren-Syndrom). Morgensteifigkeit 45 Minuten.",
            descriptionB1: "Die Medikamente helfen noch nicht genug. Elisabeth kommt ins Krankenhaus. Die Ärzte wollen eine bessere Therapie finden.",
            icon: "🏥",
          },
        ],
      },
    },
    wusstestDuDas: "Die mittlere Diagnoseverzögerung bei seronegativer RA beträgt 1-3 Jahre. Bei seropositiver RA ist sie kürzer, weil der RF als Screening-Marker hilft.",
  },

  // =============================================================
  // Phase 4 (Min 15-22): PUZZLE + PRAXIS-SIM + SCHREIBTISCH
  // =============================================================

  // ─── Step 11: Hotspot — Gelenkstatus erheben ───
  {
    stepId: "s3-11-hotspot-gelenkstatus",
    phase: 4,
    stepType: "hotspot",
    modus: "praxis-sim",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.2",
    quellen: ["Herold Innere Medizin 2024"],
    xpValue: 20,
    imageUrl: "/images/body-silhouette.svg",
    imageAlt: "Körpersilhouette zur Gelenkuntersuchung",
    contentC1: {
      title: "Gelenkstatus erheben: Wo sind Schwellungen?",
      body: "Elisabeth hat einen symmetrischen Befall großer Gelenke — anders als Mehmets kleine Gelenke.",
      fallbezug: "Elisabeths Befall: große Gelenke, symmetrisch.",
    },
    contentB1: {
      title: "Wo hat Elisabeth Schmerzen?",
      body: "Frau Richter hat Schmerzen in mehreren Gelenken. Welche waren betroffen?",
    },
    question: {
      fragetext: "Markiere alle betroffenen Gelenke bei Elisabeth Richter:",
      hotspot: {
        imageUrl: "/images/body-silhouette.svg",
        imageAlt: "Körpersilhouette von vorne",
        instruction: "Markiere alle betroffenen Gelenke (6 Treffer möglich).",
        zones: [
          { id: "schulter-rechts", x: 30, y: 22, radius: 6, label: "Rechte Schulter" },
          { id: "schulter-links", x: 70, y: 22, radius: 6, label: "Linke Schulter" },
          { id: "handgelenk-rechts", x: 22, y: 48, radius: 5, label: "Rechtes Handgelenk" },
          { id: "handgelenk-links", x: 78, y: 48, radius: 5, label: "Linkes Handgelenk" },
          { id: "knie-rechts", x: 38, y: 68, radius: 6, label: "Rechtes Knie" },
          { id: "knie-links", x: 62, y: 68, radius: 6, label: "Linkes Knie" },
        ],
      },
    },
  },

  // ─── Step 12: Highlight — Arztbrief mit Fehlern ───
  {
    stepId: "s3-12-highlight-arztbrief",
    phase: 4,
    stepType: "highlight",
    modus: "puzzle",
    bloomLevel: 5,
    kompetenzbereich: "KB-I.2",
    quellen: ["S3-Leitlinie RA DGRh 2024", "AMBOSS"],
    xpValue: 20,
    contentC1: {
      title: "Kritik am Arztbrief: Elisabeths Befund",
      body: "Der Entlassungsbrief enthält 5 subtile fachliche Fehler. Finde sie!",
      fallbezug: "Als Pflegekraft solltest du Arztbriefe kritisch lesen können.",
    },
    contentB1: {
      title: "Fehler im Arztbrief finden",
      body: "In diesem Arztbrief sind 5 Fehler versteckt. Findest du alle?",
    },
    question: {
      fragetext: "Finde die 5 Fehler im Arztbrief:",
      highlightSegments: [
        { text: "Patientin Elisabeth Richter, 67 Jahre,", isError: false },
        { text: " seropositive Rheumatoide Arthritis", isError: true, reason: "FEHLER: Elisabeth hat seronegative RA (RF und Anti-CCP negativ)! 'Seropositive' ist falsch." },
        { text: " seit 2 Jahren. Gelenkbefall:", isError: false },
        { text: " asymmetrisch", isError: true, reason: "FEHLER: Elisabeths Befall ist symmetrisch (beide Knie, beide Schultern, beide Handgelenke). 'Asymmetrisch' ist falsch." },
        { text: " an Knien, Schultern und Handgelenken.", isError: false },
        { text: " DAS28: 4.9 (moderate Aktivität).", isError: true, reason: "FEHLER: DAS28 4.9 liegt im Bereich 'hohe Aktivität' (>3.2-5.1 moderat, >5.1 hoch). Korrekt wäre: 4.9 ist oberer Bereich moderat bis hoch — klinisch als hohe Aktivität gewertet." },
        { text: " Morgensteifigkeit 45 Minuten. Extraartikuläre Manifestationen:", isError: false },
        { text: " keine.", isError: true, reason: "FEHLER: Elisabeth hat Rheumaknoten an den Ellenbogen UND Sicca-Symptomatik! 'Keine extraartikulären Manifestationen' ist falsch." },
        { text: " Therapie:", isError: false },
        { text: " MTX seit 2 Jahren,", isError: true, reason: "FEHLER: Elisabeth nimmt MTX erst seit 4 Monaten (Diagnose war vor 6 Monaten, MTX-Start kurz danach). '2 Jahre' ist falsch." },
        { text: " bisher unzureichendes Ansprechen. Stationäre Aufnahme zur Therapieoptimierung.", isError: false },
      ],
    },
  },

  // ─── Step 13: Reveal — Warum Frühdiagnostik entscheidend ist ───
  {
    stepId: "s3-13-reveal-fruehdiagnostik",
    phase: 4,
    stepType: "reveal",
    modus: "entdecker",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["S3-Leitlinie RA DGRh 2024", "Herold Innere Medizin 2024"],
    xpValue: 15,
    contentC1: {
      title: "5 Gründe warum Frühdiagnostik entscheidend ist",
      body: "Die ersten 3-6 Monate nach Symptombeginn sind entscheidend für den gesamten Krankheitsverlauf.",
      fallbezug: "Elisabeth wurde 2 Jahre zu spät diagnostiziert. Mehmet hat noch die Chance auf das Window of Opportunity.",
    },
    contentB1: {
      title: "Warum ist frühe Diagnose so wichtig?",
      body: "Die ersten Monate nach Symptombeginn entscheiden über den gesamten Verlauf.",
    },
    question: {
      fragetext: "Entdecke die 5 Gründe:",
      reveal: {
        instruction: "Entdecke alle 5 Gründe für frühzeitige Diagnostik.",
        revealMode: "free",
        cards: [
          {
            id: "r-1",
            label: "Window of Opportunity",
            content: "In den ersten 3-6 Monaten nach Symptombeginn reagiert die Erkrankung am besten auf Therapie. Wer diese Phase verpasst, hat langfristig schlechtere Outcomes. Bei Elisabeth: 2 Jahre verpasst.",
            contentB1: "In den ersten 3-6 Monaten helfen Medikamente am besten. Wer diese Zeit verpasst, hat es später schwerer. Elisabeth hat 2 Jahre verloren.",
            icon: "⏰",
          },
          {
            id: "r-2",
            label: "Gelenkschutz",
            content: "Frühe DMARD-Therapie (Disease-Modifying Anti-Rheumatic Drugs) kann Gelenkzerstörung verhindern oder verzögern. Jeder Monat ohne Therapie bedeutet potenzielle irreversible Erosionen. Elisabeths MRT zeigt bereits Erosionen.",
            contentB1: "Frühe Medikamente schützen die Gelenke. Ohne Therapie werden die Gelenke kaputt — das kann man nicht rückgängig machen. Elisabeths Gelenke zeigen schon Schäden.",
            icon: "🛡️",
          },
          {
            id: "r-3",
            label: "Lebensqualität",
            content: "Frühzeitig behandelte Patienten behalten ihre Funktionsfähigkeit besser. HAQ-Score (Health Assessment Questionnaire) ist nach 2 Jahren signifikant besser bei frühem Therapiestart. Elisabeth kann nicht mehr schreiben.",
            contentB1: "Patienten die früh behandelt werden, können mehr im Alltag machen. Elisabeth kann nicht mehr schreiben, weil sie zu spät behandelt wurde.",
            icon: "❤️",
          },
          {
            id: "r-4",
            label: "Kosten",
            content: "Späte Diagnose = höhere Gesamtkosten: Mehr Klinikaufenthalte, teurere Biologika nötig, Arbeitsunfähigkeit, Frühberentung. Eine Studie zeigt: 1 Jahr Verzögerung = ca. 12.000 EUR Mehrkosten über 5 Jahre.",
            contentB1: "Späte Diagnose kostet mehr Geld: mehr Krankenhausaufenthalte, teurere Medikamente, kann nicht mehr arbeiten.",
            icon: "💶",
          },
          {
            id: "r-5",
            label: "Prognose",
            content: "Treat-to-Target (T2T): Ziel ist Remission (DAS28 <2.6) oder niedrige Krankheitsaktivität. Bei frühem Therapiestart erreichen 40-60% der Patienten Remission. Bei spätem Start: nur 10-20%. Elisabeths DAS28 ist 4.9 — noch weit entfernt.",
            contentB1: "Das Ziel ist: keine Entzündung mehr (Remission). Bei früher Therapie schaffen das 40-60% der Patienten. Bei später Therapie nur 10-20%.",
            icon: "🎯",
          },
        ],
      },
    },
  },

  // ─── Step 14: Freetext — Mehmet vs. Elisabeth Analyse ───
  {
    stepId: "s3-14-freetext-analyse",
    phase: 4,
    stepType: "freetext",
    modus: "schreibtisch",
    bloomLevel: 5,
    kompetenzbereich: "KB-V.1",
    quellen: ["Herold Innere Medizin 2024", "S3-Leitlinie RA DGRh 2024"],
    xpValue: 25,
    contentC1: {
      title: "Analysiere: Mehmet vs. Elisabeth",
      body: "Vergleiche die beiden Fälle systematisch. Beziehe dich auf Diagnostik, Verlauf und Prognose.",
      fallbezug: "Mehmet: 43 J., seropositiv, kleine Gelenke, 3 Monate. Elisabeth: 67 J., seronegativ, große Gelenke, 2 Jahre Verzögerung.",
    },
    contentB1: {
      title: "Vergleiche Mehmet und Elisabeth",
      body: "Was ist bei den beiden anders? Was bedeutet das für die Behandlung?",
    },
    question: {
      fragetext: "Vergleiche beide Fälle. Welche Faktoren beeinflussen die Prognose? Berücksichtige: Serologie, Gelenkbefall, Diagnosezeitpunkt, Window of Opportunity.",
      musterantwort: "Mehmet (43 J., seropositiv): RF+ und Anti-CCP+ weisen auf einen potenziell aggressiveren Verlauf hin. ABER: Er wurde nach 3 Monaten diagnostiziert — das Window of Opportunity (3-6 Monate) ist noch offen. Kleiner Gelenkbefall (MCP) ist typisch für seropositive RA. Prognose-Vorteil: frühe Diagnose. Elisabeth (67 J., seronegativ): RF- und Anti-CCP- — grundsätzlich oft milderer Verlauf. ABER: 2 Jahre Fehldiagnose als Arthrose. Window of Opportunity verpasst. Bereits Erosionen im MRT. Großer Gelenkbefall (Knie, Schultern) ist atypischer und erschwerte die Diagnose. Prognose-Nachteil: späte Diagnose trotz milderem Verlaufstyp. Fazit: Der Diagnosezeitpunkt ist prognostisch wichtiger als die Serologie. Frühe Diagnose bei Mehmet gleicht den aggressiveren Verlaufstyp möglicherweise aus.",
      bewertungskriterien: [
        "Serologie beider Patienten korrekt verglichen",
        "Window of Opportunity auf beide Fälle bezogen",
        "Prognosefaktoren differenziert analysiert",
        "Schlussfolgerung: Diagnosezeitpunkt wichtiger als Serologie",
      ],
      satzanfaengeB1: [
        "Mehmet hat einen positiven Bluttest. Das bedeutet...",
        "Elisabeth hat einen negativen Bluttest. Trotzdem...",
        "Der wichtigste Unterschied ist...",
        "Für die Behandlung bedeutet das...",
      ],
    },
  },

  // =============================================================
  // Phase 5 (Min 22-27): PUZZLE + SORTIERSTATION + CHALLENGE
  // =============================================================

  // ─── Step 15: Matching — Diagnostik-Befund → Klinische Bedeutung ───
  {
    stepId: "s3-15-matching-diagnostik",
    phase: 5,
    stepType: "matching",
    modus: "puzzle",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "AMBOSS"],
    xpValue: 15,
    contentC1: {
      title: "Diagnostik-Befund → Klinische Bedeutung",
      body: "Ordne die 6 diagnostischen Befunde ihrer klinischen Bedeutung zu.",
    },
    contentB1: {
      title: "Was bedeutet der Befund?",
      body: "Verbinde jeden Befund mit seiner Bedeutung.",
    },
    question: {
      fragetext: "Ordne die 6 Befunde ihrer klinischen Bedeutung zu:",
      matchingPairs: [
        { left: "CRP erhöht", right: "Akute Entzündungsaktivität" },
        { left: "RF positiv", right: "Seropositiver RA-Subtyp" },
        { left: "Anti-CCP positiv", right: "Höchste Spezifität für RA (>95%)" },
        { left: "DAS28 >5.1", right: "Hohe Krankheitsaktivität" },
        { left: "Power-Doppler positiv", right: "Aktive Synovitis im Ultraschall" },
        { left: "Erosionen im Röntgen", right: "Irreversible Gelenkzerstörung" },
      ],
    },
  },

  // ─── Step 16: Flipcard — Prüfungsvokabular ───
  {
    stepId: "s3-16-flipcard-vokabular",
    phase: 5,
    stepType: "flipcard",
    modus: "puzzle",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "S3-Leitlinie RA DGRh 2024", "AMBOSS"],
    xpValue: 15,
    contentC1: {
      title: "Prüfungsvokabular: 8 Schlüsselbegriffe",
      body: "Diese 8 Schlüsselbegriffe werden in der Prüfung abgefragt.",
    },
    contentB1: {
      title: "Wichtige Fachbegriffe",
      body: "8 Fachbegriffe, die du für die Prüfung brauchst.",
    },
    question: {
      fragetext: "Lerne alle 8 Prüfungsbegriffe:",
      flipcard: {
        instruction: "Lerne alle 8 Begriffe mit ihren Definitionen.",
        cards: [
          {
            front: "DAS28",
            back: "Disease Activity Score — berechnet aus 28 Gelenken, BSG/CRP, Patient VAS. <2.6 = Remission, 2.6-3.2 = niedrig, 3.2-5.1 = moderat, >5.1 = hoch.",
            backB1: "Misst wie aktiv die RA ist. Unter 2.6 = fast keine Entzündung. Über 5.1 = starke Entzündung.",
            category: "Scores",
          },
          {
            front: "HAQ",
            back: "Health Assessment Questionnaire — misst die funktionelle Einschränkung im Alltag. 0 = keine Einschränkung, 3 = maximale Einschränkung. Pflege-relevant: zeigt ADL-Bedarf.",
            backB1: "Fragebogen: Wie gut kann der Patient den Alltag meistern? 0 = alles geht. 3 = braucht viel Hilfe.",
            category: "Scores",
          },
          {
            front: "CDAI",
            back: "Clinical Disease Activity Index — vereinfachter Aktivitätsscore ohne Laborwerte. Geschwollene + druckschmerzhafte Gelenke + Arzt-Einschätzung + Patient-Einschätzung.",
            backB1: "Einfacher Score ohne Bluttest. Zählt geschwollene und schmerzhafte Gelenke.",
            category: "Scores",
          },
          {
            front: "SDAI",
            back: "Simplified Disease Activity Index — wie CDAI, aber zusätzlich mit CRP. Remission: SDAI ≤3.3. Hohe Aktivität: >26.",
            backB1: "Wie CDAI, aber mit CRP-Blutwert dazu. Unter 3.3 = fast keine Entzündung.",
            category: "Scores",
          },
          {
            front: "ACR-Response",
            back: "Therapieansprechen nach ACR-Kriterien: ACR20 = 20% Besserung (minimal), ACR50 = 50% (gut), ACR70 = 70% (sehr gut). Bezieht sich auf geschwollene/druckschmerzhafte Gelenke.",
            backB1: "Zeigt ob die Therapie wirkt. ACR20 = ein bisschen besser. ACR70 = viel besser.",
            category: "Therapie",
          },
          {
            front: "Window of Opportunity",
            back: "Therapeutisches Zeitfenster: erste 3-6 Monate nach Symptombeginn. In dieser Phase ist die RA am besten behandelbar. Früher DMARD-Start → bessere Langzeitprognose.",
            backB1: "Die ersten 3-6 Monate sind die wichtigste Zeit. Wenn man hier mit Medikamenten beginnt, ist die Chance auf Besserung am größten.",
            category: "Konzepte",
          },
          {
            front: "Treat-to-Target (T2T)",
            back: "Therapiestrategie: Klares Ziel definieren (Remission oder niedrige Aktivität), alle 3 Monate prüfen, Therapie anpassen wenn Ziel nicht erreicht. Wie Blutdruck-Einstellung.",
            backB1: "Therapie mit klarem Ziel: Entzündung stoppen. Alle 3 Monate prüfen. Wenn das Ziel nicht erreicht ist → Medikament ändern.",
            category: "Konzepte",
          },
          {
            front: "Remission",
            back: "Therapieziel bei RA: Abwesenheit von Krankheitsaktivität. DAS28 <2.6, CDAI ≤2.8, SDAI ≤3.3, Boolean: geschwollene Gelenke ≤1, druckschmerzhafte ≤1, CRP ≤1, Patient VAS ≤1.",
            backB1: "Das Ziel: keine Entzündung mehr. Der Patient hat fast keine Schmerzen und keine geschwollenen Gelenke.",
            category: "Konzepte",
          },
        ],
        shuffled: true,
      },
    },
  },

  // ─── Step 17: Sorting — Pflegemaßnahmen bei akutem Schub ───
  {
    stepId: "s3-17-sorting-pflegemassnahmen",
    phase: 5,
    stepType: "sorting",
    modus: "sortierstation",
    bloomLevel: 5,
    kompetenzbereich: "KB-I.2",
    quellen: ["S3-Leitlinie RA DGRh 2024"],
    xpValue: 20,
    contentC1: {
      title: "Komplexe Priorisierung: 8 Pflegemaßnahmen bei akutem Schub",
      body: "Elisabeth hat einen akuten Schub (DAS28 4.9). Labor, Visite, Schmerztherapie und Assessments konkurrieren um begrenzte Zeit.",
      fallbezug: "Zeitdruck: Visite in 30 Minuten, Elisabeth hat Schmerzen, Blutentnahme steht aus.",
    },
    contentB1: {
      title: "Was machst du zuerst?",
      body: "Elisabeth hat starke Schmerzen und Schwellungen. Gleichzeitig muss Blut abgenommen werden und die Visite ist in 30 Minuten.",
    },
    question: {
      fragetext: "Sortiere nach Priorität — von der wichtigsten zur unwichtigsten Maßnahme:",
      sortItems: [
        "Schmerzmedikation nach Anordnung verabreichen (akute Schmerzlinderung)",
        "Betroffene Gelenke hochlagern und kühlen (Entzündungshemmung)",
        "Blutentnahme für Labor durchführen (vor Visite nötig)",
        "Vitalzeichen dokumentieren (RR, Puls, Temp)",
        "Funktionellen Status erheben — Griffkraft, Morgensteifigkeit (Assessment)",
        "Medikamentenplan prüfen — MTX-Dosis, Nebenwirkungen (Therapiesicherheit)",
        "Hilfsmittel organisieren — Flaschenöffner, dicke Griffe (ADL-Unterstützung)",
        "Physiotherapie-Termin abstimmen (langfristig wichtig, nicht akut)",
      ],
    },
  },

  // =============================================================
  // Phase 6 (Min 27-30): CHALLENGE + SCHREIBTISCH + CHECKPOINT
  // =============================================================

  // ─── Step 18: Timer — Final-Prüfung unter Zeitdruck ───
  {
    stepId: "s3-18-timer-finalpruefung",
    phase: 6,
    stepType: "timer",
    modus: "challenge",
    bloomLevel: 4,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "S3-Leitlinie RA DGRh 2024", "AMBOSS"],
    xpValue: 25,
    contentC1: {
      title: "Final-Prüfung: 8 Fragen unter Zeitdruck!",
      body: "Mix aus allen 3 Sessions, inklusive 2 Interleaving-Fragen. 120 Sekunden für 8 Fragen.",
    },
    contentB1: {
      title: "Letzte Prüfung: 8 Fragen!",
      body: "120 Sekunden für 8 Fragen. Alles was du gelernt hast. Viel Erfolg!",
    },
    question: {
      fragetext: "120 Sekunden — 8 Fragen — gib alles!",
      timeLimitSeconds: 120,
      timerQuestions: [
        {
          question: "Seronegative RA bedeutet:",
          options: [
            "RF und Anti-CCP negativ",
            "Keine Entzündung im Blut",
            "Milde Verlaufsform immer",
            "Kein Gelenkbefall",
          ],
          correctIndex: 0,
        },
        {
          question: "DAS28 = 5.2 bedeutet:",
          options: [
            "Remission",
            "Niedrige Aktivität",
            "Moderate Aktivität",
            "Hohe Aktivität",
          ],
          correctIndex: 3,
        },
        {
          question: "Anti-CCP hat eine Spezifität für RA von:",
          options: [">50%", ">70%", ">85%", ">95%"],
          correctIndex: 3,
        },
        {
          question: "Window of Opportunity bei RA:",
          options: [
            "Erste 1-2 Wochen",
            "Erste 3-6 Monate",
            "Erstes Jahr",
            "Erste 2 Jahre",
          ],
          correctIndex: 1,
        },
        {
          question: "Morgensteifigkeit bei RA vs. Arthrose:",
          options: [
            "RA: <30 Min / Arthrose: >60 Min",
            "Beide gleich lang",
            "RA: >60 Min / Arthrose: <30 Min",
            "Nur bei Arthrose vorhanden",
          ],
          correctIndex: 2,
        },
        {
          question: "Was zeigt Power-Doppler im Ultraschall?",
          options: [
            "Knochenbrüche",
            "Aktive Entzündung (Durchblutung)",
            "Knorpeldicke",
            "Nervenschäden",
          ],
          correctIndex: 1,
        },
        {
          question: "Interleaving (Gicht): Typischer Ort des Gichtanfalls?",
          options: [
            "MCP-Gelenke beidseits",
            "Großzehengrundgelenk (Podagra)",
            "Schultergelenke",
            "HWS",
          ],
          correctIndex: 1,
        },
        {
          question: "Interleaving (Anatomie): Synovialflüssigkeit bei RA ist:",
          options: [
            "Klar und viskös",
            "Trüb und zellreich",
            "Blutig",
            "Nicht vorhanden",
          ],
          correctIndex: 1,
        },
      ],
    },
  },

  // ─── Step 19: Reflection — Was nimmst du mit? ───
  {
    stepId: "s3-19-reflection-praxis",
    phase: 6,
    stepType: "reflection",
    modus: "schreibtisch",
    bloomLevel: 6,
    kompetenzbereich: "KB-V.1",
    quellen: [],
    xpValue: 10,
    contentC1: {
      title: "Was nimmst du mit in die Praxis?",
      body: "Reflexion ohne Bewertung.",
      fallbezug: "Du hast zwei sehr unterschiedliche RA-Patienten kennengelernt: Mehmet (jung, seropositiv, Frühdiagnose) und Elisabeth (älter, seronegativ, Spätdiagnose).",
    },
    contentB1: {
      title: "Was hast du gelernt?",
      body: "Was ist dir wichtig geworden?",
    },
    question: {
      fragetext: "Was ist die wichtigste Erkenntnis aus LE 04 für deine pflegerische Praxis?",
      reflection: {
        prompt: "Reflektiere: Was nimmst du aus dem Vergleich von Mehmet und Elisabeth mit? Was bedeutet das für deinen Umgang mit RA-Patienten auf Station?",
        placeholder: "Die wichtigste Erkenntnis für mich ist...",
        systemPrompt: "Du bist ein empathischer Pflegepädagoge. Gib wertschätzendes Feedback auf die Reflexion. Würdige die Gedanken. Ergänze einen kurzen Impuls wenn die Reflexion oberflächlich ist. Maximal 3 Sätze.",
      },
    },
  },

  // ─── Step 20: Summary — LE 04 komplett ───
  {
    stepId: "s3-20-summary-gesamt",
    phase: 6,
    stepType: "summary",
    modus: "checkpoint",
    bloomLevel: 5,
    kompetenzbereich: "KB-I.1",
    quellen: ["Herold Innere Medizin 2024", "S3-Leitlinie RA DGRh 2024"],
    xpValue: 10,
    contentC1: {
      title: "LE 04 komplett — Gesamtergebnis",
      body: "Du hast alle 3 Sessions geschafft!\n\nBoss-Frage (freigeschaltet):\nEine 67-jährige Patientin stellt sich mit symmetrischen Schwellungen der Knie, Schultern und Handgelenke vor. Morgensteifigkeit 45 Minuten. RF und Anti-CCP negativ. CRP 34 mg/l. Ultraschall zeigt Power-Doppler-positive Synovitis. Wie lautet die wahrscheinlichste Diagnose und welcher Score wird zur Verlaufskontrolle eingesetzt?\n\nAntwort: Seronegative Rheumatoide Arthritis. Verlaufskontrolle mit DAS28 (Disease Activity Score, 28 Gelenke).\n\nDein Bloom-Profil über alle 3 Sessions:\n- B1-B2 (Wissen/Verstehen): Symptome, Formen, Diagnostik ✓\n- B3-B4 (Anwenden/Analysieren): Fallarbeit Mehmet + Elisabeth ✓\n- B5-B6 (Evaluieren/Erschaffen): Pflegebericht, Vergleichsanalyse, Praxis-Reflexion ✓\n\nEmpfehlung: Wiederholung in 3 Tagen (Spaced Repetition). Weiter mit LE 05: RA-Therapie.",
    },
    contentB1: {
      title: "LE 04 geschafft!",
      body: "Du hast alle 3 Sessions geschafft!\n\nBoss-Frage gelöst:\nElisabeth, 67 Jahre, geschwollene Gelenke, negativer Bluttest, aber Entzündung im Ultraschall sichtbar → Seronegative RA. Der DAS28 zeigt wie aktiv die Krankheit ist.\n\nWas du jetzt kannst:\n- RA-Symptome erkennen und beschreiben\n- Zwei verschiedene RA-Verläufe vergleichen\n- Diagnostik verstehen und Arztbriefe prüfen\n- Pflegerische Maßnahmen planen\n\nTipp: Wiederhole in 3 Tagen! Weiter mit LE 05: Therapie.",
    },
    question: {
      fragetext: "LE 04: Symptome, Formen, Diagnose — komplett!",
      summary: {
        reflexionRueckbezug: "Am Anfang war die Boss-Frage gesperrt. Jetzt kannst du sie beantworten — weil du Elisabeth und Mehmet wirklich verstanden hast.",
        kernaussagen: [
          "RA-Symptome: Morgensteifigkeit >60 Min, symmetrischer Befall, Fatigue, extraartikuläre Manifestationen",
          "Seronegative RA (20-30%): RF und Anti-CCP negativ, Diagnose über Bildgebung (Ultraschall/MRT)",
          "Seropositive vs. seronegative RA: Unterschiedlicher Verlauf, gleiche Erkrankung",
          "Window of Opportunity: Erste 3-6 Monate entscheidend für Langzeitprognose",
          "DAS28, HAQ, CDAI, SDAI: Scores zur Verlaufskontrolle — Treat-to-Target-Strategie",
          "Diagnosezeitpunkt ist prognostisch wichtiger als der Serologie-Status",
        ],
      },
    },
  },
];

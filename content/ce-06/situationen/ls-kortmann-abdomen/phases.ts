// CE-06 Situation „Herr Kortmann — akutes Abdomen, Kolostoma & Drainagen (post-OP)"
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt LE3: W1 (akutes Abdomen: Ursachen/Symptome/DD), W2 (Ileo-/Kolostoma + Versorgungsanforderungen),
//        W3 (Drainagesysteme/Wirkungsweise), W4 (Schmerzarten, postop Überwachung Gasaustausch/Obstipation/
//        Urinausscheidung, Mobilisation mit Drainagen, Dauerkatheter-Infektionsprophylaxe),
//        K1 (postop Stoma-Versorgung/Inspektion), K2 (postop Verbandwechsel Drainagen), E1 (Bedeutung von
//        Information/Wissen für den akuterkrankten Menschen).
// Grounding: specs/ce-06/kernfakten/abdomen-stoma-drainagen.md (verbatim-belegt) + notfallassessment.md (SBAR).
// Quellen: Paetz Chirurgie (23. Aufl.) Kap. 7.5/9.2.4/9.5/12.5/12.6/23.8/23.9; I care Krankheitslehre Kap. 7.1;
//          EAUN Catheterisation Guideline 2024.
//
// KRITISCH GEBAUT:
//  - Dramaturgie zeitlich sauber: stabiler 2. postop Tag (Wissen/Routine) → DANN Nachblutung. Kein Routine-
//    Wechsel/keine Mobilisation WÄHREND der akuten Nachblutung (Cross-Step-Konsistenz).
//  - Stoma-Durchblutung: rosig/rot = vital, livide = Durchblutungsstörung → Arzt, grau/schwarz = Nekrose.
//    Beurteilung der Komplikation ist ärztliche Aufgabe (F-13). Kein Massieren/Abtupfen der livide Stelle.
//  - Bauchhöhlendrainage OHNE Sog (Darmschädigung), Redon = Saugdrainage subkutan (F-07). Drainage nicht
//    eigenmächtig abklemmen/ziehen.
//  - >200 ml Blut aus Drainage in der 1. Stunde = untrügliches Nachblutungszeichen → SOFORT Arzt (F-06).
//  - Akutes Abdomen/Nachblutung: Patient bleibt NÜCHTERN (mögliche Re-OP, F-04). Orale Gaben = Distraktoren.
//  - Keine erfundenen Medikamenten-Dosen; Analgesie/Volumen/Diagnostik ärztlich.
//  - MC-Optionen vergleichbar lang (Begründung in explanation, nicht im Optionstext).

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) ERKENNEN
export const CE06_SIT_KORTMANN_ERKENNEN: SituationsPhase = {
  phaseId: "ce06-kortmann-erkennen",
  phase: "erkennen",
  titel: "Übernahme am 2. Tag nach der Not-OP",
  titelB1: "Der 2. Tag nach der Operation",
  kontext:
    "16:40 Uhr, Spätdienst. Du übernimmst Herrn Kortmann, 72, zweiter Tag nach einer Notfall-Operation. Vor drei Tagen kam er mit stärksten Bauchschmerzen, hartem Bauch und Erbrechen ins Krankenhaus — ein akutes Abdomen. Eine geplatzte Divertikelentzündung im Sigma wurde nachts operiert (Hartmann-OP). Jetzt hat er einen künstlichen Darmausgang am linken Unterbauch, zwei Drainagen und einen Blasenkatheter. \"Können Sie mir erklären, wofür dieser Schlauch da ist? Ich verstehe das alles nicht\", sagt er.",
  kontextB1:
    "16:40 Uhr, Spätdienst. Du übernimmst Herrn Kortmann, 72. Es ist der 2. Tag nach einer Not-Operation. Vor drei Tagen hatte er starke Bauchschmerzen, einen harten Bauch und musste erbrechen — ein akutes Abdomen. Eine Darmentzündung war geplatzt und wurde nachts operiert. Jetzt hat er einen künstlichen Darmausgang am Bauch, zwei Drainagen und einen Blasenkatheter. \"Wofür ist dieser Schlauch? Ich verstehe das nicht\", sagt er.",
  kernSteps: [
    {
      stepId: "ce06-kortmann-erk-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["Paetz Chirurgie 2017, Kap. 12.6 (Akutes Abdomen: Definition, Ursachen, Differentialdiagnostik)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-kortmann-akutes-abdomen",
      tag: "krankheitslehre",
      themaPrimaer: "abdomen-stoma-drainagen",
      kernfaktId: ["F-01", "F-03"],
      contentC1: {
        title: "Womit kam Herr Kortmann?",
        body: "Herr Kortmann wurde mit einem „akuten Abdomen“ eingeliefert. Damit du seine Situation einordnen kannst: Was beschreibt ein akutes Abdomen am besten?",
        glossarBegriffe: ["akutes Abdomen", "Perforation", "Divertikulitis"],
      },
      contentB1: {
        title: "Womit kam Herr Kortmann?",
        body: "Herr Kortmann kam mit einem „akuten Abdomen“ ins Krankenhaus. Was bedeutet das?",
        glossarBegriffe: ["akutes Abdomen (= akuter, bedrohlicher Bauch)", "Perforation (= Durchbruch)"],
      },
      question: {
        fragetext: "Was beschreibt ein akutes Abdomen am besten?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ein Sammelbegriff für verschiedene, akut bedrohliche Krankheitsbilder im Bauchraum, die meist mit Schmerzen einhergehen und sofortiges Handeln erfordern.",
            isCorrect: true,
            explanation:
              "Richtig. Das „akute Abdomen“ ist ein Sammelbegriff für verschiedene, akut bedrohliche Krankheitsbilder in der Bauchhöhle, die meist mit Schmerzen einhergehen. Es erfordert sofortiges diagnostisches und therapeutisches Handeln; meist ist eine chirurgische Behandlung erforderlich. Ursachen sind z. B. Entzündungen (Appendizitis, Cholezystitis, Pankreatitis) oder — wie hier — eine Perforation eines Hohlorgans (Sigmaperforation bei Divertikulitis).",
            explanationB1:
              "Richtig. Das akute Abdomen ist ein Oberbegriff für verschiedene gefährliche Erkrankungen im Bauch, die meist wehtun. Man muss sofort handeln, oft ist eine Operation nötig. Bei Herrn Kortmann war eine Darmentzündung geplatzt.",
          },
          {
            text: "Eine chronische, über Wochen langsam entstehende Bauchbeschwerde, die man in Ruhe ambulant abklären kann, weil grundsätzlich keine unmittelbare Gefahr und keine Eile besteht.",
            isCorrect: false,
            explanation:
              "Falsch. Das akute Abdomen ist gerade keine langsame, harmlose Beschwerde: Es ist akut bedrohlich und erfordert sofortiges diagnostisches und therapeutisches Handeln — meist chirurgisch. Genau deshalb wurde Herr Kortmann notoperiert.",
            explanationB1:
              "Falsch. Das akute Abdomen ist nicht langsam und harmlos. Es ist gefährlich und man muss sofort handeln. Darum wurde Herr Kortmann sofort operiert.",
          },
          {
            text: "Immer eine Erkrankung direkt im Darm — Ursachen außerhalb des Bauchraums wie ein Herzinfarkt lassen sich bei Bauchschmerzen sicher ausschließen.",
            isCorrect: false,
            explanation:
              "Falsch. Auch „nichtchirurgische“ Prozesse außerhalb der Bauchhöhle können die Symptomatik eines akuten Abdomens vortäuschen (z. B. Herzinfarkt, basale Pneumonie, entgleister Diabetes mellitus). Deshalb gehört die Differentialdiagnostik zwingend dazu — man darf sich nicht auf „ist bestimmt der Darm“ verlassen.",
            explanationB1:
              "Falsch. Auch Krankheiten außerhalb des Bauchs (z. B. ein Herzinfarkt) können wie ein akutes Abdomen aussehen. Deshalb muss man immer genau untersuchen.",
          },
        ],
      },
    },
    {
      stepId: "ce06-kortmann-erk-02",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: ["I care Krankheitslehre, Kap. 7.1 (Schmerzarten: somatisch, viszeral, neurogen; Kolik)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-kortmann-schmerzarten",
      tag: "krankheitslehre",
      themaPrimaer: "abdomen-stoma-drainagen",
      kernfaktId: ["F-05"],
      contentC1: {
        title: "Was für ein Schmerz ist das?",
        body: "Herr Kortmann beschreibt einen dumpfen, tief sitzenden Bauchschmerz, den er nicht genau lokalisieren kann. Ordne diese Schmerzart ein.",
        glossarBegriffe: ["viszeraler Schmerz", "somatischer Schmerz", "Kolik", "Nozizeptoren"],
      },
      contentB1: {
        title: "Was für ein Schmerz ist das?",
        body: "Herr Kortmann hat einen dumpfen, tiefen Bauchschmerz. Er kann nicht genau sagen, wo es wehtut. Welche Schmerzart ist das?",
        glossarBegriffe: ["viszeraler Schmerz (= Schmerz von inneren Organen)", "Kolik (= krampfartiger Schmerz)"],
      },
      question: {
        fragetext: "Welche Schmerzart beschreibt Herr Kortmann?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ein viszeraler Schmerz — er entsteht durch die Reizung von Nozizeptoren innerer Organe und ist typischerweise dumpf und schwer zu lokalisieren.",
            isCorrect: true,
            explanation:
              "Richtig. Der viszerale Schmerz beruht auf der Reizung von Nozizeptoren innerer Organe und ist oft schwer zu lokalisieren. Typische Ausprägungen reichen von dumpf-drückend bis krampfartig; die krampfartige, heftige Form mit vegetativen Symptomen (Übelkeit, Schweißausbrüche) heißt Kolik (z. B. Nieren-, Gallenkolik). Nach einer Bauch-OP ist ein dumpfer, schwer lokalisierbarer Schmerz gut mit einem viszeralen Ursprung vereinbar.",
            explanationB1:
              "Richtig. Der viszerale Schmerz kommt von den inneren Organen. Er ist oft dumpf und schwer zu orten. Die krampfartige Form heißt Kolik (z. B. Nierenkolik). Nach einer Bauch-OP passt so ein Schmerz gut dazu.",
          },
          {
            text: "Ein reiner Oberflächenschmerz der Haut — er ist scharf, gut lokalisierbar und klingt nach einem kurzen Reiz rasch wieder ab.",
            isCorrect: false,
            explanation:
              "Falsch. Der scharfe, gut lokalisierbare Oberflächenschmerz gehört zum somatischen Schmerz (Reizung von Nozizeptoren in der Haut). Herr Kortmanns Schmerz ist dumpf und schwer zu lokalisieren — das spricht für einen viszeralen, nicht einen oberflächlich-somatischen Schmerz.",
            explanationB1:
              "Falsch. Ein scharfer, gut zu ortender Schmerz kommt von der Haut (somatischer Schmerz). Herr Kortmanns Schmerz ist dumpf und schwer zu orten — also viszeral.",
          },
          {
            text: "Ein neuropathischer Schmerz — er entsteht durch eine direkte Schädigung von Nerven und ist deshalb die wahrscheinlichste Ursache nach einer Bauch-Operation.",
            isCorrect: false,
            explanation:
              "Falsch. Der neuropathische (neurogene) Schmerz beruht auf einer direkten Reizung oder Schädigung von Nervenfasern und ist typisch brennend oder elektrisierend-einschießend. Der dumpfe, schwer lokalisierbare Bauchschmerz nach der Darm-OP passt zum viszeralen Schmerz, nicht zum neuropathischen.",
            explanationB1:
              "Falsch. Der neuropathische Schmerz kommt von geschädigten Nerven und ist brennend oder wie ein Stromschlag. Herr Kortmanns dumpfer Bauchschmerz ist viszeral.",
          },
        ],
      },
    },
    {
      stepId: "ce06-kortmann-erk-03",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: [
        "Paetz Chirurgie 2017, Kap. 23.8.2/23.8.3 (Ileostoma, Kolostoma, Hartmann)",
        "Paetz Chirurgie 2017, Kap. 23.9 (Versorgungsanforderungen)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-kortmann-stoma-ileo-kolo",
      tag: "krankheitslehre",
      themaPrimaer: "abdomen-stoma-drainagen",
      kernfaktId: ["F-10", "F-11", "F-12"],
      contentC1: {
        title: "Sein Stoma richtig einordnen",
        body: "Herr Kortmann hat einen künstlichen Darmausgang im linken Unterbauch, angelegt bei der Hartmann-OP. Welche Aussage zu seinem Stoma und zum Unterschied Ileo-/Kolostoma stimmt?",
        glossarBegriffe: ["Kolostoma", "Ileostoma", "Hartmann-Operation", "Mazeration"],
      },
      contentB1: {
        title: "Sein Stoma richtig einordnen",
        body: "Herr Kortmann hat einen künstlichen Darmausgang im linken Unterbauch (nach der Hartmann-OP). Welche Aussage zu seinem Stoma stimmt?",
        glossarBegriffe: ["Kolostoma (= Dickdarm-Ausgang)", "Ileostoma (= Dünndarm-Ausgang)"],
      },
      question: {
        fragetext: "Was stimmt zu Herrn Kortmanns Stoma und zum Unterschied Ileo-/Kolostoma?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Es ist ein endständiges Kolostoma (Dickdarm, linker Unterbauch) — nach Hartmann meist temporär und später rückverlagerbar.",
            isCorrect: true,
            explanation:
              "Richtig. Ein Kolostoma ist die Ausleitung des Dickdarms, meist im linken Unterbauch; die endständige Kolostomie fördert meist breiigen bis festen Stuhlgang. Nach einer Hartmann-Operation ist das endständige Kolostoma meist ein temporäres Stoma, das operativ zurückverlagert werden kann. Beim Ileostoma (Dünndarm, rechter Unterbauch) ist der austretende Dünndarminhalt (etwa 1 Liter/Tag) viel aggressiver — deshalb wird es prominent (Nippel) angelegt und die Hautschutzplatte besonders exakt zugeschnitten.",
            explanationB1:
              "Richtig. Ein Kolostoma ist ein Dickdarm-Ausgang, meist links. Der Stuhl ist breiig bis fest. Nach der Hartmann-OP ist es meist nur vorübergehend und kann später zurückverlegt werden. Beim Ileostoma (Dünndarm, rechts) ist der Inhalt viel aggressiver für die Haut.",
          },
          {
            text: "Es ist ein Ileostoma — weil es im linken Unterbauch liegt und der Dünndarm dort ausgeleitet wird; der Stuhl ist dünnflüssig.",
            isCorrect: false,
            explanation:
              "Falsch — Verwechslung der Lage. Das Ileostoma (Dünndarmausleitung) liegt im rechten Unterbauch. Herr Kortmanns Stoma liegt im linken Unterbauch und leitet den Dickdarm aus — das ist ein Kolostoma mit breiigem bis festem Stuhl.",
            explanationB1:
              "Falsch. Das Ileostoma (Dünndarm) liegt rechts. Herr Kortmanns Stoma liegt links und ist ein Kolostoma (Dickdarm). Der Stuhl ist breiig bis fest.",
          },
          {
            text: "Beim Kolostoma ist der austretende Darminhalt besonders aggressiv für die Haut — deshalb muss die Hautschutzplatte hier besonders exakt zugeschnitten werden.",
            isCorrect: false,
            explanation:
              "Falsch — genau vertauscht. Besonders aggressiv ist der Dünndarminhalt beim Ileostoma (etwa 1 Liter/Tag), der bei Hautkontakt zu Mazeration führt; deshalb ist dort das exakte Zuschneiden der Hautschutzplatte besonders wichtig. Beim Kolostoma ist der Stuhl breiig bis fest und für die Haut weniger aggressiv.",
            explanationB1:
              "Falsch — vertauscht. Aggressiv für die Haut ist der Dünndarminhalt beim Ileostoma. Beim Kolostoma ist der Stuhl breiig bis fest und schont die Haut mehr.",
          },
        ],
      },
    },
    {
      stepId: "ce06-kortmann-erk-04",
      phase: 1,
      stepType: "branching",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Paetz Chirurgie 2017, Kap. 23.9.2 (Postoperative Stomapflege: Inspektion, Durchblutung, Ödem)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-kortmann-stoma-inspektion",
      tag: "pflege",
      themaPrimaer: "abdomen-stoma-drainagen",
      kernfaktId: ["F-13"],
      contentC1: {
        title: "Inspektion des frischen Stomas",
        body: "Beim ersten Rundgang inspizierst du das frische Stoma: Die Schleimhaut ist rosig-rot und feucht glänzend, der Randsaum leicht ödematös — soweit unauffällig. Damit du sicher handeln kannst, überlege: Angenommen, ein Teil der Schleimhaut wäre stattdessen dunkel-livide verfärbt — wie würdest du vorgehen?",
        glossarBegriffe: ["Stomaschleimhaut", "livide", "Stomaödem", "Nekrose"],
      },
      contentB1: {
        title: "Das frische Stoma anschauen",
        body: "Du schaust dir das frische Stoma an: Die Schleimhaut ist rosig-rot und glänzt feucht, der Rand ist leicht geschwollen — so weit in Ordnung. Überlege: Angenommen, ein Teil wäre stattdessen dunkel-livide (bläulich) verfärbt — was würdest du tun?",
        glossarBegriffe: ["livide (= bläulich verfärbt)", "Stomaödem (= Schwellung am Stoma)"],
      },
      question: {
        fragetext: "Angenommen, ein Teil der Stomaschleimhaut wäre dunkel-livide statt rosig — wie würdest du vorgehen?",
        branchingOptions: [
          {
            text: "Das als Zeichen einer Durchblutungsstörung erkennen, sofort den Arzt informieren, den Befund dokumentieren und das Stoma engmaschig weiter beobachten.",
            isCorrect: true,
            feedback:
              "Genau richtig. Eine vitale Stomaschleimhaut ist rosig bis rot und feucht glänzend. Eine dunkelrote bis livide Verfärbung zeigt eine Durchblutungsstörung an, eine grau-schwarze Verfärbung eine Nekrose. Ist der ausgeleitete Darm nicht ausreichend durchblutet, muss der Chirurg oder behandelnde Arzt sofort hinzugezogen werden — die Beurteilung dieser Komplikation ist ärztliche Aufgabe. Der leichte Randsaum-Ödem ist in den ersten postoperativen Tagen dagegen normal.",
            feedbackB1:
              "Genau richtig. Eine gesunde Stomaschleimhaut ist rosig-rot und glänzt feucht. Bläulich (livide) heißt: die Durchblutung ist gestört. Grau-schwarz heißt: Gewebe stirbt ab. Dann sofort den Arzt rufen. Die leichte Schwellung am Rand ist in den ersten Tagen normal.",
          },
          {
            text: "Nichts Besonderes — eine dunkle Verfärbung und die Schwellung sind am 2. Tag nach der Operation beide normal, deshalb schaue ich in der nächsten Schicht in Ruhe wieder danach.",
            isCorrect: false,
            feedback:
              "Nachvollziehbar, dass du an das normale Stomaödem denkst — aber hier gefährlich: Verwechsle die livide Verfärbung nicht mit dem harmlosen Ödem. Ein leichtes Randödem ist normal, eine dunkelrote bis livide Schleimhaut zeigt jedoch eine Durchblutungsstörung, eine grau-schwarze sogar eine Nekrose. Das ist nichts zum Abwarten: Der Arzt muss sofort informiert werden. Merke dir die Farblogik, dann liegst du beim nächsten Mal richtig.",
            feedbackB1:
              "Der Gedanke ist verständlich — aber hier gefährlich. Eine leichte Schwellung ist normal, eine bläuliche (livide) Schleimhaut nicht: Das heißt Durchblutungsstörung. Nicht abwarten, sofort den Arzt informieren. Merke dir die Farben, dann klappt es beim nächsten Mal.",
          },
          {
            text: "Die dunkle Stelle vorsichtig abtupfen und leicht massieren, damit die Durchblutung wieder in Gang kommt, und danach die Stomaversorgung neu anbringen.",
            isCorrect: false,
            feedback:
              "Guter Impuls, etwas tun zu wollen — aber so nicht: Eine Durchblutungsstörung der Stomaschleimhaut lässt sich nicht „wegmassieren“, Reiben kann das frisch operierte Gewebe zusätzlich schädigen. Richtig ist, sie als Durchblutungsstörung zu erkennen, sofort den Arzt zu informieren, zu dokumentieren und zu beobachten — die Beurteilung und Behandlung ist ärztliche Aufgabe. Dein Blick fürs Stoma ist genau richtig, lenk ihn aufs Melden.",
            feedbackB1:
              "Gut, dass du handeln willst — aber nicht so: Eine Durchblutungsstörung kann man nicht wegmassieren, Reiben schädigt das frische Gewebe. Richtig ist: sofort den Arzt informieren und beobachten. Dein aufmerksamer Blick ist wichtig — nutz ihn zum Melden.",
          },
        ],
      },
    },
    {
      stepId: "ce06-kortmann-erk-05",
      phase: 1,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: [
        "Paetz Chirurgie 2017, Kap. 9.2.4/9.5 (Frühmobilisierung, Pneumonieprophylaxe, Harnverhalt)",
        "Paetz Chirurgie 2017, Kap. 23.9.2 (postop Darmtätigkeit)",
        "EAUN Catheterisation Guideline 2024, Kap. 10.3 (Dauerkatheter-Hygiene)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-kortmann-postop-ueberwachung",
      tag: "pflege",
      themaPrimaer: "abdomen-stoma-drainagen",
      kernfaktId: ["F-15", "F-14", "F-16"],
      contentC1: {
        title: "Der Plan für den 2. postop Tag",
        body: "Herr Kortmann ist stabil. Was gehört am 2. Tag nach der Bauch-OP zur Überwachung und Förderung?",
        glossarBegriffe: ["Frühmobilisation", "Pneumonieprophylaxe", "Peristaltik", "Dauerkatheter"],
      },
      contentB1: {
        title: "Der Plan für heute",
        body: "Herr Kortmann ist stabil. Was gehört am 2. Tag nach der Bauch-OP zur Überwachung und Förderung?",
        glossarBegriffe: ["Frühmobilisation (= früh aufstehen/bewegen)", "Peristaltik (= Darmbewegung)"],
      },
      question: {
        fragetext: "Was gehört am 2. postoperativen Tag dazu?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Frühmobilisation fördern (Bettkante, Aufstehen) zur Pneumonie- und Thromboseprophylaxe, auf beginnende Darmtätigkeit achten (Darmgeräusche, Stoma-Ausscheidung) und den Blasenkatheter infektionssicher führen.",
            isCorrect: true,
            explanation:
              "Richtig. Postoperative Immobilisation und schmerzbedingte Schonatmung sind Hauptursachen einer postoperativen Pneumonie — die wirksamste Pneumonieprophylaxe ist die Frühmobilisation, die zugleich das Thromboserisiko senkt (venöser Blutstrom). Auf die beginnende Darmtätigkeit achtet man über Darmgeräusche/Darmgase und die Stoma-Ausscheidung. Beim Dauerkatheter gilt: Händehygiene vor/nach jeder Manipulation, geschlossenes System, knickfreier Abfluss und Beutel stets unterhalb des Blasenniveaus.",
            explanationB1:
              "Richtig. Wer nach der OP liegen bleibt und flach atmet, bekommt leichter eine Lungenentzündung. Darum: früh aufstehen (das schützt auch vor Thrombose). Auf Darmgeräusche und die Stoma-Ausscheidung achten. Beim Katheter: Hände desinfizieren, geschlossenes System, Beutel immer unter der Blase.",
          },
          {
            text: "Strikte Bettruhe und Schonung — Herr Kortmann sollte erst mobilisiert werden, wenn er komplett schmerzfrei ist, damit die frische Bauchwunde nicht unter Zug gerät und in Ruhe sicher verheilen kann.",
            isCorrect: false,
            explanation:
              "Falsch. Gerade die postoperative Immobilisation begünstigt Pneumonie und Thrombose. Man wartet nicht auf völlige Schmerzfreiheit — im Gegenteil: eine ausreichende Schmerztherapie soll das tiefe Durchatmen und die Frühmobilisation erst ermöglichen. Frühmobilisation ist die wirksamste Pneumonieprophylaxe.",
            explanationB1:
              "Falsch. Nur liegen bleiben führt eher zu Lungenentzündung und Thrombose. Man wartet nicht auf komplette Schmerzfreiheit — gute Schmerzmittel sollen das Aufstehen und tiefe Atmen möglich machen.",
          },
          {
            text: "Den Katheterbeutel möglichst hoch am Bettgalgen aufhängen, damit der Urin gut sichtbar ist, die Stundenmenge leicht abgelesen werden kann und man sich beim Kontrollieren nicht bücken muss.",
            isCorrect: false,
            explanation:
              "Falsch. Der Auffangbeutel muss stets unterhalb des Blasenniveaus hängen, damit kein Urin in die Blase zurückläuft (Infektionsgefahr) — er darf auch nicht auf den Boden gestellt werden. Die Stundenmenge liest man an der Messkammer ab, nicht durch Hochhängen. Ein hoch gehängter Beutel erhöht das Risiko eines katheterassoziierten Harnwegsinfekts.",
            explanationB1:
              "Falsch. Der Beutel muss immer unter der Blase hängen, sonst läuft Urin zurück (Infektionsgefahr). Er darf auch nicht auf den Boden. Die Menge liest man an der Kammer ab.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 20,
};

// ═══════════════════════════════════════════ 2) ALARMIEREN
export const CE06_SIT_KORTMANN_ALARMIEREN: SituationsPhase = {
  phaseId: "ce06-kortmann-alarmieren",
  phase: "alarmieren",
  titel: "Die Bauchdrainage füllt sich",
  titelB1: "Die Bauchdrainage füllt sich",
  kontext:
    "Du erklärst Herrn Kortmann gerade seine Schläuche, als dir die Zieldrainage im Bauch auffällt: Sie hat sich zügig mit hellrotem, frischem Blut gefüllt. Herr Kortmann wirkt blasser als vorhin. Jetzt zählt, dass du richtig einordnest — und richtig reagierst.",
  kontextB1:
    "Du erklärst Herrn Kortmann seine Schläuche. Da siehst du: Die Drainage im Bauch hat sich schnell mit frischem, hellrotem Blut gefüllt. Herr Kortmann ist blasser als vorhin. Jetzt musst du richtig reagieren.",
  kernSteps: [
    {
      stepId: "ce06-kortmann-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: [
        "Paetz Chirurgie 2017, Kap. 7.5.1/7.5.2 (Drainagen: Funktion, Sog, geschlossenes System, aseptischer Wechsel)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-kortmann-drainagen-verstehen",
      tag: "pflege",
      themaPrimaer: "abdomen-stoma-drainagen",
      kernfaktId: ["F-07", "F-08", "F-09"],
      contentC1: {
        title: "Wofür sind seine Drainagen?",
        body: "Herr Kortmann hat eine Drainage in der Bauchhöhle und eine subkutane Redon-Drainage. Welche Aussage zu Wirkungsweise und Umgang stimmt?",
        glossarBegriffe: ["Drainage", "Sog", "Redon-Drainage", "geschlossenes System", "aseptisch"],
      },
      contentB1: {
        title: "Wofür sind seine Drainagen?",
        body: "Herr Kortmann hat eine Drainage im Bauch und eine Redon-Drainage unter der Haut. Welche Aussage stimmt?",
        glossarBegriffe: ["Sog (= Unterdruck/Saugen)", "Redon-Drainage (= Saug-Drainage)", "aseptisch (= keimfrei)"],
      },
      question: {
        fragetext: "Was stimmt zu Herrn Kortmanns Drainagen?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Drainagen leiten Sekret, Blut und Eiter ab; die Drainage in der Bauchhöhle läuft ohne Sog, die subkutane Redon ist eine Saugdrainage.",
            isCorrect: true,
            explanation:
              "Richtig. Drainagen haben die Aufgabe, Sekret, Blut und Eiter aus Wund- oder Körperhöhlen abzuleiten. Insbesondere bei Drainagen in der Bauchhöhle wird kein Sog verwendet, weil der Darm durch den Sog geschädigt werden kann (Perforation, Fistel). Die Redon-Drainage ist die häufigste Weichteil-Saugdrainage und liegt subkutan. Alle Schläuche sollen geschlossen mit einem Auffanggefäß verbunden sein — das verringert das Infektionsrisiko; der Verbandwechsel erfolgt aseptisch, um eine Keimverschleppung zu vermeiden.",
            explanationB1:
              "Richtig. Drainagen leiten Sekret, Blut und Eiter ab. Die Drainage im Bauch läuft OHNE Sog, weil Sog den Darm verletzen kann. Die Redon unter der Haut saugt (mit Sog). Beide sind geschlossen — das schützt vor Infektion. Der Verbandwechsel ist keimfrei (aseptisch).",
          },
          {
            text: "An die Drainage in der Bauchhöhle gehört ein kräftiger Sog, damit das Sekret schneller und vollständiger abläuft und die Bauchhöhle rascher trocken wird.",
            isCorrect: false,
            explanation:
              "Falsch — und gefährlich. Insbesondere bei Drainagen in der Bauchhöhle wird kein Sog verwendet, weil der Darm durch den Sog geschädigt werden kann (Perforation, Darmfistel). Sog kommt nur bei bestimmten Drainagen zum Einsatz (z. B. Bülau kontrolliert, Redon unkontrolliert), nicht bei der Bauchhöhlendrainage.",
            explanationB1:
              "Falsch. Die Drainage im Bauch bekommt KEINEN Sog — der Sog könnte den Darm verletzen. Nur manche Drainagen saugen (z. B. Redon), aber nicht die im Bauch.",
          },
          {
            text: "Beim Verbandwechsel an der Drainage genügt sauberes, nicht steriles Arbeiten — die Drainage liegt ja ohnehin im Körper und ist dadurch von außen ausreichend geschützt.",
            isCorrect: false,
            explanation:
              "Falsch. Die Drainage liegt in sterilem Gewebe; der Verbandwechsel muss entsprechend hygienisch (aseptisch) erfolgen, um eine Keimverschleppung zu vermeiden. Gerade weil die Drainage eine Verbindung nach innen ist, ist steriles/aseptisches Arbeiten Pflicht.",
            explanationB1:
              "Falsch. Die Drainage geht in keimfreies Gewebe. Der Verbandwechsel muss keimfrei (aseptisch) sein, sonst gelangen Keime in den Körper.",
          },
        ],
      },
    },
    {
      stepId: "ce06-kortmann-ala-02",
      phase: 2,
      stepType: "branching",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Paetz Chirurgie 2017, Kap. 12.5 (Intraabdominelle Blutung: postop Nachblutung, Drainage >200 ml/1 h → Arzt)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-kortmann-nachblutung-alarm",
      tag: "pflege",
      themaPrimaer: "abdomen-stoma-drainagen",
      kernfaktId: ["F-06"],
      contentC1: {
        title: "Über 200 ml frisches Blut",
        body: "Die Zieldrainage im Bauch hat sich in der letzten Stunde mit über 200 ml frischem, hellrotem Blut gefüllt. Herr Kortmann ist blass, sein Puls schneller. Was tust du?",
        glossarBegriffe: ["Nachblutung", "intraabdominelle Blutung", "Kreuzblut"],
      },
      contentB1: {
        title: "Über 200 ml frisches Blut",
        body: "Die Drainage im Bauch hat sich in der letzten Stunde mit über 200 ml frischem, hellrotem Blut gefüllt. Herr Kortmann ist blass, sein Puls ist schneller. Was tust du?",
        glossarBegriffe: ["Nachblutung (= erneute Blutung nach der OP)"],
      },
      question: {
        fragetext: "Über 200 ml frisches Blut aus der Bauchdrainage in einer Stunde — was tust du?",
        branchingOptions: [
          {
            text: "Das als intraabdominelle Nachblutung erkennen und sofort den Arzt verständigen; engmaschig überwachen, nüchtern lassen und die mögliche erneute Operation vorbereiten.",
            isCorrect: true,
            feedback:
              "Genau richtig. Über 200 ml frisches Blut aus einer Drainage innerhalb einer Stunde ist ein leicht erkennbares und untrügliches Zeichen einer Nachblutung — dann muss sofort der Arzt verständigt werden. Als klassische Schwelle gilt >200 ml in der ersten postoperativen Stunde; ein plötzlich einsetzender starker Blutverlust ist aber auch später als sekundäre Nachblutung ebenso alarmierend. Häufigste Ursache ist eine postoperative Nachblutung (z. B. Abrutschen einer Gefäßunterbindung). Du überwachst engmaschig, lässt ihn nüchtern (mögliche Re-OP) und bereitest die Weiterversorgung vor.",
            feedbackB1:
              "Genau richtig. Über 200 ml frisches Blut aus der Drainage in einer Stunde ist ein sicheres Zeichen für eine Nachblutung — auch am 2. Tag nach der OP. Dann sofort den Arzt rufen. Engmaschig überwachen, nüchtern lassen (vielleicht wieder OP) und alles vorbereiten.",
          },
          {
            text: "Etwas Blut in der Drainage ist nach so einer Operation normal — ich notiere die Menge und bewerte sie beim nächsten Rundgang in einer Stunde in Ruhe neu.",
            isCorrect: false,
            feedback:
              "Dass du an einen normalen postoperativen Rest denkst, ist verständlich — aber hier gefährlich: Über 200 ml frisches Blut aus der Drainage innerhalb einer Stunde ist kein Wundschmerz-Rest, sondern ein untrügliches Zeichen einer Nachblutung. Hier muss sofort der Arzt verständigt werden; eine Stunde abzuwarten kann zum Volumenmangelschock führen. Frühes Erkennen und sofortiges Alarmieren sind entscheidend — genau darauf kommt es beim nächsten Mal an.",
            feedbackB1:
              "Der Gedanke ist verständlich — aber gefährlich: Über 200 ml Blut in einer Stunde ist NICHT normal, sondern ein sicheres Zeichen für eine Nachblutung. Sofort den Arzt rufen. Eine Stunde warten kann zum Schock führen.",
          },
          {
            text: "Die Drainage abklemmen oder selbst ziehen, damit über den Schlauch nicht noch mehr Blut nach außen verloren geht und die Blutung sichtbar gestoppt ist.",
            isCorrect: false,
            feedback:
              "Der Wunsch, den Blutverlust zu stoppen, ist richtig — aber so nicht: Das Abklemmen oder Ziehen einer Drainage entscheidet die Pflege nicht eigenmächtig. Das Blut in der Drainage ist ein Warnhinweis, kein „Leck“, das man verschließt — die Nachblutung findet im Bauch statt und wird ärztlich (meist operativ) gestillt. Richtig ist: sofort den Arzt verständigen, überwachen, nüchtern lassen, Weiterversorgung vorbereiten. Dein Ziel stimmt, der Weg führt über den Arzt.",
            feedbackB1:
              "Dein Ziel ist richtig — aber der Weg nicht: Die Drainage darf die Pflege nicht selbst abklemmen oder ziehen. Das Blut ist ein Warnzeichen. Die Blutung ist im Bauch und muss der Arzt stoppen (meist im OP). Richtig: sofort Arzt rufen, überwachen, nüchtern lassen.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 9,
};

// ═══════════════════════════════════════════ 3) ERSTMASSNAHMEN
export const CE06_SIT_KORTMANN_ERSTMASSNAHMEN: SituationsPhase = {
  phaseId: "ce06-kortmann-erstmassnahmen",
  phase: "erstmassnahmen",
  titel: "Bis der Chirurg da ist",
  titelB1: "Bis der Chirurg da ist",
  kontext:
    "Der Arzt ist alarmiert und auf dem Weg, eine Kollegin kommt dazu. Jetzt zählt die richtige Erstversorgung, bis Herr Kortmann beurteilt und ggf. erneut operiert wird.",
  kontextB1:
    "Der Arzt ist informiert und kommt gleich, eine Kollegin hilft. Jetzt zählt die richtige Erstversorgung, bis Herr Kortmann untersucht und vielleicht wieder operiert wird.",
  kernSteps: [
    {
      stepId: "ce06-kortmann-erm-01",
      phase: 3,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: [
        "Paetz Chirurgie 2017, Kap. 12.6 (akutes Abdomen: nüchtern)",
        "Paetz Chirurgie 2017, Kap. 12.5 (Nachblutung: Kreislauf-/Hb-Kontrolle, Volumenersatz)",
      ],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce06-kortmann-nuechtern-vorbereiten",
      tag: "pflege",
      themaPrimaer: "abdomen-stoma-drainagen",
      kernfaktId: ["F-04", "F-06"],
      contentC1: {
        title: "Nüchtern lassen — oder stärken?",
        body: "Bis der Chirurg Herrn Kortmann beurteilt, musst du richtig handeln. Bewerte zwei Aussagen.",
        glossarBegriffe: ["nüchtern", "Re-Operation", "Monitoring"],
      },
      contentB1: {
        title: "Nüchtern lassen — oder stärken?",
        body: "Bis der Chirurg kommt, musst du richtig handeln. Bewerte zwei Aussagen.",
        glossarBegriffe: ["nüchtern (= nichts essen/trinken)", "Re-Operation (= erneute OP)"],
      },
      question: {
        fragetext: "Richtig oder falsch?",
        trueFalseCards: [
          {
            statement:
              "Ich gebe Herrn Kortmann jetzt einen Schluck Wasser und einen Keks, damit er bei Kräften bleibt, bis der Chirurg kommt.",
            isTrue: false,
            explanation:
              "Falsch. Bei Verdacht auf eine Nachblutung mit möglicher erneuter Operation bleibt Herr Kortmann nüchtern (nichts essen/trinken) — schon bei jedem akuten Abdomen gilt: bis zur Klärung des Vorgehens nüchtern bleiben. Essen oder Trinken würde eine baldige Narkose (Betäubung für die OP) und Operation gefährden, weil dabei Aspirationsgefahr besteht (Verschlucken von Mageninhalt in die Lunge). Deshalb ist es tabu.",
          },
          {
            statement:
              "Ich lasse ihn nüchtern, überwache Puls, Blutdruck, Bewusstsein und die Drainagenmenge engmaschig und bereite alles für eine mögliche erneute Operation vor.",
            isTrue: true,
            explanation:
              "Richtig. Bis zur ärztlichen Beurteilung/Re-OP bleibt Herr Kortmann nüchtern (nichts essen/trinken). Bei einer intraabdominellen Nachblutung wird der Flüssigkeits-/Blutverlust unter fortlaufender Kreislauf- und Hb-Kontrolle (Kontrolle des roten Blutfarbstoffs) ersetzt — die Pflege überwacht engmaschig Puls, Blutdruck, Bewusstsein und die Drainagenmenge und bereitet die Weiterversorgung (Zugänge, Kreuzblut, OP-Anmeldung) nach ärztlicher Anordnung vor.",
          },
        ],
      },
    },
    {
      stepId: "ce06-kortmann-erm-02",
      phase: 3,
      stepType: "pflegewagen",
      bloomLevel: 3,
      kompetenzbereich: "II.1",
      quellen: [
        "Paetz Chirurgie 2017, Kap. 12.5 (Nachblutung: Volumen/Transfusion, Kreislaufkontrolle)",
        "Paetz Chirurgie 2017, Kap. 12.6 (akutes Abdomen: nüchtern)",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-kortmann-material-nachblutung",
      tag: "pflege",
      themaPrimaer: "abdomen-stoma-drainagen",
      kernfaktId: ["F-06", "F-04"],
      contentC1: {
        title: "Material richten für Überwachung und OP-Vorbereitung",
        body: "Bis der Chirurg da ist, richtest du das Nötige. Denk daran: Herr Kortmann bleibt nüchtern (mögliche Re-OP) — und was jetzt Priorität hat, ist Überwachung und Volumenbereitschaft.",
        glossarBegriffe: ["Kreuzblut", "Venenverweilkanüle", "Monitoring"],
      },
      contentB1: {
        title: "Material richten",
        body: "Bis der Chirurg da ist, richtest du das Nötige. Wichtig: Herr Kortmann darf nichts essen/trinken (vielleicht wieder OP). Jetzt zählen Überwachung und Flüssigkeit.",
        glossarBegriffe: ["Kreuzblut (= Blut für die Blutgruppe)", "Venenverweilkanüle (= Zugang in die Vene)"],
      },
      question: {
        fragetext: "Welches Material gehört jetzt dazu? Tippe ein Material an, dann den passenden Bereich.",
        pflegewagen: {
          fragetext: "Welches Material gehört jetzt dazu? Tippe ein Material an, dann den passenden Bereich.",
          fragetextB1: "Was brauchst du jetzt? Tippe ein Material an. Dann tippe auf den richtigen Bereich.",
          zonen: [
            {
              id: "richten",
              label: "Jetzt richten",
              labelB1: "Auf den Wagen",
              beschreibung: "Für Überwachung & OP-Vorbereitung",
              beschreibungB1: "Was jetzt gebraucht wird",
              variant: "primary",
            },
            {
              id: "weglegen",
              label: "Jetzt nicht / kontraindiziert",
              labelB1: "Brauche ich nicht",
              beschreibung: "Gehört jetzt nicht dazu",
              beschreibungB1: "Nicht für jetzt",
              variant: "discard",
            },
          ],
          items: [
            {
              id: "monitoring",
              label: "Blutdruckmanschette und Pulsoxymeter zur Überwachung",
              labelB1: "Blutdruck- und Sättigungsmessung",
              icon: "Activity",
              korrekteZoneId: "richten",
              erklaerung:
                "Bei drohendem Volumenmangel werden Puls, Blutdruck, Bewusstsein und Sättigung engmaschig überwacht — Manschette und Pulsoxymeter gehören auf den Wagen.",
              erklaerungB1: "Puls, Blutdruck und Sättigung müssen engmaschig überwacht werden. Das Material gehört dazu.",
            },
            {
              id: "zugang",
              label: "Material für einen weiteren venösen Zugang",
              labelB1: "Material für einen Venen-Zugang",
              icon: "Syringe",
              korrekteZoneId: "richten",
              erklaerung:
                "Bei Nachblutung wird der Volumenverlust über Infusionen (ggf. Transfusionen) ersetzt — ein weiterer sicherer venöser Zugang wird nach ärztlicher Anordnung vorbereitet.",
              erklaerungB1: "Bei Blutverlust braucht man Flüssigkeit über die Vene. Ein weiterer Zugang wird vorbereitet.",
            },
            {
              id: "kreuzblut",
              label: "Blutentnahmeröhrchen inkl. Kreuzblut/Blutgruppe",
              labelB1: "Blutröhrchen (auch für Blutgruppe)",
              icon: "TestTube",
              korrekteZoneId: "richten",
              erklaerung:
                "Bei Blutverlust können Erythrozytenkonzentrate nötig werden; dafür braucht es Blutgruppe und Kreuzblut sowie eine Hb-Kontrolle. Röhrchen gleich mitrichten.",
              erklaerungB1: "Bei Blutverlust braucht man vielleicht Blutkonserven. Dafür bestimmt man die Blutgruppe.",
            },
            {
              id: "verbandmaterial",
              label: "Steriles Verbandmaterial für die ärztliche Kontrolle",
              labelB1: "Steriles Verbandmaterial",
              icon: "Bandage",
              korrekteZoneId: "richten",
              erklaerung:
                "Für die ärztliche Inspektion von Wunde und Drainage-Austrittsstelle wird steriles Material bereitgelegt — aseptisches Arbeiten bleibt Pflicht.",
              erklaerungB1: "Für die Kontrolle durch den Arzt legst du steriles (keimfreies) Material bereit.",
            },
            {
              id: "getraenk",
              label: "Ein Glas Wasser und etwas zu essen",
              labelB1: "Wasser und etwas zu essen",
              icon: "Utensils",
              korrekteZoneId: "weglegen",
              erklaerung:
                "Falsch. Herr Kortmann bleibt nüchtern — bei Verdacht auf Nachblutung mit möglicher Re-Operation sind Essen und Trinken tabu (Aspirationsgefahr bei Narkose).",
              erklaerungB1: "Nein. Herr Kortmann darf nichts essen oder trinken (vielleicht wieder OP).",
            },
            {
              id: "waermflasche",
              label: "Wärmflasche auf den Bauch legen",
              labelB1: "Wärmflasche auf den Bauch",
              icon: "Flame",
              korrekteZoneId: "weglegen",
              erklaerung:
                "Falsch. Lokale Wärme auf den Bauch gehört nicht zur Erstversorgung bei akutem Abdomen und Verdacht auf Nachblutung — sie ist nicht angezeigt und darf die Überwachung und OP-Vorbereitung nicht ersetzen. Der Bauch wird nicht eigenmächtig behandelt; jede Maßnahme erfolgt nach ärztlicher Anordnung.",
              erklaerungB1: "Nein. Wärme auf den Bauch gehört hier nicht dazu. Jetzt zählen Überwachung und OP-Vorbereitung. Der Bauch wird nicht eigenmächtig behandelt.",
            },
            {
              id: "stomabeutel",
              label: "Stomabeutel für den geplanten Routine-Wechsel",
              labelB1: "Stomabeutel für den Routine-Wechsel",
              icon: "Package",
              korrekteZoneId: "weglegen",
              erklaerung:
                "Falsch — Frage der Priorität. Ein geplanter Routine-Wechsel der Stomaversorgung hat in der akuten Nachblutungssituation keine Priorität. Jetzt zählen Überwachung, Volumenbereitschaft und OP-Vorbereitung; der Stomabeutel wird nur bei Bedarf (z. B. undicht) versorgt.",
              erklaerungB1: "Nein — nicht jetzt. Der geplante Wechsel der Stomaversorgung ist in der Akutsituation nicht wichtig. Jetzt zählen Überwachung und OP-Vorbereitung.",
            },
          ],
          begruendung:
            "In der akuten Nachblutung zählt Überwachung und Volumenbereitschaft: Monitoring (Puls/Blutdruck/Sättigung), Material für einen weiteren venösen Zugang, Blutröhrchen inkl. Kreuzblut und steriles Verbandmaterial für die ärztliche Kontrolle. Nichts oral (nüchtern), keine Wärme auf den Bauch, kein Routine-Stomawechsel jetzt.",
          begruendungB1:
            "In der Notsituation zählt Überwachung und Flüssigkeit: Blutdruck/Puls/Sättigung messen, ein weiterer Venen-Zugang, Blutröhrchen mit Blutgruppe und steriles Verbandmaterial. Nichts essen/trinken, keine Wärme auf den Bauch, kein Routine-Stomawechsel jetzt.",
        },
      },
    },
    {
      stepId: "ce06-kortmann-erm-03",
      phase: 3,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: [
        "Paetz Chirurgie 2017, Kap. 12.6 (akutes Abdomen: Kreislaufsymptome, evtl. Schock)",
        "Paetz Chirurgie 2017, Kap. 12.5 (Nachblutung: Volumenersatz unter Kreislaufkontrolle)",
      ],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-kortmann-verschlechterung",
      tag: "pflege",
      themaPrimaer: "abdomen-stoma-drainagen",
      kernfaktId: ["F-02", "F-06"],
      contentC1: {
        title: "Der Kreislauf kippt",
        body: "Kurz darauf steigt Herr Kortmanns Puls weiter, der Blutdruck fällt, die Haut wird blass-kalt, er wird unruhig und zunehmend benommen. Wie ordnest du das ein und was tust du?",
        glossarBegriffe: ["hypovolämischer Schock", "Kreislaufsymptome", "Volumenersatz"],
      },
      contentB1: {
        title: "Der Kreislauf kippt",
        body: "Kurz darauf steigt Herrn Kortmanns Puls weiter, der Blutdruck fällt, die Haut ist blass-kalt, er wird unruhig und benommen. Was ist das und was tust du?",
        glossarBegriffe: ["hypovolämischer Schock (= Schock durch Blutmangel)"],
      },
      question: {
        fragetext: "Puls steigt, Blutdruck fällt, blass-kalte Haut, zunehmend benommen — wie ordnest du das ein?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Ein beginnender Volumenmangelschock durch die Nachblutung. Ich melde die Verschlechterung sofort dem Arzt, lasse Volumen/Transfusion nach Anordnung laufen und überwache engmaschig.",
            isCorrect: true,
            explanation:
              "Richtig. Zum akuten Abdomen gehören Kreislaufsymptome bis hin zum Schock. Ein steigender Puls, fallender Blutdruck, blass-kalte Haut und zunehmende Benommenheit sind Zeichen eines beginnenden hypovolämischen Schocks durch den Blutverlust. Der Volumenverlust wird unter fortlaufender Kreislauf- und Hb-Kontrolle durch Infusionen und ggf. Transfusionen ersetzt (ärztlich angeordnet) — du meldest die Verschlechterung sofort, setzt die Anordnungen um und überwachst engmaschig, bis Herr Kortmann versorgt/verlegt ist.",
            explanationB1:
              "Richtig. Zum akuten Abdomen gehören auch Kreislaufzeichen bis zum Schock. Schneller Puls, fallender Blutdruck, blass-kalte Haut und Benommenheit heißen: beginnender Schock durch Blutverlust. Sofort dem Arzt melden, Flüssigkeit/Blut nach Anordnung, engmaschig überwachen.",
          },
          {
            text: "Das ist nach einer Operation und mit Schmerzmitteln normal — ich warte ab und kontrolliere die Werte beim nächsten regulären Rundgang in Ruhe erneut.",
            isCorrect: false,
            explanation:
              "Der Reflex, an OP-Folgen zu denken, ist verständlich — aber hier gefährlich: Steigender Puls plus fallender Blutdruck plus blass-kalte Haut plus Benommenheit bei bekannter Nachblutung sind kein „normaler“ postoperativer Zustand, sondern Zeichen eines beginnenden Schocks. Abwarten kostet wertvolle Zeit — die Verschlechterung muss sofort gemeldet und die Therapie umgesetzt werden. Vertrau deiner Beobachtung und alarmiere.",
            explanationB1:
              "Der Gedanke ist verständlich — aber gefährlich: Schneller Puls, fallender Blutdruck, blass-kalte Haut und Benommenheit bei einer Nachblutung sind nicht normal, sondern ein beginnender Schock. Nicht abwarten — sofort melden und handeln.",
          },
          {
            text: "Ich setze ihn zum Trinken auf und rede beruhigend auf ihn ein, damit sich Kreislauf und Puls von selbst wieder stabilisieren und er nicht in Panik gerät.",
            isCorrect: false,
            explanation:
              "Deine zugewandte Haltung ist genau richtig — aber so nicht ausreichend: Herr Kortmann bleibt nüchtern (mögliche Re-OP), Trinken ist tabu. Beruhigende Zuwendung ist wichtig, ersetzt aber nicht das Handeln: Bei einem beginnenden Schock zählen sofortige Arztmeldung, Volumen/Transfusion nach Anordnung und engmaschige Überwachung. Bleib bei ihm — und alarmiere zugleich.",
            explanationB1:
              "Deine Zuwendung ist richtig — aber reicht nicht: Herr Kortmann darf nichts trinken (vielleicht wieder OP). Beruhigen ist gut, aber beim Schock zählen sofort Arzt melden, Flüssigkeit/Blut nach Anordnung und überwachen.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 15,
};

// ═══════════════════════════════════════════ 4) ÜBERGEBEN
export const CE06_SIT_KORTMANN_UEBERGEBEN: SituationsPhase = {
  phaseId: "ce06-kortmann-uebergeben",
  phase: "uebergeben",
  titel: "Übergabe an den OP",
  titelB1: "Übergabe an den OP",
  kontext:
    "Der Chirurg entscheidet: Re-Laparotomie. Herr Kortmann wird in den OP gebracht. Am Telefon fragt die OP-Pflegekraft: \"Was ist mit ihm?\"",
  kontextB1:
    "Der Chirurg entscheidet: erneute Operation. Herr Kortmann kommt in den OP. Die OP-Pflegekraft fragt am Telefon: \"Was ist mit ihm?\"",
  kernSteps: [
    {
      stepId: "ce06-kortmann-ueb-01",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.1",
      quellen: ["Leonard et al. 2004 (SBAR)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-kortmann-sbar",
      tag: "pflege",
      // Hinweis: kernfaktId "F-07" löst über themaPrimaer "notfallassessment" auf den SBAR-Fakt
      // (notfallassessment.md F-07) auf — NICHT auf den gleichnamigen Drainage-Fakt F-07 in
      // abdomen-stoma-drainagen.md. Thema-Bindung ist maßgeblich.
      themaPrimaer: "notfallassessment",
      kernfaktId: ["F-07"],
      contentC1: {
        title: "SBAR-Übergabe an den OP",
        body: "Welche Übergabe folgt SBAR und bringt das Entscheidende zuerst?",
        glossarBegriffe: ["SBAR"],
      },
      contentB1: {
        title: "Übergabe mit SBAR",
        body: "Welche Übergabe folgt SBAR und bringt das Wichtige zuerst?",
        glossarBegriffe: ["SBAR (= Situation, Background, Assessment, Recommendation)"],
      },
      question: {
        fragetext: "Welche SBAR-Übergabe ist vollständig und priorisiert?",
        mcVariant: "standard",
        optionen: [
          {
            text: "\"Herr Kortmann, 72, 2. Tag nach Not-Hartmann bei perforierter Sigmadivertikulitis (S). Endständiges Kolostoma, intraabdominelle Zieldrainage (B). Jetzt über 200 ml frisches Blut aus der Bauchdrainage in 1 Stunde, Puls steigend, RR fallend, blass, nüchtern, Zugang läuft (A). Bitte sofortige OP-Übernahme, Kreuzblut ist unterwegs (R).\"",
            isCorrect: true,
            explanation:
              "Richtig. Vollständiges SBAR: die aktuelle Situation (Blutung aus der Bauchdrainage), der entscheidende Background (2. Tag nach Not-Hartmann, Kolostoma, Drainage), das kritische Assessment (>200 ml frisches Blut/1 h, Tachykardie, Hypotonie, nüchtern, Zugang) und eine klare Empfehlung (sofortige OP-Übernahme, Kreuzblut). Das Gegenüber kann sofort priorisieren.",
            explanationB1:
              "Richtig. Vollständiges SBAR: was jetzt ist (Blutung aus der Drainage), der Hintergrund (2. Tag nach Not-OP, Kolostoma, Drainage), der kritische Zustand (über 200 ml Blut in 1 Stunde, schneller Puls, niedriger Blutdruck, nüchtern) und eine klare Bitte (sofort in den OP, Blutgruppe unterwegs).",
          },
          {
            text: "\"Der Patient aus Zimmer 8 blutet aus einer Drainage, ich habe ihm schon frische Wäsche angezogen und alles ein bisschen sauber gemacht, damit es für den OP nicht so wüst aussieht — er kommt jetzt gleich zu euch runter, macht euch da unten mal bereit für ihn.\"",
            isCorrect: false,
            explanation:
              "Gefährlich verkürzt. Es fehlen die entscheidenden Fakten: welche OP/welcher Tag, welche Drainage, die Blutmenge pro Zeit, die Vitalzeichen, der Nüchternstatus und eine klare Empfehlung. So kann der OP nicht vorbereiten. SBAR verlangt die harten Fakten und eine konkrete Bitte.",
            explanationB1:
              "Zu kurz. Es fehlen die Fakten: welche OP, welche Drainage, wie viel Blut, die Werte, nüchtern und eine klare Bitte. So kann der OP nichts vorbereiten.",
          },
          {
            text: "\"Herr Kortmann war Bauingenieur, ein sehr genauer Mensch, der alles verstehen möchte und sich mit dem neuen Stoma noch schwertut — das solltet ihr unbedingt wissen, wenn er zu euch kommt.\"",
            isCorrect: false,
            explanation:
              "Am Notfall vorbei. Das ist überwiegend Hintergrund zur Person. Es fehlen das akute Ereignis (Blutung), das kritische Assessment (Blutmenge, Vitalzeichen) und die medizinische Empfehlung. Der psychosoziale Kontext ist wichtig, aber in der SBAR-Übergabe eines Notfalls kommt das medizinisch Entscheidende zuerst.",
            explanationB1:
              "Am Notfall vorbei. Das ist Hintergrund zur Person. Es fehlen das akute Ereignis, die Werte und die Bitte. Zuerst kommt das medizinisch Wichtige.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 5) REFLEKTIEREN
export const CE06_SIT_KORTMANN_REFLEKTIEREN: SituationsPhase = {
  phaseId: "ce06-kortmann-reflektieren",
  phase: "reflektieren",
  titel: "„Ich verstehe das alles nicht“",
  titelB1: "„Ich verstehe das alles nicht“",
  kontext:
    "Herr Kortmann ist versorgt und wird im Verlauf auf Station zurückerwartet. Dir geht sein Satz vom Anfang nach: „Können Sie mir erklären, wofür dieser Schlauch da ist? Ich verstehe das alles nicht.“ Du denkst über die Bedeutung von Information und Wissen nach.",
  kontextB1:
    "Herr Kortmann ist versorgt und kommt später auf die Station zurück. Dir geht sein Satz nach: „Ich verstehe das alles nicht.“ Du denkst über die Bedeutung von Information und Wissen nach.",
  kernSteps: [
    {
      stepId: "ce06-kortmann-ref-01",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "I.1",
      quellen: ["Paetz Chirurgie 2017, Kap. 23.9 (Information, Beratung, Patientenedukation; Sicherheit im Umgang mit dem Stoma)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-kortmann-bedeutung-information",
      tag: "pflege",
      themaPrimaer: "abdomen-stoma-drainagen",
      kernfaktId: ["F-17"],
      contentC1: {
        title: "Warum Wissen für ihn zählt",
        body: "Herr Kortmann ist akut erkrankt und wollte von Anfang an alles verstehen. Stelle heraus, welche Bedeutung Informationen und Wissen zur eigenen gesundheitlichen Situation für einen akuterkrankten Menschen wie ihn haben.",
        glossarBegriffe: ["Patientenedukation", "Information", "Autonomie"],
      },
      contentB1: {
        title: "Warum Wissen für ihn zählt",
        body: "Herr Kortmann ist akut erkrankt und wollte von Anfang an alles verstehen. Was bedeutet es für ihn, Informationen und Wissen über seine Situation zu bekommen?",
        glossarBegriffe: ["Patientenedukation (= Schulung/Beratung von Patienten)"],
      },
      question: {
        fragetext: "Stelle die Bedeutung von Information und Wissen für den akuterkrankten Herrn Kortmann heraus.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Was löst es bei einem akut erkrankten Menschen wie Herrn Kortmann aus, wenn er die Schläuche, das Stoma und die Abläufe nicht versteht? 2) Welche Bedeutung haben verständliche Informationen und Wissen zur eigenen Situation (Sicherheit, Kontrolle, Angstreduktion, Mitentscheidung)? 3) Warum ist gerade bei ihm — einem Menschen, der alles verstehen will — die Information besonders wichtig? 4) Was nimmst du für deine Haltung mit?",
          placeholder:
            "Wenn Herr Kortmann nicht versteht, was mit ihm passiert, … Verständliche Informationen bedeuten für ihn … Gerade bei ihm ist das wichtig, weil … Mitnehmen würde ich …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Erkennt der Schüler die Bedeutung von Information/Wissen für den akuterkrankten Menschen: dass Nichtverstehen Angst und Kontrollverlust auslöst, und dass verständliche Information Sicherheit gibt, Angst reduziert und Mitentscheidung/Autonomie sowie den Umgang mit der neuen Situation (Stoma) ermöglicht (Patientenedukation als Pflegeziel: Sicherheit, Selbstvertrauen, Eigenständigkeit)? Lob für differenzierte Bloom-5-Reflexion; niemals abwertend.",
        },
      },
    },
    {
      stepId: "ce06-kortmann-ref-02",
      phase: 5,
      stepType: "freetext",
      bloomLevel: 6,
      kompetenzbereich: "I.1",
      quellen: ["Paetz Chirurgie 2017, Kap. 23.9 (Beratung, Anleitung zur Selbstversorgung, Patientenschulung)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-kortmann-information-umsetzen",
      tag: "pflege",
      themaPrimaer: "abdomen-stoma-drainagen",
      kernfaktId: ["F-17"],
      contentC1: {
        title: "Sicherheit durch Information — Vorschläge entwickeln",
        body: "Entwickle konkrete Vorschläge, wie du Herrn Kortmann durch Information, Beratung und Anleitung Sicherheit im Umgang mit seiner Situation (Stoma, Drainagen, weiterer Verlauf) gibst.",
        glossarBegriffe: ["Patientenedukation", "Anleitung", "Stomatherapeutin"],
      },
      contentB1: {
        title: "Sicherheit durch Information — Ideen entwickeln",
        body: "Entwickle konkrete Ideen, wie du Herrn Kortmann durch Information, Beratung und Anleitung Sicherheit gibst (Stoma, Drainagen, weiterer Verlauf).",
        glossarBegriffe: ["Anleitung (= zeigen und üben lassen)", "Stomatherapeutin (= Pflegeexpertin Stoma)"],
      },
      question: {
        fragetext: "Entwickle 3–4 konkrete Vorschläge, wie du Herrn Kortmann durch Information und Anleitung Sicherheit gibst.",
        musterantwort:
          "Ziel der Patientenedukation ist, dem betroffenen Menschen Sicherheit, Selbstvertrauen und Eigenständigkeit zu erhalten. Konkrete Vorschläge: (1) In verständlicher Sprache und kleinen Schritten erklären, wofür jeder Schlauch, das Stoma und die Kontrollen da sind — ohne Fachchinesisch, mit Rückfragen, ob es angekommen ist; Wichtiges schriftlich mitgeben, weil er sich in der Belastung wenig merkt. (2) An seine Ressource anknüpfen: Er ist Ingenieur und will verstehen — ihm Ablauf und „Warum“ transparent machen (was heute passiert, wie es weitergeht, wann das Stoma evtl. zurückverlegt wird), das gibt ihm Kontrolle zurück und reduziert Angst. (3) Frühzeitig zur Selbstversorgung anleiten (Stomaversorgung Schritt für Schritt zeigen und üben lassen) und die Stomatherapeutin/Pflegeexpertin einbeziehen. (4) Ängste und Sorgen ernst nehmen und im Gespräch abschwächen, Beratungs- und Schulungsangebote machen (auch Selbsthilfe/Angehörige einbeziehen). So gewinnt er Sicherheit im Umgang mit der neuen Situation.",
        bewertungskriterien: [
          "Erkennt Information/Wissen als Quelle von Sicherheit, Kontrolle und Angstreduktion für den akuterkrankten Menschen",
          "Knüpft an seine Ressource an (will verstehen) — verständliche Information, Transparenz über den Verlauf",
          "Entwickelt konkrete, umsetzbare Vorschläge (verständlich erklären, schriftlich, Anleitung zur Selbstversorgung, Stomatherapeutin einbeziehen)",
          "Sandwich-Ton, wertschätzend, nicht bevormundend",
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 12,
};

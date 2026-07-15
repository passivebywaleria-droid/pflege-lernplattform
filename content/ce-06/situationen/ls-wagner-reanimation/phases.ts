// CE-06 Situation „Herr Wagner — Reanimation auf Normalstation"
// SituationsTyp: akutsituation — 5 Phasen: erkennen → alarmieren → erstmassnahmen → uebergeben → reflektieren
// Deckt Lernergebnisse: CE06-LE1-W1 (BLS/ALS/AED/Kammerflimmern/KPR-Indikation),
//   CE06-LE1-K2 (lebenserhaltende Sofortmaßnahmen), CE06-LE1-E1 (eigene Gefühle reflektieren).
// Grounding: specs/ce-06/kernfakten/reanimation-bls.md + notfallassessment.md (Verbatim-belegt).
// Quellen: Pflege heute (7. Aufl.) Kap. 14; Genzwürker/Hinkelbein, Fallbuch (4. Aufl.); ERC-Leitlinien 2021.

import type { SituationsPhase } from "../../../_types";

// ═══════════════════════════════════════════ 1) ERKENNEN
export const CE06_SIT_WAGNER_ERKENNEN: SituationsPhase = {
  phaseId: "ce06-wagner-erkennen",
  phase: "erkennen",
  titel: "Der Zusammenbruch",
  titelB1: "Herr Wagner fällt um",
  kontext:
    "Du kommst mit dem Frühdienst auf den Flur, als Herr Wagner ein paar Meter vor dir zu Boden geht. Du bist in Sekunden bei ihm. Er liegt auf dem Rücken, reagiert nicht, als du ihn ansprichst. Du beugst dich über sein Gesicht: Der Brustkorb hebt sich kaum, und alle paar Sekunden ringt er nach einem einzelnen, schnappenden Atemzug.",
  kontextB1:
    "Du kommst auf den Flur. Herr Wagner fällt vor dir um. Du bist sofort bei ihm. Er liegt auf dem Rücken und reagiert nicht, als du ihn ansprichst. Sein Brustkorb hebt sich kaum. Alle paar Sekunden macht er einen einzelnen, schnappenden Atemzug.",
  kernSteps: [
    {
      stepId: "ce06-wagner-erk-01",
      phase: 1,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.3.1 (Erkennen des Herz-Kreislauf-Stillstands)", "ERC 2021"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-wagner-schnappatmung",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-01", "F-02", "F-09"],
      contentC1: {
        title: "Atmet er noch?",
        body: "Herr Wagner reagiert nicht auf Ansprache und Rütteln an den Schultern. Du siehst alle paar Sekunden einen einzelnen, schnappenden Atemzug. Wie wertest du diese Atmung?",
        glossarBegriffe: ["Schnappatmung (agonale Atmung)", "Herz-Kreislauf-Stillstand"],
      },
      contentB1: {
        title: "Atmet er noch?",
        body: "Herr Wagner reagiert nicht. Du siehst alle paar Sekunden einen einzelnen, schnappenden Atemzug. Was bedeutet diese Atmung?",
        glossarBegriffe: ["Schnappatmung (= einzelne schnappende Atemzüge)"],
      },
      question: {
        fragetext: "Wie wertest du die schnappende Atmung von Herrn Wagner?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Er atmet ja noch — ich lege ihn in die stabile Seitenlage und beobachte ihn.",
            isCorrect: false,
            explanation:
              "Ein gefährlicher Trugschluss. Schnappatmung (agonale Atmung) ist KEINE normale Atmung — sie tritt kurz nach dem Herz-Kreislauf-Stillstand auf. Wer sie als 'atmet noch' deutet und in die Seitenlage legt, verliert die entscheidenden Minuten. Bei fehlender Reaktion UND fehlender normaler Atmung gilt: Herz-Kreislauf-Stillstand.",
            explanationB1:
              "Falsch. Schnappatmung ist keine normale Atmung. Sie kommt kurz nach dem Herz-Kreislauf-Stillstand. Wenn du ihn jetzt nur zur Seite legst, verlierst du wertvolle Zeit.",
          },
          {
            text: "Keine Reaktion und keine normale Atmung — ich gehe von einem Herz-Kreislauf-Stillstand aus und handle sofort.",
            isCorrect: true,
            explanation:
              "Richtig. Reagiert der Patient nicht und ist keine normale Atmung vorhanden, muss ein Herz-Kreislauf-Stillstand angenommen werden — vereinzelte, schnappende Atemzüge zählen ausdrücklich NICHT als normale Atmung. Genau jetzt beginnt die Rettungskette.",
            explanationB1:
              "Richtig. Prüfe zwei Dinge: Reagiert er? Ist seine Atmung normal? Fehlt beides, nennt man das einen Herz-Kreislauf-Stillstand. Schnappatmung zählt nicht als Atmung. Jetzt beginnt die Rettungskette (die Schritte, die jetzt sein Leben retten) — du handelst sofort.",
          },
          {
            text: "Ich bin unsicher — ich hole erst ein Stethoskop und höre die Lunge ab, um sicherzugehen.",
            isCorrect: false,
            explanation:
              "Nein. Beim Verdacht auf Herz-Kreislauf-Stillstand zählt jede Sekunde. Die Prüfung beschränkt sich bewusst auf Bewusstsein und Atmung und muss rasch ablaufen. Ein Stethoskop zu holen kostet Zeit, die dem Gehirn fehlt — im Zweifel wird reanimiert.",
            explanationB1:
              "Nein. Bei Herz-Kreislauf-Stillstand zählt jede Sekunde. Du prüfst nur kurz Bewusstsein und Atmung. Kein Stethoskop holen. Im Zweifel: reanimieren.",
          },
        ],
      },
    },
    {
      // Wissens-Tab (Gold-Standard, curriculum-first): kommt NACH dem Hook
      // (Antizipation) und VOR der Puls-Frage (Anwendung). Literatur-belegt +
      // paraphrasiert (Abstandstest: 0 Treffer). Kein Antwort-Step → verschiebt
      // das Play-then-Gate nicht.
      stepId: "ce06-wagner-erk-01b-hks-erkennen",
      phase: 1,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // Kompetenzbereich aus dem Rahmenlehrplan (CE-06-LE1 = Schwerpunkt I.4),
      // NICHT fachlich geraten. Grundlage für den Kompetenznachweis.
      kompetenzbereich: "I.4",
      quellen: ["ERC-Leitlinien 2021"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-wagner-hks-erkennen",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-01", "F-02", "F-03"],
      transition: "Und wenn jetzt jemand ruft, du sollst erst den Puls suchen?",
      contentC1: {
        title: "Herz-Kreislauf-Stillstand erkennen",
        body: "",
        glossarBegriffe: [
          "Schnappatmung",
          "Herz-Kreislauf-Stillstand",
          "Rettungskette",
          "Synkope",
        ],
      },
      inlineWissen: {
        bausteinRef: "reanimation-bls-hks-erkennen",
        themaPrimaer: "reanimation-bls",
        themenSekundaer: ["notfallassessment"],
        storyAufhaenger:
          "Frühdienst, du kommst auf den Flur — und Herr Wagner sackt ein paar Meter vor dir zusammen. Du bist sofort bei ihm, sprichst ihn an, rüttelst an den Schultern. Nichts. Nur alle paar Sekunden ein einzelnes, schnappendes Luftholen. Und jetzt?",
        storyAufhaengerB1:
          "Frühdienst. Herr Wagner fällt ein paar Meter vor dir um. Du bist sofort bei ihm. Du sprichst ihn an und rüttelst an den Schultern. Nichts. Nur alle paar Sekunden ein einzelnes, schnappendes Luftholen. Was jetzt?",
        kerntext:
          "Zwei Fragen entscheiden alles, beide beantwortest du in Sekunden: Wacht er auf, wenn du ihn ansprichst und rüttelst? Und hebt sich sein Brustkorb ruhig und regelmäßig? Bleibt beides aus, behandelst du ihn als Herz-Kreislauf-Stillstand.\n\nDer Haken liegt genau bei der Atmung: Kurz nachdem der Kreislauf steht, ringt der Körper oft noch nach einzelnen, ruckartigen Atemzügen mit langen Pausen — der Schnappatmung. Sie wirkt wie ein letztes bisschen Leben, ist aber das Gegenteil: ein Zeichen, dass der Kreislauf bereits steht. Wer sie für Atmung hält, verliert die wichtigsten Minuten.\n\nUnd der Puls? Als erfahrene Pflegekraft darfst du ihn tasten — aber nur zeitgleich zur Atemkontrolle und höchstens zehn Sekunden lang, denn selbst geübte Hände liegen dabei oft daneben. Verschenk dafür keine extra Zeit: Bleiben Reaktion und normale Atmung aus, wird sofort reanimiert. Dieses Erkennen ist Glied 1 der Rettungskette: Erkennen, Alarmieren, Drücken, Defibrillator.",
        kerntextB1:
          "Zwei Fragen entscheiden alles. Erstens: Wacht er auf, wenn du ihn ansprichst und rüttelst? Zweitens: Hebt sich sein Brustkorb ruhig und regelmäßig? Wenn beides fehlt, gilt: Herz-Kreislauf-Stillstand. Du handelst sofort.\n\nVorsicht bei der Atmung: Kurz nach dem Stillstand schnappt der Körper oft noch nach Luft. Das sind einzelne, ruckartige Atemzüge mit langen Pausen. Das nennt man Schnappatmung. Sie sieht aus wie Leben. Aber sie bedeutet das Gegenteil: Der Kreislauf steht schon. Wer das für normale Atmung hält, verliert die wichtigsten Minuten.\n\nUnd der Puls? Als erfahrene Pflegekraft darfst du ihn tasten — aber nur gleichzeitig mit der Atem-Kontrolle. Und höchstens zehn Sekunden lang. Denn auch geübte Hände irren sich oft beim Puls. Verliere keine extra Zeit: Er reagiert nicht und atmet nicht normal? Dann sofort reanimieren. Das Erkennen ist Glied 1 der Rettungskette: Erkennen, Alarmieren, Drücken, Defibrillator.",
        faustregel:
          "Keine Reaktion und kein ruhiges, gleichmäßiges Atmen — mehr brauchst du nicht, um zu handeln. Schnappen ist kein Atmen.",
        faustregelB1:
          "Keine Reaktion und kein ruhiges, gleichmäßiges Atmen? Dann handelst du. Schnappen ist kein Atmen.",
        spektrum: [
          {
            patientName: "Frau Ríos",
            situationsId: "ls-rios-synkope",
            hauptfaktor: "Synkope",
            kurzbeschreibung:
              "Kippt auch weg — aber ihr Gehirn wird nur kurz zu schwach durchblutet. Der Kreislauf läuft weiter, sie kommt von allein zu sich. Kein Stillstand.",
            kurzbeschreibungB1:
              "Sie kippt auch um. Aber ihr Gehirn bekommt nur kurz zu wenig Blut. Der Kreislauf läuft weiter. Sie wacht von allein wieder auf. Kein Stillstand.",
          },
          {
            patientName: "Bewusstloser mit ruhiger Atmung",
            hauptfaktor: "erhaltene Atmung",
            kurzbeschreibung:
              "Reagiert nicht, atmet aber gleichmäßig weiter — dann stabile Seitenlage, keine Wiederbelebung.",
            kurzbeschreibungB1:
              "Er reagiert nicht, aber er atmet ruhig und gleichmäßig weiter. Dann: stabile Seitenlage. Keine Wiederbelebung.",
          },
          {
            patientName: "Herr Wagner",
            situationsId: "ls-wagner-reanimation",
            hauptfaktor: "Schnappatmung",
            kurzbeschreibung:
              "Genau dieses ruhige Atmen fehlt. Das Schnappen täuscht es nur vor. Das ist der Stillstand.",
            kurzbeschreibungB1:
              "Bei ihm fehlt das ruhige Atmen. Das Schnappen sieht nur so aus wie Atmen. Das ist der Stillstand.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Herr Wagner reagiert nicht und schnappt nur nach Luft — handeln oder warten?",
          rueckseite:
            "Handeln. Keine Reaktion + kein ruhiges, gleichmäßiges Atmen = Herz-Kreislauf-Stillstand. Schnappen ist kein Atmen. Kein Pulstasten — direkt in die Rettungskette.",
          vorderseiteB1:
            "Herr Wagner reagiert nicht und schnappt nur nach Luft. Handeln oder warten?",
          rueckseiteB1:
            "Handeln. Keine Reaktion + kein ruhiges, gleichmäßiges Atmen = Herz-Kreislauf-Stillstand. Schnappen ist kein Atmen. Nicht den Puls suchen — sofort mit der Rettungskette starten.",
        },
      },
    },
    {
      stepId: "ce06-wagner-erk-02",
      phase: 1,
      stepType: "truefalse",
      bloomLevel: 3,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.3.1 (Pulskontrolle nicht mehr generell empfohlen)", "ERC 2021"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce06-wagner-keine-pulskontrolle",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-03"],
      contentC1: {
        title: "Erst den Puls tasten?",
        body: "Eine Kollegin ruft dir zu: 'Fühl erst mal, ob er noch einen Puls hat!' Stimmt dieser Rat?",
        glossarBegriffe: ["Karotispuls"],
      },
      contentB1: {
        title: "Erst den Puls tasten?",
        body: "Eine Kollegin ruft: 'Fühl erst, ob er noch einen Puls hat!' Ist das richtig?",
      },
      question: {
        fragetext: "Bewerte die Aussage: Vor Reanimationsbeginn muss man den Puls tasten.",
        trueFalseCards: [
          {
            statement: "Bevor ich mit der Reanimation beginne, muss ich zuerst sicher den Puls tasten.",
            isTrue: false,
            explanation:
              "Falsch. Die Pulskontrolle vor Beginn der Wiederbelebung wird auch für professionelle Helfer nicht mehr generell empfohlen — sie ist fehleranfällig und kostet wertvolle Zeit. Bei fehlender Reaktion und fehlender normaler Atmung wird sofort reanimiert. Nur ein Erfahrener darf gleichzeitig kurz (max. 10 Sek.) den Karotispuls tasten, während er nach anderen Lebenszeichen sucht. (Einfach gesagt: Keine Reaktion + keine normale Atmung = sofort reanimieren.)",
            explanationB1:
              "Falsch. Vor der Reanimation musst du nicht sicher den Puls tasten. Das kostet zu viel Zeit und ist auch für erfahrene Helfer schwierig. Wichtig ist nur: Reagiert er nicht, und ist die Atmung nicht normal? Dann musst du sofort reanimieren. Nur eine erfahrene Person darf anders vorgehen: Sie fühlt gleichzeitig ganz kurz — höchstens 10 Sekunden — den Puls am Hals, während sie nach anderen Lebenszeichen sucht.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 6,
};

// ═══════════════════════════════════════════ 2) ALARMIEREN
export const CE06_SIT_WAGNER_ALARMIEREN: SituationsPhase = {
  phaseId: "ce06-wagner-alarmieren",
  phase: "alarmieren",
  titel: "Hilfe holen — aber richtig",
  titelB1: "Hilfe holen",
  kontext:
    "Du kniest bei Herrn Wagner. Am Ende des Flurs kommt gerade ein Zivi mit einem Wäschewagen um die Ecke, aus Zimmer 5 tritt eine Pflegeschülerin. Der Defibrillator hängt 30 Meter entfernt am Stützpunkt. Sekunden zählen.",
  kontextB1:
    "Du kniest bei Herrn Wagner. Am Flurende steht ein Zivi mit Wäschewagen, aus Zimmer 5 kommt eine Schülerin. Der Defibrillator hängt 30 Meter weg. Jede Sekunde zählt.",
  kernSteps: [
    {
      // Wissens-Tab A (Redesign, curriculum-first): kommt VOR ala-01 — der Schüler
      // versteht die Rettungskette + phone-first + Einzelhelfer-Prinzip, BEVOR er es
      // in ala-01 anwendet. Literatur-belegt (F-04/F-05/F-11, Pflege heute Kap. 14.3.1)
      // + paraphrasiert (Abstandstest 0). Kein Antwort-Step → verschiebt das Gate nicht.
      stepId: "ce06-wagner-ala-00b-rettungskette",
      phase: 2,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // LE1-Primär-Schwerpunkt (Rahmenlehrplan), Kernhandlung — nicht geraten.
      kompetenzbereich: "I.4",
      quellen: ["ERC-Leitlinien 2021"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-wagner-rettungskette",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-04", "F-05", "F-11"],
      transition: "Und wenn plötzlich zwei Leute in Rufweite sind — wer macht was?",
      contentC1: {
        title: "Die Rettungskette in der Hand",
        body: "",
        glossarBegriffe: [
          "Rettungskette",
          "Notfallteam",
          "Kammerflimmern",
          "No-Flow-Zeit",
        ],
      },
      inlineWissen: {
        bausteinRef: "reanimation-bls-rettungskette",
        themaPrimaer: "reanimation-bls",
        themenSekundaer: ["notfallassessment"],
        storyAufhaenger:
          "Herr Wagner liegt vor dir, du hast es erkannt: keine Reaktion, kein ruhiges Atmen — Stillstand. Dein eigener Puls rast. Und jetzt kommt die Frage, die über Minuten entscheidet: Was zuerst — Hilfe holen oder sofort drücken? Und darfst du ihn dafür überhaupt allein lassen?",
        storyAufhaengerB1:
          "Herr Wagner liegt vor dir. Du weißt jetzt: keine Reaktion, kein ruhiges Atmen — Stillstand. Dein eigener Puls rast. Jetzt kommt die wichtige Frage: Was zuerst — Hilfe holen oder sofort drücken? Und darfst du ihn dafür allein lassen?",
        kerntext:
          "Vier Schritte, immer in derselben Ordnung — das ist die Rettungskette (bei der Reanimation auch Überlebenskette genannt): erkennen, alarmieren, drücken, mit dem Defibrillator schocken. Glied 1 hast du hinter dir. Jetzt zählt Glied 2, und es geht allem anderen vor: Das Notfallteam muss sofort unterwegs sein — im Krankenhaus über den Reanimationsruf, draußen über die 112. Ohne diesen Anruf kommt weder das Gerät noch die erweiterte Hilfe rechtzeitig.\n\nDer erste Reflex ist oft, selbst loszurennen — zum Telefon, zum Defi. Doch bist du allein, gilt: Notruf absetzen, dann ohne Zögern die Herzdruckmassage aufnehmen und beim Patienten bleiben. Du läufst nicht weg, nur um ein Gerät zu holen. Der Grund ist die No-Flow-Zeit: Jede Sekunde ohne Drücken fließt kein Blut zum Gehirn. Ein Defibrillator dreißig Meter entfernt ist diese Pause nicht wert.\n\nBist du zu zweit, teilst du auf: Eine Person beginnt sofort mit dem Drücken, die andere ruft das Team und bringt das Gerät. Und du sprichst die Menschen einzeln und mit klarem Auftrag an — Sie rufen das Team, Sie holen den Defi —, denn ein allgemeines Hilferufen lässt oft jeden auf den anderen warten.\n\nWarum die Eile mit dem Defibrillator? Der häufigste Rhythmus, den das Herz bei einem plötzlichen Stillstand des Erwachsenen zeigt, ist das Kammerflimmern — ein wildes, ungeordnetes Zucken der Herzkammern, bei dem kein Blut mehr hinausgepumpt wird. Dagegen kommt das Drücken allein nicht an; nur der Stromstoß kann es durchbrechen. Je früher er gesetzt wird, desto größer die Chance.",
        kerntextB1:
          "Die Rettungskette hat vier Schritte, immer in dieser Reihenfolge: erkennen, alarmieren, drücken, mit dem Defibrillator schocken. (Bei der Reanimation heißt sie auch Überlebenskette.) Schritt 1 hast du geschafft. Jetzt kommt Schritt 2, und er geht vor allem anderen: Das Notfallteam muss sofort losfahren. Im Krankenhaus nutzt du den Reanimationsruf. Draußen wählst du die 112. Ohne diesen Anruf kommt die Hilfe nicht rechtzeitig.\n\nViele wollen zuerst selbst losrennen — zum Telefon oder zum Defi. Aber wenn du allein bist, gilt: Erst den Notruf machen. Dann sofort mit der Herzdruckmassage anfangen. Und beim Patienten bleiben! Du läufst nicht weg, nur um ein Gerät zu holen. Der Grund heißt No-Flow-Zeit: Jede Sekunde ohne Drücken fließt kein Blut zum Gehirn. Ein Defi 30 Meter weiter ist diese Pause nicht wert.\n\nSeid ihr zu zweit, teilt ihr auf: Eine Person drückt sofort. Die andere ruft das Team und bringt den Defi. Wichtig: Sprich die Menschen einzeln an und gib klare Aufträge — 'Sie rufen das Team!', 'Sie holen den Defi!'. Bei einem allgemeinen 'Hilfe!' wartet oft jeder auf den anderen.\n\nWarum ist der Defi so wichtig? Bei einem plötzlichen Stillstand zeigt das Herz beim Erwachsenen meistens Kammerflimmern. Das ist ein wildes, ungeordnetes Zucken der Herzkammern. Das Herz pumpt dann kein Blut mehr. Drücken allein stoppt das Flimmern nicht. Nur der Stromstoß kann es beenden. Je früher, desto besser die Chance.",
        faustregel:
          "Erst das Team rufen (lassen), dann sofort drücken — und nie den Patienten allein lassen, nur um ein Gerät zu holen.",
        faustregelB1:
          "Erst das Team rufen (lassen), dann sofort drücken. Und nie den Patienten allein lassen, nur um ein Gerät zu holen.",
        spektrum: [
          {
            patientName: "Allein bei Herrn Wagner",
            situationsId: "ls-wagner-reanimation",
            hauptfaktor: "Einzelhelfer",
            kurzbeschreibung:
              "Erst den Notruf absetzen, dann sofort drücken — und bei ihm bleiben. Kein Weglaufen zum Defi; die Kompression zählt mehr als das Gerät.",
            kurzbeschreibungB1:
              "Erst der Notruf. Dann sofort drücken. Du bleibst bei ihm. Nicht zum Defi weglaufen — das Drücken ist wichtiger als das Gerät.",
          },
          {
            patientName: "Zwei Helfer im Flur",
            hauptfaktor: "Delegation",
            kurzbeschreibung:
              "Einer drückt sofort, einer ruft das Team und bringt den Defi. Du sprichst beide einzeln und namentlich an, damit sich jeder gemeint fühlt.",
            kurzbeschreibungB1:
              "Einer drückt sofort. Einer ruft das Team und bringt den Defi. Sprich beide einzeln und direkt an — dann fühlt sich jeder gemeint.",
          },
          {
            patientName: "Kollaps direkt beobachtet",
            hauptfaktor: "früher Schock",
            kurzbeschreibung:
              "Team rufen und den Defibrillator sofort holen lassen — beim Kammerflimmern entscheidet der frühe Stromstoß über die Chance.",
            kurzbeschreibungB1:
              "Team rufen und den Defi sofort holen lassen. Beim Kammerflimmern rettet der frühe Stromstoß.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Du bist allein bei Herrn Wagner, Stillstand erkannt, der Defi hängt 30 m weg — was zuerst, und darfst du ihn dafür allein lassen?",
          rueckseite:
            "Erst Notruf/Team (Priorität, phone-first). Dann sofort Herzdruckmassage — und beim Patienten bleiben, nicht zum Defi weglaufen. Zu zweit: einer drückt, einer holt den Defi. Jede Pause ist No-Flow-Zeit.",
          vorderseiteB1:
            "Du bist allein bei Herrn Wagner. Stillstand erkannt. Der Defi hängt 30 m weg. Was zuerst? Darfst du ihn allein lassen?",
          rueckseiteB1:
            "Zuerst der Notruf (das Team hat Vorrang). Dann sofort Herzdruckmassage. Du bleibst beim Patienten — nicht zum Defi weglaufen. Zu zweit: einer drückt, einer holt den Defi. Jede Pause = No-Flow-Zeit.",
        },
      },
    },
    {
      stepId: "ce06-wagner-ala-01",
      phase: 2,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "II.1",
      quellen: ["Pflege heute 2019, Kap. 14.3.1 (Notruf/Notfallteam; Einzelhelfer bleibt)", "ERC 2021"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-wagner-alarmieren-delegieren",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-04", "F-05"],
      contentC1: {
        title: "Wer macht was — und wer bleibt?",
        body: "Du bist bei Herrn Wagner, zwei Personen sind in Rufweite, der Defi ist 30 m weg. Wie organisierst du die nächsten Sekunden am sinnvollsten?",
        glossarBegriffe: ["Notfallteam / Code Blue", "Phone first"],
      },
      contentB1: {
        title: "Wer macht was?",
        body: "Du bist bei Herrn Wagner. Zwei Personen sind in der Nähe. Der Defi ist 30 m weg. Wie organisierst du die nächsten Sekunden?",
        glossarBegriffe: ["Notfallteam (= Reanimationsteam)"],
      },
      question: {
        fragetext: "Wie handelst du in den ersten Sekunden am sinnvollsten?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ich spreche beide gezielt an: 'Sie rufen das Notfallteam — Zimmer 7, Reanimation!' und 'Sie holen den Defibrillator vom Stützpunkt!' — und bleibe selbst bei Herrn Wagner.",
            isCorrect: true,
            explanation:
              "Richtig. Nach dem Erkennen wird sofort das Notfallteam alarmiert (Priorität vor allen weiteren Maßnahmen). Weil zwei Helfer da sind, delegierst du klar und namentlich — 'irgendjemand' fühlt sich nicht angesprochen. Du selbst bleibst beim Patienten und beginnst die Herzdruckmassage.",
            explanationB1:
              "Richtig. Du rufst sofort das Notfallteam über andere Personen. Du sprichst beide klar an: 'Sie rufen das Team!', 'Sie holen den Defi!' Du selbst bleibst bei Herrn Wagner und beginnst die Herzdruckmassage.",
          },
          {
            text: "Ich laufe selbst schnell zum Stützpunkt, hole den Defi und das Notfalltelefon — das geht am schnellsten.",
            isCorrect: false,
            explanation:
              "Nein. Ein einzelner Helfer soll den Patienten nach dem Notruf NICHT alleine lassen, um einen AED zu holen, sondern sofort mit der Herzdruckmassage beginnen. Hier sind sogar zwei Helfer da — dann schickst du sie, statt selbst wegzulaufen. Jede Sekunde ohne Kompression ist 'No-Flow'-Zeit fürs Gehirn.",
            explanationB1:
              "Nein. Du darfst Herrn Wagner nicht allein lassen, um den Defi zu holen. Du hast zwei Helfer — schick sie los. Du bleibst und drückst. Jede Sekunde ohne Herzdruckmassage schadet dem Gehirn.",
          },
          {
            text: "Ich rufe laut 'Hilfe!' in den Flur und warte, bis jemand von selbst reagiert und das Team ruft.",
            isCorrect: false,
            explanation:
              "Zu unbestimmt. Ein ungerichtetes 'Hilfe!' führt oft dazu, dass sich niemand zuständig fühlt (Zuschauer-Effekt). Du musst konkrete Personen ansprechen und ihnen konkrete Aufträge geben — und parallel selbst mit der Herzdruckmassage beginnen, nicht abwarten.",
            explanationB1:
              "Zu unklar. Bei einem allgemeinen 'Hilfe!' fühlt sich oft niemand zuständig. Sprich einzelne Personen direkt an und gib klare Aufträge. Und fang selbst sofort mit der Herzdruckmassage an.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 5,
};

// ═══════════════════════════════════════════ 3) ERSTMASSNAHMEN  (Demo-Wow: Branching unter Zeitdruck)
export const CE06_SIT_WAGNER_ERSTMASSNAHMEN: SituationsPhase = {
  phaseId: "ce06-wagner-erstmassnahmen",
  phase: "erstmassnahmen",
  titel: "Herzdruckmassage und der Schock",
  titelB1: "Herzdruckmassage und der Defi",
  kontext:
    "Das Notfallteam ist alarmiert, der Defibrillator unterwegs. Herr Wagner liegt auf dem harten Flurboden — ideal für die Herzdruckmassage. Jetzt zählt jede Sekunde und jede Handbewegung.",
  kontextB1:
    "Das Notfallteam ist gerufen, der Defi kommt. Herr Wagner liegt auf dem harten Boden — gut für die Herzdruckmassage. Jetzt zählt jede Sekunde.",
  kernSteps: [
    {
      // Wissens-Tab B (Redesign, curriculum-first): kommt VOR erm-01 — der Schüler
      // versteht die Qualitäts-Kriterien + das No-Flow-Prinzip, BEVOR er die
      // Herzdruckmassage sortiert (erm-01), den Schock setzt (erm-02) und den
      // Helferwechsel plant (erm-03). Literatur-belegt (F-06/F-07/F-08, Pflege heute
      // Kap. 14.3.2) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-wagner-erm-00b-no-flow",
      phase: 3,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // LE1-Primär-Schwerpunkt (Rahmenlehrplan), Kernhandlung — nicht geraten.
      kompetenzbereich: "I.4",
      quellen: ["ERC-Leitlinien 2021"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-wagner-no-flow",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-06", "F-07", "F-08"],
      transition: "Bring die Handgriffe jetzt in die richtige Reihenfolge.",
      contentC1: {
        title: "Warum Drücken alles ist: die No-Flow-Zeit",
        body: "",
        glossarBegriffe: ["Thoraxkompression", "No-Flow-Zeit"],
      },
      inlineWissen: {
        bausteinRef: "reanimation-bls-no-flow",
        themaPrimaer: "reanimation-bls",
        themenSekundaer: ["notfallassessment"],
        storyAufhaenger:
          "Deine Handballen liegen auf Herrn Wagners Brustbein, die Arme gestreckt, du drückst. Aber einfach nur drücken und wirksam drücken sind zwei verschiedene Dinge — und dazwischen liegt seine Überlebenschance. Was macht den Unterschied?",
        storyAufhaengerB1:
          "Deine Handballen liegen auf Herrn Wagners Brustbein. Die Arme sind gestreckt. Du drückst. Aber nur drücken reicht nicht — es muss wirksam sein. Davon hängt seine Chance ab. Was macht den Unterschied?",
        kerntext:
          "Sobald sein Herz steht, übernimmst DU die Pumpe. Jede Kompression presst Blut in Richtung Gehirn — aber nur, wenn vier Dinge stimmen.\n\nTief genug: Der Brustkorb muss beim Erwachsenen fünf bis sechs Zentimeter nachgeben, sonst bewegst du zu wenig Blut. Vollständig loslassen: Nach jedem Druck nimmst du die Last ganz vom Brustkorb — erst dann füllt es sich erneut mit Blut. Die Hände bleiben dabei aufliegen, damit du den Druckpunkt nicht verlierst. Schnell genug: hundert bis hundertzwanzig Mal pro Minute, ein zügiger, gleichmäßiger Takt. Und die Unterlage muss hart sein — auf einer nachgiebigen Matratze versinkt der Betroffene nur, die Kraft verpufft. Deshalb liegt Herr Wagner richtig: auf dem harten Flurboden.\n\nDer rote Faden hinter allem heißt No-Flow-Zeit: jede Sekunde, in der du nicht drückst, steht auch der Blutfluss zum Gehirn. Genau darum ist der Takt von dreißig Kompressionen zu zwei Beatmungen so knapp gehalten, darum geht es nach einem Schock ohne Umweg sofort weiter, darum wird ein müder Helfer in Sekunden gewechselt. Nicht die perfekte einzelne Kompression rettet — sondern möglichst wenig Pause dazwischen.\n\nUnd du hörst nicht auf: weiter, bis er von allein wieder atmet, das Team übernimmt oder eine Ärztin es beendet.",
        kerntextB1:
          "Sein Herz steht. Jetzt bist DU die Pumpe. Jeder Druck presst Blut zum Gehirn — aber nur, wenn vier Dinge stimmen.\n\nErstens, tief genug: Drücke den Brustkorb beim Erwachsenen fünf bis sechs Zentimeter tief ein. Sonst bewegst du zu wenig Blut. Zweitens, ganz loslassen: Nach jedem Druck entlastest du den Brustkorb komplett. Nur dann kann neues Blut ins Herz strömen. Deine Hände bleiben dabei liegen — so verlierst du den Druckpunkt nicht. Drittens, schnell genug: hundert bis hundertzwanzig Mal pro Minute, in einem gleichmäßigen Takt. Viertens: Die Unterlage muss hart sein. In einer weichen Matratze versinkt der Patient nur, und die Kraft geht verloren. Herr Wagner liegt darum richtig — auf dem harten Boden.\n\nDas wichtigste Prinzip heißt No-Flow-Zeit: Jede Sekunde ohne Drücken fließt kein Blut zum Gehirn. Darum ist der Takt von 30 Drücken zu 2 Beatmungen so knapp. Darum drückst du nach einem Schock sofort weiter. Darum wechselt ein müder Helfer in Sekunden. Nicht der perfekte einzelne Druck rettet — sondern möglichst wenig Pause.\n\nUnd du hörst nicht auf. Du drückst weiter — bis er von allein atmet, das Team übernimmt oder eine Ärztin die Reanimation beendet.",
        faustregel:
          "Drücke tief, drücke schnell, lass vollständig los — und hör so gut wie nie auf. Jede Pause ist No-Flow-Zeit.",
        faustregelB1:
          "Drücke tief, drücke schnell, lass ganz los — und höre fast nie auf. Jede Pause ist No-Flow-Zeit.",
        spektrum: [
          {
            patientName: "Zu flach, zu langsam",
            hauptfaktor: "Ermüdung",
            kurzbeschreibung:
              "Nach etwa zwei Minuten werden die Kompressionen flacher und langsamer — dann wird gewechselt, bevor die Qualität kippt.",
            kurzbeschreibungB1:
              "Nach etwa zwei Minuten wird dein Drücken flacher und langsamer. Dann wechselt ihr — bevor die Qualität schlecht wird.",
          },
          {
            patientName: "Pause fürs Pulstasten",
            hauptfaktor: "No-Flow-Falle",
            kurzbeschreibung:
              "Jede eingeschobene Kontrolle unterbricht den Blutfluss. Darum nach dem Schock ohne Pulscheck sofort weiterdrücken.",
            kurzbeschreibungB1:
              "Jede extra Kontrolle stoppt den Blutfluss. Darum nach dem Schock sofort weiterdrücken — ohne den Puls zu prüfen.",
          },
          {
            patientName: "Patient im Bett",
            hauptfaktor: "weiche Unterlage",
            kurzbeschreibung:
              "In der Matratze verpufft der Druck. Erst harte Unterlage schaffen (Reanimationsbrett oder Boden), dann drücken.",
            kurzbeschreibungB1:
              "In der Matratze geht der Druck verloren. Erst eine harte Unterlage schaffen (Brett oder Boden), dann drücken.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Was macht die Herzdruckmassage wirksam — und was ruiniert sie?",
          rueckseite:
            "Wirksam: 5–6 cm tief, 100–120/min, vollständig entlasten, harte Unterlage. Ruiniert: Pausen (No-Flow-Zeit). Darum 30:2 knapp, nach Schock sofort weiter, bei Ermüdung wechseln.",
          vorderseiteB1:
            "Was macht die Herzdruckmassage wirksam? Und was macht sie unwirksam?",
          rueckseiteB1:
            "Wirksam: 5–6 cm tief, 100–120 pro Minute, ganz loslassen, harte Unterlage. Unwirksam machen sie: Pausen (No-Flow-Zeit). Darum: 30:2, nach dem Schock sofort weiter, bei Müdigkeit wechseln.",
        },
      },
    },
    {
      stepId: "ce06-wagner-erm-01",
      phase: 3,
      stepType: "sorting",
      bloomLevel: 3,
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.3.2 (Herzdruckmassage: Druckpunkt, Tiefe, Frequenz, 30:2)", "ERC 2021"],
      track: "basis",
      modus: "sortierstation",
      lernziel: "ce06-wagner-hdm-technik",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-06", "F-07", "F-08"],
      contentC1: {
        title: "Herzdruckmassage — die richtige Reihenfolge",
        body: "Bring die Schritte für den Start der Herzdruckmassage beim Erwachsenen in die richtige Reihenfolge. Die Technik ist nicht beliebig — sie entscheidet über die Durchblutung des Gehirns.",
        glossarBegriffe: ["Druckpunkt", "Thoraxkompression", "30:2"],
      },
      contentB1: {
        title: "Herzdruckmassage — die Reihenfolge",
        body: "Bring die Schritte für den Start der Herzdruckmassage in die richtige Reihenfolge.",
        glossarBegriffe: ["Druckpunkt (= wo du drückst)", "30:2 (= 30-mal drücken, 2-mal beatmen)"],
      },
      question: {
        fragetext: "Sortiere die Schritte für den Start der Herzdruckmassage beim Erwachsenen.",
        sortItems: [
          "Druckpunkt aufsuchen: Mitte des Brustkorbs (untere Hälfte des Brustbeins)",
          "Einen Handballen auf den Druckpunkt legen, den zweiten Handballen auf den Handrücken der unteren Hand, Finger verschränkt",
          "Mit gestreckten Armen senkrecht 5–6 cm tief eindrücken",
          "Nach jeder Kompression den Brustkorb vollständig entlasten (Hände bleiben aufliegen)",
          "Im Takt von 100–120 Kompressionen pro Minute drücken",
          "Nach 30 Kompressionen 2 Beatmungen geben (Verhältnis 30:2), dann sofort weiter",
        ],
      },
    },
    {
      stepId: "ce06-wagner-erm-02",
      phase: 3,
      stepType: "branching",
      bloomLevel: 5,
      kompetenzbereich: "I.4",
      quellen: [
        "Pflege heute 2019, Kap. 14.3 (AED, Defibrillation, Sicherheit)",
        "Genzwürker/Hinkelbein 2019 (Kammerflimmern, Defibrillation)",
        "ERC 2021",
      ],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-wagner-aed-schock",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-11", "F-05", "F-14"],
      contentC1: {
        title: "Der AED sagt: „Schock empfohlen.“",
        body: "Die Schülerin bringt den AED. Du klebst die Elektroden auf (rechts unterhalb des Schlüsselbeins, links seitlich unter der Achsel). Der AED meldet: \"Patienten nicht berühren, Analyse läuft.\" — kurz nehmen alle die Hände weg. Dann sagt er mit ruhiger Stimme: \"Schock empfohlen. Laden.\" Eine Kollegin hat schon wieder die Hände auf dem Brustkorb. Was tust du in diesem Moment?",
        glossarBegriffe: ["AED (automatisierter externer Defibrillator)", "Kammerflimmern", "defibrillierbarer Rhythmus"],
      },
      contentB1: {
        title: "Der AED sagt: „Schock empfohlen.“",
        body: "Die Schülerin bringt den AED. Du klebst die Elektroden auf. Der AED sagt: \"Patienten nicht berühren, Analyse läuft.\" — alle nehmen kurz die Hände weg. Dann: \"Schock empfohlen. Laden.\" Eine Kollegin legt ihre Hände schon wieder auf seinen Brustkorb. Was tust du?",
        glossarBegriffe: ["AED (= Defi, der selbst analysiert)", "Kammerflimmern (= gefährliche Herzrhythmusstörung)"],
      },
      question: {
        fragetext: "Der AED empfiehlt den Schock — was tust du?",
        branchingOptions: [
          {
            text: "Ich sage laut und deutlich 'Alle weg vom Patienten!', prüfe mit einem Blick, dass niemand ihn berührt, löse dann den Schock aus — und lasse sofort danach die Herzdruckmassage weiterlaufen.",
            isCorrect: true,
            feedback:
              "Genau richtig — und in der richtigen Reihenfolge. Kammerflimmern ist ein defibrillierbarer Rhythmus, der Schock ist die kausale Therapie. Vor jeder Schockabgabe MUSS sichergestellt sein, dass niemand den Patienten berührt (Eigenschutz und korrekte Energieabgabe) — deshalb die klare Ansage 'Alle weg!' plus Sichtkontrolle. Und weil jede Pause 'No-Flow'-Zeit ist, wird unmittelbar nach dem Schock ohne Puls-Check sofort weiter komprimiert. Vorbildliche Team-Führung.",
            feedbackB1:
              "Genau richtig. Kammerflimmern braucht den Schock. Vor dem Schock musst du sicher sein, dass niemand den Patienten berührt. Das ist Eigenschutz — du schützt dich und andere vor dem Stromstoß. Darum sagst du laut 'Alle weg!' und schaust hin. Direkt nach dem Schock geht die Herzdruckmassage sofort weiter. Sehr gut geführt.",
          },
          {
            text: "Ich drücke sofort den Schock-Knopf, damit keine Zeit verloren geht — die Kollegin zieht ihre Hände schon rechtzeitig weg.",
            isCorrect: false,
            feedback:
              "Der Gedanke, keine Zeit zu verlieren, ist richtig — aber die Ausführung ist gefährlich. Wenn beim Auslösen des Schocks noch jemand den Patienten berührt, kann diese Person selbst einen Stromschlag bekommen, und die Energieabgabe wird gestört. Deshalb gilt ausnahmslos: erst die klare Ansage 'Alle weg vom Patienten!' und ein Blick zur Kontrolle, DANN der Schock. Diese zwei Sekunden sind Pflicht, keine Verzögerung.",
            feedbackB1:
              "Du willst keine Zeit verlieren — das ist gut gedacht. Aber so ist es gefährlich: Wenn beim Schock noch jemand den Patienten berührt, bekommt diese Person einen Stromschlag. Darum immer zuerst laut 'Alle weg!' sagen und hinschauen, dann erst den Schock. Diese zwei Sekunden sind Pflicht.",
          },
          {
            text: "Ich ignoriere die Schock-Empfehlung und lasse einfach weiter Herzdruckmassage machen — drücken ist am wichtigsten.",
            isCorrect: false,
            feedback:
              "Herzdruckmassage IST enorm wichtig — aber sie ersetzt bei Kammerflimmern nicht den Schock. Der AED analysiert den Rhythmus und empfiehlt den Schock nur, wenn er wirklich indiziert ist (defibrillierbarer Rhythmus). Ohne Defibrillation bleibt das Kammerflimmern bestehen. Richtig ist: 'Alle weg!', Schock auslösen, sofort weiter mit der Herzdruckmassage — beides zusammen, nicht das eine statt des anderen.",
            feedbackB1:
              "Herzdruckmassage ist sehr wichtig — aber sie ersetzt den Schock nicht. Bei Kammerflimmern hilft nur der Schock, damit das Herz wieder ordentlich schlägt. Richtig ist: 'Alle weg!', Schock, dann sofort weiter drücken. Beides zusammen.",
          },
          {
            text: "Ich taste erst noch einmal den Puls, um zu prüfen, ob der Schock wirklich nötig ist.",
            isCorrect: false,
            feedback:
              "Nein — das ist doppelt problematisch. Erstens hat der AED den Rhythmus bereits analysiert und den Schock empfohlen; deine Pulskontrolle ändert daran nichts und wird auch nicht empfohlen. Zweitens unterbrichst du dafür die Herzdruckmassage und verzögerst den Schock — beides kostet dem Gehirn wertvolle Zeit. Vertraue der Analyse: 'Alle weg!', Schock, sofort weiter drücken.",
            feedbackB1:
              "Nein. Der AED hat den Rhythmus schon geprüft und den Schock empfohlen. Puls tasten hilft nicht und kostet Zeit. Vertraue dem AED: 'Alle weg!', Schock, sofort weiter drücken.",
          },
        ],
      },
    },
    {
      stepId: "ce06-wagner-erm-03",
      phase: 3,
      stepType: "branching",
      bloomLevel: 4,
      kompetenzbereich: "III.2",
      quellen: ["Pflege heute 2019, Kap. 14.3.2 (Kompressionsqualität, Helferwechsel)", "ERC 2021 (CRM/Team)"],
      track: "basis",
      modus: "praxis-sim",
      lernziel: "ce06-wagner-helferwechsel",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      // Gegroundet auf die Kompressions-QUALITÄT (Tiefe/Entlastung F-06, Frequenz F-07) —
      // genau die leidet bei Ermüdung. Das ~2-Min-Wechselintervall ist ERC-Organisationsempfehlung
      // (quellen), nicht als Verbatim-Normwert im Korpus belegt → nicht als Kernfakt behauptet.
      kernfaktId: ["F-06", "F-07"],
      contentC1: {
        title: "Deine Kraft lässt nach",
        body: "Du drückst jetzt seit fast zwei Minuten. Deine Kompressionen werden spürbar flacher, dein Takt langsamer. Eine ausgeruhte Kollegin kniet bereit auf der anderen Seite. Wie organisierst du den Wechsel, ohne die Herzdruckmassage lange zu unterbrechen?",
        glossarBegriffe: ["Helferwechsel", "Closed-Loop-Kommunikation"],
      },
      contentB1: {
        title: "Deine Kraft lässt nach",
        body: "Du drückst seit fast zwei Minuten. Deine Herzdruckmassage wird flacher und langsamer. Eine ausgeruhte Kollegin ist bereit. Wie wechselt ihr, ohne lange zu unterbrechen?",
        glossarBegriffe: ["Helferwechsel (= die Person, die drückt, wechseln)"],
      },
      question: {
        fragetext: "Deine Kraft lässt nach — wie wechselst du?",
        branchingOptions: [
          {
            text: "Ich kündige den Wechsel klar an ('Wechsel nach den nächsten 30 — du übernimmst rechts'), wir tauschen zügig in der Beatmungspause, die Kollegin drückt sofort in Tiefe und Takt weiter.",
            isCorrect: true,
            feedback:
              "Richtig. Die Herzdruckmassage ermüdet schnell — mit der Zeit werden Kompressionen zu flach und zu langsam, deshalb wird regelmäßig (etwa alle 2 Minuten) gewechselt. Entscheidend ist, den Wechsel anzukündigen (Closed-Loop) und ihn so zu timen, dass die Unterbrechung minimal bleibt. Dass die neue Person sofort wieder 5–6 cm tief und mit 100–120/min drückt, hält die Qualität hoch.",
            feedbackB1:
              "Richtig. Herzdruckmassage macht schnell müde — dann wird sie zu flach und zu langsam. Darum wechselt ihr etwa alle 2 Minuten. Sag den Wechsel klar an und tausche schnell, damit die Pause kurz bleibt. Die Kollegin drückt sofort wieder tief und im Takt weiter.",
          },
          {
            text: "Ich drücke weiter, bis ich wirklich nicht mehr kann — ein Wechsel unterbricht ja die Herzdruckmassage.",
            isCorrect: false,
            feedback:
              "Gut gedacht, dass du Unterbrechungen vermeiden willst — aber der Denkfehler ist, ZU lange durchzuhalten. Ermüdete Kompressionen werden zu flach und zu langsam und pumpen kaum noch Blut; das schadet mehr als ein kurzer, gut geplanter Wechsel. Deshalb regelmäßig (ca. alle 2 Min) wechseln und die Unterbrechung durch klare Ansage kurz halten.",
            feedbackB1:
              "Du willst Unterbrechungen vermeiden — das ist gut. Aber zu lange durchhalten ist falsch: Müde Kompressionen sind zu flach und pumpen kaum Blut. Besser regelmäßig wechseln (ca. alle 2 Min) und den Wechsel kurz halten.",
          },
          {
            text: "Ich höre kurz ganz auf, wir sortieren in Ruhe, wer jetzt was macht, dann fängt die Kollegin neu an.",
            isCorrect: false,
            feedback:
              "Nein — eine längere Pause ist genau das, was vermieden werden muss. Jede Unterbrechung der Herzdruckmassage ist 'No-Flow'-Zeit, in der das Gehirn kein Blut bekommt. Die Rollen klärt ihr sprechend WÄHREND die Kompressionen weiterlaufen; der eigentliche Handwechsel dauert nur Sekunden und wird angekündigt.",
            feedbackB1:
              "Nein. Eine lange Pause ist gefährlich — dann bekommt das Gehirn kein Blut. Ihr klärt die Rollen, während weiter gedrückt wird. Der Handwechsel selbst dauert nur Sekunden.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 12,
};

// ═══════════════════════════════════════════ 4) ÜBERGEBEN
export const CE06_SIT_WAGNER_UEBERGEBEN: SituationsPhase = {
  phaseId: "ce06-wagner-uebergeben",
  phase: "uebergeben",
  titel: "Das Notfallteam übernimmt",
  titelB1: "Das Notfallteam kommt",
  kontext:
    "Das Reanimationsteam trifft ein: eine Ärztin, eine Intensivpflegekraft. Sie übernehmen die Reanimation, brauchen aber in Sekunden einen Überblick. Die Ärztin sieht dich an: 'Was haben wir?'",
  kontextB1:
    "Das Reanimationsteam kommt: eine Ärztin und eine Intensivpflegekraft. Sie übernehmen. Die Ärztin fragt dich: 'Was haben wir?'",
  kernSteps: [
    {
      stepId: "ce06-wagner-ueb-01",
      phase: 4,
      stepType: "mc",
      bloomLevel: 4,
      // SBAR = strukturierte Kommunikation → II.1 (Set-KB). kernfaktId "F-07" löst über
      // themaPrimaer "notfallassessment" auf notfallassessment/F-07 (SBAR, Leonard 2004) auf
      // — NICHT reanimation-bls/F-07 (Kompressionsfrequenz). Korrekt gegroundet.
      kompetenzbereich: "II.1",
      quellen: ["Leonard et al. 2004 (SBAR)", "Pflege heute 2019, Kap. 14 (Übergabe im Notfall)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-wagner-sbar-uebergabe",
      tag: "pflege",
      themaPrimaer: "notfallassessment",
      kernfaktId: ["F-07"],
      contentC1: {
        title: "Übergabe in 20 Sekunden — SBAR",
        body: "Die Ärztin braucht sofort das Wichtigste, strukturiert. Welche Übergabe folgt dem SBAR-Schema (Situation – Background – Assessment – Recommendation) am besten?",
        glossarBegriffe: ["SBAR", "strukturierte Übergabe"],
      },
      contentB1: {
        title: "Übergabe mit SBAR",
        body: "Die Ärztin braucht sofort das Wichtigste. Welche Übergabe folgt dem SBAR-Schema am besten?",
        glossarBegriffe: ["SBAR (= Situation, Background, Assessment, Recommendation)"],
      },
      question: {
        fragetext: "Welche Übergabe ist nach SBAR strukturiert und vollständig?",
        mcVariant: "standard",
        optionen: [
          {
            text: "\"Herr Wagner, 67, kollabiert im Flur um 08:15 (S). Aufnahme wegen instabiler Angina, zwei Infarkte in der Vorgeschichte, Vorhofflimmern unter Apixaban (B). Keine Reaktion, keine normale Atmung, Herzdruckmassage seit 08:16, ein Schock um 08:19 (A). Bitte i.v.-Zugang und Übernahme der Reanimationsleitung (R).\"",
            isCorrect: true,
            explanation:
              "Richtig. Das ist SBAR in Reinform: Situation (wer, was, wann), Background (relevante Vorgeschichte, hier besonders die Antikoagulation), Assessment (aktueller Zustand + bereits Getanes mit Zeiten), Recommendation (was jetzt gebraucht wird). So bekommt das Team in Sekunden ein vollständiges, priorisiertes Bild.",
            explanationB1:
              "Richtig. Das ist SBAR: Situation (wer/was/wann), Background (Vorgeschichte), Assessment (Zustand jetzt + was schon getan wurde), Recommendation (was jetzt gebraucht wird). Das Team versteht in Sekunden alles Wichtige.",
          },
          {
            text: "\"Also, das ist Herr Wagner, ein ganz netter Mann, ehemaliger Fernfahrer, der wollte eigentlich nur zur Toilette und dann ist das passiert, ich war total erschrocken…\"",
            isCorrect: false,
            explanation:
              "Im Notfall unbrauchbar. Die Erzählung enthält viel Beiläufiges (Biografie, eigene Gefühle) und nicht das medizinisch Entscheidende. SBAR zwingt zur Priorisierung: erst die Situation, dann die relevante Vorgeschichte, der aktuelle Befund mit Zeiten und die konkrete Bitte. Persönliches gehört später ins Debriefing, nicht in die Sekunden-Übergabe.",
            explanationB1:
              "Im Notfall unbrauchbar. Das sind zu viele Nebensachen (Biografie, eigene Gefühle) und nicht das Wichtige. SBAR bringt Ordnung: Situation, Vorgeschichte, Zustand mit Zeiten, Bitte. Persönliches kommt später beim Debriefing.",
          },
          {
            text: "\"Kammerflimmern, ein Schock, machen Sie weiter.\" — kurz und knapp, mehr braucht das Team nicht.",
            isCorrect: false,
            explanation:
              "Zu knapp. Der aktuelle Rhythmus und der Schock sind Teil des Assessments, aber es fehlen Situation (wer/wann), der entscheidende Background (Apixaban! Infarkt-Anamnese) und eine klare Recommendation. Gerade die Antikoagulation ist für die weiteren Entscheidungen wichtig. SBAR ist knapp, aber vollständig.",
            explanationB1:
              "Zu kurz. Es fehlen: wer und wann, die wichtige Vorgeschichte (Apixaban!) und eine klare Bitte. SBAR ist kurz, aber vollständig.",
          },
        ],
      },
    },
    {
      // Wissens-Tab (Redesign): das ALS-Prinzip — leicht, auf Pflege-Assist-Niveau.
      // Deckt W1 (Prinzipien des Advanced Life Support). Baut auf No-Flow-Tab auf:
      // ALS ersetzt BLS nicht. Literatur-belegt (F-06/F-10/F-11/F-12/F-13, Pflege heute
      // Kap. 14.3.2) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      stepId: "ce06-wagner-ueb-01b-als",
      phase: 4,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // I.4 (Akut-Handlungswissen, LE1-Primär) — die pflegerische Rolle im ALS.
      kompetenzbereich: "I.4",
      quellen: ["Pflege heute 2019, Kap. 14.3.2 (ALS, Notfallmedikamente)", "ERC-Leitlinien 2021"],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-wagner-als-prinzip",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-12", "F-10", "F-11", "F-13"],
      transition: "Minuten später hat das Team einen Kreislauf zurück.",
      contentC1: {
        title: "Das Team übernimmt — was jetzt?",
        body: "",
        glossarBegriffe: ["ALS (Advanced Life Support)", "Adrenalin"],
      },
      inlineWissen: {
        bausteinRef: "reanimation-bls-als-prinzip",
        themaPrimaer: "reanimation-bls",
        themenSekundaer: ["notfallassessment"],
        storyAufhaenger:
          "Die Ärztin und die Intensivpflegekraft sind da, sie übernehmen. Du trittst einen halben Schritt zurück — und fragst dich vielleicht: Was machen die jetzt anders als du? Und war dein Teil damit unwichtig?",
        storyAufhaengerB1:
          "Die Ärztin und die Intensivpflegekraft sind da. Sie übernehmen. Du trittst einen Schritt zurück. Vielleicht denkst du: Was machen die jetzt anders als ich? War mein Teil unwichtig?",
        kerntext:
          "Kaum etwas ist anders — und das ist die wichtigste Erkenntnis. Der erweiterte Ablauf, den das Team jetzt fährt (ALS), ersetzt deine Basismaßnahmen nicht, er baut auf ihnen auf. Die hochwertige Herzdruckmassage läuft ununterbrochen weiter; sie bleibt das Fundament.\n\nWas dazukommt, sind ärztliche Schritte: Die Ärztin legt einen Zugang (in eine Vene, notfalls in den Knochen), um Medikamente geben zu können — allen voran Adrenalin, das etwa alle drei bis fünf Minuten wiederholt wird. Bei einem defibrillierbaren Rhythmus wird weiter geschockt. Und das Team sucht parallel nach einer behebbaren Ursache — zum Beispiel einer Unterkühlung oder einer Vergiftung —, denn ohne sie bleibt die Wiederbelebung oft erfolglos.\n\nDeine Rolle endet damit nicht, sie verschiebt sich: Du drückst weiter oder wechselst dich ab, hältst die Qualität hoch, reichst Material, ziehst Medikamente auf, dokumentierst die Zeiten. Das Medikament allein rettet niemanden — es wirkt nur, wenn dein Drücken das Blut überhaupt dorthin bringt. Dein Teil war und bleibt zentral.",
        kerntextB1:
          "Die wichtigste Antwort: Fast nichts ist anders. Das Team macht jetzt die erweiterten Maßnahmen (ALS = Advanced Life Support). Aber ALS ersetzt deine Basis-Maßnahmen nicht. Es baut auf ihnen auf. Die gute Herzdruckmassage läuft ohne Pause weiter. Sie bleibt das Fundament.\n\nNeu sind die ärztlichen Schritte: Die Ärztin legt einen Zugang — in eine Vene, im Notfall in den Knochen. Über den Zugang gibt sie Medikamente. Das wichtigste Medikament heißt Adrenalin. Es wird etwa alle drei bis fünf Minuten wiederholt. Bei Kammerflimmern wird weiter geschockt. Und das Team sucht eine Ursache, die man beheben kann — zum Beispiel eine Unterkühlung oder eine Vergiftung. Ohne das bleibt die Wiederbelebung oft ohne Erfolg.\n\nDeine Rolle endet nicht. Sie verändert sich: Du drückst weiter oder wechselst dich ab. Du reichst Material. Du ziehst Medikamente auf. Du schreibst die Zeiten auf. Merke dir: Das Medikament allein rettet niemanden. Es wirkt nur, wenn dein Drücken das Blut dorthin bringt. Dein Teil bleibt zentral.",
        faustregel:
          "ALS ersetzt BLS nicht — es baut darauf auf. Gute Herzdruckmassage bleibt das Fundament; Medikamente wirken nur, wenn das Blut fließt.",
        faustregelB1:
          "ALS ersetzt BLS nicht — es baut darauf auf. Gute Herzdruckmassage bleibt das Fundament. Medikamente wirken nur, wenn das Blut fließt.",
        spektrum: [
          {
            patientName: "Defibrillierbarer Rhythmus",
            hauptfaktor: "Schock + Adrenalin",
            kurzbeschreibung:
              "Kammerflimmern → weiter schocken, Adrenalin alle drei bis fünf Minuten. Die Herzdruckmassage läuft zwischen allem durch.",
            kurzbeschreibungB1:
              "Kammerflimmern → weiter schocken. Adrenalin alle drei bis fünf Minuten. Die Herzdruckmassage läuft die ganze Zeit weiter.",
          },
          {
            patientName: "Unterkühlung als Ursache",
            hauptfaktor: "reversible Ursache",
            kurzbeschreibung:
              "Erst die Ursache behandeln (aufwärmen), sonst bleibt die Reanimation erfolglos. Bei Unterkühlung wird länger reanimiert.",
            kurzbeschreibungB1:
              "Erst die Ursache behandeln: aufwärmen. Sonst bleibt die Reanimation ohne Erfolg. Bei Unterkühlung reanimiert man länger.",
          },
          {
            patientName: "Deine Rolle als Schülerin",
            hauptfaktor: "assistieren",
            kurzbeschreibung:
              "Weiterdrücken oder abwechseln, Material reichen, Medikamente aufziehen, Zeiten dokumentieren — das Fundament hältst du.",
            kurzbeschreibungB1:
              "Weiterdrücken oder abwechseln. Material reichen. Medikamente aufziehen. Zeiten aufschreiben. Du hältst das Fundament.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Das Team übernimmt (ALS) — was ändert sich, und was bleibt dein Teil?",
          rueckseite:
            "ALS ersetzt BLS nicht, es baut darauf auf: gute Herzdruckmassage läuft weiter (Fundament). Arzt legt Zugang + gibt Adrenalin (alle 3–5 Min), schockt defibrillierbare Rhythmen, sucht reversible Ursachen. Du assistierst: drücken, Material, Medikamente aufziehen, Zeiten dokumentieren.",
          vorderseiteB1:
            "Das Team übernimmt (ALS). Was ändert sich? Was bleibt dein Teil?",
          rueckseiteB1:
            "ALS ersetzt BLS nicht. Die gute Herzdruckmassage läuft weiter — sie ist das Fundament. Der Arzt legt einen Zugang, gibt Adrenalin (alle 3–5 Min), schockt weiter, sucht die Ursache. Du hilfst: drücken, Material reichen, Medikamente aufziehen, Zeiten aufschreiben.",
        },
      },
    },
    {
      // Anwendung zum ALS-Tab (Variante D: jeder Tab braucht eine Anwendung).
      stepId: "ce06-wagner-ueb-02-als-rolle",
      phase: 4,
      stepType: "mc",
      bloomLevel: 3,
      kompetenzbereich: "III.2",
      quellen: ["Pflege heute 2019, Kap. 14.3.2 (ALS, Aufgabenteilung Team)", "ERC 2021 (CRM/Team)"],
      track: "basis",
      modus: "checkpoint",
      lernziel: "ce06-wagner-als-rolle",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      kernfaktId: ["F-12", "F-10"],
      contentC1: {
        title: "Deine Rolle im ALS-Team",
        body: "Das Team fährt jetzt den erweiterten Ablauf. Was ist in diesem Moment deine wichtigste Aufgabe als Pflegeschülerin?",
        glossarBegriffe: ["ALS (Advanced Life Support)"],
      },
      contentB1: {
        title: "Deine Rolle im Team",
        body: "Das Team macht jetzt die erweiterten Maßnahmen. Was ist jetzt deine wichtigste Aufgabe?",
      },
      question: {
        fragetext: "Was ist während des ALS deine Kernaufgabe?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Die Herzdruckmassage hochwertig weiterführen bzw. mich abwechseln, Material reichen, Medikamente nach Anordnung aufziehen und die Zeiten dokumentieren.",
            isCorrect: true,
            explanation:
              "Richtig. ALS ersetzt die Basismaßnahmen nicht — es baut auf ihnen auf. Die durchgehende, hochwertige Herzdruckmassage bleibt das Fundament, und genau die sicherst du. Dazu assistierst du dem Team: Material reichen, Medikamente nach Anordnung aufziehen, Zeiten dokumentieren. So greifen Pflege und ärztliches Team ineinander.",
            explanationB1:
              "Richtig. Die gute Herzdruckmassage bleibt das Wichtigste — die machst du weiter oder wechselst dich ab. Außerdem hilfst du dem Team: Material reichen, Medikamente aufziehen, Zeiten aufschreiben.",
          },
          {
            text: "Zur Seite treten und dem Ärzteteam das Feld überlassen — ALS ist ärztliche Sache.",
            isCorrect: false,
            explanation:
              "Nein. Medikamente und Atemwegssicherung sind ärztliche Aufgaben — aber die Herzdruckmassage läuft ununterbrochen weiter, und genau die ist Pflegeaufgabe. Trittst du zurück, entsteht eine gefährliche Pause (No-Flow-Zeit). Das Team braucht dich als aktiven Teil, nicht als Zuschauerin.",
            explanationB1:
              "Nein. Die Herzdruckmassage muss ohne Pause weiterlaufen — das ist deine Aufgabe. Wenn du zurücktrittst, entsteht eine gefährliche Pause. Das Team braucht dich.",
          },
          {
            text: "Selbst einen Zugang legen, Adrenalin aufziehen und eigenständig spritzen, um dem Arzt Zeit zu sparen.",
            isCorrect: false,
            explanation:
              "Nein. Das Problem ist das Eigenmächtige: Ein Medikament wie Adrenalin anzuordnen und ohne ärztliche Anordnung zu spritzen ist nicht deine Entscheidung. Du ziehst nach Anordnung auf und reichst an. (Einen venösen Zugang zu legen kann durchaus an dich delegiert sein — die eigenmächtige Medikamentengabe aber nicht.) Deine sichere Zone bleibt die hochwertige Herzdruckmassage und die Assistenz.",
            explanationB1:
              "Nein. Zugang legen und Adrenalin geben ist Aufgabe des Arztes. Du ziehst Medikamente nach Anordnung auf und reichst sie an, aber spritzt sie nicht selbst. Deine Aufgabe ist die Herzdruckmassage und das Assistieren.",
          },
        ],
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 8,
};

// ═══════════════════════════════════════════ 5) REFLEKTIEREN
export const CE06_SIT_WAGNER_REFLEKTIEREN: SituationsPhase = {
  phaseId: "ce06-wagner-reflektieren",
  phase: "reflektieren",
  titel: "Danach",
  titelB1: "Danach",
  kontext:
    "Das Team hat Herrn Wagner mit wiederkehrendem Kreislauf auf die Intensivstation verlegt. Auf dem Flur ist es plötzlich still. Die Pflegeschülerin, die den Defi geholt hat, steht an die Wand gelehnt und beginnt zu weinen — es war ihre erste Reanimation.",
  kontextB1:
    "Das Team hat Herrn Wagner auf die Intensivstation gebracht. Sein Kreislauf ist zurück. Auf dem Flur ist es still. Die Schülerin, die den Defi geholt hat, weint — es war ihre erste Reanimation.",
  kernSteps: [
    {
      // Wissens-Tab (Redesign): der ethisch-rechtliche Rahmen — Zoom-out von Wagners
      // Fall zur Regel. Deckt W1 (rechtl./ethische Aspekte + KPR-Indikation).
      // Literatur-belegt (Thema kpr-indikation-recht-ethik F-01..F-05, Pflege heute
      // Kap. 9/14.3.2/48.2.6) + paraphrasiert (Abstandstest 0). Kein Antwort-Step.
      // CROSS-CE-WIEDERBEGEGNUNG (siehe specs/CROSS-CE-KONZEPTREGISTER.md, Konzept
      // „Ethik/Recht/Patientenverfügung"): Heimat CE-01 → hier CE-06 (KPR-Indikation)
      // → CE-08 (Therapieziel/Lebensende). CE-08-Chat setzt später den Rück-Link
      // (wiederbegegnung), sobald die CE-08-Situation im neuen Stil existiert.
      stepId: "ce06-wagner-ref-00b-kpr-recht",
      phase: 5,
      stepType: "inlineWissen",
      bloomLevel: 2,
      // V.2 (eigenes Handeln auf rechtlich-ethischer Grundlage begründen) — ein
      // LE1-Set-Schwerpunkt. Dieser Tab lehrt genuin Recht/Ethik, NICHT die
      // Akuthandlung (I.4), darum V.2 statt Primär. Marker = tatsächlich trainierter KB.
      kompetenzbereich: "V.2",
      quellen: [
        "§ 323c StGB (unterlassene Hilfeleistung)",
        "§ 221 StGB (Aussetzung)",
        "§ 1827 BGB (Patientenverfügung)",
        "ERC-Leitlinien 2021",
      ],
      track: "basis",
      modus: "entdecker",
      lernziel: "ce06-wagner-kpr-recht",
      tag: "pflege",
      themaPrimaer: "kpr-indikation-recht-ethik",
      kernfaktId: ["F-01", "F-02", "F-03", "F-04", "F-05"],
      transition: "Nimm diese Regel gleich mit in einen anderen Fall.",
      contentC1: {
        title: "Wann reanimieren — und wann nicht?",
        body: "",
        glossarBegriffe: ["Patientenverfügung", "unterlassene Hilfeleistung"],
      },
      inlineWissen: {
        bausteinRef: "kpr-indikation-recht-ethik",
        themaPrimaer: "kpr-indikation-recht-ethik",
        themenSekundaer: ["reanimation-bls"],
        storyAufhaenger:
          "Herr Wagner ist versorgt, sein Kreislauf zurück. Vielleicht bleibt eine Frage: Musstest du das eigentlich tun — einfach so bei einem fremden Menschen? Und gäbe es einen Moment, in dem du gerade NICHT drückst?",
        storyAufhaengerB1:
          "Herr Wagner ist versorgt. Sein Kreislauf ist zurück. Vielleicht fragst du dich jetzt: Musste ich das eigentlich tun — einfach so bei einem fremden Menschen? Und gibt es Momente, in denen man NICHT drückt?",
        kerntext:
          "Zwei Seiten, eine Entscheidung.\n\nDie erste Seite ist deine Pflicht. Bei einem Notfall muss jeder zumutbare Hilfe leisten — wer wegsieht, macht sich strafbar (unterlassene Hilfeleistung). Für dich als Pflegekraft wiegt das doppelt: Der Mensch ist dir anvertraut. Nichtstun ist hier keine Option, sondern eine Straftat. Dein Handeln bei Herrn Wagner war also nicht nur richtig — es war Pflicht.\n\nDie zweite Seite ist der Wille des Patienten. Der Grundsatz lautet: im Zweifel wird reanimiert. Nur wenn ein Arzt den Verzicht ausdrücklich angeordnet hat — etwa weil eine gültige Patientenverfügung genau das festlegt — wird nicht wiederbelebt. Ein Zettel im Nachttisch, ein Gerücht oder die Vermutung, er habe bestimmt nicht gewollt, reicht dafür NICHT: Ohne klare, gültige Grundlage handelst du.\n\nUnd es gibt Grenzen, an denen selbst Profis den Abbruch erwägen: wenn die eigene Sicherheit nicht mehr da ist, bei sicheren Todeszeichen, bei einer gültigen Patientenverfügung, wenn weitere Maßnahmen dem erklärten Willen des Menschen widersprechen — oder wenn sie aussichtslos sind. Diese Entscheidung trifft das ärztliche Team, nicht du allein.\n\nBei Herrn Wagner war nichts davon gegeben. Also galt das Einfachste und Wichtigste: handeln.",
        kerntextB1:
          "Es gibt zwei Seiten, aber eine Entscheidung.\n\nDie erste Seite ist deine Pflicht: Bei einem Notfall muss jeder Mensch helfen, so gut er kann. Wer wegsieht, macht sich strafbar. Das heißt unterlassene Hilfeleistung. Für dich als Pflegekraft gilt das doppelt: Der Mensch ist dir anvertraut. Nichts tun ist keine Option — es ist eine Straftat. Dein Handeln bei Herrn Wagner war also nicht nur richtig. Es war Pflicht.\n\nDie zweite Seite ist der Wille des Patienten. Die Regel ist: Im Zweifel wird reanimiert. Nur wenn ein Arzt den Verzicht klar angeordnet hat, wird nicht wiederbelebt — zum Beispiel wegen einer gültigen Patientenverfügung. Ein Zettel im Nachttisch reicht NICHT. Ein Gerücht reicht nicht. Eine Vermutung reicht nicht. Ohne klare, gültige Grundlage handelst du.\n\nEs gibt auch Grenzen. Dann überlegen sogar Profis, ob sie aufhören. Zum Beispiel: Die eigene Sicherheit fehlt. Es gibt sichere Todeszeichen. Eine gültige Patientenverfügung lehnt die Maßnahmen ab. Oder die Maßnahmen haben keine Aussicht auf Erfolg. Diese Entscheidung trifft das ärztliche Team. Nicht du allein.\n\nBei Herrn Wagner gab es nichts davon. Also galt das Wichtigste: handeln.",
        faustregel:
          "Im Zweifel immer reanimieren. Nur ein ärztlich angeordneter Verzicht — meist auf Basis einer gültigen Patientenverfügung — hält dich zurück. Nichtstun ist bei einem Notfall strafbar.",
        faustregelB1:
          "Im Zweifel immer reanimieren. Nur wenn der Arzt den Verzicht angeordnet hat (meist wegen einer gültigen Patientenverfügung), reanimierst du nicht. Nichts tun ist bei einem Notfall strafbar.",
        spektrum: [
          {
            patientName: "Herr Wagner",
            situationsId: "ls-wagner-reanimation",
            hauptfaktor: "keine Verfügung",
            kurzbeschreibung:
              "Nichts spricht gegen die Reanimation — also wird sofort und vollständig gehandelt. Der Normalfall.",
            kurzbeschreibungB1:
              "Nichts spricht gegen die Reanimation. Also wird sofort und komplett gehandelt. Das ist der Normalfall.",
          },
          {
            patientName: "Gültige Patientenverfügung",
            hauptfaktor: "erklärter Wille",
            kurzbeschreibung:
              "Eine wirksame Verfügung lehnt die Wiederbelebung ab und der Arzt hat den Verzicht angeordnet — dann wird dieser Wille respektiert, nicht überstimmt.",
            kurzbeschreibungB1:
              "Die gültige Verfügung lehnt die Wiederbelebung ab. Der Arzt hat den Verzicht angeordnet. Dann gilt dieser Wille — man handelt nicht dagegen.",
          },
          {
            patientName: "Nur eine Vermutung",
            hauptfaktor: "unklare Grundlage",
            kurzbeschreibung:
              "Eine bloße Annahme oder ein ungültiger Zettel reicht nicht. Ohne klare ärztliche Anordnung gilt: reanimieren.",
            kurzbeschreibungB1:
              "Eine Vermutung oder ein ungültiger Zettel reicht nicht. Ohne klare ärztliche Anordnung gilt: reanimieren.",
          },
        ],
        karteikarte: {
          vorderseite:
            "Ein fremder Mensch bricht zusammen — musst du helfen, und wann reanimierst du NICHT?",
          rueckseite:
            "Helfen ist Pflicht (Nichtstun = strafbar, § 323c). Im Zweifel immer reanimieren. Nicht reanimiert wird nur bei ärztlich angeordnetem Verzicht (meist gültige Patientenverfügung) oder an klaren Grenzen (sichere Todeszeichen, Aussichtslosigkeit). Die Entscheidung trifft das Ärzteteam.",
          vorderseiteB1:
            "Ein fremder Mensch bricht zusammen. Musst du helfen? Und wann reanimierst du NICHT?",
          rueckseiteB1:
            "Helfen ist Pflicht — nichts tun ist strafbar (§ 323c). Im Zweifel immer reanimieren. Du reanimierst nur dann nicht, wenn der Arzt den Verzicht angeordnet hat — meist wegen einer gültigen Patientenverfügung. Auch bei klaren Grenzen wird gestoppt: sichere Todeszeichen oder keine Aussicht auf Erfolg. Das Ärzteteam entscheidet.",
        },
      },
    },
    {
      // Anwendung zum KPR-Tab (Variante D): Transfer auf den GEGENFALL — Wagner
      // wird reanimiert, Frau Kellner (gültige Patientenverfügung) NICHT. Interleaving/
      // Kontrast. Bloom 4 (entscheiden/beurteilen). Gegroundet F-01/F-03.
      stepId: "ce06-wagner-ref-01b-kpr-fall",
      phase: 5,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "V.2",
      quellen: ["§ 1827 BGB (Patientenverfügung)", "Pflege heute 2019, Kap. 14.3.2 + 48.3.4", "ERC 2021"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-wagner-kpr-transfer",
      tag: "pflege",
      themaPrimaer: "kpr-indikation-recht-ethik",
      kernfaktId: ["F-01", "F-03"],
      contentC1: {
        title: "Ein anderer Fall — Frau Kellner",
        body: "Anderer Tag, andere Patientin: Frau Kellner, 84, wird bewusstlos, keine normale Atmung. In ihrer Akte liegt eine gültige, unterschriebene Patientenverfügung, die eine Wiederbelebung ausdrücklich ablehnt — und der Arzt hat den Verzicht auf Reanimation angeordnet. Was tust du?",
        glossarBegriffe: ["Patientenverfügung"],
      },
      contentB1: {
        title: "Ein anderer Fall — Frau Kellner",
        body: "Andere Patientin: Frau Kellner, 84, wird bewusstlos, ihre Atmung ist nicht normal. In ihrer Akte liegt eine gültige Patientenverfügung, die eine Wiederbelebung ablehnt. Der Arzt hat den Verzicht auf Reanimation angeordnet. Was tust du?",
      },
      question: {
        fragetext: "Wie handelst du bei Frau Kellner?",
        mcVariant: "fallstrick",
        optionen: [
          {
            text: "Ich respektiere die Patientenverfügung und beginne KEINE Reanimation. Ich bleibe bei ihr, informiere sofort das Team und sorge für Ruhe, Würde und Begleitung.",
            isCorrect: true,
            explanation:
              "Richtig. Anders als bei Herrn Wagner gibt es hier eine klare, gültige Grundlage: eine wirksame Patientenverfügung, die die Wiederbelebung ablehnt, plus die ärztliche Verzichtsanordnung. Dieser Wille ist bindend — ihn zu übergehen wäre ein Eingriff gegen den erklärten Willen. Deine Aufgabe verschiebt sich vom Reanimieren zum Begleiten: da sein, das Team informieren, für Würde sorgen.",
            explanationB1:
              "Richtig. Hier ist der Wille klar: eine gültige Patientenverfügung lehnt die Wiederbelebung ab, der Arzt hat den Verzicht angeordnet. Das ist bindend. Du reanimierst nicht, sondern bist für Frau Kellner da und informierst das Team.",
          },
          {
            text: "Ich reanimiere trotzdem sofort — im Zweifel wird immer reanimiert.",
            isCorrect: false,
            explanation:
              "Der Grundsatz, im Zweifel zu reanimieren, stimmt — aber hier gibt es keinen Zweifel. Die Patientenverfügung ist gültig und der Arzt hat den Verzicht angeordnet. Zu reanimieren hieße, gegen den erklärten, rechtlich bindenden Willen von Frau Kellner zu handeln. Der Grundsatz greift nur, wenn die Grundlage unklar ist — das ist sie hier nicht.",
            explanationB1:
              "Der Satz, im Zweifel zu reanimieren, ist richtig — aber hier gibt es keinen Zweifel. Die Verfügung ist gültig und der Arzt hat den Verzicht angeordnet. Reanimieren wäre gegen ihren klaren Willen.",
          },
          {
            text: "Ich rufe erst die Angehörigen an und frage, ob die Verfügung wirklich noch gilt, bevor ich etwas entscheide.",
            isCorrect: false,
            explanation:
              "Nein. Eine gültige Patientenverfügung plus ärztliche Anordnung gelten aus sich heraus — Angehörige können den erklärten Willen der Patientin nicht nachträglich überstimmen. Die Entscheidung steht bereits fest: Es wird nicht reanimiert. Statt zu telefonieren bleibst du bei Frau Kellner und begleitest sie.",
            explanationB1:
              "Nein. Eine gültige Verfügung und die ärztliche Anordnung gelten. Angehörige können den Willen der Patientin nicht ändern. Du bleibst bei Frau Kellner und begleitest sie.",
          },
        ],
      },
    },
    {
      stepId: "ce06-wagner-ref-01",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 5,
      kompetenzbereich: "V.2",
      quellen: ["Pflege heute 2019, Kap. 14 (Nachbesprechung/Debriefing)", "CE06-LE1-E1 (eigene Gefühle reflektieren)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-wagner-reflexion-belastung",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      contentC1: {
        title: "Was macht das mit dir — und mit dem Team?",
        body: "Eine Reanimation ist auch für erfahrene Pflegende belastend. Die Schülerin weint, und vielleicht spürst auch du das Zittern, das oft erst kommt, wenn die Anspannung abfällt. Reflektiere die Situation.",
        glossarBegriffe: ["Debriefing", "Psychohygiene", "Sekundärbelastung"],
      },
      contentB1: {
        title: "Was macht das mit dir und dem Team?",
        body: "Eine Reanimation belastet auch erfahrene Pflegende. Die Schülerin weint. Vielleicht zitterst auch du, wenn die Anspannung nachlässt. Denke über die Situation nach.",
        glossarBegriffe: ["Debriefing (= Nachbesprechung im Team)"],
      },
      question: {
        fragetext: "Reflektiere die Situation nach der Reanimation.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Wie geht es dir selbst unmittelbar nach der Reanimation — was nimmst du körperlich und gefühlsmäßig wahr? 2) Was sagst oder tust du für die weinende Schülerin (ohne ihr Gefühl kleinzureden)? 3) Warum ist ein Debriefing im Team sinnvoll, und was gehört hinein? 4) Was nimmst du für die nächste Akutsituation mit?",
          placeholder:
            "Unmittelbar danach spüre ich … Zur Schülerin würde ich sagen … Ein Debriefing ist sinnvoll, weil … Für das nächste Mal nehme ich mit …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Erkennt der Schüler eigene Belastungsreaktionen an (Zittern, Anspannungsabfall) statt sie zu übergehen? Reagiert er auf die Schülerin validierend (Gefühl anerkennen, da sein, nicht bagatellisieren wie 'ist doch gut gegangen')? Nennt er den Sinn eines Debriefings (Verarbeitung belastender Situationen, aus dem Ablauf lernen: was lief gut/weniger gut) und ggf. weitere Unterstützung (Kollegin, Supervision, Seelsorge)? Zieht er eine konkrete Konsequenz für die nächste Akutsituation? Lob für eine differenzierte Bloom-5-Reflexion. Niemals abwertend; das Thema ist emotional sensibel.",
        },
      },
    },
    {
      stepId: "ce06-wagner-ref-02",
      phase: 5,
      stepType: "mc",
      bloomLevel: 4,
      kompetenzbereich: "III.2",
      quellen: ["Pflege heute 2019, Kap. 14 (Nachbesprechung/Debriefing; CIRS)"],
      track: "basis",
      modus: "challenge",
      lernziel: "ce06-wagner-debriefing-cirs",
      tag: "pflege",
      themaPrimaer: "reanimation-bls",
      // Der klinische Kern des Defi-Standort-Themas ist „AED so früh wie möglich" (F-11) —
      // die CIRS/Just-Culture-Ebene ist Systemsicherheit (quellen), kein Verbatim-Normwert.
      kernfaktId: ["F-11"],
      contentC1: {
        title: "Der lange Weg des Defibrillators",
        body: "In der Nachbesprechung fällt auf: Der Defibrillator hing 30 Meter entfernt am Stützpunkt — das hat wertvolle Sekunden gekostet. Wie gehst du damit um?",
        glossarBegriffe: ["CIRS (Critical Incident Reporting System)", "Debriefing"],
      },
      contentB1: {
        title: "Der Defi war weit weg",
        body: "In der Nachbesprechung fällt auf: Der Defibrillator (Defi) hing 30 Meter weg — das hat Sekunden gekostet. Wie gehst du damit um?",
        glossarBegriffe: ["CIRS (= System, um Beinahe-Fehler zu melden)"],
      },
      question: {
        fragetext: "Wie gehst du mit dem langen Defi-Weg um?",
        mcVariant: "standard",
        optionen: [
          {
            text: "Ich spreche es im Debriefing an und schreibe eine CIRS-Meldung.",
            isCorrect: true,
            explanation:
              "Richtig. Ein CIRS dient dem Lernen aus kritischen Ereignissen und Beinahe-Fehlern — anonym und ohne Schuldzuweisung. Ein zu weit entfernter Defibrillator ist ein Systemproblem, das man strukturell lösen kann (näherer Standort). Genau das ist konstruktive Nachbesprechungskultur.",
            explanationB1:
              "Richtig. Ein CIRS hilft, aus kritischen Situationen zu lernen — ohne Schuld zu verteilen. Ein zu weit entfernter Defi ist ein Systemproblem, das man lösen kann. Das ist gute Nachbesprechung.",
          },
          {
            text: "Nichts — es ist ja alles gut gegangen, und der Standort ist nun mal so vorgegeben.",
            isCorrect: false,
            explanation:
              "Nein. Dass es diesmal gut ging, heißt nicht, dass das System sicher ist ('Beinahe-Fehler'). Wer solche Punkte nicht meldet, verschenkt die Chance, die Versorgung für den nächsten Notfall zu verbessern. Standorte von Notfallgeräten sind veränderbar.",
            explanationB1:
              "Nein. Dass es gut ging, heißt nicht, dass alles sicher ist. Wenn du es nicht meldest, kann es beim nächsten Mal schlechter ausgehen. Der Standort lässt sich ändern.",
          },
          {
            text: "Ich beschwere mich bei der Schülerin, dass sie zu langsam gelaufen ist.",
            isCorrect: false,
            explanation:
              "Falsch und ungerecht. Die Schülerin ist gelaufen, so schnell sie konnte — das Problem ist der Standort, nicht sie. Schuldzuweisungen zerstören die Vertrauens- und Meldekultur, die für Patientensicherheit nötig ist. Sachlich das System verbessern, nicht Personen beschuldigen.",
            explanationB1:
              "Falsch und ungerecht. Die Schülerin ist so schnell gelaufen, wie sie konnte. Das Problem ist der Standort, nicht sie. Schuldzuweisungen zerstören das Vertrauen im Team.",
          },
        ],
      },
    },
    {
      // Anwendung (Variante D) + K5-Abdeckung: Notfallpläne analysieren + Aufgabenfeld
      // Pflege identifizieren (Bloom 4). Knüpft an die CIRS-Meldung an (Defi 30 m weg).
      // Reflexion/Transfer auf den eigenen Einsatzort — keine faktische Behauptung, daher
      // wie ref-01 ohne kernfaktId.
      stepId: "ce06-wagner-ref-03-notfallplan",
      phase: 5,
      stepType: "reflection",
      bloomLevel: 4,
      kompetenzbereich: "III.2",
      quellen: ["CE06-LE1-K5 (Notfallpläne analysieren, Aufgabenfeld Pflege)", "ERC 2021 (Rettungskette)"],
      track: "basis",
      modus: "schreibtisch",
      lernziel: "ce06-wagner-notfallplan-analyse",
      tag: "pflege",
      themaPrimaer: "notfallassessment",
      contentC1: {
        title: "Der Notfallplan deiner Station",
        body: "Herrn Wagners Fall hat eine Schwachstelle gezeigt: Der Defibrillator hing 30 Meter weg. Übertrage das auf deinen eigenen Einsatzort.",
        glossarBegriffe: ["Notfallteam", "Rettungskette"],
      },
      contentB1: {
        title: "Der Notfallplan deiner Station",
        body: "Bei Herrn Wagner war der Defibrillator (Defi) 30 Meter weg. Denke an deine eigene Station.",
      },
      question: {
        fragetext: "Analysiere den Notfallplan deines Einsatzortes.",
        reflection: {
          prompt:
            "Schreibe 4–6 Sätze: 1) Wo hängt an deinem Einsatzort der nächste Defibrillator / steht der Notfallwagen — und wie schnell bist du dort? 2) Wie alarmierst du das Notfallteam (Nummer, Codewort, Ablauf)? 3) Was ist DEINE Rolle im Alarmplan, bis das Team eintrifft? 4) Welche Schwachstelle würdest du nach Herrn Wagners Fall ansprechen oder verbessern?",
          placeholder:
            "Der nächste Defi hängt … Das Team alarmiere ich über … Meine Rolle bis dahin ist … Verbessern würde ich …",
          systemPrompt:
            "Bewerte im Sandwich-Prinzip (loben → konkretisieren → ermutigen). Hat der Schüler den Notfallplan seines KONKRETEN Einsatzortes analysiert (Defi-/Notfallwagen-Standort, Alarmierungsweg, Codewort) statt allgemeiner Floskeln? Identifiziert er sein eigenes Aufgabenfeld bis zum Eintreffen des Teams (erkennen, alarmieren lassen, sofort mit Herzdruckmassage beginnen, Patienten nicht allein lassen)? Zieht er eine konkrete Verbesserung/Schwachstelle (z. B. Geräte-Standort, Wege, regelmäßige Übung)? Achte auf fachliche Fehler und benenne sie konkret — etwa selbst zum Defi weglaufen statt zu delegieren, oder den Notruf hinauszögern. Lob für ortsbezogene, konkrete Analyse.",
        },
      },
    },
  ],
  optionaleSteps: [],
  geschaetzteDauer: 12,
};

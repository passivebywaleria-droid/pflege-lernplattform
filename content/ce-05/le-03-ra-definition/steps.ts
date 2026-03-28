// Lektion 03: RA — Definition, Ursachen, Pathomechanismus
// CE 05 — Block B: Rheumatoide Arthritis
// Session 1: "Was ist das?" (Punkte 1-2: Kurzbeschreibung, Definition)
// Erlebnis-Konzept v2 — 8 Modi, Brilliant-Prinzip, 11 Modus-Wechsel

import type {
  ContentStep,
  GlossarEntry,
  LektionMetadata,
} from "../_types";

export const METADATA: LektionMetadata = {
  leId: "le-03-ra-definition",
  ceId: "ce-05",
  title: "RA: Definition, Ursachen, Pathomechanismus",
  titleShort: "RA: Grundlagen",
  zeitrichtwert: 2,
  geschaetzteLernzeit: { c1: 20, b1: 30 },
  kompetenzbereiche: ["KB-I.1", "KB-V.1"],
  bloomStufen: [1, 3],
  voraussetzungen: ["le-02-anatomie-immunologie"],
  leitfall: {
    name: "Mehmet Demir",
    alter: 43,
    beruf: "Fliesenleger",
    diagnose: "V.a. Rheumatoide Arthritis",
    setting: "Rheumatologische Ambulanz",
    kernproblem:
      "Morgensteifigkeit >60 Min, kann Werkzeug nicht mehr greifen",
  },
  glossarCount: 6,
  quellenCount: 5,
};

export const STEPS: ContentStep[] = [
  // ═══════════════════════════════════════════════════
  // Min 0-5: STORY — Kollegin-Übergabe + Patientengespräch (WhatsApp-Dialog)
  // 5 Phasen, Pflege-Kommunikationsregeln im Feedback
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-01-story-dialog",
    lernziel: "ce05-le03-kommunikation",
    phase: 1,
    stepType: "dialog",
    modus: "story",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.2",
    quellen: [],
    xpValue: 40,
    contentC1: {
      title: "Dein erster Tag in der Rheuma-Ambulanz",
      body: "Heute begleitest du zum ersten Mal die rheumatologische Sprechstunde. Deine Praxisanleiterin Sarah kommt auf dich zu.",
      fallbezug: "Gleich lernst du Mehmet Demir kennen — 43 Jahre, Fliesenleger.",
      glossarBegriffe: ["Rheumatoide Arthritis", "Morgensteifigkeit"],
    },
    contentB1: {
      title: "Dein erster Tag in der Rheuma-Ambulanz",
      body: "Heute bist du zum ersten Mal in der Rheuma-Sprechstunde. Deine Anleiterin Sarah kommt zu dir.",
      fallbezug: "Du lernst gleich einen neuen Patienten kennen.",
    },
    question: {
      patientName: "Sarah",
      fragetext: "Deine Praxisanleiterin Sarah bereitet dich auf den nächsten Patienten vor.",
      dialogPhases: [
        // ═══ Phase 1: Kollegin gibt Übergabe ═══
        {
          context:
            "Hey! Schön, dass du da bist. Gleich kommt ein neuer Patient — Herr Demir, 43 Jahre, Fliesenleger. Seine Frau hat den Termin gemacht. Er hat seit Wochen morgens steife Finger, kann kein Werkzeug mehr greifen. Die Steifigkeit dauert über eine Stunde. Was denkst du — was könnte das sein?",
          contextB1:
            "Hey! Schön, dass du da bist. Gleich kommt ein neuer Patient. Er heißt Herr Demir. Er ist 43 Jahre alt und arbeitet als Fliesenleger. Seine Frau hat den Termin gemacht. Er hat ein Problem: Morgens sind seine Finger steif. Seit Wochen. Über eine Stunde lang. Was glaubst du — was kann das sein?",
          options: [
            {
              text: "Hmm, Morgensteifigkeit über eine Stunde, beide Hände betroffen... Das klingt nach etwas Entzündlichem. Vielleicht Rheumatoide Arthritis?",
              textB1: "Steife Finger am Morgen, über eine Stunde lang? Das klingt nach einer Entzündung. Vielleicht Rheuma?",
              patientResponse:
                "Gut mitgedacht! Genau das ist der Verdacht. Morgensteifigkeit über 60 Minuten ist ein wichtiges Warnsignal. Magst du gleich das Erstgespräch mit ihm führen? Ich begleite dich.",
              patientResponseB1:
                "Gut gedacht! Genau — der Verdacht ist Rheuma. Morgens steife Finger über 60 Minuten — das ist ein Warnsignal. Willst du mit ihm reden? Ich komme mit.",
              score: 3,
              feedback:
                "Klinisches Reasoning! Merke: Morgensteifigkeit >60 Min + symmetrischer Befall = RA-Warnsignal (ACR/EULAR).",
              feedbackB1:
                "Sehr gut! Du hast die Symptome richtig erkannt. Merke dir: Steife Finger am Morgen, länger als 60 Minuten, beide Hände — das ist ein Warnsignal für Rheuma.",
            },
            {
              text: "Vielleicht hat er sich beim Arbeiten überlastet? Fliesenleger ist ja körperlich sehr anstrengend.",
              textB1: "Vielleicht hat er zu viel gearbeitet? Fliesenleger ist ein harter Beruf.",
              patientResponse:
                "Das denkt er auch! Aber Überlastung erklärt nicht die Morgensteifigkeit über 60 Minuten — und dass beide Hände betroffen sind. Das spricht eher für etwas Entzündliches, zum Beispiel Rheuma. Komm, du führst das Erstgespräch — ich bin dabei.",
              patientResponseB1:
                "Das denkt er auch! Aber: Steife Finger über 60 Minuten morgens? Und beide Hände gleich? Das passt nicht zu Überlastung. Das klingt nach Entzündung — vielleicht Rheuma. Komm, rede du mit ihm. Ich bin dabei.",
              score: 2,
              feedback:
                "Nachvollziehbar, aber Morgensteifigkeit >60 Min + symmetrischer Befall passt nicht zu Überlastung. Das ist ein Warnsignal für entzündliche Erkrankungen.",
              feedbackB1:
                "Das kann man denken, aber es passt nicht. Tipp: Steife Finger über 60 Minuten + beide Hände gleich = Warnsignal für Entzündung.",
            },
            {
              text: "Ehrlich gesagt bin ich unsicher. Ich habe noch nicht viel über Gelenkerkrankungen gelernt.",
              textB1: "Ich bin mir nicht sicher. Ich kenne mich noch nicht so gut aus mit Gelenken.",
              patientResponse:
                "Kein Problem — dafür bist du ja hier! Der Verdacht geht Richtung Rheumatoide Arthritis. Am besten lernst du das direkt am Patienten. Komm, du führst das Gespräch — ich unterstütze dich.",
              patientResponseB1:
                "Kein Problem! Dafür bist du hier. Der Verdacht ist Rheuma. Am besten lernst du das am Patienten. Komm, du redest mit ihm — ich helfe dir.",
              score: 2,
              feedback:
                "Ehrlichkeit ist eine Stärke! Eigene Wissenslücken erkennen zeigt Selbstreflexion — eine Kernkompetenz (Carl Rogers: Kongruenz).",
              feedbackB1:
                "Ehrlichkeit ist gut! Es ist wichtig, dass du sagst, wenn du etwas nicht weißt. Das zeigt Stärke, nicht Schwäche.",
            },
          ],
        },
        // ═══ Phase 2: Begrüßung des Patienten ═══
        {
          context:
            "Äh... hallo. Bin ich hier richtig? Ich bin der Demir. Meine Frau hat angerufen wegen einem Termin. Sind Sie die Ärztin?",
          contextB1:
            "Äh... hallo. Bin ich hier richtig? Ich heiße Demir. Meine Frau hat den Termin gemacht. Sind Sie die Ärztin?",
          speaker: "Mehmet",
          vitals: "Mehmet Demir, 43 J. · Fliesenleger · Erstbesuch Rheumatologie",
          options: [
            {
              text: "Guten Tag, Herr Demir! Nein, ich bin kein Arzt — mein Name ist... Ich bin Pflegeschüler/in und begleite heute die Sprechstunde. Schön, dass Sie da sind. Wie geht es Ihnen?",
              textB1: "Hallo, Herr Demir! Nein, ich bin kein Arzt. Ich bin Pflegeschüler/in. Ich bin heute hier in der Sprechstunde. Schön, dass Sie da sind. Wie geht es Ihnen?",
              patientResponse:
                "Ach so, okay. Na ja... ehrlich gesagt weiß ich gar nicht was ich hier soll. Meine Frau hat mich hergeschickt. Ich glaub, das ist nur Überlastung — ich hab halt viel gefliest in letzter Zeit.",
              patientResponseB1:
                "Ach so, okay. Ehrlich gesagt — ich weiß nicht, warum ich hier bin. Meine Frau hat mich geschickt. Ich glaube, das ist nur Überlastung. Ich habe viel gearbeitet.",
              score: 3,
              feedback:
                "Perfekt! 3 Grundregeln der Kontaktaufnahme: Missverständnis klären, vorstellen, offene Frage. Klare Rollenklärung schafft Vertrauen (Schulz von Thun: Beziehungsebene).",
              feedbackB1:
                "Perfekt! Du hast 3 wichtige Dinge gemacht: 1) Seine Frage beantwortet. 2) Dich vorgestellt. 3) Eine offene Frage gestellt. So baut man Vertrauen auf.",
            },
            {
              text: "Herr Demir? Ja, kommen Sie mit, wir sind dran.",
              textB1: "Herr Demir? Kommen Sie mit.",
              patientResponse:
                "Oh, ja... okay. Aber sind Sie die Ärztin? Sie sehen so jung aus. Und alle anderen hier sind viel älter als ich...",
              patientResponseB1:
                "Oh, okay. Aber sind Sie die Ärztin? Sie sind so jung. Und alle hier sind viel älter als ich...",
              score: 1,
              feedback:
                "Zu knapp! Mehmet fragt 'Sind Sie die Ärztin?' und du ignorierst das. Grundregel: Immer Fragen beantworten, dann vorstellen + Rolle klären.",
              feedbackB1:
                "Zu kurz! Mehmet hat gefragt: 'Sind Sie die Ärztin?' Du hast nicht geantwortet. Das macht ihn unsicher. Regel: Immer zuerst die Frage beantworten. Dann dich vorstellen.",
            },
            {
              text: "Hallo Herr Demir! Nein, die Ärztin kommt gleich. Ich sehe, Sie wirken etwas nervös — ist alles okay?",
              textB1: "Hallo Herr Demir! Die Ärztin kommt gleich. Sie sehen nervös aus — ist alles okay?",
              patientResponse:
                "Na ja... ich bin ehrlich gesagt nicht sicher ob ich hier richtig bin. Meine Frau hat den Termin gemacht. Ich dachte, Rheuma kriegen nur alte Leute?",
              patientResponseB1:
                "Na ja... ich bin nicht sicher, ob ich hier richtig bin. Meine Frau hat den Termin gemacht. Ich dachte, Rheuma bekommen nur alte Leute?",
              score: 2,
              feedback:
                "Rolle geklärt — gut! Aber 'Sie wirken nervös' ist eine Bewertung. Besser: 'Wie geht es Ihnen?' (Carl Rogers: Beobachte, bewerte nicht).",
              feedbackB1:
                "Gut — du hast die Rolle geklärt. Aber: 'Sie sehen nervös aus' — das ist eine Bewertung. Besser: 'Wie geht es Ihnen?' Dann kann er selbst sagen, wie er sich fühlt.",
            },
          ],
        },
        // ═══ Phase 3: Verleugnung erkennen ═══
        {
          context:
            "Wissen Sie, ich glaub nicht, dass das was Schlimmes ist. Ich bin doch erst 43! Rheuma kriegen doch nur Omas. Das ist bestimmt nur Überlastung vom Fliesen legen.",
          contextB1:
            "Ich glaube nicht, dass das schlimm ist. Ich bin erst 43! Rheuma bekommen doch nur alte Leute. Das ist bestimmt nur von der Arbeit.",
          speaker: "Mehmet",
          options: [
            {
              text: "Ich höre, dass Sie sich wünschen, dass es nichts Ernstes ist. Das ist verständlich. Aber erzählen Sie mal — wie ist das genau morgens mit den Händen?",
              textB1: "Das verstehe ich — Sie hoffen, dass es nichts Schlimmes ist. Erzählen Sie mal: Wie ist das morgens mit den Händen?",
              patientResponse:
                "Na ja... morgens wenn ich aufstehe, sind die Finger komplett steif. Wie eingerostet. Das dauert über eine Stunde! Meine Frau muss mir sogar die Schuhe zubinden. Das ist mir so peinlich.",
              patientResponseB1:
                "Morgens sind meine Finger ganz steif. Wie eingerostet. Über eine Stunde lang! Meine Frau muss mir die Schuhe zubinden. Das ist mir peinlich.",
              score: 3,
              feedback:
                "Perfekt! Mehmet ist in der Verleugnungsphase (Kübler-Ross, Phase 1). NURSE: U = Understanding + E = Exploring. Du widersprichst nicht, sondern lenkst behutsam auf seine Symptome.",
              feedbackB1:
                "Sehr gut! Mehmet will nicht wahrhaben, dass er krank sein könnte. Das ist normal — Phase 1 (Kübler-Ross: Verleugnung). Du hast richtig reagiert: Nicht widersprechen, aber trotzdem nach den Symptomen fragen.",
            },
            {
              text: "Herr Demir, Rheuma kann jeden treffen — auch mit 43. Das hat nichts mit dem Alter zu tun.",
              textB1: "Herr Demir, Rheuma kann auch junge Menschen bekommen. Das hat nichts mit dem Alter zu tun.",
              patientResponse:
                "Ja, ja... wenn Sie meinen. Aber ich kenn das halt nur von meinem Onkel. Der war viel älter.",
              patientResponseB1:
                "Okay... wenn Sie das sagen. Aber mein Onkel war viel älter, als er Rheuma bekommen hat.",
              score: 1,
              feedback:
                "Fachlich korrekt, kommunikativ ein Fehler! In der Verleugnungsphase (Kübler-Ross) nicht konfrontieren. Besser: Erst Sichtweise akzeptieren, dann lenken. NURSE: U = Understanding VOR K = Knowledge.",
              feedbackB1:
                "Das stimmt — aber so solltest du das nicht sagen. Mehmet hat Angst. Er will nicht krank sein. Wenn du sagst 'Rheuma kann jeden treffen', macht ihm das noch mehr Angst. Besser: Erst verstehen, dann erklären.",
            },
            {
              text: "Lassen Sie uns erstmal in Ruhe schauen. Erzählen Sie mir, was genau Sie bemerken.",
              textB1: "Lassen Sie uns erstmal in Ruhe reden. Was genau haben Sie bemerkt?",
              patientResponse:
                "Na ja, die Finger halt. Morgens geht gar nichts. Und mittlerweile auch die Handgelenke. Und ich bin ständig müde. So richtig kaputt.",
              patientResponseB1:
                "Meine Finger. Morgens geht gar nichts. Und jetzt auch die Handgelenke. Und ich bin immer müde. Richtig kaputt.",
              score: 2,
              feedback:
                "Ruhig und offen — gut. Aber du gehst nicht auf seine Verleugnung ein. Tipp: Erst Sichtweise benennen (NURSE: N = Naming), dann offene Frage.",
              feedbackB1:
                "Gut — du bleibst ruhig und stellst eine offene Frage. Aber: Mehmet hat gesagt, er glaubt, es ist nur Überlastung. Das solltest du ansprechen. Zeig ihm, dass du ihn gehört hast.",
            },
          ],
        },
        // ═══ Phase 4: Symptome vertiefen ═══
        {
          context:
            "Wissen Sie, was das Schlimmste ist? Ich kann morgens nicht mal die Kaffeetasse halten. Meine Frau macht mir jetzt alles. Sogar die Schuhe. Für einen Mann wie mich... das geht nicht.",
          contextB1:
            "Das Schlimmste ist: Ich kann morgens die Kaffeetasse nicht halten. Meine Frau macht mir alles. Sogar die Schuhe. Das ist schlimm für mich.",
          speaker: "Mehmet",
          options: [
            {
              text: "Das klingt belastend — nicht nur körperlich, sondern auch für Ihr Selbstbild. Seit wann ist das so? Und wird es im Laufe des Tages besser?",
              textB1: "Das ist schwer für Sie — nicht nur wegen der Schmerzen. Seit wann ist das so? Wird es am Tag besser?",
              patientResponse:
                "Seit ungefähr drei Monaten. Morgens am schlimmsten — nach einer Stunde wird es langsam besser. Abends geht es dann. Aber morgens... morgens bin ich wie ein alter Mann.",
              patientResponseB1:
                "Seit ungefähr drei Monaten. Morgens am schlimmsten. Nach einer Stunde wird es besser. Abends geht es. Aber morgens bin ich wie ein alter Mann.",
              score: 3,
              feedback:
                "Ausgezeichnet! 1) Du erkennst die psychische Belastung (kultursensibel: Ernährerrolle). 2) Du fragst nach Dauer und Tagesrhythmus — wichtig für Differenzialdiagnose RA vs. Arthrose.",
              feedbackB1:
                "Sehr gut! Du erkennst: Das Problem ist nicht nur der Schmerz. Mehmet fühlt sich hilflos. Du fragst auch richtig: Seit wann? Wann besser? Merke: Morgens steif, abends besser = typisch für Entzündung.",
            },
            {
              text: "Das kenne ich von anderen Patienten auch. Morgensteifigkeit ist typisch für entzündliche Erkrankungen.",
              textB1: "Das haben viele Patienten. Steife Gelenke am Morgen sind typisch für Entzündungen.",
              patientResponse:
                "Entzündlich? Was heißt das genau? Ich dachte, das sind einfach die Gelenke...",
              patientResponseB1:
                "Entzündlich? Was heißt das? Ich dachte, die Gelenke sind einfach kaputt...",
              score: 2,
              feedback:
                "Gute Verknüpfung, aber du übergehst seine emotionale Belastung. Schulz von Thun: Hör auf die Selbstkundgabe ('Ich leide unter der Abhängigkeit'). Erst Gefühl, dann Fachwissen.",
              feedbackB1:
                "Du weißt viel — gut. Aber Mehmet redet gerade über seine Gefühle. Er fühlt sich hilflos. Das solltest du zuerst ansprechen. Erst die Gefühle, dann das Fachwissen.",
            },
            {
              text: "Haben Sie schon mit Ihrem Hausarzt darüber gesprochen?",
              textB1: "Waren Sie schon beim Hausarzt?",
              patientResponse:
                "Ja, der hat mich ja hierher geschickt. Aber der hat nur kurz geguckt und einen Überweisungsschein geschrieben. Nicht mal richtig erklärt, warum ich zum Rheumatologen soll.",
              patientResponseB1:
                "Ja. Der hat mich hierher geschickt. Aber er hat nichts erklärt. Nur den Überweisungsschein geschrieben.",
              score: 1,
              feedback:
                "Sachlich korrekt, aber am Thema vorbei! Mehmet öffnet sich emotional und du wechselst zum Hausarzt. Aktives Zuhören: Beim Patienten bleiben, nicht das Thema wechseln.",
              feedbackB1:
                "Falsche Frage zum falschen Zeitpunkt! Mehmet erzählt gerade, wie schwer es für ihn ist. Er braucht jemanden, der zuhört. Nicht eine Frage über den Hausarzt. Bleib bei ihm!",
            },
          ],
        },
        // ═══ Phase 5: Emotionaler Schlüsselmoment — Angst ═══
        {
          context:
            "Wissen Sie, was mich wirklich fertig macht? Ich schaue morgens auf meine Hände und denke... das sind nicht mehr meine Hände. Die machen nicht mehr, was ich will. Mein Onkel hatte auch Rheuma. Der konnte am Ende gar nichts mehr.",
          contextB1:
            "Wissen Sie, was mich fertig macht? Morgens schaue ich auf meine Hände. Und ich denke: Das sind nicht meine Hände. Die machen nicht, was ich will. Mein Onkel hatte auch Rheuma. Am Ende konnte er nichts mehr.",
          speaker: "Mehmet",
          options: [
            {
              text: "Ich höre, dass Ihnen das große Angst macht — besonders wenn Sie an Ihren Onkel denken. Das muss sehr belastend sein. Mögen Sie mir mehr davon erzählen?",
              textB1: "Das macht Ihnen große Angst. Besonders wegen Ihrem Onkel. Das ist schwer. Möchten Sie mir mehr erzählen?",
              patientResponse:
                "Ja... mein Onkel Hasan. Der hatte das auch. In seinen Händen. Am Ende konnte er nicht mal mehr ein Glas halten. Und ich bin Fliesenleger — wenn meine Hände nicht funktionieren, kann ich nicht arbeiten. Ich habe zwei Kinder. Wer soll die versorgen?",
              patientResponseB1:
                "Mein Onkel Hasan hatte das auch. Am Ende konnte er kein Glas mehr halten. Und ich bin Fliesenleger. Wenn meine Hände nicht gehen, kann ich nicht arbeiten. Ich habe zwei Kinder. Wer versorgt sie dann?",
              score: 3,
              feedback:
                "NURSE-Modell komplett: N = Naming ('Angst'), U = Understanding ('Onkel'), E = Exploring ('mehr erzählen?'). Mehmet öffnet sich — du gibst ihm Raum für Beruf, Familie, Ernährerrolle.",
              feedbackB1:
                "Sehr gut! Du hast 3 wichtige Dinge gemacht: 1) Seine Angst benannt. 2) Verständnis gezeigt. 3) Ihn zum Erzählen eingeladen. Mehmet vertraut dir jetzt — er erzählt von seinem Onkel und seiner Angst um die Familie.",
            },
            {
              text: "Machen Sie sich keine Sorgen. Heutzutage kann man Rheuma gut behandeln. Das wird schon.",
              textB1: "Keine Sorge! Heute kann man Rheuma gut behandeln. Das wird schon.",
              patientResponse:
                "Ja, das sagt jeder... Aber mein Onkel hatte das auch. Und der saß am Ende im Rollstuhl. Der konnte gar nichts mehr alleine.",
              patientResponseB1:
                "Das sagt jeder... Aber mein Onkel war am Ende im Rollstuhl. Er konnte nichts mehr alleine.",
              score: 1,
              feedback:
                "STOPP — 2 Killerphrasen! 'Keine Sorgen' + 'Das wird schon' bagatellisieren existenzielle Angst. Mehmet trauert um sein Körperbild (Kübler-Ross). Er braucht NURSE: Naming — nicht falschen Optimismus.",
              feedbackB1:
                "STOPP! 'Keine Sorge' und 'Das wird schon' — das sind Killerphrasen. Du machst seine Angst klein. Mehmet hat echte Angst. Er braucht jemanden, der sagt: 'Ich höre, dass Sie Angst haben.' Nicht: 'Wird schon.' Trösten ist gut — aber nicht so!",
            },
            {
              text: "Das verstehe ich. Nehmen Sie denn schon irgendwas dagegen? Schmerzmittel?",
              textB1: "Das verstehe ich. Nehmen Sie schon Medikamente dagegen?",
              patientResponse:
                "Ibuprofen. Das hilft ein bisschen, aber nur für ein paar Stunden. Danach kommt alles wieder.",
              patientResponseB1:
                "Ibuprofen. Das hilft ein bisschen. Aber nur ein paar Stunden. Dann kommt alles wieder.",
              score: 2,
              feedback:
                "Empathie gezeigt, aber sofort zur Medikation gewechselt. Ein Schlüsselmoment: Er trauert um sein Körperbild. Aktives Zuhören: Stille aushalten. Die Medikamentenfrage kann warten.",
              feedbackB1:
                "Du sagst 'Das verstehe ich' — gut. Aber dann fragst du sofort nach Medikamenten. Mehmet redet gerade über seine Angst. Bleib bei den Gefühlen! Die Frage nach Medikamenten kann warten.",
            },
          ],
        },
        // ═══ Phase 6: Familie und Ernährerrolle ═══
        {
          context:
            "Wissen Sie, in meiner Familie... der Mann sorgt für die Familie. Mein Vater hat das so gemacht, mein Onkel auch — bis er krank wurde. Wenn ich nicht mehr arbeiten kann, was bin ich dann noch?",
          contextB1:
            "In meiner Familie sorgt der Mann für alle. Mein Vater hat das gemacht. Mein Onkel auch — bis er krank wurde. Wenn ich nicht mehr arbeiten kann... was bin ich dann noch?",
          speaker: "Mehmet",
          options: [
            {
              text: "Sie sprechen über etwas sehr Wichtiges — Ihre Rolle in der Familie. Ich höre, dass Ihre Familie Ihnen alles bedeutet. Und dass die Angst, sie nicht mehr versorgen zu können, das Schlimmste für Sie ist.",
              textB1: "Das ist Ihnen sehr wichtig — Ihre Familie. Ich höre: Die Angst, nicht mehr für die Familie da sein zu können, ist das Schlimmste für Sie.",
              patientResponse:
                "Ja, genau. Genau das ist es. Meine Frau arbeitet zwar auch, aber... ich will nicht der sein, der zu Hause sitzt und nichts machen kann. Verstehen Sie?",
              patientResponseB1:
                "Ja. Genau das. Meine Frau arbeitet auch. Aber ich will nicht zu Hause sitzen und nichts tun können. Verstehen Sie?",
              score: 3,
              feedback:
                "NURSE: N = Naming + R = Respecting. Du bewertest die Ernährerrolle nicht, du respektierst sie. Kultursensible Pflege: Die Werte des Patienten achten, nicht die eigenen aufdrücken.",
              feedbackB1:
                "Sehr gut! Du verstehst, was Mehmet wichtig ist: seine Familie versorgen. Du bewertest das nicht. Du zeigst Respekt. Das ist kultursensible Pflege — die Werte des Patienten achten.",
            },
            {
              text: "Herr Demir, Sie sind mehr als nur der Versorger. Ihre Familie liebt Sie doch nicht nur wegen dem Geld.",
              textB1: "Herr Demir, Sie sind mehr als nur der Versorger. Ihre Familie liebt Sie nicht nur wegen Geld.",
              patientResponse:
                "Ja, schon... aber das ist einfach so bei uns. Das verstehen Sie wahrscheinlich nicht.",
              patientResponseB1:
                "Ja, aber... das ist bei uns so. Das verstehen Sie vielleicht nicht.",
              score: 1,
              feedback:
                "Gut gemeint, aber ein Fehler! Du bewertest sein Familienmodell. Für Mehmet ist die Ernährerrolle identitätsstiftend. Seine Reaktion zeigt: Du hast ihn verloren. Werte akzeptieren, nicht korrigieren.",
              feedbackB1:
                "Gut gemeint, aber falsch! Du sagst: 'Sie sind mehr als nur der Versorger.' Für Mehmet ist aber genau das sehr wichtig. Du darfst seine Werte nicht bewerten. Akzeptiere, was ihm wichtig ist.",
            },
            {
              text: "Das kann ich verstehen. Viele Patienten haben ähnliche Sorgen. Die Sozialberatung kann Ihnen bei finanziellen Fragen helfen.",
              textB1: "Das verstehe ich. Viele Patienten haben solche Sorgen. Die Sozialberatung kann bei Geldfragen helfen.",
              patientResponse:
                "Sozialberatung? Ich brauche keine Beratung, ich brauche meine Hände zurück!",
              patientResponseB1:
                "Sozialberatung? Ich brauche keine Beratung. Ich brauche meine Hände zurück!",
              score: 2,
              feedback:
                "Sachlich richtig, aber falscher Zeitpunkt! Mehmet spricht über seine Identität. Schulz von Thun: Du hörst nur die Sachebene. Der Appell ist: 'Sehen Sie mich!' Erst Mensch, dann Lösung.",
              feedbackB1:
                "Sozialberatung ist wichtig — aber nicht jetzt. Mehmet redet über seine Angst. Er will gehört werden, nicht eine Telefonnummer bekommen. Erst zuhören, dann Lösungen.",
            },
          ],
        },
        // ═══ Phase 7: Information geben — Shared Decision Making ═══
        {
          context:
            "Okay... und was passiert jetzt? Was machen die hier mit mir? Muss ich jetzt Tabletten nehmen für immer?",
          contextB1:
            "Okay... und was passiert jetzt? Was machen die hier mit mir? Muss ich jetzt immer Tabletten nehmen?",
          speaker: "Mehmet",
          options: [
            {
              text: "Gute Frage! Zuerst macht die Ärztin ein paar Untersuchungen — Blut abnehmen, Gelenke anschauen. Dann wissen wir mehr. Und dann besprechen wir gemeinsam, was als Nächstes kommt. Sie entscheiden mit.",
              textB1: "Gute Frage! Zuerst untersucht die Ärztin Sie. Sie nimmt Blut ab und schaut die Gelenke an. Dann wissen wir mehr. Dann besprechen wir zusammen, was wir machen. Sie entscheiden mit.",
              patientResponse:
                "Ich entscheide mit? Das ist mir noch nie passiert beim Arzt. Normalerweise sagen die mir einfach, was ich machen soll.",
              patientResponseB1:
                "Ich entscheide mit? Das ist neu. Normalerweise sagt der Arzt mir, was ich machen soll.",
              score: 3,
              feedback:
                "Perfekt! Klarer Ablauf (SPIKES: S = Strategy) + Shared Decision Making: 'Sie entscheiden mit.' Bei Rheuma trauen sich 61% der Patienten nicht, Fragen zu stellen. Du durchbrichst das.",
              feedbackB1:
                "Sehr gut! Du erklärst, was passiert. Und du sagst: 'Sie entscheiden mit.' Das ist wichtig! Viele Patienten trauen sich nicht, Fragen zu stellen. Du gibst Mehmet das Gefühl: Du darfst mitbestimmen.",
            },
            {
              text: "Das entscheidet die Ärztin. Sie wird Ihnen alles erklären.",
              textB1: "Das sagt Ihnen die Ärztin. Sie erklärt Ihnen alles.",
              patientResponse:
                "Ah... okay. Na dann warte ich mal.",
              patientResponseB1:
                "Okay. Dann warte ich.",
              score: 1,
              feedback:
                "Verantwortung komplett abgegeben! 'Das entscheidet die Ärztin' — Killerphrase. Pflege hat eigenständige Beratungsfunktion. SPIKES: K = Knowledge + S = Strategy. Du kannst den Ablauf erklären.",
              feedbackB1:
                "Das war nicht gut! Du gibst alles an die Ärztin ab. Aber Pflege darf und soll den Ablauf erklären. Mehmet hat Angst — er will wissen, was passiert. Erkläre ihm die nächsten Schritte.",
            },
            {
              text: "Machen Sie sich keine Sorgen um die Tabletten. Erstmal gucken die Ärzte sich das an.",
              textB1: "Keine Sorge wegen Tabletten. Erstmal schauen die Ärzte.",
              patientResponse:
                "Keine Sorgen... leicht gesagt. Mein Onkel hat auch Tabletten genommen, und geholfen hat es trotzdem nicht.",
              patientResponseB1:
                "Keine Sorgen... Das sagt sich leicht. Meinem Onkel haben die Tabletten auch nicht geholfen.",
              score: 2,
              feedback:
                "Wieder 'Keine Sorgen' — Killerphrase! Mehmet hat eine konkrete Frage und du beantwortest sie nicht. Er hat ein Recht auf Information (§630e BGB). Erkläre den Ablauf!",
              feedbackB1:
                "'Keine Sorge' — wieder eine Killerphrase! Mehmet hat gefragt: 'Was passiert jetzt?' Beantworte die Frage! Erkläre: Was wird untersucht? Was kommt danach? So nimmst du ihm die Angst — mit Information, nicht mit leeren Worten.",
            },
          ],
        },
        // ═══ Phase 8: Gespräch abrunden — Zusammenfassung & Vertrauensaufbau ═══
        {
          context:
            "Danke, dass Sie mir zuhören. Beim Hausarzt... da hatte ich das Gefühl, der tippt nur in den Computer. Hier ist es anders. Sie sind die Erste, die wirklich fragt, wie es mir geht.",
          contextB1:
            "Danke, dass Sie mir zuhören. Beim Hausarzt hat keiner richtig zugehört. Der hat nur am Computer getippt. Hier ist es anders. Sie sind die Erste, die mich wirklich fragt, wie es mir geht.",
          speaker: "Mehmet",
          options: [
            {
              text: "Das freut mich, Herr Demir. Ich fasse mal zusammen, was ich gehört habe: Sie haben seit drei Monaten morgens steife Finger, über eine Stunde lang. Das schränkt Ihren Alltag stark ein. Und Sie machen sich große Sorgen — um Ihren Beruf und Ihre Familie. Wir kümmern uns jetzt gemeinsam darum. Sie sind hier richtig.",
              textB1: "Das freut mich, Herr Demir. Ich wiederhole, was ich gehört habe: Seit drei Monaten sind morgens Ihre Finger steif. Über eine Stunde lang. Das macht Ihnen den Alltag schwer. Und Sie haben Angst — um Ihren Beruf und Ihre Familie. Wir kümmern uns jetzt zusammen darum. Sie sind hier richtig.",
              patientResponse:
                "Ja... genau das ist es. Danke. Wirklich. Es tut gut, dass jemand zuhört. Okay, dann lassen wir mal schauen, was da los ist mit meinen Händen.",
              patientResponseB1:
                "Ja, genau. Danke. Wirklich danke. Es tut gut, dass jemand zuhört. Okay, dann schauen wir mal, was mit meinen Händen ist.",
              score: 3,
              feedback:
                "4 Techniken: OARS Summarizing (Symptome + Ängste + Alltag), NURSE Supporting, Carl Rogers (Wertschätzung), SPIKES Strategy. Du hast einen Menschen erreicht.",
              feedbackB1:
                "Perfekt! Du hast alles zusammengefasst: Die Symptome, die Ängste, den Alltag. Und du sagst: 'Wir kümmern uns zusammen.' Mehmet fühlt sich gehört. Das ist gute Pflege.",
            },
            {
              text: "Gut, dann leite ich das alles an die Ärztin weiter. Sie kümmert sich gleich um Sie.",
              textB1: "Okay, ich sage der Ärztin Bescheid. Sie kümmert sich dann um Sie.",
              patientResponse:
                "Ah... okay. Also war das jetzt das Gespräch? Na ja, danke trotzdem.",
              patientResponseB1:
                "Oh, okay. War das jetzt alles? Na ja, danke trotzdem.",
              score: 1,
              feedback:
                "Zu abrupt! 'Die Ärztin kümmert sich' = Killerphrase. Ein Gespräch braucht aktiven Abschluss: OARS Summarizing + NURSE Supporting. Mehmet muss spüren: Mir wurde zugehört.",
              feedbackB1:
                "Zu kurz! Mehmet dankt dir — und du gibst ihn einfach an die Ärztin weiter. Das ist schlecht. Ein gutes Gespräch braucht einen guten Abschluss: Zusammenfassen, was du gehört hast. Sagen, was als Nächstes passiert. Dann fühlt sich Mehmet gehört.",
            },
            {
              text: "Gerne! Das war ein gutes Gespräch. Soll ich Ihnen noch ein Glas Wasser bringen? Und wenn Sie Fragen haben — ich bin nebenan.",
              textB1: "Gerne! Soll ich Ihnen ein Glas Wasser bringen? Wenn Sie Fragen haben — ich bin nebenan.",
              patientResponse:
                "Ja, gerne. Danke, das ist nett. Äh... eine Frage noch — wie lange dauert das mit der Untersuchung?",
              patientResponseB1:
                "Ja, gerne. Danke. Eine Frage noch — wie lange dauert die Untersuchung?",
              score: 2,
              feedback:
                "Fürsorglich, aber es fehlt die Zusammenfassung! Mehmet hat seine größte Angst anvertraut. NURSE: R = Respecting + OARS: Summarizing. Abschluss zeigt: Ich habe zugehört und verstanden.",
              feedbackB1:
                "Nett — Wasser anbieten ist gut. Aber es fehlt die Zusammenfassung! Mehmet hat dir seine Angst erzählt. Fasse zusammen, was du gehört hast. Zeig ihm: Ich habe wirklich zugehört.",
            },
          ],
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 5-7: CHALLENGE — Brilliant-Prinzip: Fragen VOR Erklärung
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-03-brilliant-mc",
    lernziel: "ce05-le03-ra-definition",
    phase: 2,
    stepType: "mc",
    modus: "challenge",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    xpValue: 15,
    contentC1: {
      title: "Was glaubst du?",
      body: "Ein 43-jähriger Fliesenleger mit symmetrischen Gelenkschwellungen und Morgensteifigkeit über 60 Minuten. Was hat er wahrscheinlich?",
      fallbezug: "Mehmet hat seit 3 Monaten Probleme mit beiden Händen.",
      glossarBegriffe: ["Morgensteifigkeit"],
    },
    contentB1: {
      title: "Was hat Mehmet?",
      body: "Mehmet ist 43 Jahre alt. Beide Hände sind geschwollen. Morgens sind sie über 60 Minuten steif. Was hat er wahrscheinlich?",
    },
    question: {
      fragetext:
        "Was glaubst du — welche Erkrankung hat Mehmet wahrscheinlich?",
      optionen: [
        {
          text: "Gicht — durch zu viel Fleisch und Bier",
          isCorrect: false,
          explanation:
            "Gicht betrifft typischerweise EIN Gelenk (Großzehe), nicht symmetrisch beide Hände.",
        },
        {
          text: "Arthrose — Verschleiß durch schwere Arbeit",
          isCorrect: false,
          explanation:
            "Verständlich gedacht! Aber Arthrose verursacht keine Morgensteifigkeit über 60 Minuten.",
        },
        {
          text: "Rheumatoide Arthritis — eine Autoimmunerkrankung",
          isCorrect: true,
          explanation:
            "Richtig! Symmetrische Schwellung + Morgensteifigkeit >60 Min = typisch für RA.",
        },
        {
          text: "Überlastung — er hat einfach zu viel gearbeitet",
          isCorrect: false,
          explanation:
            "Das denkt Mehmet auch! Aber Überlastung erklärt nicht die symmetrische Schwellung BEIDER Hände.",
        },
      ],
    },
  },

  {
    stepId: "s1-04-brilliant-confidence",
    lernziel: "ce05-le03-ra-definition",
    phase: 2,
    stepType: "confidence",
    modus: "challenge",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    xpValue: 10,
    contentC1: {
      title: "Stimmt das?",
      body: "Zwei Aussagen über RA. Stimmen sie?",
    },
    contentB1: {
      title: "Wahr oder Falsch?",
      body: "Zwei Aussagen über RA. Stimmen sie?",
    },
    question: {
      fragetext: "Wahr oder Falsch?",
      confidenceCards: [
        {
          statement: "Rheuma bekommen nur ältere Frauen",
          isTrue: false,
          explanation:
            "Falsch! RA kann Männer und Frauen in jedem Alter treffen. Mehmet ist 43 und männlich.",
        },
        {
          statement: "Bei RA sind beide Körperseiten gleich betroffen",
          isTrue: true,
          explanation:
            "Richtig! Symmetrischer Befall ist typisch für RA — beide Hände, nicht nur eine.",
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 7-10: ENTDECKER — Info-Karten (Antworten auf die Fragen!)
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-05-entdecker-grundlagen",
    lernziel: "ce05-le03-ra-definition",
    phase: 2,
    stepType: "text",
    modus: "entdecker",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3"],
    xpValue: 5,
    contentC1: {
      title: "Rheumatoide Arthritis — die Grundlagen",
      body: "Die Rheumatoide Arthritis (RA) ist die häufigste chronisch-entzündliche Gelenkerkrankung. Sie gehört zum rheumatischen Formenkreis — einer Gruppe von über 400 Erkrankungen des Bewegungsapparats.\n\nDas Besondere an RA: Es ist eine Autoimmunerkrankung. Das Immunsystem greift körpereigenes Gewebe an — die Gelenkinnenhaut (Synovialmembran).\n\nDie Folge: Dauerhafte Entzündung, Schwellung, Schmerzen. Ohne Behandlung zerstört die Entzündung das Gelenk.",
      glossarBegriffe: [
        "Rheumatoide Arthritis",
        "Autoimmunerkrankung",
        "Synovialmembran",
        "Formenkreis",
      ],
    },
    contentB1: {
      title: "Was ist Rheumatoide Arthritis?",
      body: "Rheumatoide Arthritis (kurz: RA) ist eine Krankheit der Gelenke. Die Gelenke sind dauerhaft entzündet.\n\nRA ist eine Autoimmunerkrankung. Das heißt: Das Immunsystem macht einen Fehler. Es greift die eigenen Gelenke an.\n\nRA gehört zum rheumatischen Formenkreis. Das sind über 400 verschiedene Krankheiten.",
      glossarBegriffe: [
        "Rheumatoide Arthritis",
        "Autoimmunerkrankung",
        "Synovialmembran",
      ],
    },
  },

  {
    stepId: "s1-06-entdecker-zahlen",
    lernziel: "ce05-le03-ra-definition",
    phase: 2,
    stepType: "text",
    modus: "entdecker",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    xpValue: 5,
    wusstestDuDas: "Weltweit hat jeder 100. Mensch RA — das sind mehr Menschen als in ganz Hamburg leben.",
    contentC1: {
      title: "Zahlen und Fakten",
      body: "RA betrifft ca. 0,5-1% der Bevölkerung — in Deutschland etwa 550.000 Menschen.\n\nFrauen erkranken 2-3 Mal häufiger als Männer.\n\nDer Erkrankungsgipfel liegt zwischen dem 50. und 70. Lebensjahr. ABER: RA kann in jedem Alter auftreten. Mehmet ist 43 — kein typischer Patient, aber auch nicht ungewöhnlich.",
      fallbezug:
        "Mehmet bricht ein Vorurteil: RA trifft nicht nur ältere Frauen.",
    },
    contentB1: {
      title: "Wie häufig ist RA?",
      body: "Etwa 1 von 100 Menschen hat RA. In Deutschland sind das über 500.000 Menschen.\n\nFrauen bekommen RA 2 bis 3 Mal öfter als Männer.\n\nDie meisten Menschen erkranken zwischen 50 und 70 Jahren. ABER: Auch jüngere Menschen können RA bekommen.",
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 10-13: CHALLENGE — Verständnisfragen (Timer + Streak)
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-07-challenge-truefalse",
    lernziel: "ce05-le03-ra-definition",
    phase: 3,
    stepType: "truefalse",
    modus: "challenge",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3"],
    xpValue: 10,
    contentC1: {
      title: "Wahr oder Falsch?",
      body: "4 Aussagen zu RA und dem rheumatischen Formenkreis. Was stimmt?",
    },
    question: {
      fragetext: "Entscheide: Wahr oder Falsch?",
      trueFalseCards: [
        {
          statement: "RA gehört zum rheumatischen Formenkreis",
          isTrue: true,
          explanation:
            "Richtig! Der Formenkreis umfasst über 400 Erkrankungen, RA ist die häufigste entzündliche.",
        },
        {
          statement:
            "Bei RA greift das Immunsystem fremde Krankheitserreger an",
          isTrue: false,
          explanation:
            "Falsch! Bei RA greift das Immunsystem EIGENES Gewebe an — die Gelenkinnenhaut.",
        },
        {
          statement: "RA betrifft etwa 0,5-1% der Bevölkerung",
          isTrue: true,
          explanation: "Richtig! In Deutschland sind das über 500.000 Menschen.",
        },
        {
          statement: "Männer erkranken häufiger an RA als Frauen",
          isTrue: false,
          explanation:
            "Falsch! Frauen sind 2-3x häufiger betroffen. Aber Männer wie Mehmet können auch erkranken.",
        },
      ],
    },
  },

  {
    stepId: "s1-08-challenge-timer",
    lernziel: "ce05-le03-ra-definition",
    phase: 3,
    stepType: "timer",
    modus: "challenge",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    xpValue: 20,
    contentC1: {
      title: "Speed-Round!",
      body: "5 Fragen, 15 Sekunden pro Frage.",
    },
    question: {
      fragetext: "5 Fragen — 15 Sekunden pro Frage:",
      timeLimitSeconds: 15,
      timerQuestions: [
        {
          question: "Wie viel Prozent der Bevölkerung hat RA?",
          options: ["0,01%", "0,5-1%", "5-10%", "20%"],
          correctIndex: 1,
        },
        {
          question: "Wer ist HÄUFIGER von RA betroffen?",
          options: ["Männer", "Frauen", "Kinder", "Gleich häufig"],
          correctIndex: 1,
        },
        {
          question: "Was bedeutet 'Autoimmun'?",
          options: [
            "Ansteckend",
            "Immunsystem greift eigenes Gewebe an",
            "Durch Bakterien verursacht",
            "Nur bei alten Menschen",
          ],
          correctIndex: 1,
        },
        {
          question: "Was ist die Synovialmembran?",
          options: [
            "Ein Muskel",
            "Die Gelenkinnenhaut",
            "Ein Knochen",
            "Eine Sehne",
          ],
          correctIndex: 1,
        },
        {
          question: "Morgensteifigkeit >60 Min: RA oder Arthrose?",
          options: ["RA", "Arthrose", "Beide", "Keine"],
          correctIndex: 0,
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 13-16: PUZZLE — Begriffe spielerisch festigen
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-09-puzzle-memory",
    lernziel: "ce05-le03-ra-definition",
    phase: 3,
    stepType: "memory",
    modus: "puzzle",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3"],
    xpValue: 15,
    contentC1: {
      title: "Memory — Finde die Paare",
      body: "6 Fachbegriffe und ihre Bedeutung.",
    },
    question: {
      fragetext: "Finde die 6 Paare:",
      memoryPairs: [
        { a: "RA", b: "Autoimmunerkrankung" },
        { a: "Arthrose", b: "Verschleiß" },
        { a: "Synovialmembran", b: "Gelenkinnenhaut" },
        { a: "Chronisch", b: "Lebenslang" },
        { a: "MCP", b: "Fingergrundgelenke" },
        { a: "Symmetrisch", b: "Beide Seiten" },
      ],
    },
  },

  {
    stepId: "s1-10-puzzle-fillin",
    lernziel: "ce05-le03-ra-definition",
    phase: 3,
    stepType: "fillin",
    modus: "puzzle",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    xpValue: 10,
    contentC1: {
      title: "Setze den richtigen Begriff ein",
      body: "Die Rheumatoide Arthritis ist eine chronisch-entzündliche ____.",
    },
    question: {
      fragetext: "Welcher Begriff passt in die Lücke?",
      fillin: {
        sentence: "Die Rheumatoide Arthritis ist eine chronisch-entzündliche ____.",
        options: ["Autoimmunerkrankung", "Infektionskrankheit", "Allergie", "Verletzung"],
        correctIndex: 0,
      },
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 16-19: STORY — Zurück zum Leitfall (neues Problem)
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-11-story-untersuchung",
    lernziel: "ce05-le03-kommunikation",
    phase: 3,
    stepType: "dialog",
    modus: "story",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q2"],
    xpValue: 15,
    contentC1: {
      title: "Die Untersuchung",
      body: "Die Ärztin untersucht Mehmets Hände. Die MCP-Gelenke II-IV sind beidseits geschwollen und druckschmerzhaft.",
      fallbezug:
        "Mehmet zuckt zusammen als die Ärztin seine Fingergrundgelenke abtastet.",
      glossarBegriffe: ["Symmetrisch"],
    },
    contentB1: {
      title: "Beim Arzt",
      body: "Die Ärztin schaut sich Mehmets Hände an. Die Fingergelenke sind auf beiden Seiten geschwollen.",
    },
    question: {
      patientName: "Mehmet Demir",
      fragetext: "Die Ärztin untersucht Mehmets Hände.",
      dialogPhases: [
        {
          context:
            "Mehmet sagt leise: 'Morgens kann ich nicht mal die Zahnbürste halten. Meine Tochter Elif schmiert mir jetzt das Brot. Sie ist 11.'",
          vitals:
            "Befund: MCP II-IV bds. geschwollen, Griffkraft reduziert, Morgensteifigkeit >60 Min",
          options: [
            {
              text: "Das klingt belastend. Die Schwellung ist auf beiden Seiten gleich — das ist ein wichtiger Hinweis.",
              patientResponse:
                "Auf beiden Seiten? Ja stimmt, links und rechts. Ist das schlimm?",
              score: 3,
              feedback:
                "Gut! Du zeigst Empathie und erklärst fachlich korrekt. Symmetrischer Befall ist typisch für RA.",
            },
            {
              text: "Das wird schon wieder. Warten wir die Blutuntersuchung ab.",
              patientResponse: "Ja... hoffentlich.",
              score: 1,
              feedback:
                "Zu unverbindlich. Der Patient braucht Informationen, nicht nur Vertröstung.",
            },
          ],
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 19-22: ENTDECKER — Vertiefung: Definition + RA vs. Arthrose
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-12-entdecker-definition",
    lernziel: "ce05-le03-ra-definition",
    phase: 3,
    stepType: "text",
    modus: "entdecker",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    xpValue: 5,
    contentC1: {
      title: "Die Definition Schritt für Schritt",
      body: "RA ist definiert als chronische, systemische Autoimmunerkrankung der Synovialmembran.\n\nChronisch: Nicht heilbar, aber behandelbar. Der Verlauf ist lebenslang und schubförmig.\n\nSystemisch: RA kann neben Gelenken auch Organe befallen — Lunge, Herz, Augen, Gefäße.\n\nSymmetrisch: RA befällt meist die gleichen Gelenke auf beiden Körperseiten.",
      glossarBegriffe: ["Chronisch", "Symmetrisch"],
    },
    contentB1: {
      title: "Was bedeutet die Diagnose?",
      body: "Chronisch: Die Krankheit bleibt ein Leben lang. Man kann sie behandeln, aber nicht heilen.\n\nSystemisch: Nicht nur die Gelenke sind betroffen. Auch Lunge, Herz oder Augen können Probleme bekommen.\n\nSymmetrisch: Die gleichen Gelenke auf BEIDEN Seiten sind betroffen.",
    },
  },

  {
    stepId: "s1-13-entdecker-vergleich",
    lernziel: "ce05-le03-ra-definition",
    phase: 3,
    stepType: "text",
    modus: "entdecker",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3"],
    xpValue: 5,
    wusstestDuDas: "Arthrose ist die häufigste Gelenkerkrankung weltweit — aber RA ist die häufigste ENTZÜNDLICHE Gelenkerkrankung.",
    contentC1: {
      title: "RA vs. Arthrose — der wichtige Unterschied",
      body: "RA und Arthrose werden oft verwechselt. Aber sie sind grundverschieden:\n\nRA: Ursache ist Autoimmun (Entzündung). Morgensteifigkeit >30 Min. Symmetrischer Befall. Jedes Alter. Kleine Gelenke zuerst.\n\nArthrose: Ursache ist Verschleiß (Degeneration). Anlaufschmerz <30 Min. Oft einseitig. Eher älter. Große Gelenke (Knie, Hüfte).",
      glossarBegriffe: ["Morgensteifigkeit"],
    },
    contentB1: {
      title: "RA und Arthrose — was ist der Unterschied?",
      body: "RA: Entzündung. Das Immunsystem greift die Gelenke an. Morgens sind die Gelenke lange steif (mehr als 30 Minuten).\n\nArthrose: Verschleiß. Der Knorpel ist abgenutzt. Der Schmerz kommt beim Aufstehen und geht schnell weg (weniger als 30 Minuten).",
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 22-25: SORTIERSTATION — RA oder Arthrose kategorisieren
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-14-sortier-kategorien",
    lernziel: "ce05-le03-ra-definition",
    phase: 4,
    stepType: "categorize",
    modus: "sortierstation",
    bloomLevel: 3,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q3"],
    xpValue: 15,
    contentC1: {
      title: "Sortiere: RA oder Arthrose?",
      body: "8 Merkmale — welche gehören zu RA, welche zu Arthrose?",
    },
    question: {
      fragetext: "Welches Merkmal gehört zu RA, welches zu Arthrose?",
      categories: [{ name: "Rheumatoide Arthritis" }, { name: "Arthrose" }],
      categoryItems: [
        { text: "Morgensteifigkeit >60 Minuten", correctCategory: 0 },
        { text: "Anlaufschmerz <30 Minuten", correctCategory: 1 },
        { text: "Symmetrischer Befall", correctCategory: 0 },
        { text: "Oft einseitig", correctCategory: 1 },
        { text: "Autoimmunerkrankung", correctCategory: 0 },
        { text: "Verschleiß/Degeneration", correctCategory: 1 },
        { text: "Systemisch (auch Organe)", correctCategory: 0 },
        { text: "Vor allem große Gelenke", correctCategory: 1 },
      ],
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 22-25 (cont): PUZZLE — Begriffe zuordnen
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-15-puzzle-matching",
    lernziel: "ce05-le03-ra-definition",
    phase: 4,
    stepType: "matching",
    modus: "puzzle",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1"],
    xpValue: 10,
    contentC1: {
      title: "Ordne die Begriffe zu",
      body: "5 Schlüsselbegriffe der RA-Definition.",
    },
    question: {
      fragetext: "Ordne die Begriffe der richtigen Erklärung zu:",
      matchingPairs: [
        { left: "Chronisch", right: "Nicht heilbar, aber behandelbar" },
        { left: "Systemisch", right: "Kann auch Organe befallen" },
        { left: "Symmetrisch", right: "Beide Körperseiten betroffen" },
        {
          left: "Autoimmun",
          right: "Immunsystem greift eigenes Gewebe an",
        },
        { left: "Synovialmembran", right: "Gelenkinnenhaut" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 25 (cont): STORY — Mehmet erklärt Elif
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-16-story-elif",
    lernziel: "ce05-le03-kommunikation",
    phase: 4,
    stepType: "dialog",
    modus: "story",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.2",
    quellen: [],
    xpValue: 15,
    contentC1: {
      title: "Zuhause am Telefon",
      body: "Mehmet erzählt seiner Tochter Elif am Telefon von seinem Arztbesuch.",
      fallbezug:
        "Elif ist 14 und macht sich Sorgen. Ihre Oma hat Arthrose im Knie.",
    },
    contentB1: {
      title: "Mehmet telefoniert mit seiner Tochter",
      body: "Mehmet ruft seine Tochter Elif an. Sie ist 14 Jahre alt. Ihre Oma hat Arthrose.",
    },
    question: {
      patientName: "Mehmet Demir",
      fragetext: "Elif fragt: 'Papa, ist das wie bei Oma?'",
      dialogPhases: [
        {
          context:
            "Mehmet: 'Der Arzt sagt ich hab eine Entzündung in den Gelenken. Mein Körper greift sich selbst an.' Elif: 'Ist das wie Arthrose? Oma hat das doch auch im Knie.'",
          options: [
            {
              text: "Helfe Mehmet erklären: 'Bei dir ist es eine Entzündung — dein Immunsystem macht einen Fehler. Bei Oma ist es Verschleiß.'",
              patientResponse:
                "Aha, also was anderes. Aber beides tut weh, oder Papa?",
              score: 3,
              feedback:
                "Perfekt! Du hilfst den Unterschied verständlich zu erklären.",
            },
            {
              text: "Sage: 'Nein Elif, das ist etwas ganz anderes. Das ist viel schlimmer als Arthrose.'",
              patientResponse: "Was?! Papa, geht es dir sehr schlecht?!",
              score: 1,
              feedback:
                "Zu dramatisch. RA ist ernst, aber 'viel schlimmer' macht unnötig Angst.",
            },
          ],
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 25-27: PUZZLE — Kreuzworträtsel
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-17-puzzle-crossword",
    lernziel: "ce05-le03-ra-definition",
    phase: 4,
    stepType: "crossword",
    modus: "puzzle",
    bloomLevel: 1,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3"],
    xpValue: 15,
    contentC1: {
      title: "Kreuzworträtsel — Teste dein Wissen",
      body: "6 Begriffe rund um RA und Gelenkerkrankungen.",
    },
    question: {
      fragetext: "Finde die 6 Begriffe:",
      crosswordWords: [
        {
          word: "AUTOIMMUN",
          clue: "Das Immunsystem greift den eigenen Körper an",
        },
        {
          word: "SYNOVIAL",
          clue: "Die ____membran ist die Gelenkinnenhaut",
        },
        { word: "CHRONISCH", clue: "Dauerhaft, nicht heilbar" },
        { word: "SYMMETRISCH", clue: "Beide Körperseiten gleich betroffen" },
        {
          word: "FORMENKREIS",
          clue: "Der rheumatische ____ umfasst über 400 Erkrankungen",
        },
        {
          word: "ARTHROSE",
          clue: "Gelenkerkrankung durch Verschleiß (Gegenteil von RA)",
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 25-27: SCHREIBTISCH — Offene Frage (Bloom 2)
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-18-schreibtisch-freetext",
    lernziel: "ce05-le03-ra-definition",
    phase: 5,
    stepType: "freetext",
    modus: "schreibtisch",
    bloomLevel: 2,
    kompetenzbereich: "KB-II.2",
    quellen: ["Q1"],
    xpValue: 20,
    contentC1: {
      title: "Erkläre es Mehmet",
      body: "Mehmet hat gerade die Verdachtsdiagnose RA erhalten. Er versteht nicht, warum sein eigener Körper seine Gelenke angreift.",
      fallbezug:
        "Mehmet fragt: 'Was heißt das — mein Immunsystem greift mich selbst an?'",
    },
    contentB1: {
      title: "Erkläre Mehmet seine Krankheit",
      body: "Mehmet fragt: 'Was heißt das? Mein Körper greift sich selbst an?'",
    },
    question: {
      fragetext:
        "Erkläre Mehmet in einfachen Worten, was eine Autoimmunerkrankung ist.",
      musterantwort:
        "Normalerweise schützt das Immunsystem den Körper vor Krankheitserregern. Bei einer Autoimmunerkrankung macht das Immunsystem einen Fehler: Es verwechselt eigenes Gewebe mit einem Feind. Bei RA greift es die Gelenkinnenhaut an.",
      bewertungskriterien: [
        "Erklärung der normalen Immunfunktion als Vergleich",
        "Verwechslung eigen/fremd als Kernkonzept benannt",
        "Bezug auf Gelenke oder Gelenkinnenhaut hergestellt",
      ],
      satzanfaengeB1: [
        "Das Immunsystem schützt normalerweise...",
        "Bei Rheuma passiert ein Fehler...",
        "Der Körper greift die Gelenke an, weil...",
      ],
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 27-29: CHALLENGE — Speed-Review der ganzen Session
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-19-challenge-review",
    lernziel: "ce05-le03-ra-definition",
    phase: 5,
    stepType: "timer",
    modus: "challenge",
    bloomLevel: 2,
    kompetenzbereich: "KB-I.1",
    quellen: ["Q1", "Q3"],
    xpValue: 20,
    contentC1: {
      title: "Final Speed-Review!",
      body: "5 Fragen, 15 Sekunden pro Frage.",
    },
    question: {
      fragetext: "5 Fragen — 15 Sekunden pro Frage:",
      timeLimitSeconds: 15,
      timerQuestions: [
        {
          question: "Was bedeutet 'chronisch'?",
          options: [
            "Ansteckend",
            "Nicht heilbar, aber behandelbar",
            "Nur bei alten Menschen",
            "Immer tödlich",
          ],
          correctIndex: 1,
        },
        {
          question: "Welche Gelenke sind bei RA ZUERST betroffen?",
          options: [
            "Kniegelenke",
            "Hüftgelenke",
            "Kleine Handgelenke (MCP/PIP)",
            "Schultergelenke",
          ],
          correctIndex: 2,
        },
        {
          question: "Was ist der HAUPTUNTERSCHIED zwischen RA und Arthrose?",
          options: [
            "RA ist schlimmer",
            "Entzündung vs. Verschleiß",
            "RA betrifft nur Hände",
            "Arthrose ist heilbar",
          ],
          correctIndex: 1,
        },
        {
          question: "Was ist die Synovialmembran?",
          options: [
            "Ein Muskel",
            "Ein Knochen",
            "Die Gelenkinnenhaut",
            "Ein Nerv",
          ],
          correctIndex: 2,
        },
        {
          question: "RA kann auch Organe befallen. Das nennt man...",
          options: ["chronisch", "systemisch", "symmetrisch", "akut"],
          correctIndex: 1,
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════
  // Min 29-30: CHECKPOINT — Zusammenfassung + Bloom-Profil
  // ═══════════════════════════════════════════════════
  {
    stepId: "s1-20-checkpoint-summary",
    lernziel: "ce05-le03-ra-definition",
    phase: 6,
    stepType: "summary",
    modus: "checkpoint",
    bloomLevel: 1,
    kompetenzbereich: "KB-V.1",
    quellen: [],
    xpValue: 10,
    contentC1: {
      title: "Session 1 — Das hast du gelernt",
      body: "Session 1 abgeschlossen: Was ist RA? Session 2: Warum bekommt man RA?",
    },
    contentB1: {
      title: "Geschafft! Das hast du gelernt",
      body: "Du weißt jetzt, was RA ist. In der nächsten Session lernst du: Warum bekommt man RA?",
    },
    question: {
      fragetext: "Zusammenfassung",
      summary: {
        reflexionRueckbezug: "Du kannst jetzt erklären, was RA ist und wie sie sich von Arthrose unterscheidet.",
        kernaussagen: [
          "RA ist eine Autoimmunerkrankung — das Immunsystem greift die Gelenkinnenhaut an",
          "RA ist chronisch (lebenslang) und systemisch (kann auch Organe befallen)",
          "Typisch: Symmetrischer Befall der kleinen Handgelenke",
          "RA ist NICHT Arthrose — Entzündung vs. Verschleiß",
          "RA kann jeden treffen — nicht nur ältere Frauen",
        ],
      },
    },
  },
];

export const GLOSSAR: GlossarEntry[] = [
  {
    begriff: "Rheumatoide Arthritis",
    erklaerung:
      "Häufigste chronisch-entzündliche Autoimmunerkrankung der Gelenke mit symmetrischem Befall kleiner Gelenke",
  },
  {
    begriff: "Autoimmunerkrankung",
    erklaerung:
      "Erkrankung, bei der das Immunsystem körpereigenes Gewebe als fremd erkennt und angreift",
  },
  {
    begriff: "Synovialmembran",
    erklaerung:
      "Innere Schicht der Gelenkkapsel, die Synovialflüssigkeit produziert und das Gelenk schmiert",
  },
  {
    begriff: "Chronisch",
    erklaerung:
      "Langandauernd, nicht heilbar aber behandelbar. Gegenteil von akut.",
  },
  {
    begriff: "Symmetrisch",
    erklaerung:
      "Beide Körperseiten gleich betroffen, z.B. beide Hände.",
  },
  {
    begriff: "Morgensteifigkeit",
    erklaerung:
      "Steifigkeit der Gelenke nach dem Aufwachen. Bei RA typischerweise >30 Minuten.",
  },
];

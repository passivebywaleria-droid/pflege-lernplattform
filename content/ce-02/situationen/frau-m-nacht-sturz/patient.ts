// CE-02 Situation Frau M. — Patientenbeschreibung
// Quelle: content/ce-02/situationen/frau-m-nacht-sturz/patient-plan.md
// Pipeline v9 — 2026-04-22

import type { PatientBeschreibung } from "../../../_types";

export const CE02_SIT_FRAU_M_NACHT_STURZ_PATIENT: PatientBeschreibung = {
  patientId: "pat-frau-m",
  name: "Marianne M.",
  alter: 82,
  geschlecht: "w",
  diagnosen: [
    "Ambulant erworbene Pneumonie rechts unten (Aufnahmegrund)",
    "Morbus Parkinson, Hoehn & Yahr Stadium II",
    "Arterielle Hypertonie",
    "Osteoporose (T-Wert -3,1)",
    "Leichte Katarakt beidseits",
  ],
  nebendiagnosen: ["Post-Fall-Angst seit nächtlichem Sturz"],
  setting:
    "Krankenhaus, internistische Station (Pneumologie), 2-Bett-Zimmer, Nachtschicht",
  hintergrund:
    "Marianne M. wurde 1943 in Dresden geboren. Ihre früheste Kindheitserinnerung ist der Feuersturm. Nach der Flucht wuchs sie in Göttingen auf, machte Abitur und wurde Grundschullehrerin — 38 Jahre Schuldienst, zuletzt stellvertretende Schulleiterin. Seit dem Tod ihres Mannes Richard vor 6 Jahren lebt sie allein in einer 2-Zimmer-Wohnung (EG, mit Aufzug). Sie hat sich ein Leben organisiert: Kaffeerunde donnerstags, Kirchenchor, zwei Enkel, die sie mittwochs vom Sport abholt. Ihre Tochter Birgit (56) wohnt 40 km entfernt und besucht sonntags. Pflegegrad 1, Alltagshilfe 2× pro Woche. Heute ist Tag 3 des stationären Aufenthalts wegen Pneumonie.",
  hintergrundB1:
    "Marianne M. wurde 1943 in Dresden geboren. Sie ist in Göttingen aufgewachsen und war 38 Jahre Grundschullehrerin. Ihr Mann ist vor 6 Jahren gestorben. Sie lebt allein in einer 2-Zimmer-Wohnung mit Aufzug. Ihre Tochter Birgit wohnt 40 km weit weg und besucht sonntags. Sie hat zwei Enkel und holt sie mittwochs vom Sport ab. Sie hat Pflegegrad 1. Heute ist Tag 3 im Krankenhaus wegen einer Lungenentzündung.",
  persoenlichkeit:
    "Präzise, formell, gewählte Sprache. Siezt das Personal konsequent, bedankt sich für jeden Handgriff. Ordnet Dinge gerne, liest die Zeitung komplett durch. Wenn sie nervös ist, faltet sie die Hände im Schoß. Zentrales emotionales Thema jetzt: Kontrolle. Nach dem Sturz fühlt sie sich zum ersten Mal wirklich alt. Angst vor Pflegeheim, Angst der Tochter zur Last zu fallen, Angst vor einem erneuten Sturz. Sprachlich Hochdeutsch, differenziert. Versteht medizinische Begriffe wie Pneumonie und Osteoporose, fragt bei Fachwörtern wie Orthostase oder Compliance nach. Wichtig didaktisch: Sie spielt Beschwerden herunter, will 'keine Umstände machen'. Pflegekraft muss aktiv nachfragen.",
  zitate: [
    "Es tut mir furchtbar leid, dass ich Sie jetzt um diese Zeit in Anspruch nehmen muss. Ich wollte nur kurz auf die Toilette. Ich weiß wirklich nicht, wie das passieren konnte.",
    "Ja, die Tablette — die neue, gegen das Schlafen. Ich habe sie gestern und vorgestern genommen. Ich muss sagen, ich fühle mich morgens ein bisschen … wie in Watte. Aber ich dachte, das gehört dazu.",
    "Zu Hause komme ich zurecht. Ich weiß, wo alles steht. Hier ist alles fremd, und das Bett ist so hoch. Ich bin sonst wirklich selbstständig, das müssen Sie mir glauben.",
    "Ich habe Angst, ehrlich gesagt. Nicht vor Ihnen, bitte verstehen Sie mich nicht falsch. Ich habe Angst, wieder aufzustehen. Wenn ich nochmal falle — was ist dann mit meiner Wohnung?",
    "Geben Sie mir einen Moment. Meine Beine fühlen sich an, als gehörten sie mir nicht ganz. Wenn ich kurz warte, wird es besser — das kenne ich so vom Parkinson, das ist normal.",
    "Wissen Sie, was mir heute geholfen hat? Dass Sie mir erklärt haben, warum ich gestürzt bin. Ich dachte, ich werde einfach nur alt. Aber es waren die Tabletten. Das kann man ändern. Das ist etwas anderes.",
  ],
};

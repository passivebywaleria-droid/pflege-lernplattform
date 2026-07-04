// CE-06 Situation „Herr Gruber — hypovolämischer Schock bei oberer GI-Blutung" — Patient
// SituationsTyp: akutsituation. Showcase LE2: Schockformen erkennen, Autotransfusionslage-FALLE
// (obere GI-Blutung = Ausnahme!), Material für venöse Zugänge/ZVK, Perfusor/Katecholamine nur auf
// Arztanordnung, Monitor/Intensiv-Kontext, Angehörigen-Coping.

import type { PatientBeschreibung } from "../../../_types";

export const CE06_SIT_GRUBER_PATIENT: PatientBeschreibung = {
  patientId: "pat-gruber-schock",
  name: "Herbert Gruber",
  alter: 69,
  geschlecht: "m",
  diagnosen: ["Verdacht auf obere gastrointestinale Blutung bei Ulcus ventriculi"],
  nebendiagnosen: [
    "Gonarthrose, Dauereinnahme von Ibuprofen (NSAR)",
    "arterielle Hypertonie",
    "früherer langjähriger Nikotinkonsum",
  ],
  setting: "Internistische Normalstation, Zimmer 12, 18:20 Uhr (Spätdienst), Abendessen läuft",
  hintergrund:
    "Herr Gruber war Schreiner, hat seine Werkstatt bis zur Rente selbst geführt. Wegen seiner Kniearthrose nimmt er seit Monaten fast täglich Ibuprofen. Seit drei Tagen hat er schwarzen, teerartigen Stuhl bemerkt — aus Scham hat er niemandem etwas gesagt und es auf 'das Essen' geschoben. Beim Abendessen erbricht er plötzlich kaffeesatzartiges, teils frisches Blut. Seine Frau Renate sitzt am Bett und erstarrt beim Anblick des Bluts. Auf der Station ist Spätdienst, der diensthabende Arzt ist erreichbar, die nächste Intensiv-/IMC-Station im Haus.",
  hintergrundB1:
    "Herr Gruber war Schreiner. Wegen Schmerzen im Knie nimmt er seit Monaten fast täglich Ibuprofen. Seit drei Tagen hat er schwarzen Stuhl — aus Scham hat er nichts gesagt. Beim Abendessen erbricht er plötzlich Blut. Seine Frau Renate sitzt am Bett und erschrickt sehr. Es ist Spätdienst. Der Arzt ist erreichbar. Eine Intensivstation ist im Haus.",
  persoenlichkeit:
    "Zurückhaltend, stolz und ein wenig verschlossen — spielt Beschwerden herunter ('wird schon wieder') und schämt sich, Hilfe zu brauchen. Genau deshalb hat er den schwarzen Stuhl verschwiegen. In der Akutsituation wird er zunehmend unruhig, blass und benommen. Seine Frau Renate ist ängstlich und braucht selbst Halt und klare Informationen.",
  persoenlichkeitB1:
    "Er ist still und stolz. Er sagt oft 'wird schon wieder' und schämt sich, wenn er Hilfe braucht. Darum hat er den schwarzen Stuhl verschwiegen. Jetzt wird er unruhig, blass und müde. Seine Frau Renate hat große Angst.",
  zitate: [
    "Ist bestimmt nur der Magen, das gibt sich wieder.",
    "Machen Sie sich keine Umstände, Schwester.",
  ],
};

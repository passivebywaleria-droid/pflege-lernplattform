// CE-02 Situation Baby Emilia — Bronchiolitis, Kinderstation — Patientenbeschreibung
// Quelle: content/ce-02/situationen/ls-emilia-saeugling/patient-plan.md
// Pipeline v9 — 2026-04-23

import type { PatientBeschreibung } from "../../../_types";

export const CE02_SIT_EMILIA_SAEUGLING_PATIENT: PatientBeschreibung = {
  patientId: "pat-emilia-k",
  name: "Emilia K.",
  alter: 0.33, // 4 Monate
  geschlecht: "w",
  diagnosen: [
    "Bronchiolitis durch RSV (Respiratorisches Synzytial-Virus)",
    "Fieber 38,2 °C bei Aufnahme",
    "Trinkschwäche seit 48 Stunden",
  ],
  nebendiagnosen: [
    "Leichter Gewichtsverlust 200 g in 48 h (5,6 kg vs. Sollgewicht 5,8 kg)",
  ],
  setting:
    "Kinderstation, 2-Bett-Zimmer, Frühdienst — Tag 1 nach nächtlicher Aufnahme um 03:15 Uhr",
  hintergrund:
    "Emilia K. ist 4 Monate alt und wurde heute Nacht wegen Bronchiolitis durch RSV aufgenommen. Fieber 38,2 °C, Trinkschwäche seit 48 Stunden. Gewicht bei Aufnahme 5,6 kg (Sollgewicht ca. 5,8 kg — leichter Gewichtsverlust). Hautturgor noch erhalten, Fontanelle flach, in den letzten 12 Stunden nur 3 nasse Windeln statt der üblichen 5-6 pro Tag. Mutter Laura K. (24 Jahre, Erstgebärende, allein erziehend) ist ununterbrochen dabei. Sie stillt bisher vollständig. Bisher gesundes Kind, keine Vorerkrankungen.",
  hintergrundB1:
    "Emilia ist 4 Monate alt. Sie ist krank: Bronchiolitis (= Entzündung der kleinen Atemwege) durch RSV. Sie hat Fieber: 38,2 °C. Sie trinkt seit 2 Tagen weniger als normal. Heute wiegt sie 5,6 kg — sie sollte 5,8 kg wiegen. Ihre Mutter Laura ist immer dabei. Laura stillt Emilia. Emilia war bisher gesund.",
  persoenlichkeit:
    "Emilia liegt fast die ganze Zeit auf dem Arm der Mutter. Sie ist ruhig aber schläfrig — die Erschöpfung durch die Atemarbeit ist spürbar. Beim Trinken macht sie 3-4 Schlucke, lässt dann los, atmet, versucht wieder anzusetzen. Das zentrale Thema der Situation ist nicht Emilia selbst — sie ist stabil und kein akuter Notfall — sondern die Interaktion mit Mutter Laura: eine erschöpfte Erstmutter, die allein ist, sich Vorwürfe macht und sowohl fachliche Information als auch emotionale Unterstützung braucht.",
  zitate: [
    "Sie trinkt so wenig... Ist das normal? Ich mache mir solche Sorgen.",
    "Ich stille bisher komplett. Aber wenn sie nicht trinkt — soll ich aufhören? Ist meine Milch das Problem?",
    "Früher hat sie getrunken bis ich dachte, sie platzt. Jetzt lässt sie nach drei Schlucken wieder los.",
    "Darf ich das auch mal machen? Ich habe sie noch nie richtig gebadet — immer nur Katzenwäsche zuhause.",
    "Tut mir leid... ich weiß nicht was los ist mit mir. Ich bin einfach so müde. Und ich will das alles richtig machen für sie.",
    "Danke. Ich glaube ich hatte nicht gewusst, dass die Nase der Grund ist. Das klingt jetzt komisch, aber das beruhigt mich irgendwie.",
  ],
};

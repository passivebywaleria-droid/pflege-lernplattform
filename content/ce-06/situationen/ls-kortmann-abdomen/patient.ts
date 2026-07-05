// CE-06 Situation „Herr Kortmann — akutes Abdomen, Kolostoma & Drainagen (post-OP)" — Patient
// SituationsTyp: akutsituation. Showcase LE3: akutes Abdomen (W1), Ileo-/Kolostoma (W2), Drainagesysteme (W3),
// postop Überwachung/Schmerz/Mobilisation/Katheter (W4), postop Stoma-Versorgung (K1), Drainagen-Verbandwechsel (K2),
// Bedeutung von Information/Wissen für den akuterkrankten Menschen (E1).
// Dramaturgie: stabiler 2. postop Tag (Übernahme, Routineversorgung, Wissen) → Bauchdrainage zeigt Nachblutung
// (>200 ml/1 h) → Akutspur (alarmieren → erstmassnahmen → Re-OP-Übergabe → reflektieren).

import type { PatientBeschreibung } from "../../../_types";

export const CE06_SIT_KORTMANN_PATIENT: PatientBeschreibung = {
  patientId: "pat-kortmann-abdomen",
  name: "Werner Kortmann",
  alter: 72,
  geschlecht: "m",
  diagnosen: [
    "Zustand nach Notfall-Hartmann-Operation bei perforierter Sigmadivertikulitis (akutes Abdomen)",
  ],
  nebendiagnosen: [
    "endständiges Kolostoma im linken Unterbauch (temporär, nach Hartmann)",
    "intraabdominelle Zieldrainage (ohne Sog) + subkutane Redon-Drainage",
    "transurethraler Blasendauerkatheter",
    "arterielle Hypertonie",
    "Adipositas, bekannte Divertikulose",
  ],
  setting:
    "Chirurgische Station, Zimmer 8, 2. postoperativer Tag, 16:40 Uhr (Spätdienst). Herr Kortmann liegt seit der Not-OP im Bett, Drainagen und Blasenkatheter sind angeschlossen, das Stoma ist frisch angelegt.",
  hintergrund:
    "Herr Kortmann war Bauingenieur und hat sein Leben lang alles verstehen und planen wollen. Vor drei Tagen bekam er zu Hause plötzlich stärkste Bauchschmerzen mit hartem Bauch und Erbrechen — ein akutes Abdomen bei geplatzter Divertikelentzündung im Sigma. In der Nacht wurde notoperiert (Hartmann-OP): Der entzündete Darmabschnitt wurde entfernt und ein künstlicher Darmausgang (Kolostoma) am linken Unterbauch angelegt. Seitdem versucht er zu begreifen, was mit ihm passiert ist — der Beutel an seinem Bauch, die Schläuche, der Katheter. Am 2. Tag nach der OP übernimmst du ihn im Spätdienst.",
  hintergrundB1:
    "Herr Kortmann war Bauingenieur. Er will immer alles genau verstehen. Vor drei Tagen bekam er plötzlich starke Bauchschmerzen, einen harten Bauch und musste erbrechen — ein akutes Abdomen. Eine Divertikelentzündung im Darm war geplatzt. In der Nacht wurde er sofort operiert. Der kranke Darmteil wurde entfernt, und er hat jetzt einen künstlichen Darmausgang (Kolostoma) am Bauch. Er hat mehrere Schläuche (Drainagen) und einen Blasenkatheter. Heute ist der 2. Tag nach der OP. Du übernimmst ihn im Spätdienst.",
  persoenlichkeit:
    "Wach, höflich und sehr wissbegierig — er stellt viele Fragen und will genau verstehen, was die Geräte und der Beutel bedeuten. Weil er als Ingenieur gewohnt war, Dinge zu kontrollieren, verunsichert ihn das Nichtverstehen mehr als der Schmerz. Wenn er eine klare, verständliche Erklärung bekommt, wird er ruhiger. Seine Schmerzen spielt er eher herunter, um „kein Theater zu machen“.",
  persoenlichkeitB1:
    "Er ist wach, höflich und will alles verstehen. Er stellt viele Fragen zu den Geräten und dem Beutel. Das Nichtverstehen macht ihm mehr Angst als der Schmerz. Klare, einfache Erklärungen beruhigen ihn. Seine Schmerzen macht er kleiner, als sie sind.",
  zitate: [
    "Können Sie mir erklären, wofür dieser Schlauch da ist? Ich verstehe das alles nicht.",
    "Ein bisschen Bauchweh, das ist doch normal nach so einer Operation, oder?",
  ],
};

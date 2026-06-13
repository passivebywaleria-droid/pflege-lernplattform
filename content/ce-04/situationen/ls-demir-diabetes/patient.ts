// CE-04 Situation „Herr Demir — Diabetes-Diagnose und die Sprache" — Patient
// SituationsTyp: beratung. Showcase: kultursensible Kommunikation + Beratung + Gesprächsführung.

import type { PatientBeschreibung } from "../../../_types";

export const CE04_SIT_DEMIR_PATIENT: PatientBeschreibung = {
  patientId: "pat-demir",
  name: "Mehmet Demir",
  alter: 58,
  geschlecht: "m",
  diagnosen: ["Typ-2-Diabetes mellitus (Erstdiagnose)"],
  nebendiagnosen: ["arterielle Hypertonie"],
  setting: "Diabetes-Beratung, internistische Station",
  hintergrund:
    "Herr Demir kam vor 35 Jahren aus der Türkei nach Deutschland und arbeitete bis zur Rente als Schichtarbeiter. Er spricht im Alltag Türkisch; sein Deutsch reicht für Vertrautes, bei medizinischen Themen kommt er aber an seine Grenzen. Seine Tochter Elif (28) ist bei der Beratung dabei und möchte für ihn übersetzen. Die Diagnose Diabetes hat ihn getroffen — er soll künftig Tabletten nehmen, die Ernährung umstellen und die Werte kontrollieren.",
  hintergrundB1:
    "Herr Demir kam vor 35 Jahren aus der Türkei nach Deutschland. Er spricht zu Hause Türkisch. Bei Alltags-Themen versteht er Deutsch, bei medizinischen Themen nicht gut. Seine Tochter Elif (28) ist dabei und will übersetzen. Die Diagnose Diabetes hat ihn erschreckt. Er soll jetzt Tabletten nehmen, anders essen und die Werte messen.",
  persoenlichkeit:
    "Höflich und zurückhaltend. Kommuniziert eher indirekt: Er sagt selten offen 'Nein' und lächelt auch dann, wenn ihm etwas unangenehm ist. Über Krankheit und Körper spricht er ungern (Scham). Vermeidet Blickkontakt, wenn ihm ein Thema peinlich ist — das ist kein Desinteresse. Er möchte niemandem zur Last fallen ('machen Sie sich keine Mühe').",
  persoenlichkeitB1:
    "Höflich und zurückhaltend. Er sagt selten offen 'Nein' und lächelt auch, wenn ihm etwas unangenehm ist. Über Krankheit spricht er ungern (Scham). Er schaut weg, wenn ihm ein Thema peinlich ist — das heißt nicht Desinteresse. Er will niemandem zur Last fallen.",
  zitate: [
    "Es geht schon. Machen Sie sich keine Mühe.",
    "Meine Tochter sagt mir das schon zu Hause.",
    "Zucker… ist das schlimm?",
  ],
};

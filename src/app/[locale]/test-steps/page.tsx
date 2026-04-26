"use client";

import { useState } from "react";
import { StepMC } from "@/components/learn/step-mc";
import { StepTrueFalse } from "@/components/learn/step-truefalse";
import { StepCloze } from "@/components/learn/step-cloze";
import { StepMatching } from "@/components/learn/step-matching";
import { StepSorting } from "@/components/learn/step-sorting";
import { StepSequencing } from "@/components/learn/step-sequencing";
import { StepText } from "@/components/learn/step-text";
import { StepFlipCard } from "@/components/learn/step-flipcard";
import { StepSwipe } from "@/components/learn/step-swipe";
import { StepReveal } from "@/components/learn/step-reveal";

// ─── Tab-Definition ───────────────────────────────────────────────────────────
const TABS = [
  { id: "mc",          label: "MC" },
  { id: "mc-lang",     label: "MC lang" },
  { id: "truefalse",   label: "Wahr/Falsch" },
  { id: "cloze",       label: "Lückentext" },
  { id: "matching",    label: "Zuordnung" },
  { id: "sorting",     label: "Sortierung" },
  { id: "sequencing",  label: "Reihenfolge" },
  { id: "text",        label: "Erklärtext" },
  { id: "text-lang",   label: "Text lang" },
  { id: "flipcard",    label: "Flipcard" },
  { id: "swipe",       label: "Swipe" },
  { id: "reveal",      label: "Aufdecken" },
] as const;

type TabId = typeof TABS[number]["id"];

// ─── Done-Screen ──────────────────────────────────────────────────────────────
function DoneScreen({ onReset }: { onReset: () => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="rounded-2xl border border-[#3E5A6A]/30 bg-[#3E5A6A]/5 p-8 text-center space-y-4 w-full">
        <p className="text-3xl">✓</p>
        <p className="font-semibold text-[#3E5A6A] text-base">Step abgeschlossen!</p>
        <button
          onClick={onReset}
          className="rounded-xl px-5 py-2.5 text-sm font-medium text-white transition-all active:scale-[0.98]"
          style={{ backgroundColor: "#218C71" }}
        >
          Nochmal
        </button>
      </div>
    </div>
  );
}

// Alle Schritte müssen h-full sein damit der flex-col-Parent greift
// Einzelne step-Funktionen geben direkt <StepXxx h-full /> zurück

// ─── Inhalte ─────────────────────────────────────────────────────────────────

function MCStep() {
  const [done, setDone] = useState(false);
  if (done) return <DoneScreen onReset={() => setDone(false)} />;
  return (
    <StepMC
      title="Dekubitus-Prophylaxe"
      body="Herr Müller, 78 Jahre, liegt seit 3 Tagen bettlägerig nach einer Hüft-OP."
      fragetext="Welche Maßnahme ist die wichtigste zur Vorbeugung eines Dekubitus?"
      bloomLevel={2}
      optionen={[
        { text: "Lagerungswechsel alle 2 Stunden", isCorrect: true, explanation: "Regelmäßige Umlagerung entlastet Druckstellen — die wichtigste Prophylaxe-Maßnahme." },
        { text: "Tägliches Eincremen mit Franzbranntwein", isCorrect: false, explanation: "Franzbranntwein trocknet die Haut aus und erhöht das Risiko." },
        { text: "Bettlägerige Patienten möglichst ruhig halten", isCorrect: false, explanation: "Immobilität ist ein Hauptrisikofaktor — Bewegungsförderung ist essenziell." },
        { text: "Hautinspektion nur bei Beschwerden", isCorrect: false, explanation: "Die Haut muss täglich systematisch inspiziert werden — auch ohne Beschwerden." },
      ]}
      onNext={() => setDone(true)}
    />
  );
}

function TrueFalseStep() {
  const [done, setDone] = useState(false);
  if (done) return <DoneScreen onReset={() => setDone(false)} />;
  return (
    <StepTrueFalse
      title="Sturzprophylaxe — Wahr oder Falsch?"
      cards={[
        { statement: "Bettgitter schützen immer zuverlässig vor Stürzen.", isTrue: false, explanation: "Bettgitter können zu Sturz über die Gitter führen und gelten als freiheitsentziehende Maßnahme — sie sind kein sicheres Mittel." },
        { statement: "Ein Sturzprotokoll sollte unmittelbar nach dem Sturz ausgefüllt werden.", isTrue: true, explanation: "Dokumentation unmittelbar danach sichert die Qualität der Daten und ist rechtlich wichtig." },
        { statement: "Rutschfeste Socken sind eine wirksame Sturzprophylaxe-Maßnahme.", isTrue: true, explanation: "Rutschfeste Socken oder Hausschuhe reduzieren das Sturzrisiko auf glatten Böden deutlich." },
      ]}
      onNext={() => setDone(true)}
    />
  );
}

function ClozeStep() {
  const [done, setDone] = useState(false);
  if (done) return <DoneScreen onReset={() => setDone(false)} />;
  return (
    <StepCloze
      title="Pflegeprozess — Lückentext"
      body="Ergänze die fehlenden Begriffe im Pflegeprozess."
      textWithBlanks="Der Pflegeprozess beginnt mit der [1] des Patienten. Danach folgt die [2] von Pflegeproblemen und -ressourcen. Auf Basis dieser Informationen werden [3] formuliert."
      blanks={[
        { id: 1, correct: "Informationssammlung", distractors: ["Diagnosestellung", "Medikamentengabe"] },
        { id: 2, correct: "Einschätzung", distractors: ["Dokumentation", "Ausführung"] },
        { id: 3, correct: "Pflegeziele", distractors: ["Arztberichte", "Visiten"] },
      ]}
      onNext={() => setDone(true)}
    />
  );
}

function MatchingStep() {
  const [done, setDone] = useState(false);
  if (done) return <DoneScreen onReset={() => setDone(false)} />;
  return (
    <StepMatching
      title="Dekubitus-Stadien"
      fragetext="Ordne die Stadien der richtigen Beschreibung zu."
      pairs={[
        { left: "Stadium I", right: "Nicht wegdrückbare Rötung" },
        { left: "Stadium II", right: "Oberflächlicher Hautdefekt" },
        { left: "Stadium III", right: "Tiefe Wunde bis zur Faszie" },
        { left: "Stadium IV", right: "Nekrose bis auf Knochen/Sehnen" },
      ]}
      onNext={() => setDone(true)}
    />
  );
}

function SortingStep() {
  const [done, setDone] = useState(false);
  if (done) return <DoneScreen onReset={() => setDone(false)} />;
  return (
    <StepSorting
      title="Pflegebericht"
      fragetext="Bringe die Schritte eines Pflegeberichts in die richtige Reihenfolge."
      items={[
        "Situation beurteilen",
        "Datum und Uhrzeit dokumentieren",
        "Maßnahmen beschreiben",
        "Reaktion des Patienten festhalten",
        "Unterschrift leisten",
      ]}
      onNext={() => setDone(true)}
    />
  );
}

function SequencingStep() {
  const [done, setDone] = useState(false);
  if (done) return <DoneScreen onReset={() => setDone(false)} />;
  return (
    <StepSequencing
      title="Händedesinfektion"
      instruction="Bringe die Schritte der hygienischen Händedesinfektion in die richtige Reihenfolge."
      items={[
        { id: "1", label: "Hände vorher trockenwischen" },
        { id: "2", label: "3–5 ml Desinfektionsmittel entnehmen" },
        { id: "3", label: "Handflächen einreiben" },
        { id: "4", label: "Handrücken einreiben" },
        { id: "5", label: "Finger und Fingerzwischenräume einreiben" },
        { id: "6", label: "30 Sekunden einwirken lassen" },
      ]}
      onNext={() => setDone(true)}
    />
  );
}

function TextStep() {
  const [done, setDone] = useState(false);
  if (done) return <DoneScreen onReset={() => setDone(false)} />;
  return (
    <StepText
      title="Was ist ein Dekubitus?"
      body={`Ein **Dekubitus** (lat. _decumbere_ = liegen) ist eine lokale Schädigung der Haut und/oder des darunterliegenden Gewebes. Er entsteht durch anhaltenden Druck oder Druck in Kombination mit Scherkräften.\n\nBetroffen sind meist Körperstellen über Knochenvorsprüngen: Steißbein, Fersen, Knöchel und Schulterblätter.\n\nDie vier Stadien reichen von einer nicht wegdrückbaren Rötung (Stadium I) bis zur vollständigen Gewebsnekrose (Stadium IV).`}
      fallbezug="Herr Müller liegt seit 3 Tagen auf Station. Du beobachtest eine gerötete Stelle am Steißbein."
      onNext={() => setDone(true)}
    />
  );
}

// Langer Erklärtextmit Carousel — Text wird in Karten aufgeteilt
function TextLangStep() {
  const [done, setDone] = useState(false);
  if (done) return <DoneScreen onReset={() => setDone(false)} />;
  return (
    <StepText
      title="Dekubitus — vollständiger Überblick"
      carousel
      body={`Ein **Dekubitus** ist eine lokale Schädigung der Haut und/oder des darunterliegenden Gewebes. Er entsteht durch anhaltenden Druck oder Scherkräfte an Körperstellen über Knochenvorsprüngen.\n\n**Stadien nach EPUAP/NPUAP:**\n\nStadium I zeigt eine nicht wegdrückbare Rötung bei intakter Haut. Die betroffene Stelle kann schmerzhaft, verhärtet oder weicher sein als das umgebende Gewebe.\n\nStadium II ist ein oberflächlicher Hautdefekt mit Verlust der Epidermis, Dermis oder beider Schichten. Die Wunde ist flach mit rötlich-rosafarbenem Wundbett.\n\nStadium III beschreibt einen vollständigen Gewebeverlust. Subkutanes Fettgewebe kann sichtbar, jedoch kein Knochen, keine Sehnen oder Muskeln freiliegend sein.\n\nStadium IV ist ein vollständiger Gewebeverlust mit freiliegendem Knochen, Sehnen oder Muskeln. Tunnelierungen und Taschenbildungen sind häufig.`}
      fallbezug="Frau Schmidt, 84 Jahre, liegt seit 5 Tagen auf der Geriatrie. Beim Lagern fällt dir eine dunkle Verfärbung am Steißbein auf."
      onNext={() => setDone(true)}
    />
  );
}

// Langer MC — viel Body-Text + 4 Optionen
function MCLangStep() {
  const [done, setDone] = useState(false);
  if (done) return <DoneScreen onReset={() => setDone(false)} />;
  return (
    <StepMC
      title="Fallbeispiel: Sturzrisiko"
      body={"Herr Bauer, 81 Jahre, kommt nach einem Schlaganfall auf deine Station. Er hat eine linksseitige Hemiparese und ist auf einen Rollator angewiesen. Seine Tochter berichtet, er sei zu Hause in den letzten 3 Monaten zweimal gestürzt. Er nimmt Metoprolol, Ramipril und seit zwei Wochen Mirtazapin (Antidepressivum). Beim Erstgespräch wirkt er müde und leicht desorientiert.\n\nDu führst das Sturzrisiko-Assessment durch."}
      fragetext="Welcher Faktor erhöht das Sturzrisiko bei Herrn Bauer am stärksten?"
      bloomLevel={4}
      optionen={[
        { text: "Linksseitige Hemiparese nach Schlaganfall", isCorrect: false, explanation: "Die Hemiparese ist ein relevanter Faktor, jedoch nicht der stärkste hier — sie wird durch den Rollator kompensiert." },
        { text: "Neue Einnahme von Mirtazapin (Antidepressivum)", isCorrect: true, explanation: "Mirtazapin hat sedierende Wirkung und erhöht das Sturzrisiko deutlich — besonders in den ersten 2 Wochen. In Kombination mit Antihypertensiva potenziert sich das Risiko." },
        { text: "Alter von 81 Jahren", isCorrect: false, explanation: "Hohes Alter ist ein Faktor, aber nicht spezifisch für diesen Fall. Die Medikation ist die akute Veränderung." },
        { text: "Desorientierung beim Erstgespräch", isCorrect: false, explanation: "Desorientierung ist ein Warnsignal, aber auch hier ist die sedierende Medikation als Ursache wahrscheinlicher und direkter beeinflussbar." },
      ]}
      onNext={() => setDone(true)}
    />
  );
}

function FlipCardStep() {
  const [done, setDone] = useState(false);
  if (done) return <DoneScreen onReset={() => setDone(false)} />;
  return (
    <StepFlipCard
      title="Fachbegriffe — Pflege"
      instruction="Tippe auf eine Karte um die Erklärung zu sehen."
      cards={[
        { front: "Dekubitus", back: "Druckgeschwür durch anhaltenden Druck auf Gewebe über Knochenvorsprüngen." },
        { front: "Thrombose", back: "Blutgerinnsel in einem Blutgefäß, das den Blutfluss blockiert." },
        { front: "Kontraktur", back: "Dauerhafte Verkürzung von Muskeln oder Sehnen, die Gelenkbeweglichkeit einschränkt." },
        { front: "Pneumonie", back: "Lungenentzündung — Infektion des Lungengewebes durch Bakterien, Viren oder Pilze." },
      ]}
      onNext={() => setDone(true)}
    />
  );
}

function SwipeStep() {
  const [done, setDone] = useState(false);
  if (done) return <DoneScreen onReset={() => setDone(false)} />;
  return (
    <StepSwipe
      title="Sturzrisiko einschätzen"
      instruction="Sturzrisiko: Ja oder Nein? Wische nach rechts für Ja, links für Nein."
      cards={[
        { statement: "Patient nimmt Schlafmittel täglich.", isCorrect: true, explanation: "Sedativa erhöhen das Sturzrisiko deutlich durch Schwindel und Benommenheit." },
        { statement: "Patient ist 35 Jahre alt und geht selbstständig.", isCorrect: false, explanation: "Junges Alter und selbstständiges Gehen ohne Hilfsmittel = kein erhöhtes Sturzrisiko." },
        { statement: "Frau Schmidt, 80 J., hatte in den letzten 6 Monaten 2 Stürze.", isCorrect: true, explanation: "Vorangegangene Stürze sind der stärkste Prädiktor für weitere Stürze." },
        { statement: "Patient trägt rutschfeste Hausschuhe.", isCorrect: false, explanation: "Rutschfestes Schuhwerk ist eine Schutzmaßnahme — kein Risikofaktor." },
      ]}
      onNext={() => setDone(true)}
    />
  );
}

function RevealStep() {
  const [done, setDone] = useState(false);
  if (done) return <DoneScreen onReset={() => setDone(false)} />;
  return (
    <StepReveal
      title="Pflegeprozess — 6 Phasen"
      instruction="Tippe auf jede Phase um mehr zu erfahren."
      revealMode="sequential"
      cards={[
        { id: "1", label: "Informationssammlung", icon: "search", content: "Systematische Erhebung aller pflegerelevanten Daten: Biografie, Ressourcen, Probleme, Vitalzeichen." },
        { id: "2", label: "Pflegediagnose", icon: "clipboard", content: "Einschätzung der Pflegeprobleme und -ressourcen. Was braucht der Patient? Was kann er noch selbst?" },
        { id: "3", label: "Pflegeziele", icon: "target", content: "SMART-Ziele formulieren: Spezifisch, Messbar, Attraktiv, Realistisch, Terminiert." },
        { id: "4", label: "Pflegeplanung", icon: "list", content: "Konkrete Maßnahmen planen: Wer macht was, wann und wie oft?" },
        { id: "5", label: "Durchführung", icon: "activity", content: "Umsetzung der geplanten Maßnahmen — mit Beobachtung der Reaktion des Patienten." },
        { id: "6", label: "Evaluation", icon: "check-circle", content: "Wurden die Ziele erreicht? Wenn nicht: Warum? Anpassung des Pflegeplans." },
      ]}
      onNext={() => setDone(true)}
    />
  );
}

// ─── Hauptseite ───────────────────────────────────────────────────────────────
export default function TestStepsPage() {
  const [activeTab, setActiveTab] = useState<TabId>("mc");
  const [key, setKey] = useState(0);

  function switchTab(id: TabId) {
    setActiveTab(id);
    setKey((k) => k + 1);
  }

  return (
    <div
      className="fixed inset-0 flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--lern-bg-primary, #fafaf9)", color: "var(--lern-text-primary, #1d1d1f)" }}
    >
      {/* Tab-Navigation */}
      <nav
        className="shrink-0 border-b"
        style={{
          backgroundColor: "var(--lern-bg-primary, #fff)",
          borderColor: "var(--lern-border, #e5e5e5)",
        }}
      >
        <div className="overflow-x-auto">
          <div className="flex gap-1 px-3 py-2 min-w-max">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
                style={{
                  backgroundColor: activeTab === tab.id ? "#218C7115" : "transparent",
                  color: activeTab === tab.id ? "#218C71" : "var(--lern-text-secondary, #6b6b6b)",
                  fontWeight: activeTab === tab.id ? 600 : 400,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Step Content — füllt restliche Höhe, kein äußeres Scroll */}
      <div
        className="flex-1 min-h-0 px-4 py-4 max-w-md mx-auto w-full overflow-hidden"
        key={key}
      >
        <div className="h-full">
          {activeTab === "mc"         && <MCStep />}
          {activeTab === "mc-lang"    && <MCLangStep />}
          {activeTab === "truefalse"  && <TrueFalseStep />}
          {activeTab === "cloze"      && <ClozeStep />}
          {activeTab === "matching"   && <MatchingStep />}
          {activeTab === "sorting"    && <SortingStep />}
          {activeTab === "sequencing" && <SequencingStep />}
          {activeTab === "text"       && <TextStep />}
          {activeTab === "text-lang"  && <TextLangStep />}
          {activeTab === "flipcard"   && <FlipCardStep />}
          {activeTab === "swipe"      && <SwipeStep />}
          {activeTab === "reveal"     && <RevealStep />}
        </div>
      </div>
    </div>
  );
}

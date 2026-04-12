"use client";

import dynamic from "next/dynamic";
import type { ContentStep, GlossarEntry } from "../../../content/_types";

// --- Skeleton für Lazy-Loading ---
const StepSkeleton = () => (
  <div className="animate-pulse h-64 bg-[var(--lern-card-bg,#f5f5f7)] rounded-2xl" />
);

// --- Lazy-loaded Step-Komponenten (nur der aktuelle Step wird geladen) ---
const StepText = dynamic(() => import("@/components/learn/step-text").then(m => ({ default: m.StepText })), { loading: () => <StepSkeleton /> });
const StepMC = dynamic(() => import("@/components/learn/step-mc").then(m => ({ default: m.StepMC })), { loading: () => <StepSkeleton /> });
const StepMatching = dynamic(() => import("@/components/learn/step-matching").then(m => ({ default: m.StepMatching })), { loading: () => <StepSkeleton /> });
const StepSorting = dynamic(() => import("@/components/learn/step-sorting").then(m => ({ default: m.StepSorting })), { loading: () => <StepSkeleton /> });
const StepBranching = dynamic(() => import("@/components/learn/step-branching").then(m => ({ default: m.StepBranching })), { loading: () => <StepSkeleton /> });
const StepFreetext = dynamic(() => import("@/components/learn/step-freetext").then(m => ({ default: m.StepFreetext })), { loading: () => <StepSkeleton /> });
const StepSelfrating = dynamic(() => import("@/components/learn/step-selfrating").then(m => ({ default: m.StepSelfrating })), { loading: () => <StepSkeleton /> });
const StepReflection = dynamic(() => import("@/components/learn/step-reflection").then(m => ({ default: m.StepReflection })), { loading: () => <StepSkeleton /> });
const StepHotspot = dynamic(() => import("@/components/learn/step-hotspot").then(m => ({ default: m.StepHotspot })), { loading: () => <StepSkeleton /> });
const StepConfidence = dynamic(() => import("@/components/learn/step-confidence").then(m => ({ default: m.StepConfidence })), { loading: () => <StepSkeleton /> });
const StepCloze = dynamic(() => import("@/components/learn/step-cloze").then(m => ({ default: m.StepCloze })), { loading: () => <StepSkeleton /> });
const StepSequencing = dynamic(() => import("@/components/learn/step-sequencing").then(m => ({ default: m.StepSequencing })), { loading: () => <StepSkeleton /> });
const StepSlider = dynamic(() => import("@/components/learn/step-slider").then(m => ({ default: m.StepSlider })), { loading: () => <StepSkeleton /> });
const StepSummary = dynamic(() => import("@/components/learn/step-summary").then(m => ({ default: m.StepSummary })), { loading: () => <StepSkeleton /> });
const StepFillIn = dynamic(() => import("@/components/learn/step-fillin").then(m => ({ default: m.StepFillIn })), { loading: () => <StepSkeleton /> });
const StepTrueFalse = dynamic(() => import("@/components/learn/step-truefalse").then(m => ({ default: m.StepTrueFalse })), { loading: () => <StepSkeleton /> });
const StepTimer = dynamic(() => import("@/components/learn/step-timer").then(m => ({ default: m.StepTimer })), { loading: () => <StepSkeleton /> });
const StepMemory = dynamic(() => import("@/components/learn/step-memory").then(m => ({ default: m.StepMemory })), { loading: () => <StepSkeleton /> });
const StepCrossword = dynamic(() => import("@/components/learn/step-crossword").then(m => ({ default: m.StepCrossword })), { loading: () => <StepSkeleton /> });
const StepCategorize = dynamic(() => import("@/components/learn/step-categorize").then(m => ({ default: m.StepCategorize })), { loading: () => <StepSkeleton /> });
const StepHighlight = dynamic(() => import("@/components/learn/step-highlight").then(m => ({ default: m.StepHighlight })), { loading: () => <StepSkeleton /> });
const StepDialog = dynamic(() => import("@/components/learn/step-dialog").then(m => ({ default: m.StepDialog })), { loading: () => <StepSkeleton /> });
const StepSwipe = dynamic(() => import("@/components/learn/step-swipe").then(m => ({ default: m.StepSwipe })), { loading: () => <StepSkeleton /> });
const StepFlipCard = dynamic(() => import("@/components/learn/step-flipcard").then(m => ({ default: m.StepFlipCard })), { loading: () => <StepSkeleton /> });
const StepReveal = dynamic(() => import("@/components/learn/step-reveal").then(m => ({ default: m.StepReveal })), { loading: () => <StepSkeleton /> });
const StepTimeline = dynamic(() => import("@/components/learn/step-timeline").then(m => ({ default: m.StepTimeline })), { loading: () => <StepSkeleton /> });
const StepComparison = dynamic(() => import("@/components/learn/step-comparison").then(m => ({ default: m.StepComparison })), { loading: () => <StepSkeleton /> });
const StepLabelImage = dynamic(() => import("@/components/learn/step-label-image").then(m => ({ default: m.StepLabelImage })), { loading: () => <StepSkeleton /> });
const StepDiagram = dynamic(() => import("@/components/learn/step-diagram").then(m => ({ default: m.StepDiagram })), { loading: () => <StepSkeleton /> });
const StepImageInteraction = dynamic(() => import("@/components/learn/step-image-interaction").then(m => ({ default: m.StepImageInteraction })), { loading: () => <StepSkeleton /> });
const StepAudio = dynamic(() => import("@/components/learn/step-audio").then(m => ({ default: m.StepAudio })), { loading: () => <StepSkeleton /> });
const StepSpeech = dynamic(() => import("@/components/learn/step-speech").then(m => ({ default: m.StepSpeech })), { loading: () => <StepSkeleton /> });
// v3: Neue Step-Typen
const StepWordOrder = dynamic(() => import("@/components/learn/step-wordorder").then(m => ({ default: m.StepWordOrder })), { loading: () => <StepSkeleton /> });
const StepCalculation = dynamic(() => import("@/components/learn/step-calculation").then(m => ({ default: m.StepCalculation })), { loading: () => <StepSkeleton /> });
const StepEstimation = dynamic(() => import("@/components/learn/step-estimation").then(m => ({ default: m.StepEstimation })), { loading: () => <StepSkeleton /> });
const StepErrorSpot = dynamic(() => import("@/components/learn/step-errorspot").then(m => ({ default: m.StepErrorSpot })), { loading: () => <StepSkeleton /> });
const StepTableFillIn = dynamic(() => import("@/components/learn/step-tablefillin").then(m => ({ default: m.StepTableFillIn })), { loading: () => <StepSkeleton /> });
const StepMatrix = dynamic(() => import("@/components/learn/step-matrix").then(m => ({ default: m.StepMatrix })), { loading: () => <StepSkeleton /> });
const StepConceptMap = dynamic(() => import("@/components/learn/step-conceptmap").then(m => ({ default: m.StepConceptMap })), { loading: () => <StepSkeleton /> });
const StepChatSim = dynamic(() => import("@/components/learn/step-chatsim").then(m => ({ default: m.StepChatSim })), { loading: () => <StepSkeleton /> });
const StepCrowdPoll = dynamic(() => import("@/components/learn/step-crowd-poll").then(m => ({ default: m.StepCrowdPoll })), { loading: () => <StepSkeleton /> });

export interface StepRendererProps {
  step: ContentStep;
  sprachLevel: "c1" | "b1";
  glossar: GlossarEntry[];
  onNext: (correct?: boolean, gewaehlteAntwort?: string) => void;
  onSelfRating: (rating: number) => void;
  onReflection: (text: string) => void;
  reflexionText: string | null;
  score: number;
  totalQuestions: number;
}

export function StepRenderer({
  step,
  sprachLevel,
  glossar,
  onNext,
  onSelfRating,
  onReflection,
  reflexionText,
  score,
  totalQuestions,
}: StepRendererProps) {
  const content = sprachLevel === "b1" && step.contentB1 ? step.contentB1 : step.contentC1;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- v2 Steps nutzen kürzere Feldnamen, Fallback per runtime-check
  const q = step.question as any;

  switch (step.stepType) {
    case "selfrating":
      return (
        <StepSelfrating
          title={content.title}
          body={content.body}
          glossar={glossar}
          fragetext={q?.fragetext ?? ""}
          onNext={onSelfRating}
        />
      );

    case "reflection": {
      const reflPrompt = q?.reflection?.prompt ?? q?.fragetext;
      const reflPlaceholder = q?.reflection?.placeholder ?? (q?.satzanfaenge ? q.satzanfaenge[0] + "..." : "Schreibe deine Gedanken...");
      const reflSystem = q?.reflection?.systemPrompt ?? "Bewerte die Reflexion auf Tiefe und Bezug zum Thema.";
      if (!reflPrompt) return null;
      return (
        <StepReflection
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          prompt={reflPrompt}
          placeholder={reflPlaceholder}
          systemPrompt={reflSystem}
          onTextSubmit={(text) => onReflection(text)}
          onNext={() => onNext()}
        />
      );
    }

    case "hotspot":
      if (!q?.hotspot) return null;
      return (
        <StepHotspot
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          imageUrl={q.hotspot.imageUrl}
          imageAlt={q.hotspot.imageAlt}
          instruction={q.hotspot.instruction}
          zones={q.hotspot.zones}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "confidence": {
      const confCards = q?.confidenceCards;
      const confStatements = q?.statements;
      if (confCards) {
        return (
          <StepConfidence
            title={content.title}
            body={content.body || undefined}
            glossar={glossar}
            sprachLevel={sprachLevel}
            cards={confCards}
            onNext={(correct) => onNext(correct)}
          />
        );
      }
      if (confStatements) {
        const stmtBody = (content.body ? content.body + "\n\n" : "") +
          confStatements.map((s: string, i: number) => `${i + 1}. ${s}`).join("\n");
        return (
          <StepSelfrating
            title={content.title}
            body={stmtBody}
            glossar={glossar}
            fragetext={q?.fragetext ?? "Wie sicher fühlst du dich?"}
            onNext={onSelfRating}
          />
        );
      }
      return null;
    }

    case "cloze":
      if (!q?.cloze) return null;
      return (
        <StepCloze
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          textWithBlanks={q.cloze.textWithBlanks}
          blanks={q.cloze.blanks}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "sequencing":
      if (!q?.sequencing) return null;
      return (
        <StepSequencing
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={q.sequencing.instruction}
          items={q.sequencing.items}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "slider": {
      const sliderData = q?.slider ?? (q?.min != null ? q : null);
      if (!sliderData) return null;
      if (sliderData.correctValue == null) {
        return (
          <StepSelfrating
            title={content.title}
            body={content.body || q?.fragetext || ""}
            fragetext={q?.fragetext || content.title}
            glossar={glossar}
            onNext={(rating) => onSelfRating(rating)}
          />
        );
      }
      return (
        <StepSlider
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          sprachLevel={sprachLevel}
          instruction={sliderData.instruction ?? q?.fragetext ?? ""}
          unit={sliderData.unit ?? ""}
          min={sliderData.min}
          max={sliderData.max}
          step={sliderData.step}
          correctValue={sliderData.correctValue}
          tolerance={sliderData.tolerance ?? 1}
          explanation={sliderData.explanation ?? ""}
          explanationB1={sliderData.explanationB1}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "summary": {
      const sumData = q?.summary ?? (q?.summaryPoints ? {
        kernaussagen: q.summaryPoints,
        reflexionRueckbezug: q.reflexionRueckbezug,
      } : null);
      if (!sumData) return null;
      return (
        <StepSummary
          title={content.title}
          glossar={glossar}
          reflexionText={reflexionText ?? undefined}
          rueckbezug={sumData.reflexionRueckbezug}
          kernaussagen={sumData.kernaussagen}
          score={score}
          totalQuestions={totalQuestions}
          onNext={() => onNext()}
        />
      );
    }

    case "text":
      return (
        <StepText
          title={content.title}
          body={content.body}
          glossar={glossar}
          fallbezug={content.fallbezug}
          glossarBegriffe={content.glossarBegriffe}
          imageUrl={step.imageUrl}
          imageAlt={step.imageAlt}
          audioUrl={step.audioUrl}
          audioLabel={step.audioLabel}
          wusstestDuDas={step.wusstestDuDas}
          carousel={step.modus === "entdecker"}
          displayFormat={step.displayFormat}
          onNext={() => onNext()}
        />
      );

    case "mc": {
      const mcOptions = q?.optionen ?? q?.options;
      if (!mcOptions) return null;
      return (
        <StepMC
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          sprachLevel={sprachLevel}
          fragetext={q.fragetext}
          optionen={mcOptions}
          multiSelect={q.multiSelect}
          isAnticipation={step.stepId.endsWith("-anticipation")}
          onNext={(correct, gewaehlteAntwort) => onNext(correct, gewaehlteAntwort)}
        />
      );
    }

    case "matching": {
      const matchPairs = q?.matchingPairs ?? q?.pairs;
      if (!matchPairs) return null;
      return (
        <StepMatching
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          fragetext={q.fragetext}
          pairs={matchPairs}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "sorting": {
      const sortingItems = q?.sortItems ?? q?.items;
      if (!sortingItems) return null;
      return (
        <StepSorting
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          fragetext={q.fragetext}
          items={sortingItems}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "branching": {
      const branchOpts = q?.branchingOptions ?? q?.options;
      if (!branchOpts) return null;
      return (
        <StepBranching
          title={content.title}
          body={content.body}
          glossar={glossar}
          sprachLevel={sprachLevel}
          fragetext={q.fragetext}
          options={branchOpts}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "freetext":
      return (
        <StepFreetext
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          fragetext={q?.fragetext ?? ""}
          musterantwort={q?.musterantwort}
          bewertungskriterien={q?.bewertungskriterien}
          satzanfaengeB1={q?.satzanfaengeB1 ?? q?.satzanfaenge}
          onNext={() => onNext(true)}
        />
      );

    case "fillin":
      if (!q?.fillin) return null;
      return (
        <StepFillIn
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          sentence={q.fillin.sentence}
          options={q.fillin.options}
          correctIndex={q.fillin.correctIndex}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "truefalse": {
      const tfCards = q?.trueFalseCards ?? q?.cards;
      if (!tfCards) return null;
      return (
        <StepTrueFalse
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          sprachLevel={sprachLevel}
          cards={tfCards}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "timer":
      if (!q?.timerQuestions) return null;
      return (
        <StepTimer
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          questions={q.timerQuestions}
          timeLimitSeconds={q.timeLimitSeconds}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "memory": {
      const memPairs = q?.memoryPairs ?? q?.pairs;
      if (!memPairs) return null;
      return (
        <StepMemory
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          pairs={memPairs}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "crossword": {
      const cwWords = q?.crosswordWords ?? q?.words;
      if (!cwWords) return null;
      return (
        <StepCrossword
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          words={cwWords}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "categorize": {
      const catItems = q?.categoryItems ?? q?.items;
      if (!q?.categories || !catItems)
        return null;
      return (
        <StepCategorize
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          categories={q.categories}
          items={catItems}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "highlight":
      if (!q?.highlightSegments) return null;
      return (
        <StepHighlight
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          sprachLevel={sprachLevel}
          segments={q.highlightSegments}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "dialog": {
      const dlgPhases = q?.dialogPhases;
      const dlgLines = q?.dialogLines;
      if (dlgPhases) {
        return (
          <StepDialog
            title={content.title}
            body={content.body || undefined}
            glossar={glossar}
            patientName={q.patientName ?? "Patient"}
            phases={dlgPhases}
            onNext={(correct) => onNext(correct)}
            sprachLevel={sprachLevel}
          />
        );
      }
      if (dlgLines) {
        const dialogBody = dlgLines.map((l: { speaker: string; text: string }) =>
          `**${l.speaker}:** ${l.text}`
        ).join("\n\n");
        return (
          <StepText
            title={content.title}
            body={dialogBody}
            glossar={glossar}
            fallbezug={content.fallbezug}
            onNext={() => onNext()}
          />
        );
      }
      return null;
    }

    case "swipe": {
      const swipeRaw = q?.swipe;
      const swipeCards = q?.cards;
      const swipeData = swipeRaw ?? (swipeCards ? {
        instruction: q?.fragetext,
        cards: swipeCards.map((c: { statement: string; isTrue?: boolean; isCorrect?: boolean; explanation: string }) => ({
          statement: c.statement,
          isCorrect: c.isCorrect ?? c.isTrue ?? false,
          explanation: c.explanation,
        })),
      } : null);
      if (!swipeData) return null;
      return (
        <StepSwipe
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={swipeData.instruction}
          cards={swipeData.cards}
          sprachLevel={sprachLevel}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "flipcard": {
      const fcData = q?.flipcard ?? (q?.cards ? { instruction: q?.fragetext, cards: q.cards } : null);
      if (!fcData) return null;
      return (
        <StepFlipCard
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={fcData.instruction}
          cards={fcData.cards}
          sprachLevel={sprachLevel}
          onNext={() => onNext()}
        />
      );
    }

    case "reveal": {
      const revRaw = q?.reveal;
      const revItems = q?.revealItems;
      const revData = revRaw ?? (revItems ? {
        instruction: q?.fragetext,
        cards: revItems.map((item: { icon?: string; label: string; detail: string }, i: number) => ({
          id: `rev-${i}`,
          label: item.label,
          content: item.detail,
          icon: item.icon,
        })),
        revealMode: "sequential" as const,
      } : null);
      if (!revData) return null;
      return (
        <StepReveal
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={revData.instruction}
          cards={revData.cards}
          revealMode={revData.revealMode}
          sprachLevel={sprachLevel}
          onNext={() => onNext()}
        />
      );
    }

    case "timeline": {
      const tlRaw = q?.timeline;
      const tlEvents = q?.timelineEvents;
      const tlData = tlRaw ?? (tlEvents ? {
        instruction: q?.fragetext,
        events: tlEvents.map((ev: { year?: string; title: string; description: string; icon?: string }, i: number) => ({
          id: `tl-${i}`,
          time: ev.year ?? "",
          title: ev.title,
          description: ev.description,
          icon: ev.icon,
        })),
      } : null);
      if (!tlData) return null;
      return (
        <StepTimeline
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={tlData.instruction}
          events={tlData.events}
          sprachLevel={sprachLevel}
          onNext={() => onNext()}
        />
      );
    }

    case "comparison": {
      const cmpData = q?.comparison ?? (q?.comparisonItems ? {
        instruction: q?.fragetext,
        columns: [
          { label: q?.labelA ?? "A", icon: q?.iconA },
          { label: q?.labelB ?? "B", icon: q?.iconB },
        ],
        rows: q.comparisonItems.map((item: { aspect: string; optionA: string; optionB: string }) => ({
          aspect: item.aspect, values: [item.optionA, item.optionB],
        })),
      } : null);
      if (!cmpData) return null;
      return (
        <StepComparison
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={cmpData.instruction}
          columns={cmpData.columns}
          rows={cmpData.rows}
          sprachLevel={sprachLevel}
          onNext={() => onNext()}
        />
      );
    }

    case "labelImage":
      if (!q?.labelImage) return null;
      return (
        <StepLabelImage
          title={content.title}
          body={content.body || undefined}
          imageUrl={q.labelImage.imageUrl}
          imageAlt={q.labelImage.imageAlt}
          instruction={q.labelImage.instruction}
          labels={q.labelImage.labels}
          mode={q.labelImage.mode}
          glossar={glossar}
          onNext={(correct) => onNext(correct)}
        />
      );

    case "diagram": {
      const dgData = q?.diagram ?? (q?.diagramType ? {
        instruction: q?.fragetext,
        diagramType: q.diagramType,
        nodes: q.nodes,
        edges: q.edges,
        interactive: q.interactive,
      } : null);
      if (!dgData) return null;
      return (
        <StepDiagram
          title={content.title}
          body={content.body || undefined}
          instruction={dgData.instruction}
          diagramType={dgData.diagramType}
          nodes={dgData.nodes}
          edges={dgData.edges}
          interactive={dgData.interactive}
          glossar={glossar}
          onNext={() => onNext()}
        />
      );
    }

    case "imageInteraction":
      if (!q?.imageInteraction) return null;
      return (
        <StepImageInteraction
          title={content.title}
          body={content.body || undefined}
          instruction={q.imageInteraction.instruction}
          interactionType={q.imageInteraction.interactionType}
          beforeAfter={q.imageInteraction.beforeAfter}
          layerReveal={q.imageInteraction.layerReveal}
          zoomPan={q.imageInteraction.zoomPan}
          glossar={glossar}
          onNext={() => onNext()}
        />
      );

    case "audio": {
      const audioData = q?.audio ?? q;
      const audioUrl = audioData?.audioUrl ?? step.audioUrl;
      if (!audioUrl) return null;
      return (
        <StepAudio
          title={content.title}
          body={content.body}
          audioUrl={audioUrl}
          audioLabel={audioData?.audioLabel ?? step.audioLabel}
          transcript={audioData?.transcript}
          imageUrl={step.imageUrl}
          imageAlt={step.imageAlt}
          fallbezug={content.fallbezug}
          glossar={glossar}
          glossarBegriffe={content.glossarBegriffe}
          onNext={() => onNext()}
        />
      );
    }

    case "speech": {
      const speechData = q?.speech;
      if (!speechData) {
        return (
          <StepText
            title={content.title}
            body={content.body}
            glossar={glossar}
            onNext={() => onNext()}
          />
        );
      }
      return (
        <StepSpeech
          title={content.title}
          body={content.body}
          glossar={glossar}
          speech={speechData}
          sprachLevel={sprachLevel}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "careplan": {
      const cpData = q?.careplan;
      if (!cpData) return (
        <StepText title={content.title} body={content.body} glossar={glossar} onNext={() => onNext()} />
      );
      // CarePlan als multi-step Freetext/MC — für jetzt als Text rendern
      const cpBody = `**Patient:** ${cpData.patientName}\n**Situation:** ${sprachLevel === "b1" && cpData.situationB1 ? cpData.situationB1 : cpData.situation}\n\n${cpData.steps.map((s: { phase: string; prompt: string }) => `**${s.phase}:** ${s.prompt}`).join("\n\n")}`;
      return (
        <StepText title={content.title} body={cpBody} glossar={glossar} onNext={() => onNext()} />
      );
    }

    case "wordorder": {
      const woData = q?.wordorder;
      if (!woData) return null;
      return (
        <StepWordOrder
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={woData.instruction}
          words={woData.words}
          correctOrder={woData.correctOrder}
          hint={woData.hint}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "calculation": {
      const calcData = q?.calculation;
      if (!calcData) return null;
      return (
        <StepCalculation
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          sprachLevel={sprachLevel}
          instruction={calcData.instruction}
          formula={calcData.formula}
          correctValue={calcData.correctValue}
          unit={calcData.unit}
          tolerance={calcData.tolerance}
          explanation={calcData.explanation}
          explanationB1={calcData.explanationB1}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "estimation": {
      const estData = q?.estimation;
      if (!estData) return null;
      return (
        <StepEstimation
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          sprachLevel={sprachLevel}
          instruction={estData.instruction}
          unit={estData.unit}
          correctValue={estData.correctValue}
          tolerance={estData.tolerance}
          funFact={estData.funFact}
          explanation={estData.explanation}
          explanationB1={estData.explanationB1}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "errorspot": {
      const esData = q?.errorspot;
      if (!esData) return null;
      return (
        <StepErrorSpot
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          sprachLevel={sprachLevel}
          instruction={esData.instruction}
          text={esData.text}
          errors={esData.errors}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "tablefillin": {
      const tfData = q?.tablefillin;
      if (!tfData) return null;
      return (
        <StepTableFillIn
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={tfData.instruction}
          headers={tfData.headers}
          rows={tfData.rows}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "matrix": {
      const mxData = q?.matrix;
      if (!mxData) return null;
      return (
        <StepMatrix
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={mxData.instruction}
          axisX={mxData.axisX}
          axisY={mxData.axisY}
          items={mxData.items}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "conceptmap": {
      const cmData = q?.conceptmap;
      if (!cmData) return null;
      return (
        <StepConceptMap
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          instruction={cmData.instruction}
          nodes={cmData.nodes}
          correctConnections={cmData.correctConnections}
          availableLabels={cmData.availableLabels}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "chatSim": {
      const csData = q?.chatSim;
      if (!csData) return null;
      return (
        <StepChatSim
          title={content.title}
          body={content.body || undefined}
          glossar={glossar}
          sprachLevel={sprachLevel}
          patientName={csData.patientName}
          situation={csData.situation}
          situationB1={csData.situationB1}
          systemPrompt={csData.systemPrompt}
          maxTurns={csData.maxTurns}
          evaluationCriteria={csData.evaluationCriteria}
          onNext={(correct) => onNext(correct)}
        />
      );
    }

    case "crowdPoll": {
      const pollData = q?.crowdPoll;
      if (!pollData) return null;
      return (
        <StepCrowdPoll
          title={content.title}
          body={content.body || undefined}
          pollData={pollData}
          glossar={glossar}
          sprachLevel={sprachLevel}
          onNext={() => onNext()}
        />
      );
    }

    default:
      return (
        <StepText
          title={content.title}
          body={content.body}
          glossar={glossar}
          onNext={() => onNext()}
        />
      );
  }
}

"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export type FeedbackAnimation =
  | "correct"
  | "wrong"
  | "streak"
  | "levelUp"
  | "loading";

const ANIMATION_PATHS: Record<FeedbackAnimation, string> = {
  correct: "/lottie/correct.json",
  wrong: "/lottie/wrong.json",
  streak: "/lottie/streak.json",
  levelUp: "/lottie/level-up.json",
  loading: "/lottie/loading.json",
};

interface LottieFeedbackProps {
  animation: FeedbackAnimation;
  loop?: boolean;
  autoplay?: boolean;
  size?: number;
  className?: string;
  onComplete?: () => void;
}

export function LottieFeedback({
  animation,
  loop = false,
  autoplay = true,
  size = 120,
  className,
  onComplete,
}: LottieFeedbackProps) {
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    fetch(ANIMATION_PATHS[animation])
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => {});
  }, [animation]);

  if (!animationData) return null;

  return (
    <div className={className} style={{ width: size, height: size }}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        onComplete={onComplete}
        style={{ width: size, height: size }}
      />
    </div>
  );
}

// ─── Overlay für Step-Feedback (richtig/falsch) ───

interface FeedbackOverlayProps {
  type: "correct" | "wrong" | null;
  onDone: () => void;
}

export function FeedbackOverlay({ type, onDone }: FeedbackOverlayProps) {
  useEffect(() => {
    if (!type) return;
    const timer = setTimeout(onDone, 1200);
    return () => clearTimeout(timer);
  }, [type, onDone]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="animate-in zoom-in-50 fade-in duration-200">
        <LottieFeedback
          animation={type}
          size={160}
          onComplete={onDone}
        />
      </div>
    </div>
  );
}

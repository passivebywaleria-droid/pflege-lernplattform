"use client";

import { useEffect, useState } from "react";
import { LottieFeedback } from "./lottie-feedback";

interface ConfettiProps {
  active: boolean;
}

/**
 * Session-Ende Feier — Lottie Level-Up Animation + dezente CSS-Partikel.
 */
export function Confetti({ active }: ConfettiProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!active) {
      setShow(false);
      return;
    }
    setShow(true);
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, [active]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden flex items-center justify-center">
      <LottieFeedback animation="levelUp" size={200} />
    </div>
  );
}

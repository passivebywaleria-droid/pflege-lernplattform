"use client";

import { useState, useEffect, useCallback } from "react";

interface CandidateSlot {
  slug: string;
  stepId: string;
  candidates: string[]; // URLs to candidate images
  selected: number | null; // 1-indexed, null = not yet selected
}

// Hardcoded LE list for now
const AVAILABLE_LES = [
  "le-01", "le-02", "le-03", "le-04", "le-05",
  "le-06", "le-07", "le-08", "le-09", "le-10",
];

export default function KuratierenPage() {
  const [selectedLe, setSelectedLe] = useState("le-01");
  const [slots, setSlots] = useState<CandidateSlot[]>([]);
  const [activeSlotIdx, setActiveSlotIdx] = useState(0);
  const [activeVariant, setActiveVariant] = useState(1);
  const [status, setStatus] = useState<Record<string, number | null>>({});
  const [loading, setLoading] = useState(false);

  // Scan candidates directory for the selected LE
  const loadCandidates = useCallback(async () => {
    setLoading(true);
    try {
      // In a real setup this would be an API route scanning the filesystem
      // For now, we try to load images by convention
      const basePath = `/images/content/${selectedLe}/candidates`;

      // Try to fetch a manifest or scan known slugs
      // Since we can't scan directories from client, we use foto-queue.json
      const queueRes = await fetch(`/api/foto-queue?le=${selectedLe}`);
      if (queueRes.ok) {
        const queue = await queueRes.json();
        const loadedSlots: CandidateSlot[] = queue.map((item: { slug: string; stepId: string }) => ({
          slug: item.slug,
          stepId: item.stepId,
          candidates: Array.from({ length: 5 }, (_, i) =>
            `${basePath}/${item.slug}-${i + 1}.png`
          ),
          selected: status[item.slug] ?? null,
        }));
        setSlots(loadedSlots);
        setActiveSlotIdx(0);
        setActiveVariant(1);
      } else {
        // Fallback: scan by trying image URLs
        setSlots([]);
      }
    } catch {
      setSlots([]);
    }
    setLoading(false);
  }, [selectedLe, status]);

  useEffect(() => {
    loadCandidates();
  }, [loadCandidates]);

  const currentSlot = slots[activeSlotIdx];

  const handleSelect = () => {
    if (!currentSlot) return;
    const newStatus = { ...status, [currentSlot.slug]: activeVariant };
    setStatus(newStatus);

    // Update slot
    const newSlots = [...slots];
    newSlots[activeSlotIdx] = { ...currentSlot, selected: activeVariant };
    setSlots(newSlots);

    // Auto-advance to next unselected slot
    const nextUnselected = newSlots.findIndex(
      (s, i) => i > activeSlotIdx && s.selected === null
    );
    if (nextUnselected !== -1) {
      setActiveSlotIdx(nextUnselected);
      setActiveVariant(1);
    }
  };

  const handleReject = () => {
    if (!currentSlot) return;
    const newStatus = { ...status, [currentSlot.slug]: -1 }; // -1 = rejected
    setStatus(newStatus);

    const newSlots = [...slots];
    newSlots[activeSlotIdx] = { ...currentSlot, selected: -1 };
    setSlots(newSlots);
  };

  const totalSlots = slots.length;
  const curatedCount = slots.filter(s => s.selected !== null && s.selected > 0).length;
  const rejectedCount = slots.filter(s => s.selected === -1).length;

  return (
    <div className="min-h-screen bg-[var(--lern-bg)] p-6" style={{ color: "var(--lern-text-primary)" }}>
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Bild-Kuratierung</h1>
          <p className="text-sm text-[var(--lern-text-secondary)] mt-1">
            Wähle das beste Bild aus den generierten Varianten
          </p>
        </div>

        {/* LE Selector */}
        <div className="flex gap-2 flex-wrap">
          {AVAILABLE_LES.map(le => (
            <button
              key={le}
              onClick={() => setSelectedLe(le)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedLe === le
                  ? "bg-[var(--lern-accent)] text-white"
                  : "bg-[var(--lern-bg-primary)] border border-[var(--lern-border)] text-[var(--lern-text-primary)] hover:bg-[var(--lern-divider)]"
              }`}
            >
              {le.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Progress */}
        <div className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)] p-4">
          <div className="flex justify-between text-sm mb-2">
            <span>{curatedCount} kuratiert</span>
            <span>{rejectedCount} abgelehnt</span>
            <span>{totalSlots - curatedCount - rejectedCount} offen</span>
          </div>
          <div className="h-2 bg-[var(--lern-bg)] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#6B8F71] rounded-full transition-all"
              style={{ width: `${totalSlots > 0 ? (curatedCount / totalSlots) * 100 : 0}%` }}
            />
          </div>
        </div>

        {loading && (
          <div className="text-center py-12 text-[var(--lern-text-secondary)]">Lade Kandidaten...</div>
        )}

        {!loading && slots.length === 0 && (
          <div className="text-center py-12 bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)]">
            <p className="text-[var(--lern-text-secondary)]">Keine foto-queue.json für {selectedLe} gefunden.</p>
            <p className="text-xs text-[var(--lern-text-tertiary)] mt-2">
              Erst Content generieren, dann Bilder mit dem Puppeteer-Script erzeugen.
            </p>
          </div>
        )}

        {/* Current Slot */}
        {currentSlot && (
          <div className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)] overflow-hidden">
            {/* Slot Header */}
            <div className="p-4 border-b border-[var(--lern-border)] flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">{currentSlot.stepId}</p>
                <p className="text-xs text-[var(--lern-text-secondary)]">{currentSlot.slug}</p>
              </div>
              <span className="text-xs text-[var(--lern-text-tertiary)]">
                {activeSlotIdx + 1} / {totalSlots}
              </span>
            </div>

            {/* Image Preview */}
            <div className="relative aspect-[4/3] bg-[var(--lern-bg)] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentSlot.candidates[activeVariant - 1]}
                alt={`${currentSlot.slug} Variante ${activeVariant}`}
                className="max-w-full max-h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '';
                  (e.target as HTMLImageElement).alt = 'Bild nicht gefunden';
                }}
              />

              {/* Variant indicator */}
              <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                {activeVariant} / {currentSlot.candidates.length}
              </div>

              {/* Selected badge */}
              {currentSlot.selected === activeVariant && (
                <div className="absolute top-3 left-3 bg-[#6B8F71] text-white text-xs px-2 py-1 rounded-full font-medium">
                  Ausgewählt
                </div>
              )}
              {currentSlot.selected === -1 && (
                <div className="absolute top-3 left-3 bg-[#C96B5C] text-white text-xs px-2 py-1 rounded-full font-medium">
                  Abgelehnt
                </div>
              )}
            </div>

            {/* Variant Selector (Number Buttons) */}
            <div className="p-4 border-t border-[var(--lern-border)]">
              <div className="flex justify-center gap-2 mb-4">
                {currentSlot.candidates.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveVariant(i + 1)}
                    className={`w-10 h-10 rounded-full text-sm font-bold transition-all ${
                      activeVariant === i + 1
                        ? "bg-[var(--lern-accent)] text-white scale-110"
                        : currentSlot.selected === i + 1
                          ? "bg-[#6B8F71] text-white"
                          : "bg-[var(--lern-bg)] text-[var(--lern-text-primary)] hover:bg-[var(--lern-divider)]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={handleSelect}
                  className="flex-1 rounded-2xl bg-[var(--lern-accent)] px-4 py-3 text-sm font-semibold text-white transition-all active:scale-[0.98] hover:bg-[#B07A72]"
                >
                  Übernehmen (#{activeVariant})
                </button>
                <button
                  onClick={handleReject}
                  className="rounded-2xl bg-[var(--lern-bg)] px-4 py-3 text-sm font-semibold text-[#C96B5C] transition-all active:scale-[0.98] hover:bg-[var(--lern-divider)]"
                >
                  Alle ablehnen
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Slot List */}
        {slots.length > 0 && (
          <div className="bg-[var(--lern-bg-primary)] rounded-2xl border border-[var(--lern-border)] divide-y divide-[var(--lern-border)]">
            <div className="p-3 bg-[var(--lern-bg)] rounded-t-2xl">
              <p className="text-xs font-medium text-[var(--lern-text-secondary)]">Alle Slots</p>
            </div>
            {slots.map((slot, i) => (
              <button
                key={slot.slug}
                onClick={() => {
                  setActiveSlotIdx(i);
                  setActiveVariant(slot.selected && slot.selected > 0 ? slot.selected : 1);
                }}
                className={`w-full text-left px-4 py-3 flex justify-between items-center hover:bg-[var(--lern-bg)] transition-colors ${
                  i === activeSlotIdx ? "bg-[var(--lern-accent)]/5" : ""
                }`}
              >
                <div>
                  <p className="text-sm font-medium">{slot.slug}</p>
                  <p className="text-xs text-[var(--lern-text-tertiary)]">{slot.stepId}</p>
                </div>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  slot.selected && slot.selected > 0
                    ? "bg-[#6B8F71]/10 text-[#6B8F71]"
                    : slot.selected === -1
                      ? "bg-[#C96B5C]/10 text-[#C96B5C]"
                      : "bg-[var(--lern-bg)] text-[var(--lern-text-tertiary)]"
                }`}>
                  {slot.selected && slot.selected > 0
                    ? `#${slot.selected}`
                    : slot.selected === -1
                      ? "Abgelehnt"
                      : "Offen"}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

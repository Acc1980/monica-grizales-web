"use client";

import { useState, useRef, useEffect } from "react";
import { QUIZ_QUESTIONS } from "../quiz-data";

interface QuizEngineProps {
  onComplete: (answers: number[]) => void;
}

export default function QuizEngine({ onComplete }: QuizEngineProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    new Array(10).fill(null)
  );
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const question = QUIZ_QUESTIONS[currentQ];
  const progress = ((currentQ + 1) / QUIZ_QUESTIONS.length) * 100;

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [currentQ]);

  function handleSelect(points: number) {
    if (isTransitioning) return;

    const updated = [...answers];
    updated[currentQ] = points;
    setAnswers(updated);

    setIsTransitioning(true);
    setTimeout(() => {
      if (currentQ < QUIZ_QUESTIONS.length - 1) {
        setCurrentQ(currentQ + 1);
      } else {
        onComplete(updated as number[]);
      }
      setIsTransitioning(false);
    }, 500);
  }

  function handleBack() {
    if (currentQ > 0 && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQ(currentQ - 1);
        setIsTransitioning(false);
      }, 300);
    }
  }

  return (
    <section ref={sectionRef} className="py-14 md:py-20" id="quiz">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-humo-400 text-sm font-medium">
              Pregunta {currentQ + 1} de {QUIZ_QUESTIONS.length}
            </span>
            <span className="text-humo-400 text-sm">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-arena-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-malva-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div
          className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-arena-200 transition-all duration-400 ${
            isTransitioning
              ? "opacity-0 translate-y-2"
              : "opacity-100 translate-y-0"
          }`}
        >
          <h2 className="font-serif text-xl md:text-2xl font-bold text-humo-700 mb-8 leading-snug">
            {question.question}
          </h2>

          <div className="space-y-3">
            {question.options.map((option) => {
              const isSelected = answers[currentQ] === option.points;
              return (
                <button
                  key={option.label}
                  onClick={() => handleSelect(option.points)}
                  disabled={isTransitioning}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-start gap-3 ${
                    isSelected
                      ? "border-malva-500 bg-malva-50 ring-1 ring-malva-500/30"
                      : "border-arena-200 hover:border-malva-300 hover:bg-arena-50"
                  }`}
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold transition-colors ${
                      isSelected
                        ? "bg-malva-500 text-white"
                        : "bg-arena-200 text-humo-500"
                    }`}
                  >
                    {option.label}
                  </span>
                  <span className="text-humo-600 leading-relaxed pt-1">
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        {currentQ > 0 && (
          <button
            onClick={handleBack}
            disabled={isTransitioning}
            className="mt-6 text-humo-400 hover:text-humo-600 text-sm font-medium transition-colors flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Pregunta anterior
          </button>
        )}
      </div>
    </section>
  );
}

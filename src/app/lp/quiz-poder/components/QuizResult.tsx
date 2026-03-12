"use client";

import { useRef, useEffect } from "react";
import { QUIZ_RESULTS } from "../quiz-data";
import type { QuizResultDef } from "../quiz-data";

const WHATSAPP_NUMBER = "573217968856";

const POWER_INDICATORS: Record<string, { bars: number; color: string }> = {
  poder_bajo: { bars: 2, color: "bg-malva-400" },
  poder_medio: { bars: 4, color: "bg-malva-400" },
  poder_alto: { bars: 6, color: "bg-malva-500" },
};

function PowerMeter({ resultKey }: { resultKey: string }) {
  const config = POWER_INDICATORS[resultKey] || POWER_INDICATORS.poder_bajo;
  return (
    <div className="flex items-end gap-1.5 justify-center my-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className={`w-4 rounded-sm transition-all duration-500 ${
            i < config.bars ? config.color : "bg-arena-300"
          }`}
          style={{ height: `${(i + 1) * 8 + 8}px` }}
        />
      ))}
    </div>
  );
}

export default function QuizResult({
  resultKey,
}: {
  resultKey: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const result: QuizResultDef =
    QUIZ_RESULTS.find((r) => r.key === resultKey) || QUIZ_RESULTS[0];

  const waMsg = encodeURIComponent(
    `Hola Mónica, hice el quiz de poder personal y mi resultado fue "${result.title}". Quiero saber más sobre el entrenamiento Reconociendo mi Poder.`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section ref={sectionRef} className="py-14 md:py-20" id="result">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-arena-200 text-center">
          <p className="text-malva-600 text-sm font-medium tracking-wider uppercase mb-2">
            Tu resultado
          </p>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-1">
            {result.title}
          </h2>

          <p className="text-humo-400 text-sm mb-2">{result.subtitle}</p>

          <p className="font-serif text-2xl font-bold text-malva-500">
            Estás usando aproximadamente el {result.percentage} de tu poder
            personal
          </p>

          <PowerMeter resultKey={resultKey} />

          <div className="text-left space-y-4 mt-8 mb-8">
            <p className="text-humo-600 leading-relaxed">
              {result.description}
            </p>
            <div className="bg-arena-50 border border-arena-200 rounded-xl p-5">
              <p className="text-sm font-medium text-malva-600 mb-2">
                Lo que puedes hacer ahora:
              </p>
              <p className="text-humo-600 text-sm leading-relaxed">
                {result.action}
              </p>
            </div>
          </div>

          {/* Aviso de email */}
          <div className="bg-malva-50 border border-malva-200 rounded-xl p-4 mb-6 text-left">
            <p className="text-humo-700 font-medium text-sm leading-relaxed">
              Revisa tu correo — te envié ejercicios prácticos que van a apoyar tu trabajo interior.
            </p>
            <p className="text-humo-400 text-xs mt-1">
              (Revisa también la carpeta de spam)
            </p>
          </div>

          {/* Puente Masterclass */}
          <div className="border-2 border-malva-300 rounded-2xl p-6 mb-8 text-center bg-malva-50/50">
            <p className="text-malva-600 text-xs font-medium tracking-[0.2em] uppercase mb-2">
              Masterclass gratuita
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-humo-700 mb-2">
              3 bloqueos que te impiden ocupar tu lugar como mujer
            </h3>
            <p className="text-malva-700 font-semibold text-base mb-1">
              Martes 24 de marzo &middot; 7:00 PM (Colombia)
            </p>
            <p className="text-humo-400 text-sm mb-4">
              Vía Zoom &middot; 45 min + preguntas
            </p>
            <p className="text-humo-600 text-sm leading-relaxed mb-5">
              Si quieres trabajar en vivo lo que descubriste en el quiz, te espero.
              Vamos a ir más profundo en los patrones que bloquean tu poder personal.
            </p>
            <a
              href="/lp/masterclass"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 rounded-full bg-malva-600 text-white font-bold text-base hover:bg-malva-700 transition-all duration-300 shadow-xl shadow-malva-600/30 hover:-translate-y-0.5 gap-2"
            >
              Quiero registrarme a la masterclass
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          {/* Separador */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-arena-200" />
            <span className="text-malva-400 text-xs tracking-widest">O si prefieres</span>
            <div className="flex-1 h-px bg-arena-200" />
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 rounded-full bg-malva-600 text-white font-bold text-base hover:bg-malva-700 transition-all duration-300 shadow-xl shadow-malva-600/30 hover:-translate-y-0.5 gap-2"
          >
            {result.cta}
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>

          <a
            href="/servicios/reconociendo-mi-poder"
            className="block mt-4 text-malva-500 hover:text-malva-700 text-sm font-medium underline transition-colors"
          >
            Ver detalles del entrenamiento
          </a>
        </div>
      </div>
    </section>
  );
}

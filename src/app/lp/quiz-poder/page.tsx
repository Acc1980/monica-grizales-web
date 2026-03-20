"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import QuizHero from "./components/QuizHero";
import QuizEngine from "./components/QuizEngine";
import DataCaptureForm from "./components/DataCaptureForm";
import QuizResult from "./components/QuizResult";

const WHATSAPP_NUMBER = "573217968856";

export default function QuizPoderPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      (window as any).fbq("track", "ViewContent", {
        content_name: "Quiz Poder Personal",
        content_category: "quiz",
      });
    }
  }, []);

  const [phase, setPhase] = useState<"intro" | "quiz" | "capture" | "result">(
    "intro"
  );
  const [answers, setAnswers] = useState<number[]>([]);
  const [resultKey, setResultKey] = useState<string>("");

  function handleStartQuiz() {
    setPhase("quiz");
  }

  function handleQuizComplete(finalAnswers: number[]) {
    setAnswers(finalAnswers);
    setPhase("capture");
  }

  function handleCaptureComplete(resultado: string) {
    setResultKey(resultado);
    setPhase("result");
  }

  return (
    <div className="bg-arena-50 min-h-screen">
      {/* ════════ HERO ════════ */}
      <QuizHero onStartQuiz={handleStartQuiz} />

      {/* ════════ CONTEXTO ════════ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-humo-600 text-lg md:text-xl leading-relaxed mb-6">
            Muchas mujeres viven desde el{" "}
            <em className="text-malva-500">mandato familiar</em>, el deber
            ser y la{" "}
            <em className="text-malva-500">lealtad invisible</em> — sin
            saber que están usando solo una fracción de su{" "}
            <em className="text-malva-500">poder personal</em>.
          </p>
          <p className="text-humo-500 text-base leading-relaxed">
            Este quiz te ayuda a identificar en qué punto estás y qué áreas
            puedes trabajar para reconectar con tu fuerza.
          </p>
        </div>
      </section>

      {/* ════════ QUIZ / CAPTURE / RESULT ════════ */}
      {phase === "intro" && (
        <section className="py-14 text-center">
          <button
            onClick={handleStartQuiz}
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-malva-600 text-white font-bold text-lg hover:bg-malva-700 transition-all duration-300 shadow-xl shadow-malva-600/30 hover:-translate-y-0.5 gap-2"
          >
            Comenzar el quiz
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
          </button>
        </section>
      )}

      {phase === "quiz" && <QuizEngine onComplete={handleQuizComplete} />}

      {phase === "capture" && (
        <DataCaptureForm
          answers={answers}
          onComplete={handleCaptureComplete}
        />
      )}

      {phase === "result" && <QuizResult resultKey={resultKey} />}

      {/* ════════ SOBRE MÓNICA ════════ */}
      <section className="py-14 md:py-20 bg-arena-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="uppercase tracking-[0.25em] text-xs text-malva-600 font-semibold mb-8 text-center">
            Sobre Mónica
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-square w-full max-w-sm mx-auto rounded-2xl overflow-hidden">
              <Image
                src="/images/foto9.jpg"
                alt="Mónica Grizales"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-humo-700 mb-4">
                Monica A. Grizales Cuartas
              </h2>
              <p className="text-humo-500 leading-relaxed mb-4">
                Coach Ontológica Certificada y acompañante de procesos de
                transformación profunda en mujeres. Su trabajo nace de una
                convicción clara: cuando una mujer ordena su mundo interno,
                transforma su forma de relacionarse, de liderar y de crear
                abundancia en su vida.
              </p>
              <p className="font-serif text-malva-500 italic text-sm leading-relaxed mb-6">
                &ldquo;Cuando una mujer se reconoce, todo lo demás comienza a alinearse.&rdquo;
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-white rounded-xl border border-arena-200">
                  <p className="font-serif text-2xl font-bold text-malva-600">
                    +5,000
                  </p>
                  <p className="text-humo-400 text-xs">Mujeres acompañadas</p>
                </div>
                <div className="text-center p-3 bg-white rounded-xl border border-arena-200">
                  <p className="font-serif text-2xl font-bold text-malva-600">
                    15+
                  </p>
                  <p className="text-humo-400 text-xs">Años de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ COMUNIDAD WHATSAPP ════════ */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-2xl mb-3">💬</p>
          <h2 className="font-serif text-xl md:text-2xl font-bold text-humo-700 mb-3">
            Únete a nuestra comunidad de WhatsApp
          </h2>
          <p className="text-humo-500 text-base leading-relaxed mb-6">
            Un espacio exclusivo para mujeres que están en este camino de reconocerse y transformarse juntas.
          </p>
          <a
            href="https://chat.whatsapp.com/DRc2j575hcVDE9Ts7CPQfe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-base text-white transition-all duration-300 hover:-translate-y-0.5 gap-2"
            style={{ backgroundColor: "#c88d74" }}
          >
            Unirme ahora
          </a>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <div className="bg-humo-700 text-arena-400 py-8 text-center text-sm">
        <p className="text-malva-400 font-medium mb-2">✦ Mónica Grizales</p>
        <div className="flex items-center justify-center gap-4 mb-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          <span>&middot;</span>
          <a
            href="https://www.instagram.com/monigrizales/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
        </div>
        <p className="text-arena-500 text-xs">
          Reconociendo mi Poder — 15 y 16 de abril &middot; 100% virtual
        </p>
        <p className="text-arena-500 text-xs mt-2">
          &copy; {new Date().getFullYear()} Mónica Grizales &middot; Sanación
          Emocional y Liderazgo Femenino
        </p>
      </div>
    </div>
  );
}

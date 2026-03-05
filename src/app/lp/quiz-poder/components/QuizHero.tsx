"use client";

export default function QuizHero({ onStartQuiz }: { onStartQuiz: () => void }) {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-arena-200" />
      <div className="absolute inset-0 bg-gradient-to-b from-arena-50/60 to-arena-200/80" />

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-ciruela-400/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-malva-400/10 blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative text-center">
        <p className="text-malva-600 font-medium text-sm tracking-wider mb-6">
          ✦ Mónica Grizales
        </p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-humo-700 mb-6 leading-tight">
          ¿Cuánto de tu{" "}
          <span className="text-ciruela-400 italic">poder personal</span>{" "}
          estás usando?
        </h1>
        <p className="text-humo-500 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
          Descúbrelo en 2 minutos con este quiz gratuito de 10 preguntas
        </p>
        <button
          onClick={onStartQuiz}
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-malva-600 text-white font-bold text-lg hover:bg-malva-700 transition-all duration-300 shadow-xl shadow-malva-600/30 hover:-translate-y-0.5 gap-2"
        >
          Quiero hacer el quiz
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
      </div>
    </section>
  );
}

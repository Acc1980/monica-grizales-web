import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reconociendo mi Poder — Programa",
  description:
    "Programa virtual de sanación emocional y liderazgo femenino. 15 y 16 de abril de 2026. 100% Virtual.",
};

export default function ProgramaPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-arena-100/60">
        <div className="section-container text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
            Primer Entrenamiento del Año
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-humo-700 mb-6">
            Reconociendo mi Poder
          </h1>
          <p className="text-humo-500 text-lg md:text-xl max-w-2xl mx-auto mb-4">
            Un espacio para mujeres que están listas para dejar de vivir desde
            el deber y empezar a elegir con conciencia.
          </p>
          <p className="font-serif text-malva-400 italic text-lg mb-2">
            15 y 16 de abril de 2026 &middot; 100% Virtual
          </p>
        </div>
      </section>

      {/* Qué es */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-humo-700 mb-6 text-center">
              ¿Qué es Reconociendo mi Poder?
            </h2>
            <div className="space-y-6 text-humo-500 text-lg leading-relaxed">
              <p>
                No es un espacio para aprender a ser mejor. Es un espacio para
                dejar de traicionarte.
              </p>
              <p>
                Reconociendo mi Poder es una experiencia intensiva de dos días
                donde trabajaremos en profundidad los patrones emocionales que te
                mantienen desconectada de tu poder personal.
              </p>
              <p>
                A través de ejercicios vivenciales, herramientas de coaching
                ontológico y mirada sistémica, crearemos un espacio seguro para
                que puedas soltar lo que ya no te pertenece y reconectar con quien
                realmente eres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué vas a vivir */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
              Contenido del Programa
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700">
              ¿Qué vas a vivir en estos dos días?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                day: "Día 1 — 15 de abril",
                title: "Reconocer",
                items: [
                  "Identificar los patrones emocionales que te limitan",
                  "Comprender el origen sistémico de tus creencias",
                  "Conectar con las emociones que has evitado",
                  "Ejercicios de regulación emocional y presencia",
                ],
              },
              {
                day: "Día 2 — 16 de abril",
                title: "Elegir",
                items: [
                  "Tomar tu lugar desde la conciencia",
                  "Soltar la culpa y el deber impuesto",
                  "Diseñar compromisos reales contigo misma",
                  "Ritual de cierre y declaración de poder",
                ],
              },
            ].map((dia, index) => (
              <div key={index} className="card">
                <p className="text-malva-400 text-sm font-medium uppercase tracking-wider mb-2">
                  {dia.day}
                </p>
                <h3 className="font-serif text-2xl font-bold text-humo-700 mb-6">
                  {dia.title}
                </h3>
                <ul className="space-y-3">
                  {dia.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-humo-500">
                      <svg
                        className="w-5 h-5 text-malva-400 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quién */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-8">
              Este programa es para ti si...
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {[
                "Sientes que vives en piloto automático, cumpliendo roles",
                "Cargas culpa cada vez que te eliges a ti misma",
                "Sabes que algo tiene que cambiar pero no sabes por dónde empezar",
                "Te desconectaste de lo que sientes y de lo que quieres",
                "Repites patrones en tus relaciones o con el dinero",
                "Estás lista para dejar de reaccionar y empezar a elegir",
              ].map((item, index) => (
                <div key={index} className="flex gap-3 p-4 rounded-xl bg-white border border-arena-200">
                  <svg
                    className="w-5 h-5 text-ciruela-600 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                  <span className="text-humo-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detalles prácticos */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-humo-700 mb-10 text-center">
              Detalles del programa
            </h2>
            <div className="card space-y-6">
              {[
                { label: "Fechas", value: "15 y 16 de abril de 2026" },
                { label: "Modalidad", value: "100% Virtual (en vivo)" },
                { label: "Duración", value: "2 días intensivos" },
                { label: "Plataforma", value: "Zoom (el enlace se envía al inscribirte)" },
                { label: "Facilitadora", value: "Mónica Grizales" },
              ].map((detalle, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-arena-200 last:border-0"
                >
                  <span className="text-humo-400 text-sm uppercase tracking-wider font-medium">
                    {detalle.label}
                  </span>
                  <span className="text-humo-700 font-medium mt-1 sm:mt-0">
                    {detalle.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-ciruela-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ciruela-800/50 to-malva-400/10" />
        <div className="section-container relative text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Tu lugar te está esperando
          </h2>
          <p className="text-arena-200 text-lg mb-10 max-w-xl mx-auto">
            No necesitas estar lista. Solo necesitas estar dispuesta.
          </p>
          <Link
            href="/inscripcion"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-ciruela-700 font-bold text-lg hover:bg-arena-100 transition-all duration-300 shadow-xl hover:-translate-y-0.5"
          >
            Inscribirme ahora
          </Link>
        </div>
      </section>
    </>
  );
}

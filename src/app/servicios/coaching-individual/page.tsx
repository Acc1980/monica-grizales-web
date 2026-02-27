import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sesiones 1 a 1 de Coaching — Mónica Grizales",
  description:
    "Acompañamiento individual de coaching ontológico con Mónica Grizales. Trabaja en profundidad tu historia, tus emociones y tus decisiones en un espacio íntimo y a tu ritmo.",
};

const WHATSAPP_NUMBER = "573000000000";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Mónica, me gustaría agendar una sesión individual de coaching. ¿Podrías darme más información?"
);

export default function CoachingIndividualPage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-arena-100/60 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-malva-200/20 rounded-full blur-3xl" />
        <div className="section-container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-ciruela-600 font-medium mb-4">
                Acompañamiento Personal
              </p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-humo-700 leading-tight mb-6">
                Sesiones 1 a 1{" "}
                <span className="text-ciruela-600">de Coaching</span>
              </h1>
              <p className="text-humo-500 text-lg leading-relaxed mb-4">
                Un espacio íntimo, seguro y personalizado donde puedes trabajar
                en profundidad lo que necesitas. Sin guion, sin prisa. Solo tú,
                tu proceso y el acompañamiento de Mónica.
              </p>
              <p className="font-serif text-ciruela-600 italic text-lg mb-10">
                Tu transformación, a tu ritmo.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-base px-8 py-3.5 gap-2 inline-flex"
              >
                Solicitar información
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/monica.png"
                alt="Mónica Grizales — Coach Ontológica"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PARA QUIÉN ES ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
                ¿Para quién son las sesiones individuales?
              </h2>
              <p className="text-humo-500 text-lg">
                Este espacio es para ti si necesitas un acompañamiento más
                profundo, personalizado y a tu propio ritmo.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Sientes que necesitas un espacio solo para ti",
                "Estás pasando por un momento de crisis o transición",
                "Quieres trabajar patrones que se repiten en tus relaciones",
                "Necesitas tomar decisiones importantes con claridad",
                "Te cuesta poner límites o priorizar tus necesidades",
                "Quieres profundizar en tu historia familiar y sus efectos",
              ].map((item, index) => (
                <div key={index} className="flex gap-3 items-start p-4 rounded-xl bg-white border border-arena-200">
                  <div className="w-6 h-6 rounded-full bg-ciruela-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-humo-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ QUÉ TRABAJAMOS ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.25em] text-sm text-ciruela-600 font-medium mb-4">
              Áreas de trabajo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700">
              ¿Qué podemos trabajar juntas?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: "Regulación emocional",
                desc: "Identificar y trabajar las emociones que te gobiernan: culpa, miedo, tristeza, rabia.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: "Relaciones y vínculos",
                desc: "Patrones de pareja, familia y relaciones que se repiten. Aprender a vincularte desde la adultez.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                ),
                title: "Identidad y poder personal",
                desc: "Reconectar con quién eres, soltar mandatos y tomar tu lugar con conciencia.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                  </svg>
                ),
                title: "Historia familiar y sistémica",
                desc: "Lealtades invisibles, herencias emocionales y dinámicas familiares que afectan tu presente.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>
                ),
                title: "Toma de decisiones",
                desc: "Claridad para elegir desde ti, no desde el miedo, la culpa o el deber impuesto.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                  </svg>
                ),
                title: "Abundancia y prosperidad",
                desc: "Tu relación con el dinero, el éxito y la expansión desde la gratitud y el orden sistémico.",
              },
            ].map((item, index) => (
              <div key={index} className="card border-arena-200 p-6 group">
                <div className="w-12 h-12 rounded-2xl bg-malva-100/60 text-ciruela-600 flex items-center justify-center mb-4 group-hover:bg-ciruela-600 group-hover:text-white transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-humo-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-humo-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CÓMO FUNCIONA ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
                ¿Cómo funciona?
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Escríbenos por WhatsApp",
                  desc: "Cuéntanos brevemente tu situación y lo que necesitas trabajar.",
                },
                {
                  step: "2",
                  title: "Conversación inicial",
                  desc: "Mónica evaluará si el coaching individual es el mejor camino para ti.",
                },
                {
                  step: "3",
                  title: "Agendamos tu sesión",
                  desc: "Definimos horario, modalidad (virtual o presencial) y comenzamos.",
                },
                {
                  step: "4",
                  title: "Tu proceso a tu ritmo",
                  desc: "Cada sesión se construye según lo que necesitas. Sin fórmulas, con profundidad.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 items-start p-5 rounded-xl bg-white border border-arena-200">
                  <div className="w-10 h-10 rounded-full bg-ciruela-600 text-white flex items-center justify-center shrink-0 font-serif font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-humo-700 mb-1">{item.title}</h3>
                    <p className="text-humo-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ TRAYECTORIA ════════ */}
      <section className="py-16 bg-arena-200/40">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            {[
              { number: "+5,000", label: "Mujeres acompañadas" },
              { number: "10+", label: "Años de experiencia" },
              { number: "100%", label: "Personalizado" },
            ].map((item, index) => (
              <div key={index}>
                <p className="font-serif text-4xl font-bold text-ciruela-600 mb-1">
                  {item.number}
                </p>
                <p className="text-humo-500 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section className="py-20 md:py-28 bg-ciruela-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ciruela-800/50 to-malva-400/10" />
        <div className="section-container relative text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Tu proceso empieza con una conversación
          </h2>
          <p className="text-arena-200 text-lg mb-10 max-w-xl mx-auto">
            No necesitas tener todo claro. Solo necesitas estar dispuesta a
            mirarte. Escríbenos y comenzamos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-ciruela-700 font-bold text-lg hover:bg-arena-100 transition-all duration-300 shadow-xl hover:-translate-y-0.5 gap-2"
            >
              Solicitar información
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border-2 border-white/40 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300"
            >
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

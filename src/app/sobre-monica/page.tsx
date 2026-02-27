import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SparkleIcon from "@/components/SparkleIcon";

export const metadata: Metadata = {
  title: "Sobre Mónica",
  description:
    "Conoce a Mónica Grizales: Coach Ontológica Certificada y acompañante de procesos de transformación profunda en mujeres.",
};

export default function SobreMonicaPage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-arena-100/60">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Texto */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-malva-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
                <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium">
                  Sobre Mónica
                </p>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-humo-700 leading-tight mb-6">
                Mónica Grizales
              </h1>
              <p className="text-humo-600 text-lg md:text-xl leading-relaxed mb-4">
                Mónica es{" "}
                <strong className="text-humo-700">Coach Ontológica Certificada</strong>{" "}
                y acompañante de procesos de transformación profunda en mujeres.
              </p>
              <p className="text-humo-500 leading-relaxed mb-8">
                Su trabajo nace de una convicción clara:{" "}
                <em className="text-humo-600">
                  cuando una mujer ordena su mundo interno, transforma su forma
                  de relacionarse, de liderar y de crear abundancia en su vida.
                </em>
              </p>
              <div className="flex items-start gap-3">
                <SparkleIcon className="w-5 h-5 text-ciruela-600 shrink-0 mt-1" />
                <p className="font-serif italic text-malva-400 text-lg leading-relaxed">
                  &ldquo;Cuando una mujer se reconoce, todo lo demás comienza a
                  alinearse.&rdquo;
                </p>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-arena-200 overflow-hidden shadow-lg">
                <Image
                  src="/images/monica.png"
                  alt="Mónica Grizales — Coach Ontológica Certificada"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SU CAMINO DE ACOMPAÑAMIENTO ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
              Su camino de acompañamiento
            </h2>
            <p className="text-humo-500 text-lg max-w-2xl mx-auto">
              A lo largo de su camino, ha acompañado procesos en tres grandes
              dimensiones del crecimiento femenino:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: "Relación consigo misma",
                description: "Reconectar con el poder personal y la voz interior",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: "Relación de pareja",
                description: "Vínculos conscientes desde la adultez emocional",
              },
              {
                icon: (
                  <SparkleIcon className="w-7 h-7" />
                ),
                title: "Relación con la abundancia",
                description: "Prosperar desde la gratitud, más allá del dinero",
              },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 rounded-full bg-malva-100/60 text-malva-400 flex items-center justify-center mx-auto mb-5">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-humo-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-humo-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ SU ENFOQUE ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Texto */}
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
                Su Enfoque
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 leading-tight mb-6">
                Transformaciones sostenibles y reales
              </h2>
              <p className="text-humo-500 text-lg leading-relaxed mb-8">
                Su enfoque integra{" "}
                <strong className="text-humo-700">
                  conciencia ontológica, regulación emocional y coherencia entre
                  ser, lenguaje y cuerpo
                </strong>
                , permitiendo transformaciones sostenibles y reales.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    ),
                    title: "Conciencia Ontológica",
                    description: "Transformación del ser a través del lenguaje y la observación",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    ),
                    title: "Regulación Emocional",
                    description: "Pasar de la reacción a la elección consciente",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    ),
                    title: "Coherencia Integral",
                    description: "Alineación entre ser, lenguaje y cuerpo",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-arena-200"
                  >
                    <div className="w-10 h-10 rounded-full bg-malva-50 text-malva-400 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-malva-400 mb-0.5">
                        {item.title}
                      </h4>
                      <p className="text-humo-500 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-arena-200 overflow-hidden shadow-lg">
                <Image
                  src="/images/foto2.png"
                  alt="Mujeres unidas frente al mar en proceso de transformación"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CTA PROGRAMA ════════ */}
      <section className="py-20 md:py-28 bg-ciruela-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ciruela-700/80 to-malva-400/20" />
        <div className="section-container relative text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-malva-300 font-medium mb-4">
            Su Entrenamiento Principal
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            &ldquo;Reconociendo mi Poder&rdquo;
          </h2>
          <p className="text-arena-200 text-lg max-w-2xl mx-auto mb-4 leading-relaxed">
            Hoy, su entrenamiento es la puerta de entrada a este trabajo. Un
            espacio donde las mujeres identifican patrones repetidos, sanan
            mandatos femeninos y recuperan su poder personal para tomar
            decisiones desde la elección consciente.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-arena-200 text-sm mb-8">
            <span>15 y 16 de abril</span>
            <span>&middot;</span>
            <span className="font-semibold">100% Virtual</span>
          </div>
          <br />
          <Link
            href="/servicios/reconociendo-mi-poder"
            className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-white text-ciruela-700 font-semibold hover:bg-arena-100 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            Conocer el proceso
          </Link>
        </div>
      </section>

      {/* ════════ CITA FINAL ════════ */}
      <section className="py-16 md:py-20 bg-arena-50">
        <div className="section-container">
          <div className="card max-w-3xl mx-auto text-center py-12 border-arena-200">
            <SparkleIcon className="w-7 h-7 text-ciruela-600 mx-auto mb-6" />
            <p className="font-serif text-xl md:text-2xl text-humo-600 leading-relaxed max-w-xl mx-auto">
              &ldquo;Más que motivación, Mónica facilita procesos de orden
              interno. Porque cuando una mujer se reconoce, todo lo demás
              comienza a alinearse.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ════════ CTA FINAL ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
            ¿Lista para comenzar tu proceso?
          </h2>
          <p className="text-humo-500 text-lg max-w-xl mx-auto mb-10">
            El primer paso es reconocer que mereces elegir. El segundo es dar ese
            paso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inscripcion" className="btn-primary">
              Inscribirme ahora
            </Link>
            <Link href="/contacto" className="btn-secondary">
              Contactar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

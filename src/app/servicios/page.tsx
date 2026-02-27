import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SparkleIcon from "@/components/SparkleIcon";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conoce los procesos de transformación que ofrece Mónica Grizales: Reconociendo mi Poder, Entrenamiento de Parejas, Abundancia Consciente y Sesiones 1 a 1 de Coaching.",
};

const servicios = [
  {
    slug: "reconociendo-mi-poder",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Reconociendo mi Poder",
    subtitle: "Poder Personal",
    description:
      "Reconoce tu valor, toma tu lugar y fortalece tu liderazgo personal desde la conciencia. Para mujeres con bloqueos emocionales y desconexión de su poder.",
    detail: "15 y 16 de abril 2026 · 100% Virtual",
    available: true,
  },
  {
    slug: "entrenamiento-parejas",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Entrenamiento de Parejas",
    subtitle: "Relaciones Conscientes",
    description:
      "Comprende tus vínculos desde la adultez emocional y el orden sistémico. Para mujeres y parejas con conflictos repetitivos.",
    detail: "Próximamente",
    available: false,
  },
  {
    slug: "abundancia-consciente",
    icon: (
      <SparkleIcon className="w-8 h-8" />
    ),
    title: "Abundancia Consciente",
    subtitle: "Relación con la Abundancia",
    description:
      "Descubre la relación entre tus procesos internos y tus resultados externos en dinero y bienestar personal. Libérate de patrones de escasez.",
    detail: "Próximamente",
    available: false,
  },
  {
    slug: "coaching-individual",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Sesiones 1 a 1 de Coaching",
    subtitle: "Acompañamiento Personal",
    description:
      "Proceso individual de coaching ontológico para trabajar en profundidad tu historia, tus emociones y tus decisiones. Un espacio íntimo y a tu ritmo.",
    detail: "Agenda tu sesión",
    available: true,
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <Image
          src="/images/foto7.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-arena-50/75 backdrop-blur-[2px]" />
        <div className="section-container relative">
          <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
            Servicios
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-humo-700 leading-tight mb-4 max-w-3xl">
            Procesos de transformación consciente
          </h1>
          <p className="text-humo-500 text-lg max-w-2xl">
            Cada proceso está diseñado para acompañarte en una dimensión
            específica de tu crecimiento. Elige el que resuene con tu momento.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicios.map((servicio) => (
              <div
                key={servicio.slug}
                className="card group flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-malva-100/60 text-malva-400 flex items-center justify-center mb-6 group-hover:bg-ciruela-600 group-hover:text-white transition-colors duration-300">
                  {servicio.icon}
                </div>

                <p className="text-malva-400 text-sm font-medium uppercase tracking-wider mb-2">
                  {servicio.subtitle}
                </p>
                <h2 className="font-serif text-2xl font-bold text-humo-700 mb-3">
                  {servicio.title}
                </h2>
                <p className="text-humo-500 leading-relaxed mb-4 flex-grow">
                  {servicio.description}
                </p>

                <p className="text-sm font-serif italic text-malva-400 mb-6">
                  {servicio.detail}
                </p>

                {servicio.available ? (
                  <Link
                    href={`/servicios/${servicio.slug}`}
                    className="btn-primary text-sm text-center"
                  >
                    Conocer más
                  </Link>
                ) : (
                  <span className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-arena-300 text-humo-400 text-sm font-medium cursor-default">
                    Próximamente
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cita */}
      <section className="py-16 bg-arena-200/40">
        <div className="section-container text-center">
          <SparkleIcon className="w-7 h-7 text-ciruela-600 mx-auto mb-6" />
          <blockquote className="font-serif text-xl md:text-2xl text-humo-600 leading-relaxed max-w-2xl mx-auto">
            &ldquo;No se trata de hacer más, sino de elegir desde un lugar
            diferente. Cada proceso es una puerta hacia ti misma.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-arena-50">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
            ¿No sabes cuál es para ti?
          </h2>
          <p className="text-humo-500 text-lg max-w-xl mx-auto mb-10">
            Escríbenos y te orientamos según tu momento y tu necesidad.
          </p>
          <Link href="/contacto" className="btn-primary">
            Contactar
          </Link>
        </div>
      </section>
    </>
  );
}

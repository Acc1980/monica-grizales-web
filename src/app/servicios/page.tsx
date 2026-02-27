import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Conoce los procesos de transformación que ofrece Mónica Grizales: Reconociendo mi Poder, Entrenamiento de Parejas y Abundancia Consciente.",
};

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" />
      <path d="M19 2L19.5 4L21 3.5L19.5 4.5L20 6L19 5L18 6L18.5 4.5L17 4L18.5 3.5L19 2Z" opacity="0.7" />
    </svg>
  );
}

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
];

export default function ServiciosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-arena-100/60">
        <div className="section-container">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          <SparkleIcon className="w-7 h-7 text-malva-400 mx-auto mb-6" />
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

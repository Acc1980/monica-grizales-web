import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" />
      <path d="M19 2L19.5 4L21 3.5L19.5 4.5L20 6L19 5L18 6L18.5 4.5L17 4L18.5 3.5L19 2Z" opacity="0.7" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        {/* Imagen de fondo — mujer caminando en la playa */}
        <Image
          src="/images/hero-playa.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={80}
        />
        {/* Overlay difuminado para legibilidad */}
        <div className="absolute inset-0 bg-arena-50/70 backdrop-blur-sm" />

        <div className="section-container relative">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-8">
              Centro de Sanación
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-humo-700 leading-[1.15] mb-6">
              La transformación no ocurre cuando entiendes tu historia,{" "}
              <span className="text-malva-400">
                sino cuando tomas tu lugar en ella.
              </span>
            </h1>
            <p className="text-humo-500 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Acompaño a mujeres en procesos de sanación emocional y liderazgo
              personal para que recuperen su autonomía y aprendan a decidir sin
              culpa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/servicios" className="btn-primary text-base px-8 py-3.5 gap-2">
                Conoce el proceso
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link href="/sobre-monica" className="btn-secondary text-base px-8 py-3.5">
                Sobre Mónica
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ FRASE ANCLA ════════ */}
      <section className="py-20 md:py-28 bg-arena-200/50">
        <div className="section-container text-center">
          <ScrollReveal>
            <SparkleIcon className="w-8 h-8 text-ciruela-600 mx-auto mb-8" />
            <blockquote className="font-serif text-2xl md:text-3xl text-humo-600 leading-relaxed max-w-3xl mx-auto">
              &ldquo;El poder no es control.
              <br />
              El poder es presencia, conciencia y capacidad de elección.&rdquo;
            </blockquote>
            <p className="mt-6 uppercase tracking-[0.2em] text-sm text-humo-400">
              — Frase ancla del proceso
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ════════ SOBRE EL CENTRO ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-arena-200 overflow-hidden">
                <Image
                  src="/images/foto3.png"
                  alt="Mónica Grizales — Sanación emocional y liderazgo femenino"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Cita superpuesta */}
              <div className="absolute bottom-0 left-4 right-4 md:left-8 md:right-8 bg-malva-400/90 backdrop-blur-sm text-white p-5 rounded-t-xl">
                <p className="font-serif italic text-sm md:text-base leading-relaxed">
                  &ldquo;Ser buena hija no debería costarte tu vida.&rdquo;
                </p>
              </div>
            </div>

            {/* Texto */}
            <ScrollReveal>
              <div>
                <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
                  Sobre el Centro
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 leading-tight mb-6">
                  Un espacio para dejar de reaccionar y empezar a elegir
                </h2>
                <p className="text-humo-500 text-lg leading-relaxed mb-4">
                  Este no es un espacio para hacer más. Es un proceso de orden
                  interno y regulación emocional donde las mujeres aprenden a
                  habitar su cuerpo y elegir desde su lugar.
                </p>
                <p className="text-humo-500 text-lg leading-relaxed mb-8">
                  Mónica Grizales acompaña procesos de sanación emocional
                  integrando coaching ontológico, mirada sistémica y
                  bioneuroterapia.
                </p>
                <Link href="/sobre-monica" className="btn-secondary">
                  Conocer más
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ════════ EJES DE TRABAJO ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
              Ejes de Trabajo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700">
              Procesos de transformación consciente
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: "Poder Personal",
                description:
                  "Reconoce tu valor, toma tu lugar y fortalece tu liderazgo personal desde la conciencia. Para mujeres con bloqueos emocionales y desconexión de su poder.",
                tag: "Entrenamiento: Reconociendo mi Poder",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
                title: "Abundancia Consciente",
                description:
                  "Descubre la relación entre tus procesos internos y tus resultados externos en dinero y bienestar personal. Libérate de patrones de escasez.",
                tag: null,
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
                title: "Relaciones Conscientes",
                description:
                  "Comprende tus vínculos desde la adultez emocional y el orden sistémico. Para mujeres y parejas con conflictos repetitivos.",
                tag: null,
              },
            ].map((eje, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="card group h-full">
                  <div className="w-14 h-14 rounded-2xl bg-malva-100/70 text-malva-400 flex items-center justify-center mb-6 group-hover:bg-ciruela-600 group-hover:text-white transition-colors duration-300">
                    {eje.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-humo-700 mb-3">
                    {eje.title}
                  </h3>
                  <p className="text-humo-500 leading-relaxed mb-4">
                    {eje.description}
                  </p>
                  {eje.tag && (
                    <p className="text-malva-400 text-sm font-medium italic">
                      {eje.tag}
                    </p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PROGRAMA DESTACADO ════════ */}
      <section className="section-padding bg-arena-100/60">
        <div className="section-container text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
            Primer Entrenamiento del Año
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-humo-700 mb-6">
            Reconociendo mi Poder
          </h2>
          <p className="text-humo-500 text-lg leading-relaxed max-w-2xl mx-auto mb-4">
            Un espacio para mujeres que están listas para dejar de vivir desde
            el deber y empezar a elegir con conciencia.
          </p>
          <p className="font-serif text-malva-400 italic text-lg mb-6">
            15 y 16 de abril &middot; 100% Virtual
          </p>
          <p className="text-humo-600 font-medium mb-10 max-w-xl mx-auto">
            No es un espacio para aprender a ser mejor. Es un espacio para
            dejar de traicionarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/servicios" className="btn-secondary">
              Conocer el proceso
            </Link>
            <Link href="/inscripcion" className="btn-primary">
              Inscribirme ahora
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ TESTIMONIOS ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
              Voces del Proceso
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700">
              Mujeres que tomaron su lugar
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Entendí que cuidar de todos no significa olvidarme de mí. Este proceso me devolvió mi voz.",
                name: "María C.",
              },
              {
                quote:
                  "Dejé de sentir culpa por elegirme. Ahora sé que no es egoísmo, es supervivencia.",
                name: "Ana P.",
              },
              {
                quote:
                  "Aprendí que el poder no es control, es presencia. Eso cambió mi forma de estar en el mundo.",
                name: "Laura M.",
              },
            ].map((testimonio, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className="card h-full">
                  <p className="text-humo-600 italic leading-relaxed mb-6">
                    &ldquo;{testimonio.quote}&rdquo;
                  </p>
                  <p className="text-malva-400 font-medium text-sm">
                    — {testimonio.name}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

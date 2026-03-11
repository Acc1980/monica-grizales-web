"use client";

import { useState, useEffect, useCallback } from "react";

interface Testimonial {
  quote: string;
  name: string;
  type: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "No hay un día de mi vida que no te piense. Las sesiones de coaching contigo me han llevado a donde estoy hoy. Tranquila, con nuevos hábitos que más allá de buscar belleza exterior, me ha permitido conseguir esa belleza interior y sobre todo paz. Tu ayuda en darme herramientas para avanzar hacen parte de esta bonita vida que hoy tengo.",
    name: "Mariana H.",
    type: "Sesiones 1 a 1 de Coaching",
  },
  {
    quote:
      "El entrenamiento de mujeres fue una experiencia maravillosa para mí, el cual me dio herramientas para fortalecer mi autoestima y desarrollar mi independencia emocional. Algo lindo fue sentir las emociones a través de la conexión con mi cuerpo y mi mente. Lo que me llevo es el empoderamiento emocional donde trabajamos esas creencias que tenemos desde pequeños y los patrones que heredamos de nuestros ancestros. Aprendí a darle el valor y el lugar a cada persona de mi familia.",
    name: "Johana G.",
    type: "Reconociendo mi Poder",
  },
  {
    quote:
      "Maestra, gracias por el despertar!! Gran talento y carácter el que te acompaña y hace que toques vidas y corazones para transformar el futuro.",
    name: "William C.",
    type: "Proceso de Transformación",
  },
  {
    quote:
      "Ayer fui corriendo a mis padres a pedir perdón, algo que se me hacía difícil. Están felices, ni él ni yo estamos a la defensiva. Era yo la que lo veía a él así. Me estaba viendo a mí y no me di cuenta hasta ayer. Gracias!!!",
    name: "Kris M.",
    type: "Reconociendo mi Poder",
  },
  {
    quote:
      "Quiero decirte que tú has sido de luces y sombras para mí, y gracias por eso, por confrontarme, por ayudarme a entender que yo puedo. Este fin de semana me transformó la vida. Hoy me siento en agradecimiento infinito, y quiero decírtelo porque es en este presente donde elijo decir las cosas que necesito manifestar.",
    name: "Vivian A.",
    type: "Programa de Liderazgo",
  },
  {
    quote:
      "Has sido la mejor entrenadora, quien vio en mí mucho más de lo que yo podía ver en ese momento, quien me estiró y me llevó a quebrarme. Hoy reconozco que gracias a tu entrenamiento mi vida cambió, le encontré de nuevo el sentido a estar viva. Hoy te escribe esa niña interior que llegó triste y hoy ya está feliz, y esa mujer con miedos y paralizada que hoy tiene todo para vivir la vida de otra forma.",
    name: "Juanita L.",
    type: "Programa de Liderazgo",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // En desktop mostramos 2, en móvil 1
  const [perPage, setPerPage] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setPerPage(window.innerWidth >= 768 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / perPage);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % totalPages);
  }, [current, totalPages, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + totalPages) % totalPages);
  }, [current, totalPages, goTo]);

  // Auto-rotate cada 6 segundos
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const visibleTestimonials = testimonials.slice(
    current * perPage,
    current * perPage + perPage
  );

  return (
    <div className="relative">
      {/* Testimonios */}
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {visibleTestimonials.map((t, i) => (
          <div key={`${current}-${i}`} className="card h-full flex flex-col">
            <p className="text-malva-600 text-xs font-medium uppercase tracking-wider mb-4">
              {t.type}
            </p>
            <p className="text-humo-600 italic leading-relaxed mb-6 flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="text-malva-600 font-medium text-sm">
              — {t.name}
            </p>
          </div>
        ))}
      </div>

      {/* Controles */}
      <div className="flex items-center justify-center gap-6 mt-10">
        {/* Botón anterior */}
        <button
          onClick={prev}
          aria-label="Testimonio anterior"
          className="w-10 h-10 rounded-full border border-malva-300 text-malva-400 flex items-center justify-center hover:bg-malva-100 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Indicadores */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a página ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-malva-400 w-6"
                  : "bg-malva-200 hover:bg-malva-300"
              }`}
            />
          ))}
        </div>

        {/* Botón siguiente */}
        <button
          onClick={next}
          aria-label="Siguiente testimonio"
          className="w-10 h-10 rounded-full border border-malva-300 text-malva-400 flex items-center justify-center hover:bg-malva-100 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

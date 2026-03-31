import type { Metadata } from "next";
import SparkleIcon from "@/components/SparkleIcon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonios — Mónica Grizales",
  description:
    "Conoce los resultados de quienes ya vivieron los entrenamientos y procesos de coaching con Mónica Grizales.",
};

const testimonials = [
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

export default function TestimoniosPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-arena-50">
        <div className="section-container text-center">
          <div className="inline-flex items-center gap-2 bg-malva-600/10 border border-malva-600/20 rounded-full px-5 py-2 mb-6">
            <SparkleIcon className="w-4 h-4 text-malva-600" />
            <span className="text-sm font-medium text-malva-600">Resultados reales</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-humo-700 mb-6">
            Lo que dicen quienes ya{" "}
            <span className="text-malva-600">vivieron el proceso</span>
          </h1>
          <p className="text-humo-500 text-lg max-w-2xl mx-auto">
            Estas son las palabras de personas que decidieron mostrarse, trabajar desde adentro y transformar su vida.
          </p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="flex flex-col bg-arena-50 rounded-2xl p-8 border border-arena-100"
              >
                <p className="text-malva-500 text-xs font-semibold uppercase tracking-widest mb-4">
                  {t.type}
                </p>
                <p className="text-humo-600 italic leading-relaxed flex-1 mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-malva-600 font-semibold text-sm">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-arena-50">
        <div className="section-container text-center max-w-2xl mx-auto">
          <SparkleIcon className="w-8 h-8 text-malva-400 mx-auto mb-4" />
          <h2 className="font-serif text-3xl font-bold text-humo-700 mb-4">
            ¿Lista para vivir tu propio proceso?
          </h2>
          <p className="text-humo-500 mb-8">
            El próximo entrenamiento es el 7 y 8 de abril. Los cupos son limitados.
          </p>
          <Link
            href="/servicios/reconociendo-mi-poder"
            className="btn-primary inline-block"
          >
            Quiero inscribirme
          </Link>
        </div>
      </section>
    </>
  );
}

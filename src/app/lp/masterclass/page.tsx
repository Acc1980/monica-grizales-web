import type { Metadata } from "next";
import Image from "next/image";
import SparkleIcon from "@/components/SparkleIcon";

export const metadata: Metadata = {
  title: "Masterclass — 3 bloqueos que te impiden ocupar tu lugar como mujer",
  description:
    "Mira la grabación de la masterclass gratuita con Mónica Grizales. Descubre los 3 bloqueos que te impiden ocupar tu lugar como mujer.",
};

const ENTRENAMIENTO_LINK = "https://wa.link/ixvd3p";

function CtaButton({ text = "Quiero inscribirme", variant = "dark" }: { text?: string; variant?: "dark" | "light" }) {
  if (variant === "light") {
    return (
      <a
        href={ENTRENAMIENTO_LINK}
        className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-malva-700 font-bold text-lg hover:bg-arena-100 transition-all duration-300 shadow-xl hover:-translate-y-0.5 gap-2"
      >
        {text}
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    );
  }
  return (
    <a
      href={ENTRENAMIENTO_LINK}
      className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-malva-600 text-white font-bold text-lg hover:bg-malva-700 transition-all duration-300 shadow-xl shadow-malva-600/30 hover:-translate-y-0.5 gap-2"
    >
      {text}
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </a>
  );
}

export default function MasterclassPage() {
  return (
    <div className="bg-arena-50">
      {/* ════════ HERO ════════ */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">
        <Image
          src="/images/mujeres.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-arena-50/85 via-arena-50/75 to-arena-50/90" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-malva-600 font-semibold mb-5">
            Grabación disponible &middot; Masterclass gratuita
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-humo-700 mb-4 leading-tight">
            3 bloqueos que te impiden{" "}
            <span className="text-malva-600">ocupar tu lugar como mujer</span>
          </h1>
          <p className="text-humo-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Más de 50 mujeres estuvieron conectadas en vivo. Ahora puedes verla cuando quieras.
          </p>
        </div>
      </section>

      {/* ════════ VIDEO ════════ */}
      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/epvgBtUpSfQ"
              title="Masterclass: 3 bloqueos que te impiden ocupar tu lugar como mujer — Mónica Grizales"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <div className="mt-8 text-center">
            <p className="text-humo-500 text-base mb-6">
              ¿Algo resonó en ti? El siguiente paso es el entrenamiento{" "}
              <strong className="text-malva-600">Reconociendo mi Poder</strong>.
            </p>
            <CtaButton text="Quiero inscribirme al entrenamiento" />
          </div>
        </div>
      </section>

      {/* ════════ ¿TE SUENA FAMILIAR? ════════ */}
      <section className="py-14 md:py-20 bg-arena-100/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 text-center mb-10">
            ¿Te suena familiar?
          </h2>
          <div className="space-y-4">
            {[
              "Dices \"sí\" cuando quieres decir \"no\" para no incomodar a nadie.",
              "Cargas con responsabilidades que no te corresponden porque \"alguien tiene que hacerlo\".",
              "Sientes culpa cada vez que te eliges a ti misma.",
              "Sabes que algo tiene que cambiar pero no sabes por dónde empezar.",
              "Te ves fuerte por fuera, pero por dentro estás agotada.",
            ].map((frase, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-arena-200"
              >
                <span className="text-malva-600 text-xl shrink-0">✦</span>
                <p className="font-serif text-lg text-humo-600 italic leading-relaxed">
                  {frase}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-humo-500 text-lg mb-6">
              Estos no son defectos. Son <strong className="text-malva-600">patrones aprendidos</strong>.
              Y en el entrenamiento vamos a sanarlos juntas.
            </p>
            <CtaButton text="Quiero inscribirme al entrenamiento" />
          </div>
        </div>
      </section>

      {/* ════════ FRASE ANCLA ════════ */}
      <section className="py-12 bg-malva-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="font-serif text-xl md:text-2xl leading-relaxed italic">
            &ldquo;No puedes soltar lo que no puedes ver.{" "}
            <span className="font-semibold not-italic">
              El primer paso es hacer visible lo invisible.
            </span>&rdquo;
          </blockquote>
          <p className="text-arena-300 text-sm mt-4">&mdash; Mónica Grizales</p>
        </div>
      </section>

      {/* ════════ MÓNICA ════════ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="uppercase tracking-[0.25em] text-xs text-malva-600 font-semibold mb-8 text-center">
            Tu facilitadora
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
              <div className="absolute bottom-0 left-4 right-4 bg-malva-400/90 backdrop-blur-sm text-white p-4 rounded-t-xl">
                <p className="font-serif italic text-sm leading-relaxed">
                  &ldquo;No te falta fuerza, te sobra mandato.&rdquo;
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-humo-700 mb-1">
                Mónica Andrea Grizales Cuartas
              </h2>
              <p className="text-malva-600 font-medium text-sm mb-4">
                Coach Ontológica Certificada &middot; Sanación Emocional y Liderazgo Femenino
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-arena-50 rounded-xl border border-arena-200">
                  <p className="font-serif text-2xl font-bold text-malva-600">+5,000</p>
                  <p className="text-humo-400 text-xs">Mujeres acompañadas</p>
                </div>
                <div className="text-center p-3 bg-arena-50 rounded-xl border border-arena-200">
                  <p className="font-serif text-2xl font-bold text-malva-600">15+</p>
                  <p className="text-humo-400 text-xs">Años de experiencia</p>
                </div>
              </div>
              <p className="text-humo-500 text-sm leading-relaxed">
                Creadora de Reconociendo mi Poder. Facilita procesos de transformación para mujeres
                en Colombia, Perú y Estados Unidos. Su enfoque combina coaching ontológico con
                mirada sistémica y sanación emocional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CTA FINAL ════════ */}
      <section className="py-20 md:py-28 bg-malva-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-malva-800/50 to-malva-400/10" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative text-center">
          <SparkleIcon className="w-10 h-10 text-malva-300 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            ¿Lista para ir más profundo?
          </h2>
          <p className="text-arena-200 text-lg mb-8">
            El entrenamiento <strong>Reconociendo mi Poder</strong> es el siguiente paso.
            Un espacio íntimo, solo para mujeres, donde vamos a trabajar estas raíces juntas.
          </p>
          <CtaButton text="Quiero inscribirme al entrenamiento" variant="light" />
        </div>
      </section>

      {/* ════════ MINI FOOTER ════════ */}
      <div className="bg-humo-700 text-arena-400 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Mónica Grizales &middot; Sanación Emocional y Liderazgo Femenino</p>
        <div className="flex items-center justify-center gap-4 mt-2">
          <a href="https://www.instagram.com/monigrizales/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Instagram
          </a>
          <span>&middot;</span>
          <a href="https://wa.me/573217968856" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            WhatsApp
          </a>
          <span>&middot;</span>
          <a href="https://monicagrizales.com" className="hover:text-white transition-colors">
            Web
          </a>
        </div>
      </div>
    </div>
  );
}

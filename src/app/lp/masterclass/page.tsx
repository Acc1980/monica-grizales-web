import type { Metadata } from "next";
import Image from "next/image";
import SparkleIcon from "@/components/SparkleIcon";

export const metadata: Metadata = {
  title: "Masterclass Gratuita — 3 bloqueos que te impiden ocupar tu lugar como mujer",
  description:
    "Masterclass gratuita con Mónica Grizales. Descubre los 3 bloqueos que te impiden ocupar tu lugar como mujer. Vía Zoom.",
};

const WHATSAPP_NUMBER = "573217968856";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Mónica, quiero registrarme en la masterclass gratuita del 24 de marzo. 🙌"
);
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

function CtaButton({ text = "Quiero mi lugar", variant = "dark" }: { text?: string; variant?: "dark" | "light" }) {
  if (variant === "light") {
    return (
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
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
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
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
          src="/images/foto5.jpg"
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
            Masterclass gratuita &middot; Martes 24 de marzo &middot; 7:00 PM
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-humo-700 mb-4 leading-tight">
            3 bloqueos que te impiden{" "}
            <span className="text-malva-600">ocupar tu lugar como mujer</span>
          </h1>
          <p className="text-humo-600 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Descubre qué te frena sin que lo notes y sal con herramientas concretas para empezar a cambiar.
          </p>
          <CtaButton text="Reservar mi lugar gratis" />
          <p className="text-humo-400 text-sm mt-4">
            Vía Zoom &middot; <strong className="text-malva-600">Cupos limitados</strong> &middot; 100% en vivo
          </p>
        </div>
      </section>

      {/* ════════ BARRA ════════ */}
      <div className="bg-malva-700 text-white py-3 text-center">
        <p className="text-sm font-medium px-4">
          🎯 <strong>Masterclass gratuita y en vivo.</strong> Solo necesitas registrarte para recibir el link de Zoom.
        </p>
      </div>

      {/* ════════ ¿TE SUENA FAMILIAR? ════════ */}
      <section className="py-14 md:py-20 bg-white">
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
                className="flex items-start gap-3 p-4 rounded-xl bg-arena-50 border border-arena-200"
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
              Y en esta masterclass vamos a hacer visibles los que te mantienen estancada.
            </p>
            <CtaButton text="Sí, quiero entender qué me frena" />
          </div>
        </div>
      </section>

      {/* ════════ LOS 3 BLOQUEOS ════════ */}
      <section className="py-14 md:py-20 bg-arena-100/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 text-center mb-4">
            ¿Qué vas a descubrir en esta masterclass?
          </h2>
          <p className="text-humo-500 text-center mb-12 max-w-xl mx-auto">
            En 90 minutos vamos a trabajar juntas los 3 bloqueos que operan en silencio y te impiden vivir desde tu poder:
          </p>
          <div className="space-y-5">
            {[
              {
                num: "01",
                title: "Desconexión con la madre",
                desc: "Esta ruptura bloquea tu autoestima y tu feminidad. Cuando la relación con tu madre no está sanada, se refleja en cómo te percibes, cómo te valoras y cómo te relacionas con lo femenino en ti.",
              },
              {
                num: "02",
                title: "Lealtad al dolor del linaje femenino",
                desc: "Cargar con el sufrimiento heredado de las mujeres de tu familia bloquea el amor y la prosperidad. Vamos a hacer visible esa lealtad inconsciente para que puedas soltar lo que no te pertenece.",
              },
              {
                num: "03",
                title: "Conflicto con la energía masculina/padre",
                desc: "Cuando hay un conflicto no resuelto con la figura paterna o con la energía masculina, se bloquean tus relaciones y tu avance en la vida. Vamos a trabajar esta raíz para que puedas fluir.",
              },
            ].map((bloqueo) => (
              <div
                key={bloqueo.num}
                className="flex gap-5 items-start p-6 rounded-2xl bg-white border border-arena-200"
              >
                <div className="w-12 h-12 rounded-full bg-malva-600 text-white flex items-center justify-center shrink-0 font-serif font-bold text-lg">
                  {bloqueo.num}
                </div>
                <div>
                  <h3 className="font-serif font-bold text-humo-700 text-lg mb-2">{bloqueo.title}</h3>
                  <p className="text-humo-500 text-sm leading-relaxed">{bloqueo.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CtaButton text="Quiero descubrir mis bloqueos" />
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

      {/* ════════ DETALLES ════════ */}
      <section className="py-14 md:py-20 bg-arena-100/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 mb-10">
            Detalles de la masterclass
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Fecha", value: "Martes 24", sub: "de marzo, 2026" },
              { label: "Hora", value: "7:00 PM", sub: "Hora Colombia" },
              { label: "Modalidad", value: "Zoom en vivo", sub: "Link por email" },
              { label: "Inversión", value: "GRATIS", sub: "Solo debes registrarte" },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-xl border border-arena-200">
                <p className="text-humo-400 text-xs uppercase tracking-wider font-medium mb-1">
                  {item.label}
                </p>
                <p className="font-serif text-humo-700 font-bold text-sm">{item.value}</p>
                <p className="text-humo-400 text-xs mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ QUÉ TE LLEVAS ════════ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 text-center mb-10">
            Al terminar la masterclass vas a tener:
          </h2>
          <div className="space-y-3">
            {[
              "Claridad sobre los patrones inconscientes que te frenan",
              "Herramientas concretas para empezar a cambiarlos",
              "Una nueva mirada sobre tu historia y tus decisiones",
              "Un primer paso real hacia tu transformación personal",
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-center p-3 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-malva-600 text-white flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-humo-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA FINAL ════════ */}
      <section className="py-20 md:py-28 bg-malva-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-malva-800/50 to-malva-400/10" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative text-center">
          <SparkleIcon className="w-10 h-10 text-malva-300 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            ¿Lista para ver lo que no has podido ver?
          </h2>
          <p className="text-arena-200 text-lg mb-3">
            90 minutos que pueden cambiar la forma en que te relacionas contigo misma.
          </p>
          <p className="text-arena-300 text-sm mb-8">
            Martes 24 de marzo &middot; 7:00 PM &middot; <strong className="text-white">100% gratis</strong>
          </p>
          <CtaButton text="Reservar mi lugar gratis" variant="light" />
          <p className="text-arena-400 text-xs mt-6">
            Al registrarte recibirás un email de confirmación con los detalles y el link de Zoom el día del evento.
          </p>
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

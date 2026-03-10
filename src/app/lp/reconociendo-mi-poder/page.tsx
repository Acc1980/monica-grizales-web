import type { Metadata } from "next";
import Image from "next/image";
import SparkleIcon from "@/components/SparkleIcon";

export const metadata: Metadata = {
  title: "Reconociendo mi Poder — Entrenamiento de Sanación Emocional",
  description:
    "Entrenamiento virtual de sanación emocional y liderazgo femenino. 15 y 16 de abril de 2026. Cupos limitados (40). $350.000 COP.",
};

const PAYMENT_LINK = "https://www.mercadopago.com.co/checkout/v1/payment/redirect/f14ea180-4ed7-421c-94d6-043bfca60c00/payment-option-form/?source=link&preference-id=151127219-1906df5e-7eb1-4759-a996-395ccdab7f7b&router-request-id=fa6c025a-eed5-4a00-8741-04c2ccffc659&p=a0a303f7529be5ee8d36d23e61d86324";

function CtaButton({ variant = "dark" }: { variant?: "dark" | "light" }) {
  if (variant === "light") {
    return (
      <a
        href={PAYMENT_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-malva-700 font-bold text-lg hover:bg-arena-100 transition-all duration-300 shadow-xl hover:-translate-y-0.5 gap-2"
      >
        Reservar mi cupo
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    );
  }
  return (
    <a
      href={PAYMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-malva-600 text-white font-bold text-lg hover:bg-malva-700 transition-all duration-300 shadow-xl shadow-malva-600/30 hover:-translate-y-0.5 gap-2"
    >
      Reservar mi cupo
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </a>
  );
}

export default function LandingReconociendoPage() {
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
            Entrenamiento virtual &middot; 15 y 16 de abril 2026
          </p>
          <p className="text-humo-600 text-xl md:text-2xl max-w-2xl mx-auto mb-4 leading-relaxed">
            Si eres una mujer <strong className="text-humo-700">fuerte por fuera</strong>…
            pero <strong className="text-malva-600">agotada por dentro</strong>,
            este espacio es para ti.
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-humo-700 mb-4 leading-tight">
            Reconociendo{" "}
            <span className="text-malva-600">mi Poder</span>
          </h1>
          <p className="font-serif text-malva-600 italic text-lg mb-8 max-w-md mx-auto">
            &ldquo;Ser buena hija no debería costarte tu voz.&rdquo;
          </p>
          <CtaButton />
          <p className="text-humo-400 text-sm mt-4">
            Solo <strong className="text-malva-600">40 cupos</strong> &middot; Inscripciones hasta el 10 de abril
          </p>
        </div>
      </section>

      {/* ════════ BARRA DE URGENCIA ════════ */}
      <div className="bg-malva-700 text-white py-3 text-center">
        <p className="text-sm font-medium px-4">
          ⏳ <strong>Cupos limitados.</strong> Las inscripciones cierran el 10 de abril o antes si se completan.
        </p>
      </div>

      {/* ════════ ¿TE IDENTIFICAS? (DOLOR) ════════ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 text-center mb-10">
            ¿Te identificas con alguna de estas frases?
          </h2>
          <div className="space-y-4">
            {[
              "¿Sabías que tú te tratas como te trataron de niña?",
              "¿Sigues aceptando menos de lo que mereces?",
              "La forma como te amas o permites que te amen hoy... no la decidiste tú.",
              "¿Eres consciente de cómo te hablas cuando cometes un error?",
              "¿Sientes culpa cuando te eliges a ti misma?",
            ].map((pregunta, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-arena-50 border border-arena-200"
              >
                <span className="text-malva-600 text-xl shrink-0">✦</span>
                <p className="font-serif text-lg text-humo-600 italic leading-relaxed">
                  {pregunta}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-humo-500 text-lg mb-6">
              Todo esto lo aprendiste y no lo pudiste cuestionar.{" "}
              <strong className="text-malva-600">
                ¿Y si te dijera que esto lo puedes sanar?
              </strong>
            </p>
            <CtaButton />
          </div>
        </div>
      </section>

      {/* ════════ MÓNICA — AUTORIDAD (antes del contenido y precio) ════════ */}
      <section className="py-14 md:py-20 bg-arena-100/60">
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
                Ingeniera Industrial y Coach Ontológica con mirada sistémica
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-white rounded-xl border border-arena-200">
                  <p className="font-serif text-2xl font-bold text-malva-600">+5,000</p>
                  <p className="text-humo-400 text-xs">Mujeres acompañadas</p>
                </div>
                <div className="text-center p-3 bg-white rounded-xl border border-arena-200">
                  <p className="font-serif text-2xl font-bold text-malva-600">15+</p>
                  <p className="text-humo-400 text-xs">Años de experiencia</p>
                </div>
              </div>
              <p className="text-humo-500 text-sm leading-relaxed">
                Creadora de Reconociendo mi Poder. Facilita procesos para mujeres, parejas
                y equipos en Colombia, Perú y Estados Unidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ QUÉ VAS A TRABAJAR ════════ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 text-center mb-4">
            ¿Qué trabajarás en estos 2 días?
          </h2>
          <p className="text-humo-500 text-center mb-12 max-w-xl mx-auto">
            Un proceso diseñado para invitarte a recuperar tu autonomía y reconocer tu lugar como fuente de fuerza.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { title: "Reconocerte como autora", desc: "Dejar de ser espectadora de tu vida para convertirte en quien escribe su historia." },
              { title: "Habitar tu cuerpo", desc: "Tu cuerpo como territorio de poder, no como campo de batalla." },
              { title: "Honrar tu historia", desc: "Reconocer tu historia sin quedar atrapada en ella. Tomar lo que te fortalece." },
              { title: "Las voces que te habitan", desc: "\"Para ser amada debo...\", \"Una buena mujer no...\", \"En mi familia las mujeres...\"" },
              { title: "Lealtades invisibles", desc: "Descubrir a quién eres leal cuando te apagas o silencias tu voz." },
              { title: "Regulación emocional", desc: "Trabajar las emociones que más te gobiernan: culpa, tristeza, rabia y miedo." },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 items-start p-4 rounded-xl bg-arena-50 border border-arena-200">
                <div className="w-8 h-8 rounded-full bg-malva-600 text-white flex items-center justify-center shrink-0 text-sm font-bold">
                  ✓
                </div>
                <div>
                  <h3 className="font-serif font-bold text-humo-700 mb-1">{item.title}</h3>
                  <p className="text-humo-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CtaButton />
          </div>
        </div>
      </section>

      {/* ════════ FRASE ANCLA ════════ */}
      <section className="py-12 bg-malva-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <blockquote className="font-serif text-xl md:text-2xl leading-relaxed italic">
            &ldquo;Una mujer que no puede regularse, no elige: reacciona.{" "}
            <span className="font-semibold not-italic">La regulación emocional es una condición de libertad.</span>&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ════════ RESULTADOS ════════ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 text-center mb-10">
            Después de estos 2 días podrás:
          </h2>
          <div className="space-y-3">
            {[
              "Aprender a tomar decisiones de valor",
              "Reconocer cuándo estás actuando desde mandato",
              "Aprender a regularte emocionalmente",
              "Decir no sin sentir que traicionas a alguien",
              "Ocupar tu lugar frente al sistema familiar para recuperar tu fuerza",
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

      {/* ════════ ¿QUÉ PASA SI NO LO HACES? ════════ */}
      <section className="py-14 md:py-20 bg-arena-100/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 mb-10">
            ¿Qué pasa si sigues como estás?
          </h2>
          <div className="space-y-4 max-w-lg mx-auto">
            {[
              "Seguirás reaccionando en lugar de elegir.",
              "Seguirás diciendo \"sí\" cuando quieres decir \"no\".",
              "Seguirás repitiendo la historia que tanto criticas.",
              "Seguirás cargando un peso que no te corresponde.",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-arena-200"
              >
                <span className="text-malva-400 text-lg shrink-0">—</span>
                <p className="text-humo-600 text-lg leading-relaxed text-left">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-serif text-malva-600 text-xl font-semibold">
            Este entrenamiento es tu primer paso para romper ese ciclo.
          </p>
        </div>
      </section>

      {/* ════════ DETALLES ════════ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 mb-10">
            Detalles del entrenamiento
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Fecha", value: "15 y 16 de abril", sub: "2026" },
              { label: "Horario", value: "6:30 - 9:30 pm", sub: "Hora Colombia" },
              { label: "Modalidad", value: "100% Virtual", sub: "Desde cualquier lugar" },
              { label: "Incluye", value: "Grabación", sub: "Acceso por 30 días" },
              { label: "Comunidad", value: "Grupo de WhatsApp", sub: "Círculo privado de mujeres" },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-arena-50 rounded-xl border border-arena-200">
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

      {/* ════════ PARA QUIÉN ES ════════ */}
      <section className="py-14 md:py-20 bg-arena-100/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 text-center mb-10">
            Este proceso es para ti si...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Sostienes múltiples roles sin sostenerte a ti misma",
              "Confundes amor con sacrificio",
              "Vives desde el deber más que desde la elección",
              "Sientes culpa cuando te eliges a ti",
              "Silencias tus emociones o te desconectas del cuerpo",
              "Quieres recuperar tu autonomía y capacidad de decidir",
            ].map((item, index) => (
              <div key={index} className="flex gap-2 items-center p-3">
                <span className="text-malva-600 shrink-0">✦</span>
                <span className="text-humo-600 text-sm">{item}</span>
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
            ¿Estás lista para reconocer tu poder?
          </h2>
          <p className="text-arena-200 text-lg mb-3">
            Deja de repetir tu historia... date el permiso de crear una
            versión donde te sientas suficiente.
          </p>
          <p className="text-arena-300 text-sm mb-8">
            Solo <strong className="text-white">40 cupos</strong> &middot; Inscripciones hasta el <strong className="text-white">10 de abril</strong>
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-8">
            <p className="text-arena-300 text-sm uppercase tracking-wider mb-2">Pronto pago</p>
            <p className="font-serif text-4xl font-bold mb-1">$300.000 COP</p>
            <p className="text-arena-400 text-sm line-through mb-1">$350.000 COP</p>
            <p className="text-arena-300 text-sm">Pago único &middot; Acceso completo + grabación</p>
          </div>
          <div>
            <CtaButton variant="light" />
          </div>
          <p className="text-arena-400 text-xs mt-6">
            Al hacer clic serás redirigida a WhatsApp para recibir instrucciones de pago.
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SparkleIcon from "@/components/SparkleIcon";

export const metadata: Metadata = {
  title: "Reconociendo mi Poder — Entrenamiento de Sanación Emocional",
  description:
    "Entrenamiento virtual de sanación emocional y liderazgo femenino. 15 y 16 de abril de 2026. Cupos limitados (40). $89 USD.",
};

const WHATSAPP_NUMBER = "573217968856";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Mónica, quiero inscribirme en el entrenamiento Reconociendo mi Poder del 15 y 16 de abril. 🙌"
);

export default function ReconociendoMiPoderPage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <Image
          src="/images/foto5.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-arena-50/75 backdrop-blur-[2px]" />
        <div className="section-container relative text-center">
          <div className="inline-flex items-center gap-2 bg-ciruela-600/10 border border-ciruela-600/20 rounded-full px-5 py-2 mb-6">
            <svg className="w-4 h-4 text-ciruela-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
            <span className="text-sm font-medium text-ciruela-600">15 y 16 de abril 2026 &middot; 100% Virtual</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-humo-700 mb-6">
            Reconociendo{" "}
            <span className="text-ciruela-600">mi Poder</span>
          </h1>
          <p className="text-humo-600 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-medium">
            Un espacio para reconocerte como autora de tu vida, habitar tu
            cuerpo y elegir desde tu poder personal.
          </p>
          <p className="text-humo-500 text-base max-w-xl mx-auto mb-10">
            Este entrenamiento está diseñado para invitarte a recuperar tu
            autonomía, sentir la capacidad de tomar decisiones y reconocer tu
            lugar como fuente de fuerza.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-3.5 gap-2 inline-flex"
          >
            Quiero inscribirme
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
          </a>
        </div>
      </section>

      {/* ════════ BARRA DE URGENCIA ════════ */}
      <section className="bg-ciruela-700 text-white py-4">
        <div className="section-container flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <svg className="w-5 h-5 text-arena-200 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm md:text-base font-medium">
            <strong>Cupos limitados: solo 40 lugares.</strong> Las inscripciones cierran el 10 de abril o antes si se completan los cupos.
          </p>
        </div>
      </section>

      {/* ════════ CREADO POR ════════ */}
      <section className="py-16 md:py-20 bg-arena-200/40">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="uppercase tracking-[0.25em] text-sm text-humo-400 font-medium mb-3">
              Creado por
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 mb-2">
              Mónica Andrea Grizales Cuartas
            </h2>
            <p className="text-ciruela-600 font-medium mb-8">
              Ingeniera Industrial y Coach Ontológica con mirada sistémica.
            </p>
            <div className="text-humo-500 text-left space-y-4 leading-relaxed">
              <p>
                Hace 16 años inició un profundo proceso de transformación personal
                que la llevó a descubrir su propósito: acompañar a las personas a
                recuperar la esperanza y la alegría de vivir.
              </p>
              <p>
                Es entrenadora del Programa Transformacional de Liderazgo y creadora
                del entrenamiento para mujeres <strong className="text-humo-700">Reconociendo mi Poder</strong>.
                Facilita procesos para parejas y equipos enfocados en solución de
                conflictos y trabajo en equipo, con experiencia en Colombia, Perú y
                Estados Unidos, y realiza sesiones de coaching uno a uno para
                acompañar procesos individuales de crecimiento y transformación.
                Actualmente se forma en Bioneuroterapia.
              </p>
              <p className="font-serif text-ciruela-600 italic text-center text-lg">
                Hoy acompaña desde la experiencia vivida, con la certeza de que
                crecer emocionalmente nos acerca a la plenitud que anhelamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CONEXIÓN EMOCIONAL ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
                Es hora de que sepas que{" "}
                <span className="text-ciruela-600">
                  tus emociones no son un problema
                </span>
              </h2>
            </div>
            <div className="space-y-6">
              {[
                "¿Sabías que tú te tratas como te trataron de niña?",
                "¿Sigues aceptando menos de lo que mereces?",
                "La forma como te amas o permites que te amen hoy... no la decidiste tú.",
                "¿Eres consciente de cómo te hablas cuando cometes un error?",
              ].map((pregunta, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-arena-200"
                >
                  <div className="w-8 h-8 rounded-full bg-ciruela-600/10 text-ciruela-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <p className="font-serif text-lg text-humo-600 italic leading-relaxed">
                    {pregunta}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center space-y-4">
              <p className="text-humo-500 text-lg leading-relaxed">
                Todo esto lo aprendiste y no lo pudiste cuestionar.{" "}
                <strong className="text-humo-700">
                  ¿Y si te dijera que esto lo puedes sanar?
                </strong>
              </p>
              <p className="font-serif text-xl text-ciruela-600 italic leading-relaxed">
                Deja de repetir tu historia... date el permiso de crear una
                versión donde te sientas suficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ LA EXPERIENCIA FEMENINA ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-ciruela-600 font-medium mb-4">
                ¿Por qué este entrenamiento?
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-10">
                La experiencia femenina está atravesada por...
              </h2>
              <div className="space-y-6">
                {[
                  {
                    num: "1",
                    title: "Mandatos culturales",
                    desc: '"Para ser amada debo...", "Una buena mujer no...", "En mi familia las mujeres..."',
                  },
                  {
                    num: "2",
                    title: "Culpa al elegirse",
                    desc: "Sentir que priorizarte es egoísmo, cargar con culpa heredada.",
                  },
                  {
                    num: "3",
                    title: "Silencio emocional",
                    desc: "Emociones que gobiernan sin ser nombradas: culpa, tristeza, rabia no expresada, miedo.",
                  },
                  {
                    num: "4",
                    title: "Desconexión del cuerpo",
                    desc: "Vivir desde la mente, ignorar las señales del cuerpo, no habitarlo como territorio propio.",
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-malva-100/60 text-ciruela-600 flex items-center justify-center shrink-0 font-serif text-sm font-bold">
                      {item.num}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-humo-700 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-humo-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/foto4.jpg"
                alt="Mujer sonriendo entre girasoles"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════ QUÉ ENTENDEMOS POR PODER ════════ */}
      <section className="py-16 md:py-20 bg-humo-700 text-white">
        <div className="section-container text-center">
          <SparkleIcon className="w-10 h-10 text-malva-300 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            ¿Qué entendemos por &ldquo;poder&rdquo;?
          </h2>
          <p className="text-arena-300 text-lg mb-12 max-w-xl mx-auto">
            En este espacio, el poder NO es control ni imposición.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Conciencia",
                desc: "Darte cuenta de lo que vives y por qué lo vives.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Presencia",
                desc: "Estar aquí y ahora, habitando tu cuerpo.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                  </svg>
                ),
                title: "Capacidad de elección",
                desc: "Decidir desde ti, no desde el mandato.",
              },
            ].map((item, index) => (
              <div key={index} className="rounded-xl border border-humo-600 p-6">
                <div className="text-malva-300 mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-arena-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CONTENIDO DEL ENTRENAMIENTO ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-ciruela-600 font-medium mb-4">
              Contenido del entrenamiento
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700">
              ¿Qué trabajarás en este proceso?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Reconocerte como autora",
                desc: "Dejar de ser espectadora de tu vida para convertirte en quien escribe su historia.",
              },
              {
                title: "Habitar tu cuerpo",
                desc: "Tu cuerpo como territorio de poder, no como campo de batalla. Aprender a escucharlo y honrarlo.",
              },
              {
                title: "Honrar tu historia",
                desc: "Reconocer tu historia sin quedar atrapada en ella. Tomar lo que te fortalece, soltar lo que te pesa.",
              },
              {
                title: "Las voces que te habitan",
                desc: 'Identificar esas voces internas: "Para ser amada debo...", "Una buena mujer no...", "En mi familia las mujeres..."',
              },
              {
                title: "Lealtades invisibles",
                desc: "Descubrir a quién eres leal cuando te apagas o silencias tu voz. Soltar lealtades que ya no te sirven.",
              },
              {
                title: "Regulación emocional",
                desc: "Trabajar las emociones que más te gobiernan: culpa, tristeza, rabia no expresada y miedo.",
              },
            ].map((item, index) => (
              <div key={index} className="card border-arena-200 p-6">
                <div className="w-10 h-10 rounded-full bg-malva-100/60 text-ciruela-600 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-bold text-humo-700 mb-3">
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

      {/* ════════ FRASE ANCLA ════════ */}
      <section className="py-12 bg-arena-100/60">
        <div className="section-container text-center max-w-3xl mx-auto">
          <blockquote className="font-serif text-xl md:text-2xl text-humo-600 leading-relaxed italic">
            &ldquo;Una mujer que no puede regularse, no elige: reacciona.{" "}
            <span className="text-ciruela-600 font-semibold not-italic">
              La regulación emocional es una condición de libertad.
            </span>
            &rdquo;
          </blockquote>
        </div>
      </section>

      {/* ════════ RESULTADOS CONCRETOS ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="uppercase tracking-[0.25em] text-sm text-ciruela-600 font-medium mb-4">
                Resultados
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700">
                Después de estos 2 días podrás:
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {[
                "Aprender a tomar decisiones de valor",
                "Reconocer cuándo estás actuando desde mandato",
                "Aprender a regularte emocionalmente",
                "Decir no sin sentir que traicionas a alguien",
                "Ocupar tu lugar frente al sistema familiar para recuperar tu fuerza",
              ].map((item, index) => (
                <div key={index} className="flex gap-3 items-start p-4 rounded-xl bg-white border border-arena-200 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-ciruela-600 text-white flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-humo-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PARA QUIÉN ES ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden">
              <Image
                src="/images/monica.png"
                alt="Mónica Grizales"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ciruela-700/80 to-transparent p-6 pt-16">
                <p className="text-white font-serif italic text-sm">
                  &ldquo;No te falta fuerza, te sobra mandato.&rdquo;
                </p>
              </div>
            </div>
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-ciruela-600 font-medium mb-4">
                ¿Para quién es?
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-8">
                Este proceso es para ti si...
              </h2>
              <div className="space-y-4">
                {[
                  "Sostienes múltiples roles sin sostenerte a ti misma",
                  "Confundes amor con sacrificio",
                  "Vives desde el deber más que desde la elección",
                  "Sientes culpa cuando te eliges a ti",
                  "Silencias tus emociones o te desconectas del cuerpo",
                  "Quieres recuperar tu autonomía y capacidad de decidir",
                ].map((item, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <div className="w-6 h-6 rounded-full bg-ciruela-600 text-white flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-humo-600 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ QUÉ INCLUYE ════════ */}
      <section className="section-padding bg-arena-100/60">
        <div className="section-container text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-ciruela-600 font-medium mb-4">
            ¿Qué incluye?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-12">
            Un espacio seguro para tu proceso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: "Espacio seguro y respetuoso",
                desc: "Un contenedor consciente donde puedes soltar el peso, reconocerte y transformarte sin juicio.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: "Regulación emocional",
                desc: "Enfoque principal en trabajar las emociones que te gobiernan para alcanzar libertad interior.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                title: "Proceso grupal íntimo",
                desc: "Solo 40 mujeres por grupo para garantizar profundidad, contención y acompañamiento real.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 12 6 12.504 6 13.125" />
                  </svg>
                ),
                title: "Grabación disponible",
                desc: "Si no puedes asistir en vivo, tendrás acceso a la grabación por un mes completo.",
              },
            ].map((item, index) => (
              <div key={index} className="card border-arena-200 p-6 text-center">
                <div className="text-malva-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-humo-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-humo-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ DETALLES DEL ENTRENAMIENTO ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-ciruela-600 font-medium mb-4">
            Información del proceso
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-12">
            Detalles del entrenamiento
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {[
              { icon: "📅", label: "Fecha", value: "15 y 16 de abril", sub: "2026" },
              { icon: "👩‍👩‍👧‍👧", label: "Formato", value: "Proceso grupal", sub: "Solo para mujeres" },
              { icon: "🕡", label: "Horario", value: "6:30 pm a 9:30 pm", sub: "Hora Colombia" },
              { icon: "💻", label: "Modalidad", value: "100% Virtual", sub: "Desde cualquier lugar" },
              { icon: "💰", label: "Inversión", value: "$89 USD", sub: "Pago único" },
            ].map((item, index) => (
              <div key={index} className="card border-arena-200 p-5 text-center">
                <p className="text-3xl mb-3">{item.icon}</p>
                <p className="text-humo-400 text-xs uppercase tracking-wider font-medium mb-1">
                  {item.label}
                </p>
                <p className="font-serif text-humo-700 font-bold text-sm">
                  {item.value}
                </p>
                <p className="text-humo-400 text-xs mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FRASE ANCLA DEL PROCESO ════════ */}
      <section className="py-16 bg-malva-400 text-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          <blockquote className="font-serif text-xl md:text-2xl leading-relaxed italic">
            &ldquo;El poder no es control.
            <br />
            El poder es presencia, conciencia y capacidad de elección.&rdquo;
          </blockquote>
          <p className="text-arena-200 text-sm mt-4 uppercase tracking-wider">
            — Frase ancla del proceso
          </p>
        </div>
      </section>

      {/* ════════ CONFIANZA — TRAYECTORIA ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.25em] text-sm text-ciruela-600 font-medium mb-4">
              Respaldo y trayectoria
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700">
              ¿Por qué confiar en este proceso?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "+5,000",
                label: "Mujeres acompañadas",
                desc: "en procesos de sanación emocional y liderazgo personal.",
              },
              {
                number: "10+",
                label: "Años de experiencia",
                desc: "en crecimiento personal, transformación de liderazgo y equipos de alto rendimiento.",
              },
              {
                number: "100%",
                label: "Virtual y accesible",
                desc: "Desde cualquier lugar del mundo, con grabación disponible por un mes.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6">
                <p className="font-serif text-4xl md:text-5xl font-bold text-ciruela-600 mb-2">
                  {item.number}
                </p>
                <p className="font-bold text-humo-700 mb-2">{item.label}</p>
                <p className="text-humo-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PREGUNTAS FRECUENTES ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="uppercase tracking-[0.25em] text-sm text-ciruela-600 font-medium mb-4">
                Preguntas frecuentes
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700">
                Resolvemos tus dudas
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "¿Y si no puedo asistir en vivo?",
                  a: "No te preocupes. El entrenamiento queda grabado y tendrás acceso a la grabación por un mes completo para que puedas verlo a tu ritmo.",
                },
                {
                  q: "¿Necesito experiencia previa en coaching o terapia?",
                  a: "No, no se necesita ninguna experiencia previa. Este es un espacio para todas las mujeres que estén dispuestas a mirarse con honestidad.",
                },
                {
                  q: "¿Qué pasa si me inscribo y luego no puedo asistir?",
                  a: "La grabación quedará disponible para que puedas acceder al contenido completo durante un mes.",
                },
                {
                  q: "¿Cuál es la temática principal?",
                  a: "Trabajamos sanación emocional, regulación, mandatos culturales, lealtades familiares y reconexión con el poder personal. Todo desde una mirada femenina, ontológica y sistémica.",
                },
                {
                  q: "¿Cómo es el formato del entrenamiento?",
                  a: "Son 2 sesiones en vivo por Zoom (15 y 16 de abril), de 6:30 pm a 9:30 pm hora Colombia. Es un proceso grupal íntimo con máximo 40 mujeres.",
                },
                {
                  q: "¿Cómo realizo el pago?",
                  a: "Al hacer click en \"Quiero inscribirme\" serás redirigida a WhatsApp donde recibirás las instrucciones de pago directas. El valor es de $89 USD, pago único.",
                },
              ].map((item, index) => (
                <details
                  key={index}
                  className="group card border-arena-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-humo-700 hover:text-ciruela-600 transition-colors">
                    <span>{item.q}</span>
                    <svg
                      className="w-5 h-5 text-malva-400 shrink-0 ml-4 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-humo-500 leading-relaxed">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CTA FINAL ════════ */}
      <section className="py-20 md:py-28 bg-ciruela-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ciruela-800/50 to-malva-400/10" />
        <div className="section-container relative text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            ¿Estás lista para reconocer tu poder?
          </h2>
          <p className="text-arena-200 text-lg mb-3 max-w-xl mx-auto">
            Este es un espacio para mujeres que están listas para dejar de vivir
            desde el deber y empezar a elegir con conciencia.
          </p>
          <p className="text-arena-300 text-sm mb-10 max-w-md mx-auto">
            Las inscripciones cierran el <strong className="text-white">10 de abril</strong> o antes si se completan los <strong className="text-white">40 cupos</strong>.
          </p>
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-10">
            <p className="font-serif text-4xl font-bold mb-1">$89 USD</p>
            <p className="text-arena-300 text-sm">Pago único &middot; Acceso completo + grabación</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-ciruela-700 font-bold text-lg hover:bg-arena-100 transition-all duration-300 shadow-xl hover:-translate-y-0.5 gap-2"
            >
              Quiero inscribirme
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border-2 border-white/40 text-white font-medium text-lg hover:bg-white/10 transition-all duration-300"
            >
              Tengo preguntas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

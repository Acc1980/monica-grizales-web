import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "¡Bienvenida al entrenamiento! — Reconociendo mi Poder",
  description: "Gracias por unirte al entrenamiento Reconociendo mi Poder con Mónica Grizales.",
  robots: { index: false, follow: false },
};

const WA_COMMUNITY = "https://chat.whatsapp.com/EsbCm6Pg2S6ImQ87exC8lV";

export default function GraciasRMPPage() {
  return (
    <div className="min-h-screen bg-arena-50">
      {/* ════════ HERO ════════ */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/foto5.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-arena-50/90 via-arena-50/80 to-arena-50/95" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-malva-100 flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-malva-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          </div>
          <p className="uppercase tracking-[0.3em] text-xs text-malva-600 font-semibold mb-4">
            Pago confirmado
          </p>
          <h1 className="font-playfair text-3xl md:text-5xl text-humo-800 mb-4 leading-tight">
            ¡Bienvenida! Tu cupo está confirmado 🌿
          </h1>
          <p className="text-humo-600 text-lg md:text-xl leading-relaxed">
            Gracias por dar este paso. Estamos muy felices de tenerte en el entrenamiento{" "}
            <strong className="text-malva-700">Reconociendo mi Poder</strong>.
          </p>
        </div>
      </section>

      {/* ════════ BONO PRIMERAS 10 ════════ */}
      <section className="py-12 bg-malva-700 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-3xl mb-4">🎁</p>
          <p className="uppercase tracking-[0.25em] text-xs text-malva-200 font-semibold mb-3">
            Bono exclusivo · Primeras 10 inscritas
          </p>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
            ¡Estás entre las primeras 10 mujeres!
          </h2>
          <p className="text-arena-200 text-base leading-relaxed mb-8">
            Por llegar primero, tienes acceso a una sesión grupal en vivo el{" "}
            <strong className="text-white">13 de abril</strong> que no tendrán las demás participantes.
          </p>
          <div className="bg-malva-800/50 rounded-2xl border border-malva-500/40 p-6 text-left">
            <h3 className="font-playfair text-xl font-bold text-white text-center mb-5">
              Activa tu poder: de la duda a la acción
            </h3>
            <ul className="space-y-3">
              {[
                "Sesión grupal en vivo por Zoom",
                "Espacio para aclarar dudas sobre lo trabajado en el entrenamiento",
                "Revisamos qué has podido implementar y qué no te ha funcionado",
                "Trabajo en grupo para fortalecernos todas juntas",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="text-malva-300 shrink-0 mt-0.5">✦</span>
                  <span className="text-arena-100 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ════════ QUÉ INCLUYE ════════ */}
      <section className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-humo-800 text-center mb-8">
            Esto es todo lo que recibes con tu inscripción
          </h2>
          <div className="flex justify-center mb-8">
            <Image
              src="/images/mockup.png"
              alt="Contenido del entrenamiento Reconociendo mi Poder"
              width={600}
              height={500}
              className="w-full max-w-lg rounded-2xl object-contain"
            />
          </div>
          <div className="bg-arena-50 rounded-2xl border border-arena-200 p-8">
            <ul className="space-y-4">
              {[
                "2 sesiones en vivo por Zoom",
                "Comunidad de WhatsApp — un espacio solo para mujeres que están en este camino",
                "Guía práctica: Libérate de la culpa y vuelve a tu lugar",
                "Calendario Mi mes consciente",
                "Grabación por 30 días",
                "Activa tu poder: de la duda a la acción — sesión grupal en vivo (bono primeras 10) 🎁",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="text-malva-600 shrink-0 mt-0.5 text-lg">✦</span>
                  <span className="text-humo-700 text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-center font-playfair text-xl font-bold text-malva-700 mt-6 pt-6 border-t border-arena-200">
              Todo por $300.000 COP 🌿
            </p>
          </div>
        </div>
      </section>

      {/* ════════ PRÓXIMOS PASOS ════════ */}
      <section className="py-14 bg-arena-100/60">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-humo-800 text-center mb-10">
            ¿Qué sigue?
          </h2>
          <div className="space-y-5">
            {[
              {
                fecha: "30 de marzo",
                icon: "💬",
                titulo: "Recibes el link de la comunidad",
                desc: "Te enviaremos el enlace para unirte a la comunidad de WhatsApp del entrenamiento, donde encontrarás todas las instrucciones y recursos para el evento.",
              },
              {
                fecha: "7 y 8 de abril",
                icon: "💻",
                titulo: "El entrenamiento en vivo",
                desc: "Nos encontramos en Zoom de 6:30 pm a 9:30 pm (hora Colombia). Dos noches de trabajo profundo juntas.",
              },
              {
                fecha: "13 de abril",
                icon: "🎁",
                titulo: "Actividad especial — primeras 10",
                desc: "Sesión exclusiva para las primeras 10 mujeres inscritas. Todos los detalles los recibirás en la comunidad.",
              },
            ].map((paso, index) => (
              <div key={index} className="flex gap-4 items-start bg-white rounded-2xl border border-arena-200 p-5">
                <div className="text-3xl shrink-0">{paso.icon}</div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-malva-600 font-semibold mb-1">{paso.fecha}</p>
                  <h3 className="font-semibold text-humo-800 mb-1">{paso.titulo}</h3>
                  <p className="text-humo-500 text-sm leading-relaxed">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════ MINI FOOTER ════════ */}
      <div className="bg-humo-700 text-arena-400 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Mónica Grizales &middot; Sanación Emocional y Liderazgo Femenino</p>
      </div>
    </div>
  );
}

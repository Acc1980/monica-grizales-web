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
            Pago confirmado &middot; Reconociendo mi Poder
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
      <section className="py-10 bg-malva-700 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-2xl mb-3">🎁</p>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold mb-3">
            ¡Estás entre las primeras 10 mujeres!
          </h2>
          <p className="text-arena-200 text-base leading-relaxed">
            Como una de las primeras en inscribirte, tienes acceso a una{" "}
            <strong className="text-white">actividad especial el 13 de abril</strong> exclusiva
            para quienes llegaron primero. Recibirás todos los detalles en la comunidad.
          </p>
        </div>
      </section>

      {/* ════════ QUÉ INCLUYE ════════ */}
      <section className="py-14 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-humo-800 text-center mb-8">
            Esto es todo lo que recibes con tu inscripción
          </h2>
          <div className="bg-arena-50 rounded-2xl border border-arena-200 p-8">
            <ul className="space-y-4">
              {[
                "2 sesiones en vivo por Zoom",
                "Comunidad de WhatsApp — un espacio solo para mujeres que están en este camino",
                "Guía práctica: Libérate de la culpa y vuelve a tu lugar",
                "Calendario Mi mes consciente",
                "Grabación por 30 días",
                "Actividad especial el 13 de abril (bono primeras 10 inscritas) 🎁",
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

      {/* ════════ CTA COMUNIDAD ════════ */}
      <section className="py-14 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-humo-500 text-base leading-relaxed mb-6">
            El 30 de marzo te enviamos el link oficial, pero si quieres unirte ya a la comunidad puedes hacerlo aquí:
          </p>
          <a
            href={WA_COMMUNITY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:bg-[#1ebe5d] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Unirme a la comunidad del entrenamiento
          </a>
          <p className="mt-8 text-humo-400 text-sm">
            ¿Tienes dudas? Escríbenos{" "}
            <a
              href="https://wa.link/cu63i0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-malva-600 hover:text-malva-700 underline underline-offset-2"
            >
              aquí por WhatsApp
            </a>
            .
          </p>
        </div>
      </section>

      {/* ════════ MINI FOOTER ════════ */}
      <div className="bg-humo-700 text-arena-400 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Mónica Grizales &middot; Sanación Emocional y Liderazgo Femenino</p>
      </div>
    </div>
  );
}

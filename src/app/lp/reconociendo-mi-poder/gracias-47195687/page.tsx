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
    <div className="min-h-screen bg-arena-50 flex flex-col">
      {/* Hero */}
      <section className="relative flex-1 flex items-center justify-center py-20 overflow-hidden">
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
          {/* Ícono de confirmación */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-malva-100 flex items-center justify-center shadow-lg">
              <svg className="w-10 h-10 text-malva-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
          </div>

          <p className="uppercase tracking-[0.3em] text-xs text-malva-600 font-semibold mb-4">
            Entrenamiento virtual &middot; 7 y 8 de abril 2026
          </p>

          <h1 className="font-playfair text-3xl md:text-5xl text-humo-800 mb-4 leading-tight">
            ¡Tu cupo está confirmado!
          </h1>

          <p className="text-humo-600 text-lg md:text-xl mb-8 leading-relaxed">
            Gracias por dar este paso. Te esperamos en el entrenamiento{" "}
            <strong className="text-malva-700">Reconociendo mi Poder</strong>.
          </p>

          {/* Card principal */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 text-left border border-arena-200">
            <h2 className="font-playfair text-xl text-humo-800 mb-3 text-center">
              El siguiente paso es unirte a la comunidad
            </h2>
            <p className="text-humo-500 text-sm text-center mb-6">
              Ahí recibirás toda la información del entrenamiento: horarios, acceso al zoom y materiales.
            </p>

            <a
              href={WA_COMMUNITY}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-lg hover:bg-[#1ebe5d] transition-all duration-300 shadow-lg hover:-translate-y-0.5"
            >
              {/* WhatsApp icon */}
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Unirme a la comunidad del entrenamiento
            </a>
          </div>

          {/* Qué esperar */}
          <div className="bg-malva-50 rounded-2xl border border-malva-100 p-6 text-left">
            <h3 className="font-semibold text-humo-700 mb-4 text-center">¿Qué encontrarás en la comunidad?</h3>
            <ul className="space-y-3">
              {[
                "El enlace de Zoom para los dos días del entrenamiento",
                "Recordatorios con hora y fecha exacta",
                "Materiales y recursos del proceso",
                "Conexión con las demás participantes",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-humo-600 text-sm">
                  <svg className="w-5 h-5 text-malva-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-humo-400 text-sm">
            ¿Tienes dudas? Escríbele directamente a{" "}
            <a
              href="https://wa.me/573217968856?text=Hola%20Mónica%2C%20tengo%20una%20pregunta%20sobre%20el%20entrenamiento%20Reconociendo%20mi%20Poder."
              target="_blank"
              rel="noopener noreferrer"
              className="text-malva-600 hover:text-malva-700 underline underline-offset-2"
            >
              Mónica por WhatsApp
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}

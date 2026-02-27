import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Comunícate con Mónica Grizales. Estamos aquí para acompañarte en tu proceso de sanación emocional.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-arena-100/60">
        <div className="section-container">
          <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
            Contacto
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-humo-700 leading-tight mb-4">
            Estamos aquí para ti
          </h1>
          <p className="text-humo-500 text-lg max-w-2xl">
            Si tienes preguntas sobre el proceso, quieres más información o
            simplemente necesitas hablar, escríbenos.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Formas de conectar */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-humo-700 mb-8">
                Formas de conectar
              </h2>

              <div className="space-y-4">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/573217968856"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-arena-200 hover:border-malva-300 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 group-hover:bg-green-100 transition-colors">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-humo-700 mb-0.5">WhatsApp</h3>
                    <p className="text-humo-500 text-sm mb-1">
                      La forma más rápida de contactarnos
                    </p>
                    <p className="text-malva-400 text-sm font-medium">
                      +57 321 796 8856
                    </p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/monigrizales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-arena-200 hover:border-malva-300 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0 group-hover:bg-orange-100 transition-colors">
                    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-humo-700 mb-0.5">Instagram</h3>
                    <p className="text-humo-500 text-sm mb-1">
                      Contenido diario y mensajes directos
                    </p>
                    <p className="text-malva-400 text-sm font-medium">
                      @monigrizales
                    </p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contacto@monigrizales.com"
                  className="flex items-start gap-4 p-5 rounded-xl bg-white border border-arena-200 hover:border-malva-300 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-malva-50 flex items-center justify-center shrink-0 group-hover:bg-malva-100 transition-colors">
                    <svg className="w-6 h-6 text-ciruela-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-humo-700 mb-0.5">
                      Correo electrónico
                    </h3>
                    <p className="text-humo-500 text-sm mb-1">
                      Para consultas más detalladas
                    </p>
                    <p className="text-malva-400 text-sm font-medium">
                      contacto@monigrizales.com
                    </p>
                  </div>
                </a>

                {/* Sesiones virtuales */}
                <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-arena-200">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-humo-700 mb-0.5">
                      Sesiones Virtuales
                    </h3>
                    <p className="text-humo-500 text-sm mb-1">
                      Todos nuestros procesos son 100% virtuales
                    </p>
                    <p className="text-malva-400 text-sm font-medium">
                      Desde cualquier lugar del mundo
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Cita */}
      <section className="py-12 bg-arena-100/60">
        <div className="section-container">
          <div className="card max-w-2xl mx-auto text-center py-8 bg-arena-200/30 border-arena-200">
            <p className="font-serif italic text-humo-500 text-lg leading-relaxed">
              &ldquo;El primer paso es atreverte a preguntar.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

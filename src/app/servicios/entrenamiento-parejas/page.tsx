import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SparkleIcon from "@/components/SparkleIcon";

export const metadata: Metadata = {
  title: "El Orden y Amor en Pareja — Entrenamiento para Parejas",
  description:
    "Entrenamiento para parejas con Mónica Grizales y José Daniel Duarte. Comprende los pilares de la relación desde el amor, la intimidad, la convivencia y el equilibrio.",
};

const WHATSAPP_NUMBER = "573217968856";
const WHATSAPP_MSG = encodeURIComponent(
  "Hola Mónica, quiero información sobre el entrenamiento El Orden y Amor en Pareja. 💜"
);

export default function EntrenamientoParejasPage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <Image
          src="/images/foto8.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-arena-50/75 backdrop-blur-[2px]" />
        <div className="section-container relative text-center">
          <SparkleIcon className="w-10 h-10 text-malva-400 mx-auto mb-6" />
          <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
            Entrenamiento para Parejas
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-humo-700 mb-6">
            El Orden y Amor{" "}
            <span className="text-malva-600">en Pareja</span>
          </h1>
          <p className="text-humo-600 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-medium">
            ¿Cuál es el más valioso, el más importante? ¿Cuál viene primero?
            El amor tiene que integrarse a un orden.{" "}
            <strong className="text-malva-600">El orden precede al amor.</strong>
          </p>
          <p className="text-humo-500 text-base max-w-xl mx-auto mb-10">
            Un espacio para parejas que desean construir relaciones conscientes
            desde la adultez emocional y el orden sistémico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Link href="/servicios" className="btn-secondary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ FACILITADORES ════════ */}
      <section className="bg-malva-700 text-white py-4">
        <div className="section-container flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <p className="text-sm md:text-base font-medium">
            Facilitado por <strong>Mónica Grizales</strong> y <strong>José Daniel Duarte</strong> &middot; En alianza con <strong>CEFODIP</strong>
          </p>
        </div>
      </section>

      {/* ════════ CUANDO EL AMOR NO ES SUFICIENTE ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
                Cuando el amor{" "}
                <span className="text-malva-600">no es suficiente</span>
              </h2>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-arena-200">
                <div className="w-8 h-8 rounded-full bg-malva-600/10 text-malva-600 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <p className="text-humo-600 leading-relaxed">
                  Para lograr el bienestar y la estabilidad en la relación, para que haya dicha,
                  el amor no es suficiente. De hecho, <strong className="text-humo-700">la mayoría de las parejas que se separan
                  lo hacen a pesar del amor</strong>, a pesar de que se quieren, pues sucede que no
                  encuentran modos de gestionar su amor de manera que se fermente la dicha.
                </p>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white border border-arena-200">
                <div className="w-8 h-8 rounded-full bg-malva-600/10 text-malva-600 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
                <p className="text-humo-600 leading-relaxed">
                  El primer orden del amor en una pareja pide que el hombre y la mujer,
                  aunque sean distintos, <strong className="text-humo-700">se consideren iguales</strong>. Cuando reconocen esto,
                  su amor tiene más probabilidades de ser logrado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ TE SIRVO / TE SIGO ════════ */}
      <section className="py-16 md:py-20 bg-humo-700 text-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          <SparkleIcon className="w-10 h-10 text-malva-300 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Te sirvo / Te sigo
          </h2>
          <p className="text-arena-300 text-lg leading-relaxed">
            Cuando se invierten los roles en la pareja, aunque sea de mutuo acuerdo,
            la pareja como tal deja de existir. El hombre se convierte en un hijo,
            compensando inconscientemente una frustración de su primera infancia,
            los hijos reales pierden su sitio, la mujer se hace muy grande,
            su mirada se dirige fuera de la familia, y ambos dejan de tener interés
            y respeto el uno por el otro como pareja.
          </p>
        </div>
      </section>

      {/* ════════ LO QUE MATA EL AMOR ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="uppercase tracking-[0.25em] text-sm text-malva-600 font-medium mb-4">
                Reflexión profunda
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700">
                Lo que mata el amor
              </h2>
            </div>
            <div className="space-y-4">
              {[
                "Querer cambiar a nuestra pareja, o desear que cambie, es faltar al amor y al respeto. Es el germen de la separación.",
                "Idealizar a alguien es faltarle al respeto.",
                "Los ismos matan el amor. Tienen un objetivo: el poder sobre el otro. No permiten que se desarrolle el amor, lo persiguen como a un enemigo. Y en efecto, si hay amor no hay postura de poder.",
                "Cuando entramos en rivalidad de poder con la pareja, estamos sembrando la semilla de la separación. Hemos entrado en un juego de manipulación, estamos ciegos y sin amor.",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-5 rounded-xl bg-white border border-arena-200">
                  <div className="w-8 h-8 rounded-full bg-malva-600/10 text-malva-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
                    </svg>
                  </div>
                  <p className="text-humo-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PILARES DE LA RELACIÓN ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-malva-600 font-medium mb-4">
              Contenido del entrenamiento
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
              Los 5 pilares de la relación en pareja
            </h2>
            <p className="text-humo-500 text-lg max-w-2xl mx-auto">
              Cada pareja es particular, no existe un estándar. Los pilares muestran un camino
              para la conquista del ser pareja, viviendo en el amor y desde el amor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                num: "1",
                title: "El Amor",
                desc: "La aceptación incondicional y agradecida al otro tal y como es. Te tomo tal y como eres, gracias por haberme sido regalado, gracias por ser como eres.",
                detail: "Distinguir entre amor y enamoramiento. Cuando nos enamoramos idealizamos al otro. Cuando hemos integrado esa necesidad, empezamos a descubrir al otro tal cual es.",
              },
              {
                num: "2",
                title: "Intimidad",
                desc: "Es el estado más evolucionado de la relación del adulto. Para que ocurra, ambos deben ser independientes afectivamente de sus padres.",
                detail: "De la misma forma cada hermano ha de volverse independiente de los demás hermanos para crear su propio sistema familiar.",
              },
              {
                num: "3",
                title: "Convivencia",
                desc: "Pone en juego el respeto mutuo, el respeto del orden por la pertenencia a un nuevo sistema de valores creado por ambos, distinto al de origen.",
                detail: "La resolución de los conflictos de pareja es la mayor herramienta de crecimiento humano.",
              },
              {
                num: "4",
                title: "Equilibrio entre dar y tomar",
                desc: "Dar nos permite pagar una deuda anterior, nos alivia. La tensión en la pareja empieza cuando no se equilibran.",
                detail: "El que recibe más de lo que puede dar se enfada y se va... a menos que sea capaz de agradecer al otro.",
              },
              {
                num: "5",
                title: "Sexualidad",
                desc: "La pareja se realiza en la sexualidad. Es un impulso que atraviesa todo el universo al servicio de la vida, una fuerza sagrada por excelencia.",
                detail: "La relación basada en otro motivo: soledad, economía, proyecto, tener un hijo, no tiene fuerza como pareja.",
              },
            ].map((item) => (
              <div key={item.num} className="card border-arena-200 p-6">
                <div className="w-10 h-10 rounded-full bg-malva-600 text-white flex items-center justify-center mb-4 font-serif text-lg font-bold">
                  {item.num}
                </div>
                <h3 className="font-serif text-xl font-bold text-humo-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-humo-500 text-sm leading-relaxed mb-3">
                  {item.desc}
                </p>
                <p className="text-humo-400 text-xs leading-relaxed italic">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FRASE ANCLA ════════ */}
      <section className="py-16 bg-malva-400 text-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          <blockquote className="font-serif text-xl md:text-2xl leading-relaxed italic">
            &ldquo;Aparentemente el amor solo no es suficiente.
            <br />
            El amor tiene que integrarse a un orden.{" "}
            <span className="font-semibold not-italic">El orden precede al amor.</span>&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ════════ TEMAS ADICIONALES ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.25em] text-sm text-malva-600 font-medium mb-4">
              También exploraremos
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700">
              Dinámicas profundas de la pareja
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Importancia de las ex parejas",
                desc: "Las parejas anteriores forman parte del campo de la pareja. El respeto del \"orden\" es fundamental. La pareja actual debe respeto a las anteriores porque se retiraron para darle sitio.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "La infidelidad",
                desc: "Forma parte del destino de uno y se convierte en el destino del otro. Gracias a las constelaciones y la sistémica se puede observar que hay que tomar a los padres, especialmente a la madre.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
              },
              {
                title: "La separación",
                desc: "Causa mucho sufrimiento, hay que aceptar transitarlo. Lo oportuno es reconocer que uno de los dos se aleja y asumir la responsabilidad. La separación debe ser la oportunidad de ambos para el crecimiento.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>
                ),
              },
              {
                title: "Manipulación y violencia",
                desc: "El pasado distorsiona nuestra percepción del presente. Las carencias vividas con la madre se reproducen de adultos para resolver lo que quedó pendiente. En la manipulación nos dejamos tomar por el rol de víctima o perpetrador.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="card border-arena-200 p-6">
                <div className="text-malva-400 mb-4">
                  {item.icon}
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

      {/* ════════ COMUNIDAD DE DESTINO ════════ */}
      <section className="py-16 md:py-20 bg-humo-700 text-white">
        <div className="section-container text-center max-w-3xl mx-auto">
          <SparkleIcon className="w-10 h-10 text-malva-300 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            La pareja como comunidad de destino
          </h2>
          <div className="space-y-4 text-arena-300 text-lg leading-relaxed">
            <p>
              Es una relación necesaria para ambos sistemas familiares. Ahora ambos
              pertenecen a una nueva comunidad sistémica por la fusión de sus sistemas
              de origen. <strong className="text-white">Todo es complementario.</strong>
            </p>
            <p>
              El sistema más cargado espera de la pareja menos cargada que se haga cargo
              de una herida que el otro no puede resolver.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ LA PAREJA Y LA ECONOMÍA ════════ */}
      <section className="py-12 bg-arena-100/60">
        <div className="section-container text-center max-w-3xl mx-auto">
          <blockquote className="font-serif text-xl md:text-2xl text-humo-600 leading-relaxed italic">
            &ldquo;La economía de ambos está al servicio del proyecto de pareja.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ════════ PARA QUIÉN ES ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="uppercase tracking-[0.25em] text-sm text-malva-600 font-medium mb-4">
                ¿Para quién es?
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700">
                Este entrenamiento es para ti si...
              </h2>
            </div>
            <div className="space-y-4">
              {[
                "Sientes que el amor no es suficiente para sostener tu relación",
                "Hay conflictos repetitivos que no logran resolver",
                "Quieres comprender el orden sistémico de tu pareja",
                "Deseas construir una relación desde la consciencia y el respeto mutuo",
                "Sientes que los roles en la pareja están invertidos o desequilibrados",
                "Quieres aprender a gestionar el amor para que florezca la dicha",
              ].map((item, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <div className="w-6 h-6 rounded-full bg-malva-600 text-white flex items-center justify-center shrink-0">
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
      </section>

      {/* ════════ PREGUNTAS FRECUENTES ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="uppercase tracking-[0.25em] text-sm text-malva-600 font-medium mb-4">
                Preguntas frecuentes
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700">
                Resolvemos tus dudas
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "¿Debo asistir con mi pareja?",
                  a: "No es obligatorio. Puedes asistir solo/a o en pareja. El entrenamiento te dará herramientas valiosas para comprender las dinámicas de relación sin importar si tu pareja asiste.",
                },
                {
                  q: "¿Necesito experiencia previa en terapia de pareja?",
                  a: "No, no se necesita ninguna experiencia previa. Este es un espacio para todas las personas que estén dispuestas a mirarse con honestidad y comprender sus vínculos.",
                },
                {
                  q: "¿Qué enfoque tiene este entrenamiento?",
                  a: "Trabajamos desde la mirada sistémica y las constelaciones familiares. Exploramos los órdenes del amor, los pilares de la relación y las dinámicas profundas que afectan la pareja.",
                },
                {
                  q: "¿Cómo me inscribo?",
                  a: "Al hacer clic en \"Quiero inscribirme\" serás redirigido/a a WhatsApp donde recibirás las instrucciones de inscripción y pago.",
                },
              ].map((item, index) => (
                <details
                  key={index}
                  className="group card border-arena-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-medium text-humo-700 hover:text-malva-600 transition-colors">
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
      <section className="py-20 md:py-28 bg-malva-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-malva-800/50 to-malva-400/10" />
        <div className="section-container relative text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            ¿Están listos para transformar su relación?
          </h2>
          <p className="text-arena-200 text-lg mb-3 max-w-xl mx-auto">
            El orden precede al amor. Descubran juntos los pilares que sostienen
            una relación consciente y plena.
          </p>
          <p className="text-arena-300 text-sm mb-10 max-w-md mx-auto">
            Facilitado por <strong className="text-white">Mónica Grizales</strong> y{" "}
            <strong className="text-white">José Daniel Duarte</strong> en alianza con CEFODIP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-malva-700 font-bold text-lg hover:bg-arena-100 transition-all duration-300 shadow-xl hover:-translate-y-0.5 gap-2"
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

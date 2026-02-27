import type { Metadata } from "next";
import Link from "next/link";
import SparkleIcon from "@/components/SparkleIcon";

export const metadata: Metadata = {
  title: "Abundancia Consciente",
  description:
    "Proceso sistémico de abundancia e identidad profesional con Mónica Grizales. Transforma tu relación con el dinero, el éxito y tu capacidad de ser oferta para el mundo.",
};

export default function AbundanciaConscientePage() {
  return (
    <>
      {/* ════════ HERO ════════ */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-arena-100/60 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-72 h-72 bg-malva-200/20 rounded-full blur-3xl" />
        <div className="section-container relative">
          <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
            Proceso Sistémico
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-humo-700 leading-tight mb-6 max-w-3xl">
            Abundancia Consciente
          </h1>
          <p className="text-humo-500 text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
            ¿Cuántas veces inicia el año con declaraciones, deseos y anhelos...
            y cuántos de esos realmente se cumplen? La forma de cambiar tu
            realidad es cambiando tu percepción.
          </p>
          <p className="text-malva-400 italic font-serif text-lg mb-10">
            La única forma de que llegue abundancia es entrenando tu mente,
            porque todo lo que te dé bienestar es abundancia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contacto" className="btn-primary">
              Quiero saber más
            </Link>
            <Link href="/servicios" className="btn-secondary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ FRASE ANCLA ════════ */}
      <section className="py-16 md:py-20 bg-arena-200/50">
        <div className="section-container text-center">
          <SparkleIcon className="w-7 h-7 text-ciruela-600 mx-auto mb-6" />
          <blockquote className="font-serif text-2xl md:text-3xl text-humo-600 leading-relaxed max-w-3xl mx-auto">
            &ldquo;La abundancia es una respuesta de agradecimiento del
            Universo a nuestro agradecimiento. La palabra clave de la
            abundancia es el Gracias.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ════════ QUÉ ES LA ABUNDANCIA ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
                Enfoque Sistémico
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 leading-tight mb-6">
                ¿Qué es la Abundancia?
              </h2>
              <p className="text-humo-500 text-lg leading-relaxed mb-4">
                Muchas veces creemos que la abundancia depende del esfuerzo...
                pero olvidamos algo esencial:{" "}
                <strong className="text-humo-700">
                  nuestro sistema familiar sigue hablando a través de nosotros.
                </strong>
              </p>
              <p className="text-humo-500 text-lg leading-relaxed mb-4">
                El dinero, el éxito y la expansión no solo se construyen:
                también se heredan, se bloquean o se ordenan desde historias
                que no siempre conocemos.{" "}
                <em className="text-ciruela-600">
                  ¿Y si la escasez no fuera tuya? ¿Y si la abundancia
                  estuviera esperando que mires con amor lo que quedó atrás?
                </em>
              </p>
              <p className="text-humo-500 text-lg leading-relaxed mb-4">
                Para ser próspero hay que soltar la creencia de que la
                prosperidad solo se mide con el dinero. Necesitamos esa
                conexión con algo más grande, porque nos inspira agradecimiento
                y humildad cuando recibimos.
              </p>
              <p className="text-humo-500 text-lg leading-relaxed">
                <strong className="text-humo-700">
                  Humildad y gratitud son los mejores antídotos contra el miedo
                  y la envidia
                </strong>{" "}
                al abrirnos a la riqueza.
              </p>
            </div>

            {/* Card visual */}
            <div className="card border-malva-200 text-center py-12">
              <div className="w-20 h-20 rounded-full bg-malva-100/60 flex items-center justify-center mx-auto mb-6">
                <SparkleIcon className="w-10 h-10 text-ciruela-600" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-humo-700 mb-4">
                El éxito no es un resultado.
                <br />
                Es un camino.
              </h3>
              <p className="text-humo-500 leading-relaxed max-w-sm mx-auto">
                Cada paso dado en la vida es un éxito. Todo es oportunidad,
                solo depende de nuestra mirada y nuestro deseo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ ÓRDENES DE LA ABUNDANCIA ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
              Fundamento Sistémico
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
              Los Órdenes de la Abundancia
            </h2>
            <p className="text-humo-500 text-lg max-w-2xl mx-auto">
              Existe un orden necesario para que la relación fluya dentro de
              todos los sistemas. Cuando ese orden se rompe, aparece la
              angustia, la culpa y el resentimiento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Pertenencia",
                description:
                  "La necesidad de ser reconocida y saberte parte. La conexión con algo más grande, con el Misterio o con la Vida. Cuando no perteneces, aparece la angustia.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                ),
              },
              {
                number: "02",
                title: "Equilibrio entre el Dar y el Tomar",
                description:
                  "Para tomar primero hay que dar. Lo que se da tiene que crear un valor en otros. El dinero es el reconocimiento al valor creado. Cuando no hay equilibrio, aparece la culpa.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                  </svg>
                ),
              },
              {
                number: "03",
                title: "Jerarquía",
                description:
                  "Respetar la jerarquía natural, respetando a los anteriores, estando en tu lugar sin usurpar el rol ni el lugar de nadie. Cuando no se respeta, aparece el resentimiento.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                  </svg>
                ),
              },
            ].map((orden) => (
              <div key={orden.number} className="card group flex flex-col h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-malva-100/60 text-malva-400 flex items-center justify-center group-hover:bg-ciruela-600 group-hover:text-white transition-colors duration-300">
                    {orden.icon}
                  </div>
                  <span className="text-malva-300 font-serif text-3xl font-bold">
                    {orden.number}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold text-humo-700 mb-3">
                  {orden.title}
                </h3>
                <p className="text-humo-500 leading-relaxed">
                  {orden.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ DAR Y TOMAR ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Buen Dar */}
            <div className="card border-l-4 border-l-malva-400">
              <h3 className="font-serif text-2xl font-bold text-humo-700 mb-6">
                Reglas del Buen Dar
              </h3>
              <ul className="space-y-4">
                {[
                  "Solo dar lo que tengo",
                  "Solo dar lo que el otro puede recibir",
                  "Solo dar lo proporcional a lo que el otro puede devolver",
                  "Dar desde el Adulto, al Adulto del otro",
                ].map((regla, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-malva-100 text-malva-400 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-humo-600">{regla}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Buen Tomar */}
            <div className="card border-l-4 border-l-ciruela-600">
              <h3 className="font-serif text-2xl font-bold text-humo-700 mb-6">
                Reglas del Buen Tomar
              </h3>
              <ul className="space-y-4">
                {[
                  "Valorar lo que el otro me da, sabiendo que puede ser distinto de lo que he dado o espero",
                  "Agradecer, dando un poco más para marcar mi reconocimiento",
                  "Dar un poco más cerca de las necesidades del otro",
                  "Recibir con apertura y sin juicio",
                ].map((regla, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-ciruela-100 text-ciruela-600 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold">{i + 1}</span>
                    </div>
                    <p className="text-humo-600">{regla}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="card max-w-2xl mx-auto border-arena-200 py-10">
              <p className="font-serif text-xl text-humo-600 leading-relaxed">
                <strong className="text-ciruela-600">Prosperidad</strong> es la
                respuesta al Buen Dar y al Buen Tomar. El dinero es el
                reconocimiento al valor creado. Es tu capacidad de ser oferta,
                la fuente principal de tu poder personal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ LAS RAÍCES ════════ */}
      <section className="section-padding bg-arena-200/40">
        <div className="section-container">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
              Nuestras Raíces
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
              La relación con nuestros padres y la abundancia
            </h2>
            <p className="text-humo-500 text-lg max-w-2xl mx-auto">
              El éxito entra en nuestra vida cuando la tomamos como es,
              asintiendo profundamente a lo que nos ha tocado, en particular a
              nuestras raíces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="w-12 h-12 rounded-full bg-malva-100/60 text-malva-400 flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-humo-700 mb-3">
                La Madre
              </h3>
              <p className="text-humo-500 leading-relaxed mb-4">
                Como tratamos a nuestra madre, así tratamos a la vida y así nos
                responde ella. Como tratamos a nuestra madre, así nos tratamos
                a nosotros mismos y a los demás.
              </p>
              <p className="font-serif italic text-malva-400 text-sm">
                El éxito nos viene al tomar a la madre.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 rounded-full bg-ciruela-100/60 text-ciruela-600 flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-bold text-humo-700 mb-3">
                El Padre
              </h3>
              <p className="text-humo-500 leading-relaxed mb-4">
                La manera en que tomamos a nuestro padre será la manera en que
                nos relacionamos con el mundo, con la sociedad y con todas las
                estructuras. A través del padre se nos abren las puertas del
                éxito profesional.
              </p>
              <p className="font-serif italic text-malva-400 text-sm">
                La realización profesional nos viene por el padre.
              </p>
            </div>
          </div>

          <div className="mt-8 card max-w-3xl mx-auto text-center border-malva-200">
            <p className="text-humo-600 text-lg leading-relaxed">
              El éxito en el trabajo es el resultado de la{" "}
              <strong className="text-humo-700">
                reconciliación en nosotros de la madre con el padre
              </strong>
              , reconciliación que se produce cuando miramos a los dos por
              igual, con el mismo agradecimiento.
            </p>
          </div>
        </div>
      </section>

      {/* ════════ MADURAR ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
                Madurar implica
              </h2>
              <p className="text-humo-500 text-lg">
                El camino hacia la abundancia consciente pasa por estos pasos
                fundamentales.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: "Tomar lo que me fue dado",
                  detail: "Aceptar mis raíces tal como son",
                },
                {
                  step: "Agradecer y celebrar",
                  detail: "La gratitud abre el flujo de la abundancia",
                },
                {
                  step: "Des-pedirme",
                  detail:
                    "Declarar que fue suficiente lo que me fue dado. Y que lo que falte lo pongo yo",
                },
                {
                  step: "Orientarme hacia el futuro",
                  detail: "Soltar el pasado y abrirme a lo nuevo",
                },
                {
                  step: "Disponerme a dejar huella",
                  detail:
                    "Convertirme en oferta poderosa para el mundo",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-5 p-5 rounded-xl bg-white border border-arena-200 hover:border-malva-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-malva-100/60 text-ciruela-600 flex items-center justify-center shrink-0">
                    <span className="font-serif font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-humo-700 mb-1">
                      {item.step}
                    </h4>
                    <p className="text-humo-500 text-sm">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CONSTELACIONES Y LINAJE ════════ */}
      <section className="section-padding bg-arena-100/60">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <SparkleIcon className="w-8 h-8 text-ciruela-600 mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-8">
              Tu linaje y tu abundancia
            </h2>
            <div className="space-y-6 text-humo-500 text-lg leading-relaxed text-left">
              <p>
                En este entrenamiento, basado en{" "}
                <strong className="text-humo-700">constelaciones familiares</strong>,
                vamos a revelar lealtades invisibles, soltar cargas que no te
                corresponden y abrir espacio para recibir desde un lugar nuevo:{" "}
                <em>el orden, la conciencia y la fuerza de tu linaje.</em>
              </p>
              <p>
                Cuando honras a tu sistema, la vida fluye.{" "}
                <strong className="text-ciruela-600">
                  Cuando tomas a tus ancestros, la abundancia te toma a ti.
                </strong>
              </p>
              <p className="font-serif italic text-ciruela-600 text-xl text-center pt-4">
                Si sientes el llamado, no es casualidad. Es tu historia
                pidiendo ser ordenada... para que tu presente y tu prosperidad
                puedan crecer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SER OFERTA ════════ */}
      <section className="py-20 md:py-28 bg-ciruela-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ciruela-700/80 to-malva-400/20" />
        <div className="section-container relative text-center">
          <SparkleIcon className="w-8 h-8 text-ciruela-300 mx-auto mb-6" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ser Oferta
          </h2>
          <p className="text-arena-200 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
            El que hace ofertas de valor es aquel que es capaz de escuchar el
            ser y ofrecer posibilidades. Es tu capacidad de ser oferta la
            fuente principal de tu poder personal.
          </p>
          <p className="text-malva-300 italic font-serif text-lg mb-10">
            &ldquo;Asentir a la vida es aceptarme como soy, agradecerme ser
            como soy, permitirme ser como soy.&rdquo;
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center px-10 py-3.5 rounded-full bg-white text-ciruela-700 font-semibold hover:bg-arena-100 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            Quiero comenzar este proceso
          </Link>
        </div>
      </section>

      {/* ════════ PREGUNTA FINAL ════════ */}
      <section className="section-padding bg-arena-50">
        <div className="section-container text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-6">
            ¿Si fueses completamente libre, qué le daría sentido a tu vida?
          </h2>
          <p className="text-humo-500 text-lg max-w-xl mx-auto mb-10">
            Este proceso te acompaña a encontrar tu respuesta. Escríbenos
            para saber más.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-primary">
              Contactar
            </Link>
            <Link href="/servicios" className="btn-secondary">
              Ver todos los servicios
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

import { useRef, useEffect } from "react";

const POWER_INDICATORS: Record<string, { bars: number; color: string }> = {
  poder_bajo: { bars: 2, color: "bg-malva-400" },
  poder_medio: { bars: 4, color: "bg-malva-400" },
  poder_alto: { bars: 6, color: "bg-malva-500" },
};

function PowerMeter({ resultKey }: { resultKey: string }) {
  const config = POWER_INDICATORS[resultKey] || POWER_INDICATORS.poder_bajo;
  return (
    <div className="flex items-end gap-1.5 justify-center my-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className={`w-4 rounded-sm transition-all duration-500 ${
            i < config.bars ? config.color : "bg-arena-300"
          }`}
          style={{ height: `${(i + 1) * 8 + 8}px` }}
        />
      ))}
    </div>
  );
}

export default function QuizResult({
  resultKey,
}: {
  resultKey: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section ref={sectionRef} className="py-14 md:py-20" id="result">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-arena-200 text-center">
          <p className="text-malva-600 text-sm font-medium tracking-wider uppercase mb-4">
            Tu resultado
          </p>

          <PowerMeter resultKey={resultKey} />

          <div className="text-left space-y-4 mt-6 mb-8">
            {resultKey === "poder_bajo" && (
              <>
                <p className="text-humo-700 text-lg leading-relaxed">
                  <strong className="font-serif text-2xl md:text-3xl block mb-3 text-humo-800">Estás viviendo desde el mandato</strong>
                  Estás usando aproximadamente entre el <strong>20% y 30% de tu poder personal.</strong>
                </p>
                <p className="text-humo-600 leading-relaxed">
                  Es posible que estés cargando <strong>lealtades familiares, patrones de sacrificio o creencias que nunca elegiste conscientemente.</strong>
                </p>
                <p className="text-humo-600 leading-relaxed">
                  Tal vez aprendiste que primero están los demás, que debes ser fuerte todo el tiempo o que ocupar tu lugar puede generar culpa.
                </p>
                <p className="text-humo-600 leading-relaxed">
                  Nada de esto significa que haya algo mal contigo.<br />
                  Es simplemente lo que aprendiste para pertenecer.
                </p>
                <p className="text-humo-600 leading-relaxed">
                  <strong>La buena noticia:</strong> cuando empiezas a verlo, ya estás dando el primer paso para salir de ese mandato.
                </p>
              </>
            )}
            {resultKey === "poder_medio" && (
              <>
                <p className="text-humo-700 text-lg leading-relaxed">
                  <strong className="font-serif text-2xl md:text-3xl block mb-3 text-humo-800">Estás despertando</strong>
                  Estás usando entre <strong>40% y 60% de tu poder personal.</strong> Esto significa que ya tienes momentos de claridad, pero <strong>todavía hay mandatos familiares y culpa que te hacen dudar de ocupar tu lugar.</strong>
                </p>
                <p className="text-humo-600 leading-relaxed">
                  Muchas mujeres se quedan años en este punto. Pero cuando entienden <strong>qué patrón las frena</strong>, todo cambia.
                </p>
              </>
            )}
            {resultKey === "poder_alto" && (
              <>
                <p className="text-humo-700 text-lg leading-relaxed">
                  <strong className="font-serif text-2xl md:text-3xl block mb-3 text-humo-800">Tu poder está activo</strong>
                  <strong>Estás usando más del 70% de tu poder personal.</strong>
                </p>
                <p className="text-humo-600 leading-relaxed">
                  Has hecho un trabajo importante contigo misma.
                  Seguramente ya has aprendido a <strong>escucharte, poner límites y tomar decisiones más conscientes.</strong>
                </p>
                <p className="text-humo-600 leading-relaxed">
                  <strong>El siguiente paso no es empezar de cero, sino integrar lo que ya sabes y llevarlo a un nivel más profundo.</strong>
                </p>
                <p className="text-humo-600 leading-relaxed">
                  Muchas mujeres descubren en este punto que todavía hay <strong>capas más profundas de su poder esperando ser liberadas.</strong>
                </p>
              </>
            )}
          </div>

          {/* CTA Masterclass */}
          <a
            href="/lp/masterclass/registro"
            className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 rounded-full bg-malva-600 text-white font-bold text-lg hover:bg-malva-700 transition-all duration-300 shadow-xl shadow-malva-600/30 hover:-translate-y-0.5 gap-2 mb-8"
          >
            👉 Quiero trabajar esto en la masterclass gratuita
          </a>

          {/* Info Masterclass */}
          <div className="border-2 border-malva-300 rounded-2xl p-6 mb-8 text-center bg-malva-50/50">
            <p className="text-malva-600 text-xs font-medium tracking-[0.2em] uppercase mb-2">
              Masterclass gratuita
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-humo-700 mb-2">
              3 bloqueos que te impiden ocupar tu lugar como mujer
            </h3>
            <p className="text-malva-700 font-semibold text-base mb-1">
              Martes 24 de marzo &middot; 7:00 PM (Colombia)
            </p>
            <p className="text-humo-400 text-sm mb-4">
              Vía Zoom &middot; 75 minutos
            </p>
            <p className="text-humo-600 text-sm leading-relaxed mb-5">
              Si quieres trabajar en vivo lo que descubriste en el quiz, te espero.
              Vamos a ir más profundo en los patrones que bloquean tu poder personal.
            </p>
            <a
              href="/lp/masterclass/registro"
              className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 rounded-full bg-malva-600 text-white font-bold text-base hover:bg-malva-700 transition-all duration-300 shadow-xl shadow-malva-600/30 hover:-translate-y-0.5 gap-2"
            >
              👉 Quiero trabajar esto en la masterclass gratuita
            </a>
          </div>

          {/* Comunidad WhatsApp */}
          <div className="border border-arena-200 rounded-2xl p-6 text-center bg-arena-50/60">
            <p className="text-2xl mb-2">💬</p>
            <h3 className="font-serif text-lg font-bold text-humo-700 mb-2">
              Únete a nuestra comunidad de WhatsApp
            </h3>
            <p className="text-humo-500 text-sm leading-relaxed mb-4">
              Un espacio exclusivo para mujeres que están en este camino de reconocerse y transformarse juntas.
            </p>
            <a
              href="https://chat.whatsapp.com/DRc2j575hcVDE9Ts7CPQfe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 rounded-full font-bold text-base text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{ backgroundColor: "#c88d74" }}
            >
              Unirme ahora
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

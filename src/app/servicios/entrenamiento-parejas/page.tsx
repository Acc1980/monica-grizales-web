import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Entrenamiento de Parejas",
  description:
    "Entrenamiento de parejas con Mónica Grizales. Vínculos conscientes desde la adultez emocional.",
};

export default function EntrenamientoParejasPage() {
  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-arena-100/60">
        <div className="section-container text-center">
          <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
            Próximamente
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-humo-700 mb-6">
            Entrenamiento de Parejas
          </h1>
          <p className="text-humo-500 text-lg max-w-2xl mx-auto mb-4">
            Comprende tus vínculos desde la adultez emocional y el orden
            sistémico. Un espacio para parejas que desean construir relaciones
            conscientes.
          </p>
          <p className="text-malva-400 italic font-serif text-lg mb-10">
            Estamos preparando este programa para ti.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contacto" className="btn-primary">
              Avísame cuando esté disponible
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

import type { Metadata } from "next";
import InscriptionForm from "@/components/InscriptionForm";

export const metadata: Metadata = {
  title: "Inscripción — Reconociendo mi Poder",
  description:
    "Inscríbete al programa Reconociendo mi Poder. 15 y 16 de abril de 2026. 100% Virtual. Las plazas son limitadas.",
};

export default function InscripcionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-arena-100/60">
        <div className="section-container">
          <p className="uppercase tracking-[0.25em] text-sm text-malva-400 font-medium mb-4">
            Inscripción
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-humo-700 leading-tight mb-4">
            Da el primer paso
          </h1>
          <p className="text-humo-500 text-lg max-w-2xl">
            Completa el formulario para reservar tu lugar en &ldquo;Reconociendo
            mi Poder&rdquo;. Las plazas son limitadas.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="section-padding bg-arena-50">
        <div className="section-container">
          <InscriptionForm />
        </div>
      </section>
    </>
  );
}

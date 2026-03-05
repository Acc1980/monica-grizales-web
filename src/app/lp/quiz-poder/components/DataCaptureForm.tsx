"use client";

import { useState, useRef, useEffect } from "react";
import { getResultByScore } from "../quiz-data";

interface DataCaptureFormProps {
  answers: number[];
  onComplete: (resultado: string) => void;
}

export default function DataCaptureForm({
  answers,
  onComplete,
}: DataCaptureFormProps) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!nombre.trim() || !email.trim()) {
      setErrorMsg("Nombre y email son obligatorios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMsg("Ingresa un email válido.");
      return;
    }

    setStatus("loading");

    const score = answers.reduce((sum, a) => sum + a, 0);
    const result = getResultByScore(score);

    try {
      const res = await fetch("/api/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim() || undefined,
          score,
          resultado: result.key,
          respuestas: answers,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.error || "Error al enviar. Intenta de nuevo.");
        setStatus("error");
        return;
      }

      onComplete(result.key);
    } catch {
      setErrorMsg("Error de conexión. Intenta de nuevo.");
      setStatus("error");
    }
  }

  return (
    <section ref={sectionRef} className="py-14 md:py-20" id="capture">
      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-arena-200">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-malva-100 text-malva-600 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 mb-2">
              Tu resultado está listo
            </h2>
            <p className="text-humo-500">
              Déjanos tus datos para enviártelo junto con un recurso gratuito
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-humo-600 mb-1"
              >
                Nombre *
              </label>
              <input
                id="nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="input-field"
                maxLength={100}
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-humo-600 mb-1"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="input-field"
                maxLength={200}
                required
              />
            </div>

            <div>
              <label
                htmlFor="whatsapp"
                className="block text-sm font-medium text-humo-600 mb-1"
              >
                WhatsApp{" "}
                <span className="text-humo-400 font-normal">(opcional)</span>
              </label>
              <input
                id="whatsapp"
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="+57 321 796 8856"
                className="input-field"
                maxLength={20}
              />
            </div>

            {errorMsg && (
              <p className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-malva-600 text-white font-bold text-base hover:bg-malva-700 transition-all duration-300 shadow-lg shadow-malva-600/20 disabled:opacity-60 disabled:cursor-not-allowed gap-2"
            >
              {status === "loading" ? (
                <>
                  <svg
                    className="w-5 h-5 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Cargando resultado...
                </>
              ) : (
                <>
                  Ver mi resultado
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </>
              )}
            </button>

            <p className="text-humo-400 text-xs text-center">
              Tus datos están seguros. No compartimos tu información con
              terceros.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

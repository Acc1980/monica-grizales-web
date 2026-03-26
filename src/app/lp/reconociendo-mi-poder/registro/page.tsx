"use client";

import { useState } from "react";
import Image from "next/image";

export default function RegistroPagadoPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comoNosEncontraste: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/inscriptions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          motivacion: "Ya realizó el pago — registro post-pago",
        }),
      });

      const data = await res.json();

      if (data.success) {
        window.location.href = "/lp/reconociendo-mi-poder/gracias-47195687";
      } else {
        setStatus("error");
        setMessage(data.error || "Ocurrió un error. Intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Verifica tu internet e intenta de nuevo.");
    }
  };

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
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-malva-600 font-semibold mb-4">
            Reconociendo mi Poder &middot; 7 y 8 de abril 2026
          </p>
          <h1 className="font-playfair text-3xl md:text-4xl text-humo-800 mb-4 leading-tight">
            Completa tu registro
          </h1>
          <p className="text-humo-500 text-base leading-relaxed">
            Ya tienes tu cupo asegurado. Solo necesitamos tus datos para enviarte toda la información del entrenamiento.
          </p>
        </div>
      </section>

      {/* ════════ FORMULARIO ════════ */}
      <section className="py-14 bg-white">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Nombre */}
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-humo-700 mb-2">
                Nombre completo <span className="text-malva-400">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className="input-field"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-humo-700 mb-2">
                Correo electrónico <span className="text-malva-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="input-field"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-humo-700 mb-2">
                Teléfono / WhatsApp <span className="text-malva-400">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                required
                value={form.telefono}
                onChange={handleChange}
                placeholder="+57 300 123 4567"
                className="input-field"
              />
            </div>

            {/* Cómo nos encontraste */}
            <div>
              <label htmlFor="comoNosEncontraste" className="block text-sm font-medium text-humo-700 mb-2">
                ¿Cómo nos encontraste?
              </label>
              <select
                id="comoNosEncontraste"
                name="comoNosEncontraste"
                value={form.comoNosEncontraste}
                onChange={handleChange}
                className="input-field appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%237a7a7a%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]"
              >
                <option value="">Selecciona una opción</option>
                <option value="Instagram">Instagram</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Recomendación">Recomendación de alguien</option>
                <option value="Google">Google</option>
                <option value="Facebook">Facebook</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* Error */}
            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                {message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center px-10 py-4 rounded-full bg-malva-600 text-white font-bold text-lg hover:bg-malva-700 transition-all duration-300 shadow-xl shadow-malva-600/30 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Enviando..." : "Confirmar mi registro"}
            </button>

            <p className="text-xs text-humo-400 text-center leading-relaxed">
              Al enviar este formulario, nos autorizas a contactarte para brindarte
              información sobre el entrenamiento.
            </p>
          </form>
        </div>
      </section>

      {/* ════════ MINI FOOTER ════════ */}
      <div className="bg-humo-700 text-arena-400 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Mónica Grizales &middot; Sanación Emocional y Liderazgo Femenino</p>
      </div>
    </div>
  );
}

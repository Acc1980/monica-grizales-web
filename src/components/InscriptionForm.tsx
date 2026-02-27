"use client";

import { useState } from "react";
import Link from "next/link";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L13.09 8.26L18 6L14.74 10.91L21 12L14.74 13.09L18 18L13.09 15.74L12 22L10.91 15.74L6 18L9.26 13.09L3 12L9.26 10.91L6 6L10.91 8.26L12 2Z" />
      <path d="M19 2L19.5 4L21 3.5L19.5 4.5L20 6L19 5L18 6L18.5 4.5L17 4L18.5 3.5L19 2Z" opacity="0.7" />
    </svg>
  );
}

export default function InscriptionForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    edad: "",
    comoNosEncontraste: "",
    motivacion: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          edad: form.edad ? Number(form.edad) : undefined,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage("¡Inscripción enviada con éxito! Te contactaremos pronto.");
        setForm({
          nombre: "",
          email: "",
          telefono: "",
          edad: "",
          comoNosEncontraste: "",
          motivacion: "",
        });
      } else {
        setStatus("error");
        setMessage(data.error || "Ocurrió un error. Intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("Error de conexión. Verifica tu internet e intenta de nuevo.");
    }
  };

  if (status === "success") {
    return (
      <div className="card text-center py-12 border-malva-200">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-bold text-humo-700 mb-3">
          ¡Gracias por inscribirte!
        </h3>
        <p className="text-humo-500 mb-6">{message}</p>
        <Link href="/" className="btn-secondary text-sm">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
      {/* Formulario */}
      <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
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

        {/* Edad */}
        <div>
          <label htmlFor="edad" className="block text-sm font-medium text-humo-700 mb-2">
            Edad
          </label>
          <input
            type="number"
            id="edad"
            name="edad"
            min="16"
            max="99"
            value={form.edad}
            onChange={handleChange}
            placeholder="Tu edad"
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

        {/* Motivación */}
        <div>
          <label htmlFor="motivacion" className="block text-sm font-medium text-humo-700 mb-2">
            ¿Qué te motiva a tomar este proceso?
          </label>
          <textarea
            id="motivacion"
            name="motivacion"
            rows={4}
            value={form.motivacion}
            onChange={handleChange}
            placeholder="Cuéntanos brevemente qué te trae aquí..."
            className="input-field resize-none"
          />
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
          className="btn-primary w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            "Enviando..."
          ) : (
            <>
              Enviar inscripción{" "}
              <svg className="w-5 h-5 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </>
          )}
        </button>

        <p className="text-xs text-humo-400 text-center leading-relaxed">
          Al enviar este formulario, nos autorizas a contactarte para brindarte
          información sobre el proceso.
        </p>
      </form>

      {/* Card lateral - Info del programa */}
      <div className="lg:col-span-2">
        <div className="card border-arena-200 sticky top-28">
          <div className="flex items-center gap-2 mb-6">
            <SparkleIcon className="w-5 h-5 text-malva-400" />
            <h3 className="font-serif text-xl font-bold text-humo-700">
              Reconociendo mi Poder
            </h3>
          </div>

          <div className="space-y-4 mb-8">
            {[
              { label: "Fecha", value: "15 y 16 de abril 2026" },
              { label: "Formato", value: "Grupal" },
              { label: "Modalidad", value: "100% Virtual" },
              { label: "Facilitadora", value: "Mónica Grizales" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex justify-between py-3 border-b border-arena-200 last:border-0"
              >
                <span className="text-humo-400 text-sm">{item.label}</span>
                <span className="text-humo-700 font-medium text-sm">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-malva-50/50 mb-6">
            <p className="font-serif italic text-humo-500 text-sm leading-relaxed text-center">
              &ldquo;El primer paso hacia tu poder es reconocer que mereces
              elegir.&rdquo;
            </p>
          </div>

          <p className="text-sm text-humo-400 text-center">
            ¿Tienes preguntas antes de inscribirte?{" "}
            <Link
              href="/contacto"
              className="text-malva-400 hover:text-ciruela-600 underline transition-colors"
            >
              Contáctanos
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

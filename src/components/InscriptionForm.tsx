"use client";

import { useState } from "react";
import Link from "next/link";
import SparkleIcon from "@/components/SparkleIcon";

const PAYMENT_LINK = "https://www.mercadopago.com.co/checkout/v1/payment/redirect/f14ea180-4ed7-421c-94d6-043bfca60c00/payment-option-form/?source=link&preference-id=151127219-1906df5e-7eb1-4759-a996-395ccdab7f7b&router-request-id=fa6c025a-eed5-4a00-8741-04c2ccffc659&p=a0a303f7529be5ee8d36d23e61d86324";

export default function InscriptionForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    edad: "",
    comoNosEncontraste: "",
    motivacion: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
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
          mayorDeEdad: form.edad === "si",
        }),
      });

      const data = await res.json();

      if (data.success) {
        // Redirigir directamente a Mercado Pago
        window.location.href = PAYMENT_LINK;
        return;
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

        {/* Mayor de edad */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="edad"
            name="edad"
            checked={form.edad === "si"}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, edad: e.target.checked ? "si" : "" }))
            }
            className="mt-1 w-4 h-4 rounded border-arena-300 text-malva-600 focus:ring-malva-600 cursor-pointer"
          />
          <label htmlFor="edad" className="text-sm text-humo-600 cursor-pointer">
            Confirmo que soy <strong>mayor de edad</strong> (18 años o más)
          </label>
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
              Inscribirme y pasar al pago{" "}
              <svg className="w-5 h-5 ml-1 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
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
            <SparkleIcon className="w-5 h-5 text-malva-600" />
            <h3 className="font-serif text-xl font-bold text-humo-700">
              Reconociendo mi Poder
            </h3>
          </div>

          <div className="space-y-4 mb-8">
            {[
              { label: "Fecha", value: "15 y 16 de abril 2026" },
              { label: "Horario", value: "6:30 - 9:30 pm (hora Colombia)" },
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
            <div className="flex justify-between py-3">
              <span className="text-humo-400 text-sm">Inversión</span>
              <span className="text-right">
                <span className="text-humo-400 text-xs line-through block">$350.000 COP</span>
                <span className="text-humo-700 font-bold text-sm">$300.000 COP</span>
                <span className="text-malva-400 text-xs block">Pronto pago</span>
              </span>
            </div>
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
              className="text-malva-400 hover:text-malva-600 underline transition-colors"
            >
              Contáctanos
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

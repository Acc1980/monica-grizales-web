"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage(
          data.data?.mensaje ||
            "Tu mensaje ha sido enviado. Te responderemos pronto."
        );
        setForm({ nombre: "", email: "", mensaje: "" });
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
      <div className="card text-center py-10 border-malva-200">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="font-serif text-xl font-bold text-humo-700 mb-2">
          ¡Mensaje enviado!
        </h3>
        <p className="text-humo-500 text-sm">{message}</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 className="font-serif text-2xl font-bold text-humo-700 mb-8">
        Envíanos un mensaje
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="contact-nombre" className="block text-sm font-medium text-humo-700 mb-2">
            Nombre <span className="text-malva-400">*</span>
          </label>
          <input
            type="text"
            id="contact-nombre"
            name="nombre"
            required
            value={form.nombre}
            onChange={handleChange}
            placeholder="Tu nombre"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-humo-700 mb-2">
            Correo electrónico <span className="text-malva-400">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="input-field"
          />
        </div>

        <div>
          <label htmlFor="contact-mensaje" className="block text-sm font-medium text-humo-700 mb-2">
            Mensaje <span className="text-malva-400">*</span>
          </label>
          <textarea
            id="contact-mensaje"
            name="mensaje"
            rows={5}
            required
            value={form.mensaje}
            onChange={handleChange}
            placeholder="¿En qué podemos ayudarte?"
            className="input-field resize-none"
          />
        </div>

        {status === "error" && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Enviando..." : "Enviar mensaje"}
        </button>
      </form>
    </div>
  );
}

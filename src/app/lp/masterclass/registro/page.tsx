"use client";

import { useState } from "react";

export default function MasterclassRegistroPage() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/masterclass-registro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        // Meta Pixel: evento de registro a masterclass
        if (typeof window !== "undefined" && typeof window.fbq === "function") {
          window.fbq("track", "Lead", {
            content_name: "Masterclass 3 Bloqueos",
            content_category: "masterclass",
          });
        }
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Ocurrió un error. Intenta de nuevo.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Error de conexión. Verifica tu internet e intenta de nuevo.");
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-arena-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-arena-200">
            <div className="w-16 h-16 bg-malva-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-malva-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 mb-3">
              ¡Estás registrada!
            </h2>
            <p className="text-humo-500 leading-relaxed mb-6">
              Te esperamos el <strong className="text-malva-700">martes 24 de marzo a las 7:00 PM</strong> por Zoom.
              Revisa tu correo — te enviaremos el enlace de acceso.
            </p>
            <div className="bg-malva-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-malva-700 font-medium">Masterclass gratuita</p>
              <p className="font-serif text-lg font-bold text-humo-700 mt-1">
                3 bloqueos que te impiden ocupar tu lugar como mujer
              </p>
              <p className="text-sm text-humo-400 mt-1">Martes 24 marzo · 7:00 PM · Zoom</p>
            </div>
            <p className="text-xs text-humo-400">
              ✦ Mónica Grizales
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-arena-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-arena-200">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-malva-600 text-xs font-medium tracking-[0.2em] uppercase mb-2">
              Masterclass gratuita
            </p>
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-humo-700 mb-2">
              3 bloqueos que te impiden ocupar tu lugar como mujer
            </h1>
            <p className="text-malva-700 font-semibold text-sm">
              Martes 24 de marzo · 7:00 PM (Colombia)
            </p>
            <p className="text-humo-400 text-sm">
              Vía Zoom · 45 min + preguntas · Gratis
            </p>
          </div>

          {/* Separador */}
          <div className="w-12 h-px bg-malva-300 mx-auto mb-8 opacity-50" />

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-humo-700 mb-1.5">
                Tu nombre <span className="text-malva-400">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder="¿Cómo te llamas?"
                className="w-full px-4 py-3 rounded-xl border border-arena-300 text-humo-700 placeholder:text-humo-300 focus:outline-none focus:ring-2 focus:ring-malva-400 focus:border-transparent transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-humo-700 mb-1.5">
                Tu email <span className="text-malva-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className="w-full px-4 py-3 rounded-xl border border-arena-300 text-humo-700 placeholder:text-humo-300 focus:outline-none focus:ring-2 focus:ring-malva-400 focus:border-transparent transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-humo-700 mb-1.5">
                WhatsApp <span className="text-humo-300 text-xs">(opcional)</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="+57 300 123 4567"
                className="w-full px-4 py-3 rounded-xl border border-arena-300 text-humo-700 placeholder:text-humo-300 focus:outline-none focus:ring-2 focus:ring-malva-400 focus:border-transparent transition-all text-sm"
              />
            </div>

            {status === "error" && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-3.5 rounded-full bg-malva-600 text-white font-bold text-base hover:bg-malva-700 transition-all duration-300 shadow-lg shadow-malva-600/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Registrando..." : "Reservar mi lugar gratis"}
            </button>

            <p className="text-xs text-humo-400 text-center leading-relaxed">
              Es 100% gratis. Te enviaremos el enlace de Zoom a tu correo.
            </p>
          </form>
        </div>

        {/* Brand */}
        <p className="text-center text-sm text-humo-300 mt-6">
          ✦ Mónica Grizales
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sesión 2 — Reconociendo mi Poder",
  description: "Grabación de la segunda sesión del entrenamiento Reconociendo mi Poder con Mónica Grizales.",
  robots: { index: false, follow: false },
};

const DRIVE_ID = "1PVGWCZGjxg4qR--3cqlZMnhcyx-y1RYr";

export default function Sesion2Page() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(160deg, #1e1a2e 0%, #2d2040 60%, #1a2030 100%)" }}
    >
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">

        {/* Encabezado */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[4px] uppercase mb-3" style={{ color: "#c4a8f0" }}>
            Reconociendo mi Poder · 8 de abril 2026
          </p>
          <h1
            className="font-serif text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#f5f0ff" }}
          >
            Grabación — Sesión 2
          </h1>
          <p className="text-sm max-w-xl mx-auto" style={{ color: "rgba(245,240,255,0.5)" }}>
            Aquí tienes la grabación completa de la segunda sesión. Tienes acceso durante 30 días.
          </p>
        </div>

        {/* Video */}
        <div
          className="relative w-full rounded-2xl overflow-hidden mb-10"
          style={{
            paddingTop: "56.25%",
            boxShadow: "0 0 60px rgba(124,92,191,0.25)",
            border: "1px solid rgba(124,92,191,0.2)",
          }}
        >
          <iframe
            src={`https://drive.google.com/file/d/${DRIVE_ID}/preview`}
            title="Reconociendo mi Poder — Sesión 2"
            allow="autoplay"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <p className="text-center text-xs" style={{ color: "rgba(245,240,255,0.25)" }}>
          © Mónica Grizales · Contenido exclusivo para participantes
        </p>

      </div>
    </div>
  );
}

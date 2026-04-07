"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "rmp_frase_sanadora";
const HOURS_24 = 24 * 60 * 60 * 1000;

const frases = [
  "Hoy elijo desde mi poder, no desde mi miedo.",
  "No vine a este mundo a ocupar poco espacio.",
  "Sanar no es traicionar. Es honrar lo que viene después de ti.",
  "Tu cuerpo sabe antes que tu mente. Escúchalo.",
  "El lugar que buscas afuera, ya existe dentro de ti.",
  "Eres la primera mujer de tu linaje que se permite ser feliz sin culpa.",
  "No tienes que ganarte el derecho a existir.",
  "Lo que sientes es información, no una condena.",
  "Hoy puedo ver a mi madre como la mujer que es, con su historia y sus heridas.",
  "Elegir desde la consciencia es el acto más poderoso que existe.",
  "No eres lo que te dijeron que eras. Eres lo que eliges ser hoy.",
  "La culpa que sientes no es tuya. Fue heredada. Hoy la devuelves con amor.",
  "Tu voz merece ser escuchada — primero por ti.",
  "Hacerlo diferente no es traicionar. Es abrir el camino para las que vienen.",
  "Hoy me permito recibir sin sentirme en deuda.",
  "No me hago pequeña para que otros estén cómodos.",
  "Mi cuerpo es mi primer hogar. Hoy vuelvo a él.",
  "El dolor que cargo no define lo que soy capaz de crear.",
  "Soy autora de mi historia, no personaje de la historia de otro.",
  "Hoy me doy el lugar que por tanto tiempo le di a los demás.",
  "No necesito aprobación para saber que estoy en el lugar correcto.",
  "La crisis no me rompió. Me mostró lo que ya era.",
  "Reconocer mis heridas no me hace débil. Me hace consciente.",
  "Hoy elijo la paz sobre tener la razón.",
  "Mi poder no compite con el poder de nadie.",
  "Lo que heredé con amor, lo sano con amor.",
  "No vine a este entrenamiento por accidente. Algo en mí ya sabía que era tiempo.",
  "Soy suficiente. No como proyecto. Como soy hoy.",
  "Poner límites no es egoísmo. Es respeto — hacia mí y hacia los demás.",
  "Hoy me permito sentir sin tener que explicarme.",
  "El piloto automático se detiene cuando decido observarme.",
  "Lo que no se nombra, se repite. Hoy lo nombro.",
  "Mi historia no termina donde terminó la de mi madre.",
  "Hoy elijo desde la mujer que soy, no desde la niña que tuvo miedo.",
  "Merezco relaciones donde no tenga que reducirme para caber.",
  "El primer paso no tiene que ser perfecto. Solo tiene que ser mío.",
  "Hoy suelto lo que cargué por lealtad y que ya no me pertenece.",
  "Reconocerme es el acto político más profundo que puedo hacer.",
  "No estoy en pausa. Estoy eligiendo conscientemente.",
  "Hoy vuelvo a mí. Sin prisa. Sin juicio. Solo vuelvo.",
];

interface Stored {
  frase: string;
  timestamp: number;
}

function getTimeLeft(timestamp: number): string {
  const diff = HOURS_24 - (Date.now() - timestamp);
  if (diff <= 0) return "00:00:00";
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function FraseSanadoraPage() {
  const [stored, setStored] = useState<Stored | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");
  const [canRequest, setCanRequest] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data: Stored = JSON.parse(raw);
      const expired = Date.now() - data.timestamp >= HOURS_24;
      if (expired) {
        localStorage.removeItem(STORAGE_KEY);
        setCanRequest(true);
      } else {
        setStored(data);
        setRevealed(true);
        setCanRequest(false);
      }
    } else {
      setCanRequest(true);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!stored || canRequest) return;
    const interval = setInterval(() => {
      const diff = HOURS_24 - (Date.now() - stored.timestamp);
      if (diff <= 0) {
        localStorage.removeItem(STORAGE_KEY);
        setStored(null);
        setRevealed(false);
        setCanRequest(true);
        clearInterval(interval);
      } else {
        setTimeLeft(getTimeLeft(stored.timestamp));
      }
    }, 1000);
    setTimeLeft(getTimeLeft(stored.timestamp));
    return () => clearInterval(interval);
  }, [stored, canRequest]);

  function revelarFrase() {
    setAnimating(true);
    setTimeout(() => {
      const random = frases[Math.floor(Math.random() * frases.length)];
      const data: Stored = { frase: random, timestamp: Date.now() };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setStored(data);
      setRevealed(true);
      setCanRequest(false);
      setAnimating(false);
    }, 1200);
  }

  if (!hydrated) return null;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
      style={{
        background: "linear-gradient(135deg, #1e1a2e 0%, #2d2040 50%, #1a2030 100%)",
      }}
    >
      {/* Estrellas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-lg text-center">

        {/* Logo / título */}
        <p className="text-xs font-semibold tracking-[4px] uppercase text-malva-300 mb-3">
          Reconociendo mi Poder
        </p>
        <h1
          className="font-serif text-3xl md:text-4xl font-bold mb-2"
          style={{ color: "#f5f0ff" }}
        >
          Tu frase sanadora
        </h1>
        <p className="text-sm mb-12" style={{ color: "rgba(245,240,255,0.5)" }}>
          Una frase para acompañarte en este proceso
        </p>

        {/* Carta */}
        <div
          className="relative mx-auto rounded-2xl p-1 mb-8"
          style={{
            background: "linear-gradient(135deg, #7c5cbf44, #c88d7444)",
            boxShadow: "0 0 60px rgba(124,92,191,0.2)",
          }}
        >
          <div
            className="rounded-2xl px-8 py-12 flex flex-col items-center justify-center"
            style={{
              background: "linear-gradient(160deg, #2a1f3d, #1e2a38)",
              minHeight: "260px",
            }}
          >
            {/* Estado: no revelada */}
            {!revealed && !animating && (
              <div className="flex flex-col items-center gap-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(124,92,191,0.15)", border: "1px solid rgba(124,92,191,0.3)" }}
                >
                  <svg className="w-7 h-7" style={{ color: "#c4a8f0" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                  </svg>
                </div>
                <p className="text-sm" style={{ color: "rgba(245,240,255,0.5)" }}>
                  Tu frase te está esperando
                </p>
              </div>
            )}

            {/* Estado: animando */}
            {animating && (
              <div className="flex flex-col items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full border-2 border-t-transparent animate-spin"
                  style={{ borderColor: "#c4a8f0", borderTopColor: "transparent" }}
                />
                <p className="text-sm" style={{ color: "rgba(245,240,255,0.5)" }}>
                  Revelando tu frase...
                </p>
              </div>
            )}

            {/* Estado: revelada */}
            {revealed && stored && (
              <div className="flex flex-col items-center gap-6">
                <svg className="w-5 h-5" style={{ color: "#c88d74" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                </svg>
                <p
                  className="font-serif text-xl md:text-2xl font-semibold leading-relaxed text-center"
                  style={{ color: "#f5f0ff" }}
                >
                  &ldquo;{stored.frase}&rdquo;
                </p>
                <div
                  className="w-12 h-px"
                  style={{ background: "rgba(200,141,116,0.4)" }}
                />
                <p className="text-xs" style={{ color: "rgba(245,240,255,0.35)" }}>
                  Mónica Grizales
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Botón revelar */}
        {canRequest && !animating && (
          <button
            onClick={revelarFrase}
            className="inline-flex items-center gap-3 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #7c5cbf, #c88d74)",
              color: "white",
              boxShadow: "0 8px 32px rgba(124,92,191,0.4)",
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            Revelar mi frase
          </button>
        )}

        {/* Contador 24h */}
        {!canRequest && revealed && (
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs" style={{ color: "rgba(245,240,255,0.4)" }}>
              Tu próxima frase estará disponible en
            </p>
            <p
              className="font-mono text-2xl font-bold"
              style={{ color: "#c4a8f0" }}
            >
              {timeLeft}
            </p>
            <p className="text-xs mt-1" style={{ color: "rgba(245,240,255,0.3)" }}>
              Guarda esta frase contigo durante el día 🌱
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

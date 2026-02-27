"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-arena-50">
      <div className="section-container text-center py-20">
        <p className="text-malva-400 font-serif text-6xl font-bold mb-4">
          Oops
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
          Algo salió mal
        </h1>
        <p className="text-humo-500 text-lg max-w-md mx-auto mb-10">
          Ocurrió un error inesperado. Puedes intentar de nuevo o volver al
          inicio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="btn-primary">
            Intentar de nuevo
          </button>
          <a href="/" className="btn-secondary">
            Volver al inicio
          </a>
        </div>
      </div>
    </section>
  );
}

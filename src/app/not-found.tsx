import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-arena-50">
      <div className="section-container text-center py-20">
        <p className="text-malva-400 font-serif text-8xl md:text-9xl font-bold mb-4">
          404
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-humo-700 mb-4">
          Esta página no existe
        </h1>
        <p className="text-humo-500 text-lg max-w-md mx-auto mb-10">
          Puede que el enlace esté roto o que la página haya sido movida.
          Vuelve al inicio para seguir explorando.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Volver al inicio
          </Link>
          <Link href="/contacto" className="btn-secondary">
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
}

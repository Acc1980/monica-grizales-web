export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-arena-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner animado */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-2 border-arena-300" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-malva-400 animate-spin" />
        </div>
        <p className="text-humo-400 text-sm font-medium animate-pulse">
          Cargando...
        </p>
      </div>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¿Cuánto de tu poder personal estás usando? — Quiz Gratuito",
  description:
    "Descubre cuánto de tu poder personal estás usando con este quiz gratuito de 10 preguntas. Resultado personalizado al instante. Por Mónica Grizales.",
  openGraph: {
    title: "¿Cuánto de tu poder personal estás usando?",
    description:
      "Descúbrelo en 2 minutos con este quiz gratuito de 10 preguntas.",
    type: "website",
  },
};

export default function QuizPoderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

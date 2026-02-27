import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mónica Grizales — Sanación Emocional y Liderazgo Femenino",
    template: "%s | Mónica Grizales",
  },
  description:
    "Centro de experiencia de sanación emocional y liderazgo femenino. Descubre el programa Reconociendo mi Poder y transforma tu vida.",
  keywords: [
    "sanación emocional",
    "liderazgo femenino",
    "Mónica Grizales",
    "Reconociendo mi Poder",
    "desarrollo personal",
    "empoderamiento femenino",
    "crecimiento personal",
    "bienestar emocional",
  ],
  authors: [{ name: "Mónica Grizales" }],
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: "Mónica Grizales",
    title: "Mónica Grizales — Sanación Emocional y Liderazgo Femenino",
    description:
      "Centro de experiencia de sanación emocional y liderazgo femenino. Programa Reconociendo mi Poder.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mónica Grizales — Sanación Emocional y Liderazgo Femenino",
    description:
      "Centro de experiencia de sanación emocional y liderazgo femenino.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-nav">
          Saltar al contenido
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const META_PIXEL_ID = "1263507602328681";
const GA_ID = "G-XJ70WQNLN8";

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
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className="font-sans antialiased">
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
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

import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Links — Monica Grizales",
  description:
    "Todos los enlaces de Monica Grizales: quiz, masterclass, entrenamiento, coaching y mas.",
};

const WHATSAPP_NUMBER = "573217968856";
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hola Monica, quiero saber mas sobre tus servicios."
)}`;

const links = [
  {
    label: "Descubre tu nivel de poder personal",
    sub: "Quiz gratuito — 2 minutos",
    href: "https://monicagrizales.com/lp/quiz-poder",
    icon: "sparkle",
    highlight: true,
  },
  {
    label: "Masterclass gratuita",
    sub: "3 bloqueos que te impiden ocupar tu lugar como mujer",
    href: "https://monicagrizales.com/lp/masterclass",
    icon: "play",
    highlight: true,
  },
  {
    label: "Reconociendo mi Poder",
    sub: "Entrenamiento 15 y 16 de abril · 6:30 a 9:30 p.m.",
    href: "https://monicagrizales.com/servicios/reconociendo-mi-poder",
    icon: "flame",
    highlight: false,
  },
  {
    label: "Escríbeme por WhatsApp",
    sub: "Hablemos de tu proceso",
    href: WA_LINK,
    icon: "chat",
    highlight: false,
  },
  {
    label: "Visita mi web",
    sub: "monicagrizales.com",
    href: "https://monicagrizales.com",
    icon: "globe",
    highlight: false,
  },
];

function LinkIcon({ type }: { type: string }) {
  const cls = "w-5 h-5 flex-shrink-0";
  switch (type) {
    case "sparkle":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
      );
    case "play":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
        </svg>
      );
    case "flame":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
        </svg>
      );
    case "chat":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
        </svg>
      );
    case "globe":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      );
    default:
      return null;
  }
}

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f3ef] to-[#ebe7e0] flex flex-col items-center px-4 py-12">
      {/* Profile */}
      <div className="mb-8 text-center">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-[#8fa394] ring-offset-2 ring-offset-[#f5f3ef]">
          <Image
            src="/images/monica-links.jpeg"
            alt="Monica Grizales"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="font-serif text-xl font-bold text-[#2c2c2c] mb-1">
          Monica Grizales
        </h1>
        <p className="text-sm text-[#6b6b6b]">
          Coach Ontologica &middot; Sanacion Emocional y Liderazgo Femenino
        </p>
      </div>

      {/* Links */}
      <div className="w-full max-w-md space-y-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-4 w-full rounded-2xl px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
              link.highlight
                ? "bg-[#63756a] text-white shadow-md"
                : "bg-white text-[#2c2c2c] border border-[#e8e6e1] shadow-sm"
            }`}
          >
            <span className={link.highlight ? "text-[#c8d6cd]" : "text-[#8fa394]"}>
              <LinkIcon type={link.icon} />
            </span>
            <span className="flex-1 min-w-0">
              <span className={`block text-sm font-semibold leading-tight ${link.highlight ? "text-white" : "text-[#2c2c2c]"}`}>
                {link.label}
              </span>
              <span className={`block text-xs mt-0.5 ${link.highlight ? "text-[#c8d6cd]" : "text-[#6b6b6b]"}`}>
                {link.sub}
              </span>
            </span>
            <svg
              className={`w-4 h-4 flex-shrink-0 ${link.highlight ? "text-[#c8d6cd]" : "text-[#b8b8b8]"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-10 text-xs text-[#a8a8a8]">
        monicagrizales.com
      </p>
    </div>
  );
}

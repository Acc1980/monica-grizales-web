"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/sobre-monica", label: "Sobre Mónica" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-arena-50/85 backdrop-blur-md border-b border-arena-200/50">
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/logo.png"
            alt="Mónica Grizales"
            width={180}
            height={48}
            className="h-10 md:h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-humo-600 hover:text-ciruela-600 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-malva-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/inscripcion" className="btn-primary text-sm py-2.5 px-7">
              Inscríbete
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <span
            className={`block w-6 h-0.5 bg-humo-700 transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-humo-700 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-humo-700 transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-arena-50/95 backdrop-blur-md ${
          menuOpen ? "max-h-96 border-b border-arena-200" : "max-h-0"
        }`}
      >
        <ul className="section-container py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-humo-600 hover:text-ciruela-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/inscripcion"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-sm w-full text-center"
            >
              Inscríbete
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

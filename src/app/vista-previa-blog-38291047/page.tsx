import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SparkleIcon from "@/components/SparkleIcon";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog — Vista previa",
  robots: { index: false, follow: false },
};

const BASE = "/vista-previa-blog-38291047";

export default function BlogPreviewPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <Image
          src="/images/blog-hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={80}
        />
        <div className="absolute inset-0 bg-arena-50/80 backdrop-blur-[2px]" />
        <div className="section-container text-center relative">
          <div className="inline-flex items-center gap-2 bg-malva-600/10 border border-malva-600/20 rounded-full px-5 py-2 mb-6">
            <SparkleIcon className="w-4 h-4 text-malva-600" />
            <span className="text-sm font-medium text-malva-600">Vista previa · No publicado</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-humo-700 mb-4">
            Reflexiones y herramientas
          </h1>
          <p className="text-humo-500 text-lg max-w-xl mx-auto">
            Artículos sobre sanación emocional, liderazgo femenino y el camino a reconocerte como autora de tu vida.
          </p>
        </div>
      </section>

      {/* Artículos */}
      <section className="py-20 bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`${BASE}/${post.slug}`}
                className="group flex flex-col bg-arena-50 rounded-2xl border border-arena-100 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-malva-500 text-xs font-semibold uppercase tracking-widest mb-3">
                    {post.category} · {post.readTime} lectura
                  </p>
                  <h2 className="font-serif text-xl font-bold text-humo-700 mb-3 group-hover:text-malva-600 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-humo-500 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <p className="text-malva-500 text-sm font-semibold mt-6 flex items-center gap-1">
                    Leer artículo
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

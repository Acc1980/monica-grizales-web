import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import SparkleIcon from "@/components/SparkleIcon";

const BASE = "/vista-previa-blog-38291047";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Mónica Grizales`,
    description: post.excerpt,
    robots: { index: false, follow: false },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      key++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="font-serif text-2xl font-bold text-humo-700 mt-10 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-semibold text-humo-700 mb-2">
          {trimmed.slice(2, -2)}
        </p>
      );
    } else if (trimmed.startsWith("- ")) {
      elements.push(
        <li key={key++} className="text-humo-600 leading-relaxed ml-4 list-disc mb-1">
          {trimmed.slice(2)}
        </li>
      );
    } else if (trimmed === "---") {
      elements.push(<hr key={key++} className="border-arena-200 my-8" />);
    } else {
      // Handle inline bold
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
      const formatted = parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      elements.push(
        <p key={key++} className="text-humo-600 leading-relaxed mb-4">
          {formatted}
        </p>
      );
    }
  }

  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Header artículo */}
      <section className="pt-32 pb-12 bg-arena-50">
        <div className="section-container max-w-3xl mx-auto text-center">
          <p className="text-malva-500 text-xs font-semibold uppercase tracking-widest mb-4">
            {post.category} · {post.readTime} de lectura
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-humo-700 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-humo-500 text-lg max-w-2xl mx-auto">{post.excerpt}</p>
          <p className="text-humo-400 text-sm mt-4">Por Mónica Grizales</p>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12 bg-white">
        <div className="section-container max-w-2xl mx-auto">
          <div className="prose-custom">
            {renderContent(post.content)}
          </div>

          {/* Firma */}
          <div className="mt-12 pt-8 border-t border-arena-200 flex items-center gap-4">
            <SparkleIcon className="w-6 h-6 text-malva-400 flex-shrink-0" />
            <p className="text-humo-500 text-sm">
              <strong className="text-humo-700">Mónica Grizales</strong> — Coach Ontológica Certificada, especializada en sanación emocional y liderazgo femenino.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-arena-50 rounded-2xl p-8 text-center border border-arena-100">
            <SparkleIcon className="w-7 h-7 text-malva-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-humo-700 mb-2">
              ¿Lista para ir más profundo?
            </h3>
            <p className="text-humo-500 text-sm mb-6">
              En Reconociendo mi Poder trabajamos esto en vivo, con herramientas y acompañamiento.
            </p>
            <Link href="/servicios/reconociendo-mi-poder" className="btn-primary inline-block">
              Ver el entrenamiento
            </Link>
          </div>
        </div>
      </section>

      {/* Otros artículos */}
      {otherPosts.length > 0 && (
        <section className="py-16 bg-arena-50">
          <div className="section-container max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-humo-700 mb-8 text-center">
              Más para leer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`${BASE}/${p.slug}`}
                  className="group bg-white rounded-2xl border border-arena-100 p-6 hover:shadow-md transition-shadow"
                >
                  <p className="text-malva-500 text-xs font-semibold uppercase tracking-widest mb-2">
                    {p.category}
                  </p>
                  <h3 className="font-serif text-lg font-bold text-humo-700 group-hover:text-malva-600 transition-colors leading-snug mb-2">
                    {p.title}
                  </h3>
                  <p className="text-humo-500 text-sm line-clamp-2">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Volver */}
      <div className="bg-white py-6 text-center">
        <Link href={BASE} className="text-malva-500 text-sm font-medium hover:underline">
          ← Ver todos los artículos
        </Link>
      </div>
    </>
  );
}

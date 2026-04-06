import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPostBySlug } from "@/lib/blog-posts";
import SparkleIcon from "@/components/SparkleIcon";

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
    openGraph: {
      title: `${post.title} — Mónica Grizales`,
      description: post.excerpt,
      url: `https://monicagrizales.com/blog/${slug}`,
      type: "article",
      ...(post.image ? { images: [`https://monicagrizales.com${post.image}`] } : {}),
    },
    alternates: {
      canonical: `https://monicagrizales.com/blog/${slug}`,
    },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) { key++; continue; }
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
        {post.image && (
          <div className="section-container max-w-3xl mx-auto mt-10">
            <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-md">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
                quality={80}
              />
            </div>
          </div>
        )}
      </section>

      <section className="py-12 bg-white">
        <div className="section-container max-w-2xl mx-auto">
          <div>{renderContent(post.content)}</div>

          <div className="mt-12 pt-8 border-t border-arena-200 flex items-center gap-4">
            <SparkleIcon className="w-6 h-6 text-malva-400 flex-shrink-0" />
            <p className="text-humo-500 text-sm">
              <strong className="text-humo-700">Mónica Grizales</strong> — Coach Ontológica Certificada, especializada en sanación emocional y liderazgo femenino.
            </p>
          </div>

          <div className="mt-10 bg-arena-50 rounded-2xl p-8 text-center border border-arena-100">
            <SparkleIcon className="w-7 h-7 text-malva-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-humo-700 mb-2">
              Únete a la comunidad
            </h3>
            <p className="text-humo-500 text-sm mb-6">
              Recursos, reflexiones y herramientas para mujeres que eligen vivir desde su poder.
            </p>
            <a
              href="https://chat.whatsapp.com/DRc2j575hcVDE9Ts7CPQfe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Unirme a la comunidad
            </a>
          </div>
        </div>
      </section>

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
                  href={`/blog/${p.slug}`}
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

      <div className="bg-white py-6 text-center">
        <Link href="/blog" className="text-malva-500 text-sm font-medium hover:underline">
          ← Ver todos los artículos
        </Link>
      </div>
    </>
  );
}

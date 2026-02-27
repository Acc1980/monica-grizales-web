const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://monicagrizales.com";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mónica Grizales",
  jobTitle: "Coach Ontológica Certificada",
  description:
    "Acompañante de procesos de sanación emocional y liderazgo femenino. Coaching ontológico, mirada sistémica y bioneuroterapia.",
  url: BASE_URL,
  sameAs: ["https://www.instagram.com/monigrizales/"],
  knowsAbout: [
    "Coaching Ontológico",
    "Sanación Emocional",
    "Liderazgo Femenino",
    "Mirada Sistémica",
    "Bioneuroterapia",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mónica Grizales",
  description:
    "Centro de experiencia de sanación emocional y liderazgo femenino.",
  url: BASE_URL,
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Reconociendo mi Poder",
  description:
    "Entrenamiento para mujeres que desean reconectar con su poder personal, sanar mandatos femeninos y tomar decisiones desde la elección consciente.",
  provider: {
    "@type": "Person",
    name: "Mónica Grizales",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    startDate: "2026-04-15",
    endDate: "2026-04-16",
    location: {
      "@type": "VirtualLocation",
      url: `${BASE_URL}/inscripcion`,
    },
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
    </>
  );
}

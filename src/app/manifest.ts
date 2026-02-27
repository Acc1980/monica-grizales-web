import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mónica Grizales — Sanación Emocional y Liderazgo Femenino",
    short_name: "Mónica Grizales",
    description:
      "Centro de experiencia de sanación emocional y liderazgo femenino.",
    start_url: "/",
    display: "standalone",
    background_color: "#eae3dc",
    theme_color: "#9c8aa5",
    icons: [
      {
        src: "/images/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

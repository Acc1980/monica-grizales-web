import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { isValidEmail, sanitize } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import type { ApiResponse } from "@/lib/validations";

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    const ip = request.headers.get("x-forwarded-for") ?? "unknown";
    const { allowed } = rateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Demasiadas solicitudes. Intenta en un minuto." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { nombre, email, mensaje } = body;

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { success: false, error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "El formato del email no es válido" },
        { status: 400 }
      );
    }

    if (mensaje.length > 2000) {
      return NextResponse.json(
        { success: false, error: "El mensaje no puede superar 2000 caracteres" },
        { status: 400 }
      );
    }

    await connectDB();

    const contact = await Contact.create({
      nombre: sanitize(nombre),
      email: email.toLowerCase().trim(),
      mensaje: sanitize(mensaje),
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          id: contact._id,
          mensaje:
            "Tu mensaje ha sido enviado correctamente. Te responderemos pronto.",
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en contacto:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: "El formato de la solicitud no es válido" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: "Error interno del servidor. Intenta de nuevo más tarde.",
      },
      { status: 500 }
    );
  }
}

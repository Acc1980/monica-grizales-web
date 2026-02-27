import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Inscription from "@/models/Inscription";
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
    const { nombre, email, telefono, edad, comoNosEncontraste, motivacion } =
      body;

    if (!nombre || !email || !telefono) {
      return NextResponse.json(
        {
          success: false,
          error: "Los campos nombre, correo electrónico y teléfono son obligatorios",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "El formato del email no es válido" },
        { status: 400 }
      );
    }

    await connectDB();

    const existing = await Inscription.findOne({
      email: email.toLowerCase().trim(),
      programa: "Reconociendo mi Poder",
    });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          error: "Este correo ya está inscrito en el programa",
        },
        { status: 409 }
      );
    }

    const inscription = await Inscription.create({
      nombre: sanitize(nombre),
      email: email.toLowerCase().trim(),
      telefono: sanitize(telefono),
      edad: edad ? Number(edad) : undefined,
      comoNosEncontraste: comoNosEncontraste
        ? sanitize(comoNosEncontraste)
        : undefined,
      motivacion: motivacion ? sanitize(motivacion) : undefined,
      programa: "Reconociendo mi Poder",
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          id: inscription._id,
          nombre: inscription.nombre,
          email: inscription.email,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en inscripción:", error);

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

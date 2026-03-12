import { NextRequest, NextResponse } from "next/server";
import { isValidEmail, sanitize } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import type { ApiResponse } from "@/lib/validations";

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY || "";
const MASTERCLASS_GROUP_ID = process.env.MASTERCLASS_GROUP_ID || "";

async function addToMailerLite(email: string, name: string, phone?: string) {
  if (!MAILERLITE_API_KEY || !MASTERCLASS_GROUP_ID) return;

  try {
    await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        fields: { name, phone: phone || "" },
        groups: [MASTERCLASS_GROUP_ID],
      }),
    });
  } catch (err) {
    console.error("MailerLite masterclass error:", err);
  }
}

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
    const { nombre, email, telefono } = body;

    if (!nombre || !email) {
      return NextResponse.json(
        { success: false, error: "Nombre y email son obligatorios." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "El formato del email no es válido." },
        { status: 400 }
      );
    }

    const safeName = sanitize(nombre);
    const safeEmail = email.toLowerCase().trim();
    const safePhone = telefono ? sanitize(telefono) : undefined;

    // Agregar a MailerLite (grupo masterclass)
    await addToMailerLite(safeEmail, safeName, safePhone);

    return NextResponse.json(
      { success: true, data: { nombre: safeName, email: safeEmail } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en masterclass-registro:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: "El formato de la solicitud no es válido." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Error interno. Intenta de nuevo más tarde." },
      { status: 500 }
    );
  }
}

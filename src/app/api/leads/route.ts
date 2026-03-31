import { NextRequest, NextResponse } from "next/server";
import { isValidEmail, sanitize } from "@/lib/validations";
import type { ApiResponse } from "@/lib/validations";

export async function POST(
  request: NextRequest
): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await request.json();
    const { nombre, email } = body;

    if (!nombre || !email) {
      return NextResponse.json(
        { success: false, error: "Nombre y email son obligatorios" },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "El formato del email no es válido" },
        { status: 400 }
      );
    }

    const safeName = sanitize(nombre);
    const safeEmail = email.toLowerCase().trim();

    const mailerLiteKey = process.env.MAILERLITE_API_KEY;
    if (mailerLiteKey) {
      const groupId = process.env.LEADS_RMP_GROUP_ID;
      await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${mailerLiteKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: safeEmail,
          fields: { name: safeName },
          ...(groupId ? { groups: [groupId] } : {}),
        }),
      });
    }

    return NextResponse.json(
      { success: true, data: { nombre: safeName, email: safeEmail } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en lead:", error);
    return NextResponse.json(
      { success: false, error: "Error interno. Intenta de nuevo." },
      { status: 500 }
    );
  }
}

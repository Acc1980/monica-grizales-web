import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isValidEmail, sanitize } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import type { ApiResponse } from "@/lib/validations";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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

    const safeName = sanitize(nombre);
    const safeEmail = email.toLowerCase().trim();
    const safeMessage = sanitize(mensaje);

    const contactEmail = process.env.CONTACT_EMAIL || "contacto@monicagrizales.com";

    await transporter.sendMail({
      from: `"Sitio Web Mónica Grizales" <${process.env.SMTP_USER}>`,
      to: contactEmail,
      replyTo: safeEmail,
      subject: `Nuevo mensaje de contacto: ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #5a3d6a; padding: 20px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0;">Nuevo mensaje de contacto</h2>
          </div>
          <div style="background: #f9f7f5; padding: 24px; border: 1px solid #e8e2db;">
            <p style="margin: 0 0 16px;"><strong>Nombre:</strong> ${safeName}</p>
            <p style="margin: 0 0 16px;"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p style="margin: 0 0 8px;"><strong>Mensaje:</strong></p>
            <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e8e2db;">
              <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
            </div>
          </div>
          <div style="background: #eae3dc; padding: 12px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #6b6b6b;">
              Enviado desde el formulario de contacto de monicagrizales.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          mensaje:
            "Tu mensaje ha sido enviado correctamente. Te responderemos pronto.",
        },
      },
      { status: 200 }
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

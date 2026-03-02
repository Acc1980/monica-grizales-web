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

    const safeName = sanitize(nombre);
    const safeEmail = email.toLowerCase().trim();
    const safePhone = sanitize(telefono);
    const safeAge = edad ? Number(edad) : null;
    const safeSource = comoNosEncontraste ? sanitize(comoNosEncontraste) : "No especificó";
    const safeMotivation = motivacion ? sanitize(motivacion) : "No especificó";

    const contactEmail = process.env.CONTACT_EMAIL || "contacto@monicagrizales.com";

    await transporter.sendMail({
      from: `"Sitio Web Mónica Grizales" <${process.env.SMTP_USER}>`,
      to: contactEmail,
      replyTo: safeEmail,
      subject: `Nueva inscripción: ${safeName} — Reconociendo mi Poder`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #5a3d6a; padding: 20px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0;">Nueva inscripción — Reconociendo mi Poder</h2>
          </div>
          <div style="background: #f9f7f5; padding: 24px; border: 1px solid #e8e2db;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px; vertical-align: top;">Nombre:</td>
                <td style="padding: 8px 0;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Teléfono:</td>
                <td style="padding: 8px 0;">${safePhone}</td>
              </tr>
              ${safeAge ? `<tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Edad:</td><td style="padding: 8px 0;">${safeAge} años</td></tr>` : ""}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Nos encontró por:</td>
                <td style="padding: 8px 0;">${safeSource}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Motivación:</td>
                <td style="padding: 8px 0;">${safeMotivation}</td>
              </tr>
            </table>
          </div>
          <div style="background: #eae3dc; padding: 12px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #6b6b6b;">
              Enviado desde el formulario de inscripción de monicagrizales.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        data: {
          nombre: safeName,
          email: safeEmail,
        },
      },
      { status: 200 }
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

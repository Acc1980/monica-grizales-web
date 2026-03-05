import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { connectDB } from "@/lib/mongodb";
import { isValidEmail, sanitize } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import QuizLead from "@/models/QuizLead";
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

const RESULT_LABELS: Record<string, string> = {
  poder_bajo: "Viviendo desde el mandato (10-16 pts)",
  poder_medio: "Despertando (17-23 pts)",
  poder_alto: "Poder activo (24-30 pts)",
};

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
    const { nombre, email, whatsapp, score, resultado, respuestas } = body;

    if (!nombre || !email || score == null || !resultado || !respuestas) {
      return NextResponse.json(
        { success: false, error: "Campos obligatorios incompletos." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "El formato del email no es válido." },
        { status: 400 }
      );
    }

    if (!Array.isArray(respuestas) || respuestas.length !== 10) {
      return NextResponse.json(
        { success: false, error: "Respuestas inválidas." },
        { status: 400 }
      );
    }

    if (!["poder_bajo", "poder_medio", "poder_alto"].includes(resultado)) {
      return NextResponse.json(
        { success: false, error: "Resultado inválido." },
        { status: 400 }
      );
    }

    await connectDB();

    await QuizLead.create({
      nombre: sanitize(nombre),
      email: email.toLowerCase().trim(),
      whatsapp: whatsapp ? sanitize(whatsapp) : undefined,
      score: Number(score),
      resultado,
      respuestas,
    });

    const contactEmail =
      process.env.CONTACT_EMAIL || "contacto@monicagrizales.com";

    await transporter.sendMail({
      from: `"Sitio Web Mónica Grizales" <${process.env.SMTP_USER}>`,
      to: contactEmail,
      replyTo: email.toLowerCase().trim(),
      subject: `Nuevo lead quiz: ${sanitize(nombre)} — ${RESULT_LABELS[resultado] || resultado}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #63756a; padding: 20px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0;">Nuevo lead — Quiz Poder Personal</h2>
          </div>
          <div style="background: #f9f7f5; padding: 24px; border: 1px solid #e8e2db;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 140px; vertical-align: top;">Nombre:</td>
                <td style="padding: 8px 0;">${sanitize(nombre)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email.toLowerCase().trim()}">${email.toLowerCase().trim()}</a></td>
              </tr>
              ${whatsapp ? `<tr><td style="padding: 8px 0; font-weight: bold; vertical-align: top;">WhatsApp:</td><td style="padding: 8px 0;">${sanitize(whatsapp)}</td></tr>` : ""}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Puntaje:</td>
                <td style="padding: 8px 0;">${score} / 30</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Resultado:</td>
                <td style="padding: 8px 0; color: #63756a; font-weight: bold;">${RESULT_LABELS[resultado] || resultado}</td>
              </tr>
            </table>
          </div>
          <div style="background: #eae3dc; padding: 12px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #6b6b6b;">
              Enviado desde el quiz de poder personal de monicagrizales.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, data: { resultado } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en quiz:", error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: "El formato de la solicitud no es válido." },
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

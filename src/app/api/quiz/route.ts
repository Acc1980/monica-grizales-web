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

const RESULT_LABELS: Record<string, string> = {
  poder_bajo: "Viviendo desde el mandato (10-16 pts)",
  poder_medio: "Despertando (17-23 pts)",
  poder_alto: "Poder activo (24-30 pts)",
};

const RESULT_TITLES: Record<string, string> = {
  poder_bajo: "Estás viviendo desde el mandato",
  poder_medio: "Estás despertando",
  poder_alto: "Tu poder está activo",
};

const RESULT_PERCENTAGES: Record<string, string> = {
  poder_bajo: "20-30%",
  poder_medio: "40-60%",
  poder_alto: "más del 70%",
};

const RESULT_DESCRIPTIONS: Record<string, string> = {
  poder_bajo:
    "Es probable que estés cargando lealtades familiares, patrones de sacrificio y creencias que no elegiste. No es tu culpa — es lo que aprendiste. Pero hay otro camino.",
  poder_medio:
    "Ya reconoces que algo necesita cambiar. Tienes momentos de claridad, pero todavía hay áreas donde el mandato familiar y la culpa te frenan. Estás en un punto poderoso: el despertar.",
  poder_alto:
    "Has hecho un trabajo importante contigo misma. Pones límites, te escuchas y eliges desde la conciencia. El siguiente paso es integrar lo que has aprendido y llevarlo a un nivel más profundo.",
};

const RESULT_ACTIONS: Record<string, string> = {
  poder_bajo:
    "El entrenamiento Reconociendo mi Poder está diseñado exactamente para mujeres en este punto. En 2 días trabajamos las raíces de estos patrones para que dejes de vivir desde el deber y empieces a elegir desde ti.",
  poder_medio:
    "El entrenamiento Reconociendo mi Poder te ayudará a ir más profundo — a trabajar esas áreas donde todavía te traicionas para no incomodar a otros.",
  poder_alto:
    "Reconociendo mi Poder puede ser el espacio para consolidar tu proceso y descubrir lo que todavía no ves desde donde estás.",
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

    const safeName = sanitize(nombre);
    const safeEmail = email.toLowerCase().trim();

    const contactEmail =
      process.env.CONTACT_EMAIL || "contacto@monicagrizales.com";

    // Email 1: Notificación a Mónica
    await transporter.sendMail({
      from: `"Sitio Web Mónica Grizales" <${process.env.SMTP_USER}>`,
      to: contactEmail,
      replyTo: safeEmail,
      subject: `Nuevo lead quiz: ${safeName} — ${RESULT_LABELS[resultado] || resultado}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #63756a; padding: 20px; border-radius: 12px 12px 0 0;">
            <h2 style="color: white; margin: 0;">Nuevo lead — Quiz Poder Personal</h2>
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

    // Email 2: Resultado al participante
    const title = RESULT_TITLES[resultado] || resultado;
    const percentage = RESULT_PERCENTAGES[resultado] || "";
    const description = RESULT_DESCRIPTIONS[resultado] || "";
    const action = RESULT_ACTIONS[resultado] || "";

    await transporter.sendMail({
      from: `"Mónica Grizales" <${process.env.SMTP_USER}>`,
      to: safeEmail,
      subject: `${safeName}, tu resultado: ${title}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
          <div style="background: #63756a; padding: 30px 20px; border-radius: 12px 12px 0 0; text-align: center;">
            <p style="color: #dce8e3; font-size: 12px; margin: 0 0 8px 0; letter-spacing: 2px;">✦ MÓNICA GRIZALES</p>
            <h1 style="color: white; margin: 0; font-size: 24px;">Tu resultado del Quiz de Poder Personal</h1>
          </div>
          <div style="background: #faf9f7; padding: 30px 24px; border: 1px solid #e8e6e1;">
            <p style="font-size: 16px; margin: 0 0 8px 0;">Hola <strong>${safeName}</strong>,</p>
            <p style="font-size: 14px; color: #525252; margin: 0 0 20px 0;">Gracias por completar el quiz. Aquí está tu resultado:</p>

            <div style="background: white; border: 2px solid #8fa394; border-radius: 12px; padding: 24px; text-align: center; margin: 0 0 24px 0;">
              <h2 style="color: #4e5d54; margin: 0 0 8px 0; font-size: 22px;">${title}</h2>
              <p style="color: #63756a; font-size: 18px; font-weight: bold; margin: 0 0 4px 0;">
                Estás usando aproximadamente el ${percentage} de tu poder personal
              </p>
              <p style="color: #a8a8a8; font-size: 13px; margin: 0;">Puntaje: ${score}/30</p>
            </div>

            <p style="font-size: 14px; line-height: 1.6; color: #3a3a3a; margin: 0 0 16px 0;">
              ${description}
            </p>

            <div style="background: #f0f4f2; border-radius: 8px; padding: 16px; margin: 0 0 24px 0;">
              <p style="font-size: 13px; font-weight: bold; color: #63756a; margin: 0 0 8px 0;">Lo que puedes hacer ahora:</p>
              <p style="font-size: 14px; line-height: 1.6; color: #3a3a3a; margin: 0;">${action}</p>
            </div>

            <div style="text-align: center; margin: 0 0 16px 0;">
              <a href="https://wa.me/573217968856?text=${encodeURIComponent(`Hola Mónica, hice el quiz de poder personal y mi resultado fue "${title}". Quiero saber más sobre el entrenamiento.`)}"
                 style="display: inline-block; background: #63756a; color: white; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 15px;">
                Quiero saber más sobre el entrenamiento
              </a>
            </div>

            <p style="font-size: 12px; color: #a8a8a8; text-align: center; margin: 0;">
              O visita <a href="https://monicagrizales.com/servicios/reconociendo-mi-poder" style="color: #63756a;">monicagrizales.com</a> para más información
            </p>
          </div>
          <div style="background: #2c2c2c; padding: 16px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="color: #8fa394; font-size: 12px; margin: 0 0 4px 0;">✦ Mónica Grizales</p>
            <p style="color: #a8a8a8; font-size: 11px; margin: 0;">Sanación Emocional y Liderazgo Femenino</p>
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

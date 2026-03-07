import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isValidEmail, sanitize } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";
import type { ApiResponse } from "@/lib/validations";

// ─── MailerLite API ───
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY || "";
const MAILERLITE_GROUP_IDS: Record<string, string> = {
  poder_bajo: "181210585062442564",
  poder_medio: "181210602181494644",
  poder_alto: "181210616634017591",
};

async function addToMailerLite(email: string, name: string, resultado: string) {
  const groupId = MAILERLITE_GROUP_IDS[resultado];
  if (!MAILERLITE_API_KEY || !groupId) return;

  try {
    await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${MAILERLITE_API_KEY}`,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email,
        fields: { name },
        groups: [groupId],
      }),
    });
  } catch (err) {
    console.error("MailerLite error (non-blocking):", err);
  }
}

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

// ─── Contenido de valor para el email del participante ───
const RESULT_EXERCISES: Record<string, string[]> = {
  poder_bajo: [
    "<strong>Ejercicio 1 — El inventario del \"debo\":</strong> Durante los próximos 3 días, cada vez que te descubras diciendo o pensando \"debo\", \"tengo que\" o \"debería\", anótalo. Al final de los 3 días, revisa tu lista y pregúntate: ¿cuántas de estas cosas las elegí yo y cuántas las heredé?",
    "<strong>Ejercicio 2 — La pregunta de poder:</strong> Antes de decir \"sí\" a algo esta semana, haz una pausa y pregúntate: \"¿Estoy diciendo sí porque quiero, o porque tengo miedo de lo que pasa si digo no?\" No necesitas cambiar tu respuesta — solo observar.",
    "<strong>Ejercicio 3 — Carta a tu niña interior:</strong> Escríbele una carta breve a la niña que fuiste. Dile qué aprendió sobre ser mujer en su casa. Dile qué de eso ya no necesita cargar. Este ejercicio puede ser muy revelador — hazlo en un momento tranquilo.",
  ],
  poder_medio: [
    "<strong>Ejercicio 1 — El mapa de tus límites:</strong> Haz dos columnas: en una escribe las áreas de tu vida donde ya pones límites claros. En la otra, donde todavía cedes por culpa o por evitar conflicto. Observa el patrón: ¿con quién te cuesta más? ¿Qué te dice eso?",
    "<strong>Ejercicio 2 — La práctica del \"no\" consciente:</strong> Esta semana, elige UNA situación pequeña donde normalmente dirías sí por compromiso, y di no. Observa qué sientes en el cuerpo. La incomodidad no significa que estés haciendo algo mal — significa que estás rompiendo un patrón.",
    "<strong>Ejercicio 3 — Diario de reconocimiento:</strong> Cada noche durante una semana, escribe 3 momentos del día donde actuaste desde tu verdad (por pequeños que sean). Esto entrena tu mente a reconocer tu poder en acción, en lugar de solo ver lo que falta.",
  ],
  poder_alto: [
    "<strong>Ejercicio 1 — El siguiente nivel:</strong> Escribe esta pregunta y respóndela con honestidad: \"¿En qué área de mi vida sigo siendo leal a una versión de mí que ya no soy?\" A veces el crecimiento no es aprender algo nuevo, sino soltar lo que ya no te representa.",
    "<strong>Ejercicio 2 — Mentoría inversa:</strong> Piensa en una mujer de tu entorno que esté donde tú estabas hace unos años. ¿Qué le dirías? Escríbelo. Muchas veces el consejo que damos a otras es el que necesitamos integrar más profundamente.",
    "<strong>Ejercicio 3 — Visión a 6 meses:</strong> Cierra los ojos y visualiza tu vida dentro de 6 meses si sigues eligiendo desde tu poder. ¿Qué conversaciones has tenido? ¿Qué decisiones has tomado? ¿Qué has soltado? Escríbelo como si ya hubiera pasado.",
  ],
};

const RESULT_REFLECTIONS: Record<string, string> = {
  poder_bajo:
    "Hay una diferencia entre amar a tu familia y vivir tu vida desde sus mandatos. Puedes honrar de donde vienes sin sacrificar quien realmente eres. Ese es el primer paso para recuperar tu poder.",
  poder_medio:
    "El despertar no es cómodo. Es ese momento donde ya no puedes seguir pretendiendo que todo está bien, pero todavía no sabes exactamente hacia dónde ir. Confía: esa incomodidad es señal de que estás creciendo.",
  poder_alto:
    "Has recorrido un camino importante. Pero el poder personal no es un destino — es una práctica diaria. Los patrones más profundos son los últimos en revelarse, y a veces necesitamos un espejo para verlos.",
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

    // Email 2: Guía de valor personalizada al participante
    const title = RESULT_TITLES[resultado] || resultado;
    const percentage = RESULT_PERCENTAGES[resultado] || "";
    const description = RESULT_DESCRIPTIONS[resultado] || "";
    const reflection = RESULT_REFLECTIONS[resultado] || "";
    const exercises = RESULT_EXERCISES[resultado] || [];

    const exercisesHtml = exercises
      .map(
        (ex, i) => `
        <div style="background: white; border-left: 3px solid #8fa394; border-radius: 0 8px 8px 0; padding: 16px 18px; margin: 0 0 12px 0;">
          <p style="font-size: 14px; line-height: 1.7; color: #3a3a3a; margin: 0;">${ex}</p>
        </div>`
      )
      .join("");

    await transporter.sendMail({
      from: `"Mónica Grizales" <${process.env.SMTP_USER}>`,
      to: safeEmail,
      subject: `${safeName}, tu guía personalizada de poder personal`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
          <!-- Header -->
          <div style="background: #63756a; padding: 30px 20px; border-radius: 12px 12px 0 0; text-align: center;">
            <p style="color: #dce8e3; font-size: 12px; margin: 0 0 8px 0; letter-spacing: 2px;">✦ MÓNICA GRIZALES</p>
            <h1 style="color: white; margin: 0; font-size: 22px;">Tu Guía de Poder Personal</h1>
            <p style="color: #c8d6cd; font-size: 13px; margin: 8px 0 0 0;">3 ejercicios prácticos basados en tu resultado</p>
          </div>

          <div style="background: #faf9f7; padding: 30px 24px; border: 1px solid #e8e6e1;">
            <!-- Saludo -->
            <p style="font-size: 16px; margin: 0 0 6px 0;">Hola <strong>${safeName}</strong>,</p>
            <p style="font-size: 14px; color: #525252; margin: 0 0 24px 0;">
              Gracias por tomarte el tiempo de hacer el quiz. El solo hecho de detenerte a mirar hacia adentro ya dice mucho de ti.
            </p>

            <!-- Resultado -->
            <div style="background: white; border: 2px solid #8fa394; border-radius: 12px; padding: 24px; text-align: center; margin: 0 0 24px 0;">
              <p style="color: #8fa394; font-size: 11px; letter-spacing: 2px; margin: 0 0 8px 0;">TU RESULTADO</p>
              <h2 style="color: #4e5d54; margin: 0 0 8px 0; font-size: 22px;">${title}</h2>
              <p style="color: #63756a; font-size: 16px; font-weight: bold; margin: 0;">
                Estás usando aprox. el ${percentage} de tu poder personal
              </p>
            </div>

            <!-- Interpretación -->
            <p style="font-size: 14px; line-height: 1.7; color: #3a3a3a; margin: 0 0 8px 0;">
              ${description}
            </p>

            <!-- Reflexión -->
            <div style="background: #f7f4f0; border-radius: 10px; padding: 20px; margin: 16px 0 28px 0; border: 1px solid #e8e2db;">
              <p style="font-size: 14px; line-height: 1.7; color: #4a4a4a; margin: 0; font-style: italic;">
                &ldquo;${reflection}&rdquo;
              </p>
              <p style="font-size: 12px; color: #8fa394; margin: 8px 0 0 0; text-align: right;">— Mónica Grizales</p>
            </div>

            <!-- Separador -->
            <div style="text-align: center; margin: 0 0 24px 0;">
              <p style="font-size: 11px; letter-spacing: 3px; color: #8fa394; margin: 0;">✦ ✦ ✦</p>
            </div>

            <!-- Guía de ejercicios -->
            <h3 style="color: #4e5d54; font-size: 18px; margin: 0 0 6px 0;">Tu guía práctica</h3>
            <p style="font-size: 13px; color: #6b6b6b; margin: 0 0 18px 0;">
              Estos 3 ejercicios están diseñados específicamente para donde te encuentras hoy. Puedes hacerlos a tu ritmo durante la próxima semana:
            </p>

            ${exercisesHtml}

            <!-- Consejo extra -->
            <div style="background: #eef2ef; border-radius: 10px; padding: 18px; margin: 24px 0; text-align: center;">
              <p style="font-size: 13px; color: #4e5d54; margin: 0 0 4px 0; font-weight: bold;">Tip: guarda este email</p>
              <p style="font-size: 13px; color: #6b6b6b; margin: 0;">
                Márcalo como favorito o muévelo a una carpeta especial. Así podrás volver a estos ejercicios cuando los necesites.
              </p>
            </div>

            <!-- Separador -->
            <div style="border-top: 1px solid #e8e6e1; margin: 28px 0;"></div>

            <!-- Siguiente paso (sutil, no invasivo) -->
            <p style="font-size: 14px; line-height: 1.6; color: #3a3a3a; margin: 0 0 6px 0;">
              <strong>¿Quieres ir más profundo?</strong>
            </p>
            <p style="font-size: 14px; line-height: 1.6; color: #525252; margin: 0 0 20px 0;">
              Si estos ejercicios te movieron algo, el entrenamiento <strong>Reconociendo mi Poder</strong> es un espacio de 2 días donde trabajamos las raíces de estos patrones en grupo, con acompañamiento directo. No es obligatorio — es una invitación.
            </p>

            <div style="text-align: center; margin: 0 0 16px 0;">
              <a href="https://wa.me/573217968856?text=${encodeURIComponent(`Hola Mónica, hice el quiz de poder personal y mi resultado fue "${title}". Me interesa saber más sobre el entrenamiento Reconociendo mi Poder.`)}"
                 style="display: inline-block; background: #63756a; color: white; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 15px;">
                Quiero saber más
              </a>
            </div>

            <p style="font-size: 12px; color: #a8a8a8; text-align: center; margin: 0;">
              O visita <a href="https://monicagrizales.com/servicios/reconociendo-mi-poder" style="color: #63756a;">monicagrizales.com</a> para ver los detalles
            </p>
          </div>

          <!-- Footer -->
          <div style="background: #2c2c2c; padding: 20px 16px; border-radius: 0 0 12px 12px; text-align: center;">
            <p style="color: #8fa394; font-size: 12px; margin: 0 0 4px 0;">✦ Mónica Grizales</p>
            <p style="color: #a8a8a8; font-size: 11px; margin: 0 0 8px 0;">Coach Ontológica Certificada · Sanación Emocional y Liderazgo Femenino</p>
            <p style="color: #6b6b6b; font-size: 10px; margin: 0;">
              Recibiste este email porque completaste el Quiz de Poder Personal en monicagrizales.com
            </p>
          </div>
        </div>
      `,
    });

    // Agregar suscriptor a MailerLite (no bloquea la respuesta)
    addToMailerLite(safeEmail, safeName, resultado);

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

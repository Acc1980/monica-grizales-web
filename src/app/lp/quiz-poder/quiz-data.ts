export interface QuizQuestion {
  id: number;
  question: string;
  options: { label: string; text: string; points: number }[];
}

export interface QuizResultDef {
  key: "poder_bajo" | "poder_medio" | "poder_alto";
  title: string;
  subtitle: string;
  percentage: string;
  description: string;
  action: string;
  cta: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Cuando alguien de tu familia necesita algo, ¿qué haces primero?",
    options: [
      {
        label: "A",
        text: "Dejo todo y voy a ayudar, aunque yo también esté mal",
        points: 1,
      },
      {
        label: "B",
        text: "Ayudo, pero a veces me siento agotada después",
        points: 2,
      },
      {
        label: "C",
        text: "Evalúo si puedo ayudar sin descuidarme a mí misma",
        points: 3,
      },
    ],
  },
  {
    id: 2,
    question:
      '¿Qué tan seguido tomas decisiones importantes basándote en lo que "deberías" hacer?',
    options: [
      {
        label: "A",
        text: "Casi siempre — siento que hay un camino correcto y debo seguirlo",
        points: 1,
      },
      {
        label: "B",
        text: "A veces me debato entre lo que quiero y lo que se espera de mí",
        points: 2,
      },
      {
        label: "C",
        text: "Confío en lo que siento, aunque no sea lo convencional",
        points: 3,
      },
    ],
  },
  {
    id: 3,
    question:
      "Cuando una emoción fuerte te invade (rabia, tristeza, miedo), ¿qué haces?",
    options: [
      {
        label: "A",
        text: "La ignoro o me trago lo que siento para no incomodar",
        points: 1,
      },
      {
        label: "B",
        text: "Me desborda un poco, pero luego intento procesarla",
        points: 2,
      },
      {
        label: "C",
        text: "La reconozco, la siento y busco entender qué me dice",
        points: 3,
      },
    ],
  },
  {
    id: 4,
    question:
      '¿Con qué frecuencia dices "sí" cuando realmente quieres decir "no"?',
    options: [
      {
        label: "A",
        text: "Muy seguido — no quiero generar conflictos",
        points: 1,
      },
      {
        label: "B",
        text: "De vez en cuando, depende de la situación",
        points: 2,
      },
      {
        label: "C",
        text: "Casi nunca — he aprendido a poner límites",
        points: 3,
      },
    ],
  },
  {
    id: 5,
    question:
      "Si piensas en la historia de las mujeres de tu familia, ¿qué patrón ves repetirse?",
    options: [
      {
        label: "A",
        text: "Sacrificio, aguantar en silencio, no pedir para ellas mismas",
        points: 1,
      },
      {
        label: "B",
        text: "Algunas se rebelaron, pero con mucho costo emocional",
        points: 2,
      },
      {
        label: "C",
        text: "Hay mezcla, y yo estoy eligiendo un camino distinto",
        points: 3,
      },
    ],
  },
  {
    id: 6,
    question: "¿Cómo describirías tu relación con tu propio cuerpo?",
    options: [
      {
        label: "A",
        text: "Desconectada — a veces no noto lo que mi cuerpo necesita",
        points: 1,
      },
      {
        label: "B",
        text: "Estoy intentando escucharlo más, pero me cuesta",
        points: 2,
      },
      {
        label: "C",
        text: "Presto atención a sus señales y lo respeto",
        points: 3,
      },
    ],
  },
  {
    id: 7,
    question:
      "Cuando alguien te critica o te juzga, ¿cómo reaccionas internamente?",
    options: [
      {
        label: "A",
        text: "Me derrumbo o me cuestiono todo sobre mí",
        points: 1,
      },
      {
        label: "B",
        text: "Me afecta, pero logro recuperarme después de un rato",
        points: 2,
      },
      {
        label: "C",
        text: "Lo escucho, filtro lo útil y suelto lo que no es mío",
        points: 3,
      },
    ],
  },
  {
    id: 8,
    question: "¿Qué tan presente está la culpa en tu vida diaria?",
    options: [
      {
        label: "A",
        text: "Mucho — siento culpa por descansar, por decir no, por priorizarme",
        points: 1,
      },
      {
        label: "B",
        text: "Aparece seguido, pero estoy aprendiendo a manejarla",
        points: 2,
      },
      {
        label: "C",
        text: "Rara vez — entiendo que cuidarme no es egoísmo",
        points: 3,
      },
    ],
  },
  {
    id: 9,
    question:
      "Si pudieras describir tu vida actual en una palabra, ¿cuál sería?",
    options: [
      { label: "A", text: "Obligación", points: 1 },
      { label: "B", text: "Transición", points: 2 },
      { label: "C", text: "Elección", points: 3 },
    ],
  },
  {
    id: 10,
    question:
      '¿Qué sientes al leer la frase "tienes permiso para ser tú"?',
    options: [
      {
        label: "A",
        text: "Me emociona pero me parece lejano",
        points: 1,
      },
      {
        label: "B",
        text: "Algo se mueve dentro de mí",
        points: 2,
      },
      {
        label: "C",
        text: "Lo siento verdadero — ya estoy en ese camino",
        points: 3,
      },
    ],
  },
];

export const QUIZ_RESULTS: QuizResultDef[] = [
  {
    key: "poder_bajo",
    title: "Estás viviendo desde el mandato",
    subtitle: "Puntaje 10-16",
    percentage: "20-30%",
    description:
      "Es probable que estés cargando lealtades familiares, patrones de sacrificio y creencias que no elegiste. No es tu culpa — es lo que aprendiste. Pero hay otro camino.",
    action:
      "El entrenamiento Reconociendo mi Poder está diseñado exactamente para mujeres en este punto. En 2 días trabajamos las raíces de estos patrones para que dejes de vivir desde el deber y empieces a elegir desde ti.",
    cta: "Quiero saber más sobre el entrenamiento",
  },
  {
    key: "poder_medio",
    title: "Estás despertando",
    subtitle: "Puntaje 17-23",
    percentage: "40-60%",
    description:
      "Ya reconoces que algo necesita cambiar. Tienes momentos de claridad, pero todavía hay áreas donde el mandato familiar y la culpa te frenan. Estás en un punto poderoso: el despertar.",
    action:
      "El entrenamiento Reconociendo mi Poder te ayudará a ir más profundo — a trabajar esas áreas donde todavía te traicionas para no incomodar a otros.",
    cta: "Quiero profundizar — ver el entrenamiento",
  },
  {
    key: "poder_alto",
    title: "Tu poder está activo",
    subtitle: "Puntaje 24-30",
    percentage: "70%+",
    description:
      "Has hecho un trabajo importante contigo misma. Pones límites, te escuchas y eliges desde la conciencia. El siguiente paso es integrar lo que has aprendido y llevarlo a un nivel más profundo.",
    action:
      "Reconociendo mi Poder puede ser el espacio para consolidar tu proceso y descubrir lo que todavía no ves desde donde estás.",
    cta: "Quiero llevar mi proceso al siguiente nivel",
  },
];

export function getResultByScore(score: number): QuizResultDef {
  if (score <= 16) return QUIZ_RESULTS[0];
  if (score <= 23) return QUIZ_RESULTS[1];
  return QUIZ_RESULTS[2];
}

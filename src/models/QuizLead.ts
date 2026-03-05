import mongoose, { Schema, Document, Model } from "mongoose";

export interface IQuizLead extends Document {
  nombre: string;
  email: string;
  whatsapp?: string;
  score: number;
  resultado: "poder_bajo" | "poder_medio" | "poder_alto";
  respuestas: number[];
  createdAt: Date;
}

const QuizLeadSchema = new Schema<IQuizLead>(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
      maxlength: [100, "El nombre no puede superar 100 caracteres"],
    },
    email: {
      type: String,
      required: [true, "El email es obligatorio"],
      trim: true,
      lowercase: true,
      maxlength: [200, "El email no puede superar 200 caracteres"],
    },
    whatsapp: {
      type: String,
      trim: true,
      maxlength: [20, "El WhatsApp no puede superar 20 caracteres"],
    },
    score: {
      type: Number,
      required: true,
      min: 10,
      max: 30,
    },
    resultado: {
      type: String,
      required: true,
      enum: ["poder_bajo", "poder_medio", "poder_alto"],
    },
    respuestas: {
      type: [Number],
      required: true,
      validate: [
        (v: number[]) => v.length === 10,
        "Debe haber 10 respuestas",
      ],
    },
  },
  { timestamps: true }
);

QuizLeadSchema.index({ email: 1 });

const QuizLead: Model<IQuizLead> =
  mongoose.models.QuizLead ||
  mongoose.model<IQuizLead>("QuizLead", QuizLeadSchema);

export default QuizLead;

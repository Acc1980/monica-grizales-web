import mongoose, { Schema, Document, Model } from "mongoose";

export interface IInscription extends Document {
  nombre: string;
  email: string;
  telefono: string;
  edad?: number;
  comoNosEncontraste?: string;
  motivacion?: string;
  programa: string;
  createdAt: Date;
}

const InscriptionSchema = new Schema<IInscription>(
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
    telefono: {
      type: String,
      required: [true, "El teléfono es obligatorio"],
      trim: true,
      maxlength: [20, "El teléfono no puede superar 20 caracteres"],
    },
    edad: {
      type: Number,
      min: [16, "Debes tener al menos 16 años"],
      max: [99, "Edad no válida"],
    },
    comoNosEncontraste: {
      type: String,
      trim: true,
      maxlength: [100, "Máximo 100 caracteres"],
    },
    motivacion: {
      type: String,
      trim: true,
      maxlength: [1000, "La motivación no puede superar 1000 caracteres"],
    },
    programa: {
      type: String,
      required: true,
      default: "Reconociendo mi Poder",
    },
  },
  {
    timestamps: true,
  }
);

InscriptionSchema.index({ email: 1, programa: 1 }, { unique: true });

const Inscription: Model<IInscription> =
  mongoose.models.Inscription ||
  mongoose.model<IInscription>("Inscription", InscriptionSchema);

export default Inscription;

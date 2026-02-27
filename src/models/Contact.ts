import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContact extends Document {
  nombre: string;
  email: string;
  mensaje: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>(
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
    mensaje: {
      type: String,
      required: [true, "El mensaje es obligatorio"],
      trim: true,
      maxlength: [2000, "El mensaje no puede superar 2000 caracteres"],
    },
  },
  {
    timestamps: true,
  }
);

const Contact: Model<IContact> =
  mongoose.models.Contact ||
  mongoose.model<IContact>("Contact", ContactSchema);

export default Contact;

// Esquema de objeto para usuarios que se almacenarán en MongoDB utilizando Mongoose

// Importación de Mongoose para definir el esquema
import mongoose from 'mongoose';

// Definición del esquema de usuario
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String, // Tipo de dato: String para el nombre de usuario
      required: true, // Campo obligatorio
      trim: true, // Elimina espacios en blanco al principio y al final del valor
      unique: true, // Valor único (no puede repetirse en otros documentos)
    },
    email: {
      type: String, // Tipo de dato: String para la dirección de correo electrónico
      required: true, // Campo obligatorio
      trim: true, // Elimina espacios en blanco al principio y al final del valor
      unique: true, // Valor único (no puede repetirse en otros documentos)
    },
    password: {
      type: String, // Tipo de dato: String para la contraseña
      required: true, // Campo obligatorio
    },
  },
  {
    timestamps: true, // Habilita la creación automática de campos 'createdAt' y 'updatedAt'
  },
);

// Exportación del modelo de usuario basado en el esquema
export default mongoose.model('User', userSchema);

import mongoose from 'mongoose';

// Define el esquema de la conversación utilizando Mongoose
const conversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array, // Define un campo 'members' que almacenará un array de miembros de la conversación
    },
  },
  {
    timestamps: true, // Agrega marcas de tiempo automáticas para createdAt y updatedAt
  },
);

export default mongoose.model('Conversation', conversationSchema); // Exporta el modelo de la conversación basado en el esquema definido

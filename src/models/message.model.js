import mongoose from 'mongoose';

// Define el esquema del mensaje utilizando Mongoose
const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: String, // Campo que almacena el ID de la conversación relacionada con el mensaje
    },
    sender: {
      type: String, // Campo que almacena el remitente del mensaje
    },
    text: {
      type: String, // Campo que almacena el texto del mensaje
    },
  },
  {
    timestamps: true, // Agrega marcas de tiempo automáticas para createdAt y updatedAt
  },
);

export default mongoose.model('Message', messageSchema); // Exporta el modelo de mensaje basado en el esquema definido

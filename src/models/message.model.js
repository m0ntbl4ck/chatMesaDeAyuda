// Esquema de objeto para mensajes que se almacenarán en MongoDB utilizando Mongoose

// Importación de Mongoose para definir el esquema
import mongoose from 'mongoose';

// Definición del esquema de mensaje
const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId, // Tipo de dato para el ID del remitente
    required: true,
  },
  recipientId: {
    type: mongoose.Schema.Types.ObjectId, // Tipo de dato para el ID del destinatario
    required: true,
  },
  message: {
    type: String, // Tipo de dato para el contenido del mensaje
    required: true,
  },
  timestamp: {
    type: Date, // Tipo de dato para la marca de tiempo del mensaje
    required: true,
  },
  status: {
    type: String, // Tipo de dato para el estado del mensaje (leído/no leído, entregado, etc.)
    required: true,
  },
});

// Exportación del modelo de mensaje basado en el esquema definido
export default mongoose.model('Message', messageSchema);

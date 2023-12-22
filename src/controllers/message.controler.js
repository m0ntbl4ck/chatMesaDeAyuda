// Controlador para manejar los datos enviados en las peticiones 'sendMessage', 'getMessages' y 'getUserMessages'

// Importa el modelo de mensajes
import Message from '../models/message.model.js';

// Esta variable 'io' debería ser accesible desde tu configuración de Socket.io
let io;

// Asigna la instancia de Socket.io
export const assignIo = (socketInstance) => {
  io = socketInstance;
};

// Controlador para enviar un mensaje
export const sendMessage = async (req, res) => {
  // Obtiene los datos del cuerpo de la solicitud

  // Genera una marca de tiempo actual
  const newMessage = new Message(req.body);

  try {
    // Guarda el nuevo mensaje en la base de datos
    const messageSaved = await newMessage.save();
    res.status(200).json({
      messageSaved,
    });
  } catch (error) {
    // Manejo de errores: En caso de error, envía un código de estado 500 y un mensaje de error en formato JSON
    res.status(500).json({ message: error.message });
  }
};

// Controlador para obtener los mensajes enviados y recibidos por el usuario autenticado
export const getMessages = async (req, res) => {
  try {
    // Busca los mensajes enviados por el usuario autenticado
    const sentMessages = await Message.find({
      senderId: req.user.id,
    });

    // Busca los mensajes recibidos por el usuario autenticado
    const receivedMessages = await Message.find({
      recipientId: req.user._id,
    });

    // Devuelve los mensajes enviados y recibidos en formato JSON
    res.json([sentMessages, receivedMessages]);
  } catch (error) {
    // Manejo de errores: En caso de error, envía un código de estado 500 y un mensaje de error en formato JSON
    res.status(500).json({ message: error.message });
  }
};

// Controlador para obtener los mensajes de un usuario específico
export const getUserMessages = async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

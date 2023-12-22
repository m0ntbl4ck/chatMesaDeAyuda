// Controlador para manejar los datos enviados en las peticiones 'register','login' y 'logout'

// Importación del modelo de usuario, bcrypt para el hashing de contraseñas y la función para crear tokens JWT
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
  const { senderId, recipientId, message, status } = req.body;

  const timestamp = new Date();

  try {
    const newMessage = new Message({
      senderId,
      recipientId,
      message,
      timestamp,
      status,
    });

    const messageSaved = await newMessage.save();

    res.json({
      id: messageSaved.id,
      senderId: messageSaved.senderId,
      recipientId: messageSaved.recipientId,
      message: messageSaved.message,
      timestamp: messageSaved.timestamp,
      status: messageSaved.status,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messageRecipient = await Message.find({
      recipientId: req.user.id,
    });
    const messageSender = await Message.find({
      senderId: req.user.id,
    });

    res.json({ messageSender });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserMessages = async (req, res) => {};

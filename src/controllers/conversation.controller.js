import Conversation from '../models/conversation.model.js';

// Controlador para guardar una conversación en la base de datos
export const savedConversation = async (req, res) => {
  // Crea una nueva conversación con los miembros especificados en el cuerpo de la solicitud
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    // Guarda la nueva conversación en la base de datos
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation); // Devuelve la conversación guardada como respuesta
  } catch (error) {
    res.status(500).json(err); // Devuelve un error 500 en caso de algún problema durante el guardado
  }
};

// Controlador para obtener una conversación con un usuario específico
export const conversationWithUser = async (req, res) => {
  try {
    // Busca una conversación que incluya al usuario especificado en los miembros
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation); // Devuelve la conversación encontrada como respuesta
  } catch (error) {
    res.status(500).json(err); // Devuelve un error 500 en caso de algún problema durante la búsqueda
  }
};

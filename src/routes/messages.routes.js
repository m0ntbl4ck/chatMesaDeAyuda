// Importación de los controladores y middlewares necesarios
import { Router } from 'express';
import {
  sendMessage,
  getMessages,
  getUserMessages,
} from '../controllers/message.controler.js'; // Importa los controladores necesarios
import { authRequired } from '../middlewares/validateToken.js'; // Importa el middleware para autenticación
import { validateSchema } from '../middlewares/validator.middlewares.js'; // Importa middleware para validar esquemas
import { sendMessageSchema } from '../schemas/message.schema.js'; // Importa el esquema para validar mensajes

// Creación del router para las rutas relacionadas con los mensajes
const routers = Router();

// Rutas para eliminar un mensaje por su ID, obtener mensajes de usuario y enviar mensajes,
// aplicando la autenticación requerida y validando el esquema del mensaje antes de llamar a los controladores

// Obtiene los mensajes de una conversación específica
routers.get('/messages/:conversationId', authRequired, getUserMessages);

// Envía un mensaje nuevo
routers.post(
  '/messages',
  authRequired,
  validateSchema(sendMessageSchema),
  sendMessage,
);

export default routers;

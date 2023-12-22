// Importación de los controladores y middlewares necesarios
import { Router } from 'express';
import {
  sendMessage,
  getMessages,
  getUserMessages,
} from '../controllers/message.controler.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middlewares.js';
import { sendMessageSchema } from '../schemas/message.schema.js';

// Creación del router para las rutas relacionadas con los mensajes
const routers = Router();

// Rutas para eliminar un mensaje por su ID, obtener mensajes de usuario y enviar mensajes,
// aplicando la autenticación requerida y validando el esquema del mensaje antes de llamar a los controladores
routers.get('/messages/:conversationId', authRequired, getUserMessages);
//routers.get('/messages', authRequired, getMessages);

routers.post(
  '/messages',
  authRequired,
  validateSchema(sendMessageSchema),
  sendMessage,
);

export default routers;

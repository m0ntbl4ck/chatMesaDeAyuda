import { Router } from 'express';

import {
  sendMessage,
  getMessages,
  getUserMessages,
} from '../controllers/message.controler.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middlewares.js';
import { sendMessageSchema } from '../schemas/message.schema.js';

const routers = Router();

routers.get('/messages/:id', authRequired, getUserMessages);
routers.get('/messages', authRequired, getMessages);
routers.post(
  '/sendMessage',
  authRequired,
  validateSchema(sendMessageSchema),
  sendMessage,
);

export default routers;

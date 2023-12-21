import { Router } from 'express';

import {
  saveMessage,
  getMessages,
  getUserMessages,
} from '../controllers/message.controler.js';
import { authRequired } from '../middlewares/validateToken.js';

const routers = Router();

routers.get('/messages/:id', authRequired, getUserMessages);
routers.get('/messages', authRequired, getMessages);
routers.post('/saveMessage', authRequired, saveMessage);

export default routers;

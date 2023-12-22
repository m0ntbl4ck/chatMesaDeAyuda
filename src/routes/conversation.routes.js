import { Router } from 'express';
import {
  savedConversation,
  conversationWithUser,
} from '../controllers/conversation.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

// Ruta para guardar una conversación
router.post('/conversations', authRequired, savedConversation);

// Ruta para obtener una conversación específica relacionada con un usuario
router.get('/conversations/:userId', authRequired, conversationWithUser);

export default router;

import { Router } from 'express';
import {
  savedConversation,
  conversationWithUser,
} from '../controllers/conversation.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

const router = Router();

router.post('/conversations', authRequired, savedConversation);

router.get('/conversations/:userId', authRequired, conversationWithUser);
export default router;

//rutas para las peticiones post de registro y login
import { Router } from 'express';
import {
  register,
  login,
  logout,
  profile,
} from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
const router = Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authRequired, profile);
router.post('/logout', logout);

export default router;

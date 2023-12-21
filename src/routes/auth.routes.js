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

router.get('/', (req, res) => {
  res.status(200).send('hola esto es un chat');
});

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authRequired, profile);
router.post('/logout', logout);

export default router;

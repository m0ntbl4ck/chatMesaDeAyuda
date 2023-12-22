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
import { validateSchema } from '../middlewares/validator.middlewares.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';

router.get('/', (req, res) => {
  res.status(200).send('hola esto es un chat');
});

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.get('/profile', authRequired, profile);
router.post('/logout', logout);

export default router;

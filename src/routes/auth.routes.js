// Importación de los controladores y middlewares necesarios
import { Router } from 'express';
import {
  register,
  login,
  logout,
  profile,
  verifyToken,
} from '../controllers/auth.controller.js';
import { authRequired } from '../middlewares/validateToken.js';

// Creación del router para las rutas de autenticación
const router = Router();

// Importación de los middlewares para validar los esquemas de registro y login
import { validateSchema } from '../middlewares/validator.middlewares.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';

// Ruta de prueba
router.get('/', (req, res) => {
  res.status(200).send('hola esto es un chat');
});

// Rutas para el registro y login, validando los esquemas respectivos antes de ejecutar los controladores
router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);

// Rutas para verificar el token, obtener el perfil del usuario, y cerrar sesión
router.get('/verify', verifyToken);
router.get('/profile', authRequired, profile);
router.post('/logout', logout);

export default router;

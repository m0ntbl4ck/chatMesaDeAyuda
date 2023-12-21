// Importación del módulo jwt para la verificación de tokens JWT y TOKEN_SECRET desde la configuración
import jwt from 'jsonwebtoken'; // Importa la librería 'jsonwebtoken' para trabajar con tokens JWT
//import { TOKEN_SECRET } from '../config.js'; // Importa la constante TOKEN_SECRET desde un archivo de configuración
import dotenv from 'dotenv';

dotenv.config();

const token_secret = process.env.TOKEN_SECRET;
// Middleware para requerir autenticación
export const authRequired = (req, res, next) => {
  // Obtiene el token de la solicitud desde las cookies
  const { token } = req.cookies;

  // Si no hay token, devuelve un código de estado 401 (no autorizado) y un mensaje de error
  if (!token)
    return res.status(401).json({ message: 'No token, autorización denegada' });

  // Verifica la validez del token usando la función jwt.verify
  jwt.verify(token, token_secret, (err, user) => {
    // Si hay un error en la verificación del token, devuelve un código de estado 403 (prohibido) y un mensaje de error
    if (err) return res.status(403).json({ message: 'Token inválido' });

    // Si el token es válido, asigna la información del usuario al objeto 'user' dentro del objeto 'req'
    req.user = user;

    // Llama a la siguiente función de middleware en la cadena (o al controlador correspondiente) para continuar el flujo de la solicitud
    next();
  });
};

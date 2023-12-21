// Importación del módulo jwt para la generación de tokens JWT (JSON Web Tokens)
import jwt from 'jsonwebtoken'; // Importa la librería 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config();

//import { TOKEN_SECRET } from '../config.js'; // Importa la constante TOKEN_SECRET desde un archivo de configuración

const token_secret = process.env.TOKEN_SECRET;

// Función para crear un token de acceso (Access Token) basado en un payload proporcionado
export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    // Generación de un token JWT
    jwt.sign(
      payload, // Información a incluir en el token (payload)
      token_secret, // Clave secreta para la firma del token
      {
        expiresIn: '20m', // Define la expiración del token (en este caso, 20 minutos)
      },
      (err, token) => {
        if (err) reject(err); // Si hay un error durante la generación del token, se rechaza la promesa con el error
        resolve(token); // Si se genera el token exitosamente, se resuelve la promesa con el token generado
      },
    );
  });
}

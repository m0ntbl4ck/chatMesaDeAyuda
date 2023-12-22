// Importa la librería Zod para validar los esquemas de registro y inicio de sesión
import { z } from 'zod';

// Esquema de validación para el registro de usuarios
export const registerSchema = z.object({
  username: z.string({
    required_error: 'El usuario es requerido', // Mensaje de error si el usuario no está presente
  }),
  email: z
    .string({
      required_error: 'El email es requerido', // Mensaje de error si el email no está presente
    })
    .email({
      message: 'Email inválido', // Mensaje de error si el email no es válido
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida', // Mensaje de error si la contraseña no está presente
    })
    .min(6, {
      message: 'La contraseña debe tener al menos 6 caracteres', // Mensaje de error si la contraseña es demasiado corta
    }),
});

// Esquema de validación para el inicio de sesión
export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'El email es requerido', // Mensaje de error si el email no está presente
    })
    .email({
      message: 'Email inválido', // Mensaje de error si el email no es válido
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida', // Mensaje de error si la contraseña no está presente
    })
    .min(6, {
      message: 'La contraseña debe tener al menos 6 caracteres', // Mensaje de error si la contraseña es demasiado corta
    }),
});

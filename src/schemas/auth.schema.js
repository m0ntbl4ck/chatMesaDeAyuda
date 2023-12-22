import { z } from 'zod';

export const registerSchema = z.object({
  username: z.string({
    required_error: 'El usuario es requerido',
  }),
  email: z
    .string({
      required_error: 'El email es requerido',
    })
    .email({
      message: 'Email invalido',
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
    })
    .min(6, {
      message: 'La contraseña deber de al menos 6 caractéres',
    }),
  role: z.string({
    required_error: 'El rol es requerido',
  }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'El email es requerido',
    })
    .email({
      message: 'Email invalido',
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
    })
    .min(6, {
      message: 'La contraseña deber de al menos 6 caractéres',
    }),
});

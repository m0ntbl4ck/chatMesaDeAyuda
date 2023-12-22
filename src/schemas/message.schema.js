import { z } from 'zod';

export const sendMessageSchema = z.object({
  senderId: z.string({
    required_error: 'El emisor es requerido',
  }),
  recipientId: z.string({
    required_error: 'El destinatario es requerido',
  }),
  message: z.string({
    required_error: 'El mensaje es requerido',
  }),
  status: z.string({
    required_error: 'El estado es requerido',
  }),
  timestamp: z.string().datetime().optional(),
});

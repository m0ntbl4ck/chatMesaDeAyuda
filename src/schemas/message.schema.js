// Importa la librería Zod para validar el esquema de envío de mensajes
import { z } from 'zod';

// Esquema de validación para el envío de mensajes
export const sendMessageSchema = z.object({
  sender: z.string({
    required_error: 'El emisor es requerido', // Mensaje de error si el emisor no está presente
  }),
  text: z.string({
    required_error: 'El mensaje es requerido', // Mensaje de error si el mensaje no está presente
  }),
  conversationId: z.string({
    required_error: 'El id de la conversacion es requerido', // Mensaje de error si el estado no está presente
  }),
  timestamp: z.string().datetime().optional(), // Definición opcional para el campo de tiempo
});

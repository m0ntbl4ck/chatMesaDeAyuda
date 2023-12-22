// Archivo para inicializar la aplicación

import { server, io } from './app.js'; // Importa el puerto y la aplicación Express desde 'app.js'

import { connectDB } from './config/db.js'; // Importa la función de conexión a la base de datos desde 'db.js'

import * as messageController from './controllers/message.controler.js';

const port = process.env.PORT ?? 4000;

// Conexión a la base de datos
connectDB(); // Invoca la función para conectar a la base de datos'

messageController.assignIo(io);

// Inicio del servidor HTTP para escuchar peticiones en el puerto especificado
server.listen(port, () => {
  console.log(`Servidor en el puerto: ${port}`); // Imprime un mensaje indicando que el servidor está corriendo en un puerto específico
});

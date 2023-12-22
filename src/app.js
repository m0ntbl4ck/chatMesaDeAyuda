// Archivo de configuraciones básicas de Express

// Importación de módulos
import express from 'express'; // Importa el módulo Express para la creación de la aplicación
import morgan from 'morgan'; // Importa Morgan para el registro de solicitudes HTTP
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io'; // Importa el módulo Socket.IO
import { createServer } from 'node:http'; // Importa el módulo HTTP

import authRoutes from './routes/auth.routes.js'; // Importa las rutas relacionadas con la autenticación
import messageRoutes from './routes/messages.routes.js'; // Importa las rutas relacionadas con los mensajes
import conversationRoutes from './routes/conversation.routes.js'; // Importa las rutas relacionadas con las conversaciones

// Creación de la aplicación Express
const app = express(); // Inicializa la aplicación Express
const server = createServer(app); // Crea un servidor HTTP utilizando la app de Express

const { API_NAME, API_VERSION } = process.env; // Variables de entorno

// Configuración de Socket.IO
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:', // Configura la URL de origen para la conexión de Socket.IO
    credentials: true, // Habilita el uso de credenciales
  },
});

// Middlewares
app.use(
  cors({
    origin: 'http://localhost:5173', // Configura la URL de origen para CORS
    credentials: true, // Habilita el uso de credenciales en CORS
  }),
);

app.use(morgan('dev')); // Configura Morgan para registrar detalles de las solicitudes HTTP en la consola
app.use(express.json()); // Habilita el middleware integrado de Express para analizar el cuerpo de las solicitudes en formato JSON
app.use(cookieParser());
app.use(express.static('src/uploads'));

app.use((req, res, next) => {
  req.io = io; // Adjunta el objeto io a cada solicitud para utilizarlo en los controladores
  next();
});

// Rutas
const basePath = `/${API_NAME}`; // Define la ruta base según la variable de entorno API_NAME

app.use(basePath, authRoutes); // Define la ruta base '/api' para las rutas relacionadas con la autenticación
app.use(basePath, messageRoutes); // Define la ruta base '/api' para las rutas relacionadas con los mensajes
app.use(basePath, conversationRoutes); // Define la ruta base '/api' para las rutas relacionadas con las conversaciones

// Exportación de variables
export { app, server, io }; // Exporta 'app', 'server', y 'io' para ser utilizados en otros archivos

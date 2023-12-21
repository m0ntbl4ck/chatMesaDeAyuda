// Archivo de configuraciones básicas de Express

// Importación de módulos
import express from 'express'; // Importa el módulo Express para la creación de la aplicación
import morgan from 'morgan'; // Importa Morgan para el registro de solicitudes HTTP
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { Server } from 'socket.io';
import { createServer } from 'node:http';

import authRoutes from './routes/auth.routes.js'; // Importa las rutas relacionadas con la autenticación
import messageRoutes from './routes/messages.routes.js';

// Creación de la aplicación Express
const app = express(); // Inicializa la aplicación Express
const server = createServer(app);

const { API_NAME, API_VERSION } = process.env;

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:',
  },
});

// Middlewares
app.use(morgan('dev')); // Configura Morgan para registrar detalles de las solicitudes HTTP en la consola
app.use(express.json()); // Habilita el middleware integrado de Express para analizar el cuerpo de las solicitudes en formato JSON
app.use(cookieParser());
app.use(express.static('src/uploads'));
app.use(cors());

app.use((req, res, next) => {
  req.io = io;
  next();
});

// Rutas
const basePath = `/${API_NAME}/${API_VERSION}`;

app.use(basePath, authRoutes); // Define la ruta base '/api' para las rutas
app.use(basePath, messageRoutes);

io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('El usuario se ha desconectado');
  });
});

// Exportación de variables
export { app, server, io }; // Exporta 'port' y 'app' para ser utilizados en otros archivos

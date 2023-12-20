// Archivo de configuraciones básicas de Express

// Importación de módulos
import express from 'express'; // Importa el módulo Express para la creación de la aplicación
import morgan from 'morgan'; // Importa Morgan para el registro de solicitudes HTTP
import authRoutes from './routes/auth.routes.js'; // Importa las rutas relacionadas con la autenticación

// Creación de la aplicación Express
const app = express(); // Inicializa la aplicación Express
const port = process.env.PORT ?? 4000; // Define el puerto en el que la aplicación escuchará las solicitudes

// Middlewares
app.use(morgan('dev')); // Configura Morgan para registrar detalles de las solicitudes HTTP en la consola
app.use(express.json()); // Habilita el middleware integrado de Express para analizar el cuerpo de las solicitudes en formato JSON

// Rutas
app.use('/api', authRoutes); // Define la ruta base '/api' para las rutas de autenticación

// Exportación de variables
export { port, app }; // Exporta 'port' y 'app' para ser utilizados en otros archivos

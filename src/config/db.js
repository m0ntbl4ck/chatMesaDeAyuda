// Archivo de configuración para la conexión a una base de datos MongoDB

// Importación de Mongoose, una biblioteca para modelado de objetos MongoDB
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

// Extrae las variables de entorno del archivo .env
const { DB_NAME, PASSWORD, DB_USER } = process.env;

// Función para establecer la conexión a la base de datos
export const connectDB = async () => {
  try {
    // Conexión a la base de datos utilizando Mongoose
    await mongoose.connect(
      // URL de conexión a la base de datos MongoDB Atlas
      `mongodb+srv://${DB_USER}:${PASSWORD}@cluster0.dnkngga.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
      // Mensaje de éxito al conectarse a la base de datos
      console.log('>>> La DB está conectada'),
    );
  } catch (error) {
    // Captura y muestra cualquier error ocurrido durante la conexión
    console.log(error);
  }
};

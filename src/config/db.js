// Archivo de configuración para la conexión a una base de datos MongoDB

// Importación de Mongoose, una biblioteca para modelado de objetos MongoDB
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { DB_NAME, PASSWORD, DB_USER } = process.env;

// Función para conectar a la base de datos
export const connectDB = async () => {
  try {
    // Conexión a la base de datos utilizando Mongoose
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${PASSWORD}@cluster0.dnkngga.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`, // URL de conexión a la base de datos
      console.log('>>> La DB está conectada'), // Mensaje de éxito al conectarse a la base de datos
    );
  } catch (error) {
    console.log(error); // Captura y muestra cualquier error ocurrido durante la conexión
  }
};

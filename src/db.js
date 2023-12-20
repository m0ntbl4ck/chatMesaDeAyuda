// Archivo de configuración para la conexión a una base de datos MongoDB

// Importación de Mongoose, una biblioteca para modelado de objetos MongoDB
import mongoose from 'mongoose';

// Función para conectar a la base de datos
export const connectDB = async () => {
  try {
    // Conexión a la base de datos utilizando Mongoose
    await mongoose.connect(
      'mongodb+srv://montblack123:M0ngoBd123117@cluster0.dnkngga.mongodb.net/chatMesaDeAyuda?retryWrites=true&w=majority', // URL de conexión a la base de datos
      console.log('>>> DB is connected'), // Mensaje de éxito al conectarse a la base de datos
    );
  } catch (error) {
    console.log(error); // Captura y muestra cualquier error ocurrido durante la conexión
  }
};

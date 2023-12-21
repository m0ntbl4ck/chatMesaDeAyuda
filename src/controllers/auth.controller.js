// Controlador para manejar los datos enviados en las peticiones 'register','login' y 'logout'

// Importación del modelo de usuario, bcrypt para el hashing de contraseñas y la función para crear tokens JWT
import User from '../models/user.model.js'; // Importa el modelo de usuario
import bcrypt from 'bcryptjs'; // Importa bcrypt para el hashing de contraseñas
import { createAccessToken } from '../libs/jwt.js'; // Importa la función para crear tokens de acceso JWT

// Controlador para el registro de usuarios
export const register = async (req, res) => {
  // Obtiene los datos del cuerpo de la solicitud
  const { email, password, username } = req.body;

  try {
    // Genera un hash (valor hasheado) de la contraseña recibida
    const passwordHash = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario con los datos recibidos y la contraseña hasheada
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    // Guarda el nuevo usuario en la base de datos
    const userSaved = await newUser.save();

    // Crea un token de acceso JWT basado en el ID del usuario recién registrado
    const token = await createAccessToken({ id: userSaved._id });

    // Envía el token como cookie en la respuesta y devuelve los datos del usuario registrado en formato JSON
    res.cookie('token', token);
    res.json({
      id: userSaved.id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    // Manejo de errores: En caso de error, envía un código de estado 500 y un mensaje de error en formato JSON
    res.status(500).json({ message: error.message });
  }
};

// Controlador para el inicio de sesión
export const login = async (req, res) => {
  // Obtiene los datos del cuerpo de la solicitud (email y contraseña)
  const { email, password } = req.body;

  try {
    // Busca un usuario en la base de datos por su dirección de email
    const userFound = await User.findOne({ email });

    // Si el usuario no se encuentra, devuelve un mensaje de error
    if (!userFound)
      return res.status(400).json({ message: 'Usuario no encontrado' });

    // Compara la contraseña proporcionada con la contraseña almacenada del usuario encontrado
    const isMatch = await bcrypt.compare(password, userFound.password);

    // Si las contraseñas no coinciden, devuelve un mensaje de error
    if (!isMatch)
      return res.status(400).json({ message: 'Credenciales inválidas' });

    // Genera un token de acceso JWT basado en el ID del usuario encontrado
    const token = await createAccessToken({ id: userFound._id });

    // Envía el token como cookie en la respuesta y devuelve los datos del usuario en formato JSON
    res.cookie('token', token);
    res.json({
      id: userFound.id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    // Manejo de errores: En caso de error, envía un código de estado 500 y un mensaje de error en formato JSON
    res.status(500).json({ message: error.message });
  }
};

// Controlador para el cierre de sesión
export const logout = (req, res) => {
  // Elimina la cookie de token estableciendo su caducidad a una fecha pasada
  res.cookie('token', '', { expires: new Date(0) });

  // Envía un código de estado 200 (OK) indicando que el cierre de sesión fue exitoso
  return res.sendStatus(200);
};

// Controlador para obtener el perfil del usuario autenticado
export const profile = async (req, res) => {
  try {
    // Busca al usuario en la base de datos usando el ID del usuario almacenado en req.user
    const userFound = await User.findById(req.user.id);

    // Si no se encuentra al usuario, devuelve un mensaje de error
    if (!userFound)
      return res.status(400).json({ message: 'Usuario no encontrado' });

    // Si se encuentra al usuario, devuelve los detalles del perfil en formato JSON
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    // Manejo de errores: En caso de error, envía un código de estado 500 y un mensaje de error en formato JSON
    res.status(500).json({ message: error.message });
  }
};

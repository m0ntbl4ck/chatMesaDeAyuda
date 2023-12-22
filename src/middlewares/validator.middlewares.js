// Middleware para validar el esquema de datos según un schema proporcionado

// Esta función toma un schema y devuelve un middleware
export const validateSchema = (schema) => (req, res, next) => {
  try {
    // Intenta analizar (parsear) los datos del cuerpo de la solicitud según el schema
    schema.parse(req.body);
    // Si no hay errores en la validación, pasa al siguiente middleware
    next();
  } catch (error) {
    // Si hay errores, envía un código de estado 400 y un mensaje de error en formato JSON
    return res.status(400).json(error.errors.map((error) => error.message));
  }
};

//Archivo para inicializar la aplicacion
import { port, app } from './app.js';
import { connectDB } from './db.js';

connectDB();
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

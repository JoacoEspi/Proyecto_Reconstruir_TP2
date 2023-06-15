import express from 'express';
import createError from 'http-errors';


//import usuarios from './routes/usuarios.js'
//import comerciosRoutes from './routes/comercios.js';
//import serviciosRoutes from './routes/servicios.js';

const app = express();

// Configuración de middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rutas
//app.use('/usuarios', usuariosRoutes);
//app.use('/fundaciones', comerciosRoutes);
//app.use('/campanias', serviciosRoutes);


// Manejo de errores
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({ error: err });
});

// Iniciar servidor
const port = 5000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});

export default app;
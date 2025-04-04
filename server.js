// 1. Crear una instancia de Fastify con logs activados.
// 2. Registrar las rutas de usuarios.
// 3. Iniciar el servidor en el puerto 3000.
// 4. Manejar errores de inicio del servidor.

const fastify = require('fastify')({ logger: true });
const userRoutes = require('./src/features/users/routes/routes');

fastify.register(userRoutes);

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
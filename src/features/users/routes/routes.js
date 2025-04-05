// 1. Importar Fastify y el Controller.
// 2. Definir las rutas:
//    - POST `/users` → Llama a `createUser`
//    - GET `/users` → Llama a `getAllUsers`
// 3. Registrar las rutas en Fastify.
// 4. Exportar la función de rutas.

const controller = require('../controllers/controller');

async function userRoutes(fastify, options) {
  fastify.post('/users', controller.createUser);
  fastify.get('/users', controller.getAllUsers);
  fastify.get('/users/:userId', controller.getUserById);
  fastify.put('/users/:userId', controller.updateUser);
  fastify.delete('/users/:userId', controller.deleteUser);
}

module.exports = userRoutes;
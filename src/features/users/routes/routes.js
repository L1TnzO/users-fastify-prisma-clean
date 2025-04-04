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
  fastify.get('/users/:id', controller.getUserById);
  fastify.put('/users/:id', controller.updateUser);
  fastify.delete('/users/:id', controller.deleteUser);
}

module.exports = userRoutes;
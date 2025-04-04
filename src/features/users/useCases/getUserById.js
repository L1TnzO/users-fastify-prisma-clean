// 1. Importar Repository.
// 2. Llamar al método Repository para obtener un usuario por su id.
// 3. Retornar el usuario.

const { getUserById } = require('../repositories/repository');

async function execute(userId) {
    return await getUserById(userId);
}
module.exports = { execute };
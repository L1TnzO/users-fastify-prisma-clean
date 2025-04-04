// 1. Importar Repository.
// 2. Llamar al método Repository para obtener todos los usuarios.
// 3. Retornar los usuarios.

const { getAllUsers } = require('../repositories/repository');

async function execute() {
    return await getAllUsers();
}
module.exports = { execute };
// 1. Importar Repository.
// 2. Validar que "id" está presente.
// 3. Llamar al método Repository para eliminar el usuario.
// 4. Retornar el usuario eliminado.

const { deleteUser } = require('../repositories/repository');

async function execute(userId) {
    if (!userId) {
        throw new Error('ID is required');
    }
    return await deleteUser(userId);
}
module.exports = { execute };
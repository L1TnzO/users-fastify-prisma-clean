// 1. Importar Repository.
// 2. Validar que "name" y "email" están presentes.
// 3. Validar que el id del usuario existe.
// 4. Llamar al método Repository para modificar un usuario por su id.
// 5. Retornar el usuario modificado.

const { updateUser } = require('../repositories/repository');

async function execute(userId, userData) {
    if (!userData.name || !userData.email) {
        throw new Error('Name and email are required');
    }
    if (!userId) {
        throw new Error('User ID is required');
    }
    return await updateUser(userId, userData);
}

module.exports = { execute };
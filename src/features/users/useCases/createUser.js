// 1. Importar Repository.
// 2. Validar que "name" y "email" están presentes.
// 3. Llamar al método Repository para guardar el usuario.
// 4. Retornar el usuario creado.

const { createUser } = require('../repositories/repository');

async function execute(userData) {
    if (!userData.name || !userData.email) {
        throw new Error('Name and email are required');
    }
    return await createUser(userData);
}
module.exports = { execute };
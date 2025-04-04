// 1. Importar los Use Cases.
// 2. Definir funciones que llamen a los casos de uso.
// 3. Exportar estas funciones.

const useCases = require('../useCases');

async function createUser(userData) {
    return await useCases.createUser.execute(userData);
}

async function deleteUser(userId) {
    return await useCases.deleteUser.execute(userId);
}

async function getAllUsers() {
    return await useCases.getAllUsers.execute();
}

async function getUserById(userId) {
    return await useCases.getUserById.execute(userId);
}

async function updateUser(userId, userData) {
    return await useCases.updateUser.execute(userId, userData);
}

module.exports = { createUser, deleteUser, getAllUsers, getUserById, updateUser };

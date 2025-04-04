// 1. Importar PrismaClient.
// 2. Definir funciones para interactuar con la base de datos:
//    - Crear usuario.
//    - Obtener todos los usuarios.
//    - Obtener usuario por ID.
//    - Actualizar usuario.
//    - Eliminar usuario.
// 3. Exportar estas funciones.

const prisma = require('../../config/database');

async function createUser(userData) {
    return await prisma.user.create({
        data: userData,
    })
};

async function getAllUsers() {
    return await prisma.user.findMany();
}

async function getUserById(userId) {
    return await prisma.user.findUnique({
        where: { userId}
    })
}

async function updateUser(userId, userData) {
    return await prisma.user.update({
        where: { userId },
        data: userData,
    })
}

async function deleteUser(userId) {
    return await prisma.user.delete({
        where: { userId },
    })
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};
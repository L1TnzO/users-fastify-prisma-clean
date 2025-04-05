// 1. Importar Repository.
// 2. Llamar al método Repository para obtener todos los usuarios.
// 3. Retornar los usuarios.

function makeGetAllUsers(userRepository) {
    return async () => {
        const users = await userRepository.getAllUsers();
        return users;
    };
}

module.exports = makeGetAllUsers;
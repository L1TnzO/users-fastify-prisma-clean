// 1. Importar Repository.
// 2. Llamar al método Repository para obtener un usuario por su id.
// 3. Retornar el usuario.

function makeGetUserById(userRepository) {
    return async (id) => {
        const user = await userRepository.getUserById(id);
        return user;
    };
}

module.exports = makeGetUserById;
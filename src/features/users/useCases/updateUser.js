// 1. Importar Repository.
// 2. Validar que "name" y "email" están presentes.
// 3. Validar que el id del usuario existe.
// 4. Llamar al método Repository para modificar un usuario por su id.
// 5. Retornar el usuario modificado.

function makeUpdateUser(userRepository) {
    return async (id, userData) => {
        if (!userData.name || !userData.email || !userData.password) {
            throw new Error('Name, email and password are required');
        }

        const user = await userRepository.updateUser(id, userData);
        return user;
    };
}

module.exports = makeUpdateUser;
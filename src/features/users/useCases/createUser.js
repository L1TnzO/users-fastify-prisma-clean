// 1. Importar Repository.
// 2. Validar que "name" y "email" están presentes.
// 3. Llamar al método Repository para guardar el usuario.
// 4. Retornar el usuario creado.

function makeCreateUser(userRepository) {
    return async (userData) => {
        if (!userData.name || !userData.email || !userData.password) {
            throw new Error('Name, email and password are required');
        }

        const user = await userRepository.createUser(userData);
        return user;
    };
}

module.exports = makeCreateUser;
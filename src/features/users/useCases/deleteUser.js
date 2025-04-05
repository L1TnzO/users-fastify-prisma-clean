// 1. Importar Repository.
// 2. Validar que "id" está presente.
// 3. Llamar al método Repository para eliminar el usuario.
// 4. Retornar el usuario eliminado.

function makeDeleteUser(userRepository) {
    return async (id) => {
        if (!id) {
            throw new Error('ID is required');
        }

        const user = await userRepository.deleteUser(id);
        return user;
    };
}

module.exports = makeDeleteUser;
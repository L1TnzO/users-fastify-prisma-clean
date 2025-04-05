module.exports = {

    /**
     * @typedef {Object} UserData
     * @property {string} name - The name of the user.
     * @property {string} email - The email of the user.
     */

    /**
     * @typedef {Object} User
     * @property {string} userId - The unique identifier of the user.
     * @property {string} name - The name of the user.
     * @property {string} email - The email of the user.
     * @property {Date} createdAt - The date the user was created.
     */

    /**
     * Creates a new user.
     * @param {UserData} userData - The data of the user to create.
     * @returns {Promise<User>} The created user.
     */
    createUser: async (userData) => {},

    /**
     * Retrieves all users.
     * @returns {Promise<User[]>} An array of users.
     */
    getAllUsers: async () => {},

    /**
     * Retrieves a user by ID.
     * @param {string} userId - The ID of the user to retrieve.
     * @returns {Promise<User|null>} The user if found, otherwise null.
     */
    getUserById: async (userId) => {},

    /**
     * Updates a user by ID.
     * @param {string} userId - The ID of the user to update.
     * @param {UserData} userData - The new data for the user.
     * @returns {Promise<User|null>} The updated user if found, otherwise null.
     */
    updateUser: async (userId, userData) => {},

    /**
     * Deletes a user by ID.
     * @param {string} userId - The ID of the user to delete.
     * @returns {Promise<boolean>} True if the user was deleted, otherwise false.
     */
    deleteUser: async (userId) => {}

}



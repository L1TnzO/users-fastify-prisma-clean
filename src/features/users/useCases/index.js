const makeCreateUser = require('./createUser');
const makeDeleteUser = require('./deleteUser');
const makeGetAllUsers = require('./getAllUsers');
const makeGetUserById = require('./getUserById');
const makeUpdateUser = require('./updateUser');

const userRepository = require('../repositories/prismaUserRepository');

module.exports = {
    createUser: makeCreateUser(userRepository),
    deleteUser: makeDeleteUser(userRepository),
    getAllUsers: makeGetAllUsers(userRepository),
    getUserById: makeGetUserById(userRepository),
    updateUser: makeUpdateUser(userRepository),
};

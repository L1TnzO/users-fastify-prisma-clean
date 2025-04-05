const { createUser, deleteUser, getAllUsers, getUserById, updateUser } = require('../useCases/index.js');
const { toUserResponse, toUserResponseList } = require('../dto/userDto');

async function createUserController(request, reply) {
  try {
    const user = await createUser(request.body);
    reply.status(201).send(user);
  } catch (error) {
    reply.status(400).send({ message: error.message });
  }
}

async function getAllUsersController(request, reply) {
  try {
    const users = await getAllUsers();
    reply.status(200).send(toUserResponseList(users));
  } catch (error) {
    reply.status(500).send({ message: error.message });
  }
}

async function getUserByIdController(request, reply) {
  try {
    const user = await getUserById(request.params.userId);
    if (!user) {
      return reply.status(404).send({ message: 'User not found' });
    }
    reply.status(200).send(toUserResponse(user));
  } catch (error) {
    reply.status(500).send({ message: error.message });
  }
}

async function updateUserController(request, reply) {
  try {
    const user = await updateUser(request.params.userId, request.body);
    if (!user) {
      return reply.status(404).send({ message: 'User not found' });
    }
    reply.status(200).send(user);
  } catch (error) {
    reply.status(400).send({ message: error.message });
  }
}

async function deleteUserController(request, reply) {
  try {
    const deleted = await deleteUser(request.params.userId);
    if (!deleted) {
      return reply.status(404).send({ message: 'User not found' });
    }
    reply.status(204).send();
  } catch (error) {
    reply.status(500).send({ message: error.message });
  }
}


module.exports = {
  createUser: createUserController,
  getAllUsers: getAllUsersController,
  getUserById: getUserByIdController,
  updateUser: updateUserController,
  deleteUser: deleteUserController,
};
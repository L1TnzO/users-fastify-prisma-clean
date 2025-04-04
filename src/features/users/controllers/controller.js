// createUser
// 1. Recibir la solicitud HTTP con los datos del usuario.
// 2. Llamar al servicio de "createUser".
// 3. Si hay un error, devolver un mensaje de error con código 400.
// 4. Si tiene éxito, devolver el usuario creado con código 201.

// getAllUsers
// 1. Llamar al servicio de "getAllUsers".
// 2. Enviar la lista de usuarios en la respuesta.

const service = require('../services/service');

async function createUser(req, res) {
  try {
    const user = await service.createUser(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await service.getAllUsers();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function getUserById(req, res) {
  try {
    const user = await service.getUserById(req.params.id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const user = await service.updateUser(req.params.id, req.body);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const user = await service.deleteUser(req.params.id);
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
const prisma = require('../../config/database');

const prismaUserRepository = {
    createUser: async (userData) => {
        return await prisma.user.create({
            data: userData,
        });
    },

    getAllUsers: async () => {
        return await prisma.user.findMany();
    },

    getUserById: async (userId) => {
        return await prisma.user.findUnique({
            where: { userId },
        });
    },

    updateUser: async (userId, userData) => {
        return await prisma.user.update({
            where: { userId },
            data: userData,
        });
    },

    deleteUser: async (userId) => {
        const user = await prisma.user.delete({
            where: { userId },
        });
        return !!user;
    }
};

module.exports = prismaUserRepository;
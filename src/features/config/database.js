// 1. Importar PrismaClient.
// 2. Crear una instancia de Prisma.
// 3. Exportarla para que otros archivos la usen.

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
module.exports = prisma;

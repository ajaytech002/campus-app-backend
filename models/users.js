const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({ log: ["query", "info"] });

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

module.exports = { getUsers };

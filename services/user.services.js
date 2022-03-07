const prisma = require("../utils/prismaClient");

async function getAllUsers() {
  try {
    console.time("getAllUsers");
    const users = await prisma.user.findMany();
    console.timeEnd("getAllUsers");
    return users;
  } catch (err) {
    console.log(err);
    return { users: null, msg: "error" };
  }
}

async function getUser({ id }) {
  try {
    id = parseInt(id);
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return { user, msg: "ok" };
    } else {
      return { user, msg: "user not found" };
    }
  } catch (err) {
    console.log(err);
    return { user, msg: "error" };
  }
}

module.exports = { getAllUsers, getUser };

/**
 * Users routes
 */
const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/**
 *
 */
router.get("/", async function (req, res) {
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
  res.status(200).send("yes");
});

module.exports = router;

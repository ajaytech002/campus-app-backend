const express = require("express");
const router = express.Router();
const { getUsers } = require("../models/users.js");

/**
 * @openapi
 * /users:
 *   get:
 *     description: Gets all the users
 *     responses:
 *       200:
 *         description: Returns all the users
 */
router.get("/", async function (req, res) {
  const users = await getUsers();
  res.status(200).send({ users });
});

/**
 * @openapi
 * /users/{userId}:
 *   get:
 *     summary: Gets the user with the given id
 *     tags :
 *     - users
 *     description: Returns the user with the given id
 *     parameters:
 *          - name : userId
 *            in: path
 *            required : true
 *            description : The id of the user
 *            schema :
 *              type : string
 *     responses:
 *       200:
 *         description: ok
 */
router.get("/", async function (req, res) {
  const users = await getUsers();
  res.status(200).send({ users });
});

module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

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
  const data = await userController.getAllUsers(req, res);
  if (data.data) {
    res.status(200).send(data.data);
  } else {
    res.status(500).send(data.msg);
  }
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
router.get("/:id", async function (req, res) {
  const data = await userController.getUser(req, res);
  if (data.status == "ok") {
    res.status(200).send({ ...data });
    return;
  } else {
    res.status(500).send({ ...data });
    return;
  }
});

module.exports = router;

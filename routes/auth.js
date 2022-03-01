const express = require("express");
const router = express.Router();

/**
 * @openapi
 * /auth:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get("/", async function (req, res) {
  res.status(200).send("auth");
});

module.exports = router;

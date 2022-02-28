/**
 * Entry point into the application
 *
 * Here are the list of top level API paths.
 *
 * {@link users }       - /users/*
 * {@link auth }        - /auth/*
 */
const express = require("express");
require("dotenv").config();

const users = require("./routes/users");
const auth = require("./routes/auth");

const app = express();
const router = express.Router();

app.use("/users", users);

app.use("/auth", auth);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});

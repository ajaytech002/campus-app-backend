/**
 * Entry point into the application
 *
 * Here are the list of top level API paths.
 *
 * {@link users }       - /users/*
 * {@link auth }        - /auth/*
 * {@link options}      - Swagger jsdoc options
 */
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
require("dotenv").config();

const users = require("./routes/users");
const auth = require("./routes/auth");

const app = express();
const router = express.Router();

/** swagger jsdoc options */
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Campus Apps Express API with Swagger",
      version: "1.0",
      description: "Describes the Campus Apps API",
      contact: {
        name: "Campus Apps",
        url: "https://campusapps.in",
        email: "support@campusapps.in",
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}/api-docs`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/users", users);

app.use("/auth", auth);

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});

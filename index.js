import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("ES6 is the Node way to go");
});

app.listen(3000, () => {
  console.log(`App listening on port 3000!`);
});

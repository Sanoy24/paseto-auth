const express = require("express");
const mongoose = require("mongoose");
const usersRouter = require("./router/user.router");

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/example")
  .then(() => {
    console.log("mongodb listening....");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello from app");
});

app.use(usersRouter);

app.listen(3000, () => {
  console.log("running...");
});

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a message for u");
});

app.get("/path1", (req, res) => {
  res.status(200).send({ message: "This is a message from path1" });
});

app.get("/path2", (req, res) => {
  res.status(200).send({ message: "This is a message from path2" });
});

app.listen(3000);

const express = require("express");
const app = express();

app.get("/path1", (req, res) => {
  res.send("Here's a message from path1");
});

app.listen(3000);

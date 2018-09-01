const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.send({ hi: "there" });
});

app.get("*", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.send({ hi: "generic" });
});

app.listen(PORT);

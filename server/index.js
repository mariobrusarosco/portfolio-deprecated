const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send('I am the one who knocks!');
});

app.listen(PORT);

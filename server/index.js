const express = require("express"),
  app = express();

app.get("/", (req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.send({ hi: "there" });
});

app.listen(process.env.PORT || 5000);

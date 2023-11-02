const express = require("express");

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Heelloo");
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Simon.</li></ul>");
});
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

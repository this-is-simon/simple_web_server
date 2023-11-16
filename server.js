const express = require("express");
const friends = require("./data");

const app = express();

const PORT = 3001;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.get("/friends", (req, res) => {
  console.log("hit me");
  res.json(friends);
});

app.get("/friends/:friendId", (req, res) => {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "Friend doesn't exist" });
  }
  res.json(friends);
});

app.get("/messages", (req, res) => {
  res.send("<ul><li>Hello Simon.</li></ul>");
});
app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

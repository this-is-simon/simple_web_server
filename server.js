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

app.use(express.json());

app.post("/friends", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Friend doesn't have a name" });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);
  res.json(newFriend);
});

app.get("/friends", (req, res) => {
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

const express = require("express");
const path = require("path");

const app = express();
const friendsRouter = require("./routers/friends.router");
const messagesRouter = require("./routers/messages.router");

const PORT = 3001;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

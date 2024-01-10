const express = require("express");
const path = require("path");

const app = express();
const friendsRouter = require("./routers/friends.router");
const messagesRouter = require("./routers/messages.router");

const PORT = 3001;
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use("/", express.static(path.join(__dirname, "public")));
app.get("/", (req, res) =>
  res.render("index", {
    title: "My friends are very clever",
    caption: "Let's eat seastars",
  })
);
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

const model = require("../models/messages.model");
const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "images", "seastar.webp"));
}

function postMessage(req, res) {
  console.log("updating messages...");
  if (!req.body.message) {
    return res.status(400).json({ error: "Message is empty" });
  }
  const newMessage = {
    id: model.length,
    name: req.body.message,
  };
  model.push(newMessage);
  res.json(newMessage);
}

module.exports = { getMessages, postMessage };

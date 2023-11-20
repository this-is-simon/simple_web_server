function getMessages(req, res) {
  res.send("<ul><li>Hello Simon.</li></ul>");
}

function postMessage(req, res) {
  console.log("updating messages...");
}

module.exports = { getMessages, postMessage };

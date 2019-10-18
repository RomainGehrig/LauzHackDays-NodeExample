const http = require("http");
const path = require("path");
const express = require("express");
const api = require("./api");

const app = express();
app.use("/static", express.static(path.join(__dirname, "assets")));

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8001;
}

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.use("/api", api);

http.createServer(app).listen(port, () => {
  console.log(`Express running on port ${port}`);
});

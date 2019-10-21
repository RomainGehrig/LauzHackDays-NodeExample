const express = require("express");
const fs = require("fs");
const path = require("path");

const api = express.Router();
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

const DATA_DIR = path.join(__dirname, "_data");
const COMMENTS_FILE = path.join(DATA_DIR, "comments.json");

// comments.json is a list of `comment`, which is defined by the object { text: string, user: string, time: timestamp }

function getComments() {
  const rawComments = fs.readFileSync(COMMENTS_FILE);
  return JSON.parse(rawComments);
}

function saveComments(jsonComments) {
  fs.writeFileSync(COMMENTS_FILE, JSON.stringify(jsonComments));
  return true;
}

function saveComment(jsonComment) {
  const comments = getComments();
  return saveComments(comments.concat(jsonComment));
}

function createComment(user, text) {
  return {
    user: user,
    text: text,
    time: Date.now()
  };
}

api.get("/comments", (req, res) => {
  res.json(getComments());
});

api.post("/comments", (req, res) => {
  // TODO Fill the comment from data coming from the request body.
  // Look at what is parsed in the request body by uncommenting the next line:
  // console.log(req.body);
  const comment = createComment("Anon", "Hello");
  const saveSuccessful = saveComment(comment);
  res.json({ success: saveSuccessful });
});

module.exports = api;

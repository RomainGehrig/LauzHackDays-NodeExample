const express = require("express");
const fs = require("fs");
const path = require("path");

const api = express.Router();
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

const DATA_DIR = path.join(__dirname, "..", "_data");
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
  // TODO Create a comment object with the query data
  // Look at you get in the request body by uncommenting the next line:
  // console.log("Request body:", req.body);

  const cmComments = [
    "Me want cookie!",
    "Me eat cookie!",
    "COOKIE!",
    "Om nom nom nom"
  ];
  const randIndex = Math.floor(Math.random() * cmComments.length);
  const comment = createComment("Cookie Monster", cmComments[randIndex]);

  const saveSuccessful = saveComment(comment);
  res.json({ success: saveSuccessful });
});

module.exports = api;

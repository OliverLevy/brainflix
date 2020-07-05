const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const cors = require("cors");
app.use(cors());

const upNext = require("./data/videos-list.json");
const mainVideoList = require("./data/main-video.json");

app.get("/video-list", (req, res) => {
  res.json(upNext);
});

app.get("/video/:id", (req, res) => {
  let reqId = req.params.id;
  let mainVideo = mainVideoList.filter((item) => item.id === reqId);
  res.json(mainVideo[0]);
});

app.post("/video/:id/comments", (req, res) => {
  let reqId = req.params.id;
  let mainVideo = mainVideoList.filter((item) => item.id === reqId);
  let comments = mainVideo[0].comments;
  let userComment = req.body.comment;
  let output = {
    name: "PlaceHolder",
    comment: userComment,
    id: uuidv4(),
    likes: 0,
    timestamp: Date.now(),
  };
  comments.push(output);
  res.send(comments[comments.length - 1]);
});

app.delete("/video/:id/comments/:commentId", (req, res) => {
  let reqId = req.params.id;
  let commentId = req.params.commentId;
  let mainVideo = mainVideoList.filter((item) => item.id === reqId);
  let comments = mainVideo[0].comments;
  let indexToDelete = comments.findIndex((item) => item.id === commentId);
  comments.splice(indexToDelete, 1);
  res.send(mainVideo[0]);
});

addLike = (like) => {
  let output = like;
  output++;
  return output;
};

app.post("/video/:id/like", (req, res) => {
  let reqId = req.params.id;
  let mainVideo = mainVideoList.filter((item) => item.id === reqId);
  let oldLikes = mainVideo[0].likes;
  let formattedLikes = Number(oldLikes.split(",").join(""));
  let likeAdded = addLike(formattedLikes);
  mainVideo[0].likes = likeAdded.toLocaleString();
  res.send(mainVideo[0]);
});

app.post("/video/:id/comments/:commentId/like", (req, res) => {
  let reqId = req.params.id;
  let commentId = req.params.commentId;
  let mainVideo = mainVideoList.filter((item) => item.id === reqId);
  let comments = mainVideo[0].comments;
  let indexToLike = comments.findIndex((item) => item.id === commentId);
  let oldLikes = mainVideo[0].comments[indexToLike].likes;
  let likeAdded = addLike(oldLikes);
  mainVideo[0].comments[indexToLike].likes = likeAdded;
  res.send(mainVideo[0]);
});

app.listen(8080, () => console.info("running on 8080"));

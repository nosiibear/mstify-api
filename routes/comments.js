import express from "express";
const router = express.Router();
import Comment from "../models/Comment.js";

router.post("/", async (req, res) => {
  try {
    const newComment = await Comment.create(req.body)
    res.status(200).json(newComment);
  } catch(err) {
    console.log(err)
    res.status(500).json(err);
  }
})

router.get("/", async (req, res) => {
  console.log("Test 1");
  try {
    console.log("Test 2");
    var comments;
    if(req.body.url) {
      console.log("Test 3");
      console.log(req.body.url)
      comments = await Comment.find({'url': req.body.url})
      console.log(comments)
      console.log("Test 4");
    } else {
      console.log("Test 5");
      comments = await Comment.find()
      console.log("Test 6");
    }
    console.log(comments)
    console.log("Test 7");
    res.status(200).json(comments);
    console.log("Test 8");
  } catch(err) {
    console.log("Test 9");
    res.status(500).json(err);
    console.log("Test 10");
  }
  console.log("Test 11");
})

export default router;
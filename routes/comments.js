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
  try {
    const comments = await Comment.find()
    res.status(200).json(comments);
  } catch(err) {
    res.status(500).json(err);
  }
})

router.get("/:url", async (req, res) => {
  try {
    console.log("1")
    const comments = await Comment.find({'url': req.params.url})
    console.log(req.params.url)
    console.log(comments)
    console.log("2")
    res.status(200).json(comments);
    console.log("3")
  } catch(err) {
    console.log("4")
    res.status(500).json(err);
    console.log("5")
  }
})


export default router;
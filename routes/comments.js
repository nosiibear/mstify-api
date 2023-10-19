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
    const comments = await Comment.find({'url': req.params.url})
    console.log(req.params.url)
    console.log(comments)
    res.status(200).json(comments);
  } catch(err) {
    res.status(500).json(err);
  }
})


export default router;
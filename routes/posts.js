const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Post = require("../models/post.js");

// GET ALL posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ONE post
router.get("/:id", getPost, (req, res) => {
  res.json(res.post);
});

// CREATE post
router.post("/", async (req, res) => {
  const post = new Post({
    user: req.body.user,
    message: req.body.message,
    category: req.body.category,
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// UPDATE post
router.patch("/:id", getPost, async (req, res) => {
  if (req.body.user != null) {
    res.post.user = req.body.user;
  }
  if (req.body.message != null) {
    res.post.message = req.body.message;
  }
  if (req.body.category != null) {
    res.post.category = req.body.category;
  }
  try {
    const updatedPost = await res.post.save();
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE POST
router.delete("/:id", getPost, async (req, res) => {
  try {
    await res.post.remove();
    res.json({ message: "Deleted post." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware
async function getPost(req, res, next) {
  let post;
  try {
    post = await Post.findById(req.params.id);
    if (post == null) {
      return res.status(404).json({ message: "Cannot find post." });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.post = post;
  next();
}

module.exports = router;

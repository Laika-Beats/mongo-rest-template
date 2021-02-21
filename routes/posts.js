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
router.get("/:id", (req, res) => {
  res.send("GET ONE test");
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
router.patch("/:id", (req, res) => {
  console.log("GET ALL TEST");
});

// DELETE POST
router.delete("/:id", (req, res) => {
  console.log("GET ALL TEST");
});

module.exports = router;

const express = require("express");
const router = express.Router();

// GET ALL posts
router.get("/", (req, res) => {
  res.send("GET ALL test");
});

// GET ONE post
router.get("/:id", (req, res) => {
  res.send("GET ONE test");
});

// CREATE post
router.post("/", (req, res) => {
  console.log("GET ALL TEST");
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

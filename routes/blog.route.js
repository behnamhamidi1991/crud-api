const express = require("express");
const router = express.Router();
const blogPosts = require("../models/postModel");
const {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/blog.controller");

router.get("/", getAllPosts);
router.get("/:id", getSinglePost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;

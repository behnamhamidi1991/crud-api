const blogPosts = require("../models/postModel");

// GET ALL POSTS
const getAllPosts = async (req, res) => {
  try {
    const posts = await blogPosts.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET A SINGLE POST
const getSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await blogPosts.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE A POST
const createPost = async (req, res) => {
  try {
    const post = await blogPosts.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE POST
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await blogPosts.findByIdAndUpdate(id, req.body);
    if (!post) {
      return res.status(404).json({ message: "Product not found!" });
    }

    const updatedPost = await blogPosts.findById(id);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE POST
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await blogPosts.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }

    res.status(200).json({ message: "Product successfully deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllPosts,
  getSinglePost,
  createPost,
  updatePost,
  deletePost,
};

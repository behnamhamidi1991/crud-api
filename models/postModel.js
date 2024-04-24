const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
    },
    content: {
      type: String,
      required: [true, "Blog content is required!"],
    },
    category: {
      type: String,
      require: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const blogPosts = mongoose.model("blogPosts", blogSchema);
module.exports = blogPosts;

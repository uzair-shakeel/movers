// blogRoutes.js
const express = require("express");
const {
  createBlogPost,
  getBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
  uploadBlogImages,
} = require("../controllers/blog");

const router = express.Router();

// Route to create a new blog post
router.post("/", uploadBlogImages, createBlogPost);

// Route to get all blog posts
router.get("/", getBlogPosts);

// Route to get a specific blog post by ID
router.get("/:id", getBlogPostById);

// Route to update a blog post
router.put("/:id", updateBlogPost);

// Route to delete a blog post
router.delete("/:id", deleteBlogPost);

module.exports = router;

// blogController.js
const BlogPost = require("../models/blog"); // Adjust the path according to your structure

// Create a new blog post
const createBlogPost = async (req, res) => {
  try {
    const blogPost = new BlogPost(req.body);
    console.log(blogPost);
    await blogPost.save();
    console.log(blogPost);
    res.status(201).json(blogPost);
  } catch (error) {
    console.error("Error saving blog post:", error); // Log detailed error
    res.status(400).json({ message: error.message });
  }
};

// Get all blog posts
const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a blog post by ID
const getBlogPostById = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id);
    if (!blogPost)
      return res.status(404).json({ message: "Blog post not found" });
    res.status(200).json(blogPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a blog post
const updateBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!blogPost)
      return res.status(404).json({ message: "Blog post not found" });
    res.status(200).json(blogPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a blog post
const deleteBlogPost = async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!blogPost)
      return res.status(404).json({ message: "Blog post not found" });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlogPost,
  getBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
};

const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  h1: { type: String, required: true },
  h2: { type: String, required: true },
  h3: [{ type: String }],
  sectionImage: { type: String, required: true },
  content: [{ type: String }],
});

const blogPostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  mainImage: { type: String, required: true },
  sections: [sectionSchema],
});

const BlogPost = mongoose.model("BlogPost", blogPostSchema);
module.exports = BlogPost;

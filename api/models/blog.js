const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
  h1: { type: String, required: true },
  h1content: { type: String },
  h2: { type: String, required: true },
  h2content: { type: String },
  h3: [
    {
      title: { type: String, required: true },
      content: { type: String },
    },
  ],
  sectionImage: { type: String, required: true },
  content: [{ type: String }],
});

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    mainImage: { type: String, required: true },
    description: { type: String },
    sections: [sectionSchema],
  },
  {
    timestamps: true, // This will add `createdAt` and `updatedAt` fields
  }
);

const BlogPost = mongoose.model("BlogPost", blogPostSchema);
module.exports = BlogPost;

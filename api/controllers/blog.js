const BlogPost = require("../models/blog");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// Configure Multer storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "BlogPosts",
    format: async (req, file) => "jpg",
    public_id: (req, file) => file.originalname,
  },
});

const upload = multer({ storage: storage });

// Middleware for image uploads
const uploadBlogImages = upload.fields([
  { name: "mainImage", maxCount: 1 }, // Main blog image
  { name: "sectionImages", maxCount: 10 }, // Section images
]);

// Create a new blog post
const createBlogPost = async (req, res) => {
  console.log("Request body:", req.body); // Debugging line

  try {
    const { title, description, sections } = req.body;

    // Get the uploaded mainImage and sectionImages
    const mainImage = req.files["mainImage"]
      ? req.files["mainImage"][0].path
      : null;
    const sectionImages = req.files["sectionImages"];

    // Parse the sections if sent as a JSON string
    const parsedSections = JSON.parse(sections);

    // Assign section images to the corresponding sections
    if (sectionImages && sectionImages.length) {
      parsedSections.forEach((section, index) => {
        if (sectionImages[index]) {
          section.sectionImage = sectionImages[index].path;
        }
      });
    }

    const blogPost = new BlogPost({
      title,
      description,
      mainImage, // Include the main blog image URL
      sections: parsedSections, // Include sections with their images
    });

    await blogPost.save();
    res.status(201).json(blogPost);
  } catch (error) {
    console.error("Error saving blog post:", error);
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
  uploadBlogImages,
};

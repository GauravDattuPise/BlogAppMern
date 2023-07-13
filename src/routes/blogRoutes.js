const express = require("express");
const { createBlog, updateBlog, deleteBlog, getAllBlog, getUserBlogs } = require("../controllers/blogController");
const router = express.Router();

// FETCH ALL BLOGS
router.get("/getAllBlogs", getAllBlog)

// FETCH USER BLOGS
router.get("/getUserBlogs/:userId", getUserBlogs);

// BLOG CREATION
router.post("/create-blogs", createBlog);

// BLOG UPDATION
router.put("/updateBlog/:blogId", updateBlog);

// BLOG DELETION
router.delete("/deleteBlog/:blogId", deleteBlog);

module.exports = router
const express = require("express");
const { createBlog, updateBlog, deleteBlog, getAllBlog, getUserBlogs, getBlog } = require("../controllers/blogController");
const router = express.Router();

// FETCH ALL BLOGS
router.get("/getAllBlogs", getAllBlog)

// get single blog
router.get("/getSingleBlog/:blogId", getBlog)

// FETCH USER BLOGS
router.get("/getUserBlogs/:userId", getUserBlogs);

// BLOG CREATION
router.post("/create-blogs", createBlog);

// BLOG UPDATION
router.put("/update-blog/:blogId", updateBlog);

// BLOG DELETION
router.delete("/delete-blog/:blogId", deleteBlog);

module.exports = router
const express = require("express");
const { createBlog, updateBlog, deleteBlog, getAllBlog } = require("../controllers/blogController");
const router = express.Router();

// FETCH ALL BLOGS
router.get("/getAllBlog", getAllBlog)

// BLOG CREATION
router.post("/createBlog", createBlog);

// BLOG UPDATION
router.put("/updateBlog/:blogId", updateBlog);

// BLOG DELETION
router.delete("/deleteBlog/:blogId", deleteBlog);

module.exports = router
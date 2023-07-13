const blogModel = require("../models/blogModel");

// FETCHING ALL BLOGS
exports.getAllBlog = async (req, res) => {

    try {

        const blogs = await blogModel.find().populate("user");
        return res.status(200).send({ status: true, message: "All blogs", totalBlogs: blogs.length, blogs });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}


// FETCHING USERS BLOGS
exports.getUserBlogs = async (req, res) => {

    try {

        const id = req.params.userId;
        // console.log(id)
        const blogs = await blogModel.find({user : id});
        return res.status(200).send({ status: true, message: "My blogs", totalBlogs: blogs.length, blogs });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

// get blog for update
exports.getBlog = async (req, res) => {

    try {

        const id = req.params.blogId;
        // console.log(id)
        const blog = await blogModel.findById(id);
        return res.status(200).send({ status: true, message: "My blog", blog });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

// CREATING BLOG
exports.createBlog = async (req, res) => {

    try {
        const data = req.body;
        let { title, description, image, user } = data;

        // blog validation
        if (!title || !description || !image || !user) {
            return res.status(400).send({ status: false, message: "Blog all data is required" });
        }

        // creating & returning blog
        const createdBlog = await blogModel.create(data);
        return res.status(201).send({ status: true, message: "Blog created Successfully", data: createdBlog })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

// UPDATING BLOG
exports.updateBlog = async (req, res) => {

    try {
        const id = req.params.blogId;
        const data = req.body;
        let { title, description, link } = data;

        // updating all fields of blog
        const updatedBlog = await blogModel.findByIdAndUpdate(id, { title: title, description: description, link: link }, { new: true });

        return res.status(200).send({ status: true, message: "Blog update Successful", data: updatedBlog });

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}

// DELETING BLOG
exports.deleteBlog = async (req, res) => {

    try {
        const id = req.params.blogId;

        // deleting blog
        await blogModel.findByIdAndDelete(id);
        return res.status(200).send({ status: true, message: "Blog Deleted Successfully" })

    } catch (error) {
        res.status(500).send({ status: false, message: error.message });
    }
}
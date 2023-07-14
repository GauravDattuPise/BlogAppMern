import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';

const Blogs = () => {

  // state for blogs
  const [blogs, setBlogs] = useState([]);

  // getting user from localstorage
  const userData = JSON.parse(localStorage.getItem("user"));

  // function for fetching blogs from backend and assign to blogs state
  async function getAllBlogs() {
    try {
      const { data } = await axios.get("/blogs/getAllBlogs");

      if (data?.status) {
        setBlogs(data?.blogs);
      }
      
    } catch (error) {
      console.log("error in get all blogs", error);
    }
  }

  // get all blogs at the time of rendering
  useEffect(() => {
    getAllBlogs();
  }, []);


  return (
    <div>
      {/* passing blog details as props */}
      {
        blogs && blogs.map(blog =>
          <BlogCard
            isUser={userData?.id === blog.user._id}
            title={blog?.title}
            id={blog?._id}
            description={blog?.description}
            image={blog?.image}
            date={blog?.createdAt}
            name={blog?.user?.userName}
          />)
      }
    </div>
  )
}

export default Blogs
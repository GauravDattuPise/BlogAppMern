import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';

const UserBlogs = () => {
  
  // state for blogs
  const [blogs, setBlogs] = useState([]);

  // function for fetching blogs from backend and to assign blogs to blogs state
  async function getMyBlogs(){
    try {
        const userId = localStorage.getItem("userId")
      const {data} = await axios.get(`/blogs/getUserBlogs/${userId}`);

      if(data?.status){
        setBlogs(data?.blogs);
      }

    } catch (error) {
      console.log("error in get my blogs", error);
    }
  }

  // get all my blogs at the time of rendering
  useEffect(()=>{
    getMyBlogs();
  }, []);
 

  return (
    <div>
        {
         blogs && blogs.map(blog => 
         <BlogCard
          title={blog.title}
          description={blog.description}
          image = {blog.image}
          date = {blog.createdAt}
          // name = "myBlog"
          /> )
        }
    </div>
  )
}

export default UserBlogs
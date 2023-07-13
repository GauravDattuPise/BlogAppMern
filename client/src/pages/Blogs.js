import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';

const Blogs = () => {
  
  // state for blogs
  const [blogs, setBlogs] = useState([]);

  // function for fetching blogs from backend and to assign blogs to blogs state
  async function getAllBlogs(){
    try {
      const {data} = await axios.get("/blogs/getAllBlogs");

      if(data?.status){
        setBlogs(data?.blogs);
      }

    } catch (error) {
      console.log("error in get all blogs", error);
    }
  }

  // get all blogs at the time of rendering
  useEffect(()=>{
       getAllBlogs();
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
          name = {blog.user.name}
          /> )
        }
    </div>
  )
}

export default Blogs
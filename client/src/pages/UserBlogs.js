import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard';

const UserBlogs = () => {

  // state for blogs
  const [blogs, setBlogs] = useState([]);

  // getting user from localstorage
  const userData = JSON.parse(localStorage.getItem("user"))

  // function for fetching blogs from backend and to assign blogs to blogs state
  async function getMyBlogs() {
    try {

      const { data } = await axios.get(`/blogs/getUserBlogs/${userData?.id}`);

      if (data?.status) {
        setBlogs(data?.blogs);
      }
      console.log(blogs)

    } catch (error) {
      console.log("error in get my blogs", error);
    }
  }

  // get all my blogs at the time of rendering
  useEffect(() => {
    getMyBlogs();
  }, []);


  return (
    <div>
      {/* passing blog data as props to BlogCard component */}
      {
        blogs && blogs.map(blog =>
          <BlogCard
            isUser={true}
            title={blog?.title}
            id={blog?._id}
            description={blog?.description}
            image={blog?.image}
            date={blog?.createdAt}
            name={userData?.name}
          />)
      }
    </div>
  )
}

export default UserBlogs
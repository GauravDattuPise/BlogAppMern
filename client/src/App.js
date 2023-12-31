import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blogs from "./pages/Blogs";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import UserBlogs from "./pages/UserBlogs";
import CreateBlogs from "./pages/CreateBlogs";
import BlogsEdit from "./pages/BlogsEdit";

function App() {
  return (
    <div>
     
     <Toaster/>
      <Header/>
      <Routes>
        <Route path="/" element={ <Blogs/>} />
        <Route path="/my-blogs" element={<UserBlogs/>} />
        <Route path="/create-blogs" element={<CreateBlogs/>} />
        <Route path="/blogs-edit/:id" element={<BlogsEdit/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
     
     
    </div>
  );
}

export default App;

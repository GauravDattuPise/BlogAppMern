import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blogs from "./pages/Blogs";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
     
     <Toaster/>
      <Header/>
      <Routes>
        <Route path="/" element={ <Blogs/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
     
     
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blogs from "./pages/Blogs";
import Header from "./components/Header";

function App() {
  return (
    <div>
     
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

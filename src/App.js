import "./App.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Nav/Nav.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Create from "./Pages/CreatePost.jsx";
import Posts from "./Pages/Posts";
import Footer from "./Components/Footer/Footer.jsx";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  return (
    <Router>
      <nav>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      </nav>

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/create" element={<Create isAuth={isAuth} />} />
        <Route path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<Posts />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  );
}

export default App;

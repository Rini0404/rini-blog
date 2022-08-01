import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Nav/Nav.jsx";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Create from "./Pages/CreatePost.jsx";



function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <>
      <Router>
        <nav>
          <Navbar isAuth={isAuth} setIsAuth = { setIsAuth } />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/create" element={<Create isAuth = {isAuth} />} />
        </Routes>
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;

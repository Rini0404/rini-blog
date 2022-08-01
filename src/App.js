import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './Components/Nav/Nav.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Create from './Pages/CreatePost.jsx';

function App() {
  return (
    <>
    <Router>
      <nav>
        <Navbar />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <ToastContainer />
    </Router> 
    </>
  );
}

export default App;

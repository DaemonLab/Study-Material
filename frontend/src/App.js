import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Semester3 from "./components/CSE/Semester3";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

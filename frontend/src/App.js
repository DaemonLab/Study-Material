import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Semester3 from "./components/CSE/Semester3";
import LoginContextProvider from "./contexts/LoginContext";
import Content from "./pages/Content";

function App() {
  return (
    <>
      <LoginContextProvider>
        <Router>
          <div className="container">
            <Navbar />
            <Routes>
              <Route path="/dashboard/:semester2" element={<Dashboard />} />
              <Route path="/" element={<Login />} />
              <Route path="/register/:email" element={<Register />} />
              <Route path="/material/:type/:semester" element={<Content />}></Route>
            </Routes>
          </div>
        </Router>
      </LoginContextProvider>
    </>
  );
}

export default App;

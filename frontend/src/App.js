import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Content from "./pages/content";
import { useState } from "react";

function App() {

  const [email, setEmail] = useState(sessionStorage.getItem("email"));
  const [type, setType] = useState(sessionStorage.getItem("type"));
  const [semester, setSemester] = useState(sessionStorage.getItem("semester"));
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn")
  );
  const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem("isAdmin"));

  const changeEmail = (email) => {
    setEmail(email);
    sessionStorage.setItem("email", email);
  };
  const changeType = (type) => {
    setType(type);
  };
  const changeSemester = (semester) => {
    setSemester(semester);
    sessionStorage.setItem("semester", semester);
  };
  const toggleLoggedIn = () => {
    setIsLoggedIn(!isLoggedIn);
    sessionStorage.setItem("isLoggedIn", isLoggedIn);
  };
  const toggleAdmin = (isAdmin) => {
    setIsAdmin(isAdmin);
    sessionStorage.setItem("isAdmin", isAdmin);
  };

  return (
    <>
      <Router>
        <style>
          <style>
            @import
            url('https://fonts.googleapis.com/css2?family=Ropa+Sans&display=swap');
          </style>
        </style>
        <Navbar isAdmin={isAdmin} toggleLoggedIn={toggleLoggedIn} />
        <Routes>
          {/* <Route
                path="/dashboard/:semester2"
                element={<Dashboard changeSemester={changeSemester} />}
              />
              <Route path="/" element={<Login />} />
              <Route
                path="/register/:email"
                element={<Register changeEmail={changeEmail} />}
              />
              <Route
                path="/material/:type/:semester"
                element={
                  <Content
                    changeType={changeType}
                    changeSemester={changeSemester}
                  />
                }
              ></Route> */}
          <Route
            path="/dashboard"
            element={
              <Dashboard
                changeSemester={changeSemester}
                semester={semester}
                isAdmin={isAdmin}
                isLoggedIn={isLoggedIn}
                toggleAdmin={toggleAdmin}
                toggleLoggedIn={toggleLoggedIn}
              />
            }
          />
          <Route
            path="/"
            element={
              <Login
                changeEmail={changeEmail}
                changeSemester={changeSemester}
                isAdmin={isAdmin}
                isLoggedIn={isLoggedIn}
                toggleAdmin={toggleAdmin}
                toggleLoggedIn={toggleLoggedIn}
              />
            }
          />
          <Route
            path="/register"
            element={
              <Register
                changeEmail={changeEmail}
                email={email}
                changeSemester={changeSemester}
                isAdmin={isAdmin}
                isLoggedIn={isLoggedIn}
                toggleAdmin={toggleAdmin}
                toggleLoggedIn={toggleLoggedIn}
              />
            }
          />
          <Route
            path="/material/:type"
            element={
              <Content
                changeType={changeType}
                changeSemester={changeSemester}
                type={type}
                semester={semester}
                isAdmin={isAdmin}
                isLoggedIn={isLoggedIn}
                toggleAdmin={toggleAdmin}
                toggleLoggedIn={toggleLoggedIn}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

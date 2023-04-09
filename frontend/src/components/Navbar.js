import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

export default function Navbar(props) {
  const navigate = useNavigate();

  const logout = () => {
    props.toggleLoggedIn();
    navigate("/");
  };
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 mb-3">
      <div class="container">
        <a href="/" class="navbar-brand">
          IITI Study Material
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto">
            {props.isLoggedIn && (
              <li class="nav-item">
                <a href={logout} class="nav-link" >
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

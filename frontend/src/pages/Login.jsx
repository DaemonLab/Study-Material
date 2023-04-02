import React, { useState, useEffect, Component, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { GoogleCredentialResponse } from "@react-oauth/google";
import "./Styles.css";
import axios from "axios";
import jwt from "jwt-decode";
import { LoginContext } from "../contexts/LoginContext";

function Login() {
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const logindetails = useContext(LoginContext);
  const { toggleAdmin, toggleLoggedIn } = useContext(LoginContext);

  const handleFailure = () => {
    console.log("Failed to authenticate with Google");
  };

  const handleSuccess = async (tokenId) => {
    console.log(tokenId);
    await axios
      .post("http://localhost:8080/auth/google/", tokenId, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response.data);
        const token = response.data;
        setToken(token);
        const details = jwt(token);
        console.log(details);
        if(details.isAdmin) toggleAdmin();
        toggleLoggedIn();
        if (details.isFirstLogin) navigate("/register");
        else navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div class="container my-2" id="loginHeading">
        <img
          id="loginImgLogo"
          src="https://upload.wikimedia.org/wikipedia/en/c/c4/Indian_Institute_of_Technology%2C_Indore_Logo.png"
          height="100"
          width="auto"
          alt="IIT Indore Logo"
        />
        <h1 class="display-4 text-center">Content Portal</h1>
        <p class="lead text-center">
          Welcome to our study material website designed exclusively for our
          students. Here, you can access a wide range of study materials,
          including notes, presentations, videos, and more, all created and
          curated by our experienced faculty. With our user-friendly interface
          and intuitive navigation, you can easily find the content you need,
          anytime and anywhere. Whether you're preparing for exams, revising
          concepts, or exploring new topics, our website has got you covered.
          Start exploring now and take your learning to the next level!
        </p>
      </div>

      <div className="card mb-3 mx-auto">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://pbs.twimg.com/media/DWiuIqZWsAcuY_w.png"
              className="img-fluid rounded-start"
              alt="study-material"
            />
          </div>
          <div className="col-md-8" style={{ margin: "auto" }}>
            <div className="card-body">
              <h3>Login with your insititute google account</h3>
            </div>

            <div
              className="form-floating"
              style={{
                marginTop: "auto",
                marginBottom: "auto",
                marginRight: "auto",
              }}
            >
              {token ? (
                <div>You are logged in with token: {token}</div>
              ) : (
                <div style={{ marginLeft: "13%" }}>
                  <GoogleLogin
                    type="standard"
                    theme="filled_blue"
                    size="large"
                    text="continue_with"
                    shape="pill"
                    width="1000"
                    logo_alignment="center"
                    onSuccess={(credentialResponse) => {
                      return handleSuccess(credentialResponse);
                    }}
                    onError={() => {
                      handleFailure();
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

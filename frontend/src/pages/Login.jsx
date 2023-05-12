import React, { useState, useEffect, Component, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { GoogleCredentialResponse } from "@react-oauth/google";
import "./Styles.css";
import axios from "axios";
import jwt from "jwt-decode";
import Loading from "../components/Loading";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Login(props) {
  const [token, setToken] = useState(null);
  const [branch, setBranch] = useState(null);
  const [semester, setSemester] = useState(null);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleFailure = () => {
    console.log("Failed to authenticate with Google");
  };

  const handleSuccess = async (tokenId) => {
    setLoading(true);
    console.log(tokenId);
    await axios
      .post("http://localhost:8080/auth/google/", tokenId, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        if (response.data === "You should login with institute email id") {
          throw "You should login with institute email id";
        }
        const token = response.data;
        setToken(token);
        const details = jwt(token);
        console.log(details.isAdmin);
        if (details.isAdmin == true) sessionStorage.setItem("isAdmin", true);
        sessionStorage.setItem("isLoggedIn", true);
        setEmail(details.email);
        props.changeEmail(details.email);
        props.changeSemester(details.semester);
        // navigate(`/register/${details.email}`);
        if (details.isFirstLogin) navigate(`/register`);
        else navigate(`/dashboard`);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
        navigate("/");
      });
    setLoading(false);
  };

  return (
    <>

      <Helmet>
        <title>IITI Study Material</title>
        <meta
          name="description"
          content="Discover and upload educational content."
        />
        <meta
          name="keywords"
          content="iiti, study material, iit, notes"
        />
      </Helmet>
    
      {loading ? (
        <Loading />
      ) : (
        <div id="container">
          <div class="container my-2" id="loginHeading">
            <img
              id="loginImgLogo"
              src="https://upload.wikimedia.org/wikipedia/en/c/c4/Indian_Institute_of_Technology%2C_Indore_Logo.png"
              height="100"
              width="auto"
              alt="IIT Indore Logo"
            />
            <div>
              <h1 class="display-4 text-center fw-bold">Content Portal</h1>
              <p class="lead text-center">
                Welcome to our study material website designed exclusively for
                our students. Here, you can access a wide range of study
                materials, including notes, presentations, videos, and more, all
                created and curated by our experienced faculty. With our
                user-friendly interface and intuitive navigation, you can easily
                find the content you need, anytime and anywhere. Whether you're
                preparing for exams, revising concepts, or exploring new topics,
                our website has got you covered. Start exploring now and take
                your learning to the next level!
              </p>
            </div>
          </div>

          <div
            className="container mb-3 mx-auto"
            id="form"
            style={{ width: "60%" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://pbs.twimg.com/media/DWiuIqZWsAcuY_w.png"
                  className="img-fluid rounded-start"
                  alt="study-material"
                />
              </div>
              <div
                className="col-md-8 d-flex justify-content-center"
                style={{ display: "block", margin: "auto" }}
              >
                <div className="d-flex flex-column flex-wrap m-3">
                  <h3 className="flex-item">
                    Login with your insititute google account
                  </h3>

                  <motion.div className="flex-item d-flex mx-auto" whileHover={{scale:1.1}}>
                    <GoogleLogin
                      type="standard"
                      theme="filled_black"
                      size="large"
                      text="continue_with"
                      shape="pill"
                      width="70"
                      logo_alignment="center"
                      onSuccess={(credentialResponse) => {
                        return handleSuccess(credentialResponse);
                        {
                          console.log(props.email);
                        }
                      }}
                      onError={() => {
                        handleFailure();
                      }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Login;

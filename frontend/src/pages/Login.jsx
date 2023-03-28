import React from "react";
import "./Styles.css";
import { BsGoogle } from 'react-icons/bs'

function Login() {
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
          <div className="col-md-8" style={{ marginTop:"auto", marginBottom:"auto"}}>
            <div className="card-body">
              <h3>Login with your insititute google account</h3>
            </div>
            
            <div className="form-floating">
            
              <button
                class="btn login"
                type="submit"
                style={{ color: "white" }}
              >
                <BsGoogle />   Login with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

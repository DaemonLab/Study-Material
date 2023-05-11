import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Register(props) {
  const [rollno, setRollno] = useState("");
  const [branch, setBranch] = useState("CSE");
  const [semester, setSemester] = useState("");
  const navigate = useNavigate();


  async function register() {
    try {
      console.log('started');
      await axios
        .post("http://localhost:8080/register", {
          email: sessionStorage.getItem("email"),
          branch,
          rollno,
          semester,
        })
        .then((response) => {
          console.log(response);
          sessionStorage.setItem("semester", semester);
          navigate("/dashboard");
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {sessionStorage.getItem("isLoggedIn") && (
        <div data-bs-theme="dark">
          <div class="container my-2" id="loginHeading" data-bs-theme="dark">
            <img
              id="loginImgLogo"
              src="https://upload.wikimedia.org/wikipedia/en/c/c4/Indian_Institute_of_Technology%2C_Indore_Logo.png"
              height="100"
              width="auto"
              alt="IIT Indore Logo"
              style={{ marginLeft: "47%" }}
            />
            <h1 class="display-4 text-center fw-bold">Content Portal</h1>
            <p class="lead text-center">
              Welcome to our study material website designed exclusively for our
              students. Here, you can access a wide range of study materials,
              including notes, presentations, videos, and more, all created and
              curated by our experienced faculty. With our user-friendly
              interface and intuitive navigation, you can easily find the
              content you need, anytime and anywhere. Whether you're preparing
              for exams, revising concepts, or exploring new topics, our website
              has got you covered. Start exploring now and take your learning to
              the next level!
            </p>
          </div>

          <div
            className="card mb-3 mx-auto"
            data-bs-theme="dark"
            id="form"
            style={{ width: "60%" }}
          >
            <div className="row g-0" data-bs-theme="dark">
              <div className="col-md-4" data-bs-theme="dark">
                <img
                  src="https://pbs.twimg.com/media/DWiuIqZWsAcuY_w.png"
                  className="img-fluid rounded-start"
                  alt="study-material"
                />
              </div>
              <div
                className="col-md-8"
                data-bs-theme="dark"
                id="form"
                style={{ marginTop: "auto", marginBottom: "auto" }}
              >
                  <div className="card-body" data-bs-theme="dark" id="form">
                    <div className="col-md" data-bs-theme="dark">
                      <div
                        className="form-floating"
                        data-bs-theme="dark"
                        id="form"
                      >
                        <input
                          id="form"
                          data-bs-theme="dark"
                          type="text"
                          className="form-control"
                          value={rollno}
                          onChange={(e) => setRollno(e.target.value)}
                        />
                        <label htmlFor="floatingInputGrid">Roll Number</label>
                      </div>
                      <br />
                    </div>
                    <div className="col-md">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="form"
                          value={branch}
                          onChange={(e) => setBranch(e.target.value)}
                        >
                          <option value="CSE">CSE</option>
                          <option value="EE">EE</option>
                          <option value="ME">ME</option>
                          <option value="CE">CE</option>
                          <option value="MEMS">MEMS</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Branch</label>
                      </div>
                    </div>
                    <br />
                    <div className="col-md">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="form"
                          value={semester}
                          onChange={(e) => {
                            setSemester(e.target.value);
                          }}
                        />
                        <label htmlFor="floatingSelectGrid">
                          Enter the semester you are in:
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-floating">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      class="btn btn-success my-3 mx-auto d-flex align-items-center"
                      type="submit"
                      onClick={register}
                    >
                      Register
                    </motion.button>
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

export default Register;

import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../contexts/LoginContext";

function Register() {
  const [rollno, setRollno] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const logindetails = useContext(LoginContext);
  const navigate = useNavigate();
  const { email, semester2 } = useParams();

  async function register() {
    try {
      await axios
        .post("http://localhost:8080/register", {
          email,
          branch,
          rollno,
          semester,
        })
        .then(navigate(`/dashboard/${semester2}`));
    } catch (err) {
      console.log(err);
    }
  }

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
          <div
            className="col-md-8"
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            <form onSubmit={register}>
              <div className="card-body">
                <div className="col-md">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputGrid"
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
                      id="floatingSelectGrid"
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
                      id="floatingInputGrid"
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
                <button
                  class="btn login"
                  type="submit"
                  style={{ color: "white" }}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

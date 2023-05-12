import React, { Component, useContext, useState, useEffect } from "react";
import "./Styles.css";
import LectureNotes from "./Images/lectureNotes.jpg";
import Tutorials from "./Images/tutorials.jpg";
import QuestionPapers from "./Images/qPapers.jpg";
import Books from "./Images/books.jpg";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import axios from "axios";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from 'react-helmet';

function Dashboard(props) {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState();
  const types = ["notes", "tutorials", "questionpapers", "books"];
  const [isLoggedIn, setIsLoggedIn] = useState(
    sessionStorage.getItem("isLoggedIn")
  );

  const navigate = useNavigate();

  async function upload() {
    setLoading(true);
    let formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    formData.append("type", type);
    formData.append("course", course);
    formData.append("semester", props.semester);
    console.log(file);
    await axios
      .post("http://localhost:8080/material/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        alert("Uploaded Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }

  return (
    <AnimatePresence>
    <div data-bs-theme="dark" id="form">

      <Helmet>
        <title>Dashboard - IITI Study Material</title>
        <meta
          name="description"
          content="Discover and upload educational content."
        />
      </Helmet>

      {loading ? (
        <Loading />
      ) : (
        <div>
          {isLoggedIn && (
            <div id="form" data-bs-theme="dark">
              <style>
                <link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
                  rel="stylesheet"
                  integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp"
                  crossorigin="anonymous"
                />
              </style>
              <script>
                <script
                  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
                  integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
                  crossorigin="anonymous"
                ></script>
              </script>

              <div className="container">
                <br />
                <h2 class="mx-1">Discover Content</h2>
                <div
                  class="d-flex flex-wrap justify-content-center mx-2"
                  style={{
                    marginTop: "2%",
                    marginBottom: "2%",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <br />
                  <div
                    className="card m-2"
                    style={{ width: 290, height: 360 }}
                  >
                    <img
                      src={LectureNotes}
                      className="card-img-top"
                      alt="cse"
                      height="250"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">Lecture Notes</h5>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="btn btn-info"
                        style={{ marginLeft: "30%" }}
                        onClick={() => {
                          navigate(`/material/${types[0]}`);
                        }}
                      >
                        View More
                      </motion.button>
                    </div>
                  </div>

                  <div
                    className="card m-2"
                    style={{ width: 290, height: 360 }}
                  >
                    <img
                      src={Tutorials}
                      className="card-img-top"
                      alt="me"
                      height="250"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">Tutorials</h5>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="btn btn-info"
                        style={{ marginLeft: "30%" }}
                        onClick={() => {
                          navigate(`/material/${types[1]}`);
                        }}
                      >
                        View More
                      </motion.button>
                    </div>
                  </div>

                  <div
                    className="card m-2"
                    style={{ width: 290, height: 360 }}
                  >
                    <img
                      src={QuestionPapers}
                      className="card-img-top"
                      height="250"
                      alt="ce"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">
                        Question Papers
                      </h5>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="btn btn-info"
                        style={{ marginLeft: "30%" }}
                        onClick={() => {
                          navigate(`/material/${types[2]}/`);
                        }}
                      >
                        View More
                      </motion.button>
                    </div>
                  </div>

                  <div
                    className="card m-2"
                    style={{ width: 290, height: 360 }}
                  >
                    <img
                      src={Books}
                      className="card-img-top"
                      height="250"
                      alt="mems"
                    />
                    <div className="card-body">
                      <h5 className="card-title text-center">Books</h5>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="btn btn-info"
                        style={{ marginLeft: "30%" }}
                        onClick={() => {
                          navigate(`/material/${types[3]}`);
                        }}
                      >
                        View More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>

              {sessionStorage.getItem("isAdmin") && (
                <div
                  className="container"
                  style={{ marginTop: "2%", marginBottom: "2%" }}
                >
                  <h2 className="mx-1" style={{ margin: "2%" }}>
                    Upload New Material
                  </h2>

                  <label htmlFor="name">Name of the material</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <br />
                  <input
                    className="form-control"
                    type="file"
                    name="file"
                    id="file"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      console.log(e.target.files[0]);
                    }}
                  />
                  <br />
                  <select
                    class="form-select"
                    placeholder="Type"
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  >
                    <option selected>Select the type of this document</option>
                    <option value="Lecture Notes">Lecture Notes</option>
                    <option value="Tutorial">Tutorial</option>
                    <option value="Question Paper">Question Paper</option>
                    <option value="Book">Book</option>
                  </select>
                  <br />
                  <label htmlFor="course">Course Code (without spaces) </label>
                  <input
                    type="text"
                    className="form-control"
                    name="course"
                    onChange={(e) => {
                      setCourse(e.target.value);
                    }}
                  />
                  <br />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    type="submit"
                    className="btn btn-success"
                    onClick={upload}
                  >
                    Upload
                  </motion.button>
                </div>
              )}
            </div>
          )}
          <Footer />
        </div>
      )}
    </div>
    </AnimatePresence>
  );
}

export default Dashboard;

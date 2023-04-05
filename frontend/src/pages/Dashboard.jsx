import React, { Component, useContext, useState, useEffect } from "react";
import "./Styles.css";
import LectureNotes from "./Images/lectureNotes.png";
import LectureSlides from "./Images/lectureSlides.jpg";
import Tutorials from "./Images/tutorials.jpg";
import QuestionPapers from "./Images/qPapers.jpg";
import Books from "./Images/books.jpg";
import LoginContextProvider from "../contexts/LoginContext";
import { LoginContext } from "../contexts/LoginContext";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

Dashboard.contextType = LoginContext;

function Dashboard() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState("");
  const { semester2 } = useParams();
  const types = ['notes', 'tutorials', 'questionpapers', 'books'];

  const logindetails = useContext(LoginContext);
  console.log(logindetails);
  const navigate = useNavigate();

  async function upload() {
    let formData = new FormData();
    formData.append("name", name);
    formData.append("file", file);
    formData.append("type", type);
    formData.append("course", course);
    console.log(file);
    for (var key of formData.entries()) {
      console.log(key[0] + ", " + key[1]);
    }
    await axios
      .post(
        "http://localhost:8080/material/upload", formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        alert("Upload Successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
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
        <h2 class="mx-1" style={{ marginTop: "2%" }}>
          Discover Content
        </h2>
        <div
          class="container-fluid mx-2"
          style={{
            marginTop: "2%",
            marginBottom: "2%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "flex",
          }}
        >
          <br />
          <div className="card mx-1" style={{ width: 290, height: 360 }}>
            <img src={LectureNotes} className="card-img-top" alt="cse" />
            <div className="card-body">
              <h5 className="card-title">Lecture Notes</h5>
              <p className="card-text">
                Based on content delivered by our expert faculty
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigate(`/material/${types[0]}/${semester2}`);
                }}
              >
                View More
              </button>
            </div>
          </div>

          <div className="card mx-1" style={{ width: 290, height: 360 }}>
            <img src={Tutorials} className="card-img-top" alt="me" />
            <div className="card-body">
              <h5 className="card-title">Tutorials</h5>
              <p className="card-text">
                Expertly curated by our faculty from best of the sources
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigate(`/material/${types[1]}/${semester2}`);
                }}
              >
                View More
              </button>
            </div>
          </div>

          <div className="card mx-1" style={{ width: 290, height: 360 }}>
            <img
              src={QuestionPapers}
              className="card-img-top"
              height="200"
              alt="ce"
            />
            <div className="card-body">
              <h5 className="card-title">Question Papers</h5>
              <p className="card-text">
                Mid-semester and end-semester question papers of past years
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigate(`/material/${types[2]}/${semester2}`);
                }}
              >
                View More
              </button>
            </div>
          </div>

          <div className="card mx-1" style={{ width: 290, height: 360 }}>
            <img src={Books} className="card-img-top" height="200" alt="mems" />
            <div className="card-body">
              <h5 className="card-title">Books</h5>
              <p className="card-text">
                Recommemded textbooks and additional resources
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  navigate(`/material/${types[3]}/${semester2}`);
                }}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
      {logindetails.isAdmin && (
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
          <button type="submit" className="btn btn-secondary" onClick={upload}>
            Upload
          </button>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

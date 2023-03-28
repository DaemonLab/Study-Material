import React from "react";
import "./Styles.css";
import LectureNotes from "./Images/lectureNotes.png";
import LectureSlides from "./Images/lectureSlides.jpg";
import Tutorials from "./Images/tutorials.jpg";
import QuestionPapers from "./Images/qPapers.jpg";
import Books from "./Images/books.jpg";

function Dashboard() {
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
              <button className="btn btn-secondary">View More</button>
            </div>
          </div>

          <div className="card mx-1" style={{ width: 290, height: 360 }}>
            <img src={Tutorials} className="card-img-top" alt="me" />
            <div className="card-body">
              <h5 className="card-title">Tutorials</h5>
              <p className="card-text">
                Expertly curated by our faculty from best of the sources
              </p>
              <button className="btn btn-secondary">View More</button>
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
              <button className="btn btn-secondary">View More</button>
            </div>
          </div>

          <div className="card mx-1" style={{ width: 290, height: 360 }}>
            <img src={Books} className="card-img-top" height="200" alt="mems" />
            <div className="card-body">
              <h5 className="card-title">Books</h5>
              <p className="card-text">
                Recommemded textbooks and additional resources
              </p>
              <button className="btn btn-secondary">View More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "2%", marginBottom:"2%" }}>
        <h2 className="mx-1" style={{ margin: "2%" }}>
          Upload New Material
        </h2>
        <input className="form-control" type="file" name="" id="" /><br />
        <select class="form-select" placeholder="Type">
          <option selected>Select the type of this document</option>
          <option value="1">Lecture Notes</option>
          <option value="2">Tutorial</option>
          <option value="3">Question Paper</option>
          <option value="4">Book</option>
        </select><br />
        <select class="form-select" placeholder="Type">
          <option selected>Course Pertained</option>
          <option value="1">MA105</option>
          <option value="2">PH105</option>
          <option value="3">PH106</option>
          <option value="4">HS159</option>
        </select><br />
        <button className="btn btn-secondary">Upload</button>
      </div>
    </div>
  );
}

export default Dashboard;

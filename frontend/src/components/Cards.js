import React from "react";
import "./Styles.css";
import LectureNotes from "./CSE//Images/lectureNotes.png";
import LectureSlides from "./CSE/Images/lectureSlides.jpg";
import Tutorials from "./CSE/Images/tutorials.jpg";
import QuestionPapers from "./CSE/Images/qPapers.jpg";
import Books from "./CSE/Images/books.jpg";

export default function Cards() {
  return (
    <>
      <nav class="navbar bg-body-tertiary">
        <form class="container-fluid justify-content-end">
          <button class="btn btn-outline-success me-2" type="button">
            Semester 3
          </button>
          <button class="btn btn-outline-success me-2" type="button">
            Semester 4
          </button>
        </form>
      </nav>
      <br /> <br />
      <div class="container-fluid mx-2">
        <h2 class="mx-1">Discover Content</h2>
        <br />
        <div
          className="card mx-1"
          style={{ width: 290, height: 360, float: "left" }}
        >
          <img src={LectureNotes} className="card-img-top" alt="cse" />
          <div className="card-body">
            <h5 className="card-title">Lecture Notes</h5>
            <p className="card-text">
              Based on content delivered by our expert faculty
            </p>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle btn-lg"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </button>
              <ul class="dropdown-menu animate__animated animate__flipInX">
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading12">
                    MA204(Numerical Methods)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading13">
                    CS202(Automata Theory and Logic)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading14">
                    CS204(Design and Analysis of Algorithms)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading15">
                    CS206(Logic Design)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading16">
                    CS208(Software Engineering)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading17">
                    CS254(Design and Analysis of Algorithms Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading18">
                    CS256(Logic Design Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading19">
                    CS258(Software Engineering Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading20">
                    CS262(Program Development and Software Design Lab-II)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="card mx-1"
          style={{ width: 290, height: 360, float: "left" }}
        >
          <img src={LectureSlides} className="card-img-top" alt="ee" />
          <div className="card-body">
            <h5 className="card-title">Lecture Slides</h5>
            <p className="card-text">
              Tfw you're too lazy to put in a little effort in teaching
            </p>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle btn-lg"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </button>
              <ul class="dropdown-menu animate__animated animate__flipInX">
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading12">
                    MA204(Numerical Methods)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading13">
                    CS202(Automata Theory and Logic)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading14">
                    CS204(Design and Analysis of Algorithms)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading15">
                    CS206(Logic Design)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading16">
                    CS208(Software Engineering)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading17">
                    CS254(Design and Analysis of Algorithms Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading18">
                    CS256(Logic Design Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading19">
                    CS258(Software Engineering Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading20">
                    CS262(Program Development and Software Design Lab-II)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="card mx-1"
          style={{ width: 290, height: 360, float: "left" }}
        >
          <img src={Tutorials} className="card-img-top" alt="me" />
          <div className="card-body">
            <h5 className="card-title">Tutorials</h5>
            <p className="card-text">
              Expertly curated by our faculty from best of the sources
            </p>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle btn-lg"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </button>
              <ul class="dropdown-menu animate__animated animate__flipInX">
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading12">
                    MA204(Numerical Methods)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading13">
                    CS202(Automata Theory and Logic)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading14">
                    CS204(Design and Analysis of Algorithms)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading15">
                    CS206(Logic Design)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading16">
                    CS208(Software Engineering)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading17">
                    CS254(Design and Analysis of Algorithms Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading18">
                    CS256(Logic Design Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading19">
                    CS258(Software Engineering Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading20">
                    CS262(Program Development and Software Design Lab-II)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="card mx-1"
          style={{ width: 290, height: 360, float: "left" }}
        >
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
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle btn-lg"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </button>
              <ul class="dropdown-menu animate__animated animate__flipInX">
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading12">
                    MA204(Numerical Methods)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading13">
                    CS202(Automata Theory and Logic)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading14">
                    CS204(Design and Analysis of Algorithms)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading15">
                    CS206(Logic Design)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading16">
                    CS208(Software Engineering)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading17">
                    CS254(Design and Analysis of Algorithms Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading18">
                    CS256(Logic Design Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading19">
                    CS258(Software Engineering Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading20">
                    CS262(Program Development and Software Design Lab-II)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="card mx-1"
          style={{ width: 290, height: 360, float: "left" }}
        >
          <img src={Books} className="card-img-top" height="200" alt="mems" />
          <div className="card-body">
            <h5 className="card-title">Books</h5>
            <p className="card-text">You probably won't need this but okay</p>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle btn-lg"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Courses
              </button>
              <ul class="dropdown-menu animate__animated animate__flipInX">
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading12">
                    MA204(Numerical Methods)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading13">
                    CS202(Automata Theory and Logic)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading14">
                    CS204(Design and Analysis of Algorithms)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading15">
                    CS206(Logic Design)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading16">
                    CS208(Software Engineering)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading17">
                    CS254(Design and Analysis of Algorithms Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading18">
                    CS256(Logic Design Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading19">
                    CS258(Software Engineering Lab)
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#scrollspyHeading20">
                    CS262(Program Development and Software Design Lab-II)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";

function Content(props) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();
  const navigate = useNavigate();
  const data = {
    semester: props.semester,
  };
  useEffect(() => {
    setLoading(true);
    console.log(props.semester);
    axios
      .post(`http://localhost:8080/material/${type}`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setNotes(response.data);
      });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <AnimatePresence>
      <>
        {loading ? (
          <Loading />
        ) : (
          <motion.div data-bs-theme="dark" exit={{ opacity: 0 }}>
            {sessionStorage.getItem("isLoggedIn") && (
              <div
                className="container mx-auto"
                style={{ margin: "2%", padding: "2%" }}
              >
                <motion.table className="table table-dark">
                  <thead className="text-center">
                    <tr>
                      <th>Name</th>
                      <th>Link</th>
                      <th>Course</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {notes.map((item) => (
                      <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View File
                          </a>
                        </td>
                        <td>{item.course}</td>
                      </tr>
                    ))}
                  </tbody>
                </motion.table>
                <div className="d-flex justify-content-end">
                  <motion.button
                    whileHover={{ backgroundColor: "rgb(1,1,1)", scale: 1.1 }}
                    className="btn btn-danger"
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    Go Back
                  </motion.button>
                </div>
              </div>
            )}
            <Footer />
          </motion.div>
        )}
      </>
    </AnimatePresence>
  );
}

export default Content;

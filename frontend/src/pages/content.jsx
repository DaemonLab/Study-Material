import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

function Content(props) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();
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
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="container" style={{ margin: "2%", padding: "2%" }}>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Link</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
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
          </table>
        </div>
      )}
    </>
  );
}

export default Content;

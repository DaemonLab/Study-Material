import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Content() {
  const [notes, setNotes] = useState([]);
  const { type, semester } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/material/${type}`, { semester })
      .then((response) => {
        setNotes(response.data);
      });
  }, []);

  return (
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
              <td><a href={item.link} target="_blank">View File</a></td>
              <td>{item.course}</td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Content;

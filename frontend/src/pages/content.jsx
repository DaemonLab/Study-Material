import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [counter, setCounter] = useState(0);
  const {type} = useParams;
  useEffect(() => {
    axios
      .get(`http://localhost:8080/material/${type}`)
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
              <td>{item.link}</td>
              <td>{item.course}</td>
            </tr>
          ))}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
}

export default Notes;

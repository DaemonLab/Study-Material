const express = require("express");
const mongoose = require("mongoose");
const Material = require("../models/Material");

const router = express.Router();

router.get("/notes", async (req, res) => {
  const materials = await Material.find({ type: "Lecture Notes", semester: req.body.semester });
  return res.status(200).json(materials);
  // Material.find({ type: "Lecture Notes", semester: req.body.semester }).then(
  //   (err, data) => {
  //     if (err) throw err;
  //     else res.json(data);
  //   }
  // );
});

router.get("/tutorials", (req, res) => {
  Material.find({ type: "Tutorial", semester: req.body.semester }).then(
    (err, data) => {
      if (err) throw err;
      else res.json(data);
    }
  );
});

router.get("/books", (req, res) => {
  Material.find({ type: "Books", semester: req.body.semester }).toArray(
    (err, data) => {
      if (err) throw err;
      else res.json(data);
    }
  );
});

router.get("/questionpapers", (req, res) => {
  Material.find({ type: "Question Paper", semester: req.body.semester }).toArray(
    (err, data) => {
      if (err) throw err;
      else res.json(data);
    }
  );
});


module.exports = router;

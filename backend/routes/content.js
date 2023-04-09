const express = require("express");
const mongoose = require("mongoose");
const Material = require("../models/Material");

const router = express.Router();

router.post("/notes", async (req, res) => {
  const materials = await Material.find({
    type: "Lecture Notes",
    semester: req.body.semester,
  });
  return res.status(200).json(materials);
});

router.get("/tutorials", async (req, res) => {
  const materials = await Material.find({
    type: "Tutorial",
    semester: req.body.semester,
  });
  return res.status(200).json(materials);
});

router.get("/books", async (req, res) => {
  const materials = await Material.find({
    type: "Question Paper",
    semester: req.body.semester,
  });
  return res.status(200).json(materials);
});

router.get("/questionpapers", async (req, res) => {
  const materials = await Material.find({
    type: "Book",
    semester: req.body.semester,
  });
  return res.status(200).json(materials);
});

module.exports = router;

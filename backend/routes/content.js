const express = require("express");
const mongoose = require("mongoose");
const Material = require("../models/Material");

const router = express.Router();

router.post("/notes", async (req, res) => {
  try {
    const materials = await Material.find({
      type: "Lecture Notes",
      semester: req.body.semester,
    });
    return res.status(200).json(materials);
  } catch(err) {
    res.status(401).send("You are not logged in");
  }
});

router.get("/tutorials", async (req, res) => {
  try {
    const materials = await Material.find({
      type: "Tutorial",
      semester: req.body.semester,
    });
    return res.status(200).json(materials);
  } catch(err) {
    res.status(401).send("You are not logged in");
  }
});

router.get("/books", async (req, res) => {
  try {
    const materials = await Material.find({
      type: "Question Paper",
      semester: req.body.semester,
    });
    return res.status(200).json(materials);
  } catch(err) {
    res.status(401).send("You are not logged in");
  }
});

router.get("/questionpapers", async (req, res) => {
  try {
    const materials = await Material.find({
      type: "Book",
      semester: req.body.semester,
    });
    return res.status(200).json(materials);
  } catch(err) {
    res.status(401).send("You are not logged in");
  }
});

module.exports = router;

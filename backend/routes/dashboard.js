const express = require("express");
const cors = require("cors");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.json(req.session.user);
  } catch (err) {
    res.status(401).send(err);
  }
});

module.exports = router;

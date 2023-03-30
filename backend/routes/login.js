const express = require("express");
const path = require('path');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const router = express.Router();

router.get("/", ensureGuest, (req, res) => {
  
});

module.exports = router
const express = require("express");
const path = require('path');
const { ensureAuth, ensureGuest } = require('../middleware/auth');

const router = express.Router();

router.get("/", ensureGuest, (req, res) => {
  res.render( path.resolve(__dirname, '../', 'templates', 'login.html'))
});

module.exports = router
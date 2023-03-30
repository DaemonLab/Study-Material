const express = require('express')
const mongoose = require('mongoose');
const router = express.Router()

router.post('/register', (req, res) => {
    const data = req.body;
    res.send()
});

module.exports = router
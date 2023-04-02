const express = require('express')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const User = require("../models/User");
const router = express.Router()

const token = localStorage.getItem('token');
const decodedToken = jwt.decode(token);
const email = decodedToken.email;
const isFirstLogin = decodedToken.isFirstLogin;

router.post('/register', async (req, res) => {
    const data = req.body;
    const user = await User.findOne({email})

    if(!isFirstLogin){
        res.end("User already registered.")
    }
    user.rollno = req.body.rollno
    user.branch = req.body.branch
    user.year = req.body.year

    await user.save()
    res.end("User registered successfully")
});

module.exports = router
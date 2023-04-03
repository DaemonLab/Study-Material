const express = require('express')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const User = require("../models/User");
const router = express.Router()

const {LocalStorage} = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

router.post('/register', async (req, res) => {
    const data = req.body;
    console.log(data)
    const token = localStorage.getItem('token');
    const decodedToken = jwt.decode(token);
    const email = decodedToken.email;

    const isFirstLogin = decodedToken.isFirstLogin;
    const user = await User.findOne({email})

    if(user.rollno || user.branch || user.year){
        console.log("User already registered.")
        res.end("User already registered.")
    }
    user.rollno = data.rollno
    user.branch = data.branch
    user.year = data.year

    await user.save()
    console.log("User registered successfully")
    // res.status(200)
    // res.send()
    res.end()
});

module.exports = router
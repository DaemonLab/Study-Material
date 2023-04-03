const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/User");
const config = require("../config/config");
const jwtSecret = crypto.randomBytes(64).toString("hex");

const router = express.Router();
var user = false

router.post("/google", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const CLIENT_ID = data.clientId;
    const idToken = data.credential;
    const client = new OAuth2Client(CLIENT_ID);

    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: idToken,
        audience: CLIENT_ID,
      });
      const { name, email } = ticket.getPayload();
      user = await User.findOne({ email });
      if (!user) {
        // This is the user's first login
        user = await User.create({ name, email });
        isFirstLogin = true;
      } else {
        isFirstLogin = false;
      }
      const token = jwt.sign(
        { name, email, isFirstLogin: !user.lastLogin, isAdmin: user.isAdmin },
        jwtSecret
      );
      user.lastLogin = Date.now();
      await user.save();
      email = email
      console.log(isFirstLogin);
      return token;
    }
    verify()
      .then((response) => {
        console.log('Logged in successfully')
        res.status(200).send(response);
      })
      .catch((error) => {
        res.status(201).send(error);
      });
  } catch (error) {
    res.status(401).send({ message: error });
  }
});

router.post('/register', async (req, res) => {
  const data = req.body;

  if(!user){
    console.log('Not logged in')
    res.status(201).end('User not logged in')
  }else{
    try{
      user.rollno = data.rollno
      user.branch = data.branch
      user.year = data.year

      await user.save()
      .then((response) => {
        console.log('User registered successfully')
        res.status(200).send(response)
      })
      .catch((error) => {
        res.status(201).send(error);
      });
    }catch(error){
      console.log(error)
    }
  }
});

module.exports = router;

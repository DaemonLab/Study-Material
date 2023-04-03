const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/User");
const config = require("../config/config");
const jwtSecret = crypto.randomBytes(64).toString("hex");

const {LocalStorage} = require('node-localstorage');
const localStorage = new LocalStorage('./scratch');

const router = express.Router();
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
      let user = await User.findOne({ email });
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
      console.log(isFirstLogin);
      return token;
    }
    verify()
      .then((response) => {
        res.status(200).send(response);
        localStorage.setItem('token', response.token)
      })
      .catch((error) => {
        res.status(201).send(error);
      });
  } catch (error) {
    res.status(401).send({ message: error });
  }
});

module.exports = router;

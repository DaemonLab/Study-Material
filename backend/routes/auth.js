const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/User");
const config = require("../config/config");
const jwtSecret = crypto.randomBytes(64).toString("hex");
const router = express.Router();
router.post("/google", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const CLIENT_ID = data.clientId;
    const idToken = data.credential;
    const client = new OAuth2Client(CLIENT_ID);
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: CLIENT_ID,
    });
    const { name, email } = ticket.getPayload();
    if (!email.includes("@iiti.ac.in")) {
      throw "You should login with institute email id";
    }
    let user = await User.findOne({ email });
    if (!user) {
      // This is the user's first login
      user = await User.create({ name, email });
      isFirstLogin = true;
    } else {
      isFirstLogin = false;
    }
    const token = jwt.sign(
      {
        name,
        email,
        isFirstLogin: !user.lastLogin,
        isAdmin: user.isAdmin,
        semester: user.semester,
        branch: user.branch,
      },
      jwtSecret
    );
    user.lastLogin = Date.now();
    await user.save();
    console.log(isFirstLogin);
    res.status(200).send(token);
  } catch (error) {
    res.status(201).send(error);
  }
});

module.exports = router;

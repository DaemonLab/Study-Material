const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("../models/User");
const config = require("../config/config");

const router = express.Router();
const jwtSecret = crypto.randomBytes(64).toString("hex");

const client = new OAuth2Client(
  config.googleClientId,
  config.googleClientSecret,
  "postmessage"
);

router.post("/google", async (req, res) => {
  try {
    const tokenId = req.body;
    console.log(tokenId);
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: config.googleClientId,
    });
    const { name, email } = ticket.getPayload();
    let user = await User.findOne({ email });
    if (!user) {
      // This is the user's first login
      user = await User.create({ name, email });
    }
    const token = jwt.sign(
      { name, email, isFirstLogin: !user.lastLogin },
      jwtSecret
    );
    user.lastLogin = Date.now();
    await user.save();
    res.status(200).send({ token });
  } catch (error) {
    res.status(401).send({ message: "Invalid token" });
  }
});


module.exports = router;

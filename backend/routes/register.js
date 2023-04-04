const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    let user = await User.findOne({ email: data.email });
    console.log(user);
    if (user) {
      if (user.branch != null) {
        user
          .updateOne(
            { email: data.email },
            {
              branch: data.branch,
              rollno: data.rollno,
              semester: data.semester,
            }
          )
          .then((err, docs) => {
            if (err) console.log(err);
            else console.log(docs);
          });
      } else {
        user.branch = data.branch;
        user.rollno = data.rollno;
        user.semester = data.semester;
      }
      await user.save();
      res.status(200).send(user);
    }
  } catch (error) {
    console.log(error);
    res.status(201).send(error);
  }
});

module.exports = router;

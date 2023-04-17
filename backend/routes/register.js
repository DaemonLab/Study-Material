const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    let user = await User.findOne({ email: data.email });
    console.log("User before", user);
    if (user) {
      user.branch = data.branch;
      user.rollno = data.rollno;
      user.semester = data.semester;
      // if (user.branch != null) {
      //   user
      //     .updateOne(
      //       { email: data.email },
      //       {
      //         branch: data.branch,
      //         rollno: data.rollno,
      //         semester: data.semester,
      //       }
      //     )
      //     .then((err, docs) => {
      //       if (err) console.log(err);
      //       else console.log(docs);
      //     });
      // } else {

      // }
      await user.save();
      console.log("User after", user);
      res.status(200).send("Done");
    } else {
      throw "No user found";
    }
  } catch (error) {
    console.log(error);
    res.status(201).send(error);
  }
});

module.exports = router;

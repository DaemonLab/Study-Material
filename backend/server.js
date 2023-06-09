"use strict";
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const { connectDB } = require("./config/db");
const config = require("./config/config");
const courseRoutes = require("./routes/addCourse");
const loginRoute = require("./routes/login");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const User = require("./models/User");

connectDB();

const app = express();

let whitelist = ["http://localhost:3000", "http://localhost:80"];
let corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

// app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyparser.json());
// app.use(
//   bodyparser.urlencoded({
//     extended: true,
//   })
// );
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
// });

app.use("/login", require("./routes/login"));
app.use("/dashboard", require("./routes/addCourse"));

app.use("/auth", require("./routes/auth"));
app.use("/register", require("./routes/register"));

app.use("/dashboard", require("./routes/dashboard"));

app.use("/material", require("./routes/material"));
app.use("/material", require("./routes/content"));

app.listen(config.port, () => {
  console.log("App is listening on url http://localhost:" + config.port);
});

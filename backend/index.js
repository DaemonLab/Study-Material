"use strict";
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const {connectDB} = require('./config/db')
const passport = require("passport");
const session = require("express-session");
const config = require("./config/config");
const courseRoutes = require("./routes/addCourse");
const loginRoute = require("./routes/login");

connectDB();

const app = express();



app.use(express.json());
app.use(cors());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.set("view engine", "html");

app.engine("html", require("ejs").renderFile);

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", require('./routes/login'));
app.use("/dashboard", require('./routes/addCourse'));

app.use('/auth', require('./routes/auth'))  
app.use('/dashboard', require('./routes/dashboard'))

app.listen(config.port, () => {
  console.log("App is listening on url http://localhost:" + config.port);
});


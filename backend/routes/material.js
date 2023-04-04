const express = require("express");
const mongoose = require("mongoose");
const { google } = require("googleapis");
const Material = require("../models/Material");
const config = require("../config/config");
const db = require("../config/db");
const multer = require("multer");
const fs = require("fs");

const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "../files");
//   },
//   filename: (req, file, callback) => {
//     callback(null, `${file.fieldname}-${Date.now()}`);
//   },
// });

// const upload = multer({ storage: storage }).single("file");

const oauth2Client = new google.auth.OAuth2(
  config.googleClientId,
  config.googleClientSecret,
  config.redirectUri
);

oauth2Client.setCredentials({ refresh_token: config.refreshToken });

const drive = google.drive({
  version: "v3",
  auth: oauth2Client,
});

router.post("/upload", async (req, res) => {
  try {
    const data = req.body;
    const file = req.files.file;

    // await uploadToRemoteBucket(req.file.path);
    const response = await drive.files.create({
      requestBody: {
        name: data.name,
        mimeType: "application/pdf",
      },
      media: {
        mimeType: "application/pdf",
        body: req.file.path,
      },
    });
    console.log(response.data)

    const fileId = response.data.id;
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: "reader",
        type: "anyone",
      },
    });

    const result = await drive.files.get({
      fileId: fileId,
      fields: "webViewLink, webContentLink",
    });
    console.log(result.data);

    const newMaterial = new Material({
      name: data.name,
      link: result.data.webViewLink,
      type: data.type,
      course: data.course,
    });
    let material = Material.create({
        name: data.name,
        link: result.data.webViewLink,
        type: data.type,
        course: data.course,
    });

    await newMaterial.save();
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
});

module.exports = router;

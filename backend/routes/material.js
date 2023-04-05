const express = require("express");
const mongoose = require("mongoose");
const { google } = require("googleapis");
const Material = require("../models/Material");
const config = require("../config/config");
const db = require("../config/db");
const multer = require("multer");
const fs = require("fs");
const upload = multer({ dest: "../files/" });
const router = express.Router();

const multiparty = require("multiparty");

// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, "../files");
//   },
//   filename: (req, file, callback) => {
//     callback(null, `${file.fieldname}-${Date.now()}`);
//   },
// });

// const upload = multer({ storage: storage }).single("file");

router.post("/upload", upload.single("file"), async (req, res) => {
  // let form = new multiparty.Form();
  // form.parse(req, function(err, fields, files) {
  //   Object.keys(fields).forEach(function(name) {
  //     console.log(name);
  //   })
  // });
  // // console.log(form);
  try {
    const data = req.body;
    const file = req.file;
    console.log(data);

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

    // await uploadToRemoteBucket(req.file.path);
    const response = await drive.files.create({
      requestBody: {
        name: data.name,
        mimeType: "application/pdf",
      },
      media: {
        mimeType: "application/pdf",
        body: file.data,
      },
      fields: "id, webViewLink, webContentLink", // Return the file ID and public URL
      supportsAllDrives: true,
    });
    console.log(response.data);
    const url = response.data.webViewLink;
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

    let material = await Material.create({
      name: data.name,
      link: url,
      type: data.type,
      course: data.course,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
});

module.exports = router;

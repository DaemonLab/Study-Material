const express = require("express");
const mongoose = require("mongoose");
const { google } = require("googleapis");
const Material = require("../models/Material");
const config = require("../config/config");
const db = require("../config/db");
const Multer = require("multer");
const fs = require("fs");

const router = express.Router();

const multer = Multer({
  storage: Multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, `../files`);
    },
    filename: function (req, file, callback) {
      callback(
        null,
        file.fieldname + "_" + Date.now() + "_" + file.originalname
      );
    },
  }),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const deleteFile = (filePath) => {
  fs.unlink(filePath, () => {
    console.log("file deleted");
  });
};

router.post("/upload", multer.single("file"), async (req, res) => {
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

    const response = await drive.files.create({
      requestBody: {
        name: data.name,
        mimeType: file.mimetype,
      },
      media: {
        mimeType: file.mimetype,
        body: fs.createReadStream(file.path),
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
      semester: data.semester,
    });
    material.save();

    deleteFile(req.file.path);
    res.status(200).send("Uploaded Successfully");
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
});

module.exports = router;

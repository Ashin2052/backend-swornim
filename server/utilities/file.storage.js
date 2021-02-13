const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require('multer');
var ObjectID = require('mongodb').ObjectID;

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'assets/image');
  },
  filename: function(req, file, cb) {
    cb(null,ObjectID() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};


var upload = multer({storage: storage,
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter});
module.exports =upload;


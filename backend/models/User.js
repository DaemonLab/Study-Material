const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  branch: {
    type: String,
    required: false,
    default: null,
  },
  rollno: {
    type: Number,
    required: false,
    default: null,
  },
  semester: {
    type: Number,
    required: false,
    default: null,
  },
  lastLogin: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model("User", UserSchema);

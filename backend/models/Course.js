const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  courseCode: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Course", CourseSchema);

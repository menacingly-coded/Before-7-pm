const mongoose = require('mongoose');

const StudentSchema ={
  name: { type: String, required: true },
  age: { type: Number, required: true },
  branch: { type: String, required: true },
  course: { type: String, required: true},
  courses: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  college: { type: String, required: true },
};

const student = mongoose.model('student', StudentSchema);
module.exports = student;
const mongoose = require('mongoose');

const StudentSchema ={
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true },
  branch: { type: String, required: true, enum: ['CSE', 'ECE', 'MECH', 'CIVIL'] },
  course: { type: String, required: true, enum: ['B.Tech', 'M.Tech', 'B.Arch', 'M.Arch'] },
  courses: { type: Number, required: true, min: 1, max: 10 },
  email: { type: String, required: true, unique: true, lowercase: true },
  college: { type: String, required: true },
};

module.exports = mongoose.model("Student", StudentSchema);
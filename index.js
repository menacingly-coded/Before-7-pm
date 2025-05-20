const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
require('dotenv').config();
const Student = require('./models/students');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://shreya0987edu:5nxsbQphHo9hefhk@cluster0.2raftwq.mongodb.net/studentDB', {
  useNewUrlParser: "true",
  useUnifiedTopology: "true"
})
  .then(() => {
    console.log(" MongoDB connected successfully");
  })
  .catch((err) => {
    console.error(" MongoDB connection error:", err);
  });



app.get('/students', async (req, res) => {
  try {
    const students = await Student.find(); // get all students
    res.status(200).send(students);
  } catch (err) {
    console.error('Error fetching students:', err);
    res.status(500).send({ error: 'Something went wrong' });
  }
});

app.post('/students', async (req, res) => {
  try{
     const student = new Student(req.body);
     await student.save();
     res.status(201).send(student);
  }catch (err) {
    res.status(400).send(err);
  }
})

app.put('/students/:id', async (req, res) => {
  try {
    const studentId = req.params.id;
    const updateData = req.body;

    // Update student document by ID
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.json(updatedStudent);
  } catch (error) {
    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(3000)

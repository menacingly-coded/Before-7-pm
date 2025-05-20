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



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/students', async (req, res) => {
  try{
     const student = new Student(req.body);
     await student.save();
     res.status(201).send(student);
  }catch (err) {
    res.status(400).send(err);
  }
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(3000)

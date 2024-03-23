// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define MongoDB Schema
const registrationSchema = new mongoose.Schema({
  profilePhoto: String,
  name: String,
  username: String,
  password: String,
  dob: Date,
  gender: String,
  areaOfExpertise: String,
  professionalBackground: String,
  industryAffiliation: String,
});

const Registration = mongoose.model('Registration', registrationSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.post('/register', (req, res) => {
  const registrationData = req.body;

  const newRegistration = new Registration(registrationData);

  newRegistration.save((err) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).send('Error saving data');
    } else {
      console.log('Data saved successfully');
      res.status(200).send('Data saved successfully');
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Create a new Express server
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
// Connect to MongoDB using Mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Right on! Connected to MongoDB successfully."))
  .catch(err => console.log(err))

// Setup basic route
app.get("/", (req, res) => res.send("Hello World"));

// Specify which port to run on (process.env.PORT is for Heroku)
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
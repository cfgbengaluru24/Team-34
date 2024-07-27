require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');
const express = require('express');


const PORT = process.env.PORT || 8000;

app.use(express.json()); 

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
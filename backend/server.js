require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const trainerRoutes = require('./routes/trainerRoutes');
const campRoutes = require('./routes/campRoutes');
const bookingRoutes = require('./routes/bookingRoutes')
const lAEP = require("express-list-endpoints");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Body parser

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/trainers',trainerRoutes);
app.use('/api/camps',campRoutes);
app.use('/api/bookings',bookingRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log(lAEP(app));
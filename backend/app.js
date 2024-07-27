const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const campRoutes = require('./routes/campRoutes');
const traineeRoutes = require('./routes/traineeRoutes');
const trainerRoutes = require('./routes/trainerRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/camps', campRoutes);
app.use('/api/trainees', traineeRoutes);
app.use('/api/trainers', trainerRoutes);

module.exports = app;
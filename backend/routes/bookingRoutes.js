const express = require('express');
const { protectRoute } = require('../middleware/protectRoute.js');
const { createBooking, retrieveBooking } = require('../controllers/booking.controller.js');

const router = express.Router();

router.post("/create", protectRoute, createBooking);
router.post("/retrieve", protectRoute, retrieveBooking);
module.exports = router;
const express = require('express');
// const { protectRoute } = require('../middleware/protectRoute.js');
const { createBooking, retrieveBooking, retrieveAllBooking, cancelBooking, acceptBooking } = require('../controllers/Booking.js');

const router = express.Router();

router.post("/create", createBooking);
// router.get("/retrieve", retrieveBooking);
// router.get("/retrieve-all", retrieveAllBooking);
// router.post("/cancel-booking", cancelBooking);
// router.post("/accept-booking", acceptBooking);

module.exports = router;
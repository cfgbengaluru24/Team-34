const express = require('express');
const { protectRoute } = require('../middleware/protectRoute.js');
const { createBooking, retrieveBooking, retrieveAllBooking, cancelBooking, acceptBooking } = require('../controllers/booking.controller.js');

const router = express.Router();

router.post("/create", protectRoute, createBooking);
router.get("/retrieve", protectRoute, retrieveBooking);
router.get("/retrieve-all", protectRoute, retrieveAllBooking);
router.post("/cancel-booking", protectRoute, cancelBooking);
router.post("/accept-booking", protectRoute, acceptBooking);

module.exports = router;
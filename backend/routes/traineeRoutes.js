const express = require('express');
const { protectRoute } = require('../middleware/protectRoute.js');
const { createTrainee, retrieveTrainee } = require('../controllers/trainee.controller.js');

const router = express.Router();

router.post("/create", protectRoute, createTrainee);
router.get("/retrieve/:traineeId", protectRoute, retrieveTrainee);


module.exports = router;
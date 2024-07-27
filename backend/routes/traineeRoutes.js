const express = require('express');
const { protectRoute } = require('../middleware/protectRoute.js');
const { createTrainee } = require('../controllers/trainee.controller.js');

const router = express.Router();

router.post("/create", protectRoute, createTrainee);


module.exports = router;
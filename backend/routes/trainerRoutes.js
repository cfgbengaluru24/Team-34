const express = require('express');
const { protectRoute } = require('../middleware/protectRoute.js');
const { createTrainer,retrieveTrainer } = require('../controllers/trainer.controller.js');

const router = express.Router();

router.post("/create", protectRoute, createTrainer);
router.get("/retrieve/:trainerId", protectRoute, retrieveTrainer);


module.exports = router;
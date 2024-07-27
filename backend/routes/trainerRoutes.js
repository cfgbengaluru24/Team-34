const express = require('express');
const { protectRoute } = require('../middleware/protectRoute.js');
const { createTrainer } = require('../controllers/trainer.controller.js');

const router = express.Router();

router.post("/create", protectRoute, createTrainer);


module.exports = router;
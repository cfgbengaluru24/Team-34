const express = require('express');
// const { protectRoute } = require('../middleware/protectRoute.js');
const { createTrainer,retrieveTrainer } = require('../controllers/Trainer.js');

const router = express.Router();

router.post("/create", createTrainer);
router.get("/retrieve/:trainerId", retrieveTrainer);


module.exports = router;
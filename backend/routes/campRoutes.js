const express = require('express');
const { protectRoute } = require('../middleware/protectRoute.js');
const { createCamp, getCamps, getCampUsingId, updateTraineeIds, updateAppliedTrainerIds, updateSelectedTrainerIds } = require('../controllers/camp.controller.js');


const router = express.Router();

router.get("/retrieve-all", protectRoute, getCamps);

router.get("/retrieve-camp", protectRoute, getCampUsingId);

router.post("/create", protectRoute, createCamp);

router.post("/update/trainee", protectRoute, updateTraineeIds)

router.post("/update/applied-trainer", protectRoute, updateAppliedTrainerIds)

router.post("/update/selected-trainers", protectRoute, updateSelectedTrainerIds)



module.exports = router;
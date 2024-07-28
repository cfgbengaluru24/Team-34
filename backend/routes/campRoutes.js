const express = require('express');
// const { protectRoute } = require('../middleware/protectRoute.js');
const { createCamp, getCamps, getCampUsingId, updateTraineeIds, updateAppliedTrainerIds, updateSelectedTrainerIds } = require('../controllers/Camp.js');


const router = express.Router();

router.get("/retrieve-all", getCamps);

// router.get("/retrieve-camp", getCampUsingId);

// router.post("/create", createCamp);

// router.post("/update/trainee", updateTraineeIds)

router.post("/update/applied-trainer", updateAppliedTrainerIds)

//router.post("/update/selected-trainers", updateSelectedTrainerIds)



module.exports = router;
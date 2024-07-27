const express = require('express');
const { protectRoute } = require('../middleware/protectRoute.js');
const { createCamp } = require('../controllers/camp.controller.js');
// import { protectRoute } from "../middleware/protectRoute.js"
// import { createCamp } from "../controllers/camp.controller.js";

const router = express.Router();

router.post("/create", protectRoute, createCamp);


module.exports = router;
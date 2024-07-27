import express from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import { createCamp } from "../controllers/camp.controller.js";

const router = express.Router();

router.post("/create", protectRoute, createCamp);


export default router;
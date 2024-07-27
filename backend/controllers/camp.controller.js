// import Camp from "../models/camp.model";
const Camp = require('../models/camp.model.js');

exports.createCamp = async (req, res) => {
    try {
        const { location, traineeIds, /* appliedTrainerIds, selectedTrainerIds,*/ startTime, endTime } = req.body;
        console.log(req.body);
        const newCamp = new Camp({
            location,
            traineeIds: [],
            appliedTrainerIds: [],
            selectedTrainerIds: [],
            startTime,
            endTime,
            selected: false
        }) 
        console.log(newCamp);
        if (newCamp) {
            // generateTokenAndSetCookie(newUser._id, res)
            await newCamp.save();

            res.status(201).json({
                campId: newCamp._id,
                traineeIds: newCamp.traineeIds,
            });
        } else {
            res.status(500).json({
            error: "invalid camp data"
        })
        }

    } catch (error) {
        console.log("Error in camp controller", error.message)
        res.status(500).json({
            error: "internal server error"
        })
    }
}
// module.exports = { createCamp };
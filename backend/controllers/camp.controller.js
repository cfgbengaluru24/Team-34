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
                // traineeIds: newCamp.traineeIds,
            });
        } else {
            res.status(500).json({
            error: "invalid camp data"
        })
        }

    } catch (error) {
        console.log("Error in camp controller createCamp", error.message)
        res.status(500).json({
            error: "internal server error"
        })
    }
}

exports.getCamps = async (req, res) => {
    try {
        const camps = await Camp.find();
        if (!camps) {
            return res.status(404).json({
                error: "Camps not found"
            });
        }
        res.status(200).json(camps);
    } catch (error) {
        console.log("Error in camp controller getCamps", error.message);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};


exports.getCampUsingId = async (req, res) => {
    const { campId } = req.body;
    try {
        const camp = await Camp.findById(campId)
        if (!camp) {
            return res.status(404).json({
                error: "Camp not found"
            });
        }
        res.status(200).json(camp);
    } catch (error) {
        console.log("Error in camp controller getCampUsingId", error.message);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};

exports.updateTraineeIds = async (req, res) => {
    try {
        const { campId, traineeId } = req.body;
        const camp = await Camp.findById(campId);
        if (!camp) {
            return res.status(404).json({
                error: "Camp not found"
            });
        }
        camp.traineeIds.push(traineeId);
        await camp.save();
        res.status(200).json({
            message: "Trainee added to camp successfully"
        });
    } catch (error) {
        console.log("Error in camp controller updateTraineeIds", error.message);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}

exports.updateAppliedTrainerIds = async (req, res) => {
    try {
        const { campId, trainerId } = req.body;
        const camp = await Camp.findById(campId);
        if (!camp) {
            return res.status(404).json({
                error: "Camp not found"
            });
        }
        camp.appliedTrainerIds.push(trainerId);
        await camp.save();
        res.status(200).json({
            message: "Applied trainer added to camp successfully"
        });
    } catch (error) {
        console.log("Error in camp controller updateAppliedTrainerIds", error.message);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}

exports.updateSelectedTrainerIds = async (req, res) => {
    try {
        const { campId, trainerIds } = req.body;
        const camp = await Camp.findById(campId);
        if (!camp) {
            return res.status(404).json({
                error: "Camp not found"
            });
        }
        camp.selectedTrainerIds = trainerIds;
        camp.selected = true;
        await camp.save();
        res.status(200).json({
            message: "Selected trainer IDs updated successfully"
        });
    } catch (error) {
        console.log("Error in camp controller updateSelectedTrainerIds", error.message);
        res.status(500).json({
            error: "Internal server error"
        });
    }
}


// module.exports = { createCamp };
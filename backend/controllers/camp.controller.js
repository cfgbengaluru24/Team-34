import Camp from "../models/camp.model";

export const createCamp = async (req, res) => {
    try {
        const { location, traineeIds, /* appliedTrainerIds, selectedTrainerIds,*/ startTime, endTime} = req.body;

        const newCamp = new Camp({
            location,
            traineeIds,
            appliedTrainerIds: [],
            // selectedTrainerIds,
            startTime,
            endTime
        }) 

        if (newCamp) {
            // generateTokenAndSetCookie(newUser._id, res)
            await newCamp.save();

            res.status(201).json({
                campId: newCamp._id,
                traineeIds: newUser.traineeIds,
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
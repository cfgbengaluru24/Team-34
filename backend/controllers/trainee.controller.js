const Trainee = require('../models/trainee.models.js');

exports.createTrainee = async (req, res) => {
    try {
        const { fullname, age, location, emailId, mobile, gender, campId } = req.body;
        if (!fullname || !age || !location || !emailId || !mobile || !gender || !campId) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const newTrainee = new Trainee({
            fullname,
            age,
            location,
            emailId,
            mobile,
            gender,
            campId
        });
        await newTrainee.save();

        res.status(201).json({
            traineeId: newTrainee._id,
            fullname: newTrainee.fullname,
            age: newTrainee.age,
            location: newTrainee.location,
            emailId: newTrainee.emailId,
            mobile: newTrainee.mobile,
            gender: newTrainee.gender,
            attended: newTrainee.attended,
            campId: newTrainee.campId
        });
    } catch (error) {
        console.log("Error in trainee controller", error.message);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};

exports.retrieveTrainee = async (req, res) => {
    try {
        const { traineeId } = req.params;
        if (!traineeId) {
            return res.status(400).json({ error: "Trainee ID is required" });
        }

        const trainee = await Trainee.findById(traineeId);
        if (trainee) {
            res.status(200).json({
                traineeId: trainee._id,
                fullname: trainee.fullname,
                age: trainee.age,
                location: trainee.location,
                emailId: trainee.emailId,
                mobile: trainee.mobile,
                gender: trainee.gender,
                attended: trainee.attended,
                campId: trainee.campId
            });
        } else {
            res.status(404).json({ error: "Trainee not found" });
        }
    } catch (error) {
        console.log("Error in retrieveTrainee controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

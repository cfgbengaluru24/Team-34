const Trainer = require('../models/trainer.model.js');

exports.createTrainer = async (req, res) => {
    try {
        const { fullname, age, location, emailId, skills, mobile, gender } = req.body;
    
        if (!fullname || !age || !location || !emailId || !skills || !mobile || !gender) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create a new trainer
        const newTrainer = new Trainer({
            fullname,
            age,
            location,
            emailId,
            skills,
            mobile,
            gender
        });

        // Save the new trainer to the database
        await newTrainer.save();

        // Return the created trainer
        res.status(201).json({
            trainerId: newTrainer._id,
            fullname: newTrainer.fullname,
            age: newTrainer.age,
            location: newTrainer.location,
            emailId: newTrainer.emailId,
            skills: newTrainer.skills,
            mobile: newTrainer.mobile,
            gender: newTrainer.gender
        });
    } catch (error) {
        console.log("Error in trainer controller", error.message);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};


exports.retrieveTrainer = async (req, res) => {
    try {
        const { trainerId } = req.params;
        if (!trainerId) {
            return res.status(400).json({ error: "Trainer ID is required" });
        }

        const trainee = await Trainer.findById(trainerId);
        if (trainee) {
            res.status(200).json({
                trainerId: newTrainer._id,
                fullname: newTrainer.fullname,
                age: newTrainer.age,
                location: newTrainer.location,
                emailId: newTrainer.emailId,
                skills: newTrainer.skills,
                mobile: newTrainer.mobile,
                gender: newTrainer.gender
            });
        } else {
            res.status(404).json({ error: "Trainee not found" });
        }
    } catch (error) {
        console.log("Error in retrieveTrainee controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

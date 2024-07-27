const book = require('../models/booking.models.js');

exports.createBooking = async (req, res) => {
    try {
        const { campId, trainerId } = req.body;
        console.log(req.body);
        const newBooking = new book({
            campId,
            trainerId,
        })
        console.log(newBooking);
        if (newBooking) {
            await newBooking.save();
            res.status(201).json({
                bookingId: newBooking._id,
                campId: newBooking.campId,
                trainerId: newBooking.trainerId,
            });
        } else {
            res.status(500).json({
            error: "invalid booking data"
        })
        }

    } catch (error) {
        console.log("Error in booking controller", error.message)
        res.status(500).json({
            error: "internal server error"
        })
    }
};


exports.retrieveBooking = async (req, res) => {
    try {
        const { bookingId } = req.body;
        console.log(req.body);
        // if (!mongoose.Types.ObjectId.isValid(bookingId)) {
        //     return res.status(400).json({ error: "Invalid booking ID" });
        // }
        const booking = await book.findById(bookingId);
        console.log(booking);
        
        if (booking) {
            console.log(booking);
            res.status(200).json(booking);
        } else {
            res.status(404).json({
                error: "Booking not found"
            });
        }
    } catch (error) {
        console.log("Error in booking controller", error.message);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};

exports.retrieveAllBooking = async (req, res) => {
    try {
        const bookings = await book.find();
        if (bookings) {
            res.status(200).json(bookings);
        } else {
            res.status(404).json({
                error: "Bookings not found"
            });
        }
    } catch (error) {
        console.log("Error in booking controller", error.message);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};

exports.acceptBooking = async (req, res) => {
    try {
        const { bookingId } = req.body;
        console.log(req.body);
        const booking = await book.findById(bookingId);
        if (booking) {
            booking.status = 1;
            await booking.save();
            res.status(200).json({
                message: "Booking accepted"
            });
        } else {
            res.status(404).json({
                error: "Booking not found"
            });
        }
    } catch (error) {
        console.log("Error in booking controller", error.message);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};


exports.cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.body;
        console.log(req.body);
        const booking = await book.findById(bookingId);
        if (booking) {
            booking.status = 2;
            await booking.save();
            res.status(200).json({
                message: "Booking accepted"
            });
        } else {
            res.status(404).json({
                error: "Booking not found"
            });
        }
    } catch (error) {
        console.log("Error in booking controller", error.message);
        res.status(500).json({
            error: "Internal server error"
        });
    }
};
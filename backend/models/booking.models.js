const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  campID:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Camp'
  },
  trainerID:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Trainer'
  },
  status:{
    type:Number,
    default:0,
  }
});


const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;

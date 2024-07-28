const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  campId:{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Camp'
  },
  trainerId:{
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

const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  emailId: { type: String, required: true, unique: true },
  skills :{type : String,required : true},
  mobile: { type: String, required: true, unique: true },
  gender: { type: String, required: true, enum: ['Male', 'Female'] },
});


const Trainer = mongoose.model('Trainer', trainerSchema);
module.exports = Trainer;

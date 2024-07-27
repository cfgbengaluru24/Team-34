const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  age: { type: Number, required: true },
  location: { type: String, required: true },
  emailId: { type: String, required: true, unique: true },
  mobile: { type: String, required: true, unique: true },
  gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
});


const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;

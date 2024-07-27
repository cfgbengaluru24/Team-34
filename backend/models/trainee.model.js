import mongoose from "mongoose";

const traineeSchema = new mongoose.Schema({
  // userId: {
  //   type: String,
  //   required: true,
  //   unique: true
  // },
  fullname: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true,
    unique: true
  },
  mobile: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['male', 'female']
  },
  attended: {
    type: Boolean,
    default: false
  },
  campId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Camp",
    required: true
  }
}, { timestamps: true });

const Trainee = mongoose.model("Trainee", traineeSchema);

export default Trainee;

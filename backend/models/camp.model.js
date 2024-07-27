import mongoose from "mongoose";

const campSchema = new mongoose.Schema({
//   campId: {
//     type: String,
//     required: true,
//     unique: true
//   },
  location: {
    type: String,
    required: true
  },
  traineeIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainee"
  }],
  trainerIds: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Trainer"
  }],
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  trainersSelected: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

const Camp = mongoose.model("Camp", campSchema);

export default Camp;
